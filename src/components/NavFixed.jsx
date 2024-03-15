import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
              <Link to="/about" className="nav-link">ABOUT</Link>
              <Link to="/resume" className="nav-link">RESUME</Link>
              <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
              <Link to="/contact" className="nav-link">CONTACT</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
