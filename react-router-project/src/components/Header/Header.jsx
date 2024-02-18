import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const main = {
    backgroundColor: "green",
    color: "black",
  };
  return (
    <div>
      <h1>This is the Header section</h1>
      <nav>
        <NavLink to={"/"} className="">
          <Link to="/">Home</Link>
        </NavLink>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gitInfo">Git Info</Link>
      </nav>
    </div>
  );
}

export default Header;
