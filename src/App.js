import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Portfolio  from "./pages/Portfolio.jsx";
import Contact  from "./pages/Contact.jsx";
import Resume  from "./pages/Resume.jsx";
import Footer from "./components/Footer.jsx";
import NavFixed from "./components/NavFixed.jsx"; 

import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-portfolio" >
<NavFixed />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;