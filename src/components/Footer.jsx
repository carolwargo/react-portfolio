import React from "react";  
function Footer() {

    return (
        <div>
          
        {/*start Footer */}
        <footer
  className="w3-container w3-padding-48 w3-light-gray w3-center w3-large"
  style={{ margin: "-24px" }}
>
            <a href="/" className="w3-hover-opacity mx-1 text-black">
              Home{" "}
            </a>
            <a href="/about" className="w3-hover-opacity mx-1 text-black">
              About{" "}
            </a>
            <a href="/resume" className="w3-hover-opacity mx-1 text-black">
              Resume
            </a>
            <a href="/portfolio" className="w3-hover-opacity mx-1 text-black">
              Portfolio
            </a>
            <a href="/contact" className="w3-hover-opacity mx-1 text-black">
              Contact{" "}
            </a>
            <br />
       
            <p className="w3-medium ">Copyright: <span>&copy; 2024 Carol Wargo</span> 
            </p>
          </footer>
{/*end Footer */}
</div>



    );
}

export default Footer

