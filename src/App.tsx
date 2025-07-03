import React, { useState } from 'react';
import { Menu, X, MapPin, Clock, Users, Trophy, Star, Phone, Mail, ExternalLink } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-oswald">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/sport academy.jpg" alt="Sport Academy" className="h-10 w-auto" />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-black hover:text-gray-600 transition-colors font-medium tracking-wide">Home</a>
                <a href="#classes" className="text-gray-700 hover:text-black transition-colors font-medium tracking-wide">Classes</a>
                <a href="#schedule" className="text-gray-700 hover:text-black transition-colors font-medium tracking-wide">Schedule</a>
                <a href="#coaches" className="text-gray-700 hover:text-black transition-colors font-medium tracking-wide">Coaches</a>
                <a href="#membership" className="text-gray-700 hover:text-black transition-colors font-medium tracking-wide">Membership</a>
                <a href="#contact" className="text-gray-700 hover:text-black transition-colors font-medium tracking-wide">Contact</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black hover:text-gray-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-black hover:text-gray-600 hover:bg-gray-50 rounded transition-colors font-medium tracking-wide">Home</a>
              <a href="#classes" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors font-medium tracking-wide">Classes</a>
              <a href="#schedule" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors font-medium tracking-wide">Schedule</a>
              <a href="#coaches" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors font-medium tracking-wide">Coaches</a>
              <a href="#membership" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors font-medium tracking-wide">Membership</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors font-medium tracking-wide">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Logo Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Logo Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCSW4xVUFFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6771d95f0fa33e4415778c20c97f1b26ca423ca4//sport academy.jpg')",
          }}
        ></div>
        
        {/* Dark overlay matching schedule colors */}
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
            <a href="#classes" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide">
              VIEW CLASSES
            </a>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-wide">
              OUR CLASSES
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto tracking-wide">
              Professional training programs for all skill levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "MMA Classes",
                description: "Complete mixed martial arts training combining striking, grappling, and ground fighting techniques.",
                icon: <Trophy className="w-8 h-8" />
              },
              {
                title: "Brazilian Jiu-Jitsu",
                description: "Master the gentle art of BJJ with our comprehensive ground fighting program.",
                icon: <Users className="w-8 h-8" />
              },
              {
                title: "Grappling",
                description: "Develop your wrestling and submission skills in our intensive grappling sessions.",
                icon: <Star className="w-8 h-8" />
              },
              {
                title: "BJJ for Kids",
                description: "Safe and fun Brazilian Jiu-Jitsu classes designed specifically for young athletes.",
                icon: <Users className="w-8 h-8" />
              },
              {
                title: "Grappling for Kids",
                description: "Build confidence, discipline, and physical fitness through youth grappling programs.",
                icon: <Trophy className="w-8 h-8" />
              },
              {
                title: "Wrestling",
                description: "Traditional wrestling techniques and conditioning for competitive athletes.",
                icon: <Star className="w-8 h-8" />
              }
            ].map((classItem, index) => (
              <div key={index} className="bg-gray-700 border-2 border-gray-600 rounded-lg p-6 hover:bg-white hover:text-black hover:border-gray-400 transition-all duration-300 group">
                <div className="text-white group-hover:text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                  {classItem.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide">{classItem.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-600 leading-relaxed tracking-wide">{classItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black tracking-wide">
              WEEKLY SCHEDULE
            </h2>
            <p className="text-xl text-gray-600 tracking-wide">
              Summer 2025 Training Schedule
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src="/d6309e04-e42c-4a1f-ac84-09a85f5e1207.jpg" 
              alt="Weekly Schedule" 
              className="w-full rounded-lg shadow-2xl border border-gray-300"
            />
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-wide">
              OUR COACHES
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Learn from experienced professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-gray-700 border-2 border-gray-600 rounded-lg p-8 hover:bg-white hover:text-black hover:border-gray-400 transition-all duration-300">
                <div className="w-24 h-24 bg-gray-300 group-hover:bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-black text-gray-700 group-hover:text-white tracking-wide">MP</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-black tracking-wide">Matteo Parolin</h3>
                <p className="text-gray-300 group-hover:text-gray-600 font-semibold mb-4 tracking-wide">Head Coach</p>
                <p className="text-gray-300 group-hover:text-gray-600 leading-relaxed tracking-wide">
                  Leading our academy with years of professional experience in MMA and Brazilian Jiu-Jitsu.
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-700 border-2 border-gray-600 rounded-lg p-8 hover:bg-white hover:text-black hover:border-gray-400 transition-all duration-300">
                <div className="w-24 h-24 bg-gray-300 group-hover:bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-black text-gray-700 group-hover:text-white tracking-wide">CZ</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-black tracking-wide">Christian Zecchetto</h3>
                <p className="text-gray-300 group-hover:text-gray-600 font-semibold mb-4 tracking-wide">Coach</p>
                <p className="text-gray-300 group-hover:text-gray-600 leading-relaxed tracking-wide">
                  Specialized in grappling and wrestling techniques, bringing technical expertise to every session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black tracking-wide">
              MEMBERSHIP PLANS
            </h2>
            <p className="text-xl text-gray-600 tracking-wide">
              Choose the plan that fits your training goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Main Season */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-300 group shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-white tracking-wide">Main Season</h3>
                <p className="text-gray-600 group-hover:text-gray-300 tracking-wide">September - June</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 group-hover:border-gray-600">
                  <span className="text-black group-hover:text-white font-medium tracking-wide">Adults</span>
                  <span className="text-2xl font-bold text-black group-hover:text-white tracking-wide">€600</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-black group-hover:text-white font-medium tracking-wide">Students</span>
                  <span className="text-2xl font-bold text-black group-hover:text-white tracking-wide">€450</span>
                </div>
              </div>
              
              <a 
                href="https://maat-app.link/7BGCKjdtuUb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gray-800 hover:bg-white text-white hover:text-gray-800 border-2 border-gray-800 py-3 rounded-lg font-bold transition-colors duration-300 flex items-center justify-center gap-2 tracking-wide"
              >
                SELECT PLAN
                <ExternalLink size={18} />
              </a>
            </div>
            
            {/* Summer Season */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-300 group shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-white tracking-wide">Summer Season</h3>
                <p className="text-gray-600 group-hover:text-gray-300 tracking-wide">June - September</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 group-hover:border-gray-600">
                  <span className="text-black group-hover:text-white font-medium tracking-wide">Adults</span>
                  <span className="text-2xl font-bold text-black group-hover:text-white tracking-wide">€210</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-black group-hover:text-white font-medium tracking-wide">Students</span>
                  <span className="text-2xl font-bold text-black group-hover:text-white tracking-wide">€150</span>
                </div>
              </div>
              
              <a 
                href="https://maat-app.link/7BGCKjdtuUb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gray-800 hover:bg-white text-white hover:text-gray-800 border-2 border-gray-800 py-3 rounded-lg font-bold transition-colors duration-300 flex items-center justify-center gap-2 tracking-wide"
              >
                SELECT PLAN
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 tracking-wide">Ready to start your martial arts journey?</p>
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg tracking-wide"
            >
              JOIN SPORT ACADEMY TODAY
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-wide">
              GET IN TOUCH
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Visit us at our two convenient locations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Campo Tures Location */}
            <div className="bg-gray-700 border-2 border-gray-600 rounded-lg p-8 hover:bg-white hover:text-black hover:border-gray-400 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-white group-hover:text-black mr-3" />
                <h3 className="text-xl font-bold text-white group-hover:text-black tracking-wide">Campo Tures</h3>
              </div>
              <p className="text-gray-300 group-hover:text-gray-600 mb-6 tracking-wide">
                Via Hugo von Taufers 8<br />
                Campo Tures
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-white group-hover:text-black mr-3" />
                  <span className="text-gray-300 group-hover:text-gray-600 tracking-wide">See schedule for class times</span>
                </div>
              </div>
            </div>
            
            {/* Brunico Location */}
            <div className="bg-gray-700 border-2 border-gray-600 rounded-lg p-8 hover:bg-white hover:text-black hover:border-gray-400 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-white group-hover:text-black mr-3" />
                <h3 className="text-xl font-bold text-white group-hover:text-black tracking-wide">Brunico</h3>
              </div>
              <p className="text-gray-300 group-hover:text-gray-600 mb-6 tracking-wide">
                Via Teresa Riedl 3<br />
                39031 Brunico BZ
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-white group-hover:text-black mr-3" />
                  <span className="text-gray-300 group-hover:text-gray-600 tracking-wide">See schedule for class times</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6 tracking-wide">Ready to start your martial arts journey?</p>
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg tracking-wide"
            >
              JOIN SPORT ACADEMY TODAY
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 border-t border-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src="/sport academy.jpg" alt="Sport Academy" className="h-12 w-auto mx-auto mb-6" />
            <p className="text-gray-700 mb-2 font-medium tracking-wide">
              Elite MMA, BJJ & Grappling Training in South Tyrol
            </p>
            <p className="text-gray-600 mb-6 italic tracking-wide">
              Forging fighters since 2017
            </p>
            <div className="flex justify-center space-x-8 mb-6">
              <a href="#home" className="text-gray-600 hover:text-black transition-colors tracking-wide">Home</a>
              <a href="#classes" className="text-gray-600 hover:text-black transition-colors tracking-wide">Classes</a>
              <a href="#schedule" className="text-gray-600 hover:text-black transition-colors tracking-wide">Schedule</a>
              <a href="#coaches" className="text-gray-600 hover:text-black transition-colors tracking-wide">Coaches</a>
              <a href="#membership" className="text-gray-600 hover:text-black transition-colors tracking-wide">Membership</a>
            </div>
            <p className="text-gray-500 text-sm tracking-wide">
              © 2025 Sport Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;