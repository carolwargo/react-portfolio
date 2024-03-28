import React from 'react';
//import { GiPalette} from 'react-icons/gi';
//import { GiLaptop} from 'react-icons/gi';
import { SiMinutemailer } from 'react-icons/si';
//import { MdOutlineDesignServices } from "react-icons/md";
import { BiSolidBookContent } from "react-icons/bi";
//import { SiStyledcomponents } from "react-icons/si";
import { FaPuzzlePiece } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { Link } from "react-router-dom";
import '../../../App.css';

const HomeIcons = () => {   

    return (
        <div className='p-sm-5 pb-4' >
  
            <div className='w3-container w3-content'>
            <h1 className='bg-white py-3 rounded-1 text-center w3-padding-top'>WHAT'S NEXT?</h1>
            <p className='text-center px-lg-5'>Discover more about me, explore my portfolio, delve into my professional background, browse through my collection of reusable components, or get in touch! Select your path below and click the button to follow it.</p>

            </div>
       
      <div className='row d-flex justify-content-center w3-padding-bottom'>

<div className='col-sm-12 col-md-2 col-lg-2 d-flex flex-column justify-content-center 
      align-items-center'>    
    {/* Use Link component with 'to' prop */}
    <Link to='/about' id='home-person-icon' style={{ fontSize: '12rem', color:'black' }}>
        <IoPersonCircleSharp className='rounded p-5 ' id='home-person-icon' 
        style={{ boxShadow: '0 .5rem 1rem gray', transition: 'box-shadow 0.3s', backgroundColor:'pink' }} />
    </Link>  
    {/* No need for 'a' tag, use Link component instead */}
    <Link to="/about" style={{ fontSize: '1.2rem', color: 'black', textDecoration: 'none' }}>
        <b>About Me</b>
    </Link>
</div>

<div className='col-sm-12 col-md-2 col-lg-2 d-flex flex-column justify-content-center 
      align-items-center '>    
    {/* Use Link component with 'to' prop */}
    <Link to='/resume' id='home-document-icon' style={{ fontSize: '12rem', color:'black' }}>
        <TiDocumentText className='rounded p-5 ' id='home-document-icon' 
        style={{ boxShadow: '0 .5rem 1rem gray', transition: 'box-shadow 0.3s', backgroundColor:'pink' }} />
    </Link>  
    {/* No need for 'a' tag, use Link component instead */}
    <Link to="/resume" style={{ fontSize: '1.2rem', color: 'black', textDecoration: 'none' }}>
        <b>Resume & Download</b>
    </Link>
</div>

<div className='col-sm-12 col-md-2 col-lg-2 d-flex flex-column justify-content-center 
      align-items-center'>    
    {/* Use Link component with 'to' prop */}
    <Link to="/portfolio"  id='home-book-icon' style={{ fontSize: '12rem', color:'black' }}>
        <BiSolidBookContent    className='rounded p-5 ' id='home-book-icon' 
        style={{ boxShadow: '0 .5rem 1rem gray', transition: 'box-shadow 0.3s', backgroundColor:'pink' }} />
    </Link>  
    {/* No need for 'a' tag, use Link component instead */}
    <Link to="/portfolio"  style={{ fontSize: '1.2rem', color: 'black', textDecoration: 'none' }}>
        <b>Digital Porfolio</b>
    </Link>
</div>



<div className='col-sm-12 col-md-2 col-lg-2 d-flex flex-column justify-content-center 
      align-items-center'>    
    {/* Use Link component with 'to' prop */}
    <Link to='/sample-components' id='home-puzzle-icon' style={{ fontSize: '12rem', color:'black' }}>
        < FaPuzzlePiece  className='rounded p-5 ' id='home-puzzle-icon' 
        style={{ boxShadow: '0 .5rem 1rem gray', transition: 'box-shadow 0.3s', backgroundColor:'pink' }} />
    </Link>  
    {/* No need for 'a' tag, use Link component instead */}
    <Link to="/sample-components" style={{ fontSize: '1.2rem', color: 'black', textDecoration: 'none' }}>
        <b>Sample Components</b>
    </Link>
</div>



<div className='col-sm-12 col-md-2 col-lg-2 d-flex flex-column justify-content-center 
      align-items-center'>    
    {/* Use Link component with 'to' prop */}
    <Link to='/contact' id='home-design-icon' style={{ fontSize: '12rem', color:'black' }}>
    <SiMinutemailer className='rounded p-5 ' id='home-design-icon' 
        style={{ boxShadow: '0 .5rem 1rem gray', transition: 'box-shadow 0.3s', backgroundColor:'pink' }} />
    </Link>  
    {/* No need for 'a' tag, use Link component instead */}
    <Link to='/contact' style={{ fontSize: '1.2rem', color: 'black', textDecoration: 'none', }}>
        <b>Contact Me</b>
    </Link>
</div>

    </div>
    </div>
   
    );
    }

export default HomeIcons;