import React from 'react';
import { Link } from 'react-router-dom';
import { Target, ArrowLeft, ExternalLink, Zap, Users, Trophy } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import SmoothScrollLink from '../../components/SmoothScrollLink';

export default function Grappling() {
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
            <span className="text-yellow-400 tracking-wide uppercase">{t('disciplines.grappling.breadcrumb')}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg" 
            alt="Grappling Training"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Target className="w-16 h-16 text-yellow-400" />
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-wide uppercase">
                {t('disciplines.grappling.title')}
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              {t('disciplines.grappling.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 text-white tracking-wide uppercase">{t('disciplines.grappling.overview.title')}</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed tracking-wide">
                {t('disciplines.grappling.overview.paragraphs').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg" 
                alt="Grappling Training"
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
              {t('disciplines.grappling.techniques.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              {t('disciplines.grappling.techniques.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">{t('disciplines.grappling.techniques.takedowns.title')}</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                {t('disciplines.grappling.techniques.takedowns.items').map((item, index) => (
                  <li key={index} className="flex items-center tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">{t('disciplines.grappling.techniques.control.title')}</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                {t('disciplines.grappling.techniques.control.items').map((item, index) => (
                  <li key={index} className="flex items-center tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400 tracking-wide uppercase">{t('disciplines.grappling.techniques.submissions.title')}</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                {t('disciplines.grappling.techniques.submissions.items').map((item, index) => (
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

      {/* Training Methodology */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              {t('disciplines.grappling.methodology.title')}
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              {t('disciplines.grappling.methodology.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">{t('disciplines.grappling.methodology.technical.title')}</h3>
              <div className="space-y-4 text-gray-300">
                {t('disciplines.grappling.methodology.technical.methods').map((method, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h4 className="font-bold text-white mb-1 tracking-wide uppercase">{method.title}</h4>
                      <p className="tracking-wide">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">{t('disciplines.grappling.methodology.conditioning.title')}</h3>
              <div className="space-y-4 text-gray-300">
                {t('disciplines.grappling.methodology.conditioning.methods').map((method, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h4 className="font-bold text-white mb-1 tracking-wide uppercase">{method.title}</h4>
                      <p className="tracking-wide">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
              {t('disciplines.grappling.benefits.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              {t('disciplines.grappling.benefits.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t('disciplines.grappling.benefits.items').map((benefit, index) => (
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
              {t('disciplines.grappling.schedule.title')}
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              {t('disciplines.grappling.schedule.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">{t('schedule.campoTures')}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-yellow-500/30">
                  <span className="text-white font-medium tracking-wide uppercase">{t('schedule.tuesday')}</span>
                  <span className="text-gray-300 tracking-wide">15:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white font-medium tracking-wide uppercase">{t('schedule.thursday')}</span>
                  <span className="text-gray-300 tracking-wide">18:30 - 19:30</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">{t('schedule.brunico')}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-yellow-500/30">
                  <span className="text-white font-medium tracking-wide uppercase">{t('schedule.monday')}</span>
                  <span className="text-gray-300 tracking-wide">19:30 - 20:30</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white font-medium tracking-wide uppercase">{t('schedule.wednesday')}</span>
                  <span className="text-gray-300 tracking-wide">18:30 - 19:30</span>
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
              {t('disciplines.grappling.legends.title')}
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              {t('disciplines.grappling.legends.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t('disciplines.grappling.legends.grapplers').map((grappler, index) => (
              <div key={index} className="bg-black/70 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-yellow-400 tracking-wide uppercase">{grappler.name}</h3>
                <p className="text-gray-300 text-sm mb-3 tracking-wide">{grappler.title}</p>
                <p className="text-gray-400 text-sm tracking-wide">{grappler.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            {t('disciplines.grappling.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            {t('disciplines.grappling.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              {t('disciplines.grappling.cta.joinButton')}
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