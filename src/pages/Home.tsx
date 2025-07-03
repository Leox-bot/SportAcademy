import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCSW4xVUFFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6771d95f0fa33e4415778c20c97f1b26ca423ca4//sport academy.jpg')",
          }}
        ></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/70 to-gray-900/85 z-10"></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-anton font-black mb-6 tracking-wider text-white drop-shadow-2xl">
            <span className="text-white">SPORT</span>
            <br />
            <span className="text-white">ACADEMY</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-light italic tracking-wide">
            Forging fighters since 2017
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide"
            >
              JOIN NOW
              <ExternalLink size={20} />
            </a>
            <Link 
              to="/classes" 
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide"
            >
              VIEW CLASSES
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black tracking-wide">
              WELCOME TO SPORT ACADEMY
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Since 2017, Sport Academy has been the premier destination for martial arts training in South Tyrol. 
              We offer world-class instruction in MMA, Brazilian Jiu-Jitsu, and Grappling across our two state-of-the-art facilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                8+
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wide">Years of Excellence</h3>
              <p className="text-gray-600 tracking-wide">Established in 2017, we've been developing fighters for over 8 years</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wide">Training Locations</h3>
              <p className="text-gray-600 tracking-wide">Convenient facilities in Campo Tures and Brunico</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                6
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wide">Training Programs</h3>
              <p className="text-gray-600 tracking-wide">Comprehensive classes for adults and kids of all skill levels</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/classes" 
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wide"
            >
              EXPLORE OUR CLASSES
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-wide">
              GET STARTED TODAY
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Everything you need to begin your martial arts journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/classes" 
              className="bg-gray-700 border-2 border-gray-600 rounded-lg p-6 hover:bg-white hover:text-black hover:border-gray-400 transition-all duration-300 group text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide">View Classes</h3>
              <p className="text-gray-300 group-hover:text-gray-600 tracking-wide">Explore our training programs</p>
            </Link>
            
            <Link 
              to="/schedule" 
              className="bg-gray-700 border-2 border-gray-600 rounded-lg p-6 hover:bg-white hover:text-black hover:border-gray-400 transition-all duration-300 group text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide">Check Schedule</h3>
              <p className="text-gray-300 group-hover:text-gray-600 tracking-wide">Find the perfect class time</p>
            </Link>
            
            <Link 
              to="/membership" 
              className="bg-gray-700 border-2 border-gray-600 rounded-lg p-6 hover:bg-white hover:text-black hover:border-gray-400 transition-all duration-300 group text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide">Membership Plans</h3>
              <p className="text-gray-300 group-hover:text-gray-600 tracking-wide">Choose your training package</p>
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-gray-700 border-2 border-gray-600 rounded-lg p-6 hover:bg-white hover:text-black hover:border-gray-400 transition-all duration-300 group text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide">Contact Us</h3>
              <p className="text-gray-300 group-hover:text-gray-600 tracking-wide">Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}