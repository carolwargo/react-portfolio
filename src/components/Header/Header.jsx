import React from "react";
import HomeBig from "../../assets/images/Home/HomeBig.png";
//import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header  className="w3-padding-top-48" style={{fontFamily:'Raleway'}}>
   
      <div
        id="intro-example"
        className="w3-padding-large w3-padding-48 bg-image position-relative"
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
         
               <p
              className="mt-2 mb-2"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily:'Raleway',
                lineHeight: "1.5",
              }}
            >
              <span
                style={{
                  textShadow: "2px 2px 4px #F63DB0",
                  color: "white",
                  fontSize: "2.5rem",
                  fontFamily:'Raleway'
                }}
              > 
                <b>
                  {" "}
               GRAPHIC{" "}
                </b>
              </span>
              
              <span
                   style={{
                    color: "#00FFFF",
                    fontSize: "2.5rem",
                    fontFamily:'Raleway'
                  }}
              >
                <b>
                  {" "}ELEMENTS{" "}
                </b>
              </span>
              </p>
              <hr />
             <div className='text-center'>
             <p className="fw-light"><i> DIGITAL MARKETING - DATA ANALYSIS - CONTENT MANAGEMENT</i></p>
             
      <h5 className="fw-light">Crafting visually captivating content not only enhances a brand's online presence but also serves as a powerful tool to draw users in and encourage engagement.</h5>
 <br />
 <p className='text-muted' style={{fontSize:'14px'}}><i>    'The Graphic Elements page is currently under development and will be completed shortly. Thank you in advance for your patience.'</i></p>
   
        </  div>
          
            <div className="p-2">
                 {/** 
              <Link to="/contact">
              <button type="button" className="btn btn-light mx-2 w3-round-xlarge">
                  <b  style={{ textShadow: "2px 2px 4px #F63DB0",}}>Contact Me</b>
                </button>
              </Link>
          <Link to="">
              <button type="button" className="btn btn-light mx-2 w3-round-xlarge">
                  <b style={{ textShadow: "2px 2px 4px #F63DB0",}}>Learn More</b>
                </button>
              </Link>
              */} 
            </div>
           
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3"></div>
      
        </div>
   </div>
    </header>
  );
};

export default Header;
