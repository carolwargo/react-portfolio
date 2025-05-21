import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Dev from "../../assets/images/Portfolio/Dev.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
//import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function SideNav() {

  const [showAccordion, setShowAccordion] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleAccordion = () => {
    setShowAccordion(!showAccordion);
  };

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    
    <div >
        {/**body start */}
        <div className="w3-content" style={{ maxWidth: "1300px" }}>
          <nav
            className="w3-sidebar w3-bar-block w3-white w3-collapse"
            style={{ zIndex: "3", width: "300px", marginTop:'3.5rem' }}
            id="mySidebar"
          >
            <div
              className="w3-container w3-display-container  w3-padding-64"
            >
              <i onClick={openSidebar} className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
              <h3 className="w3-wide ">
                <b>LOGO</b>
              </h3>
            </div>
            <div
              className="w3-large w3-text-grey"
              style={{ fontWeight: "bold" }}
            >
              <Link to="/" className="w3-bar-item w3-button">
                Shirts
              </Link>
              <Link to="/" className="w3-bar-item w3-button">
                Dresses
              </Link>
            
      {/* Button with icon */}
      <Link onClick={toggleAccordion} id='myBtn' style={{marginLeft:'1rem'}}>
        Jeans <FontAwesomeIcon icon={faCaretDown} />
      </Link>

      {/* Accordion content */}
      {showAccordion && (
        <div id="demoAcc" className="w3-show">
          <Link to="/" className="w3-bar-item w3-button w3-light-grey">
            <i className="fa fa-caret-right w3-margin-right">
              </i>Skinny
          </Link>
          <Link to="/" className="w3-bar-item w3-button">
            Relaxed
          </Link>
          <Link to="/" className="w3-bar-item w3-button">
            Bootcut
          </Link>
          <Link to="/" className="w3-bar-item w3-button">
            Straight
          </Link>
          <Link to="/" className="w3-bar-item w3-button">
            Jackets
          </Link>
          <Link to="/" className="w3-bar-item w3-button">
            Gymwear
          </Link>
          <Link to="/" className="w3-bar-item w3-button">
            Blazers
          </Link>
          <Link to="/" className="w3-bar-item w3-button">
            Shoes
          </Link>
        </div>
      )}


            <Link to="/contact" className="w3-bar-item w3-button w3-padding">
              Contact
            </Link>
        
          </div>
          </nav>
          <header className="w3-bar w3-hide-large bg-black w3-xlarge w3-margin-top">
            <div className="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
            <Link
              to="/"
              className="w3-bar-item w3-button w3-padding-24 w3-right"
              onClick="w3_open()"
            >
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </Link>
          </header>

          <div
  className={`w3-overlay ${sidebarOpen ? '' : 'w3-hide-large'}`}
  onClick={closeSidebar}
  style={{ cursor: "pointer" }}
  title="close side menu"
  id="myOverlay"
></div>

          <div className="w3-main" style={{ marginLeft: "250px" }}>
            <div className="w3-hide-large" style={{ marginTop: "83px" }}>
          </div>
          <div className="w3-display-container w3-container">
            <img
              src={Dev}
              alt="dev"
              className="w3-animate-opacity"
              style={{ width: "100%" }}
            />
            <div
              className="w3-display-bottomleft w3-text-white"
              style={{ padding: "24px 48px" }}
            >
              <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>
              <h1 className="w3-hide-large w3-hide-medium text-white">
                New arrivals
              </h1>
              <h1 className="w3-hide-small ">COLLECTION 2016</h1>
              <p>
                <Link
                  to="#jeans"
                  className="w3-button bg-black w3-padding-large w3-large"
                >
                  SHOP NOW
                </Link>
              </p>
            </div>
          </div>
          </div>
          </div>
        </div>

       );
       } ;


export default SideNav;

