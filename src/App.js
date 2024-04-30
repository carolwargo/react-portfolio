import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPage  from "./pages/PortfolioPage.jsx";
import ContactPage  from "./pages/ContactPage.jsx";
import ResumePage  from "./pages/ResumePage.jsx";
import PageSamples from "./pages/PageSamples.jsx";
import BlogPage from "./pages/Blog.jsx";
import ScrollSpy from './pages/ScrollSpy.jsx'
import Test from "./pages/Test.jsx";
import SideNav from "./pages/SideNav.jsx";
import Footer from "./components/Footer.jsx";
import Server from './pages/Server.jsx';
import NavFixed from "./components/NavFixed.jsx"; 
import Album from "./pages/Album.jsx";
import Forms from "./pages/Forms.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-portfolio">
        <NavFixed />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/server" element={<Server />} />
          <Route path="/test" element={<Test />} />
          <Route path="/sidenav" element={<SideNav />} />
          <Route path="/page-samples" element={<PageSamples />} />  
          <Route path="/album" element={<Album />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/scroll-spy" element={<ScrollSpy />} />
          <Route path="/forms" element={<Forms />} />
          {/* Add a catch-all route for handling errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}

export default App;
