import React, { useState } from 'react';
import './BusinessName.css';

function BusinessName() {
  const [businessName, setBusinessName] = useState('');

  const handleInputChange = (event) => {
    setBusinessName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Business Name: ${businessName}`);
  };

  return (
    <div className="zero">
    
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>List your business</h1>
        <label htmlFor="businessName">Enter your Business Name</label>
        <input 
          type="text" 
          id="businessName" 
          name="businessName" 
          value={businessName} 
          onChange={handleInputChange} 
          required 
        />
        <button type="submit" className="nextButton">Next</button>
      </form>
    </div>
    </div>
    
  );
}

export default BusinessName;
