import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home"
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Ceramics from "./pages/Gallery/Ceramics";
import Photography from "./pages/Gallery/Photography"

function App() {
  
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Navbar />
          {/* Page content here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} >
              <Route path="ceramics" element={<Ceramics />} />
              <Route path="photography" element={<Photography />} />
            </Route>
          </Routes>

          
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <Link to='gallery/ceramics'>Gallery</Link>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
