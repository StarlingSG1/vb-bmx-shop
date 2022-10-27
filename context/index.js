import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { loginUser, verifyToken } from "../api/auth/auth";
import { toast } from "react-toastify";

const UserContext = React.createContext({ user: null });
UserContext.displayName = "UserContext";

const UserContextProvider = ({ children }) => {
  const [articleId, setArticleId] = useState(null);
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [panier, setPanier] = useState([]);
  const [redirection, setRedirection] = useState(false);
  const [redirectionAdmin, setRedirectionAdmin] = useState(false);
  const [noLogged, setNoLogged ] = useState(true);
  const navigate = useRouter();

  const loginTheUser = async (payload, token) => {
    setLoading(true);
    setStatus("pending");
    payload.captcha = token
    const user = await loginUser(payload);
    // if user, set token in localstorage
    if (!user.error) {
      localStorage.setItem("vb-bmx-token", user.token);
      setUser(user);
    setStatus("connected");
    setLoading(false);
    navigate.push("/");
    }else {
      toast.error(user.message);
      setStatus("error");
      setLoading(false);
    }
    
  };

  const verifyTheToken = async () => {
    setLoading(true);
    const userToken = await verifyToken();
    if (userToken) {
        setUser(userToken.user);
        if(userToken?.user?.role === "ADMIN" || userToken?.user?.role === "SUPERADMIN") {
          setRedirectionAdmin(false);
        } else{
          setRedirectionAdmin(true);
        }
        setNoLogged(false)
        setStatus("connected");
        setLoading(false);
      }
    else{
      setNoLogged(true)
      setRedirectionAdmin(true);
      setRedirection(true);
      setLoading(false);
    }



  }


  useEffect(() => {
    verifyTheToken();
  }, []);

  const stateValues = useMemo(
    () => ({
      user,
      setUser,
      loading,
      redirection,
      redirectionAdmin,
      noLogged,
      setLoading,
      loginTheUser,
      status,
      articleId,
      panier,
      verifyTheToken,
      setPanier,
      setStatus,
      setArticleId,
      setNoLogged,
    }),
    [user, loading, noLogged,redirection, redirectionAdmin, panier, setNoLogged, setUser, setLoading, verifyTheToken, status, articleId]
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
