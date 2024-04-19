import React, { useState } from 'react';
import { motion } from 'framer-motion';

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}
    className="home"
    
    >
    <div className='sidenav w3-padding-top-48' id='sidenav'>
      <div>
      {/* Side Navigation */}
      <nav className={`w3-sidebar w3-bar-block w3-card w3-animate-top w3-center  w3-padding-64 ${isOpen ? 'w3-show' : 'w3-hide'}`} style={{ zIndex: '999', width: '100%', position: 'fixed', top: '0', backgroundColor: '#f1f1f1' }}>
        <h1 className="w3-xxxlarge w3-text-theme">Services</h1>
        <button className="w3-bar-item w3-button w3-large" onClick={toggleSidebar}>Close <i className="fa fa-remove w3-large"></i></button>
        <a href="#graphics" className="w3-bar-item w3-button w3-xxlarge">Graphic Design</a>
        <a href="#dev" className="w3-bar-item w3-button w3-xxlarge">Software Solutions</a>
        <a href="#design" className="w3-bar-item w3-button w3-xxlarge">Web Design</a>
        <a href="#contact" className="w3-bar-item w3-button w3-xxlarge">Contact</a>
      </nav>

      {/* Header */}
      <header className="w3-container w3-theme w3-padding w3-black" id="myHeader">
        <i className="fa fa-bars w3-xlarge w3-button w3-theme" onClick={toggleSidebar}></i>
        <div className="w3-center">
          <h4>CUSTOM WEB SITE DESIGN</h4>
          <h1 className="w3-xxxlarge w3-animate-bottom">Get Started</h1>
          <div className="w3-padding-32">
            <button className="w3-btn w3-xlarge bg-info w3-hover-light-grey" onClick={() => document.getElementById('id01').style.display='block'} style={{fontWeight:"900"}}>LEARN MORE</button>
          </div>
        </div>
      </header>

      {/* Modal */}
      <div id="id01" className="w3-modal w3-margin-top w3-margin-bottom">
        <div className="w3-modal-content text-center w3-card-4 w3-pale-blue w3-animate-top shadow border">
          <header className="w3-container w3-theme-l1 w3-padding-top-24"> 
            <span onClick={() => document.getElementById('id01').style.display='none'} className="w3-button w3-display-topright"> <b>X</b></span>
            
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Deserunt architecto exercitationem numquam alias ipsum. 
              Eveniet sint nam repellat non! Id ipsa maxime distinctio 
              atque accusantium reiciendis adipisci at saepe earum.</h5>
            
          </header>
          <div className="w3-padding">
            <p>Id ipsa maxime distinctio 
              atque accusantium reiciendis adipisci at saepe earum.</p>
            <p><a className="w3-btn w3-black" href="/w3css/default.asp">LEARN EVEN MORE</a></p>
          </div>
          <footer className="w3-container w3-theme-l1">
            <p>Don't forget to 'X' to return to home.</p>
            <br />
          </footer>
        </div>
      </div>
      
<div className="w3-row-padding w3-center w3-margin-top">
<div className="w3-third">
  <div className="w3-card w3-container w3-padding-top-48" style={{minHeight:"525px"}}>
  <h3 className='w3-text-black'>ONE PAGE DESIGN</h3>
  <p>6-Sections</p>
  <i className="far fa-file-alt
 w3-margin-bottom text-info" style={{fontSize:"120px"}}></i>
  <p>Navigation</p>
  <p>6-sections</p>
  <p>Fits any screen sizes</p>
  <p>PC Tablet and Mobile</p>
  <hr />
  <div className="btn-group w3-margin-bottom w3-margin-top">
   
                          <button type="button" className="btn btn-sm btn-info">
                            <i className="fas fa-edit"></i> Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                          >
                            <i className="fas fa-share"></i> Share
                          </button>
                        </div>
                        <br />
  </div>
</div>

<div className="w3-third">
  <div className="w3-card w3-container w3-padding-top-48" style={{minHeight:"525px"}}>
  <h3>MULTI-PAGE</h3>
  <p>6 pages</p>
  <i className="fa fa-desktop w3-margin-bottom w3-text-black text-info" style={{fontSize:"120px"}}></i>
  <p>Landing Page</p>
  <p>About Page</p>
  <p>Contact Page</p>
  <p>3-Additional Pages</p>
  <hr />
  <div className="btn-group w3-margin-bottom w3-margin-top">
                          <button type="button" className="btn btn-sm btn-info">
                            <i className="fas fa-edit"></i> Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                          >
                            <i className="fas fa-share"></i> Share
                          </button>
                        </div>
                        <br />
  </div>
</div>

<div className="w3-third w3-margin-bottom">
  <div className="w3-card w3-container w3-padding-top-48" style={{minHeight:"525px"}}>
  <h3>CUSTOM SOLUTIONS</h3><br/>
  <i className="fa fa-tools w3-margin-bottom w3-text-black text-info" style={{fontSize:"120px"}}></i>
  <p>Database Integration</p>
  <p>Auth Services</p>
  <p>Digital Forms</p>
  <p>Payment</p>
  <hr className='mt-4'/>
  <div className="btn-group w3-margin-bottom w3-margin-top">

                          <button type="button" className="btn btn-sm btn-info">
                            <i className="fas fa-edit"></i> Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                          >
                            <i className="fas fa-share"></i> Share
                          </button>
                        </div>
                        <br />
  </div>
</div>
</div>
</div>
    </div>
    </motion.div>
  );
}

export default TopNav;
