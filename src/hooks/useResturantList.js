import { useEffect, useState } from "react";

const useResturantList=()=>{
    const [resturantList, setResturantList] = useState([]);
    const [filterResList, setFilterResList] = useState([]);

    
  //=> useEffect
  useEffect(() => {
    fetchResData();
    // console.log("useeffect");
  }, []);

  // ! Fetch All Resturant Data from Api
  const fetchResData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    );

    const data = await response.json();

    setResturantList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilterResList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  return [resturantList,filterResList];
}

export default useResturantList;