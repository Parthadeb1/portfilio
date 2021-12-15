import React from "react";
import './Home.css'
import Typical from "react-typical";
import p1 from "../../../img/p1.jpg";
import About from "../About/About";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="container my-3" id="home">
      <div className="row justify-content-center align-items-center ">
        <div className="col-md-6 col-lg-6 col-12 profile-title">
          <h4 className="lh-lg">
            Hi, My Name is <span className="text-info">Partha Debnath</span>
          </h4>
          <h1>I am a
            <Typical
              steps={["Frontend Developer", 2000, "React Developer", 2000, "MERN Stack Developer", 2000]}
              loop={Infinity}
              className="text-danger"
            />
          </h1>
          <p className="h6 lh-lg">Knack of Building application With REACTJS, HTML, CSS, JAVASCRIPT</p>
          <div className="">
            {/* <button className="btn primary-btn">
                Hire Me
            </button> */}
            <a href="Partha's_resume.pdf" download="Partha's_resume.pdf" target="_blank">
                <button className="button primary-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-12 mt-3 profile-img">
          <img
            src={p1}
            className=""
            alt="partha's img"
          />
        </div>
      </div>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
