import React from "react";
import logo from "../assets/images/logo.png";
import Content from "./Content";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <img src={logo} alt="logo Dehbia hachi" />
          <ul>
            <li>
              <NavLink
                to="/home"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                À propos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projet"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/compétences"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Compétences
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <Content />
      </header>
    </div>
  );
};

export default Header;
