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

function CFD() {


  return (
    <>
      <div className="page-content" id="projects">
        <h3>Data-driven reconstruction of wall-bounded turbulent channel flows</h3>
        
        <div className="inline-container">
          <ExternalResource link="/pdf/Report_PFE_flow_reconstruction.pdf" name="Report"/>
          <ExternalResource link="/pdf/Poster_PFE_flow_reconstruction.pdf" name="Poster"/>
          <ExternalResource link="/pdf/Presentation_PFE_flow_reconstruction.pdf" name="Slides"/>
          <ExternalResource link="https://github.com/kz2wd/Flow-Prediction" name="Github"/>
        </div>
        
        <p>6 months internship at Meiji University Fluid Mechanic Laboratory, Japan</p>
        <img src="/images/cfd_flow_presentation.png" />
        <h4>
          My contribution:
        </h4>
        <ul>
          <InfoLine info="Built full CFD → dataset → training → evaluation pipeline">
            <img src="/images/data_management.png" />
      
          </InfoLine>
          <InfoLine info="Reproduced results from a reference paper [Arxiv]" > 
            Three-dimensional generative adversarial networks for turbulent flow estimation from wall measurements
            <ExternalResource link="https://arxiv.org/abs/2409.06548" name="Paper Arxiv"/>
          </InfoLine>

          <InfoLine info="Identified discriminator inefficiency">
            Placeholder
          </InfoLine>
          <InfoLine info="Improved far-from-wall reconstruction (~10%)" >
            Placeholder
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
        
        
       
        
      </div>
    </>
  );
}

export default CFD