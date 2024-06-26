import React, { useState } from "react";
import NavBar from "../../Navbar";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import Footer2 from "../../Footer2";
import adminValidation from "./adminValidation";



function AddAdmin() {
  const [Admin, setAdmin] = useState({
    adminId: "",
    adminName: "",
    password: "",
    
  });

  const nav = useNavigate();
   const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setAdmin({ ...Admin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(adminValidation(Admin));
    setSubmitted(true);
  };

  console.log(Admin);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitted) {
      console.log(Admin);
      axios
        .post("http://localhost:8081/Admin/AddAdmin", Admin)
        .then((resp) => {
          console.log(resp);
          swal({
            title: "Success!",
            text: "Admin Added successfully",
            icon: "success",
            button: "OK",
          });
          nav("/ALoginHome");
        })
        .catch((error) => {
          console.log("Error", error);
          swal({
            title: "Error!",
            text: "Admin is not Added !",
            icon: "error",
            button: "OK",
          });
          setAdmin({
            ...Admin,
            adminId: "",
            adminName: "",
            password: "",
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
                    
                    <div class="col-xl-12">
                      <form onSubmit={handleSubmit}>
                        <div class="card-body p-md-5 text-black">
                          <h3 class="mb-5 text-uppercase">
                            Add New Admin
                          </h3>

                          <div class="row">
                            <div class="col-md-12 mb-4">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1m"
                                  name="adminId"
                                  class="form-control form-control-lg"
                                  value={Admin.adminId}
                                  onChange={handleInput}
                                  required
                                />
                                <label class="form-label" for="form3Example1m">
                                  Admin Id
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
                                  name="adminName"
                                  value={Admin.adminName}
                                  class="form-control form-control-lg"
                                  onChange={handleInput}
                                  required
                                />
                                {errors.adminName && (
                                  <medium className="text-danger float-right">
                                    {errors.adminName}
                                  </medium>
                                )}
                                <label class="form-label" for="form3Example1m1">
                                  Admin Name
                                </label>
                              </div>
                            </div>
                          </div>
                          
                          <div class="form-outline mb-4">
                            <input
                              type="password"
                              id="form3Example99"
                              name="password"
                              value={Admin.password}
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
                          <div class="d-flex justify-content-end pt-3 ">
                            <button
                              type="submit"
                              class="btn btn-dark btn-lg btn-block"
                            >
                              Add Admin
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

export default AddAdmin;