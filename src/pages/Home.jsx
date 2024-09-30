import React from "react";
import Projet from "../components/Projet";
import Competences from "../components/Competences";
import Contact from "../components/Contact";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <main>
        <section id="about" className="about_section">
          <About />
        </section>
        <section id="projets" className="projects_section">
          <Projet />
        </section>
        <section id="competences" className="competences_section">
          <Competences />
        </section>
      </main>
      <footer id="contact" className="contact_section">
        <Contact />
      </footer>
    </div>
  );
};

export default Home;
