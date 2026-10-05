import { useEffect, useState } from "react";
import { ResturantData } from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

// @ Body
const Body = () => {
  //=> useState
  const [resturantList, setResturantList] = useState([]);
  const [filterResList, setFilterResList] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  // ! Fetch Top LIsted Resturant
  const fetchTopResList = () => {
    console.log(resturantList);

    const topResturant = filterResList.filter(
      (resturant) => resturant?.info.avgRating >= 4.3,
    );
    setFilterResList(topResturant);
  };

  // ! Search Resturant Name
  const handelSearch = () => {
    if (searchText === "") {
      setFilterResList(resturantList);
    } else {
      console.log(filterResList);

      const fltrList = filterResList.filter((res) =>
        res?.info.name.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilterResList(fltrList);
    }
  };
  return (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="search"
            className="searchInput"
            value={searchText}
            placeholder="Resturant Name"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            style={{ marginLeft: "10px" }}
            onClick={handelSearch}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={fetchTopResList}>
          Top Rated Resturant
        </button>
        <button
          className="filter-btn reset"
          onClick={() => setFilterResList(resturantList)}
        >
          Reset
        </button>
      </div>

      <div className="res-container">
        {filterResList.length === 0
          ? Array(9)
              .fill(null)
              .map((_, i) => <Shimmer key={i} cardLayout="res-card" />)
          : filterResList.map((resturant) => (
              <ResturantCard
                key={resturant?.info?.id}
                resturant={resturant?.info}
              />
            ))}
      </div>
    </div>
  );
};

export default Body;
