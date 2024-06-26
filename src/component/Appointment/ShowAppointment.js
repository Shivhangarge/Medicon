import React, { Component } from "react";
import { Link } from "react-router-dom";
import DHeader from "../Doctor/DHeader";
import Footer2 from "../../Footer2";

export default class ShowAppointment extends Component {
  state = {
    Appointment: [],
    Patient: [],
    requestOptions: [],
  };

  doctorId = JSON.parse(localStorage.getItem("id"));

  async componentDidMount() {
    console.log(this.doctorId);

    const response = await fetch(
      "/Appointment/showAppointmentName/"+ this.doctorId
    );
    const body = await response.json();
    this.setState({ Appointment: body });
    console.log(response);
  }

  render() {
    return (
      <div>
        <DHeader />
        <br />
        <form>
          <h1 style={{ textAlign: "center" }}>
            <u>Appointment List</u>
          </h1>
          <div style={{ margin: 40 }}>
            <table
              class="table table-default table-bordered table-responsive "
              style={{ border: "solid" }}
            >
              <thead class="thead-default">
                <tr>
                  <th>Serial No</th>
                  <th>Name of patient</th>
                  <th> Date</th>
                  <th>Details</th>
                </tr>
              </thead>
              {this.state.Appointment.map((app, i = 1) => (
                <tbody>
                  <tr key={app.appoint.appointId}>
                    <td>{++i}</td>
                    <td>{app.name}</td>
                    <td>{app.appoint.appointDate}</td>
                    <td>
                      <Link
                        className="btn btn-dark"
                        to={
                          "/PatientDetails/" +
                          app.appoint.patientId +
                          "/" +
                          app.appoint.appointId
                        }
                      >
                        Show Details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </form>
        <div style={{ marginBottom: 2 }}>
          <Footer2 />
        </div>
      </div>
    );
  }
}
