import React from 'react';
import SpyScroll from '../../components/SampleComponents/SpyScroll/SpyScroll.jsx';
import Blog from '../../components/SampleComponents/Blog/Blog.jsx';
import SampleHeader from '../../components/SampleComponents/SampleHeader/SampleHeader.jsx';
import "bootstrap/dist/css/bootstrap.min.css";

const SampleComponents = () => {

    return (
        <div>
        <SampleHeader />
    
        <div className='w3-container w3-padding-large' id='blog'>
        <Blog />
        </div>
        <div className='' id=''></div>
        <div className='' id=''></div>
        <div className='' id=''></div>
        <div className='' id=''></div>
        <div className='' id=''></div>
        <SpyScroll />
       

        </div>
    );
    }

export default SampleComponents;