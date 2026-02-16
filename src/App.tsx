import { Routes, Route, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import Home from "./pages/Home.tsx";
import CFD from "./pages/CFD.tsx";
import HPC from "./pages/Contact.tsx";

import './App.css'

function App() {

   return (
    <>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Vast+Shadow&display=swap');
      </style>
      <div id="aboutme"></div>

      <header >
        <div>
          <Link to="/"><img src="/logos/YC_logo_filled.svg" alt="My Logo :D" id="logo"/></Link>
          <Link to="/" id="name" className="vast-shadow-regular"><span>Youri</span> <span>Chancrin</span></Link>
          <nav>
            <HashLink to="/#aboutme">About me</HashLink>
            <HashLink to="/#projects">Projects</HashLink>
            <HashLink to="/#contact">Contact</HashLink>
          </nav>
        </div>
        

      </header>
      
      <div className="main-page">

        <Home />

        <CFD />

        <HPC />

      </div>
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<CFD />} />
        <Route path="/contacts" element={<HPC />} />
      </Routes> */}
    </>
  );
}

export default App
