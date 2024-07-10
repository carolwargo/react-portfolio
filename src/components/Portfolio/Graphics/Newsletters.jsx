import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Business1 from '../../../assets/images/BUSINESS/Business1.png';
import Business2 from '../../../assets/images/BUSINESS/Business2.png';
import Business3 from '../../../assets/images/BUSINESS/Business3.png';
import Business4 from '../../../assets/images/BUSINESS/Business4.png';
import Business5 from '../../../assets/images/BUSINESS/Business5.png';
import Business6 from '../../../assets/images/BUSINESS/Business6.png';
import Business7 from '../../../assets/images/BUSINESS/Business7.png';  
import BusinessStart from '../../../assets/images/BUSINESS/BusinessStart.png';
import Fitness2 from '../../../assets/images/FITNESS/Fitness2.png';  
import Fitness3 from '../../../assets/images/FITNESS/Fitness3.png';  
import Fitness4 from '../../../assets/images/FITNESS/Fitness4.png'; 
import Furniture1 from '../../../assets/images/FURNITURE/Furniture1.png';
import Furiture2 from '../../../assets/images/FURNITURE/Furniture2.png';
import Furiture3 from '../../../assets/images/FURNITURE/Furniture3.png'; 
import Newsletter3 from '../../../assets/images/NewsLetterImages/Newsletter3.png';
//import NewsLetter4 from '../../../assets/images/NewsLetterImages/Newsletter4.png';


const Newsletters = () => {

      return (
    
        <div className='w3-padding-32'>
              <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-12 col-md-4 col-lg-4 justify-content-center align-bottom px-2">
              <div className="graphics-carousel-body justify-content-center align-bottom">
         <div className="graphics-carousel-title text-black">
           <h2>Newsletters</h2>
           
             <br />
        <h4>Key elements that engage readers, convey important information, and promote brand identity.</h4>
        
      <p>These elements include a captivating subject line, a clear and concise header, engaging content with well-structured sections, visually appealing images, and compelling calls to action.</p>
       </div>
       </div>
     </div>
     <div className="col-sm-12 col-md-8 col-lg-8 py-3 justify-content-center align-bottom px-2">
        <img src={Newsletter3} alt="newsletter3" className='w-100 shadow' />
        </div>
   
        </div>
   
    <div className="w3-padding-48 w3-margin-top">
    <div className="row d-flex justify-content-center align-items-center">
    <div className="graphics-carousel-title text-center text-black">
    <br />
           <h3>Newsletter Campaigns</h3>
           <hr />
           <br />
            </div>
     <div className="col-sm-12 col-md-4 col-lg-4 py-3 justify-content-center align-bottom px-2">
     <MDBCarousel showControls className='shadow border-black'>
          <MDBCarouselItem itemId={1}>
            <img src={BusinessStart} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src={Business2} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src={Business3} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={4}>
            <img src={Business4} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={5}>
            <img src={Business5} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={6}>
            <img src={Business6} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={7}>
            <img src={Business7} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={8}>
            <img src={Business1} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
        </MDBCarousel>
        </div>
    <div className="col-sm-12 col-md-4 col-lg-4 py-3 justify-content-center align-bottom px-2">
     <MDBCarousel showControls className='shadow border-black'>
          <MDBCarouselItem itemId={1}>
            <img src={Fitness2} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src={Fitness3} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src={Fitness4} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
        
        </MDBCarousel>
        </div>
       <div className="col-sm-12 col-md-4 col-lg-4 py-1 justify-content-center align-bottom px-2">
     <MDBCarousel showControls className='shadow border-black'>
          <MDBCarouselItem itemId={1}>
            <img src={Furniture1} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src={Furiture2} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src={Furiture3} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
        </MDBCarousel>
        </div>
        </div>
        </div>
     {/*recruit YOGA COMPLETE start 
     <div className='w3-padding-48 text-center text-black'>
        <div className="row">
          <div className="col"><h1>Logos | Branding</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum nisi quaerat quibusdam tempore corrupti quidem enim repellendus maiores provident necessitatibus exercitationem dolor asperiores voluptas molestias placeat dignissimos, et nihil.</p></div>
          <div className="col"><h1>Forms|Interactive </h1> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum nisi quaerat quibusdam tempore corrupti quidem enim repellendus maiores provident necessitatibus exercitationem dolor asperiores voluptas molestias placeat dignissimos, et nihil.</p></div>
          <div className="col"><h1>Presentations </h1> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum nisi quaerat quibusdam tempore corrupti quidem enim repellendus maiores provident necessitatibus exercitationem dolor asperiores voluptas molestias placeat dignissimos, et nihil.</p></div>   
        </div>
       </div>
       */}
        {/*End Business*/}
   </div>
      
        
    );

}

export default Newsletters;