import { ExternalResource } from "./Utils";

function Home() {
  return (
    <>
      <div className="width-1 page-content">
        <ul className="interest margin-4">
          <li>HPC</li>
          <li>CFD</li>
          <li>ML</li>
        </ul>

        <h3 className="centered-element margin-4">
          HPC-focused computer science engineer working on data-driven CFD and
          large-scale numerical optimization
        </h3>

        <div className="inline-container margin-4 separate-children">
          <ExternalResource
            link="/pdf/cv2026_chancrin_youri.pdf"
            name="CV"
            isFull={true}
          />
          <ExternalResource
            link="https://github.com/kz2wd/"
            name="Github"
            isFull={true}
          />
          <ExternalResource
            link="https://www.linkedin.com/in/youri-chancrin-a841b6265/"
            name="LinkedIn"
            isFull={true}
          />
        </div>

        <div className="centered-element">
          <p className="copy-box"> Email: yourichancrin@gmail.com</p>
          <p>Open to relocation & language learning</p>
        </div>
      </div>
    </>
  );
}

export default Home;
