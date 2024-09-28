import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navVisible, setNavVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0); // Sauvegarde de la dernière position de défilement

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Si on descend, on cache la navbar
      if (currentScroll > lastScroll && currentScroll > 60) {
        setNavVisible(false);
      }
      // Si on monte, on affiche la navbar
      else if (currentScroll < lastScroll) {
        setNavVisible(true);
      }

      // Mettre à jour la dernière position de défilement
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyage lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <div
      className="navbar"
      style={{
        opacity: navVisible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
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
      </header>
    </div>
  );
};

export default Header;
