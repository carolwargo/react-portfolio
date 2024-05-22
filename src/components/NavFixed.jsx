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
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const closeNavbar = (e) => {
    try {
      e.stopPropagation();
      setExpanded(false);
    } catch (error) {
      console.error("Error closing navbar:", error);
    }
  };

  const handleNavLinkClick = () => {
    scrollToTop();
  };

  const handleNavLinkClickAndCloseNavbar = (e) => {
    handleNavLinkClick();
    closeNavbar(e);
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className="home"
    >
      <Navbar expand="lg" className="shadow-sm bg-body-tertiary fixed-top" expanded={expanded}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" style={{ fontSize: '14px' }} onClick={handleNavLinkClickAndCloseNavbar} >
            <b>CW</b>HOME
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavbarToggle}
          >
            <FontAwesomeIcon icon={faBars} color="black" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about#about" onClick={handleNavLinkClickAndCloseNavbar} style={{ fontSize: '14px' }}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/resume#resume" onClick={handleNavLinkClickAndCloseNavbar} style={{ fontSize: '14px' }}>
                Resume
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/page-samples#page-samples"
                style={{ fontSize: '14px' }}
                onClick={handleNavLinkClickAndCloseNavbar}
              >
                Page Samples
              </Nav.Link>
              <NavDropdown title="Portfolio" id="basic-nav-dropdown" style={{ fontSize: '14px' }}>
                <div className='shadow' style={{ border: "1px solid", borderRadius: "5px", fontSize:'14px' }}>
                  <NavDropdown.Item
                    as={Link}
                    to="/portfolio#web-components"
                    onClick={handleNavLinkClickAndCloseNavbar}
                  >
                    Portfolio Samples
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/page-samples" onClick={handleNavLinkClickAndCloseNavbar}>
                    Page Samples
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/server#server" onClick={handleNavLinkClickAndCloseNavbar}>
                    App Samples
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/graphics#graphics" onClick={handleNavLinkClickAndCloseNavbar}>
                    Graphic Elements
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default BasicExample;

