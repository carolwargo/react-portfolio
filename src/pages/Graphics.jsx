import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GraphicComponents from "../components/Portfolio/Graphics/GraphicsComponents";
import Newsletters from "../components/Portfolio/Graphics/Newsletters";
//import S4 from "../assets/images/Sports/S4.png";

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
  className="graphics w3-light-gray"
  id="graphics"
  
  >

        <div className="w3-padding-top-64">
      <div className="w3-container w3-content w3-padding-large" >
      <div className='w3-padding-32 text-center text-black'>
      <h1 className="text-center m-2">GRAPHIC ELEMENTS</h1>
      <hr />
      <h4 className="text-center">Crafting visually captivating content not only enhances a brand's online presence but also serves as a powerful tool to draw users in and encourage engagement.</h4>
 <br />
 <p style={{fontSize:'14px'}}><i>    'The Graphic Elements page is currently under development and will be completed shortly. Thank you in advance for your patience.'</i></p>
   
        </  div>



          {/*Start Business*/}
       <div className="row d-flex justify-content-center align-items-center">
   <Newsletters/>
   </div>
     {/*recruit YOGA COMPLETE start 
     <div className='w3-padding-48 text-center text-black'>
        <div className="row">
          <div className="col"><h1>Logos | Branding</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum nisi quaerat quibusdam tempore corrupti quidem enim repellendus maiores provident necessitatibus exercitationem dolor asperiores voluptas molestias placeat dignissimos, et nihil.</p></div>
          <div className="col"><h1>Forms|Interactive </h1> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum nisi quaerat quibusdam tempore corrupti quidem enim repellendus maiores provident necessitatibus exercitationem dolor asperiores voluptas molestias placeat dignissimos, et nihil.</p></div>
          <div className="col"><h1>Presentations </h1> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum nisi quaerat quibusdam tempore corrupti quidem enim repellendus maiores provident necessitatibus exercitationem dolor asperiores voluptas molestias placeat dignissimos, et nihil.</p></div>   
        </div>
       </div>
       */}
        {/*End Business*/}
  
       <GraphicComponents/>
  

  
      </div>

    
    <br />
      <hr />
      <div className="w3-container w3-padding-large mt-5 text-center w3-padding-48 my-3">
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