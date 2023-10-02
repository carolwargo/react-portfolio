import React, { useState } from "react";

export default function Star2() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList(prevShowList => !prevShowList); // Toggle the value
  }

  return (
    <div className="p-2">
        <h5>  Achievement 1: Technological Transformation in Real Estate Business "Achievement Statement".</h5>
      <p className="text-secondary">Click 'Show Content' button to reveal "Achievement Statement".
      </p>
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
      onClick={handleClick}>
        {showList ? 'Hide Content' : 'Show Content'}
      </button>
      {showList && (
        <div>

 <ul>
            <li><strong>Situation:</strong>  In an evolving real estate landscape, I recognized the urgency to modernize our practices through technology.</li>
            <li><strong>Task:</strong> Utilized advanced real estate software, implemented paperless systems, and optimized digital communications to revolutionize operations.</li>
            <li><strong>Action:</strong> Conducted targeted research to, integrate seamless tech solutions, streamline transactions through paperless systems, enhanced collaboration and client engagement and prioritized website maintenance for an optimal user experience.</li>
            <li><strong>Result:</strong> Significantly enhanced operational efficiency and reduced turnaround times. While, simultaneously, eliminating the need for support staff. A dynamic online presence elevated client experiences, reinforcing a competitive edge in the market.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
