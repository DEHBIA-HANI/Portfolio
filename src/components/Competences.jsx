import React from "react";
import TechBox from "./TechBox";

const Competences = () => {
  return (
    <div className="competence-container">
      <h2>Compétences</h2>
      <div className="tech-list">
        <TechBox
          title="HTML"
          description={
            <>
              <strong> Avancé :</strong> Création de sites web élégants et
              dynamiques avec des animations captivantes.
            </>
          }
          tech="html"
        />
        <TechBox
          title="JavaScript"
          description={
            <>
              {" "}
              <strong>Intermédiaire : </strong>Donnez vie au web avec des
              interactions fluides et dynamiques.
            </>
          }
          tech="javascript"
        />
        <TechBox
          title="React"
          description={
            <>
              {" "}
              <strong>Intermédiaire :</strong> Développement d'applications web
              rapides et réactives.
            </>
          }
          tech="react"
        />
        <TechBox
          title="Sass"
          description={
            <>
              <strong>Avancé : </strong>Stylisation de projets avec Sass pour un
              design moderne et efficace.
            </>
          }
          tech="sass"
        />
        <TechBox
          title="Back-End avec Node.js et MongoDB"
          description={
            <>
              <strong>Intermédiaire :</strong> J'ai acquis des compétences dans
              la création de serveurs avec Node.js et Express, intégrant MongoDB
              via Mongoose pour optimiser les opérations CRUD.
            </>
          }
          tech="Back-End avec Node.js et MongoDB"
        />
      </div>
    </div>
  );
};

export default Competences;
