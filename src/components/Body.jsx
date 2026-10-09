import { useState } from "react";
// import { ResturantData } from "../utils/mockData";
import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import useResturantList from "../hooks/useResturantList";

// @ Body
const Body = () => {
  //=> useState
  // Fetch Data Logic inside Custom Hook
  const { resturantList, isLoading } = useResturantList();
  const [searchText, setSearchText] = useState("");
  const [isTopRatedRes, setIsTopRatedRes] = useState(false);

  // ! This responsible for store all resturant data into filterResList ,  filter Top Listed Resturant and reset
  const filterResList = resturantList.filter((resturant) => {
    const name = resturant?.info?.name?.toLowerCase() || "";
    const matchesSearch = name.includes(searchText.trim().toLowerCase());
    const matchesRating = isTopRatedRes
      ? (resturant?.info?.avgRating ?? 0) > 4.3
      : true;
    return matchesSearch && matchesRating;
  });

  console.log(resturantList);

  //=> HOC
  const ResCardWithLabel = withPromotedLabel(ResturantCard);

  // => Loading State
  if (isLoading)
    return (
      <div className="res-container" style={{ marginTop: "2.5rem" }}>
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <Shimmer key={i} cardLayout="res-card" />
          ))}
      </div>
    );

  return (
    <div className="body flex flex-col py-4 px-10 gap-6">
      <div className="filter flex gap-5">
        <div>
          <input
            type="search"
            className="searchInput "
            value={searchText}
            placeholder="Resturant Name"
            onChange={(e) => setSearchText(e.target.value)}
          />
          {/* <button
            className="search-btn cursor-pointer py-1 px-3 bg-white text-sm font-semibold rounded-sm outline-0 border border-gray-500 transition-all duration-500 hover:bg-blue-950 hover:text-white"
            style={{ marginLeft: "10px" }}
            onClick={handelSearch}
          >
            Search
          </button> */}
        </div>
        <button
          className="filter-btn cursor-pointer py-1 px-3 bg-white text-sm font-semibold rounded-sm outline-0 border border-gray-500 transition-all duration-500 hover:bg-blue-950 hover:text-white"
          onClick={() => setIsTopRatedRes(true)}
        >
          Top Rated Resturant
        </button>
        <button
          className="filter-btn reset"
          onClick={() => setIsTopRatedRes(false)}
        >
          Reset
        </button>
      </div>

      <div className="res-container">
        {filterResList.length === 0 ? (
          <h1>No Resturant Found !</h1>
        ) : (
          filterResList.map((resturant) =>
            resturant?.info?.veg ? (
              <ResCardWithLabel
                key={resturant?.info?.id}
                resturant={resturant?.info}
              />
            ) : (
              <ResturantCard
                key={resturant?.info?.id}
                resturant={resturant?.info}
              />
            ),
          )
        )}
      </div>
    </div>
  );
};

export default Body;
