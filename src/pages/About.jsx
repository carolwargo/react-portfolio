import React from "react";
//import Volunteer from "../components/About/Volunteer.jsx";
import AboutFinal from "../components/About/AboutFinal.jsx";
import LocationView from '../assets/images/LocationView.png';
//import Header from "../components/Header/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'

export default function AboutPage() {
  return (
    <div>
      <main>
     
      <AboutFinal />
      <div className='row p-2 d-flex align-items-center'>
      <div className='col-md-4 flex-column justify-content-end align-items-center'>
      <div className="d-flex align-items-center justify-content-center">
    <h2 className=' justify-content-center align-items-center'>WHERE I'M LOCATED</h2>
    </div>
    <div className="d-flex align-items-center justify-content-center">
    <p className=' justify-content-center align-items-center'> 
    <em>Huntingtown, Maryland!</em></p>
   </div>
</div>
        <div className='col-md-6 justify-content-center align-items-center'>
        <img src={LocationView} alt="htown" className="w3-image w3-round" style={{width:"100%"}} ></img>
        </div>
        </div>
        </main>
    </div>
  );
}


