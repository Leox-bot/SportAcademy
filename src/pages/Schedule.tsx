import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ExternalLink } from 'lucide-react';

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
              Current Training Schedule - Find the perfect class time that fits your lifestyle. 
              All classes are designed to accommodate different skill levels and age groups.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Information */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Campo Tures Schedule */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Campo Tures Location</h3>
              <div className="space-y-4">
                <div className="border-b border-yellow-500/30 pb-4">
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">Tuesday</h4>
                  <p className="text-gray-300 tracking-wide">Grappling: 15:00 - 16:00</p>
                  <p className="text-gray-300 tracking-wide">MMA: 18:30 - 19:30</p>
                  <p className="text-gray-300 tracking-wide">BJJ: 19:30 - 20:30</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">Thursday</h4>
                  <p className="text-gray-300 tracking-wide">BJJ: 06:30 - 07:30</p>
                  <p className="text-gray-300 tracking-wide">Grappling: 18:30 - 19:30</p>
                  <p className="text-gray-300 tracking-wide">BJJ: 19:30 - 20:30</p>
                </div>
              </div>
            </div>

            {/* Brunico Schedule */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">Brunico Location</h3>
              <div className="space-y-4">
                <div className="border-b border-yellow-500/30 pb-4">
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">Monday</h4>
                  <p className="text-gray-300 tracking-wide">Wrestling: 17:30 - 18:30</p>
                  <p className="text-gray-300 tracking-wide">BJJ: 18:30 - 19:30</p>
                  <p className="text-gray-300 tracking-wide">Grappling: 19:30 - 20:30</p>
                </div>
                <div className="border-b border-yellow-500/30 pb-4">
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">Wednesday</h4>
                  <p className="text-gray-300 tracking-wide">MMA: 17:30 - 18:30</p>
                  <p className="text-gray-300 tracking-wide">Grappling: 18:30 - 19:30</p>
                  <p className="text-gray-300 tracking-wide">BJJ: 19:30 - 20:30</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">Friday</h4>
                  <p className="text-gray-300 tracking-wide">Striking: 18:30 - 19:30</p>
                  <p className="text-gray-300 tracking-wide">Open Mat: 19:30 - 20:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8">
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
                    No-gi attire for MMA, Grappling, and Striking
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
      <section className="py-20 bg-black">
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