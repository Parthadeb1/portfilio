import React from "react";

const Services = () => {
  return (
    <div className="container  py-4">
      <div className="service-title position-relative d-flex justify-content-center align-items-center">
        <h1 className="display-1 text-uppercase about ">What I Do!</h1>
        <h1 className="position-absolute  text-uppercase text-dark">
          What I Do!!{" "}
        </h1>
      </div>
      <div className="row text-center mt-3">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="service-item shadow rounded p-3">
            <div className="fs-3 text-danger my-3">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="fs-5 py-2">Web Development</h3>
            <p className="text-muted text">
              I am mern Stack developer. I used to work as a Frontend developer in Web Development. I have 1 year eperience in this field. I used to work with the framework like bootstrap, tailwind and more technologies.  
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="service-item shadow rounded p-3">
            <div className="fs-3 text-danger my-3">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3 className="fs-5 py-2">Creative Design</h3>
            <p className="text-muted text">
              Design is the best part for a website to make it Awesome to look. I focus on design so that the website look stunning to the user. I love to do any website to look beautiful and make it awesome.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="service-item shadow rounded p-3">
            <div className="fs-3 text-danger my-3">
              <i className="fab fa-react"></i>
            </div>
            <h3 className="fs-5 py-2">React Development</h3>
            <p className="text-muted lh-base text">
              I used to make website with reactjs which is the library of JavaScript so that any website can create very easily with good fuctionality.By using Reactjs to make any website its make the life very Easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
