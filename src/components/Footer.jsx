import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  // Add console.log statement here

  return (
    <div>
      {/*start Footer */}
      <div
        className="w3-container w3-padding-48 w3-light-gray w3-center w3-margin-top w3-opacity w3-hover-opacity-off"
      >
        <Link to="/" className="w3-hover-opacity mx-1 text-black">
          Home{" "}
        </Link>
        <Link to="/about" className="w3-hover-opacity mx-1 text-black">
          About{" "}
        </Link>
        <Link to="/resume" className="w3-hover-opacity mx-1 text-black">
          Resume
        </Link>
        <Link to="/portfolio" className="w3-hover-opacity mx-1 text-black">
          Portfolio
        </Link>
        <Link to="/contact" className="w3-hover-opacity mx-1 text-black">
          Contact{" "}
        </Link>
        <br />

        <p className="w3-medium ">
          Copyright: <span>&copy; 2024 Carol Wargo</span>
        </p>
      </div>
      {/*end Footer */}
    </div>
  );
}

export default Footer;
