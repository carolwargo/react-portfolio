import React from 'react';
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";
//import Accordion from "react-bootstrap/Accordion";
import JATE from "../assets/images/Portfolio/JATE.png";
import Notes from "../assets/images/Portfolio/Notes.png";
import SVG from "../assets/images/Portfolio/SVG.png";
import Desk from "../assets/images/Portfolio/Desk.png";
import README from "../assets/images/Portfolio/README.png";
import Horizen from "../assets/images/Portfolio/Horizen.png";
import WeatherBig from "../assets/images/Portfolio/WeatherBig.png";
import Password from "../assets/images/Portfolio/Password.png";
//import WebComponentsTrans from "../assets/images/WebComponentsTrans.png";


const Server = () => {
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
          className="portfolio"
          id="portfolio"
        >
               {/**Start INTRO Web Components */}
            <div className="container w3-padding-top-64 mb-4" id="server"> 
            <div className="row d-flex justify-content-center align-items-center w3-padding-large">
              <div className="col-sm-12 col-md-12 col-lg-12 flex-column my-1">
              <h1 className='text-center'>Utility Apps</h1>
              <hr className="w3-opacity" />
                  <h3 className='text-center'>
                  Utility apps prioritize functionality over aesthetics. They are built to serve practical purposes, such as file management, system optimization, productivity enhancement, or data analysis. Utility apps are essential tools for users seeking solutions to everyday problems or seeking to streamline their workflows.           </h3>
                  <p className='text-center mt-4'>
                {" "}
                <i>
                  <b> NOTE:</b> "Utility Apps page is under construction. View with
                  the understanding it's a work in progress. Thanks for your
                  patience."
                </i>
              </p>
               </div>
                </div>
            </div>

 
        <div className="w3-container w3-content w3-padding-32">
        <div className="row d-flex justify-content-center align-items-center">
       {/** 
       
        <div className="w3-container w3-padding-32">
        <h4 className="w3-text-black text-center">
                <b className="fw-bold text-black">Server-side Apps</b>     
              </h4>
              <hr className="w3-opacity" />

              <p className="text-black text-center">
                      Server-side functions handle request processing, data
                      management, security, and business logic in web apps. They
                      are vital for building scalable and secure applications. </p>
              </div>
              <br />
              */}
          <div className="flex-column col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
          <div className="w3-card w3-opacity w3-hover-opacity-off" id="text-editor">
                  <img
                    src={JATE}
                    alt="blog-profile"
                    style={{ width: "100%" }}
                    className="rounded-top w3-opacity w3-hover-opacity-off"
                  ></img>
                     <div className="position-absolute top-0 start-0 translate-middle w-50 bg-white py-1 px-2">
      <span className="text-dark">New</span>
    </div>
                  {/*end card-image for bio*/}
                  {/*start card-body for bio*/}
                  <div className="w3-container w3-white justify-content-center w3-center">
                    <br></br>
                    <h5
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
                      <a href="https://github.com/carolwargo/Text_Editor-in-Chief">
                      <button        
                        className="w3-button w3-black shadow-lg w3-block"
                      >
                        Github
                      </button>
                      </a>
                    </div>
                  </div>
                  {/*end card-body for JATE*/}
                </div>
                <br />
           </div>


            {/*2. start weather app*/}
           <div className="flex-column col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
                <div className="w3-card w3-opacity w3-hover-opacity-off"id="refactor">
                  <img
                    src={WeatherBig}
                    alt="blog-profile"
                    style={{ width: "100%" }}
                    className="rounded-top w3-opacity w3-hover-opacity-off"
                  ></img>
                  <div className="w3-container w3-white justify-content-center w3-center">
                    <br></br>
                    <h5>
                      <b>Weather App</b>
                    </h5>
                    <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                      <i>
                        Weather API, search by city- Current day, 5-day forecase and, save your top 5 cities for convenience.
                      </i>
                    </p>
                    <div className="card-footer w3-center w3-margin-bottom">
                      <p
                        className="w3-opacity text-center pt-2"
                        style={{ fontSize: "12px" }}
                      >
                        click to view repository
                      </p>
                      <a href="https://carolwargo.github.io/weather/">
                      <button        
                        className="w3-button w3-black shadow-lg w3-block"
                      >
                        Github
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
                <br />
              </div>
                {/*2. end weather app*/}




        {/*3. start password generator app*/}
        <div className="flex-column col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
                <div className="w3-card w3-opacity w3-hover-opacity-off"id="refactor">
                  <img
                    src={Password}
                    alt="blog-profile"
                    style={{ width: "100%" }}
                    className="rounded-top w3-opacity w3-hover-opacity-off"
                  ></img>
                  <div className="w3-container w3-white justify-content-center w3-center">
                    <br></br>
                    <h5

                      id="#server"
                    >
                      <b>Password Generator</b>
                    </h5>
                    <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                      <i> Generates random passwords, at the click of a button- 
                      Password is generated according to the User's 
                      selected criteria.
                      </i>
                    </p>
                    <div className="card-footer w3-center w3-margin-bottom">
                      <p
                        className="w3-opacity text-center pt-2"
                        style={{ fontSize: "12px" }}
                      >
                        click to view repository
                      </p>
                      <a href="https://carolwargo.github.io/JS-Password-Generator/">
                      <button        
                        className="w3-button w3-black shadow-lg w3-block"
                      >
                        Github
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
                <br />
              </div>
                {/*3. end password generator app*/}





           <div className="flex-column col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
              {/*2. start card-image for Notes*/}
              <div className="w3-card w3-opacity w3-hover-opacity-off" id="notes">
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
                      <a  href="https://github.com/carolwargo/forget-me-NOTES">
                      <button        
                        className="w3-button w3-black shadow-lg w3-block"
                      >
                        Github
                      </button>
                      </a>
                
                    </div>
                  </div>
                </div>
                <br />
            </div>

            <div className="flex-column col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
              {/*3. start card-image for SVG*/}
              <div className="w3-card w3-opacity w3-hover-opacity-off" id="svg">
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
                      
                      <a  href="https://github.com/carolwargo/forgetSVG">
                      <button        
                        className="w3-button w3-black shadow-lg w3-block"
                      >
                        Github
                      </button>
                      </a>
                    </div>
                  </div>
                  {/*end card-body for SVG*/}
                </div>
                <br />
              </div>


              <div className="flex-column col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
               {/*4. start card for dayplanner*/}
               <div className="w3-card w3-opacity w3-hover-opacity-off" id="dayplanner">
                  <img
                    src={Desk}
                    alt="blog-profile"
                    style={{ width: "100%" }}
                    className="rounded-top w3-opacity w3-hover-opacity-off"
                  ></img>
                  <div className="w3-container w3-white justify-content-center w3-center">
                    <br></br>
                    <h5

                      >
                      <b>Day Planner App</b>
                    </h5>
                    <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                      <i>
                        A calendar application that allows a User to save
                        events, for each hour of a typical 9/5 work day.
                      </i>
                    </p>
                    <div className="card-footer w3-center w3-margin-bottom">
                      <p
                        className="w3-opacity text-center pt-2"
                        style={{ fontSize: "12px" }}
                      >
                        click to view repository
                      </p>
                      <a   href="https://carolwargo.github.io/Desk_Jockey-dayplanner/">
                      <button        
                        className="w3-button w3-black shadow-lg w3-block"
                      >
                        Github
                      </button>
                      </a>
                    </div>
                  </div>
                  {/*4. end card-body for dayplanner*/}
                </div>
                <br />
              </div>

              <div className="flex-column col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
               {/*5. start card for README*/}
               <div className="w3-card w3-opacity w3-hover-opacity-off" id="readme">
                  <img
                    src={README}
                    alt="blog-profile"
                    style={{ width: "100%" }}
                    className="rounded-top w3-opacity w3-hover-opacity-off"
                  ></img>
                  <div className="w3-container w3-white justify-content-center w3-center">
                    <br></br>
                    <h5

                    >
                      <b>README Generator</b>
                    </h5>
                    <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                      <i>
                       Takes in User input to generate a
                        well-structured README.md file.
                      </i>
                    </p>
                    <div className="card-footer w3-center w3-margin-bottom">
                      <p
                        className="w3-opacity text-center pt-2"
                        style={{ fontSize: "12px" }}
                      >
                        click to view repository
                      </p>
                      <a  href="https://github.com/carolwargo/forget-me-NOTES">
                      <button        
                        className="w3-button w3-black shadow-lg w3-block"
                      >
                        Github
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              <div className="flex-column col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
               {/*5. start card for README*/}
               <div className="w3-card w3-opacity w3-hover-opacity-off" id="readme">
                  <img
                   src={Horizen}
                    alt="blog-profile"
                    style={{ width: "100%" }}
                    className="rounded-top w3-opacity w3-hover-opacity-off"
                  ></img>
                  <div className="w3-container w3-white justify-content-center w3-center">
                    <br></br>
                    <h5

                    >
                      <b>Code Refactor</b>
                    </h5>
                    <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                      <i>
                     'Implemented to follow WCAG standards, optimize search
                        engines & limit liability.' 
                      </i>
                    </p>
                    <div className="card-footer w3-center w3-margin-bottom">
                      <p
                        className="w3-opacity text-center pt-2"
                        style={{ fontSize: "12px" }}
                      >
                        click to view repository
                      </p>
                      <a  href="https://github.com/carolwargo/Code-Refactor-Horisen">
                      <button        
                        className="w3-button w3-black shadow-lg w3-block"
                      >
                        Github
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
                <br />
              </div>
                </div>
              {/**Start Graphics LinkSamples */}
        <div className="w3-container w3-padding-48 w3-margin-top">
        <div className="row d-flex justify-content-center align-items-center">
      
          <div className="flex-column col-sm-12 col-md-12 col-lg-12 justify-content-center align-items-center">
            <div className="container w3-white text-center w3-padding-large w3-padding-small">
            <h2 className="w3-text-black w3-margin-top" id="forms">
                <b className="fw-bold text-black">Graphic Elements</b>
               
              </h2>
              <hr className="w3-opacity" />

              <h4 className="text-black">
              Graphic elements allow designers to create compelling and impactful experiences that resonate with audiences and achieve their design objectives.</h4>
 <br />
 {/** FOR GRAPHICS PAGE INTRO "A picture is worth a thousand words." Convenys the sentiment of complex ideas or emotions can be conveyed more effectively through a single image than through a lengthy description or explanation. It underscores the power of visual communication and the ability of images to capture attention, evoke emotions, and communicate messages in a concise and impactful manner.</h4>
              */}
              <p>
                {" "}
                <i>
                  <b> NOTE:</b> "Graphic elements page is under construction. View with
                  the understanding it's a work in progress. Thanks for your
                  patience."
                </i>
              </p>
              <button
                className="w3-button w3-text-light-grey  w3-margin-right w3-round-xxlarge mt-2 w3-margin-bottom"
                style={{ backgroundColor: "#FF385C" }}
              >
                <Link
                  to="/graphics#graphics"
                  className="button text-white"
                  onClick={scrollToTop}
                >
                VIEW GRAPHICS PAGE
                </Link>
              </button>
            </div>
          </div>
        </div>
        </div>
        {/**End Graphics Link*/}
           <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#portfolio" style={{ color: "#FF385C" }}>
                Back to top
              </a>
            </p>
          </div>
        </footer>
</div>
</motion.div>

    );
    }

export default Server;