import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer2 from "../../Footer2";
import { useNavigate } from "react-router-dom";
import DHeader from "../Doctor/DHeader";
import axios from "axios";

export default function PatientDetails() {
  const [show, setShow] = useState(false);
  const nav = useNavigate();

  const errorblock = document.getElementById("msg");

  const [Patient, setPatient] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    gender: "",
    contact: "",
    date: "",
  });
  const [Appointment, setAppointment] = useState({
    appointId: "",
    appointDate: "",
    patientId: "",
    doctorId: "",
    prescriptionTitle: "",
    prescriptionDetails: "",
    status: "",
  });

  const [i, setI] = useState(1);

  const [newAppointment, setnewAppointment] = useState([]);

  let { id } = useParams();
  let { id1 } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get("http://localhost:8081/Patient/findPatient/" + id, Patient).then(
      (response) => {
        console.log(response);
        setPatient(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8081/Appointment/findApp/" + id1, Appointment)
      .then(
        (response) => {
          setAppointment(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setAppointment({ ...Appointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8081/Appointment/update", Appointment)
      .then((response) => {
        if (response.ok) {
          console.log("Done");
          setShow(false);
        } else {
          console.log(
            "Failed to update fetch function in Patient details component"
          );
        }
      })
      .catch((error) => console.log(error.message));
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.myFormRef.submit();
    }
  };

  const showHist = () => {
    axios.get("http://localhost:8081/Appointment/patHistory/" + id).then(
      (response) => {
        console.log(response);
        setnewAppointment(response.data);
        console.log(newAppointment);
        setShow(true);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const myClick = () => {
    alert("Priscription Added");
  };

  const handleCloseApp = (e) => {
    e.preventDefault();

    Appointment.status = true;
    axios
      .put("http://localhost:8081/Appointment/update", Appointment)
      .then((response) => {
        console.log(Appointment);
        nav("/ShowApp"); 
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <DHeader />
      <div class="container">
        <div class="row">
          <div className="col-6">
            <form>
              <br />
              <h1 style={{}}>Patient Details</h1>
              <br />
              <fieldset style={{ border: "solid", width: 400, padding: 20 }}>
                <h4>First name : {Patient.firstName}</h4>
                <h4>Last name : {Patient.lastName}</h4>
                <h4>Gender : {Patient.gender}</h4>
                <h4>Email ID : {Patient.email}</h4>
                <h4>Birth Date :{Patient.date}</h4>
                <h4>Contact : {Patient.contact}</h4>
              </fieldset>
              <br />
              <Link
                name=""
                id=""
                class="btn btn-primary"
                to="#"
                role="button"
                onClick={showHist}
              >
                {" "}
                Show History
              </Link>
            </form>
          </div>
          <div className="col-6">
            <br />
            <button
              class="btn btn-danger"
              onClick={handleCloseApp}
              style={{ float: "right" }}
            >
              Close Appointment
            </button>
            <div class="mb-3">
              <form onSubmit={handleSubmit} id={(el) => (this.myFormRef = el)}>
                <br />
                <h1 style={{ textAlign: "center" }}>Add Priscription</h1>
                <br />
                <fieldset
                  style={{
                    border: "solid",
                    width: 600,
                    textAlign: "center",
                    margin: "auto",
                    padding: 20,
                  }}
                >
                  <label for="" class="form-label">
                    {" "}
                    <h4>Title &nbsp; </h4>
                  </label>
                  <input
                    type="text"
                    class="form"
                    name="prescriptionTitle"
                    id=""
                    placeholder=""
                    value={Appointment.prescriptionTitle}
                    onChange={handleInput}
                    required
                  />
                  <br />
                  <label for="" class="form-label">
                    {" "}
                    <h4>Detail &nbsp;</h4>{" "}
                  </label>
                  <textarea
                    type="textarea"
                    class="form"
                    name="prescriptionDetails"
                    id=""
                    placeholder=""
                    rows="8"
                    style={{ width: 300 }}
                    onKeyDown={onEnterPress}
                    value={Appointment.prescriptionDetails}
                    onChange={handleInput}
                    required
                  />
                  <br />
                  <button type="submit" class="btn btn-dark" onClick={myClick}>
                    Submit Prescription
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <hr />
        {show ? (
          <div>
            <h2>
              {" "}
              <u>{Patient.firstName}'s History </u>
            </h2>
            <table
              class="table table-default table-bordered table-responsive table-info"
              style={{ border: "solid" }}
            >
              <thead class="thead-default">
                <tr>
                  <th>ID</th>
                  <th> Date</th>
                  <th>Title</th>
                  <th>detail</th>
                </tr>
              </thead>
              {newAppointment.map((app, i = 1) => (
                <tbody>
                  <tr key={app.appointId}>
                    <td>{++i}</td>
                    <td>{app.appointDate}</td>
                    <td>{app.prescriptionTitle}</td>
                    <td>{app.prescriptionDetails}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        ) : null}
      </div>
      <Footer2 />
    </div>
  );
}
