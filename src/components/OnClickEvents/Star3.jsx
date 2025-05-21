import React, { useState } from "react";

export default function Star2() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList(prevShowList => !prevShowList); // Toggle the value
  }

  return (
    <div className="w3-content w3-light-gray w3-container p-4" style={{fontFamily:'Raleway'}}>
    <h6 className="text-center"><i>'Leadership & Profit Surge Against the Odds.'</i> </h6>
    
      <button 
 className="w3-button w3-margin-bottom shadow bg-info-subtle w3-hover-opacity "
 style={{
   width: "100%",
   border: "none",
   color: "black",
      borderRadius: "0px",
      padding: "20px",  
    }}
    onClick={handleClick}>
    {showList ? 'CLOSE ACHIEVEMENT' : 'SHOW ACHIEVEMENT'}
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
