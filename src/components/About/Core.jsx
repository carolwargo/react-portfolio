import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Love from "./Love";
import Believe from "./Believe";
import Strive from "./Strive";

export default function Core() {
  return (
    <div
      className=" p-5 bg-black text-white"
      style={{ fontFamily: "bellota text" }}
    >
      <Container>
        <h2
          className="philosophy-values "
          id="#philisophy-values"
          style={{ textDecoration: "underline" }}
        >
          <strong>FAMILY, PHILOSOPHY & VALUES</strong>
        </h2>
        <p>
          What I hold dear, what I believe in, and what I constantly strive for-
          <br></br>A window into the foundation of my identity and the driving
          forces that have shaped my path...
        </p>

        <Row
          className="d-flex justify-content-evenly "
          sm={12}
          style={{ borderRadius: "5px" }}
        >
          <h5 className="text-decoration-underline">MY FAMILY DYNAMIC</h5>
          <div sm={8} className="">
            <p>
              {" "}
              I am a 45 year-old Mother of 2 men and 1 boy from Maryland. My 2
              oldest sons are Collegiate Student-Athletes, and my youngest just
              entered his Freshman year of high school. My oldest is a Marketing
              Major that plays baseball, My middle is a Business Major that
              plays football, and My youngest is involved in multiple
              extra-curricular activities to include... of course football &
              baseball. I have been married to “the boy next door” for the last
              23 years- Former neighbor and Current roommate... Yes, our parents
              still reside in our childhood homes, adding an extra layer of
              convenience & connection to our lives...
            </p>
          </div>
        </Row>
<br></br>
        <Row sm={12} className="" style={{ borderRadius: "5px" }}>
          <p style={{ textAlign: "center", color:'gray' }}>
            Click "Show Content" to see what I LOVE, I BELIEVE & I STRIVE for...
          </p>
          <Col>
            <Love />
          </Col>
          <br></br>
          <Col>
            <Believe />
          </Col>
          <br></br>
          <Col>
            <Strive />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
