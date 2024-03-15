import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MeWhite from "../assets/images/MeWhite.png";
const ContactPage = () => {
  return (
    <div className="contact-page" id="contact-page">
      <div className="w3-content w3-container w3-padding-64"> 
        {/* Start Contact section */}
        <div className="container-fluid py-2 bg-white text-black ">
          <div className="w3-content w3-justify w3-text-black w3-padding-32">
            <h1>
              <b>CONTACT ME.</b>
            </h1>
            <hr />
            <div className="row w3-justify align-items-center">
              <div className="col-lg-6">
             
            <img src={MeWhite} alt="me" style={{width:'75%'}}/>
              </div>
              <div className="col-lg-6">
                <div className="container">
                <h3>THANK YOU FOR VISITING!</h3>
                <p>
                  <em>
                    If you have any questions, inquiries, or just want to say
                    hello, I'd love to hear from you!
                  </em>
                </p>
                  <h4 className="fw-lighter">Contact Information</h4>

                  <p>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="fa-fw w3-large w3-margin-right"
                    />{" "}
                    Email:{" "}
                    <a href="mailto:carolwargo.dev@gmail.com" alt="me">
                      email
                    </a>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="fa-fw w3-large w3-margin-right"
                    />{" "}
                    Phone: <a href="tel:+4437711726">+443-771-1726</a>
                  </p>
               

                <p>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="fa-fw w3-large w3-margin-right"
                  />{" "}
                  GitHub:{" "}
                  <a href="https://github.com/carolwargo">Github Page</a>
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="fa-fw w3-large w3-margin-right"
                  />{" "}
                  LinkedIn:{" "}
                  <a href="https://www.linkedin.com/in/carol-wargo-35021baa/">
                    LinkedIn Profile
                  </a>
                </p>
              </div>
              </div>
            </div>
            <br />
          </div>
        </div>
        {/* End Contact section */}
      </div>
    </div>
  );
};

export default ContactPage;
