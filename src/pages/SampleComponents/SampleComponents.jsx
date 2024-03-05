import React from 'react';
import SpyScroll from '../../components/SampleComponents/SpyScroll/SpyScroll.jsx';
import Blog from '../../components/SampleComponents/Blog/Blog.jsx';
import SampleHeader from '../../components/SampleComponents/SampleHeader/SampleHeader.jsx';
import SampleIcons from '../../components/SampleComponents/SampleIcons/SampleIcons.jsx';
import "bootstrap/dist/css/bootstrap.min.css";

const SampleComponents = () => {

    return (
        <div className='sample-components' id='#sample-components'>
        <div className='w3-light-grey w3-margin-bottom border-top' id='blog'>
        <SampleHeader />
        <SampleIcons/>
        <Blog />
        </div>
        <div className='w3-container w3-padding-large bg-white' id='spy-scroll'>
        <SpyScroll />
        </div>
        <div className='' id=''></div>
        <div className='' id=''></div>
        <div className='' id=''></div>
        <div className='' id=''></div>
      
       

        </div>
    );
    }

export default SampleComponents;