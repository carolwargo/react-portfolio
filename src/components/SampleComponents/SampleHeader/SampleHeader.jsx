import React from "react";
//import HomeBig from "../../../assets/images/Home/HomeBig.png";
import SampleIcons from "../SampleIcons/SampleIcons.jsx";
//import { Link } from "react-router-dom";
import NavbarBlack from "../../Nav/NavBlack.jsx";

const Header = () => {
  return (
    <div className="bg-black">
    <header>
     <NavbarBlack/>
      
        <div className="row d-flex h-100 px-5 text-center position-relative">
       
          <div className="col-sm-12 col-md-12 col-lg-12 text-white p-3 position-relative z-index-1">
          <header className="w3-container w3-center w3-padding-32 p-2 text-white" style={{fontFamily:'Raleway'}}>
            <h1 className="mt-4"
         style={{color:'#00FFFF', fontSize:'3rem'}}>SAMPLE<span style={{color:'black', textShadow: "2px 2px 4px #ffffff", fontFamily:'Raleway'}}> COMPONENTS </span> <span style={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
             color: "#FDC5E8",}}>PAGE</span></h1>
            <p className="" style={{fontFamily:'Raleway'}}>
              Welcome to the blog of{" "}
              <span className="w3-tag" style={{ color: "black", backgroundColor:'#FDC5E8', textShadow: "2px 2px 4px #00FFFF", fontFamily:'Raleway'}}>
            <b>BRAND HERE</b>
              </span>
            </p>
          </header>  {/* end Header */}
<SampleIcons/>
       
          </div>
        </div>
    </header>
     </div>
  );
};

export default Header;
