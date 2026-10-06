import { CDN_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantInfo from "../hooks/useResturantInfo";

const ResturantMenu = () => {
  const { resId } = useParams();

  // Fetch Data Logic inside Custom Hook
  const resturantInfo = useResturantInfo(resId);

  if (resturantInfo === null)
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
  console.log(resturantInfo);
  const {
    name,
    cuisines,
    labels,
    avgRating,
    totalRatingsString,
    sla,
    costForTwoMessage,
  } = resturantInfo.data.cards[2].card.card.info;

  const { itemCards } =
    resturantInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
      .card;
  console.log(itemCards);

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
      <div className="menu-list-container">
        {itemCards.map((item) => {
          const { id, name, price, itemAttribute, imageId } = item.card.info;
          const vegClassifier = itemAttribute.vegClassifier;
          return (
            <div className="menu-items" key={id}>
              <div className="menu-details">
                <div
                  className={`veg-nonveg-container ${vegClassifier === "VEG" ? "green" : "red"}`}
                >
                  {vegClassifier === "VEG" ? "🟢" : "🔴"}
                </div>
                <h4>{name}</h4>
                <p className="menu-text">₹ {Math.floor(price / 100)}</p>
                <p className="menu-text" style={{ color: "#6f6f6f" }}>
                  {itemAttribute?.portionSize}
                </p>
              </div>
              <img className="menu-img" src={CDN_URL + imageId} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResturantMenu;
