import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import C1 from '../../assets/images/Cutters/C1.png'; 
import C2 from '../../assets/images/Cutters/C2.png';
import C3 from '../../assets/images/Cutters/C3.png';
import C4 from '../../assets/images/Cutters/C4.png';
import C5 from '../../assets/images/Cutters/C5.png';
import { Col, Row } from 'react-bootstrap';


const customContainerStyle = {
    maxWidth: '400px', // Adjust the maximum width as needed
    margin: '0 auto', // Center the container
  };
  
  const customImgStyle = {
    width: '100%', // Make images fill the container width
    height: 'auto',
    
  };
  
  export default function CarouselFadeExample() {
    return (
        <div>
        <section className="mt-5 ">
        <Row className="d-flex justify-content-center ">
         
            <Col  className='bg-secondary'>
            Fundraising Event Signage
            </Col>
         
            
      <Col className="fluid " style={customContainerStyle}>
        <Carousel fade>
      <Carousel.Item>
      <img src={C1} alt="First slide" className="d-block"  style={customImgStyle} />
 
      </Carousel.Item>
      <Carousel.Item>
      <img src={C2} alt="second slide" className="d-block"  style={customImgStyle} />
  
      </Carousel.Item>
      <Carousel.Item>
        <img src={C3} alt="Third slide" className="d-block"  style={customImgStyle} />
     
      </Carousel.Item>
      <Carousel.Item>
        <img src={C4} alt="Fourth slide" className="d-block"  style={customImgStyle} />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={C5} alt="Fifth slide" className="d-block"  style={customImgStyle} />
       
      </Carousel.Item>
    </Carousel>
    </Col>
   
    </Row>
    </section>

</div>
  );
}
