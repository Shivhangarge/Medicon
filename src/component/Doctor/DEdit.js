import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Footer2 from "../../Footer2";
import Header from "../Header/Header";
import axios from "axios";

export default function DEdit() {
  let { id } = useParams();
  const [Doctor, setDoctor] = useState({});
  const nav = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setDoctor({ ...Doctor, [name]: value });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/Doctor/findDoctor/" + id)
      .then((response) => {
        setDoctor(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Doctor);

    axios
      .put("http://localhost:8081/Doctor/updateDoc/" + id, Doctor)
      .then((response) => {
        alert("updated Suceesfully");
        console.log("Done");
        nav("/Doctor/showDoctors/show");
      })
      .catch((error) => console.log(error.message));
  };

  const handleDelete = (e) => {
    e.preventDefault();

    fetch("/Doctor/delete/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("deleted Suceesfully");
          console.log("Done");
          nav("/Doctor/showDoctors/show");
        } else {
          alert("Not deleted");
          console.log("Failedxxxxxxx");
        }
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
              <h1 style={{ textAlign: "center" }}>Doctor Details</h1>
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
                  <h4>Doctor Id : {Doctor.docotorId} &nbsp; </h4>
                </label>
                <br />
                <label for="" class="form-label">
                  {" "}
                  <h4>Doctor name : &nbsp; </h4>
                </label>
                <input
                  type="text"
                  class="form"
                  name="doctorName"
                  id=""
                  placeholder=""
                  value={Doctor.doctorName}
                  onChange={handleInput}
                  required
                />
                <br />
                <label for="" class="form-label">
                  {" "}
                  <h4>Doctor email : &nbsp;</h4>{" "}
                </label>
                <input
                  type="text"
                  class="form"
                  name="email"
                  id=""
                  placeholder=""
                  value={Doctor.email}
                  onChange={handleInput}
                  required
                />
                <br />
                <label for="" class="form-label">
                  {" "}
                  <h4>Doctor contact : &nbsp;</h4>{" "}
                </label>
                <input
                  type="text"
                  class="form"
                  name="doctorContact"
                  id=""
                  placeholder=""
                  value={Doctor.doctorContact}
                  onChange={handleInput}
                  required
                />
                <br />
                <label for="" class="form-label">
                  {" "}
                  <h4>Doctor Degree : &nbsp;</h4>{" "}
                </label>
                <input
                  type="text"
                  class="form"
                  name="doctorDegree"
                  id=""
                  placeholder=""
                  value={Doctor.doctorDegree}
                  onChange={handleInput}
                  required
                />
                <br />
                <label for="" class="form-label">
                  {" "}
                  <h4> Specialization : &nbsp;</h4>{" "}
                </label>
                {/* <input type="text" class="form" name="email" id="" placeholder="" value={Doctor.doctor_speciel} onChange=""required /> */}
                <select
                  defaultChecked="choose"
                  name="doctorSpecialization"
                  value={Doctor.doctorspecialization}
                  onChange={handleInput}
                  required
                >
                  <option value={Doctor.doctorSpecialization} selected hidden>
                    {" "}
                    {Doctor.doctorSpecialization}
                  </option>
                  <option name="ddoctorSpecialization" value="Gynacologist">
                    Gynacologist
                  </option>
                  <option name="doctorSpecialization" value="PhysioTherapist">
                    PhysioTherapist
                  </option>
                  <option name="doctorSpecialization" value="Diabetics">
                    Diabetologist
                  </option>
                  <option name="doctorSpecialization" value="Oncologist">
                    Oncologist
                  </option>
                  <option name="doctorSpecialization" value="Nuerologist">
                    Nuerologist
                  </option>
                  <option name="doctorSpecialization" value="Pediatric">
                    Pediatric
                  </option>
                  <option name="doctorSpecialization" value="Dentist">
                    Dentist
                  </option>
                </select>
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
      <Footer2 />
    </div>
  );
}
