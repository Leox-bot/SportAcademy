import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ExternalLink, MapPin } from 'lucide-react';

export default function Schedule() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Clock className="w-12 h-12 text-yellow-400" />
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide uppercase">
                WEEKLY SCHEDULE
              </h1>
              <Clock className="w-12 h-12 text-yellow-400" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Summer 2025 Training Schedule - Find the perfect class time that fits your lifestyle. 
              All classes are designed to accommodate different skill levels and age groups.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Schedule Tables */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Campo Tures Schedule */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg overflow-hidden">
              <div className="bg-yellow-400 text-black p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-2xl font-black tracking-wide uppercase">Campo Tures</h3>
                </div>
                <p className="font-bold tracking-wide">Via Hugo von Taufers 8</p>
              </div>
              
              <div className="p-6">
                {/* Monday */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    MONDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">MMA All Levels</span>
                      <span className="text-yellow-400 font-bold">19:00 - 20:30</span>
                    </div>
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">BJJ All Levels</span>
                      <span className="text-yellow-400 font-bold">20:30 - 22:00</span>
                    </div>
                  </div>
                </div>

                {/* Tuesday */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    TUESDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">BJJ for Kids</span>
                      <span className="text-yellow-400 font-bold">17:30 - 18:30</span>
                    </div>
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">Grappling All Levels</span>
                      <span className="text-yellow-400 font-bold">19:00 - 20:30</span>
                    </div>
                  </div>
                </div>

                {/* Wednesday */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    WEDNESDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">MMA All Levels</span>
                      <span className="text-yellow-400 font-bold">19:00 - 20:30</span>
                    </div>
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">BJJ All Levels</span>
                      <span className="text-yellow-400 font-bold">20:30 - 22:00</span>
                    </div>
                  </div>
                </div>

                {/* Thursday */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    THURSDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">BJJ for Kids</span>
                      <span className="text-yellow-400 font-bold">17:30 - 18:30</span>
                    </div>
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">Grappling All Levels</span>
                      <span className="text-yellow-400 font-bold">19:00 - 20:30</span>
                    </div>
                  </div>
                </div>

                {/* Friday */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    FRIDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20 opacity-50">
                      <span className="text-gray-400 font-medium tracking-wide">No Classes</span>
                      <span className="text-gray-500 font-bold">-</span>
                    </div>
                  </div>
                </div>

                {/* Saturday */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    SATURDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">Open Mat</span>
                      <span className="text-yellow-400 font-bold">10:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">Competition Prep</span>
                      <span className="text-yellow-400 font-bold">14:00 - 16:00</span>
                    </div>
                  </div>
                </div>

                {/* Sunday */}
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    SUNDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20 opacity-50">
                      <span className="text-gray-400 font-medium tracking-wide">No Classes</span>
                      <span className="text-gray-500 font-bold">-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brunico Schedule */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg overflow-hidden">
              <div className="bg-yellow-400 text-black p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-2xl font-black tracking-wide uppercase">Brunico</h3>
                </div>
                <p className="font-bold tracking-wide">Via Teresa Riedl 3, 39031 Brunico BZ</p>
              </div>
              
              <div className="p-6">
                {/* Monday */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    MONDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20 opacity-50">
                      <span className="text-gray-400 font-medium tracking-wide">No Classes</span>
                      <span className="text-gray-500 font-bold">-</span>
                    </div>
                  </div>
                </div>

                {/* Tuesday */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    TUESDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">BJJ Fundamentals</span>
                      <span className="text-yellow-400 font-bold">18:00 - 19:30</span>
                    </div>
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">BJJ Advanced</span>
                      <span className="text-yellow-400 font-bold">19:30 - 21:00</span>
                    </div>
                  </div>
                </div>

                {/* Wednesday */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    WEDNESDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20 opacity-50">
                      <span className="text-gray-400 font-medium tracking-wide">No Classes</span>
                      <span className="text-gray-500 font-bold">-</span>
                    </div>
                  </div>
                </div>

                {/* Thursday */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    THURSDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">BJJ Fundamentals</span>
                      <span className="text-yellow-400 font-bold">18:00 - 19:30</span>
                    </div>
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">BJJ Advanced</span>
                      <span className="text-yellow-400 font-bold">19:30 - 21:00</span>
                    </div>
                  </div>
                </div>

                {/* Friday */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    FRIDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">Grappling for Kids</span>
                      <span className="text-yellow-400 font-bold">17:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">Wrestling All Levels</span>
                      <span className="text-yellow-400 font-bold">18:30 - 20:00</span>
                    </div>
                  </div>
                </div>

                {/* Saturday */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    SATURDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20 opacity-50">
                      <span className="text-gray-400 font-medium tracking-wide">No Classes</span>
                      <span className="text-gray-500 font-bold">-</span>
                    </div>
                  </div>
                </div>

                {/* Sunday */}
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase border-b border-yellow-500/30 pb-2">
                    SUNDAY
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">Open Training</span>
                      <span className="text-yellow-400 font-bold">10:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between items-center bg-black/50 p-3 rounded border border-yellow-500/20">
                      <span className="text-white font-medium tracking-wide">Sparring Sessions</span>
                      <span className="text-yellow-400 font-bold">14:00 - 16:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Descriptions */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              CLASS DESCRIPTIONS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              Understanding what each class offers to help you choose the right training for your goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">MMA All Levels</h3>
              <p className="text-gray-300 tracking-wide">
                Complete mixed martial arts training combining striking, grappling, and ground fighting. 
                Suitable for beginners to advanced fighters.
              </p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">BJJ All Levels</h3>
              <p className="text-gray-300 tracking-wide">
                Brazilian Jiu-Jitsu classes focusing on ground fighting, submissions, and positional control. 
                All skill levels welcome.
              </p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">BJJ Fundamentals</h3>
              <p className="text-gray-300 tracking-wide">
                Perfect for beginners or those wanting to refine basic techniques. 
                Focus on core positions and fundamental movements.
              </p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">BJJ Advanced</h3>
              <p className="text-gray-300 tracking-wide">
                Advanced techniques and concepts for experienced practitioners. 
                Complex positions and high-level strategy.
              </p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">Grappling All Levels</h3>
              <p className="text-gray-300 tracking-wide">
                No-gi grappling focusing on wrestling and submission techniques. 
                Great for MMA preparation and pure grappling skills.
              </p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">Wrestling All Levels</h3>
              <p className="text-gray-300 tracking-wide">
                Traditional wrestling techniques including takedowns, throws, and ground control. 
                Excellent for building strength and conditioning.
              </p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">BJJ for Kids</h3>
              <p className="text-gray-300 tracking-wide">
                Age-appropriate Brazilian Jiu-Jitsu for children 6-14. 
                Focus on discipline, respect, and fundamental techniques.
              </p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">Grappling for Kids</h3>
              <p className="text-gray-300 tracking-wide">
                Youth grappling program for ages 8-16. 
                Building confidence, coordination, and basic wrestling skills.
              </p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">Open Mat / Training</h3>
              <p className="text-gray-300 tracking-wide">
                Free training time for members to practice techniques, spar, 
                and work on specific skills with minimal instruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Important Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white mb-3 tracking-wide uppercase">Class Guidelines</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    Arrive 10 minutes early for warm-up
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    Bring water bottle and towel
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    Gi required for BJJ classes
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    No-gi attire for MMA, Grappling, and Wrestling
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 tracking-wide uppercase">Membership Benefits</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    Access to all scheduled classes
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    Open mat sessions included
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    Both locations available
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    Personal training available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            RESERVE YOUR SPOT
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            Classes fill up quickly. Secure your membership today and start training with the best in South Tyrol.
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
              to="/membership" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide uppercase"
            >
              VIEW MEMBERSHIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}