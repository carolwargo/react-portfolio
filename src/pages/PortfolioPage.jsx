import React from "react";
import { Link } from "react-router-dom";
import SpyScroll from "../components/Portfolio/SpyScroll/SpyScroll";
import TableBasic from "../components/Portfolio/Tables/TableBasic";
import JATE from "../assets/images/Portfolio/JATE.png";
import Horizen from "../assets/images/Portfolio/Horizen.png";
import Desk from "../assets/images/Portfolio/Desk.png";
import SVG from "../assets/images/Portfolio/SVG.png";
import Notes from "../assets/images/Portfolio/Notes.png";
import README from "../assets/images/Portfolio/README.png";
import Login from "../components/Portfolio/Forms/Login";
import Signup from "../components/Portfolio/Forms/Signup";
//import Register from "../components/Portfolio/Forms/Register";
import Graphics from "../components/Portfolio/Graphics/Graphics";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
           <div className="w3-main w3-padding-large w3-padding-64 w3-margin-top">
        {/**start Portfolio section */}
        <div className="w3-content w3-container">
        
        <h1
          style={{
            fontSize: "4rem",
            textShadow: "0px 0px 14px #00ffff",
          }}
        >
          Portfolio.{" "}
        </h1>

        <p className="header" id="header" style={{ fontFamily: "Raleway" }}>
          Digital Resume contains{" "}
          <strong>
            {" "}
            <Link to="#forms">FORMS</Link>
          </strong>
          ,
          <strong>
            {" "}
            <Link to="#tables">TABLES</Link>{" "}
          </strong>{" "}
          , <br></br>{" "}
          <strong>
            {" "}
            <Link to="#server">SERVER-SIDE FUNCTION</Link>{" "}
          </strong>{" "}
          ,
          <strong>
            {" "}
            <Link to="#graphics">GRAPHICS</Link>{" "}
          </strong>{" "}
          ,
          <strong>
            {" "}
            <Link to="#spy-scroll">SPYSCROLL</Link>{" "}
          </strong>{" "}
          ,
          and{" "}
          <strong>
            {" "}
            <Link to="#page-samples">PAGE SAMPLES</Link>
          </strong>{" "}
          -{" "}
        </p>
  
        <hr />
   
 
          <br />
          <br />

          {/* start Forms grid */}
          <div className="container ">
            <h4 className="w3-text-black" id="#forms">
              FORMS.{" "}
            </h4>
            <p>
              Digital components in web development are used to
              enhancing user interaction, organizing content, and improving the
              overall user experience of a website.
            </p>
            <p>
              Forms are for collecting and submitting user data on a website.
              They consist of input fields such as text boxes, dropdown menus,
              checkboxes, and buttons, allowing users to interact with the
              website and provide information.
            </p>
          </div>
          <Login />
          <Signup />
       
          <br />
          <br />
          <div className="container ">
            <h4 className="w3-text-black" id="#tables">
              TABLES.{" "}
            </h4>

            <p>
              Tables are structured grids used to present data in rows and
              columns. They're commonly used for displaying tabular data, such
              as product listings, pricing tables, or data summaries.
            </p>
          </div>
          <TableBasic />

          <br />
          <br />

          <div className="container ">
            <div className="row w3-padding-16">
              <h4 className="w3-text-black" id="#server">
                SERVER-SIDE
              </h4>
              <hr className="w3-opacity" />
              <p>
                Server-side functions are a part of the backend
                architecture of web applications, enabling efficient request
                handling, data processing, security enforcement, and business
                logic implementation. They are essential components of modern
                web development, especially in building scalable, secure, and
                performant web applications.
              </p>
              <br />
              <div className="col-sm-12 col-lg-6">
                <div className="w3-container w3-content shadow w3-padding-16 text-center">
                  <img
                    src={JATE}
                    alt="me"
                    style={{ width: "100%" }}
                    className="w3-rounded w3-margin-top  w3-image w3-opacity w3-hover-opacity-off"
                  />
                  <hr />
                  <div className="w3-light-gray p-2 w3-margin-bottom text-center">
                    <h4 className="fw-light text-center">Text_Editor</h4>
                  </div>
                  <p style={{ fontSize: "14px" }}>
                    <i>
                      Text_Editor is a browser-based text editor that allows
                      Users to create and edit text documents seamlessly.
                    </i>
                  </p>
                  <hr />
                  <div className="container">
                    <p
                      className="w3-opacity text-center"
                      style={{ fontSize: "14px" }}
                    >
                      click to view repository
                    </p>
                    <p>
                      <button
                        href="https://github.com/carolwargo/Text_Editor-in-Chief"
                        className="w3-button w3-white shadow-lg w3-block"
                      >
                        {" "}
                        Github
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6">
                <div className="w3-container w3-content shadow w3-padding-16 text-center">
                  <img
                    src={Notes}
                    alt="me"
                    style={{ width: "100%" }}
                    className="w3-rounded w3-margin-top  w3-image w3-opacity w3-hover-opacity-off"
                  />
                  <hr />
                  <div className="w3-light-gray p-2 w3-margin-bottom text-center">
                    <h4 className="fw-light">NOTE-TAKER</h4>
                  </div>
                  <p style={{ fontSize: "14px" }}>
                    <i>
                      A note taking application used to WRITE, SAVE and DELETE
                      tasks we can't afford to forget.
                    </i>
                  </p>
                  <hr />
                  <div className="container text-center">
                    <p
                      className="w3-opacity text-center"
                      style={{ fontSize: "14px" }}
                    >
                      click to view repository
                    </p>
                    <p>
                      <button
                        href="https://github.com/carolwargo/forget-me-NOTES"
                        className="w3-button w3-white w3-block shadow-lg"
                      >
                        {" "}
                        Github
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row w3-padding-16">
              <div className="col-sm-12 col-lg-6">
                <div className="w3-container w3-content shadow w3-padding-16 text-center">
                  <img
                    src={README}
                    alt="me"
                    style={{ width: "100%" }}
                    className="w3-rounded w3-margin-top  w3-image w3-opacity w3-hover-opacity-off"
                  />
                  <hr />
                  <div className="w3-light-gray p-2 w3-margin-bottom text-center">
                    <h4 className="fw-light">README-GENERATOR</h4>
                  </div>
                  <p style={{ fontSize: "14px" }}>
                    <i>
                      README Generator takes in User input to generate a
                      well-structured README.md file saving time for developers.
                    </i>
                  </p>
                  <hr />
                  <div className="container text-center">
                    <p
                      className="w3-opacity text-center"
                      style={{ fontSize: "14px" }}
                    >
                      click to view repository
                    </p>
                    <p>
                      <button
                        href="https://github.com/carolwargo/09-README-generator"
                        className="w3-button w3-white shadow-lg w3-block"
                      >
                        {" "}
                        Github
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6">
                <div className="w3-container w3-content shadow w3-padding-16 ">
                  <img
                    src={SVG}
                    alt="me"
                    style={{ width: "100%" }}
                    className="w3-rounded w3-margin-top  w3-image w3-opacity w3-hover-opacity-off"
                  />
                  <hr />
                  <div className="w3-light-gray p-2 w3-margin-bottom text-center">
                    <h4 className="fw-light">SV.GENIE</h4>
                  </div>
                  <p className="text-center" style={{ fontSize: "14px" }}>
                    <i>
                      A Node.js CLI that takes in user input, such as color,
                      shape & text to generate a logo & save it as an SVG file.
                    </i>
                  </p>
                  <hr />
                  <div className="container">
                    <p
                      className="w3-opacity text-center"
                      style={{ fontSize: "14px" }}
                    >
                      click to view repository
                    </p>
                    <p>
                      <button
                        href="https://github.com/carolwargo/SV-Genie"
                        className="w3-button w3-white shadow-lg w3-block"
                      >
                        {" "}
                        Github
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row w3-padding-16">
              <div className="col-sm-12 col-lg-6">
                <div className="w3-container w3-content shadow w3-padding-16 ">
                  <img
                    src={Horizen}
                    alt="me"
                    style={{ width: "100%" }}
                    className="w3-rounded w3-margin-top  w3-image w3-opacity w3-hover-opacity-off"
                  />
                  <hr />
                  <div className="w3-light-gray p-2 w3-margin-bottom text-center">
                    <h4 className="fw-light text-center">CODE-REFACTOR</h4>
                  </div>
                  <p className="text-center" style={{ fontSize: "14px" }}>
                    <i>
                      Implemented to follow WCAG standards, optimize search
                      engines & limit liability. .
                    </i>
                  </p>
                  <hr />
                  <div className="container">
                    <p
                      className="w3-opacity text-center"
                      style={{ fontSize: "14px" }}
                    >
                      click to view repository
                    </p>
                    <p>
                      <button
                        href="https://github.com/carolwargo/Code-Refactor-Horisen"
                        className="w3-button w3-white shadow-lg w3-block"
                      >
                        {" "}
                        Github
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6">
                <div className="w3-container w3-content shadow w3-padding-16 text-center">
                  <img
                    src={Desk}
                    alt="me"
                    style={{ width: "100%" }}
                    className="w3-rounded w3-margin-top  w3-image w3-opacity w3-hover-opacity-off"
                  />
                  <hr />
                  <div className="w3-light-gray p-2 w3-margin-bottom text-center">
                    <h4 className="fw-light">DAY-PLANNER</h4>
                  </div>
                  <p style={{ fontSize: "14px" }}>
                    <i>
                      A calendar application that allows a User to save events,
                      for each hour of the work day.
                    </i>
                  </p>
                  <hr />
                  <div className="container">
                    <p
                      className="w3-opacity text-center"
                      style={{ fontSize: "14px" }}
                    >
                      click to view repository
                    </p>
                    <p>
                      <button
                        href="https://carolwargo.github.io/Desk_Jockey-dayplanner/"
                        className="w3-button w3-white shadow-lg w3-block"
                      >
                        {" "}
                        Github
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            {/**end Backend grid */}
          </div>
          {/*start grid sample page*/}
          <div className="container ">
       
            <h4 className="w3-text-black" id="#graphics">
              GRAPHICS.
            </h4>
            <hr className="w3-opacity" />

            <p>
              Graphics play a key role in communication, whether it's in
              advertising, branding, web design, or multimedia content. They
              serve as visual elements that enhance the presentation of
              information and ideas, making them more engaging, memorable, and
              effective.
            </p>
<br />
            <Graphics />
            <br />
            <br />
            <h4 className="w3-text-black" id="#spy-scroll">
              SPYSCROLL.
            </h4>
            <p>SpyScroll is a popular technique used in web development to enhance user navigation and improve the user experience. It involves synchronizing the navigation menu with the scroll position on the page. As the user scrolls through different sections of a webpage, the corresponding navigation menu items are highlighted or activated, indicating the user's current position on the page.</p>
            <hr className="w3-opacity" />
            <SpyScroll />

            <br />
            <br />
            <h4 className="w3-text-black" id="#page-samples">
              SAMPLE WEB PAGES.
            </h4>
            <hr className="w3-opacity" />
            <p>
              Each type of website serves a unique purpose and requires specific
              features and functionalities to effectively achieve its objectives
              and meet the needs of its target audience.
            </p>
            <p className="text-center w3-xxlarge">    
            <Link to="/page-samples">view page samples <br /><i className="fa fa-arrow-circle-right w3-xxlarge" ></i></Link>
       </p>
        </div>
          {/*end graphics*/}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
