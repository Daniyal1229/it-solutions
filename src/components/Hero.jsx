import { useState, useEffect } from 'react';
import './Hero.css';
import img1 from '../data/images/img1.png';
import img2 from '../data/images/img2.png';
import img3 from '../data/images/img3.png';

const images = [img1, img2, img3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-fortune">FORTUNE</span>
            <span className="title-it">IT SOLUTIONS</span>
          </h1>
          <h2 className="hero-subtitle">CCTV Camera Services</h2>
          <p className="hero-description">
            Professional security solutions for your home and business. 
            High-quality CCTV cameras, installation, and maintenance services 
            to keep what matters most safe and secure.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('products')}
            >
              View Products
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="camera-gallery">
            {images.map((image, index) => (
              <div
                key={index}
                className={`camera-image-wrapper ${index === currentIndex ? 'active' : ''}`}
              >
                <img
                  src={image}
                  alt={`CCTV Camera ${index + 1}`}
                  className="camera-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default Hero;
