import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import DatePicker from "react-datepicker";
import docimg from "../../images/doctor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer2 from "../../Footer2";
import PHeader from "../Patient/PHeader";
import axios from "axios";

export default function ShowSpecialDoctor() {
  const nav = useNavigate();
  let { id } = useParams();
  let patid = localStorage.getItem("id");

  const [Doctor, setDoctor] = useState([]);
  const [selectedDate, setSelectDate] = useState(null);

  const [Appointment, setAppointment] = useState({
    appointId: "",
    appointDate: "",
    patientId: patid,
    doctorId: "",
    prescriptionTitle: "",
    prescriptionDetails: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e);

    Appointment.appointDate = setSelectDate({ ...Appointment, [name]: value });

    setAppointment({ ...Appointment, [name]: value });
  };

  useEffect(() => {
    axios.get("http://localhost:8081/Doctor/findDoctorSpecial/" + id).then(
      (response) => {
        setDoctor(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  function sayHello(doctorId) {
    console.log("hello" + doctorId);
    console.log("hello hi");
    setAppointment({ ...Appointment, ["doctorId"]: doctorId });
    console.log(Appointment);
  }

  const handlechange = (e) => {
    e.preventDefault();

    console.log("date " + Appointment.appointDate);
    console.log("Patentid " + Appointment.patientId);
    console.log("Doctorid " + Appointment.doctorId);
    console.log("hello");
    console.log(Appointment);
    localStorage.setItem("App", JSON.stringify(Appointment));

    axios
      .post("http://localhost:8081/Appointment/bookApp", Appointment)
      .then((response) => {
        nav("/PAppointment");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <PHeader />
      <h1 style={{ textAlign: "center" }}>{id} Doctor</h1>
      <form onSubmit={handlechange}>
        <div className="container-fluid mb-5">
          <h4 style={{ textAlign: "end", marginRight: 180 }}>
            select date :
            <input
              type="date"
              name="appointDate"
              value={Appointment.appointDate}
              onChange={handleInput}
              required="required"
            />
          </h4>
          <div className="row gy-4">
            <div className="col-10 mx-auto">
              <div className="row">
                {console.log(Doctor)}
                {Doctor.map((app, i) => (
                  <div className="col-md-4 col-10 mx-auto">
                    <h1> {} </h1>
                    <div className="card col-lg-10">
                      <img src={docimg} className="card-img-top" alt="" />
                      <div className="card-body">
                        <h3 className="card-title font-weight-bold">
                          {app.doctorName}
                        </h3>
                        <h5>
                          {app.doctorDegree} ({app.doctorSpecialization})
                        </h5>
                        <h5>
                          {" "}
                          <FontAwesomeIcon icon="fa-solid fa-circle-phone" />
                          {app.doctorContact}
                        </h5>
                        <button
                          type="submit"
                          className="btn btn-dark"
                          onClick={() => sayHello(app.doctorId)}
                        >
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer2 />
    </div>
  );
}
