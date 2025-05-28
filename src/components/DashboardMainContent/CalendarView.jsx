import React from 'react';
import './CalendarView.css';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarView = () => {
  const appointments = [
    { date: 10, title: 'Dentist', time: '09:00', weekday: 'Sun' },
    { date: 12, title: 'Physiotherapy', time: '11:00', weekday: 'Tue' },
    { date: 15, title: 'Cardiologist', time: '13:00', weekday: 'Fri' },
  ];

  return (
    <section className="CalendarView">
      <h2>October 2021</h2>

     
     {/* Weekly Grid which  we need to add */}
      <div className="calendar-weekdays">
        {weekdays.map((day, index) => (
          <div className="weekday" key={index}>{day}</div>
        ))}
      </div>

      {/* Calendar Grid  if we wants to add
      */}
      <div className="calendar-grid">
        {[...Array(30)].map((_, i) => {
          const day = i + 1;
          const appointment = appointments.find(a => a.date === day);
          return (
            <div className="day" key={i}>
              <span>{day}</span>
              {appointment && <div className="appointment">{appointment.time}</div>}
            </div>
          );
        })}
      </div>

      {/* Static Appointment Details */}
      <div className="calendar-details">
        <div className="appointment-card">
          <strong>Dentist</strong><br />
          <span>Sunday, Oct 10 - 09:00 AM</span>
        </div>
        <div className="appointment-card">
          <strong>Physiotherapy</strong><br />
          <span>Tuesday, Oct 12 - 11:00 AM</span>
        </div>
        <div className="appointment-card">
          <strong>Cardiologist</strong><br />
          <span>Friday, Oct 15 - 01:00 PM</span>
        </div>
      </div>
    </section>
  );
};

export default CalendarView;
