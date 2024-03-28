import React from "react";
import Office from "../assets/images/Office.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function PageSamples() {
  return (
    <div className="page-samples" id="page-samples">
      <div className="w3-container w3-margin-top w3-padding-64 w3-padding-large justify-content-between text-center">
        <h1
          style={{
            fontSize: "4rem",
            textShadow: "0px 0px 14px #00ffff",
          }}
        >
          <b>CW</b>Portfolio.
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="scrollable-container" style={{ height: "500px", overflowY: "auto" }}>
                <img src={Office} alt="office" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card text-center">
              <div class="card-header">
    Featured
  </div>
              <div className="scrollable-container" style={{  overflowY: "auto" }}>
                <img src={Office} alt="office" style={{ width: "100%" }} />
              </div>
                <div className="card-body">
                  <h5 className="card-title">Blog Sample</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus necessitatibus adipisci ipsum doloremque dolores numquam, quas impedit voluptas, quisquam non id sed explicabo deserunt nemo. Itaque voluptas fugit nisi?</p>
                  <a href="/blog" className="btn btn-primary">See Sample</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spyscroll" id="spyscroll">
        <h4 className="w3-text-black w3-margin-top" id="#spy-scroll">
          SPYSCROLL.
        </h4>
        <hr className="w3-opacity" />
        <p>
          SpyScroll is a popular technique used in web development to
          enhance user navigation and improve the user experience. It
          involves synchronizing the navigation menu with the scroll
          position on the page. As the user scrolls through different
          sections of a webpage, the corresponding navigation menu items
          are highlighted or activated, indicating the user's current
          position on the page.
        </p>
      </div>
    </div>
  );
}

export default PageSamples;
