import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, ExternalLink, Target, Award, Users } from 'lucide-react';

export default function BJJ() {
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
            <span className="text-yellow-400 tracking-wide uppercase">Brazilian Jiu-Jitsu</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg" 
            alt="BJJ Training"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Shield className="w-16 h-16 text-yellow-400" />
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-wide uppercase">
                BRAZILIAN JIU-JITSU
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              The gentle art that teaches leverage, technique, and strategy over brute strength. 
              Master the ground game and develop unshakeable confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 text-white tracking-wide uppercase">The Gentle Art</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed tracking-wide">
                <p>
                  Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. 
                  It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, 
                  stronger opponent by using leverage, technique, and timing.
                </p>
                <p>
                  BJJ promotes the concept that most of the advantage of a larger, stronger opponent comes from superior reach 
                  and more powerful strikes, both of which are negated when grappling on the ground.
                </p>
                <p>
                  At Sport Academy, we teach traditional Brazilian Jiu-Jitsu with both gi and no-gi training, focusing on 
                  fundamental techniques, self-defense applications, and sport competition preparation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg" 
                alt="BJJ Training"
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
              FUNDAMENTAL TECHNIQUES
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              Master the essential techniques that form the foundation of Brazilian Jiu-Jitsu
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">Guard Work</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Closed guard fundamentals
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Open guard variations
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Half guard techniques
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Spider and De La Riva guard
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Guard retention and recovery
                </li>
              </ul>
            </div>

            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">Submissions</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Arm bars (Juji-gatame)
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Triangle chokes
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Rear naked chokes
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Kimura and Americana
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Leg locks and foot locks
                </li>
              </ul>
            </div>

            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">Positions</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Mount and back control
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Side control variations
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Knee on belly
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Transitions and sweeps
                </li>
                <li className="flex items-center tracking-wide">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Escapes and reversals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Belt System */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              BJJ BELT RANKING SYSTEM
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Progress through the traditional Brazilian Jiu-Jitsu belt system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-gradient-dark border border-gray-400 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-16 h-4 bg-white mx-auto mb-4 rounded border border-gray-300"></div>
              <h3 className="text-lg font-bold mb-2 text-white tracking-wide uppercase">White Belt</h3>
              <p className="text-gray-300 text-sm tracking-wide">Beginning level - Learning fundamentals</p>
            </div>
            
            <div className="bg-gradient-dark border border-blue-400 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-16 h-4 bg-blue-500 mx-auto mb-4 rounded"></div>
              <h3 className="text-lg font-bold mb-2 text-blue-400 tracking-wide uppercase">Blue Belt</h3>
              <p className="text-gray-300 text-sm tracking-wide">Intermediate - Developing technique</p>
            </div>
            
            <div className="bg-gradient-dark border border-purple-400 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-16 h-4 bg-purple-500 mx-auto mb-4 rounded"></div>
              <h3 className="text-lg font-bold mb-2 text-purple-400 tracking-wide uppercase">Purple Belt</h3>
              <p className="text-gray-300 text-sm tracking-wide">Advanced - Refining skills</p>
            </div>
            
            <div className="bg-gradient-dark border border-amber-600 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-16 h-4 bg-amber-700 mx-auto mb-4 rounded"></div>
              <h3 className="text-lg font-bold mb-2 text-amber-600 tracking-wide uppercase">Brown Belt</h3>
              <p className="text-gray-300 text-sm tracking-wide">Expert - Teaching and leading</p>
            </div>
            
            <div className="bg-gradient-dark border border-red-400 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-16 h-4 bg-black mx-auto mb-4 rounded border border-gray-600"></div>
              <h3 className="text-lg font-bold mb-2 text-red-400 tracking-wide uppercase">Black Belt</h3>
              <p className="text-gray-300 text-sm tracking-wide">Master - Lifetime of dedication</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400 tracking-wide uppercase text-center">Promotion Philosophy</h3>
            <p className="text-gray-300 text-lg leading-relaxed tracking-wide text-center max-w-4xl mx-auto">
              At Sport Academy, belt promotions are based on technical proficiency, understanding of principles, 
              ability to apply techniques under pressure, and demonstration of the values of Brazilian Jiu-Jitsu: 
              respect, humility, and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black mb-6 text-white tracking-wide uppercase">History & Origins</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed tracking-wide">
                <p>
                  Brazilian Jiu-Jitsu originated from traditional Japanese jujutsu and judo, brought to Brazil by 
                  Mitsuyo Maeda in the early 20th century. Maeda taught the Gracie family, who adapted and refined 
                  the techniques to create what we now know as Brazilian Jiu-Jitsu.
                </p>
                <p>
                  The Gracie family, particularly Helio Gracie, modified the techniques to rely more on leverage and 
                  timing rather than strength and speed, making it effective for smaller practitioners against larger opponents.
                </p>
                <p>
                  BJJ gained worldwide recognition through the early UFC tournaments, where Royce Gracie demonstrated 
                  the effectiveness of ground fighting against practitioners of other martial arts.
                </p>
                <p>
                  Today, BJJ is practiced worldwide both as a martial art for self-defense and as a competitive sport, 
                  with major tournaments like the IBJJF World Championships attracting thousands of competitors.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">Key Figures</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong className="text-white">Mitsuyo Maeda:</strong> Japanese judoka who brought jujutsu to Brazil
                    </div>
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong className="text-white">Helio Gracie:</strong> Founder of Gracie Jiu-Jitsu
                    </div>
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong className="text-white">Carlos Gracie:</strong> First Gracie to learn from Maeda
                    </div>
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong className="text-white">Royce Gracie:</strong> UFC pioneer who proved BJJ's effectiveness
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              BJJ TRAINING SCHEDULE
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Regular classes for all skill levels, from beginner to advanced
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Campo Tures</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-yellow-500/30">
                  <span className="text-white font-medium tracking-wide uppercase">Tuesday</span>
                  <span className="text-gray-300 tracking-wide">19:30 - 20:30</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-yellow-500/30">
                  <span className="text-white font-medium tracking-wide uppercase">Thursday</span>
                  <span className="text-gray-300 tracking-wide">06:30 - 07:30</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white font-medium tracking-wide uppercase">Thursday</span>
                  <span className="text-gray-300 tracking-wide">19:30 - 20:30</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Brunico</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-yellow-500/30">
                  <span className="text-white font-medium tracking-wide uppercase">Monday</span>
                  <span className="text-gray-300 tracking-wide">18:30 - 19:30</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white font-medium tracking-wide uppercase">Wednesday</span>
                  <span className="text-gray-300 tracking-wide">19:30 - 20:30</span>
                </div>
              </div>
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
            Discover the gentle art that builds character, confidence, and unbreakable technique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              JOIN BJJ CLASSES
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