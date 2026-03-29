import { ExternalResource } from "./Utils";
import { useState } from "react";

function ProjectCard({ slides }: { slides: React.ReactNode[] }) {
  const [progress, setProgress] = useState(0.0);

  const next = () => setProgress((Math.floor(progress) + 1) % slides.length);
  const prev = () =>
    setProgress((Math.ceil(progress) - 1 + slides.length) % slides.length);

  return (
    <div className="carousel vbox hfull">
      <div className="hbox hfull">
        <div className="arrow left" onClick={prev}>
          <img src="/logos/arrow.svg" />
        </div>
        <div className="track hfull">
          <div className="card vbox">{slides[Math.floor(progress)]}</div>
        </div>
        <div className="arrow right" onClick={next}>
          <img src="/logos/arrow.svg" />
        </div>
      </div>
      <div className="hbox">
        {slides.map((_, i) => (
          <div
            className={`progress-dot ${i == Math.floor(progress) ? "current" : ""}`}
            onClick={() => setProgress(i)}
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
}

export function FlowPrediction() {
  const slides: React.ReactNode[] = [
    <>
      <p>
        6 months internship at Meiji University Fluid Mechanic Laboratory, Japan
      </p>
      <div className="card-content">
        <img src="/images/cfd_flow_presentation.png" />
      </div>
    </>,
    <>
      <h3>
        Replicated results from reference paper arXiv:2409.06548, A. Cuéllar and
        others and explored strategies to improve predictions accuracy
      </h3>
      <div className="card-content">
        <img src="/images/cfd_result_all.png" alt="Graph unavailable. " />
        <div className="inline-container margin-4">
          <ExternalResource
            link="/pdf/Report_PFE_flow_reconstruction.pdf"
            name="Report"
            isFull={false}
          />
          <ExternalResource
            link="/pdf/Poster_PFE_flow_reconstruction.pdf"
            name="Poster"
            isFull={false}
          />
          <ExternalResource
            link="/pdf/Presentation_PFE_flow_reconstruction.pdf"
            name="Slides"
            isFull={false}
          />
          <ExternalResource
            link="https://github.com/kz2wd/Flow-Prediction"
            name="Github"
            isFull={false}
          />
        </div>
      </div>
    </>,
    <>
      <h3>Discriminator influence tuning</h3>
      <div className="card-content">
        <p>
          Predictions are produced using a Generative Adversarial Network (GAN)
          where a Discriminator adds a penalty to the Generator loss during
          training.
        </p>
        <img src="/images/gan_illu.png" />
        <p>
          By tweaking the influence of the discriminator penalty, we obtain
          various behaviors in the generator.
        </p>
        <img
          src="/images/discriminator_influences.png"
          alt="Graph unavailable. "
        />
        <p>
          In the near wall region and up to y+ = 80, using a discriminator
          provides no accuracy gains and past y+ = 80, a factor of 1e-2 shows
          improvements of up to 10%.
        </p>
      </div>
    </>,
    <>
      <h3>
        Enriched inputs with extracted flow patterns using scale filtering
      </h3>
      <div className="card-content">
        <p>
          Near wall regions have intensive high frequency patterns that hide the
          low frequency patterns that better correlate with the far from wall
          regions.
        </p>
        <img src="images/dog_illu.png" />
        <p>
          Use of Difference of Gaussian (DoG) filter reveals low frequency
          pattern in the input.
        </p>
        <img src="images/dog_wide.png" />
        <p>
          DoG has two parameters which describe the allure of the subtracted
          gaussians.
        </p>
        <img src="images/scale_filtering_corr.png" />
        <p>
          For each input and output component pairs and at each wall distance y+
          in the prediction space, a bayesian optimization is performed to find
          the filter with the best correlation.
        </p>
        <img src="images/scale_filtering_clustering.png" />
        <p>
          This results in many filters (3 input components * 3 output components
          * 64 distances = 576) , many of which are similar. Clusterization
          selects the final set of filters.
        </p>
      </div>
    </>,
    <>
      <h3>Research environment setup</h3>
      <div className="card-content">
        <img src="/images/data_management.png" />
        <p>
          Generated datasets using Incompact3D with dimensions (20 000, 128, 64,
          128, 3). Built full CFD → dataset → training → evaluation pipeline
        </p>
      </div>
    </>,
  ];

  return (
    <>
      <div className="vbox page-content">
        <h2>
          Data-driven reconstruction of wall-bounded turbulent channel flows
        </h2>
        <ProjectCard slides={slides} />
      </div>
    </>
  );
}

export function LDCSolver() {
  const slides: React.ReactNode[] = [
    <>
      <div className="card-content">
        <p>
          Implemented a Finite Difference solver for Lid Driven Cavity case with
          uniform grid and various time schemes. Equation constraints are based
          on Incompressible Navier Stokes with no external body force and
          uniform viscosity.
        </p>
        <img src="/images/ldcs_pres.png" />
        <p>Velocity, pressure and velocity norm at Re=1000.</p>
      </div>
    </>,
    <>
      <div className="card-content">
        <p>Built a run monitor panel</p>
        <img src="/images/ldc_solver.png" />
      </div>
    </>,
  ];

  return (
    <>
      <div className="vbox">
        <h2>Finite Difference Incompressible Lid-Driven Cavity Solver</h2>
        <ProjectCard slides={slides} />
      </div>
    </>
  );
}

export function PINO() {
  const slides: React.ReactNode[] = [
    <>
      <div className="card-content">
        <img src="/images/pin_out_lighter.gif" />
      </div>
    </>,
    <>
      <h3>Network architecture</h3>
      <div className="card-content">
        {/*<img src="/images/pin_out_lighter.gif" />*/}
        <p></p>
      </div>
    </>,
    <>
      <h3>Dataset creation and analysis</h3>
      <div className="card-content">
        <p>
          The dataset consist of 100 samples with shape: X (batch, x dim, y dim,
          3) to Y (batch, Time dimension, x dim, y dim, 3) with 3 the amount
          components: u and v velocity + pressure.
        </p>
        <p>
          All the dataset samples were generated using my previous LDC Solver at
          Re=500 with random initial conditions. Since the system is convergent,
          Variance and PCA analysis are performed to attest of the dataset
          problem representability.
        </p>
        <img src="/images/pino_var_over_t.png" />
        <p>
          Variance over time increases, meaning that simulations states diverge
          over time, which indicates that the initial states are different
          enough.
        </p>
        <img src="/images/pino_pca.png" />
        <p>
          PCA is used to visualize the spread of the samples. Since Y has higher
          dimensionality, it is expected to be more spread. This normal-like
          distribution is a sign of a healthy dataset.
        </p>
        <p>
          Additionnaly, the linear predictability score of the dataset between X
          and PCA Y is computed; we find a score of 1.0, which means all sample
          of PCA Y could be linked to a single input X.
        </p>
      </div>
    </>,
  ];
  return (
    <>
      <div className="vbox">
        <h2>Physic Informed Neural Operator (PINO) Article Implementation</h2>
        <ProjectCard slides={slides} />
      </div>
    </>
  );
}

export function GEMM() {
  const slides: React.ReactNode[] = [
    <>
      <div className="card-content">
        <img src="/images/gemm_comp.png" />
        <p>
          Replicated up to 80% performance of locally compiled OpenBLAS, speed
          up of up to 10 times compared to naive implementation.
        </p>
      </div>
    </>,
    <>
      <div className="card-content">
        <img src="/images/gemm_exca_illu.png" />
        <p>
          Matrices are split into blocks. Blocks from matrices A and B are
          packed according to internal kernel needs. Block sizes are chosen to
          fit in L2 cache but computationally intense enough to cover memory
          bandwidth latency (ratio of ~100 compute per memory read). The
          internal kernel accumulates C in AVX2 registers and broadcasts A along
          B.
        </p>
      </div>
    </>,
  ];
  return (
    <>
      <div className="vbox">
        <h2>GEneral Matrix Multiplication (GEMM) Optimization</h2>
        <ProjectCard slides={slides} />
      </div>
    </>
  );
}
