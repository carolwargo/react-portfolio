import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
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
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}
    className="home"
    
    >
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
         <NavDropdown title="PORTFOLIO" id="basic-nav-dropdown">
              <NavDropdown.Item href="/portfolio#server">
              Server-Side Apps</NavDropdown.Item>
              <NavDropdown.Item href="/portfolio#components">
              Web Components
              </NavDropdown.Item>
              <NavDropdown.Item href="/forms#forms">
               Form Components
              </NavDropdown.Item>
              <NavDropdown.Item href="/page-samples">Sample Sites</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/portfolio#graphics">
             Graphics</NavDropdown.Item>
            
            </NavDropdown>
              <Link to="/contact#contact" className="nav-link" onClick={handleNavLinkClick}>CONTACT</Link>
           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default BasicExample;
