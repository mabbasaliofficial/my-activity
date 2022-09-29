import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Details from "../Details/Details";
import './Activities.css'

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="activities-container">
      <div>
      <h2>Select Today's Activity</h2>
      <div className="activity-container">
      {
          activities.map(activity => <Activity
          key={activity.id}
          activity={activity}
          ></Activity>)
      }
      </div>
      </div>
      <div className="details-container">
            <Details></Details>
      </div>
    </div>
  );
};

export default Activities;
