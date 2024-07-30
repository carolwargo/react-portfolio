import React, { useState } from "react";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import ImageModal from "../../Modals/ImageModal";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import Catching from "../../../assets/images/Graphics/Catching.png";
import Canceled from "../../../assets/images/Graphics/Canceled.png";
import CuttersFlyers from "../../../assets/images/Graphics/CuttersFlyers.png";
import S1 from "../../../assets/images/Sports/S1.png";
import S2 from "../../../assets/images/Sports/S2.png";
import S4 from "../../../assets/images/Sports/S4.png";
import Duke1 from "../../../assets/images/WallPaper/Duke1.png";
import Duke2 from "../../../assets/images/WallPaper/Duke2.png";
import Duke3 from "../../../assets/images/WallPaper/Duke3.png";


import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const dukeImages = [
  Duke1, Duke2, Duke3
  ];
const GraphicsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentDukeIndex, setCurrentDukeIndex] = useState(0);

  const handleModalOpen = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  const handleDukeImageClick = (index) => {
    setCurrentDukeIndex(index);
    }

  return (
    <div className="graphics-components" id="graphics-components">
 
<div className="w3-padding-top-48 w3-margin-top">
<p className='fw-bold  text-bg-primary p-3'><i>SPORTS MEDIA SAMPLES</i></p>         
<br />
</div>
      <div className="row">
        {[
          { image: S1, title: "Large Format" },
          { image: S2, title: "Large Format" },
          { image: CuttersFlyers, title: "Special Event" },
          { image: Catching, title: "Services and Branding" },
          { image: Canceled, title: "Team Notifications" },
          { image: S4, title: "FundRaiser" },
        
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
                  className="mb-2 border border-black clickable-image"
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
<div>

  <div className="row w3-padding-24 text-primary ft-bold justify-content-center align-items-center">
  <div className="col-sm-12 col-md-5 col-lg-5">
    <h2>Thought through detail</h2>
    <p>Element is clear and concise,  visually appealing,  with a truly custom aesthetic.
    </p>

    <p><b>Graphic Details:</b></p>
<ul>
  <li>Words- mascot, motto, location, #'s used.</li>
  <li>Blue jean- used throughout Duke athletics #bluecolar</li>
  <li>Logos- pitchford and Duke 'D'</li>
</ul>
    </div>
    <div className="col-sm-12 col-md-7 col-lg-7">
           <Card
            className="shadow mx-1"
      variant="outlined"
      sx={{
        minWidth: 225,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <img src={dukeImages[currentDukeIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {dukeImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleDukeImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentDukeIndex ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
    </div>

    </div>
</div>
    </div>
  );
};

export default GraphicsPage;
