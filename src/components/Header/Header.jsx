import React, { useState } from 'react';
import './Header.css';
import { FaBell, FaPlus, FaSearch } from 'react-icons/fa';

// Initial mock users
const initialUsers = [
  { name: 'Dr. John Doe', avatar: '/src/assets/default-avatar-profile-icon-transparent-600nw-2534623311.webp' },
  { name: 'Dr. Sarah Smith', avatar: '/avatar2.png' },
  { name: 'Dr. Ravi Kumar', avatar: '/avatar3.png' },
];

const Header = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(initialUsers[0]);
  const [showForm, setShowForm] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserAvatar, setNewUserAvatar] = useState('');

  const handleUserChange = (e) => {
    const user = users.find((u) => u.name === e.target.value);
    if (user) setSelectedUser(user);
  };

  const handleAddUser = () => {
    if (newUserName.trim() && newUserAvatar.trim()) {
      const newUser = { name: newUserName.trim(), avatar: newUserAvatar.trim() };
      setUsers((prev) => [...prev, newUser]);
      setSelectedUser(newUser);
      setShowForm(false);
      setNewUserName('');
      setNewUserAvatar('');
    }
  };
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <header className="Header">
      <div className="header-left">
        <h1 className="logo">Healthcare.</h1>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
  type="text"
  placeholder="Search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

        </div>
      </div>

      <div className="header-right">
        <FaBell className="icon" />
        <div className="user-profile">
          <img src={selectedUser.avatar} alt="User Avatar" className="avatar" />
          <span className="username">{selectedUser.name}</span>
          <select className="user-dropdown" onChange={handleUserChange} value={selectedUser.name}>
            {users.map((user, idx) => (
              <option key={idx} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <button className="add-btn" onClick={() => setShowForm(!showForm)}>
          <FaPlus />
        </button>
      </div>

      {/* User Add Form */}
      {showForm && (
        <div className="user-form">
          <input
            type="text"
            placeholder="Name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Avatar Image URL"
            value={newUserAvatar}
            onChange={(e) => setNewUserAvatar(e.target.value)}
          />
          <button onClick={handleAddUser}>Add User</button>
        </div>
      )}
    </header>
  );
};

export default Header;
