import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Coaches() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Award className="w-12 h-12 text-yellow-400" />
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide uppercase">
                {t('coaches.hero.title')}
              </h1>
              <Award className="w-12 h-12 text-yellow-400" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              {t('coaches.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Coaches Profiles */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Matteo Parolin */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-400/50">
                  <img 
                    src="/716a8840-fb6f-4b74-a782-42d55de68c6b.jpg" 
                    alt="Matteo Parolin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white tracking-wide uppercase">{t('coaches.matteo.name')}</h3>
                <p className="text-yellow-400 font-semibold text-lg mb-4 tracking-wide uppercase">{t('coaches.matteo.title')}</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-yellow-400 mb-3 tracking-wide uppercase">{t('coaches.background')}</h4>
                  <p className="text-gray-300 leading-relaxed tracking-wide">
                    {t('coaches.matteo.background')}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-3 tracking-wide uppercase">{t('coaches.specializations')}</h4>
                  <ul className="space-y-2">
                    {t('coaches.matteo.specializations').map((spec, index) => (
                      <li key={index} className="flex items-center text-gray-300 tracking-wide">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-3 tracking-wide uppercase">{t('coaches.achievements')}</h4>
                  <ul className="space-y-2">
                    {t('coaches.matteo.achievements').map((achievement, index) => (
                      <li key={index} className="flex items-center text-gray-300 tracking-wide">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Christian Zecchetto */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-400/50">
                  <img 
                    src="/ba5f6212-00f1-4b36-867d-ed0a300f1ab6.jpg" 
                    alt="Christian Zecchetto"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white tracking-wide uppercase">{t('coaches.christian.name')}</h3>
                <p className="text-yellow-400 font-semibold text-lg mb-4 tracking-wide uppercase">{t('coaches.christian.title')}</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-yellow-400 mb-3 tracking-wide uppercase">{t('coaches.background')}</h4>
                  <p className="text-gray-300 leading-relaxed tracking-wide">
                    {t('coaches.christian.background')}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-3 tracking-wide uppercase">{t('coaches.specializations')}</h4>
                  <ul className="space-y-2">
                    {t('coaches.christian.specializations').map((spec, index) => (
                      <li key={index} className="flex items-center text-gray-300 tracking-wide">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-3 tracking-wide uppercase">{t('coaches.achievements')}</h4>
                  <ul className="space-y-2">
                    {t('coaches.christian.achievements').map((achievement, index) => (
                      <li key={index} className="flex items-center text-gray-300 tracking-wide">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-wide uppercase">
            {t('coaches.philosophy.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">{t('coaches.philosophy.technical.title')}</h3>
              <p className="text-gray-300 tracking-wide">
                {t('coaches.philosophy.technical.description')}
              </p>
            </div>
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">{t('coaches.philosophy.individual.title')}</h3>
              <p className="text-gray-300 tracking-wide">
                {t('coaches.philosophy.individual.description')}
              </p>
            </div>
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 tracking-wide uppercase">{t('coaches.philosophy.respect.title')}</h3>
              <p className="text-gray-300 tracking-wide">
                {t('coaches.philosophy.respect.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            {t('coaches.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            {t('coaches.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              {t('common.joinNow')}
              <ExternalLink size={20} />
            </a>
            <Link 
              to="/classes" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide uppercase"
            >
              {t('common.viewClasses')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}