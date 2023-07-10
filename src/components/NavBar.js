import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            AnimeNation
            <i className="fas fa-"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/anime"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Anime
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Recommendation"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Recommendation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Community"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Community
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
