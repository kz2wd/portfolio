import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import HoverVideo from "./pages/AnimatedVid.tsx";

import Home from "./pages/Home.tsx";
import { FlowPrediction, LDCSolver, PINO, GEMM } from "./pages/CFD.tsx";

import "./App.css";

function App() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Vast+Shadow&display=swap');
      </style>
      <div id="aboutme"></div>

      <header>
        <div>
          <Link to="/">
            <HoverVideo />
          </Link>
          <Link to="/" id="name" className="vast-shadow-regular">
            <div className="inline-container hspaced">
              <div className="inline-container-strict">
                <span>You</span>
                <span>ri</span>
              </div>
              <div className="inline-container-strict">
                <span>Chan</span>
                <span>crin</span>
              </div>
            </div>
          </Link>
          <nav>
            <HashLink to="/#projects">Projects</HashLink>
          </nav>
        </div>
      </header>

      <div className="main-page">
        <Home />

        <h1 id="projects">Projects</h1>

        <FlowPrediction />
        <div className="project-separator"></div>

        <LDCSolver />
        <div className="project-separator"></div>

        <PINO />
        <div className="project-separator"></div>

        <GEMM />
        <div className="project-separator"></div>
      </div>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<CFD />} />
        <Route path="/contacts" element={<HPC />} />
      </Routes> */}
    </>
  );
}

export default App;
