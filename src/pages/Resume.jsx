import React from "react";
import { NavLink } from "react-bootstrap";
import "../styles/links.css";

import { MDBRow, MDBCol } from "mdb-react-ui-kit";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import ResumeDownload from "../assets/images/ResumeDownload.png";
import Design from "../assets/images/Design.png";
import VCIDE from "../assets/images/VCIDE.png";
import Front from "../assets/images/Front.png";
import Back from "../assets/images/Back.png";
import DB from "../assets/images/DB.png";
import Core from "../assets/images/Core.png";
import Package from "../assets/images/Package.png";
import BuildTest from "../assets/images/BuildTest.png";
import APIQ from "../assets/images/APIQ.png";
import SmallWorkspace from "../assets/images/SmallWorkspace.png";

const flowLinks = {
  display: "flex",
  justifyContent: "center",

};

export default function ResumePage() {
  return (
    <div className="resume" id="resume">
      <div className=" bg-light text-black pt-4 pl-4">
        <h1
          style={{
            fontFamily: "bellota text",
            fontSize: "4rem",
            marginLeft: "1rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
            paddingLeft: "1rem",
          }}
        >
          RESUME{" "}
        </h1>

        <h5 className="mr-3 ml-3" style={{ fontFamily: "bellota text", paddingLeft: "2rem"   }}>
          Digital Resume contains{" "}
          <strong>
            {" "}
            <a href="#professional-background"> PROFESSIONAL BACKGROUND</a>
          </strong>
          ,<br></br>{" "}
          <strong>
            {" "}
            <a href="#technical-skills">TECHNICAL SKILLS</a>
          </strong>
          ,
          <strong>
            {" "}
            <a href="#experience">EXPERIENCE & EDUCATION</a>{" "}
          </strong>{" "}
          , and{" "}
          <strong>
            {" "}
            <a href="#resume-download">RESUME DOWNLOAD</a>
          </strong>{" "}
          -{" "}
        </h5>
        <p
          className="text-secondary ml-3"
          style={{ fontFamily: "bellota text", marginBottom: "2rem",  paddingLeft: "2rem" }}
        >
          {" "}
          "<strong>Click the links above</strong> to jump to the section you
          want to view... and
          <br></br>
          <strong>
            {" "}
            Follow the <span style={{ color: "red" }}>"Back"</span> &{" "}
            <span style={{ color: "blue" }}> "Next"</span> links
          </strong>{" "}
          at the bottom of each page to ensure nothing is missed! "
        </p>
      </div>

      <div
        className="professional-background mt-3"
        id="professional-background"
      >
        <MDBRow
          className="pro-row pt-2 bg-secondary-subtle"
          style={{
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingBottom: "2rem",
            borderRadius: "10px",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <MDBCol md="12">
            <h1
              className="text-black"
              style={{
                textDecoration: "underline",
                fontFamily: "bellota text",
                textAlign: "center",
                paddingTop: "2rem",
                marginBottom: "2rem",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
              }}
            >
              PROFESSIONAL BACKGROUND
            </h1>
            <p style={{ marginRight: "2rem" }}>
              I have earned my living in Real Estate for the last 21 years in
              various capacities. Started as an Agent ("Salesperson"), recruited
              to work directly under the #1 Broker in my area, transitioned to
              Group Investment Properties, and subsequently ventured into my own
              personal Investments, taking on roles such as Owner, Landlord,
              Designer, Marketing Manager, General Contractor, and even Laborer.
            </p>{" "}
          </MDBCol>
<MDBRow
 style={{ 
  borderRadius: "10px", 
  padding: "1rem",
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
  backgroundColor: "white",
  marginBottom: "2rem",
  }}
>
          <MDBCol md="5" >
            <img
              src={SmallWorkspace}
              alt="SmallWorkspace"
              className="img-fluid"
              style={{ width: "100%", borderRadius:'10px' }}
            />
          </MDBCol>
       
          <MDBCol md="7" style={{ color: "black", paddingTop:'1.5rem'}}>
            <ul
             
            >
              <li>
                {" "}
                <strong>The last 20 years in business</strong>, have presented
                the opportunity for me to work in various roles. These
                experiences have honed my communication skills, ability to
                collaborate with cross-functional teams, and provided me with a
                strong foundation in project management. I can effectively
                translate business requirements into technical solutions,
                ensuring projects not only meet the functional needs but also
                align with the overall business objectives.
              </li>
              <li>
                {" "}
                <strong>Collaboration and teamwork</strong> are at the core of
                my approach. I enjoy working alongside talented individuals,
                leveraging our collective skills to create impactful solutions.
                Through effective communication and a collaborative mindset, I
                believe in delivering high-quality work that meets client
                requirements and exceeds expectations.
              </li>
              
              <li>
                <strong>Continuous learning</strong> is a fundamental aspect of
                personal & professional growth. I constantly seek opportunities
                to expand my knowledge and refine my skills. I am a forward
                thinker, lifetime student that strives to stay ahead of the
                curve, ensuring that I can provide innovative solutions that
                address the evolving needs of the industry.
              </li>
            </ul>
            
          </MDBCol>
          </MDBRow>
         
        
          <p className="mb-2">
              {" "}
              "I bring a wealth of experience and commitment to excellence to
              the table. With a solid foundation in business, I have built a
              track record of success through hard work and adaptability. As I
              shift my focus to software development, I carry forward the
              strategic thinking, negotiation skills, and dedication to
              excellence that defined my real estate career. By drawing
              parallels between these two domains, I am well-positioned to
              harness my expertise to foster well-crafted and meaningful
              solutions."
            </p>
        </MDBRow>
      </div>
      <div
        className="technical-skills-div d-flex flex-column bg-dark"
        style={{
          fontFamily: "bellota text",
          color: "white",
        }}
      >
        <h1
          className="technical-skills text-light mt-2"
          id="technical-skills"
          style={{
            textDecoration: "underline",
            color: "white",
            fontFamily: "bellota text",
            textAlign: "center",
            paddingTop: "2rem",
            marginBottom: "2rem",
            textShadow: "1px 1px 3px rgba(255, 255, 255, 1)",
          }}
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
                style={{ width: "80%", marginLeft: "2rem" }}
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
                style={{ width: "80%", marginLeft: "2rem" }}
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
                style={{ width: "80%", marginBottom: "2rem" }}
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
                style={{ width: "80%", marginLeft: "2rem" }}
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
                  style={{ width: "80%", marginLeft: "2rem" }}
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
                  style={{ width: "80%", marginLeft: "2rem" }}
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
                  style={{ width: "80%", marginLeft: "2rem" }}
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
                  style={{ width: "80%", marginLeft: "2rem" }}
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
                API & QUERY LANGUAGE
                <img
                  src={APIQ}
                  alt="APIQ"
                  className="img-fluid"
                  style={{ width: "80%", marginLeft: "2rem" }}
                />
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Timeline>
        <h4 style={{ textAlign: "center" }}>
          <strong>MORE TO COME!</strong> <br></br>Exploring & Studying New
          Technologies Daily!
        </h4>

        <br></br>
        <div className="professional-experience container-fluid mt-5 pb-4 d-flex flex-column justify-content-center bg-white text-black">
          <h1
            className="text-black p-5"
            id="experience"
            style={{
              textDecoration: "underline",
              textAlign: "center",
              fontFamily: "bellota text",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
            }}
          >
            EXPERIENCE & EDUCATION
          </h1>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h3 className="text-black">WORK HISTORY</h3>
                <h4 className="text-black">Real Estate Industry</h4>
                <p className="text-black ">
                  (July 2003 -Present ) License Status: "Current"<br></br>
                  Agent ("Salesperson"), Group Investments, Personal Investments
                  <br></br><br></br><strong className="text-decoration-underline">TITLES & DUTIES</strong>
                  </p>
                  <ul>
                    <li>Owner</li>
                    <li>Landlord</li>
                    <li>Marketing Manager</li>
                    <li>Designer</li>
                    <li>Sales</li>
                    <li>General Contractor</li>
                  </ul>
                
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h3 className="text-black">EDUCATION</h3>
                <h5 className="text-black">
                  Certificate of Full Stack Web Development
                </h5>
                <h6 className="text-black">
                  George Washington University (July 2023)
                </h6>
                <h3 className="text-black">Additional Courses</h3>
                <h5 className="text-black">- 13 hour React Router 6</h5>
                <p className="text-black">Scrimba Pro</p>
                <h5 className="text-black">- 5 hour React</h5>
                <p className="text-black">Scrimba Pro</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
              <h3 className="text-dark">CURRENT ENDEAVORS</h3>
<h4 className="text-dark">Freelance Design & Development</h4>
<p className="text-dark">
  I have worked as a freelance professional for years, prior to completing my formal education. I currently have multiple projects in-progress... I know the importance of working with others & feel I will benefit any work environment. <br></br>Click "Download" button below to download my resume or "Next (Portfolio)" to view some of my work!
</p>

              </TimelineContent>
            </TimelineItem>

            <br></br>
            <div className="d-flex flex-row justify-content-center">
              <div className="d-flex flex-column">
                <p className="text-black">DOWNLOAD A COPY OF MY RESUME</p>

                <a
                  className="btn bg-black text-light"
                  id="resume-download"
                  download
                  href={ResumeDownload}
                >
                  Download
                </a>
              </div>
            </div>
          </Timeline>
        </div>
      </div>
      <div className="flow-links" style={{ flowLinks }}>
  <NavLink
    href="/react-portfolio/about"
    id="#about"
    style={{ color: "red", marginRight: "10px", paddingLeft: "3rem", paddingBottom:'2rem' }} // Add margin-right for spacing
  >
    <strong>← Back (About)</strong>
  </NavLink>
  <NavLink
    href="/react-portfolio/"
    id="#home"
    style={{ color: "black", margin: "0 10px" }} // Add margin for spacing on both sides
  >
    <strong>Home</strong>
  </NavLink>
  <NavLink
    href="/react-portfolio/portfolio"
    id="#portfolio"
    style={{ color: "blue", marginLeft: "10px" }} // Add margin-left for spacing
  >
    <strong>Next (Portfolio)→</strong>
  </NavLink>
</div>

    </div>
  );
}
