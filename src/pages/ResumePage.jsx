import React from "react";
import { Link } from "react-router-dom";
import MeWhite from "../assets/images/MeWhite.png";
import { FaGoogle } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import Alert from "react-bootstrap/Alert";

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
    <div className="resume w3-light-gray" id="resume">
      <div className="w3-content w3-margin-top w3-padding-64 w3-light-gray" style={{maxWidth:"1400px"}}>
      <div className="w3-display-container w3-padding">
      <div className="w3-white w3-text-grey w3-card w3-padding">
      <div className="w3-row d-flex justify-content-center" >
    <div className="w3-col m12 flex-column w3-padding-8">
        <h1 className='w3-text-light-blue'>DIGITAL RESUME</h1>

<p>View my skills, work experience, volunteer background and more, or download a physical copy of my resume.</p>
</div>


</div>
</div>
</div>
{/*} The Grid*/}
<div className="w3-row-padding justify-content-center align-items-center">

  {/*Left Column*/}
  <div className="w3-third ">
  
    <div className="w3-white w3-text-grey w3-card-4">
      <div className="w3-display-container">
        <img src={MeWhite} style={{width:"100%"}} alt="me" className="w3-opacity w3-hover-opacity-off"/>
        <div className="w3-display-bottomleft w3-container w3-text-light-blue">
          <h4>Carol Wargo</h4>
        </div>
      </div>
      <br />
      <div className="w3-container">
        
      <h6 className="w3-large w3-margin-top "><b>Contact Information</b></h6>
      <p>
                <i className="fa fa-briefcase fa-fw w3-margin-right w3-text-light-blue"></i>
              Full Stack Developer
              </p>

                   <p>
              <i className="fa fa-home fa-fw w3-margin-right w3-text-light-blue"></i>
                Huntingtown, MD
              </p>

<br/>
              <div className="row ">
              <div className="col-md-6">
              <a href="mail:carolwargo.dev@gmail.com">
              <i className="fa fa-envelope fa-fw  w3-margin-right w3-text-light-blue"></i>
              
             Email
             </a>
             <br/>
              <a href="tel:+14437711726">
              <i className="fa fa-phone fa-fw w3-margin-Left  w3-margin-right  w3-text-light-blue"></i>
             Phone
               </a>
            

</div>
<div className="col-md-6">          
<a href="https://github.com/carolwargo">
                  <i className="fab fa-github fa-fw w3-margin-right w3-text-light-blue"></i>
                  Github
                </a>
              
             <br/>
                <a href="https://www.linkedin.com/in/carol-wargo-35021baa/">
                  <i className="fab fa-linkedin fa-fw w3-margin-right w3-text-light-blue"></i>
                  LinkedIn
                </a>      
             
               </div>
                </div>   
               
        <hr/>
        <p className="w3-text-gray w3-margin-top" style={{fontSize:'14px'}}><i className="fas fa-feather-alt fa-fw"></i><b>    <i>
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
        <h6 className="w3-large w3-margin-top"><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-light-blue"></i><b>Technical Skills</b></h6>
        <br />
        
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"90%"}}>90%</div>
        </div>
        <p>Front-End</p>

        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"75%"}}>75%</div>
        </div>
        <p>Back-End</p>

        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"85%"}}>85%</div>
        </div>
        <p>Graphic Design</p>

        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"80%"}}>
            <div className="w3-center w3-text-black">80%</div>
          </div>
        </div>
        <p>Digital Marketing</p>

        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"75%"}}>75%</div>
        </div>
        <p>E-Commerce</p>
     
 {/**End Tech Skills */}      
<hr className="w3-margin-top w3-margin-bottom"/>
      {/**Start Programming Languages */}
        <h6 className="w3-large w3-margin-top w3-text-theme"><i className="fa fa-globe fa-fw w3-margin-right w3-text-light-blue"></i><b>Programming Languages</b></h6>
        <br/>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"95%"}}>95%</div>
        </div>
        <p>HTML</p>
     
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"90%"}}>90%</div>
        </div>
        <p>CSS</p>
      
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"75%"}}>75%</div>
        </div>
        <p>JavaScript</p>
     {/**End Programming Languages */}
     <hr className="w3-margin-top w3-margin-bottom"/>
         {/**Start Frameworks */}
        <h6 className="w3-large w3-margin-top w3-text-theme"><i className="fa fa-globe fa-fw w3-margin-right w3-text-light-blue"></i><b>Frameworks</b></h6>
        <br/>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"85%"}}>85%</div>
        </div>
        <p>Front-End Frameworks- <span className="text-gray" style={{fontSize:'12px'}}><i> " <i className="fa fa-heart w3-text-pink"></i> React."</i></span></p>
        
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"75%"}}>75%</div>
        </div>
        <p>Back-End Frameworks</p>
      
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"90%"}}>90%</div>
        </div>
        <p>UI Frameworks</p>
      
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"70%"}}>70%</div>
        </div>
        <p className="w3-margin-bottom">Mobile App Frameworks</p>

<hr className="w3-margin-top w3-margin-bottom"/>

      <h5 className="w3-text-gray w3-margin-top w3-margin-bottom "><i className="fas fa-desktop  w3-text-light-blue"></i><b className="w3-margin-left"> Software Proficiencies</b></h5>
 <h6 className="w3-text-gray w3-margin-left">
                  <FaGoogle className="fa-fw w3-margin-left w3-text-light-blue" /> Google Workspace
                </h6>
                <h6 className="w3-text-gray w3-margin-left">
                  <SiMicrosoftoffice className="fa-fw w3-margin-left w3-text-light-blue" /> Microsoft Suite
                </h6>
                <h6 className="w3-text-gray w3-margin-left">
                  <SiAdobecreativecloud className="fa-fw w3-margin-left w3-text-light-blue" /> Adobe Creative
                  Cloud
                </h6>
                <br/>

                <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"80%"}}>
            <div className="w3-center w3-text-black">80%</div>
          </div>
        </div>
        <p>Collaborative Software</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-light-blue" style={{width:"90%"}}>90%</div>
        </div>
        <p>Design Software</p>
      
        <hr />
    </div>
 
  <div className="w3-center w3-padding-large w3-padding-8">
    <h5 className="w3-text-gray w3-margin-bottom"><i className="fas fa-download w3-text-light-blue"></i><b className="w3-margin-left">Resume Download</b></h5>
   
    <p style={{fontSize:'14px'}}>For a physical copy, click the "Download Resume" button below to download a PDF of my resume.</p>
            <button className="w3-button w3-light-grey w3-padding-large">
  <a
    className="button text-black"
    download 
    href={ResumeDownload}
  >
    <i className="fa fa-download"></i> Download Resume
  </a>
</button>

          </div>
    <br />
    </div>

<br />
  {/*End Left Column*/}
  </div>

  {/*Right Column*/}
  <div className="w3-twothird">



  
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h4 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw  w3-xlarge w3-text-light-blue"></i> Work Experience</h4>
      <div className="w3-container">
       
        <h6 className="w3-opacity"><b>Real Estate Agent / Investor</b></h6>
        <h6 className="w3-text-light-blue"><i className="fa fa-calendar fa-fw"></i> June 2003 - <span className="w3-tag w3-light-blue w3-round">Current</span></h6>
        <p className="w3-text-gray w3-margin-top"><i className="far fa-sticky-note fa-fw "></i><b> Duties</b></p>
      
      <ul>
      <li>Employ marketing strategies</li>
                    <li>Analyze current & past market trends</li>
      <li>Write, edit & negotiate contracts.</li>
                    <li>
                      Facilitate inspections, appraisals & legal matters.
                    </li>
                    <li>Oversee home staging and architectural Design.</li>
                  </ul>
      
     
        <ul className="">
        <li>Employ marketing strategies</li>
                      <li>Analyze current & past market trends</li>
        <li>Write, edit & negotiate contracts.</li>
                      <li>
                        Facilitate inspections, appraisals & legal matters.
                      </li>
                      <li>Oversee home staging and architectural Design.</li>
                    </ul>
    
      </div>
      <hr/>
      <br />
      <div className="w3-container">
    
        <h6 className="w3-opacity"><b>Freelance Design & Development</b></h6>
        <h6 className="w3-text-light-blue"><i className="fa fa-calendar fa-fw"></i> June 2021 - <span className="w3-tag w3-light-blue w3-round">Current</span></h6>
        <p className="w3-text-gray w3-margin-top"><i className="far fa-sticky-note fa-fw"></i><b> Duties</b></p>
       
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
       
      </div>
      <hr/>
      <br />
      <div className="w3-container">
        <h6 className="w3-opacity"><b>Media Manager & Webmaster</b></h6>
        <h6 className="w3-text-light-blue"><i className="fa fa-calendar fa-fw"></i> Jun 2010 - Mar 2012</h6>
        <p className="w3-text-gray w3-margin-top"><i className="far fa-sticky-note fa-fw"></i><b> Duties</b></p>
        <ul className="">
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
    </div>
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h4 className="w3-text-grey w3-padding-16">
        <i className="fa fa-certificate fa-fw  w3-xlarge w3-text-light-blue"></i> Education
          </h4>
          <div className="w3-container">
        <h6 className="w3-opacity"><b>George Washington University</b></h6>
        <h6 className="w3-text-light-blue"><i className="fa fa-calendar fa-fw "></i> Jan. 2023- Aug. 2023</h6>
        <p>Full Stack Developer | UX Design Certificate</p>
      </div>
     
      <div className="w3-container">
        <h6 className="w3-opacity"><b>Real Estate License</b></h6>
        <h6 className="w3-text-light-blue">   <i className="fa fa-calendar fa-fw "></i> June 2003</h6>
        <p>State of Maryland</p>
      </div>
    </div>

    <div className="w3-container w3-card w3-white">
      <h4 className="w3-text-grey  w3-margin-top">
        <i className="fas fa-user-tie fa-fw  w3-xlarge w3-text-light-blue"></i> Professional Practices
          </h4>

          <div className="w3-container w3-padding-16">
        <h6 className="w3-opacity"><b>Best Practices Followed.</b></h6>
        <h6 className="w3-text-light-blue"><i className="fa fa-cog fa-fw "></i> Development Practices</h6>
        <br />
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
      </div>

      <div className="w3-container w3-padding-16">
        <h6 className="w3-opacity"><b>Best Practices Followed.</b></h6>
        <h6 className="w3-text-light-blue "><i className="fas fa-handshake fa-fw "></i> Interpersonal Practices</h6>
         <br />
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
      </div>
  {/*End Right Column*/}
  
  </div>
  
{/*} End Grid*/}
</div>

{/** 

      <div className="technical-skills-div d-flex flex-column bg-black text-white w3-padding-48">
       
        <br />
        <h1
          className="technical-skills text-light text-center"
          id="technical-skills"
        >
          TECHNICAL SKILLS
        </h1>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              DESIGN & COLLABORATION TOOLS
              <img
                src={Design}
                alt="Design"
                className="img-fluid"
                style={{ width: "130%"}}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              VERSION CONTROL & IDE
              <img
                src={VCIDE}
                alt="VCIDE"
                className="img-fluid"
                style={{ width: "130%"}}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              CORE TECHNOLOGIES
              <img
                src={Core}
                alt="Core"
                className="img-fluid"
                style={{ width: "130%"}}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              FRONT END DEVELOPMENT
              <img
                src={Front}
                alt="Front"
                className="img-fluid"
                style={{ width: "130%"}}
              />
            </TimelineContent>
          </TimelineItem>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                BACK END DEVELOPMENT
                <img
                  src={Back}
                  alt="Back"
                  className="img-fluid"
                  style={{ width: "130%"}}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                DATABASES
                <br></br>
                <img
                  src={DB}
                  alt="DB"
                  className="img-fluid"
                  style={{ width: "150%"}}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                PACKAGE MANAGERS
                <img
                  src={Package}
                  alt="Package"
                  className="img-fluid"
                  style={{ width: "130%"}}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                BUILD & TEST TOOLS
                <img
                  src={BuildTest}
                  alt="BuildTest"
                  className="img-fluid"
                  style={{ width: "130%"}}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                API & QUERY LANGUAGE
                <img
                  src={APIQ}
                  alt="APIQ"
                  className="img-fluid"
                  style={{ width: "130%"}}
                />
              </TimelineContent>
            </TimelineItem>
            <br />
            <br />
            <TimelineItem>
              <TimelineOppositeContent color="text.light" id="education">
                <h6 className="text-white">
                  Certificate of Full Stack Web Development
                </h6>
                <h6 className="text-white">
                  George Washington University (July 2023)
                </h6>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent>
                <h3>EDUCATION</h3>
              </TimelineContent>
            </TimelineItem>
            <div className="d-flex flex-row justify-content-center">
          <div className="">
            <p className="text-white">DOWNLOAD A COPY OF MY RESUME</p>
           
            <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
  <a
    className="button text-black"
    download 
    href={ResumeDownload}
  >
    <i className="fa fa-download"></i> Download Resume
  </a>
</button>

          </div>
          </div>
          </Timeline>
        </Timeline>
   
        </div>
  */}
                  
  </div>
  <div className="container w3-margin-top">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="text-center w3-padding-16">
          <Alert variant="warning" className="shadow">
      <Alert.Heading>
        <i className="fa fa-exclamation-triangle"></i> WARNING
      </Alert.Heading>
      <p>I am currently adding to my portfolio. <br />Thanks in advance for your patience!</p>
      <hr className="text-warning" />
      <Alert.Link as={Link} to='/portfolio#portfolio' onClick={scrollToTop} className="w3-hover-opacity w3-hover-sepia">
        <p><u>Follow the link to view my portfolio</u>
          <i className="fa fa-arrow-right w3-hover-opacity w3-hover-sepia w3-margin-left"></i>
        </p>
      </Alert.Link>
    </Alert>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
    <footer className="text-muted py-5">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#resume">Back to top</a>
            </p>
          </div>
        </footer>
  </div>
  );
}
