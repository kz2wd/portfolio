import { ExternalResource } from "./Utils";
import { useCollapse } from "react-collapsed";

function InfoCard({
  info,
  children,
}: {
  info: React.ReactNode;
  children: React.ReactNode;
}) {
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <div className="info-card">
      <button {...getToggleProps()}>{info}</button>
      <section {...getCollapseProps()}>{children}</section>
    </div>
  );
}

function ProjectBox({
  info,
  children,
}: {
  info: React.ReactNode;
  children: React.ReactNode;
}) {
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <div>
      <button
        {...getToggleProps()}
        className="collapse-btn inline-container-left"
      >
        {info}
      </button>
      <section className="project-detailed-area" {...getCollapseProps()}>
        {children}
      </section>
    </div>
  );
}

export function FlowPrediction() {
  return (
    <>
      <div className="page-content project">
        <ProjectBox
          info={
            <div className="page-content">
              <h2>
                Data-driven reconstruction of wall-bounded turbulent channel
                flows
              </h2>
              <p>
                6 months internship at Meiji University Fluid Mechanic
                Laboratory, Japan
              </p>

              <img src="/images/cfd_flow_presentation.png" />
            </div>
          }
        >
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
          <div className="card-panel">
            <InfoCard
              info={
                <div>
                  Implemented GAN architecture from reference paper; replicated
                  its results and explored ways to improve accuracy.
                  <img src="images/paper_context.png" />
                </div>
              }
            >
              <p>
                Reference paper: Three-dimensional generative adversarial
                networks for turbulent flow estimation from wall measurements{" "}
                <ExternalResource
                  link="https://arxiv.org/abs/2409.06548"
                  name="Paper Arxiv"
                  isFull={false}
                />
              </p>
              Paper goal explanation...
              <div>
                <div className="plot">
                  <p>title</p>
                  <img
                    src="/images/cfd_result_all.png"
                    alt="Graph unavailable. "
                  />
                </div>
                <div className="plot">
                  <p>title</p>
                  <img
                    src="/images/cfd_result_improvement.png"
                    alt="Graph unavailable. The improvements are per component for case 1e-2 Discriminator
                    influence and case with input scale filtering. The best improvements range from 4 to 10% in the range of y+ = 100 to y+ = 200."
                  />
                </div>
              </div>
            </InfoCard>

            <InfoCard
              info={
                <div>
                  Investigated discriminator influence
                  <img
                    src="/images/discriminator_influences.png"
                    alt="Graph unavailable. "
                  />
                </div>
              }
            >
              One can tune the influence of the discrimimator in the GAN
              framework. The formula for loss is: Lgan = We ran experiments with
              variying discrimimator influence. Interestingly, the case with a
              discriminator factor at 1e-2 performed for the best in far wall
              region and the worst near the wall. This graph highlight two
              phenomenoms; In near wall region and up to y+ = 80, using a
              discriminator provides no accuracy gains and past y+ = 80, some
              configurations shows great improvements
              <div className="plot">
                <p>Discriminator influences comparison</p>
              </div>
            </InfoCard>
            <InfoCard
              info={
                <div>
                  Enriched inputs with extracted flow patterns using scale
                  filtering
                  <img src="images/dog_illu.png" />
                </div>
              }
            >
              After establishing a first replication of the paper, we researched
              ways to improve far-wall reconstruction. Could not combine
              improvements from discrimimator influence tuning and scale
              filtering, which highlights instability in GAN-based approaches.
            </InfoCard>

            <InfoCard
              info={
                <div>
                  Generated datasets using Incompact3D with dimensions (20 000,
                  128, 64, 128, 3). Built full CFD → dataset → training →
                  evaluation pipeline
                  <img src="/images/data_management.png" />
                </div>
              }
            >
              <ul>
                <li>Environment: Python, Jupyter, Docker, SSH</li>
                <li>Visualization: Paraview, VTK, Dash (Plotly), Seaborn</li>
                <li>
                  Data: S3 MinIO, PostGreSQL, SQLAlchemy, Numpy, Dask, Scipy,
                  Zarr
                </li>
                <li>ML: TensorFlow, PyTorch, mlflow</li>
                <li>CFD: XCompact3D</li>
              </ul>
            </InfoCard>
          </div>
        </ProjectBox>
      </div>
    </>
  );
}

export function LDCSolver() {
  return (
    <>
      <div className="page-content project">
        <ProjectBox
          info={
            <div className="page-content">
              <h2>Finite Difference Incompressible Lid-Driven Cavity Solver</h2>
              <p>
                Re: 100 - 3200 | uniform grid: (64x64) - (256x256) | dt: 1e-3 -
                1e-4
              </p>

              <img src="/images/ldc_solver.png" />
            </div>
          }
        >
          <p>
            Implemented a Finite Difference solver for Lid Driven Cavity case
            with uniform grid and various time scheme to reproduce results from
            Ghia & al. 1982.
          </p>
          <InfoCard info="Time scheme Comparison table">
            <table border={1}>
              <thead>
                <tr>
                  <th>Time scheme \ RE</th>
                  <th>100</th>
                  <th>400</th>
                  <th>1000</th>
                  <th>3200</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Explicit Euler</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td>RK2</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td>RK4</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>IMEX (CN/EI ADI)</td>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>❌</td>
                </tr>
              </tbody>
            </table>
          </InfoCard>
          Studied Pressure solving through time to reduce computation Used
          Python for tests, visualizations and tracking Used C for core
          simulation process
        </ProjectBox>
      </div>
    </>
  );
}

export function PINO() {
  return (
    <>
      <div className="page-content project">
        <ProjectBox
          info={
            <div className="page-content">
              <h2>Physics-Informed Neural Operator Article implementation</h2>
              <img src="/images/pin_out_lighter.gif" />
            </div>
          }
        >
          <div className="page-content">
            <img src="/images/pino_train.png" />
            <p>
              Reproduced the paper Physics-Informed Neural Operator for Learning
              Partial Differential Equations on the LDC case using data
              generated
            </p>
          </div>
        </ProjectBox>
      </div>
    </>
  );
}

export function GEMM() {
  return (
    <>
      <div className="page-content project">
        <ProjectBox
          info={
            <div className="page-content">
              <h2>GEMM Optimization</h2>
              <img src="/images/gemm_perfs.png" />
            </div>
          }
        >
          <div className="page-content">
            <p></p>
          </div>
        </ProjectBox>
      </div>
    </>
  );
}
