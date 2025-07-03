import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Schedule() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Clock className="w-12 h-12 text-yellow-400" />
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide uppercase">
                {t('schedule.hero.title')}
              </h1>
              <Clock className="w-12 h-12 text-yellow-400" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              {t('schedule.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Information */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Campo Tures Schedule */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">{t('schedule.campoTures')}</h3>
              <div className="space-y-4">
                <div className="border-b border-yellow-500/30 pb-4">
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">{t('schedule.tuesday')}</h4>
                  <p className="text-gray-300 tracking-wide">{t('schedule.grappling')}: 15:00 - 16:00</p>
                  <p className="text-gray-300 tracking-wide">{t('schedule.mma')}: 18:30 - 19:30</p>
                  <p className="text-gray-300 tracking-wide">{t('schedule.bjj')}: 19:30 - 20:30</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">{t('schedule.thursday')}</h4>
                  <p className="text-gray-300 tracking-wide">{t('schedule.bjj')}: 06:30 - 07:30</p>
                  <p className="text-gray-300 tracking-wide">{t('schedule.grappling')}: 18:30 - 19:30</p>
                  <p className="text-gray-300 tracking-wide">{t('schedule.bjj')}: 19:30 - 20:30</p>
                </div>
              </div>
            </div>

            {/* Brunico Schedule */}
            <div className="bg-gradient-dark border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">{t('schedule.brunico')}</h3>
              <div className="space-y-4">
                <div className="border-b border-yellow-500/30 pb-4">
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">{t('schedule.monday')}</h4>
                  <p className="text-gray-300 tracking-wide">{t('schedule.wrestling')}: 17:30 - 18:30</p>
                  <p className="text-gray-300 tracking-wide">{t('schedule.bjj')}: 18:30 - 19:30</p>
                  <p className="text-gray-300 tracking-wide">{t('schedule.grappling')}: 19:30 - 20:30</p>
                </div>
                <div className="border-b border-yellow-500/30 pb-4">
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">{t('schedule.wednesday')}</h4>
                  <p className="text-gray-300 tracking-wide">{t('schedule.mma')}: 17:30 - 18:30</p>
                  <p className="text-gray-300 tracking-wide">{t('schedule.grappling')}: 18:30 - 19:30</p>
                  <p className="text-gray-300 tracking-wide">{t('schedule.bjj')}: 19:30 - 20:30</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 tracking-wide uppercase">{t('schedule.friday')}</h4>
                  <p className="text-gray-300 tracking-wide">{t('schedule.striking')}: 18:30 - 19:30</p>
                  <p className="text-gray-300 tracking-wide">{t('schedule.openMat')}: 19:30 - 20:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/70 border border-yellow-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400 tracking-wide uppercase">{t('schedule.importantInfo')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white mb-3 tracking-wide uppercase">{t('schedule.classGuidelines')}</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    {t('schedule.guidelines.arrive')}
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    {t('schedule.guidelines.water')}
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    {t('schedule.guidelines.gi')}
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    {t('schedule.guidelines.noGi')}
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 tracking-wide uppercase">{t('schedule.membershipBenefits')}</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    {t('schedule.benefits.allClasses')}
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    {t('schedule.benefits.openMat')}
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    {t('schedule.benefits.bothLocations')}
                  </li>
                  <li className="flex items-start tracking-wide">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    {t('schedule.benefits.personalTraining')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            {t('schedule.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            {t('schedule.cta.description')}
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
              to="/membership" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide uppercase"
            >
              {t('common.viewMembership')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}