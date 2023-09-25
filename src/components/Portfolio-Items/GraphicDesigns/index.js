import React from "react";



import Sports from "../../Carousel/Sports";
import { Col, Row } from "react-bootstrap";

export default function GraphicDesigns() {
  return (
    <div className="pt-1">
      <Row>
      
        <Col>
      <div
       
       className="g-4"
       style={{
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         padding: "2rem",
         borderRadius: "5px",
       }}
     >
       <Sports />
     </div>
     </Col>
     </Row>
    </div>
  );
}
