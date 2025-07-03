import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ExternalLink, Check } from 'lucide-react';

export default function Membership() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide">
                MEMBERSHIP PLANS
              </h1>
              <Trophy className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Choose the membership plan that fits your training goals and schedule. All memberships include access to both locations 
              and all scheduled classes. No hidden fees, no long-term contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Main Season */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-8 pt-4">
                <h3 className="text-3xl font-bold mb-2 text-black tracking-wide">Main Season</h3>
                <p className="text-gray-600 text-lg tracking-wide">September - June</p>
                <p className="text-sm text-gray-500 mt-2 tracking-wide">10 months of intensive training</p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-black font-medium text-lg tracking-wide">Adults</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-black tracking-wide">€600</span>
                    <p className="text-sm text-gray-500 tracking-wide">€60/month</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-black font-medium text-lg tracking-wide">Students</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-black tracking-wide">€450</span>
                    <p className="text-sm text-gray-500 tracking-wide">€45/month</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-black mb-4 tracking-wide">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600 tracking-wide">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    Unlimited access to all classes
                  </li>
                  <li className="flex items-center text-gray-600 tracking-wide">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    Both Campo Tures & Brunico locations
                  </li>
                  <li className="flex items-center text-gray-600 tracking-wide">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    Open mat sessions
                  </li>
                  <li className="flex items-center text-gray-600 tracking-wide">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    Competition preparation
                  </li>
                  <li className="flex items-center text-gray-600 tracking-wide">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    Personal training discounts
                  </li>
                </ul>
              </div>
              
              <a 
                href="https://maat-app.link/7BGCKjdtuUb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 tracking-wide shadow-lg"
              >
                SELECT MAIN SEASON
                <ExternalLink size={18} />
              </a>
            </div>
            
            {/* Summer Season */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2 text-black tracking-wide">Summer Season</h3>
                <p className="text-gray-600 text-lg tracking-wide">June - September</p>
                <p className="text-sm text-gray-500 mt-2 tracking-wide">4 months of summer training</p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-black font-medium text-lg tracking-wide">Adults</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-black tracking-wide">€210</span>
                    <p className="text-sm text-gray-500 tracking-wide">€52.50/month</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-black font-medium text-lg tracking-wide">Students</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-black tracking-wide">€150</span>
                    <p className="text-sm text-gray-500 tracking-wide">€37.50/month</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-black mb-4 tracking-wide">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600 tracking-wide">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    Access to summer schedule classes
                  </li>
                  <li className="flex items-center text-gray-600 tracking-wide">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    Both locations available
                  </li>
                  <li className="flex items-center text-gray-600 tracking-wide">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    Open training sessions
                  </li>
                  <li className="flex items-center text-gray-600 tracking-wide">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    Flexible summer schedule
                  </li>
                  <li className="flex items-center text-gray-600 tracking-wide">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    Outdoor training opportunities
                  </li>
                </ul>
              </div>
              
              <a 
                href="https://maat-app.link/7BGCKjdtuUb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 tracking-wide shadow-lg"
              >
                SELECT SUMMER SEASON
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black tracking-wide">
              ADDITIONAL SERVICES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide">
              Enhance your training with our specialized services and programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-black tracking-wide">Personal Training</h3>
              <p className="text-gray-600 mb-4 tracking-wide">One-on-one coaching sessions tailored to your specific goals</p>
              <p className="text-2xl font-bold text-black tracking-wide">€50/session</p>
              <p className="text-sm text-gray-500 tracking-wide">60 minutes</p>
            </div>
            
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-black tracking-wide">Competition Prep</h3>
              <p className="text-gray-600 mb-4 tracking-wide">Specialized training for upcoming tournaments and competitions</p>
              <p className="text-2xl font-bold text-black tracking-wide">€80/session</p>
              <p className="text-sm text-gray-500 tracking-wide">90 minutes</p>
            </div>
            
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-black tracking-wide">Seminars & Workshops</h3>
              <p className="text-gray-600 mb-4 tracking-wide">Special events with guest instructors and advanced techniques</p>
              <p className="text-2xl font-bold text-black tracking-wide">€30/event</p>
              <p className="text-sm text-gray-500 tracking-wide">3-4 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black tracking-wide">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-black tracking-wide">What's the difference between seasons?</h3>
              <p className="text-gray-600 tracking-wide">
                The Main Season (September-June) offers our full program with regular classes and competition preparation. 
                The Summer Season (June-September) has a more relaxed schedule perfect for maintaining fitness during vacation months.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-black tracking-wide">Can I train at both locations?</h3>
              <p className="text-gray-600 tracking-wide">
                Yes! All memberships include access to both our Campo Tures and Brunico facilities. You can attend classes at either location based on your schedule.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-black tracking-wide">Do you offer trial classes?</h3>
              <p className="text-gray-600 tracking-wide">
                Absolutely! We offer a free trial class for new students. Contact us to schedule your trial and experience our training firsthand.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-black tracking-wide">What equipment do I need?</h3>
              <p className="text-gray-600 tracking-wide">
                For BJJ classes, you'll need a gi (uniform). For MMA and grappling, comfortable athletic wear is sufficient. 
                We recommend bringing a water bottle and towel to all classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide">
            START YOUR JOURNEY TODAY
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            Join Sport Academy and become part of South Tyrol's premier martial arts community. Your transformation starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide"
            >
              JOIN SPORT ACADEMY
              <ExternalLink size={20} />
            </a>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}