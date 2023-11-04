import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Star2() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList((prevShowList) => !prevShowList); // Toggle the value
  }

  return (
    <div className="p-3 border border-dark rounded

    bg-white text-black">
 <div className="text-center pb-2">
    <span>
  <h5>
    <FontAwesomeIcon icon={faHeart} />
    &nbsp; I &nbsp;LOVE
  </h5>
</span>

      </div> 
      
      <button
        className="btn custom-button"
        style={{
          width: "100%",
          backgroundColor: "black",
          border: "none",
          color: "white",
          boxShadow: "2px 2px 4px rgba(255, 255, 255, 0.3)",
          transition: "background-color 0.6s ease, box-shadow 0.3s ease",
        }}
        onClick={handleClick}
      >
        {showList ? "Hide Content" : "Show Content"}
      </button>
      {showList && (
        <div className="justify-content-center align-items-center ">
          <ul>
            <li> Strays (of all sorts)</li>
            <li>The "Underdog"</li>
            <li>Competition</li>
            <li>The Outdoors</li>
            <li>To Use My Brain</li>
            <li>To Make "Things"</li>
            <li>To Fall On My Face</li>
            <li>"Something New"</li>
          </ul>
        </div>
      )}
    </div>
  );
}
