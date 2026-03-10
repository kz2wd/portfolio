import { ExternalResource } from "./Utils";
import { useCollapse } from "react-collapsed";



function InfoLine({info, children}: {info: React.ReactNode, children: React.ReactNode }) {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div>
      
      <button {...getToggleProps()} className="collapse-btn inline-container-left">
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
      <div className="page-content">
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
          
          <h4>
            My contribution:
          </h4>
          <ul>
            <InfoLine info="Built full CFD → dataset → training → evaluation pipeline">
              <img src="/images/data_management.png" />
        
            </InfoLine>
            <InfoLine info="Reproduced results from a reference paper [Arxiv]" >
              Our research is based on Three-dimensional generative adversarial networks for turbulent flow estimation from wall measurements. <ExternalResource link="https://arxiv.org/abs/2409.06548" name="Paper Arxiv"/>
              In our work, we were not able to load the trained model available in the referenced github of the article. We implemented the GAN architecture using PyTorch and ran experiments using data generated from a locally run solver Incompact3D.
              The reference paper presented 4 cases with various prediction channel sizes. We chose to focus on case A which cover the full half of the simulation channel.
              For our reference replication, we used 20K sample total dataset of dimension (20 000, 128, 64, 128) with a training of 50 epochs.
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
            <InfoLine info="Improved far-from-wall reconstruction (~10%)" >
              After establishing a first replication of the paper, we researched ways to improve far-wall reconstruction.
            </InfoLine>
            <InfoLine info="Analyzed instability in GAN-based approaches">
              Placeholder
            </InfoLine>
          </ul>

          <h4>Technical stack</h4>
          <ul>
            <InfoLine info="Environment: Python, Jupyter, Docker, SSH">
              Placeholder
            </InfoLine>
            <InfoLine info="Visualization: Paraview, VTK, Dash (Plotly), Seaborn">
              Placeholder
            </InfoLine>
            <InfoLine info="Data: S3 MinIO, PostGreSQL, SQLAlchemy, Numpy, Dask, Scipy, Zarr">
              Placeholder
            </InfoLine>
            <InfoLine info="ML: TensorFlow, PyTorch, mlflow">
              Placeholder
            </InfoLine>
            <InfoLine info="CFD: XCompact3D">
              Placeholder
            </InfoLine>
          </ul>
          
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
      <div className="page-content">
        <ProjectBox info={
          <div className="page-content">
            <h2>FD CFD LDC Solver</h2>

            
          <img src="/images/ldc_solver.png" />
          </div>
          }
        >
          
        <p>Implemented a Finite Difference solver for Lid Driven Cavity case with uniform grid and various time scheme to reproduce results from Ghia & al. 1982.</p>

        Time scheme used:
        Re 100 | 400 | 1000 | 3200
        Explicit Euler: 
        RK2
        RK4
        EI ADI
        CN ADI

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
      <div className="page-content">
        <ProjectBox info={
          <div className="page-content">
            <h2>Physic Induced Neural Operator Article implementation</h2>
            <img src="/images/pin_out_lighter.gif" />
            
          </div>
          }
        >
          <div className="page-content">
            <img src="/images/pino_train.png" />
         <p>Reproduced the paper Physic Induced Neural Operator on the LDC case using data generated Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </p>
          </div>
      </ProjectBox>
      </div>
      </>
  )
}

export function GEMM() {
  return (
    <>
      <div className="page-content">
        <ProjectBox info={
          <div className="page-content">
            <h2>GEMM Optimization</h2>
            <img src="/images/gemm_perfs.png" />
            
          </div>
          }
        >
          <div className="page-content">
         <p>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </p>
          </div>
      </ProjectBox>
      </div>
      </>
  )
}

