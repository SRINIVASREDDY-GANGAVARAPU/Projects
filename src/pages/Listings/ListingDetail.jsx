import React, { useState } from 'react';
import './ListingDetails.css';

const ListingDetails = () => {
  const [step, setStep] = useState(1); 
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [area, setArea] = useState('');
  const [filteredAreas, setFilteredAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  // const [unfilteredCities,setunfilteredCities]=useState([]);

  const cities = ['Guntakal', 'Gunupur', 'Guntur', 'Guna'];
  const areas = ['Area 1', 'Area 2', 'Area 3', 'Area 4']; 

  const handleNextClick = () => {
    setStep(step + 1);
  };

  const handlePreviousClick = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event) => {
    setBusinessName(event.target.value);
  };

  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);
    setFilteredCities(cities.filter(city => city.toLowerCase().includes(value.toLowerCase())));
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setCity(city);
    setFilteredCities([]);
  };

  const handleAreaChange = (event) => {
    const value = event.target.value;
    setArea(value);
    setFilteredAreas(areas.filter(area => area.toLowerCase().includes(value.toLowerCase())));
  };

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    setArea(area);
    setFilteredAreas([]);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Business Name: ${businessName}, City: ${selectedCity}, Area: ${selectedArea}, Mobile Number: ${mobileNumber}, Verification Code: ${verificationCode}`);
  };

  return (
    
    <div className="container9">
      {step === 1 && (
        <div className="form-container99">
          <h2>List your business</h2>
          <label htmlFor="mobile-number">Enter your Mobile Number</label>
          <input className="mobileno" type="text" id="mobile-number" name="mobile-number" value={mobileNumber} onChange={handleMobileNumberChange} placeholder="Enter your Mobile Number" required />
          <div className="privacy-note7">
            <span>⚠️ Your number is secure as per our privacy policy</span>
          </div>
          <div className="button-groupL">
 
            <button className="next" type="button" onClick={handleNextClick}>Next</button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="form-container99">
          <h2>List your business</h2>
          <label htmlFor="service-category">Select your service category</label>
          <input type="text" id="service-category" name="service-category" placeholder="Enter the service your business provides" required />
          <div className="button-groupL">
            <button className="previous" type="button" onClick={handlePreviousClick}>Previous</button>
            <button className="next" type="button" onClick={handleNextClick}>Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="form-container99">
          <h2>List your business</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleNextClick(); }} className="form">
            <label htmlFor="businessName">Enter your Business Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={businessName}
              placeholder="Enter business name"
              onChange={handleInputChange}
              required
            />
            <div className="button-groupL">
              <button className="previous" type="button" onClick={handlePreviousClick}>Previous</button>
              <button type="submit" className="nextButton">Next</button>
            </div>
          </form>
        </div>
      )}
      {step === 4 && (
        <div className="form-container99">
          <h2>List your business</h2>
          <label htmlFor="city">Select the city you provide service in</label>
          <input type="text" id="city" value={city} onChange={handleCityChange} placeholder="Enter your City" required />
          {filteredCities.length > 0 && (
            <ul className="city-dropdown">
              {filteredCities.map(city => (
                <li key={city} onClick={() => handleCitySelect(city)}>
                  {city}
                </li>
              ))}
            </ul>
          )}
          <div className="button-groupL">
            <button className="previous" type="button" onClick={handlePreviousClick}>Previous</button>
            <button className="next" type="button" onClick={handleNextClick}>Next</button>
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="form-container99">
          <h2>List your business</h2>
          <label htmlFor="area">Select the area you provide service in</label>
          <input type="text" id="area" value={area} onChange={handleAreaChange} placeholder="Enter your Area" required />
          {filteredAreas.length > 0 && (
            <ul className="area-dropdown">
              {filteredAreas.map(area => (
                <li key={area} onClick={() => handleAreaSelect(area)}>
                  {area}
                </li>
              ))}
            </ul>
          )}
          <div className="button-groupL">
            <button className="previous" type="button" onClick={handlePreviousClick}>Previous</button>
            <button className="next" type="button" onClick={handleNextClick}>Next</button>
          </div>
        </div>
      )}
      {step === 6 && (
        <div className="form-container99">
          <h2>List Your business</h2>
          <label htmlFor="verification-code">Enter your Verification code</label>
          <input type="text" id="verification-code" value={verificationCode} onChange={handleVerificationCodeChange} placeholder="Enter Verification Code" required />
          <div className="button-groupL">
            <button className="previous" type="button" onClick={handlePreviousClick}>Previous</button>
            <button className="nextButton" type="button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}




      
    </div>

  );
};

export default ListingDetails;
