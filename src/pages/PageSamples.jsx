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
      <div className="w3-padding-top-32 pt-5 ">
        <header className='w3-padding-top-24'>
     
          <div
            className="w3-content w3-container w3-padding-16 w3-margin-top justify-content-center"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
          
            <h2 className="text-center text-black"><b>Sample Website Layouts</b></h2>
            <hr className="w3-opacity" />
          <h5>Discover some of the many possibilities when crafting online 
            experiences. From sleek and functional designs to blog sites,  
            portfolio showcases, or e-commerce platforms, the options are 
            limitless.</h5>
            <span className='text-black' style={{fontSize:'16px'}}>
              <b><em>'Each sample site below started as a full, 
                multi-page website, now showcased here as one-page 
                snippets.'</em></b></span>


</div>
        </header>
    


{/**Start Real Estate */}
      <div className="container-fluid  text-black">
        <div className="realestate-page w3-padding-48" id="realestate-page">
          <div className=" text-black justify-content-center">
            <div className="justify-content-center">
              <div className="row d-flex w3-padding-large justify-content-center align-items-center">
               
                <div className="col-md-5  w3-padding-16">
                  <div className=" justify-content-center w3-margin-top">
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
<hr className="w3-opacity" />
      <div className="container-fluid  text-black">
        <div className="blog-page  w3-padding-48" id="blog-page">
          <div className=" justify-content-center">
            <div className="justify-content-center">
              <div className="row d-flex w3-padding-large justify-content-center align-items-center">
              
                <div className="col-md-5 w3-padding-16">
                  <div className="row px-2 justify-content-center">
                    <div className="justify-content-center w3-margin-top">
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


      <hr className="w3-opacity" />
      
{/**Start Album */}
<div className="container-fluid  text-black">
        <div className="album-page  w3-padding-48" id="album-page">
          <div className=" justify-content-center">
           
            <div className="justify-content-center">
              <div className="row d-flex w3-padding-large justify-content-center align-items-center">
            
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

              {/**Start Samples */}
        <div className="w3-container w3-padding-48 w3-margin-top">
        <div className="row d-flex justify-content-center align-items-center">
      
          <div className="flex-column col-sm-12 col-md-12 col-lg-12 justify-content-center align-items-center">
            <div className="container w3-white text-center w3-padding-large w3-padding-small">
            <h2 className="w3-text-black w3-margin-top" id="server">
                <b className="fw-bold text-black">Utility Apps</b>
               
              </h2>
              <hr className="w3-opacity" />

              <h4 className="text-black">
                
              Unlike applications that emphasize visual appeal, utility applications prioritize seamless functionality, catering to users' practical requirements. By offering practical solutions and streamlined workflows, these applications empower users to accomplish tasks swiftly and efficiently, placing functionality at the forefront of their design."</h4>
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
        </div>
        {/**End Samples */}
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
    </div>
    </motion.div>
  );
}

export default PageSamples;
