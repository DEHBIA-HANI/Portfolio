import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef(); // Référence au formulaire

  const sendEmail = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Utiliser EmailJS pour envoyer le formulaire
    emailjs
      .sendForm(
        "service_vw1lkil",
        "template_ypf2eel",
        form.current,
        "7gdwIdx4XYhDQ4hA6"
      )
      .then(
        (result) => {
          alert("Votre message a été envoyé avec succès !");
          form.current.reset(); // Réinitialiser le formulaire après l'envoi
        },
        (error) => {
          alert("Une erreur s'est produite. Veuillez réessayer.");
          console.error(error);
        }
      );
  };
  return (
    <div className="container-contact">
      <h2>Contact</h2>
      <div className="formContact">
        <form ref={form} onSubmit={sendEmail}>
          <div className="name-container">
            <label htmlFor="name" className="name-label">
              Nom
            </label>
            <input
              type="text"
              id="name"
              required
              autoComplete="off"
              className="name-input"
              name="name"
            />
            <label htmlFor="email" className="email-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="email-input"
              name="email"
            />
          </div>

          <label htmlFor="subject">Objet</label>
          <input type="text" id="subject" name="subject" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
          <div className="submit-container">
            <input type="submit" className="btn" value="Envoyer" />
          </div>
        </form>
        <div className="contact" id="subject">
          <div>
            <i>
              {" "}
              <FontAwesomeIcon icon={faMobileScreenButton} />{" "}
              <span className="text"> phone</span>
            </i>
            <p> +33 6 59 57 39 43</p>
          </div>
          <div>
            <i>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <span className="text"> email</span>
            </i>
            <p>dabihachi85@gmail.com</p>
          </div>
          <div>
            <i>
              {" "}
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <span className="text"> address</span>
            </i>
            <p>
              Lagny-sur-Marne 77400
              <br />
              France
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
