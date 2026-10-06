import React from "react";

const GroceryApp = () => {
  return (
    <div style={{ width: "800px", margin: "auto", textAlign: "center" }}>
      <h1>
        <u>Grocery App</u>
      </h1>
      <h2>
        Asume This is simply a bib app inside our Food App. So For optimization
        we load the Grocery app only on Demand Using React (lazy & Suspense)
      </h2>
    </div>
  );
};

export default GroceryApp;
