import React from "react";
//import { GiLoveMystery } from "react-icons/gi";

import MeWhite from "../../../assets/images/MeWhite.png";
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS


const HomeAbout = () => {

    return (
        <div className="container-fluid py-4 bg-white text-black">
<div className="w3-content w3-container " id="about">
<div class="row d-flex justify-content-center align-items-center">
  <div class="col-sm-12 col-md-4 col-lg-4 w3-padding-small py-3 justify-content-center align-items-center">
    <img src={MeWhite} className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Me" width="250" height="166" style={{boxShadow: "0px 0px 12px gray",}}/>
 
 </div>

    {/*}Hide this text on small devices*/}
   
    <div class="col-sm-12 col-md-8 col-lg-8 w3-padding-small py-3 justify-content-center align-items-center">
    <h5 className="w3-center">"I'm Carol Wargo, and welcome to my corner of 
  the internet! Join me as I share insights into who I am professionally 
  and the years of experience that shape what I do."</h5>
  <br />
    <p className="w3-center"><em>"My passion lies in utilizing creative design to drive 
    innovative solutions through technology. With a distinctive blend of 
    skills and experience, I am a seasoned full-stack 
    software developer and UX designer deeply committed to collaboration, 
    bringing together diverse perspectives to tackle challenges effectively. With over 20 years of 
    experience in business management & strategic development, I bring a wealth of knowledge and expertise to every 
    project I undertake."</em></p>
    </div>
  </div>
  </div> 
  </div> 

    );
};

export default HomeAbout
