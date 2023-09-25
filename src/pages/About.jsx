import React from "react";
import { NavLink } from "react-bootstrap";
import Core from "../components/About/Core.jsx";
import Peak from "../components/About/Peak.jsx";
import Volunteer from "../components/About/Volunteer.jsx";
import Intro from "../components/About/Intro.jsx";

import "../styles/links.css";

const flowLinks = {
  display: "flex",
  justifyContent: "center",
};

export default function AboutPage() {
  return (
    <div className="about" id="about">
      <h1
        style={{
          fontFamily: "bellota text",
          fontSize: "4rem",
          marginLeft: "1rem",
          paddingBottom: "2rem",
          paddingTop: "2rem",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
        }}
      >
        ABOUT{" "}
      </h1>

      <Intro />
      <div id="philisophy-values">
        <Core />
      </div>
      <div id="blessing-curse">
        <Peak />
      </div>
      <div id="community">
        <Volunteer />
      </div>

      {/*flow-link <-previous-page & next-page->*/}
      <div className="flow-links mt-5" style={flowLinks}>
        <NavLink
          href="/"
          id="#home"
          className="ml-5 pb-3"
          style={{ color: "red" }}
        >
          <strong>← Back (Home)</strong>
        </NavLink>
     
        <NavLink
          href="/resume"
          id="#resume"
          className="ml-5 pb-3 {}"
          style={{ color: "blue" }}
        >
          <strong>Next (Resume) →</strong>
        </NavLink>
      </div>
    </div>
  );
}
