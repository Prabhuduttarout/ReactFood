import React from "react";
import ResturantMenu from "./ResturantMenu";
import { useUserContext } from "../utils/UserContext";

const About = () => {
  // get userContext data
  const { loggedInUser } = useUserContext();
  // console.log(loggedInUser);

  return (
    <div>
      <h1>About</h1>
      <h3>User : {loggedInUser}</h3>
    </div>
  );
};

export default About;
