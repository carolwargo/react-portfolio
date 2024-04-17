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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const closeNav = () => setExpanded(false);

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const handleNavLinkClick = () => {
    scrollToTop();
    closeNav();
  };

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
              <Link to="/about#about" className="nav-link" onClick={handleNavLinkClick}>ABOUT</Link>
              <Link to="/resume#resume" className="nav-link" onClick={handleNavLinkClick}>RESUME</Link>
              <Link to="/portfolio#portfolio" className="nav-link" onClick={handleNavLinkClick}>PORTFOLIO</Link>
              <Link to="/contact#contact" className="nav-link" onClick={handleNavLinkClick}>CONTACT</Link>
              <Link to='/page-samples' className="nav-link" onClick={handleNavLinkClick}>SAMPLES</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
