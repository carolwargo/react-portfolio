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
  className="graphics"
  id="graphics"
  
  >

        <div className="w3-padding-top-64 w3-padding-large">
      
             
      <div className="w3-container w3-padding-large py-2 my-4" >
      <div className='w3-padding-32 text-center text-black'>
      <h1 className="text-center m-2">GRAPHIC ELEMENTS</h1>
      <hr />
      <h3 className="text-center">Crafting visually captivating content not only enhances a brand's online presence but also serves as a powerful tool to draw users in and encourage engagement.</h3>
 <br />
 <p style={{fontSize:'14px'}}><i>    'The Graphic Elements page is currently under development and will be completed shortly. Thank you in advance for your patience.'</i></p>
      <br />
      
     
        </  div>



          {/*Start Business*/}
       <div className="row d-flex justify-content-center align-items-center">
   <Newsletters/>
   </div>
     {/*recruit YOGA COMPLETE start */}
     <div className='w3-padding-48 text-center text-black'>
        <div className="row">
          <div className="col"><h1>Logos | Branding</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum nisi quaerat quibusdam tempore corrupti quidem enim repellendus maiores provident necessitatibus exercitationem dolor asperiores voluptas molestias placeat dignissimos, et nihil.</p></div>
          <div className="col"><h1>Forms|Interactive </h1> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum nisi quaerat quibusdam tempore corrupti quidem enim repellendus maiores provident necessitatibus exercitationem dolor asperiores voluptas molestias placeat dignissimos, et nihil.</p></div>
          <div className="col"><h1>Presentations </h1> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum nisi quaerat quibusdam tempore corrupti quidem enim repellendus maiores provident necessitatibus exercitationem dolor asperiores voluptas molestias placeat dignissimos, et nihil.</p></div>   
        </div>
       </div>
        {/*End Business*/}
  
        <br  />
        <br  />
     <div className="row d-flex justify-content-center align-items-center">
     
          <div className="col d-flex justify-content-center align-bottom px-2">
            <div className="story-essentials-body justify-content-center align-bottom">
              <div className="story-essentials-title text-center text-black">
                <h1>Sports</h1>
                  <br />
             <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nam molestias, laudantium numquam eaque distinctio molestiae. Incidunt odit expedita ipsa alias nihil blanditiis suscipit, libero excepturi odio nesciunt, iste illum.</h4>
              <br />
              <br />
            </div>
          </div>
          </div>
        </div>
       <GraphicComponents/>
  

  
      </div>

    
    <br />
      <hr />
      <div className="w3-container w3-padding-large mt-5 text-center w3-padding-48 my-3">
              <h2 className="text-black">Much more to come... Stay tuned! Feedback is welcome and encouraged. Feel free to contact me to share your thoughts.
        </h2><br />
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