import React from "react";
import Blog from "../components/Portfolio/Blog/Blog.jsx";
import { Link } from "react-router-dom";
function PageSamples() {

    return (
        <div className='w3-padding-large w3-padding-64 w3-margin-top'>
          <div className='container'>
          <h1
          style={{
            fontSize: "4rem",
            textShadow: "0px 0px 14px #00ffff",
          }}
        >
         PAGE SAMPLES
        </h1>

        <p className="header" id="header" style={{ fontFamily: "Raleway" }}>
          Page samples consists of:
          <strong>
            {" "}
            <Link to="#blog"> BLOG STYLE PAGE</Link>
          </strong>
          ,<br></br>{" "}
          <strong>
            {" "}
            <Link to="#technical-skills">TECHNICAL SKILLS</Link>
          </strong>
          ,
          <strong>
            {" "}
            <Link to="#experience">EXPERIENCE & EDUCATION</Link>{" "}
          </strong>{" "}
          , and{" "}
          <strong>
            {" "}
            <Link to="download">RESUME DOWNLOAD</Link>
          </strong>{" "}
          -{" "}
        </p>
  
 
        </div>
<br />
<div></div>
        <Blog/>
   
        <h1 className='text-center'>MORE TO COME</h1>
        </div>
    );
    }

export default PageSamples;