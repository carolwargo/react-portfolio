import React from "react";
import BlogShot from "../assets/images/FullPage/BlogShot.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      <div className="w3-container w3-margin-top w3-padding-64 w3-padding-large justify-content-between ">
        <h1
        className="w3-padding-32 text-center"
          style={{
            fontSize: "4rem",
          }}
        >
          <b>CW</b><span className="fw-lighter">SAMPLES</span>.
        </h1>
        </div>
      
        <div className="container-fluid bg-white p-4">
        <div className="blog-page" id="blog-page">
        <h4 className="w3-text-black w3-margin-top" >
          BLOG.
        </h4>
        <hr className="w3-opacity" />
        <p>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate porro consequuntur velit ducimus quae enim deserunt a officia hic dolorem, sed vitae provident minima nihil possimus exercitationem dolores doloribus.
        </p>
      </div>
          <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className=" w3-padding-24" >
        
            <div className="body "style={{ height: "400px", overflowY: "auto" }}>
            <div to="/blog#blog" onClick={scrollToTop}>
              <img src={BlogShot} alt="blog-sample" className='shadow' style={{ width: "650px" }} />
            </div>
            </div>
          </div>
            </div>
            <div className="col-md-4">
              <div className="w3-margin-top">
                <div className="body">
                <h4 className="w3-margin-left">BLOG FEATURES:</h4>       
                  <div className="row w3-padding-24">  
      <div className="col">   
      <ul style={{fontSize:'14px'}} className="fw-lighter">
        <li>Navigation</li>
        <li>Header Element </li>     
        <li>CTA Button</li>
        <li>Blogger Bio</li>
      </ul>
      </div>
     
      <div className="col">
      <ul style={{fontSize:'14px'}} className="fw-lighter">
   
        <li>Popular Posts</li>
        <li>Read More option</li>
        <li>Share Button Option</li>
      </ul>
  </div>
     

  
      <div className="w3-padding-large"> 
      <h6 >POSSIBILITIES:</h6> 
  <p style={{fontSize:'14px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia sint doloremque ab in exercitationem veniam. Quo nam ad libero autem error. Quisquam provident qui quo facere ipsam inventore nobis.</p>
      <p style={{fontSize:'14px'}} className="fw-lighter">Click the view sample button below to view the full sample site.</p>
    <Link to='/blog'>
    <Button className="btn btn-primary">VIEW SAMPLE</Button>
    </Link>   
    </div> 
    </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
         <br />
        <br />
        <div className="container-fluid bg-white p-4">
      <div className="spyscroll" id="spyscroll">
        <h4 className="w3-text-black w3-margin-top" id="#spy-scroll">
          SPYSCROLL.
        </h4>
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
      </div>
      </div>

      <div className="container-fluid bg-white p-4" >
      <div className="login-page" id="login-page">
        <h4 className="w3-text-black w3-margin-top" >
          LOGIN.
        </h4>
        <hr className="w3-opacity" />
        <p>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate porro consequuntur velit ducimus quae enim deserunt a officia hic dolorem, sed vitae provident minima nihil possimus exercitationem dolores doloribus.
        </p>
      </div>
        </div>


        <div className="container-fluid bg-white p-4" id="">
        <div className="album-page" id="album-page">
        <h4 className="w3-text-black w3-margin-top" >
          ALBUM.
        </h4>
        <hr className="w3-opacity" />
        <p>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur corporis dignissimos fugit recusandae beatae iusto rem ut aperiam! Eum impedit aliquid vero perferendis nobis voluptatum esse quos ratione sed officiis?
        </p>
      </div>
        </div>


        <div className="container-fluid bg-white p-4" id="">
        </div>


    </div>
  );
}

export default PageSamples;
