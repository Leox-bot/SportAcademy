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
      dropInWelcome: 'Drop-ins Welcome',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates & DMs',
      instantConfirmation: 'Instant confirmation',
      duringTrainingHours: 'During training hours'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Elite MMA, Brazilian Jiu-Jitsu, and Grappling training in Campo Tures and Brunico. Train with expert coaches and join our community of dedicated fighters.'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Where passion meets precision. Our academy offers world-class training in Mixed Martial Arts, Brazilian Jiu-Jitsu, and Grappling across two premium locations in South Tyrol.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Proven track record of developing champions',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures and Brunico facilities',
        trainingPrograms: 'Training Programs',
        programsDescription: 'Comprehensive martial arts curriculum',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Master the art of combat through our specialized disciplines'
      },
      mma: {
        description: 'Complete mixed martial arts training combining striking, wrestling, and ground game for the ultimate fighting experience.'
      },
      bjj: {
        description: 'Master the gentle art of Brazilian Jiu-Jitsu, focusing on leverage, technique, and ground control to overcome any opponent.'
      },
      grappling: {
        description: 'Develop superior grappling skills through wrestling, takedowns, and submission techniques without the traditional gi.'
      },
      getStarted: {
        title: 'Ready to Get Started?',
        subtitle: 'Choose your path and begin your martial arts journey today'
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
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Where Champions Are Made',
      copyright: '© 2024 Sport Academy. All rights reserved.'
    },
    classes: {
      hero: {
        title: 'Our Classes',
        description: 'Discover our comprehensive range of martial arts programs designed for all skill levels, from beginners to advanced practitioners.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'The ultimate combat sport combining striking, wrestling, and ground fighting. Our MMA program develops complete fighters through comprehensive training in all aspects of mixed martial arts.',
        features: [
          'Striking techniques (boxing, kickboxing, Muay Thai)',
          'Wrestling and takedown defense',
          'Ground fighting and submissions',
          'Cage work and fight strategy',
          'Conditioning and strength training'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'The gentle art that teaches you to use leverage and technique to overcome larger, stronger opponents. Our BJJ program focuses on both gi and no-gi training.',
        features: [
          'Fundamental positions and escapes',
          'Guard work and sweeps',
          'Submission techniques',
          'Self-defense applications',
          'Competition preparation'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'No-gi grappling that emphasizes wrestling, takedowns, and submission grappling. Perfect for MMA preparation and pure grappling enthusiasts.',
        features: [
          'Wrestling fundamentals',
          'Takedown techniques',
          'Ground control positions',
          'Submission grappling',
          'Scrambles and transitions'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Age-appropriate Brazilian Jiu-Jitsu training that builds confidence, discipline, and physical fitness while teaching valuable self-defense skills.',
        features: [
          'Basic BJJ fundamentals',
          'Self-defense techniques',
          'Discipline and respect',
          'Physical fitness and coordination',
          'Anti-bullying strategies'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Wrestling and grappling fundamentals designed for young athletes, focusing on proper technique, sportsmanship, and athletic development.',
        features: [
          'Wrestling basics',
          'Takedown techniques',
          'Ground control',
          'Athletic development',
          'Team building and sportsmanship'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling training focusing on takedowns, control, and conditioning. Essential for MMA and excellent for overall athletic development.',
        features: [
          'Single and double leg takedowns',
          'Sprawls and takedown defense',
          'Top and bottom position work',
          'Wrestling conditioning',
          'Competition techniques'
        ]
      },
      whatYouLearn: 'What You\'ll Learn',
      cta: {
        title: 'Ready to Start Training?',
        description: 'Join our community of dedicated martial artists and begin your journey today.'
      }
    },
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Meet our world-class instructors who bring years of experience, technical expertise, and passion for martial arts to every training session.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 8 years of dedicated training and teaching experience, Matteo has built Sport Academy into one of South Tyrol\'s premier martial arts destinations. His comprehensive approach to martial arts combines traditional techniques with modern training methods.',
        specializations: [
          'Brazilian Jiu-Jitsu (Brown Belt)',
          'Mixed Martial Arts',
          'Grappling & Wrestling',
          'Competition Coaching'
        ],
        achievements: [
          'Multiple BJJ competition medals',
          'Certified BJJ instructor',
          'MMA coaching certification',
          '8+ years teaching experience'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'BJJ & Striking Instructor',
        background: 'Christian brings a wealth of competition experience and technical knowledge to Sport Academy. His dynamic teaching style and attention to detail help students develop both fundamental skills and advanced techniques.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Grappling',
          'Striking'
        ],
        achievements: [
          'Multiple competition medals',
          'Multiple MMA matches'
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
          description: 'Every student receives personalized attention and guidance tailored to their goals and skill level.'
        },
        respect: {
          title: 'Respect & Discipline',
          description: 'We cultivate an environment of mutual respect, discipline, and continuous learning for all practitioners.'
        }
      },
      cta: {
        title: 'Train with the Best',
        description: 'Experience world-class instruction and take your martial arts journey to the next level.'
      }
    },
    schedule: {
      hero: {
        title: 'Training Schedule',
        description: 'Find the perfect training times that fit your schedule. We offer classes throughout the week at both our Campo Tures and Brunico locations.'
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
        arrive: 'Arrive 10-15 minutes early to warm up',
        water: 'Bring water bottle and towel',
        gi: 'BJJ classes require a gi (uniform)',
        noGi: 'Grappling and MMA classes are no-gi'
      },
      membershipBenefits: 'Membership Benefits',
      benefits: {
        allClasses: 'Access to all classes included',
        openMat: 'Free open mat sessions',
        bothLocations: 'Train at both locations',
        personalTraining: 'Discounted personal training'
      },
      cta: {
        title: 'Ready to Join a Class?',
        description: 'Book your spot and start training with us today.'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the perfect training package for your goals. All memberships include access to our complete range of classes and both training locations.'
      },
      mainSeason: {
        title: 'Main Season',
        period: 'September - June',
        duration: '10 months of unlimited training',
        mostPopular: 'Most Popular'
      },
      summerSeason: {
        title: 'Summer Season',
        period: 'July - August',
        duration: '2.5 months of summer training'
      },
      bjjOnly: {
        title: 'BJJ Only Membership',
        program: 'BJJ Focused Training',
        subtitle: 'Perfect for those who want to focus exclusively on Brazilian Jiu-Jitsu',
        description: 'Access to all BJJ classes at both locations'
      },
      adults: 'Adults',
      students: 'Students',
      month: 'month',
      whatsIncluded: 'What\'s Included',
      mainIncludes: [
        'Unlimited access to all classes',
        'Training at both locations',
        'Open mat sessions',
        'Beginner-friendly instruction',
        'Competition team access'
      ],
      summerIncludes: [
        'All summer classes included',
        'Both locations access',
        'Flexible summer schedule',
        'Perfect for vacation training'
      ],
      bjjIncludes: [
        'All BJJ classes (gi and no-gi)',
        'Both locations access',
        'Open mat sessions',
        'Belt progression system',
        'Competition preparation'
      ],
      selectMainSeason: 'Select Main Season',
      selectSummerSeason: 'Select Summer Season',
      selectBjjOnly: 'Select BJJ Only',
      additionalServices: {
        title: 'Additional Services',
        description: 'Enhance your training with our specialized programs and personal coaching options.'
      },
      personalTraining: {
        title: 'Personal Training',
        description: 'One-on-one coaching tailored to your specific goals and needs.',
        price: '€50',
        duration: 'per session'
      },
      competitionPrep: {
        title: 'Competition Prep',
        description: 'Specialized training to prepare for BJJ, grappling, or MMA competitions.',
        price: '€40',
        duration: 'per session'
      },
      seminars: {
        title: 'Seminars',
        description: 'Special workshops with guest instructors and advanced technique sessions.',
        price: '€30',
        duration: 'per seminar'
      },
      faq: {
        title: 'Frequently Asked Questions',
        seasons: {
          question: 'What\'s the difference between seasons?',
          answer: 'Our main season runs September through June with our full program. Summer season offers a condensed schedule perfect for maintaining training during vacation months.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to classes at both our Campo Tures and Brunico facilities.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! Contact us to schedule a free trial class and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For BJJ you\'ll need a gi (uniform). For grappling and MMA, just comfortable workout clothes. We provide gloves and shin guards.'
        }
      },
      cta: {
        title: 'Start Your Journey Today',
        description: 'Choose your membership and join our community of dedicated martial artists.'
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
        parking: 'Free street parking available directly in front of the facility. Additional parking spaces in the nearby town center.',
        transport: 'Regular bus connections from Brunico and surrounding areas. Campo Tures train station is a 5-minute walk.',
        accessibility: 'Ground floor facility with wheelchair accessible entrance and restroom facilities.'
      },
      brunico: {
        parking: 'Free parking available in the facility parking lot. Additional street parking on Via Maria Teresa Riedl.',
        transport: 'Central location with excellent bus connections. Brunico train station is a 10-minute walk.',
        accessibility: 'Elevator access to training floor. Wheelchair accessible entrance and facilities.'
      },
      visitRequirements: {
        title: 'First Time Visiting?',
        subtitle: 'Here\'s what you need to know for your first class'
      },
      firstTimeVisitors: 'First Time Visitors',
      whatToBring: 'What to Bring',
      bring: [
        'Comfortable workout clothes',
        'Water bottle',
        'Towel',
        'BJJ gi (for BJJ classes only)',
        'Positive attitude and willingness to learn'
      ],
      whatWeProvide: 'What We Provide',
      provide: [
        'Training mats and equipment',
        'Gloves and shin guards',
        'Changing rooms and showers',
        'Beginner-friendly instruction',
        'Welcoming community atmosphere'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Age Requirements: 16+ for adult classes, kids classes available for ages 6-16',
        health: 'Health: Please inform instructors of any injuries or health conditions',
        equipment: 'Equipment: We provide gloves and shin guards, but students should purchase their own',
        payment: 'Payment: We accept card and cash payments only'
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
          subtitle: 'Master the gentle art of leverage, technique, and ground control'
        },
        overview: {
          title: 'The Gentle Art',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent through proper technique, leverage, and timing.',
            'Our BJJ program covers both gi and no-gi training, providing students with a comprehensive understanding of this beautiful art. Whether you\'re interested in self-defense, competition, or simply staying in shape, BJJ offers something for everyone.',
            'At Sport Academy, we follow traditional BJJ methodology while incorporating modern training techniques to ensure our students develop both technical proficiency and practical application skills.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Master the fundamental skills that form the foundation of Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard Work',
            items: [
              'Closed guard fundamentals',
              'Open guard variations',
              'Guard sweeps and submissions',
              'Guard retention and recovery'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Chokes and strangulations',
              'Joint locks and arm bars',
              'Leg locks and foot attacks',
              'Submission chains and setups'
            ]
          },
          positions: {
            title: 'Positions',
            items: [
              'Mount and side control',
              'Back control and rear mount',
              'Knee on belly',
              'Transitions and escapes'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the traditional ranking system of Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Belt Philosophy',
            description: 'The BJJ belt system represents not just technical knowledge, but also time on the mat, character development, and the ability to help others learn. Each belt is earned through dedication, consistency, and demonstration of both technical and personal growth.'
          }
        },
        history: {
          title: 'History & Lineage',
          paragraphs: [
            'Brazilian Jiu-Jitsu evolved from traditional Japanese jujutsu and judo, brought to Brazil by Mitsuyo Maeda in the early 20th century. The Gracie family, particularly Helio Gracie, adapted these techniques to create a more efficient system for smaller practitioners.',
            'The art gained worldwide recognition through the early UFC events, where Royce Gracie demonstrated the effectiveness of BJJ against larger opponents from different martial arts backgrounds.',
            'Today, BJJ continues to evolve as both a martial art and sport, with practitioners constantly refining techniques and developing new strategies for both self-defense and competition.'
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
                description: 'Founder of Gracie Jiu-Jitsu and BJJ methodology'
              },
              {
                name: 'Royce Gracie',
                description: 'UFC pioneer who showcased BJJ effectiveness'
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
          description: 'Experience the gentle art and discover why BJJ is one of the most effective martial arts.',
          joinButton: 'Join BJJ Classes'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining all martial arts disciplines'
        },
        overview: {
          title: 'The Ultimate Fighting Art',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, kickboxing, wrestling, Brazilian Jiu-Jitsu, and other martial arts. It represents the evolution of martial arts into a comprehensive fighting system.',
            'Our MMA program is designed to develop well-rounded fighters who are comfortable in all ranges of combat: standing striking, clinch work, takedowns, and ground fighting. We focus on both the individual components and how they integrate together.',
            'Whether your goal is competition, self-defense, or fitness, our MMA training will challenge you physically and mentally while teaching you the most effective fighting techniques from around the world.'
          ]
        },
        techniques: {
          title: 'Core Disciplines',
          subtitle: 'Master all aspects of mixed martial arts combat',
          striking: {
            title: 'Striking',
            items: [
              'Boxing fundamentals and combinations',
              'Kickboxing and Muay Thai techniques',
              'Footwork and head movement',
              'Striking defense and counters'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown techniques and setups',
              'Takedown defense and sprawls',
              'Clinch work and dirty boxing',
              'Cage work and wall wrestling'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Ground and pound techniques',
              'Submission grappling',
              'Ground control positions',
              'Transitions and escapes'
            ]
          }
        },
        history: {
          title: 'Evolution of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with vale tudo fights in Brazil and eventually evolved into the sport we know today through organizations like the UFC.',
            'The early days of MMA saw specialists from different martial arts compete to determine the most effective fighting style. This led to the realization that the most successful fighters needed to be well-rounded in all aspects of combat.',
            'Today\'s MMA continues to evolve rapidly, with fighters constantly adapting and improving techniques from all martial arts to stay competitive in this demanding sport.'
          ],
          milestones: {
            title: 'Key Milestones',
            events: [
              {
                year: '1993',
                description: 'First UFC event showcases different martial arts'
              },
              {
                year: '2000s',
                description: 'Evolution toward well-rounded fighters'
              },
              {
                year: 'Present',
                description: 'MMA becomes mainstream global sport'
              }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Why MMA training is the ultimate workout and self-defense system',
          items: [
            {
              icon: '💪',
              title: 'Complete Fitness',
              description: 'Full-body conditioning and strength'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Develop confidence and resilience'
            },
            {
              icon: '🥊',
              title: 'Self-Defense',
              description: 'Real-world applicable techniques'
            },
            {
              icon: '⚡',
              title: 'Athletic Performance',
              description: 'Improved coordination and reflexes'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Join our comprehensive MMA program'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Learn from the techniques of the greatest fighters',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Master of striking and creativity'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendary heavyweight champion'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Most complete light heavyweight ever'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Train in the world\'s most effective combat sport and unlock your potential.',
          joinButton: 'Join MMA Training'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Master the art of control, takedowns, and submission without the gi'
        },
        overview: {
          title: 'The Art of Control',
          paragraphs: [
            'Grappling is the art of controlling and submitting opponents through wrestling, takedowns, and ground fighting without the traditional gi. It emphasizes speed, athleticism, and adaptability in a more dynamic environment.',
            'Our grappling program combines elements from wrestling, Brazilian Jiu-Jitsu, and submission grappling to create well-rounded grapplers who excel in both takedowns and ground control.',
            'Perfect for MMA preparation or as a standalone discipline, grappling develops incredible functional strength, flexibility, and mental toughness while teaching highly effective self-defense skills.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Master the fundamental skills of no-gi grappling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single and double leg takedowns',
              'Hip tosses and throws',
              'Foot sweeps and trips',
              'Takedown defense and sprawls'
            ]
          },
          control: {
            title: 'Control',
            items: [
              'Top position dominance',
              'Side control and mount',
              'Back control techniques',
              'Transition and scrambles'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Chokes and strangulations',
              'Joint locks and arm attacks',
              'Leg locks and heel hooks',
              'Submission combinations'
            ]
          }
        },
        methodology: {
          title: 'Training Methodology',
          subtitle: 'Our systematic approach to grappling excellence',
          technical: {
            title: 'Technical Development',
            methods: [
              {
                title: 'Drilling',
                description: 'Repetitive practice of fundamental movements'
              },
              {
                title: 'Positional Sparring',
                description: 'Focused training from specific positions'
              },
              {
                title: 'Flow Rolling',
                description: 'Continuous movement and transition practice'
              }
            ]
          },
          conditioning: {
            title: 'Physical Conditioning',
            methods: [
              {
                title: 'Grappling Cardio',
                description: 'Sport-specific cardiovascular training'
              },
              {
                title: 'Functional Strength',
                description: 'Building strength for grappling movements'
              },
              {
                title: 'Flexibility',
                description: 'Mobility and injury prevention work'
              }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Why grappling is one of the most effective martial arts',
          items: [
            {
              icon: '🤼',
              title: 'Real Combat',
              description: 'Practical fighting skills'
            },
            {
              icon: '💪',
              title: 'Functional Strength',
              description: 'Full-body conditioning'
            },
            {
              icon: '🧘',
              title: 'Mental Chess',
              description: 'Strategic thinking under pressure'
            },
            {
              icon: '⚡',
              title: 'Explosive Power',
              description: 'Dynamic athletic development'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'Join our dynamic grappling classes'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Learn from the greatest grapplers in history',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'The King',
              description: 'Dominant no-gi grappling champion'
            },
            {
              name: 'Marcelo Garcia',
              title: 'The Magician',
              description: 'Technical master of grappling'
            },
            {
              name: 'John Danaher',
              title: 'The Professor',
              description: 'Revolutionary grappling coach'
            }
          ]
        },
        cta: {
          title: 'Master the Art of Grappling',
          description: 'Develop superior grappling skills and become a complete martial artist.',
          joinButton: 'Join Grappling Classes'
        }
      }
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
      allLevels: 'Alle Levels',
      ages: 'Alter',
      joinSportAcademy: 'Sport Academy Beitreten',
      callNow: 'Jetzt Anrufen',
      registerOnline: 'Online Registrieren',
      bookClasses: 'Kurse Buchen',
      visitUs: 'Besuchen Sie Uns',
      dropInWelcome: 'Drop-ins Willkommen',
      responseWithin2Hours: 'Antwort innerhalb 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates & DMs',
      instantConfirmation: 'Sofortige Bestätigung',
      duringTrainingHours: 'Während der Trainingszeiten'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Elite MMA, Brazilian Jiu-Jitsu und Grappling Training in Campo Tures und Bruneck. Trainiere mit Experten-Trainern und werde Teil unserer Gemeinschaft engagierter Kämpfer.'
      },
      welcome: {
        title: 'Willkommen bei Sport Academy',
        description: 'Wo Leidenschaft auf Präzision trifft. Unsere Akademie bietet Weltklasse-Training in Mixed Martial Arts, Brazilian Jiu-Jitsu und Grappling an zwei Premium-Standorten in Südtirol.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Bewährte Erfolgsbilanz bei der Entwicklung von Champions',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Campo Tures und Bruneck Einrichtungen',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'Umfassendes Kampfkunst-Curriculum',
        exploreClasses: 'Unsere Kurse Erkunden'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Meistere die Kunst des Kampfes durch unsere spezialisierten Disziplinen'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training, das Schlagen, Ringen und Bodenkampf für das ultimative Kampferlebnis kombiniert.'
      },
      bjj: {
        description: 'Meistere die sanfte Kunst des Brazilian Jiu-Jitsu, mit Fokus auf Hebelwirkung, Technik und Bodenkontrolle, um jeden Gegner zu überwinden.'
      },
      grappling: {
        description: 'Entwickle überlegene Grappling-Fähigkeiten durch Ringen, Takedowns und Submission-Techniken ohne den traditionellen Gi.'
      },
      getStarted: {
        title: 'Bereit Anzufangen?',
        subtitle: 'Wähle deinen Weg und beginne heute deine Kampfkunst-Reise'
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
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Wo Champions Gemacht Werden',
      copyright: '© 2024 Sport Academy. Alle Rechte vorbehalten.'
    },
    classes: {
      hero: {
        title: 'Unsere Kurse',
        description: 'Entdecke unser umfassendes Angebot an Kampfkunstprogrammen, die für alle Fähigkeitsstufen entwickelt wurden, von Anfängern bis zu fortgeschrittenen Praktizierenden.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Der ultimative Kampfsport, der Schlagen, Ringen und Bodenkampf kombiniert. Unser MMA-Programm entwickelt komplette Kämpfer durch umfassendes Training in allen Aspekten der Mixed Martial Arts.',
        features: [
          'Schlagtechniken (Boxen, Kickboxen, Muay Thai)',
          'Ringen und Takedown-Verteidigung',
          'Bodenkampf und Submissions',
          'Käfigarbeit und Kampfstrategie',
          'Konditionierung und Krafttraining'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Die sanfte Kunst, die dich lehrt, Hebelwirkung und Technik zu nutzen, um größere, stärkere Gegner zu überwinden. Unser BJJ-Programm konzentriert sich sowohl auf Gi- als auch auf No-Gi-Training.',
        features: [
          'Grundlegende Positionen und Befreiungen',
          'Guard-Arbeit und Sweeps',
          'Submission-Techniken',
          'Selbstverteidigungsanwendungen',
          'Wettkampfvorbereitung'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'No-Gi-Grappling, das Ringen, Takedowns und Submission-Grappling betont. Perfekt für MMA-Vorbereitung und reine Grappling-Enthusiasten.',
        features: [
          'Wrestling-Grundlagen',
          'Takedown-Techniken',
          'Bodenkontrollpositionen',
          'Submission-Grappling',
          'Scrambles und Übergänge'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Altersgerechtes Brazilian Jiu-Jitsu Training, das Selbstvertrauen, Disziplin und körperliche Fitness aufbaut und dabei wertvolle Selbstverteidigungsfähigkeiten vermittelt.',
        features: [
          'BJJ-Grundlagen',
          'Selbstverteidigungstechniken',
          'Disziplin und Respekt',
          'Körperliche Fitness und Koordination',
          'Anti-Mobbing-Strategien'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Wrestling- und Grappling-Grundlagen für junge Athleten, mit Fokus auf richtige Technik, Sportlichkeit und athletische Entwicklung.',
        features: [
          'Wrestling-Grundlagen',
          'Takedown-Techniken',
          'Bodenkontrolle',
          'Athletische Entwicklung',
          'Teambuilding und Sportlichkeit'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelles Wrestling-Training mit Fokus auf Takedowns, Kontrolle und Konditionierung. Essentiell für MMA und ausgezeichnet für die allgemeine athletische Entwicklung.',
        features: [
          'Single- und Double-Leg-Takedowns',
          'Sprawls und Takedown-Verteidigung',
          'Top- und Bottom-Positionsarbeit',
          'Wrestling-Konditionierung',
          'Wettkampftechniken'
        ]
      },
      whatYouLearn: 'Was Du Lernst',
      cta: {
        title: 'Bereit Mit Dem Training Zu Beginnen?',
        description: 'Werde Teil unserer Gemeinschaft engagierter Kampfkünstler und beginne heute deine Reise.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne unsere Weltklasse-Instruktoren kennen, die jahrelange Erfahrung, technische Expertise und Leidenschaft für Kampfkunst in jede Trainingseinheit einbringen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 8 Jahren engagierter Trainings- und Lehrerfahrung hat Matteo die Sport Academy zu einem der führenden Kampfkunstzentren Südtirols aufgebaut. Sein umfassender Ansatz für Kampfkunst kombiniert traditionelle Techniken mit modernen Trainingsmethoden.',
        specializations: [
          'Brazilian Jiu-Jitsu (Brauner Gürtel)',
          'Mixed Martial Arts',
          'Grappling & Wrestling',
          'Wettkampf-Coaching'
        ],
        achievements: [
          'Mehrere BJJ-Wettkampfmedaillen',
          'Zertifizierter BJJ-Instruktor',
          'MMA-Coaching-Zertifizierung',
          '8+ Jahre Lehrerfahrung'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'BJJ & Schlag-Instruktor',
        background: 'Christian bringt eine Fülle von Wettkampferfahrung und technischem Wissen zur Sport Academy. Sein dynamischer Lehrstil und seine Aufmerksamkeit für Details helfen Schülern, sowohl grundlegende Fähigkeiten als auch fortgeschrittene Techniken zu entwickeln.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Grappling',
          'Schlagtechniken'
        ],
        achievements: [
          'Mehrere Wettkampfmedaillen',
          'Mehrere MMA-Kämpfe'
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
          title: 'Individuelles Wachstum',
          description: 'Jeder Schüler erhält persönliche Aufmerksamkeit und Anleitung, die auf seine Ziele und sein Fähigkeitsniveau zugeschnitten ist.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir schaffen eine Umgebung des gegenseitigen Respekts, der Disziplin und des kontinuierlichen Lernens für alle Praktizierenden.'
        }
      },
      cta: {
        title: 'Trainiere Mit Den Besten',
        description: 'Erlebe Weltklasse-Unterricht und bringe deine Kampfkunst-Reise auf die nächste Stufe.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finde die perfekten Trainingszeiten, die zu deinem Zeitplan passen. Wir bieten Kurse während der ganzen Woche an beiden Standorten in Campo Tures und Bruneck an.'
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
        arrive: '10-15 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'BJJ-Kurse erfordern einen Gi (Uniform)',
        noGi: 'Grappling- und MMA-Kurse sind ohne Gi'
      },
      membershipBenefits: 'Mitgliedschaftsvorteile',
      benefits: {
        allClasses: 'Zugang zu allen Kursen inklusive',
        openMat: 'Kostenlose freie Trainingseinheiten',
        bothLocations: 'Training an beiden Standorten',
        personalTraining: 'Ermäßigtes Personaltraining'
      },
      cta: {
        title: 'Bereit Für Einen Kurs?',
        description: 'Buche deinen Platz und beginne heute mit dem Training bei uns.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle das perfekte Trainingspaket für deine Ziele. Alle Mitgliedschaften beinhalten Zugang zu unserem kompletten Kursangebot und beiden Trainingsstandorten.'
      },
      mainSeason: {
        title: 'Hauptsaison',
        period: 'September - Juni',
        duration: '10 Monate unbegrenztes Training',
        mostPopular: 'Am Beliebtesten'
      },
      summerSeason: {
        title: 'Sommersaison',
        period: 'Juli - August',
        duration: '2,5 Monate Sommertraining'
      },
      bjjOnly: {
        title: 'Nur BJJ Mitgliedschaft',
        program: 'BJJ-Fokussiertes Training',
        subtitle: 'Perfekt für diejenigen, die sich ausschließlich auf Brazilian Jiu-Jitsu konzentrieren möchten',
        description: 'Zugang zu allen BJJ-Kursen an beiden Standorten'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was Ist Enthalten',
      mainIncludes: [
        'Unbegrenzter Zugang zu allen Kursen',
        'Training an beiden Standorten',
        'Freie Trainingseinheiten',
        'Anfängerfreundlicher Unterricht',
        'Zugang zum Wettkampfteam'
      ],
      summerIncludes: [
        'Alle Sommerkurse inklusive',
        'Zugang zu beiden Standorten',
        'Flexibler Sommerplan',
        'Perfekt für Urlaubstraining'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse (Gi und No-Gi)',
        'Zugang zu beiden Standorten',
        'Freie Trainingseinheiten',
        'Gürtel-Fortschrittssystem',
        'Wettkampfvorbereitung'
      ],
      selectMainSeason: 'Hauptsaison Wählen',
      selectSummerSeason: 'Sommersaison Wählen',
      selectBjjOnly: 'Nur BJJ Wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessere dein Training mit unseren spezialisierten Programmen und persönlichen Coaching-Optionen.'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Eins-zu-eins-Coaching, das auf deine spezifischen Ziele und Bedürfnisse zugeschnitten ist.',
        price: '€50',
        duration: 'pro Einheit'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training zur Vorbereitung auf BJJ-, Grappling- oder MMA-Wettkämpfe.',
        price: '€40',
        duration: 'pro Einheit'
      },
      seminars: {
        title: 'Seminare',
        description: 'Spezielle Workshops mit Gastinstruktoren und fortgeschrittenen Technikeinheiten.',
        price: '€30',
        duration: 'pro Seminar'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Unsere Hauptsaison läuft von September bis Juni mit unserem vollständigen Programm. Die Sommersaison bietet einen komprimierten Zeitplan, perfekt um das Training während der Urlaubsmonate aufrechtzuerhalten.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu Kursen an beiden unserer Einrichtungen in Campo Tures und Bruneck.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Absolut! Kontaktiere uns, um eine kostenlose Probestunde zu vereinbaren und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für BJJ brauchst du einen Gi (Uniform). Für Grappling und MMA nur bequeme Trainingskleidung. Wir stellen Handschuhe und Schienbeinschützer zur Verfügung.'
        }
      },
      cta: {
        title: 'Beginne Heute Deine Reise',
        description: 'Wähle deine Mitgliedschaft und werde Teil unserer Gemeinschaft engagierter Kampfkünstler.'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Bereit, deine Kampfkunst-Reise zu beginnen? Nimm Kontakt mit uns auf, um mehr über unsere Programme zu erfahren, eine Probestunde zu vereinbaren oder Fragen zu stellen.'
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
        title: 'Parken & Barrierefreiheit',
        subtitle: 'Einfacher Zugang und bequemes Parken an beiden Standorten'
      },
      parking: 'Parken',
      publicTransport: 'Öffentliche Verkehrsmittel',
      accessibility: 'Barrierefreiheit',
      campoTures: {
        parking: 'Kostenlose Straßenparkplätze direkt vor der Einrichtung verfügbar. Zusätzliche Parkplätze im nahegelegenen Stadtzentrum.',
        transport: 'Regelmäßige Busverbindungen von Bruneck und umliegenden Gebieten. Bahnhof Campo Tures ist 5 Gehminuten entfernt.',
        accessibility: 'Erdgeschoss-Einrichtung mit rollstuhlgerechtem Eingang und Toiletten.'
      },
      brunico: {
        parking: 'Kostenlose Parkplätze im Einrichtungsparkplatz verfügbar. Zusätzliche Straßenparkplätze in der Via Maria Teresa Riedl.',
        transport: 'Zentrale Lage mit ausgezeichneten Busverbindungen. Bahnhof Bruneck ist 10 Gehminuten entfernt.',
        accessibility: 'Aufzugzugang zur Trainingsetage. Rollstuhlgerechter Eingang und Einrichtungen.'
      },
      visitRequirements: {
        title: 'Zum Ersten Mal Hier?',
        subtitle: 'Das musst du für deine erste Stunde wissen'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was Mitbringen',
      bring: [
        'Bequeme Trainingskleidung',
        'Wasserflasche',
        'Handtuch',
        'BJJ-Gi (nur für BJJ-Kurse)',
        'Positive Einstellung und Lernbereitschaft'
      ],
      whatWeProvide: 'Was Wir Bereitstellen',
      provide: [
        'Trainingsmatten und Ausrüstung',
        'Handschuhe und Schienbeinschützer',
        'Umkleideräume und Duschen',
        'Anfängerfreundlicher Unterricht',
        'Einladende Gemeinschaftsatmosphäre'
      ],
      specialInstructions: 'Besondere Anweisungen',
      instructions: {
        age: 'Altersanforderungen: 16+ für Erwachsenenkurse, Kinderkurse verfügbar für Alter 6-16',
        health: 'Gesundheit: Bitte informiere die Instruktoren über Verletzungen oder Gesundheitszustände',
        equipment: 'Ausrüstung: Wir stellen Handschuhe und Schienbeinschützer zur Verfügung, aber Schüler sollten ihre eigenen kaufen',
        payment: 'Zahlung: Wir akzeptieren nur Karten- und Barzahlungen'
      },
      cta: {
        title: 'Bereit Anzufangen?',
        description: 'Kontaktiere uns heute, um deine erste Stunde zu vereinbaren und deine Kampfkunst-Reise zu beginnen.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Meistere die sanfte Kunst der Hebelwirkung, Technik und Bodenkontrolle'
        },
        overview: {
          title: 'Die Sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Es betont das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner durch richtige Technik, Hebelwirkung und Timing verteidigen kann.',
            'Unser BJJ-Programm umfasst sowohl Gi- als auch No-Gi-Training und bietet den Schülern ein umfassendes Verständnis dieser schönen Kunst. Ob du dich für Selbstverteidigung, Wettkampf oder einfach nur für Fitness interessierst, BJJ bietet für jeden etwas.',
            'In der Sport Academy folgen wir der traditionellen BJJ-Methodik und integrieren moderne Trainingstechniken, um sicherzustellen, dass unsere Schüler sowohl technische Kompetenz als auch praktische Anwendungsfähigkeiten entwickeln.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Meistere die grundlegenden Fähigkeiten, die das Fundament des Brazilian Jiu-Jitsu bilden',
          guardWork: {
            title: 'Guard-Arbeit',
            items: [
              'Closed Guard Grundlagen',
              'Open Guard Variationen',
              'Guard Sweeps und Submissions',
              'Guard Retention und Recovery'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Würgegriffe und Strangulationen',
              'Gelenkhebel und Armhebel',
              'Beinhebel und Fußangriffe',
              'Submission-Ketten und Setups'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Side Control',
              'Back Control und Rear Mount',
              'Knee on Belly',
              'Übergänge und Befreiungen'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Gürtelsystem',
          subtitle: 'Fortschritt durch das traditionelle Ranking-System des Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Gürtel-Philosophie',
            description: 'Das BJJ-Gürtelsystem repräsentiert nicht nur technisches Wissen, sondern auch Zeit auf der Matte, Charakterentwicklung und die Fähigkeit, anderen beim Lernen zu helfen. Jeder Gürtel wird durch Hingabe, Beständigkeit und Demonstration sowohl technischen als auch persönlichen Wachstums verdient.'
          }
        },
        history: {
          title: 'Geschichte & Abstammung',
          paragraphs: [
            'Brazilian Jiu-Jitsu entwickelte sich aus traditionellem japanischem Jujutsu und Judo, das von Mitsuyo Maeda im frühen 20. Jahrhundert nach Brasilien gebracht wurde. Die Gracie-Familie, insbesondere Helio Gracie, passte diese Techniken an, um ein effizienteres System für kleinere Praktizierende zu schaffen.',
            'Die Kunst erlangte weltweite Anerkennung durch die frühen UFC-Events, wo Royce Gracie die Wirksamkeit von BJJ gegen größere Gegner aus verschiedenen Kampfkunst-Hintergründen demonstrierte.',
            'Heute entwickelt sich BJJ sowohl als Kampfkunst als auch als Sport weiter, wobei Praktizierende ständig Techniken verfeinern und neue Strategien sowohl für Selbstverteidigung als auch für Wettkämpfe entwickeln.'
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
                description: 'Gründer des Gracie Jiu-Jitsu und der BJJ-Methodik'
              },
              {
                name: 'Royce Gracie',
                description: 'UFC-Pionier, der die BJJ-Wirksamkeit demonstrierte'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ Trainingsplan',
          subtitle: 'Nimm an unseren regelmäßigen BJJ-Kursen an beiden Standorten teil'
        },
        cta: {
          title: 'Beginne Deine BJJ-Reise',
          description: 'Erlebe die sanfte Kunst und entdecke, warum BJJ eine der effektivsten Kampfkünste ist.',
          joinButton: 'BJJ-Kurse Beitreten'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der alle Kampfkunst-Disziplinen kombiniert'
        },
        overview: {
          title: 'Die Ultimative Kampfkunst',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der vollständigste Kampfsport, der Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkünsten kombiniert. Es repräsentiert die Evolution der Kampfkünste zu einem umfassenden Kampfsystem.',
            'Unser MMA-Programm ist darauf ausgelegt, vielseitige Kämpfer zu entwickeln, die in allen Kampfbereichen komfortabel sind: Stehschlagen, Clinch-Arbeit, Takedowns und Bodenkampf. Wir konzentrieren uns sowohl auf die einzelnen Komponenten als auch darauf, wie sie zusammen integriert werden.',
            'Ob dein Ziel Wettkampf, Selbstverteidigung oder Fitness ist, unser MMA-Training wird dich körperlich und geistig herausfordern und dir dabei die effektivsten Kampftechniken aus der ganzen Welt beibringen.'
          ]
        },
        techniques: {
          title: 'Kerndisziplinen',
          subtitle: 'Meistere alle Aspekte des Mixed Martial Arts Kampfes',
          striking: {
            title: 'Schlagtechniken',
            items: [
              'Box-Grundlagen und Kombinationen',
              'Kickbox- und Muay Thai-Techniken',
              'Fußarbeit und Kopfbewegung',
              'Schlagverteidigung und Konter'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken und Setups',
              'Takedown-Verteidigung und Sprawls',
              'Clinch-Arbeit und Dirty Boxing',
              'Käfig-Arbeit und Wand-Wrestling'
            ]
          },
          groundGame: {
            title: 'Bodenkampf',
            items: [
              'Ground and Pound Techniken',
              'Submission Grappling',
              'Bodenkontrollpositionen',
              'Übergänge und Befreiungen'
            ]
          }
        },
        history: {
          title: 'Evolution von MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit Vale Tudo-Kämpfen in Brasilien und entwickelte sich schließlich durch Organisationen wie die UFC zu dem Sport, den wir heute kennen.',
            'Die frühen Tage von MMA sahen Spezialisten aus verschiedenen Kampfkünsten gegeneinander antreten, um den effektivsten Kampfstil zu bestimmen. Dies führte zu der Erkenntnis, dass die erfolgreichsten Kämpfer in allen Aspekten des Kampfes vielseitig sein mussten.',
            'Das heutige MMA entwickelt sich weiterhin schnell, wobei Kämpfer ständig Techniken aus allen Kampfkünsten anpassen und verbessern, um in diesem anspruchsvollen Sport wettbewerbsfähig zu bleiben.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erstes UFC-Event zeigt verschiedene Kampfkünste'
              },
              {
                year: '2000er',
                description: 'Evolution zu vielseitigen Kämpfern'
              },
              {
                year: 'Gegenwart',
                description: 'MMA wird zum Mainstream-Globalsport'
              }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Warum MMA-Training das ultimative Workout und Selbstverteidigungssystem ist',
          items: [
            {
              icon: '💪',
              title: 'Komplette Fitness',
              description: 'Ganzkörper-Konditionierung und Kraft'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Entwickle Selbstvertrauen und Widerstandsfähigkeit'
            },
            {
              icon: '🥊',
              title: 'Selbstverteidigung',
              description: 'Realitätsnahe anwendbare Techniken'
            },
            {
              icon: '⚡',
              title: 'Athletische Leistung',
              description: 'Verbesserte Koordination und Reflexe'
            }
          ]
        },
        schedule: {
          title: 'MMA Trainingsplan',
          subtitle: 'Nimm an unserem umfassenden MMA-Programm teil'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Lerne von den Techniken der größten Kämpfer',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Meister des Schlagens und der Kreativität'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendärer Schwergewichts-Champion'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Vollständigster Halbschwergewichtler aller Zeiten'
            }
          ]
        },
        cta: {
          title: 'Werde Ein Kompletter Kämpfer',
          description: 'Trainiere im effektivsten Kampfsport der Welt und entfalte dein Potenzial.',
          joinButton: 'MMA-Training Beitreten'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Meistere die Kunst der Kontrolle, Takedowns und Submission ohne Gi'
        },
        overview: {
          title: 'Die Kunst der Kontrolle',
          paragraphs: [
            'Grappling ist die Kunst, Gegner durch Wrestling, Takedowns und Bodenkampf ohne den traditionellen Gi zu kontrollieren und zu unterwerfen. Es betont Geschwindigkeit, Athletik und Anpassungsfähigkeit in einer dynamischeren Umgebung.',
            'Unser Grappling-Programm kombiniert Elemente aus Wrestling, Brazilian Jiu-Jitsu und Submission Grappling, um vielseitige Grappler zu schaffen, die sowohl in Takedowns als auch in Bodenkontrolle hervorragend sind.',
            'Perfekt für MMA-Vorbereitung oder als eigenständige Disziplin entwickelt Grappling unglaubliche funktionale Kraft, Flexibilität und mentale Stärke und lehrt dabei hocheffektive Selbstverteidigungsfähigkeiten.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Meistere die grundlegenden Fähigkeiten des No-Gi-Grapplings',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single- und Double-Leg-Takedowns',
              'Hüftwürfe und Würfe',
              'Fußfeger und Trips',
              'Takedown-Verteidigung und Sprawls'
            ]
          },
          control: {
            title: 'Kontrolle',
            items: [
              'Top-Position-Dominanz',
              'Side Control und Mount',
              'Back Control Techniken',
              'Übergänge und Scrambles'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Würgegriffe und Strangulationen',
              'Gelenkhebel und Armangriffe',
              'Beinhebel und Heel Hooks',
              'Submission-Kombinationen'
            ]
          }
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Unser systematischer Ansatz zur Grappling-Exzellenz',
          technical: {
            title: 'Technische Entwicklung',
            methods: [
              {
                title: 'Drilling',
                description: 'Wiederholende Übung grundlegender Bewegungen'
              },
              {
                title: 'Positionelles Sparring',
                description: 'Fokussiertes Training aus spezifischen Positionen'
              },
              {
                title: 'Flow Rolling',
                description: 'Kontinuierliche Bewegungs- und Übergangsübung'
              }
            ]
          },
          conditioning: {
            title: 'Körperliche Konditionierung',
            methods: [
              {
                title: 'Grappling-Cardio',
                description: 'Sportspezifisches Herz-Kreislauf-Training'
              },
              {
                title: 'Funktionale Kraft',
                description: 'Kraftaufbau für Grappling-Bewegungen'
              },
              {
                title: 'Flexibilität',
                description: 'Mobilität und Verletzungsprävention'
              }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Warum Grappling eine der effektivsten Kampfkünste ist',
          items: [
            {
              icon: '🤼',
              title: 'Echter Kampf',
              description: 'Praktische Kampffähigkeiten'
            },
            {
              icon: '💪',
              title: 'Funktionale Kraft',
              description: 'Ganzkörper-Konditionierung'
            },
            {
              icon: '🧘',
              title: 'Mentales Schach',
              description: 'Strategisches Denken unter Druck'
            },
            {
              icon: '⚡',
              title: 'Explosive Kraft',
              description: 'Dynamische athletische Entwicklung'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Plan',
          subtitle: 'Nimm an unseren dynamischen Grappling-Kursen teil'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Lerne von den größten Grapplern der Geschichte',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'The King',
              description: 'Dominanter No-Gi-Grappling-Champion'
            },
            {
              name: 'Marcelo Garcia',
              title: 'The Magician',
              description: 'Technischer Meister des Grapplings'
            },
            {
              name: 'John Danaher',
              title: 'The Professor',
              description: 'Revolutionärer Grappling-Coach'
            }
          ]
        },
        cta: {
          title: 'Meistere Die Kunst Des Grapplings',
          description: 'Entwickle überlegene Grappling-Fähigkeiten und werde ein kompletter Kampfkünstler.',
          joinButton: 'Grappling-Kurse Beitreten'
        }
      }
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
      dropInWelcome: 'Drop-in Benvenuti',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM',
      instantConfirmation: 'Conferma istantanea',
      duringTrainingHours: 'Durante gli orari di allenamento'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Allenamento d\'élite di MMA, Brazilian Jiu-Jitsu e Grappling a Campo Tures e Brunico. Allenati con istruttori esperti e unisciti alla nostra comunità di combattenti dedicati.'
      },
      welcome: {
        title: 'Benvenuti alla Sport Academy',
        description: 'Dove la passione incontra la precisione. La nostra accademia offre allenamento di classe mondiale in Arti Marziali Miste, Brazilian Jiu-Jitsu e Grappling in due location premium in Alto Adige.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Comprovata esperienza nello sviluppo di campioni',
        trainingLocations: 'Location di Allenamento',
        locationsDescription: 'Strutture a Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'Curriculum completo di arti marziali',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come Un Combattente',
        subtitle: 'Padroneggia l\'arte del combattimento attraverso le nostre discipline specializzate'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina striking, wrestling e ground game per l\'esperienza di combattimento definitiva.'
      },
      bjj: {
        description: 'Padroneggia l\'arte gentile del Brazilian Jiu-Jitsu, concentrandoti su leva, tecnica e controllo a terra per superare qualsiasi avversario.'
      },
      grappling: {
        description: 'Sviluppa abilità superiori di grappling attraverso wrestling, takedown e tecniche di submission senza il gi tradizionale.'
      },
      getStarted: {
        title: 'Pronto per Iniziare?',
        subtitle: 'Scegli il tuo percorso e inizia oggi il tuo viaggio nelle arti marziali'
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
    footer: {
      tagline: 'Allenamento d\'Élite MMA, BJJ & Grappling',
      subtitle: 'Dove Nascono i Campioni',
      copyright: '© 2024 Sport Academy. Tutti i diritti riservati.'
    },
    classes: {
      hero: {
        title: 'I Nostri Corsi',
        description: 'Scopri la nostra gamma completa di programmi di arti marziali progettati per tutti i livelli di abilità, dai principianti ai praticanti avanzati.'
      },
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Lo sport da combattimento definitivo che combina striking, wrestling e ground fighting. Il nostro programma MMA sviluppa combattenti completi attraverso un allenamento comprensivo in tutti gli aspetti delle arti marziali miste.',
        features: [
          'Tecniche di striking (boxe, kickboxing, Muay Thai)',
          'Wrestling e difesa da takedown',
          'Ground fighting e submission',
          'Lavoro in gabbia e strategia di combattimento',
          'Condizionamento e allenamento della forza'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'L\'arte gentile che ti insegna a usare leva e tecnica per superare avversari più grandi e forti. Il nostro programma BJJ si concentra sia sull\'allenamento con gi che senza gi.',
        features: [
          'Posizioni fondamentali e fughe',
          'Lavoro di guardia e spazzate',
          'Tecniche di submission',
          'Applicazioni di autodifesa',
          'Preparazione per competizioni'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Grappling senza gi che enfatizza wrestling, takedown e submission grappling. Perfetto per la preparazione MMA e per gli appassionati di grappling puro.',
        features: [
          'Fondamentali di wrestling',
          'Tecniche di takedown',
          'Posizioni di controllo a terra',
          'Submission grappling',
          'Scramble e transizioni'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Allenamento di Brazilian Jiu-Jitsu appropriato per l\'età che costruisce fiducia, disciplina e forma fisica insegnando preziose abilità di autodifesa.',
        features: [
          'Fondamentali base del BJJ',
          'Tecniche di autodifesa',
          'Disciplina e rispetto',
          'Forma fisica e coordinazione',
          'Strategie anti-bullismo'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Fondamentali di wrestling e grappling progettati per giovani atleti, concentrandosi su tecnica corretta, sportività e sviluppo atletico.',
        features: [
          'Basi del wrestling',
          'Tecniche di takedown',
          'Controllo a terra',
          'Sviluppo atletico',
          'Team building e sportività'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Allenamento di wrestling tradizionale concentrato su takedown, controllo e condizionamento. Essenziale per MMA e eccellente per lo sviluppo atletico generale.',
        features: [
          'Takedown single e double leg',
          'Sprawl e difesa da takedown',
          'Lavoro in posizione top e bottom',
          'Condizionamento wrestling',
          'Tecniche da competizione'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Pronto per Iniziare l\'Allenamento?',
        description: 'Unisciti alla nostra comunità di artisti marziali dedicati e inizia oggi il tuo viaggio.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Incontra i nostri istruttori di classe mondiale che portano anni di esperienza, competenza tecnica e passione per le arti marziali in ogni sessione di allenamento.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore & Fondatore',
        background: 'Con oltre 8 anni di esperienza dedicata nell\'allenamento e nell\'insegnamento, Matteo ha costruito Sport Academy come una delle destinazioni premier per le arti marziali in Alto Adige. Il suo approccio comprensivo alle arti marziali combina tecniche tradizionali con metodi di allenamento moderni.',
        specializations: [
          'Brazilian Jiu-Jitsu (Cintura Marrone)',
          'Arti Marziali Miste',
          'Grappling & Wrestling',
          'Coaching per Competizioni'
        ],
        achievements: [
          'Multiple medaglie in competizioni BJJ',
          'Istruttore BJJ certificato',
          'Certificazione coaching MMA',
          '8+ anni di esperienza nell\'insegnamento'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore BJJ & Striking',
        background: 'Christian porta una ricchezza di esperienza competitiva e conoscenza tecnica alla Sport Academy. Il suo stile di insegnamento dinamico e l\'attenzione ai dettagli aiutano gli studenti a sviluppare sia abilità fondamentali che tecniche avanzate.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Grappling',
          'Striking'
        ],
        achievements: [
          'Multiple medaglie in competizioni',
          'Multiple match MMA'
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
          description: 'Ogni studente riceve attenzione personalizzata e guida su misura per i propri obiettivi e livello di abilità.'
        },
        respect: {
          title: 'Rispetto & Disciplina',
          description: 'Coltiviamo un ambiente di rispetto reciproco, disciplina e apprendimento continuo per tutti i praticanti.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Sperimenta un\'istruzione di classe mondiale e porta il tuo viaggio nelle arti marziali al livello successivo.'
      }
    },
    schedule: {
      hero: {
        title: 'Orario degli Allenamenti',
        description: 'Trova gli orari di allenamento perfetti che si adattano al tuo programma. Offriamo lezioni durante tutta la settimana in entrambe le nostre location a Campo Tures e Brunico.'
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
        arrive: 'Arriva 10-15 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'Le lezioni BJJ richiedono un gi (uniforme)',
        noGi: 'Le lezioni di Grappling e MMA sono senza gi'
      },
      membershipBenefits: 'Benefici dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutte le lezioni incluso',
        openMat: 'Sessioni di tatami libero gratuite',
        bothLocations: 'Allenamento in entrambe le location',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto per Unirti a una Lezione?',
        description: 'Prenota il tuo posto e inizia ad allenarti con noi oggi.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il pacchetto di allenamento perfetto per i tuoi obiettivi. Tutti gli abbonamenti includono l\'accesso alla nostra gamma completa di lezioni e a entrambe le location di allenamento.'
      },
      mainSeason: {
        title: 'Stagione Principale',
        period: 'Settembre - Giugno',
        duration: '10 mesi di allenamento illimitato',
        mostPopular: 'Più Popolare'
      },
      summerSeason: {
        title: 'Stagione Estiva',
        period: 'Luglio - Agosto',
        duration: '2,5 mesi di allenamento estivo'
      },
      bjjOnly: {
        title: 'Abbonamento Solo BJJ',
        program: 'Allenamento Focalizzato su BJJ',
        subtitle: 'Perfetto per chi vuole concentrarsi esclusivamente sul Brazilian Jiu-Jitsu',
        description: 'Accesso a tutte le lezioni BJJ in entrambe le location'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa È Incluso',
      mainIncludes: [
        'Accesso illimitato a tutte le lezioni',
        'Allenamento in entrambe le location',
        'Sessioni di tatami libero',
        'Istruzione adatta ai principianti',
        'Accesso al team competitivo'
      ],
      summerIncludes: [
        'Tutte le lezioni estive incluse',
        'Accesso a entrambe le location',
        'Orario estivo flessibile',
        'Perfetto per l\'allenamento in vacanza'
      ],
      bjjIncludes: [
        'Tutte le lezioni BJJ (gi e no-gi)',
        'Accesso a entrambe le location',
        'Sessioni di tatami libero',
        'Sistema di progressione delle cinture',
        'Preparazione per competizioni'
      ],
      selectMainSeason: 'Seleziona Stagione Principale',
      selectSummerSeason: 'Seleziona Stagione Estiva',
      selectBjjOnly: 'Seleziona Solo BJJ',
      additionalServices: {
        title: 'Servizi Aggiuntivi',
        description: 'Migliora il tuo allenamento con i nostri programmi specializzati e opzioni di coaching personale.'
      },
      personalTraining: {
        title: 'Allenamento Personale',
        description: 'Coaching uno-a-uno su misura per i tuoi obiettivi e bisogni specifici.',
        price: '€50',
        duration: 'per sessione'
      },
      competitionPrep: {
        title: 'Preparazione Competizioni',
        description: 'Allenamento specializzato per prepararsi a competizioni BJJ, grappling o MMA.',
        price: '€40',
        duration: 'per sessione'
      },
      seminars: {
        title: 'Seminari',
        description: 'Workshop speciali con istruttori ospiti e sessioni di tecniche avanzate.',
        price: '€30',
        duration: 'per seminario'
      },
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra le stagioni?',
          answer: 'La nostra stagione principale va da settembre a giugno con il nostro programma completo. La stagione estiva offre un programma condensato perfetto per mantenere l\'allenamento durante i mesi di vacanza.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le location?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso alle lezioni in entrambe le nostre strutture a Campo Tures e Brunico.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Contattaci per programmare una lezione di prova gratuita e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Di che attrezzatura ho bisogno?',
          answer: 'Per il BJJ avrai bisogno di un gi (uniforme). Per grappling e MMA, solo abbigliamento comodo da allenamento. Forniamo guanti e parastinchi.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio Oggi',
        description: 'Scegli il tuo abbonamento e unisciti alla nostra comunità di artisti marziali dedicati.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Pronto per iniziare il tuo viaggio nelle arti marziali? Mettiti in contatto con noi per saperne di più sui nostri programmi, programmare una lezione di prova o fare domande.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con Sport Academy'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      address: 'Indirizzo',
      trainingSchedule: 'Orario Allenamenti',
      locations: {
        title: 'Le Nostre Location',
        subtitle: 'Due location convenienti in Alto Adige'
      },
      parkingAccessibility: {
        title: 'Parcheggio & Accessibilità',
        subtitle: 'Accesso facile e parcheggio conveniente in entrambe le location'
      },
      parking: 'Parcheggio',
      publicTransport: 'Trasporto Pubblico',
      accessibility: 'Accessibilità',
      campoTures: {
        parking: 'Parcheggio gratuito in strada disponibile direttamente di fronte alla struttura. Posti aggiuntivi nel centro città vicino.',
        transport: 'Collegamenti regolari in autobus da Brunico e zone circostanti. La stazione ferroviaria di Campo Tures è a 5 minuti a piedi.',
        accessibility: 'Struttura al piano terra con ingresso accessibile in sedia a rotelle e servizi igienici.'
      },
      brunico: {
        parking: 'Parcheggio gratuito disponibile nel parcheggio della struttura. Parcheggio aggiuntivo in strada in Via Maria Teresa Riedl.',
        transport: 'Posizione centrale con eccellenti collegamenti in autobus. La stazione ferroviaria di Brunico è a 10 minuti a piedi.',
        accessibility: 'Accesso con ascensore al piano di allenamento. Ingresso e strutture accessibili in sedia a rotelle.'
      },
      visitRequirements: {
        title: 'Prima Volta qui?',
        subtitle: 'Ecco cosa devi sapere per la tua prima lezione'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      bring: [
        'Abbigliamento comodo da allenamento',
        'Bottiglia d\'acqua',
        'Asciugamano',
        'Gi BJJ (solo per lezioni BJJ)',
        'Atteggiamento positivo e voglia di imparare'
      ],
      whatWeProvide: 'Cosa Forniamo',
      provide: [
        'Tappetini e attrezzature per l\'allenamento',
        'Guanti e parastinchi',
        'Spogliatoi e docce',
        'Istruzione adatta ai principianti',
        'Atmosfera comunitaria accogliente'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Requisiti di Età: 16+ per lezioni adulti, lezioni bambini disponibili per età 6-16',
        health: 'Salute: Si prega di informare gli istruttori di eventuali infortuni o condizioni di salute',
        equipment: 'Attrezzatura: Forniamo guanti e parastinchi, ma gli studenti dovrebbero acquistare i propri',
        payment: 'Pagamento: Accettiamo solo pagamenti con carta e contanti'
      },
      cta: {
        title: 'Pronto per Iniziare?',
        description: 'Contattaci oggi per programmare la tua prima lezione e iniziare il tuo viaggio nelle arti marziali.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Padroneggia l\'arte gentile della leva, tecnica e controllo a terra'
        },
        overview: {
          title: 'L\'Arte Gentile',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul ground fighting e le prese di submission. Enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte attraverso tecnica corretta, leva e tempismo.',
            'Il nostro programma BJJ copre sia l\'allenamento con gi che senza gi, fornendo agli studenti una comprensione completa di questa bellissima arte. Che tu sia interessato all\'autodifesa, alla competizione o semplicemente a mantenerti in forma, il BJJ offre qualcosa per tutti.',
            'Alla Sport Academy seguiamo la metodologia tradizionale del BJJ incorporando tecniche di allenamento moderne per assicurare che i nostri studenti sviluppino sia competenza tecnica che abilità di applicazione pratica.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia le abilità fondamentali che formano la base del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Fondamentali della guardia chiusa',
              'Variazioni della guardia aperta',
              'Spazzate e submission dalla guardia',
              'Ritenzione e recupero della guardia'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Strangolamenti e soffocamenti',
              'Leve articolari e armbar',
              'Leve alle gambe e attacchi ai piedi',
              'Catene di submission e setup'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e side control',
              'Back control e rear mount',
              'Knee on belly',
              'Transizioni e fughe'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema delle Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di ranking tradizionale del Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Filosofia delle Cinture',
            description: 'Il sistema delle cinture BJJ rappresenta non solo conoscenza tecnica, ma anche tempo sul tatami, sviluppo del carattere e la capacità di aiutare altri ad imparare. Ogni cintura è guadagnata attraverso dedizione, costanza e dimostrazione di crescita sia tecnica che personale.'
          }
        },
        history: {
          title: 'Storia & Lignaggio',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu si è evoluto dal jujutsu giapponese tradizionale e dal judo, portato in Brasile da Mitsuyo Maeda all\'inizio del XX secolo. La famiglia Gracie, in particolare Helio Gracie, ha adattato queste tecniche per creare un sistema più efficiente per i praticanti più piccoli.',
            'L\'arte ha guadagnato riconoscimento mondiale attraverso i primi eventi UFC, dove Royce Gracie ha dimostrato l\'efficacia del BJJ contro avversari più grandi provenienti da diversi background di arti marziali.',
            'Oggi il BJJ continua ad evolversi sia come arte marziale che come sport, con i praticanti che raffinano costantemente le tecniche e sviluppano nuove strategie sia per l\'autodifesa che per la competizione.'
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
                description: 'Fondatore del Gracie Jiu-Jitsu e della metodologia BJJ'
              },
              {
                name: 'Royce Gracie',
                description: 'Pioniere UFC che mostrò l\'efficacia del BJJ'
              }
            ]
          }
        },
        schedule: {
          title: 'Orario Allenamento BJJ',
          subtitle: 'Unisciti alle nostre lezioni regolari di BJJ in entrambe le location'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio nel BJJ',
          description: 'Sperimenta l\'arte gentile e scopri perché il BJJ è una delle arti marziali più efficaci.',
          joinButton: 'Unisciti alle Lezioni BJJ'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina tutte le discipline delle arti marziali'
        },
        overview: {
          title: 'L\'Arte di Combattimento Definitiva',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono lo sport da combattimento più completo, combinando tecniche da boxe, kickboxing, wrestling, Brazilian Jiu-Jitsu e altre arti marziali. Rappresenta l\'evoluzione delle arti marziali in un sistema di combattimento comprensivo.',
            'Il nostro programma MMA è progettato per sviluppare combattenti completi che sono a loro agio in tutti i range di combattimento: striking in piedi, lavoro in clinch, takedown e ground fighting. Ci concentriamo sia sui componenti individuali che su come si integrano insieme.',
            'Che il tuo obiettivo sia la competizione, l\'autodifesa o il fitness, il nostro allenamento MMA ti sfiderà fisicamente e mentalmente insegnandoti le tecniche di combattimento più efficaci da tutto il mondo.'
          ]
        },
        techniques: {
          title: 'Discipline Fondamentali',
          subtitle: 'Padroneggia tutti gli aspetti del combattimento nelle arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Fondamentali e combinazioni di boxe',
              'Tecniche di kickboxing e Muay Thai',
              'Gioco di gambe e movimento della testa',
              'Difesa da striking e contrattacchi'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche e setup di takedown',
              'Difesa da takedown e sprawl',
              'Lavoro in clinch e dirty boxing',
              'Lavoro in gabbia e wrestling al muro'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Tecniche di ground and pound',
              'Submission grappling',
              'Posizioni di controllo a terra',
              'Transizioni e fughe'
            ]
          }
        },
        history: {
          title: 'Evoluzione delle MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma le MMA moderne iniziarono con i combattimenti vale tudo in Brasile e alla fine si evolsero nello sport che conosciamo oggi attraverso organizzazioni come l\'UFC.',
            'I primi giorni delle MMA videro specialisti di diverse arti marziali competere per determinare lo stile di combattimento più efficace. Questo portò alla realizzazione che i combattenti di maggior successo dovevano essere completi in tutti gli aspetti del combattimento.',
            'Le MMA di oggi continuano ad evolversi rapidamente, con i combattenti che adattano e migliorano costantemente le tecniche di tutte le arti marziali per rimanere competitivi in questo sport impegnativo.'
          ],
          milestones: {
            title: 'Pietre Miliari Chiave',
            events: [
              {
                year: '1993',
                description: 'Il primo evento UFC mostra diverse arti marziali'
              },
              {
                year: '2000s',
                description: 'Evoluzione verso combattenti completi'
              },
              {
                year: 'Presente',
                description: 'Le MMA diventano sport globale mainstream'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Perché l\'allenamento MMA è il workout definitivo e sistema di autodifesa',
          items: [
            {
              icon: '💪',
              title: 'Fitness Completo',
              description: 'Condizionamento e forza per tutto il corpo'
            },
            {
              icon: '🧠',
              title: 'Resistenza Mentale',
              description: 'Sviluppa fiducia e resilienza'
            },
            {
              icon: '🥊',
              title: 'Autodifesa',
              description: 'Tecniche applicabili nel mondo reale'
            },
            {
              icon: '⚡',
              title: 'Performance Atletica',
              description: 'Coordinazione e riflessi migliorati'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento MMA',
          subtitle: 'Unisciti al nostro programma MMA comprensivo'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Impara dalle tecniche dei più grandi combattenti',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Maestro di striking e creatività'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Leggendario campione dei pesi massimi'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Il più completo peso mediomassimo di sempre'
            }
          ]
        },
        cta: {
          title: 'Diventa un Combattente Completo',
          description: 'Allenati nello sport da combattimento più efficace al mondo e sblocca il tuo potenziale.',
          joinButton: 'Unisciti all\'Allenamento MMA'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Padroneggia l\'arte del controllo, takedown e submission senza il gi'
        },
        overview: {
          title: 'L\'Arte del Controllo',
          paragraphs: [
            'Il Grappling è l\'arte di controllare e sottomettere gli avversari attraverso wrestling, takedown e ground fighting senza il gi tradizionale. Enfatizza velocità, atletismo e adattabilità in un ambiente più dinamico.',
            'Il nostro programma di grappling combina elementi da wrestling, Brazilian Jiu-Jitsu e submission grappling per creare grappler completi che eccellono sia nei takedown che nel controllo a terra.',
            'Perfetto per la preparazione MMA o come disciplina a sé stante, il grappling sviluppa incredibile forza funzionale, flessibilità e resistenza mentale insegnando abilità di autodifesa altamente efficaci.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia le abilità fondamentali del grappling senza gi',
          takedowns: {
            title: 'Takedown',
            items: [
              'Takedown single e double leg',
              'Lanci d\'anca e proiezioni',
              'Spazzate con i piedi e sgambetti',
              'Difesa da takedown e sprawl'
            ]
          },
          control: {
            title: 'Controllo',
            items: [
              'Dominanza in posizione superiore',
              'Side control e mount',
              'Tecniche di back control',
              'Transizioni e scramble'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Strangolamenti e soffocamenti',
              'Leve articolari e attacchi alle braccia',
              'Leve alle gambe e heel hook',
              'Combinazioni di submission'
            ]
          }
        },
        methodology: {
          title: 'Metodologia di Allenamento',
          subtitle: 'Il nostro approccio sistematico all\'eccellenza nel grappling',
          technical: {
            title: 'Sviluppo Tecnico',
            methods: [
              {
                title: 'Drilling',
                description: 'Pratica ripetitiva di movimenti fondamentali'
              },
              {
                title: 'Sparring Posizionale',
                description: 'Allenamento focalizzato da posizioni specifiche'
              },
              {
                title: 'Flow Rolling',
                description: 'Pratica di movimento continuo e transizioni'
              }
            ]
          },
          conditioning: {
            title: 'Condizionamento Fisico',
            methods: [
              {
                title: 'Cardio Grappling',
                description: 'Allenamento cardiovascolare sport-specifico'
              },
              {
                title: 'Forza Funzionale',
                description: 'Costruzione di forza per movimenti di grappling'
              },
              {
                title: 'Flessibilità',
                description: 'Mobilità e lavoro di prevenzione infortuni'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Perché il grappling è una delle arti marziali più efficaci',
          items: [
            {
              icon: '🤼',
              title: 'Combattimento Reale',
              description: 'Abilità di combattimento pratiche'
            },
            {
              icon: '💪',
              title: 'Forza Funzionale',
              description: 'Condizionamento per tutto il corpo'
            },
            {
              icon: '🧘',
              title: 'Scacchi Mentali',
              description: 'Pensiero strategico sotto pressione'
            },
            {
              icon: '⚡',
              title: 'Potenza Esplosiva',
              description: 'Sviluppo atletico dinamico'
            }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Unisciti alle nostre lezioni dinamiche di grappling'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Impara dai più grandi grappler della storia',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'The King',
              description: 'Campione dominante di grappling no-gi'
            },
            {
              name: 'Marcelo Garcia',
              title: 'The Magician',
              description: 'Maestro tecnico del grappling'
            },
            {
              name: 'John Danaher',
              title: 'The Professor',
              description: 'Coach rivoluzionario di grappling'
            }
          ]
        },
        cta: {
          title: 'Padroneggia l\'Arte del Grappling',
          description: 'Sviluppa abilità superiori di grappling e diventa un artista marziale completo.',
          joinButton: 'Unisciti alle Lezioni di Grappling'
        }
      }
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