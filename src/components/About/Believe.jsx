import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";

export default function Star2() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList((prevShowList) => !prevShowList); // Toggle the value
  }

  return (
    <div className="p-3 border border-dark rounded

    bg-white text-black">
 <div className="text-center">
    <span>
  <h5>
  <FontAwesomeIcon icon={faThinkPeaks} />
    &nbsp; I &nbsp; BELIEVE
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
        <div>
          <ul>
            <li> In Magical Moments</li>
            <li>Happily Ever-After</li>
            <li>Positivity is the Fountain of Youth</li>
            <li>”It's NEVER
                    Too Late…”</li>
            <li>NO ONE Is Beyond Redemption</li>
          </ul>
        </div>
      )}
    </div>
  );
}
