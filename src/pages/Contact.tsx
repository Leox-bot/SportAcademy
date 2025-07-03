import React from 'react';
import { MapPin, Clock, ExternalLink, Instagram, Phone, Mail, Facebook, MessageCircle, Car, Accessibility, Calendar, Users } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <MapPin className="w-12 h-12 text-yellow-400" />
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide uppercase">
                CONTACT & VISIT
              </h1>
              <MapPin className="w-12 h-12 text-yellow-400" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Get in touch with Sport Academy and visit our world-class training facilities. 
              We're here to help you start your martial arts journey with expert guidance and support.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Contact Methods */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              GET IN TOUCH
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Multiple ways to connect with our team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Contact */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <Phone className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3 text-white tracking-wide uppercase">Call Us</h3>
              <a 
                href="tel:+393485741798" 
                className="text-yellow-400 hover:text-yellow-300 font-bold text-lg tracking-wide transition-colors"
              >
                +39 348 574 1798
              </a>
              <p className="text-gray-400 text-sm mt-2 tracking-wide">Response within 2 hours</p>
            </div>

            {/* Instagram */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <Instagram className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3 text-white tracking-wide uppercase">Instagram</h3>
              <a 
                href="https://www.instagram.com/__sport_academy__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-bold tracking-wide transition-colors"
              >
                @__sport_academy__
              </a>
              <p className="text-gray-400 text-sm mt-2 tracking-wide">Daily updates & DMs</p>
            </div>

            {/* Online Registration */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <Calendar className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3 text-white tracking-wide uppercase">Register Online</h3>
              <a 
                href="https://maat-app.link/7BGCKjdtuUb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-bold tracking-wide transition-colors"
              >
                Book Classes
              </a>
              <p className="text-gray-400 text-sm mt-2 tracking-wide">Instant confirmation</p>
            </div>

            {/* Visit In Person */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3 text-white tracking-wide uppercase">Visit Us</h3>
              <p className="text-yellow-400 font-bold tracking-wide">Drop-in Welcome</p>
              <p className="text-gray-400 text-sm mt-2 tracking-wide">During training hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations & Directions */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              OUR LOCATIONS
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Two convenient facilities in South Tyrol
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Campo Tures Location */}
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-white tracking-wide uppercase">Campo Tures</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">Address</h4>
                  <p className="text-gray-300 tracking-wide">
                    Via Hugo von Taufers 8<br />
                    Campo Tures, South Tyrol<br />
                    Italy
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">Training Schedule</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">Tuesday: 15:00 - 20:30</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">Thursday: 06:30 - 20:30</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">Landmark Directions</h4>
                  <p className="text-gray-300 tracking-wide">
                    Located in the town center, 50m from the main church. 
                    Look for the Sport Academy sign next to the pharmacy.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">Available Classes</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      MMA Classes
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Brazilian Jiu-Jitsu
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Grappling
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Kids BJJ
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Brunico Location */}
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-white tracking-wide uppercase">Brunico</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">Address</h4>
                  <p className="text-gray-300 tracking-wide">
                    Via Teresa Riedl 3<br />
                    39031 Brunico BZ<br />
                    South Tyrol, Italy
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">Training Schedule</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">Monday: 17:30 - 20:30</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">Wednesday: 17:30 - 20:30</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">Friday: 18:30 - 20:30</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">Landmark Directions</h4>
                  <p className="text-gray-300 tracking-wide">
                    5-minute walk from Brunico train station. 
                    Near the sports complex, opposite the public swimming pool.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">Available Classes</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Brazilian Jiu-Jitsu
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Wrestling
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Kids Grappling
                    </li>
                    <li className="flex items-center text-gray-300 tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Open Training
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parking & Accessibility */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              PARKING & ACCESSIBILITY
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Easy access and convenient parking at both locations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Car className="w-8 h-8 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-yellow-400 tracking-wide uppercase">Campo Tures</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">Parking</h4>
                  <p className="text-gray-300 tracking-wide">
                    Free street parking available on Via Hugo von Taufers and surrounding streets. 
                    Public parking lot 100m away (€1/hour during business hours, free evenings).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">Public Transport</h4>
                  <p className="text-gray-300 tracking-wide">
                    Regular bus service from Brunico (Line 441). Bus stop "Campo Tures Centro" 
                    is 2 minutes walk from the gym.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">Accessibility</h4>
                  <p className="text-gray-300 tracking-wide">
                    Ground floor access with wide entrance. Accessible restroom facilities available.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Car className="w-8 h-8 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-yellow-400 tracking-wide uppercase">Brunico</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">Parking</h4>
                  <p className="text-gray-300 tracking-wide">
                    Free parking available on Via Teresa Riedl. Large public parking area 
                    near the sports complex (free after 18:00 and weekends).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">Public Transport</h4>
                  <p className="text-gray-300 tracking-wide">
                    5 minutes walk from Brunico train station. Excellent connections to 
                    Bolzano, Innsbruck, and major cities. Bus lines 441, 442, and 445.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">Accessibility</h4>
                  <p className="text-gray-300 tracking-wide">
                    Wheelchair accessible entrance and facilities. Elevator access to all floors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Requirements & Policies */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              VISIT REQUIREMENTS
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              What to know before your first visit
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">First-Time Visitors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3 tracking-wide uppercase">What to Bring</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      Valid ID for registration
                    </li>
                    <li className="flex items-start tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      Comfortable athletic wear
                    </li>
                    <li className="flex items-start tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      Water bottle and towel
                    </li>
                    <li className="flex items-start tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      Positive attitude and open mind
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3 tracking-wide uppercase">What We Provide</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      Free trial class (first visit)
                    </li>
                    <li className="flex items-start tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      Basic gloves for MMA classes (free)
                    </li>
                    <li className="flex items-start tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      Facility tour and orientation
                    </li>
                    <li className="flex items-start tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      Personal consultation with coaches
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Special Instructions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-300 text-sm tracking-wide">
                    <strong className="text-white">Age Requirements:</strong> 16+ for adult classes, 6-15 for kids programs
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm tracking-wide">
                    <strong className="text-white">Health:</strong> Please inform us of any injuries or medical conditions
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm tracking-wide">
                    <strong className="text-white">Equipment:</strong> Basic gloves provided for MMA classes (free)
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm tracking-wide">
                    <strong className="text-white">Payment:</strong> Cash and card accepted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            READY TO BEGIN?
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            Take the first step towards your martial arts journey. Contact us today and discover your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              JOIN SPORT ACADEMY
              <ExternalLink size={20} />
            </a>
            <a 
              href="tel:+393485741798" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              <Phone size={20} />
              CALL NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}