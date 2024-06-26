import React, { useState } from "react";
import ImageModal from "../../Modal/ImageModal";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";


//import ProductCampaign from "../../../assets/images/Graphics/ProductCampaign.png";
import Catching from "../../../assets/images/Graphics/Catching.png";
import Canceled from "../../../assets/images/Graphics/Canceled.png";
import CuttersFlyers from "../../../assets/images/Graphics/CuttersFlyers.png";
import S1 from "../../../assets/images/Sports/S1.png";
import S2 from "../../../assets/images/Sports/S2.png";
import S4 from "../../../assets/images/Sports/S4.png";
import YogaSet from "../../../assets/images/YogaStory/YogaSet.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const GraphicsPage = () => {
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
    <div className="graphics" id="graphics">
    <div  className="w3-content">
      <div className="row">
        {[
          { image: S1, title: "Large Format" },
          { image: S2, title: "Large Format" },
          { image: CuttersFlyers, title: "Special Event" },
          { image: Catching, title: "Services and Branding" },
          { image: Canceled, title: "Team Notifications" },
          { image: YogaSet, title: "Campaign" },
        ].map((item, index) => (
          <div
            key={index}
            className="col-sm-12 col-md-6 col-lg-6 mb-2 d-flex justify-content-center align-bottom"
          >

            <div className="graphics-body justify-content-center align-bottom">
              
              <div className="graphics-title">
                <h5 className="py-2 text-center">{item.title}</h5>
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-2 border border-black clickable-image w3-round-xlarge"
                  style={{
                    width: "100%",
                    height: "auto",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                  }}
                  onClick={() => handleModalOpen(item.image)}
                />
                <p className= 'text-center' style={{ fontSize: "12px", color: "black" }}>
                  <HiMagnifyingGlassPlus /> click to enlarge
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
      <div className="w3-padding-32 ">
<img src={S4} alt="directive" style={{width:'100%'}} className="shadow w3-round-xlarge"/>
</div>
    </div>
    
    </div>
  );
};

export default GraphicsPage;
