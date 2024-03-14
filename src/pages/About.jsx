import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import MeWhite from '../assets/images/MeWhite.png';
import LocationView from '../assets/images/LocationView.png';
import { HiOutlineArrowRight } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

export default function AboutPage() {
  return (
    <div>
    <div className="w3-content w3-container w3-padding-64" id="about">
        <div className="w3-content w3-container ">
          <div className="row justify-content-center align-items-center  w3-margin-top">
            <div className="col-lg-6 w3-padding-large">
              <h1 className="text-center fw-light"><b>ABOUT ME.</b></h1>
              <h5 className="text-center fw-light">"I'm Carol Wargo, and welcome to my corner of the internet! Join me as I share insights into who I am professionally and the years of experience that shape what I do."</h5>
              <br />
              <p className="text-center fw-light"><em>"My passion lies in utilizing creative design to drive innovative solutions through technology. With a distinctive blend of skills and experience, I am a seasoned full-stack software developer and UX designer deeply committed to collaboration, bringing together diverse perspectives to tackle challenges effectively. With over 20 years of experience in business management & strategic development, I bring a wealth of knowledge and expertise to every project I undertake."</em></p>
            </div>
            <div className="col-lg-6 w3-padding-large">
              <img src={MeWhite} className="w3-round w3-image w3-opacity w3-hover-opacity-off mx-auto d-block" alt="Me" width="500" height="333" />
            </div>
          </div>
        </div>
<br />
<br />
<br />
        {/* Technical Proficiencies */}
        <div className="w3-content w3-container ">
          <h2 className=""><strong>SKILLS & PROFICIENCIES.</strong></h2>
          <hr />
          <br />
          <br />
         
              <h3><strong>Technical Proficiencies.</strong></h3>
              <br />
              <p className="w3-wide text-black" style={{fontSize:'1rem'}}><GiGears className="justify-content-center"/> Core Technologies</p>
              <div className="w3-light-grey shadow">
                <div className="w3-container w3-padding-small w3-black w3-center shadow" style={{width:"85%"}}>85%</div>
              </div>
  <br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><FaLaptopCode className="justify-content-center"/> Front-End Design</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"95%"}}>95%</div>
  </div>
  <br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><BsDatabaseLock  className="justify-content-center"/> Server-Side Development</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"80%"}}>80%</div>
  </div>
<br />
<p className="w3-wide text-black" style={{fontSize:'1rem'}}><HiOutlinePuzzlePiece className="justify-content-center"/> Full-Stack Integration</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"75%"}}>75%</div>
  </div>
<br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><AiFillDatabase className="justify-content-center"/> Database Implementation</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"75%"}}>75%</div>
  </div>
  <br />
 <br />
 <br />

        <h3><b>Agile Practices.</b></h3>
        <p>PROMOTE FLEXIBILITY, COLLABORATION, AND ABILITY TO RESPOND TO CHANGING REQUIREMENTS. </p>
    <h5><strong>Interpersonal Skills</strong></h5>
    <ul>
        <li>Effectively communicates, fostering customer and stakeholder engagement throughout the development process.</li>
        <li>Articulates ideas, recommendations, and findings clearly, concisely, and inclusively.</li>
        <li>Promotes and welcomes feedback from all stakeholders equally.</li>
        <li>Embraces a culture of continuous improvement through post-implementation evaluations and knowledge sharing.</li>
        <li>Adapts positively to change and embraces new challenges.</li>
        <li>Delivers functional software (Minimum Viable Product) with a focus on meeting user needs and hope of exceeding expectations.</li>
    </ul>
</div>
<br />
</div>
{/**End technical proficiencies */}


{/**start experience count */}

<div className="w3-row w3-center w3-black w3-padding-32">
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">20<span style={{fontSize:'10px'}}>yrs</span> +</span><br />
    BUSINESS EXPERIENCE
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">100+</span><br />
    DESIGN PROJECTS
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">10+</span><br />
    LEADERSHIP ROLES
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">100+</span><br />
    MEETINGS
  </div>
  </div>
      

        {/* Location */}
        <div className="w3-content w3-container w3-padding-64 w3-margin-top">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 w3-padding-large py-3">
              <h1  className='text-center'>WHERE I'M LOCATED</h1>
              <h5 className='text-center'><em>Huntingtown, Maryland!</em></h5>
            </div>
            <div className='col-lg-8 w3-padding-large'>
              <img src={LocationView} alt="htown" className="w3-image w3-round shadow" style={{width:"100%"}} />
            </div>
        
          </div>
          <br />
          <br />
          <p className="text-center">
                <a href="/resume">View my resume or download a copy <HiOutlineArrowRight /></a>
              </p>
        </div> 
    </div>
  );
}
