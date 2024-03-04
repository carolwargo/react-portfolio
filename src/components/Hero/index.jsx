import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MeCard from "../../assets/images/MeCard.png";
import { NavLink } from "react-router-dom";

import "../Hero/style.css";

export default function Hero() {
  return (
    <div className="container-fluid">
      <div className="row bg-black">
        <div className="col-lg-7 col-md-12 text-white">
          <img
            src={MeCard}
            alt="MeCard"
            className="hero-image img-fluid"
            style={{
              boxShadow:
                " 0 0 10px rgba(0, 0, 0, 0.1)" /* Adjust the values as needed */,
            }}
          />
        </div>
        <div
          className="col-lg-5 col-md-12 bg-black text-white d-flex flex-column justify-content-center align-items-start"
          style={{
            fontFamily: "bellota text",
            backgroundColor: "darkslategray",
            color: "white",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
              alignItems: "center",
            }}
          >
            CAROL WARGO{" "}
            <span style={{ fontSize: "1rem" }}>
              <p>
                FULL STACK SOFTWARE DEVELOPER <br></br> UX | UI DESIGNER
              </p>
            </span>
          </h1>
          <p>
            "Hello, <strong>I'm Carol</strong>, a passionate Full-Stack Software
            Developer with a solid foundation in both front-end and back-end technologies.
          </p>

          <p style={{ font: "bellota text" }}>
            {" "}
            Follow the <span style={{ color: "white" }}><strong>&nbsp; ← Back</strong></span> &nbsp;{" "}
            <span style={{ color: "white" }}> <strong> Next → &nbsp;</strong></span> links at the bottom
            of each page to ensure nothing is missed! Click
            <span style={{ color: "white" }}> "LEARN MORE"</span> to start... "
          </p>
          <NavLink
            to="/about"
            className="btn mt-3 custom-button"
            style={{
              width: "100%",
              backgroundColor: "white",
              border: "none",
              color: "black",
              boxShadow: "2px 2px 4px rgba(255, 255, 255, 0.3)", // Lighter shadow color
              transition: "background-color 0.6s ease, box-shadow 0.3s ease", // Add hover transitions
            }}
          >
            LEARN MORE
          </NavLink>
        </div>
      </div>
    </div>
  );
}
