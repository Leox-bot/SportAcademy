import React from 'react';
import { MapPin, Clock, ExternalLink, Instagram, Phone, Mail, Facebook, MessageCircle, Car, Accessibility, Calendar, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

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
                {t('common.registerOnline')}
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
                    Via Hugo von Taufers 8{'\n'}
                    39032 Campo Tures BZ{'\n'}
                    Italy
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">{t('contact.trainingSchedule')}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">{t('schedule.tuesday')}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">{t('schedule.thursday')}</span>
                    </div>
                  </div>
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
                    Via Maria Teresa Riedl, 3{'\n'}
                    39031 Brunico BZ{'\n'}
                    Italy
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2 tracking-wide uppercase">{t('contact.trainingSchedule')}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">{t('schedule.monday')}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">{t('schedule.wednesday')}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300 tracking-wide">{t('schedule.friday')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Instructions */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">Special Instructions</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 text-sm tracking-wide">
                  <strong className="text-white">Equipment:</strong> Trial students can borrow temporally basic equipment
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm tracking-wide">
                  <strong className="text-white">Health & Safety:</strong> Please inform us of any injuries or health conditions
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm tracking-wide">
                  <strong className="text-white">Payment:</strong> Cash and card are the only payment methods accepted
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm tracking-wide">
                  <strong className="text-white">Age Requirements:</strong> The age for kids classes is 8-14 years old
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
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