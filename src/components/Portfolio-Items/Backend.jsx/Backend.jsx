import React from "react";
import TableBasic from "../../components/Portfolio/Tables/TableBasic";
import JATE from "../../assets/images/Portfolio/JATE.png";
import Horizen from "../../assets/images/Portfolio/Horizen.png";
import Desk from "../../assets/images/Portfolio/Desk.png";
import SVG from "../../assets/images/Portfolio/SVG.png";
import Notes from "../../assets/images/Portfolio/Notes.png";
import README from "../../assets/images/Portfolio/README.png";
import Login from "./Forms/Login";
import Signup from "./Forms/Signup";
import Graphics from "./Graphics/Graphics";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Portfolio() {
  return (
    <div >
      
        <div className="portfolio" id="portfolio">
          {/**start Portfolio section */}
          <div className="w3-content w3-container py-2 bg-white text-black w3-padding-32">
        <h1 className="w3-text-black" id="tables">
             <b>PORTFOLIO.</b> 
            </h1>
            <hr className="w3-opacity" />
            <p>
              Welcome to my portfolio! I thrive on innovation but not at the
              expense of simplicity and efficiency. I invite you to explore my
              projects, components, and designs.
            </p>
            {/* start Forms grid */}
            <h3 className="w3-text-black" id="#forms">
              Components.{" "}
            </h3>
            <p>
              Digital components play crucial roles in web development,
              enhancing user interaction, organizing content, and improving the
              overall user experience of a website.
            </p>

            <h4 className="w3-text-black" id="#forms">
              Form Components.{" "}
            </h4>
            <hr className="w3-opacity" />
            <p>
              Forms are for collecting and submitting user data on a website.
              They consist of input fields such as text boxes, dropdown menus,
              checkboxes, and buttons, allowing users to interact with the
              website and provide information.
            </p>
            {/*start login form */}
            <Login />
  
            {/*end login and register
             */}

            {/*start sign up form */}
            <Signup />
          </div>
          {/*end sign up form */}

          {/**start Tables grid */}
          <div className="w3-content w3-justify w3-text-black w3-padding-32">
            <h4 className="w3-text-black" id="tables">
              Tables{" "}
            </h4>
            <hr className="w3-opacity" />
            <p>
              Tables are structured grids used to present data in rows and
              columns. They're commonly used for displaying tabular data, such
              as product listings, pricing tables, or data summaries.
            </p>

            <br />
            <TableBasic />
          </div>
          {/**end Tables grid */}

          {/**start Backend grid */}
          <div className="w3-content w3-justify w3-text-black w3-padding-32">
            <h4 className="w3-text-black" id="#server">
              Server-side
            </h4>
            <hr className="w3-opacity" />
            <p>
              Server-side functions play a crucial role in the backend
              architecture of web applications, enabling efficient request
              handling, data processing, security enforcement, and business
              logic implementation. They are essential components of modern web
              development, especially in building scalable, secure, and
              performant web applications.
            </p>
            <br />
          </div>

          <div className="container ">
            <div className="row w3-padding-16">
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
          </div>
          {/**end Backend grid */}

          {/*start grid sample page*/}
          <div className="w3-content w3-justify w3-text-black w3-padding-32">
            <h4 className="w3-text-black" id="#server">
              Sample web pages.
            </h4>
            <hr className="w3-opacity" />

            <p>
              <span style={{color:'red'}}><b>COMING SOON!</b> </span>
              Each type of website serves a unique purpose and requires specific
              features and functionalities to effectively achieve its objectives
              and meet the needs of its target audience.
            </p>
    

           {/** 
             <br />
            <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
              <div className="w3-half w3-margin-bottom">
                <ul className="w3-ul w3-center w3-card w3-hover-shadow">
                  <li className="w3-black w3-xlarge w3-padding-32">
                    Blog Site <br />{" "}
                    <span style={{ fontSize: "14px", fontWeight: "lighter" }}>
                      Blog site features:{" "}
                    </span>
                  </li>
                  <li className="w3-padding-16">Moment Js Integration</li>
                  <li className="w3-padding-16">Featured Entries</li>
                  <li className="w3-padding-16">Post Data Arrays</li>
                  <li className="w3-padding-16">Share Buttons</li>
                  <li className="w3-light-grey w3-padding-24">
                    <a href="/blog" alt="blog">
                      {" "}
                      <button className="w3-button w3-white w3-padding-large w3-hover-black">
                        See Site
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w3-half">
                <ul className="w3-ul w3-center w3-card w3-hover-shadow">
                  <li className="w3-black w3-xlarge w3-padding-32">
                    Restaurant
                    <br />
                    <span style={{ fontSize: "14px", fontWeight: "lighter" }}>
                      Restaurant features: <i>'NOTE: in progress' </i>{" "}
                    </span>
                  </li>
                  <li className="w3-padding-16">Pagination</li>
                  <li className="w3-padding-16">Menu</li>
                  <li className="w3-padding-16">Cards</li>
                  <li className="w3-padding-16">Notifications</li>
                  <li className="w3-padding-16">Calendar</li>
                  <li className="w3-light-grey w3-padding-24">
                    <button className="w3-button w3-white w3-padding-large w3-hover-black">
                      See Site
                    </button>
                  </li>
                </ul>
              </div>
            </div>
             */} 
         
          {/*endgrid sample page*/}

          {/*start graphics*/}
          <div className="w3-content w3-justify w3-text-black w3-padding-32">
         <Graphics/>
          </div>
          {/*end graphics*/}
          </div>
    </div>
    </div>
   
  );
}

export default Portfolio;
