import React from 'react';
import { Link } from 'react-router-dom';
import { Target, ExternalLink, Zap, Shield, Trophy } from 'lucide-react';

export default function Grappling() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10"></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Target className="w-16 h-16 text-yellow-400" />
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider text-shadow-lg uppercase">
              GRAPPLING
            </h1>
            <Target className="w-16 h-16 text-yellow-400" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed text-shadow font-light italic tracking-wide">
            Master the Art of Ground Control and Submission
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              START GRAPPLING
              <ExternalLink size={20} />
            </a>
            <Link 
              to="/schedule" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide uppercase"
            >
              VIEW SCHEDULE
            </Link>
          </div>
        </div>
      </section>

      {/* About Grappling */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              WHAT IS GRAPPLING?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed tracking-wide">
              Grappling is a form of combat that focuses on gaining a superior position through the use of throws, takedowns, 
              sweeps, and ground control. It combines elements of wrestling, Brazilian Jiu-Jitsu, and submission fighting 
              to create a comprehensive ground-based martial art.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300 text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Takedowns</h3>
              <p className="text-gray-300 tracking-wide">Learn powerful wrestling takedowns and throws to control where the fight takes place</p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300 text-center">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Ground Control</h3>
              <p className="text-gray-300 tracking-wide">Master dominant positions and transitions to maintain control over your opponent</p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300 text-center">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Submissions</h3>
              <p className="text-gray-300 tracking-wide">Develop submission techniques including joint locks and chokes for finishing fights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              GRAPPLING BENEFITS
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Why grappling is essential for any martial artist
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Physical Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Full-body functional strength development
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Improved flexibility and mobility
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Enhanced cardiovascular endurance
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Better body awareness and coordination
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Increased core stability and balance
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Mental Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Strategic thinking and problem-solving
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Stress relief and mental clarity
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Increased confidence and self-esteem
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Discipline and mental toughness
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Patience and emotional control
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              GRAPPLING CLASS SCHEDULE
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Campo Tures</h3>
              <div className="space-y-2">
                <p className="text-gray-300 tracking-wide"><strong>Tuesday:</strong> 15:00 - 16:00</p>
                <p className="text-gray-300 tracking-wide"><strong>Thursday:</strong> 18:30 - 19:30</p>
              </div>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Brunico</h3>
              <div className="space-y-2">
                <p className="text-gray-300 tracking-wide"><strong>Monday:</strong> 19:30 - 20:30</p>
                <p className="text-gray-300 tracking-wide"><strong>Wednesday:</strong> 18:30 - 19:30</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Styles */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              GRAPPLING STYLES WE TEACH
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Wrestling</h3>
              <p className="text-gray-300 tracking-wide">
                Freestyle and Greco-Roman wrestling techniques for superior takedown skills and ground control.
              </p>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">No-Gi BJJ</h3>
              <p className="text-gray-300 tracking-wide">
                Brazilian Jiu-Jitsu without the traditional gi, focusing on grips, submissions, and transitions.
              </p>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Submission Grappling</h3>
              <p className="text-gray-300 tracking-wide">
                Modern submission grappling combining the best techniques from all grappling arts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            MASTER THE GROUND GAME
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            Develop the skills to control any situation on the ground. Join our grappling program today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              JOIN GRAPPLING PROGRAM
              <ExternalLink size={20} />
            </a>
            <Link 
              to="/classes" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide uppercase"
            >
              VIEW ALL CLASSES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}