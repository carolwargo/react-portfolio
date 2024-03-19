import React from "react";
import { Link } from "react-router-dom";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faChartBar, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';


import Design from "../assets/images/Resume/Design.png";
import VCIDE from "../assets/images/Resume/VCIDE.png";
import Front from "../assets/images/Resume/Front.png";
import Back from "../assets/images/Resume/Back.png";
import DB from "../assets/images/Resume/DB.png";
import Core from "../assets/images/Resume/Core.png";
import Package from "../assets/images/Resume/Package.png";
import BuildTest from "../assets/images/Resume/BuildTest.png";
import APIQ from "../assets/images/Resume/APIQ.png";
import ResumeDownload from "../assets/ResumeDownload.pdf";

import Accordion from 'react-bootstrap/Accordion';

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function ResumePage() {

  return (
    <div className="resume" id="resume">
   <div className="w3-container w3-padding-48 w3-margin-top">
 
        {/**start Portfolio section */}
        
        <h1
          style={{
            fontSize: "4rem",
            textShadow: "0px 0px 14px #00ffff",
          }}
        >
          RESUME{" "}
        </h1>

        <p className="header" id="header" style={{ fontFamily: "Raleway" }}>
          Digital Resume contains{" "}
          <strong>
            {" "}
            <Link to="#professional-achievements"> PROFESSIONAL ACHIEVEMENTS</Link>
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
  
        <hr />
        <div className='bg-black text-white d-flex flex-column w3-padding-32 w3-padding-large'>
                <h1 className='text-center'>
                  <b>PROFESSIONAL ACHIEVEMENTS</b>
                </h1>
                <p className='text-center'>
                  Discover some of my key accomplishments. Click on the
                  respective buttons for more details.
                </p>
                </div>
        <div className='w3-container w3-content w3-padding-32'>
        <div className="row d-flex justify-content-center align-items-center" >
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
      <Accordion.Header className="text-center">
  <span style={{fontSize:'1rem'}} >
    <FontAwesomeIcon icon={faArrowTrendUp} />  </span> <span style={{fontSize:'1rem'}} className="px-3"> DIGITAL MARKETING.</span>
 
</Accordion.Header>
        <Accordion.Body>
        <ul className="w3-margin-top">
            <br />
            <li  style={{fontSize:'14px'}}><strong>Challenge Faced:</strong> Presented with a fiercely competitive market environment, the objective was to craft compelling marketing campaigns aimed at enticing prospective buyers.</li>
            <li  style={{fontSize:'14px'}}><strong>Assigned Task:</strong> The mandate involved formulating and implementing a comprehensive digital marketing strategy tailored to effectively showcase the property's unique selling propositions.</li>
            <li  style={{fontSize:'14px'}}><strong>Strategic Action:</strong> This encompassed detailed market research to pinpoint target demographics and buyer personas. It entailed the creation of multi-channel digital campaigns leveraging social media advertising, email marketing, and search engine optimization, all strategically designed to accentuate the property's features and benefits.</li>
            <li  style={{fontSize:'14px'}}><strong>Outcome Achieved:</strong> The initiatives resulted in a notable upsurge in traffic, with campaigns generating an average increase of 40%. Moreover, the majority of closed sales, approximately 96%, were attributed to leads generated through these traffic-driven campaigns.</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>
  <span style={{fontSize:'1rem'}}>
    <FontAwesomeIcon icon={faMoneyCheckAlt} />  </span><span style={{fontSize:'1rem'}} className="px-3"> INCREASED PROFIT.</span>
</Accordion.Header>  
<Accordion.Body>
        <ul className="mx-2">
  <li style={{fontSize:'14px'}}><strong>Challenge Faced:</strong> Transformed neglected property with substantial rent arrears.</li>
  <li style={{fontSize:'14px'}}><strong>Assigned Task:</strong> Developed a cost-effective rehab plan to boost property appeal and recover lost rental income.</li>
  <li style={{fontSize:'14px'}}><strong>Strategic Action:</strong> Led as General Contractor, conducted property assessment, prioritized upgrades, and managed legalities.</li>
  <li style={{fontSize:'14px'}}><strong>Outcome Achieved:</strong> Slashed project time by 25%, achieved a 15% budget surplus, leading to a 20% profit boost.</li>
</ul>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
      <Accordion.Header>
  <span style={{fontSize:'1rem'}}>
    <FontAwesomeIcon icon={faChartBar} /></span> <span style={{fontSize:'1rem'}} className="px-3"> TECH UPGRADE.</span>

</Accordion.Header> 
<Accordion.Body>
        <ul className="w3-margin-top">
<li  style={{fontSize:'14px'}}><strong>Challenge Faced:</strong> The challenge involved upgrading operational practices by leveraging modern technology.</li>
<li  style={{fontSize:'14px'}}><strong>Assigned Task:</strong> This necessitated the implementation of cutting-edge real estate software and the adoption of paperless systems.</li>
<li  style={{fontSize:'14px'}}><strong>Strategic Action:</strong>The outcome resulted in a notable enhancement of operational efficiency and an enriched client experience. </li>
<li  style={{fontSize:'14px'}}><strong>Outcome Achieved:</strong>The outcome resulted in a notable enhancement of operational efficiency and an enriched client experience.</li>
</ul>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </div>
        </div>
        </div>
      
      <div className="technical-skills-div d-flex flex-column bg-black text-white w3-padding-48">
        <h1
          className="technical-skills text-light text-center"
          id="technical-skills"
        >
          TECHNICAL SKILLS
        </h1>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              DESIGN & COLLABORATION TOOLS
              <img
                src={Design}
                alt="Design"
                className="img-fluid"
                style={{ width: "130%"}}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              VERSION CONTROL & IDE
              <img
                src={VCIDE}
                alt="VCIDE"
                className="img-fluid"
                style={{ width: "130%"}}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              CORE TECHNOLOGIES
              <img
                src={Core}
                alt="Core"
                className="img-fluid"
                style={{ width: "130%"}}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              FRONT END DEVELOPMENT
              <img
                src={Front}
                alt="Front"
                className="img-fluid"
                style={{ width: "130%"}}
              />
            </TimelineContent>
          </TimelineItem>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                BACK END DEVELOPMENT
                <img
                  src={Back}
                  alt="Back"
                  className="img-fluid"
                  style={{ width: "130%"}}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                DATABASES
                <br></br>
                <img
                  src={DB}
                  alt="DB"
                  className="img-fluid"
                  style={{ width: "150%"}}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                PACKAGE MANAGERS
                <img
                  src={Package}
                  alt="Package"
                  className="img-fluid"
                  style={{ width: "130%"}}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                BUILD & TEST TOOLS
                <img
                  src={BuildTest}
                  alt="BuildTest"
                  className="img-fluid"
                  style={{ width: "130%"}}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                API & QUERY LANGUAGE
                <img
                  src={APIQ}
                  alt="APIQ"
                  className="img-fluid"
                  style={{ width: "130%"}}
                />
              </TimelineContent>
            </TimelineItem>
            <br />
            <br />
            <TimelineItem>
              <TimelineOppositeContent color="text.light" id="education">
                <h5 className="text-white">
                  Certificate of Full Stack Web Development
                </h5>
                <h6 className="text-white">
                  George Washington University (July 2023)
                </h6>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent>
                <h3>EDUCATION</h3>
              </TimelineContent>
            </TimelineItem>
            <div className="d-flex flex-row justify-content-center">
          <div className="d-flex flex-column">
            <p className="text-white">DOWNLOAD A COPY OF MY RESUME</p>
           
            <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
            <a
    className="button text-black"
    id="download"
    download 
    href={ResumeDownload}
  >
    <i className="fa fa-download"></i> Download Resume
  </a>
          </button>
          </div>
          </div>
          </Timeline>
        </Timeline>
        </div>
      
  </div>
   
  );
}
