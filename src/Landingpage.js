/* eslint-disable jsx-a11y/alt-text */
import './Landingpage.css';
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Landingpage = () => {
  const categoriesRef = useRef(null);
  const educationRef = useRef(null);

  const [adIndex, setAdIndex] = useState(0);
  const [showAd, setShowAd] = useState(true);

  const ads = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-5tJMiM-HAztKlVKNC7QhoeBgBx2TMnHPA&s',
      url: 'https://www.example.com/ad1',
      title: 'Stock Market',
      description: 'Are you new to Stock Market click here.'
    },
    {
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-services-ads-design-template-549dcc027b59bf362c61b9da6f08f035_screen.jpg?ts=1619586131',
      url: 'https://www.example.com/ad2',
      title: 'school days are good days so. we need to choose good school...',
      description: 'Work hard be a kind and amazing things will be happen...'
    },
    {
      image: 'https://farm6.staticflickr.com/5210/14003824662_77a06e83db_o.gif',
      url: 'https://www.example.com/ad3',
      title: 'Cricket is not a sport...',
      description: 'Cricket is not just about personal achievements, its about contributing to the success of the team.'
    }
  ];

  const slideLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const slideRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 8000); 

    return () => clearInterval(interval);
  }, [ads.length]);

  const handleCloseAd = () => {
    setShowAd(false);
  };
  const renderAd = (position) => (
    <div className={`vertical-ad ${position}`}>
      <h5>Advertisement</h5>
      <button className="close-button" onClick={handleCloseAd}>&times;</button>
      <a href={ads[adIndex].url} target="_blank" rel="noopener noreferrer">
        <img src={ads[adIndex].image} alt={`Ad ${adIndex + 1}`} />
      </a>
      <div className="ad-content">
        <div className="ad-title">{ads[adIndex].title}</div>
        <div className="ad-description">{ads[adIndex].description}</div>
      </div>
    </div>
  );
  

  return (
    <div>
      <header>
      
        <div className="top-bar">
          <img src="https://seeklogo.com/images/S/speedy-logo-4BB935DDA6-seeklogo.com.png" alt="Logo" />
          <Link to="/ListBusiness"><p>List Your Business</p></Link> 
          <Link to="/AdPosting"><p>Post a Free Ad</p></Link>
          <Link to="/signIn"><p>Sign In</p></Link>
          <Link to="/UserDashboard"><p className='pl'>DashBoard</p></Link>
        </div>
        <div className="hero">
          <h2>Fast, FREE way to get experts.</h2>
          <div className="search-bar">
            <select>
              <option value="bangalore">Bangalore</option>
              <option value="mumbai">Mumbai</option>
              <option value="hyderabad">Hyderabad</option>
            </select>
            <input type="text" placeholder="Find your service here" />
            <button>GET EXPERTS</button>
          </div>
        </div>
  
      </header>
      

      <main>
        <section className="categories5">
          <div className="category6">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwv7XCat4V_yj_bGEBh_S1o1sd3SZne6wqyoHfW03nHkL8e7fN" alt="Home & Office" />
            <p>Home & Office</p>
          </div>
          <div className="category6">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyCna4l60qhNMQkXry_kBG-y9ba_0Kkw5PxDmga69Rjlavgha7" alt="Education & Training" />
            <p>Education & Training</p>
          </div>
          <div className="category6">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWczABaZguQF3NbHOCIpATZXvpTKRTWWf8rK30WCrd43SfPbw2" alt="Travelling & Transport" />
            <p>Travelling & Transport</p>
          </div>
          <div className="category6">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfgX1loKw0UOjhYQXO3kVG-xrmWkZ15AGBZnji1-f7qgpzu8vE" alt="Health & Wealth" />
            <p>Health & Wealth</p>
          </div>
          <div className="category6">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1pmQCUzDIq304LXrZMXMEUvAZtyNkloTgpcPThcdaGeOTNAKZ" alt="Events" />
            <p>Events</p>
          </div>
        </section>
        <section className="services">
        {showAd && renderAd('left')}
          <h2>Education & Training</h2>
          {/* <button className="slide-button left" onClick={() => slideLeft(educationRef)}>&#10094;</button> */}
          <div className="services-container" ref={educationRef}>
            <div className="service-card">
              <img src="https://sulcdn.azureedge.net/content/hpc/entrance-exam-coaching.jpg" alt="Entrance Exam Coaching" />
              <p>Entrance Exam Coaching</p>
              <Link to='/quotes'><button>GET QUOTES</button></Link>
            </div>
            <div className="service-card">
              <img src="https://sulcdn.azureedge.net/content/hpc/distance-education.jpg" alt="Distance Education" />
              <p>Distance Education</p>
              <button>GET QUOTES</button>
            </div>
            <div className="service-card">
              <img src="https://sulcdn.azureedge.net/content/hpc/school-tuitions.jpg" alt="School Tuitions" />
              <p>School Tuitions</p>
              <button>GET QUOTES</button>
            </div>
            <div className="service-card">
              <img src="https://sulcdn.azureedge.net/content/hpc/job-training.jpg" alt="Job Training" />
              <p>Job Training</p>
              <button>GET QUOTES</button>
            </div>
            {/* <button className="slide-button right" onClick={() => slideRight(educationRef)}>&#10095;</button> */}
          </div>
          {showAd && renderAd('right')}
        </section>
        
        <section className="services">
           {showAd && renderAd('left')}
          <h2>Home Services</h2>
          {/* <button className="slide-button left" onClick={() => slideLeft(categoriesRef)}>&#10094;</button> */}
          <div className="services-container" ref={categoriesRef}>
            <div className="service-card">
              <img src="https://sulcdn.azureedge.net/content/hpc/furniture-dealers.jpg" alt="Furniture Dealers" />
              <p>Furniture Dealers</p>
              <button>GET QUOTES</button>
            </div>
            <div className="service-card">
              <img src="https://sulcdn.azureedge.net/content/hpc/pest-control-services.jpg" alt="Pest Control" />
              <p>Pest Control</p>
              <button>GET QUOTES</button>
            </div>
            <div className="service-card">
              <img src="https://sulcdn.azureedge.net/content/hpc/carpenters.jpg" alt="Carpenters" />
              <p>Carpenters</p>
              <button>GET QUOTES</button>
            </div>
            <div className="service-card">
              <img src="https://sulcdn.azureedge.net/content/hpc/domestic-help-services.jpg" alt="Domestic Help Services" />
              <p>Domestic Help Services</p>
              <button>GET QUOTES</button>
            </div>
            {/* <button className="slide-button right" onClick={() => slideRight(categoriesRef)}>&#10095;</button> */}
          </div>
          {showAd && renderAd('right')}
        </section>

        <section className="featured">
          <div className="feature">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLbd5fH78yJbBmSEbEraChotYc2hH7akaBIdQxNa3bZloIcnnu" alt="Wedding Needs" height={'200px'} width={'250px'} />
            <h3>All your wedding needs at your fingertips!</h3>
            <button>EXPLORE NOW</button>
          </div>
          <div className="feature">
            <img src="https://cdn.vectorstock.com/i/1000v/04/34/carpenter-in-his-workplace-with-work-tools-vector-36280434.jpg" alt="Home Improvement" height={'200px'} width={'250px'} />
            <h3>One-stop destination for all your home improvement needs!</h3>
            <button>EXPLORE NOW</button>
          </div>
        </section>

        <section className="study-abroad">
          <h2>Study Abroad Guide</h2>
          <div className="countries-container">
            <div className="country">
              <img src="https://sulcdn.azureedge.net/content/images/united-states-of-america-circle-flag.png" alt="Study in USA" />
              <p>Study in USA</p>
            </div>
            <div className="country">
              <img src="https://sulcdn.azureedge.net/content/images/united-kingdom-circle-flag.png" alt="Study in UK" />
              <p>Study in UK</p>
            </div>
            <div className="country">
              <img src="https://sulcdn.azureedge.net/content/images/united-states-of-america-circle-flag.png" alt="Study in USA" />
              <p>Study in USA</p>
            </div>
            <div className="country">
              <img src="https://sulcdn.azureedge.net/content/images/canada-circle-flag.png" alt="Study in Canada" />
              <p>Study in Canada</p>
            </div>
          </div>
        </section>
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
            {/* <div className="footer-bottom">
                <p>© 2024 Copyright Speedy.com. All Rights Reserved.</p>
                <div className="social-media-icons">
                    <i className="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="https://www.linkedin.com/company/sulekha.com"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div> */}
        </div>
      </main>
    </div>
  );
};


export default Landingpage;