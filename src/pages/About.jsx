import React from "react";
//import Volunteer from "../components/About/Volunteer.jsx";
import AboutFinal from "../components/About/AboutFinal.jsx";
import LocationView from '../assets/images/LocationView.png';
import Header from "../components/Header/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'

export default function AboutPage() {
  return (
    <div className="about" id="about">
      <Header />
      <AboutFinal />
      <div className='row p-2 d-flex align-items-center'>
      <div className='col-md-4 flex-column justify-content-end align-items-center'>
      <div className="d-flex align-items-center justify-content-center">
    <h2 className=' justify-content-center align-items-center'>WHERE I'M LOCATED</h2>
    </div>
    <div className="d-flex align-items-center justify-content-center">
    <p className=' justify-content-center align-items-center'> 
    <em>Huntingtown, Maryland!</em></p>
   </div>
</div>
        <div className='col-md-6 justify-content-center align-items-center'>
        <img src={LocationView} alt="htown" className="w3-image w3-round" style={{width:"100%"}} ></img>
        </div>
        </div>

    </div>
  );
}


/** 
 *      <main className="container">
                <section className="py-4">
                    <h2 className="mb-3">Innovation</h2>
                    <p>We are TWO FACES, a team passionate about technology and innovation. Our journey began...</p>
                </section>

                <section className="py-4">
                    <h2 className="mb-3">Leadership</h2>
                </section>

                <section className="py-4">
                    <h2 className="mb-3">Mission</h2>
                    <p>At TWO FACES, our mission is to...</p>
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-4">

                      </div>
                    </div>
                </section>
                <section className="py-4">
                    <h2 className="mb-3">Proficiency & Strengths</h2>
                    <p>At TWO FACES, our mission is to...</p>
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-4">

                      </div>
                    </div>
                </section>
            </main>
*/



/**
  <h1 className="mb-4">Meet the 2FACES of Technology...</h1>
 <p className="lead">Welcome to 2FACE, where we specialize in 2 core aspects of technology- <span className='w3-tag fw-bold' style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 3.8)", color:"#FDC5E8"
}}>DESIGN
</span>  and  <span className='w3-tag fw-bold'  style={{textShadow: "1px 1px 2px rgba(0, 0, 0, 3.8)", color:"#00ffff"}}>DEVELOPMENT </span> .</p>
  <p>1. Design: Our design team is passionate about creating visually stunning and user-friendly interfaces that captivate your audience and enhance your brand identity. From website design to graphic design, we tailor each project to meet your unique requirements and exceed your expectations.</p>
<p>2. Development: With our development expertise, we turn your ideas into functional and dynamic digital experiences. Whether you need a responsive website, a custom web application, or mobile app development, our developers have the skills and experience to deliver high-quality solutions that drive results.</p>


<p>When it comes to using technology, many believe 
that more equates to better. At{" "} 
<span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 2.8)", color: "pink", fontSize: "1rem" }}>2</span>
<span style={{ color: '#00FFFF', fontSize:'1rem', textShadow: "1px 1px 2px rgba(0, 0, 0, 2.8)" }}>FACE</span>

, our commitment lies in aiding you to enhance the value of your 
operations through customized solutions without overwhelming our clients and their customers. 
Our objective is to streamline your organization, eliminate redundancies,
and amplify your market presence, all while preserving clarity, simplicity and 
functionality.</p>
<p> Our team is dedicated to bringing your digital vision to life through innovative design concepts and expert development solutions.</p>
<p>At 2FACES, we're committed to helping you leverage the power of technology to achieve your goals and stay ahead in today's digital landscape. Let us be your partner in success.</p>


 */