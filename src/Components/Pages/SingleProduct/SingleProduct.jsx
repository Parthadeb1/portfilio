import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleProduct = () => {
  const { projectsId } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const projectsValue = projects.find((project) => project.id == projectsId);
  //   console.log(projectsValue)
  return (
    <div className="container my-5">
      <div className="service-title position-relative d-flex justify-content-center align-items-center">
        <h1 className="display-1 text-uppercase about ">Projects Details</h1>
        <h1 className="position-absolute  text-uppercase text-dark">
          Projects Details{" "}
        </h1>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={projectsValue?.pic1}
                  className="d-block w-100"
                  alt="projects-pic"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={projectsValue?.pic2}
                  className="d-block w-100"
                  alt="projects-pic"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={projectsValue?.pic3}
                  className="d-block w-100"
                  alt="projects-pic"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-7">
          <h3 className="text-primary">Features</h3>
          <div className="row">
            <div className="col-sm-6">
              <p>
                1.<span className="text-secondary fw-bolder"> A FullStack Responsive Single page Apartment website.</span>
              </p>
              <p>
                2.<span className="text-secondary fw-bolder"> Have Booking Facilities and User-friendly Admin panel that Admin can manage all the orders.</span>
              </p>
              
            </div>
            <div className="col-sm-6">
            <p>
            3.<span className="text-secondary fw-bolder"> Designed dashboard and implemented user, admin management page where Users can add and delete an apartment as their own.</span>
              </p>
              <p>
                4.<span className="text-secondary fw-bolder"> It's created with firebase authentication that users should have to log in to visit the website. All user data will be saved in the database.</span>
              </p>
              
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-md-7 col-sm-12">
            <h2 className="text-primary">Technology Used</h2>
            <h6>
                <span className="text-secondary">1. ReactJs</span>
            </h6>
            <h6>
                <span className="text-secondary">2. Bootstrap(Framework)</span>
            </h6>
            <h6>
                <span className="text-secondary">3. React-router-dom</span>
            </h6>
            <h6>
                <span className="text-secondary">4. Node.js(Express for Backend)</span>
            </h6>
            <h6>
                <span className="text-secondary">5. MongoDb(Database)</span>
            </h6>
            <h6>
                <span className="text-secondary">6. Firebase(ClientSideDeploy)</span>
            </h6>
            <h6>
                <span className="text-secondary">7. Heroku(ServerSide Deploy).</span>
            </h6>   
            </div>
         <div className="col-md-5 col-sm-12">
            <a href={projectsValue?.link1} target="_blank" rel="noreferrer"><button className="fs-6 p-2 rounded-pill">GitHub Client Link</button></a>
            <a href={projectsValue?.link2} target="_blank" rel="noreferrer"><button className="fs-6 p-2 rounded-pill mx-2">GitHub server Link</button></a>
            <a href={projectsValue?.live} target="_blank" rel="noreferrer"><button className="fs-6 p-2 rounded-pill mx-2">Live View</button></a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
