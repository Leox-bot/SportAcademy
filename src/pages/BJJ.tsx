import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ExternalLink, Award, Target, Heart } from 'lucide-react';

export default function BJJ() {
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
            <Shield className="w-16 h-16 text-yellow-400" />
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider text-shadow-lg uppercase">
              BJJ
            </h1>
            <Shield className="w-16 h-16 text-yellow-400" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed text-shadow font-light italic tracking-wide">
            Brazilian Jiu-Jitsu - The Gentle Art
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              START BJJ TRAINING
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

      {/* About BJJ */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              THE GENTLE ART
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed tracking-wide">
              Brazilian Jiu-Jitsu is a martial art that focuses on ground fighting and submission holds. 
              It teaches that a smaller, weaker person can successfully defend themselves against a bigger, 
              stronger opponent by using leverage, technique, and timing. BJJ is often called "the gentle art" 
              because it emphasizes technique over strength.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300 text-center">
              <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Technique Over Strength</h3>
              <p className="text-gray-300 tracking-wide">Learn to use leverage and proper technique to overcome larger, stronger opponents</p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Belt Progression</h3>
              <p className="text-gray-300 tracking-wide">Structured ranking system from white to black belt with clear progression milestones</p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300 text-center">
              <Heart className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Mental Chess</h3>
              <p className="text-gray-300 tracking-wide">Develop strategic thinking and problem-solving skills through live rolling sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* BJJ Fundamentals */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              BJJ FUNDAMENTALS
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Core concepts every BJJ practitioner must master
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Guard Systems</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Closed Guard - Control and attack from the bottom
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Open Guard - Dynamic guard variations and sweeps
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Half Guard - Recovery and attacking positions
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Spider Guard - Long-range control and attacks
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  De La Riva Guard - Advanced guard system
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Submissions</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Chokes - Rear naked choke, triangle, guillotine
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Arm Locks - Armbar, kimura, americana
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Leg Locks - Ankle locks, knee bars (advanced)
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Submission Chains - Flowing between attacks
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Submission Defense - Escapes and counters
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
              BJJ CLASS SCHEDULE
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Campo Tures</h3>
              <div className="space-y-2">
                <p className="text-gray-300 tracking-wide"><strong>Tuesday:</strong> 19:30 - 20:30</p>
                <p className="text-gray-300 tracking-wide"><strong>Thursday:</strong> 06:30 - 07:30</p>
                <p className="text-gray-300 tracking-wide"><strong>Thursday:</strong> 19:30 - 20:30</p>
              </div>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Brunico</h3>
              <div className="space-y-2">
                <p className="text-gray-300 tracking-wide"><strong>Monday:</strong> 18:30 - 19:30</p>
                <p className="text-gray-300 tracking-wide"><strong>Wednesday:</strong> 19:30 - 20:30</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Belt System */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              BJJ BELT SYSTEM
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Your journey from white to black belt
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-4 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-12 h-4 bg-white mx-auto mb-3 rounded"></div>
              <h3 className="text-lg font-bold text-yellow-400 tracking-wide uppercase">White Belt</h3>
              <p className="text-sm text-gray-300 tracking-wide">Beginner - Learning basics</p>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-4 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-12 h-4 bg-blue-600 mx-auto mb-3 rounded"></div>
              <h3 className="text-lg font-bold text-yellow-400 tracking-wide uppercase">Blue Belt</h3>
              <p className="text-sm text-gray-300 tracking-wide">Intermediate - Solid foundation</p>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-4 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-12 h-4 bg-purple-600 mx-auto mb-3 rounded"></div>
              <h3 className="text-lg font-bold text-yellow-400 tracking-wide uppercase">Purple Belt</h3>
              <p className="text-sm text-gray-300 tracking-wide">Advanced - Developing style</p>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-4 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-12 h-4 bg-amber-700 mx-auto mb-3 rounded"></div>
              <h3 className="text-lg font-bold text-yellow-400 tracking-wide uppercase">Brown Belt</h3>
              <p className="text-sm text-gray-300 tracking-wide">Expert - Refining technique</p>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-4 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-12 h-4 bg-black border border-gray-400 mx-auto mb-3 rounded"></div>
              <h3 className="text-lg font-bold text-yellow-400 tracking-wide uppercase">Black Belt</h3>
              <p className="text-sm text-gray-300 tracking-wide">Master - Teaching others</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            BEGIN YOUR BJJ JOURNEY
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            Start your path in the gentle art. Develop technique, build character, and join our BJJ family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              JOIN BJJ PROGRAM
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