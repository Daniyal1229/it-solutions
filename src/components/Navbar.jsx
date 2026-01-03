import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          {/* <div className="logo-shield">
            <div className="shield-icon">
              <div className="camera-icon"></div>
              <div className="arrow-icon"></div>
              <div className="red-stripe"></div>
            </div>
          </div> */}
          <div className="logo-text">
            <span className="logo-fortune">FORTUNE</span>
            <span className="logo-it">IT SOLUTIONS</span>
          </div>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')} className="nav-link">Home</a>
          <a href="#products" onClick={() => scrollToSection('products')} className="nav-link">Products</a>
          <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

