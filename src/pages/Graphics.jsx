import React from "react";
import YogaSet from "../assets/YogaStory/YogaSet.png";

const Graphics = () => {
    return (
        <div>
        <h1>Graphics</h1>
             
      <div className="container py-2 mt-3" style={{fontFamily:'sans-serif'}}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col d-flex justify-content-center align-bottom px-4"
          id="what-we-do">
            <div className="story-essentials-body justify-content-center align-bottom">
              <div className="story-essentials-title">
                <h1 className="mt-0"
                 style={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
    
                fontSize:'3.5rem',
                }}
                >TELL YOUR STORY...</h1>
              </div>
              <br />
              <div>
              <p className="story-essentials-text">
                In the enchanting realm of digital storytelling, businesses are
                weaving captivating tales using the magical wand of social media
                to capture an audience.
              </p>
              <p>
                Crafting a compelling narrative on social platforms not only
                establishes a brand's online presence but also serves as a
                dynamic avenue to entice users to explore further.{" "}
              </p>
              </div>
            </div>
          </div>

          {/*recruit YOGA COMPLETE start */}
          <div className="col-sm-12 col-md-8 col-lg-8 d-flex flex-column justify-content-center align-items-center px-4">
            <img
              src={YogaSet}
              alt="YogaSet"
              className="mb-2 border border-black"
              style={{
                width: "95%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px" }}>
              {" "}
              <i>"SAMPLE: digital marketing campaign"</i>
            </p>
          </div>
        </div>
      </div>
    

        </div>
    );
    }
export default Graphics;