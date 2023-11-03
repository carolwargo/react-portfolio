import React from "react";
import Carousel from "react-bootstrap/Carousel";
import L1 from '../../../assets/images/LogoBrand/L1.png';
import L7 from "../../../assets/images/LogoBrand/L7.png";
import L2 from "../../../assets/images/LogoBrand/L2.png";
import L3 from "../../../assets/images/LogoBrand/L3.png";
import L4 from "../../../assets/images/LogoBrand/L4.png";
import L5 from "../../../assets/images/LogoBrand/L5.png";
import L6 from "../../../assets/images/LogoBrand/L6.png";
import L8 from "../../../assets/images/LogoBrand/L8.png";
import { Col, Row } from "react-bootstrap";

const customContainerStyle = {
  maxWidth: "600px", // Adjust the maximum width as needed
  margin: "0 auto", // Center the container
  boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)", 
  paddingRight: "0", // Add this line to remove right padding
  paddingLeft: "0", // Add this line to remove left padding
};

const customImgStyle = {
  width: "100%", // Make images fill the container width
  height: "auto",
  };
  

export default function CarouselFadeExample() {
  return (
    <div>
    
        <Row className="d-flex justify-content-center ">
          

          <Col className="fluid " style={customContainerStyle}>
            <Carousel fade>
              <Carousel.Item>
                <img
                  src={L1}
                  alt="First slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={L2}
                  alt="second slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={L3}
                  alt="Third slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={L4}
                  alt="Fourth slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={L5}
                  alt="Fifth slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={L6}
                  alt="Sixth slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={L7}
                  alt="Sixth slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={L8}
                  alt="Sixth slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        
        </Row>
    
    </div>
  );
}
