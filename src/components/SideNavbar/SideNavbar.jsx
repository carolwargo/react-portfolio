import React, { useState } from 'react';

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
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
            <button className="w3-btn w3-xlarge w3-black w3-hover-light-grey" onClick={() => document.getElementById('id01').style.display='block'} style={{fontWeight:"900"}}>LEARN W3.CSS</button>
          </div>
        </div>
      </header>

      {/* Modal */}
      <div id="id01" className="w3-modal">
        <div className="w3-modal-content w3-card-4 w3-animate-top">
          <header className="w3-container w3-theme-l1"> 
            <span onClick={() => document.getElementById('id01').style.display='none'} className="w3-button w3-display-topright">×</span>
            <h4>Oh snap! We just showed you a modal..</h4>
            <h5>Because we can <i className="fa fa-smile-o"></i></h5>
          </header>
          <div className="w3-padding">
            <p>Cool huh? Ok, enough teasing around..</p>
            <p>Go to our <a className="w3-btn" href="/w3css/default.asp">W3.CSS Tutorial</a> to learn more!</p>
          </div>
          <footer className="w3-container w3-theme-l1">
            <p>Modal footer</p>
          </footer>
        </div>
      </div>
      
<div className="w3-row-padding w3-center w3-margin-top">
<div className="w3-third">
  <div className="w3-card w3-container w3-padding-top-48" style={{minHeight:"525px"}}>
  <h3 className='w3-text-black'>One Page</h3>
  <p>6-Sections</p>
  <i className="far fa-file-alt
 w3-margin-bottom w3-text-black" style={{fontSize:"120px"}}></i>
  <p>Navigation</p>
  <p>6-sections</p>
  <p>Fits any screen sizes</p>
  <p>PC Tablet and Mobile</p>
  <div className="btn-group ">
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
  <h3>Multi-Page</h3>
  <p>6 pages</p>
  <i className="fa fa-desktop w3-margin-bottom w3-text-black" style={{fontSize:"120px"}}></i>
  <p>Landing Page</p>
  <p>About Page</p>
  <p>Contact Page</p>
  <p>3-Additional Pages</p>
  <div className="btn-group w3-margin-bottom">
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
  <h3>Custom Solutions</h3><br/>
  <i className="fa fa-tools w3-margin-bottom w3-text-black" style={{fontSize:"120px"}}></i>
  <p>Database Integration</p>
  <p>Auth Services</p>
  <p>Digital Forms</p>
  <p>Payment</p>
  <div className="btn-group w3-margin-top">
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
  );
}

export default TopNav;
