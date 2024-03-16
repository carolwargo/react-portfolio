import React, { useState } from "react";
import MeWhite from "../assets/images/MeWhite.png";


const YourComponent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
      setSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
    };
    
  return (
    <div>
   
      <div className="w3-content" style={{maxWidth:"1200px"}}>
      {/* Sidebar/menu */}
      <nav className='w3-sidebar w3-bar-block w3-white w3-collapse w3-top' style={{ zIndex: 3, width: "250px" }}
 id="mySidebar">
      <div className="w3-container w3-display-container w3-padding-16">
      <button onClick={openSidebar}>Open Sidebar</button>

{/* Button to close sidebar (will be hidden until sidebar is open) */}
<i 
  className={`fa fa-remove w3-hide-large w3-button w3-display-topright ${sidebarOpen ? "" : "w3-hide"}`}
  onClick={closeSidebar}
></i>
         <h3 className="w3-wide text-white"><b>LOGO</b></h3>
        </div>

<div className='w3-padding-64 w3-large w3-text-grey'
style={{fontWeight:'bold'}}>
    <a className='bar-item w3-button' href="#forms">
        FORMS.
    </a>
    <a className='bar-item w3-button' href="#tables">
        TABLES.
    </a>
    <a className='bar-item w3-button' href="#server">
        SERVER-SIDE.
    </a>
    <a className='bar-item w3-button' href="scroll-spy">
        SCROLL SPY.
    </a>
    <a className='bar-item w3-button' href="#graphics">
        GRAPHICS.
    </a>
    <a className='bar-item w3-button' href="samples">
        SAMPLES.
    </a>

     
    <a  href="/" className="w3-button w3-block w3-white w3-left-align" id="myBtn">
      Jeans <i className="fa fa-caret-down"></i>
    </a>
    
    <div id="jeans-dropdown" className="w3-bar-block w3-hide w3-padding-large w3-medium">
      <a href="/" className="w3-bar-item w3-button w3-light-grey"><i className="fa fa-caret-right w3-margin-right"></i>Skinny</a>
      <a href="/" className="w3-bar-item w3-button">Relaxed</a>
      <a href="/" className="w3-bar-item w3-button">Bootcut</a>
      <a href="/" className="w3-bar-item w3-button">Straight</a>
    </div>
    <a href="/" className="w3-bar-item w3-button">Jackets</a>
    <a href="/" className="w3-bar-item w3-button">Gymwear</a>
    <a href="/" className="w3-bar-item w3-button">Blazers</a>
    <a href="/" className="w3-bar-item w3-button">Shoes</a>
  </div>

  <a href="#footer" className="w3-bar-item w3-button w3-padding">Contact</a> 
  <a href="#footer"  className="w3-bar-item w3-button w3-padding">Subscribe</a>
</nav>
{/*}Top menu on small screens */}
<header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
  <div className="w3-bar-item w3-padding-24 w3-wide">
    LOGO
    </div>
  <a href="/" className="w3-bar-item w3-button w3-padding-24 w3-right" 
  onclick="w3_open()">
    <i className="fa fa-bars"></i>
    </a>
</header>
{/* Overlay effect when opening sidebar on small screens */}
<div className="w3-overlay w3-hide-large" 
onclick="w3_close()" 
style={{ cursor: "pointer" }}
title="close side menu" 
id="myOverlay"></div>

<div className='w3-main' style={{marginTop:"83px"}}></div>
{/*ImageHeader*/}
<div className="w3-display-container w3-container">
    <img src={MeWhite}alt="Jeans" style={{width:"100%"}}/>
    <div className="w3-display-topleft w3-text-white" style={{padding:"24px 48px"}}/>
      <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>
      <h1 className="w3-hide-large w3-hide-medium">New arrivals</h1>
      <h1 className="w3-hide-small">COLLECTION 2016</h1>
      <p><a href="#jeans" className="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
    </div>
  </div>



      </div>

  );
};

export default YourComponent;
