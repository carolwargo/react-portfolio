import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div className="footer" id="footer">
      <section className="d-flex pt-3 justify-content-center border-top">
        <p className="me-4 ">Carol Wargo</p>
        <a href="https://www.linkedin.com/in/carol-wargo-35021baa"
          className="me-3">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "black" }} />
        </a>
        <a href="https://github.com/carolwargo/" className="me-3">
          <FontAwesomeIcon icon={faGithub} style={{ color: "black" }} />
        </a>
        <a href="mailto:carolwargo@gmail.com" className="me-3">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "black" }} />
        </a>
        <a href="tel:4437711726" className="me-3">
          <FontAwesomeIcon icon={faPhone} style={{ color: "black" }} />
        </a>
        <a href="https://carolwargo.github.io/react-portfolio/"
          className="me-3" >
          <FontAwesomeIcon icon={faGlobe} style={{ color: "black" }} />
        </a>
      </section>
    </div>
  );
}
