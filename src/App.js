import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio  from "./pages/Portfolio.jsx";
import Contact  from "./pages/Contact.jsx";
import Resume  from "./pages/Resume.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-portfolio" >
        <Header />

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
