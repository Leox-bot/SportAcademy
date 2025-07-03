import React from 'react';
import { Link } from 'react-router-dom';
import { Target, ArrowLeft, ExternalLink, Zap, Users, Trophy } from 'lucide-react';

export default function Grappling() {
  return (
    <div>
      {/* Navigation Breadcrumb */}
      <section className="py-6 bg-black border-b border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase">Home</Link>
            <span className="text-gray-600">/</span>
            <Link to="/classes" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase">Classes</Link>
            <span className="text-gray-600">/</span>
            <span className="text-yellow-400 tracking-wide uppercase">Grappling</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg" 
            alt="Grappling Training"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Target className="w-16 h-16 text-yellow-400" />
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-wide uppercase">
                GRAPPLING
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Master the art of control, takedowns, and submissions. Develop explosive power, 
              technical precision, and mental toughness through intensive grappling training.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 text-white tracking-wide uppercase">What is Grappling?</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed tracking-wide">
                <p>
                  Grappling is a form of combat that involves techniques such as clinch fighting, throws, takedowns, 
                  joint locks, pins, and submission holds. It encompasses various martial arts including wrestling, 
                  Brazilian Jiu-Jitsu, judo, and sambo.
                </p>
                <p>
                  Our grappling program focuses on no-gi techniques, emphasizing speed, athleticism, and adaptability. 
                  Without the traditional gi, grapplers must rely more on underhooks, overhooks, and body control 
                  rather than grips on clothing.
                </p>
                <p>
                  Grappling develops incredible functional strength, cardiovascular endurance, and mental resilience. 
                  It's an essential component for MMA fighters and an excellent standalone martial art for self-defense 
                  and competition.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg" 
                alt="Grappling Training"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Techniques */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              CORE GRAPPLING TECHNIQUES
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              Master the essential skills that make grappling such an effective combat art
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">Takedowns</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Double leg takedowns
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Single leg attacks
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Hip tosses and throws
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Sprawls and defensive wrestling
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Clinch work and dirty boxing
                </li>
              </ul>
            </div>

            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">Control</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Top position control
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Underhooks and overhooks
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Body locks and bear hugs
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Pressure and weight distribution
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Transitions and scrambles
                </li>
              </ul>
            </div>

            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">Submissions</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Rear naked chokes
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Guillotine chokes
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Arm bars and kimuras
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Leg locks and ankle locks
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Neck cranks and pressure points
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              TRAINING METHODOLOGY
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Our systematic approach to developing complete grapplers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Technical Development</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white mb-1 tracking-wide uppercase">Fundamental Drilling</h4>
                    <p className="tracking-wide">Repetitive practice of basic movements and positions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white mb-1 tracking-wide uppercase">Positional Sparring</h4>
                    <p className="tracking-wide">Focused practice from specific positions and scenarios</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white mb-1 tracking-wide uppercase">Flow Rolling</h4>
                    <p className="tracking-wide">Continuous movement practice at controlled intensity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Physical Conditioning</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white mb-1 tracking-wide uppercase">Functional Strength</h4>
                    <p className="tracking-wide">Building strength specific to grappling movements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white mb-1 tracking-wide uppercase">Cardiovascular Endurance</h4>
                    <p className="tracking-wide">High-intensity training for competition preparation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white mb-1 tracking-wide uppercase">Flexibility & Mobility</h4>
                    <p className="tracking-wide">Injury prevention and improved range of motion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              BENEFITS OF GRAPPLING
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              Discover how grappling training transforms your physical and mental capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-black/70 p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                🔥
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400 tracking-wide uppercase">Fat Burning</h3>
              <p className="text-gray-300 text-sm tracking-wide">Intense full-body workout that burns calories efficiently</p>
            </div>
            
            <div className="text-center bg-black/70 p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                💪
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400 tracking-wide uppercase">Functional Strength</h3>
              <p className="text-gray-300 text-sm tracking-wide">Build real-world applicable strength and power</p>
            </div>
            
            <div className="text-center bg-black/70 p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                🧠
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400 tracking-wide uppercase">Problem Solving</h3>
              <p className="text-gray-300 text-sm tracking-wide">Develop tactical thinking and adaptability</p>
            </div>
            
            <div className="text-center bg-black/70 p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                🏆
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400 tracking-wide uppercase">Competition Ready</h3>
              <p className="text-gray-300 text-sm tracking-wide">Prepare for grappling and MMA competitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              GRAPPLING SCHEDULE
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              High-intensity grappling sessions for all experience levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Campo Tures</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-yellow-500/30">
                  <span className="text-white font-medium tracking-wide uppercase">Tuesday</span>
                  <span className="text-gray-300 tracking-wide">15:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white font-medium tracking-wide uppercase">Thursday</span>
                  <span className="text-gray-300 tracking-wide">18:30 - 19:30</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Brunico</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-yellow-500/30">
                  <span className="text-white font-medium tracking-wide uppercase">Monday</span>
                  <span className="text-gray-300 tracking-wide">19:30 - 20:30</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white font-medium tracking-wide uppercase">Wednesday</span>
                  <span className="text-gray-300 tracking-wide">18:30 - 19:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Practitioners */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              GRAPPLING LEGENDS
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Learn from the techniques and philosophies of grappling masters
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-yellow-400 tracking-wide uppercase">Gordon Ryan</h3>
              <p className="text-gray-300 text-sm mb-3 tracking-wide">ADCC Champion & No-Gi Specialist</p>
              <p className="text-gray-400 text-sm tracking-wide">Dominant submission grappler of the modern era</p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-yellow-400 tracking-wide uppercase">Marcelo Garcia</h3>
              <p className="text-gray-300 text-sm mb-3 tracking-wide">5x ADCC Champion</p>
              <p className="text-gray-400 text-sm tracking-wide">Master of butterfly guard and back control</p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-yellow-400 tracking-wide uppercase">Khabib Nurmagomedov</h3>
              <p className="text-gray-300 text-sm mb-3 tracking-wide">Former UFC Lightweight Champion</p>
              <p className="text-gray-400 text-sm tracking-wide">Undefeated MMA fighter with dominant wrestling</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            MASTER THE ART OF CONTROL
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            Develop explosive power, technical precision, and unbreakable mental toughness through our grappling program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              JOIN GRAPPLING CLASSES
              <ExternalLink size={20} />
            </a>
            <Link 
              to="/classes" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              <ArrowLeft size={20} />
              BACK TO CLASSES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}