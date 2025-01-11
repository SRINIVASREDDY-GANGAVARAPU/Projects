import React, { useState } from 'react';
import './Faq.css'; 

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does it work on Speedy?",
      answer: "At Speedy, we find potential customers seeking help, collect their information & verify business requirements. Our matchmaking platform categorizes relevant businesses based on the service type, location preference, and other user factors. Once the match is found, our AI listing feature redirects the customers' information to the matched businesses. Our service partners can directly connect with the users and translate them to customers. Additionally, Sulekha can assist you in building your brand by enhancing your business visibility and profile with customer reviews and portfolios to attract more customers."
    },
    {
      question: "Why should I register my business on Speedy?",
      answer: "Today, the market is seeing cut-throat competition between small businesses while big companies are attracting customers with their marketing resources. Sulekha is the best option for small business owners to get genuine leads and grow their business into a brand. Sign up today by clicking on the link below."
    },
    {
      question: "How much do leads cost?",
      answer: "The price of our service requests varies by the type of request and the location of the request. Once enrolled, you can see the current price of leads for each service request by downloading the Sulekha Business app."
    },
    {
      question: "How much control do I have over the leads I receive?",
      answer: "Sulekha's business app gives you full control. You can define your services in-depth, locality preferences to ensure you receive leads matched as you want. If you are busy you can pause the lead flow and restart anytime. Sign up today to learn more!"
    },
    {
      question: "How can I list my business on Speedy?",
      answer: "To begin your sign up, just click on the sign-up button below."
    },
    {
      question: "Alternative to Justdial",
      answer: "The price of our service requests varies by the type of request and the location of the request. Once enrolled, you can see the current price of leads for each service request by downloading the Sulekha Business app."
    }
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <p>Your faq catalogue - simplifying complex queries.</p>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span>{activeIndex === index ? '∧' : '∨'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
