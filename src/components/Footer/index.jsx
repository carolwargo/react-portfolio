import React from "react";
import { MDBFooter} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faPhone,  faEnvelope} from "@fortawesome/free-solid-svg-icons";



export default function App() {
  return (
    <div className="footer" id="footer">
      <MDBFooter bgColor="light" className=" text-lg-start text-black ">
        <section className="d-flex justify-content-center justify-content-md-between p-3 border-top">
          <div className="d-flex justify-content-center align-items-center me-2 d-none d-lg-block">
            <span
              className="header-title p-1"
              style={{ marginLeft: "1rem", fontSize: "1.1rem", color: "black" }}
            >
              <span
                className="header-subtitle"
                style={{ fontSize: "1rem", color: "black" }}
              >
                Connect:{" "}
              </span>
            
            </span>
          </div>

          <div className="d-flex align-items-center" style={{ fontSize: '1rem' }}>
        <a href="https://www.linkedin.com/in/carol-wargo-35021baa" className="me-4 text-reset custom-hover">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black' }} />
        </a>
        <a href="https://github.com/carolwargo/" className="me-4 text-reset custom-hover">
          <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} />
        </a>
        <a href="mailto:carolwargo@gmail.com" className="me-4 text-reset custom-hover">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'black' }} />
        </a>
        <a href="tel:4437711726" className="me-4 text-reset custom-hover">
          <FontAwesomeIcon icon={faPhone} style={{ color: 'black' }} />
        </a>
      </div>
        </section>
      </MDBFooter>
    </div>
  );
}
