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
import IndexPage from "./pages/IndexPage.jsx";

/**Tests */
import Test from "./pages/Test.jsx";

/**Components */
import NavFixed from "./components/Navs/NavFixed.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
/**Layouts */
import GraphicsLayout from './components/Layouts/GraphicsLayout.jsx'; 
import IndexLayout from './components/Index/IndexLayout.jsx';
import Layout from './components/Layouts/Layout.jsx';

/**App Style */
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-portfolio/">
        <ErrorBoundary>
          <NavFixed />
          <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/server" element={<ServerPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/samples" element={<SamplesPage />} />
            <Route path="/album" element={<AlbumPage/>} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/cards" element={<CardsPage/>} />
            <Route path="/scroll-spy" element={<ScrollSpy />} />
            <Route path="/forms" element={<FormsPage/>} />
</Route>
                    {/* Graphics Layout */}
          <Route element={<GraphicsLayout />} > 
          <Route path="/graphics" element={<GraphicsPage/>} />
          </Route>

          <Route element={<IndexLayout />} >
          <Route path="/index" element={<IndexPage/>} />
          </Route>
      
            {/* Add a catch-all route for handling errors */}
            <Route path="*" element={<NotFound />} />
                             {/*Index Layout */}
          </Routes>
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
