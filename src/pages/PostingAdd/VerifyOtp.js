import React, { useState } from 'react';
import axios from 'axios';
import './VerifyOtp.css';

const VerifyOtp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/send-otp', { phoneNumber });
      setGeneratedOtp(response.data.otp);
      alert('OTP sent successfully!');
    } catch (error) {
      alert('Error sending OTP');
    }
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp.toString()) {
      setIsVerified(true);
      alert('OTP verified successfully!');
      window.location='./AdPostingData'
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="verification-container">
      {!isVerified ? (
        <div className='a'>
          <h1>Verify Mobile Number</h1>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleSendOtp} className='b1'>Send OTP</button>
          <div className="otp-inputs">
            <input
              type="text"
              maxLength="1"
              value={otp[0] || ''}
              onChange={(e) => setOtp(otp.substring(0, 0) + e.target.value + otp.substring(1))}
            />
            <input
              type="text"
              maxLength="1"
              value={otp[1] || ''}
              onChange={(e) => setOtp(otp.substring(0, 1) + e.target.value + otp.substring(2))}
            />
            <input
              type="text"
              maxLength="1"
              value={otp[2] || ''}
              onChange={(e) => setOtp(otp.substring(0, 2) + e.target.value + otp.substring(3))}
            />
            <input
              type="text"
              maxLength="1"
              value={otp[3] || ''}
              onChange={(e) => setOtp(otp.substring(0, 3) + e.target.value)}
            />
          </div>
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      ) : (
        <h1>Mobile number verified successfully!</h1>
      )}
      <div className="footer">
            <div className="footer-section">
                <h3>Top Cities (India)</h3>
                <p>in Chennai in Mumbai in Hyderabad in Bangalore in Delhi in Kolkata in Pune in Ahmedabad in Faridabad in Ghaziabad in Noida in Gurgaon in Greater Noida in Chandigarh in Coimbatore in Jaipur in Nagpur in Surat in Vadodara in Vijayawada in Visakhapatnam in Indore in Lucknow in All Cities</p>
            </div>
            <div className="footer-section">
                <h3>Top Cities (US)</h3>
                <p>Austin Atlanta Bay Area Boston Chicago Los Angeles New Jersey New York Toronto</p>
            </div>
            <div className="footer-section">
                <h3>B2B & Business Services</h3>
                <p>Domestic Help Services Patient Care Service Home Appliances Repair & Services Packers and Movers AC Services Cleaning Services Pest Control Building Consultants & Contractors Security Guards Interior Designers & Decorators Housekeeping Services Painting Contractors Modular Kitchen Dealers Waterproofing Contractors Architects</p>
            </div>
            <div className="footer-section">
                <h3>Education Training</h3>
                <p>Job Training School Tuitions Entrance Exam Coaching Competitive Exam Coaching Distance Education Language Training Overseas Education College & University Tuitions Bank & Insurance Exam Coaching Placement Consultancies</p>
            </div>
            <div className="footer-section">
                <h3>Personal Service</h3>
                <p>Loans Visa Consultants Beauty Parlour Services Event Organisers Catering Services Photographers & Videographers Astrologers Vehicle Rentals Massage Centres Advocates & Lawyers</p>
            </div>
            <div className="footer-section">
                <h3>Popular Categories</h3>
                <p>Coaching & Tuitions Business Services Home Services B2B Home Construction & Renovation Home Decoration & Furniture Personal Finance Services Tours & Travels Parties, Special Occasions & Wedding</p>
            </div>
            <div className="footer-section">
                <h3>Speedy Domains</h3>
                <p>Study Abroad Property Rentals PG Roommates Capshine</p>
            </div>
            <div className="footer-section">
                <h3>Corporate</h3>
                <p>About us Careers Contact us Media coverage Ads / commercials Advertise on Speedy Terms & conditions Privacy policy Copyright policy</p>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Copyright Speedy.com. All Rights Reserved.</p>
                {/* <div className="social-media-icons">
                    <i className="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="https://www.linkedin.com/company/sulekha.com"></i>
                    <i className="fab fa-youtube"></i>
                </div> */}
            </div>
        </div>
    </div>
    
  );
};
export default VerifyOtp;