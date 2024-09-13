import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './nav.css'; // Import the CSS file for custom styles

export const Navicon = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={NavLink} to="/" className="custom-logo">onlineAcademy</Navbar.Brand>

        {/* Toggle button for small screens */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible nav items */}
        <Navbar.Collapse id="navbar-nav">
          {/* Nav Links */}
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link as={NavLink} to="/" className="custom-nav-link">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/courses" className="custom-nav-link">All Courses</Nav.Link>
            <Nav.Link as={NavLink} to="/team" className="custom-nav-link">Team</Nav.Link>
            <Nav.Link as={NavLink} to="/pricing" className="custom-nav-link">Pricing</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="custom-nav-link">Contact</Nav.Link>
          </Nav>

          {/* Social Media Icons */}
          <Nav className="nav-icons flex-lg-row flex-column mt-lg-0 mt-3">
            <Nav.Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="custom-nav-link">
              <i className="fa-brands fa-facebook"></i>
            </Nav.Link>
            <Nav.Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="custom-nav-link">
              <i className="fa-brands fa-twitter"></i>
            </Nav.Link>
            <Nav.Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="custom-nav-link">
              <i className="fa-brands fa-instagram"></i>
            </Nav.Link>
            <Nav.Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="custom-nav-link">
              <i className="fa-brands fa-github"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
