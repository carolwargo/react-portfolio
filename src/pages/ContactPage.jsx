import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MeWhite from "../assets/images/MeWhite.png";
import White from "../assets/images/LandScape/White.png";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k9br2bn", "template_cbcuf3i", form.current, {
        publicKey: "istqPyzB2IlqKLona",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className="home"
    >
      <div
        className="contact"
        id="contact"
        style={{
          position: "relative", // Ensure the parent div has relative positioning
          backgroundImage: `url(${White})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundOpacity: "0.5",
        }}
      >
        <div
          className="white-mask"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, .3)", // White color with 70% opacity
            zIndex: 0, // Set zIndex to 0 to position it below the content
          }}
        ></div>

        {/* CONTENT START */}
        <div
          className="w3-content w3-padding-16"
          style={{
            position: "relative", // Ensure the content div has relative positioning
            zIndex: 1, // Set zIndex to 1 to position it above the white mask
          }}
        >
          <div className="container-fluid w3-margin-top">
            <div
              className=" bg-white text-black"
              style={{ borderRadius: "5px" }}
            >
              <div className="row justify-content-center align-items-center">
               
                <div className="col-lg-7">
               
                  <img
                    src={MeWhite}
                    alt="me"
                    style={{ width: "100%" }}
                    className=""
                  />
                </div>
                <div className="col-lg-5 text-center justify-content-center align-items-center px-3">
  <div className="w3-display-container margin-top" style={{ display: "flex", alignItems: "center" }}>
    <div className="w3-container  w3-padding-large">
      <h5>THANKS FOR VISITING!</h5>
      <p >
        <em>
          If you have any questions, inquiries, or just want to say hello, I'd love to hear from you!
        </em>
      </p>
    
      <div className="justify-content-center" style={{ display: "flex" }}>
        <p  className="text-center">
          <a href="mailto:carolwargo.dev@gmail.com" alt="me" style={{ color: 'black' }}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="fa-fw w3-large mx-1"
            />
          </a>
        </p>
        <p  className="text-center">
          <a href="tel:+4437711726" style={{ color: 'black' }}>
            <FontAwesomeIcon
              icon={faPhone}
              className="fa-fw w3-large mx-1"
            />
          </a>
        </p>
        <p  className="text-center">
          <a href="https://github.com/carolwargo" style={{ color: 'black' }}>
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-fw w3-large mx-1"
            />
          </a>
        </p>
        <p  className="text-center">
          <a href="https://www.linkedin.com/in/carol-wargo-35021baa/" style={{ color: 'black' }}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-fw w3-large mx-1"
            />
          </a>
        </p>
      </div>
    </div>
  </div>
<br />
                  <div className="w3-display-container bg-white">
                    <div className="w3-content w3-padding-large w3-justify align-items-center">
                      <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                          <label style={{ fontSize: "14px" }}>Name</label>
                          <input
                            type="text"
                            name="user_name"
                            placeholder="Name"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <label style={{ fontSize: "14px" }}>Email</label>
                          <input
                            type="email"
                            name="user_email"
                            placeholder="email@mail.com"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <label style={{ fontSize: "14px" }}>Message</label>
                          <textarea
                            name="message"
                            className="form-control"
                            placeholder="type message..."
                          />
                        </div>
                        <div className="w3-margin-top">
                          <input
                            type="submit"
                            value="Send"
                            className="w3-button px-4 w3-round-xxlarge text-white"
                            style={{backgroundColor:'#FF385C'}}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
