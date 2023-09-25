import React from "react";
import Navbar from "../Navbar/index.jsx";
import Office from "../../assets/images/Office.png";

export default function Header() {
  const bgImageHeader = {
    backgroundImage: `url(${Office})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "8rem",
    width: "100%",
    height: "100%",
    textAlign: "center",
    position: "relative", // Set position to relative
  };

  const overlay = {
    content: "",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, .45)" /* Black with 24% opacity */,
  };

  return (
    <div className="container-fluid, bg-black, text-white">
      <div className="bg-image text-white text-center" style={bgImageHeader}>
        <div className="overlay" style={overlay}>
          <h1
            style={{
              fontFamily: "bellota text",
              textDecoration: "bold",
              fontSize: "5rem",
              marginTop: "2.5rem",
            }}
          >
            WELCOME!
          </h1>
          <h4
            style={{
              fontFamily: "bellota text",
              textDecoration: "bold",
              backgroundColor: "rgba(0, 0, 0, .45)",
            }}
          >
            DIGITAL RESUME & PORTFOLIO{" "}
          </h4>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
