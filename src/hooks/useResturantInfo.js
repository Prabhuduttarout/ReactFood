import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";

const useResturantInfo = (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchResInfo();
    }, []);

    const fetchResInfo = async () => {
        const response = await fetch(MENU_URL + resId);

        const data = await response.json();
        setResInfo(data);
    };
    return resInfo
}

export default useResturantInfo