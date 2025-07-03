import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ExternalLink } from 'lucide-react';

export default function Coaches() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Award className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide">
                OUR COACHES
              </h1>
              <Award className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Learn from experienced professionals who are passionate about martial arts and dedicated to helping you achieve your goals. 
              Our coaching team brings years of competitive experience and proven teaching methods.
            </p>
          </div>
        </div>
      </section>

      {/* Coaches Profiles */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Matteo Parolin */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-black text-gray-700 tracking-wide">MP</span>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-black tracking-wide">Matteo Parolin</h3>
                <p className="text-gray-600 font-semibold text-lg mb-4 tracking-wide">Head Coach & Founder</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-black mb-3 tracking-wide">Background</h4>
                  <p className="text-gray-600 leading-relaxed tracking-wide">
                    Matteo founded Sport Academy in 2017 with a vision to bring world-class martial arts training to South Tyrol. 
                    With over 15 years of experience in MMA and Brazilian Jiu-Jitsu, he has competed at national and international levels.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-black mb-3 tracking-wide">Specializations</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Mixed Martial Arts (MMA)
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Brazilian Jiu-Jitsu (Brown Belt)
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Competition Preparation
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Youth Development Programs
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-black mb-3 tracking-wide">Achievements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Regional MMA Champion (2019)
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      BJJ European Championship Medalist
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Certified Youth Martial Arts Instructor
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Christian Zecchetto */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-black text-gray-700 tracking-wide">CZ</span>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-black tracking-wide">Christian Zecchetto</h3>
                <p className="text-gray-600 font-semibold text-lg mb-4 tracking-wide">Grappling & Wrestling Coach</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-black mb-3 tracking-wide">Background</h4>
                  <p className="text-gray-600 leading-relaxed tracking-wide">
                    Christian brings a wealth of wrestling and grappling expertise to Sport Academy. His technical approach and 
                    attention to detail have helped countless students improve their ground game and competitive performance.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-black mb-3 tracking-wide">Specializations</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Wrestling (Freestyle & Greco-Roman)
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Submission Grappling
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Takedown Techniques
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Strength & Conditioning
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-black mb-3 tracking-wide">Achievements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      National Wrestling Championship Finalist
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      ADCC European Trials Competitor
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-black tracking-wide">
            OUR COACHING PHILOSOPHY
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-black tracking-wide">Technical Excellence</h3>
              <p className="text-gray-600 tracking-wide">
                We focus on proper technique and fundamentals, ensuring every student builds a solid foundation for long-term success.
              </p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-black tracking-wide">Individual Growth</h3>
              <p className="text-gray-600 tracking-wide">
                Every student is unique. We tailor our instruction to meet individual goals, whether recreational or competitive.
              </p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-black tracking-wide">Respect & Discipline</h3>
              <p className="text-gray-600 tracking-wide">
                Martial arts teaches more than fighting techniques. We emphasize respect, discipline, and character development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide">
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
    </div>
  );
}