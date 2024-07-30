import React, {useState}from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import WomanReading from "../assets/images/WomanReading.jpg";
import Business from "../assets/images/About/Business.png";
import PostsShare from "../components/Portfolio/Blog/PostsShare";
import Posts from "../components/Portfolio/Blog/Posts";
import { Button } from "react-bootstrap";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCheckbox
} from "mdb-react-ui-kit";

const BlogPage = () => {

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


  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });
    return (
      <motion.div
    ref={ref}
    initial={{ y: -20, opacity: 0.5}}
    animate={inView ? { y: 0, opacity: 1 } : {}}
    exit={{ y: 20, opacity: 0.5 }}
    transition={{ duration: 0.8 }}    
    >
        <div className="blog" id="blog">
            <Alert variant="light" className="container-fluid shadow w3-margin-top">
            <div className="container-fluid w3-padding-64">
                <Alert.Heading className="w3-center w3-xlarge">MYBLOG.COM</Alert.Heading>
                <p className="w3-center px-3">
                    Welcome to my blog! Here you'll find a collection of articles and posts on a variety of topics, including web development, design, and more. Feel free to explore and leave a comment if you have any questions or feedback.
                </p>    <div className="text-center"> {/* Added text-center class here */}
      <Link to="/blog#blog">
        <Button className="btn-primary" size="sm"> 
         CALL TO ACTION
        </Button> 
      </Link>
    </div>

                </div>
            </Alert>
    <div > 
        <div className="">
        <div style={{ maxWidth: "1400px" }}>
          <div className="w3-row">
            {/*card start for bio, popular posts & tags*/}
            <div className="w3-col l4 w3-padding-large">
          
              {/*card start for bio*/}
              <div className="w3-container w3-card">
               
                {/*card-image-start for bio*/}
                <img
                  src={WomanReading}
                  alt="blog-profile"
                  style={{ width: "100%" }}
                  className="w3-margin-top w3-margin-bottom"
                ></img>{" "}
                {/*card-image-start for bio*/}
               
                  {/*card-container-start for bio*/}
                  <br></br>
                  <h5 className="w3-margin-top w3-margin-bottom" style={{ fontFamily: "sans-serif" }}>
                    <b>Your Name</b>
                  </h5>
                  <p className="mb-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit vel harum odio nihil maxime dolorem explicabo
                    blanditiis, optio eaque quasi vero quae nostrum voluptates.
                    Non natus minus omnis ipsa in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus adipisci obcaecati nobis officiis quo vitae ab ratione? Enim, voluptas. Perferendis beatae quas voluptatum numquam voluptatibus earum dolorum illum velit.{" "}
                  </p>
                </div>

              <hr />
            
                {/*card start for all popular posts elements*/}
                <div className="w3-container w3-card">
                  {/*container start header popular posts */}
                  <h4 className="w3-margin-top">Popular Posts</h4>
                {/*container end header popular posts */}
                <ul className="w3-ul w3-hoverable w3-white">
                  {/*list start popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-1 end popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-2 end popular posts */}
                  <li className="w3-padding-16">
                    {/*list-item-3 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br></br>
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-3 end popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-4 end popular posts */}
                </ul>
                {/*list end popular posts */}
         </div>
              {/*card end for all popular posts elements*/}
              <hr />
              <div className="w3-container w3-card">
           
                  {/*container start for tags Header*/}
                  <h4 className="w3-margin-top w3-margin-bottom">Tags</h4>
               
                {/*container end for tags Header*/}
                <div className="w3-container w3-white">
                  {" "}
                  {/*container start for tags*/}
                  <p className="w3-margin-top">
                    <span className="w3-tag w3-black w3-margin-bottom">
                      Travel
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      New York
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      London
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      IKEA
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      NORWAY
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      DIY
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Ideas
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Baby
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Family
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      News
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Clothing
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Shopping
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Sports
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Games
                    </span>
                  </p>
              </div>
              </div>
            </div>
            <div className="w3-col l8 s12 w3-padding-large">
              <div className="w3-card shadow">
              <Posts />
              </div>
              <hr />
              <div className="w3-card shadow">
              <PostsShare />
              </div>
            </div>
            {/*col end for posts iteration */}   
  </div>
  <br />

  {/**End About Section */}
<div className="w3-container w3-padding-48 w3-black" id="contact">
  <div className="row justify-content-center align-items-center">
  <div className="col-sm-12 col-md-2 col-lg-2" ></div>
    <div className="col-sm-12 col-md-5 col-lg-5" >
<div className="w3-content w3-container">
  
<h1 className="w3-border-light-grey w3-padding-16"><b>SUBSCRIBE</b></h1>

    <p> Join our community to unwrap exclusive content, dazzling updates, and behind-the-scenes secrets! Be the first to discover our latest news, captivating stories, and fabulous giveaways. Become part of our circle today! </p>


</div>
    </div>
    <div className="col-sm-12 col-md-3 col-lg-3 w3-margin-top">
      <div className="w3-container">
  <form action="/action_page.php" target="_blank">
    <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
    <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email"/>
    <div className="d-flex justify-content-end"> {/* Wrap the button in this div */}
      <button className="w3-button w3-white w3-section" type="submit">
        <i className="fa fa-paper-plane"></i> SUBMIT
      </button>
    </div>
  </form>
</div>
</div>
<div className="col-sm-12 col-md-2 col-lg-2"></div>

  </div>
  </div>
  
   {/*End Page Container */}
  
     <br />
        <div className="w3-container d-flex w3-white justify-content-around" >
  {/*container start for stats*/}
  <Alert variant="info" className="shadow w3-margin-top">
    <p style={{ fontSize: "1.5rem" }}>
      <b className="w3-margin-left"> DID YOU KNOW ?</b>
    </p>
    <ul className="text-left">
      <li>
        Social share buttons increase sharing by 700%. <span style={{fontSize:'12px'}}>(Source:
        ShareThis)</span>
      </li>
      <li>
      Content shared on social media content generates 8x more engagement than other channels.
      <span style={{fontSize:'12px'}}> (Source: QuickSprout)</span>
      </li>
      <li>
        Articles with share buttons get 7 times more mentions
        than those without. <span style={{fontSize:'12px'}}> (Source: Buffer)</span>
      </li>
      <li>
        Tweets with share buttons get 2.5 times more clicks than
        those without. <span style={{fontSize:'12px'}}> (Source: HubSpot)</span>
      </li>
      <li>
      Share Buttons should be prominently displayed near the
      content and be mobile friendly. <span style={{fontSize:'12px'}}></span>
      </li>
    </ul>
  </Alert>
  <div className="text-center w3-padding-bottom">
  <Link to="/page-samples">
            <p><i 
          className="fa fa-arrow-left  w3-hover-opacity" ></i>
           <span className=""><b> Return </b></span>
           </p>
              </Link>
              </div>
              
  </div>
          {/*row end for the whole page with exception of header & footer */}
  
        <br />

</div>         
</div>
</div>
<MDBFooter style={{backgroundColor:'#0188CB'}} className="w3-padding-64 text-white text-lg-left">
      <MDBContainer className="p-4 ">
      <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol md="6" size="12" className="mb-4 mb-md-0">
            <MDBContainer className="w3-card w3-padding-large w3-padding-24">
         
            <form onSubmit={handleSubmit}>
              <MDBRow className="d-flex justify-content-center ">
                <div className="w3-margin-bottom">
              <h5 >SIGN UP</h5>
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
                  <MDBCheckbox 
        wrapperClass='d-flex w3-margin-top link-offset-1-hover mt-4'
        id='form5Example3'
        label={
          <span>
            I agree to the <a href="/terms-and-conditions" className="text-decoration-underline text-light">terms & conditions</a>.
          </span>
        }
        defaultChecked
        required
        labelStyle={{ fontSize: '13px' }} 
      />
    
                </MDBCol>
                <MDBCol md="4" size="12" >
                  <MDBBtn outline color="light" type="submit">
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="6" size="12" className="mb-4 mb-md-0">
            <div
              className="text-center p-5"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >

              <p>
              Subscribe to receive real-time updates, exclusive offers, promotions, early access to new services products, be the first to know about upcoming events or our new innovative approaches: tricks, insights and more. 
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="d-flex justify-content-start"></MDBRow>
      </MDBContainer>
    </MDBFooter>

        </div>
        </motion.div>
    );
}

export default BlogPage;