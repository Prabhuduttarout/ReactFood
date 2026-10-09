import { CDN_URL } from "../utils/constant";

function ResturantMenuItem({ itemData }) {
  const { name, price, itemAttribute, imageId } = itemData;
  const vegClassifier = itemAttribute?.vegClassifier;
  return (
    <div className="menu-items">
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
      <div style={{ position: "relative" }}>
        <img className="menu-img" src={CDN_URL + imageId} />
        <button className="addBtn">ADD+</button>
      </div>
    </div>
  );
}

export default ResturantMenuItem;
