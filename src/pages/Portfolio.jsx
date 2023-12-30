import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Scroll from "../components/Scroll";
import "../styles/links.css";

import { Row} from "react-bootstrap";
import PortfolioItems from "../components/Portfolio-Items/Completed";
import InProgress from "../components/Portfolio-Items/InProgress";
import GraphicDesigns from "../components/Portfolio-Items/GraphicDesigns";

const flowLinks = {
  display: "flex",
  justifyContent: "center",
};

export default function PortfolioPage() {
  return (
    <div className="portfolio" id="portfolio">
      <div style={{ fontFamily: "bellota text" }}>
        <div className=" bg-light text-black p-5">
          <h1
            style={{
              fontFamily: "bellota text",
              fontSize: "4rem",
         
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
       
            }}
          >
            PORTFOLIO{" "}
          </h1>
<div >
          <h5 style={{ fontFamily: "bellota text"}}>
            My Portfolio contains the following sections:{" "}
            <strong>
              {" "}
              <a href="#completed-projects">COMPLETED PROJECTS</a>
            </strong>
            ,<br></br>
            <strong>
              {" "}
              <a href="#projects-in-progress">WORK IN-PROGRESS </a>{" "}
            </strong>{" "}
            , and{" "}
            <strong>
              {" "}
              <a href="#graphic-designs">GRAPHIC DESIGN WORK</a>
            </strong>{" "}
            -{" "}
          </h5>
          <p
            className="text-secondary"
            style={{
              fontFamily: "bellota text",
            }}
          >
            {" "}
            "<strong>Click the links above</strong> to jump to the section you
            want to view... and
            <br></br>
            <strong>
              {" "}
              Follow the <span style={{ color: "black" }}>"Back"</span> &{" "}
              <span style={{ color: "black" }}> "Next"</span> links
            </strong>{" "}
            at the bottom of each page to ensure nothing is missed! "
          </p>
        </div>
        </div>
        <Container className="p-5">
        <Row>
          
          <h2
            style={{
              color: "white",
              textDecoration: "underline",
              fontFamily: "sans-serif",
            }}
          >COMPLETED WORK
          </h2>
          <p
            style={{
              color: "white",
              fontFamily: "Bellota text",
            }}
          >
            View some of my completed projects. Each item has <br></br>a button
            linked to the project repository and, a link to the "function"
            (video or deployment)."
          </p>
          </Row>
         
          <PortfolioItems />
          </Container>
       


        <div className="bg-white">
<Container className="p-5">
        <Row 
        className="in-progress-header" id="projects-in-progress"
        style={{
          fontFamily:'bellota text'
        }}
        >
          <h2
            style={{
              color: "black",
              textDecoration: "underline",
              fontFamily: "sans-serif",
            }}
          >
            WORK IN-PROGRESS
          </h2>
          <p
            style={{
              color: "black",
              fontFamily: "bellota text",
            }}
          >
            My "Work In-Progress" showcases a range of projects that are
            currently in development, and will be updated as they are
            completed.- <br></br> Consisting of applications used as learning
            platforms to expand my understanding, as well as a collection of
            freelance jobs for third-party companies.
            <br></br>
            Links to README files and repositories are provided for better
            understanding, as well as plans for "future development" for each
            project.
          </p>
          <p
          style={{
            color: "black",
            fontFamily: "bellota text",
          }}
          >
            Not all of my "in process" projects have been added. Check back often to see new additions!</p>
        
        </Row>

        <InProgress />
</Container>
</div>
<Container className="p-5">
        {/* START of "GRAPHIC-DESIGN" ROW */}
        <h2
          style={{
            color: "white",
            textDecoration: "underline",
            fontFamily: "sans-serif",
      
          }}
        >
          GRAPHIC DESIGN WORK
        </h2>
        <p
          style={{
            color: "white",
            fontFamily: "sans-serif",

          }}
        >
          "Where it all started - I've been captivated by design for as long as
          I can remember. The process of bringing ideas to life, from the
          initial concept to the final product, has always been a source of
          fascination for me. Whether it's the intricate layering of mediums or
          the problem-solving required to achieve the perfect outcome, every
          step feels like a meditative journey.
        </p>
        <Row className="graphic-design-header" id="graphic-designs">
         <GraphicDesigns />
          
        </Row>
        
        </Container>
        
      </div>
     
      <div className="p-4 bg-white">
      <Scroll/>
      {/*flow-link <-previous-page & next-page->*/}
      <div className="flow-links bg-white" style={{ flowLinks }}>
      <NavLink to ="/resume#resume"
    style={{ color: "black", textDecoration: "none" }}
    >
           (Resume) <strong>  ← Back</strong>
          </NavLink>
          &nbsp;&nbsp;&nbsp;
        <NavLink to="/contact#contact"
        style={{ color: "black", textDecoration: "none" }}
        >
                <strong> Next→  </strong> (Contact)
              </NavLink>
              </div>
</div>
    </div>
  );
}
