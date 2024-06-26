import React from "react";
import { Link } from "react-router-dom";
import PHeader from "./PHeader";
import Footer2 from "../../Footer2";


export default function PAppointment() {
  let id = localStorage.getItem("id");
  console.log(id);

  return (
    <div>
      <PHeader />
      <div>
        <div class="">
          <div class="col-xs-1-6 col-lg-12 ">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Book Appointment</h3>
                <Link className="btn btn-info" to="/BookApp">
                  Click
                </Link>
              </div>
            </div>
          </div>
          <div class="col-xl-1-12 col-lg-12">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Show History</h3>
                <Link className="btn btn-info" to="/PatHistory">
                  Click
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <img
            src=
            "https://cutewallpaper.org/24/medical-gif/el%C3%A4m%C3%A4-on-ihmisen-parasta-aikaa-%E2%80%94-health-and-medical-vocabulary-in-hungarian.gif"
            width={"800px"}
            height={"590px"}
          ></img>{" "}
        </div> */}
      </div>
      <Footer2/>
    </div>
  );
}
