import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ExternalLink } from 'lucide-react';

export default function Schedule() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Clock className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide">
                WEEKLY SCHEDULE
              </h1>
              <Clock className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Summer 2025 Training Schedule - Find the perfect class time that fits your lifestyle. 
              All classes are designed to accommodate different skill levels and age groups.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Image */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <img 
              src="/d6309e04-e42c-4a1f-ac84-09a85f5e1207.jpg" 
              alt="Weekly Schedule" 
              className="w-full rounded-lg shadow-2xl border border-gray-300"
            />
          </div>
        </div>
      </section>

      {/* Schedule Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Campo Tures Schedule */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-black tracking-wide">Campo Tures Location</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-300 pb-4">
                  <h4 className="font-bold text-black mb-2 tracking-wide">Monday & Wednesday</h4>
                  <p className="text-gray-600 tracking-wide">MMA Classes: 19:00 - 20:30</p>
                  <p className="text-gray-600 tracking-wide">BJJ Adults: 20:30 - 22:00</p>
                </div>
                <div className="border-b border-gray-300 pb-4">
                  <h4 className="font-bold text-black mb-2 tracking-wide">Tuesday & Thursday</h4>
                  <p className="text-gray-600 tracking-wide">Kids BJJ: 17:30 - 18:30</p>
                  <p className="text-gray-600 tracking-wide">Grappling: 19:00 - 20:30</p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2 tracking-wide">Saturday</h4>
                  <p className="text-gray-600 tracking-wide">Open Mat: 10:00 - 12:00</p>
                  <p className="text-gray-600 tracking-wide">Competition Prep: 14:00 - 16:00</p>
                </div>
              </div>
            </div>

            {/* Brunico Schedule */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-black tracking-wide">Brunico Location</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-300 pb-4">
                  <h4 className="font-bold text-black mb-2 tracking-wide">Tuesday & Thursday</h4>
                  <p className="text-gray-600 tracking-wide">BJJ Fundamentals: 18:00 - 19:30</p>
                  <p className="text-gray-600 tracking-wide">Advanced BJJ: 19:30 - 21:00</p>
                </div>
                <div className="border-b border-gray-300 pb-4">
                  <h4 className="font-bold text-black mb-2 tracking-wide">Friday</h4>
                  <p className="text-gray-600 tracking-wide">Kids Grappling: 17:00 - 18:00</p>
                  <p className="text-gray-600 tracking-wide">Wrestling: 18:30 - 20:00</p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2 tracking-wide">Sunday</h4>
                  <p className="text-gray-600 tracking-wide">Open Training: 10:00 - 12:00</p>
                  <p className="text-gray-600 tracking-wide">Sparring Sessions: 14:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-black tracking-wide">Important Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-black mb-3 tracking-wide">Class Guidelines</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 mt-2"></div>
                    Arrive 10 minutes early for warm-up
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 mt-2"></div>
                    Bring water bottle and towel
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 mt-2"></div>
                    Gi required for BJJ classes
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 mt-2"></div>
                    No-gi attire for MMA and Grappling
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-black mb-3 tracking-wide">Membership Benefits</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 mt-2"></div>
                    Access to all scheduled classes
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 mt-2"></div>
                    Open mat sessions included
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 mt-2"></div>
                    Both locations available
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 mt-2"></div>
                    Personal training available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide">
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
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide"
            >
              JOIN NOW
              <ExternalLink size={20} />
            </a>
            <Link 
              to="/membership" 
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide"
            >
              VIEW MEMBERSHIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}