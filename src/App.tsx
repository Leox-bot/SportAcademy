import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Schedule from './pages/Schedule';
import Coaches from './pages/Coaches';
import Membership from './pages/Membership';
import Contact from './pages/Contact';

// Discipline pages
import MMA from './pages/disciplines/MMA';
import BJJ from './pages/disciplines/BJJ';
import Grappling from './pages/disciplines/Grappling';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Discipline pages */}
            <Route path="/disciplines/mma" element={<MMA />} />
            <Route path="/disciplines/bjj" element={<BJJ />} />
            <Route path="/disciplines/grappling" element={<Grappling />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;