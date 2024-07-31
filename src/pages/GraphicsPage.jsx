import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiArrowLongRight } from "react-icons/hi2";
import GraphicComponents from "../components/Portfolio/Graphics/GraphicsComponents";
import Newsletter3 from "../assets/images/Newsletters/DIAGRAMS/Newsletter3.png";
import EmailComponent from "../components/Portfolio/Graphics/EmailComponent";
import SocialComponent from "../components/Portfolio/Graphics/SocialComponent";
import InfographicsComponents from "../components/Portfolio/Graphics/InfographicComponents";

const Graphics = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });


  return (
   <div className="graphics w3-light-gray" id="graphics">
      <div className="w3-container w3-content w3-margin-bottom w3-padding-large w3-padding-48" id="email-graphics">

   <motion.div
    ref={ref}
    initial={{ y: -15, opacity: 0.25}}
    animate={inView ? { y: 0, opacity: 1 } : {}}
    exit={{ y: 15, opacity: 0.25 }}
    transition={{ duration: 0.8 }}    
    className="graphics  w3-light-gray"
    id="graphics"  
     
  >
    
        <div className="row d-flex justify-content-center align-items-center" >
              <div className="col-sm-12 col-md-5 col-lg-5 justify-content-center w3-padding-small">
    
           <h2 className="fw-bold">EMAIL MARKETING</h2>   
        <h4 className="w3-margin-top">Key elements that engage readers, convey important information, and promote brand identity.</h4>
        
      <p className="w3-margin-top w3-margin-bottom" style={{fontSize:'14px'}}>These elements include a captivating subject line, a clear and concise header, engaging content with well-structured sections, visually appealing images, and compelling calls to action.</p>
      
       <div>
        <Link to= '#email-samples' className="w3-margin-top">
       <p>view campaign samples < HiArrowLongRight/></p>
       </Link>
       </div>
        

     </div>
     <div className="col-sm-12 col-md-7 col-lg-7 w3-padding-small">
        <img src={Newsletter3} alt="newsletter3" className='w-100 shadow' />
        </div>
   
        </div>
       
        </motion.div>
        </div> 
     
  <div className="w3-container w3-container" id="email-samples" >
  <EmailComponent/>
  </div>
  <div className="w3-container w3-container" id="social-samples">
  <SocialComponent/>
  </div>
  <div className="w3-container w3-container" id="sport-samples">
  <GraphicComponents/>
  </div>

<div className="w3-container w3-container" id="info-samples bg-success-subtle ">
  <InfographicsComponents/>
  </div>
     
      <div className="w3-container w3-container w3-padding-large w3-padding-48 text-center ">
              <h3 className="text-black">Much more to come... Stay tuned! Feedback is welcome and encouraged. Feel free to contact me to share your thoughts.
        </h3><br />
              <button className="w3-button w3-text-light-grey w3-padding w3-round-xxlarge mt-2 w3-margin-bottom" 
              style={{backgroundColor:'#FF385C'}}>
              <Link to="/contact#contact"
                  className="button text-white"
                  onClick={scrollToTop}
                >
               CONTACT ME
                </Link>
              </button>
              </div> 
              <footer className="text-muted padding-32 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#forms" style={{color:'#FF385C'}}>Back to top</a>
            </p>
          </div>
        </footer>
    
        </div>
    );
    }
export default Graphics;