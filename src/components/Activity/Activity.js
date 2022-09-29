import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {activity, addToList} = props;
    // console.log(addToList)
    
    const {img, activities, details, time,}= activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div>
                <h3>{activities}</h3>
                <p>{details}</p>
                <p>Time: <b>{time}</b> Minutes</p>
            </div>
            <button onClick={() => addToList(activity)} className='btn-add'>Add To List</button>
        </div>
    );
};

export default Activity;