import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
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
      <p className="header" id="header" style={{ fontFamily: "Raleway" }}>
        Digital Resume contains{" "}
        <strong>
          {" "}
          <Link to="#forms">FORMS</Link>
        </strong>
        ,
        <strong>
        <Link to="#alerts"> ALERTS</Link>
        </strong>
        ,
        <strong>
          {" "}
          <Link to="#tables">TABLES</Link>{" "}
        </strong>{" "}
        , {" "}
        <strong>
          {" "}
          <br />
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
        <br />
         and{" "}
        <strong>
          {" "}
          <Link to="#page-samples">PAGE SAMPLES</Link>
        </strong> .{" "}
      </p>
      <hr />
      </div>
          <div className="w3-col l4">
          <div className="container">
            {/*start accordian card*/}
            <div className="w3-card bg-white">
              <hr />
              <div className="fw-bold w3-padding-large w3-margin-bottom ">
                <h2 className="" style={{ color: "black" }}>
                  <Link to="#portfolio">
                    <b style={{ color: "black" }}>PORTFOLIO</b>
                  </Link>
                </h2>
                <br />
                {show && (
                    <Alert
                      variant="info"
                      onClose={() => setShow(false)}
                      dismissible
                      className="shadow"
                    >
                      <Alert.Heading>Info Alert!</Alert.Heading>
                      <p style={{fontSize:'12px'}}>
                 This menu is an accordian component, and is still in-progress.
                         <span style={{color:'grey'}}> <b> Click 'X' to close.</b></span> 
                      </p>
                    </Alert>
                  )}
                  <div >
                    {!show && (
                      <Button
                        onClick={() => setShow(true)}
                        variant="light"
                        size="lg"
                        style={{ paddingRight: "3rem", paddingLeft: "3rem" }}
                     className="shadow"
                     >
                        Show Alert
                      </Button>
                    )}
                  </div>

              <Accordion defaultActiveKey="0" className="border-0 ">
                {/**start server-side */}
                <Accordion.Item eventKey="0" className="border-0 ">
                  <Accordion.Header>
                    <span>
                      <Link
                        to="#server"
                        style={{ fontSize: "16px", color: "black" }}
                        className="fw-bold border-0 w3-hover-text-gray"
                      >
                        SERVER-SIDE CODE
                      </Link>
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="border-0 ">
                    <p className="w3-margin-left">
                      <Link
                        to="#text-editor"
                        className="w3-hover-text-red"
                        style={{ color: "gray" }}
                      >
                        Text Editor
                      </Link>
                    </p>
                    <p className="w3-margin-left">
                      <Link
                        to="#notes"
                        className="w3-hover-text-red"
                        style={{ color: "gray" }}
                      >
                        Note Taker
                      </Link>
                    </p>
                    <p className="w3-margin-left">
                      <Link
                        to="#svg"
                        className="w3-hover-text-red"
                        style={{ color: "gray" }}
                      >
                        SVG Generator
                      </Link>
                    </p>
                    <p className="w3-margin-left">
                      <Link
                        to="#dayplanner"
                        className="w3-hover-text-red"
                        style={{ color: "gray" }}
                      >
                        Day-Planner
                      </Link>
                    </p>
                    <p className="w3-margin-left">
                      <Link
                        to="#README"
                        className="w3-hover-text-red"
                        style={{ color: "gray" }}
                      >
                        README Generator
                      </Link>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                {/**end server-side */}

                {/**start refactor */}
                <Accordion.Item
                  eventKey="1"
                  
                  className="border-0 mt-3"
                >
                  <p className="w3-margin-left">
                    <Link
                      to="#refactor"
                      style={{
                        fontSize: "16px",
                        color: "black",
                        marginLeft: "8px",
                      }}
                      className="fw-bold border-0 w3-hover-text-gray"
                    >
                      ACCESSIBILITY REFACTOR
                    </Link>
                  </p>
                </Accordion.Item>
                {/**end refactor */}
                <hr />
                {/**start alerts */}
                <Accordion.Item eventKey="2" className="border-0 ">
                  <Accordion.Header>
                    <span>
                      <Link
                        to="#alert"
                        style={{ fontSize: "16px", color: "black" }}
                        className="fw-bold border-0 w3-hover-text-gray"
                      >
                        ALERTS
                      </Link>
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="border-0 ">
                    <p className="w3-margin-left">
                      <Link
                        to="#alerts"
                        className="w3-hover-text-red"
                        style={{ color: "gray" }}
                      >
                        Without Link
                      </Link>
                    </p>
                    <p className="w3-margin-left">
                      <Link
                        to="#alerts"
                        className="w3-hover-text-red"
                        style={{ color: "gray" }}
                      >
                        With Link
                      </Link>
                    </p>
                    <p className="w3-margin-left">
                      <Link
                        to="#alerts"
                        className="w3-hover-text-red"
                        style={{ color: "gray" }}
                      >
                        Message
                      </Link>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="border-0 ">
                  <Accordion.Header>
                    <span>
                      <Link
                        to="#forms"
                        style={{ fontSize: "16px", color: "black" }}
                        className="fw-bold border-0 w3-hover-text-gray"
                      >
                        FORMS
                      </Link>
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="border-0 ">
                    <p className="w3-margin-left">
                      <Link
                        to="#login"
                        className="w3-hover-text-red"
                        style={{ color: "gray" }}
                      >
                        Login
                      </Link>
                    </p>
                    <p className="w3-margin-left">
                      <Link
                        to="#signup"
                        className="w3-hover-text-red"
                        style={{ color: "gray" }}
                      >
                        Signup
                      </Link>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  eventKey="4"
                  
                  className="border-0 mt-3"
                >
                  <p className="w3-margin-left ">
                    <Link to="#refactor" style={{ fontSize: "16px" }}>
                      <b
                        className="'fw-bold border-0 w3-hover-text-gray "
                        style={{ marginLeft: "8px", color: "black" }}
                      >
                        TABLE
                      </b>
                    </Link>
                  </p>
                </Accordion.Item>

                <Accordion.Item
                  eventKey="5"
                  
                  className="border-0 mt-4"
                >
                  <p className="w3-margin-left">
                    <Link
                      to="#spyscroll"
                      style={{
                        fontSize: "16px",
                        color: "black",
                        marginLeft: "8px",
                      }}
                      className="fw-bold border-0 w3-hover-text-gray"
                    >
                      SPYSCROLL
                    </Link>
                  </p>
                </Accordion.Item>

                <Accordion.Item
                  eventKey="6"
                  
                  className="border-0 mt-4"
                >
                  <p className="w3-margin-left">
                    <Link
                      to="#graphics"
                      style={{
                        fontSize: "16px",
                        color: "black",
                        marginLeft: "8px",
                      }}
                      className="fw-bold border-0 w3-hover-text-gray"
                    >
                      GRAPHICS
                    </Link>
                  </p>
                </Accordion.Item>

                <Accordion.Item eventKey="7" className="border-0 ">
                  <Accordion.Header>
                    <span>
                      <Link
                        to="#sample-pages"
                        style={{ fontSize: "16px", color: "black" }}
                        className="fw-bold border-0 w3-hover-text-gray"
                      >
                        SAMPLE PAGES
                      </Link>
                    </span>
                  </Accordion.Header>
                </Accordion.Item>
              </Accordion>
            </div>
            </div>
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
              {/*end card-body for Notes*/}
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
            {/*4. start card-image for dayplanner*/}
            <div className="w3-card" id="dayplanner">
              <img
                src={Desk}
                alt="blog-profile"
                style={{ width: "100%" }}
                className="rounded-top w3-opacity w3-hover-opacity-off"
              ></img>
              {/*end card-image for dayplanner*/}
              {/*start card-body for dayplanner*/}
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
            {/*5. start card-image forREADME*/}
            <div className="w3-card" id="readme">
              <img
                src={README}
                alt="blog-profile"
                style={{ width: "100%" }}
                className="rounded-top w3-opacity w3-hover-opacity-off"
              ></img>
              {/*end card-image for README*/}
              {/*start card-body for readme*/}
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
              {/*end card-body forREADME*/}
            </div>
            {/*6. start card-image for REFACTOR*/}
            <div className="w3-card" id="refactor">
              <img
                src={Horizen}
                alt="blog-profile"
                style={{ width: "100%" }}
                className="rounded-top w3-opacity w3-hover-opacity-off"
              ></img>
              {/*end card-image for refactor*/}
              {/*start card-body for refactor*/}
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
          <div className="w3-container w3-margin-top">
              {/**start forms */}
              <h4 className="w3-text-black" id="#forms">
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
              <h4 className="w3-text-black w3-margin-top" id="#alert">
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
              <h4 className="text-black w3-margin-top" id="#tables">
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
              <h4 className="w3-text-black w3-margin-top" id="#graphics">
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
          <h4 className="w3-text-black w3-margin-top" id="#page-samples">
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
          <br />
          <p className="text-center">
            <Link to="/page-samples">
              VIEW SAMPLE PAGES
              <br />
              <br />
              <i className="fa fa-arrow-circle-right w3-xlarge"></i>
            </Link>
          </p>
        </div>
        {/**end sample pages section*/}
      </div>
      {/**^^^end main container*/}
      {/**end portfolio container wholepage */}
    </div>
  );
}

export default Portfolio;
