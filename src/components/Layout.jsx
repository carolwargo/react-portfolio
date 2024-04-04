import React from "react";
import MeWhite from "../assets/images/Me/MeWhite.png";
import ResumeDownload from "../assets/ResumeDownload.pdf";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Layout = () => {
  const openNav = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const closeNav = () => {
    document.getElementById("mySidebar").style.display = "none";
  };

  return (
    <div className="home" id="home">
      <style>
        {`
          body, h1, h2, h3, h4, h5, h6 {
            font-family: "Montserrat", sans-serif;
          }
          .w3-row-padding img {
            margin-bottom: 10px;
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
        className="w3-sidebar w3-hide-medium w3-hide-small "
        style={{ width: "40%" }}
      >
         
        <div className="bgimg w3-padding-32"></div>
      </nav>
      <nav
        className="w3-sidebar w3-black w3-animate-right w3-xxlarge"
        style={{
          display: "none",
          paddingTop: "150px",
          right: "0",
          zIndex: "2",
        }}
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
          <a
            href="/"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            Home
          </a>
          <a
            href="/about"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            About
          </a>
          <a
            href="/resume"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            Resume
          </a>
          <a
            href="/portfolio"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            Portfolio
          </a>
          <a
            href="/contact"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Page Content */}
      <div className="w3-main w3-padding-large" style={{ marginLeft: "40%" }}>
        {/* Menu icon to open sidebar */}
        <span
          className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black"
          style={{ width: "auto;right:0" }}
          onClick={openNav}
        >
          <i className="fa fa-bars"></i>
        </span>

        {/* Start Header section */}
        <header
          className="w3-container w3-center justify-content-center align-items-center"
          style={{ padding: "128px 16px" }}
          data-testid="header" // Add data-testid attribute here
        >
          <h1 className="w3-jumbo">
            <b>Carol Wargo</b>
          </h1>
          <p>Full Stack Developer | UX Designer.</p>
          <img
            src={MeWhite}
            className="w3-image w3-hide-large w3-hide-small w3-round"
            style={{ display: "block", width: "60%", margin: "auto" }}
            alt="Profile"
          />
          <img
            src={MeWhite}
            className="w3-image w3-hide-large w3-hide-medium w3-round"
            width="1000"
            height="1333"
            alt="Profile"
          />

          <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
            <a
              className="button text-black"
              id="resume-download"
              download
              href={ResumeDownload}
            >
              <i className="fa fa-download"></i> Download Resume
            </a>
          </button>
        </header>

        {/* Start Outlet section */}
        <Outlet />
        {/* End Outlet section */}

      {/* Start Footer */}
<Footer data-testid="footer" />
{/* End Footer */}

      </div>
    </div>
  );
};

export default Layout;
