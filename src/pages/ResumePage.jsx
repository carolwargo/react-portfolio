import React from "react";
import { Link } from "react-router-dom";
import MeWhite from "../assets/images/MeWhite.png";
import { FaGoogle } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import { motion } from "framer-motion";
import ResumeDownload from "../assets/ResumeDownload.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function ResumePage() {

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
    className="resume "
    id="resume"
    
    >
    
      <div className="w3-margin-top w3-padding-top-32" style={{maxWidth:"1400px"}}>
      <div className="w3-display-container w3-padding w3-white">
  
      <div className="w3-row d-flex justify-content-center" >
    <div className="w3-col m8 flex-column w3-padding-24 w3-center">
        <h1 className='w3-text-black'>DIGITAL RESUME</h1>
<h4>View my skills, work experience, volunteer background, or download a physical copy of my resume.</h4>
</div>
</div>

</div>
<div className="w3-text-black w3-margin-top" >
{/*} The Grid*/}
<div className="w3-row-padding justify-content-center w3-white align-items-center ">

  {/*Left Column*/}
  <div className="w3-third flex-column justify-content-center align-items-center">
  
    <div className="w3-text-grey">
      <div className="w3-display-container">
      <img src={MeWhite} style={{ width: "100%", border: '4px solid #FF385C' }} alt="me" className="w3-hover-opacity-off" />
 <div className="w3-display-bottomleft w3-container w3-text-white">
          <h4 className="w3-margin-bottom" style={{color:'#FF000C'}}>Carol Wargo</h4>
        
        </div>
      </div>
      <br />
      <div className="w3-container">
      <div className="w3-container">
      <h6 className="w3-large text-black"><b>Contact Information</b></h6>
      <p className="mb-0">
                <i className="fa fa-briefcase w3-margin-right w3-text-black"></i>
              Full Stack Developer
              </p>

                   <p>
              <i className="fa fa-home w3-margin-right w3-text-black"></i>
                Huntingtown, MD
              </p>

<br/>
<div className="w3-content">
              <div className="row ">
              <div className="col-md-6">
              <a href="mail:carolwargo.dev@gmail.com" className="w3-text-black">
              <i className="fa fa-envelope  w3-margin-right w3-text-black"></i>
              
             Email
             </a>
             <br/>
              <a href="tel:+14437711726" className="w3-text-black">
              <i className="fa fa-phone w3-margin-Left  w3-margin-right  w3-text-black"></i>
             Phone
               </a>
            

</div>
<div className="col-md-6">          
<a href="https://github.com/carolwargo" className="w3-text-black">
                  <i className="fab fa-github w3-margin-right w3-text-black"></i>
                  Github
                </a>
              
             <br/>
                <a href="https://www.linkedin.com/in/carol-wargo-35021baa/" className="w3-text-black">
                  <i className="fab fa-linkedin w3-margin-right w3-text-black"></i>
                  LinkedIn
                </a>      
             </ div>
               </div>
                </div>   
               </div>
        <hr/>
        <p className="w3-text-black w3-margin-top w3-padding-small" style={{fontSize:'14px'}}>
          <b><i>
                  “I am a Full-Stack Software Developer and Graphic
                  Designer with a solid foundation in both frontend & backend
                  technologies, and a 20-year background in Business Analysis &
                  Project Management. I excel in leading and collaborating with
                  cross-functional teams, leveraging the latest tools and
                  frameworks to bring innovative ideas to life. From crafting
                  interactive User interfaces to designing efficient and secure
                  server-side solutions, I am dedicated to delivering a seamless
                  User experience while optimizing performance.”
                </i></b></p>
                <hr/>
       {/**Start Tech Skills*/}
        <h6 className="w3-large w3-margin-top w3-text-black">
          <i className="fa fa-asterisk fa-fw w3-margin-right">
            </i><b>Technical Skills</b></h6>
        <br />
        
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"90%"}}>90%</div>
        </div>
        <p>Front-End</p>

        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"75%"}}>75%</div>
        </div>
        <p>Back-End</p>

        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"85%"}}>85%</div>
        </div>
        <p>Graphic Design</p>

        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"80%"}}>
            <div className="w3-center w3-text-black">80%</div>
          </div>
        </div>
        <p>Digital Marketing</p>

        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"75%"}}>75%</div>
        </div>
        <p>E-Commerce</p>
     
 {/**End Tech Skills */}      
<hr className="w3-margin-top w3-margin-bottom"/>
      {/**Start Programming Languages */}
        <h6 className="w3-large w3-margin-top w3-text-theme w3-text-black"><i className="fa fa-globe fa-fw w3-margin-right w3-text-black"></i><b>Programming Languages</b></h6>
        <br/>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"95%"}}>95%</div>
        </div>
        <p>HTML</p>
     
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"90%"}}>90%</div>
        </div>
        <p>CSS</p>
      
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"75%"}}>75%</div>
        </div>
        <p>JavaScript</p>
     {/**End Programming Languages */}
     <hr className="w3-margin-top w3-margin-bottom"/>
         {/**Start Frameworks */}
        <h6 className="w3-large w3-margin-top w3-text-theme w3-text-black"><i className="fa fa-globe fa-fw w3-margin-right w3-text-black"></i><b>Frameworks</b></h6>
        <br/>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"85%"}}>85%</div>
        </div>
        <p>Front-End Frameworks- <span className="text-gray" style={{fontSize:'12px'}}><i> " <i className="fa fa-heart w3-text-pink"></i> React."</i></span></p>
        
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"75%"}}>75%</div>
        </div>
        <p>Back-End Frameworks</p>
      
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"90%"}}>90%</div>
        </div>
        <p>UI Frameworks</p>
      
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"70%"}}>70%</div>
        </div>
        <p className="w3-margin-bottom">Mobile App Frameworks</p>

<hr className="w3-margin-top w3-margin-bottom"/>

      <h5 className="w3-text-black w3-margin-top w3-margin-bottom "><i className="fas fa-desktop  w3-text-black"></i><b className="w3-margin-left"> Software Proficiencies</b></h5>
 <h6 className="w3-text-black w3-margin-left">
                  <FaGoogle className="fa-fw w3-margin-left w3-text-black" /> Google Workspace
                </h6>
                <h6 className="w3-text-black w3-margin-left">
                  <SiMicrosoftoffice className="fa-fw w3-margin-left w3-text-black" /> Microsoft Suite
                </h6>
                <h6 className="w3-text-black w3-margin-left">
                  <SiAdobecreativecloud className="fa-fw w3-margin-left w3-text-black" /> Adobe Creative
                  Cloud
                </h6>
                <br/>

                <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"80%"}}>
            <div className="w3-center w3-text-black">80%</div>
          </div>
        </div>
        <p className="w3-text-black">Collaborative Software</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"90%"}}>90%</div>
        </div>
        <p className="w3-text-black">Design Software</p>  
  
    </div>
    </div>
  <div className="w3-center w3-padding-large w3-padding-32 text-white shadow" style={{backgroundColor:'#FF385C'}}>
    <h5 className="w3-text-white w3-margin-bottom"><b className="w3-margin-left">Resume Download</b></h5>
    <p style={{fontSize:'14px'}}>For a physical copy, click the "Download Resume" button below to download a PDF of my resume.</p>
    <button className="w3-button w3-black w3-padding-large w3-round-xxlarge mt-2">
                <a
                  className="button text-white w3-hover-opacity "
                  id="download"
                  download 
                  href={ResumeDownload}
                >
                  <i className="fa fa-download-alt"></i> Download Resume
                </a>
              </button>

          </div>
    <br />
   

<br />
  {/*End Left Column*/}
  </div>

  {/*Right Column*/}
  <div className="w3-twothird flex-column justify-content-center align-items-center">
    
<div className="w3-content w3-light-gray w3-padding-large">
      <h2 className="w3-padding-16  text-black">
        <i className="fa fa-suitcase fa-fw  w3-xlarge w3-text-black">
          </i> WORK EXPERIENCE</h2>

        <h5 className=" w3-text-black"><b>Real Estate Agent / Investor</b></h5>
        <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw"></i> June 2003 - <span className="w3-tag w3-black w3-round">Current</span></h6>
        <p className="w3-text-black w3-margin-top"><i className="far fa-sticky-note fa-fw "></i><b> Duties</b></p>
      
      <ul>
      <li>Employ marketing strategies</li>
                    <li>Analyze current & past market trends</li>
      <li>Write, edit & negotiate contracts.</li>
                    <li>
                      Facilitate inspections, appraisals & legal matters.
                    </li>
                    <li>Oversee home staging and architectural Design.</li>
                  </ul>
      
     
        <ul>
        <li>Employ marketing strategies</li>
                      <li>Analyze current & past market trends</li>
        <li>Write, edit & negotiate contracts.</li>
                      <li>
                        Facilitate inspections, appraisals & legal matters.
                      </li>
                      <li>Oversee home staging and architectural Design.</li>
                    </ul>
    
    
      <hr/>
      <br />
    
        <h5><b>Freelance Design & Development</b></h5>
        <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw"></i> June 2021 - <span className="w3-tag w3-black w3-round">Current</span></h6>
        <p className="w3-text-black w3-margin-top"><i className="far fa-sticky-note fa-fw"></i><b> Duties</b></p>
       
        <ul>
          <li>Refactor and maintain sites to ensure a user-friendly UI.</li>
          <li>Develop and integrate e-commerce platforms.</li>
          <li>Implement design changes to improve user experience.</li>
          <li>Conduct audits to identify and fix any technical issues or broken links.</li>
          <li>Implement SEO strategies.</li>
 
          <li>Create engaging content.</li>
          <li>Monitor site security for threats & vulnerabilities.</li>
          <li>Collaborate with clients and cross-functional teams.</li>
          <li>Respond to client to address user inquiries and feedback.</li>
          <li>Develop digital surveys.</li>
          <li>Develop digital marketing strategies and social media management systems.</li>
</ul>
       
     
      <hr/>
      <br />
  
        <h5><b>Media Manager & Webmaster</b></h5>
        <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw"></i> Jun 2010 - Mar 2012</h6>
        <p className="w3-text-black w3-margin-top"><i className="far fa-sticky-note fa-fw"></i><b> Duties</b></p>
        <ul>
                      <li>Maintain site to ensure a user-friendly UI.</li>
                      <li>
                        Develop, refactor and Maintain e-commerce platforms.
                      </li>
                      <li>
                        Implement design changes to improve user experience.
                      </li>
                      <li>Create engaging content.</li>
      

<li>
                        Conduct audits to identify and fix any technical issues
                        or broken links.
                      </li>
                      <li>Implement SEO strategies.</li>
                      <li>
                        Monitor site security for threats & vulnerabilities.
                      </li>
                      <li>
                        Respond to client to address user inquiries and
                        feedback.
                      </li>
                      <li>Collaborate with board members, stakeholders and lawmakers</li>
                      <li>Address user inquiries and feedback.</li>
                    </ul>
    </div>
   
<br />
    <div className="w3-container w3-black w3-padding-16">
    <div className="w3-container">
      <h4 className=" w3-padding-16">
        <i className="fa fa-certificate w3-xlarge "></i> Education
          </h4>
          </div>
          <div className="w3-container">
        <h6><b>George Washington University</b></h6>
        <h6><i className="fa fa-calendar "></i> Jan. 2023- Aug. 2023</h6>
        <p>Full Stack Developer | UX Design Certificate</p>
      </div>
     
      <div className="w3-container">
        <h6><b>Real Estate License</b></h6>
        <h6>   <i className="fa fa-calendar "></i> June 2003</h6>
        <p>State of Maryland</p>
      </div>
    </div>
<br />
    <div className="w3-container w3-light-gray w3-padding-32">
   
      <h3 className="w3-text-black w3-margin-top">
       PRACTICES FOLLOWED
          </h3>
          <br />
        <h5 className="w3-margin-left"><b>Development Practices.</b></h5>
       
        <ul>
              <li>
                Effectively communicates to engage stakeholders throughout the
                development process.
              </li>
              <li>
                Articulates ideas, recommendations, and findings clearly and
                inclusively.
              </li>
              <li>Promotes and welcomes feedback from all stakeholders.</li>
              <li>
                Embraces continuous improvement through post-implementation
                evaluations and knowledge sharing.
              </li>
              <li>
                Adapts positively to change and proactively embraces new
                challenges.
              </li>
              <li>
                Applies critical thinking to analyze problems and propose
                innovative solutions.
              </li>
              <li>
                Inspires and motivates team members to achieve common goals.
              </li>
              <li>
                Negotiates and mediates to resolve conflicts and reach
                consensus.
              </li>
              <li>
                Delivers functional software focusing on meeting user needs and
                exceeding expectations.
              </li>
            </ul> 
            <br />
            <h5 className="w3-margin-left"><b>Interpersonal Practices.</b></h5>
        
        <ul>
                <li>
                  Foster customer and stakeholder engagement through effective
                  communication.
                </li>
                <li>
                  Articulate ideas, recommendations, and findings clearly and
                  inclusively.
                </li>
                <li>
                  Welcome feedback from stakeholders and promote an inclusive
                  feedback culture.
                </li>
                <li>
                  Embrace continuous improvement through post-implementation
                  evaluations and knowledge sharing.
                </li>
                <li>
                  Adapt positively to change and proactively tackle challenges.
                </li>
                <li>
                  Demonstrate critical thinking skills to analyze and solve
                  complex problems.
                </li>
                <li>Inspire and motivate team members towards common goals.</li>
                <li>
                  Proficient in negotiation and conflict resolution among
                  stakeholders.
                </li>
                <li>
                  Deliver functional software focused on meeting user needs and
                  exceeding expectations.
                </li>
              </ul>
      </div>
     
  {/*End Right Column*/}
  
  </div>
  
{/*} End Grid*/}
</div>
 
 

      <div className="w3-light-gray w3-margin-top
      ">
      <div className="w3-container w3-padding-64"> 
      <div className="row d-flex justify-content-center align-items-end ">
      <div className="w3-col m12 flex-column">
        <div className="w3-container w3-content text-center">
     <h2>SERVICE TO OTHERS</h2>
     <hr className="w3-opacity" />
     <h4>Community service has been my catalyst for personal growth, skill development, and exposure to new experiences. It offers me the chance to explore facets of life I wouldn't have encountered otherwise.</h4>

       <p>Listed below are some of the programs I have been involved in.</p>
        
          </div>
        </div>
        </div>
     <div className="row d-flex justify-content-center align-items-end ">
          <div className="w3-col m4 flex-column  mt-2">
          <ul>
            <li className="ml-3">
                <strong style={{color:'#FF385C'}}>MIRACLE LEAGUE (favorite):</strong> Assist with organized sports for children & young adults with disabilities.
              </li>
             
              <li className="ml-3">
                <strong style={{color:'#FF385C'}}>NATURE CENTER VOLUNTEER:</strong> Provide care for the animals, monitor health, collect data, and assist with educational programs.
              </li>
              <li className="ml-3">
                <strong style={{color:'#FF385C'}}>YOUTH CLUB SECRETARTY:</strong> Maintain website & database, facilitate meetings, coordinate registration, plan events and organize fundraising activities. 
              </li>
              <li className="ml-3">
                <strong style={{color:'#FF385C'}}>PUBLIC SCHOOLS VOLUNTEER:</strong> Assist with classroom activities, work with & support kids in need, plan & facilitate events.
              </li>
            </ul>
          </div>
          <div className="w3-col m4 flex-column ">
            <div>
            <ul>
            <li className="ml-3">
                <strong style={{color:'#FF385C'}}>UNDER ARMOUR GIVE-BACK:</strong> Participation includes: rebuilding schools, distributing school supplies, assisting with students & assemblies, and packing & shipping food items to ship overseas. 
              </li>
              <li className="ml-3">
                <strong style={{color:'#FF385C'}}>ABUSED PERSONS PROGRAM (1st-experience):</strong>{" "}
                Provide a range of services to support those affected by violence.
              </li>
           
              <li className="ml-3">
                <strong style={{color:'#FF385C'}}>FOOD PANTRY:</strong> Distributes food & household goods
                to those in need.
              </li>
              <li className="ml-3">
                <strong style={{color:'#FF385C'}}>FARMING 4HUNGER:</strong> Grows and distributes locally
                grown produce.
              </li>
            </ul>
            </div>
          </div>
         

</div>

</div>
</div>
</div>          

  <div className="w3-container w3-content text-center w3-padding-48 w3-margin-top w3-margin-bottom w3-padding-small">
    <h2  className="text-black">VIEW MY WORK</h2>
    <hr className="w3-opacity" />
   <h4 className="text-black">Take a peek at "My Work"! There's a whole world of changes and improvements happening behind the scenes. Thanks in advance for your patience!
       
        </h4>
        <br />
              <button className="w3-button w3-text-light-grey  w3-margin-right w3-round-xxlarge mt-2 w3-margin-bottom" 
              style={{backgroundColor:'#FF385C'}}>
              <Link to="/portfolio#portfolio"
                  className="button text-white"
                  onClick={scrollToTop}
                >
               View My Work
                </Link>
              </button>
              </div> 
  <div className="container w3-margin-top">
    <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#resume" style={{color:'#FF385C'}}>Back to top</a>
            </p>
          </div>
        </footer>
          </div>
     
  </div>
  </motion.div>
  );
}
