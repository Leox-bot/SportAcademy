import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Target, Zap, Heart, Star, Flame, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Classes() {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    // Handle anchor links
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const classes = [
    {
      id: "mma",
      title: t('classes.mma.title'),
      description: t('classes.mma.description'),
      icon: <Flame className="w-12 h-12 text-yellow-400" />,
      image: "/ea4196af-93c9-4c00-942d-6f3ca5e06e8f.jpg",
      features: t('classes.mma.features'),
      level: t('common.allLevels')
    },
    {
      id: "bjj",
      title: t('classes.bjj.title'),
      description: t('classes.bjj.description'),
      icon: <Shield className="w-12 h-12 text-yellow-400" />,
      image: "/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg",
      features: t('classes.bjj.features'),
      level: t('common.allLevels')
    },
    {
      id: "grappling",
      title: t('classes.grappling.title'),
      description: t('classes.grappling.description'),
      icon: <Target className="w-12 h-12 text-yellow-400" />,
      image: "/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg",
      features: t('classes.grappling.features'),
      level: t('common.allLevels')
    },
    {
      id: "kids-bjj",
      title: t('classes.kidsBjj.title'),
      description: t('classes.kidsBjj.description'),
      icon: <Heart className="w-12 h-12 text-yellow-400" />,
      image: "/c864b6fe-d0e2-4443-af35-a04b21d97739.jpg",
      features: t('classes.kidsBjj.features'),
      level: `${t('common.ages')} 8-14`
    },
    {
      id: "wrestling",
      title: t('classes.wrestling.title'),
      description: t('classes.wrestling.description'),
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      image: "/8a6f6ad8-a194-433f-b64a-37452844d3fd.jpg",
      features: t('classes.wrestling.features'),
      level: t('common.allLevels')
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-wide uppercase">
              {t('classes.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              {t('classes.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {classes.map((classItem, index) => (
              <div 
                key={index} 
                id={classItem.id}
                className="bg-gradient-dark border border-yellow-500/30 rounded-lg overflow-hidden hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300 scroll-mt-20"
              >
                {/* Full-width Class Image */}
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                  <img 
                    src={classItem.image} 
                    alt={classItem.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-4">
                    {classItem.icon}
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wide text-shadow-lg uppercase">{classItem.title}</h3>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="bg-gradient-gold text-black px-4 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg uppercase">
                      {classItem.level}
                    </span>
                  </div>
                </div>
                
                {/* Class Content */}
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-300 text-lg leading-relaxed tracking-wide mb-6">
                        {classItem.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-400 mb-4 text-xl tracking-wide uppercase">{t('classes.whatYouLearn')}</h4>
                      <ul className="space-y-3">
                        {classItem.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-lg tracking-wide">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide uppercase">
            {t('classes.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            {t('classes.cta.description')}
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
              to="/schedule" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide uppercase"
            >
              {t('common.viewSchedule')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}