import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/images/logo3.jpeg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div>
          <a class="navbar-brand" href="/">
            <img src={logo} width="100" height="100" alt="" />
          </a>
        </div>
        <div className="container">
          <div class="right">
            <ul class="tinfo last">
              <li class="left">
                <em>Call Us :</em>
                <strong>+917620576648 </strong>
              </li>
            </ul>
            <ul class="tinfo">
              <li>
                <em>Email Us :</em>
                <strong>
                  <a href="gmail.com">medicon.healthcare76@gmail.com </a>
                </strong>
              </li>
            </ul>
          </div>
          {/* <NavLink className="navbar-brand" to="/">Medicon</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeclassname="menu_active"
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="menu_active"
                  className="nav-link"
                  to="/service"
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeclassname="menu_active"
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeclassname="menu_active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
