import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="container my-4 py-4">
      <div className="service-title position-relative d-flex justify-content-center align-items-center">
        <h1 className="display-1 text-uppercase about ">my project!</h1>
        <h1 className="position-absolute  text-uppercase text-dark">
          my project{" "}
        </h1>
      </div>
      {/* ========project start here====== */}
      <div className=" row gx-5">
        {projects.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>

      {/* ========project end here====== */}
    </div>
  );
};

export default Projects;
