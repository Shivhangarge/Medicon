import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Header from "../Header/Header";
import axios from "axios";
import Footer2 from "../../Footer2";


export default function PEdit() {
  let { id } = useParams();
  console.log(id);
  const [Patient, setPatient] = useState({});
  const nav = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setPatient({ ...Patient, [name]: value });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/Patient/findPatient/" + id)
      .then((response) => {
        setPatient(response.data);
        console.log(Patient);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Patient);

    axios
      .put("http://localhost:8081/Patient/update/" + id, Patient)
      .then((response) => {
        alert("updated Suceesfully");
        console.log("Done");
        nav("/Patient/view");
      })
      .catch((error) => console.log(error.message));
  };

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete("/Patient/delete/" + id, Patient)
      .then((response) => {
        alert("deleted Suceesfully");
        console.log("Done");
        nav("/Patient/view");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div class="mb-3">
            <form>
              <br />
              <h1 style={{ textAlign: "center" }}>Patient Details</h1>
              <br />
              <fieldset
                style={{
                  border: "solid",
                  width: 600,
                  margin: "auto",
                  padding: 20,
                }}
              >
                <label for="" class="form-label">
                  {" "}
                  <h4>Patient Id : {Patient.patientId} &nbsp; </h4>
                </label>
                <br />
                <label for="" class="form-label">
                  {" "}
                  <h4>Patient firstname : &nbsp; </h4>
                </label>
                <input
                  type="text"
                  class="form"
                  name="firstName"
                  id=""
                  placeholder=""
                  value={Patient.firstName}
                  onChange={handleInput}
                  required
                />
                <br />
                <label for="" class="form-label">
                  {" "}
                  <h4>Patient lastname : &nbsp; </h4>
                </label>
                <input
                  type="text"
                  class="form"
                  name="lastName"
                  id=""
                  placeholder=""
                  value={Patient.lastName}
                  onChange={handleInput}
                  required
                />
                <br />
                <label for="" class="form-label">
                  {" "}
                  <h4>Patient email : &nbsp;</h4>{" "}
                </label>
                <input
                  type="text"
                  class="form"
                  name="email"
                  id=""
                  placeholder=""
                  value={Patient.email}
                  onChange={handleInput}
                  required
                />
                <br />
                <label for="" class="form-label">
                  {" "}
                  <h4>Patient contact : &nbsp;</h4>{" "}
                </label>
                <input
                  type="text"
                  class="form"
                  name="contact"
                  id=""
                  placeholder=""
                  value={Patient.contact}
                  onChange={handleInput}
                  required
                />
                <br />
                <button
                  type="submit"
                  class="btn btn-dark"
                  onClick={handleSubmit}
                >
                  Update
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  type="reset"
                  class="btn btn-dark"
                  value="submit"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <Footer2/>
    </div>
  );
}
