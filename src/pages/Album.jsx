import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PalmTan from "../assets/images/ShadowBackgrounds/PalmTan.png";
import Placeholder from "../assets/images/Placeholder.png";
import Card from "react-bootstrap/Card";

function AlbumExample() {
  const imageArray = [
    Placeholder,
    Placeholder,
    Placeholder,
    Placeholder,
    Placeholder,
    Placeholder,
  ];

  return (
    <div className="album" id="album">
      <br />
      <style>
        {`
          .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
          }

          @media (min-width: 768px) {
            .bd-placeholder-img-lg {
              font-size: 3.5rem;
            }
          }
        `}
      </style>
      <br />
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-info-subtle w3-margin-top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <i className="fas fa-camera w3-margin-right"></i><b>my</b>album.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing"><b>upload</b>album. <i
                        className="fas fa-cloud-upload-alt text-info"
                      ></i></Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <i className="fas fa-lock "></i> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        {/* Background image and white mask */}
        <div>
          <section
            className="py-5 text-center"
            style={{
              position: "relative",
              backgroundImage: `url(${PalmTan})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* White mask */}
            <div
              className="w3-margin-top"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor:
                  "rgba(255, 255, 255, 0.75)" /* Adjust opacity as needed */,
                zIndex: -1,
              }}
            ></div>

            <div className="container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">   <i className="fas fa-camera w3-margin-right"></i><b>my</b>album.</h1>
                  <p className="lead text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maxime dolorem obcaecati voluptatem? Voluptates, nam? Eligendi voluptas repellat ipsa, alias assumenda laboriosam in quibusdam, harum quasi inventore iure vero ipsum?.
                  </p>
                  <p>
                    <a href="/" className="btn btn-info my-2 w3-margin-right">
                      Contact
                    </a>
                    <a href="/" className="btn btn-secondary my-2">
                      Upload
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="album py-5 w3-light-gray">
          <div className="container w3-padding-64">    
        
          <h3 className="fw-light">   <i className="fas fa-camera w3-margin-right w3-margin-bottom"></i><b className="fw-bold">image</b>vault.</h3>
       
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {imageArray.map((image, index) => (
                <div className="col" key={index}>
                  <div className="card shadow-sm">
                    <img
                      src={image}
                      className="card-img-top w3-opacity w3-hover-opacity-off border border-bottom"
                      alt={` ${index + 1}`}
                    />

                    <div className="card-body bg-info-subtle">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-info">
                            <i className="fas fa-edit"></i> Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                          >
                            <i className="fas fa-share"></i> Share
                          </button>
                        </div>
                        <small className="text-muted w3-opacity w3-hover-opacity-off ">
                          <i
                            className="fas fa-trash"
                            style={{ fontSize: "1rem" }}
                          ></i>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className=" w3-padding-64 w3-light" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-md-1 py-4">
              <h4>Create An Album</h4>

              <ol>
                <li>Click the 'Upload' button to start the process. </li>
                <li>
                  Once prompted, select the photos you want to include in the
                  album.
                </li>
                <li>
                  After that, add some information about the album. Feel free to
                  provide a brief description, including details about the
                  creator or the contents of the album. Make it informative but
                  concise, ensuring that readers can grasp the essence of the
                  images.
                </li>
              </ol>
              <hr />
              <div className="w3-margin-left">
                <h5 className="">Connect with Us</h5>
                <p className="">
                  If you need inspiration from our community,{" "}
                  <a href="/" className="">
                    Follow us on Twitter X{" "}
                  </a>
                  , or{" "}
                  <a href="/" className="">
                    {" "}
                    Like us on Facebook{" "}
                  </a>
                  . For non-urgent inquiries, feel free to reach out to us via{" "}
                  <a href="mailto:">Email</a>. Have a concern that just can't
                  wait, contact <a href="mailto:">Customer Support</a>.
                </p>
                <br />
                <div className="row">
                  <div className="col l6">
                    <ul className="list-unstyled">
                      <li>
                        <a href="/" className="">
                          <i className="fab fa-twitter w3-margin-right"></i>
                          Follow on Twitter
                        </a>
                      </li>
                      <li>
                        <a href="/" className="">
                          <i className="fab fa-facebook w3-margin-right"></i>
                          Like on Facebook
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col l6">
                    <ul className="list-unstyled">
                      <li>
                        <a href="/" className="">
                          <i className="fas fa-envelope w3-margin-right"></i>
                          Email Us
                        </a>
                      </li>
                      <li>
                        <a href="/" className="">
                          <i className="fas fa-phone w3-margin-right"></i>
                          Customer Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 py-4">
              <div className="w3-container">
                <Card className="border justify-content-center rounded-50 border border-subtle">
                  <Card.Body className="text-center w3-padding-64 border">
                    <Card.Title>UPLOAD HERE</Card.Title>

                    <a href="mailto=carolwargo.dev@gmail.com">
                      {" "}
                      <i
                        className="fas fa-cloud-upload-alt text-info"
                        style={{ fontSize: "5rem" }}
                      ></i>
                    </a>
                  </Card.Body>
                  <Card.Footer
                    className="align-items-end w3-margin bg-info-subtle"
                    style={{ fontSize: "14px" }}
                  >
                    <p>
                      Once saved, share the album on various social sites, or
                      directly with your friends, family, or colleagues by
                      copying the link and sending it to them via email or
                      messaging platforms."
                    </p>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-muted py-5">
          <div className="container">
            <p className="float-end mb-1">
              <a href="/">Back to top</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default AlbumExample;
