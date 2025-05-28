import React from 'react';
import './DashboardOverview.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';

const DashboardOverview = () => {
  return (
    <section className="DashboardOverview">
      <AnatomySection />
      <HealthStatusCards />
    </section>
  );
};

export default DashboardOverview;