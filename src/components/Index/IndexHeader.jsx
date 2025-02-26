import React from "react";
import HomeBig from "../../assets/images/HeaderImages/HomeBig.png";
import { Link as ScrollLink } from 'react-scroll';



const IndexHeader = () => {
  return (
    <header  className="w3-padding-48" style={{fontFamily:'Raleway'}}>
   
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
       <div className="col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-sm-12 col-md-7 col-lg-7 text-white p-3 position-relative z-index-1">
         
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
                  fontSize: "3.5rem",
                  fontFamily:'Raleway'
                }}
              > 
                <b>
                  {" "}
               LANDING{" "}
                </b>
              </span>
              
              <span
                   style={{
                    color: "#00FFFF",
                    fontSize: "3.5rem",
                    fontFamily:'Raleway'
                  }}
              >
                <b>
                  {" "}PAGE{" "}
                </b>
              </span>
              </p>
             <div className='text-center'>
            
<div className="p-2">
                 
<ScrollLink to="email-graphics" smooth={true} duration={500}>
    <button type="button" className="btn btn-light mx-2 w3-round-xlarge">
        <b style={{ textShadow: "2px 2px 4px #F63DB0",}}>View Graphics</b>
    </button>
</ScrollLink>
                 {/** 
             <Link to="">
                 <button type="button" className="btn btn-light mx-2 w3-round-xlarge">
                     <b style={{ textShadow: "2px 2px 4px #F63DB0",}}>Learn More</b>
                   </button>
                 </Link>
                 */} 
               </div>
              
<br />
{/* 
 <p className='text-muted' style={{fontSize:'12px'}}><i>    'The Graphic Elements page is currently under development and will be completed shortly. Thank you in advance for your patience.'</i></p>
   */}
        </  div>
          
         
          </div>
          <div className="col-sm-12 col-md-1 col-lg-1"></div>
          
      </div>
   </div>
    </header>
  );
};

export default IndexHeader;
