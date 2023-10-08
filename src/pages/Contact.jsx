import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

import BrickGradientWide from "../assets/images/BrickGradientWide.png";
import ContactInfo from "../components/Contact/ContactInfo";

import "../styles/links.css";
import "../components/Contact/style.css";

const flowLinks = {
  display: "flex",
  justifyContent: "center",
};

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="bg-white">
        <h1
          style={{
            fontFamily: "bellota text",
            backgroundColor: "white",
            color: "black",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            fontSize: "4rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          CONTACT{" "}
        </h1>
        <div
          style={{
            fontFamily: "bellota text",
            backgroundImage: `url(${BrickGradientWide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
          }}
        >
          <h2>Thank you for visiting! </h2>
          <h5>
            If you have any questions, inquiries, or just want to say hello, I'd
            love to hear from you!{" "}
          </h5>
          <p>
            Your presence is appreciated, and your{" "}
            <strong>
              {" "}
              <MDBIcon
                color="white"
                icon="share-from-square"
                className="me-1"
              />
              FEEDBACK
            </strong>{" "}
            is welcome. I believe unique perspectives provide a a fresh angle
            that I may not have considered. Constructive criticism helps me
            identify areas for improvement to foster growth. If you have
            thoughts, suggestions or critiques you are willing to share, I would
            love to listen...
            <br></br>
          </p>
          <br></br>
          <br></br>
          <Container
            style={{
              backgroundColor: "white",
              color: "black",
              fontFamily: "sans-serif",
              padding: "2rem",
              borderRadius: "1rem",
            }}
          >
            <Row>
              <Col>
                <h4 className="mb-0">CAROL WARGO</h4>
                <p>
                  Full Stack Software Developer<br></br> UX | UI Designer{" "}
                </p>
                <ContactInfo />
              </Col>
              <Col style={{ marginBottom: "1rem", fontFamily: "sans-serif" }}>
                <h4
                  style={{ marginBottom: "1rem", textDecoration: "underline" }}
                >
                  CONTACT INFORMATION
                </h4>
                EMAIL:{" "}
                <a href="mailto:carolwargo.dev@gmail.com"> carolwargo.dev@gmail.com</a>{" "}
                <br></br>
                PHONE: <a href="tel:443-771-1726">443-771-1726</a>
                <br></br>
                GITHUB:{" "}
                <a href="https://www.github.com/carolwargo">
                  www.github.com/carolwargo
                </a>
                <br></br>
                LINKEDIN:{" "}
                <a href="https://www.linkedin.com/in/carol-wargo-35021baa">
                  www.linkedin.com/in/carol-wargo-35021baa
                </a>
                <br></br>
                WEBSITE:{" "}
                <a href="https://carolwargo.github.io/react-portfolio/">
                  www.carolwargo.github.io/react-portfolio/
                </a>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="bg-white p-4">
          <div className="flow-links bg-white pt-3" style={{ flowLinks }}>
          <NavLink to ="/portfolio"
    style={{ color: "red", textDecoration: "none" }}
    >
             ← Back (Portfolio)
          </NavLink>
          &nbsp;&nbsp;&nbsp;
        <NavLink to="/"
        style={{ color: "blue", textDecoration: "none" }}
        >
                 Go Home →
              </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
