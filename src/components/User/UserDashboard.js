import React, { useState } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', approved: true, role: 'Admin'},
    { id: 2, name: 'Jane Smith', approved: false, role: 'User', serviceCategory: 'Plumber', subCategory: 'Pipe Fitter' },
    { id: 3, name: 'Arryn Johnson',approved : true, role: 'User',serviceCategory: 'Electrician',subCategory: 'AcMechanic'}
  ]);

  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    profilePicture: 'https://via.placeholder.com/150',
    name: 'Admin Name',
    email: 'admin@example.com',
    mobile: '1234567890'
  });

  const approveUser = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, approved: true } : user));
  };

  const handleProfileUpdate = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const renderUsers = (approved) => {
    return users.filter(user => user.approved === approved).map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.role}</td>
        <td>{user.serviceCategory}</td>
        <td>{user.subCategory}</td>
        <td>
          {!user.approved && (
            <button className="approve-btn" onClick={() => approveUser(user.id)}>Approve</button>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <button onClick={() => setActiveTab('profile')}>
          <i className="fas fa-user-circle"></i> Admin Profile
        </button>
        <button onClick={() => setActiveTab('auth')}>Authentication</button>
        <button onClick={() => setActiveTab('users')}>Users</button>
        <button className="logout-btn">Logout</button>
        <Link to="/"><button className="home-btn">Home</button></Link>
      </div>
      <div className="main-content">
        {activeTab === 'profile' && (
          <div className="profile-section">
            <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
            <div className="profile-field">
              <label>Profile Picture URL:</label>
              <input
                type="text"
                value={profile.profilePicture}
                onChange={(e) => handleProfileUpdate('profilePicture', e.target.value)}
              />
              <button onClick={() => handleProfileUpdate('profilePicture', profile.profilePicture)}>Update</button>
            </div>
            <div className="profile-field">
              <label>Name:</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleProfileUpdate('name', e.target.value)}
              />
              <button onClick={() => handleProfileUpdate('name', profile.name)}>Update</button>
            </div>
            <div className="profile-field">
              <label>Email:</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleProfileUpdate('email', e.target.value)}
              />
              <button onClick={() => handleProfileUpdate('email', profile.email)}>Update</button>
            </div>
            <div className="profile-field">
              <label>Mobile Number:</label>
              <input
                type="text"
                value={profile.mobile}
                onChange={(e) => handleProfileUpdate('mobile', e.target.value)}
              />
              <button onClick={() => handleProfileUpdate('mobile', profile.mobile)}>Update</button>
            </div>
          </div>
        )}
        {activeTab === 'auth' && (
          <div>
            <Link to="/signIn"><button className="auth-btn">Sign In</button></Link>
            <Link to="/signUp"><button className="auth-btn">Sign Up</button></Link>
          </div>
        )}
        {activeTab === 'users' && (
          <div>
            <h2>Approved Users</h2>
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Category</th>
                  <th>Sub-Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {renderUsers(true)}
              </tbody>
            </table>
            <h2>Registered Users</h2>
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Category</th>
                  <th>Sub-Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {renderUsers(false)}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
