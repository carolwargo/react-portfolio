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
        <Navbar expand="lg" className="bg-body-tertiary">
          
      <Container>
        <Link to='/' className="nav-link">
        <Navbar.Brand><b>CW</b>HOME</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <FontAwesomeIcon icon={faBars} color="black" />
          </Navbar.Toggle>
      
        <Navbar.Collapse id='navbar-collapse'>
          <Nav className="me-auto">
            <Link to="/about#about" className="nav-link">ABOUT</Link>
            <Link to="/resume#resume" className="nav-link">RESUME</Link>
            <Link to="/page-samples#page-samples" className="nav-link">PAGE SAMPLES</Link>
            <NavDropdown title="MY WORK" id="basic-nav-dropdown" className="me-auto bg-white ">
            <div className='w3-padding-small bg-white' style={{border:'3px solid', borderRadius:'10px', zIndex:'-5'}}>
     
              <Link to="/portfolio#portfolio" className="nav-link">PORTFOLIO</Link>
      
          
              <Link to="/forms#forms" className="nav-link">
              FORMS
              </Link>
             <Link to="/server#server" className="nav-link">UTILITY APPS</Link>
             <Link to="/graphics#graphics" className="nav-link">GRAPHICS</Link>
           
           
            </div>
            </NavDropdown>
           
            <Link to="/contact#contact" className="nav-link" >CONTACT</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </motion.div>
  );
}

export default BasicExample;
