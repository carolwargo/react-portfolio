import React from "react";
import Blog from "../components/Portfolio/Blog/Blog.jsx";
import SpyScroll from "../components/Portfolio/SpyScroll/SpyScroll.jsx";
function PageSamples() {

    return (
    <div className="page-samples" id="page-samples">
        <div className='w3-margin-top w3-padding-32' >
        <div className="blog" id="blog">
        <Blog/>
        </div>
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
        <SpyScroll/>
        </div>
        </div>
        </div>
    );
    }

export default PageSamples;