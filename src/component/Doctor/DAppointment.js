import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer2 from "../../Footer2";
import DHeader from "../Doctor/DHeader";

export default function DAppointment() {
  const nav = useNavigate();

  let id = localStorage.getItem("id");
  console.log(id);

  return (
    <div>
      <DHeader />
      <div>
        <div class="row">
          <div class="col-xs-1-6">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Show Appointment</h3>
                <Link className="btn btn-info" to="/ShowApp">
                  Click
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}
