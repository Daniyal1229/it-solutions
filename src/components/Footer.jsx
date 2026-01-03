import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-shield">
                <div className="footer-shield-icon">
                  <div className="footer-camera-icon"></div>
                  <div className="footer-arrow-icon"></div>
                  <div className="footer-red-stripe"></div>
                </div>
              </div>
              <div className="footer-logo-text">
                <span className="footer-fortune">FORTUNE</span>
                <span className="footer-it">IT SOLUTIONS</span>
              </div>
            </div>
            <p className="footer-tagline">CCTV Camera Services</p>
            <p className="footer-description">
              Professional security solutions for your home and business.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#products" onClick={() => scrollToSection('products')}>Products</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="footer-contact">
              <p>
                <span className="contact-label">Phone:</span>
                <a href="tel:9844026480">9844026480</a>
              </p>
              <p>
                <span className="contact-label">Email:</span>
                <a href="mailto:fortunesolutionsit@gmail.com">fortunesolutionsit@gmail.com</a>
              </p>
              <p>
                <span className="contact-label">Address:</span>
                219/A, 4th cross<br />
                Beside Trends Shopping Mall<br />
                B.M Road
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          {/* <p>&copy; {new Date().getFullYear()} Fortune IT Solutions. All rights reserved.</p> */}
          <p>&copy; {'1229'} Daniyal Syed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

