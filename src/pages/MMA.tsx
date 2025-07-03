import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ExternalLink, Target, Shield, Zap } from 'lucide-react';

export default function MMA() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/ea4196af-93c9-4c00-942d-6f3ca5e06e8f.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10"></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Flame className="w-16 h-16 text-yellow-400" />
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider text-shadow-lg uppercase">
              MMA
            </h1>
            <Flame className="w-16 h-16 text-yellow-400" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed text-shadow font-light italic tracking-wide">
            Mixed Martial Arts - The Ultimate Combat Sport
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              START MMA TRAINING
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

      {/* About MMA */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              WHAT IS MMA?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed tracking-wide">
              Mixed Martial Arts combines techniques from various combat sports including boxing, wrestling, Brazilian Jiu-Jitsu, 
              Muay Thai, and more. It's the most complete form of combat training, developing both striking and grappling skills 
              in a controlled, safe environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300 text-center">
              <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Striking Techniques</h3>
              <p className="text-gray-300 tracking-wide">Master boxing, kickboxing, and Muay Thai techniques for effective stand-up combat</p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300 text-center">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Grappling Skills</h3>
              <p className="text-gray-300 tracking-wide">Learn wrestling takedowns and Brazilian Jiu-Jitsu for ground control and submissions</p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300 text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Complete Conditioning</h3>
              <p className="text-gray-300 tracking-wide">Build functional strength, endurance, and mental toughness through intense training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              MMA TRAINING PROGRAM
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Comprehensive curriculum designed for all skill levels
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Beginner Program</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Basic striking fundamentals (jab, cross, hook, uppercut)
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Introduction to grappling and takedowns
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Basic ground positions and escapes
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Conditioning and flexibility training
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Safety protocols and proper technique
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Advanced Program</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Advanced striking combinations and footwork
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Complex grappling transitions
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Submission techniques and defense
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Sparring and live training sessions
                </li>
                <li className="flex items-start text-gray-300 tracking-wide">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  Competition preparation and strategy
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
              MMA CLASS SCHEDULE
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Campo Tures</h3>
              <div className="space-y-2">
                <p className="text-gray-300 tracking-wide"><strong>Tuesday:</strong> 18:30 - 19:30</p>
              </div>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Brunico</h3>
              <div className="space-y-2">
                <p className="text-gray-300 tracking-wide"><strong>Wednesday:</strong> 17:30 - 18:30</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            READY TO FIGHT?
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            Join our MMA program and develop the skills, confidence, and conditioning of a complete martial artist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              JOIN MMA PROGRAM
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