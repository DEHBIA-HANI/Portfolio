import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, msg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="info">
      <div className="titleDescription">
        <h4>{title}</h4>
        <i
          onClick={toggleOpen}
          style={{
            transform: isOpen ? "rotate(-180deg" : "rotate(90deg)",
            transition: "transforme 0.4s ease",
          }}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </i>
      </div>
      {isOpen && <p>{msg}</p>}
    </div>
  );
};
export default Collapse;
