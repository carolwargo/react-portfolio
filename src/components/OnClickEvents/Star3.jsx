import React, { useState } from "react";

export default function Star2() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList(prevShowList => !prevShowList); // Toggle the value
  }

  return (
    <div className="p-2">
        <h5> "Leadership & Profit Surge"</h5>
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
            <li><strong>Situation:</strong> Transform neglected properties with substantial rent arrears.</li>
            <li><strong>Task:</strong> Develop a cost-effective rehab plan to boost property appeal and recover lost rental income, surpassing original profit projections.</li>
            <li><strong>Action:</strong> Led as General Contractor, conducting thorough property assessment, strategically prioritizing upgrades, and coordinating with sub-contractors. Managed legalities and navigated regulatory hurdles.</li>
            <li><strong>Result:</strong> Slashed project time by 25%, achieved a 15% budget surplus, leading to a 20% profit boost.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
