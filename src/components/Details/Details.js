import React, { useEffect, useState } from "react";
import "./Details.css";
import logo from "./user.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addLocalStorage, getStorage } from "../../utilities/localStorage";

const Details = (props) => {
  const diffToast = () => {
    toast.success("Congratulations! You Have Completed Your Task", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const { details } = props;
  let expendTime = 0;
  for (const detail of details) {
    expendTime = expendTime + detail.time;
  }
  const [brTime, setBrTime] = useState([]);
  const addBreakTime = (e) => {
    setBrTime(e);
    addLocalStorage(e)
};

useEffect(() => {
      const storage = getStorage();
        setBrTime(storage.id)
  },[])
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
          <button className="second" onClick={() => addBreakTime("10s")}>
            10s
          </button>
          <button className="second" onClick={() => addBreakTime("20s")}>
            20s
          </button>
          <button className="second" onClick={() => addBreakTime("30s")}>
            30s
          </button>
          <button className="second" onClick={() => addBreakTime("40s")}>
            40s
          </button>
          <button className="second" onClick={() => addBreakTime("50s")}>
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
          <b id="break-time">{brTime}</b>
        </div>
      </div>
      <button onClick={diffToast} className="btn-completed">
        Activity Completed
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Details;
