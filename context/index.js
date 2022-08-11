import React, { useContext, useMemo, useState } from "react";

const UserContext = React.createContext({user: null});
UserContext.displayName = 'UserContext';

const UserContextProvider = ({children}) => {
    const [articleId, setArticleId] = useState(null);

    
    const stateValues = useMemo(() => ({
        articleId,
        setArticleId
    }), [articleId]);

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