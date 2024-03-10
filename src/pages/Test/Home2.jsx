import React, { useState } from "react";

import MeWhite from "../../assets/images/MeWhite.png";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeNav = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <style>
        {`
          body, h1, h2, h3, h4, h5, h6 {
            font-family: "Montserrat", sans-serif;
          }
          .w3-row-padding img {
            margin-bottom: 12px;
          }
          .bgimg {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url('${MeWhite}');
            min-height: 100%;
          }
        `}
      </style>

      {/* Sidebar with image */}
      <nav
        className="w3-sidebar w3-hide-medium w3-hide-small"
        style={{ width: "40%" }}
      >
        <div className="bgimg"></div>
      </nav>

      {/* Hidden Sidebar (reveals when clicked on menu icon)*/}
      <nav
        className={`w3-sidebar w3-black w3-animate-right w3-xxlarge ${isSidebarOpen ? "w3-show" : "w3-hide"}`}
        style={{ display: "none", paddingTop: "150px", right: "0", zIndex: "2" }}
        id="mySidebar"
      >
        <a
          href="/"
          onClick={closeNav}
          className="w3-button w3-black w3-xxxlarge w3-display-topright"
          style={{ padding: "0 12px" }}
        >
          <i className="fa fa-remove"></i>
        </a>
        <div className="w3-bar-block w3-center">
          <a href="/" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={closeNav}>Home</a>
          <a href="#portfolio" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={closeNav}>Portfolio</a>
          <a href="#about" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={closeNav}>About</a>
          <a href="#contact" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={closeNav}>Contact</a>
        </div>
      </nav>

      {/* Page Content */}
      <div className="w3-main w3-padding-large" style={{ marginLeft: "40%" }}>
        {/* Menu icon to open sidebar */}
        <span
          className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black"
          style={{ width: "auto", right: "0" }}
          onClick={toggleSidebar}
        >
          <i className="fa fa-bars"></i>
        </span>

        {/* Header */}
        <header className="w3-container w3-center" style={{ padding: "128px 16px" }} id="home">
          <h1 className="w3-jumbo"><b>Jane Doe</b></h1>
          <p>Photographer and Web Designer.</p>
          <img src={MeWhite} className="w3-image w3-hide-large w3-hide-small w3-round" style={{ display: "block", width: "60%", margin: "auto" }} alt="Profile" />
          <img src={MeWhite} className="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333" alt="Profile" />
          <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
            <i className="fa fa-download"></i> Download Resume
          </button>
        </header>
      </div>
    </div>
  );
};

export default Home;
