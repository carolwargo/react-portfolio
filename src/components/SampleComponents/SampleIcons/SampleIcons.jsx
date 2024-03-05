import React from 'react';
//import { GiPalette} from 'react-icons/gi';
//import { GiLaptop} from 'react-icons/gi';
//import { SiMinutemailer } from 'react-icons/si';
//import { MdOutlineDesignServices } from "react-icons/md";
//import { BiSolidBookContent } from "react-icons/bi";
//import { SiStyledcomponents } from "react-icons/si";
//import { FaPuzzlePiece } from "react-icons/fa";
//import { IoPersonCircleSharp } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { LiaTableSolid } from "react-icons/lia";
import { FaWpforms } from "react-icons/fa6";
import { GiSpy } from "react-icons/gi";
//import { TiDocumentText } from "react-icons/ti";
import { Link } from "react-router-dom";
import '../../../App.css';

const SampleIcons = () => {   

    return (
        <div className='pb-4 ' >
    <div className='row d-flex justify-content-center w3-padding-bottom'>
    <div className='col-sm-12 col-md-2 col-lg-2 d-flex flex-column justify-content-center 
      align-items-center'>    
   
    <Link to='/sample-components#blog' id='home-person-icon' style={{ fontSize: '12rem', color:'black' }}>
        <FaBlog className='rounded p-3 bg-light' id='home-person-icon' 
        style={{ boxShadow: '0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }} />
    </Link>  
   
    <Link to='/sample-components#blog' style={{ fontSize: '1.2rem', color: 'white', textDecoration: 'none' }}>
        <b>Blog</b>
    </Link>
</div>

<div className='col-sm-12 col-md-2 col-lg-2 d-flex flex-column justify-content-center 
      align-items-center'>    
   
    <Link to='/sample-components#pagination' id='home-person-icon' style={{ fontSize: '12rem', color:'black' }}>
        <AiOutlinePicture className='rounded p-3 bg-light' id='home-person-icon' 
        style={{ boxShadow: '0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }} />
    </Link>  
  
    <Link 
    to='/sample-components#pagination' 
    style=
    {{ 
        fontSize: '1.2rem', 
        color: 'white', 
        textDecoration: 'none' 
        }}
        >
        <b>Pagination</b>
    </Link>
</div>

<div className='col-sm-12 col-md-2 col-lg-2 d-flex flex-column justify-content-center 
      align-items-center'>    
 
    <Link to='/sample-components#forms' id='home-person-icon' style={{ fontSize: '12rem', color:'black' }}>
        <FaWpforms className='rounded p-3 bg-light' id='home-person-icon' 
        style={{ boxShadow: '0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }} />
    </Link>  

    <Link to='/sample-components#forms' style={{ fontSize: '1.2rem', color: 'white', textDecoration: 'none' }}>
        <b>Forms</b>
    </Link>
</div>  

<div className='col-sm-12 col-md-2 col-lg-2 d-flex flex-column justify-content-center 
      align-items-center'>    
   
    <Link to='/sample-components#spy-scroll' id='home-person-icon' style={{ fontSize: '12rem', color:'black' }}>
        <GiSpy className='rounded p-3 bg-light' id='home-person-icon' 
        style={{ boxShadow: '0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }} />
    </Link>  
   
    <Link to='/sample-components#spy-scroll' style={{ fontSize: '1.2rem', color: 'white', textDecoration: 'none' }}>
        <b>Spy Scroll</b>
    </Link>
</div>


<div className='col-sm-12 col-md-2 col-lg-2 d-flex flex-column justify-content-center 
      align-items-center'>    
   
    <Link to='/sample-components#tables' id='home-person-icon' style={{ fontSize: '12rem', color:'black' }}>
        < LiaTableSolid className='rounded p-3 bg-light' id='home-person-icon' 
        style={{ boxShadow: '0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }} />
    </Link>  
   
    <Link to='/sample-components#tables' style={{ fontSize: '1.2rem', color: 'white', textDecoration: 'none' }}>
        <b>Tables</b>
    </Link>
</div>
    </div>
    </div>
   
    );
    }

export default SampleIcons;