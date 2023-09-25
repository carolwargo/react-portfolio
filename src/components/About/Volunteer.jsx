import React from "react";
import { Container } from "react-bootstrap";

export default function Volunteer() {
  return (
    <div className="border-top bg-secondary text-white" id="#community-service">
      <div >
        <Container
          className="pt-5 rounded mx-auto" // Added mx-auto here
          style={{
            marginRight: "2rem",
            marginLeft: "2rem",
            backgroundColor: "secondary",
            
           
          }}
        >
       
     
        <div className=" volunteer-header pt-3 pb-5"
        style={{fontFamily:'bellota text'
        }}
        >
          
          <h2 className="pl-2 pr-2">
           <strong> 3. GIVING BACK & GAINING MORE~</strong>
          </h2>
          <p className="pl-5 pr-3">
            <strong>EVERYTHING NEW & EXCITING</strong> in my life has been a
            direct result of the <br></br>volunteer opportunities presented to
            me... <strong>INCLUDING MY CAREER PATH.</strong>."
          </p>
       
        <div md="6" style={{ marginTop: "2rem" }}>
          <Container
            className="pb-3 pt-2 bg-black text-white"
            style={{ 
              borderRadius: "10px", 
              fontFamily: "bellota text", 
            }}
          >
            <div className="ml-4 mr-3">
              <h5
                style={{
                  textAlign: "start",
                  fontWeight: "bold",
                  marginTop: "2rem",
                }}
              >
                {" "}
                The Signifigance in My Life:
              </h5>

              <p style={{ textAlign: "start" }}>
                "Volunteer work has and will consistently hold a central place
                in my household, serving as a facet of responsibility and an
                integral part of my identity. Beyond its apparent merits, I
                personally consider community service to be the single most
                powerful platform for my personal growth, skill development, and
                most important EXPOSURE- The opportunity to explore aspects of
                life that I may not have encountered otherwise. "
              </p>
              <h5
                style={{
                  textAlign: "start",
                  fontWeight: "bold",
                  marginTop: "2rem",
                }}
              >
                {" "}
                Personal & Interpersonal Gains:
              </h5>

              <p
                style={{
                  marginRight: "15px",
                  fontFamily: "bellota text",
                  textAlign: "left",
                }}
              >
                Volunteer work has expanded my perspective and taught me the
                importance of empathy and social responsibility. It has
                strengthened my ability to collaborate with diverse groups of
                people, understand various perspectives, and adapt to different
                working environments. Often given few resources to accomplish
                massive tasks; resilience, resourcefulness and creativity are
                key to success.{" "}
              </p>
              <h5
                style={{
                  textAlign: "start",
                  fontWeight: "bold",
                  marginTop: "2rem",
                }}
              >
                {" "}
                A Catalyst For Professional Development:
              </h5>
              <p>
                In addition to personal and interpersonal skills, volunteer work
                has also exposed me to a wide range of industries and fields.
                This exposure has deepened my understanding of various sectors,
                broadened my knowledge base, and allowed me to explore potential
                career paths. It has been a source of inspiration, a catalyst
                for professional development, and is directly attributed to
                leading me to discover my passion for the digital world.
              </p>
            </div>
            <h5 className="mt-5 ml-4 text-decoration-underline">
              <strong>EVENTS & DESCRIPTIONS:</strong>
            </h5>
            <p className="ml-4 mb-3" style={{ fontFamily: "sans-serif" }}>
              Listed below are some of the most significant volunteer events I
              have had the pleasure of being a part of...
            </p>

            <ul>
              <li className="ml-3">
                <strong>MIRACLE LEAGUE (favorite):</strong> Assist with organized sports for children & young adults with disabilities.
              </li>
              <li className="ml-3">
                <strong>ABUSED PERSONS PROGRAM (1st-experience):</strong>{" "}
                Provide a range of services to support those affected by violence.
              </li>
              <li className="ml-3">
                <strong>FOOD PANTRY:</strong> Distributes food & household goods
                to those in need.
              </li>
              <li className="ml-3">
                <strong>FARMING 4HUNGER:</strong> Grows and distributes locally
                grown produce.
              </li>
              <li className="ml-3">
                <strong>UNDER ARMOUR GIVE-BACK:</strong> Participation includes but, is not limited to- rebuilding schools, distributing school supplies, assisting with students & assemblies, and packing & shipping food items to ship overseas. 
              </li>
              <li className="ml-3">
                <strong>NATURE CENTER VOLUNTEER:</strong> Provide care for the animals, monitor health, collect data, and assist with educational programs.
              </li>
              <li className="ml-3">
                <strong>YOUTH CLUB SECRETARTY:</strong> Maintain website & database, facilitate meetings, coordinate registration, plan events and organize fundraising activities. 
              </li>
              <li className="ml-3">
                <strong>PUBLIC SCHOOLS VOLUNTEER:</strong> Assist with classroom activities, work with & support kids in need, plan & facilitate events.
              </li>
            </ul>
          </Container>
        </div>
      </div>
      </Container>
    </div>
    </div>
  );
}
