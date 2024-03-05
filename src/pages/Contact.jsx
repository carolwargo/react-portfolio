import React from "react";
//import Header from "../components/Header/Header";
import MeWhite from "../assets/images/MeWhite.png";
import '../App.css'
import "../components/Contact/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <header> 
      <div className='container py-4' id='contact'>
              <div className='row p-xl-5 justify-content-center align-items-center'>
              <div className="w3-large w3-margin-bottom">
                <p>Thank you for visiting! </p>
                <p className=''> <em>  If you have any questions, inquiries, or just want to say hello, I'd
            love to hear from you!{" "}</em></p>
       
                </div>
                <div className='col-md-5'>
                
                <img src={MeWhite} alt="htown" className="w3-image w3-round" style={{width:"100%"}} ></img>
                </div>

                <div className='col-md-7 px-3'>
                  <div className="row">
                    <div className="col-5">
                <div className="w3-large w3-margin-bottom ">
                  <span>
                <i className="fa fa-user-circle fa-fw w3-hover-text-black w3-large w3-margin-right"></i> Carol Wargo<br/>   
                </span>
                <span>
                <i  className="fa fa-map-marker fa-fw w3-hover-text-black w3-large w3-margin-right"></i> Huntingown, MD<br/>
                </span> 
                </div>
                </div>
                
                <div className="col-7">
                <div className="w3-large w3-margin-bottom ">
  <i className="fa fa-phone fa-fw w3-hover-text-black w3-large w3-margin-right"></i>  <a href="tel:443-771-1726" >   Phone: 443-771-1726</a> <br/>
  
        <i className="fa fa-envelope fa-fw w3-hover-text-black w3-large w3-margin-right"></i> <a href="mailto:carolwargo.dev@gmail.com"> carolwargo.dev@gmail.com</a><br/>
        </div>
        </div>
        </div>
        <div className="w3-large w3-margin-bottom">  
         <p>Feel free to send me a message below , or connect with me through <a href="https://wa.me/+14437711726" alt='whatsapp'>whatsapp</a>.</p>
         </div>
   
                <form action="/action_page.php" target="_blank" >
        <div className="w3-row-padding"  style= {{margin:"0 -16px 8px -16px"}}>
          <div className="w3-half">
            <span>
            <input className="w3-input w3-border my-1" type="text" placeholder="Name" required name="Name">
              </input>
            </span>
            <span>
            <input className="w3-input w3-border my-2" type="text" placeholder="Email" required name="Email">
            </input>
            </span>
            </div>
          <div className="p-2 my-1">
            <textarea 
            className="w3-input w3-border" 
            placeholder="Message" 
            required 
            name="Message"
            rows="3"
        >

        </textarea>
         
        <button className="w3-button w3-black w3-right w3-section" type="submit">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
        </div>
        </div>
      </form>
      
                </div>
              </div>
            </div>
      </header>

        </div>
  

  );
}
