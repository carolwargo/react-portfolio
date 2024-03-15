import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Import the CSS file where you define custom styles

function BasicExample() {
  console.log("Rendering BasicExample component"); // Add console.log statement here
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary shadow-sm fixed-top">
        <Container fluid>
          <Link to="/" className="navbar-brand"><b>CW</b>HOME</Link>
          {/* Use Font Awesome icon instead of the default toggle icon */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/about">ABOUT</Nav.Link>
              <Nav.Link to="/resume">RESUME</Nav.Link>
              <Nav.Link to="/portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link to="/contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
