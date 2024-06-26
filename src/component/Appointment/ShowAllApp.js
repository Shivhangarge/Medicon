import React, { Component } from "react";
import Header from "../Header/Header";
import Footer2 from "../../Footer2";

export default class ShowAllApp extends Component {
  state = {
    Appointment: [],
  };

  async componentDidMount() {
    const response = await fetch("/Appointment/show");
    const body = await response.json();
    this.setState({ Appointment: body });
  }

  render() {
    const { Appointment } = this.state;
    return (
      <div>
        <Header />
        <div style={{ margin: 40 }}>
          <table
            class="table table-default table-bordered table-responsive "
            style={{ border: "solid" }}
          >
            <thead class="thead-default">
              <tr>
                <th>ID</th>
                <th>appoint date</th>
                <th>Doctor Id</th>
                <th>Patient Id</th>
                <th>prescription title</th>
                <th>prescription detail</th>
              </tr>
            </thead>
            {Appointment.map((app) => (
              <tbody>
                <tr key={app.appointId}>
                  <td>{app.appointId}</td>
                  <td>{app.appointDate}</td>
                  <td>{app.doctorId}</td>
                  <td>{app.patientId}</td>
                  <td>{app.prescriptionTitle}</td>
                  <td>{app.prescriptionDetails}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <Footer2 />
      </div>
    );
  }
}
