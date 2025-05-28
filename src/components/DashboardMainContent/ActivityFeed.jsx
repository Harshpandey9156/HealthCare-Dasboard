import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <section className="ActivityFeed">
      <h2>Activity</h2>
      <p>3 appointments this week</p>
      <div className="bar-chart">
        <div className="bar" style={{ height: '60%' }}></div>
        <div className="bar" style={{ height: '80%' }}></div>
        <div className="bar" style={{ height: '40%' }}></div>
        <div className="bar" style={{ height: '70%' }}></div>
      </div>
    </section>
  );
};

export default ActivityFeed;