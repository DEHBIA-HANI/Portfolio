import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.webp";

const Header = () => {
  const [navVisible, setNavVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [visitedSections, setVisitedSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const sections = ["about", "projets", "competences", "contact"];

      // Met à jour l'élément actif en fonction du défilement
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            currentScroll >= offsetTop &&
            currentScroll < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            setVisitedSections((prev) => new Set(prev).add(section)); // Ajoute la section à l'ensemble des sections visitées
          }
        }
      });

      // Cache ou montre la navbar selon le défilement
      if (currentScroll > lastScroll && currentScroll > 60) {
        setNavVisible(false);
      } else if (currentScroll < lastScroll) {
        setNavVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  // Fonction pour faire défiler en douceur vers une section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="navbar"
      style={{ opacity: navVisible ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      <header>
        <nav>
          <img src={logo} alt="logo Dehbia hachi" />
          <ul>
            <li>
              <a
                href="#about"
                className={`nav-link ${
                  activeSection === "about" ? "nav-active" : ""
                } ${visitedSections.has("about") ? "visited" : ""}`}
                onClick={() => {
                  scrollToSection("about");
                  setVisitedSections((prev) => new Set(prev).add("about")); // Ajoute à la section visitée
                }}
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#projets"
                className={`nav-link ${
                  activeSection === "projets" ? "nav-active" : ""
                } ${visitedSections.has("projets") ? "visited" : ""}`}
                onClick={() => {
                  scrollToSection("projets");
                  setVisitedSections((prev) => new Set(prev).add("projets")); // Ajoute à la section visitée
                }}
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#competences"
                className={`nav-link ${
                  activeSection === "competences" ? "nav-active" : ""
                } ${visitedSections.has("competences") ? "visited" : ""}`}
                onClick={() => {
                  scrollToSection("competences");
                  setVisitedSections((prev) =>
                    new Set(prev).add("competences")
                  ); // Ajoute à la section visitée
                }}
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${
                  activeSection === "contact" ? "nav-active" : ""
                } ${visitedSections.has("contact") ? "visited" : ""}`}
                onClick={() => {
                  scrollToSection("contact");
                  setVisitedSections((prev) => new Set(prev).add("contact")); // Ajoute à la section visitée
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
