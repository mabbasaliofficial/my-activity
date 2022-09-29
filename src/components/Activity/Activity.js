import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {img, activity, details, time,}= props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div>
                <h1>{activity}</h1>
                <p>{details}</p>
                <p>{time}</p>
            </div>
            <button className='btn-add'>Add To List</button>
        </div>
    );
};

export default Activity;