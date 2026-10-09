import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantInfo from "../hooks/useResturantInfo";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  const { resId } = useParams();

  // Fetch Data Logic inside Custom Hook
  const { resInfo, isLoading } = useResturantInfo(resId);
  // console.log(resInfo);

  // State for handel the show/hide acoordian
  const [expandAccIndx, setExpandAccIndx] = useState(0);

  if (isLoading)
    return (
      <div className="res-menu-container">
        <div className="menu-list-container">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <Shimmer cardLayout="menu-card" key={i} />
            ))}
        </div>
      </div>
    );

  const {
    name,
    cuisines,
    labels,
    avgRating,
    totalRatingsString,
    sla,
    costForTwoMessage,
  } = resInfo.data.cards[2].card.card.info;

  const categoryTypeOfMenu =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (typeCard) => typeCard.card.card["@type"].includes(".ItemCategory"),
    );
  // console.log(categoryTypeOfMenu);

  if (categoryTypeOfMenu.length === 0) {
    return <h1>No Items Found !!</h1>;
  }
  return (
    <div className="res-menu-container">
      <div className="res-hedaing">
        <div className="res-Deatils">
          <div>
            <h2>{name}</h2>
            <h5>{cuisines.join(", ")}</h5>
          </div>
          <div>
            <h3>{avgRating}</h3>
            <h5>{totalRatingsString}</h5>
          </div>
        </div>
        <div className="res-footer">
          <h4>{sla.slaString}</h4> <h4>{costForTwoMessage}</h4>
        </div>
        <p>{labels[1].message}</p>
      </div>
      <div className="accorian">
        {categoryTypeOfMenu.map((category, index) => {
          const { title, itemCards, categoryId } = category.card.card;
          return (
            // => Controlled Component
            <ResturantCategory
              key={categoryId}
              title={title}
              itemIndex={index}
              itemCards={itemCards}
              isAccOpen={expandAccIndx === index ? true : false}
              handelAccIndx={setExpandAccIndx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResturantMenu;
