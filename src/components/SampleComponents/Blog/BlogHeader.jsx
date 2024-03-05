import React from "react";
//import HomeBig from "../../../assets/images/Home/HomeBig.png";
import { Link } from "react-router-dom";
//import NavbarBlack from "../../Nav/NavBlack.jsx";

const Header = () => {
  return (
    <header>
      <div className="bg-black">
       

        <div className="row d-flex h-100 px-5 text-center position-relative pt-3">
       
          <div className="col-sm-12 col-md-12 col-lg-12 text-white p-3 position-relative z-index-1">
          <header className="w3-container w3-center w3-padding-32 p-2 text-white" style={{fontFamily:'Raleway'}}>
          <h3 className="mt-4"
         style={{color:'#00FFFF', fontSize:'2rem'}}>SAMPLE BLOG SITE</h3>
            
            <h3 className="mt-4"
         style={{color:'#00FFFF', fontSize:'2rem'}}>BLOG <span style={{color:'black', textShadow: "0px 0px 2px #ffffff", fontFamily:'Raleway'}}>PAGE </span> <span style={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
             color: "#FDC5E8",}}>TITLE</span></h3>
            <p className="" style={{fontFamily:'Raleway'}}>
              Welcome to the blog of {" "}
              <span className="w3-tag" style={{ color: "black", backgroundColor:'#FDC5E8', textShadow: "2px 2px 4px #00FFFF", fontFamily:'Raleway'}}> <b>BRAND HERE</b>
              </span>
            </p>
          </header>  {/* end Header */}

    
            <div className="p-2">
            <h5>
             Check out the "DID YOU KNOW?" section for stats on share buttons, or
             <br />
               click 'Popular Post' to view our most valued resources.
                </h5>
              <Link to="/web-development">
                <button
                  type="button"
                  className="btn btn-outline-info bg-black btn-sm m-1 px-2"
                  data-mdb-ripple-init
                >
                  <b>Popular Posts</b>
                </button>
              </Link>
              {/** 
              <Link to="/digital-marketing">
                <button
                  type="button"
                  className="btn btn-outline-light bg-black btn-sm m-1 px-2"
                  data-mdb-ripple-init
                >
                  <b>Digital Marketing</b>
                </button>
              </Link>
              */}
           
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
