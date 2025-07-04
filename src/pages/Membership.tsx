import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Membership() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-12 h-12 text-yellow-400" />
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide uppercase">
                {t('membership.hero.title')}
              </h1>
              <Trophy className="w-12 h-12 text-yellow-400" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              {t('membership.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            {/* Main Season */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gradient-gold text-black px-4 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg uppercase">
                  {t('membership.mainSeason.mostPopular')}
                </span>
              </div>
              
              <div className="text-center mb-8 pt-4">
                <h3 className="text-3xl font-bold mb-2 text-white tracking-wide uppercase">{t('membership.mainSeason.title')}</h3>
                <p className="text-yellow-400 text-lg tracking-wide uppercase">{t('membership.mainSeason.period')}</p>
                <p className="text-sm text-gray-400 mt-2 tracking-wide">{t('membership.mainSeason.duration')}</p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center py-4 border-b border-yellow-500/30">
                  <span className="text-white font-medium text-lg tracking-wide uppercase">{t('membership.adults')}</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-yellow-400 tracking-wide">€600</span>
                    <p className="text-sm text-gray-400 tracking-wide">€60/{t('membership.month')}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-white font-medium text-lg tracking-wide uppercase">{t('membership.students')}</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-yellow-400 tracking-wide">€450</span>
                    <p className="text-sm text-gray-400 tracking-wide">€45/{t('membership.month')}</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://maat-app.link/7BGCKjdtuUb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-gold hover:bg-yellow-500 text-black py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 tracking-wide shadow-lg uppercase"
              >
                {t('membership.selectMainSeason')}
                <ExternalLink size={18} />
              </a>
            </div>
            
            {/* Summer Season */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2 text-white tracking-wide uppercase">{t('membership.summerSeason.title')}</h3>
                <p className="text-yellow-400 text-lg tracking-wide uppercase">{t('membership.summerSeason.period')}</p>
                <p className="text-sm text-gray-400 mt-2 tracking-wide">{t('membership.summerSeason.duration')}</p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center py-4 border-b border-yellow-500/30">
                  <span className="text-white font-medium text-lg tracking-wide uppercase">{t('membership.adults')}</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-yellow-400 tracking-wide">€210</span>
                    <p className="text-sm text-gray-400 tracking-wide">€80/{t('membership.month')}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-white font-medium text-lg tracking-wide uppercase">{t('membership.students')}</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-yellow-400 tracking-wide">€150</span>
                    <p className="text-sm text-gray-400 tracking-wide">€60/{t('membership.month')}</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://maat-app.link/7BGCKjdtuUb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-gold hover:bg-yellow-500 text-black py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 tracking-wide shadow-lg uppercase"
              >
                {t('membership.selectSummerSeason')}
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Jiu Jitsu Only Membership */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white tracking-wide uppercase">
                {t('membership.bjjOnly.title')}
              </h2>
              <p className="text-lg text-gray-300 tracking-wide">
                {t('membership.bjjOnly.subtitle')}
              </p>
            </div>

            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white tracking-wide uppercase">{t('membership.bjjOnly.program')}</h3>
                <p className="text-yellow-400 text-lg tracking-wide uppercase">{t('membership.summerSeason.period')}</p>
                <p className="text-sm text-gray-400 mt-2 tracking-wide">{t('membership.bjjOnly.description')}</p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center py-4 border-b border-yellow-500/30">
                  <span className="text-white font-medium text-lg tracking-wide uppercase">{t('membership.adults')}</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-yellow-400 tracking-wide">€180</span>
                    <p className="text-sm text-gray-400 tracking-wide">€70/{t('membership.month')}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-white font-medium text-lg tracking-wide uppercase">{t('membership.students')}</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-yellow-400 tracking-wide">€130</span>
                    <p className="text-sm text-gray-400 tracking-wide">€50/{t('membership.month')}</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://maat-app.link/7BGCKjdtuUb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-gold hover:bg-yellow-500 text-black py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 tracking-wide shadow-lg uppercase"
              >
                {t('membership.selectBjjOnly')}
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              {t('membership.additionalServices.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              {t('membership.additionalServices.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">{t('membership.personalTraining.title')}</h3>
              <p className="text-gray-300 tracking-wide">{t('membership.personalTraining.description')}</p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">{t('membership.competitionPrep.title')}</h3>
              <p className="text-gray-300 tracking-wide">{t('membership.competitionPrep.description')}</p>
            </div>
            
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">{t('membership.seminars.title')}</h3>
              <p className="text-gray-300 tracking-wide">{t('membership.seminars.description')}</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wide uppercase"
            >
              {t('common.contactUs')}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">What are the training seasons?</h3>
              <p className="text-gray-300 tracking-wide">
                We offer two main training seasons: the Main Season (September to June) and the Summer Season (June to August). Each season has its own membership pricing and schedule.
              </p>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">Can I train at both locations?</h3>
              <p className="text-gray-300 tracking-wide">
                Yes! Your membership gives you access to classes at both our Campo Tures and Brunico locations. You can attend any class that fits your schedule.
              </p>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">Do you offer trial classes?</h3>
              <p className="text-gray-300 tracking-wide">
                Absolutely! We encourage new students to try a class before committing to a membership. Contact us to schedule your trial class.
              </p>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">What equipment do I need?</h3>
              <p className="text-gray-300 tracking-wide">
                For your first class, just bring comfortable workout clothes and water. We provide basic equipment. As you progress, we'll guide you on purchasing your own gear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            {t('membership.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            {t('membership.cta.description')}
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
            <Link 
              to="/contact" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide uppercase"
            >
              {t('common.contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}