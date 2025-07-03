import React from 'react';
import { MapPin, Clock, ExternalLink, Instagram, Phone, Mail, Facebook, MessageCircle, Car, Accessibility, Calendar, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  // Safely get array values with fallback
  const getBringItems = () => {
    const items = t('contact.bring');
    return Array.isArray(items) ? items : [];
  };

  const getProvideItems = () => {
    const items = t('contact.provide');
    return Array.isArray(items) ? items : [];
  };

  const getCampoTuresClasses = () => {
    const classes = t('contact.campoTures.classes');
    return Array.isArray(classes) ? classes : [];
  };

  const getBrunicoClasses = () => {
    const classes = t('contact.brunico.classes');
    return Array.isArray(classes) ? classes : [];
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <MapPin className="w-12 h-12 text-yellow-400" />
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide uppercase">
                {t('contact.hero.title')}
              </h1>
              <MapPin className="w-12 h-12 text-yellow-400" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              {t('contact.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Primary Contact Methods */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              {t('contact.getInTouch.title')}
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              {t('contact.getInTouch.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Contact */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <Phone className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3 text-white tracking-wide uppercase">{t('contact.callUs')}</h3>
              <a 
                href="tel:+393485741798" 
                className="text-yellow-400 hover:text-yellow-300 font-bold text-lg tracking-wide transition-colors"
              >
                +39 348 574 1798
              </a>
              <p className="text-gray-400 text-sm mt-2 tracking-wide">{t('common.responseWithin2Hours')}</p>
            </div>

            {/* Instagram */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <Instagram className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3 text-white tracking-wide uppercase">{t('contact.instagram')}</h3>
              <a 
                href="https://www.instagram.com/__sport_academy__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-bold tracking-wide transition-colors"
              >
                @__sport_academy__
              </a>
              <p className="text-gray-400 text-sm mt-2 tracking-wide">{t('common.dailyUpdatesAndDMs')}</p>
            </div>

            {/* Online Registration */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <Calendar className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3 text-white tracking-wide uppercase">{t('common.registerOnline')}</h3>
              <a 
                href="https://maat-app.link/7BGCKjdtuUb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-bold tracking-wide transition-colors"
              >
                {t('common.bookClasses')}
              </a>
              <p className="text-gray-400 text-sm mt-2 tracking-wide">{t('common.instantConfirmation')}</p>
            </div>

            {/* Visit In Person */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3 text-white tracking-wide uppercase">{t('common.visitUs')}</h3>
              <p className="text-yellow-400 font-bold tracking-wide">{t('common.dropInWelcome')}</p>
              <p className="text-gray-400 text-sm mt-2 tracking-wide">{t('common.duringTrainingHours')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations & Directions */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              {t('contact.locations.title')}
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              {t('contact.locations.subtitle')}
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
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">{t('contact.address')}</h4>
                  <p className="text-gray-300 tracking-wide whitespace-pre-line">
                    Palestra Comunale
                    Via Scolastica, 39032
                    Campo Tures BZ, Italy
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">{t('contact.trainingSchedule')}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">{t('schedule.tuesday')}: 15:00 - 20:30</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">{t('schedule.thursday')}: 06:30 - 20:30</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">{t('contact.landmarkDirections')}</h4>
                  <p className="text-gray-300 tracking-wide">
                    {t('contact.campoTures.directions')}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">{t('contact.availableClasses')}</h4>
                  <ul className="space-y-1">
                    {getCampoTuresClasses().map((classItem, index) => (
                      <li key={index} className="flex items-center text-gray-300 tracking-wide">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {classItem}
                      </li>
                    ))}
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
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">{t('contact.address')}</h4>
                  <p className="text-gray-300 tracking-wide whitespace-pre-line">
                    Palestra Comunale
                    Via Bastioni, 39031
                    Brunico BZ, Italy
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">{t('contact.trainingSchedule')}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">{t('schedule.monday')}: 17:30 - 20:30</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">{t('schedule.wednesday')}: 17:30 - 20:30</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">{t('schedule.friday')}: 18:30 - 20:30</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">{t('contact.landmarkDirections')}</h4>
                  <p className="text-gray-300 tracking-wide">
                    {t('contact.brunico.directions')}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">{t('contact.availableClasses')}</h4>
                  <ul className="space-y-1">
                    {getBrunicoClasses().map((classItem, index) => (
                      <li key={index} className="flex items-center text-gray-300 tracking-wide">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {classItem}
                      </li>
                    ))}
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
              {t('contact.parking.title')}
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              {t('contact.parking.subtitle')}
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
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">{t('contact.parking')}</h4>
                  <p className="text-gray-300 tracking-wide">
                    Free parking available directly in front of the municipal gymnasium. Additional street parking on Via Scolastica.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">{t('contact.publicTransport')}</h4>
                  <p className="text-gray-300 tracking-wide">
                    Bus stop "Campo Tures Centro" is 200m from the gym. Regular connections from Brunico and surrounding areas.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">{t('contact.accessibility')}</h4>
                  <p className="text-gray-300 tracking-wide">
                    Wheelchair accessible entrance and facilities. Ground floor location with wide doorways.
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
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">{t('contact.parking')}</h4>
                  <p className="text-gray-300 tracking-wide">
                    Free parking available at the municipal gymnasium. Additional parking on Via Bastioni and nearby streets.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">{t('contact.publicTransport')}</h4>
                  <p className="text-gray-300 tracking-wide">
                    Central location with multiple bus connections. Train station is 10 minutes walk from the gymnasium.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">{t('contact.accessibility')}</h4>
                  <p className="text-gray-300 tracking-wide">
                    Fully accessible facility with elevator access and adapted changing rooms available.
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
              {t('contact.visitRequirements.title')}
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              {t('contact.visitRequirements.subtitle')}
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">{t('contact.firstTimeVisitors')}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3 tracking-wide uppercase">{t('contact.whatToBring')}</h4>
                  <ul className="space-y-2 text-gray-300">
                    {getBringItems().map((item, index) => (
                      <li key={index} className="flex items-start tracking-wide">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3 tracking-wide uppercase">{t('contact.whatWeProvide')}</h4>
                  <ul className="space-y-2 text-gray-300">
                    {getProvideItems().map((item, index) => (
                      <li key={index} className="flex items-start tracking-wide">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">{t('contact.specialInstructions')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-300 text-sm tracking-wide">
                    <strong className="text-white">{t('contact.instructions.age').split(':')[0]}:</strong> {t('contact.instructions.age').split(':')[1]}
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm tracking-wide">
                    <strong className="text-white">{t('contact.instructions.health').split(':')[0]}:</strong> {t('contact.instructions.health').split(':')[1]}
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm tracking-wide">
                    <strong className="text-white">{t('contact.instructions.equipment').split(':')[0]}:</strong> {t('contact.instructions.equipment').split(':')[1]}
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm tracking-wide">
                    <strong className="text-white">{t('contact.instructions.payment').split(':')[0]}:</strong> {t('contact.instructions.payment').split(':')[1]}
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
            {t('contact.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            {t('contact.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              {t('common.joinSportAcademy')}
              <ExternalLink size={20} />
            </a>
            <a 
              href="tel:+393485741798" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              <Phone size={20} />
              {t('common.callNow')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}