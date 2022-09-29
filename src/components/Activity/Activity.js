import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {img, activity, details, time,}= props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div>
                <h3>{activity}</h3>
                <p>{details}</p>
                <p>Time: {time}s</p>
            </div>
            <button className='btn-add'>Add To List</button>
        </div>
    );
};

export default Activity;