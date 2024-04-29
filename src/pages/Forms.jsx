import React, { useState } from 'react';
import emailjs from "emailjs-com";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCheckbox
} from "mdb-react-ui-kit";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Login  from '../components/Portfolio/Forms/Login.jsx';
import SignUp  from '../components/Portfolio/Forms/Signup.jsx';
import LoginBW from '../assets/images/Portfolio/LoginBW.png'
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};



function Forms() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using Email.js
    const templateParams = {
      email_address: email,
    };

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      templateParams,
      "YOUR_USER_ID"
    )
    .then((response) => {
      console.log("Email sent successfully!", response);
      alert("Thank you for subscribing!");
    })
    .catch((error) => {
      console.error("Email failed to send!", error);
      alert("Oops! Something went wrong. Please try again.");
    });

    // Reset form
    setEmail("");
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}
    className="forms"
id='forms'
    style={{fontFamily:'proxima-nova'}}
    >
    <div className='forms w3-padding-top-48' id='forms'>
      {/* Side Navigation */}
      <nav className={`w3-sidebar w3-bar-block w3-card w3-animate-top w3-center w3-padding-64 ${isOpen ? 'w3-show' : 'w3-hide'}`} style={{ zIndex: '999', width: '100%', position: 'fixed', top: '0' }}>
        <h1 className="w3-xxxlarge ">Web Forms</h1>
        <button className="w3-bar-item w3-button w3-large" onClick={toggleSidebar}>Close <i className="fa fa-remove w3-large"></i></button>
        <a href="#common" className="w3-bar-item w3-button w3-xxlarge">Commonly Used Forms</a>
        <a href="#authentication" className="w3-bar-item w3-button w3-xxlarge">Authentication</a>
        <a href="#authorization" className="w3-bar-item w3-button w3-xxlarge">Authorization</a>
        <a href="#subscribe" className="w3-bar-item w3-button w3-xxlarge"><i>Subscription</i></a>
      </nav>

      {/* Header */}
      <header className="w3-container w3-theme w3-padding w3-padding-24 w3-black" id="myHeader">
      <div className="w3-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
       
        <div className="w3-padding-64">
          <button className="w3-btn w3-xlarge w3-hover-light-grey shadow w3-round-xxlarge"  onClick={toggleSidebar} style={{ fontWeight: "900", backgroundColor:'#FF385C', color:'white' }}> <i className="fa fa-bars w3-xlarge w3-margin-right" ></i>Web Forms</button>
        </div>
      </div>
    </header>
    </div>

<div className='w3-content w3-container'>
<div className='w3-padding-48'>
  <h2 className='text-center text-black'>Web forms offer a powerful way to engage with your audience, collect data, and enhance user experience on your website.</h2>
  </div>
  {/**Start webforms intro*/}
<div className="row d-flex w3-padding-32 justify-content-center align-items-center"
id='web-components'>
<div className='col-sm-12 col-md-6 col-lg-6 flex-column justify-content-center text-black px-2'>
<img src={LoginBW} alt='login-form' style={{width:'100%',border: '2px solid #FF385C' }} className='shadow  w3-round-xxlarge'></img>
</div>
<div className='col-sm-12 col-md-6 col-lg-6 flex-column justify-content-center align-items-center text-black w3-padding-large'>
<h4>BENEFITS OF WEB FORMS</h4>
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
<p >Commonly utilized web forms include contact forms, registration forms, feedback forms, subscription forms, order forms, and survey forms.</p>
</div>
</div>
</div>
<br />
 {/**End webforms intro*/}

 {/**Start authentication*/}
 <div className='w3-light-gray'>
  <div className='w3-content w3-container w3-padding-48 justify-content-center align-items-center'>
  <h2 className='w3-margin-top' >The gatekeepers that verify the identity of users and determine what actions or resources they are allowed to access within a system. </h2>
  <div className="row d-flex justify-content-center align-items-center w3-padding-48"
id='authentication'>

<div className='col-sm-12 col-md-6 col-lg-6 flex-column justify-content-center text-black w3-padding-large'>
<h4 className='w3-margin-bottom'>AUTHENTICATION</h4>

<p className='text-black'>Authentication is the process of verifying the identity of a user, system, or application.</p>
<p>Methods of authentication:</p>
<ul>
<li>Password-Based Authentication</li> 
<li>Multi-Factor Authentication (MFA)</li>
<li>Certificate-Based Authentication</li>
<li>Token-Based Authentication</li>
</ul> 

<h6><i>An example of an authentication form is a sign up form.</i></h6>
</div>
<div className='col-sm-12 col-md-6 col-lg-6 w3-padding-small justify-content-center'>
<SignUp/>
</div>
</div>
<br />
 {/**End authentication*/}

  {/**Start authorization */}

<div className="row d-flex justify-content-center align-items-center w3-padding-48"
id='authorization'>
<div className='col-sm-12 col-md-6 col-lg-6 flex-column justify-content-center align-items-center text-black w3-padding-large'>
    <h4 className='w3-margin-bottom'>AUTHORIZATION</h4>
    <p className='text-black'>Authorization defines permissions and privileges granted to users after successful authentication, ensuring that users can only access the resources they are allowed to use.</p>
 <p>Key components of authorization:</p>
  <ul>
    <li>Roles and Permissions </li> 
    <li>Access Control Lists (ACLs)</li>
    <li>Policy-Based Authorization</li>
    <li>Attribute-Based Access Control Authorization</li>
</ul> 

<h6><i>An example of an authorization form is a login form.</i></h6>
</div>
<div className='col-sm-12 col-md-6 col-lg-6 w3-padding-small justify-content-center align-items-center'>
<Login/>
</div>
</div>
</div>
</div>
<br />
{/**End authorization*/}

{/**End container*/}


  {/**Start  Subscription No container*/}
 <MDBFooter  className="w3-padding-64 text-black text-lg-left">
 <MDBContainer className="p-4">

  <MDBContainer className="p-4">
 <MDBRow className="d-flex justify-content-center align-items-center">
 <MDBCol md="6" size="6" className="mb-4 mb-md-0">
 <h2>Subscription forms are used to capture a user's contact information. </h2>
  <p> By submitting the form, users consent to receive communications from the website or service. A way 
  to build and maintain a mailing list of interested users or customers.</p>
  </MDBCol>
          <MDBCol md="6" size="12" className="mb-4 mb-md-0">
            <MDBContainer className="w3-card w3-padding-large w3-padding-24 w3-black w3-round-xxlarge" >
         
            <form onSubmit={handleSubmit}>
              <MDBRow className="d-flex justify-content-center ">
                <div className="w3-margin-bottom">
              <h5 className='text-white'>SUBSCRIBE</h5>
              </div>
                <MDBCol md="8" size="12" >
                  <MDBInput
                    type="email"
                    id="user_email"
                    label="Email address"
                    contrast
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <MDBCheckbox className='w3-white border-white'
        wrapperClass='d-flex w3-margin-top link-offset-1-hover mt-4'
        id='form5Example3'
        label={
          <span>
            I agree to the <a href="/terms-and-conditions" className="text-decoration-underline text-light">terms & conditions</a>.
          </span>
        }
        defaultChecked
        required
        labelStyle={{ fontSize: '13px', color:'white' }} 
      />
    
                </MDBCol>
                <MDBCol md="4" size="12" >
                  <MDBBtn color="light" type="submit">
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
            </MDBContainer>
          </MDBCol>
        
        </MDBRow>
   </ MDBContainer>
        <div className='container'>
    
      <div className="row d-flex w3-padding-36 justify-content-center w3-padding-top-64 w3-margin-top"
id='subscription'>   
   <div className='text-center w3-padding-large mb-5'>
          <h3>The benefit of regularly engaging with subscribers through targeted email campaigns 
  can yield tangible benefits across multiple areas of your business.</h3>
          </div>

     <div className='col-sm-12 col-md-3 col-lg-3 flex-column justify-content-center text-black w3-padding-large'>
     <Card style={{ width: '18rem', backgroundColor:'#FF385C', color:'white' }} >
      <Card.Body>
        <Card.Text>
        B2B marketers report that email is the most effective channel for generating leads (HubSpot).
According to OptinMonster, welcome emails have an average open rate of 82%.
 </Card.Text>
      </Card.Body>
    </Card>
     </div>
   <div className='col-sm-12 col-md-3 col-lg-3 flex-column justify-content-center text-black w3-padding-large'>
   <Card style={{ width: '18rem', backgroundColor:'#FF385C', color:'white' }} >
      <Card.Body>
        <Card.Text>
        "80% of retail professionals cite email marketing as their top driver of customer retention. Loyal customers can be worth up to 10 times their initial purchase, as per Invesp."
</Card.Text>
      </Card.Body>
    </Card>
   </div>
      <div className='col-sm-12 col-md-3 col-lg-3 flex-column justify-content-center text-black w3-padding-large'>
      <Card style={{ width: '18rem', backgroundColor:'#FF385C', color:'white' }} >
      <Card.Body>
        <Card.Text>
        Email marketing has a high (ROI), averaging around $42 for every dollar spent (DMA).
Automated email campaigns generate 320% more revenue than non-automated ones. 
        </Card.Text>
      </Card.Body>
    </Card>
 </div>
    <div className='col-sm-12 col-md-3 col-lg-3 flex-column justify-content-center text-black w3-padding-large'>
    <Card style={{ width: '18rem', backgroundColor:'#FF385C', color:'white' }} >
      <Card.Body>
        <Card.Text>
        Segmented email campaigns drive a 760% increase in revenue (Campaign Monitor).
Personalized subject lines increase open rates by 50% (Yes Marketing). </Card.Text>
      </Card.Body>
    </Card>
</div>
</div>
</div>

      </MDBContainer>
      <div className='text-center w3-padding-24'>
      <h5 className='text-center w3-padding-24' ><i>more to come... Thanks for your patience!</i></h5>
    
      <button className="w3-button w3-text-light-grey w3-padding w3-round-xxlarge mt-2" 
              style={{backgroundColor:'black'}}>
              <Link to="/portfolio#portfolio"
                  className="button text-white"
                  onClick={scrollToTop}
                >
               Back To Portfolio
                </Link>
              </button>
              </div>
    </MDBFooter>
  <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#forms" style={{color:'#FF385C'}}>Back to top</a>
            </p>
          </div>
        </footer>
    <br />
<br />



    </motion.div>
  );
}

export default Forms;

