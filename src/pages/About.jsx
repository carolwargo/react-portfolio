import React from "react";
import Core from "../components/About/Core.jsx";
import Peak from "../components/About/Peak.jsx";
import Volunteer from "../components/About/Volunteer.jsx";
import Intro from "../components/About/Intro.jsx";
import { NavLink } from "react-router-dom";

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
      <div className="flow-links p-4" style={{ flowLinks }}>
      <NavLink to ="/"
    style={{ color: "black", textDecoration: "none" }}
    >
            (Home)  <strong>  ← Back</strong>
          </NavLink>
          &nbsp;&nbsp;&nbsp;
        <NavLink to="/resume"
        style={{ color: "black", textDecoration: "none" }}
        >
               <strong> Next→  </strong> (Resume)
              </NavLink>
</div>

    </div>
  );
}
