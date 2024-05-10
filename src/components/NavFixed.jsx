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

  const closeNavbar = (e) => {
    try {
      e.stopPropagation();
      setExpanded(false);
    } catch (error) {
      console.error("Error closing navbar:", error);
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className="home"
    >
      <Navbar expand="lg" className="shadow-sm bg-body-tertiary fixed-top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <b>CW</b>HOME
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavbarToggle}
          >
            <FontAwesomeIcon icon={faBars} color="black" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-collapse" onClick={closeNavbar}>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about#about" onClick={closeNavbar}>
                ABOUT
              </Nav.Link>
              <Nav.Link as={Link} to="/resume#resume" onClick={closeNavbar}>
                RESUME
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/page-samples#page-samples"
                onClick={closeNavbar}
              >
                PAGE SAMPLES
              </Nav.Link>
              <NavDropdown title="MY WORK" id="basic-nav-dropdown">
                <div style={{ border: "3px solid", borderRadius: "10px" }}>
                  <NavDropdown.Item
                    as={Link}
                    to="/portfolio#web-components"
                  >
                    COMPONENT SAMPLES
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/forms#forms">
                    FORM SAMPLES
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/page-samples">
                    SITE SAMPLES
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/server#server">
                    UTILITY APPS
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/graphics#graphics">
                    COMING SOON! <br /> GRAPHIC ELEMENTS
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </Nav>
            {/* Move the CONTACT link to the right margin */}
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/contact#contact" onClick={closeNavbar}>
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default BasicExample;
