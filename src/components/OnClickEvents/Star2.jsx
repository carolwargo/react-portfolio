import React, { useState } from "react";

export default function Star2() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList(prevShowList => !prevShowList); // Toggle the value
  }

  return (
    <div className="p-2" style={{fontFamily:'Raleway'}}>
    <h5 className="text-center"><i>'Develop & Launch Targeted Digital Marketing Campaigns.'</i> </h5>
      <p className="text-center text-secondary">click <b>Show Content</b> to reveal achievement statement.
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
        <div className="container">
          <ul>
            <li><strong>Situation:</strong> Faced with a competitive market, I was tasked with creating marketing campaigns to attract potential buyers.</li>
            <li><strong>Task:</strong> To develop and execute a comprehensive digital marketing strategy that would effectively showcase the property's unique selling points.</li>
            <li><strong>Action:</strong> Conduct market research to identify demographics and buyer personas, design multi-channel digital campaigns that included social media advertising, email marketing, and search engine optimization to produce content highlighting features & benefits.</li>
            <li><strong>Result:</strong> Campaigns yielded, on average, a 40% increase in traffic, generating hundreds of leads. Notably, traffic-driven leads contributed to 96% of closed sales.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
