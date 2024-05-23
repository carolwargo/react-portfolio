import React from "react";
import YogaSet from "../assets/images/YogaStory/YogaSet.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Graphics = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

    return (
      
  <motion.div
  initial={{ y: -20, opacity: 0}}
  animate={{y: 0, opacity: 1}}
  exit={{y: 20, opacity: 0}}
  className="graphics"
  id="graphics"
  
  >

        <div className="w3-padding-top-64">
      
             
      <div className="container py-2 mt-3" style={{fontFamily:'sans-serif'}}>
      <div className='w3-padding-32 text-center text-black'>
      <h1 className="text-center">Graphic Elements</h1>
      <h4 className="text-center"><i>The Graphic Elements page is currently under development and will be completed shortly. Thank you in advance for your patience.</i></h4>
  <hr />
        </  div>
      
        <br  />
     <div className="row d-flex justify-content-center align-items-center">
          <div className="col d-flex justify-content-center align-bottom px-4"
          id="what-we-do">
            <div className="story-essentials-body justify-content-center align-bottom">
              <div className="story-essentials-title">
                <h1 className="mt-0"
                 style={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
    
                fontSize:'3.5rem',
                }}
                >TELL YOUR STORY...</h1>
              </div>
              <br />
              <div>
              <p className="story-essentials-text">
                In the enchanting realm of digital storytelling, businesses are
                weaving captivating tales using the magical wand of social media
                to capture an audience.
              </p>
              <p>
                Crafting a compelling narrative on social platforms not only
                establishes a brand's online presence but also serves as a
                dynamic avenue to entice users to explore further.{" "}
              </p>
              </div>
            </div>
          </div>

          {/*recruit YOGA COMPLETE start */}
          <div className="col-sm-12 col-md-8 col-lg-8 d-flex flex-column justify-content-center align-items-center px-4">
            <img
              src={YogaSet}
              alt="YogaSet"
              className="mb-2 border border-black"
              style={{
                width: "95%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px" }}>
              {" "}
              <i>"SAMPLE: digital marketing campaign"</i>
            </p>
          </div>
        </div>
      </div>
    
 
      <div className="w3-container w3-content text-center w3-padding-48 w3-margin-bottom w3-padding-large">
              <h2 className="text-black">Much more to come... Stay tuned! Feedback is welcome and encouraged. Feel free to contact me to share your thoughts.
        </h2><br />
              <button className="w3-button w3-text-light-grey w3-padding w3-round-xxlarge mt-2 w3-margin-bottom" 
              style={{backgroundColor:'#FF385C'}}>
              <Link to="/resume#resume"
                  className="button text-white"
                  onClick={scrollToTop}
                >
               CONTACT ME
                </Link>
              </button>
              </div> 
              <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#forms" style={{color:'#FF385C'}}>Back to top</a>
            </p>
          </div>
        </footer>
    <br />
<br />

        </div>
        </motion.div>
    );
    }
export default Graphics;