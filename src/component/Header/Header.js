import React from "react";
import { Link } from "react-router-dom";
import Clock from "../Time/Clock";
import { useNavigate } from "react-router";
import logo from "../../images/logo3.jpeg";

function Header({ name, title }) {
  const nav = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    nav("/service");
  };
  return (
    <div>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <Clock />
              </li>
              <li>
                <div
                  class="d-flex my-2 my-lg-0"
                  style={{ marginRight: 50, marginLeft: 20 }}
                >
                  <a
                    name=""
                    id=""
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

export default Header;
