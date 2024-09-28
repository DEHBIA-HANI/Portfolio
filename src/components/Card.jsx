import React from "react";
import Collapse from "./Collapse";
const Card = ({ projet }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };
  return (
    <div className="card">
      <img src={projet.cover} alt={projet.title} className="card_image" />
      <h3>{projet.title}</h3>
      {projet.release_date ? (
        <h5>Realisé le : {dateFormater(projet.release_date)}</h5>
      ) : null}
      <div className="languages">
        <h5>Technos :</h5>
        <ul className="languages-list">
          {projet.languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>
      <ul>
        <li>
          <a href={projet.site.link} target="_blank" rel="noopener noreferrer">
            Visiter le site
          </a>
        </li>
        <li>
          <a
            href={projet.site.gitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>

      <Collapse title="Description" msg={projet.description} />
    </div>
  );
};

export default Card;
