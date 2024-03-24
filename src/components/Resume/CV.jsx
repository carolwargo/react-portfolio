import React from "react";
import MeWhite from "../../assets/images/MeWhite.png";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import { SiAdobecreativecloud } from "react-icons/si";
import { SiMicrosoftoffice } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";

const CV = () => {

    return (

        <div className="w3-content w3-margin-top" style={{maxWidth:"1400px"}}>
                
                <div className="w3-row-padding w3-padding-32">
               {/** <h1 className="text-center w3-margin-top w3-margin-bottom"
          style={{
            fontSize: "3rem",
            textShadow: "0px 0px 14px #00ffff",
          }}
        >
          <b>CW</b><span className="fw-light">RESUME</span>
        </h1>
        */} 
                <div className="w3-third">
                <div className="w3-white w3-text-grey w3-card-4">
<div className="w3-display-container">
<img src={MeWhite} alt="me" style={{ maxWidth: "100%" }} />
  </div>
<div className="container w3-padding-16">
<h2><i className="fa-fw w3-margin-right w3-xxlarge w3-text-black"></i> CAROL WARGO</h2>
<div className="w3-container">
          <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-black"></i>Software Developer and Web Designer</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-black"></i>Huntingtown, MD</p>
          <p><a href="mail:carolwargo.dev@gmail.com"><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-black"></i>Email</a></p>
          <p><a href="tel:+14437711726"><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-black"></i>443-771-1726</a></p>
<hr/>
</div>
</div>
          {/**Start statement*/}
          <div className="w3-container w3-white w3-padding-8">
        <h3 className="w3-text-grey w3-margin-left"><i className="fa fa-user fa-fw w3-xlarge w3-text-black"></i> Professional Statement</h3>
        <div className="w3-container">
        <p><i>“I am a passionate Full-Stack Software Developer and Graphic Designer with a solid foundation in both frontend & backend technologies, and a 20-year background in Business Analysis & Project Management. I excel in leading and collaborating with cross-functional teams, leveraging the latest tools and frameworks to bring innovative ideas to life. From crafting interactive User interfaces to designing efficient and secure server-side solutions, I am dedicated to delivering a seamless User experience while optimizing performance.” </i></p>
          <hr/>
        </div>
      
      </div>
      {/**End statement*/}
{/**Start skills */}
<div className="w3-container w3-white w3-padding-8 ">
        <h3 className="w3-text-grey w3-margin-left"><i className="fas fa-keyboard fa-fw w3-xlarge w3-text-black"></i> Skills</h3>
        <div className="w3-container">

              <div className="w3-light-grey shadow">
                <div className="w3-container w3-black w3-center shadow" style={{width:"85%"}}>85%</div>
              </div> 
        <p className="w3-wide text-black" style={{fontSize:'1rem', paddingTop:'.25rem'}}><GiGears className="justify-content-center" style={{fontSize:'1.5rem'}}/> Core Technologies</p>
<div className="w3-light-grey shadow">
    <div className="w3-container w3-black w3-center" style= {{width:"95%"}}>95%</div>
  </div>
  <p className="w3-wide text-black" style={{fontSize:'1rem', paddingTop:'.25rem'}}><FaLaptopCode className="justify-content-center" style={{fontSize:'1.5rem'}}/> Front-End Design</p>
  
 <div className="w3-light-grey shadow">
    <div className="w3-container w3-black w3-center" style= {{width:"80%"}}>80%</div>
  </div>
  <p className="w3-wide text-black" style={{fontSize:'1rem', paddingTop:'.25rem'}}><BsDatabaseLock  className="justify-content-center" style={{fontSize:'1.5rem'}}/> Server-Side Development</p>

 <div className="w3-light-grey shadow">
    <div className="w3-container  w3-black w3-center" style= {{width:"75%"}}>75%</div>
  </div>
  <p className="w3-wide text-black" style={{fontSize:'1rem', paddingTop:'.25rem'}}><HiOutlinePuzzlePiece className="justify-content-center" style={{fontSize:'1.5rem'}}/> Full-Stack Integration</p>
 
<div className="w3-light-grey shadow">
    <div className="w3-container w3-black w3-center" style= {{width:"75%"}}>75%</div>
  </div>
  <p className="w3-wide text-black" style={{fontSize:'1rem', paddingTop:'.25rem'}}><AiFillDatabase className="justify-content-center" style={{fontSize:'1.5rem'}}/> Database Implementation</p>

</div>
          </div>
          <hr/>
             {/**end skills */}
          {/**start software */}
          <div className="w3-container w3-white w3-padding-8">
        <h3 className="w3-text-grey w3-margin-left"><i className="fa fa-cog fa-fw w3-margin-right w3-xlarge w3-text-black"></i> Software</h3>
        <div className="w3-container w3-margin-left">
        <h6 className="w3-text-black"><SiAdobecreativecloud className="fa-fw "/> Adobe Creative Cloud</h6>
        <h6 className="w3-text-black"><SiMicrosoftoffice className="fa-fw "/> Microsoft Suite</h6>
        <h6 className="w3-text-black"><FaGoogle className="fa-fw "/> Google Workspace</h6>
        </div>
      </div>
      <hr />
 
     
{/**End software */}
          {/**Start education */}
<div className="w3-container w3-white w3-padding-8">
        <h3 className="w3-text-grey w3-margin-left"><i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xlarge w3-text-black"></i>Education</h3>
        <div className="w3-container ">
          <h5 className="w3-opacity"><b>George Washington University</b></h5>
          <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right"></i>July, 2023</h6>
          <p>Full Stack Development | UX Design Certificate</p>
          <hr/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Real Estate License</b></h5>
          <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right"></i>June, 2003</h6>
          <p>State of Maryland</p>
        </div>
      </div>
      {/**End education */}
      </div>
    {/*End Left Column */}
    <br />
    </div>

    {/*Start Right Column */}
    <div className="w3-twothird">
        {/**Start practices*/}
      <div className="w3-container w3-card w3-white">
        <h3 className="w3-text-grey w3-padding-16"><i className="fas fa-lightbulb fa-fw w3-margin-right w3-xlarge w3-text-black"></i>Practices</h3>
        <div className="w3-container">
          <h3><b>Development Essentials.</b></h3>
          <p>CORE PRINCIPLES TO OPTIMIZE PERFORMANCE, SECURITY, COMPATABILITY THROUGH ENHANCED CODING STANDARDS. </p>
    <ul>
        <li><b>Modular and Scalable Architecture:</b> Designing and implementing modular, scalable, and maintainable architecture for both front-end and back-end components.</li>
        <li><b>Optimized Performance:</b> Optimizing application performance through efficient coding practices, caching strategies, and minimizing network requests.</li>
        <li><b>Security Measures: </b> Security, such as data encryption, input validation, authentication, and authorization mechanisms.</li>
        <li><b>Responsive Design:</b> Creating responsive and mobile-friendly user interfaces that provide a seamless experience across different devices and screen sizes.</li>
        <li><b>Cross-browser Compatibility:</b> Ensure compatibility by testing and debugging applications to maintain consistent functionality and appearance.</li>
        <li><b>Code Review, Testing, and CI/CD:</b> Implementing code reviews, testing, and CI/CD pipelines to ensure code quality, identify bugs, maintain coding standards, and streamline development workflows.</li>
     <li><b>Version Control:</b> Version control systems, including branching strategies, pull requests, and collaboration workflows, to manage codebase changes effectively.</li>
       <li><b>Adherence to Coding Standards:</b> Coding standards, style guides, and best practices to maintain consistency and readability across the codebase.</li>
    </ul>
          <hr/>
        </div>
          {/**End practices*/}
           {/**Start interpersonal*/}
           <h3 className="w3-text-grey w3-padding-16"><i className="fas fa-handshake fa-fw w3-margin-right w3-xlarge w3-text-black"></i>Interpersonal Skills</h3>
        <div className="w3-container">
     <h3><b>Effective Communication-Key attributes.</b></h3>
        <p>PROMOTE FLEXIBILITY, COLLABORATION, AND ABILITY TO RESPOND TO CHANGING REQUIREMENTS. </p>
        <ul>
    <li>Effectively communicates to foster customer and stakeholder engagement throughout the development process.</li>
    <li>Articulates ideas, recommendations, and findings clearly, concisely, and inclusively.</li>
    <li>Promotes and welcomes feedback from all stakeholders in an inclusive manner.</li>
    <li>Embraces a culture of continuous improvement through post-implementation evaluations and knowledge sharing.</li>
    <li>Adapts positively to change and proactively embraces new challenges.</li>
    <li>Demonstrates critical thinking skills to analyze complex problems and propose innovative solutions.</li>
    <li>Exhibits leadership qualities by inspiring and motivating team members to achieve common goals.</li>
    <li>Proficient in negotiating and mediating to resolve conflicts and reach consensus among stakeholders.</li>
    <li>Delivers functional software (Minimum Viable Product) with a focus on meeting user needs and striving to exceed expectations.</li>
</ul>
        </div>
 {/**End interpersonal*/}
      </div>


      <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h3 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xlarge w3-text-black"></i>Work Experience</h3>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Digital Marketing Manager & Webmaster</b></h5>
          <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2018 - <span className="w3-tag w3-black w3-round">2021</span></h6>
          <ul>
    <li>Employ marketing strategies</li>
    <li>Analyze current & past market trends</li>
    <li>Write, edit & negotiate contracts.</li>
    <li>Facilitate inspections, appraisals & legal matters.</li>
    <li>Oversee home staging and architectural Design.</li>
</ul>
<hr/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Real Estate</b></h5>
          <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2003- <span className="w3-tag w3-black w3-round">2024 </span></h6>
          <ul>
    <li>Employ marketing strategies</li>
    <li>Analyze current & past market trends</li>
    <li>Write, edit & negotiate contracts.</li>
    <li>Facilitate inspections, appraisals & legal matters.</li>
    <li>Oversee home staging and architectural Design.</li>
</ul>


          <hr/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Freelance Design & Development</b></h5>
          <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2021 -<span className="w3-tag w3-black w3-round">current </span></h6>
          <ul>
            <li>Maintain site to ensure a user-friendly UI.</li>
            <li>Develop, refactor and Maintain e-commerce platforms.</li>
            <li>Implement design changes to improve user experience.</li>
            <li>Conduct audits to identify and fix any technical issues or broken links.</li>
            <li>Implement SEO strategies.</li>
            <li>Monitor site security for threats & vulnerabilities.</li>
            <li>Respond to client to address user inquiries and feedback.</li>
            <li>Create engaging content.</li>
            <li>Collaborate with board members and lawmakers</li>
            <li>Address user inquiries and feedback.</li>
</ul>

        </div>
      </div>


    {/*End Right Column */}
   <br />
    </div>
    
  {/*End Grid */}
  <br />
  </div>
  
  {/*End Page Container */}
</div>


    );
    }

export default CV;