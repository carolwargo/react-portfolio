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
import CCU1 from "../../../assets/images/Graphics/CCU1.png";
import CCU2 from "../../../assets/images/Graphics/CCU2.png";
import Duke1 from "../../../assets/images/WallPaper/Duke1.png";
import Duke2 from "../../../assets/images/WallPaper/Duke2.png";
import Duke3 from "../../../assets/images/WallPaper/Duke3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const dukeImages = [
  Duke1, Duke2, Duke3
];
const CCUImages = [ 
  CCU1, CCU2
];

const GraphicsComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentDukeIndex, setCurrentDukeIndex] = useState(0);
  const [currentCCUIndex, setCurrentCCUIndex] = useState(0);

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
  };

  const handleCCUImageClick = (index) => {
    setCurrentCCUIndex(index);
  };

  return (
    <div className='graphics-components w3-padding-top-32' id="graphics-components">
      <div className="w3-padding-large text-center ">
    <h1 className='fw-bold text-primary'>
      <i className='fw-bold'>SPORT GRAPHICS & BRANDING</i></h1> 
      <h4> Unified Graphics-Maximize your brand’s visibility with multi-platform marketing graphics, ensuring consistent and captivating visuals across all your marketing channels.</h4>
      </div>
        <div className="container large">
      
        <div className="row d-flex justify-content-center align-items-center">
        {[
          { image: S1},
          { image: S2},
          { image: CuttersFlyers },
          { image: Catching},
          { image: Canceled},
          { image: S4},
     
        ].map((item, index) => (
          <div
            key={index}
            className="col-sm-12 col-md-6 col-lg-6 mb-2 d-flex justify-content-center align-items-center "
          >
            <div className="graphics-body justify-content-center align-items-center">
              <div className="graphics-title">
                <img
                  src={item.image}
                  alt={item.title}
                  className="clickable-image shadow"
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "pointer"
                    
                  }}
                  onClick={() => handleModalOpen(item.image)}
                />
                <p className='text-center' style={{ fontSize: "12px", color: "black" }}>
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
      />


<div className="w3-container w3-content">
   <div className="row">
   <div className="col-sm-12 col-md-6 col-lg-6 mb-2 d-flex justify-content-center align-items-center w3-padding-large">
          <Card
            className="shadow rounded"
            variant="outlined"
            style={{backgroundColor:'#00009c'}}
            sx={{ minWidth: 300, '--Card-radius': (theme) => theme.vars.radius.xs }}
          >
        <div className="w3-container w3-content text-center" style={{color:'white'}}>
         <h5 className='text-center'>Custom Design Example</h5>
       </div>
            <img src={dukeImages[currentDukeIndex]} className='w-100' alt='' loading="lazy" />
            <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
                {dukeImages.map((_, index) => (
                  <Box
                    className="shadow my-4"
                    key={index}
                    onClick={() => handleDukeImageClick(index)}
                    sx={{
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
   
      <div className="col-sm-12 col-md-6 col-lg-6 mb-2 d-flex justify-content-center align-items-center w3-padding-large">
          <Card
            className="shadow rounded"
            variant="outlined"
            style={{backgroundColor:'black'}}
            sx={{ minWidth: 300, '--Card-radius': (theme) => theme.vars.radius.xs }}
          >
               <div className="w3-container w3-content text-center" style={{color:'white'}}>
         <h5 className='text-center'>Cross Promotional Sponsorship</h5>
   </div>
            <img src={CCUImages[currentCCUIndex]} className='w-100 ' alt='' loading="lazy" />
            <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
                {CCUImages.map((_, index) => (
                  <Box
                    className="shadow my-4"
                    key={index}
                    onClick={() => handleCCUImageClick(index)}
                    sx={{
                      width: '10px',
                      height: '10px',
                      cursor: 'pointer',
                      bgcolor: index === currentCCUIndex ? 'primary.solidBg' : 'background.level3',
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
      </div>
  );
};

export default GraphicsComponent;
