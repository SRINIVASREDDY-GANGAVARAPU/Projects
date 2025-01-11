import React from 'react';
import './Quotes.css';

const App = () => {
  const coachingOptions = [
    "ENGG / ARCH entrance exam coaching",
    "Management entrance exam coaching",
    "Foreign education entrance exam coaching",
    "Common entrance exam coaching",
    "Medical entrance exam coaching",
    "Arts & Media entrance exam coaching",
    "Computer science entrance exam coaching",
    "Design entrance exam coaching",
    "Science entrance exam coaching",
    "Commerce entrance exam coaching",
  ];

  const coachingCenter = {
    name: "PTE Academy",
    location: "Mehdipatnam, Hyderabad, 500028",
    rating: 4.5,
    reviews: 37,
    responseTime: "More than 60 Mins",
    score: 7.1,
    workingHours: "07:00 AM to 08:00 PM",
    description: "PTE Academy offers the best coaching classes in Hyderabad for PTE Academic exam. Our excellent course structure and content designed to crack PTE ...",
    tags: ["PTE Coaching", "Medical Entrance Online Coaching", "IIT JEE Online Coaching", "+47 more"],
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.sulekha.com/local_files/images/layout/SLK-logo-large-white.png" alt="Sulekha" className="logo" />
        <div className="header-content">
          <select className="location-dropdown">
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
          </select>
        </div>
      </header>
      <main>
        <div className="content-header">
          <h1>10 Most Recommended Entrance Exam Coaching in Hyderabad</h1>
          <p>as on Jul 09, 2024</p>
        </div>
        <div className="coaching-center-card">
          <div className="card-header">
            <div className="card-info">
              <h2>{coachingCenter.name}</h2>
              <p>{coachingCenter.location}</p>
              <div className="rating">
                <span>⭐ {coachingCenter.rating}/5</span>
                <span>Based on {coachingCenter.reviews} reviews</span>
              </div>
              <div className="tags">
                {coachingCenter.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="additional-info">
                <p>Response Time: <strong>{coachingCenter.responseTime}</strong></p>
                <p>Sulekha score: <strong>{coachingCenter.score}</strong></p>
                <p>Working hours: <strong>{coachingCenter.workingHours}</strong></p>
              </div>
            </div>
            <button className="enroll-button">Enroll Today</button>
          </div>
          <div className="card-description">
            <p>{coachingCenter.description} <a href="#more">more</a></p>
          </div>
        </div>
        <div className="coaching-container">
          <h1>Entrance Exam Coaching in Hyderabad</h1>
          <p>Personalized Tutoring for Success - Affordable Fees - Learn with Confidence</p>
          <div className="coaching-options">
            <h2>What service do you require?</h2>
            <div className="options-grid">
              {coachingOptions.map((option, index) => (
                <button key={index} className="option-button">
                  {option} <span className="arrow">→</span>
                </button>
              ))}
            </div>
          </div>
          <button className="get-started">Get Started</button>
        </div>
        <div className="features">
          <div className="feature">
            <h3>17+</h3>
            <p>Years of Expertise</p>
          </div>
          <div className="feature">
            <h3>609000+</h3>
            <p>Happy Users</p>
          </div>
          <div className="feature">
            <h3>24000+</h3>
            <p>Verified Service Providers</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
