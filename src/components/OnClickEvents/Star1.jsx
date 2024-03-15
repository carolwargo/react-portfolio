import React, { useState } from "react";

export default function Star1() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList(prevShowList => !prevShowList); // Toggle the value
  }

  return (
    <div className="w3-content w3-light-gray w3-container w3-padding-large" style={{fontFamily:'Raleway'}}>
        <h6 className="text-center"><i>'Technological Transformation in Business.'</i> </h6>
     
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
        
        <div className="container py-2 shadow">
<ul className="w3-margin-top">
            <br />
            <li className="mx-2"><strong>Situation:</strong>  In an evolving real estate landscape, I recognized the urgency to modernize our practices through technology.</li>
            <li className="mx-2"><strong>Task:</strong> Utilized advanced real estate software, implemented paperless systems, and optimized digital communications to revolutionize operations.</li>
            <li className="mx-2"><strong>Action:</strong> Conducted targeted research to, integrate seamless tech solutions, streamline transactions through paperless systems, enhanced collaboration and client engagement and prioritized website maintenance for an optimal user experience.</li>
            <li className="mx-2 w3-padding-bottom"><strong>Result:</strong> Significantly enhanced operational efficiency and reduced turnaround times. While, simultaneously, eliminating the need for support staff. A dynamic online presence elevated client experiences, reinforcing a competitive edge in the market.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
