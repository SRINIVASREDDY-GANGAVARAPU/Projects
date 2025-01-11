import React from 'react';
import './CustomerSuccessStories.css';

const CustomerSuccessStories = () => {
  const stories = [
    {
      image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-174920,resizemode-75,msid-97400128/magazines/panache/want-to-encourage-your-kids-to-be-avid-readers-sudha-murty-has-the-answer.jpg',
      title: 'Speedy service partner awards, Chennai',
      youtubeLink: 'https://youtu.be/xl2OR2yNWH4?si=E4eI8mO-pBNqsbg2'
    },
    {
      image: 'https://i.ytimg.com/vi/vCnsD47nEAo/maxresdefault.jpg',
      title: 'Speedy service partner awards, Bangalore',
      youtubeLink: 'https://youtu.be/p3UIRZ12Nrk?si=ZpRJoGvQP2AYL3ic',
    },
    {
      image: 'https://sulcdn.azureedge.net/content/images/sp-kolkata-2018.jpg',
      title: 'Speedy service partner awards, Kolkata',
      youtubeLink: 'https://youtu.be/7AvLD-4eQB0?si=S8vYNSrxgRr2fOZW'
    }
  ];

  return (
    <div className="customer-success-stories">
      
        <h1>Customer Success Stories</h1>
     
      <div>
        <p>20,000+ businesses use Speedy to get closer to their customers.</p>
      </div>

      <div className="stories">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <img src={story.image} alt={story.title} />
            <div className="overlay">
              <a href={story.youtubeLink} target="_blank" rel="noopener noreferrer" className="play-button">▶️</a>
            </div>
            <p>{story.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSuccessStories;
