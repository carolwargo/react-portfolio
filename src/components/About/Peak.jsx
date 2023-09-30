import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Peak() {
  return (
    <div className="border-top bg-dark  p-3" id="#blessing-curse">
      <div style={{ fontFamily: "bellota text" }}>
        <Container
          className="text-white p-4  rounded mx-auto" // Added mx-auto here
       
        >
          <Row
          >
            <Container className="p-5"
            style={{}}
            >
              <h2 className="mt-4 text-decoration-underline">
                <strong>2. MY BLESSING & MY CURSE </strong>
              </h2>
              <p>
              <strong>PEAK PERFORMANCE BRAIN</strong> <br></br>(clinically
              diagnosed) -{" "}The "blessing" part - Something I possess naturally. The "curse" part- My Brain never shuts down.
              </p>
              <p className="pl-3 pr-3">
                <strong>Peak performance</strong> refers to a state in which an
                individual operates at their highest potential, delivering
                outstanding results and achieving optimal outcomes, all while
                experiencing feelings of confidence, engagement, and joy.
                Exceptional athletes, professionals, and performers have the
                natural ability to enter this state. When it comes to the human
                brain achieving peak performance, several key factors come into
                play:
              </p>
            </Container>
          </Row>

          <Container className="bg-white text-black p-5 pl-3 pr-3 rounded">
            <div className="pr-3 pl-3">
            <h5 className=" text-center text-decoration-underline">
              <strong>KEY FACTORS OF PEAK PERFORMERS:</strong>
            </h5>
            <ul>
              <li>
                <strong>OPTIMAL COGNITIVE FUNCTION: </strong>
                Clear thinkers, effective decision-makers, and efficient problem
                solvers who thrive in even the most challenging circumstances.
              </li>
              <li>
                <strong>GOAL ORIENTED: </strong>
                Self-motivated individuals who consistently set clear and
                challenging goals, demonstrating disciplined time-management
                skills.
              </li>
              <li>
                <strong>MENTALLY RESILIENT: </strong>
                Perform well under pressure, maintain focus in challenging
                conditions, and exhibit mental toughness to achieve exceptional
                results.
              </li>
              <li>
                <strong>PERPETUAL LEARNERS: </strong>
                Lifelong learners who actively seek knowledge for improved
                performance and understanding.
              </li>
              <li>
                <strong>EMOTIONALLY INTELLIGENT: </strong>
                Highly aware of their emotions, manage their emotions
                effectively, while demonstrating empathy for others.
              </li>
              <li>
                <strong>MINDSET: </strong> Relentless in pursuit, learn from
                mistakes, embrace change, and possess a growth mindset.
              </li>
            </ul>
            </div>
          </Container>

          <Row className="d-flex p-5 justify-content-center justify-content-lg-evenly mt-4">
            <Container className="text-center rounded">
              <h5 style={{ textDecoration: "underline" }}>
                WHAT I EXPERIENCE
              </h5>
              <p>
                IN MY WORDS-"A heightened awareness of intricate details that
                often escape notice. I perceive nuances in sound & mood, detect
                shifts in routine, identify subtle missteps in sequences, and
                notice imbalances in visual aesthetics. This attention to detail
                is an undeniable force that fuels my curiosity to delve deeper
                into the 'whys' and 'hows' of everything around me. Always
                willing to lead and, equally as willing to listen. I do not seek
                perfection or to expose flaws; I simply seek knowledge &
                understanding."
              </p>
            </Container>
          </Row>
        </Container>
      </div>
    </div>
  );
}
