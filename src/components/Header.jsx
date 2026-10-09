import { NavLink } from "react-router";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

// @ Header
const Header = () => {
  // Getting Context Value
  const { loggedInUser } = useContext(UserContext);
  const online = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online:{online ? "🟢" : "🔴"}</li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/grocery">Grocery App</NavLink>
          </li>
          <li>Cart</li>
          <li>
            User:<b>{loggedInUser}</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
