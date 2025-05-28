import React from 'react';
import './UpcomingSchedule.css';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  const schedule = [
    { day: "Thursday", appointments: ["Cardiologist", "Ophthalmologist"] ,harsh :"10.00" },
    { day: "Saturday", appointments: ["Neurologist", "Health checkup complete"] }
  ];
  return (
    <section className="UpcomingSchedule">
      <h2>The Upcoming Schedule</h2>
      {schedule.map((block, index) => (
        <div key={index}>
          <h3>On {block.day}</h3>
          {block.appointments.map((title, idx) => (
            <SimpleAppointmentCard key={idx} title={title} time="10:00 AM" />
          ))}
        </div>
      ))}
    </section>
  );
};

export default UpcomingSchedule;