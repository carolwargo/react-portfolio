import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/*Pages*/
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import AlbumPage from "./pages/AlbumPage.jsx";
import FormsPage from "./pages/FormsPage.jsx";
import CardsPage from "./pages/CardsPage.jsx";
import GraphicsPage from "./pages/GraphicsPage.jsx";
import SamplesPage from "./pages/SamplesPage.jsx";
import ServerPage from "./pages/ServerPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ScrollSpy from "./pages/ScrollSpy.jsx";

/**Tests */
import Test from "./pages/Test.jsx";

/**Components */
import Footer from "./components/Footer.jsx";
import NavFixed from "./components/NavFixed.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
/**Layouts */
import GraphicsLayout from './components/Layouts/GraphicsLayout'; 
/**App Style */
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-portfolio">
        <ErrorBoundary>
          <NavFixed />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resumePage" element={<ResumePage />} />
            <Route path="/serverPage" element={<ServerPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/samples" element={<SamplesPage />} />
            <Route path="/album" element={<AlbumPage/>} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/cards" element={<CardsPage/>} />
            <Route path="/scroll-spy" element={<ScrollSpy />} />
            <Route path="/forms" element={<FormsPage/>} />

                    {/* Graphics Layout */}
                    <Route element={<GraphicsLayout />} >
          <Route path="/graphics" element={<GraphicsPage/>} />
          </Route>
            {/* Add a catch-all route for handling errors */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
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
