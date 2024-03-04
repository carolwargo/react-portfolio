import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import { Link } from "react-router-dom";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


import './NavbarBlack.css';

function NavbarBlack() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsNavbarFixed(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`bg-black ${isNavbarFixed ? 'fixed-navbar' : ''}`} style={{ fontFamily:'Raleway', boxShadow:'1px 1px 4px gray' }}>
    <Container fluid className='mx-2'>
      <Navbar.Brand href="/" style={{
        textShadow: "1px 1px 2px #FDC5E8",
        color:'white',
        fontSize:'1rem',
      }}>C.WARGO</Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" id='navbarToggle' style={{ borderColor: 'white', backgroundColor:'white' }} />
 <Navbar.Collapse id="navbarScroll" className='text-white'>
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-center align-items-center "
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="/"><HiOutlineHomeModern style={{boxShadow: '1px 1px 4px #00FFFF'}}/> Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/resume" >Resume</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
            <NavDropdown title="Examples" id="navbarScrollingDropdown" style={{
                  textShadow: "1px 1px 2px "
                }}>
              <NavDropdown.Item href="#action3" style={{fontFamily:'serif'}}>Components</NavDropdown.Item>
              <NavDropdown.Item href="#action4" style={{fontFamily:'serif'}}>Graphics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" style={{fontFamily:'serif'}}>Content</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <hr  className='text-white'/>
          <Nav className="d-flex justify-content-center align-items-center">
            <div>
          
            <div className="d-flex align-items-center" style={{ fontSize: '1rem' }}>
            <Navbar.Brand style={{fontSize:'14px', color:'white'}}>
              <span style={{textShadow: "1px 1px 2px #00ffff",}}>Connect: </span></Navbar.Brand>
        <a href="https://www.linkedin.com/in/carol-wargo-35021baa" className="me-3" style={{textShadow: "2px 2px 4px #00ffff",}}>
          <FontAwesomeIcon icon={faLinkedin}  style={{ color: 'white' }}  />
        </a>
        <a href="https://github.com/carolwargo/" className="me-3 ">
          <FontAwesomeIcon icon={faGithub} style={{ color: 'white' }} />
        </a>
        <a href="mailto:carolwargo.dev@gmail.com" className="me-3 ">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} />
        </a>
        <a href="tel:4437711726" className="me-3">
          <FontAwesomeIcon icon={faPhone} style={{ color: 'white' }} />
        </a>
      </div>
        
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBlack;
