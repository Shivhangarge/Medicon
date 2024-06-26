import React from "react";
import { useState } from "react";

export default function CurrentDate() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const [currentTime] = useState(date ? new Date(date).getTime() : Date.now());
  return (
    <div className="CurrentDate">
      <h3 style={{ color: "white" }}>Date : {date}</h3>
      <h3 style={{ color: "white" }}>Time : {currentTime}</h3>
    </div>
  );
}
