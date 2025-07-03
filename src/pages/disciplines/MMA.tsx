import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowLeft, ExternalLink, Target, Shield, Zap } from 'lucide-react';

export default function MMA() {
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
            <span className="text-yellow-400 tracking-wide uppercase">MMA</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/ea4196af-93c9-4c00-942d-6f3ca5e06e8f.jpg" 
            alt="MMA Training"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Flame className="w-16 h-16 text-yellow-400" />
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-wide uppercase">
                MIXED MARTIAL ARTS
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              The ultimate combat sport combining striking, grappling, and ground fighting techniques. 
              Train like a professional fighter and develop complete martial arts skills.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 text-white tracking-wide uppercase">What is MMA?</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed tracking-wide">
                <p>
                  Mixed Martial Arts (MMA) is a full-contact combat sport that allows a wide variety of fighting techniques 
                  and skills from a mixture of other combat sports to be used in competition.
                </p>
                <p>
                  MMA combines techniques from boxing, wrestling, Brazilian Jiu-Jitsu, Muay Thai, kickboxing, karate, 
                  judo, and other disciplines. It's often referred to as "the most complete martial art" because it 
                  encompasses all ranges of combat.
                </p>
                <p>
                  At Sport Academy, our MMA program is designed to teach you these diverse skills in a safe, 
                  structured environment with expert instruction from experienced fighters.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/ea4196af-93c9-4c00-942d-6f3ca5e06e8f.jpg" 
                alt="MMA Training"
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
              KEY TECHNIQUES & SKILLS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              Master the fundamental techniques that make MMA the most complete combat sport
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">Striking</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Boxing combinations
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Muay Thai kicks and knees
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Elbow strikes
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Footwork and movement
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Defensive techniques
                </li>
              </ul>
            </div>

            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">Wrestling</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Takedown techniques
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Sprawls and defensive wrestling
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Clinch work
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Ground control
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Cage wrestling
                </li>
              </ul>
            </div>

            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">Ground Game</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Brazilian Jiu-Jitsu submissions
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Ground and pound
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Guard work
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Escapes and reversals
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Positional control
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black mb-6 text-white tracking-wide uppercase">History of MMA</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed tracking-wide">
                <p>
                  Mixed Martial Arts has ancient roots, with early forms of mixed combat sports dating back to ancient Greece 
                  and the Olympic sport of Pankration, which combined wrestling and boxing.
                </p>
                <p>
                  Modern MMA began to take shape in the early 1990s with the creation of the Ultimate Fighting Championship (UFC) 
                  in 1993. The early tournaments were designed to determine which martial art was most effective in real combat situations.
                </p>
                <p>
                  Over time, fighters realized that to be successful, they needed to be well-rounded in all aspects of combat. 
                  This led to the evolution of MMA into the sophisticated sport we know today, with fighters cross-training 
                  in multiple disciplines.
                </p>
                <p>
                  Today, MMA is one of the fastest-growing sports in the world, with professional organizations like UFC, 
                  Bellator, and ONE Championship showcasing the highest level of mixed martial arts competition.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">Key Milestones</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong className="text-white">648 BC:</strong> Pankration introduced to Olympic Games
                    </div>
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong className="text-white">1993:</strong> UFC 1 - The beginning of modern MMA
                    </div>
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong className="text-white">2001:</strong> Unified Rules of MMA established
                    </div>
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong className="text-white">2016:</strong> MMA legalized in New York, completing US expansion
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              BENEFITS OF MMA TRAINING
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              Transform your body, mind, and spirit through comprehensive martial arts training
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-black/70 p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                💪
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400 tracking-wide uppercase">Physical Fitness</h3>
              <p className="text-gray-300 text-sm tracking-wide">Complete body conditioning, strength, and cardiovascular health</p>
            </div>
            
            <div className="text-center bg-black/70 p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                🧠
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400 tracking-wide uppercase">Mental Toughness</h3>
              <p className="text-gray-300 text-sm tracking-wide">Develop discipline, focus, and mental resilience</p>
            </div>
            
            <div className="text-center bg-black/70 p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                🛡️
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400 tracking-wide uppercase">Self-Defense</h3>
              <p className="text-gray-300 text-sm tracking-wide">Learn practical self-defense skills for real-world situations</p>
            </div>
            
            <div className="text-center bg-black/70 p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                🤝
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400 tracking-wide uppercase">Community</h3>
              <p className="text-gray-300 text-sm tracking-wide">Join a supportive community of dedicated athletes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              MMA TRAINING SCHEDULE
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Join our structured MMA classes designed for all skill levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Campo Tures</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-yellow-500/30">
                  <span className="text-white font-medium tracking-wide uppercase">Tuesday</span>
                  <span className="text-gray-300 tracking-wide">18:30 - 19:30</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Brunico</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-yellow-500/30">
                  <span className="text-white font-medium tracking-wide uppercase">Wednesday</span>
                  <span className="text-gray-300 tracking-wide">17:30 - 18:30</span>
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
              LEGENDARY MMA FIGHTERS
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Learn from the techniques and philosophies of MMA legends
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-yellow-400 tracking-wide uppercase">Anderson Silva</h3>
              <p className="text-gray-300 text-sm mb-3 tracking-wide">Former UFC Middleweight Champion</p>
              <p className="text-gray-400 text-sm tracking-wide">Known for his striking precision and creativity</p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-yellow-400 tracking-wide uppercase">Fedor Emelianenko</h3>
              <p className="text-gray-300 text-sm mb-3 tracking-wide">PRIDE Heavyweight Champion</p>
              <p className="text-gray-400 text-sm tracking-wide">Legendary for his calm demeanor and technical skill</p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-yellow-400 tracking-wide uppercase">Jon Jones</h3>
              <p className="text-gray-300 text-sm mb-3 tracking-wide">Former UFC Light Heavyweight Champion</p>
              <p className="text-gray-400 text-sm tracking-wide">Known for his reach, creativity, and wrestling base</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            START YOUR MMA JOURNEY
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            Train with experienced coaches and develop complete martial arts skills in a safe, supportive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              JOIN MMA CLASSES
              <ExternalLink size={20} />
            </a>
            <Link 
              to="/#train-like-fighter" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              <ArrowLeft size={20} />
              BACK TO TRAIN LIKE A FIGHTER
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}