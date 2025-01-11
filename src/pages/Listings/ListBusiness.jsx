import React from 'react';
import './ListBusiness.css';
import CustomerSuccessStories from './CustomerSuccessStories';
import FeaturedBlogs from './Featured Blogs';

import FAQ from './Faq';
import AppLink from './ManageBusiness';
 import { Link } from 'react-router-dom';

import RecentBusinesses from './RecentBusinesses';
import Footer from './Footer';



const ListBusiness = () => {
    

  return (

     <div>


      <header className="headerp">
     
          <img src="https://seeklogo.com/images/S/speedy-logo-4BB935DDA6-seeklogo.com.png" alt="Speedy" className="logor"></img>
          <Link to="/ListingDetail"><button className="list-button6">List Your Business</button></Link>    
         
      </header>

      <div className="business-enquiry">
  <div className="left-section">
    <img src="https://sulcdn.azureedge.net/content/images/hero-banner-large-mobile.webp" alt="Phone" className="phone-image" />
  </div>
  <div className="right-section">
    <h2>List Your Business. Start Getting Enquires.</h2>
    <div className="form-container">
      <label htmlFor="phone-input">Let's start to list your business</label>
      <div className="input-group">
        <input type="text" id="phone-input" placeholder="+91" />
        <Link to="/ListingCard" className="combined-button">
        <button className="combined-button">Start Now</button></Link>
      </div>
    </div>

      
                <ul className="features-list">
                    <li>✅ Create your online profile and get discovered</li>
                    <li>✅ Display your entire service offerings</li>
                    <li>✅ Respond to customer enquiries and engage with reviews</li>
                </ul>
                <div className="stats">
                    <div>30 Lakh+ <span>Monthly Visitors</span></div>
                    <div>8 Lakh+ <span>Enquiries</span></div>
                    <div>20,000+ <span>Businesses Registered</span></div>
                </div>
            </div>
        </div>
  
    
     
<div className="how-it-worksH">
      <h1>How does Speedy work?</h1>
      <p>Subscribe, get verified leads, and grow your business.</p>
      <div className="steps">
        <div className="step">
    
          <img src="https://static.vecteezy.com/system/resources/previews/002/178/409/non_2x/contact-us-customer-service-for-personal-assistant-service-person-advisor-and-social-media-network-illustration-vector.jpg" alt="Get Leads" className="icon"></img>

          <h3>Receive an enquiry from Speedy</h3>
          <p>We match your business with suitable customers. Customers can approach you directly, too!</p>
        </div>
        <div className="step">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43GzvAYWFHcgIo9IeP5QNN-fOqSn17pqrtX3x9fBn0ceooLTr_ex1yGIpMOlj3jTECh0&usqp=CAU" alt="Chat" className="icon"></img>
          <h3>Connect with customers over call & chat</h3>
          <p>Get ahead of your competitors and connect with customers right away.</p>
        </div>
        <div className="step">
          <img src="https://img.freepik.com/free-vector/business-support-concept-illustration_114360-9176.jpg?size=626&ext=jpg&ga=GA1.2.582131283.1717343577&semt=ais_user"alt="Growth" className="icon"></img>
          <h3>Convert and grow your business</h3>
          <p>Stay active on Speedy and keep growing.</p>
        </div>
      </div>
    </div>
  
   
    <div className="container4">
      <h1>Why Choose Speedy?</h1>
      <p>Get a free, easy way to communicate with your customers.</p>
      <div className="features3">
        <div className="feature2">
          <img src="https://sulcdn.azureedge.net/content/images/why-sulekha-reviews.png " alt="Enrich and manage your profile" ></img>
          <h3>Enrich and manage your profile</h3>
          <p>Update your business page regularly to make it easy for customers to locate you.</p>
        </div>
        <div className="feature2">
          <img src="https://sulcdn.azureedge.net/content/images/why-sulekha-leads.png " alt="Interact directly with customers"></img>
          <h3>Interact directly with customers</h3>
          <p>When your business receives an enquiry, you will be given their details right away to connect with them.</p>
        </div>
        <div className="feature2">
          <img src="https://sulcdn.azureedge.net/content/images/why-sulekha-reviews.png " alt="Grow your business and respond to reviews" ></img>
          <h3>Grow your business and respond to reviews</h3>
          <p>Enhance your brand by 80% with a stellar online profile and positive reviews.</p>
        </div>
      </div>
    </div>
    <div className="popular-categories-container">
      <h1>Popular Categories on Speedy</h1>
      <p>Speedy helps businesses grow in <strong>1000+</strong> categories</p>
      <div className="marquee">
        <div className="categories">
          <img src="https://sulcdn.azureedge.net/content/c/images/post-beauty-parlour-services.webp"alt="Category 1"></img>
          <img src=" https://sulcdn.azureedge.net/content/c/images/post-catering-services.webp" alt="Category 2" ></img>
          <img src=" https://sulcdn.azureedge.net/content/c/images/post-event-organisers.webp" alt="Category 3" ></img>
          <img src="https://sulcdn.azureedge.net/content/c/images/post-home-appliance-services.webp " alt="Category 4" ></img>
          <img src=" https://sulcdn.azureedge.net/content/c/images/post-cleaning-services.webp" alt="Category 5" ></img>
          <img src="https://sulcdn.azureedge.net/content/c/images/post-pest-control.webp " alt="Category 1" ></img>
          <img src="https://sulcdn.azureedge.net/content/c/images/post-domestic-help-services.webp " alt="Category 2" ></img>
          <img src=" https://sulcdn.azureedge.net/content/c/images/post-distance-education.webp" alt="Category 3" ></img>
          <img src="https://sulcdn.azureedge.net/content/c/images/post-catering-services.webp " alt="Category 4" ></img>
          <img src=" https://sulcdn.azureedge.net/content/c/images/post-domestic-help-services.webp" alt="Category 5"></img>
        </div>
      </div>
      <div className="call-to-action">
        <p>TALK TO US TO LIST YOUR BUSINESS</p>
        <h2>Still have queries? Request a call back Now!</h2>
        <Link to="/ListingDetail"><button className="list-button">Call me back Now</button></Link> 
      </div>
    </div>
     
      <div>
        <RecentBusinesses/>
      </div>

   <section className="react">
      <div>
        <CustomerSuccessStories/>
      </div>
    </section>

    <div className="container11">
      <h1>Run Ads on Speedy to Drive More Leads</h1>
      <p>Stand out from competition to expand your customer reach.</p>
      <ul className="features11">
        <li>Boost your search rankings for better exposure.</li>
        <li>Matched with high-quality verified leads on WhatsApp, SMS, Notifications.</li>
        <li>Replacement options.</li>
        <li>Pause your ad on-demand.</li>
      </ul>
      <h3>Let's start to list your business</h3>
      <div className="input-container11">
        <input type="text" placeholder="+91 Mobile Number" />
        <Link to="/ListingCard"><button className="list-button">Start Now</button></Link> 
       
      </div>
    </div>

    <div>
        <FeaturedBlogs/>
      </div>
      <div>
        <FAQ/>
      </div>
      <div>
        <AppLink/>
      </div> 
      <div>
    <Footer/>
      </div>

    </div>
    
    
    

    
  );
}

export default ListBusiness;
