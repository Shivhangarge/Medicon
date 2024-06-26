import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer2 from "../../Footer2";


export default class PatientList extends Component {
  state = {
    Patient: [],
  };

  async componentDidMount() {
    const response = await fetch("/Patient/show");
    const body = await response.json();
    this.setState({ Patient: body });
  }

  render() {
    const { Patient } = this.state;
    return (
      <div>
        <Header />
        <div className="App">
          <br />
          <h1>
            <u>Patient List</u>
          </h1>

          <div>
            <div style={{ margin: 40 }}>
              <table
                class="table table-default table-bordered table-responsive "
                style={{ border: "solid" }}
              >
                <thead class="thead-default">
                  <tr>
                    <th> Patient Id </th>
                    <th> Patient Name</th>
                    <th> Patient Email</th>
                    <th> Contact</th>
                    <th> Address</th>
                    <th> Birth Date </th>
                    <th> Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Patient.map((resources) => (
                    <tr key={resources.id}>
                      <td>{resources.patientId}</td>
                      <td>
                        {resources.firstName} {resources.lastName}
                      </td>
                      <td> {resources.email} </td>
                      <td> {resources.contact} </td>
                      <td> {resources.address} </td>
                      <td> {resources.date} </td>
                      <td> {resources.gender} </td>
                      <td>
                        <div class="d-grid gap-2 justify-content-left">
                          <tr>
                            <td>&nbsp;&nbsp;&nbsp;</td>
                            <td>
                              <Link
                                className="btn btn-primary"
                                to={"/Patient/Edit/" + resources.patientId}
                              >
                                Edit
                              </Link>
                            </td>
                          </tr>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer2/>
      </div>
    );
  }
}
