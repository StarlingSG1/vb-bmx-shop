import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { loginUser, verifyToken } from "../api/auth/auth";

const UserContext = React.createContext({ user: null });
UserContext.displayName = "UserContext";

const UserContextProvider = ({ children }) => {
  const [articleId, setArticleId] = useState(null);
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [panier, setPanier] = useState([]);
  const navigate = useRouter();

  const loginTheUser = async (payload) => {
    setLoading(true);
    setStatus("pending");
    const user = await loginUser(payload);
    // if user, set token in localstorage
    if (user) {
      localStorage.setItem("vb-bmx-token", user.token);
    }
    setUser(user);
    setStatus("connected");
    setLoading(false);
    navigate.push("/");
  };

  const verifyTheToken = async () => {
    setLoading(true);
    const userToken = await verifyToken();
    if (userToken) {
      
        setUser(userToken.user);
        setStatus("connected");
        setLoading(false);
      }
    else{
      setLoading(false);
    }
  }


  useEffect(() => {
    verifyTheToken();
  }, []);

  const stateValues = useMemo(
    () => ({
      user,
      loading,
      setLoading,
      loginTheUser,
      status,
      articleId,
      panier,
      verifyTheToken,
      setPanier,
      setStatus,
      setArticleId,
    }),
    [user, loading, panier, loginTheUser, setLoading, verifyTheToken, status, articleId]
  );

  return (
    <UserContext.Provider value={stateValues}>{children}</UserContext.Provider>
  );
};
const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("Context was used outside of its Provider");
  }

  return context;
};

export { UserContextProvider, useUserContext, UserContext };
