import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPage  from "./pages/PortfolioPage.jsx";
import ContactPage  from "./pages/ContactPage.jsx";
import ResumePage  from "./pages/ResumePage.jsx";
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
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;