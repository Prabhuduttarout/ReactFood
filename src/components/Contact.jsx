import React from "react";
import { useUserContext } from "../utils/UserContext";

const Contact = () => {
  // get userContext data
  const { loggedInUser } = useUserContext();
  return (
    <div>
      <h1>Contact</h1>
      <h3>User:{loggedInUser}</h3>
    </div>
  );
};

export default Contact;
