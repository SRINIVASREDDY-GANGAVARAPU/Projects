import React, { useState } from 'react';
import './ManageBusiness.css'; 
const AppLink = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSendLink = () => {
    
    setMessage('App Link sent successfully');
  };

  return (
    <div className="app-link-container">
      <h1>Manage your business on the go!</h1>
      <p>Download The Speedy Business App</p>
      <div className="input-container">
        <input 
          type="text" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
        />
        <button onClick={handleSendLink}>Send App Link</button>
      </div>
      {message && <p className="success-message">{message}</p>}
      <p className="download-text">Get your FREE App now!</p>
      <div className="store-buttons">
        <img src="https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png" alt="Get it on Google Play" ></img>
        <img src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge.png" alt="Download on the App Store"></img>
      </div>
    </div>
  );
};

export default AppLink;
