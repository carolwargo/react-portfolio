import React from 'react';
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
    <div className='footer' id='footer' style={{fontFamily:'Raleway'}}>
    <MDBFooter className='text-center text-white' 
    style={{ backgroundColor: '#6F9699' }}>
    

    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>   <p>
               <button className="w3-button w3-light-grey w3-padding-large">
                <a
                  className="button text-black"
                  id="download"
                  download 
                  href={ResumeDownload}
                >
                  <i className="fa fa-download"></i> Download Resume
                </a>
              </button>
            </p></span>
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

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
         
              <b>Carol</b> Wargo
            </h6>
            <p>
            Thank you for visiting my site. I hope you found what you were looking for and enjoyed your time here. Feel free to reach out if you have any questions or feedback!
            </p>
          </MDBCol>
          
          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
        
            <p>
              <Link to='/about' className='text-reset' onClick={scrollToTop} >
                About
              </Link>
            </p>
            <p>
              <Link to='/resume' className='text-reset' onClick={scrollToTop} >
                Digital Resume
              </Link>
            </p>
            <p>
              <Link to='/portfolio' className='text-reset' onClick={scrollToTop} >
               Portfolio
              </Link>
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Samples</h6>
            <p>
              <Link to='/blog' className='text-reset' onClick={scrollToTop} >
               Blog
              </Link>
            </p>
            <p>
            <Link to='/album' className='text-reset' onClick={scrollToTop} >
                Album
              </Link>
            </p>
            <p>
              <a href='http://carolwargo.github.io/realestate' className='text-reset' onClick={scrollToTop} >
                Real Estate
              </a>
            </p>
            
          </MDBCol>


          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              Huntingtown, MD 20639, US
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              <a href='mailto:carolwargo.dev@gmail.com' className='text-reset'>
              Email
              </a>
            </p>
            <p>
            <a href='tel:+4437711726' className='me-4 text-reset'>
              <MDBIcon icon="phone" className="me-3" /> Call
</a>
            </p>
         
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https:carolwargo.github.io/react-portfolio'> <b> C</b>W
        </a>
      </div>
    </MDBFooter>
   
  </div>
  );
}