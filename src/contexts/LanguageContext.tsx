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
      instantConfirmation: 'Instant Confirmation',
      visitUs: 'Visit Us',
      dropInWelcome: 'Drop-ins Welcome',
      duringTrainingHours: 'During Training Hours',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates & DMs'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Located in the heart of South Tyrol, Sport Academy has been the premier destination for MMA, Brazilian Jiu-Jitsu, and Grappling training since 2017. Our expert coaches Matteo Parolin and Christian Zecchetto bring world-class instruction to Campo Tures and Brunico.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Training champions since 2017',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Training Programs',
        programsDescription: 'MMA, BJJ, Grappling & more',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Master the art of combat sports with our comprehensive training programs'
      },
      mma: {
        description: 'Complete mixed martial arts training combining striking, wrestling, and ground fighting techniques for the ultimate combat experience.'
      },
      bjj: {
        description: 'Master the gentle art of Brazilian Jiu-Jitsu, focusing on leverage, technique, and strategic ground fighting.'
      },
      grappling: {
        description: 'No-gi grappling training emphasizing takedowns, control, and submissions in a dynamic, realistic environment.'
      },
      getStarted: {
        title: 'Get Started Today',
        subtitle: 'Choose your path to martial arts excellence'
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
        description: 'Discover our comprehensive range of martial arts programs designed for all skill levels and ages. From beginner-friendly introductions to advanced competition training.'
      },
      mma: {
        title: 'MMA',
        description: 'MMA is a complete combat sport that combines striking, wrestling, and ground fighting. It\'s ideal for those looking for a well-rounded, realistic, and physically demanding discipline.',
        features: [
          'Striking techniques: punches, kicks, elbows, knees',
          'Takedowns and clinch work (wrestling and judo)',
          'Ground control and submissions (BJJ-based)',
          'Physical conditioning and pressure management'
        ]
      },
      bjj: {
        title: 'BJJ',
        description: 'Brazilian Jiu-Jitsu focuses on ground fighting and submissions using leverage and technique over strength. It\'s a strategic, highly effective martial art suitable for all levels and body types.',
        features: [
          'Key ground positions and transitions',
          'Submission techniques and how to defend them',
          'How to control opponents and escape bad positions',
          'Focus, discipline, and self-confidence development'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Grappling is a no-strike combat sport based on takedowns, control, and submissions, practiced without the gi. It\'s realistic, dynamic, and commonly used in MMA and self-defense training.',
        features: [
          'Takedown techniques and defense from standing',
          'Guard passing and ground control',
          'Joint locks and choke submissions',
          'Agility, balance, and body awareness'
        ]
      },
      kidsBjj: {
        title: 'BJJ for Kids',
        description: 'A structured course for kids aged 8 to 14 that introduces them to Brazilian Jiu-Jitsu in a safe and positive environment. Through technique and playful drills, kids build physical and mental skills while having fun.',
        features: [
          'Basic BJJ movements, positions, and simple submissions',
          'How to fall, roll, and move safely on the ground',
          'Respect for rules, instructors, and teammates',
          'Confidence, discipline, and emotional control'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling techniques focusing on takedowns, control, and conditioning. Essential for MMA and self-defense applications.',
        features: [
          'Single and double leg takedowns',
          'Wrestling stance and movement',
          'Sprawls and takedown defense',
          'Conditioning and mental toughness'
        ]
      },
      whatYouLearn: 'What You\'ll Learn',
      cta: {
        title: 'Ready to Start Training?',
        description: 'Join our community of dedicated martial artists and begin your journey today.'
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
        arrive: 'Arrive 10 minutes early for warm-up',
        water: 'Bring water bottle and towel',
        gi: 'BJJ classes require gi (uniform)',
        noGi: 'Grappling and MMA are no-gi classes'
      },
      membershipBenefits: 'Membership Benefits',
      benefits: {
        allClasses: 'Access to all classes included',
        openMat: 'Free open mat sessions',
        bothLocations: 'Train at both locations',
        personalTraining: 'Discounted personal training'
      },
      cta: {
        title: 'Ready to Join?',
        description: 'Start your martial arts journey with us today.'
      }
    },
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Meet our world-class instructors who bring decades of experience and championship-level expertise to every training session.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 15 years of martial arts experience, Matteo is a certified BJJ black belt and accomplished MMA fighter. He founded Sport Academy in 2017 with the vision of bringing world-class martial arts training to South Tyrol.',
        specializations: [
          'Brazilian Jiu-Jitsu (Black Belt)',
          'Mixed Martial Arts',
          'Competition Preparation',
          'Youth Development'
        ],
        achievements: [
          'BJJ Black Belt under renowned lineage',
          'Professional MMA fighter',
          'Multiple regional championship titles',
          '8+ years coaching experience'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings a wealth of knowledge in grappling and wrestling techniques. His technical precision and patient teaching style make him an invaluable asset to our coaching team.',
        specializations: [
          'No-Gi Grappling',
          'Wrestling Techniques',
          'Takedown Defense',
          'Competition Strategy'
        ],
        achievements: [
          'Advanced grappling certifications',
          'Regional wrestling champion',
          'Specialized in takedown techniques',
          '6+ years coaching experience'
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
          description: 'Every student receives personalized attention and training plans tailored to their goals and skill level.'
        },
        respect: {
          title: 'Respect & Discipline',
          description: 'We instill values of respect, discipline, and sportsmanship that extend far beyond the training mats.'
        }
      },
      cta: {
        title: 'Train with the Best',
        description: 'Experience world-class instruction and take your martial arts skills to the next level.'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the perfect training package for your martial arts journey. All memberships include access to our complete range of classes and both training locations.'
      },
      mainSeason: {
        title: 'Main Season',
        period: 'September - June',
        duration: '10 months of intensive training',
        mostPopular: 'Most Popular'
      },
      summerSeason: {
        title: 'Summer Season',
        period: 'July - August',
        duration: '2.5 months of summer training'
      },
      bjjOnly: {
        title: 'BJJ Only Membership',
        subtitle: 'Dedicated Brazilian Jiu-Jitsu training program',
        program: 'BJJ Focused Program',
        description: 'Access to all BJJ classes only'
      },
      adults: 'Adults',
      students: 'Students',
      month: 'month',
      whatsIncluded: 'What\'s Included',
      mainIncludes: [
        'Unlimited access to all classes',
        'Training at both locations',
        'Open mat sessions',
        'Beginner workshops',
        'Competition team access'
      ],
      summerIncludes: [
        'All summer classes',
        'Both locations access',
        'Open mat sessions',
        'Flexible schedule'
      ],
      bjjIncludes: [
        'All BJJ classes',
        'Both locations',
        'Open mat for BJJ',
        'Gi and No-Gi training'
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
        description: 'One-on-one coaching sessions tailored to your specific goals and needs.',
        price: '€50',
        duration: 'per session'
      },
      competitionPrep: {
        title: 'Competition Prep',
        description: 'Specialized training programs designed to prepare you for tournaments and competitions.',
        price: '€80',
        duration: 'per session'
      },
      seminars: {
        title: 'Seminars & Workshops',
        description: 'Regular seminars with guest instructors and specialized technique workshops.',
        price: '€30',
        duration: 'per seminar'
      },
      faq: {
        title: 'Frequently Asked Questions',
        seasons: {
          question: 'What\'s the difference between Main Season and Summer Season?',
          answer: 'Main Season runs from September to June (10 months) with our full program schedule. Summer Season is July-August (2.5 months) with a more relaxed schedule perfect for maintaining training during vacation time.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to classes at both our Campo Tures and Brunico locations. You can mix and match based on your schedule.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer trial classes for new students. Contact us to schedule your first session and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For beginners, just comfortable workout clothes. We can provide temporary equipment for trial classes. As you progress, you\'ll need a gi for BJJ classes and basic protective gear for MMA.'
        }
      },
      cta: {
        title: 'Start Your Journey',
        description: 'Join our martial arts family and discover your potential.'
      }
    },
    contact: {
      hero: {
        title: 'Contact Us',
        description: 'Ready to start your martial arts journey? Get in touch with us today. We\'re here to answer your questions and help you find the perfect training program.'
      },
      getInTouch: {
        title: 'Get In Touch',
        subtitle: 'Multiple ways to connect with our team'
      },
      callUs: 'Call Us',
      instagram: 'Instagram',
      locations: {
        title: 'Our Locations',
        subtitle: 'Two convenient training facilities in South Tyrol'
      },
      address: 'Address',
      trainingSchedule: 'Training Schedule',
      visitRequirements: {
        title: 'Visit Requirements',
        subtitle: 'Everything you need to know for your first visit'
      },
      firstTimeVisitors: 'First Time Visitors',
      whatToBring: 'What to Bring',
      bring: [
        'Comfortable workout clothes',
        'Water bottle',
        'Towel',
        'Positive attitude and willingness to learn'
      ],
      whatWeProvide: 'What We Provide',
      provide: [
        'All training equipment for beginners',
        'Clean, safe training environment',
        'Expert instruction and guidance',
        'Supportive community atmosphere'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'The age for kids classes is 8-14 years old',
        health: 'Please inform us of any injuries or health conditions',
        equipment: 'Trial students can borrow temporally basic equipment',
        payment: 'Cash and card are the only payment methods accepted'
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Take the first step towards your martial arts goals.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Master the gentle art of leverage, technique, and strategic ground fighting'
        },
        overview: {
          title: 'The Gentle Art',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent through proper technique, leverage, and timing.',
            'BJJ promotes the concept that most of the advantage of a larger, stronger opponent comes from superior reach and more powerful strikes, both of which are negated when grappling on the ground. BJJ places emphasis on taking an opponent to the ground and utilizing ground fighting techniques and submission holds involving joint-locks and chokeholds.',
            'At Sport Academy, our BJJ program is designed to teach students not just the physical techniques, but also the mental aspects of the art - patience, problem-solving, and strategic thinking that make BJJ often called "physical chess."'
          ]
        },
        techniques: {
          title: 'Core BJJ Techniques',
          subtitle: 'Master the fundamental skills that form the foundation of Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard Work',
            items: [
              'Closed Guard fundamentals',
              'Open Guard variations',
              'Guard retention and recovery',
              'Sweeps and submissions from guard'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Arm locks (Armbar, Kimura, Americana)',
              'Chokes (Rear naked, Triangle, Guillotine)',
              'Leg locks (basic ankle locks)',
              'Submission defense and escapes'
            ]
          },
          positions: {
            title: 'Positional Control',
            items: [
              'Mount and mount escapes',
              'Side control and knee on belly',
              'Back control and back escapes',
              'Transitional movements'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the traditional Brazilian Jiu-Jitsu ranking system',
          philosophy: {
            title: 'Belt Philosophy',
            description: 'In BJJ, belt progression represents not just technical knowledge, but also character development, teaching ability, and time on the mat. Each belt level typically takes 2-3 years to achieve, emphasizing the journey over the destination.'
          }
        },
        history: {
          title: 'History of BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu originated in the early 20th century when Japanese judoka Mitsuyo Maeda taught traditional jujutsu and judo to the Gracie family in Brazil. The Gracies, particularly Helio Gracie, adapted these techniques to create a more effective system for smaller practitioners.',
            'The art gained international recognition through the Ultimate Fighting Championship (UFC), where Royce Gracie demonstrated BJJ\'s effectiveness against larger opponents using different martial arts styles. This led to BJJ becoming a fundamental component of modern mixed martial arts.',
            'Today, BJJ is practiced worldwide both as a martial art and as a sport, with major competitions like the World Jiu-Jitsu Championship (Mundials) attracting thousands of competitors from around the globe.'
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
                description: 'Founder of Gracie Jiu-Jitsu, adapted techniques for smaller practitioners'
              },
              {
                name: 'Royce Gracie',
                description: 'Demonstrated BJJ effectiveness in early UFC competitions'
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
          description: 'Experience the gentle art that has revolutionized martial arts worldwide.',
          joinButton: 'Join BJJ Classes'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Master the art of control, takedowns, and submissions without the gi'
        },
        overview: {
          title: 'No-Gi Grappling',
          paragraphs: [
            'Grappling, also known as submission wrestling or no-gi grappling, is a form of combat sport that focuses on takedowns, ground control, and submission holds without the traditional gi (uniform). This style emphasizes speed, athleticism, and adaptability.',
            'No-gi grappling is particularly relevant for mixed martial arts (MMA) and self-defense situations, as it more closely mimics real-world scenarios where opponents won\'t be wearing a gi. The absence of gi grips forces practitioners to rely on underhooks, overhooks, and body control.',
            'Our grappling program at Sport Academy combines elements from wrestling, Brazilian Jiu-Jitsu, and submission wrestling to create a comprehensive ground fighting system that prepares students for both competition and practical application.'
          ]
        },
        techniques: {
          title: 'Essential Grappling Techniques',
          subtitle: 'Develop the core skills needed for effective no-gi grappling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single and double leg takedowns',
              'Hip tosses and throws',
              'Sprawls and takedown defense',
              'Clinch work and dirty boxing'
            ]
          },
          control: {
            title: 'Ground Control',
            items: [
              'Positional dominance without gi grips',
              'Underhooks and overhooks',
              'Body locks and control ties',
              'Transitional movements and scrambles'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'No-gi chokes and strangles',
              'Arm locks and shoulder locks',
              'Leg locks and ankle attacks',
              'Submission chains and setups'
            ]
          }
        },
        methodology: {
          title: 'Training Methodology',
          subtitle: 'Our systematic approach to grappling development',
          technical: {
            title: 'Technical Development',
            methods: [
              {
                title: 'Drilling',
                description: 'Repetitive practice of techniques to build muscle memory'
              },
              {
                title: 'Positional Sparring',
                description: 'Live training from specific positions to develop timing'
              },
              {
                title: 'Flow Rolling',
                description: 'Continuous movement practice to improve transitions'
              }
            ]
          },
          conditioning: {
            title: 'Physical Conditioning',
            methods: [
              {
                title: 'Grappling Cardio',
                description: 'Sport-specific conditioning for endurance'
              },
              {
                title: 'Strength Training',
                description: 'Functional strength for grappling movements'
              },
              {
                title: 'Flexibility',
                description: 'Mobility work to prevent injury and improve performance'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of Grappling',
          subtitle: 'Physical and mental advantages of no-gi grappling training',
          items: [
            {
              icon: '💪',
              title: 'Full Body Strength',
              description: 'Develops functional strength and muscle endurance'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Builds resilience and problem-solving skills'
            },
            {
              icon: '⚡',
              title: 'Explosive Power',
              description: 'Improves speed and explosive movement'
            },
            {
              icon: '🎯',
              title: 'Self-Defense',
              description: 'Practical skills for real-world situations'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'Train no-gi grappling at both our locations'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Learn from the techniques developed by grappling pioneers',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Catch Wrestling Expert',
              description: 'Former UFC Heavyweight Champion known for catch wrestling'
            },
            {
              name: 'Eddie Bravo',
              title: '10th Planet Founder',
              description: 'Revolutionary no-gi system creator'
            },
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominant no-gi grappler and leg lock specialist'
            }
          ]
        },
        cta: {
          title: 'Master No-Gi Grappling',
          description: 'Develop the skills that translate directly to MMA and self-defense.',
          joinButton: 'Join Grappling Classes'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining striking, wrestling, and ground fighting'
        },
        overview: {
          title: 'The Complete Fighting System',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, kickboxing, wrestling, Brazilian Jiu-Jitsu, and other martial arts. MMA tests a fighter\'s skills in all ranges of combat: standing striking, clinch work, takedowns, and ground fighting.',
            'Modern MMA has evolved into a sophisticated sport with specific techniques and strategies for transitioning between different phases of combat. Successful MMA fighters must be well-rounded, possessing skills in multiple disciplines while understanding how they integrate together.',
            'Our MMA program at Sport Academy provides comprehensive training in all aspects of mixed martial arts, from fundamental techniques to advanced fight strategies, preparing students for competition or simply developing the most complete martial arts skill set possible.'
          ]
        },
        techniques: {
          title: 'MMA Techniques',
          subtitle: 'Master all ranges of combat in mixed martial arts',
          striking: {
            title: 'Striking',
            items: [
              'Boxing fundamentals and combinations',
              'Muay Thai kicks, knees, and elbows',
              'Footwork and head movement',
              'Striking in the clinch'
            ]
          },
          wrestling: {
            title: 'Wrestling & Takedowns',
            items: [
              'Single and double leg takedowns',
              'Sprawls and takedown defense',
              'Cage work and wall wrestling',
              'Ground and pound techniques'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'BJJ for MMA applications',
              'Submissions from top position',
              'Ground and pound defense',
              'Getting back to feet'
            ]
          }
        },
        history: {
          title: 'History of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with the Ultimate Fighting Championship (UFC) in 1993. The early UFCs were designed to determine which martial art was most effective in real combat situations.',
            'The sport evolved rapidly as fighters realized they needed to be proficient in multiple disciplines to compete effectively. This led to the development of modern MMA training methods and the emergence of complete mixed martial artists.',
            'Today, MMA is one of the fastest-growing sports in the world, with organizations like the UFC, Bellator, and ONE Championship showcasing the highest levels of mixed martial arts competition globally.'
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
                description: 'Unified Rules of MMA established, creating modern sport structure'
              },
              {
                year: '2016',
                description: 'MMA becomes legal in New York, completing legalization across US'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of MMA Training',
          subtitle: 'Physical and mental advantages of mixed martial arts',
          items: [
            {
              icon: '🥊',
              title: 'Complete Fitness',
              description: 'Ultimate full-body workout combining cardio and strength'
            },
            {
              icon: '🛡️',
              title: 'Self-Defense',
              description: 'Most practical and effective self-defense skills'
            },
            {
              icon: '🧠',
              title: 'Mental Strength',
              description: 'Develops confidence, discipline, and mental toughness'
            },
            {
              icon: '⚡',
              title: 'Athleticism',
              description: 'Improves coordination, reflexes, and overall athleticism'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Complete mixed martial arts training at both locations'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Learn from the techniques of mixed martial arts pioneers',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC Pioneer',
              description: 'Proved effectiveness of BJJ in early UFC events'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Longest reigning UFC Middleweight Champion'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendary heavyweight with incredible ground game'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Train in the world\'s most effective combat sport.',
          joinButton: 'Join MMA Classes'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Forging Champions Since 2017',
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
      instantConfirmation: 'Sofortige Bestätigung',
      visitUs: 'Besuchen Sie Uns',
      dropInWelcome: 'Spontanbesuche Willkommen',
      duringTrainingHours: 'Während der Trainingszeiten',
      responseWithin2Hours: 'Antwort innerhalb 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates & DMs'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Willkommen bei der Sport Academy',
        description: 'Im Herzen Südtirols gelegen, ist die Sport Academy seit 2017 die führende Destination für MMA-, Brazilian Jiu-Jitsu- und Grappling-Training. Unsere Experten-Trainer Matteo Parolin und Christian Zecchetto bringen Weltklasse-Unterricht nach Sand in Taufers und Bruneck.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Champions seit 2017 trainieren',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Sand in Taufers & Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'MMA, BJJ, Grappling & mehr',
        exploreClasses: 'Unsere Kurse Entdecken'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Meistere die Kunst der Kampfsportarten mit unseren umfassenden Trainingsprogrammen'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training, das Schlag-, Ring- und Bodenkampftechniken für das ultimative Kampferlebnis kombiniert.'
      },
      bjj: {
        description: 'Meistere die sanfte Kunst des Brazilian Jiu-Jitsu, mit Fokus auf Hebelwirkung, Technik und strategischen Bodenkampf.'
      },
      grappling: {
        description: 'No-Gi Grappling-Training mit Schwerpunkt auf Takedowns, Kontrolle und Submissions in einer dynamischen, realistischen Umgebung.'
      },
      getStarted: {
        title: 'Heute Beginnen',
        subtitle: 'Wähle deinen Weg zur Kampfsport-Exzellenz'
      },
      quickLinks: {
        viewClasses: 'Kurse Ansehen',
        viewClassesDesc: 'Entdecke unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan Prüfen',
        checkScheduleDesc: 'Finde deine perfekte Trainingszeit',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wähle dein Trainingspaket',
        contactUs: 'Kontakt',
        contactUsDesc: 'Kontaktiere unser Team'
      }
    },
    classes: {
      hero: {
        title: 'Unsere Kurse',
        description: 'Entdecke unser umfassendes Angebot an Kampfsportprogrammen, die für alle Fähigkeitsstufen und Altersgruppen konzipiert sind. Von anfängerfreundlichen Einführungen bis hin zu fortgeschrittenem Wettkampftraining.'
      },
      mma: {
        title: 'MMA',
        description: 'MMA ist ein kompletter Kampfsport, der Schlagen, Ringen und Bodenkampf kombiniert. Es ist ideal für diejenigen, die eine vielseitige, realistische und körperlich anspruchsvolle Disziplin suchen.',
        features: [
          'Schlagtechniken: Schläge, Tritte, Ellbogen, Knie',
          'Takedowns und Clinch-Arbeit (Ringen und Judo)',
          'Bodenkontrolle und Submissions (BJJ-basiert)',
          'Körperliche Konditionierung und Druckmanagement'
        ]
      },
      bjj: {
        title: 'BJJ',
        description: 'Brazilian Jiu-Jitsu konzentriert sich auf Bodenkampf und Submissions unter Verwendung von Hebelwirkung und Technik über Kraft. Es ist eine strategische, hochwirksame Kampfkunst, die für alle Stufen und Körpertypen geeignet ist.',
        features: [
          'Wichtige Bodenpositionen und Übergänge',
          'Submission-Techniken und wie man sie verteidigt',
          'Wie man Gegner kontrolliert und schlechten Positionen entkommt',
          'Fokus, Disziplin und Selbstvertrauen entwickeln'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Grappling ist ein Kampfsport ohne Schläge, basierend auf Takedowns, Kontrolle und Submissions, praktiziert ohne Gi. Es ist realistisch, dynamisch und wird häufig im MMA- und Selbstverteidigungstraining verwendet.',
        features: [
          'Takedown-Techniken und Verteidigung aus dem Stand',
          'Guard-Passing und Bodenkontrolle',
          'Gelenkhebel und Würgegriffe',
          'Beweglichkeit, Balance und Körperbewusstsein'
        ]
      },
      kidsBjj: {
        title: 'BJJ für Kinder',
        description: 'Ein strukturierter Kurs für Kinder im Alter von 8 bis 14 Jahren, der sie in einer sicheren und positiven Umgebung in Brazilian Jiu-Jitsu einführt. Durch Technik und spielerische Übungen bauen Kinder körperliche und geistige Fähigkeiten auf und haben dabei Spaß.',
        features: [
          'Grundlegende BJJ-Bewegungen, Positionen und einfache Submissions',
          'Wie man sicher fällt, rollt und sich am Boden bewegt',
          'Respekt vor Regeln, Lehrern und Teamkameraden',
          'Selbstvertrauen, Disziplin und emotionale Kontrolle'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelle Wrestling-Techniken mit Fokus auf Takedowns, Kontrolle und Konditionierung. Wesentlich für MMA- und Selbstverteidigungsanwendungen.',
        features: [
          'Einzel- und Doppelbein-Takedowns',
          'Wrestling-Haltung und Bewegung',
          'Sprawls und Takedown-Verteidigung',
          'Konditionierung und mentale Stärke'
        ]
      },
      whatYouLearn: 'Was Du Lernst',
      cta: {
        title: 'Bereit Zu Trainieren?',
        description: 'Tritt unserer Gemeinschaft engagierter Kampfkünstler bei und beginne heute deine Reise.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finde die perfekten Trainingszeiten, die zu deinem Zeitplan passen. Wir bieten Kurse während der ganzen Woche an beiden Standorten in Sand in Taufers und Bruneck an.'
      },
      campoTures: 'Sand in Taufers',
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
      striking: 'Schlagen',
      openMat: 'Freies Training',
      importantInfo: 'Wichtige Informationen',
      classGuidelines: 'Kursrichtlinien',
      guidelines: {
        arrive: '10 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'BJJ-Kurse erfordern Gi (Uniform)',
        noGi: 'Grappling und MMA sind No-Gi Kurse'
      },
      membershipBenefits: 'Mitgliedschaftsvorteile',
      benefits: {
        allClasses: 'Zugang zu allen Kursen inklusive',
        openMat: 'Kostenlose freie Trainingseinheiten',
        bothLocations: 'Training an beiden Standorten',
        personalTraining: 'Ermäßigtes Personaltraining'
      },
      cta: {
        title: 'Bereit Beizutreten?',
        description: 'Beginne heute deine Kampfsport-Reise mit uns.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne unsere Weltklasse-Instruktoren kennen, die jahrzehntelange Erfahrung und Expertise auf Meisterschaftsniveau in jede Trainingseinheit einbringen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 15 Jahren Kampfsporterfahrung ist Matteo ein zertifizierter BJJ-Schwarzgurt und erfolgreicher MMA-Kämpfer. Er gründete die Sport Academy 2017 mit der Vision, Weltklasse-Kampfsporttraining nach Südtirol zu bringen.',
        specializations: [
          'Brazilian Jiu-Jitsu (Schwarzgurt)',
          'Mixed Martial Arts',
          'Wettkampfvorbereitung',
          'Jugendentwicklung'
        ],
        achievements: [
          'BJJ-Schwarzgurt unter renommierter Linie',
          'Professioneller MMA-Kämpfer',
          'Mehrere regionale Meistertitel',
          '8+ Jahre Trainererfahrung'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt eine Fülle von Wissen in Grappling- und Wrestling-Techniken mit. Seine technische Präzision und geduldige Unterrichtsmethode machen ihn zu einem unschätzbaren Mitglied unseres Trainerteams.',
        specializations: [
          'No-Gi Grappling',
          'Wrestling-Techniken',
          'Takedown-Verteidigung',
          'Wettkampfstrategie'
        ],
        achievements: [
          'Fortgeschrittene Grappling-Zertifizierungen',
          'Regionaler Wrestling-Meister',
          'Spezialisiert auf Takedown-Techniken',
          '6+ Jahre Trainererfahrung'
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
          description: 'Jeder Schüler erhält persönliche Aufmerksamkeit und Trainingspläne, die auf seine Ziele und sein Fähigkeitsniveau zugeschnitten sind.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir vermitteln Werte von Respekt, Disziplin und Sportlichkeit, die weit über die Trainingsmatten hinausgehen.'
        }
      },
      cta: {
        title: 'Mit Den Besten Trainieren',
        description: 'Erlebe Weltklasse-Unterricht und bringe deine Kampfsportfähigkeiten auf die nächste Stufe.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle das perfekte Trainingspaket für deine Kampfsport-Reise. Alle Mitgliedschaften beinhalten Zugang zu unserem kompletten Kursangebot und beiden Trainingsstandorten.'
      },
      mainSeason: {
        title: 'Hauptsaison',
        period: 'September - Juni',
        duration: '10 Monate intensives Training',
        mostPopular: 'Am Beliebtesten'
      },
      summerSeason: {
        title: 'Sommersaison',
        period: 'Juli - August',
        duration: '2,5 Monate Sommertraining'
      },
      bjjOnly: {
        title: 'Nur BJJ Mitgliedschaft',
        subtitle: 'Spezielles Brazilian Jiu-Jitsu Trainingsprogramm',
        program: 'BJJ Fokussiertes Programm',
        description: 'Zugang nur zu allen BJJ-Kursen'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was Enthalten Ist',
      mainIncludes: [
        'Unbegrenzter Zugang zu allen Kursen',
        'Training an beiden Standorten',
        'Freie Trainingseinheiten',
        'Anfänger-Workshops',
        'Zugang zum Wettkampfteam'
      ],
      summerIncludes: [
        'Alle Sommerkurse',
        'Zugang zu beiden Standorten',
        'Freie Trainingseinheiten',
        'Flexibler Zeitplan'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse',
        'Beide Standorte',
        'Freies Training für BJJ',
        'Gi und No-Gi Training'
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
        description: 'Einzelne Coaching-Sitzungen, die auf deine spezifischen Ziele und Bedürfnisse zugeschnitten sind.',
        price: '€50',
        duration: 'pro Sitzung'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisierte Trainingsprogramme, die dich auf Turniere und Wettkämpfe vorbereiten.',
        price: '€80',
        duration: 'pro Sitzung'
      },
      seminars: {
        title: 'Seminare & Workshops',
        description: 'Regelmäßige Seminare mit Gastinstruktoren und spezialisierte Technik-Workshops.',
        price: '€30',
        duration: 'pro Seminar'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen Haupt- und Sommersaison?',
          answer: 'Die Hauptsaison läuft von September bis Juni (10 Monate) mit unserem vollständigen Programmplan. Die Sommersaison ist Juli-August (2,5 Monate) mit einem entspannteren Zeitplan, perfekt um das Training während der Urlaubszeit aufrechtzuerhalten.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu Kursen an beiden Standorten in Sand in Taufers und Bruneck. Du kannst je nach deinem Zeitplan mischen und anpassen.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Absolut! Wir bieten Probestunden für neue Schüler an. Kontaktiere uns, um deine erste Sitzung zu planen und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Anfänger nur bequeme Trainingskleidung. Wir können temporäre Ausrüstung für Probestunden zur Verfügung stellen. Mit fortschreitendem Training benötigst du einen Gi für BJJ-Kurse und grundlegende Schutzausrüstung für MMA.'
        }
      },
      cta: {
        title: 'Beginne Deine Reise',
        description: 'Tritt unserer Kampfsport-Familie bei und entdecke dein Potenzial.'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Bereit, deine Kampfsport-Reise zu beginnen? Kontaktiere uns heute. Wir sind hier, um deine Fragen zu beantworten und dir zu helfen, das perfekte Trainingsprogramm zu finden.'
      },
      getInTouch: {
        title: 'Kontakt Aufnehmen',
        subtitle: 'Mehrere Wege, um mit unserem Team in Verbindung zu treten'
      },
      callUs: 'Anrufen',
      instagram: 'Instagram',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Trainingseinrichtungen in Südtirol'
      },
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      visitRequirements: {
        title: 'Besuchsanforderungen',
        subtitle: 'Alles was du für deinen ersten Besuch wissen musst'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was Mitbringen',
      bring: [
        'Bequeme Trainingskleidung',
        'Wasserflasche',
        'Handtuch',
        'Positive Einstellung und Lernbereitschaft'
      ],
      whatWeProvide: 'Was Wir Bereitstellen',
      provide: [
        'Alle Trainingsausrüstung für Anfänger',
        'Saubere, sichere Trainingsumgebung',
        'Expertenunterricht und Anleitung',
        'Unterstützende Gemeinschaftsatmosphäre'
      ],
      specialInstructions: 'Besondere Anweisungen',
      instructions: {
        age: 'Das Alter für Kinderkurse ist 8-14 Jahre',
        health: 'Bitte informieren Sie uns über Verletzungen oder Gesundheitszustände',
        equipment: 'Probestudenten können vorübergehend Grundausrüstung ausleihen',
        payment: 'Bargeld und Karte sind die einzigen akzeptierten Zahlungsmethoden'
      },
      cta: {
        title: 'Bereit Zu Beginnen?',
        description: 'Mache den ersten Schritt zu deinen Kampfsport-Zielen.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Meistere die sanfte Kunst der Hebelwirkung, Technik und strategischen Bodenkampf'
        },
        overview: {
          title: 'Die Sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Es betont das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner durch richtige Technik, Hebelwirkung und Timing verteidigen kann.',
            'BJJ fördert das Konzept, dass der größte Teil des Vorteils eines größeren, stärkeren Gegners aus überlegener Reichweite und kraftvolleren Schlägen kommt, die beide beim Grappling am Boden neutralisiert werden. BJJ legt Wert darauf, einen Gegner zu Boden zu bringen und Bodenkampftechniken und Submission-Griffe mit Gelenkhebeln und Würgegriffen zu verwenden.',
            'In der Sport Academy ist unser BJJ-Programm darauf ausgelegt, den Schülern nicht nur die körperlichen Techniken beizubringen, sondern auch die mentalen Aspekte der Kunst - Geduld, Problemlösung und strategisches Denken, die BJJ oft als "körperliches Schach" bezeichnen.'
          ]
        },
        techniques: {
          title: 'Kern BJJ-Techniken',
          subtitle: 'Meistere die grundlegenden Fähigkeiten, die das Fundament des Brazilian Jiu-Jitsu bilden',
          guardWork: {
            title: 'Guard-Arbeit',
            items: [
              'Closed Guard Grundlagen',
              'Open Guard Variationen',
              'Guard-Erhaltung und -Wiederherstellung',
              'Sweeps und Submissions aus der Guard'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Armhebel (Armbar, Kimura, Americana)',
              'Würgegriffe (Rear naked, Triangle, Guillotine)',
              'Beinhebel (grundlegende Knöchelhebel)',
              'Submission-Verteidigung und Befreiungen'
            ]
          },
          positions: {
            title: 'Positionskontrolle',
            items: [
              'Mount und Mount-Befreiungen',
              'Side Control und Knee on Belly',
              'Back Control und Back-Befreiungen',
              'Übergangsbewegungen'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ-Gurtsystem',
          subtitle: 'Fortschritt durch das traditionelle Brazilian Jiu-Jitsu Rangsystem',
          philosophy: {
            title: 'Gurt-Philosophie',
            description: 'Im BJJ repräsentiert der Gurtfortschritt nicht nur technisches Wissen, sondern auch Charakterentwicklung, Lehrfähigkeit und Zeit auf der Matte. Jede Gurtstufe dauert typischerweise 2-3 Jahre, wobei die Reise über das Ziel betont wird.'
          }
        },
        history: {
          title: 'Geschichte des BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu entstand im frühen 20. Jahrhundert, als der japanische Judoka Mitsuyo Maeda traditionelles Jujutsu und Judo der Gracie-Familie in Brasilien lehrte. Die Gracies, besonders Helio Gracie, passten diese Techniken an, um ein effektiveres System für kleinere Praktiker zu schaffen.',
            'Die Kunst erlangte internationale Anerkennung durch die Ultimate Fighting Championship (UFC), wo Royce Gracie die Effektivität des BJJ gegen größere Gegner mit verschiedenen Kampfkunststilen demonstrierte. Dies führte dazu, dass BJJ zu einem grundlegenden Bestandteil der modernen Mixed Martial Arts wurde.',
            'Heute wird BJJ weltweit sowohl als Kampfkunst als auch als Sport praktiziert, mit großen Wettkämpfen wie der World Jiu-Jitsu Championship (Mundials), die Tausende von Wettkämpfern aus der ganzen Welt anziehen.'
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
                description: 'Gründer des Gracie Jiu-Jitsu, passte Techniken für kleinere Praktiker an'
              },
              {
                name: 'Royce Gracie',
                description: 'Demonstrierte BJJ-Effektivität in frühen UFC-Wettkämpfen'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ-Trainingsplan',
          subtitle: 'Nimm an unseren regelmäßigen BJJ-Kursen an beiden Standorten teil'
        },
        cta: {
          title: 'Beginne Deine BJJ-Reise',
          description: 'Erlebe die sanfte Kunst, die die Kampfkünste weltweit revolutioniert hat.',
          joinButton: 'BJJ-Kurse Beitreten'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Meistere die Kunst der Kontrolle, Takedowns und Submissions ohne Gi'
        },
        overview: {
          title: 'No-Gi Grappling',
          paragraphs: [
            'Grappling, auch bekannt als Submission Wrestling oder No-Gi Grappling, ist eine Form des Kampfsports, die sich auf Takedowns, Bodenkontrolle und Submission-Griffe ohne das traditionelle Gi (Uniform) konzentriert. Dieser Stil betont Geschwindigkeit, Athletik und Anpassungsfähigkeit.',
            'No-Gi Grappling ist besonders relevant für Mixed Martial Arts (MMA) und Selbstverteidigungssituationen, da es reale Szenarien näher nachahmt, in denen Gegner kein Gi tragen werden. Das Fehlen von Gi-Griffen zwingt Praktiker dazu, sich auf Underhooks, Overhooks und Körperkontrolle zu verlassen.',
            'Unser Grappling-Programm in der Sport Academy kombiniert Elemente aus Wrestling, Brazilian Jiu-Jitsu und Submission Wrestling, um ein umfassendes Bodenkampfsystem zu schaffen, das Schüler sowohl für Wettkämpfe als auch für praktische Anwendungen vorbereitet.'
          ]
        },
        techniques: {
          title: 'Wesentliche Grappling-Techniken',
          subtitle: 'Entwickle die Kernfähigkeiten, die für effektives No-Gi Grappling benötigt werden',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Einzel- und Doppelbein-Takedowns',
              'Hüftwürfe und Würfe',
              'Sprawls und Takedown-Verteidigung',
              'Clinch-Arbeit und Dirty Boxing'
            ]
          },
          control: {
            title: 'Bodenkontrolle',
            items: [
              'Positionsdominanz ohne Gi-Griffe',
              'Underhooks und Overhooks',
              'Body Locks und Kontroll-Ties',
              'Übergangsbewegungen und Scrambles'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'No-Gi Würgegriffe und Strangulationen',
              'Armhebel und Schulterhebel',
              'Beinhebel und Knöchelangriffe',
              'Submission-Ketten und Setups'
            ]
          }
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Unser systematischer Ansatz zur Grappling-Entwicklung',
          technical: {
            title: 'Technische Entwicklung',
            methods: [
              {
                title: 'Drilling',
                description: 'Wiederholende Praxis von Techniken zum Aufbau von Muskelgedächtnis'
              },
              {
                title: 'Positionelles Sparring',
                description: 'Live-Training aus spezifischen Positionen zur Timing-Entwicklung'
              },
              {
                title: 'Flow Rolling',
                description: 'Kontinuierliche Bewegungspraxis zur Verbesserung von Übergängen'
              }
            ]
          },
          conditioning: {
            title: 'Körperliche Konditionierung',
            methods: [
              {
                title: 'Grappling-Cardio',
                description: 'Sportspezifische Konditionierung für Ausdauer'
              },
              {
                title: 'Krafttraining',
                description: 'Funktionale Kraft für Grappling-Bewegungen'
              },
              {
                title: 'Flexibilität',
                description: 'Mobilitätsarbeit zur Verletzungsprävention und Leistungsverbesserung'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grapplings',
          subtitle: 'Körperliche und mentale Vorteile des No-Gi Grappling-Trainings',
          items: [
            {
              icon: '💪',
              title: 'Ganzkörperkraft',
              description: 'Entwickelt funktionale Kraft und Muskelausdauer'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Baut Widerstandsfähigkeit und Problemlösungsfähigkeiten auf'
            },
            {
              icon: '⚡',
              title: 'Explosive Kraft',
              description: 'Verbessert Geschwindigkeit und explosive Bewegung'
            },
            {
              icon: '🎯',
              title: 'Selbstverteidigung',
              description: 'Praktische Fähigkeiten für reale Situationen'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Zeitplan',
          subtitle: 'Trainiere No-Gi Grappling an beiden unseren Standorten'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Lerne von den Techniken, die von Grappling-Pionieren entwickelt wurden',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Catch Wrestling Experte',
              description: 'Ehemaliger UFC Schwergewichts-Champion bekannt für Catch Wrestling'
            },
            {
              name: 'Eddie Bravo',
              title: '10th Planet Gründer',
              description: 'Revolutionärer No-Gi System-Schöpfer'
            },
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominanter No-Gi Grappler und Beinhebel-Spezialist'
            }
          ]
        },
        cta: {
          title: 'Meistere No-Gi Grappling',
          description: 'Entwickle die Fähigkeiten, die direkt auf MMA und Selbstverteidigung übertragbar sind.',
          joinButton: 'Grappling-Kurse Beitreten'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der Schlagen, Ringen und Bodenkampf kombiniert'
        },
        overview: {
          title: 'Das Komplette Kampfsystem',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der kompletteste Kampfsport, der Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkünsten kombiniert. MMA testet die Fähigkeiten eines Kämpfers in allen Kampfbereichen: Stehschlagen, Clinch-Arbeit, Takedowns und Bodenkampf.',
            'Modernes MMA hat sich zu einem ausgeklügelten Sport mit spezifischen Techniken und Strategien für Übergänge zwischen verschiedenen Kampfphasen entwickelt. Erfolgreiche MMA-Kämpfer müssen vielseitig sein und Fähigkeiten in mehreren Disziplinen besitzen, während sie verstehen, wie sie zusammenarbeiten.',
            'Unser MMA-Programm in der Sport Academy bietet umfassendes Training in allen Aspekten der Mixed Martial Arts, von grundlegenden Techniken bis zu fortgeschrittenen Kampfstrategien, und bereitet Schüler auf Wettkämpfe vor oder entwickelt einfach das kompletteste Kampfkunst-Fähigkeitsset.'
          ]
        },
        techniques: {
          title: 'MMA-Techniken',
          subtitle: 'Meistere alle Kampfbereiche in Mixed Martial Arts',
          striking: {
            title: 'Schlagen',
            items: [
              'Box-Grundlagen und Kombinationen',
              'Muay Thai Tritte, Knie und Ellbogen',
              'Fußarbeit und Kopfbewegung',
              'Schlagen im Clinch'
            ]
          },
          wrestling: {
            title: 'Wrestling & Takedowns',
            items: [
              'Einzel- und Doppelbein-Takedowns',
              'Sprawls und Takedown-Verteidigung',
              'Käfig-Arbeit und Wand-Wrestling',
              'Ground and Pound Techniken'
            ]
          },
          groundGame: {
            title: 'Bodenkampf',
            items: [
              'BJJ für MMA-Anwendungen',
              'Submissions aus der Top-Position',
              'Ground and Pound Verteidigung',
              'Zurück auf die Füße kommen'
            ]
          }
        },
        history: {
          title: 'Geschichte des MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit der Ultimate Fighting Championship (UFC) im Jahr 1993. Die frühen UFCs wurden entwickelt, um zu bestimmen, welche Kampfkunst in echten Kampfsituationen am effektivsten war.',
            'Der Sport entwickelte sich schnell, als Kämpfer erkannten, dass sie in mehreren Disziplinen kompetent sein mussten, um effektiv zu konkurrieren. Dies führte zur Entwicklung moderner MMA-Trainingsmethoden und dem Aufkommen kompletter Mixed Martial Artists.',
            'Heute ist MMA eine der am schnellsten wachsenden Sportarten der Welt, mit Organisationen wie UFC, Bellator und ONE Championship, die die höchsten Ebenen des Mixed Martial Arts-Wettkampfs weltweit präsentieren.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erstes UFC-Event demonstriert Effektivität verschiedener Kampfkünste'
              },
              {
                year: '2001',
                description: 'Einheitliche MMA-Regeln etabliert, moderne Sportstruktur geschaffen'
              },
              {
                year: '2016',
                description: 'MMA wird in New York legal, Legalisierung in den USA abgeschlossen'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des MMA-Trainings',
          subtitle: 'Körperliche und mentale Vorteile der Mixed Martial Arts',
          items: [
            {
              icon: '🥊',
              title: 'Komplette Fitness',
              description: 'Ultimatives Ganzkörper-Workout, das Cardio und Kraft kombiniert'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Praktischste und effektivste Selbstverteidigungsfähigkeiten'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Entwickelt Selbstvertrauen, Disziplin und mentale Stärke'
            },
            {
              icon: '⚡',
              title: 'Athletik',
              description: 'Verbessert Koordination, Reflexe und allgemeine Athletik'
            }
          ]
        },
        schedule: {
          title: 'MMA-Trainingsplan',
          subtitle: 'Komplettes Mixed Martial Arts Training an beiden Standorten'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Lerne von den Techniken der Mixed Martial Arts-Pioniere',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC-Pionier',
              description: 'Bewies die Effektivität von BJJ in frühen UFC-Events'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Längster regierender UFC-Mittelgewichts-Champion'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendärer Schwergewichtler mit unglaublichem Bodenkampf'
            }
          ]
        },
        cta: {
          title: 'Werde Ein Kompletter Kämpfer',
          description: 'Trainiere im effektivsten Kampfsport der Welt.',
          joinButton: 'MMA-Kurse Beitreten'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Champions seit 2017 schmieden',
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
      instantConfirmation: 'Conferma Immediata',
      visitUs: 'Visitaci',
      dropInWelcome: 'Visite Spontanee Benvenute',
      duringTrainingHours: 'Durante gli Orari di Allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Benvenuti alla Sport Academy',
        description: 'Situata nel cuore dell\'Alto Adige, Sport Academy è stata la destinazione principale per l\'allenamento di MMA, Brazilian Jiu-Jitsu e Grappling dal 2017. I nostri istruttori esperti Matteo Parolin e Christian Zecchetto portano istruzione di livello mondiale a Campo Tures e Brunico.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Allenando campioni dal 2017',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'MMA, BJJ, Grappling e altro',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come Un Combattente',
        subtitle: 'Padroneggia l\'arte degli sport da combattimento con i nostri programmi di allenamento completi'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, wrestling e combattimento a terra per l\'esperienza di combattimento definitiva.'
      },
      bjj: {
        description: 'Padroneggia l\'arte gentile del Brazilian Jiu-Jitsu, concentrandoti su leva, tecnica e combattimento strategico a terra.'
      },
      grappling: {
        description: 'Allenamento di grappling senza gi che enfatizza takedown, controllo e sottomissioni in un ambiente dinamico e realistico.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Scegli il tuo percorso verso l\'eccellenza nelle arti marziali'
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
        description: 'Scopri la nostra gamma completa di programmi di arti marziali progettati per tutti i livelli di abilità ed età. Dalle introduzioni adatte ai principianti all\'allenamento avanzato per competizioni.'
      },
      mma: {
        title: 'MMA',
        description: 'L\'MMA è uno sport da combattimento completo che combina striking, wrestling e combattimento a terra. È ideale per coloro che cercano una disciplina completa, realistica e fisicamente impegnativa.',
        features: [
          'Tecniche di striking: pugni, calci, gomitate, ginocchiate',
          'Takedown e lavoro in clinch (wrestling e judo)',
          'Controllo a terra e sottomissioni (basato su BJJ)',
          'Condizionamento fisico e gestione della pressione'
        ]
      },
      bjj: {
        title: 'BJJ',
        description: 'Il Brazilian Jiu-Jitsu si concentra sul combattimento a terra e sulle sottomissioni utilizzando leva e tecnica sulla forza. È un\'arte marziale strategica, altamente efficace, adatta a tutti i livelli e tipi di corpo.',
        features: [
          'Posizioni chiave a terra e transizioni',
          'Tecniche di sottomissione e come difenderle',
          'Come controllare gli avversari e sfuggire alle posizioni svantaggiose',
          'Sviluppo di concentrazione, disciplina e fiducia in se stessi'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Il Grappling è uno sport da combattimento senza colpi basato su takedown, controllo e sottomissioni, praticato senza gi. È realistico, dinamico e comunemente usato nell\'allenamento MMA e di autodifesa.',
        features: [
          'Tecniche di takedown e difesa dalla posizione eretta',
          'Passaggio della guardia e controllo a terra',
          'Leve articolari e strangolamenti',
          'Agilità, equilibrio e consapevolezza corporea'
        ]
      },
      kidsBjj: {
        title: 'BJJ per Bambini',
        description: 'Un corso strutturato per bambini di età compresa tra 8 e 14 anni che li introduce al Brazilian Jiu-Jitsu in un ambiente sicuro e positivo. Attraverso tecniche e esercizi ludici, i bambini sviluppano abilità fisiche e mentali divertendosi.',
        features: [
          'Movimenti BJJ di base, posizioni e sottomissioni semplici',
          'Come cadere, rotolare e muoversi in sicurezza a terra',
          'Rispetto per le regole, gli istruttori e i compagni di squadra',
          'Fiducia, disciplina e controllo emotivo'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Tecniche di wrestling tradizionali che si concentrano su takedown, controllo e condizionamento. Essenziale per applicazioni MMA e autodifesa.',
        features: [
          'Takedown a gamba singola e doppia',
          'Postura e movimento del wrestling',
          'Sprawl e difesa dai takedown',
          'Condizionamento e resistenza mentale'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Pronto a Iniziare l\'Allenamento?',
        description: 'Unisciti alla nostra comunità di artisti marziali dedicati e inizia il tuo viaggio oggi.'
      }
    },
    schedule: {
      hero: {
        title: 'Orario degli Allenamenti',
        description: 'Trova gli orari di allenamento perfetti che si adattano al tuo programma. Offriamo lezioni durante tutta la settimana in entrambe le nostre sedi di Campo Tures e Brunico.'
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
      openMat: 'Allenamento Libero',
      importantInfo: 'Informazioni Importanti',
      classGuidelines: 'Linee Guida delle Lezioni',
      guidelines: {
        arrive: 'Arriva 10 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'Le lezioni di BJJ richiedono il gi (uniforme)',
        noGi: 'Grappling e MMA sono lezioni senza gi'
      },
      membershipBenefits: 'Vantaggi dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutte le lezioni incluso',
        openMat: 'Sessioni di allenamento libero gratuite',
        bothLocations: 'Allenati in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto a Unirti?',
        description: 'Inizia il tuo viaggio nelle arti marziali con noi oggi.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Incontra i nostri istruttori di livello mondiale che portano decenni di esperienza e competenza a livello di campionato in ogni sessione di allenamento.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore e Fondatore',
        background: 'Con oltre 15 anni di esperienza nelle arti marziali, Matteo è una cintura nera BJJ certificata e un combattente MMA di successo. Ha fondato Sport Academy nel 2017 con la visione di portare allenamento di arti marziali di livello mondiale in Alto Adige.',
        specializations: [
          'Brazilian Jiu-Jitsu (Cintura Nera)',
          'Arti Marziali Miste',
          'Preparazione alle Competizioni',
          'Sviluppo Giovanile'
        ],
        achievements: [
          'Cintura Nera BJJ sotto lignaggio rinomato',
          'Combattente MMA professionista',
          'Multipli titoli di campionato regionale',
          '8+ anni di esperienza come istruttore'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta una ricchezza di conoscenze nelle tecniche di grappling e wrestling. La sua precisione tecnica e il suo stile di insegnamento paziente lo rendono una risorsa inestimabile per il nostro team di istruttori.',
        specializations: [
          'Grappling No-Gi',
          'Tecniche di Wrestling',
          'Difesa dai Takedown',
          'Strategia di Competizione'
        ],
        achievements: [
          'Certificazioni avanzate di grappling',
          'Campione regionale di wrestling',
          'Specializzato in tecniche di takedown',
          '6+ anni di esperienza come istruttore'
        ]
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      philosophy: {
        title: 'La Nostra Filosofia di Insegnamento',
        technical: {
          title: 'Eccellenza Tecnica',
          description: 'Ci concentriamo sulla tecnica corretta e sui fondamentali, assicurando che ogni studente costruisca una base solida per il successo a lungo termine.'
        },
        individual: {
          title: 'Crescita Individuale',
          description: 'Ogni studente riceve attenzione personalizzata e piani di allenamento su misura per i loro obiettivi e livello di abilità.'
        },
        respect: {
          title: 'Rispetto e Disciplina',
          description: 'Instilliamo valori di rispetto, disciplina e sportività che si estendono ben oltre i tappetini di allenamento.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Sperimenta l\'istruzione di livello mondiale e porta le tue abilità nelle arti marziali al livello successivo.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il pacchetto di allenamento perfetto per il tuo viaggio nelle arti marziali. Tutti gli abbonamenti includono l\'accesso alla nostra gamma completa di corsi e a entrambe le sedi di allenamento.'
      },
      mainSeason: {
        title: 'Stagione Principale',
        period: 'Settembre - Giugno',
        duration: '10 mesi di allenamento intensivo',
        mostPopular: 'Più Popolare'
      },
      summerSeason: {
        title: 'Stagione Estiva',
        period: 'Luglio - Agosto',
        duration: '2,5 mesi di allenamento estivo'
      },
      bjjOnly: {
        title: 'Abbonamento Solo BJJ',
        subtitle: 'Programma di allenamento dedicato al Brazilian Jiu-Jitsu',
        program: 'Programma Focalizzato su BJJ',
        description: 'Accesso solo a tutte le lezioni di BJJ'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      mainIncludes: [
        'Accesso illimitato a tutte le lezioni',
        'Allenamento in entrambe le sedi',
        'Sessioni di allenamento libero',
        'Workshop per principianti',
        'Accesso al team di competizione'
      ],
      summerIncludes: [
        'Tutte le lezioni estive',
        'Accesso a entrambe le sedi',
        'Sessioni di allenamento libero',
        'Orario flessibile'
      ],
      bjjIncludes: [
        'Tutte le lezioni di BJJ',
        'Entrambe le sedi',
        'Allenamento libero per BJJ',
        'Allenamento Gi e No-Gi'
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
        description: 'Sessioni di coaching individuali su misura per i tuoi obiettivi e bisogni specifici.',
        price: '€50',
        duration: 'per sessione'
      },
      competitionPrep: {
        title: 'Preparazione alle Competizioni',
        description: 'Programmi di allenamento specializzati progettati per prepararti a tornei e competizioni.',
        price: '€80',
        duration: 'per sessione'
      },
      seminars: {
        title: 'Seminari e Workshop',
        description: 'Seminari regolari con istruttori ospiti e workshop di tecniche specializzate.',
        price: '€30',
        duration: 'per seminario'
      },
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra Stagione Principale e Stagione Estiva?',
          answer: 'La Stagione Principale va da settembre a giugno (10 mesi) con il nostro programma completo. La Stagione Estiva è luglio-agosto (2,5 mesi) con un orario più rilassato perfetto per mantenere l\'allenamento durante il periodo delle vacanze.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso alle lezioni in entrambe le nostre sedi di Campo Tures e Brunico. Puoi mescolare e abbinare in base al tuo programma.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo lezioni di prova per nuovi studenti. Contattaci per programmare la tua prima sessione e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Di quale attrezzatura ho bisogno?',
          answer: 'Per i principianti, solo abbigliamento comodo da allenamento. Possiamo fornire attrezzatura temporanea per le lezioni di prova. Man mano che progredisci, avrai bisogno di un gi per le lezioni di BJJ e attrezzatura protettiva di base per MMA.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio',
        description: 'Unisciti alla nostra famiglia di arti marziali e scopri il tuo potenziale.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Pronto a iniziare il tuo viaggio nelle arti marziali? Mettiti in contatto con noi oggi. Siamo qui per rispondere alle tue domande e aiutarti a trovare il programma di allenamento perfetto.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con il nostro team'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due comode strutture di allenamento in Alto Adige'
      },
      address: 'Indirizzo',
      trainingSchedule: 'Orario degli Allenamenti',
      visitRequirements: {
        title: 'Requisiti per la Visita',
        subtitle: 'Tutto quello che devi sapere per la tua prima visita'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      bring: [
        'Abbigliamento comodo da allenamento',
        'Bottiglia d\'acqua',
        'Asciugamano',
        'Atteggiamento positivo e voglia di imparare'
      ],
      whatWeProvide: 'Cosa Forniamo',
      provide: [
        'Tutta l\'attrezzatura da allenamento per principianti',
        'Ambiente di allenamento pulito e sicuro',
        'Istruzione esperta e guida',
        'Atmosfera comunitaria di supporto'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'L\'età per le lezioni per bambini è 8-14 anni',
        health: 'Si prega di informarci di eventuali infortuni o condizioni di salute',
        equipment: 'Gli studenti di prova possono prendere in prestito temporaneamente l\'attrezzatura di base',
        payment: 'Contanti e carta sono gli unici metodi di pagamento accettati'
      },
      cta: {
        title: 'Pronto a Iniziare?',
        description: 'Fai il primo passo verso i tuoi obiettivi nelle arti marziali.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Padroneggia l\'arte gentile della leva, tecnica e combattimento strategico a terra'
        },
        overview: {
          title: 'L\'Arte Gentile',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e sulle prese di sottomissione. Enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte attraverso tecnica, leva e tempismo appropriati.',
            'Il BJJ promuove il concetto che la maggior parte del vantaggio di un avversario più grande e forte deriva da una portata superiore e colpi più potenti, entrambi neutralizzati quando si lotta a terra. Il BJJ pone enfasi sul portare un avversario a terra e utilizzare tecniche di combattimento a terra e prese di sottomissione che coinvolgono leve articolari e strangolamenti.',
            'Alla Sport Academy, il nostro programma BJJ è progettato per insegnare agli studenti non solo le tecniche fisiche, ma anche gli aspetti mentali dell\'arte - pazienza, risoluzione dei problemi e pensiero strategico che rendono il BJJ spesso chiamato "scacchi fisici".'
          ]
        },
        techniques: {
          title: 'Tecniche Core del BJJ',
          subtitle: 'Padroneggia le abilità fondamentali che formano la base del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Fondamentali della Guardia Chiusa',
              'Variazioni della Guardia Aperta',
              'Mantenimento e recupero della guardia',
              'Sweep e sottomissioni dalla guardia'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Leve al braccio (Armbar, Kimura, Americana)',
              'Strangolamenti (Rear naked, Triangle, Guillotine)',
              'Leve alle gambe (leve alla caviglia di base)',
              'Difesa dalle sottomissioni e fughe'
            ]
          },
          positions: {
            title: 'Controllo Posizionale',
            items: [
              'Mount e fughe dal mount',
              'Side control e knee on belly',
              'Back control e fughe dal back',
              'Movimenti di transizione'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema di Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di classificazione tradizionale del Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Filosofia delle Cinture',
            description: 'Nel BJJ, la progressione delle cinture rappresenta non solo conoscenza tecnica, ma anche sviluppo del carattere, capacità di insegnamento e tempo sul tappeto. Ogni livello di cintura richiede tipicamente 2-3 anni per essere raggiunto, enfatizzando il viaggio sulla destinazione.'
          }
        },
        history: {
          title: 'Storia del BJJ',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu ebbe origine all\'inizio del XX secolo quando il judoka giapponese Mitsuyo Maeda insegnò jujutsu tradizionale e judo alla famiglia Gracie in Brasile. I Gracie, in particolare Helio Gracie, adattarono queste tecniche per creare un sistema più efficace per i praticanti più piccoli.',
            'L\'arte ottenne riconoscimento internazionale attraverso l\'Ultimate Fighting Championship (UFC), dove Royce Gracie dimostrò l\'efficacia del BJJ contro avversari più grandi usando diversi stili di arti marziali. Questo portò il BJJ a diventare un componente fondamentale delle moderne arti marziali miste.',
            'Oggi, il BJJ è praticato in tutto il mondo sia come arte marziale che come sport, con competizioni importanti come il World Jiu-Jitsu Championship (Mundials) che attirano migliaia di competitori da tutto il mondo.'
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
                description: 'Fondatore del Gracie Jiu-Jitsu, adattò le tecniche per praticanti più piccoli'
              },
              {
                name: 'Royce Gracie',
                description: 'Dimostrò l\'efficacia del BJJ nelle prime competizioni UFC'
              }
            ]
          }
        },
        schedule: {
          title: 'Orario Allenamento BJJ',
          subtitle: 'Unisciti alle nostre lezioni regolari di BJJ in entrambe le sedi'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio nel BJJ',
          description: 'Sperimenta l\'arte gentile che ha rivoluzionato le arti marziali in tutto il mondo.',
          joinButton: 'Unisciti alle Lezioni di BJJ'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Padroneggia l\'arte del controllo, takedown e sottomissioni senza gi'
        },
        overview: {
          title: 'Grappling No-Gi',
          paragraphs: [
            'Il Grappling, noto anche come submission wrestling o grappling no-gi, è una forma di sport da combattimento che si concentra su takedown, controllo a terra e prese di sottomissione senza il tradizionale gi (uniforme). Questo stile enfatizza velocità, atletismo e adattabilità.',
            'Il grappling no-gi è particolarmente rilevante per le arti marziali miste (MMA) e le situazioni di autodifesa, poiché imita più da vicino scenari del mondo reale dove gli avversari non indosseranno un gi. L\'assenza di prese del gi costringe i praticanti a fare affidamento su underhook, overhook e controllo del corpo.',
            'Il nostro programma di grappling alla Sport Academy combina elementi dal wrestling, Brazilian Jiu-Jitsu e submission wrestling per creare un sistema completo di combattimento a terra che prepara gli studenti sia per la competizione che per l\'applicazione pratica.'
          ]
        },
        techniques: {
          title: 'Tecniche Essenziali di Grappling',
          subtitle: 'Sviluppa le abilità core necessarie per un grappling no-gi efficace',
          takedowns: {
            title: 'Takedown',
            items: [
              'Takedown a gamba singola e doppia',
              'Proiezioni dell\'anca e lanci',
              'Sprawl e difesa dai takedown',
              'Lavoro in clinch e dirty boxing'
            ]
          },
          control: {
            title: 'Controllo a Terra',
            items: [
              'Dominanza posizionale senza prese del gi',
              'Underhook e overhook',
              'Body lock e tie di controllo',
              'Movimenti di transizione e scramble'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Strangolamenti e strozzature no-gi',
              'Leve al braccio e alle spalle',
              'Leve alle gambe e attacchi alla caviglia',
              'Catene di sottomissioni e setup'
            ]
          }
        },
        methodology: {
          title: 'Metodologia di Allenamento',
          subtitle: 'Il nostro approccio sistematico allo sviluppo del grappling',
          technical: {
            title: 'Sviluppo Tecnico',
            methods: [
              {
                title: 'Drilling',
                description: 'Pratica ripetitiva delle tecniche per costruire memoria muscolare'
              },
              {
                title: 'Sparring Posizionale',
                description: 'Allenamento dal vivo da posizioni specifiche per sviluppare il timing'
              },
              {
                title: 'Flow Rolling',
                description: 'Pratica di movimento continuo per migliorare le transizioni'
              }
            ]
          },
          conditioning: {
            title: 'Condizionamento Fisico',
            methods: [
              {
                title: 'Cardio per Grappling',
                description: 'Condizionamento sport-specifico per la resistenza'
              },
              {
                title: 'Allenamento della Forza',
                description: 'Forza funzionale per i movimenti di grappling'
              },
              {
                title: 'Flessibilità',
                description: 'Lavoro di mobilità per prevenire infortuni e migliorare le prestazioni'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici del Grappling',
          subtitle: 'Vantaggi fisici e mentali dell\'allenamento di grappling no-gi',
          items: [
            {
              icon: '💪',
              title: 'Forza di Tutto il Corpo',
              description: 'Sviluppa forza funzionale e resistenza muscolare'
            },
            {
              icon: '🧠',
              title: 'Resistenza Mentale',
              description: 'Costruisce resilienza e abilità di risoluzione dei problemi'
            },
            {
              icon: '⚡',
              title: 'Potenza Esplosiva',
              description: 'Migliora velocità e movimento esplosivo'
            },
            {
              icon: '🎯',
              title: 'Autodifesa',
              description: 'Abilità pratiche per situazioni del mondo reale'
            }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Allenati nel grappling no-gi in entrambe le nostre sedi'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Impara dalle tecniche sviluppate dai pionieri del grappling',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Esperto di Catch Wrestling',
              description: 'Ex Campione dei Pesi Massimi UFC noto per il catch wrestling'
            },
            {
              name: 'Eddie Bravo',
              title: 'Fondatore 10th Planet',
              description: 'Creatore rivoluzionario del sistema no-gi'
            },
            {
              name: 'Gordon Ryan',
              title: 'Campione ADCC',
              description: 'Grappler no-gi dominante e specialista di leve alle gambe'
            }
          ]
        },
        cta: {
          title: 'Padroneggia il Grappling No-Gi',
          description: 'Sviluppa le abilità che si traducono direttamente in MMA e autodifesa.',
          joinButton: 'Unisciti alle Lezioni di Grappling'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina striking, wrestling e combattimento a terra'
        },
        overview: {
          title: 'Il Sistema di Combattimento Completo',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono lo sport da combattimento più completo, combinando tecniche da boxe, kickboxing, wrestling, Brazilian Jiu-Jitsu e altre arti marziali. L\'MMA testa le abilità di un combattente in tutte le distanze di combattimento: striking in piedi, lavoro in clinch, takedown e combattimento a terra.',
            'L\'MMA moderno si è evoluto in uno sport sofisticato con tecniche e strategie specifiche per la transizione tra diverse fasi di combattimento. I combattenti MMA di successo devono essere completi, possedendo abilità in multiple discipline mentre comprendono come si integrano insieme.',
            'Il nostro programma MMA alla Sport Academy fornisce allenamento completo in tutti gli aspetti delle arti marziali miste, dalle tecniche fondamentali alle strategie di combattimento avanzate, preparando gli studenti per la competizione o semplicemente sviluppando il set di abilità di arti marziali più completo possibile.'
          ]
        },
        techniques: {
          title: 'Tecniche MMA',
          subtitle: 'Padroneggia tutte le distanze di combattimento nelle arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Fondamentali di boxe e combinazioni',
              'Calci, ginocchiate e gomitate Muay Thai',
              'Gioco di gambe e movimento della testa',
              'Striking nel clinch'
            ]
          },
          wrestling: {
            title: 'Wrestling e Takedown',
            items: [
              'Takedown a gamba singola e doppia',
              'Sprawl e difesa dai takedown',
              'Lavoro alla gabbia e wrestling al muro',
              'Tecniche di ground and pound'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'BJJ per applicazioni MMA',
              'Sottomissioni dalla posizione superiore',
              'Difesa dal ground and pound',
              'Tornare in piedi'
            ]
          }
        },
        history: {
          title: 'Storia dell\'MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma l\'MMA moderno iniziò con l\'Ultimate Fighting Championship (UFC) nel 1993. I primi UFC furono progettati per determinare quale arte marziale fosse più efficace in situazioni di combattimento reale.',
            'Lo sport si evolse rapidamente quando i combattenti si resero conto che dovevano essere competenti in multiple discipline per competere efficacemente. Questo portò allo sviluppo di metodi di allenamento MMA moderni e all\'emergere di artisti marziali misti completi.',
            'Oggi, l\'MMA è uno degli sport in più rapida crescita al mondo, con organizzazioni come UFC, Bellator e ONE Championship che mostrano i più alti livelli di competizione di arti marziali miste a livello globale.'
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
                description: 'Regole Unificate dell\'MMA stabilite, creando la struttura sportiva moderna'
              },
              {
                year: '2016',
                description: 'L\'MMA diventa legale a New York, completando la legalizzazione negli USA'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento MMA',
          subtitle: 'Vantaggi fisici e mentali delle arti marziali miste',
          items: [
            {
              icon: '🥊',
              title: 'Fitness Completo',
              description: 'Allenamento definitivo per tutto il corpo che combina cardio e forza'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Abilità di autodifesa più pratiche ed efficaci'
            },
            {
              icon: '🧠',
              title: 'Forza Mentale',
              description: 'Sviluppa fiducia, disciplina e resistenza mentale'
            },
            {
              icon: '⚡',
              title: 'Atletismo',
              description: 'Migliora coordinazione, riflessi e atletismo generale'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento MMA',
          subtitle: 'Allenamento completo di arti marziali miste in entrambe le sedi'
        },
        legends: {
          title: 'Leggende dell\'MMA',
          subtitle: 'Impara dalle tecniche dei pionieri delle arti marziali miste',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'Pioniere UFC',
              description: 'Dimostrò l\'efficacia del BJJ nei primi eventi UFC'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Campione dei Pesi Medi UFC più longevo'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Leggendario peso massimo con incredibile gioco a terra'
            }
          ]
        },
        cta: {
          title: 'Diventa un Combattente Completo',
          description: 'Allenati nello sport da combattimento più efficace al mondo.',
          joinButton: 'Unisciti alle Lezioni MMA'
        }
      }
    },
    footer: {
      tagline: 'Allenamento Elite di MMA, BJJ e Grappling',
      subtitle: 'Forgiando Campioni dal 2017',
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