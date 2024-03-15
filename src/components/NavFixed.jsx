
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <div>

      <Navbar expand="lg" className="bg-body-tertiary shadow-sm fixed-top">
        <Container fluid>
          <Navbar.Brand href="/"><b>CW</b>HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">ABOUT</Nav.Link>
              <Nav.Link href="/resume">RESUME</Nav.Link>
              <Nav.Link href="portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
