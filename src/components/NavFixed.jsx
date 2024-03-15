import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Import the CSS file where you define custom styles

function BasicExample() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const closeNav = () => setExpanded(false);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary shadow-sm fixed-top" expanded={expanded}>
        <Container fluid>
          <Link to="/" className="navbar-brand" onClick={closeNav}><b>CW</b>HOME</Link>
          {/* Use Font Awesome icon instead of the default toggle icon */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/about#about" className="nav-link" onClick={closeNav}>ABOUT</Link>
              <Link to="/resume#resume" className="nav-link" onClick={closeNav}>RESUME</Link>
              <Link to="/portfolio#portfolio" className="nav-link" onClick={closeNav}>PORTFOLIO</Link>
              <Link to="/contact#contact" className="nav-link" onClick={closeNav}>CONTACT</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
