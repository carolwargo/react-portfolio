import React from "react";
import JATE from '../../assets/images/Portfolio/JATE.png'
import Notes from '../../assets/images/Portfolio/Notes.png'
import SVG from '../../assets/images/Portfolio/SVG.png'
import Desk from '../../assets/images/Portfolio/Desk.png'
const Test = () => {

    return (
        <div>
        <div>
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#backend" className="w3-bar-item w3-button"><b>CW</b> DESIGN</a>
       
          <div className="w3-right w3-hide-small">
            <a href="#projects" className="w3-bar-item w3-button">Projects</a>
            <a href="#about" className="w3-bar-item w3-button">About</a>
            <a href="#contact" className="w3-bar-item w3-button">Contact</a>
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
  

  <div class="w3-row-padding w3-grayscale">
    <div class="w3-col l3 m6 w3-margin-bottom">
      <img src={JATE}alt="John" style={{width:"100%"}}/>
      <h3>John Doe</h3>
      <p class="w3-opacity">CEO & Founder</p>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
      <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
    <img src={Desk} alt="John" style={{width:"100%"}}/>
      <h3>Jane Doe</h3>
      <p class="w3-opacity">Architect</p>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
      <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
    <img src={SVG} alt="John" style={{width:"100%"}}/>
      <h3>Mike Ross</h3>
      <p class="w3-opacity">Architect</p>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
      <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
    <img src={Notes} alt="John" style={{width:"100%"}}/>
      <h3>Dan Star</h3>
      <p class="w3-opacity">Architect</p>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
      <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
  </div>
        </div>
      </div>
      </div>
    );
    }

export default Test;