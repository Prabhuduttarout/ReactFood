import { createContext, useContext } from "react";

const UserContext = createContext({
    loggedInUser:"Default User"
})

// Coustome hook 
export function useUserContext(){
    const{loggedInUser} = useContext(UserContext);
    return loggedInUser;
}

export default UserContext;