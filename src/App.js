import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './componnent/navbar/Navbar';
import { Footer } from './componnent/footer/footer';
import { Team } from './componnent/pages/Team/Team';
import { Pricing } from './componnent/pages/Pricing/Pricing';
import { Allcourses } from './componnent/pages/AllCourses/Allcourses';
import { About } from './componnent/pages/About/About';
import { Contact } from './componnent/pages/Contact/Contact';
import { Home } from './componnent/pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/courses" element={<Allcourses />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
