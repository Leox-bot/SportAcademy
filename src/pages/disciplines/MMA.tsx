import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowLeft, ExternalLink, Target, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import SmoothScrollLink from '../../components/SmoothScrollLink';

export default function MMA() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Navigation Breadcrumb */}
      <section className="py-6 bg-black border-b border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase">{t('nav.home')}</Link>
            <span className="text-gray-600">/</span>
            <Link to="/classes" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase">{t('nav.classes')}</Link>
            <span className="text-gray-600">/</span>
            <span className="text-yellow-400 tracking-wide uppercase">MMA</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/ea4196af-93c9-4c00-942d-6f3ca5e06e8f.jpg" 
            alt="MMA Training"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Flame className="w-16 h-16 text-yellow-400" />
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-wide uppercase">
                {t('disciplines.mma.title')}
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              {t('disciplines.mma.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 text-white tracking-wide uppercase">{t('disciplines.mma.overview.title')}</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed tracking-wide">
                {t('disciplines.mma.overview.paragraphs').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/ea4196af-93c9-4c00-942d-6f3ca5e06e8f.jpg" 
                alt="MMA Training"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Techniques */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              {t('disciplines.mma.techniques.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              {t('disciplines.mma.techniques.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">{t('disciplines.mma.techniques.striking.title')}</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                {t('disciplines.mma.techniques.striking.items').map((item, index) => (
                  <li key={index} className="flex items-center tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">{t('disciplines.mma.techniques.wrestling.title')}</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                {t('disciplines.mma.techniques.wrestling.items').map((item, index) => (
                  <li key={index} className="flex items-center tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">{t('disciplines.mma.techniques.groundGame.title')}</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                {t('disciplines.mma.techniques.groundGame.items').map((item, index) => (
                  <li key={index} className="flex items-center tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black mb-6 text-white tracking-wide uppercase">{t('disciplines.mma.history.title')}</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed tracking-wide">
                {t('disciplines.mma.history.paragraphs').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-400 tracking-wide uppercase">{t('disciplines.mma.history.milestones.title')}</h3>
                <ul className="space-y-3 text-gray-300">
                  {t('disciplines.mma.history.milestones.events').map((event, index) => (
                    <li key={index} className="flex items-start tracking-wide">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      <div>
                        <strong className="text-white">{event.year}:</strong> {event.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              {t('disciplines.mma.benefits.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              {t('disciplines.mma.benefits.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t('disciplines.mma.benefits.items').map((benefit, index) => (
              <div key={index} className="text-center bg-black/70 p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
                <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-yellow-400 tracking-wide uppercase">{benefit.title}</h3>
                <p className="text-gray-300 text-sm tracking-wide">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              {t('disciplines.mma.schedule.title')}
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              {t('disciplines.mma.schedule.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">{t('schedule.campoTures')}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-yellow-500/30">
                  <span className="text-white font-medium tracking-wide uppercase">{t('schedule.tuesday')}</span>
                  <span className="text-gray-300 tracking-wide">18:30 - 19:30</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">{t('schedule.brunico')}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-yellow-500/30">
                  <span className="text-white font-medium tracking-wide uppercase">{t('schedule.wednesday')}</span>
                  <span className="text-gray-300 tracking-wide">17:30 - 18:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Practitioners */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              {t('disciplines.mma.legends.title')}
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              {t('disciplines.mma.legends.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t('disciplines.mma.legends.fighters').map((fighter, index) => (
              <div key={index} className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-yellow-400 tracking-wide uppercase">{fighter.name}</h3>
                <p className="text-gray-300 text-sm mb-3 tracking-wide">{fighter.title}</p>
                <p className="text-gray-400 text-sm tracking-wide">{fighter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            {t('disciplines.mma.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            {t('disciplines.mma.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              {t('disciplines.mma.cta.joinButton')}
              <ExternalLink size={20} />
            </a>
            <SmoothScrollLink 
              to="/#train-like-fighter" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              <ArrowLeft size={20} />
              Back to Train Like a Fighter
            </SmoothScrollLink>
          </div>
        </div>
      </section>
    </div>
  );
}