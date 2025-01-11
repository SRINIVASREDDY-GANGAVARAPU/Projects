import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './RecentBusinesses.css';

const businessData = [
  { name: 'Menta', location: 'Bangalore', category: 'Job Training', date: 'Yesterday' },
  { name: '4walls construction', location: 'Bangalore', category: 'Building Consultants & Contractors', date: 'Yesterday' },
  { name: 'RWM appliances services', location: 'Bangalore', category: 'Home Appliances Repair & Services', date: 'Yesterday' },
  { name: 'M S CATERERS', location: 'Bangalore', category: 'Catering Services', date: '06 Jun, 2024' },
];

const RecentBusinesses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="recent-businesses-container">
      <h1>Recent Businesses Listed on Speedy</h1>
      <p>Get ahead of your competitors, create a listing in less than 2 minutes</p>
      <Slider {...settings}>
        {businessData.map((business, index) => (
          <div key={index} className="card">
            <div className="card-initial">{business.name.charAt(0)}</div>
            <h3>{business.name}</h3>
            <p>{business.location}</p>
            <p>{business.category}</p>
            <p>{business.date}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#fff", borderRadius: "70%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#fff", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

export default RecentBusinesses;
