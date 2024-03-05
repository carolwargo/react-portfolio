import React from 'react';
//import { GiPalette} from 'react-icons/gi';
//import { GiLaptop} from 'react-icons/gi';
//import { SiMinutemailer } from 'react-icons/si';
//import { MdOutlineDesignServices } from "react-icons/md";
//import { BiSolidBookContent } from "react-icons/bi";
//import { SiStyledcomponents } from "react-icons/si";
//import { FaPuzzlePiece } from "react-icons/fa";
//import { IoPersonCircleSharp } from "react-icons/io5";
//import { TiDocumentText } from "react-icons/ti";
import { Card, Button } from "react-bootstrap";
//import { Link } from "react-router-dom";
import '../../../App.css';

const SampleIcons = () => {   

    return (
        <div className='p-sm-5 pb-4' >
      <div className='row d-flex justify-content-center w3-padding-bottom'>
      <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
     <div className='container'>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Blog Page</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</div>
</div>


<div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
     <div className='container'>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Pagenation</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</div>
</div>


<div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
     <div className='container'>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>SpyScroll</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</div>
</div>


<div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
     <div className='container'>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Cards</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</div>
</div>



</div>
</div>
    );
    }

export default SampleIcons;