import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    nav: {
      home: 'Home',
      classes: 'Classes',
      schedule: 'Schedule',
      coaches: 'Coaches',
      membership: 'Membership',
      contact: 'Contact'
    },
    common: {
      joinNow: 'Join Now',
      viewClasses: 'View Classes',
      viewSchedule: 'View Schedule',
      viewMembership: 'View Membership',
      contactUs: 'Contact Us',
      learnMore: 'Learn More',
      allLevels: 'All Levels',
      ages: 'Ages',
      joinSportAcademy: 'Join Sport Academy',
      callNow: 'Call Now',
      registerOnline: 'Register Online',
      bookClasses: 'Book Classes',
      visitUs: 'Visit Us',
      dropInWelcome: 'Drop-in Welcome',
      duringTrainingHours: 'During training hours',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates & DMs',
      instantConfirmation: 'Instant confirmation'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Elite MMA, Brazilian Jiu-Jitsu, and Grappling training in Campo Tures and Brunico. Transform your body, mind, and spirit with professional coaching.'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Where champions are forged through dedication, discipline, and expert instruction. Our academy offers world-class training in multiple martial arts disciplines.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Proven track record of developing skilled martial artists',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures and Brunico facilities',
        trainingPrograms: 'Training Programs',
        programsDescription: 'Comprehensive martial arts curriculum',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Master the art of combat through our specialized programs'
      },
      mma: {
        description: 'Complete mixed martial arts training combining striking, grappling, and ground fighting techniques.'
      },
      bjj: {
        description: 'Brazilian Jiu-Jitsu focusing on ground fighting, submissions, and leverage-based techniques.'
      },
      grappling: {
        description: 'No-gi grappling emphasizing takedowns, control positions, and submission holds.'
      },
      getStarted: {
        title: 'Get Started Today',
        subtitle: 'Your martial arts journey begins here'
      },
      quickLinks: {
        viewClasses: 'View Classes',
        viewClassesDesc: 'Explore our training programs',
        checkSchedule: 'Check Schedule',
        checkScheduleDesc: 'Find your perfect training time',
        membershipPlans: 'Membership Plans',
        membershipPlansDesc: 'Choose your training package',
        contactUs: 'Contact Us',
        contactUsDesc: 'Get in touch with our team'
      }
    },
    classes: {
      hero: {
        title: 'Our Classes',
        description: 'Comprehensive martial arts training programs designed for all skill levels. From beginners to advanced practitioners, we have the perfect class for your journey.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Complete combat training combining striking, wrestling, and ground fighting. Learn the most effective techniques from multiple martial arts disciplines.',
        features: [
          'Stand-up striking techniques',
          'Wrestling and takedowns',
          'Ground fighting and submissions',
          'Cage work and clinch fighting',
          'Conditioning and fitness training'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'The gentle art focusing on leverage, technique, and strategy. Perfect for self-defense and competitive grappling.',
        features: [
          'Guard work and sweeps',
          'Submission techniques',
          'Positional control',
          'Self-defense applications',
          'Competition preparation'
        ]
      },
      grappling: {
        title: 'No-Gi Grappling',
        description: 'Fast-paced grappling without the traditional gi, emphasizing speed, athleticism, and modern techniques.',
        features: [
          'Takedown techniques',
          'Leg locks and heel hooks',
          'Back control and strangles',
          'Scrambles and transitions',
          'Competition strategies'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Fun and safe Brazilian Jiu-Jitsu classes designed specifically for children, building confidence, discipline, and physical fitness.',
        features: [
          'Age-appropriate techniques',
          'Character development',
          'Anti-bullying strategies',
          'Physical fitness and coordination',
          'Fun games and activities'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Dynamic grappling classes for young athletes, focusing on wrestling and submission grappling fundamentals.',
        features: [
          'Wrestling fundamentals',
          'Basic submission holds',
          'Takedown techniques',
          'Strength and conditioning',
          'Competitive mindset development'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling training focusing on takedowns, control, and conditioning. Essential for MMA and grappling.',
        features: [
          'Single and double leg takedowns',
          'Sprawls and defensive techniques',
          'Top control and pins',
          'Conditioning drills',
          'Mental toughness training'
        ]
      },
      whatYouLearn: 'What You\'ll Learn',
      cta: {
        title: 'Ready to Start Training?',
        description: 'Join our community of dedicated martial artists and begin your transformation today.'
      }
    },
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Meet our world-class instructors who bring years of experience, competition success, and passion for teaching to every class.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 15 years of martial arts experience, Matteo is a dedicated practitioner and instructor of Brazilian Jiu-Jitsu and MMA. His journey began in traditional martial arts before transitioning to modern combat sports.',
        specializations: [
          'Brazilian Jiu-Jitsu (Brown Belt)',
          'Mixed Martial Arts',
          'Grappling and Wrestling',
          'Competition Coaching'
        ],
        achievements: [
          'Multiple BJJ tournament medals',
          'Certified BJJ instructor',
          'MMA competition experience',
          '8+ years teaching experience'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Striking & Grappling Instructor',
        background: 'Christian brings a wealth of combat sports experience to Sport Academy. His expertise spans multiple disciplines, making him an invaluable asset to our coaching team.',
        specializations: [
          'Striking and Stand-up Fighting',
          'Brazilian Jiu-Jitsu',
          'Mixed Martial Arts',
          'Competition Preparation'
        ],
        achievements: [
          'Multiple competition medals',
          'Multiple MMA matches',
          'Certified martial arts instructor',
          'Active competitor and coach'
        ]
      },
      background: 'Background',
      specializations: 'Specializations',
      achievements: 'Achievements',
      philosophy: {
        title: 'Our Coaching Philosophy',
        technical: {
          title: 'Technical Excellence',
          description: 'We focus on proper technique and fundamentals, ensuring every student builds a solid foundation for long-term success.'
        },
        individual: {
          title: 'Individual Growth',
          description: 'Every student is unique. We tailor our instruction to help each person reach their personal goals and potential.'
        },
        respect: {
          title: 'Respect & Discipline',
          description: 'We instill the values of respect, discipline, and humility that are essential to martial arts and life.'
        }
      },
      cta: {
        title: 'Train with the Best',
        description: 'Learn from experienced coaches who are committed to your success and development.'
      }
    },
    schedule: {
      hero: {
        title: 'Training Schedule',
        description: 'Find the perfect time to train with our comprehensive schedule across both locations. All classes are included in your membership.'
      },
      campoTures: 'Campo Tures',
      brunico: 'Brunico',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      mma: 'MMA',
      bjj: 'BJJ',
      grappling: 'Grappling',
      wrestling: 'Wrestling',
      striking: 'Striking',
      openMat: 'Open Mat',
      importantInfo: 'Important Information',
      classGuidelines: 'Class Guidelines',
      guidelines: {
        arrive: 'Arrive 10 minutes early to warm up',
        water: 'Bring water bottle and towel',
        gi: 'BJJ classes require a gi (uniform)',
        noGi: 'Grappling classes are no-gi (shorts and rash guard)'
      },
      membershipBenefits: 'Membership Benefits',
      benefits: {
        allClasses: 'Access to all classes at both locations',
        openMat: 'Free open mat sessions',
        bothLocations: 'Train at Campo Tures and Brunico',
        personalTraining: 'Discounted personal training sessions'
      },
      cta: {
        title: 'Ready to Join a Class?',
        description: 'Book your spot in any of our classes and start your martial arts journey today.'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the perfect membership plan for your training goals. All plans include access to both locations and all classes.'
      },
      mainSeason: {
        title: 'Main Season',
        period: 'September - June',
        duration: '10 months of training',
        mostPopular: 'Most Popular'
      },
      summerSeason: {
        title: 'Summer Season',
        period: 'July - August',
        duration: '2.5 months of training'
      },
      bjjOnly: {
        title: 'BJJ Only Membership',
        subtitle: 'Perfect for those who want to focus exclusively on Brazilian Jiu-Jitsu',
        program: 'BJJ Focused Training',
        description: 'Access to all BJJ classes at both locations'
      },
      adults: 'Adults',
      students: 'Students',
      month: 'month',
      whatsIncluded: 'What\'s Included',
      mainIncludes: [
        'All classes at both locations',
        'MMA, BJJ, Grappling, Wrestling',
        'Open mat sessions',
        'Competition team access',
        'Equipment storage'
      ],
      summerIncludes: [
        'All summer classes',
        'Both Campo Tures and Brunico',
        'Flexible schedule',
        'Open mat access',
        'Equipment storage'
      ],
      bjjIncludes: [
        'All BJJ classes (gi and no-gi)',
        'Both locations included',
        'Open mat sessions',
        'Competition preparation',
        'Belt progression system'
      ],
      selectMainSeason: 'Select Main Season',
      selectSummerSeason: 'Select Summer Season',
      selectBjjOnly: 'Select BJJ Only',
      additionalServices: {
        title: 'Additional Services',
        description: 'Enhance your training with our specialized services and personal coaching options.'
      },
      personalTraining: {
        title: 'Personal Training',
        description: 'One-on-one coaching tailored to your specific goals and needs.',
        price: '€50',
        duration: 'per session (60 min)'
      },
      competitionPrep: {
        title: 'Competition Prep',
        description: 'Specialized training to prepare for tournaments and competitions.',
        price: '€40',
        duration: 'per session (90 min)'
      },
      seminars: {
        title: 'Seminars',
        description: 'Special workshops with guest instructors and advanced techniques.',
        price: '€30',
        duration: 'per seminar (2-3 hours)'
      },
      faq: {
        title: 'Frequently Asked Questions',
        seasons: {
          question: 'What\'s the difference between seasons?',
          answer: 'The main season (September-June) offers our full curriculum with 10 months of training. The summer season (July-August) is a shorter, more flexible program perfect for maintaining skills during the break.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to classes at both Campo Tures and Brunico locations. You can mix and match based on your schedule.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer a free trial class for new students. Contact us to schedule your first session and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For beginners, just comfortable workout clothes. We provide basic equipment for trial classes. As you progress, you\'ll need a gi for BJJ classes and appropriate gear for other disciplines.'
        }
      },
      cta: {
        title: 'Start Your Journey Today',
        description: 'Choose your membership plan and join our community of dedicated martial artists.'
      }
    },
    contact: {
      hero: {
        title: 'Contact Us',
        description: 'Ready to start your martial arts journey? Get in touch with us to learn more about our programs, schedule a trial class, or ask any questions.'
      },
      getInTouch: {
        title: 'Get In Touch',
        subtitle: 'Multiple ways to connect with Sport Academy'
      },
      callUs: 'Call Us',
      instagram: 'Instagram',
      address: 'Address',
      trainingSchedule: 'Training Schedule',
      locations: {
        title: 'Our Locations',
        subtitle: 'Two convenient locations in South Tyrol'
      },
      parkingAccessibility: {
        title: 'Parking & Accessibility',
        subtitle: 'Easy access and convenient parking at both locations'
      },
      parking: 'Parking',
      publicTransport: 'Public Transport',
      accessibility: 'Accessibility',
      campoTures: {
        parking: 'Free parking is available right in front of the entrance, with additional spots nearby. EV charging station approximately 200 meters away.',
        transport: 'The "Campo Tures Centro" stop is just a 2-minute walk away. Several bus lines stop here, including 450, 451, and 452, offering regular connections to Brunico, local villages, and the surrounding valleys.',
        accessibility: 'The gym is easy to reach on foot, by car or public transport. Located in a wide, flat and well-lit area — perfect for evening training.'
      },
      brunico: {
        parking: 'Free street parking available along Via Riedl and nearby roads. During peak hours, public garages and paid blue-zone parking are just 5 minutes away on foot.',
        transport: 'Brunico Nord train station is only a 2-minute walk from the gym — perfect if you\'re coming from San Candido, Fortezza or anywhere in the valley. There\'s also a nearby bus stop with urban and regional connections.',
        accessibility: 'The gym is in a quiet, flat area with a short, direct walk from all nearby transport stops. Easy to reach even with gear or training bags.'
      },
      visitRequirements: {
        title: 'First Time Visitors',
        subtitle: 'What to expect and what to bring for your first class'
      },
      firstTimeVisitors: 'First Time Visitors',
      whatToBring: 'What to Bring',
      whatWeProvide: 'What We Provide',
      bring: [
        'Comfortable workout clothes',
        'Water bottle',
        'Towel',
        'Positive attitude and willingness to learn'
      ],
      provide: [
        'Basic training equipment for trial',
        'Clean and safe training environment',
        'Professional instruction',
        'Supportive community atmosphere'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Age Requirements: Minimum age 6 for kids classes, 16+ for adult classes',
        health: 'Health: Please inform us of any injuries or health conditions',
        equipment: 'Equipment: We provide gloves and shin guards, but students should buy their own',
        payment: 'Payment: Only card and cash payments are accepted'
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Contact us today to schedule your first class and start your martial arts journey.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Master the gentle art of leverage, technique, and strategy'
        },
        overview: {
          title: 'The Gentle Art',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. Often called "the gentle art," BJJ emphasizes technique, leverage, and timing over brute strength, making it accessible to practitioners of all sizes and ages.',
            'At Sport Academy, our BJJ program is designed to teach you the fundamental principles of this incredible martial art while building your physical fitness, mental toughness, and self-confidence. Whether you\'re interested in self-defense, competition, or simply staying in shape, BJJ offers something for everyone.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Master the fundamental skills of Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard Work',
            items: [
              'Closed guard fundamentals',
              'Open guard variations',
              'Guard sweeps and transitions',
              'Guard retention techniques'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Chokes and strangles',
              'Joint locks and armbars',
              'Leg locks and heel hooks',
              'Submission chains'
            ]
          },
          positions: {
            title: 'Positions',
            items: [
              'Mount and side control',
              'Back control techniques',
              'Knee on belly',
              'Transitional movements'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the traditional ranking system',
          philosophy: {
            title: 'Belt Philosophy',
            description: 'The BJJ belt system represents not just technical knowledge, but also character development, perseverance, and dedication to the art. Each belt level requires years of consistent training and demonstrates mastery of increasingly complex techniques.'
          }
        },
        history: {
          title: 'History & Lineage',
          paragraphs: [
            'Brazilian Jiu-Jitsu evolved from traditional Japanese jujutsu and judo, brought to Brazil by Mitsuyo Maeda in the early 20th century. The Gracie family, particularly Helio Gracie, adapted these techniques to create a more effective system for smaller practitioners.',
            'The art gained worldwide recognition through the early UFC events, where Royce Gracie demonstrated the effectiveness of BJJ against larger, stronger opponents from other martial arts backgrounds.'
          ],
          keyFigures: {
            title: 'Key Figures',
            people: [
              {
                name: 'Mitsuyo Maeda',
                description: 'Japanese judoka who brought jujutsu to Brazil'
              },
              {
                name: 'Helio Gracie',
                description: 'Founder of Gracie Jiu-Jitsu and BJJ pioneer'
              },
              {
                name: 'Royce Gracie',
                description: 'UFC champion who proved BJJ\'s effectiveness'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ Training Schedule',
          subtitle: 'Join our regular BJJ classes at both locations'
        },
        cta: {
          title: 'Start Your BJJ Journey',
          description: 'Experience the gentle art that has transformed millions of lives worldwide.',
          joinButton: 'Join BJJ Classes'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining all martial arts disciplines'
        },
        overview: {
          title: 'The Complete Fighter',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, wrestling, Brazilian Jiu-Jitsu, Muay Thai, and other martial arts. MMA fighters must be proficient in striking, grappling, and ground fighting to compete at the highest level.',
            'Our MMA program at Sport Academy provides comprehensive training in all aspects of mixed martial arts. Whether you\'re training for fitness, self-defense, or competition, our experienced coaches will help you develop the skills and conditioning needed to excel.'
          ]
        },
        techniques: {
          title: 'Core Disciplines',
          subtitle: 'Master all aspects of mixed martial arts combat',
          striking: {
            title: 'Striking',
            items: [
              'Boxing fundamentals',
              'Muay Thai kicks and knees',
              'Footwork and movement',
              'Defensive techniques'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown techniques',
              'Sprawls and defensive wrestling',
              'Cage work and clinch fighting',
              'Ground control'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Brazilian Jiu-Jitsu techniques',
              'Ground and pound',
              'Submission defense',
              'Transitions and escapes'
            ]
          }
        },
        history: {
          title: 'Evolution of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with the Ultimate Fighting Championship (UFC) in 1993. Early events featured fighters from different martial arts backgrounds competing to determine the most effective fighting style.',
            'Over time, fighters realized they needed to be well-rounded in all aspects of combat. This led to the evolution of MMA as we know it today, where fighters train in multiple disciplines to become complete martial artists.'
          ],
          milestones: {
            title: 'Key Milestones',
            events: [
              {
                year: '1993',
                description: 'First UFC event demonstrates effectiveness of different martial arts'
              },
              {
                year: '2001',
                description: 'Unified Rules of MMA established for fighter safety'
              },
              {
                year: '2016',
                description: 'MMA becomes mainstream with global television coverage'
              }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Why train MMA at Sport Academy',
          items: [
            {
              icon: '💪',
              title: 'Complete Fitness',
              description: 'Full-body conditioning and strength training'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Develop confidence and mental resilience'
            },
            {
              icon: '🥊',
              title: 'Self-Defense',
              description: 'Learn practical self-defense techniques'
            },
            {
              icon: '🏆',
              title: 'Competition Ready',
              description: 'Prepare for amateur and professional competition'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Join our comprehensive MMA program'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Fighters who shaped the sport',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC Pioneer',
              description: 'Proved the effectiveness of Brazilian Jiu-Jitsu in early UFC'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Longest-reigning UFC middleweight champion'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Considered by many as the greatest heavyweight of all time'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Train in the world\'s most complete combat sport with our expert coaches.',
          joinButton: 'Join MMA Training'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'No-Gi Grappling',
        hero: {
          subtitle: 'Fast-paced submission grappling without the traditional gi'
        },
        overview: {
          title: 'Modern Grappling',
          paragraphs: [
            'No-gi grappling, also known as submission grappling, is a form of wrestling that allows submission holds. Without the traditional gi (uniform), grapplers rely on speed, athleticism, and modern techniques to control and submit their opponents.',
            'This dynamic sport has evolved rapidly, incorporating techniques from wrestling, Brazilian Jiu-Jitsu, judo, and sambo. At Sport Academy, our grappling program focuses on the most effective modern techniques and strategies used in today\'s competition scene.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Master the essential skills of modern grappling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single and double leg takedowns',
              'Throws and trips',
              'Sprawls and defensive wrestling',
              'Cage work and wall wrestling'
            ]
          },
          control: {
            title: 'Control Positions',
            items: [
              'Top control and pressure',
              'Back control techniques',
              'Leg entanglements',
              'Transitional control'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Leg locks and heel hooks',
              'Chokes and strangles',
              'Arm locks and shoulder attacks',
              'Submission chains'
            ]
          }
        },
        methodology: {
          title: 'Training Methodology',
          subtitle: 'Our approach to developing complete grapplers',
          technical: {
            title: 'Technical Development',
            methods: [
              {
                title: 'Position-based drilling',
                description: 'Master specific positions and transitions'
              },
              {
                title: 'Flow rolling',
                description: 'Develop smooth transitions and timing'
              },
              {
                title: 'Situational sparring',
                description: 'Practice specific scenarios and positions'
              }
            ]
          },
          conditioning: {
            title: 'Physical Conditioning',
            methods: [
              {
                title: 'Grappling-specific fitness',
                description: 'Build endurance for long matches'
              },
              {
                title: 'Strength and mobility',
                description: 'Develop functional strength and flexibility'
              },
              {
                title: 'Recovery protocols',
                description: 'Proper warm-up and cool-down routines'
              }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Why choose grappling at Sport Academy',
          items: [
            {
              icon: '⚡',
              title: 'Athletic Development',
              description: 'Improve speed, agility, and coordination'
            },
            {
              icon: '🧩',
              title: 'Problem Solving',
              description: 'Develop tactical thinking and adaptability'
            },
            {
              icon: '💯',
              title: 'Competition Skills',
              description: 'Prepare for grappling tournaments'
            },
            {
              icon: '🔥',
              title: 'Intense Workout',
              description: 'High-intensity training for maximum fitness'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'Join our no-gi grappling classes'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Athletes who defined modern grappling',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominant no-gi grappler and leg lock specialist'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Submission Master',
              description: 'Multiple-time ADCC champion known for technical excellence'
            },
            {
              name: 'John Danaher',
              title: 'The Philosopher',
              description: 'Revolutionary coach who modernized leg lock systems'
            }
          ]
        },
        cta: {
          title: 'Master Modern Grappling',
          description: 'Learn the most effective grappling techniques in our dynamic no-gi program.',
          joinButton: 'Join Grappling Classes'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Where Champions Are Made',
      copyright: '© 2024 Sport Academy. All rights reserved.'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      classes: 'Kurse',
      schedule: 'Stundenplan',
      coaches: 'Trainer',
      membership: 'Mitgliedschaft',
      contact: 'Kontakt'
    },
    common: {
      joinNow: 'Jetzt Beitreten',
      viewClasses: 'Kurse Ansehen',
      viewSchedule: 'Stundenplan Ansehen',
      viewMembership: 'Mitgliedschaft Ansehen',
      contactUs: 'Kontakt',
      learnMore: 'Mehr Erfahren',
      allLevels: 'Alle Stufen',
      ages: 'Alter',
      joinSportAcademy: 'Sport Academy Beitreten',
      callNow: 'Jetzt Anrufen',
      registerOnline: 'Online Registrieren',
      bookClasses: 'Kurse Buchen',
      visitUs: 'Besuchen Sie Uns',
      dropInWelcome: 'Spontanbesuche Willkommen',
      duringTrainingHours: 'Während der Trainingszeiten',
      responseWithin2Hours: 'Antwort innerhalb 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates & DMs',
      instantConfirmation: 'Sofortige Bestätigung'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Elite MMA, Brazilian Jiu-Jitsu und Grappling Training in Campo Tures und Bruneck. Transformiere Körper, Geist und Seele mit professionellem Coaching.'
      },
      welcome: {
        title: 'Willkommen bei Sport Academy',
        description: 'Wo Champions durch Hingabe, Disziplin und Expertenunterricht geschmiedet werden. Unsere Akademie bietet Weltklasse-Training in mehreren Kampfsportdisziplinen.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Bewährte Erfolgsbilanz in der Entwicklung qualifizierter Kampfsportler',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Einrichtungen in Campo Tures und Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'Umfassendes Kampfsport-Curriculum',
        exploreClasses: 'Unsere Kurse Erkunden'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Meistere die Kampfkunst durch unsere spezialisierten Programme'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training mit Schlag-, Grappling- und Bodenkampftechniken.'
      },
      bjj: {
        description: 'Brazilian Jiu-Jitsu mit Fokus auf Bodenkampf, Aufgabegriffe und hebelbasierte Techniken.'
      },
      grappling: {
        description: 'No-Gi Grappling mit Betonung auf Takedowns, Kontrollpositionen und Aufgabegriffen.'
      },
      getStarted: {
        title: 'Heute Beginnen',
        subtitle: 'Deine Kampfsport-Reise beginnt hier'
      },
      quickLinks: {
        viewClasses: 'Kurse Ansehen',
        viewClassesDesc: 'Erkunde unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan Prüfen',
        checkScheduleDesc: 'Finde deine perfekte Trainingszeit',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wähle dein Trainingspaket',
        contactUs: 'Kontakt',
        contactUsDesc: 'Nimm Kontakt mit unserem Team auf'
      }
    },
    classes: {
      hero: {
        title: 'Unsere Kurse',
        description: 'Umfassende Kampfsport-Trainingsprogramme für alle Könnensstufen. Von Anfängern bis zu fortgeschrittenen Praktizierenden haben wir den perfekten Kurs für deine Reise.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Komplettes Kampftraining mit Schlag-, Wrestling- und Bodenkampftechniken. Lerne die effektivsten Techniken aus mehreren Kampfsportdisziplinen.',
        features: [
          'Stand-up Schlagtechniken',
          'Wrestling und Takedowns',
          'Bodenkampf und Aufgabegriffe',
          'Käfigarbeit und Clinch-Kampf',
          'Konditions- und Fitnesstraining'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Die sanfte Kunst mit Fokus auf Hebel, Technik und Strategie. Perfekt für Selbstverteidigung und Wettkampf-Grappling.',
        features: [
          'Guard-Arbeit und Sweeps',
          'Aufgabetechniken',
          'Positionskontrolle',
          'Selbstverteidigungsanwendungen',
          'Wettkampfvorbereitung'
        ]
      },
      grappling: {
        title: 'No-Gi Grappling',
        description: 'Schnelles Grappling ohne traditionellen Gi, mit Betonung auf Geschwindigkeit, Athletik und modernen Techniken.',
        features: [
          'Takedown-Techniken',
          'Beinschlösser und Heel Hooks',
          'Rückenkontrolle und Würgegriffe',
          'Scrambles und Übergänge',
          'Wettkampfstrategien'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Spaßige und sichere Brazilian Jiu-Jitsu Kurse speziell für Kinder, die Selbstvertrauen, Disziplin und körperliche Fitness aufbauen.',
        features: [
          'Altersgerechte Techniken',
          'Charakterentwicklung',
          'Anti-Mobbing-Strategien',
          'Körperliche Fitness und Koordination',
          'Spaßige Spiele und Aktivitäten'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Dynamische Grappling-Kurse für junge Athleten mit Fokus auf Wrestling und Submission Grappling Grundlagen.',
        features: [
          'Wrestling-Grundlagen',
          'Grundlegende Aufgabegriffe',
          'Takedown-Techniken',
          'Kraft und Kondition',
          'Wettkampfmentalität entwickeln'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelles Wrestling-Training mit Fokus auf Takedowns, Kontrolle und Kondition. Essentiell für MMA und Grappling.',
        features: [
          'Single und Double Leg Takedowns',
          'Sprawls und Verteidigungstechniken',
          'Top-Kontrolle und Pins',
          'Konditionsübungen',
          'Mentales Härtetraining'
        ]
      },
      whatYouLearn: 'Was Du Lernst',
      cta: {
        title: 'Bereit Zu Trainieren?',
        description: 'Tritt unserer Gemeinschaft engagierter Kampfsportler bei und beginne heute deine Transformation.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne unsere Weltklasse-Instruktoren kennen, die jahrelange Erfahrung, Wettkampferfolg und Leidenschaft für das Unterrichten in jeden Kurs einbringen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 15 Jahren Kampfsporterfahrung ist Matteo ein engagierter Praktiker und Instruktor für Brazilian Jiu-Jitsu und MMA. Seine Reise begann in traditionellen Kampfkünsten, bevor er zu modernen Kampfsportarten wechselte.',
        specializations: [
          'Brazilian Jiu-Jitsu (Brauner Gürtel)',
          'Mixed Martial Arts',
          'Grappling und Wrestling',
          'Wettkampf-Coaching'
        ],
        achievements: [
          'Mehrere BJJ-Turniermedaillen',
          'Zertifizierter BJJ-Instruktor',
          'MMA-Wettkampferfahrung',
          '8+ Jahre Unterrichtserfahrung'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Schlag- & Grappling-Instruktor',
        background: 'Christian bringt eine Fülle von Kampfsporterfahrung zur Sport Academy. Seine Expertise erstreckt sich über mehrere Disziplinen und macht ihn zu einem unschätzbaren Wert für unser Trainerteam.',
        specializations: [
          'Schlagtechniken und Stand-up Kampf',
          'Brazilian Jiu-Jitsu',
          'Mixed Martial Arts',
          'Wettkampfvorbereitung'
        ],
        achievements: [
          'Mehrere Wettkampfmedaillen',
          'Mehrere MMA-Kämpfe',
          'Zertifizierter Kampfsport-Instruktor',
          'Aktiver Wettkämpfer und Trainer'
        ]
      },
      background: 'Hintergrund',
      specializations: 'Spezialisierungen',
      achievements: 'Erfolge',
      philosophy: {
        title: 'Unsere Trainingsphilosophie',
        technical: {
          title: 'Technische Exzellenz',
          description: 'Wir konzentrieren uns auf richtige Technik und Grundlagen und stellen sicher, dass jeder Schüler eine solide Basis für langfristigen Erfolg aufbaut.'
        },
        individual: {
          title: 'Individuelle Entwicklung',
          description: 'Jeder Schüler ist einzigartig. Wir passen unseren Unterricht an, um jeder Person zu helfen, ihre persönlichen Ziele und ihr Potenzial zu erreichen.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir vermitteln die Werte von Respekt, Disziplin und Demut, die für Kampfkünste und das Leben wesentlich sind.'
        }
      },
      cta: {
        title: 'Trainiere Mit Den Besten',
        description: 'Lerne von erfahrenen Trainern, die sich deinem Erfolg und deiner Entwicklung verpflichtet haben.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finde die perfekte Zeit zum Trainieren mit unserem umfassenden Stundenplan an beiden Standorten. Alle Kurse sind in deiner Mitgliedschaft enthalten.'
      },
      campoTures: 'Campo Tures',
      brunico: 'Bruneck',
      monday: 'Montag',
      tuesday: 'Dienstag',
      wednesday: 'Mittwoch',
      thursday: 'Donnerstag',
      friday: 'Freitag',
      mma: 'MMA',
      bjj: 'BJJ',
      grappling: 'Grappling',
      wrestling: 'Wrestling',
      striking: 'Schlagtechniken',
      openMat: 'Freies Training',
      importantInfo: 'Wichtige Informationen',
      classGuidelines: 'Kursrichtlinien',
      guidelines: {
        arrive: '10 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'BJJ-Kurse erfordern einen Gi (Uniform)',
        noGi: 'Grappling-Kurse sind No-Gi (Shorts und Rash Guard)'
      },
      membershipBenefits: 'Mitgliedschaftsvorteile',
      benefits: {
        allClasses: 'Zugang zu allen Kursen an beiden Standorten',
        openMat: 'Kostenlose freie Trainingseinheiten',
        bothLocations: 'Training in Campo Tures und Bruneck',
        personalTraining: 'Ermäßigte Einzeltrainingseinheiten'
      },
      cta: {
        title: 'Bereit Für Einen Kurs?',
        description: 'Buche deinen Platz in einem unserer Kurse und beginne heute deine Kampfsport-Reise.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle den perfekten Mitgliedschaftsplan für deine Trainingsziele. Alle Pläne beinhalten Zugang zu beiden Standorten und allen Kursen.'
      },
      mainSeason: {
        title: 'Hauptsaison',
        period: 'September - Juni',
        duration: '10 Monate Training',
        mostPopular: 'Am Beliebtesten'
      },
      summerSeason: {
        title: 'Sommersaison',
        period: 'Juli - August',
        duration: '2,5 Monate Training'
      },
      bjjOnly: {
        title: 'Nur BJJ Mitgliedschaft',
        subtitle: 'Perfekt für diejenigen, die sich ausschließlich auf Brazilian Jiu-Jitsu konzentrieren möchten',
        program: 'BJJ-Fokussiertes Training',
        description: 'Zugang zu allen BJJ-Kursen an beiden Standorten'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was Enthalten Ist',
      mainIncludes: [
        'Alle Kurse an beiden Standorten',
        'MMA, BJJ, Grappling, Wrestling',
        'Freie Trainingseinheiten',
        'Wettkampfteam-Zugang',
        'Ausrüstungslagerung'
      ],
      summerIncludes: [
        'Alle Sommerkurse',
        'Campo Tures und Bruneck',
        'Flexibler Stundenplan',
        'Freier Trainings-Zugang',
        'Ausrüstungslagerung'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse (Gi und No-Gi)',
        'Beide Standorte enthalten',
        'Freie Trainingseinheiten',
        'Wettkampfvorbereitung',
        'Gürtel-Fortschrittssystem'
      ],
      selectMainSeason: 'Hauptsaison Wählen',
      selectSummerSeason: 'Sommersaison Wählen',
      selectBjjOnly: 'Nur BJJ Wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessere dein Training mit unseren spezialisierten Dienstleistungen und persönlichen Coaching-Optionen.'
      },
      personalTraining: {
        title: 'Einzeltraining',
        description: 'Eins-zu-eins Coaching, zugeschnitten auf deine spezifischen Ziele und Bedürfnisse.',
        price: '€50',
        duration: 'pro Einheit (60 Min)'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training zur Vorbereitung auf Turniere und Wettkämpfe.',
        price: '€40',
        duration: 'pro Einheit (90 Min)'
      },
      seminars: {
        title: 'Seminare',
        description: 'Spezielle Workshops mit Gastinstruktoren und fortgeschrittenen Techniken.',
        price: '€30',
        duration: 'pro Seminar (2-3 Stunden)'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Die Hauptsaison (September-Juni) bietet unser vollständiges Curriculum mit 10 Monaten Training. Die Sommersaison (Juli-August) ist ein kürzeres, flexibleres Programm, perfekt um Fähigkeiten während der Pause zu erhalten.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu Kursen an beiden Standorten Campo Tures und Bruneck. Du kannst je nach deinem Zeitplan mischen und anpassen.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Absolut! Wir bieten eine kostenlose Probestunde für neue Schüler an. Kontaktiere uns, um deine erste Einheit zu planen und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Anfänger nur bequeme Trainingskleidung. Wir stellen Grundausrüstung für Probestunden zur Verfügung. Mit fortschreitendem Training benötigst du einen Gi für BJJ-Kurse und entsprechende Ausrüstung für andere Disziplinen.'
        }
      },
      cta: {
        title: 'Beginne Heute Deine Reise',
        description: 'Wähle deinen Mitgliedschaftsplan und tritt unserer Gemeinschaft engagierter Kampfsportler bei.'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Bereit, deine Kampfsport-Reise zu beginnen? Nimm Kontakt mit uns auf, um mehr über unsere Programme zu erfahren, eine Probestunde zu vereinbaren oder Fragen zu stellen.'
      },
      getInTouch: {
        title: 'Kontakt Aufnehmen',
        subtitle: 'Mehrere Wege, um mit Sport Academy in Verbindung zu treten'
      },
      callUs: 'Anrufen',
      instagram: 'Instagram',
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Standorte in Südtirol'
      },
      parkingAccessibility: {
        title: 'Parken & Erreichbarkeit',
        subtitle: 'Einfacher Zugang und bequemes Parken an beiden Standorten'
      },
      parking: 'Parken',
      publicTransport: 'Öffentliche Verkehrsmittel',
      accessibility: 'Erreichbarkeit',
      campoTures: {
        parking: 'Kostenlose Parkplätze stehen direkt vor dem Eingang zur Verfügung, mit zusätzlichen Plätzen in der Nähe. E-Ladestation etwa 200 Meter entfernt.',
        transport: 'Die Haltestelle "Campo Tures Centro" ist nur 2 Gehminuten entfernt. Mehrere Buslinien halten hier, einschließlich 450, 451 und 452, die regelmäßige Verbindungen nach Bruneck, zu lokalen Dörfern und den umliegenden Tälern bieten.',
        accessibility: 'Das Fitnessstudio ist zu Fuß, mit dem Auto oder öffentlichen Verkehrsmitteln leicht zu erreichen. Gelegen in einem breiten, flachen und gut beleuchteten Bereich — perfekt für das Abendtraining.'
      },
      brunico: {
        parking: 'Kostenlose Straßenparkplätze entlang der Via Riedl und nahegelegenen Straßen verfügbar. Während der Stoßzeiten sind öffentliche Garagen und kostenpflichtige Blaue-Zone-Parkplätze nur 5 Gehminuten entfernt.',
        transport: 'Der Bahnhof Bruneck Nord ist nur 2 Gehminuten vom Fitnessstudio entfernt — perfekt, wenn Sie aus San Candido, Fortezza oder irgendwo im Tal kommen. Es gibt auch eine nahegelegene Bushaltestelle mit städtischen und regionalen Verbindungen.',
        accessibility: 'Das Fitnessstudio befindet sich in einer ruhigen, flachen Gegend mit einem kurzen, direkten Weg von allen nahegelegenen Verkehrshaltestellen. Leicht zu erreichen, auch mit Ausrüstung oder Trainingstaschen.'
      },
      visitRequirements: {
        title: 'Erstbesucher',
        subtitle: 'Was zu erwarten ist und was für deine erste Stunde mitzubringen ist'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was Mitbringen',
      whatWeProvide: 'Was Wir Bereitstellen',
      bring: [
        'Bequeme Trainingskleidung',
        'Wasserflasche',
        'Handtuch',
        'Positive Einstellung und Lernbereitschaft'
      ],
      provide: [
        'Grundlegende Trainingsausrüstung für Probestunden',
        'Saubere und sichere Trainingsumgebung',
        'Professioneller Unterricht',
        'Unterstützende Gemeinschaftsatmosphäre'
      ],
      specialInstructions: 'Besondere Anweisungen',
      instructions: {
        age: 'Altersanforderungen: Mindestalter 6 für Kinderkurse, 16+ für Erwachsenenkurse',
        health: 'Gesundheit: Bitte informiere uns über Verletzungen oder Gesundheitszustände',
        equipment: 'Ausrüstung: Wir stellen Handschuhe und Schienbeinschoner zur Verfügung, aber Schüler sollten ihre eigenen kaufen',
        payment: 'Zahlung: Nur Karten- und Barzahlungen werden akzeptiert'
      },
      cta: {
        title: 'Bereit Zu Beginnen?',
        description: 'Kontaktiere uns heute, um deine erste Stunde zu vereinbaren und deine Kampfsport-Reise zu beginnen.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Meistere die sanfte Kunst der Hebel, Technik und Strategie'
        },
        overview: {
          title: 'Die Sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Aufgabegriffe konzentriert. Oft als "die sanfte Kunst" bezeichnet, betont BJJ Technik, Hebel und Timing über rohe Kraft, was es für Praktizierende aller Größen und Altersgruppen zugänglich macht.',
            'Bei Sport Academy ist unser BJJ-Programm darauf ausgelegt, dir die grundlegenden Prinzipien dieser unglaublichen Kampfkunst beizubringen, während es deine körperliche Fitness, mentale Härte und Selbstvertrauen aufbaut. Ob du dich für Selbstverteidigung, Wettkampf oder einfach nur für die Fitness interessierst, BJJ bietet für jeden etwas.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Meistere die grundlegenden Fähigkeiten des Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard-Arbeit',
            items: [
              'Closed Guard Grundlagen',
              'Open Guard Variationen',
              'Guard Sweeps und Übergänge',
              'Guard Retention Techniken'
            ]
          },
          submissions: {
            title: 'Aufgabegriffe',
            items: [
              'Würgegriffe und Strangulationen',
              'Gelenkschlösser und Armbars',
              'Beinschlösser und Heel Hooks',
              'Aufgabegriff-Ketten'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Seitenkontrolle',
              'Rückenkontrolle Techniken',
              'Knee on Belly',
              'Übergangsbewegungen'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Gürtelsystem',
          subtitle: 'Fortschritt durch das traditionelle Ranking-System',
          philosophy: {
            title: 'Gürtel-Philosophie',
            description: 'Das BJJ-Gürtelsystem repräsentiert nicht nur technisches Wissen, sondern auch Charakterentwicklung, Ausdauer und Hingabe zur Kunst. Jede Gürtelstufe erfordert Jahre konsequenten Trainings und demonstriert die Beherrschung zunehmend komplexer Techniken.'
          }
        },
        history: {
          title: 'Geschichte & Abstammung',
          paragraphs: [
            'Brazilian Jiu-Jitsu entwickelte sich aus traditionellem japanischem Jujutsu und Judo, das von Mitsuyo Maeda im frühen 20. Jahrhundert nach Brasilien gebracht wurde. Die Gracie-Familie, insbesondere Helio Gracie, passte diese Techniken an, um ein effektiveres System für kleinere Praktizierende zu schaffen.',
            'Die Kunst erlangte weltweite Anerkennung durch die frühen UFC-Veranstaltungen, wo Royce Gracie die Wirksamkeit von BJJ gegen größere, stärkere Gegner aus anderen Kampfkunst-Hintergründen demonstrierte.'
          ],
          keyFigures: {
            title: 'Schlüsselfiguren',
            people: [
              {
                name: 'Mitsuyo Maeda',
                description: 'Japanischer Judoka, der Jujutsu nach Brasilien brachte'
              },
              {
                name: 'Helio Gracie',
                description: 'Gründer des Gracie Jiu-Jitsu und BJJ-Pionier'
              },
              {
                name: 'Royce Gracie',
                description: 'UFC-Champion, der BJJs Wirksamkeit bewies'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ Trainingsplan',
          subtitle: 'Tritt unseren regelmäßigen BJJ-Kursen an beiden Standorten bei'
        },
        cta: {
          title: 'Beginne Deine BJJ-Reise',
          description: 'Erlebe die sanfte Kunst, die Millionen von Leben weltweit transformiert hat.',
          joinButton: 'BJJ-Kursen Beitreten'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der alle Kampfkunstdisziplinen kombiniert'
        },
        overview: {
          title: 'Der Komplette Kämpfer',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der vollständigste Kampfsport, der Techniken aus Boxen, Wrestling, Brazilian Jiu-Jitsu, Muay Thai und anderen Kampfkünsten kombiniert. MMA-Kämpfer müssen in Schlagtechniken, Grappling und Bodenkampf versiert sein, um auf höchstem Niveau zu konkurrieren.',
            'Unser MMA-Programm bei Sport Academy bietet umfassendes Training in allen Aspekten der Mixed Martial Arts. Ob du für Fitness, Selbstverteidigung oder Wettkampf trainierst, unsere erfahrenen Trainer helfen dir, die Fähigkeiten und Kondition zu entwickeln, die du zum Erfolg benötigst.'
          ]
        },
        techniques: {
          title: 'Kerndisziplinen',
          subtitle: 'Meistere alle Aspekte des Mixed Martial Arts Kampfes',
          striking: {
            title: 'Schlagtechniken',
            items: [
              'Box-Grundlagen',
              'Muay Thai Kicks und Knees',
              'Fußarbeit und Bewegung',
              'Verteidigungstechniken'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken',
              'Sprawls und defensives Wrestling',
              'Käfigarbeit und Clinch-Kampf',
              'Bodenkontrolle'
            ]
          },
          groundGame: {
            title: 'Bodenkampf',
            items: [
              'Brazilian Jiu-Jitsu Techniken',
              'Ground and Pound',
              'Aufgabegriff-Verteidigung',
              'Übergänge und Fluchten'
            ]
          }
        },
        history: {
          title: 'Evolution von MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit der Ultimate Fighting Championship (UFC) im Jahr 1993. Frühe Veranstaltungen zeigten Kämpfer aus verschiedenen Kampfkunst-Hintergründen, die konkurrierten, um den effektivsten Kampfstil zu bestimmen.',
            'Mit der Zeit erkannten Kämpfer, dass sie in allen Aspekten des Kampfes vielseitig sein mussten. Dies führte zur Evolution von MMA, wie wir es heute kennen, wo Kämpfer in mehreren Disziplinen trainieren, um komplette Kampfkünstler zu werden.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erste UFC-Veranstaltung demonstriert Wirksamkeit verschiedener Kampfkünste'
              },
              {
                year: '2001',
                description: 'Einheitliche MMA-Regeln für Kämpfersicherheit etabliert'
              },
              {
                year: '2016',
                description: 'MMA wird Mainstream mit globaler Fernsehübertragung'
              }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Warum MMA bei Sport Academy trainieren',
          items: [
            {
              icon: '💪',
              title: 'Komplette Fitness',
              description: 'Ganzkörper-Kondition und Krafttraining'
            },
            {
              icon: '🧠',
              title: 'Mentale Härte',
              description: 'Entwickle Selbstvertrauen und mentale Widerstandsfähigkeit'
            },
            {
              icon: '🥊',
              title: 'Selbstverteidigung',
              description: 'Lerne praktische Selbstverteidigungstechniken'
            },
            {
              icon: '🏆',
              title: 'Wettkampfbereit',
              description: 'Vorbereitung auf Amateur- und Profi-Wettkämpfe'
            }
          ]
        },
        schedule: {
          title: 'MMA Trainingsplan',
          subtitle: 'Tritt unserem umfassenden MMA-Programm bei'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Kämpfer, die den Sport prägten',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC-Pionier',
              description: 'Bewies die Wirksamkeit von Brazilian Jiu-Jitsu in der frühen UFC'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Am längsten regierender UFC-Mittelgewichts-Champion'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Von vielen als der größte Schwergewichtler aller Zeiten betrachtet'
            }
          ]
        },
        cta: {
          title: 'Werde Ein Kompletter Kämpfer',
          description: 'Trainiere im vollständigsten Kampfsport der Welt mit unseren Expertentrainern.',
          joinButton: 'MMA-Training Beitreten'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'No-Gi Grappling',
        hero: {
          subtitle: 'Schnelles Submission Grappling ohne traditionellen Gi'
        },
        overview: {
          title: 'Modernes Grappling',
          paragraphs: [
            'No-Gi Grappling, auch bekannt als Submission Grappling, ist eine Form des Wrestlings, die Aufgabegriffe erlaubt. Ohne den traditionellen Gi (Uniform) verlassen sich Grappler auf Geschwindigkeit, Athletik und moderne Techniken, um ihre Gegner zu kontrollieren und zur Aufgabe zu zwingen.',
            'Dieser dynamische Sport hat sich schnell entwickelt und Techniken aus Wrestling, Brazilian Jiu-Jitsu, Judo und Sambo integriert. Bei Sport Academy konzentriert sich unser Grappling-Programm auf die effektivsten modernen Techniken und Strategien, die in der heutigen Wettkampfszene verwendet werden.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Meistere die wesentlichen Fähigkeiten des modernen Grapplings',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single und Double Leg Takedowns',
              'Würfe und Trips',
              'Sprawls und defensives Wrestling',
              'Käfigarbeit und Wandwrestling'
            ]
          },
          control: {
            title: 'Kontrollpositionen',
            items: [
              'Top-Kontrolle und Druck',
              'Rückenkontrolle Techniken',
              'Beinverschränkungen',
              'Übergangskontrolle'
            ]
          },
          submissions: {
            title: 'Aufgabegriffe',
            items: [
              'Beinschlösser und Heel Hooks',
              'Würgegriffe und Strangulationen',
              'Armschlösser und Schulterangriffe',
              'Aufgabegriff-Ketten'
            ]
          }
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Unser Ansatz zur Entwicklung kompletter Grappler',
          technical: {
            title: 'Technische Entwicklung',
            methods: [
              {
                title: 'Positionsbasiertes Drilling',
                description: 'Meistere spezifische Positionen und Übergänge'
              },
              {
                title: 'Flow Rolling',
                description: 'Entwickle fließende Übergänge und Timing'
              },
              {
                title: 'Situatives Sparring',
                description: 'Übe spezifische Szenarien und Positionen'
              }
            ]
          },
          conditioning: {
            title: 'Körperliche Kondition',
            methods: [
              {
                title: 'Grappling-spezifische Fitness',
                description: 'Baue Ausdauer für lange Kämpfe auf'
              },
              {
                title: 'Kraft und Mobilität',
                description: 'Entwickle funktionale Kraft und Flexibilität'
              },
              {
                title: 'Erholungsprotokolle',
                description: 'Richtige Aufwärm- und Abkühlungsroutinen'
              }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Warum Grappling bei Sport Academy wählen',
          items: [
            {
              icon: '⚡',
              title: 'Athletische Entwicklung',
              description: 'Verbessere Geschwindigkeit, Agilität und Koordination'
            },
            {
              icon: '🧩',
              title: 'Problemlösung',
              description: 'Entwickle taktisches Denken und Anpassungsfähigkeit'
            },
            {
              icon: '💯',
              title: 'Wettkampffähigkeiten',
              description: 'Vorbereitung auf Grappling-Turniere'
            },
            {
              icon: '🔥',
              title: 'Intensives Training',
              description: 'Hochintensives Training für maximale Fitness'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Stundenplan',
          subtitle: 'Tritt unseren No-Gi Grappling-Kursen bei'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Athleten, die modernes Grappling definierten',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'ADCC-Champion',
              description: 'Dominanter No-Gi Grappler und Beinschloss-Spezialist'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Submission-Meister',
              description: 'Mehrfacher ADCC-Champion bekannt für technische Exzellenz'
            },
            {
              name: 'John Danaher',
              title: 'Der Philosoph',
              description: 'Revolutionärer Trainer, der Beinschloss-Systeme modernisierte'
            }
          ]
        },
        cta: {
          title: 'Meistere Modernes Grappling',
          description: 'Lerne die effektivsten Grappling-Techniken in unserem dynamischen No-Gi Programm.',
          joinButton: 'Grappling-Kursen Beitreten'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Wo Champions Gemacht Werden',
      copyright: '© 2024 Sport Academy. Alle Rechte vorbehalten.'
    }
  },
  it: {
    nav: {
      home: 'Home',
      classes: 'Corsi',
      schedule: 'Orari',
      coaches: 'Istruttori',
      membership: 'Abbonamenti',
      contact: 'Contatti'
    },
    common: {
      joinNow: 'Iscriviti Ora',
      viewClasses: 'Vedi Corsi',
      viewSchedule: 'Vedi Orari',
      viewMembership: 'Vedi Abbonamenti',
      contactUs: 'Contattaci',
      learnMore: 'Scopri di Più',
      allLevels: 'Tutti i Livelli',
      ages: 'Età',
      joinSportAcademy: 'Unisciti a Sport Academy',
      callNow: 'Chiama Ora',
      registerOnline: 'Registrati Online',
      bookClasses: 'Prenota Lezioni',
      visitUs: 'Visitaci',
      dropInWelcome: 'Visite Spontanee Benvenute',
      duringTrainingHours: 'Durante gli orari di allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM',
      instantConfirmation: 'Conferma istantanea'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Allenamento d\'élite di MMA, Brazilian Jiu-Jitsu e Grappling a Campo Tures e Brunico. Trasforma il tuo corpo, mente e spirito con coaching professionale.'
      },
      welcome: {
        title: 'Benvenuti a Sport Academy',
        description: 'Dove i campioni vengono forgiati attraverso dedizione, disciplina e istruzione esperta. La nostra accademia offre allenamento di classe mondiale in multiple discipline di arti marziali.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Comprovata esperienza nello sviluppo di artisti marziali qualificati',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Strutture a Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'Curriculum completo di arti marziali',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come Un Combattente',
        subtitle: 'Padroneggia l\'arte del combattimento attraverso i nostri programmi specializzati'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, grappling e combattimento a terra.'
      },
      bjj: {
        description: 'Brazilian Jiu-Jitsu incentrato sul combattimento a terra, sottomissioni e tecniche basate sulla leva.'
      },
      grappling: {
        description: 'Grappling senza gi che enfatizza takedown, posizioni di controllo e prese di sottomissione.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Il tuo viaggio nelle arti marziali inizia qui'
      },
      quickLinks: {
        viewClasses: 'Vedi Corsi',
        viewClassesDesc: 'Esplora i nostri programmi di allenamento',
        checkSchedule: 'Controlla Orari',
        checkScheduleDesc: 'Trova il tuo orario di allenamento perfetto',
        membershipPlans: 'Piani di Abbonamento',
        membershipPlansDesc: 'Scegli il tuo pacchetto di allenamento',
        contactUs: 'Contattaci',
        contactUsDesc: 'Mettiti in contatto con il nostro team'
      }
    },
    classes: {
      hero: {
        title: 'I Nostri Corsi',
        description: 'Programmi di allenamento completi di arti marziali progettati per tutti i livelli di abilità. Dai principianti ai praticanti avanzati, abbiamo il corso perfetto per il tuo viaggio.'
      },
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Allenamento di combattimento completo che combina striking, wrestling e combattimento a terra. Impara le tecniche più efficaci da multiple discipline di arti marziali.',
        features: [
          'Tecniche di striking in piedi',
          'Wrestling e takedown',
          'Combattimento a terra e sottomissioni',
          'Lavoro in gabbia e clinch fighting',
          'Allenamento di condizionamento e fitness'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'L\'arte gentile che si concentra su leva, tecnica e strategia. Perfetto per autodifesa e grappling competitivo.',
        features: [
          'Lavoro di guardia e sweep',
          'Tecniche di sottomissione',
          'Controllo posizionale',
          'Applicazioni di autodifesa',
          'Preparazione per competizioni'
        ]
      },
      grappling: {
        title: 'Grappling No-Gi',
        description: 'Grappling veloce senza il gi tradizionale, che enfatizza velocità, atletismo e tecniche moderne.',
        features: [
          'Tecniche di takedown',
          'Leg lock e heel hook',
          'Controllo della schiena e strangolamenti',
          'Scramble e transizioni',
          'Strategie competitive'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Corsi di Brazilian Jiu-Jitsu divertenti e sicuri progettati specificamente per bambini, costruendo fiducia, disciplina e fitness fisico.',
        features: [
          'Tecniche appropriate per l\'età',
          'Sviluppo del carattere',
          'Strategie anti-bullismo',
          'Fitness fisico e coordinazione',
          'Giochi e attività divertenti'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Corsi di grappling dinamici per giovani atleti, incentrati sui fondamentali del wrestling e submission grappling.',
        features: [
          'Fondamentali del wrestling',
          'Prese di sottomissione di base',
          'Tecniche di takedown',
          'Forza e condizionamento',
          'Sviluppo della mentalità competitiva'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Allenamento di wrestling tradizionale incentrato su takedown, controllo e condizionamento. Essenziale per MMA e grappling.',
        features: [
          'Takedown single e double leg',
          'Sprawl e tecniche difensive',
          'Controllo superiore e pin',
          'Esercizi di condizionamento',
          'Allenamento della durezza mentale'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Pronto a Iniziare l\'Allenamento?',
        description: 'Unisciti alla nostra comunità di artisti marziali dedicati e inizia la tua trasformazione oggi.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Incontra i nostri istruttori di classe mondiale che portano anni di esperienza, successo competitivo e passione per l\'insegnamento in ogni lezione.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore & Fondatore',
        background: 'Con oltre 15 anni di esperienza nelle arti marziali, Matteo è un praticante e istruttore dedicato di Brazilian Jiu-Jitsu e MMA. Il suo viaggio è iniziato nelle arti marziali tradizionali prima di passare agli sport da combattimento moderni.',
        specializations: [
          'Brazilian Jiu-Jitsu (Cintura Marrone)',
          'Arti Marziali Miste',
          'Grappling e Wrestling',
          'Coaching Competitivo'
        ],
        achievements: [
          'Multiple medaglie in tornei BJJ',
          'Istruttore BJJ certificato',
          'Esperienza competitiva MMA',
          '8+ anni di esperienza nell\'insegnamento'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore di Striking & Grappling',
        background: 'Christian porta una ricchezza di esperienza negli sport da combattimento alla Sport Academy. La sua competenza si estende su multiple discipline, rendendolo una risorsa inestimabile per il nostro team di coaching.',
        specializations: [
          'Striking e Combattimento in Piedi',
          'Brazilian Jiu-Jitsu',
          'Arti Marziali Miste',
          'Preparazione Competitiva'
        ],
        achievements: [
          'Multiple medaglie competitive',
          'Multipli match MMA',
          'Istruttore di arti marziali certificato',
          'Competitore attivo e coach'
        ]
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      philosophy: {
        title: 'La Nostra Filosofia di Coaching',
        technical: {
          title: 'Eccellenza Tecnica',
          description: 'Ci concentriamo sulla tecnica corretta e sui fondamentali, assicurando che ogni studente costruisca una base solida per il successo a lungo termine.'
        },
        individual: {
          title: 'Crescita Individuale',
          description: 'Ogni studente è unico. Adattiamo la nostra istruzione per aiutare ogni persona a raggiungere i propri obiettivi personali e il potenziale.'
        },
        respect: {
          title: 'Rispetto & Disciplina',
          description: 'Instilliamo i valori di rispetto, disciplina e umiltà che sono essenziali per le arti marziali e la vita.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Impara da istruttori esperti che sono impegnati nel tuo successo e sviluppo.'
      }
    },
    schedule: {
      hero: {
        title: 'Orario di Allenamento',
        description: 'Trova il momento perfetto per allenarti con il nostro orario completo in entrambe le sedi. Tutte le lezioni sono incluse nel tuo abbonamento.'
      },
      campoTures: 'Campo Tures',
      brunico: 'Brunico',
      monday: 'Lunedì',
      tuesday: 'Martedì',
      wednesday: 'Mercoledì',
      thursday: 'Giovedì',
      friday: 'Venerdì',
      mma: 'MMA',
      bjj: 'BJJ',
      grappling: 'Grappling',
      wrestling: 'Wrestling',
      striking: 'Striking',
      openMat: 'Tatami Libero',
      importantInfo: 'Informazioni Importanti',
      classGuidelines: 'Linee Guida delle Lezioni',
      guidelines: {
        arrive: 'Arriva 10 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'Le lezioni BJJ richiedono un gi (uniforme)',
        noGi: 'Le lezioni di grappling sono no-gi (pantaloncini e rash guard)'
      },
      membershipBenefits: 'Benefici dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutte le lezioni in entrambe le sedi',
        openMat: 'Sessioni di tatami libero gratuite',
        bothLocations: 'Allenamento a Campo Tures e Brunico',
        personalTraining: 'Sessioni di allenamento personale scontate'
      },
      cta: {
        title: 'Pronto a Unirti a una Lezione?',
        description: 'Prenota il tuo posto in una delle nostre lezioni e inizia il tuo viaggio nelle arti marziali oggi.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il piano di abbonamento perfetto per i tuoi obiettivi di allenamento. Tutti i piani includono l\'accesso a entrambe le sedi e a tutte le lezioni.'
      },
      mainSeason: {
        title: 'Stagione Principale',
        period: 'Settembre - Giugno',
        duration: '10 mesi di allenamento',
        mostPopular: 'Più Popolare'
      },
      summerSeason: {
        title: 'Stagione Estiva',
        period: 'Luglio - Agosto',
        duration: '2,5 mesi di allenamento'
      },
      bjjOnly: {
        title: 'Abbonamento Solo BJJ',
        subtitle: 'Perfetto per chi vuole concentrarsi esclusivamente sul Brazilian Jiu-Jitsu',
        program: 'Allenamento Focalizzato BJJ',
        description: 'Accesso a tutte le lezioni BJJ in entrambe le sedi'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      mainIncludes: [
        'Tutte le lezioni in entrambe le sedi',
        'MMA, BJJ, Grappling, Wrestling',
        'Sessioni di tatami libero',
        'Accesso al team competitivo',
        'Deposito attrezzature'
      ],
      summerIncludes: [
        'Tutte le lezioni estive',
        'Campo Tures e Brunico',
        'Orario flessibile',
        'Accesso al tatami libero',
        'Deposito attrezzature'
      ],
      bjjIncludes: [
        'Tutte le lezioni BJJ (gi e no-gi)',
        'Entrambe le sedi incluse',
        'Sessioni di tatami libero',
        'Preparazione competitiva',
        'Sistema di progressione delle cinture'
      ],
      selectMainSeason: 'Seleziona Stagione Principale',
      selectSummerSeason: 'Seleziona Stagione Estiva',
      selectBjjOnly: 'Seleziona Solo BJJ',
      additionalServices: {
        title: 'Servizi Aggiuntivi',
        description: 'Migliora il tuo allenamento con i nostri servizi specializzati e opzioni di coaching personale.'
      },
      personalTraining: {
        title: 'Allenamento Personale',
        description: 'Coaching uno-a-uno personalizzato sui tuoi obiettivi e bisogni specifici.',
        price: '€50',
        duration: 'per sessione (60 min)'
      },
      competitionPrep: {
        title: 'Preparazione Competitiva',
        description: 'Allenamento specializzato per prepararsi a tornei e competizioni.',
        price: '€40',
        duration: 'per sessione (90 min)'
      },
      seminars: {
        title: 'Seminari',
        description: 'Workshop speciali con istruttori ospiti e tecniche avanzate.',
        price: '€30',
        duration: 'per seminario (2-3 ore)'
      },
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra le stagioni?',
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro curriculum completo con 10 mesi di allenamento. La stagione estiva (Luglio-Agosto) è un programma più breve e flessibile, perfetto per mantenere le abilità durante la pausa.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso alle lezioni in entrambe le sedi Campo Tures e Brunico. Puoi mescolare e abbinare in base al tuo programma.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo una lezione di prova gratuita per nuovi studenti. Contattaci per programmare la tua prima sessione e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Di che attrezzatura ho bisogno?',
          answer: 'Per i principianti, solo abbigliamento da allenamento comodo. Forniamo attrezzatura di base per le lezioni di prova. Man mano che progredisci, avrai bisogno di un gi per le lezioni BJJ e attrezzatura appropriata per altre discipline.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio Oggi',
        description: 'Scegli il tuo piano di abbonamento e unisciti alla nostra comunità di artisti marziali dedicati.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Pronto a iniziare il tuo viaggio nelle arti marziali? Mettiti in contatto con noi per saperne di più sui nostri programmi, programmare una lezione di prova o fare domande.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con Sport Academy'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      address: 'Indirizzo',
      trainingSchedule: 'Orario di Allenamento',
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due sedi convenienti in Alto Adige'
      },
      parkingAccessibility: {
        title: 'Parcheggio e Accessibilità',
        subtitle: 'Facile accesso e parcheggio conveniente in entrambe le sedi'
      },
      parking: 'Parcheggio',
      publicTransport: 'Trasporti Pubblici',
      accessibility: 'Accessibilità',
      campoTures: {
        parking: 'Parcheggio gratuito disponibile proprio di fronte all\'ingresso, con posti aggiuntivi nelle vicinanze. Stazione di ricarica EV a circa 200 metri di distanza.',
        transport: 'La fermata "Campo Tures Centro" è a soli 2 minuti a piedi. Diverse linee di autobus si fermano qui, incluse 450, 451 e 452, offrendo collegamenti regolari a Brunico, paesi locali e le valli circostanti.',
        accessibility: 'La palestra è facile da raggiungere a piedi, in auto o con i trasporti pubblici. Situata in un\'area ampia, pianeggiante e ben illuminata — perfetta per l\'allenamento serale.'
      },
      brunico: {
        parking: 'Parcheggio gratuito in strada disponibile lungo Via Riedl e strade vicine. Durante le ore di punta, garage pubblici e parcheggi a pagamento zona blu sono a soli 5 minuti a piedi.',
        transport: 'La stazione ferroviaria Brunico Nord è a soli 2 minuti a piedi dalla palestra — perfetta se vieni da San Candido, Fortezza o ovunque nella valle. C\'è anche una fermata dell\'autobus nelle vicinanze con collegamenti urbani e regionali.',
        accessibility: 'La palestra si trova in una zona tranquilla e pianeggiante con una breve camminata diretta da tutte le fermate di trasporto vicine. Facile da raggiungere anche con attrezzature o borse da allenamento.'
      },
      visitRequirements: {
        title: 'Visitatori per la Prima Volta',
        subtitle: 'Cosa aspettarsi e cosa portare per la tua prima lezione'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      whatWeProvide: 'Cosa Forniamo',
      bring: [
        'Abbigliamento da allenamento comodo',
        'Bottiglia d\'acqua',
        'Asciugamano',
        'Atteggiamento positivo e volontà di imparare'
      ],
      provide: [
        'Attrezzatura di allenamento di base per la prova',
        'Ambiente di allenamento pulito e sicuro',
        'Istruzione professionale',
        'Atmosfera comunitaria di supporto'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Requisiti di Età: Età minima 6 anni per le lezioni bambini, 16+ per le lezioni adulti',
        health: 'Salute: Per favore informaci di eventuali infortuni o condizioni di salute',
        equipment: 'Attrezzatura: Forniamo guanti e parastinchi, ma gli studenti dovrebbero comprare i propri',
        payment: 'Pagamento: Sono accettati solo pagamenti con carta e contanti'
      },
      cta: {
        title: 'Pronto a Iniziare?',
        description: 'Contattaci oggi per programmare la tua prima lezione e iniziare il tuo viaggio nelle arti marziali.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Padroneggia l\'arte gentile della leva, tecnica e strategia'
        },
        overview: {
          title: 'L\'Arte Gentile',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione. Spesso chiamato "l\'arte gentile", il BJJ enfatizza tecnica, leva e tempismo sulla forza bruta, rendendolo accessibile a praticanti di tutte le taglie ed età.',
            'Alla Sport Academy, il nostro programma BJJ è progettato per insegnarti i principi fondamentali di questa incredibile arte marziale mentre costruisce la tua forma fisica, durezza mentale e fiducia in te stesso. Che tu sia interessato all\'autodifesa, alla competizione o semplicemente a mantenerti in forma, il BJJ offre qualcosa per tutti.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia le abilità fondamentali del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Fondamentali della guardia chiusa',
              'Variazioni della guardia aperta',
              'Sweep di guardia e transizioni',
              'Tecniche di ritenzione della guardia'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Strangolamenti e soffocamenti',
              'Leve articolari e armbar',
              'Leg lock e heel hook',
              'Catene di sottomissione'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e controllo laterale',
              'Tecniche di controllo della schiena',
              'Knee on belly',
              'Movimenti di transizione'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema delle Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di classificazione tradizionale',
          philosophy: {
            title: 'Filosofia delle Cinture',
            description: 'Il sistema delle cinture BJJ rappresenta non solo conoscenza tecnica, ma anche sviluppo del carattere, perseveranza e dedizione all\'arte. Ogni livello di cintura richiede anni di allenamento costante e dimostra la padronanza di tecniche sempre più complesse.'
          }
        },
        history: {
          title: 'Storia e Lignaggio',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu si è evoluto dal jujutsu giapponese tradizionale e dal judo, portato in Brasile da Mitsuyo Maeda all\'inizio del XX secolo. La famiglia Gracie, in particolare Helio Gracie, ha adattato queste tecniche per creare un sistema più efficace per praticanti più piccoli.',
            'L\'arte ha guadagnato riconoscimento mondiale attraverso i primi eventi UFC, dove Royce Gracie ha dimostrato l\'efficacia del BJJ contro avversari più grandi e forti provenienti da altri background di arti marziali.'
          ],
          keyFigures: {
            title: 'Figure Chiave',
            people: [
              {
                name: 'Mitsuyo Maeda',
                description: 'Judoka giapponese che portò il jujutsu in Brasile'
              },
              {
                name: 'Helio Gracie',
                description: 'Fondatore del Gracie Jiu-Jitsu e pioniere del BJJ'
              },
              {
                name: 'Royce Gracie',
                description: 'Campione UFC che dimostrò l\'efficacia del BJJ'
              }
            ]
          }
        },
        schedule: {
          title: 'Orario di Allenamento BJJ',
          subtitle: 'Unisciti alle nostre lezioni regolari di BJJ in entrambe le sedi'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Sperimenta l\'arte gentile che ha trasformato milioni di vite in tutto il mondo.',
          joinButton: 'Unisciti alle Lezioni BJJ'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina tutte le discipline di arti marziali'
        },
        overview: {
          title: 'Il Combattente Completo',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono lo sport da combattimento più completo, combinando tecniche da boxe, wrestling, Brazilian Jiu-Jitsu, Muay Thai e altre arti marziali. I combattenti MMA devono essere competenti in striking, grappling e combattimento a terra per competere al livello più alto.',
            'Il nostro programma MMA alla Sport Academy fornisce allenamento completo in tutti gli aspetti delle arti marziali miste. Che tu stia allenandoti per fitness, autodifesa o competizione, i nostri coach esperti ti aiuteranno a sviluppare le abilità e il condizionamento necessari per eccellere.'
          ]
        },
        techniques: {
          title: 'Discipline Fondamentali',
          subtitle: 'Padroneggia tutti gli aspetti del combattimento di arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Fondamentali di boxe',
              'Calci e ginocchiate Muay Thai',
              'Gioco di gambe e movimento',
              'Tecniche difensive'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche di takedown',
              'Sprawl e wrestling difensivo',
              'Lavoro in gabbia e clinch fighting',
              'Controllo a terra'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Tecniche Brazilian Jiu-Jitsu',
              'Ground and pound',
              'Difesa dalle sottomissioni',
              'Transizioni e fughe'
            ]
          }
        },
        history: {
          title: 'Evoluzione delle MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma le MMA moderne iniziarono con l\'Ultimate Fighting Championship (UFC) nel 1993. I primi eventi presentavano combattenti da diversi background di arti marziali che competevano per determinare lo stile di combattimento più efficace.',
            'Nel tempo, i combattenti si resero conto che dovevano essere ben preparati in tutti gli aspetti del combattimento. Questo portò all\'evoluzione delle MMA come le conosciamo oggi, dove i combattenti si allenano in multiple discipline per diventare artisti marziali completi.'
          ],
          milestones: {
            title: 'Pietre Miliari Chiave',
            events: [
              {
                year: '1993',
                description: 'Il primo evento UFC dimostra l\'efficacia di diverse arti marziali'
              },
              {
                year: '2001',
                description: 'Regole Unificate delle MMA stabilite per la sicurezza dei combattenti'
              },
              {
                year: '2016',
                description: 'Le MMA diventano mainstream con copertura televisiva globale'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Perché allenare MMA alla Sport Academy',
          items: [
            {
              icon: '💪',
              title: 'Fitness Completo',
              description: 'Condizionamento e allenamento della forza per tutto il corpo'
            },
            {
              icon: '🧠',
              title: 'Durezza Mentale',
              description: 'Sviluppa fiducia e resilienza mentale'
            },
            {
              icon: '🥊',
              title: 'Autodifesa',
              description: 'Impara tecniche pratiche di autodifesa'
            },
            {
              icon: '🏆',
              title: 'Pronto per la Competizione',
              description: 'Preparati per competizioni amatoriali e professionali'
            }
          ]
        },
        schedule: {
          title: 'Orario di Allenamento MMA',
          subtitle: 'Unisciti al nostro programma MMA completo'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Combattenti che hanno plasmato lo sport',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'Pioniere UFC',
              description: 'Dimostrò l\'efficacia del Brazilian Jiu-Jitsu nella prima UFC'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Campione dei pesi medi UFC più longevo'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Considerato da molti il più grande peso massimo di tutti i tempi'
            }
          ]
        },
        cta: {
          title: 'Diventa un Combattente Completo',
          description: 'Allenati nello sport da combattimento più completo del mondo con i nostri coach esperti.',
          joinButton: 'Unisciti all\'Allenamento MMA'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling No-Gi',
        hero: {
          subtitle: 'Grappling di sottomissione veloce senza il gi tradizionale'
        },
        overview: {
          title: 'Grappling Moderno',
          paragraphs: [
            'Il grappling no-gi, noto anche come submission grappling, è una forma di wrestling che permette prese di sottomissione. Senza il gi tradizionale (uniforme), i grappler si affidano a velocità, atletismo e tecniche moderne per controllare e sottomettere i loro avversari.',
            'Questo sport dinamico si è evoluto rapidamente, incorporando tecniche da wrestling, Brazilian Jiu-Jitsu, judo e sambo. Alla Sport Academy, il nostro programma di grappling si concentra sulle tecniche e strategie moderne più efficaci utilizzate nella scena competitiva di oggi.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia le abilità essenziali del grappling moderno',
          takedowns: {
            title: 'Takedown',
            items: [
              'Takedown single e double leg',
              'Lanci e sgambetti',
              'Sprawl e wrestling difensivo',
              'Lavoro in gabbia e wrestling a muro'
            ]
          },
          control: {
            title: 'Posizioni di Controllo',
            items: [
              'Controllo superiore e pressione',
              'Tecniche di controllo della schiena',
              'Intrecci delle gambe',
              'Controllo di transizione'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Leg lock e heel hook',
              'Strangolamenti e soffocamenti',
              'Leve del braccio e attacchi alla spalla',
              'Catene di sottomissione'
            ]
          }
        },
        methodology: {
          title: 'Metodologia di Allenamento',
          subtitle: 'Il nostro approccio allo sviluppo di grappler completi',
          technical: {
            title: 'Sviluppo Tecnico',
            methods: [
              {
                title: 'Drilling basato su posizioni',
                description: 'Padroneggia posizioni specifiche e transizioni'
              },
              {
                title: 'Flow rolling',
                description: 'Sviluppa transizioni fluide e tempismo'
              },
              {
                title: 'Sparring situazionale',
                description: 'Pratica scenari e posizioni specifiche'
              }
            ]
          },
          conditioning: {
            title: 'Condizionamento Fisico',
            methods: [
              {
                title: 'Fitness specifico per il grappling',
                description: 'Costruisci resistenza per match lunghi'
              },
              {
                title: 'Forza e mobilità',
                description: 'Sviluppa forza funzionale e flessibilità'
              },
              {
                title: 'Protocolli di recupero',
                description: 'Routine appropriate di riscaldamento e defaticamento'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Perché scegliere il grappling alla Sport Academy',
          items: [
            {
              icon: '⚡',
              title: 'Sviluppo Atletico',
              description: 'Migliora velocità, agilità e coordinazione'
            },
            {
              icon: '🧩',
              title: 'Risoluzione Problemi',
              description: 'Sviluppa pensiero tattico e adattabilità'
            },
            {
              icon: '💯',
              title: 'Abilità Competitive',
              description: 'Preparati per tornei di grappling'
            },
            {
              icon: '🔥',
              title: 'Allenamento Intenso',
              description: 'Allenamento ad alta intensità per il massimo fitness'
            }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Unisciti alle nostre lezioni di grappling no-gi'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Atleti che hanno definito il grappling moderno',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'Campione ADCC',
              description: 'Grappler no-gi dominante e specialista di leg lock'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Maestro delle Sottomissioni',
              description: 'Campione ADCC multiplo noto per l\'eccellenza tecnica'
            },
            {
              name: 'John Danaher',
              title: 'Il Filosofo',
              description: 'Coach rivoluzionario che ha modernizzato i sistemi di leg lock'
            }
          ]
        },
        cta: {
          title: 'Padroneggia il Grappling Moderno',
          description: 'Impara le tecniche di grappling più efficaci nel nostro programma no-gi dinamico.',
          joinButton: 'Unisciti alle Lezioni di Grappling'
        }
      }
    },
    footer: {
      tagline: 'Allenamento d\'Élite MMA, BJJ & Grappling',
      subtitle: 'Dove Nascono i Campioni',
      copyright: '© 2024 Sport Academy. Tutti i diritti riservati.'
    }
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return the key if not found in fallback
          }
        }
        break;
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};