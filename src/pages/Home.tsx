import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Shield, Target, Flame, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/ea4196af-93c9-4c00-942d-6f3ca5e06e8f.jpg')",
          }}
        ></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10"></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-wider text-white text-shadow-lg">
            <span className="text-white">{t('home.hero.title').split(' ')[0]}</span>
            <br />
            <span className="text-white">{t('home.hero.title').split(' ')[1]}</span>
          </h1>
          <p className="text-xl md:text-2xl text-yellow-400 mb-8 italic tracking-wide font-light">
            Forging Fighters Since 2017
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

      {/* About Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              {t('home.welcome.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-black/50 p-8 rounded-lg border border-yellow-500/30">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                8+
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wide text-yellow-400 uppercase">{t('home.stats.yearsOfExcellence')}</h3>
              <p className="text-gray-300 tracking-wide">{t('home.stats.yearsDescription')}</p>
            </div>
            
            <div className="text-center bg-black/50 p-8 rounded-lg border border-yellow-500/30">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wide text-yellow-400 uppercase">{t('home.stats.trainingLocations')}</h3>
              <p className="text-gray-300 tracking-wide">{t('home.stats.locationsDescription')}</p>
            </div>
            
            <div className="text-center bg-black/50 p-8 rounded-lg border border-yellow-500/30">
              <div className="bg-gradient-gold text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                6
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wide text-yellow-400 uppercase">{t('home.stats.trainingPrograms')}</h3>
              <p className="text-gray-300 tracking-wide">{t('home.stats.programsDescription')}</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/classes" 
              className="bg-gradient-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wide uppercase"
            >
              {t('home.stats.exploreClasses')}
            </Link>
          </div>
        </div>
      </section>

      {/* Training Disciplines Preview */}
      <section id="train-like-fighter" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-wide uppercase">
              {t('home.trainLikeFighter.title')}
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              {t('home.trainLikeFighter.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg bg-gradient-dark border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/ea4196af-93c9-4c00-942d-6f3ca5e06e8f.jpg" 
                  alt="MMA Training"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <Flame className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white tracking-wide uppercase">MMA</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 tracking-wide">
                  {t('home.mma.description')}
                </p>
                <Link 
                  to="/disciplines/mma"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold tracking-wide uppercase transition-colors"
                >
                  {t('common.learnMore')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg bg-gradient-dark border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg" 
                  alt="BJJ Training"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white tracking-wide uppercase">BJJ</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 tracking-wide">
                  {t('home.bjj.description')}
                </p>
                <Link 
                  to="/disciplines/bjj"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold tracking-wide uppercase transition-colors"
                >
                  {t('common.learnMore')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg bg-gradient-dark border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg" 
                  alt="Grappling Training"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white tracking-wide uppercase">GRAPPLING</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 tracking-wide">
                  {t('home.grappling.description')}
                </p>
                <Link 
                  to="/disciplines/grappling"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold tracking-wide uppercase transition-colors"
                >
                  {t('common.learnMore')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-wide uppercase">
              {t('home.getStarted.title')}
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              {t('home.getStarted.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/classes" 
              className="bg-black/70 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide uppercase">{t('home.quickLinks.viewClasses')}</h3>
              <p className="text-gray-300 group-hover:text-black tracking-wide">{t('home.quickLinks.viewClassesDesc')}</p>
            </Link>
            
            <Link 
              to="/schedule" 
              className="bg-black/70 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide uppercase">{t('home.quickLinks.checkSchedule')}</h3>
              <p className="text-gray-300 group-hover:text-black tracking-wide">{t('home.quickLinks.checkScheduleDesc')}</p>
            </Link>
            
            <Link 
              to="/membership" 
              className="bg-black/70 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide uppercase">{t('home.quickLinks.membershipPlans')}</h3>
              <p className="text-gray-300 group-hover:text-black tracking-wide">{t('home.quickLinks.membershipPlansDesc')}</p>
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-black/70 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black tracking-wide uppercase">{t('home.quickLinks.contactUs')}</h3>
              <p className="text-gray-300 group-hover:text-black tracking-wide">{t('home.quickLinks.contactUsDesc')}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}