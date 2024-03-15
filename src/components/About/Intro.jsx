import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cover from "../../assets/images/Cover.png";
import Me from "../../assets/images/Me.png";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div
      className="intro"
      id="intro"
      style={{ fontFamily: "bellota text", color: "white" }}
    >
      <Row
        style={{
          backgroundImage: `url(${Cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "auto",
        }}
      >
        <Col md={5}>
          <img
            src={Me}
            alt="Me"
            className="me-card img-fluid with-shadow"
            style={{
              position: "relative",
              paddingRight: "2rem",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Added box shadow directly
            }}
          />
        </Col>

        <Col md={6} className="p-5 justify-content-center align-content-center" style={{}}>
        <br></br>

          <h2
            style={{
              fontSize: "2rem", // Adjust the font size
            }}
          >
            <strong>CAROL WARGO</strong>
          </h2>
          <h5>FULL STACK DEVELOPER | UI/UX DESIGNER</h5>
          <p>
            "I enjoy working with the latest tools and frameworks to bring new
            ideas to life. From crafting interactive user interfaces to
            designing efficient and secure server-side solutions, I am dedicated
            to delivering a seamless user experience while optimizing
            performance. It is my pleasure to turn complex problems into elegant
            solutions."
          </p>

          <h5
            style={{
              fontSize: "1.5rem",
              textShadow: "2px 2px 4px rgba(255, 255, 255, 1)",
            }}
          >
            <br></br>
            DISCOVER MORE...
          </h5>
          <p className="" style={{ fontFamily: "bellota text" }}>
            "ABOUT ME" personally- <br></br>What makes my heart beat, my mind
            ponder, and my spirit soar.
          </p>
        </Col>
      </Row>

      <div
        className=" bg-light text-black p-5 "
        style={{
          paddingBottom: "4rem",
          paddingTop: "4rem",
        }}
      >
        <h1
          style={{
            fontFamily: "bellota text",
            fontSize: "4rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          ABOUT ME{" "}
        </h1>

        <h5
          style={{
            fontFamily: "bellota text",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          Get to know a little, or a lot. You choose... <br></br>{" "}
          <strong>
            {" "}
            <Link to="#philisophy-values">My FAMILY, PHILISOPHY & VALUES</Link>
          </strong>
          ,{" "}
          <strong>
            {" "}
            <Link to="#blessing-curse">MY BLESSING & MY CURSE</Link>
          </strong>
          , and{" "}
          <strong>
            <Link to="#community">GIVING BACK & GAINING MORE</Link>{" "}
          </strong>{" "}
          -{" "}
        </h5>
        <p
          className="text-secondary  "
          style={{
            fontFamily: "bellota text",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          {" "}
          "<strong>Click the links above</strong> to jump to the section you
          want to view...
          <br></br>{" "}
          <strong>
            {" "}
            Follow the <span style={{ color: "red" }}>"Back"</span> &{" "}
            <span style={{ color: "blue" }}> "Next"</span> links
          </strong>{" "}
          at the bottom of each page to ensure nothing is missed! "
        </p>
      </div>
    </div>
  );
}
