import React, { useState } from "react";

export default function Star4() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList(true);
  }

  return (
    <div className="p-2">
        <h6>Click PROJECT MANAGEMENT button to reveal "Achievement Statement". </h6>
      <button 
       className="btn custom-button"
       style={{
         width: "90%",
         backgroundColor: "black",
         border: "none",
         color: "white",
         boxShadow: "2px 2px 4px rgba(255, 255, 255, 0.3)", // Lighter shadow color
         transition: "background-color 0.6s ease, box-shadow 0.3s ease", // Add hover transitions
       }}
     
      onClick={handleClick}>PROJECT MANAGEMENT</button>
      {showList && (
        <ul>
          <li><strong>Situation:</strong> Describe the context or background of the situation.</li>
          <li><strong>Task:</strong> Specify the specific task or challenge you faced.</li>
          <li><strong>Action:</strong> Detail the actions you took to address the situation or task.</li>
          <li><strong>Result:</strong> Explain the outcome or results of your actions.</li>
        </ul>
      )}
    </div>
  );
}
