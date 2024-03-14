import React, { useState } from "react";
import ImageModal from "../../Modal/ImageModal";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";


import ProductCampaign from "../../../assets/images/Graphics/ProductCampaign.png";
import MidSeason from "../../../assets/images/Graphics/MidSeason.png";
//import CheckOut from "../../../assets/images/Graphics/CheckOut.png";
import Catching from "../../../assets/images/Graphics/Catching.png";
import Canceled from "../../../assets/images/Graphics/Canceled.png";
import CuttersFlyers from "../../../assets/images/
//import NorthernGolf from "../../../assets/images/Graphics/NorthernGolf.png";
import YogaSet from "../../../assets/images/YogaStory/YogaSet.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const BusinessEssentials = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleModalOpen = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div className="w3-container w3-content mt-4">
        <div className="w3-content w3-justify w3-text-black w3-padding-32">
        <h4 className="w3-text-black" id="#server">
              Graphic Elements.
            </h4>
            <hr className="w3-opacity" />
            <p>
            Graphics play a crucial role in communication, whether it's in advertising, branding, web design, or multimedia content. They serve as visual elements that enhance the presentation of information and ideas, making them more engaging, memorable, and effective. 
            </p>
            <br />
          </div>
      <div className="row graphics-container">
        {[
          { image: ProductCampaign, title: "Product Campaign" },
          { image: MidSeason, title: "Large Format" },
          { image: CuttersFlyers, title: "Special Event" },
          { image: Catching, title: "Services and Branding" },
          { image: Canceled, title: "Team Notifications" },
          { image: YogaSet, title: "Yoga Set" },
        ].map((item, index) => (
          <div
            key={index}
            className="col-sm-12 col-md-6 col-lg-6 mb-2 d-flex justify-content-center align-bottom"
          >

            <div className="graphics-body justify-content-center py-2 align-bottom">
              
              <div className="graphics-title">
                <h5 className="py-2 text-center">{item.title}</h5>
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-2 border border-black clickable-image"
                  style={{
                    width: "100%",
                    height: "auto",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                  }}
                  onClick={() => handleModalOpen(item.image)}
                />
                <p className= 'text-center' style={{ fontSize: "12px", color: "blue" }}>
                  <HiMagnifyingGlassPlus /> click image to enlarge
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ImageModal */}
      <ImageModal
        showModal={showModal}
        handleModalClose={handleModalClose}
        imageSrc={selectedImage}
        altText="Enlarged Image"
        title="close"
      />
    </div>
  );
};

export default BusinessEssentials;
