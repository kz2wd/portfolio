import { ExternalResource } from "./Utils";
import { useCollapse } from "react-collapsed";



function InfoLine({info, children}: {info: React.ReactNode, children: React.ReactNode }) {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div>
      
      <button {...getToggleProps()} className="collapse-btn inline-container-left full-width">
        {isExpanded ? <img src="/logos/expand_circle_down.svg" className="logo-black"/> : <img src="/logos/expand_circle_right.svg" className="logo-black"/>}
        {info}
      </button>
      <section {...getCollapseProps()}>
        {children}
      </section>
    </div>
  );
}

function ProjectBox({info, children}: {info: React.ReactNode, children: React.ReactNode }) {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div>
      
      <button {...getToggleProps()} className="collapse-btn inline-container-left">
        {info}
      </button>
      <section {...getCollapseProps()}>
        {children}
      </section>
    </div>
  );
}

export function FlowPrediction() {
  return (
    <>
      <div className="page-content project">
        <ProjectBox info={
          <div className="page-content">
            <h2>Data-driven reconstruction of wall-bounded turbulent channel flows</h2>
            <p>6 months internship at Meiji University Fluid Mechanic Laboratory, Japan</p>
            
          <img src="/images/cfd_flow_presentation.png" />
          </div>
        }
      >
            <div className="inline-container">
              <ExternalResource link="/pdf/Report_PFE_flow_reconstruction.pdf" name="Report"/>
              <ExternalResource link="/pdf/Poster_PFE_flow_reconstruction.pdf" name="Poster"/>
              <ExternalResource link="/pdf/Presentation_PFE_flow_reconstruction.pdf" name="Slides"/>
              <ExternalResource link="https://github.com/kz2wd/Flow-Prediction" name="Github"/>
            </div>
          
          <p>Reference paper: Three-dimensional generative adversarial networks for turbulent flow estimation from wall measurements <ExternalResource link="https://arxiv.org/abs/2409.06548" name="Paper Arxiv"/></p>

          <InfoLine info={
            <div className="inline-container-left">
              Implemented GAN architecture from reference paper; replicated its results and explored ways to improve accuracy.
            </div>
        }>
          Paper goal explanation...
          </InfoLine>
          
          
            <InfoLine info="Generated datasets using Incompact3D with dimensions (20 000, 128, 64, 128, 3). Built full CFD → dataset → training → evaluation pipeline">
              <img src="/images/data_management.png" />
            </InfoLine>
            

            <InfoLine info="Investigated discriminator influence">
              One can tune the influence of the discrimimator in the GAN framework.
              The formula for loss is: Lgan = 
              We ran experiments with variying discrimimator influence. Interestingly, the case with a discriminator factor at 1e-2 performed for the best in far wall region and the worst near the wall.
              This graph highlight two phenomenoms; In near wall region and up to y+ = 80, using a discriminator provides no accuracy gains and past y+ = 80, some configurations shows great improvements 
              <div className="plot">
                <p>Discriminator influences comparison</p>
                <img src="/images/discriminator_influences.png" 
                alt="Graph unavailable. "/>
            </div>
            </InfoLine>
            <InfoLine info="Enriched inputs with extracted flow patterns using scale filtering" >
              After establishing a first replication of the paper, we researched ways to improve far-wall reconstruction.

              Could not combine improvements from discrimimator influence tuning and scale filtering, which highlights instability in GAN-based approaches.
            </InfoLine>
          

          <InfoLine info="Technical Stack">
            <ul>
              <li>Environment: Python, Jupyter, Docker, SSH</li>
              <li>Visualization: Paraview, VTK, Dash (Plotly), Seaborn</li>
              <li>Data: S3 MinIO, PostGreSQL, SQLAlchemy, Numpy, Dask, Scipy, Zarr</li>
              <li>ML: TensorFlow, PyTorch, mlflow</li>
              <li>CFD: XCompact3D</li>
            </ul>
          </InfoLine>
  
          
          <h4>Results</h4>
          <div > 
            <div className="plot">
              <p>title</p>
              <img src="/images/cfd_result_all.png" 
              alt="Graph unavailable. "/>
            </div>
            <div className="plot">
              <p>title</p>
              <img src="/images/cfd_result_improvement.png" 
                alt="Graph unavailable. The improvements are per component for case 1e-2 Discriminator 
                  influence and case with input scale filtering. The best improvements range from 4 to 10% in the range of y+ = 100 to y+ = 200."/>
            </div>

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
        <ProjectBox info={
          <div className="page-content">
            <h2>FD CFD LDC Solver</h2>
            <p>Finite Difference Solver for Lid Driven Cavity case with uniform grid. Re from 100 to 3200.</p>

            
          <img src="/images/ldc_solver.png" />
          </div>
          }
        >
        
        <InfoLine info="Implemented a Finite Difference solver for Lid Driven Cavity case with uniform grid and various time scheme to reproduce results from Ghia & al. 1982.">
          <table border="1">
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
        </InfoLine>


        

        Studied Pressure solving through time to reduce computation

        Used Python for tests, visualizations and tracking
        Used C for core simulation process
        
      </ProjectBox>
      </div>
      </>
  )
}


export function PINO() {
  return (
    <> 
      <div className="page-content project">
        <ProjectBox info={
          <div className="page-content">
            <h2>Physic Induced Neural Operator Article implementation</h2>
            <img src="/images/pin_out_lighter.gif" />
            
          </div>
          }
        >
          <div className="page-content">
            <img src="/images/pino_train.png" />
            <p>Reproduced the paper Physic Induced Neural Operator on the LDC case using data generated</p>

          </div>
      </ProjectBox>
      </div>
      </>
  )
}

export function GEMM() {
  return (
    <>
      <div className="page-content project">
        <ProjectBox info={
          <div className="page-content">
            <h2>GEMM Optimization</h2>
            <img src="/images/gemm_perfs.png" />
            
          </div>
          }
        >
          <div className="page-content">
         <p>
           </p>
          </div>
      </ProjectBox>
      </div>
      </>
  )
}

