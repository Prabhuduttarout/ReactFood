import { Link } from "react-router";
import { CDN_URL } from "../utils/constant";

// @ Resturant Card
const ResturantCard = (props) => {
  const { id, cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    props.resturant;
  const allCuisines = cuisines.join(", ");
  return (
    <Link
      to={`/resturant/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="res-card">
        <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
        <div className="card-body">
          <div>
            <h3>{name}</h3>
            <h5 style={{ marginTop: "10px" }}>
              {allCuisines.length > 50
                ? allCuisines.slice(0, 45) + " ..."
                : allCuisines}
            </h5>
            <h5 style={{ marginTop: "10px" }}>{costForTwo}</h5>
          </div>
          <div className="card-footer">
            <h5>{avgRating}⭐</h5>
            <h5>{sla?.slaString}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResturantCard;

// => HOC
export function withPromotedLabel(ResturantCard) {
  return (props) => {
    return (
      <div style={{ position: "relative" }}>
        <h4
          style={{
            position: "absolute",
            padding: "2px 4px",
            backgroundColor: "#000",
            color: "#FFF",
            borderBottomRightRadius: "5px",
          }}
        >
          Promoted
        </h4>
        <ResturantCard {...props} />
      </div>
    );
  };
}
