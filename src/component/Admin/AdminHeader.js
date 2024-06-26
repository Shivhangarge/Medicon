import React from "react";
import Clock from "../Time/Clock";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo3.jpeg";

export default function DHeader() {
  const nav = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    nav("/service");
  };

  const AHome = () => {
    nav("/ALoginHome");
  };

  return (
    <div style={{ textAlign: "left" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div>
            <a class="navbar-brand" href="/PAppointment">
              <img src={logo} width="100" height="100" alt="" />
            </a>
          </div>
        <div className="container">
          <Link class="navbar-brand" to="">
            Medicon
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <Clock />
              </li>
              <li>
                <div
                  class="d-flex my-2 my-lg-0"
                  style={{ float: "right", marginLeft: 30 }}
                >
                  <a
                    class="btn btn-outline-light my-2 my-sm-0"
                    role="button"
                    onClick={AHome}
                  >
                    Admin
                  </a>
                </div>
              </li>

              <li>
                <div
                  class="d-flex my-2 my-lg-0"
                  style={{ marginRight: 30, marginLeft: 20 }}
                >
                  <a
                    class="btn btn-outline-light my-2 my-sm-0"
                    role="button"
                    onClick={logout}
                  >
                    LogOut
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
