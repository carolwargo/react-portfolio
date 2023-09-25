import React from "react";
import Hero from "../components/Hero/index.jsx";

import "../styles/links.css";

const homePageStyles = {
  marginBottom: "5px",
  padding: "5px",
  backgroundColor: "black",
};

export default function HomePage() {
  return (
    <div className="home" id="home" style={homePageStyles}>
        
      
      <Hero />
    </div>
  );
}
