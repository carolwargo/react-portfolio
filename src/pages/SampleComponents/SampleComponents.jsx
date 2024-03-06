import React from 'react';
import SpyScroll from '../../components/SampleComponents/SpyScroll/SpyScroll.jsx';
import Blog from '../../components/SampleComponents/Blog/Blog.jsx';
import Pagination from '../../components/SampleComponents/Pagination/Pagination.jsx';
import SampleIcons from '../../components/SampleComponents/SampleIcons/SampleIcons.jsx';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SampleComponents = () => {

    return (
        <div className='sample-components' id='#sample-components'>
              <div className="w3-bar w3-white w3-wide w3-padding w3-card w3-margin-top">
          <a href="#backend" className="w3-bar-item w3-button"><b>CW</b>SAMPLE COMPONENTS</a>
       
          <div className="w3-right w3-hide-small">
          <a href="#icon" className="w3-bar-item w3-button">Icon Buttons</a>
            <a href="#blog" className="w3-bar-item w3-button">Blog</a>
            <a href="#tables" className="w3-bar-item w3-button">Tables</a>
            <a href="#cards" className="w3-bar-item w3-button">Cards</a>
            <a href="#spy-scroll" className="w3-bar-item w3-button">Spy Scroll</a>
            <a href="#pagination" className="w3-bar-item w3-button">Pagination</a>
          </div>
        </div>

        <div className='w3-light-grey w3-margin-bottom border-top' id='blog'>
     
        <SampleIcons/>
        <Blog />
        </div>
        <div className='w3-container w3-padding-large bg-white' id='spy-scroll'>
        <SpyScroll />
        </div>
        <div className='' id=''>
        <Pagination />
        </div>
        <div className='' id=''></div>
        <div className='' id=''></div>
        <div className='' id=''></div>
      
        <footer className="w3-container w3-padding-48 text-center bg-white">
        <NavLink
        to={"/portfolio"}
        >
          <button className="w3-button w3-black w3-disabled w3-padding-medium">
            Previous
          </button>
          </NavLink>

          <NavLink
        to={"/contact"}
        >
          <button className="w3-button w3-black w3-padding-medium">
            Next »
          </button>
         </NavLink>
        </footer>


        </div>
    );
    }

export default SampleComponents;