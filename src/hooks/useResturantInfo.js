import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";

const useResturantInfo = (resId)=>{
    console.log('fetch');
    
    const [resInfo, setResInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        console.log('call');
        
        fetchResInfo();
    }, []);

    const fetchResInfo = async () => {
        const response = await fetch(MENU_URL + resId);

        const data = await response.json();
        setResInfo(data);
        setIsLoading(false)
    };
    return {resInfo,isLoading}
}

export default useResturantInfo