import React from 'react';
import JATE from "../assets/images/Portfolio/JATE.png";
import Notes from "../assets/images/Portfolio/Notes.png";
import SVG from "../assets/images/Portfolio/SVG.png";
import Desk from "../assets/images/Portfolio/Desk.png";
import README from "../assets/images/Portfolio/README.png";
import Horizen from "../assets/images/Portfolio/Horizen.png";
import WeatherBig from "../assets/images/Portfolio/WeatherBig.png";
import Password from "../assets/images/Portfolio/Password.png";


const Server = () => {


    return (
      
        <div className="w3-container w3-content w3-padding-48">
        <div className="row d-flex justify-content-center align-items-center">
        <div className="w3-container w3-padding-32">
        <h2 className="w3-text-black text-center" id="server">
                <b className="fw-bold text-black">Server-side Apps</b>     
              </h2>
              <hr className="w3-opacity" />

              <h4 className="text-black text-center">
                      Server-side functions handle request processing, data
                      management, security, and business logic in web apps. They
                      are vital for building scalable and secure applications. </h4>
              </div>
              <br />
          <div className="flex-column col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
          <div className="w3-card w3-opacity w3-hover-opacity-off" id="text-editor">
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
                    <h5
                      className=""
                      style={{ fontFamily: "sans-serif" }}
                      id="#server"
                    >
                      <b>Weather App</b>
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
                      className=""
                      style={{ fontFamily: "sans-serif" }}
                      id="#server"
                    >
                      <b>Password Generator</b>
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
                      className=""
                      style={{ fontFamily: "sans-serif" }}
                      id="#server"
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
              </div>

              <div className="flex-column col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
                {/*6. start card-image for REFACTOR*/}
                <div className="w3-card w3-opacity w3-hover-opacity-off"id="refactor">
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
              </div>
           </div>
</div>

    );
    }

export default Server;