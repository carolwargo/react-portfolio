import React from "react";
import { motion } from "framer-motion";
import BlogShot from "../assets/images/FullPage/BlogShot.png";
import RealEstate from "../assets/images/FullPage/RealEstate.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import Login from "../components/Portfolio/Forms/Login";
//import Signup from "../components/Portfolio/Forms/Signup";
import Album from "../assets/images/FullPage/Album.png";
import SampleHeader from "../assets/images/Portfolio/SampleHeader.png";
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
      <div className="w3-padding-top-32 pt-5 ">
        <header
          className=""
          style={{
            backgroundImage: `url(${SampleHeader})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "400px", // Default minimum height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            className="mask"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              pointerEvents: "none",
            }}
          ></div>
          <div
            className="w3-content w3-container w3-padding-16 w3-margin-top justify-content-center"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <div className="w3-container w3-content w3-padding-small">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-12 col-md-2 col-lg-2 flex-column"></div>
              <div className="col-sm-12 col-md-8 col-lg-8 flex-column">
              <h1
              className="w3-margin-top"
              style={{
                fontSize: "4rem",
                fontWeight: "900",
                color: "#ffffff",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
              }}
          >SAMPLES
            </h1>
           
            <h5><b>The following sample sites are meant to showcase the possibilities.</b></h5>
            
            <p style={{fontSize:'14px'}}><b><em>'Each sample site below started as a full, multi-page website, now showcased here as one-page snippets.'</em></b></p>

              </div>
              <div className="col-sm-12 col-md-2 col-lg-2 flex-column"></div>
            </div>
 </div>
</div>
        </header>
      </div>


{/**Start Real Estate */}
      <div className="container-fluid " style={{ backgroundColor: "#E7E7E7" }}>
        <div className="realestate-page w3-padding-32" id="realestate-page">
          <div className=" text-black justify-content-center">
            <div className="justify-content-center">
              <div className="row d-flex w3-padding-large justify-content-center align-items-center">
               
                <div className="col-md-5  w3-padding-16">
                  <div className=" justify-content-center w3-margin-top">
                    <h4 className="text-warning"> <i className="fas fa-home"></i> REAL ESTATE SAMPLE.</h4>
                 
                    <hr className="w3-opacity" />
                    <p style={{ fontSize: "14px" }}>
                      A real estate website serves as a valuable tool for both
                      real estate professionals and consumers by offering a
                      centralized platform for property listings, market
                      information, and client engagement. It enhances
                      visibility, facilitates lead generation, and provides a
                      seamless user experience, making it an essential component
                      of modern real estate marketing and operations.
                    </p>
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
                        <Button
                          className="btn btn-warning"
                          style={{ width: "100%", borderRadius: "0"}}
                        >
                         <b style={{fontSize:'.8rem'}}>VIEW SAMPLE</b>
                        </Button>
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
    


      {/*<div className="container-fluid w3-black">
        <div className="sidenav-page  w3-padding-32" id="sidenav-page">
          <div className="w3-black justify-content-center">
            <div className="  justify-content-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-7 d-flex justify-content-center  w3-padding-24">
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
                <div className="col-md-5  w3-padding-16">
                  <div className="row px-4 justify-content-center">
                    <div className=" w3-padding justify-content-center w3-margin-top">
                      <h4>BLOG PAGE SAMPLE.</h4>
                      <hr className="w3-opacity" />
                      <p style={{fontSize:'14px'}}>
                       Blog-style websites offer an interactive
                        and engaging platform for individual bloggers and businesses to
                        connect with their audience. Whether you're looking to
                        establish a personal brand, promote a business, or share
                        valuable insights, a blog-style website can be a highly
                        effective and versatile tool for achieving your goals.
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <h6> Blogger Benefits:</h6>

                      <ul style={{ fontSize: "12px" }} className="fw-lighter">
                        <li>Ease of Use</li>
                        <li>Community Building</li>

                        <li>Cost-Effective</li>
                        <li>Personal Branding</li>
                      </ul>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <h6>Business Benefits:</h6>

                      <ul style={{ fontSize: "12px" }} className="fw-lighter">
                        <li>Content Marketing</li>
                        <li>Authority and Credibility</li>
                        <li>SEO Benefits</li>
                        <li>Flexibility</li>
                      </ul>
                    </div>

                    <Link to="/blog">
                      <Button className="btn btn-light" style={{width:'100%'}}>VIEW SAMPLE</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
*/}

{/** Start Blog*/}
      <div className="container-fluid w3-black">
        <div className="blog-page  w3-padding-32" id="blog-page">
          <div className="w3-black justify-content-center">
            <div className="justify-content-center">
              <div className="row d-flex w3-padding-large justify-content-center align-items-center">
              
                <div className="col-md-5 w3-padding-16">
                  <div className="row px-2 justify-content-center">
                    <div className="justify-content-center w3-margin-top">
                      <h4><i className="fas fa-user-edit"></i> BLOG PAGE SAMPLE.</h4>
                      <hr className="w3-opacity" />
                      <p style={{fontSize:'14px'}}>
                       Blog-style websites offer an interactive
                        and engaging platform for individual bloggers and businesses to
                        connect with their audience. Whether you're looking to
                        establish a personal brand, promote a business, or share
                        valuable insights, a blog-style website can be a highly
                        effective and versatile tool for achieving your goals.
                      </p>
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
                      <Button className="btn btn-light" style={{width:'100%', borderRadius:'0'}}><b style={{fontSize:'.9rem'}}>VIEW SAMPLE</b></Button>
                    </Link>
                  </div>
                </div>

                <div className="col-md-7 d-flex justify-content-center  w3-padding-24">
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
      </div>
      {/** End Blog*/}



      
{/**Start Album */}
<div className="container-fluid bg-info-subtle">
        <div className="album-page  w3-padding-32" id="album-page">
          <div className=" justify-content-center">
           
            <div className="justify-content-center">
              <div className="row d-flex w3-padding-large justify-content-center align-items-center">
            
                <div className="col-md-5  w3-padding-16">
                 
                    <div className="row px-2 justify-content-center">
                    <div className="justify-content-center w3-margin-top">
              <h3><i className="fas fa-images"></i> ALBUM PAGE SAMPLE.</h3>
              <hr className="w3-opacity" />
              <p style={{fontSize:'14px'}}>
                A photo album website offers a platform for
                individuals, photographers, and businesses to organize,
                showcase, and share photos effectively. It enhances personal
                connections, facilitates professional growth, and drives
                engagement and sales opportunities, making it a valuable asset
                for anyone looking to manage and monetize their visual content
                online.
              </p>
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
                        <Button className="btn btn-info" style={{width:'100%', borderRadius:'0'}}><b style={{fontSize:'.8rem'}}>VIEW SAMPLE</b></Button>
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
          </div>
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


      {/*}
            <div className="container-fluid">
                <div className="spyscroll w3-container w3-padding-32" id="spyscroll">
                    <h3 className="w3-margin-top" id="#spy-scroll">SPYSCROLL.</h3>
                    <hr className="w3-opacity" />
                    <p>
                        SpyScroll is a popular technique used in web development to
                        enhance user navigation and improve the user experience. It
                        involves synchronizing the navigation menu with the scroll
                        position on the page. As the user scrolls through different
                        sections of a webpage, the corresponding navigation menu items
                        are highlighted or activated, indicating the user's current
                        position on the page.
                    </p>
                    <div >
                        <ScrollSpy />
                    </div>
                </div>
            </div>
*/}
      {/*
            <div className="container-fluid w3-light-gray w3-padding-32" id="login-page">
            <div className="px-2 justify-content-center">
                    <h4 id="forms"><b className="fw-bolder w3-text-black">FORM</b><span className="fw-lighter text-muted">COMPONENTS.</span></h4>
                    <hr className="w3-opacity" />
                    <p className="w3-text-black">
                        Forms are for collecting and submitting user data on a website.
                        They consist of input fields such as text boxes, dropdown menus,
                        checkboxes, and buttons, allowing users to interact with the
                        website and provide information.
                    </p>
                    <div className="w3-padding-24">
                        <Login />
                    </div>
                    <div className="w3-padding-24">
                        <Signup />
                    </div>
                </div>
            </div>

            /*}   
{/*}
     

            <div className="container-fluid w3-light-gray">
                <div className="blog-page w3-padding-32" id="scroll-spy-page">
               
                    <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-8 d-flex justify-content-center  w3-padding-32">
    <div className="shadow rounded bg-white" style={{ height: "400px", overflowY: "auto" }}>
        <div to="/scroll-spy" onClick={scrollToTop}>
            <img src={BlogShot} alt="scroll-spy-sample" className='shadow mx-auto' style={{width: "100%" }} />
        </div>
    </div>
</div>
<div className="col-md-4  w3-padding-32">
                            <div>
                                <div className="row px-4 justify-content-center">
                                <h3 className="w3-text-black">SCROLLSPY SAMPLE.</h3>
                    <hr className="w3-opacity" />
                                    <h6 >FEATURES:</h6>
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <ul style={{ fontSize: '12px' }} className="fw-lighter">
                                            <li>Navigation</li>
                                            <li>Header Element</li>
                                            <li>CTA Button</li>
                                            <li>Blogger Bio</li>
                                        </ul>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <ul style={{ fontSize: '12px' }} className="fw-lighter">
                                            <li>Popular Posts</li>
                                            <li>Read More option</li>
                                            <li>Share Button Option</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w3-padding-large">
                                    <h6 >POSSIBILITIES:</h6>
                                    <p style={{ fontSize: '12px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia sint doloremque ab in exercitationem veniam. Quo nam ad libero autem error. Quisquam provident qui quo facere ipsam inventore nobis.</p>
                                    <p style={{ fontSize: '12px' }} className="fw-lighter">Click the view sample button below to view the full sample site.</p>
                                    <Link to='/blog'>
                                        <Button className="btn btn-warning">VIEW SAMPLE</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
*/}
    </div>
    </motion.div>
  );
}

export default PageSamples;
