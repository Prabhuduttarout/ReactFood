import { createContext, useContext } from "react";

const UserContext = createContext({
    loggedInUser:"Default User"
})

// Coustome hook 
export function useUserContext(){
    const data = useContext(UserContext);
    return data;
}

export default UserContext;