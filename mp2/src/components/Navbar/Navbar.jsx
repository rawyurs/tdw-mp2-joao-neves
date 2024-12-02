import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo-st.png";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div className="container">
        <Link to="/" className="fs-3 ubuntu-medium navbar-brand">
          <img className="logo" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style>
            {`
                        button[aria-expanded="false"] > .close{
                        display: none;
                            }

                             button[aria-expanded="true"] > .open{
                        display: none;
                            }
                        `}
          </style>
          <i className="fas fa-bars open fw-bold text-dark"></i>
          <i className="fas fa-times close fw-bold text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end fs-5 gap-4"
          id="navbarNav"
        >
          <NavLink activeClassName="active" to="/" className="nav-link">
            Characters
          </NavLink>
          <NavLink to="/episodes" className="nav-link">
            Episodes
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
