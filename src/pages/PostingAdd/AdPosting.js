import React, { useState } from 'react';
import './AdPosting.css';
import axios from 'axios';
import Faq from './Faq'



const AdPosting = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/save-number', { number: mobileNumber });
      alert(response.data);
    } catch (error) {
      alert('Error saving the number');
    }

    
  };

  const onClick1 =()=>{
    window.location='./verifyOtp'
  }
  
  

  return (
    <div>
      <div className='h'>
      <header>
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgmGTPOeJkQaEn7taFmssyg-tw37odDeY1Q&s" alt="Properties Logo" />
        </div>
        <button className="post-ad-button" onClick={onClick1}>Post An Ad - Free</button>
      </header>
      </div>
      <div className='main'>
      <main>
        <section className="hero1">
          <div className="hero1-content">
            <h1>SELL or RENT your property quicker with Speedy Properties</h1>
            <form className="ad-form" onSubmit={handleSubmit}>
              <label htmlFor="mobile-number">Let's start by posting your Ad</label>
              <input
                type="tel"
                id="mobile-number"
                name="mobile-number"
                placeholder="+91 Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <button type="submit">Start Now</button>
              <div className="privacy-note">
                <p>Your number is secure as per our privacy policy</p>
              </div>
            </form>
            <ul className="benefits">
              <li>&#9989; List your property for FREE.</li>
              <li>&#9989; Get shortlisted buyers and occupants.</li>
              <li>&#9989; Listing goes Live in a few minutes.</li>
              <li>&#9989; Get unlimited enquiries.</li>
            </ul>
          </div>
          <div className="hero1-image">
            <img src="https://sulcdn.azureedge.net/content/images/post-an-ad-hero-banner.webp" alt="Hero Image" />
          </div>
        </section>
        <section className="how-it-works1">
          <h3 className='rank1'>RENT -or- SELL</h3>
          <h1 className='rank2'>How it works?</h1>
          <div className="steps-container">
            <div className="step">
              <h3>Post Your Property Ad</h3>
              <img src="https://sulcdn.azureedge.net/content/images/001-post-your-property-ad.webp" alt="Post Your Property Ad" />
              <p>Share property details and upload photos.</p>
            </div>
            <div className="step">
              <h3>Check Response via SMS / WhatsApp / Dashboard</h3>
              <img src="https://sulcdn.azureedge.net/content/images/002-check-property-ad-response.webp" alt="Check Response" />
              <p>Access buyer/tenant contact information for easy connections.</p>
            </div>
            <div className="step">
              <h3>Fast Sell or Rent with Instant Connect</h3>
              <img src="https://sulcdn.azureedge.net/content/images/003-sell-or-tent-instantly.webp" alt="Fast Sell or Rent" />
              <p>Negotiate and close deals with buyers/tenants, including site visits.</p>
            </div>
          </div>
        </section>
        <section className="why-Speedy">
          <h3 className='rank3'>WHY SPEEDY PROPERTIES</h3>
          <h2>Reach the Peak of Visibility: With Over 40 million+ Monthly Unique Visitors, Your Property Shines on Speedy Properties!</h2>
          <div className="stats-container">
            <div className="stat">
              <div className="stat-icon">📋</div>
              <h3>Over 1M+</h3>
              <p>Property Listings</p>
            </div>
            <div className="stat">
              <div className="stat-icon">📅</div>
              <h3>Over 25+ Years</h3>
              <p>Of Expertise</p>
            </div>
            <div className="stat">
              <div className="stat-icon">🔍</div>
              <h3>Over 5.5M+</h3>
              <p>Searches</p>
            </div>
            <div className="stat">
              <div className="stat-icon">👤</div>
              <h3>Over 100K+</h3>
              <p>Owner lists monthly</p>
            </div>
          </div>
        </section>

        <section>
        <div class="containerR">
        <h3 class="category0">SELLING - INSIGHTS</h3>
        <div class="content00">
            <div class="left">
                <h1>Clever Strategies for Successful Online Property Sales</h1>
                <img src="https://sulcdn.azureedge.net/content/images/001-post-an-ad-strategies.webp" alt="Property Image" class="property-image" />
            </div>
            <div class="right">
                <div class="tip">
                    <h2>Post your Property Ad</h2>
                    <p>Include all the specifics such as the name of the neighbourhood, amenities, etc., and don't forget to upload pictures.</p>
                </div>
                <div class="tip">
                    <h2>Include High-Quality Photos</h2>
                    <p>Make sure to incorporate top-notch photos, as they play a crucial role in making any property stand out.</p>
                </div>
                <div class="tip">
                    <h2>Select the Right Locality/Address</h2>
                    <p>Ensure that you accurately pinpoint your neighbourhood when filling out your property details. Providing the correct locality is vital for receiving authentic inquiries about your property.</p>
                </div>
                <div class="tip">
                    <h2>Craft an Excellent Description</h2>
                    <p>Compose a brief yet impactful description for your property, emphasizing its unique selling points and providing all the necessary details to assist potential buyers in their decision-making.</p>
                </div>
                <div class="tip">
                    <h2>Provide Additional Information</h2>
                    <p>Include all pertinent details about your property, such as furnishings, flooring, water supply, etc. This will enhance its visibility in search results and grab the attention of potential buyers.</p>
                </div>
                <div class="tip">
                    <h2>Provide Additional Information</h2>
                    <p>Include all pertinent details about your property, such as furnishings, flooring, water supply, etc. This will enhance its visibility in search results and grab the attention of potential buyers.</p>
                </div>
                <button className="post-ad-button" onClick={onClick1}>Post An Ad - Free</button>
            </div>
        </div>
      </div>
        </section>
        <h2 class="category4">PLACE YOUR PROPERTY AD ONLINE</h2>
        <h2 className='ad'>Advantages of Marketing Your Property on the Internet</h2>
            <section class="advantages-section">
                
                <div class="advantages-grid">
                    <div class="advantage">
                        <img src="https://sulcdn.azureedge.net/content/images/001-post-an-ad-time-efficiency.webp?v=0.01" alt="Time Efficiency"/>
                        <h2>Time Efficiency</h2>
                        <p>Online platforms like Speedy Properties make selling your property a time-saving endeavor. You can manage bookings at your convenience and swiftly receive quality leads.</p>
                    </div>
                    <div class="advantage">
                        <img src="https://sulcdn.azureedge.net/content/images/002-post-an-ad-broad-exposure.webp?v=0.01" alt="Broad Exposure"/>
                        <h2>Broad Exposure</h2>
                        <p>The online realm attracts a vast pool of prospective buyers, eliminating the need for in-person property visits. This translates to wider exposure for your property, reaching a multitude of online buyers.</p>
                    </div>
                    <div class="advantage">
                        <img src="https://sulcdn.azureedge.net/content/images/003-post-an-ad-cost-saving.webp?v=0.01" alt="Cost Savings"/>
                        <h2>Cost Savings</h2>
                        <p>Opting for online selling typically results in significant reductions in agent fees and the overall expenses associated with traditional home sales.</p>
                    </div>
                    <div class="advantage">
                        <img src="https://sulcdn.azureedge.net/content/images/004-post-an-ad-comprehensive-services.webp?v=0.01" alt="Comprehensive Services"/>
                        <h2>Comprehensive Services</h2>
                        <p>Beyond property listings, Speedy Properties offers a plethora of ancillary services, such as rent agreements, home cleaning, renovations, tenant verification, and more, all designed for your convenience.</p>
                    </div>
                </div>
            </section>
            <Faq/>

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
                <div className="social-media-icons">
                    <i className="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="https://www.linkedin.com/company/sulekha.com"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>

            
          
  
           
            
      </main>
      </div>
    </div>
  );
}

export default AdPosting;