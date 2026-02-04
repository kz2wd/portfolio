import { ExternalResource } from "./Utils";

function Home() {
  return  (
    <>
    <div className="width-1 page-content">
      <ul className="interest">
        <li>HPC</li>
        <li>CFD</li>
        <li>ML</li>
      </ul>
      <h3 className="centered-element">HPC-focused computer science engineer working on data-driven CFD 
         and large-scale numerical optimization</h3>
      
      <div className="inline-container">
        <p><ExternalResource link="/pdf/CV_Youri_Chancrin_EN_2025.pdf" name="CV"/></p>
        <p><ExternalResource link="https://github.com/kz2wd/" name="Github"/></p>
        <p><ExternalResource link="https://www.linkedin.com/in/youri-chancrin-a841b6265/" name="LinkedIn"/></p>
      </div>
      
      <p className="copy-box inline-container-left"> Email: yourichancrin@gmail.com</p>
      <p>Open to relocation & language learning</p>
      
      
    </div>
    </>
  )
}

export default Home