import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const links = ["Dashboard", "History", "Calendar", "Appointments", "Statistics", "Tests", "Chat", "Support", "Setting"];
  return (
    <aside className="Sidebar">
      <h2>General</h2>
      <ul>
        {links.map(link => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;