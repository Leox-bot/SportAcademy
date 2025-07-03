import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Schedule from './pages/Schedule';
import Coaches from './pages/Coaches';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import MMA from './pages/MMA';
import Grappling from './pages/Grappling';
import BJJ from './pages/BJJ';

function App() {
  return (
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
          <Route path="/mma" element={<MMA />} />
          <Route path="/grappling" element={<Grappling />} />
          <Route path="/bjj" element={<BJJ />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;