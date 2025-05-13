import React from 'react'
import Navbars from './Navbars'
import Footer from './Footer'
import Image1 from './images/image1.jpg'
import Image2 from './images/Image2.jpg'
import "./Hospitality.css";

const Hospitality = () => {

  const services = [
    {
      id: 1,
      title: "Luxury Suites",
      description: "Experience unparalleled comfort in our spacious suites with panoramic views and premium amenities.",
      image: Image1,
      size: "large",
      link: "/luxury-suites"
    },
    {
      id: 2,
      title: "Gourmet Dining",
      description: "Savor exquisite culinary creations prepared by our award-winning chefs.",
      image: Image2,
      size: "medium",
      link: "/dining"
    },
    {
      id: 3,
      title: "Spa & Wellness",
      description: "Rejuvenate your mind and body with our holistic treatments and therapies.",
      image: "",
      size: "medium",
      link: "/spa"
    },
    {
      id: 4,
      title: "Event Spaces",
      description: "Host memorable events in our elegant venues with professional event planning services.",
      image: Image2,
      size: "large",
      link: "/events"
    },
    {
      id: 5,
      title: "Pool & Recreation",
      description: "Relax by our infinity pool or enjoy a variety of recreational activities.",
      image: Image1,
      size: "small",
      link: "/recreation"
    },
    {
      id: 6,
      title: "Concierge Service",
      description: "Our dedicated team is available 24/7 to cater to your every need.",
      image: "",
      size: "small",
      link: "/concierge"
    }
  ];

  return (
    <div>
      <Navbars />

      <div className="hospitality-page">
      <div className="hospitality-header">
        <h1>Exceptional Hospitality</h1>
        <p>Discover our world-class amenities and services designed for your comfort</p>
      </div>
      
      <div className="services-grid">
        {services.map(service => (
          <div 
            key={service.id} 
            className={`service-card ${service.size}`}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="card-overlay">
              <h3 className='text-white'>{service.title}</h3>
              <p className='text-white'>{service.description}</p>
              <a href={service.link} className="explore-btn">Explore More</a>
            </div>
          </div>
        ))}
      </div>
    </div>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Hospitality