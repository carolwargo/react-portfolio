import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
//import About from "./pages/About.jsx";
//import Portfolio  from "./pages/Portfolio.jsx";
//import Contact  from "./pages/Contact.jsx";
//import Resume  from "./pages/Resume.jsx";
//import Test from "./pages/Test/Test.jsx";
//import Home2 from "./pages/Test/Home2.jsx";
//import SampleComponents from "./pages/SampleComponents/SampleComponents.jsx";
//import Header from "./components/Header/Header.jsx";  

import "./App.css";

function App() {
  return (
    <div className="App">
     <BrowserRouter basename="/react-portfolio" >

        <Routes>
          
          <Route path="/" element={<Home/>} />
     </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;