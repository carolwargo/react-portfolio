import React from "react";
import MeWhite from "../assets/images/MeWhite.png";


function Header() {
  return (
    <div>
      

      <header>
        <div className="row w3-justify w3-center w3-margin-top w3-padding-24">
          <div className="col-lg-5 ">
          <img
              src={MeWhite}
              className="w3-image w3-round"
              style={{ display: "block", width: "100%" }}
              alt="Profile"
            />
          </div>
          <div className="col-lg-6">
            <div
              className="w3-container w3-content w3-center justify-content-center align-items-center"
              style={{ padding: "128px 16px", marginRight:'1rem' }}
            >
              
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
