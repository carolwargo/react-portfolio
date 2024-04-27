import React from 'react';
import { motion } from 'framer-motion';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import ResumeDownload from '../assets/ResumeDownload.pdf';

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}
    className="home"
    
    >
    <div className='footer' id='footer' style={{fontFamily:'Raleway'}}>
    <MDBFooter className=' w3-black' >
    

   
    <section className='text-center w3-padding-top-16 w3-padding-24'>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="4" lg="4" xl="4" className='mx-auto mb-4 me-2'>
            <h6 className='text-uppercase fw-bold mb-4'>
         
              <b>Carol</b> Wargo
            </h6>
            <p style={{fontSize:'14px'}}>
            Thank you for visiting my site. I hope you found what you were looking for and enjoyed your time here. Feel free to reach out if you have any questions or feedback!
            </p>
            <button className="w3-button w3-light-grey w3-padding w3-round-xxlarge " >
                <a
                  className="button text-black"
                  id="download"
                  download 
                  href={ResumeDownload}
                >
                 Download Resume
                </a>
              </button>
          </MDBCol>
          
          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
          
        
          
              <Link to='/' className='text-reset' onClick={scrollToTop} >
              <p style={{fontSize:'14px'}}>
              Home
              </p>
              </Link>
          
           
              <Link to='/about' className='text-reset' onClick={scrollToTop} >
              <p style={{fontSize:'14px'}}>
                About
                </p>
              </Link>
           
           
              <Link to='/resume' className='text-reset' onClick={scrollToTop} >
              <p style={{fontSize:'14px'}}>
                Digital Resume
                </p>
              </Link>
          
            
              <Link to='/portfolio' className='text-reset' onClick={scrollToTop} >
              <p style={{fontSize:'14px'}}>
               Portfolio
               </p>
              </Link>
           
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 justify-content-center'>
            <p style={{fontSize:'14px'}}>
              <Link to='/blog' className='text-reset' onClick={scrollToTop} >
               Blog
              </Link>
            </p>
            <p style={{fontSize:'14px'}}>
            <Link to='/album' className='text-reset' onClick={scrollToTop} >
                Album
              </Link>
            </p>
            <p style={{fontSize:'14px'}}>
              <a href='http://carolwargo.github.io/realestate' className='text-reset' onClick={scrollToTop} >
                Real Estate
              </a>
            </p>
            <p style={{fontSize:'14px'}}>
              <Link to='sidenav' className='text-reset' onClick={scrollToTop} >
               Price Menu
              </Link>
            </p>
            
          </MDBCol>


          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-md-0 mb-4 flex-column justify-content-center text-center'>
            <p style={{fontSize:'14px'}} className='text-center'>
              <MDBIcon icon="home" className="me-2" />
              Huntingtown, MD
            </p>
            <p style={{fontSize:'14px'}}  className='text-center'>
              <MDBIcon icon="envelope" className="me-2" />
              <a href='mailto:carolwargo.dev@gmail.com' 
              className='text-reset'>
              Email
              </a>
            </p>
            <p style={{fontSize:'14px'}}  className='text-center'>
            <a href='tel:+4437711726'className='text-reset'>
              <MDBIcon icon="phone" className="me-2" /> Call
</a>
            </p>
            <button className="w3-button w3-text-light-grey w3-padding w3-round-xxlarge mt-2" 
              style={{backgroundColor:'#FF385C'}}>
              <Link to="/contact#contact"
                  className="button text-white"
                  onClick={scrollToTop}
                >
                Contact Me
                </Link>
              </button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    <hr />
    <section className='d-flex justify-content-center text-center justify-content-lg-between w3-padding-large border-bottom'>
      <div className='me-5 d-none d-lg-block' >
      <p style={{fontSize:'12px', fontWeight:'light'}}> © 2023 Copyright:    <a className='text-white' href='https:carolwargo.github.io/react-portfolio' style={{fontSize:'12px'}}> <b> C</b>WARGO
        </a></p>
      </div>

      <div>
      
          
      <a href='tel:+4437711726' className='me-4 text-reset'>
      <MDBIcon icon="phone-alt" />

        </a>
        <a href='mailto:carolwargo.dev@gmail.com' className='me-4 text-reset'>
        <MDBIcon icon="envelope" />
        </a>
    
        <a href='https://www.linkedin.com/in/carol-wargo-35021baa/' className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
        </a>
        <a href='https://github.com/carolwargo' className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
        </a>
      </div>
    </section>
    </MDBFooter> 
  </div>
  </motion.div>
  );
}