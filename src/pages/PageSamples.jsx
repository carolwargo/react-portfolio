import React from "react";
import BlogShot from "../assets/images/FullPage/BlogShot.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../components/Portfolio/Forms/Login";
import Signup from "../components/Portfolio/Forms/Signup";
import ScrollSpy from "../components/Portfolio/SpyScroll/SpyScrollComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function PageSamples() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="page-samples w3-light-gray" id="page-samples">
      <div className="w3-content w3-container w3-padding-64 w3-margin-top w3-padding-large justify-content-between ">
      
        <h1
        className="w3-padding-32 text-center w3-margin-top"
          style={{
            fontSize: "3rem",
          }}
        >
          <b>CW</b><span className="fw-lighter">SAMPLES</span>.
        </h1>
        </div>
      
        <div className="container-fluid bg-warning-subtle">
        <div className="blog-page w3-container w3-padding-64" id="blog-page">
        <h4 className="w3-text-black" >
          BLOG.
        </h4>
        <hr className="w3-opacity" />
        <p>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate porro consequuntur velit ducimus quae enim deserunt a officia hic dolorem, sed vitae provident minima nihil possimus exercitationem dolores doloribus.
        </p>
    
          <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8 w3-padding-32">
            <div className="" >
            <div className="shadow"style={{ height: "400px", overflowY: "auto" }}>
            <div to="/blog#blog" onClick={scrollToTop}>
              <img src={BlogShot} alt="blog-sample" className='shadow' style={{ width: "700px" }} />
            </div>
            </div>
          </div>
            <div className="col-md-4 w3-padding-32">
                <div>      
                  <div className="row ">  
                  <h6 className="w3-margin-left">BLOG FEATURES:</h6> 
      <div className="col">   
      <ul style={{fontSize:'12px'}} className="fw-lighter">
        <li>Navigation</li>
        <li>Header Element </li>     
        <li>CTA Button</li>
        <li>Blogger Bio</li>
      </ul>
      </div>
     
      <div className="col">
      <ul style={{fontSize:'12px'}} className="fw-lighter">
   
        <li>Popular Posts</li>
        <li>Read More option</li>
        <li>Share Button Option</li>
      </ul>
  </div>
      <div className="w3-padding-large"> 
      <h6 >POSSIBILITIES:</h6> 
  <p style={{fontSize:'12px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia sint doloremque ab in exercitationem veniam. Quo nam ad libero autem error. Quisquam provident qui quo facere ipsam inventore nobis.</p>
      <p style={{fontSize:'12px'}} className="fw-lighter">Click the view sample button below to view the full sample site.</p>
    <Link to='/blog'>
    <Button className="btn btn-warning">VIEW SAMPLE</Button>
    </Link>   
    </div> 
    </div>
    </div>
               
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="container-fluid w3-blue">
      <div className="spyscroll w3-container w3-padding-64" id="spyscroll">
        <h4 className="w3-text-white w3-margin-top" id="#spy-scroll">
          SPYSCROLL.
        </h4>
        <hr className="w3-opacity text-white" />
        <p className="text-white">
          SpyScroll is a popular technique used in web development to
          enhance user navigation and improve the user experience. It
          involves synchronizing the navigation menu with the scroll
          position on the page. As the user scrolls through different
          sections of a webpage, the corresponding navigation menu items
          are highlighted or activated, indicating the user's current
          position on the page.
        </p>
        <div className="w3-padding-24">
              <ScrollSpy/>
              </div>
      </div>
      </div>

      <div className="container-fluid w3-light-gray" id="login-page">
      <div className="w3-container w3-padding-64">
      <h4  id="forms">
                <b className="fw-bolder w3-text-black">FORM</b><span className="fw-lighter text-muted">COMPONENTS.</span>
              </h4>
        <hr className="w3-opacity" />
              <p className="w3-text-black">
                Forms are for collecting and submitting user data on a website.
                They consist of input fields such as text boxes, dropdown menus,
                checkboxes, and buttons, allowing users to interact with the
                website and provide information.
              </p>
              <div className="w3-padding-24">
              <Login/>
              </div>
              <div className="w3-padding-24">
              <Signup/>
              </div>
      </div>
        </div>


        <div className="container-fluid bg-white" id="album-page">
        <div className="w3-container w3-padding-64">
        <h4 className="w3-text-black w3-margin-top" >
          ALBUM.
        </h4>
        <hr className="w3-opacity" />
        <p>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur corporis dignissimos fugit recusandae beatae iusto rem ut aperiam! Eum impedit aliquid vero perferendis nobis voluptatum esse quos ratione sed officiis?
        </p>
      </div>
        </div>


        <div className="container-fluid bg-white" id="">
        </div>


    </div>
  );
}

export default PageSamples;
