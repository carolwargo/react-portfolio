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
        <NavLink to="/resume#resume"
        style={{ color: "black", textDecoration: "none" }}
        >
               <strong> Next→  </strong> (Resume)
              </NavLink>
</div>

    </div>
  );
}
