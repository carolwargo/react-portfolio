import React from "react";
import Carousel from "react-bootstrap/Carousel";
import S1 from "../../assets/images/Sports/S1.png";
import S2 from "../../assets/images/Sports/S2.png";
import S3 from "../../assets/images/Sports/S3.png";
import S4 from "../../assets/images/Sports/S4.png";
import S5 from "../../assets/images/Sports/S5.png";
import S6 from "../../assets/images/Sports/S6.png";
import { Col, Row } from "react-bootstrap";

const customContainerStyle = {
  maxWidth: "600px", // Adjust the maximum width as needed
  margin: "0 auto", // Center the container
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
                  src={S1}
                  alt="First slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={S2}
                  alt="second slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={S3}
                  alt="Third slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={S4}
                  alt="Fourth slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={S5}
                  alt="Fifth slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={S6}
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
