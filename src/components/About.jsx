import './About.css';
import logo from '../data/images/logoo.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Fortune IT Solutions</h2>
            <div className="about-description">
              <p>
                Fortune IT Solutions is a leading provider of professional CCTV camera 
                services, dedicated to keeping your property safe and secure. With years 
                of experience in the security industry, we offer comprehensive solutions 
                tailored to meet your specific needs.
              </p>
              <p>
                Our team of certified technicians specializes in the installation, 
                maintenance, and support of high-quality surveillance systems for 
                residential, commercial, and industrial properties.
              </p>
            </div>
            <div className="about-features">
              <div className="feature-box">
                <div className="feature-icon">🔒</div>
                <h3>Secure Solutions</h3>
                <p>State-of-the-art security systems</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">⚡</div>
                <h3>Quick Installation</h3>
                <p>Fast and professional setup</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🛠️</div>
                <h3>Expert Support</h3>
                <p>24/7 maintenance and support</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">💼</div>
                <h3>Professional Service</h3>
                <p>Certified and experienced team</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-visual">
              <div className="visual-shield">
                <img src={logo} alt="Fortune IT Solutions Logo" className="about-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
