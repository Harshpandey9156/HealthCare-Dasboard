import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    <div className="SimpleAppointmentCard">
      <div className="icon"></div>
      <div>
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;