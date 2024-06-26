import React, { Component } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export default class DoctorList extends Component {
  state = {
    Doctor: [],
  };

  async componentDidMount() {
    const response = await fetch("/Doctor/showDoctors/show");
    const body = await response.json();
    this.setState({ Doctor: body });
  }
  render() {
    const { Doctor } = this.state;
    return (
      <div>
        <Header />
        <div className="App">
          <br />
          <h1>
            <u>Doctor List</u>
          </h1>
          <div>
            <div style={{ margin: 40 }}>
              <table
                class="table table-default table-bordered table-responsive "
                style={{ border: "solid" }}
              >
                <thead class="thead-default">
                  <tr>
                    <th>Doctor Id</th>
                    <th>Doctor Name</th>
                    <th>Doctor Email</th>
                    <th>Doctor Degree</th>
                    <th>Specialization</th>
                    <th>Fees</th>
                    <th>Contact</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Doctor.map((resources) => (
                    <tr key={resources.id}>
                      <td>{resources.doctorId}</td>
                      <td>{resources.doctorName}</td>
                      <td>{resources.email}</td>
                      <td>{resources.doctorDegree}</td>
                      <td>{resources.doctorSpecialization}</td>
                      <td>{resources.doctorFees}</td>
                      <td>{resources.doctorContact}</td>
                      <td>
                        <div class="d-grid gap-2 justify-content-left">
                          <tr>
                            <td>&nbsp;&nbsp;&nbsp;</td>
                            <td>
                              {/* <button type="submit" class="btn btn-primary btn-sm btn-block">Edit</button> */}
                              <Link
                                className="btn btn-primary"
                                to={"/Doctor/Edit/" + resources.doctorId}
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
      </div>
    );
  }
}
