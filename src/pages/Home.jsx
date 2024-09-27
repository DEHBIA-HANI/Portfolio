import React from "react";
import portrait from "../assets/images/Dehbia1.webp";
import Projet from "./Projet";

const Home = () => {
  return (
    <div>
      <main>
        <section className="header_container">
          <div className="part_left">
            <h1>Bonjour ,</h1>
            <h2>Je suis Dehbia Hachi</h2>

            <p>
              Développeuse front-end diplômée, je me suis reconvertie après 6
              ans comme infirmière. Passionnée par le web, j’allie rigueur et
              créativité pour concevoir des interfaces performantes et
              esthétiques, avec une attention particulière à l’expérience
              utilisateur.
            </p>
          </div>
          <div className="part_right">
            <img src={portrait} alt="portrait Dehbia Hachi" />
          </div>
        </section>
        <Projet />
      </main>
    </div>
  );
};

export default Home;
