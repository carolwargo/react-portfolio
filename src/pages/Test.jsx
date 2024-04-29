import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TableBasic from "../components/Portfolio/Tables/TableBasic.jsx";
import { Button, Badge, CloseButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import WebComponents from "../assets/images/WebComponents.jpeg";

function Portfolio() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // State to manage accordion expansion
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to handle accordion toggle
  const handleAccordionToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const faqs = [
    {
      question: "Web Alerts",
      answer:
        "A web component is a reusable and encapsulated set of HTML, CSS, and JavaScript that can be used to create custom elements and widgets for web applications. Web components enable developers to encapsulate and package UI elements, making them easier to reuse and maintain across different projects.",
      link: "/portfolio#alerts",
    },

    {
      question: "What are web tables?",
      answer:
        "Web tables are used to display tabular data in a structured format on web pages. They consist of rows and columns, with data organized in cells. Web tables are commonly used for presenting data such as financial reports, product listings, and comparison charts on websites.",
      link: "/portfolio#tables",
    },
 /*   {
      question: "Why are graphics elements valuable?",
      answer:
        "Graphics elements are valuable in web design and development for enhancing visual appeal, conveying information effectively, and improving user engagement. They include images, icons, illustrations, charts, graphs, and other visual elements that help in illustrating concepts, guiding users, and making the user interface more engaging and intuitive.",
      link: "/portfolio#graphics",
    },
    */
    {
      question: "What are the alert colors for and what do they mean?",
      answer:
        "Alert colors are used in web design to convey different levels of importance. These colors help users quickly identify the nature of the message or notification being displayed and take appropriate actions. See examples of what the different colors indicate",
      link: "/portfolio#alerts",
    },
    {
      question: "Web forms",
      answer:
        "Web forms are a crucial part of web development that allows users to input data into a web application. They consist of various form elements such as input fields, checkboxes, radio buttons, dropdown menus, and buttons. Web forms are used for collecting user information, submitting data to servers, and performing various actions based on user input.",
      link: "/forms",
    },
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className="home"
    >
      <div>
        <div className="container w3-padding-top-64">
          <div className="row d-flex justify-content-center align-items-center w3-margin-top">
          <div className="col-sm-12 col-md-6 col-lg-6 flex-column my-1">
              <img src={WebComponents} alt="web-components" style={{width:'100%'}} className="w3-round-xxlarge border shadow"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 flex-column w3-padding-large my-1">
            <h1>Web Components</h1>
              <p>
           
Web components enable the creation of custom elements for web pages and apps. Offering benefits like code reuse, encapsulation, and interoperability.
              </p>
              
              <style>
                {`
      .accordion-item {
        border: none; /* Remove outside border */
        border-bottom: 1px solid #dee2e6; /* Add bottom border */
      }
      .question.py-2 {
        font-size: 2rem !important; /* Adjust font size */
        font-weight: bold;
      }
  
    `}
              </style>
              <Accordion defaultActiveKey="0" className="components-accordian">
                {faqs.map((faq, index) => (
                  <Accordion.Item
                    key={index}
                    eventKey={index.toString()}
                    className="accordion-item"
                  >
                    <Accordion.Header
                      className="question py-1 w3-xlarge"
                      onClick={() => handleAccordionToggle(index)}
                      style={{ fontSize: "2rem" }}
                    >
                      {faq.question}
                    </Accordion.Header>
                    <Accordion.Body className="answer">
                      {faq.answer}
                      <div>
                        <Link to={faq.link}>
                          <button className="link w3-button w3-black w3-padding w3-round-xxlarge mt-2">
                           Learn More
                          </button>
                        </Link>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          
          </div>
          <hr />
        </div>
        {/**Start Alerts */}
        <div className="container w3-padding-32 text-black" id="alerts">
          <div className="row d-flex justify-content-center align-items-center w3-margin-top">
            <div className="col-sm-12 col-md-6 col-lg-6 flex-column">
              <div className="container ">
                <h1>Alert Components</h1>
                <p>
                  Alert color options are strategically chosen to convey
                  different meanings and priorities.
                </p>

                <Alert variant="info" className="w3-round-xxlarge shadow">
                  <Alert.Heading>
                    {" "}
                    <h4 id="alerts">THIS IS AN ALERT.</h4>{" "}
                  </Alert.Heading>
                  <hr />
                  <p className="mb-0 w3-hover-opacity w3-margin-bottom">
                    Alerts are designed to be attention-grabbing, often with
                    prominent colors, icons, and text formatting to ensure users
                    notice them.
                  </p>

                  <hr />
                  <p>Color indicates info alert.</p>
                </Alert>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 flex-column">
              <div className="container w3-padding-large">
                <div className="row justify-content-center align-items-center ">
                  <div className="flex-column col-sm-12 col-md-6 col-lg-6">
                    <p style={{ fontSize: "14px" }}>
                      {" "}
                      Blue, light gray, white, and black are often used to
                      establish a messaging hierarchy, with 'primary' being the
                      most prominent color, indicating the primary action or
                      information.
                    </p>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div
                      style={{ display: "flex", gap: "10px" }}
                      className=" justify-content-center"
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "#b8daff",
                          }}
                          className="shadow"
                        ></div>
                        <p style={{ marginTop: "5px", fontSize: "12px" }}>
                          Primary
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "#d6d8db",
                          }}
                          className="shadow"
                        ></div>
                        <p style={{ marginTop: "5px", fontSize: "12px" }}>
                          Secondary
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "white",
                          }}
                          className="shadow"
                        ></div>
                        <p style={{ marginTop: "5px", fontSize: "12px" }}>
                          White
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "black",
                          }}
                          className="shadow"
                        ></div>
                        <p style={{ marginTop: "5px", fontSize: "12px" }}>
                          Black
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <br />

                <div className="row justify-content-center align-items-center ">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <p style={{ fontSize: "14px" }}>
                      {" "}
                      Green, red, and yellow are commonly associated with
                      actions or statuses.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div
                      style={{ display: "flex", gap: "10px" }}
                      className="justify-content-center align-items-center "
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "#c3e6cb",
                          }}
                          className="shadow"
                        ></div>
                        <p style={{ marginTop: "5px", fontSize: "12px" }}>
                          Success
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: " #f5c6cb",
                          }}
                          className="shadow"
                        ></div>
                        <p style={{ marginTop: "5px", fontSize: "12px" }}>
                          Danger
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "#ffeeba",
                          }}
                          className="shadow"
                        ></div>
                        <p style={{ marginTop: "5px", fontSize: "12px" }}>
                          Warning
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row justify-content-center align-items-center ">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <p style={{ fontSize: "14px" }}>
                      {" "}
                      Lighter shades such as light and teal are frequently
                      employed to inform, direct, or notify users without
                      necessarily signaling urgency or importance.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div
                      style={{ display: "flex", gap: "10px" }}
                      className="justify-content-center align-items-center "
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "#bee5eb",
                          }}
                          className="shadow"
                        ></div>
                        <p style={{ marginTop: "5px", fontSize: "12px" }}>
                          Info
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "#f8f9fa",
                          }}
                          className="shadow"
                        ></div>
                        <p style={{ marginTop: "5px", fontSize: "12px" }}>
                          Light
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "#495057",
                          }}
                          className="shadow"
                        ></div>
                        <p style={{ marginTop: "5px", fontSize: "12px" }}>
                          Dark
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**End Alerts */}
        {/**Start Tables*/}
        <div className="w3-light-gray">
        <div className="w3-container w3-padding-48 "  id="tables">
          <h1 className="text-center w3-margin-bottom">Table Components</h1>
                <h3 className="text-center">
                  Tables are structured grids used to present data in rows and
                  columns. They're commonly used for displaying tabular data,
                  such as product listings, pricing tables, or data summaries.
                </h3>
        </div>
       
        <div
          className="w3-container w3-content w3-padding-16 text-black"
          id="tables"
        >
                  <TableBasic />
           <br />
           <br />
            </div>
            </div>
        {/**End Tables*/}

        {/**Start Buttons */}
        <div className="w3-black">
        <div className="w3-container w3-padding-48 " id="buttons">
          <h1 className="text-center w3-margin-bottom">Button Components</h1>
          <h3 className="text-center">
          Well-designed web buttons boost engagement, streamline navigation,
           and prompt user actions, creating a more intuitive and compelling 
           user experience.
          </h3>
          <p className="mb-2 text-center">
            <b> Button variations displayed include:</b> <br />
            size, color, outline, solid, shape, icon elements and shadowing to
            give the appearance the element is floating.{" "}
          </p>
        </div>
        </div>
<div className="w3-content">
          <div className="row d-flex justify-content-center align-items-center w3-margin-top">
            <div className="w3-col l6">
              <div className="w3-card w3-white w3-padding-32 border mb-1">
                <div className="w3-container w3-padding-large text-center">
                  <p className="text-center px-2">
                    <i className="fa fa-info-circle  w3-large text-black"> </i>{" "}
                    Buttons are scalable, capable of spanning the entire width
                    of a screen.
                  </p>
                  <Button
                    variant="outline-dark"
                    size="lg"
                    className="mb-2 mx-1 shadow"
                    style={{ width: "50%", borderRadius: '50px' }}
                  >
                    Large button
                  </Button>{" "}
                  <Button
                    variant="dark"
                    size="sm"
                    className="mb-2 mx-1 shadow"
                    style={{borderRadius: '50px'}}
                  >
                    Small button
                  </Button>
                </div>
              </div>
            
              <div className="w3-card w3-white w3-padding-32 border mb-1">
                <div className="container text-center px-3">
                  <p>
                    {" "}
                    <i className="fa fa-info-circle text-black w3-large text-info"></i>{" "}
                    Buttons can serve as notifiers such as: close "this", or
                    badges notifications to look at "that".
                  </p>
                  <CloseButton className="w3-margin-right w3-padding-large shadow border border-black border-2" />
                  <Button variant="black" style={{ padding: "12px" }}>
                    Profile <Badge bg="black">9</Badge>
                    <span className="visually-hidden">unread messages</span>
                  </Button>
                </div>
              </div>
          
              <div className="w3-card w3-white w3-padding-32 border mb-1">
                <div className="container text-center px-4">
                  <p>
                    <i className="fa fa-info-circle w3-large text-black"></i>{" "}
                    Buttons can be linked to functions such as: downloads, video
                    play and even social media profiles.
                  </p>
                  <Button
                    variant="black"
                    size="sm"
                    className="rounded-circle shadow w3-margin-right"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="fa fa-download w3-large text-white"></i>
                  </Button>

                  <Button
                    variant="white"
                    size="sm"
                    className="btn-outline-black w3-hover-opacity-off rounded-circle w3-margin-right"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="fa fa-play w3-large"></i>
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className=" rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#FF385C"
                    }}
                  >
                    <FontAwesomeIcon icon={faPinterest} className="w3-large" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="w3-col l6">
            <div className="w3-card w3-padding-32 border mb-1">
                <div className="container text-center">
                  </div>
                  </div>
        

              <div className="w3-card w3-padding-32 border mb-1">
                <div className="container text-center">
                  </div>
                  </div>
            

              <div className="w3-card w3-padding-32 border mb-1">
                <div className="container text-center">
                  </div>
                  </div>
              </div>


          </div>
          </div>
         
        {/**End Buttons */}

        {/**Start Samples */}
        
        <div className="w3-container w3-padding ">
        <div className="row d-flex  justify-content-center align-items-center w3-padding-48">
          <div className="flex-column col-sm-12 col-md-6 col-lg-6 justify-content-center align-items-center">
            <div className="w3-card w3-white text-center w3-padding-48 w3-margin-top w3-margin-bottom w3-padding-small">
              <h2 className="w3-text-black w3-margin-top" id="page-samples">
                <b className="fw-bold text-black">Page Samples</b>
               
              </h2>
              <hr className="w3-opacity" />

              <h4 className="text-black">
                Each type of website serves a unique purpose and requires
                specific features and functionalities to effectively achieve its
                objectives and meet the needs of its target audience.{" "}
              </h4>
              <br />
              <p>
                {" "}
                <i>
                  <b> NOTE:</b> "Sample pages are under construction. View with
                  the understanding it's a work in progress. Thanks for your
                  patience."
                </i>
              </p>
              <button
                className="w3-button w3-text-light-grey  w3-margin-right w3-round-xxlarge mt-2 w3-margin-bottom"
                style={{ backgroundColor: "#FF385C" }}
              >
                <Link
                  to="/page-samples#page-samples"
                  className="button text-white"
                  onClick={scrollToTop}
                >
                  Sample Sites
                </Link>
              </button>
            </div>
          </div>
          <div className="flex-column col-sm-12 col-md-6 col-lg-6 justify-content-center align-items-center">
            <div className="w3-card w3-white text-center w3-padding-48 w3-margin-top w3-margin-bottom w3-padding-small">
            <h2 className="w3-text-black w3-margin-top" id="page-samples">
                <b className="fw-bold text-black">Page Samples</b>
               
              </h2>
              <hr className="w3-opacity" />

              <h4 className="text-black">
                Each type of website serves a unique purpose and requires
                specific features and functionalities to effectively achieve its
                objectives and meet the needs of its target audience.{" "}
              </h4>
              <br />
              <p>
                {" "}
                <i>
                  <b> NOTE:</b> "Sample pages are under construction. View with
                  the understanding it's a work in progress. Thanks for your
                  patience."
                </i>
              </p>
              <button
                className="w3-button w3-text-light-grey  w3-margin-right w3-round-xxlarge mt-2 w3-margin-bottom"
                style={{ backgroundColor: "#FF385C" }}
              >
                <Link
                  to="/page-samples#page-samples"
                  className="button text-white"
                  onClick={scrollToTop}
                >
                  Sample Sites
                </Link>
              </button>
            </div>
          </div>
        </div>
        </div>
        {/**End Samples */}

        <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#portfolio" style={{ color: "#FF385C" }}>
                Back to top
              </a>
            </p>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}

export default Portfolio;
