import React from "react";
import HomeBig from "../../assets/images/Home/HomeBig.png";
import { Link } from "react-router-dom";
import Navbar from "../Nav/NavBlack.jsx";

const Header = () => {
  return (
    <header style={{fontFamily:'Raleway'}}>
     <Navbar />
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
          <h1 style={{
                  textShadow: "2px 1px 4px #6495ED",
                  
                  fontSize: "3.5rem",
                  fontFamily:'Raleway'
                }}>CAROL <span style={{ fontSize: "3.5rem", }}>WARGO</span></h1>
            <p
              className="mt-2 mb-2"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily:'Raleway',
                lineHeight: "1.25",
              }}
            >
              "Make a lasting
              <span
                style={{
                  textShadow: "2px 2px 4px #F63DB0",
                  color: "white",
                  fontSize: "1.5rem",
                  fontFamily:'Raleway'
                }}
              > 
                <b>
                  {" "}
                   VISUAL IMPACT{" "}
                </b>
              </span>
              with
              <span
                   style={{
                    color: "#00FFFF",
                    fontSize: "1.5rem",
                    fontFamily:'Raleway'
                  }}
              >
                <b>
                  {" "}STUNNING GRAPHICS{" "}
                </b>
              </span>
              or 
              build a powerful
              <span
                style={{
                  textShadow: "2px 2px 4px #F63DB0",
                  color: "white",
                  fontSize: "1.5rem",
                  fontFamily:'Raleway'
                }}
              >
                <b>
                  {" "}
                  ONLINE PRESENCE{" "}
                </b>
              </span>
              through    
             
              <span
                style={{
                  color: "#00FFFF",
                  fontSize: "1.5rem",
                  fontFamily:'Raleway'
                }}
              >
                <b>
                   {" "}
                 WEB DEVELOPMENT
                  {" "}
                </b>

              </span>
               ..."
            </p>
            <br></br>
            <div className="p-2">
              <Link to="/contact">
              <button type="button" className="btn btn-light mx-2 my-2">
                  <b>Contact us</b>
                </button>
              </Link>
              <Link to="/#what-we-do">
              <button type="button" className="btn btn-light mx-2">
                  <b style={{ textShadow: "2px 2px 4px #F63DB0",}}>Learn more</b>
                </button>
              </Link>
           
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
