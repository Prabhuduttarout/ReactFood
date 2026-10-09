import React from "react";
import { NavLink } from "react-router";

function MyNavLink({ to, children }) {
  return (
    <li>
      <NavLink
        className="text-gray-600 hover:text-gray-900 aria-[current=page]:text-[#003e9b]"
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default MyNavLink;
