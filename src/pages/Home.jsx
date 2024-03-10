import React from "react";
import HomeBig from "../assets/images/Home/HomeBig.png";


const Header = () => {
  return (
    <header style={{ fontFamily: "Raleway" }}>
      <div
        id="intro-example"
        className="p-4 bg-image position-relative"
        style={{
          backgroundImage: `url(${HomeBig})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay div for masking */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>

        <div className="row d-flex h-100 px-3 text-center position-relative">
          <div className="col-sm-12 col-md-3 col-lg-3"></div>
          <div className="col-sm-12 col-md-6 col-lg-6 text-white p-3 position-relative z-index-1">
            <h1
              style={{
                fontSize: "3.5rem",
                fontFamily: "Raleway",
              }}
            >
             WELCOME!
            </h1>

            <div className="p-2">
            
              <a href="https://carolwargo.github.io/me/">
                {" "}
                <button
                  href="https://carolwargo.github.io/me/"
                  type="button"
                  className="btn btn-light p-5 w3-hover-opacity"
                  style={{ color: "black", boxShadow: "0px 0px 14px #00ffff", textShadow: "1px 1px 2px black"}}
                  data-mdb-ripple-init
                ><span className="text-black" style={{fontSize: "2rem", textShadow: "0px 0px 1px white"}}>
                  <b>CLICK ME TO NAVIGATE TO...</b>
                </span>
                <br />
                  <b style={{ fontSize: "5rem", textShadow: "0px 0px 10px #00FFFF" }} className="">
                    NEW SITE
                  </b>
                  <br />
                  <span className="text-black" style={{ textShadow: "0px 0px 1px white"}}>
              <b>THANKS IN ADVANCE- CAROL WARGO . </b>
             </span>
                </button>
              </a>
              <br />
       

            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

//import React from "react";
//import HomeIcons from "../components/Home/HomeIcons/HomeIcons.jsx";
//import Header from "../components/Header/Header.jsx";
//import HomeAbout from "../components/Home/HomeAbout/HomeAbout.jsx";
//import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";

/*
    <div className="home" id="home" >
      <div className="w3-center w3-padding-64" style={{fontFamily:'Raleway'}}>
     

     <div className="w3-padding-64">
      <h2 className="er">VISIT MY NEW SITE...</h2>
    <a href="https://carolwargo.github.io/me/"> <button href="https://carolwargo.github.io/me/" 
     type="button" 
     className="btn btn-info p-5 w3-hover-opacity shadow" style={{color:'white'}}data-mdb-ripple-init>
      <b style={{fontSize:'5rem'}} className="">NEW SITE</b>
      </button>
      </a>
      <br />
      <br />
     
      <h3 className=''>THANKS IN ADVANCE- <br /><b>CAROL WARGO . </b></h3>
     </div>
   <HomeAbout/>
        <HomeIcons />
        */
