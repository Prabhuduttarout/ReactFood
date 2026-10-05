import { useRouteError } from "react-router";

const Error = () => {
  const errData = useRouteError();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Opps !!!</h1>
      <h2>
        {errData.status} {errData.statusText}
      </h2>
      <p>{errData.error.message}</p>
    </div>
  );
};

export default Error;
