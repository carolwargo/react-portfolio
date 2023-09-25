import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Thankyou() {
  return (
    <div>
    <section className=" justify-content-left p-0" style={{ backgroundColor: "#EDEBEB" }}>
      <div className="mt-1 text-black bg-black">
        <MDBRow className="pt-4 pb-4">
          <MDBCol md="5" className=" mb-4 bg-light" style={{marginLeft:'6rem', marginRight:'1rem', marginTop:'4rem'}}>
            <h3 className="text-uppercase fw-bold mb-3 mt-3 ml-3">
              <MDBIcon color="black" icon="gem" style={{marginRight:'.5rem', marginTop:'1rem'}}/>
               Thank You
            </h3>
            <p className="mr-3 ml-4 mt-4" style={{ fontSize: "1.3rem" }}>
              "Thank you for visiting! Your presence is appreciated, and
              your{" "}
              <strong>
                {" "}
                <MDBIcon
                  color="black"
                  icon="share-from-square"
                  className="me-1"
                  
                />
                FEEDBACK
              </strong>{" "}
              is welcome. I believe each perspective is unique and provides
              a fresh angle that I may not have considered. Constructive
              criticism helps me identify areas for improvement and offers
              opportunities for me to fine-tune my skills to foster growth
              and innovation. Please feel free to reach out to me via email,
              phone, or LinkedIn or simply fill out the feedback form
              provided. I look forward to hearing from you!" - Carol Wargo
            </p>
          </MDBCol>
          <MDBCol xl="5" className=" mb-4 bg-light" style={{ marginLeft: "3rem" }}>
            <h3 className="text-uppercase fw-bold mb-3 mt-3">
              <MDBIcon color="black" icon="share-from-square" style={{marginRight:'.5rem'}}/>
              Feedback Form
            </h3>
            <p className="ml-2" style={{ fontSize: "1.2rem" }}>
              Thank you for providing your thoughts, and for your
              participation in my journey towards continuous improvement.
            </p>
            <div className="container ">
              <form action="/action_page.php">
                <div className="mb-2 mt-2 ">
                  <label htmlFor="email">Email</label>{" "}
                  {/* Use htmlFor instead of for */}
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div className="mb-2 ">
                  <label htmlFor="feedback">Feedback</label>{" "}
                  {/* Use htmlFor instead of for */}
                  <textarea
                    className="form-control"
                    rows="4"
                    id="feedback"
                    placeholder="Type message..."
                    name="text"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-black"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </section>

    <div
      className="text-center p-4"
      style={{ backgroundColor: "white", color: "black" }}
    >
      © 2023 Copyright: Carol Wargo-
      <a
        className="text-reset fw-bold"
        href="https://www.github.com/carolwargo/"
      >
        GitHub
      </a>
    </div>
  </div>
  );
}
