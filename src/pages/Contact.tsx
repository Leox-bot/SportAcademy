import React from 'react';
import { MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <MapPin className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide">
                GET IN TOUCH
              </h1>
              <MapPin className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Visit us at our two convenient locations in South Tyrol. We're here to help you start your martial arts journey 
              and answer any questions you may have about our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Campo Tures Location */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-gray-800 mr-4" />
                <h3 className="text-2xl font-bold text-black tracking-wide">Campo Tures</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-black mb-2 tracking-wide">Address</h4>
                  <p className="text-gray-600 tracking-wide">
                    Via Hugo von Taufers 8<br />
                    Campo Tures, South Tyrol<br />
                    Italy
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-black mb-2 tracking-wide">Training Schedule</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-600 mr-2" />
                      <span className="text-gray-600 tracking-wide">Monday & Wednesday: 19:00 - 22:00</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-600 mr-2" />
                      <span className="text-gray-600 tracking-wide">Tuesday & Thursday: 17:30 - 20:30</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-600 mr-2" />
                      <span className="text-gray-600 tracking-wide">Saturday: 10:00 - 16:00</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-black mb-2 tracking-wide">Available Classes</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      MMA Classes
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Brazilian Jiu-Jitsu
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Grappling
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Kids BJJ
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Brunico Location */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-gray-800 mr-4" />
                <h3 className="text-2xl font-bold text-black tracking-wide">Brunico</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-black mb-2 tracking-wide">Address</h4>
                  <p className="text-gray-600 tracking-wide">
                    Via Teresa Riedl 3<br />
                    39031 Brunico BZ<br />
                    South Tyrol, Italy
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-black mb-2 tracking-wide">Training Schedule</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-600 mr-2" />
                      <span className="text-gray-600 tracking-wide">Tuesday & Thursday: 18:00 - 21:00</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-600 mr-2" />
                      <span className="text-gray-600 tracking-wide">Friday: 17:00 - 20:00</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-600 mr-2" />
                      <span className="text-gray-600 tracking-wide">Sunday: 10:00 - 16:00</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-black mb-2 tracking-wide">Available Classes</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Brazilian Jiu-Jitsu
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Wrestling
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Kids Grappling
                    </li>
                    <li className="flex items-center text-gray-600 tracking-wide">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      Open Training
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black tracking-wide">
              CONTACT INFORMATION
            </h2>
            <p className="text-xl text-gray-600 tracking-wide">
              Ready to start training? Get in touch with us today
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-black tracking-wide">Get Started</h3>
              <div className="space-y-4">
                <p className="text-gray-600 tracking-wide">
                  The easiest way to join Sport Academy is through our online registration system. 
                  You can sign up for classes, choose your membership plan, and schedule your first session.
                </p>
                <a 
                  href="https://maat-app.link/7BGCKjdtuUb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 tracking-wide"
                >
                  REGISTER ONLINE
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-black tracking-wide">Visit Us</h3>
              <div className="space-y-4">
                <p className="text-gray-600 tracking-wide">
                  Feel free to visit either of our locations during training hours. Our coaches and staff 
                  are always happy to answer questions and show you around our facilities.
                </p>
                <p className="text-gray-600 tracking-wide">
                  <strong>Free trial class available for new students!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black tracking-wide">
              DIRECTIONS & PARKING
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-black tracking-wide">Campo Tures</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-black mb-2 tracking-wide">By Car</h4>
                  <p className="text-gray-600 tracking-wide">
                    Located in the center of Campo Tures, easily accessible from the main road. 
                    Free parking available on Via Hugo von Taufers and surrounding streets.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2 tracking-wide">Public Transport</h4>
                  <p className="text-gray-600 tracking-wide">
                    Regular bus service connects Campo Tures to Brunico and surrounding areas. 
                    The gym is a 2-minute walk from the main bus stop.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-black tracking-wide">Brunico</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-black mb-2 tracking-wide">By Car</h4>
                  <p className="text-gray-600 tracking-wide">
                    Conveniently located near the Brunico train station. Parking available on 
                    Via Teresa Riedl and in nearby public parking areas.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2 tracking-wide">Public Transport</h4>
                  <p className="text-gray-600 tracking-wide">
                    Just 5 minutes walk from Brunico train station. Excellent connections to 
                    Bolzano, Innsbruck, and other major cities in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide">
            READY TO BEGIN?
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            Take the first step towards your martial arts journey. Join Sport Academy today and discover your potential.
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
          </div>
        </div>
      </section>
    </div>
  );
}