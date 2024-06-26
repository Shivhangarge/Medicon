import { useEffect, useState } from "react";
import axios from "axios";
import LoginValidation from "../../loginValidation";
import NavBar from "../../Navbar";
import { useNavigate } from "react-router";
import loginimg from "../../images/LoginPage.jpeg";
import Footer2 from "../../Footer2";


function Login() {
  const [Patient, setPatient] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const nav = useNavigate();

  const handleInput = (e) => {
    setPatient({ ...Patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(LoginValidation(Patient));
    setSubmitted(true);
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && submitted) {
      console.log(Patient);

      axios
        .post("http://localhost:8081/Patient/signin", Patient)
        .then((resp) => {
          console.log(resp);
          let result = resp.data;
          console.log(result.firstName);
          localStorage.setItem("uname", result.firstName);
          localStorage.setItem("id", result.patientId);
          nav("/PAppointment");
        })
        .catch((error) => {
          console.log("Error", error);
          alert("Invalid username or password");
        });
    }
  }, [errors]);

  return (
    <div>
      <NavBar />
      <div>
        <section className="vh-100" style={{ backgroundColor: "none" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-">
                <div
                  className="card col-md-10 "
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src={loginimg}
                        alt="login form"
                        className="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form onSubmit={handleSubmit}>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i
                              className="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            ></i>
                            <span className="h1 fw-bold mb-0">Patient Login</span>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="form2Example17"
                              className="form-control form-control-lg"
                              name="email"
                              value={Patient.email}
                              onChange={handleInput}
                            />
                            {errors.email && (
                              <small classNameName="text-danger float-right">
                                {errors.email}
                              </small>
                            )}
                            <label className="form-label">Email address</label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example27"
                              className="form-control form-control-lg"
                              name="password"
                              value={Patient.password}
                              onChange={handleInput}
                            />
                            {errors.password && (
                              <small classNameName="text-danger float-right">
                                {errors.password}
                              </small>
                            )}
                            <label className="form-label">Password</label>
                          </div>
                          <p
                            className="mb-5 pb-lg-2"
                            style={{ color: "#393f81" }}
                          >
                            <a
                              href="/forgetPasswordPatient"
                              style={{ color: "#393f81" }}
                            >
                              Forget Password?{" "}
                            </a>
                          </p>

                          <div className="pt-1 mb-4">
                            <button className="btn btn-dark btn-lg btn-block">
                              Login
                            </button>
                          </div>

                          <p
                            className="mb-5 pb-lg-2"
                            style={{ color: "#393f81" }}
                          >
                            Don't have an account?{" "}
                            <a
                              href="/Patient/register"
                              style={{ color: "#393f81" }}
                            >
                              Register here
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/><br/>
        <br/><br/><br/>
      </div>
      <Footer2/>
    </div>
  );
}

export default Login;
