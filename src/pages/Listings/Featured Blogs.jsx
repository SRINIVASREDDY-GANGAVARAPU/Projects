import React from 'react';
import './Featured Blogs.css';

const blogs = [
  {
    title: 'Importance of an Enriched Digital Profile',
    description: 'Having your business listed on online directories is an effective way to be found...',
    image: 'https://lscdn.blob.core.windows.net/content/images/list-your-business/blogs/Enriched-digital-profile.webp',
  },
  {
    title: 'How Can I Grow My Business With Speedy?',
    description: 'Modern consumers usually search popular online directories before they purchase a...',
    image: 'https://lscdn.blob.core.windows.net/content/images/list-your-business/blogs/Grow-my-business-withsulekha.webp',
  },
  {
    title: 'How Can I Update My Profile on Speedy?',
    description: 'Speedy is a popular digital platform that bridges the gap between businesses and...',
    image: 'https://lscdn.blob.core.windows.net/content/images/list-your-business/blogs/List-my-profile.webp',
  },
  {
    title: 'A Business Guide to Thrive on the Speedy Digital Platform',
    description: 'Building a robust online presence in today’s digital age is integral for business...',
    image: 'https://lscdn.blob.core.windows.net/content/images/list-your-business/blogs/Guide-digital-platform.webp',
  },
];

const FeaturedBlogs = () => {
  return (
    <div className="blog-container">
      <h2>Featured Blogs on List Your Business</h2>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-card-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
