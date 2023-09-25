import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cover from "../../assets/images/Cover.png";
import Me from "../../assets/images/Me.png";

export default function Intro() {
  return (
    <div
      className="intro"
      style={{ fontFamily: "bellota text", color: "white" }}
    >
      <Row
  style={{
    backgroundImage: `url(${Cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    paddingRight: "4rem",
  }}
>
  <Col md={5}>
    <img
      src={Me}
      alt="Me"
      className="me-card img-fluid"
      style={{
        height: "100%", // Adjust the height of the image
        position: "relative",
        paddingRight: "2rem",
      }}
    />
  </Col>

  <Col
    md={6}
    className="pl-4 pr-2 ml-2 mt-5"
    style={{
     
      // Adjust the padding at the top
      // Adjust the padding at the bottom
    }}
  >
    <h2
      className="mt-0 mb-0"
      style={{
        fontSize: "2rem", // Adjust the font size
      }}
    >
      <strong>CAROL WARGO</strong>
    </h2>
    <h5 className="mb-3 mt-0 ">FULL STACK DEVELOPER | UI/UX DESIGNER</h5>
    <p>
      "I enjoy working with the latest tools and frameworks to bring new
      ideas to life. From crafting interactive user interfaces to
      designing efficient and secure server-side solutions, I am dedicated
      to delivering a seamless user experience while optimizing
      performance. It is my pleasure to turn complex problems into elegant
      solutions."
    </p>

    <h5
      className="mt-2"
      style={{
        fontSize: "1.5rem",
        paddingTop: "1rem",
        textShadow: "2px 2px 4px rgba(255, 255, 255, 1)",
      }}
    >
      DISCOVER MORE...
    </h5>
    <p className="" style={{ fontFamily: "bellota text" }}>
    Discover more "ABOUT ME"- <br></br>what makes my heart beat, my mind ponder, and my spirit soar.
    </p>
  </Col>
</Row>

      <div className=" bg-light text-black pl-5 pr-2 pt-2 pb-2">
        <h1
          style={{
            fontFamily: "bellota text",
            fontSize: "4rem",
            marginLeft: "1rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          ABOUT ME{" "}
        </h1>

        <h5 className="mr-3 ml-2" style={{ fontFamily: "bellota text", paddingLeft: "2rem"}}>
          Get to know a little, or a lot You choose...-  <br></br>{" "}
          <strong>
            {" "}
            <a href="#philisophy-values">My FAMILY, PHILISOPHY & VALUES</a>
          </strong>
          ,{" "}
          <strong>
            {" "}
            <a href="#blessing-curse">MY BLESSING & MY CURSE</a>
          </strong>
          , and{" "}
          <strong>
            <a href="#community">GIVING BACK & GAINING MORE</a>{" "}
          </strong>{" "}
          -{" "}
        </h5>
        <p
          className="text-secondary ml-2 "
          style={{ fontFamily: "bellota text",  paddingLeft: "2rem"   }}
        >
          {" "}
          "<strong>Click the links above</strong> to jump to the section you want to view...    
          <br></br> <strong> Follow the <span style={{color:'red'}}>"Back"</span> & <span style={{color:'blue'}}> "Next"</span> links</strong> at the bottom of each page to ensure nothing is missed!
    "
        </p>
      </div>

      {/* PERSONALLY */}
    </div>
  );
}
