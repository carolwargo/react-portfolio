import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
//import Accordion from "react-bootstrap/Accordion";
import Dev from "../assets/images/Portfolio/Dev.png";
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
import Graphics from "../components/Portfolio/Graphics/Graphics";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Portfolio() {
  const [show, setShow] = useState(true);

  return (
    <div className="portfolio" id="portfolio">


      <div className="w3-main container">
              {/**body start */}

        <div className="row d-flex w3-justify">
        <div className="w3-container w3-margin-top w3-padding-64 w3-padding-large">
      <h1
        style={{
          fontSize: "4rem",
          textShadow: "0px 0px 14px #00ffff",
        }}
      >
        Portfolio.{" "}
      </h1>
      {/**header 
      <p className="header" id="header" style={{ fontFamily: "Raleway" }}>
        Digital Resume contains{" "}
        <strong>
          {" "}
          <a href="#forms">FORMS</a>
        </strong>
        ,
        <strong>
        <a href="#alerts"> ALERTS</a>
        </strong>
        ,
        <br />
        <strong>
          {" "}
          <a href="#tables">TABLES</a>{" "}
        </strong>{" "}
        , {" "}
        <strong>
          {" "}
       
          <a href="#server">SERVER-SIDE FUNCTION</a>{" "}
        </strong>{" "}
        ,
        <strong>
          {" "}
          <a href="#graphics">GRAPHICS</a>{" "}
        </strong>{" "}
        ,
        <strong>
          {" "}
          <a href="#spy-scroll">SPYSCROLL</a>{" "}
        </strong>{" "}
        ,
       
         and{" "}
        <strong>
          {" "}
          <a href="#page-samples">PAGE SAMPLES</a>
        </strong> .{" "}
      </p>
      */}
      <hr />
      </div>
          <div className="w3-col l4">
          <div className="container">
            {/*start accordian card*/}
            
            {/*end accordian card*/}
<hr className="w3-opacity" />

            {/*start card-container server code*/}
            <div className="w3-card w3-margin-top bg-white" id="server">
              {/*start card-image for bio*/}
              <img
                src={Dev}
                alt="blog-profile"
                style={{ width: "100%" }}
                className="rounded-top w3-hover-opacity"
              ></img>
              {/*end card-image for bio*/}
              {/*start card-body for bio*/}
              <div className="w3-container w3-white justify-content-center">
                <br></br>
                <h4
                  className=""
                  style={{ fontFamily: "sans-serif" }}
                  id="#server"
                >
                  <b>SERVER-SIDE APPS</b>
                </h4>
                <p
                  className="mb-3 fw-light w3-padding-16"
                  style={{ fontSize: "14px" }}
                >
                  Server-side functions are a part of the backend architecture
                  of web applications, enabling efficient request handling, data
                  processing, security enforcement, and business logic
                  implementation. They are essential components of modern web
                  development, especially in building scalable, secure, and
                  performant web applications.
                </p>
                <div
                  className="card-footer w3-padding-24 w3-text-blue-gray"
                  style={{ fontSize: "12px" }}
                >
                  Below you will find examples of some widely employed
                  server-side applications. Click the link to review the
                  repository and code.
                </div>
              </div>

              {/*start card-body for bio*/}
            </div>
            <br />
     
            {/*START SERVER SIDE CARDS 1-6*/}
            {/*1. start card-image for JATE*/}
            <div className="w3-card" id="text-editor">
              <img
                src={JATE}
                alt="blog-profile"
                style={{ width: "100%" }}
                className="rounded-top w3-opacity w3-hover-opacity-off"
              ></img>
              {/*end card-image for bio*/}
              {/*start card-body for bio*/}
              <div className="w3-container w3-white justify-content-center w3-center">
                <br></br>
                <h5
                  className=""
                  style={{ fontFamily: "sans-serif" }}
                  id="#server"
                >
                  <b>Text_Editor</b>
                </h5>
                <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                  <i>
                    Text_Editor is a browser-based text editor that allows Users
                    to create and edit text documents seamlessly.
                  </i>
                </p>
                <div className="card-footer w3-center w3-margin-bottom">
                  <p
                    className="w3-opacity text-center pt-2"
                    style={{ fontSize: "12px" }}
                  >
                    click to view repository
                  </p>
                  <button
                    href="https://github.com/carolwargo/Text_Editor-in-Chief"
                    className="w3-button w3-black shadow-lg w3-block"
                  >
                    Github
                  </button>
                </div>
              </div>
              {/*end card-body for JATE*/}
            </div>
            <br />
            {/*2. start card-image for Notes*/}
            <div className="w3-card" id="notes">
              <img
                src={Notes}
                alt="blog-profile"
                style={{ width: "100%" }}
                className="rounded-top w3-opacity w3-hover-opacity-off"
              ></img>
              {/*end card-image for bio*/}
              {/*start card-body for note-taker*/}
              <div className="w3-container w3-white justify-content-center w3-center">
                <br></br>
                <h5
                  className=""
                  style={{ fontFamily: "sans-serif" }}
                  id="#server"
                >
                  <b>Note-Taker Application</b>
                </h5>
                <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                  <i>
                    A note taking application used to WRITE, SAVE and DELETE
                    tasks we can't afford to forget.
                  </i>
                </p>
                <div className="card-footer w3-center w3-margin-bottom">
                  <p
                    className="w3-opacity text-center pt-2"
                    style={{ fontSize: "12px" }}
                  >
                    click to view repository
                  </p>
                  <button
                    href="https://github.com/carolwargo/forget-me-NOTES"
                    className="w3-button w3-black shadow-lg w3-block"
                  >
                    Github
                  </button>
                </div>
              </div>
            </div><br />
            {/*3. start card-image for SVG*/}
            <div className="w3-card" id="svg">
              <img src={SVG} alt="blog-profile" style={{ width: "100%" }}></img>
              {/*end card-image for note-taker*/}
              {/*start card-body for SVG*/}
              <div className="w3-container w3-white justify-content-center w3-center">
                <br></br>
                <h5
                  className=""
                  style={{ fontFamily: "sans-serif" }}
                  id="#server"
                >
                  <b>SVG Generator App</b>
                </h5>
                <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                  <i>
                    A Node.js CLI that takes in user input, such as color, shape
                    & text to generate a logo & save it as an SVG file.
                  </i>
                </p>
                <div className="card-footer w3-center w3-margin-bottom">
                  <p
                    className="w3-opacity text-center pt-2"
                    style={{ fontSize: "12px" }}
                  >
                    click to view repository
                  </p>
                  <button
                    href="https://github.com/carolwargo/forgetSVG"
                    className="w3-button w3-black shadow-lg w3-block"
                  >
                    Github
                  </button>
                </div>
              </div>
              {/*end card-body for SVG*/}
            </div><br />
            {/*4. start card for dayplanner*/}
            <div className="w3-card" id="dayplanner">
              <img
                src={Desk}
                alt="blog-profile"
                style={{ width: "100%" }}
                className="rounded-top w3-opacity w3-hover-opacity-off"
              ></img>
              <div className="w3-container w3-white justify-content-center w3-center">
                <br></br>
                <h5
                  className=""
                  style={{ fontFamily: "sans-serif" }}
                  id="#server"
                >
                  <b>Day Planner App</b>
                </h5>
                <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                  <i>
                    A calendar application that allows a User to save events,
                    for each hour of the work day.
                  </i>
                </p>
                <div className="card-footer w3-center w3-margin-bottom">
                  <p
                    className="w3-opacity text-center pt-2"
                    style={{ fontSize: "12px" }}
                  >
                    click to view repository
                  </p>
                  <button
                    href="https://carolwargo.github.io/Desk_Jockey-dayplanner/"
                    className="w3-button w3-black shadow-lg w3-block"
                  >
                    Github
                  </button>
                </div>
              </div>
              {/*4. end card-body for dayplanner*/}
            </div><br />
            {/*5. start card for README*/}
            <div className="w3-card" id="readme">
              <img
                src={README}
                alt="blog-profile"
                style={{ width: "100%" }}
                className="rounded-top w3-opacity w3-hover-opacity-off"
              ></img>
              <div className="w3-container w3-white justify-content-center w3-center">
                <br></br>
                <h5
                  className=""
                  style={{ fontFamily: "sans-serif" }}
                  id="#server"
                >
                  <b>README Generator</b>
                </h5>
                <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                  <i>
                    README Generator takes in User input to generate a
                    well-structured README.md file saving time for developers.
                  </i>
                </p>
                <div className="card-footer w3-center w3-margin-bottom">
                  <p
                    className="w3-opacity text-center pt-2"
                    style={{ fontSize: "12px" }}
                  >
                    click to view repository
                  </p>
                  <button
                    href="https://github.com/carolwargo/forget-me-NOTES"
                    className="w3-button w3-black shadow-lg w3-block"
                  >
                    Github
                  </button>
                </div>
              </div>
            </div>
            <br />
            {/*6. start card-image for REFACTOR*/}
            <div className="w3-card" id="refactor">
              <img
                src={Horizen}
                alt="blog-profile"
                style={{ width: "100%" }}
                className="rounded-top w3-opacity w3-hover-opacity-off"
              ></img>
              <div className="w3-container w3-white justify-content-center w3-center">
                <br></br>
                <h5
                  className=""
                  style={{ fontFamily: "sans-serif" }}
                  id="#server"
                >
                  <b>Code Refactor</b>
                </h5>
                <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                  <i>
                    Implemented to follow WCAG standards, optimize search
                    engines & limit liability. .
                  </i>
                </p>
                <div className="card-footer w3-center w3-margin-bottom">
                  <p
                    className="w3-opacity text-center pt-2"
                    style={{ fontSize: "12px" }}
                  >
                    click to view repository
                  </p>
                  <button
                    href="https://github.com/carolwargo/Code-Refactor-Horisen"
                    className="w3-button w3-black shadow-lg w3-block"
                  >
                    Github
                  </button>
                </div>
              </div>
              {/*6. end card-body for refactor*/}
            </div><br />
            {/*************************************************************************/}
          </div>
          </div>
          {/*End col-4*/}

          {/*Start col-8*/}
         
          <div className="w3-col l8">
          <div className="w3-content w3-margin-top">
          <h3 className="w3-margin-top w3-margin-bottom"> WEB COMPONENTS</h3>
            <p>  Web components are a set of standardized technologies that enable the creation of custom elements for web applications. Promote code reusability, maintainability, and interoperability across different web frameworks and libraries.
         </p>
  <hr />
  <br />
              {/**start forms */}
              <h4 className="w3-text-black" id="forms">
                FORMS.
              </h4>
              <p className="w3-text-black">
                Digital components in web development are used to enhancing user
                interaction, organizing content, and improving the overall user
                experience of a website.
              </p>
              <p className="w3-text-black">
                Forms are for collecting and submitting user data on a website.
                They consist of input fields such as text boxes, dropdown menus,
                checkboxes, and buttons, allowing users to interact with the
                website and provide information.
              </p>
              <br />
              <Login />
              <br />
              <br />
              <Signup />
              <br />
              <br />
              {/**end forms */}

              {/**start alerts */}
              <h4 className="w3-text-black w3-margin-top" id="alerts">
                ALERTS.
              </h4>
              <hr />
              <p className="mb-0 w3-hover-opacity w3-margin-bottom">
                  Alerts are designed to be attention-grabbing, often with
                  prominent colors, icons, and text formatting to ensure users
                  notice them. Portfolio Menu is an example of an accordion
                  element.
              </p>
              {/**without link */}
            <br />
              <div className="row">
               
                <div className="col-md-6">
                  {[
                    "primary alert displays critical info",
                    "secondary alert displays less critcal info",
                    "light alert displays non-critical info",
                    "dark alert displays non-critical info",
                  ].map((variant) => (
                    <Alert key={variant} variant={variant}>
                      {variant}!
                    </Alert>
                  ))}

                  {show && (
                    <Alert
                      variant="danger"
                      onClose={() => setShow(false)}
                      dismissible
                    >
                      <Alert.Heading>Woah, danger!</Alert.Heading>
                      <p>
                        {" "}
                        Red alert indicates potentially negative action.
                        Displaying heading, alert message, and 'X' in the right
                        corner.
                        <b> Click 'X' to see function IN REVERSE.</b>
                      </p>
                    </Alert>
                  )}
                  <div className="text-center ">
                    {!show && (
                      <Button
                        onClick={() => setShow(true)}
                        variant="danger"
                        size="lg"
                        style={{ paddingRight: "6rem", paddingLeft: "6rem" }}
                      >
                        Show Alert
                      </Button>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  {["warning alert displays a potential issue"].map(
                    (variant) => (
                      <Alert key={variant} variant={variant}>
                        {variant} with{" "}
                        <Alert.Link href="#">Example link</Alert.Link>. to go
                        somewhere.
                      </Alert>
                    )
                  )}

                  <Alert variant="success">
                    <Alert.Heading>Success!.</Alert.Heading>
                    <p>
                      You did it. Comfirmation of succesfully completing a task.
                    </p>
                    <hr />
                    <p className="mb-0">Green indicates success.</p>
                  </Alert>

                  <Alert show={show} variant="info">
                    <Alert.Heading>Info Alert</Alert.Heading>
                    <p>
                      Alert displays heading, alert message, and button in the
                      right corner.
                      <b> Click "Close Me" to see function IN REVERSE.</b>
                    </p>
                    <div className="d-flex justify-content-end">
                      <Button
                        onClick={() => setShow(false)}
                        variant="info"
                        size="lg"
                        style={{ paddingRight: "6rem", paddingLeft: "6rem" }}
                      >
                        Close me
                      </Button>
                    </div>
                  </Alert>
                  <div className="text-center align-items-center">
                    {!show && (
                      <Button
                        onClick={() => setShow(true)}
                        variant="info"
                        size="lg"
                        style={{ paddingRight: "6rem", paddingLeft: "6rem" }}
                      >
                        Show Alert
                      </Button>
                    )}
                
                </div>
                </div>
              </div>
              <br />
              <br />
              {/**end alerts */}
              {/**start tabless */}
           <h4 className="text-black w3-margin-top" id="tables">
                TABLES.{" "}
              </h4>
              <hr />
              <p className="w3-text-black">
                Tables are structured grids used to present data in rows and
                columns. They're commonly used for displaying tabular data, such
                as product listings, pricing tables, or data summaries.
              </p>
              <TableBasic />
              <br />
              <br />
              {/**end tabless */}
              {/**start spyscroll */}
              <h4 className="w3-text-black w3-margin-top" id="#spy-scroll">
                SPYSCROLL.
              </h4>
              <hr className="w3-opacity" />
              <p>
                SpyScroll is a popular technique used in web development to
                enhance user navigation and improve the user experience. It
                involves synchronizing the navigation menu with the scroll
                position on the page. As the user scrolls through different
                sections of a webpage, the corresponding navigation menu items
                are highlighted or activated, indicating the user's current
                position on the page.
              </p>
              <SpyScroll />
              <br />
              <br />
              {/**endspyscroll */}

              {/*start graphics*/}
              <h4 className="w3-text-black w3-margin-top" id="graphics">
                GRAPHICS.
              </h4>
              <hr className="w3-opacity" />
              <p className="w3-text-black">
                Graphics play a key role in communication, whether it's in
                advertising, branding, web design, or multimedia content. They
                serve as visual elements that enhance the presentation of
                information and ideas, making them more engaging, memorable, and
                effective.
              </p>
              <br />
              <Graphics />
              {/**end graphics */}
            </div>
            {/**end col-8 container*/}
          </div>
          {/**end col-8*/}
        </div>
        {/**end row */}
        {/**start sample pages section*/}
        <div className="w3-content w3-container w3-padding-large w3-padding-32">
          <h4 className="w3-text-black w3-margin-top" id="page-samples">
            SAMPLE WEB PAGES.
          </h4>
          <hr className="w3-opacity" />
          <p>
            Each type of website serves a unique purpose and requires specific
            features and functionalities to effectively achieve its objectives
            and meet the needs of its target audience. <b>NOTE:</b>
            <i>
              {" "}
              "Sample pages will be available soon. Thanks for your patience."{" "}
            </i>
          </p>
            
          <div className="row text-center">
            {/** 
            <div className="col l4">
              <div className="card">
          <Link to="/page-samples#page-samples">
            <i className="fa fa-arrow-circle-right w3-xxlarge w3-hover-opacity" style={{color:'black'}}></i></Link>
              <p><b>BLOG</b></p>
              </div>
              </div>
            */}
            {/** 
              <div className="col l4">
              <div className="card">
          <Link to="/page-samples#page-samples">
            <i className="fa fa-arrow-circle-right w3-xxlarge w3-hover-opacity" style={{color:'black'}}></i></Link>
              <p><b>MENU</b></p>
              </div>
              </  div>
            */}
{/** 
              <div className="col l4">
              <div className="card">
          <Link to="/page-samples#page-samples">
            <i className="fa fa-arrow-circle-right w3-xxlarge w3-hover-opacity" style={{color:'black'}}></i></Link>
              <p><b>VIEW SAMPLE PAGES</b></p>
              </div>
              </div>
*/}
              </div>
          <br />
          <br />

          <div className="text-center w3-padding-16">
          <Link to="/contact#contact">
            <i className="fa fa-arrow-circle-right w3-xxlarge w3-hover-opacity" style={{color:'black'}}></i></Link>
              <p><b>GET IN TOUCH!</b></p>
              </div>
        </div>
        {/**end sample pages section*/}
      </div>
      {/**^^^end main container*/}
      {/**end portfolio container wholepage */}
    </div>
  );
}

export default Portfolio;
