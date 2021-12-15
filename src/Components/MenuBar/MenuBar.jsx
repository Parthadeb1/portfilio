import React, { useState } from "react";
import "./MenuBar.css";
import { Link } from "react-router-dom";

const MenuBar = () => {
    const [click, setClick] =useState(false);

    const handleClick = () =>{
        setClick(!click);
    }

  return (
    <>
      <nav className="navbar">
        <div className="nav_container">
          <Link exact to="/home" className="nav_logo">
            Partha
          </Link>

          <ul className={click? "nav_menu active":"nav_menu"}>
            <li className="nav_item">
              <Link exact to="/home"  onClick={handleClick} activeClassName="active" className="nav_links">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link exact to="/projects" onClick={handleClick} activeClassName="active" className="nav_links">
                Projects
              </Link>
            </li>
            <li className="nav_item">
              <Link exact to="/blogs" onClick={handleClick} activeClassName="active" className="nav_links">
                Blogs
              </Link>
            </li>
            <li className="nav_item">
              <Link exact to="/about" onClick={handleClick} activeClassName="active" className="nav_links">
                About
              </Link>
            </li>
            <li className="nav_item">
              <Link exact to="/contact" onClick={handleClick} activeClassName="active" className="nav_links">
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav_icon" onClick={handleClick}>
              <i className={click? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuBar;
