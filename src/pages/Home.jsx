import React from "react";
//import Hero from "../components/Hero/index.jsx";
//import Header from '../components/Header/Main/Header.jsx';
import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import HomeIcons from "../components/Home/HomeIcons/HomeIcons.jsx";
import "../styles/links.css";
import HomeAbout from "../components/Home/HomeAbout/HomeAbout.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "../styles/links.css";

export default function HomePage() {
  return (
    <div className="home" id="home" >
        <HomeHeader/> 
       <HomeAbout/>
        <HomeIcons />

      
    
    <div className="w3-container w3-dark-grey w3-padding-32 text-center">
    <div className="row">
        <div className="col text-start"> {/* Adjust the width as needed */}
  <p  style={{color: 'whiteSmoke', textShadow:'0 0 2px pink'}}>Carol Wargo</p>
</div>

  <div className="col text-end">
    <section className="d-flex justify-content-end">
      <a href="https://www.linkedin.com/in/carol-wargo-35021baa" className="mx-1">
        <FontAwesomeIcon icon={faLinkedin} style={{ backgroundColor: 'cornflowerBlue', color:'whitesmoke' }} className=" p-2 hover-zoom rounded-5 shadow"/>
      </a>
      <a href="https://github.com/carolwargo/" className="mx-1">
        <FontAwesomeIcon icon={faGithub} style={{ backgroundColor: 'violet', color:'whitesmoke' }} className=" p-2 hover-zoom rounded-5 shadow"/>
      </a>
      <a href="mailto:carolwargo@gmail.com" className="mx-1">
        <FontAwesomeIcon icon={faEnvelope} style={{ backgroundColor: 'cornflowerBlue', color:'whitesmoke' }} className=" p-2 hover-zoom rounded-5 shadow"/>
      </a>
      <a href="tel:4437711726" className="mx-1">
        <FontAwesomeIcon icon={faPhone} style={{ backgroundColor: 'lightGreen', color:'whitesmoke' }} className=" p-2 hover-zoom rounded-5 shadow"/>
      </a>
      <a href="https://carolwargo.github.io/react-portfolio/" className="mx-1">
        <FontAwesomeIcon icon={faGlobe} style={{ backgroundColor: 'pink', color:'whitesmoke' }} className=" p-2 hover-zoom rounded-5 shadow"/>
      </a>
    </section>
  </div>
</div>
    <footer className="w3-container w3-dark-grey w3-padding-32 text-center">
          <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
            Previous
          </button>
          <button className="w3-button w3-black w3-padding-large w3-margin-bottom">
            Next »
          </button>
        </footer>
            </div>

</div>
   
  );
}
