import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faFemale } from "@fortawesome/free-solid-svg-icons";
import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";

export default function Core() {
  return (
    <div className=" p-5 bg-black" style={{ fontFamily: "bellota text" }}>
      <Container className="bg-black text-white rounded">
        <Row className="p-5">
          <h2
            className="philosophy-values"
            id="#philisophy-values"
            style={{ textDecoration: "underline" }}
          >
            <strong>1. FAMILY, PHILOSOPHY & VALUES</strong>
          </h2>

          <div className="ml-md-5 mr-md-5">
            <p className=" pr-3 pl-3">
              What I hold dear, what I believe in, and what I constantly strive
              for- A window into the foundation of my identity and the driving
              forces that have shaped my path...
            </p>
          </div>
        </Row>
        <Container>
          <Container className=" p-2">
            <Row className="d-flex justify-content-evenly mr-1">
              <Row
                sm={12}
                className="bg-white text-black m-1 p-3"
                style={{ borderRadius: "5px" }}
              >
                <Col sm={4}>
                  <h2 style={{ fontSize: "3rem" }}>
                    <span role="img" aria-label="I am">
                      <FontAwesomeIcon icon={faFemale} />
                    </span>{" "}
                    <br></br>
                    <strong>I AM...</strong>
                  </h2>
                </Col>
                <Col sm={8} className="bg-white text-black p-2 ">
                  <p>
                    {" "}
                    A 44-year-old Mother of 2 men and 1 boy from Maryland. My 2
                    oldest sons are Collegiate Student-Athletes, and my youngest
                    just entered his Freshman year of high school. My oldest is
                    a Marketing Major that plays baseball, My middle is a
                    Business Major that plays football, and My youngest is
                    involved in multiple extra-curricular activities to
                    include... of course football & baseball. I have been
                    married to “the boy next door” for the last 23 years- Former
                    neighbor and Current roommate... Yes, our parents still
                    reside in our childhood homes, adding an extra layer of
                    convenience & connection to our lives...
                  </p>
                </Col>
              </Row>
              <Row
                sm={12}
                className="bg-white text-black m-1 p-3"
                style={{ borderRadius: "5px" }}
              >
                <Col sm={4}>
                  <h2 style={{ fontSize: "2.5rem" }}>
                    <span role="img" aria-label="I Love">
                      <FontAwesomeIcon icon={faHeart} />
                    </span>{" "}
                    <br></br>
                    <strong>I LOVE...</strong>
                  </h2>
                </Col>
                <Col sm={8} className="text-align-center mt-4">
                  <p>
                    {" "}
                    Strays (of all sorts); The "Underdog"; Competition; Sports;
                    The Outdoors; To Use My Brain; To Make "Things" (any
                    "things"); To Fall On My Face; and "Something New".
                  </p>
                </Col>
              </Row>
              <Row
                sm={12}
                className="bg-white text-black m-1 p-3 "
                style={{ borderRadius: "5px" }}
              >
                <Col sm={4}>
                  <h2 style={{ fontSize: "2.5rem" }}>
                    <span role="img" aria-label="I Believe">
                      <FontAwesomeIcon icon={faThinkPeaks} />
                    </span>{" "}
                    <br></br>
                    <strong>I BELIEVE...</strong>
                  </h2>
                </Col>
                <Col sm={8} className="text-align-center mt-4">
                  <p>
                    {" "}
                    In Magical Moments; Happily Ever-After; That Smiles and a
                    Good Disposition Are The Fountain of Youth; That ”It's NEVER
                    Too Late…”; and NO ONE Is Beyond Redemption.
                  </p>
                </Col>
              </Row>
              <Row
                sm={12}
                className="bg-white text-black m-1 p-3"
                style={{ borderRadius: "5px" }}
              >
                <Col sm={4}>
                  <h2 style={{ fontSize: "2.5rem" }}>
                    <span role="img" aria-label="I Strive">
                      <FontAwesomeIcon icon={faDumbbell} />
                    </span>{" "}
                    <br></br>
                    <strong>I STRIVE...</strong>
                  </h2>
                </Col>
                <Col sm={8} className="text-align-center mt-3">
                  <p>
                    {" "}
                    To Leave Things Better Than I Found Them; To Focus On The
                    Solution Not The Problem; To Do For Others Without
                    Expectation; To Manipulate The Web For The Good—And Of
                    Course, World Peace.
                  </p>
                </Col>
              </Row>
            </Row>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
