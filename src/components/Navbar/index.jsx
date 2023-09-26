import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faPhone,  faEnvelope} from "@fortawesome/free-solid-svg-icons";

import "../Navbar/style.css";




export default function Navigation() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary border-bottom  ">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/resume">
                Resume
              </Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <div
                className="d-flex align-items-center"
                style={{ fontSize: "1rem" }}
              >
                <a
                  href="https://www.linkedin.com/in/carol-wargo-35021baa"
                  className="me-4 text-reset"
                >
                    <FontAwesomeIcon icon={faLinkedin}  style={{color:'black'}}/>
                </a>
                <a
                  href="https://github.com/carolwargo/"
                  className="me-4 text-reset"
                >
                   <FontAwesomeIcon icon={faGithub} style={{color:'black'}}/>
                </a>
                <a
                  href="mailto:carolwargo@gmail.com"
                  className="me-4 text-reset"
                >
                  <FontAwesomeIcon icon={faEnvelope} style={{color:'black'}}/>
                </a>
                <a href="tel:4437711726" className="me-4 text-reset">
                <FontAwesomeIcon icon={faPhone} style={{color:'black'}}/>
                </a>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
