import React, { Component } from "react";
import Footer2 from "../../Footer2";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import PHeader from "../Patient/PHeader";

export default class PatHistory extends Component {
  id = JSON.parse(localStorage.getItem("id"));
  state = {
    Appointment: [],
    doctorId: [],
    pdfObject: [],
  };

  async componentDidMount() {
    const response = await fetch("/Appointment/patHistory/" + this.id);
    const body = await response.json();
    this.setState({ Appointment: body });
  }

  createPDF = async (id) => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    pdf.text("Medicon- Prescription", 0, 20); //string, x-position, y-position
    const data2 = await html2canvas(document.querySelector("#pdftitle"));
    const img1 = data2.toDataURL("image/png");

    const data = await html2canvas(document.querySelector("#pdf" + id));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(img1, "PNG", 0, 30, pdfWidth, pdfHeight);
    pdf.addImage(img, "PNG", 0, 50, pdfWidth, pdfHeight);

    pdf.save("Medicon_Prescription.pdf");
  };

  render() {
    return (
      <div>
        <div>
          <PHeader />
          <br />
          <h1 style={{ textAlign: "center" }}>
            <u>History List</u>
          </h1>
          <div style={{ margin: 40 }}>
            <table
              class="table table-default table-bordered table-responsive "
              style={{ border: "solid" }}
            >
              <thead class="thead-default" id="pdftitle">
                <tr>
                  <th>ID</th>
                  <th> Date</th>
                  <th> Doctor ID </th>
                  <th>Title</th>
                  <th>detail</th>
                </tr>
              </thead>
              {this.state.Appointment.map((app, i = 1) => (
                <tbody>
                  <tr key={app.appointId} id={"pdf" + app.appointId}>
                    <td>{++i}</td>
                    <td>{app.appointDate}</td>
                    <td>{app.doctorId}</td>
                    <td>{app.prescriptionTitle}</td>
                    <td>{app.prescriptionDetails}</td>
                  </tr>
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      this.createPDF(app.appointId);
                    }}
                  >
                    Download
                  </button>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}
