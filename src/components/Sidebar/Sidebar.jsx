import React from 'react';
import '/src/components/Sidebar/Slidebar.css';
// import '/'

const navItems = [
  "Dashboard", "History", "Calendar", "Appointments",
  "Statistics", "Tests", "Chat", "Support", "Setting"
];

const Sidebar = () => {
  return (
    <aside className="Sidebar">
      <h2 className="sidebar-heading">General</h2>
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">{item}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
