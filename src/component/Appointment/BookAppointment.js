import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import CurrentDate from "../../CurrentDate";
import PHeader from "../Patient/PHeader";
import SpecialData from "./SpecialData";

function BookAppointment() {
  const selectSpecial = (link) => {
    console.log(link);
    {
      fetch(link)
        .then((response) => response.json())
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };
  return (
    <div>
      <PHeader />
      <br />
      <form>
        <h1 style={{ textAlign: "center" }}>
          <u>Select Specialization</u>
        </h1>
        <CurrentDate />
        <div className="container-fluid mb-5">
          <div className="row gy-4">
            <div className="col-10 mx-auto">
              <div className="row">
                {SpecialData.map((app) => (
                  <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                      <img
                        src={app.imgsrc}
                        className="card-img-top"
                        alt={app.imgsrc}
                      />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          {app.title}
                        </h5>
                        <br />
                        <Link
                          className="btn btn-danger"
                          to={"/ShowSpecial/" + app.title}
                        >
                          Click
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookAppointment;
