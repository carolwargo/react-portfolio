import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio  from "./pages/Portfolio.jsx";
import Contact  from "./pages/Contact.jsx";
import Resume  from "./pages/Resume.jsx";
import SampleComponents from "./pages/SampleComponents/SampleComponents.jsx";

//  <BrowserRouter basename="/react-portfolio" >
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter >

        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/sample-components" element={<SampleComponents />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;