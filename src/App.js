import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio  from "./pages/Portfolio.jsx";
import Contact  from "./pages/Contact.jsx";
import Resume  from "./pages/Resume.jsx";
import Footer from "./components/Footer.jsx";
import NavFixed from "./components/NavFixed.jsx"; 
//basename="/react-portfolio"
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter >
<NavFixed />
        <Routes>
          <Route path="/" element={<Home/>} />
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