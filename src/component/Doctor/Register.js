import React, { useState } from "react";
import NavBar from "../../Navbar";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import registerPage from "../../images/RegistrationPage.jpeg";
import DoctorValidation from "../../DoctorValidation";
import Footer2 from "../../Footer2";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

function Register() {
  const [Doctor, setDoctor] = useState({
    doctorName: "",
    email: "",
    password: "",
    cpassword: "",
    doctorSpecialization: "",
    doctorDegree: "",
    doctorFees: "",
    doctorContact: "",
  });

  const nav = useNavigate();
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setDoctor({ ...Doctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(DoctorValidation(Doctor));
    setSubmitted(true);
  };

  console.log(Doctor);
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitted) {
      console.log(Doctor);

      axios
        .post("http://localhost:8081/Doctor/registration", Doctor)
        .then((resp) => {
          console.log(resp);
          swal({
            title: "Success!",
            text: "Doctor registered successfully",
            icon: "success",
            button: "OK",
          });
          nav("/DLogin");
        })
        .catch((error) => {
          console.log("Error", error);
          swal({
            title: "Error!",
            text: "You already have an account! Please login !",
            icon: "error",
            button: "OK",
          });
          setDoctor({
            ...Doctor,
            doctorName: "",
            email: "",
            password: "",
            cpassword: "",
            doctorSpecialization: "",
            doctorDegree: "",
            doctorFees: "",
            doctorContact: "",
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
                            Doctor Registration Form
                          </h3>

                          <div class="row">
                            <div class="col-md-12 mb-4">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1m"
                                  name="doctorName"
                                  class="form-control form-control-lg"
                                  value={Doctor.doctorName}
                                  onChange={handleInput}
                                  required
                                />
                                {errors.doctorName && (
                                  <medium className="text-danger float-right">
                                    {errors.doctorName}
                                  </medium>
                                )}
                                <label class="form-label" for="form3Example1m">
                                  Full Name
                                </label>
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-md-12 mb-4">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1m1"
                                  name="doctorDegree"
                                  value={Doctor.doctorDegree}
                                  class="form-control form-control-lg"
                                  onChange={handleInput}
                                  required
                                />
                                {errors.doctorDegree && (
                                  <medium className="text-danger float-right">
                                    {errors.doctorDegree}
                                  </medium>
                                )}
                                <label class="form-label" for="form3Example1m1">
                                  Degree
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12 mb-4">
                              <div class="form-outline">
                                <label class="form-label" for="form3Example1m1">
                                  Specialization : &nbsp;
                                </label>
                                <select
                                  defaultChecked="choose"
                                  name="doctorSpecialization"
                                  value={Doctor.doctorSpecialization}
                                  onChange={handleInput}
                                  required
                                >
                                  <option value="none" selected hidden>
                                    Select An Option
                                  </option>
                                  <option
                                    name="doctorSpecialization"
                                    value="Gynacologist"
                                  >
                                    Gynacologist
                                  </option>
                                  <option
                                    name="doctorSpecialization"
                                    value="PhysioTherapist"
                                  >
                                    PhysioTherapist
                                  </option>
                                  <option
                                    name="doctorSpecialization"
                                    value="Diabetics"
                                  >
                                    Diabetologist
                                  </option>
                                  <option
                                    name="doctorSpecialization"
                                    value="Oncologist"
                                  >
                                    Oncologist
                                  </option>
                                  <option
                                    name="doctorSpecialization"
                                    value="Nuerologist"
                                  >
                                    Nuerologist
                                  </option>
                                  <option
                                    name="doctorSpecialization"
                                    value="Pediatric"
                                  >
                                    Pediatric
                                  </option>
                                  <option
                                    name="doctorSpecialization"
                                    value="Dentist"
                                  >
                                    Dentist
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div class="form-outline mb-4">
                            <input
                              pattern="^[5-9][0-9]{9}"
                              type="text"
                              id="form3Example90"
                              name="doctorContact"
                              value={Doctor.doctorContact}
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
                              type="text"
                              id="form3Example90"
                              name="doctorFees"
                              value={Doctor.doctorFees}
                              class="form-control form-control-lg"
                              onChange={handleInput}
                              required
                            />
                            <label class="form-label" for="form3Example90">
                              fees ( ₹ ){" "}
                            </label>
                          </div>

                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              id="form3Example97"
                              name="email"
                              value={Doctor.email}
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
                              value={Doctor.password}
                              class="form-control form-control-lg"
                              onChange={handleInput}
                              required
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

                          <div id="errormsg"></div>

                          <div class="form-outline mb-4">
                            <input
                              type="password"
                              id="form3Example99"
                              name="cpassword"
                              value={Doctor.cpassword}
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

                          <div class="d-flex justify-content-end pt-3">
                            {/* <button
                              type="reset"
                              class="btn btn-light btn-lg"
                              value="Reset"
                            >
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
      <Footer2 />
    </div>
    
  );
}

export default Register;
