import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LoginImage from '../assets/images/Portfolio/LoginImage.png';
import TableBasic from '../components/Portfolio/Tables/TableBasic.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';



function Forms() {
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
   
      {/* Side Navigation */}
      <nav className={`w3-sidebar w3-bar-block w3-card w3-animate-top w3-center w3-padding-64 ${isOpen ? 'w3-show' : 'w3-hide'}`} style={{ zIndex: '999', width: '100%', position: 'fixed', top: '0' }}>
        <h1 className="w3-xxxlarge ">Web Forms</h1>
        <button className="w3-bar-item w3-button w3-large" onClick={toggleSidebar}>Close <i className="fa fa-remove w3-large"></i></button>
        <a href="#common" className="w3-bar-item w3-button w3-xxlarge">Commonly Used Forms</a>
        <a href="#authentication" className="w3-bar-item w3-button w3-xxlarge">Authentication</a>
        <a href="#authorization" className="w3-bar-item w3-button w3-xxlarge">Authorization</a>
        <a href="#authorization" className="w3-bar-item w3-button w3-xxlarge"><i>More to come... Thanks for your patience!</i></a>
      </nav>

      {/* Header */}
      <header className="w3-container w3-theme w3-padding w3-light-gray" id="myHeader">
      <div className="w3-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
       
        <div className="w3-padding-64">
          <button className="w3-btn w3-xlarge w3-hover-light-grey shadow"  onClick={toggleSidebar} style={{ fontWeight: "900", backgroundColor:'#4580BF', color:'white' }}> <i className="fa fa-bars w3-xlarge w3-margin-right" ></i>Web Forms</button>
        </div>
      </div>
    </header>
    </div>

    <div style={{backgroundColor:'#4580BF'}}>
    <div className='w3-container w3-padding-small w3-padding-24'>
    <div className='text-white'>
      <div className="row d-flex w3-padding-16 w3-padding align-items-center">
  <div className="col-sm-12 col-md-6 col-lg-6 flex-column justify-content-center align-items-center">
    <div className="justify-content-center w3-hover-opacity">
    <img src={LoginImage} alt='login-form' style={{width:'100%'}} className='shadow'></img>
  </div>
</div>
<div className="col-sm-12 col-md-6 col-lg-6 w3-margin-top d-flex justify-content-center align-items-center">
<div className='container'>
<p style={{fontSize:'14px'}}>Web forms offer a powerful way to engage with your audience, collect data, and enhance user experience on your website.</p>
<p className=' w3-margin-left'> <b>BENEFITS OF WEB FORMS:</b></p>
<ol style={{fontSize:'14px'}}>
<li><b>Automated Processes: </b> Integration with databases and CRM systems reduces manual entry, streamlining 
workflows.
</li>
    <li><b>Data Collection:</b> Web forms collect contact details, feedback, survey responses, and more efficiently.
    </li>
<li><b>User Engagement & Convenience:</b> Boost engagement and easy information submission, saving time for users and businesses.</li>
<li><b>Analytics and Insights:</b> Track form submissions and user behavior to gain valuable user insights.</li>
<li><b>Lead Generation:</b> Capture user information to generate leads and build a potential customer database.</li>
</ol>
<br />
<div className='row'>
    <div id='common'>
        <p className=' w3-margin-left'> <b>LIST OF COMMONLY USED WEB FORMS:</b></p>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-6'>
        <ul style={{fontSize:'14px'}}>
            <li>Contact Forms</li>
            <li>Registration Forms</li>
            <li>Feedback Forms</li>
        </ul>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6'>
        <ul style={{fontSize:'14px'}}>
            <li>Subscription Forms</li>
            <li>Order Forms</li>
            <li>Survey Forms</li>
        </ul>
        </div>
</div>

</div>
  </div>
</div>
</div>   
</div>
<div className='w3-content w3-padding-24'>
<div className="row d-flex w3-padding w3-padding-32 justify-content-center align-items-center"
id='authentication'>
  <div className='col-sm-12 col-md-6 col-lg-6 flex-column justify-content-center text-white'>
    <h4>AUTHENTICATION</h4>

    <p className='text-white'>Authentication is the process of verifying the identity of a user, system, or application.</p>
    <p>Methods of authentication:</p>
  <ul>
    <li>Password-Based Authentication</li> 
    <li>Multi-Factor Authentication (MFA)</li>
    <li>Certificate-Based Authentication</li>
    <li>Token-Based Authentication</li>
</ul> 

<h6><i>An example of an authentication form is a sign up form.</i></h6>
</div>

  <div className='col-sm-12 col-md-6 col-lg-6 flex-column justify-content-center align-items-center'>
    <TableBasic/>
  </div>
  </div>



<div className="row d-flex w3-padding-32 w3-padding justify-content-center"
id='authorization'>
<div className='col-sm-12 col-md-6 col-lg-6 flex-column justify-content-center text-white'>
    <h4>AUTHORIZATION</h4>
  
    <p className='text-white'>Authorization defines permissions and privileges granted to users after successful authentication, ensuring that users can only access the resources they are allowed to use.</p>
 <p>Key components of authorization:</p>
  <ul>
    <li>Roles and Permissions </li> 
    <li>Access Control Lists (ACLs)</li>
    <li>Policy-Based Authorization</li>
    <li>Attribute-Based Access Control Authorization</li>
</ul> 

<h6><i>An example of an authorization form is a login form.</i></h6>
</div>
<div className='col-sm-12 col-md-6 col-lg-6'>
<TableBasic/>
</div>
</div>
</div>
</div>
<h5 className='text-center w3-padding-64' style={{color:'#4580BF'}}><i>more to come... Thanks for your patience!</i></h5>

    </motion.div>
  );
}

export default Forms;

