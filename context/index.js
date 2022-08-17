import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { loginUser, verifyToken } from "../api/auth/auth";

const UserContext = React.createContext({user: null});
UserContext.displayName = 'UserContext';

const UserContextProvider = ({children}) => {
    const [articleId, setArticleId] = useState(null);
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useRouter()
    
    const loginTheUser = async (payload) => {
        console.log(payload)
        setLoading(true);
        setStatus("pending");

        const user = await loginUser(payload);
        // if user, set token in localstorage
        if (user) {
            localStorage.setItem("vb-bmx-token", user.token);
        }
        setUser(user);
        setStatus("success");
        setLoading(false);
        navigate.push("/");
    }

    const verifyTheToken = async () => {
        verifyToken();
    }

    useEffect(() => {verifyTheToken()}, [])


    const stateValues = useMemo(() => ({
        user,
        loading,
        status,
        loginTheUser,

        articleId,
        setArticleId
    }), [user, loading, status, loginTheUser, articleId, setArticleId]);

    return (
        <UserContext.Provider value={stateValues}>
            {children}
        </UserContext.Provider>
    )
}
const useUserContext = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('Context was used outside of its Provider');
    }

    return context;
};

export { UserContextProvider, useUserContext, UserContext}