import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";

import MeWhite from "../../../assets/images/MeWhite.png";
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS


const HomeAbout = () => {

    return (
        <div>
        <div className="container-fluid w3-margin-top py-3 text-black">
<div className="w3-content w3-container w3-margin-top " id="about">
<div class="row d-flex justify-content-center align-items-center">
<h2 className="w3-center py-2"> <i> "I'm Carol Wargo, and <br /> welcome to my corner of the internet!"</i></h2>
  <br />
    <p className="w3-center pt-3"><em>"My passion lies in utilizing creative design to drive 
    innovative solutions through technology. With a distinctive blend of 
    skills and experience, I am a seasoned full-stack 
    software developer and UX designer deeply committed to collaboration, 
    bringing together diverse perspectives to tackle challenges effectively. With over 20 years of 
    experience in business management & strategic development, I bring a wealth of knowledge and expertise to every 
    project I undertake."</em></p>
    </div>
    </div> 
</div>
    <div className="container-fluid py-1 text-black">
    <div className="w3-content w3-container ">
    <div class="row d-flex justify-content-center align-items-center py-lg-5 ">
  <div class="col-sm-12 col-md-6 col-lg-6 w3-padding-large justify-content-center align-items-center">
    <img src={MeWhite} className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Me" width="500" height="333" style={{boxShadow: "0px 0px 12px gray",}}/>
 </div>
 <div class="col-sm-12 col-md-6 col-lg-6 w3-padding-large">
    <h5><strong>Technical Proficiencies</strong></h5>

<p className="w3-wide text-black" style={{fontSize:'1rem'}}><GiGears className="justify-content-center"/> Core Technologies</p>
  <div className="w3-light-grey shadow ">
    <div className="w3-container w3-padding-small w3-black w3-center shadow" style= {{width:"85%"}}>85%</div>
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
    <div className="w3-container w3-padding-small w3-black w3-center w3-margin-bottom" style= {{width:"75%"}}>75%</div>
  </div>
    </div> 
   
    <div className="container w3-margin-top pt-3 pb-0">
    <p className="text-center w3-margin-top"><a href="/about">Click the link to Learn more about me and what I do <i className="fa fa-arrow-right mx-2"></i></a>
  </p>
  </div>
 </div>
  </div> 
 </div>
  </div>
    );
};

export default HomeAbout
