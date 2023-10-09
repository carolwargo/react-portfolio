import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/links.css";

import { MDBRow, MDBCol } from "mdb-react-ui-kit";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import Design from "../assets/images/Design.png";
import VCIDE from "../assets/images/VCIDE.png";
import Front from "../assets/images/Front.png";
import Back from "../assets/images/Back.png";
import DB from "../assets/images/DB.png";
import Core from "../assets/images/Core.png";
import Package from "../assets/images/Package.png";
import BuildTest from "../assets/images/BuildTest.png";
import APIQ from "../assets/images/APIQ.png";
import ResumeWorkspace from "../assets/images/ResumeWorkspace.png";
import ResumeDownload from "../assets/images/ResumeDownload.png";

import Star1 from "../components/OnClickEvents/Star1";
import Star2 from "../components/OnClickEvents/Star2";
import Star3 from "../components/OnClickEvents/Star3";

const flowLinks = {
  display: "flex",
  justifyContent: "center",
};

export default function ResumePage() {
  return (
    <div className="resume" id="resume">
      <div className=" bg-light text-black p-5">
        <h1
          style={{
            fontFamily: "bellota text",
            fontSize: "4rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          RESUME{" "}
        </h1>

        <h5 className="" style={{ fontFamily: "bellota text" }}>
          Digital Resume contains{" "}
          <strong>
            {" "}
            <a href="#professional-background"> PROFESSIONAL BACKGROUND</a>
          </strong>
          ,{" "}
          <strong>
            {" "}
            <a href="#professional-achievements"> PROFESSIONAL ACHIEVEMENTS</a>
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
        <p className="text-secondary" style={{ fontFamily: "bellota text" }}>
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
            borderRadius: "10px",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <MDBCol md="12" className="p-5">
            <h1
              className="text-black"
              style={{
                textDecoration: "underline",
                fontFamily: "bellota text",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
              }}
            >
              PROFESSIONAL BACKGROUND
            </h1>
            <br></br>
            <p>
              I have earned my main living in Real Estate for the last 21 years
              in various capacities. Started as an Agent ("Salesperson"),
              recruited to work directly under the #1 Broker in my area,
              transitioned to Group Investment Properties, and subsequently
              ventured into my own personal Investments, taking on roles such as
              Owner, Landlord, Designer, IT Department, Marketing Manager,
              General Contractor, and even Laborer. In parallel, I also
              established a presence in freelance development and digital
              design, prior to completion of any formal education."
            </p>{" "}
          </MDBCol>

          <MDBRow
            style={{
              padding: "3rem",
              backgroundColor: "white",
            }}
          >
            <MDBCol md="5">
              <img
                src={ResumeWorkspace}
                alt="ResumeWorkspace"
                className="img-fluid pt-2"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </MDBCol>

            <MDBCol md="7" style={{ color: "black" }}>
              <div
                className="professional-achievements"
                id="professional-achievements"
                style={{
                  fontFamily: "bellota text",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
                  padding: "2rem",
                }}
              >
                <h3
                  style={{
                    textDecoration: "underline",
                    fontFamily: "bellota text",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
                  }}
                >
                  PROFESSIONAL ACHIEVEMENTS
                </h3>
                <h5>
                  Discover of my key accomplishments. Click on the respective
                  buttons for more details.
                </h5>
              </div>
              <ul>
                <li>
                  <Star1 />
                </li>

                <li style={{ paddingTop: "1rem" }}>
                  <Star2 />
                </li>
                <li style={{ paddingTop: "1rem" }}>
                  {" "}
                  <Star3 />
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
          <div className="p-5">
            <div className="p-2">
              <h3
                style={{
                  textDecoration: "underline",
                  fontFamily: "bellota text",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
                  textAlign: "center",
                }}
              >
                IN SUMMARY...
              </h3>
              <br></br>
              <p>
                {" "}
                "I bring a wealth of experience and commitment to excellence to
                the table. With a solid foundation in business, I have built a
                track record of success through hard work and adaptability. I excel in translating complex business needs into precise
                technical solutions. My expertise lies in crafting detailed
                plans for seamless integration, proactively identifying and
                addressing potential challenges. These experiences have honed my
                communication, collaboration, and project management skills,
                ensuring projects meet functional needs and align with business
                objectives. As I
                shift my focus to software development, I will carry forward the same
                strategic thinking, negotiation skills, and dedication to
                excellence meaningful
                solutions."
              </p>
            
            </div>
          </div>
        </MDBRow>
      </div>
      <div
        className="technical-skills-div d-flex flex-column bg-dark"
        style={{
          fontFamily: "bellota text",
          color: "white",
          paddingTop: "2rem",
        }}
      >
        <h1
          className="technical-skills text-light mt-2 p-2"
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
          <strong>MORE TO COME!</strong>
        </h4>
        <p style={{ textAlign: "center" }}>
          Exploring & Studying New Technologies Daily!
        </p>

        <br></br>
        <div className="professional-experience container-fluid pt-2 d-flex flex-column justify-content-center bg-white text-black">
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
                <h4 className="text-black text-decoration-underline">
                  Real Estate Industry
                </h4>
                <p className="text-black ">
                  (July 2003 -Present ) License Status: "Current"<br></br>
                  Agent ("Salesperson"), Group Investments, Personal Investments
                  <br></br>
                  <br></br>
                  <strong className="">TITLES & DUTIES</strong>
                </p>
                <ul>
                  <li>Owner</li>
                  <li>Landlord</li>
                  <li>Marketing Manager</li>
                  <li>Designer</li>
                  <li>Sales</li>
                  <li>General Contractor</li>
                </ul>
                <br></br>
                <h4 className="text-black pt-2 text-decoration-underline">
                  Freelance Development & Design
                </h4>
                <p className="text-black ">
                  (July 2019 -Present ) <br></br>
                  Website Development & Design, Graphic Design & Branding
                  <br></br>
                </p>
                <p>
                  {" "}
                  <strong className="text-bold">TASKS & DUTIES</strong>
                </p>
                <ul>
                  <li>Develop Branding Books</li>
                  <li>Design Logos & Marketing Materials</li>
                  <li>Design User-Friendly Website</li>
                  <li>Develop Marketing Campaigns</li>
                  <li>Consultations</li>
                  <li>Search Engine Optimization</li>
                  <li>Content Creation</li>
                  <li>Website Maintenance</li>
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
                <h5 className="text-black">- 19 hour React Router 6</h5>
                <p className="text-black">Scrimba Pro</p>
                <h5 className="text-black">- 10 hour React</h5>
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
                  I currently have multiple projects in-progress BUT, also know
                  the importance of working with & for others and feel I will be
                  an asset to any work environment. <br></br>
                  Click "Download" button below to download my resume or "Next
                  (Portfolio)" to view some of my work!
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
      <div className="flow-links p-4" style={{ flowLinks }}>
        <NavLink to="/about" style={{ color: "red", textDecoration: "none" }}>
          ← Back (About)
        </NavLink>
        &nbsp;&nbsp;&nbsp;
        <NavLink
          to="/portfolio"
          style={{ color: "blue", textDecoration: "none" }}
        >
          Next (Portfolio)→
        </NavLink>
      </div>
    </div>
  );
}
