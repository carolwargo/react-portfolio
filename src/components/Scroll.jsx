import React, { useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}
    style={{backgroundColor:'white', paddingLeft:'3rem'}}>
      <span 
      style={{
        color: "black",
        textDecoration:"bold",
        padding: ".5rem",
        backgroundColor: "",
        borderRadius: ".5rem",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
        transition: "background-color 0.6s ease, box-shadow 0.3s ease",
      
      }}>↑ Scroll to Top</span>
    </div>
  );
};

export default ScrollToTop;
