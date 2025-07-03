import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Shield, Target, Flame, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/ea4196af-93c9-4c00-942d-6f3ca5e06e8f.jpg')",
          }}
        ></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10"></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-wider text-white text-shadow-lg">
            <span className="text-white">SPORT</span>
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">ACADEMY</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-shadow font-light italic tracking-wide">
            Forging fighters since 2017
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              JOIN NOW
              <ExternalLink size={20} />
            </a>
            <Link 
              to="/classes" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide uppercase"
            >
              VIEW CLASSES
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              WELCOME TO SPORT ACADEMY
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Since 2017, Sport Academy has been the premier destination for martial arts training in South Tyrol. 
              We offer world-class instruction in MMA, Brazilian Jiu-Jitsu, and Grappling across our two state-of-the-art facilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-black/50 p-8 rounded-lg border border-yellow-500/30">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                8+
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wide text-yellow-400 uppercase">Years of Excellence</h3>
              <p className="text-gray-300 tracking-wide">Established in 2017, we've been developing fighters for over 8 years</p>
            </div>
            
            <div className="text-center bg-black/50 p-8 rounded-lg border border-yellow-500/30">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wide text-yellow-400 uppercase">Training Locations</h3>
              <p className="text-gray-300 tracking-wide">Convenient facilities in Campo Tures and Brunico</p>
            </div>
            
            <div className="text-center bg-black/50 p-8 rounded-lg border border-yellow-500/30">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                6
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wide text-yellow-400 uppercase">Training Programs</h3>
              <p className="text-gray-300 tracking-wide">Comprehensive classes for adults and kids of all skill levels</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/classes" 
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wide uppercase"
            >
              EXPLORE OUR CLASSES
            </Link>
          </div>
        </div>
      </section>

      {/* Training Disciplines Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-wide uppercase">
              TRAIN LIKE A FIGHTER
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Master the arts of combat with professional instruction
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg bg-gradient-dark border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/ea4196af-93c9-4c00-942d-6f3ca5e06e8f.jpg" 
                  alt="MMA Training"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <Flame className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white tracking-wide uppercase">MMA</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 tracking-wide">
                  Complete mixed martial arts training combining striking, grappling, and ground fighting techniques.
                </p>
                <Link 
                  to="/disciplines/mma"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold tracking-wide uppercase transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg bg-gradient-dark border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg" 
                  alt="BJJ Training"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white tracking-wide uppercase">BJJ</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 tracking-wide">
                  Master the gentle art of Brazilian Jiu-Jitsu with comprehensive ground fighting techniques.
                </p>
                <Link 
                  to="/disciplines/bjj"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold tracking-wide uppercase transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg bg-gradient-dark border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg" 
                  alt="Grappling Training"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white tracking-wide uppercase">GRAPPLING</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 tracking-wide">
                  Develop wrestling and submission skills through intensive no-gi grappling training.
                </p>
                <Link 
                  to="/disciplines/grappling"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold tracking-wide uppercase transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-wide uppercase">
              GET STARTED TODAY
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Everything you need to begin your martial arts journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/classes" 
              className="bg-black/70 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide uppercase">View Classes</h3>
              <p className="text-gray-300 group-hover:text-black tracking-wide">Explore our training programs</p>
            </Link>
            
            <Link 
              to="/schedule" 
              className="bg-black/70 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide uppercase">Check Schedule</h3>
              <p className="text-gray-300 group-hover:text-black tracking-wide">Find the perfect class time</p>
            </Link>
            
            <Link 
              to="/membership" 
              className="bg-black/70 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide uppercase">Membership Plans</h3>
              <p className="text-gray-300 group-hover:text-black tracking-wide">Choose your training package</p>
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-black/70 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide uppercase">Contact Us</h3>
              <p className="text-gray-300 group-hover:text-black tracking-wide">Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}