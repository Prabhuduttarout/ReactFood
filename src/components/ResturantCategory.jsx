import { useState } from "react";
import ResturantMenuItem from "./ResturantMenuItem";

function ResturantCategory({
  title,
  itemCards,
  isAccOpen,
  itemIndex,
  handelAccIndx,
}) {
  //   console.log(title, itemCards);

  //   => State is used here and it act as uncontroll component (item stay open when another item is opened )
  //   const [isAccOpen, setIsAccOpen] = useState(true);

  function handelClick() {
    if (isAccOpen) handelAccIndx(-1);
    else handelAccIndx(itemIndex);
    // console.log(isAccOpen, itemIndex);
  }
  return (
    <div className="accorian-item">
      <div className="accordian-heading" onClick={handelClick}>
        <h3>
          {title} ({itemCards.length})
        </h3>
        <span>{isAccOpen ? "⬆️" : "⬇️"}</span>
      </div>
      {isAccOpen && (
        <div className="menu-list-container">
          {console.log(itemCards.length)}
          {itemCards.map((item) => {
            return (
              <ResturantMenuItem
                key={item.card.info.id}
                itemData={item.card.info}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ResturantCategory;
