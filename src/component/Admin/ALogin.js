import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../Navbar";
import { useNavigate } from "react-router";
import loginimg from "../../images/LoginPage.jpeg";
import LoginValidation from "../../loginValidation";
import Footer2 from "../../Footer2";

function ALogin() {
  const [Admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const nav = useNavigate();

  const handleInput = (e) => {
    setAdmin({ ...Admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(LoginValidation(Admin));
    setSubmitted(true);
  };
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && submitted) {
      console.log(Admin);

      axios
        .post("http://localhost:8081/Admin/signin", Admin)
        .then((resp) => {
          console.log(resp);
          let result = resp.data;
          localStorage.setItem("uname", result.admin_name);
          localStorage.setItem("id", result.admin_id);
          nav("/ALoginHome");
        })
        .catch((error) => {
          console.log("Error", error);
          alert("Invalid admin name or password");
        });
    }
  }, [errors]);

  return (
    <div>
      <NavBar />
      <div>
        <section Class="vh-100" style={{ backgroundColor: "none" }}>
          <div Class="container py-5 h-100">
            <div Class="row d-flex justify-content-center align-items-center h-100">
              <div Class="col col-xl-10">
                <div Class="card" style={{ borderRadius: "1rem" }}>
                  <div Class="row g-0">
                    <div Class="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src={loginimg}
                        alt="login form"
                        class="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div Class="col-md-6 col-lg-7 d-flex align-items-center">
                      <div Class="card-body p-4 p-lg-5 text-black">
                        <form onSubmit={handleSubmit}>
                          <div Class="d-flex align-items-center mb-3 pb-1">
                            <i
                              Class="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            ></i>
                            <span Class="h1 fw-bold mb-0">Admin Login</span>
                          </div>

                          <div Class="form-outline mb-4">
                            <input
                              type="text"
                              id="form2Example17"
                              Class="form-control form-control-lg"
                              name="email"
                              value={Admin.email}
                              onChange={handleInput}
                            />
                            {errors.email && (
                              <small classNameName="text-danger float-right">
                                {errors.email}
                              </small>
                            )}
                            <label Class="form-label" for="form2Example17">
                              Admin Name
                            </label>
                          </div>

                          <div Class="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example27"
                              Class="form-control form-control-lg"
                              name="password"
                              value={Admin.password}
                              onChange={handleInput}
                            />
                            {errors.password && (
                              <small classNameName="text-danger float-right">
                                {errors.password}
                              </small>
                            )}
                            <label Class="form-label" for="form2Example27">
                              Password
                            </label>
                          </div>
                          <div Class="pt-1 mb-4">
                            <button Class="btn btn-dark btn-lg btn-block">
                              Login
                            </button>
                          </div>
                          
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br/>
        <br/>
        <br/>
      </div>
      <Footer2 />
    </div>
  );
}

export default ALogin;
