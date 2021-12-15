import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({ item }) => {
  const {img,id} = item;
  return (
    <div className="col-md-4 col-lg-4 mt-3">
      <div className="p-1 shadow-sm rounded">
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <div>
        <img src={img} alt="" className="p-img" />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center p-2 my-3">
        <NavLink to={`/singleProjects/${id}`}>
          <button className="btn btn-outline-dark">See More</button>
        </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
