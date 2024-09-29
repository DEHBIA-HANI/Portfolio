import React from "react";
import Card from "./Card";
import fichier from "../fichier.json";

const Projet = () => {
  return (
    <div className="projectCard">
      <h2>Projets</h2>
      <div className="containerCard">
        {fichier.map((projet) => (
          <Card key={projet.id} projet={projet} />
        ))}
      </div>
    </div>
  );
};

export default Projet;
