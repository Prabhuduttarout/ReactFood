import React from "react";
import { useUserContext } from "../utils/UserContext";

const Contact = () => {
  // get userContext data
  const user = useUserContext();
  return (
    <div>
      <h1>Contact</h1>
      <h3>User:{user}</h3>
    </div>
  );
};

export default Contact;
