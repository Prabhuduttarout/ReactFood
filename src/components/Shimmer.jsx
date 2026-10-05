function Shimmer({ cardLayout }) {
  return (
    <div className={`shimmer-card ${cardLayout}`}>
      <div className="res-logo" />
      <div className="card-body">
        <div></div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}

export default Shimmer;
