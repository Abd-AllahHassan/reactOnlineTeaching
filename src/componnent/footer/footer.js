import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file for custom styles

export const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container> 
        <Row>
          {/* About Section */}
          <Col md={4} sm={12} className="mb-4">
            <h5>About Us</h5>
            <p>
              OnlineAcademy offers a wide range of courses to help you learn new skills and advance your career. Join us today to start learning from the best.
            </p>
          </Col>

          {/* Links Section */}
          <Col md={4} sm={12} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/courses" className="footer-link">All Courses</Link></li>
              <li><Link to="/team" className="footer-link">Team</Link></li>
              <li><Link to="/pricing" className="footer-link">Pricing</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4} sm={12} className="mb-4">
            <h5>Contact Us</h5>
            <p>
              Email: support@onlineacademy.com <br />
              Phone: +1 234 567 890
            </p>
            <div className="footer-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <small>&copy; 2024 Abdullah Hassan. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
