import React from "react";
import p2 from "../../../img/p2.jpg";

const About = () => {
  return (
    <div className="container my-5" id="about">
      <div className="position-relative d-flex justify-content-center align-items-center">
        <h1 className="display-1 text-uppercase about">About</h1>
        <h1 className="position-absolute text-uppercase text-dark">
          About Myself
        </h1>
      </div>
      <div className="row align-items-center my-5">
        <div className="col-lg-5 pb-4 pb-lg-0">
          <img src={p2} className="rounded img-fluid" alt="about" />
        </div>
        <div className="col-lg-7">
          <h3 className="mb-4">MERN STACK Developer</h3>
          <p className="text-muted fs-6 fw-bolder">
          I'm a front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me. I have 1 years experiences in Front-end. Feel free to Hire me.. thank you!!
          </p>
          <div className="row mb-3">
            <div className="col-sm-6 py-1">
              <h6>
                Name: <span className="text-secondary">Partha Debnath</span>
              </h6>
            </div>
            <div className="col-sm-6 py-1">
              <h6>
                Birthday: <span className="text-secondary">30 Oct 1998</span>
              </h6>
            </div>
            <div className="col-sm-6 py-1">
              <h6>
                Degree: <span className="text-secondary">Houners in CSE</span>
              </h6>
            </div>
            <div className="col-sm-6 py-1">
              <h6>
                Experience: <span className="text-secondary">1 year</span>
              </h6>
            </div>
            <div className="col-sm-6 py-1">
              <h6>
                Phone: <span className="text-secondary">+8801851247354</span>
              </h6>
            </div>
            <div className="col-sm-6 py-1">
              <h6>
                Email:{" "}
                <span className="text-secondary">Parthadebj07@gmail.com</span>
              </h6>
            </div>
            <div className="col-sm-6 py-1">
              <h6>
                Address:{" "}
                <span className="text-secondary">Dhanmondi 2, Dhaka</span>
              </h6>
            </div>
          </div>
          {/* =========BUtton========= */}
          <a href="https://www.linkedin.com/in/partha-debnath01/">
            <button className="button primary-btn">Hire Me</button>
          </a>
        </div>
      </div>

      {/* =======skills section start========= */}
      <div className="py-5">
        <div className="position-relative d-flex justify-content-center align-items-center">
          <h1 className="display-1 text-uppercase about ">Skills</h1>
          <h1 className="position-absolute  text-uppercase text-dark">
            My Skills
          </h1>
        </div>
        {/* =======skills========= */}

        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-width-bold">HTML</h6>
                <h6 className="font-width-bold">90%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-width-bold">CSS</h6>
                <h6 className="font-width-bold">85%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar  bg-success"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-width-bold">JAVASCRIPT</h6>
                <h6 className="font-width-bold">60%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-width-bold">BOOTSTRAP</h6>
                <h6 className="font-width-bold">70%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-width-bold">REACTJS</h6>
                <h6 className="font-width-bold">65%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-width-bold">EXPRESSJS</h6>
                <h6 className="font-width-bold">50%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-width-bold">NODEJS</h6>
                <h6 className="font-width-bold">45%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "45%" }}
                  aria-valuenow="45"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-width-bold">MONGODB</h6>
                <h6 className="font-width-bold">75%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* ========Skill section end========== */}
      </div>
    </div>
  );
};

export default About;
