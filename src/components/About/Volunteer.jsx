import React from "react";
import { Container } from "react-bootstrap";

export default function Volunteer() {
  return (
    <div
      className="border-top p-5 bg-secondary text-white"
      id="#community-service"
    >
      <Container className=" p-3 rounded mx-auto bg-secondary"
      style={{
        fontFamily: "bellota text",
      }}
      >
        <h2 className="text-decoration-underline">
          <strong>3. GIVING BACK & GAINING MORE</strong>
        </h2>
        <p>
          <strong>EVERYTHING NEW & EXCITING</strong> in my life has been a
          direct result of the volunteer opportunities presented to
          me... <br></br> <strong>INCLUDING MY CAREER PATH.</strong>."
        </p>
      </Container>

      <Container
        className="bg-black text-white"
        style={{
          borderRadius: "10px",
          fontFamily: "bellota text",
        }}
      >
        <div className="p-5">
          <h5
            style={{
              textAlign: "start",
              fontWeight: "bold",
            }}
          >
            {" "}
            The Signifigance in My Life:
          </h5>

          <p >
            "Volunteer work has and will consistently hold a central place in my
            household, serving as a facet of responsibility and an integral part
            of my identity. Beyond its apparent merits, I personally consider
            community service to be the single most powerful platform for my
            personal growth, skill development, and most important EXPOSURE- The
            opportunity to explore aspects of life that I may not have
            encountered otherwise. "
          </p>
          <h5
            style={{
              textAlign: "start",
              fontWeight: "bold",
            }}
          >
            {" "}
            Personal & Interpersonal Gains:
          </h5>

          <p
            style={{
              marginRight: "15px",
              fontFamily: "bellota text",
            }}
          >
            Volunteer work has expanded my perspective and taught me the
            importance of empathy and social responsibility. It has strengthened
            my ability to collaborate with diverse groups of people, understand
            various perspectives, and adapt to different working environments.
            Often given few resources to accomplish massive tasks; resilience,
            resourcefulness and creativity are key to success.{" "}
          </p>
          <h5
            style={{
              textAlign: "start",
              fontWeight: "bold",
            }}
          >
            {" "}
            A Catalyst For Professional Development:
          </h5>
          <p>
            In addition to personal and interpersonal skills, volunteer work has
            also exposed me to a wide range of industries and fields. This
            exposure has deepened my understanding of various sectors, broadened
            my knowledge base, and allowed me to explore potential career paths.
            It has been a source of inspiration, a catalyst for professional
            development, and is directly attributed to leading me to discover my
            passion for the digital world.
          </p>
      <div className="p-2 bg-white text-black "
        style={{
          borderRadius: "10px",
          fontFamily: "bellota text",
        }}
      >
        <h5 className="pb-2 pt-2 text-center text-decoration-underline">
          <strong>EVENTS & DESCRIPTIONS:</strong>
        </h5>
        

        <ul>
          <li>
            <strong>MIRACLE LEAGUE (favorite):</strong> Assist with organized
            sports for children & young adults with disabilities.
          </li>
          <li>
            <strong>ABUSED PERSONS PROGRAM (1st-experience):</strong> Provide a
            range of services to support those affected by violence.
          </li>
          <li>
            <strong>FOOD PANTRY:</strong> Distributes food & household goods to
            those in need.
          </li>
          <li>
            <strong>FARMING 4HUNGER:</strong> Grows and distributes locally
            grown produce.
          </li>
          <li>
            <strong>UNDER ARMOUR GIVE-BACK:</strong> Participation includes but,
            is not limited to- rebuilding schools, distributing school supplies,
            assisting with students & assemblies, and packing & shipping food
            items to ship overseas.
          </li>
          <li>
            <strong>NATURE CENTER VOLUNTEER:</strong> Provide care for the
            animals, monitor health, collect data, and assist with educational
            programs.
          </li>
          <li>
            <strong>YOUTH CLUB SECRETARTY:</strong> Maintain website & database,
            facilitate meetings, coordinate registration, plan events and
            organize fundraising activities.
          </li>
          <li>
            <strong>PUBLIC SCHOOLS VOLUNTEER:</strong> Assist with classroom
            activities, work with & support kids in need, plan & facilitate
            events.
          </li>
        </ul>
        </div>
        </div>
      </Container>
    </div>
  );
}
