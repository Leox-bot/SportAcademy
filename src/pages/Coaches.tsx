import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ExternalLink } from 'lucide-react';

export default function Coaches() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Award className="w-12 h-12 text-yellow-400" />
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide uppercase">
                OUR COACHES
              </h1>
              <Award className="w-12 h-12 text-yellow-400" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Learn from experienced professionals who are passionate about martial arts and dedicated to helping you achieve your goals. 
              Our coaching team brings years of competitive experience and proven teaching methods.
            </p>
          </div>
        </div>
      </section>

      {/* Coaches Profiles */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Matteo Parolin */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-gold rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-yellow-400/50">
                  <span className="text-4xl font-black text-black tracking-wide">MP</span>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white tracking-wide uppercase">Matteo Parolin</h3>
                <p className="text-yellow-400 font-semibold text-lg mb-4 tracking-wide uppercase">Head Coach & Founder</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-yellow-400 mb-3 tracking-wide uppercase">Background</h4>
                  <p className="text-gray-300 leading-relaxed tracking-wide">
                    Matteo founded Sport Academy in 2017 with a vision to bring world-class martial arts training to South Tyrol. 
                    With over 15 years of experience in MMA and Brazilian Jiu-Jitsu, he has competed at national and international levels.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-3 tracking-wide uppercase">Specializations</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Mixed Martial Arts (MMA)
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Brazilian Jiu-Jitsu (Brown Belt)
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Competition Preparation
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Youth Development Programs
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-3 tracking-wide uppercase">Achievements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Regional MMA Champion (2019)
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      BJJ European Championship Medalist
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Certified Youth Martial Arts Instructor
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Christian Zecchetto */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-gold rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-yellow-400/50">
                  <span className="text-4xl font-black text-black tracking-wide">CZ</span>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white tracking-wide uppercase">Christian Zecchetto</h3>
                <p className="text-yellow-400 font-semibold text-lg mb-4 tracking-wide uppercase">Grappling & Wrestling Coach</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-yellow-400 mb-3 tracking-wide uppercase">Background</h4>
                  <p className="text-gray-300 leading-relaxed tracking-wide">
                    Christian brings a wealth of wrestling and grappling expertise to Sport Academy. His technical approach and 
                    attention to detail have helped countless students improve their ground game and competitive performance.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-3 tracking-wide uppercase">Specializations</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Wrestling (Freestyle & Greco-Roman)
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Submission Grappling
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Takedown Techniques
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Strength & Conditioning
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-3 tracking-wide uppercase">Achievements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      National Wrestling Championship Finalist
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      ADCC European Trials Competitor
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Certified Wrestling Coach (Level 2)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-wide uppercase">
            OUR COACHING PHILOSOPHY
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Technical Excellence</h3>
              <p className="text-gray-300 tracking-wide">
                We focus on proper technique and fundamentals, ensuring every student builds a solid foundation for long-term success.
              </p>
            </div>
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Individual Growth</h3>
              <p className="text-gray-300 tracking-wide">
                Every student is unique. We tailor our instruction to meet individual goals, whether recreational or competitive.
              </p>
            </div>
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Respect & Discipline</h3>
              <p className="text-gray-300 tracking-wide">
                Martial arts teaches more than fighting techniques. We emphasize respect, discipline, and character development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            TRAIN WITH THE BEST
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            Experience world-class instruction and personalized attention. Start your journey with Sport Academy's expert coaching team.
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
    </div>
  );
}