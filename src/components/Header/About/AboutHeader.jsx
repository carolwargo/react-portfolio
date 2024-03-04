import React from "react";
import Navbar from "../Navbar/index.jsx";
import Office from "../../assets/images/Office.png";
import { Link } from "react-router-dom";

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
           CAROL WARGO
          </h1>
          <h5>UX/UI DESIGNER & FULL STACK DEVELOPER</h5>
          <h4
            style={{
              fontFamily: "bellota text",
              textDecoration: "bold",
              backgroundColor: "rgba(0, 0, 0, .45)",
            }}
          >
            DIGITAL RESUME & PORTFOLIO{" "}
          </h4>
          <div className="p-2">
              <Link to="/contact">
              <button type="button" className="btn btn-light mx-2 my-2">
                  <b>Contact us</b>
                </button>
              </Link>
              <Link to="/#what-we-do">
              <button type="button" className="btn btn-light mx-2">
                  <b style={{ textShadow: "2px 2px 4px #F63DB0",}}>Learn more</b>
                </button>
              </Link>
           
            </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
