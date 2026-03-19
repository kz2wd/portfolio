import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import HoverVideo from "./pages/AnimatedVid.tsx";

import Home from "./pages/Home.tsx";
import {
  FlowPrediction,
  LDCSolver,
  PINO,
  GEMM,
  FlowPrediction2,
} from "./pages/CFD.tsx";

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
            <div className="inline-container">
              <div>
                <span>You</span>
                <span>ri</span>
              </div>
              <div>
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

        <FlowPrediction2 />

        <FlowPrediction />

        <LDCSolver />

        <PINO />

        <GEMM />
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
