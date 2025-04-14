import React, { useState }from 'react';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import WebComponentsTrans from '../assets/images/WebComponentsTrans.png';
import SideNavBar from '../components/Navs/SideNavbar.jsx';


const Server = () => {

    const { ref, inView } = useInView({
        triggerOnce: false, // Animation triggers only once
        threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
        });
        
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
          question: "Alert Components",
          answer: 
            "Web alerts are visual components used to convey important messages, notifications, or warnings to users. ",
          link: "/",
        },
    
     
     /*   {
          question: "Why are graphics elements valuable?",
          answer:
            "Graphics elements are valuable in web design and development for enhancing visual appeal, conveying information effectively, and improving user engagement. They include images, icons, illustrations, charts, graphs, and other visual elements that help in illustrating concepts, guiding users, and making the user interface more engaging and intuitive.",
          link: "/portfolio#graphics",
        },
        */
        {
          question: "Buttons Components",
          answer:
            "Button provide visual cues to indicate clickable areas and help users navigate through a website or complete tasks",
          link: "",
        },
        {
          question: "Table Components",
          answer:
            "Web tables are used for presenting data such as financial reports, product listings, and comparison charts on websites.",
          link: "/",
        },
      
      ];
    
      return (
        <motion.div
        ref={ref}
        initial={{ y: -20, opacity: 0.5 }}
        animate={inView ? { y: 0, opacity: 1} : {}}
        exit={{ y: 20, opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      >
          <SideNavBar/>
 
         
          
               {/**Start INTRO Web Components */}
            <div className="container mb-4 w3-padding-top-64">
                
            <div className="row d-flex justify-content-center align-items-center w3-padding-large">
              <div className="my-1 col-sm-12 col-md-12 col-lg-12 flex-column">
              <h1 className='text-center'>Utility Apps</h1>
              <hr className="w3-opacity" />
                  <h3 className='text-center'>
                  Utility apps prioritize functionality over aesthetics. They are built to serve practical purposes, such as file management, system optimization, productivity enhancement, or data analysis. Utility apps are essential tools for users seeking solutions to everyday problems or seeking to streamline their workflows.           </h3>
                  <p className='mt-4 text-center'>
                {" "}
                <i>
                  <b> NOTE:</b> "Utility Apps page is under construction. View with
                  the understanding it's a work in progress. Thanks for your
                  patience."
                </i>
              </p>
               </div>
                </div>
              <div className="row d-flex justify-content-center align-items-center w3-padding-large">
              <div className="my-1 col-sm-12 col-md-6 col-lg-6 flex-column">
            <img src={WebComponentsTrans} alt="web-components" style={{width:'100%'}} ></img>
                </div>
                <div className="my-1 col-sm-12 col-md-6 col-lg-6 flex-column w3-padding-large">
           
                  
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
                          className="py-1 question w3-xlarge"
                          onClick={() => handleAccordionToggle(index)}
                          style={{ fontSize: "2rem" }}
                        >
                          {faq.question}
                        </Accordion.Header>
                        <Accordion.Body className="answer">
                          {faq.answer}
                          <div>
                            <Link to={faq.link}>
                              <button className="mt-2 link w3-button bg-black w3-round-xxlarge">
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
            </div>

 
        <div className="w3-container w3-content w3-padding-48">
        <div className="row d-flex justify-content-center align-items-center">
        <div className="w3-container w3-padding-32">
        <h4 className="text-center w3-text-black">
                <b className="text-black fw-bold">Server-side Apps</b>     
              </h4>
              <hr className="w3-opacity" />

              <p className="text-center text-black">
                      Server-side functions handle request processing, data
                      management, security, and business logic in web apps. They
                      are vital for building scalable and secure applications. </p>
              </div>
              <br />
           
           </div>
              {/**Start Graphics LinkSamples */}
        <div className="w3-container w3-padding-48 w3-margin-top">
   
        </div>
        {/**End Graphics Link*/}
           <footer className="bottom-0 py-5 text-muted position-fixed start-0 w-100">
          <div className="container">
            <p className="mb-1 float-end">
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

export default Server;