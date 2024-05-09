import React from "react";
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

  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}
    className="home"
    
    >
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm fixed-top" >
          
      <Container fluid>
      <Navbar.Brand as={Link} to="/">
            <b>CW</b>HOME
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars} color="black" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about#about">ABOUT</Nav.Link>
              <Nav.Link as={Link} to="/resume#resume">RESUME</Nav.Link>
              <Nav.Link as={Link} to="/page-samples#page-samples">PAGE SAMPLES</Nav.Link>
              <NavDropdown title="MY WORK" id="basic-nav-dropdown">
                <div style={{ border: '3px solid', borderRadius: '10px' }}>
                  <NavDropdown.Item as={Link} to="/portfolio#web-components">COMPONENT SAMPLES</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/forms#forms">FORM SAMPLES</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/page-samples">SITE SAMPLES</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/server#server">UTILITY APPS</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/graphics#graphics">COMING SOON! <br />GRAPHIC ELEMENTS</NavDropdown.Item>
                </div>
              </NavDropdown>
            </Nav>
            {/* Move the CONTACT link to the right margin */}
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/contact#contact">CONTACT</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </motion.div>
  );
}

export default BasicExample;
