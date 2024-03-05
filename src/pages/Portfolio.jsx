import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import { Row} from "react-bootstrap";
import PortfolioItems from "../components/Portfolio-Items/Completed";
import GraphicDesigns from "../components/Portfolio-Items/GraphicDesigns";
import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default function PortfolioPage() {
  return (
    <div className="portfolio" id="portfolio">
  <Header />
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
          <p style={{ fontFamily: "bellota text"}}>
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
     
      <footer className="w3-container w3-padding-48 text-center bg-white">
        <NavLink
        to={"/portfolio#portfolio"}
        >
          <button className="w3-button w3-black w3-disabled w3-padding-medium">
            Previous
          </button>
          </NavLink>

          <NavLink
        to={"/portfolio#portfolio"}
        >
          <button className="w3-button w3-black w3-padding-medium">
            Next »
          </button>
         </NavLink>
        </footer>

    </div>
  );
}
