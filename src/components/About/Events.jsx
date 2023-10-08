import React, { useState } from "react";


export default function Star2() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList((prevShowList) => !prevShowList); // Toggle the value
  }

  return (
    <div className="p-3 text-white d-flex justify-content-center ">
 <div>
 <h6>Click to show a litst of EVENTS & DESCRIPTIONS:</h6>
 <div>

 </div>
      <button
        className="btn custom-button d-flex justify-content-center "
        style={{
          backgroundColor: "white",
          border: "none",
          color: "black",
          boxShadow: "2px 2px 4px rgba(255, 255, 255, 0.3)",
          transition: "background-color 0.6s ease, box-shadow 0.3s ease",
        }}
        onClick={handleClick}
      >
        {showList ? "Hide Content" : "Show Content"}
      </button>
      </div>
      {showList && (
        <div>
         <h5 className="pb-2 pt-2 text-decoration-underline">
          <strong>EVENTS & DESCRIPTIONS:</strong>
        </h5>
        
<div></div>
        <ul>
          <li>
            <strong>MIRACLE LEAGUE (favorite):</strong> Assist with organized
            sports for children & young adults with disabilities.
          </li>
          <li>
            <strong>ABUSED PERSONS PROGRAM (1st-experience):</strong> Provide a
            range of services to support those affected by violence.
          </li>
          <li>
            <strong>FOOD PANTRY:</strong> Distributes food & household goods to
            those in need.
          </li>
          <li>
            <strong>FARMING 4HUNGER:</strong> Grows and distributes locally
            grown produce.
          </li>
          <li>
            <strong>UNDER ARMOUR GIVE-BACK:</strong> Participation includes but,
            is not limited to- rebuilding schools, distributing school supplies,
            assisting with students & assemblies, and packing & shipping food
            items to ship overseas.
          </li>
          <li>
            <strong>NATURE CENTER VOLUNTEER:</strong> Provide care for the
            animals, monitor health, collect data, and assist with educational
            programs.
          </li>
          <li>
            <strong>YOUTH CLUB SECRETARTY:</strong> Maintain website & database,
            facilitate meetings, coordinate registration, plan events and
            organize fundraising activities.
          </li>
          <li>
            <strong>PUBLIC SCHOOLS VOLUNTEER:</strong> Assist with classroom
            activities, work with & support kids in need, plan & facilitate
            events.
          </li>
        </ul>
     
        </div>
      )}
    </div>
  );
}
