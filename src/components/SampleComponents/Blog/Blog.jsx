import React from "react";
import WomanReading from "../../../assets/images/WomanReading.jpg";
import Business from "../../../assets/images/About/Business.png";
import BlogHeader from "./BlogHeader";
import PostsShare from "./PostsShare";
import Posts from "./Posts";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog = () => {
  return (
    <div>
      <BlogHeader />
      <main className="w3-light-grey">
        <div className="w3-content" style={{ maxWidth: "1400px" }}>
          {/* start Header */}
          {/*row start for the whole page with exception of header & footer */}
          <div className="w3-row p-2">
            {" "}
            {/*card start for bio, popular posts & tags*/}
            <div className="w3-col p-4 l4">
              {" "}
              {/*card start for bio*/}
              <div className="w3-card w3-margin m-4">
                {" "}
                {/*card-image-start for bio*/}
                <img
                  src={WomanReading}
                  alt="blog-profile"
                  style={{ width: "100%" }}
                ></img>{" "}
                {/*card-image-start for bio*/}
                <div className="w3-container w3-white justify-content-center">
                  {" "}
                  {/*card-container-start for bio*/}
                  <br></br>
                  <h5 className="mt-3" style={{ fontFamily: "sans-serif" }}>
                    <b>Carol Wargo</b>
                  </h5>
                  <p className="mb-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit vel harum odio nihil maxime dolorem explicabo
                    blanditiis, optio eaque quasi vero quae nostrum voluptates.
                    Non natus minus omnis ipsa in!{" "}
                  </p>
                  <br></br>
                </div>{" "}
                {/*card-container-end for bio*/}
              </div>
              {/*card end for bio*/}
              <hr />
              <div className="w3-card w3-margin m-4">
                {" "}
                {/*card start for all popular posts elements*/}
                <div className="w3-container w3-padding">
                  {/*container start header popular posts */}
                  <h4>Popular Posts</h4>
                </div>
                {/*container end header popular posts */}
                <ul className="w3-ul w3-hoverable w3-white">
                  {/*list start popular posts */}
                  <li className="w3-padding-16">
                    {/*list-item-1 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "20%" }}
                    ></img>{" "}
                    <span className="w3-large">Style Option 1</span>
                    <br />
                    <span>Share Buttons</span>
                  </li>
                  {/*list-item-1 end popular posts */}
                  <li className="w3-padding-16">
                    {/*list-item-2 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "20%" }}
                    ></img>
                    <span className="w3-large">Style Option 2</span>
                    <br></br>
                    <span>Read More Button</span>
                  </li>
                  {/*list-item-2 end popular posts */}
                  <li className="w3-padding-16">
                    {/*list-item-3 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "20%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br></br>
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-3 end popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "20%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-4 end popular posts */}
                </ul>
                {/*list end popular posts */}
              </div>
              {/*card end for all popular posts elements*/}
              <hr />
              <div className="w3-card w3-margin m-4">
                {" "}
                {/*card start for all tags elements*/}
                <div className="w3-container w3-padding">
                  {" "}
                  {/*container start for tags Header*/}
                  <h4>Tags</h4>
                </div>{" "}
                {/*container end for tags Header*/}
                <div className="w3-container w3-white">
                  {" "}
                  {/*container start for tags*/}
                  <p>
                    <span className="w3-tag w3-black w3-margin-bottom">
                      Travel
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      New York
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      London
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      IKEA
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      NORWAY
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      DIY
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Ideas
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Baby
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Family
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      News
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Clothing
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Shopping
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Sports
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Games
                    </span>
                  </p>
                </div>{" "}
                {/*container end for tags only*/}
              </div>{" "}
              {/*card end for all tags elements*/}
              {/*card end for all popular posts elements*/}
              {/*card end for all tags elements*/}
            </div>{" "}
          
            {/*col end for bio, popular posts & tags*/}
            {/*col start for all posts iteration */}
            <div className="w3-col p-4 l8 s12">
              <Posts />
              <PostsShare />
            </div>
            {/*col end for posts iteration */}
            <div>
              <div className="w3-card w3-margin m-4 border-black">
                {" "}
                {/*card start for all tags elements*/}
               
                {/*container end for stats Header*/}
                <div className="w3-container w3-white">
              
                  {/*container start for stats*/}
                  <p className="text">
                    <span className='px-3' style={{fontSize:'1.5rem'}}>
                   <b> DID YOU KNOW ?</b>
                    </span>
                    <span className="w3-tag w3-white w3-margin-bottom"></span>{" "}
                    <br />
                    <span>
                      <ul>
                        <li>
                          Social share buttons increase sharing by 700% (Source:
                          ShareThis).
                        </li>
                        <li>
                          Content shared on social media generates 8 times more
                          engagement than content shared through other channels
                          (Source: QuickSprout).
                        </li>
                        <li>
                          Articles with share buttons get 7 times more mentions
                          than those without (Source: Buffer).
                        </li>
                        <li>
                          Tweets with share buttons get 2.5 times more clicks
                          than those without (Source: HubSpot).
                        </li>
                      </ul>
                    </span>
                    <span className="w3-tag w3-light-grey w3-margin-bottom p-2 mx-3">
                      Share Buttons should be prominently displayed near the
                      content and, mobile friendly,
                    </span>
                  </p>
                </div>{" "}
                {/*container end for stats only*/}
              </div>
            </div>
          </div>{" "}
          {/*row end for the whole page with exception of header & footer */}
        </div>

        {/** 
        <footer className="w3-container w3-dark-grey w3-padding-32 text-center">
          <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
            Previous
          </button>
          <button className="w3-button w3-black w3-padding-large w3-margin-bottom">
            Next »
          </button>
          <p
            style={{
              textShadow: "1px 1px 2px rgba(0, 0, 0, 2.8)",
              color: "#FDC5E8",
            }}
          >
            LOGO<span style={{ color: "#00FFFF" }}> HERE</span>
          </p>
        </footer>
        */}
      </main>
    </div>
  );
};

export default Blog;
