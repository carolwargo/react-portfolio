import React from "react";
//import Hero from "../components/Hero/index.jsx";
//import Header from '../components/Header/Main/Header.jsx';
import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import HomeIcons from "../components/Home/HomeIcons/HomeIcons.jsx";
import "../styles/links.css";
import AboutFinal from "../components/About/AboutFinal.jsx";


export default function HomePage() {
  return (
    <div className="home" id="home" >
        <HomeHeader/> 
       <AboutFinal/>
        <HomeIcons />
      
{/*start what we do services*/}


</div>
   
  );
}
