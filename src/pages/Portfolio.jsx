import React from "react";
import { NavLink } from "react-bootstrap";

import "../styles/links.css";

import { Row, Col } from "react-bootstrap";
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
        <div className=" bg-light text-black pt-4 pl-5">
          <h1
            style={{
              fontFamily: "bellota text",
              fontSize: "4rem",
              marginLeft: "1rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
            }}
          >
            PORTFOLIO{" "}
          </h1>
<div className="ml-5 pl-5">
          <h5 className="ml-5 p-l" style={{ fontFamily: "bellota text", paddingLeft: "2rem"   }}>
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
            className="text-secondary ml-5"
            style={{
              fontFamily: "bellota text",
              marginBottom: "2rem",
              paddingBottom: "2rem",
              paddingLeft: "2rem"  
            }}
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
        </div>
        <Row>
          <h2
            style={{
              color: "white",
              textDecoration: "underline",
              fontFamily: "sans-serif",
              marginTop: "1rem",
              marginLeft: "2rem",
            }}
          >
            COMPLETED WORK
          </h2>
          <p
            style={{
              color: "white",
              fontFamily: "Bellota text",
              marginLeft: "2rem",
              marginRight: "4rem",
            }}
          >
            View some of my completed projects. Each item has <br></br>a button
            linked to the project repository and, a link to the "function"
            (video or deployment)."
          </p>
          <PortfolioItems />
        </Row>

        <Row 
        className="in-progress-header" id="projects-in-progress"
        style={{
          fontFamily:'bellota text'
        }}
        >
          <h2
            style={{
              color: "white",
              textDecoration: "underline",
              fontFamily: "sans-serif",
              marginTop: "2rem",
              marginLeft: "2rem",
            }}
          >
            WORK IN-PROGRESS
          </h2>
          <p
            style={{
              color: "white",
              fontFamily: "bellota text",
              marginLeft: "2rem",
              marginRight: "6rem",
              paddingRight: "4rem",
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
        </Row>

        <InProgress />

        {/* START of "GRAPHIC-DESIGN" ROW */}
        <h2
          style={{
            color: "white",
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "2rem",
            marginLeft: "2rem",
            fontFamily: "bellota text",
          }}
        >
          GRAPHIC DESIGN WORK
        </h2>
        <p
          style={{
            color: "white",
            fontFamily: "bellota text",
            marginLeft: "2rem",

            paddingRight: "1rem",
          }}
        >
          "Where it all started - I've been captivated by design for as long as
          I can remember. The process of bringing ideas to life, from the
          initial concept to the final product, has always been a source of
          fascination for me. Whether it's the intricate layering of mediums or
          the problem-solving required to achieve the perfect outcome, every
          step feels like a meditative journey.
        </p>
        <Row className="graphic-design-header " id="graphic-designs">
          <Col
            md={5}
            style={{
              paddingTop: "3rem",
              paddingLeft: "3rem",
              paddingRight: "2rem",
            }}
          >
            <h4>
              <strong>EXPLORE...</strong>
            </h4>
            <p
              className="graphic-design"
              style={{ color: "white", fontFamily: "bellota text" }}
            >
              Explore some of my 'original' Graphic Design pieces for a glimpse
              into my creative world. From web design to branding, each project
              completed is a testament to my dedication and passion for the
              craft. Take a moment to immerse yourself in the details and
              discover the stories behind each creation."
            </p>
            <ul className="pt-4">
              <li>
                Renderings are all custom design items, that originate from a
                blank canvas.
              </li>

              <li>
                No templates are used, all designs are created from scratch.
              </li>
            </ul>
          </Col>
          <Col md={7}>
            <GraphicDesigns />
          </Col>
        </Row>
      </div>
      {/*flow-link <-previous-page & next-page->*/}
      <div className="flow-links bg-white pt-3" style={{ flowLinks }}>
  <NavLink
    href="/react-portfolio/resume"
    id="#resume"
    style={{ color: "red", marginRight: "10px", paddingLeft: "3rem", paddingBottom:'2rem' }} // Add margin-right for spacing
  >
    <strong>← Back (Resume)</strong>
  </NavLink>
  <NavLink
    href="/react-portfolio/"
    id="#home"
    style={{ color: "black", margin: "0 10px" }} // Add margin for spacing on both sides
  >
    <strong>Home</strong>
  </NavLink>
  <NavLink
    href="/react-portfolio/contact"
    id="#contact"
    style={{ color: "blue", marginLeft: "10px" }} // Add margin-left for spacing
  >
    <strong>Next (Contact)→</strong>
  </NavLink>
</div>
    </div>
  );
}
