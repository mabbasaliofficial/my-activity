import React, { useState } from "react";
import "./Details.css";
import logo from "./user.png";

const Details = (props) => {
  const { details } = props;
  let expendTime = 0;
  for (const detail of details) {
    expendTime = expendTime + detail.time;
  }
  const [brTime, setBrTime] = useState([]);
  const addBreakTime = (e) => {
    setBrTime(e);
  };
  return (
    <div className="details">
      <div className="user-details">
        <img className="user-image" src={logo} alt="" />
        <div className="name-location">
          <span className="user-name">Abbas Ali</span>
          <span className="user-location">Dhaka, Bangladesh</span>
        </div>
      </div>
      <div className="user-info">
        <div className="weight">
          <b>65</b>
          <span>Weight</span>
        </div>
        <div className="height">
          <b>5.7</b>
          <span>Feet</span>
        </div>
        <div className="age">
          <b>22</b>
          <span>Age</span>
        </div>
      </div>
      <div>
        <h3>Add a break</h3>
        <div className="break-time">
          <button className="second" onClick={() => addBreakTime(10)}>
            10s
          </button>
          <button className="second" onClick={() => addBreakTime(20)}>
            20s
          </button>
          <button className="second" onClick={() => addBreakTime(30)}>
            30s
          </button>
          <button className="second" onClick={() => addBreakTime(40)}>
            40s
          </button>
          <button className="second" onClick={() => addBreakTime(50)}>
            50s
          </button>
        </div>
      </div>
      <div>
        <h3>Activity details</h3>
        <div className="expend-details">
          <h4>Expend time</h4>
          <span>
            <b>{expendTime}</b> Minutes
          </span>
        </div>
        <div className="break-details">
          <h4>Break time</h4>
          <span id="break-time"><b>{brTime}</b>s</span>
        </div>
      </div>
      <button className="btn-completed">Activity Completed</button>
    </div>
  );
};

export default Details;
