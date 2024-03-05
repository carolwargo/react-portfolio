import React, { useState } from "react";

export default function Star2() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList(prevShowList => !prevShowList); // Toggle the value
  }

  return (
    <div className="w3-content w3-light-gray w3-container w3-padding-large" style={{fontFamily:'Raleway'}}>
    <h5 className="text-center"><i>'Leadership & Profit Surge Against the Odds.'</i> </h5>
      <p className="text-center text-secondary">click <b>Show Content</b> to reveal achievement statement.
      </p>
      <button 
     className="btn custom-button w3-margin-bottom shadow bg-info-subtle"
     style={{
       width: "100%",
       border: "none",
       color: "black",
       borderRadius: "0px",
       boxShadow: "2px 2px 4px rgba(255, 255, 255, 0.3)",
       transition: "background-color 0.6s ease, box-shadow 0.6s ease",
     }}
      onClick={handleClick}>
        {showList ? 'Hide Content' : 'Show Content'}
      </button>
      {showList && (
              <div className="container py-2 shadow ">

 <ul>
             <li className="mx-2"><strong>Situation:</strong> Transform neglected properties with substantial rent arrears.</li>
             <li className="mx-2"><strong>Task:</strong> Develop a cost-effective rehab plan to boost property appeal and recover lost rental income, surpassing original profit projections.</li>
             <li className="mx-2"><strong>Action:</strong> Led as General Contractor, conducting thorough property assessment, strategically prioritizing upgrades, and coordinating with sub-contractors. Managed legalities and navigated regulatory hurdles.</li>
            <li className="mx-2 w3-padding-bottom"><strong>Result:</strong> Slashed project time by 25%, achieved a 15% budget surplus, leading to a 20% profit boost.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
