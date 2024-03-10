import React from "react";
import JATE from '../../assets/images/Portfolio/JATE.png'
import Notes from '../../assets/images/Portfolio/Notes.png'
import SVG from '../../assets/images/Portfolio/SVG.png'
import Desk from '../../assets/images/Portfolio/Desk.png'
import { NavLink } from "react-router-dom";
//import { FaGithub } from "react-icons/fa";
const Test = () => {

    return (
        <div>
        <div>
       
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#backend" className="w3-bar-item w3-button"><b>CW</b>PORTFOLIO</a>
       
          <div className="w3-right w3-hide-small">
            <a href="#projects" className="w3-bar-item w3-button">Projects</a>
            <a href="#components" className="w3-bar-item w3-button">Components</a>
            <a href="#graphics" className="w3-bar-item w3-button">Graphics</a>
          </div>
        </div>


        <div className="w3-content w3-padding" style={{maxWidth:"1564px"}}>
        <div className="w3-container w3-padding-32" id="about">
    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
  

  <div className="w3-row-padding w3-grayscale">
    <div className="w3-col l3 m6 w3-margin-bottom">
    <img src={JATE}alt="John" style={{width:"100%"}}/>
    <div className="w3-container w3-content shadow w3-margin-bottom w3-margin-top">  
    <hr />
    <div className="w3-light-gray p-2 w3-margin-bottom">
      <h4 className="fw-light">Text Editor In Chief</h4>
      </div>
      <p><i>Text_Editor-In-Chief is a browser-based text editor that allows Users to create and edit text documents seamlessly.</i></p>
      <hr />
      <p className="w3-opacity">click to view repository</p>
      <p><button href="https://github.com/carolwargo/Text_Editor-in-Chief"
      className="w3-button w3-light-grey w3-block"> Github</button></p></div>
    </div>



    
    <div className="w3-col l3 m6 w3-margin-bottom">
    <img src={Desk} alt="John" style={{width:"100%"}}/>
    <div className="w3-container w3-content shadow w3-margin-bottom w3-margin-top">
    <hr />
    <div className="w3-light-gray p-2 w3-margin-bottom">
      <h4 className="fw-light">Desk Jockey Dayplanner</h4>
      </div>
      <p><i>Desk-Jockey-Dayplanner is a calendar application that allows a User to save events, for each hour of the work day.</i></p>
      <hr />
      <p className="w3-opacity">click to view repository</p>
      <p><button href="https://carolwargo.github.io/Desk_Jockey-dayplanner/"
      className="w3-button w3-light-grey w3-block"> Github</button></p>
      </div>
      </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
    <img src={SVG} alt="John" style={{width:"100%"}}/>
    <div className="w3-container w3-content shadow w3-margin-bottom w3-margin-top">  
    <hr />
    <div className="w3-light-gray p-2 w3-margin-bottom">
      <h4 className="fw-light">'SVGenie'</h4>
      </div>
      <p> <i>"SV.Genie is a Node.js CLI that takes in user input, such as color, shape & text to generate a logo & save it as an SVG file.</i>",
    </p>
    <hr />
    <p className="w3-opacity">click to view repository</p>
      <p><button href="https://github.com/carolwargo/SV-Genie"
      className="w3-button w3-light-grey w3-block"> Github</button></p></div>
   </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
    <img src={Notes} alt="John" style={{width:"100%"}}/>
    <div className="w3-container w3-content shadow w3-margin-bottom w3-margin-top">
    <hr />
    <div className="w3-light-gray p-2 w3-margin-bottom">
      <h4 className="fw-light">Forget-Me-NOTES</h4>
      </div>
      <p><i>Forget-Me-NOTES is a note taking application used to WRITE, SAVE and DELETE tasks we can't afford to forget.</i></p>
      <hr />
      <p className="w3-opacity">click to view repository</p>
      <p><button href='https://github.com/carolwargo/forget-me-NOTES' 
      className="w3-button w3-light-grey w3-block"> Github</button></p>
    </div>
  </div>
  </div>
        </div>
      </div>
      
      <footer className="w3-container w3-padding-48 text-center bg-white">
        <NavLink
        to={"/resume"}
        >
          <button className="w3-button w3-black w3-disabled w3-padding-medium">
            Previous
          </button>
          </NavLink>

          <NavLink
        to={"/sample-components"}
        >
          <button className="w3-button w3-black w3-padding-medium">
            Next »
          </button>
         </NavLink>
        </footer>
      </div>
    );
    }

export default Test;