import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MeWhite from "../assets/images/MeWhite.png";
import ResumeDownload from "../assets/ResumeDownload.pdf";

function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (

    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}
    className="home"
    
    >
    <div className="home" id="home">
      <header>
        <div className="row align-items-center w3-margin-top w3-padding-24">
          <div className="col-lg-5">
            <img
              src={MeWhite}
              className="w3-image w3-round"
              style={{ display: "block", width: "100%" }}
              alt="Profile"
            />
          </div>
          <div className="col-lg-6">
            <div className="w3-container text-center" style={{ padding: "80px 16px" }}>
              <h1 className="w3-jumbo">
                <b>Carol Wargo</b>
              </h1>
              <p>Full Stack Developer | UX Designer.</p>
              <button className="w3-button w3-light-grey w3-padding-large">
                <a
                  className="button text-black"
                  id="download"
                  download 
                  href={ResumeDownload}
                >
                  <i className="fa fa-download"></i> Download Resume
                </a>
              </button>
              <br />
              <br />
              <br />
                 
              <div className="text-center w3-padding-16 w3-padding-large">
        <Link to="/about#about" onClick={scrollToTop}>
          <p>Follow the link to learn more about me professionally.           
          <i className="fa fa-arrow-right w3-hover-opacity w3-margin-left"></i>
          </p>
          </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    </motion.div>
  );
}

export default HomePage;
