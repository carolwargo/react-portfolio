import React from "react";
import HomeBig from "../../../assets/images/Home/HomeBig.png";
import { Link } from "react-router-dom";


const HomeHeader = () => {
  return (
    <header style={{fontFamily:'Raleway'}}>
      <div
        id="intro-example"
        className="p-4 bg-image position-relative"
        style={{
          backgroundImage: `url(${HomeBig})`,
          backgroundSize: "cover", // Set the background size to cover the entire viewport
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Optional: Keep the background fixed while scrolling
        }}
      >
        {/* Overlay div for masking */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>

        <div className="row d-flex h-100 px-5 text-center position-relative">
       <div className="col-sm-12 col-md-3 col-lg-3"></div>
          <div className="col-sm-12 col-md-6 col-lg-6 text-white p-3 position-relative z-index-1">
        
         
            <br></br>
            <br></br>
            <div  className="py-4">
                <div>
         <h1
            style={{
              textDecoration: "bold",
              fontSize: "4rem"
            }}
          >
          CAROL WARGO
          </h1>
          <h5>UX/UI <span style={{color:'#00ffff'}}> <b>DESIGNER</b></span> & FULL STACK  <span style={{color:'#00ffff'}}> <b>DEVELOPER</b></span></h5>
          </div>
              <Link to="/contact">
              <button type="button" className="btn btn-light mx-2 my-2">
              <b style={{ textShadow: "2px 2px 4px #00ffff",}}>Contact Me</b>
                </button>
              </Link>
              <Link to="/#what-we-do">
              <button type="button" className="btn btn-light mx-2">
                  <b style={{ textShadow: "2px 2px 4px #F63DB0",}}>Learn More</b>
                </button>
              </Link>
          
            </div>
           
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3"></div>
        </div>
    
    </header>
  );
};

export default HomeHeader;
