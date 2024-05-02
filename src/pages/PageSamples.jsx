import React from "react";
import { motion } from "framer-motion";
import BlogShot from "../assets/images/FullPage/BlogShot.png";
import RealEstate from "../assets/images/FullPage/RealEstate.png";
import { Link } from "react-router-dom";
//import Login from "../components/Portfolio/Forms/Login";
//import Signup from "../components/Portfolio/Forms/Signup";
import Album from "../assets/images/FullPage/Album.png";
//import ScrollSpy from "../components/Portfolio/SpyScroll/SpyScrollComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function PageSamples() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}
    className="home"
    
    >
    <div className="page-samples" id="page-samples">
      <div className="w3-padding-top-48 w3-padding-large mt-5 ">
          <div
            className="w3-content w3-container w3-padding-16 w3-margin-top justify-content-center"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
          
            <h1 className="text-center text-black"><b>Sample Website Layouts</b></h1>
            <hr className="w3-opacity" />
          <h3 className="text-center text-black">Discover some of the many possibilities when crafting online 
            experiences. From sleek and functional designs to blog sites,  
            portfolio showcases, or e-commerce platforms, the options are 
            limitless.</h3>
            <p className='text-black text-center' style={{fontSize:'16px'}}>
              <em>'Each sample site below started as a full, 
                multi-page website, now showcased here as one-page 
                snippets.'</em></p>
</div>
<br />
<br />

{/**Start Real Estate */}
      <div className="w3-container w3-content text-black">
        <div className="realestate-page w3-padding-24" id="realestate-page">
          <div className=" text-black justify-content-center">
            <div className="justify-content-center">
              <div className="row d-flex  justify-content-center align-items-center">
                <div className="col-md-5  w3-padding-16">
                  <div className=" justify-content-center">
                    <h4 className="text-black"> REAL ESTATE SAMPLE.</h4>
                    <p style={{ fontSize: "14px" }}>
                      A real estate website serves as a valuable tool for both
                      real estate professionals and consumers by offering a
                      centralized platform for property listings, market
                      information, and client engagement. It enhances
                      visibility, facilitates lead generation, and provides a
                      seamless user experience, making it an essential component
                      of modern real estate marketing and operations.
                    </p>
                    <hr className="w3-opacity" />
                  </div>
                  <div className="row px-2 justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <h6 style={{fontSize:'14px'}}>Customer Benefits:</h6>
                      <ul style={{ fontSize: "12px" }} className="fw-lighter">
                      <li>Detailed Property Information</li>
                        <li>Convenience</li>
                        <li>Educational Resources</li>
                        <li>Interactive Features</li>
                      </ul>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <h6 style={{fontSize:'14px'}}>Professional Benefits:</h6>
                      <ul style={{ fontSize: "12px" }} className="fw-lighter">
                      <li>Lead Generation</li>
                        <li>Controlled Platform</li>
                        <li>Increased Visibility</li>
                     <li>Transaction Management</li>
                      </ul>
                    </div>
                    <div className="w3-margin-top ">
                      <a href="https://carolwargo.github.io/realestate/">
                      <button className="w3-button w3-text-light-grey w3-padding w3-round-xxlarge mt-2 w3-margin-bottom" 
              style={{backgroundColor:'#FF385C'}}>
               VIEW SAMPLE
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 d-flex justify-content-center  w3-padding-16">
                  <div
                    className="shadow rounded bg-white"
                    style={{ height: "400px", overflowY: "auto" }}
                  >
                    <div to="/blog#blog" onClick={scrollToTop}>
                      <img
                        src={RealEstate}
                        alt="realestate"
                        className="shadow mx-auto p-2"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/**End Real Estate */}
    


{/** Start Blog*/}
      <div className="w3-container w3-content text-black mt-5">
        <div className="blog-page  w3-padding-16" id="blog-page">
            <div className="justify-content-center">
              <div className="row d-flex justify-content-center align-items-center">          
                <div className="col-md-5 w3-padding-16">
                  <div className="row px-2 justify-content-center">
                    <div className="justify-content-center ">
                      <h4>BLOG PAGE SAMPLE.</h4>
                      <p style={{fontSize:'14px'}}>
                       Blog-style websites offer an interactive
                        and engaging platform for individual bloggers and businesses to
                        connect with their audience. Whether you're looking to
                        establish a personal brand, promote a business, or share
                        valuable insights, a blog-style website can be a highly
                        effective and versatile tool for achieving your goals.
                      </p>
                      <hr className="w3-opacity" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <h6 style={{fontSize:'14px'}}> Blogger Benefits:</h6>

                      <ul style={{ fontSize: "12px" }} className="fw-lighter">
                        <li>Ease of Use</li>
                        <li>Community Building</li>

                        <li>Cost-Effective</li>
                        <li>Personal Branding</li>
                      </ul>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <h6 style={{fontSize:'14px'}}>Business Benefits:</h6>

                      <ul style={{ fontSize: "12px" }} className="fw-lighter">
                        <li>Content Marketing</li>
                        <li>Authority and Credibility</li>
                        <li>SEO Benefits</li>
                        <li>Flexibility</li>
                      </ul>
                    </div>

                    <Link to="/blog" className="w3-margin-top">
                    <button className="w3-button w3-text-light-grey w3-padding w3-round-xxlarge mt-2 w3-margin-bottom" 
              style={{backgroundColor:'#FF385C'}}>
                        VIEW SAMPLE</button>
                    </Link>
                  </div>
                </div>

                <div className="col-md-7 d-flex justify-content-center  w3-padding-16">
                  <div
                    className="shadow rounded bg-white"
                    style={{ height: "400px", overflowY: "auto" }}
                  >
                    <div to="/blog#blog" onClick={scrollToTop}>
                      <img
                        src={BlogShot}
                        alt="blog-sample"
                        className="shadow mx-auto p-1"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
     
        </div>
      </div>
      {/** End Blog*/}
      
{/**Start Album */}
<div className="w3-container w3-content  text-black mt-5">
        <div className="album-page  w3-padding-16" id="album-page">
            <div className="justify-content-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5  w3-padding-16">
                    <div className="row px-2 justify-content-center">
                    <div className="justify-content-center w3-margin-top">
              <h3>ALBUM PAGE SAMPLE.</h3>
            
              <p style={{fontSize:'14px'}}>
                A photo album website offers a platform for
                individuals, photographers, and businesses to organize,
                showcase, and share photos effectively. It enhances personal
                connections, facilitates professional growth, and drives
                engagement and sales opportunities, making it a valuable asset
                for anyone looking to manage and monetize their visual content
                online.
              </p>
              <hr className="w3-opacity" />
            </div>

                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <h6 style={{fontSize:'14px'}}>Consumer Benefits:</h6>
                        <ul style={{ fontSize: "12px" }} className="fw-lighter">
                          <li>Easy Sharing</li>
                          <li>Privacy Controls</li>
                          <li>Personalized Photo Storage</li>
                        </ul>
                      </div>
                   

         
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <h6 style={{fontSize:'14px'}}>Bussiness Benefits:</h6>

                        <ul style={{ fontSize: "12px" }} className="fw-lighter">
                        
                          <li>Portfolio Showcase</li>
                          <li>E-commerce Integration</li>
                        </ul>
                      </div>
                      
                      <Link to="/blog" className="w3-margin-top">
                      <button className="w3-button w3-text-light-grey w3-padding w3-round-xxlarge mt-2 w3-margin-bottom" 
              style={{backgroundColor:'#FF385C'}}>VIEW SAMPLE</button>
                      </Link>
                   
                      </div>
                </div>
                <div className="col-md-7 d-flex justify-content-center  w3-padding-16">
                  <div
                    className="shadow rounded bg-white"
                    style={{ height: "400px", overflowY: "auto" }}
                  >
                    <div to="/album" onClick={scrollToTop}>
                      <img
                        src={Album}
                        alt="album-sample"
                        className="shadow mx-auto p-2"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

              {/**Start Utility app button */}
        <div className="w3-container w3-padding-16 mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="flex-column col-sm-12 col-md-12 col-lg-12 w3-white text-center justify-content-center align-items-center">
            <h2 className="w3-text-black" id="server">
                <b className="fw-bold text-black">Utility Apps</b>
               
              </h2>
              <hr className="w3-opacity" />

              <h4 className="text-black">
                
              Unlike applications that emphasize visual appeal, utility applications prioritize seamless functionality, catering to users' practical requirements."</h4>
              <br />
              <p>
              
                <i>
                  <b> NOTE:</b> "I am in the process of adding more utility functions. Please be forgiving of the layout, as it is temporary. Thanks in advance for your patience!"
                </i>
              </p>
              <button
                className="w3-button w3-text-light-grey  w3-margin-right w3-round-xxlarge mt-2 w3-margin-bottom"
                style={{ backgroundColor: "#FF385C" }}
              >
                <Link
                  to="/server#server"
                  className="button text-white"
                  onClick={scrollToTop}
                >
                 View Utility Apps
                </Link>
              </button>
        
          </div>
        </div>
        </div>
        {/**End Utility app button */}
       
          <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
          <div className="container">
                <p className="float-end mb-1">
                  <a href="#page-samples" style={{color:'#FF385C'}}>Back to top</a>
                </p>
              </div>
            </footer>
        </div>
      </div>
{/**End Album */}

  </div>
    </div>
    </motion.div>
  );
}

export default PageSamples;
