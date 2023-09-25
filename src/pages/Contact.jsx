import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { NavLink } from "react-bootstrap";

import "../styles/links.css";

const flowLinks = {
  display: "flex",
  justifyContent: "center",
};

export default function Contact() {
  return (
    <div className="contact" id="contact">
     <div>
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
          backgroundColor: "black",
          color: "white",
          paddingTop: "3rem",
          paddingBottom: "3rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        }}
      >
        <p>
          Thank you for visiting! Your presence is appreciated, and your{" "}
          <strong>
            {" "}
            <MDBIcon color="white" icon="share-from-square" className="me-1" />
            FEEDBACK
          </strong>{" "}
          is welcome. I believe unique perspectives provide a a fresh angle that
          I may not have considered. Constructive criticism helps me identify
          areas for improvement and offers opportunities for me to fine-tune my
          skills to foster growth and innovation. Please take a moment to relay
          your thoughts, suggestions or critique...
          <br></br>
          <br></br>
        </p>
        <h5>
          Or if you have any questions, inquiries, or just want to say hello,
          I'd love to hear from you!{" "}
        </h5>
        <br></br>
        <MDBIcon icon="envelope" className="me-2 " style={{ color: "white" }} />
        EMAIL: <a href="mailto:carolwargo@gmail.com">
          CAROLWARGO@GMAIL.COM
        </a>{" "}
        <br></br>
        <MDBIcon icon="phone" className="me-2" style={{ color: "white" }} />
        PHONE: <a href="tel:443-771-1726">443-771-1726</a> <br></br>
        <MDBIcon
          fab
          icon="github"
          className="me-2"
          style={{ color: "white" }}
        />
        GITHUB:{" "}
        <a href="https://www.github.com/carolwargo">GITHUB.COM/carolwargo</a>
      </div>
      <div className='bg-white'>
      <div className="flow-links bg-white pt-3" style={{ flowLinks }}>
  <NavLink
    href="/resume"
    id="#resume"
    style={{ color: "red", marginRight: "10px", paddingLeft: "3rem", paddingBottom:'2rem' }} // Add margin-right for spacing
  >
    <strong>← Back (Resume)</strong>
  </NavLink>
  <NavLink
    href="/"
    id="#home"
    style={{ color: "black", margin: "0 10px" }} // Add margin for spacing on both sides
  >
    <strong>Home</strong>
  </NavLink>

</div>
      </div>
    </div>
    </div>
  );
}
