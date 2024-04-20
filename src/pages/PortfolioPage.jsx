import React from "react";
import { motion } from "framer-motion";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import CloseButton from "react-bootstrap/CloseButton";
import PortfolioBG from "../assets/images/Portfolio/PortfolioBG.png";
import { Link } from "react-router-dom";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Portfolio() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className="home"
    >
      <div className="portfolio" id="portfolio">
        <header
          style={{
            backgroundImage: `url(${PortfolioBG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "300px", // Default minimum height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            className="mask"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              pointerEvents: "none",
            }}
          ></div>
          <div
            className="w3-container align-items-center w3-margin-top w3-padding-48 w3-padding-large justify-content-between text-center"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <h1 className="mt-5"
              style={{
                fontSize: "3rem",
                textShadow: "0px 0px 14px #00ffff",
              }}
            >
              <span className="fw-light">PORTFOLIO.</span>
            </h1>
            <p>Portfolio includes server side functions, web components, forms, and sample sites, and more...</p>
          </div>
        </header>
        {/**body start */}

        <div className="w3-main container w3-padding-top-32">
          <div className="row d-flex w3-justify">
            <div className="w3-col l4">
              <div className="container w3-margin-bottom">
                {/*start card-container server code*/}
                <div className="w3-card w3-black" id="server">
                  {/*start card-body for bio*/}
                  <div className="w3-container justify-content-center">
                    <br></br>
                    <h4
                      className=""
                      style={{ fontFamily: "sans-serif" }}
                      id="#server"
                    >
                      <b>SERVER-SIDE APPS</b>
                    </h4>
<hr />
                    <p
                      className="mb-3 fw-light w3-margin-top"
                      style={{ fontSize: "14px" }}
                    >
                      Server-side functions handle request processing, data
                      management, security, and business logic in web apps. They
                      are vital for building scalable and secure applications.
                    </p>

                    <div
                      className="card-footer w3-padding-24 w3-text-light-gray"
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
                        Text_Editor is a browser-based text editor that allows
                        Users to create and edit text documents seamlessly.
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
                </div>
                <br />
                {/*3. start card-image for SVG*/}
                <div className="w3-card" id="svg">
                  <img
                    src={SVG}
                    alt="blog-profile"
                    style={{ width: "100%" }}
                  ></img>
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
                        A Node.js CLI that takes in user input, such as color,
                        shape & text to generate a logo & save it as an SVG
                        file.
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
                </div>
                <br />
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
                        A calendar application that allows a User to save
                        events, for each hour of the work day.
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
                </div>
                <br />
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
                        well-structured README.md file saving time for
                        developers.
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
                </div>
                <br />
                {/*************************************************************************/}

                <div className="w3-card" id="text-editor">
                  <div className="container w3-padding w3-padding-32">
                    <h4
                      className=""
                      style={{ fontFamily: "sans-serif" }}
                      id="#button"
                    >
                      BUTTONS
                    </h4>
                    <hr />

                    <div className="row d-flex justify-content-center align-items-center w3-margin-top">
                      <div className="flex-column col-sm-12 col-md-12 col-lg-12 justify-content-center align-items-center">
                        <div className="container text-center">
                          <p className="mb-2">
                            <i className="fa fa-info-circle  w3-large text-info"></i>
                            <b> Button variations displayed include:</b> <br />
                            size, color, outline, solid, shape, icon elements
                            and shadowing to give the appearance the element is
                            floating.{" "}
                          </p>
                          <br />
                          <Button
                            variant="secondary"
                            size="lg"
                            className="mb-2"
                          >
                            Large button
                          </Button>
                          <Button
                            variant="outline-secondary"
                            size="lg"
                            className="mb-2 shadow"
                            style={{ width: "100%" }}
                          >
                            Large button
                          </Button>{" "}
                        </div>
                      </div>
                    </div>

                    <div className="row d-flex justify-content-center align-items-center w3-margin-top">
                      <div className="flex-column col-sm-12 col-md-12 col-lg-12 justify-content-center align-items-center">
                        <div className="container text-center">
                          <Button
                            variant="primary"
                            size="sm"
                            className="w3-margin-right"
                          >
                            Small button
                          </Button>

                          <Button
                            variant="secondary"
                            size="sm"
                            className="shadow"
                          >
                            Small button
                          </Button>
                        </div>
                      </div>
                    </div>
                    <br />
                    <hr />
                    <div className="row d-flex justify-content-center align-items-center w3-margin-top w3-padding-16">
                      <div className="flex-column col-sm-12 col-md-12 col-lg-12 justify-content-center align-items-center">
                        <div className="container text-center">
                          <p>
                            {" "}
                            <i className="fa fa-info-circle  w3-large text-info"></i>{" "}
                            Buttons can serve as notifiers such as: close
                            "this", or badges notifications to look at "that".
                          </p>
                          <CloseButton className="w3-margin-right w3-padding-large shadow border border-black border-2" />
                          <Button variant="primary" style={{ padding: "12px" }}>
                            Profile <Badge bg="secondary">9</Badge>
                            <span className="visually-hidden">
                              unread messages
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="row d-flex  justify-content-center align-items-center w3-margin-top w3-padding-16">
                      <div className="flex-column col-sm-12 col-md-12 col-lg-12 justify-content-center align-items-center">
                        <div className="container text-center">
                          <p>
                            <i className="fa fa-info-circle w3-large text-info"></i>{" "}
                            Buttons can be linked to functions such as:
                            downloads, video play and even social media
                            profiles.
                          </p>
                          <Button
                            variant="secondary"
                            size="sm"
                            className="rounded-circle shadow w3-margin-right"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          >
                            <i className="fa fa-download w3-large"></i>
                          </Button>

                          <Button
                            variant="success"
                            size="sm"
                            className="w3-opacity w3-hover-opacity-off rounded-circle w3-margin-right"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          >
                            <i className="fa fa-play w3-large"></i>
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            className=" rounded-circle"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faPinterest}
                              className="w3-large"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
            {/*End col-4*/}

            {/*Start col-8*/}

            <div className="w3-col l8">
              <div className="w3-content">
                <div className="w3-white align-items-center justify-content-center"></div>
                <div className="container w3-padding">
                  <div className="row d-flex justify-content-center">
                   
                    <div className="mt-0" style={{paddingTop:'0px'}}>
                    <h3 className="w3-margin-bottom">
                      <b className="fw-bold text-black">WEB</b>
                      <span className="text-muted fw-light">COMPONENTS</span>
                    </h3>
                    <hr />
                    </div>

                    <p >
                      Web components are a set of standardized technologies that
                      enable the creation of custom elements for web
                      applications. Promote code reusability, maintainability,
                      and interoperability across different web frameworks and
                      libraries.
                    </p>
                    <p>Choose a component to view from the menu below.</p>
                  
                    <div className="container d-flex justify-content-center w3-margin-top w3-light-grey">
              
                      <div className="w3-button w3-light-grey mb-1">
                        <a className="fw-bold text-black" href="#forms">
                          FORMS
                        </a>
                      </div>
                      <div className="w3-button w3-light-grey mb-1">
                        <a className="fw-bold text-black" href="#alerts">
                          ALERTS
                        </a>
                      </div>
                      <div className="w3-button mb-1 w3-light-grey">
                        <a className="fw-bold text-black" href="#tables">
                          TABLES
                        </a>
                      </div>

                      <div className="w3-button mb-1 w3-light-gray ">
                        <a className="fw-bold text-black" href="#graphics">
                          GRAPHICS
                        </a>
                      </div>
                      <div className="w3-button mb-1 w3-light-gray ">
                        <a className="fw-bold text-black" href="#spy-scroll">
                          SPY SCROLL
                        </a>
                      </div>
                      <div className="w3-button mb-1 w3-light-gray ">
                        <a className="fw-bold text-black" href="#page-samples">
                          SAMPLES
                        </a>
                      </div>
                    </div>
                  </div>

                  <br />
               

                  {/**start forms */}
                  <h4 className="w3-margin-top" id="forms">
                    <b className="fw-bolder w3-text-black">FORM</b>
                    <span className="fw-lighter text-muted">COMPONENTS.</span>
                  </h4>
                  <hr />
                  <p className="w3-text-black">
                    Digital components in web development are used to enhancing
                    user interaction, organizing content, and improving the
                    overall user experience of a website.
                  </p>
                  <p className="w3-text-black">
                    Forms are for collecting and submitting user data on a
                    website. They consist of input fields such as text boxes,
                    dropdown menus, checkboxes, and buttons, allowing users to
                    interact with the website and provide information.
                  </p>

                  <br />

                  <Login />
                  <br />
                  <br />
                  <Signup />

                  <br />
                  <br />
                  {/**end forms */}

                  <h4 id="alerts" className="w3-margin-top">
                    <b className="fw-bold text-black">ALERT</b>
                    <span className="fw-light text-muted">COMPONENTS.</span>
                  </h4>
                  <p>
                    Alert color options are strategically chosen to convey
                    different meanings and priorities. Color options and
                    designed use are as follows:{" "}
                  </p>
                  <hr />

                  <Alert variant="info">
                    <Alert.Heading>
                      {" "}
                      <h4 id="alerts">THIS IS AN ALERT.</h4>{" "}
                    </Alert.Heading>
                    <hr />
                    <p className="mb-0 w3-hover-opacity w3-margin-bottom">
                      Alerts are designed to be attention-grabbing, often with
                      prominent colors, icons, and text formatting to ensure
                      users notice them.
                    </p>

                    <hr />
                    <p>Color indicates info alert.</p>
                  </Alert>

                  <div className="container">
                    <h5 className="w3-margin-bottom w3-margin-top">
                      ALERT BOX COLOR OPTIONS & USE:
                    </h5>
                    <div className="row justify-content-center align-items-center ">
                      <div className="flex-column col-sm-12 col-md-6 col-lg-6">
                        <p style={{ fontSize: "14px" }}>
                          {" "}
                          Blue, light gray, white, and black are often used to
                          establish a messaging hierarchy, with 'primary' being
                          the most prominent color, indicating the primary
                          action or information.
                        </p>
                      </div>

                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div
                          style={{ display: "flex", gap: "10px" }}
                          className=" justify-content-center"
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#b8daff",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              Primary
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#d6d8db",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              Secondary
                            </p>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "white",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              White
                            </p>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "black",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              Black
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />

                    <div className="row justify-content-center align-items-center ">
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <p style={{ fontSize: "14px" }}>
                          {" "}
                          Green, red, and yellow are commonly associated with
                          actions or statuses.
                        </p>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div
                          style={{ display: "flex", gap: "10px" }}
                          className="justify-content-center align-items-center "
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#c3e6cb",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              Success
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: " #f5c6cb",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              Danger
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#ffeeba",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              Warning
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row justify-content-center align-items-center ">
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <p style={{ fontSize: "14px" }}>
                          {" "}
                          Lighter shades such as light and teal are frequently
                          employed to inform, direct, or notify users without
                          necessarily signaling urgency or importance.
                        </p>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div
                          style={{ display: "flex", gap: "10px" }}
                          className="justify-content-center align-items-center "
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#bee5eb",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              Info
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#f8f9fa",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              Light
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#495057",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              Dark
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <h4 className="text-black w3-margin-top" id="tables">
                    <b className="fw-bold text-black">TABLE</b>
                    <span className="fw-light text-muted">COMPONENTS.</span>
                  </h4>
                  <hr />
                  <div className="container">
                    <p className="w3-text-black">
                      Tables are structured grids used to present data in rows
                      and columns. They're commonly used for displaying tabular
                      data, such as product listings, pricing tables, or data
                      summaries.
                    </p>
                    <div className="container  w3-padding">
                      <TableBasic />
                    </div>
                    <br />
                    <h4
                      className="w3-text-black w3-margin-top"
                      id="page-samples"
                    >
                      <b className="fw-bold text-black">GRAPHIC</b>
                      <span className="fw-light text-muted"> ELEMENTS.</span>
                    </h4>
                    <hr className="w3-opacity" />
                    <p className="w3-text-black">
                      Graphics play a key role in communication, whether it's in
                      advertising, branding, web design, or multimedia content.
                      They serve as visual elements that enhance the
                      presentation of information and ideas, making them more
                      engaging, memorable, and effective.
                    </p>
                    <br />
                    <br />
                    <Graphics />
                    {/**end graphics */}
                  </div>
                  {/**end col-8 container*/}
                </div>
                {/**end col-8*/}
              </div>
            </div>
            {/**end row */}
            {/**start sample pages section*/}

            <div className="container w3-padding">
              <h4 className="w3-text-black w3-margin-top" id="page-samples">
                <b className="fw-bold text-black">WEB PAGE</b>
                <span className="fw-light text-muted">SAMPLES.</span>
              </h4>
              <hr className="w3-opacity" />
              <p>
                Each type of website serves a unique purpose and requires
                specific features and functionalities to effectively achieve its
                objectives and meet the needs of its target audience.{" "}
                <i>
                  {" "}
                  <b> NOTE:</b> "Sample pages are under construction. View with
                  the understanding it's a work in progress. Thanks for your
                  patience."{" "}
                </i>
              </p>
              <div className="text-center w3-padding-16 w3-padding-large">
                <Link to="/page-samples#page-samples" onClick={scrollToTop}>
                  <p>
                    Follow the link to see the start of my sample sites.
                    <i className="fa fa-arrow-right w3-hover-opacity w3-margin-left"></i>
                  </p>
                </Link>
              </div>
            </div>
            <footer className="text-muted py-5">
              <div className="container">
                <p className="float-end mb-1">
                  <a href="#portfolio">Back to top</a>
                </p>
              </div>
            </footer>
          </div>
        </div>
        {/**^^^end main container*/}
        {/**end portfolio container wholepage */}
      </div>
    </motion.div>
  );
}

export default Portfolio;
