import React from 'react';
import './DashboardMainContent.css';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="DashboardMainContent">
      <DashboardOverview />
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </main>
  );
};

export default DashboardMainContent;