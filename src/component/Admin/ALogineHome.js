import React from "react";
import { Link } from "react-router-dom";
import docimg from "../../images/dcard.png";
import patimg from "../../images/pcard.png";
import appimg from "../../images/acard.webp";
import Footer2 from "../../Footer2";
import AdminHeader from "./AdminHeader";

export default function ALogineHome() {
  return (
    <div>
      <AdminHeader />
      <div>
      <br/>
      <div class="btn btn-info float-right">
       <a  href="/AddAdmin" class="btn btn-info " role="button"> + Add Admin</a>
       </div>
        <div class="card-group">
          <div class="card">
            <Link className="btn btn" to="/Patient/view">
              <img class="card-img-top" src={patimg} alt="Card image cap" />
              <div class="card-body">
                <h4 class="card-title">Patient</h4>
              </div>
            </Link>
          </div>

          <div class="card">
            <Link className="btn btn" to="/Doctor/showDoctors/show">
              <img class="card-img-top" src={docimg} alt="Card image cap" />
              <div class="card-body">
                <h4 class="card-title">Doctor</h4>
              </div>
            </Link>
          </div>

          <div class="card">
            <Link className="btn btn" to="/Appointment/view">
              <img class="card-img-top" src={appimg} alt="Card image cap" />
              <div class="card-body">
                <h4 class="card-title">Appointment</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}