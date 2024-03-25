import React from "react";
import Blog from "../components/Portfolio/Blog/Blog.jsx";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogPage = () => {
    return (
        <div className="blog" id="blog">
            <div className="w3-padding-64">
         <Blog/>
         </div>
                        
        <div className="text-center w3-padding-32">
          <Link to="/resume#resume"><i 
          className="fa fa-arrow-circle-left w3-xxlarge w3-hover-opacity" style={{color:'black'}}></i></Link>
              <p className="w3-margin-top"><b>BACK</b></p>
              </div>
        </div>
    );
}

export default BlogPage;