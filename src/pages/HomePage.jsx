import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MeWhite from "../assets/images/MeWhite.png";
import ResumeDownload from "../assets/ResumeDownload.pdf";

function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });
  return (
    <motion.div
    ref={ref}
    initial={{ y: -20, opacity: 0.5 }}
    animate={inView ? { y: 0, opacity: 1} : {}}
    exit={{ y: 20, opacity: 0.5 }}
    transition={{ duration: 0.8 }}
  >
    <div>
      <header>
        <div className="row align-items-center w3-margin-top w3-padding-32">
          <div className="col-lg-5 align-items-center">
            <img
              src={MeWhite}
              className="w3-image w3-round-xxlarge w3-padding-large w3-padding-24"
              style={{ display: "block", width: "100%" }}
              alt="Profile"

            />
          </div>
          <div className="col-lg-6 align-items-center justify-content-center">
            <div className="w3-container text-center" >
              <h1 className="w3-jumbo text-black">
                <b>Carol Wargo</b>
              </h1>
              <p>Full Stack Developer | UX Designer.</p>
              <button className="w3-button w3-black w3-padding-large w3-round-xxlarge">
                <a
                  className="button text-white w3-hover-opacity"
                  id="download"
                  download 
                  href={ResumeDownload}
                >
                  <i className="fa fa-download-alt"></i> Download Resume
                </a>
              </button>
              <br />
                 
              <div className="text-center w3-padding-16 w3-padding-large" style={{color:'#FF385C'}}>
              <p>NOTICE: I am adding to, and reconfiguring <b><i>'My Work'</i></b> in a big way... Lots of new stuff to come. Thanks in advance for your patience. </p>
              <br />
              <h4 className="text-black">Click to learn more about me professionally.           
        </h4>
              <button className="w3-button w3-text-light-grey w3-padding  w3-round-xxlarge mt-2" 
              style={{backgroundColor:'#FF385C'}}>
              <Link to="/about"
                  className="button text-white"
                  onClick={scrollToTop}
                >
                About Me
                </Link>
              </button>
       
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
