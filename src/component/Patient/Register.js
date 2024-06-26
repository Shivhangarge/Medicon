import React, { useState } from "react";
import NavBar from "../../Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import registerPage from "../../images/RegistrationPage.jpeg";
import PatientValidation from "../../PatientValidation";
import Footer2 from "../../Footer2";


export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

function Register() {
  const [Patient, setPatient] = useState({
    email: "",
    password: "",
    cpassword: "",
    firstName: "",
    lastName: "",
    address: "",
    gender: "",
    contact: "",
    date: "",
  });

  const nav = useNavigate();
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  // const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setPatient({ ...Patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(PatientValidation(Patient));
    if (!Patient.gender) {
      let obj = {};
      obj.gender = "Gender is required";
      setErrors(obj);
    }
    setSubmitted(true);
  };
  //const newRecord = { ...Patient };

  console.log(Patient);
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitted) {
      console.log(Patient);

      axios
        .post("http://localhost:8081/Patient/register", Patient)
        .then((resp) => {
          console.log(resp);
          swal({
            title: "Success!",
            text: "Patient registered successfully",
            icon: "success",
            button: "OK",
          });
          nav("/PLogin");
        })
        .catch((error) => {
          console.log("Error", error);
          swal({
            title: "Error!",
            text: "You already have an account! Please login !",
            icon: "error",
            button: "OK",
          });
          setPatient({
            ...Patient,
            email: "",
            password: "",
            cpassword: "",
            firstName: "",
            lastName: "",
            address: "",
            gender: "",
            contact: "",
            date: "",
          });
        });
    }
  }, [errors]);

  return (
    <div>
      <NavBar />
      <div>
        <section class="h-100 " style={{ backgroundColor: "none" }}>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col">
                <div class="card card-registration my-4">
                  <div class="row g-0">
                    <div class="col-xl-6 d-none d-xl-block">
                      <img
                        src={registerPage}
                        alt="Sample photo"
                        class="img-fluid"
                        style={{
                          borderTopLeftRadius: ".25rem",
                          borderBottomLeftRadius: ".25rem",
                        }}
                      />
                    </div>
                    <div class="col-xl-6">
                      <form onSubmit={handleSubmit}>
                        <div class="card-body p-md-5 text-black">
                          <h3 class="mb-5 text-uppercase">
                            Patient registration form
                          </h3>

                          <div class="row">
                            <div class="col-md-12 mb-4">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1m"
                                  name="firstName"
                                  class="form-control form-control-lg"
                                  value={Patient.firstName}
                                  onChange={handleInput}
                                  required
                                />
                                {errors.firstName && (
                                  <medium className="text-danger float-right">
                                    {errors.firstName}
                                  </medium>
                                )}
                                <label class="form-label" for="form3Example1m">
                                  First Name
                                </label>
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-md-12 mb-4">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1m"
                                  name="lastName"
                                  class="form-control form-control-lg"
                                  value={Patient.lastName}
                                  onChange={handleInput}
                                  required
                                />
                                {errors.lastName && (
                                  <medium className="text-danger float-right">
                                    {errors.lastName}
                                  </medium>
                                )}
                                <label class="form-label" for="form3Example1m">
                                  Last Name
                                </label>
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-md-12 mb-4">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1m"
                                  name="address"
                                  class="form-control form-control-lg"
                                  value={Patient.address}
                                  onChange={handleInput}
                                  required
                                />
                                {errors.address && (
                                  <medium className="text-danger float-right">
                                    {errors.address}
                                  </medium>
                                )}
                                <label class="form-label" for="form3Example1m">
                                  Address
                                </label>
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-md-12 mb-4">
                              <div class="form-outline">
                                <input
                                  type="date"
                                  id="form3Example1m"
                                  name="date"
                                  class="form-control form-control-lg"
                                  value={Patient.date}
                                  onChange={handleInput}
                                  required
                                />
                                <label class="form-label" for="form3Example1m">
                                  Date of Birth
                                </label>
                              </div>
                            </div>
                          </div>

                          <div onChange={handleInput}>
                            <label> Gender : </label>
                            <input
                              type="radio"
                              value="male"
                              id="male"
                              name="gender"
                              style={{ marginLeft: 20 }}
                              required
                            />
                            <label for="male">Male</label>

                            <input
                              type="radio"
                              value="female"
                              id="female"
                              name="gender"
                              style={{ marginLeft: 20 }}
                              required
                            />
                            <label for="female">Female</label>

                            <input
                              type="radio"
                              value="other"
                              id="other"
                              name="gender"
                              style={{ marginLeft: 20 }}
                              required
                            />
                            <label for="female">Other</label>
                            <br />
                            <br />
                            {errors.gender && (
                              <medium className="text-danger float-right">
                                {errors.gender}
                              </medium>
                            )}
                          </div>

                          <div class="form-outline mb-4">
                            <input
                              type="tel"
                              id="form3Example90"
                              name="contact"
                              value={Patient.contact}
                              pattern="^[7-9][0-9]{9}"
                              class="form-control form-control-lg"
                              onChange={handleInput}
                              required
                            />
                            <label class="form-label" for="form3Example90">
                              Contact
                            </label>
                          </div>

                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              id="form3Example97"
                              name="email"
                              value={Patient.email}
                              class="form-control form-control-lg"
                              onChange={handleInput}
                              required
                            />
                            {errors.email && (
                              <medium className="text-danger float-right">
                                {errors.email}
                              </medium>
                            )}
                            <label class="form-label" for="form3Example97">
                              Email ID
                            </label>
                          </div>

                          <div class="form-outline mb-4">
                            <input
                              type="password"
                              id="form3Example99"
                              name="password"
                              value={Patient.password}
                              class="form-control form-control-lg"
                              onChange={handleInput}
                            />
                            {errors.password && (
                              <medium className="text-danger float-right">
                                {errors.password}
                              </medium>
                            )}
                            <label class="form-label" for="form3Example99">
                              Password
                            </label>
                          </div>
                          <div class="form-outline mb-4">
                            <input
                              type="password"
                              id="form3Example99"
                              name="cpassword"
                              value={Patient.cpassword}
                              class="form-control form-control-lg"
                              onChange={handleInput}
                            />
                            {errors.password && (
                              <medium className="text-danger float-right">
                                {errors.cpassword}
                              </medium>
                            )}
                            <label class="form-label" for="form3Example99">
                              Confirm Password
                            </label>
                          </div>

                          {/* <div id="errormsg"></div> */}
                          <div className="text-center ml-auto ">
                            <Link className="text-dark" to="/Login">
                              Already have an account?
                            </Link>
                          </div>
                          <div class="d-flex justify-content-end pt-3">
                            {/* <button type="reset" class="btn btn-light btn-lg">
                              Reset all
                            </button> */}
                            <button
                              type="submit"
                              class="btn btn-dark btn-lg btn-block"
                            >
                              Submit form
                            </button>{" "}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer2/>
    </div>
  );
}

export default Register;
