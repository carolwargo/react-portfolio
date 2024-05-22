import React from 'react';
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";
import MusicCard from '../components/Cards/MusicCard.jsx';


const Cards = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
 
      return (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="portfolio"
          id="portfolio"
        >
 <div className="container mb-4 w3-padding-top-64">

 </div>
         
          
               {/**Start INTRO Web Components */}
            <div className="container mb-4 w3-padding-top-64" id="cards">
                
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
          <MusicCard/>
                </div>
    
              
              </div>
            </div>





 
            <div className="w3-container w3-content text-center w3-padding-48 w3-margin-bottom w3-padding-large">
              <h2 className="text-black">View my digital resume to learn more about my professional experience and qualifications.        
        </h2><br />
              <button className="w3-button w3-text-light-grey w3-padding w3-round-xxlarge mt-2 w3-margin-bottom" 
              style={{backgroundColor:'#FF385C'}}>
              <Link to="/resume#resume"
                  className="button text-white"
                  onClick={scrollToTop}
                >
                VIEW MY RESUME
                </Link>
              </button>
              </div> 
             
          <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#about" style={{color:'#FF385C'}}>Back to top</a>
            </p>
          </div>
        </footer>

 
    </motion.div>

    );
    }

export default Cards;