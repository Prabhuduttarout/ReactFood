import React from "react";
import ResturantMenu from "./ResturantMenu";
import { useUserContext } from "../utils/UserContext";

const About = () => {
  // get userContext data
  const user = useUserContext();
  return (
    <div>
      <h1>About</h1>
      <h3>User : {user}</h3>
    </div>
  );
};

export default About;
