import React from "react";
import { Link } from "react-router-dom";
import MeWhite from "../assets/images/MeWhite.png";
import ResumeDownload from "../assets/ResumeDownload.pdf";

function HomePage() {
  return (
    <div className="home-page" id="home-page">
      <header>
        <div className="row w3-justify w3-center w3-margin-top w3-padding-24">
          <div className="col-lg-5 ">
          <img
              src={MeWhite}
              className="w3-image w3-round"
              style={{ display: "block", width: "100%" }}
              alt="Profile"
            />
          </div>
          <div className="col-lg-6">
            <div
                 className="w3-container w3-center justify-content-center align-items-center"
                 style={{ padding: "100px 16px" }}
               >
                 <h1 className="w3-jumbo">
                   <b>Carol Wargo</b>
                 </h1>
                 <p>Full Stack Developer | UX Designer.</p>
            
                 <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
                   <Link
                     className="button text-black"
                     id="resume-download"
                     download
                     to={ResumeDownload}
                   >
                     <i className="fa fa-download"></i> Download Resume
                   </Link>
                 </button>
                 <br />
                 <br />
                 <br />
                 <br />
                 <Link to="/about" className="w3-margin-bottom"><i className="fa fa-arrow-circle-right w3-xxxlarge" ></i></Link>
           <p className="text-center">NEXT</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
