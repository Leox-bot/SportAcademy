import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Forging fighters since 2017'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Elite training in Mixed Martial Arts, Brazilian Jiu-Jitsu, and Grappling. Located in Campo Tures and Brunico, we offer world-class instruction for all skill levels.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Forging fighters since 2017',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Training Programs',
        programsDescription: 'MMA, BJJ, Grappling & More',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Master the art of combat sports with our comprehensive training programs'
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
        subtitle: 'Choose your path to martial arts excellence'
      },
      quickLinks: {
        viewClasses: 'View Classes',
        viewClassesDesc: 'Explore our training programs',
        checkSchedule: 'Check Schedule',
        checkScheduleDesc: 'Find your training times',
        membershipPlans: 'Membership Plans',
        membershipPlansDesc: 'Choose your membership',
        contactUs: 'Contact Us',
        contactUsDesc: 'Get in touch with us'
      }
    },
    classes: {
      hero: {
        title: 'Our Classes',
        description: 'Comprehensive martial arts training programs designed for all skill levels, from beginners to advanced competitors.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Complete MMA training combining striking, wrestling, and Brazilian Jiu-Jitsu. Learn all aspects of mixed martial arts in a safe, controlled environment.',
        features: [
          'Stand-up striking techniques',
          'Wrestling and takedowns',
          'Ground fighting and submissions',
          'Cage work and clinch fighting',
          'Conditioning and fitness',
          'Competition preparation'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'The gentle art focusing on leverage, technique, and timing. Perfect for self-defense and building confidence while getting in great shape.',
        features: [
          'Fundamental positions and escapes',
          'Guard work and sweeps',
          'Submission techniques',
          'Self-defense applications',
          'Competition training',
          'Belt progression system'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'No-gi grappling focusing on takedowns, control, and submissions without the traditional gi uniform.',
        features: [
          'Wrestling-based takedowns',
          'No-gi guard systems',
          'Leg locks and heel hooks',
          'Scrambles and transitions',
          'Competition preparation',
          'Submission-only formats'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Brazilian Jiu-Jitsu classes specifically designed for children, focusing on discipline, respect, and fun while learning martial arts.',
        features: [
          'Age-appropriate techniques',
          'Character development',
          'Anti-bullying skills',
          'Physical fitness',
          'Confidence building',
          'Respect and discipline'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'No-gi grappling classes for young athletes, emphasizing wrestling and submission grappling in a fun, safe environment.',
        features: [
          'Wrestling fundamentals',
          'Basic submissions',
          'Coordination and agility',
          'Teamwork and sportsmanship',
          'Competition opportunities',
          'Physical conditioning'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling training focusing on takedowns, control, and conditioning. Essential for MMA and grappling.',
        features: [
          'Single and double leg takedowns',
          'Sprawls and defensive techniques',
          'Top control and pins',
          'Conditioning and strength',
          'Mental toughness',
          'Competition preparation'
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
        description: 'Find the perfect training times that fit your schedule. We offer classes throughout the week at both locations.'
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
        gi: 'BJJ classes require gi uniform',
        noGi: 'Grappling classes are no-gi (shorts & rash guard)'
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
        description: 'Book your first class and start your martial arts journey with us.'
      }
    },
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Meet our experienced instructors who are dedicated to helping you achieve your martial arts goals.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 8 years of experience in martial arts, Matteo founded Sport Academy to share his passion for combat sports. He holds black belts in Brazilian Jiu-Jitsu and has competed at national and international levels.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Mixed Martial Arts',
          'Competition Preparation',
          'Self-Defense'
        ],
        achievements: [
          'BJJ Black Belt',
          'MMA Professional Fighter',
          'National BJJ Champion',
          'Certified Instructor'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings extensive experience in grappling and wrestling to our team. His technical approach and attention to detail make him an exceptional instructor for students of all levels.',
        specializations: [
          'Grappling',
          'Wrestling',
          'No-Gi Jiu-Jitsu',
          'Takedown Defense'
        ],
        achievements: [
          'Wrestling Regional Champion',
          'Grappling Black Belt',
          'Competition Coach',
          'Youth Development Specialist'
        ]
      },
      background: 'Background',
      specializations: 'Specializations',
      achievements: 'Achievements',
      philosophy: {
        title: 'Our Coaching Philosophy',
        technical: {
          title: 'Technical Excellence',
          description: 'We focus on proper technique and fundamentals to build a strong foundation for all students.'
        },
        individual: {
          title: 'Individual Attention',
          description: 'Every student receives personalized instruction tailored to their goals and skill level.'
        },
        respect: {
          title: 'Respect & Discipline',
          description: 'We emphasize respect, discipline, and sportsmanship both on and off the mats.'
        }
      },
      cta: {
        title: 'Train with the Best',
        description: 'Learn from experienced coaches who are passionate about your success.'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the membership plan that fits your training goals and schedule. All plans include access to both locations.'
      },
      mainSeason: {
        title: 'Main Season',
        period: 'September - June',
        duration: '10 months',
        mostPopular: 'Most Popular'
      },
      summerSeason: {
        title: 'Summer Season',
        period: 'July - August',
        duration: '2.5 months'
      },
      bjjOnly: {
        title: 'BJJ Only Membership',
        program: 'BJJ Focused Training',
        subtitle: 'Dedicated Brazilian Jiu-Jitsu training program',
        description: 'Access to all BJJ classes during summer season'
      },
      adults: 'Adults',
      students: 'Students',
      month: 'month',
      whatsIncluded: 'What\'s Included',
      mainIncludes: [
        'Unlimited access to all classes',
        'Training at both locations',
        'Open mat sessions',
        'Competition team access',
        'Beginner-friendly instruction',
        'Equipment usage'
      ],
      summerIncludes: [
        'All summer classes included',
        'Both Campo Tures & Brunico',
        'Flexible scheduling',
        'Open mat access',
        'Equipment provided',
        'Beginner welcome'
      ],
      bjjIncludes: [
        'All BJJ classes included',
        'Both locations access',
        'Gi and No-Gi training',
        'Open mat sessions',
        'Belt progression',
        'Competition preparation'
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
        duration: 'per session'
      },
      competitionPrep: {
        title: 'Competition Prep',
        description: 'Specialized training to prepare for tournaments and competitions.',
        price: '€40',
        duration: 'per session'
      },
      seminars: {
        title: 'Seminars',
        description: 'Special workshops with guest instructors and advanced techniques.',
        price: '€30',
        duration: 'per seminar'
      },
      faq: {
        title: 'Frequently Asked Questions',
        seasons: {
          question: 'What\'s the difference between seasons?',
          answer: 'The main season (September-June) offers our full curriculum with 10 months of training. The summer season (July-August) is a shorter, more flexible program perfect for maintaining skills during the break.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to both Campo Tures and Brunico locations. You can attend any class at either gym.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer a free trial class for new students. Contact us to schedule your first session.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For beginners, we provide basic equipment. As you progress, you\'ll want to invest in your own gi for BJJ classes and appropriate workout gear.'
        }
      },
      cta: {
        title: 'Start Your Journey',
        description: 'Choose your membership and begin training with South Tyrol\'s premier martial arts academy.'
      }
    },
    contact: {
      hero: {
        title: 'Contact Us',
        description: 'Get in touch with us to start your martial arts journey or ask any questions about our programs.'
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
        subtitle: 'Easy access and parking at both locations'
      },
      parking: 'Parking',
      publicTransport: 'Public Transport',
      accessibility: 'Accessibility',
      campoTures: {
        parking: 'Free street parking available on Via Hugo von Taufers and surrounding streets. Additional parking at the nearby sports center.',
        transport: 'Bus stop "Campo Tures Centro" is 2 minutes walk. Regular connections from Brunico and surrounding valleys.',
        accessibility: 'Ground floor access with wide entrance. Accessible changing rooms and facilities available.'
      },
      brunico: {
        parking: 'Free parking available in the residential area. Street parking on Via Maria Teresa Riedl and nearby streets.',
        transport: 'Central Brunico location, walking distance from train station (10 minutes). Multiple bus connections.',
        accessibility: 'Ground floor facility with step-free access. Accessible parking spaces available nearby.'
      },
      visitRequirements: {
        title: 'First Time Visiting?',
        subtitle: 'Everything you need to know for your first class'
      },
      firstTimeVisitors: 'First Time Visitors',
      whatToBring: 'What to Bring',
      whatWeProvide: 'What We Provide',
      bring: [
        'Comfortable workout clothes',
        'Water bottle',
        'Towel',
        'Positive attitude'
      ],
      provide: [
        'Training mats',
        'Basic protective gear',
        'Changing facilities',
        'Expert instruction'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Age Requirements: 16+ for adult classes, kids classes 6-16',
        health: 'Health: Please inform us of any injuries or medical conditions',
        equipment: 'Equipment: Beginners can train without special gear initially',
        payment: 'Payment: Cash, card, or bank transfer accepted'
      },
      cta: {
        title: 'Ready to Start?',
        description: 'Contact us today to begin your martial arts journey at Sport Academy.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'The gentle art that teaches leverage, technique, and mental fortitude'
        },
        overview: {
          title: 'The Art of Brazilian Jiu-Jitsu',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent through proper technique, leverage, and timing.',
            'At Sport Academy, we teach traditional BJJ with both gi and no-gi training. Our curriculum covers everything from basic positions and escapes to advanced submission techniques and competition strategies.',
            'Whether you\'re looking for self-defense, fitness, competition, or personal growth, BJJ offers a complete system that challenges both body and mind.'
          ]
        },
        techniques: {
          title: 'Core BJJ Techniques',
          subtitle: 'Master the fundamental techniques that form the foundation of Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard Work',
            items: [
              'Closed Guard Control',
              'Open Guard Systems',
              'Guard Sweeps',
              'Guard Retention',
              'Submission from Guard'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Arm Bars',
              'Chokes and Strangles',
              'Shoulder Locks',
              'Leg Locks',
              'Submission Chains'
            ]
          },
          positions: {
            title: 'Positions',
            items: [
              'Mount Control',
              'Side Control',
              'Back Control',
              'Knee on Belly',
              'Turtle Position'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the traditional Brazilian Jiu-Jitsu ranking system',
          belts: [
            {
              name: 'White Belt',
              color: 'gray',
              description: 'Beginning fundamentals'
            },
            {
              name: 'Blue Belt',
              color: 'blue',
              description: 'Solid foundation'
            },
            {
              name: 'Purple Belt',
              color: 'purple',
              description: 'Advanced techniques'
            },
            {
              name: 'Brown Belt',
              color: 'yellow',
              description: 'Expert level'
            },
            {
              name: 'Black Belt',
              color: 'gray',
              description: 'Master level'
            }
          ],
          philosophy: {
            title: 'Belt Philosophy',
            description: 'Each belt represents years of dedicated training, technical knowledge, and personal growth. Progression is based on skill, knowledge, and character development, not just time spent training.'
          }
        },
        history: {
          title: 'History of BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu evolved from traditional Japanese jujutsu and judo, brought to Brazil by Mitsuyo Maeda in the early 20th century. The Gracie family, particularly Helio Gracie, adapted these techniques to create a more effective system for smaller practitioners.',
            'The art gained worldwide recognition through the early UFC tournaments, where Royce Gracie demonstrated BJJ\'s effectiveness against larger opponents from different martial arts backgrounds.',
            'Today, BJJ is practiced worldwide and forms the foundation of modern mixed martial arts ground fighting.'
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
          description: 'Experience the gentle art that builds confidence, fitness, and mental strength.',
          joinButton: 'Join BJJ Classes',
          backButton: 'Back to Classes'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'No-gi submission wrestling that emphasizes speed, athleticism, and modern techniques'
        },
        overview: {
          title: 'The Art of Grappling',
          paragraphs: [
            'Grappling, also known as submission wrestling or no-gi jiu-jitsu, is a form of combat sport that focuses on takedowns, control positions, and submission holds without the traditional gi uniform.',
            'This dynamic martial art emphasizes speed, athleticism, and modern submission techniques. Without the grips provided by the gi, grapplers must rely on underhooks, overhooks, and body control to dominate their opponents.',
            'Grappling is essential for mixed martial arts and provides an excellent foundation for self-defense, fitness, and competitive sport.'
          ]
        },
        techniques: {
          title: 'Core Grappling Techniques',
          subtitle: 'Master the essential techniques of modern submission wrestling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Double Leg Takedown',
              'Single Leg Takedown',
              'Hip Tosses',
              'Foot Sweeps',
              'Sprawl Defense'
            ]
          },
          control: {
            title: 'Control Positions',
            items: [
              'Side Control',
              'Mount Position',
              'Back Control',
              'North-South',
              'Turtle Control'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Rear Naked Choke',
              'Arm Bars',
              'Leg Locks',
              'Heel Hooks',
              'Guillotine Choke'
            ]
          }
        },
        methodology: {
          title: 'Training Methodology',
          subtitle: 'Our systematic approach to grappling instruction',
          technical: {
            title: 'Technical Development',
            methods: [
              {
                title: 'Position Drilling',
                description: 'Repetitive practice of fundamental positions and transitions'
              },
              {
                title: 'Flow Rolling',
                description: 'Light resistance training to develop timing and technique'
              },
              {
                title: 'Situational Sparring',
                description: 'Focused practice from specific positions and scenarios'
              }
            ]
          },
          conditioning: {
            title: 'Physical Conditioning',
            methods: [
              {
                title: 'Grappling Cardio',
                description: 'Sport-specific conditioning for endurance and strength'
              },
              {
                title: 'Flexibility Training',
                description: 'Mobility work essential for grappling movements'
              },
              {
                title: 'Strength Training',
                description: 'Functional strength development for grappling'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of Grappling',
          subtitle: 'Physical and mental benefits of regular grappling training',
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
              icon: '❤️',
              title: 'Cardiovascular Health',
              description: 'Excellent cardio workout and heart health'
            },
            {
              icon: '🎯',
              title: 'Self-Defense',
              description: 'Practical skills for real-world situations'
            }
          ]
        },
        schedule: {
          title: 'Grappling Training Schedule',
          subtitle: 'Join our dynamic grappling classes'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Learn from the techniques pioneered by grappling masters',
          grapplers: [
            {
              name: 'John Danaher',
              title: 'Submission Specialist',
              description: 'Revolutionary leg lock system developer'
            },
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominant no-gi grappling competitor'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Grappling Genius',
              description: 'Master of butterfly guard and arm drags'
            }
          ]
        },
        cta: {
          title: 'Master the Art of Grappling',
          description: 'Develop speed, technique, and mental toughness through our comprehensive grappling program.',
          joinButton: 'Join Grappling Classes',
          backButton: 'Back to Classes'
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
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, kickboxing, wrestling, Brazilian Jiu-Jitsu, and other martial arts disciplines.',
            'Our MMA program teaches students how to seamlessly transition between striking and grappling, developing well-rounded fighters capable of competing in all ranges of combat.',
            'Whether your goal is competition, fitness, or self-defense, MMA training provides the most comprehensive martial arts education available.'
          ]
        },
        techniques: {
          title: 'MMA Techniques',
          subtitle: 'Master all aspects of mixed martial arts combat',
          striking: {
            title: 'Striking',
            items: [
              'Boxing Combinations',
              'Muay Thai Kicks',
              'Knee Strikes',
              'Elbow Techniques',
              'Footwork and Movement'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown Defense',
              'Cage Wrestling',
              'Clinch Work',
              'Ground Control',
              'Sprawl Techniques'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Ground and Pound',
              'Submission Defense',
              'Guard Passing',
              'Transitions',
              'Escape Techniques'
            ]
          }
        },
        history: {
          title: 'History of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with the Ultimate Fighting Championship (UFC) in 1993, designed to determine the most effective martial art.',
            'Early tournaments showed that no single martial art was complete, leading to the evolution of cross-training and the development of well-rounded fighters.',
            'Today, MMA is a global sport with professional organizations worldwide, showcasing the highest level of martial arts competition.'
          ],
          milestones: {
            title: 'Key Milestones',
            events: [
              {
                year: '1993',
                description: 'First UFC event demonstrates effectiveness of different martial arts'
              },
              {
                year: '2000s',
                description: 'Evolution of well-rounded fighters and modern MMA'
              },
              {
                year: '2010s',
                description: 'MMA becomes mainstream with global recognition'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of MMA Training',
          subtitle: 'Complete physical and mental development through mixed martial arts',
          items: [
            {
              icon: '🥊',
              title: 'Complete Fitness',
              description: 'Full-body workout combining cardio and strength'
            },
            {
              icon: '🛡️',
              title: 'Self-Defense',
              description: 'Real-world applicable fighting skills'
            },
            {
              icon: '🧠',
              title: 'Mental Discipline',
              description: 'Focus, confidence, and stress management'
            },
            {
              icon: '⚡',
              title: 'Athletic Performance',
              description: 'Improved coordination, speed, and power'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Comprehensive mixed martial arts training sessions'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Learn from the techniques of mixed martial arts pioneers',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC Pioneer',
              description: 'Proved the effectiveness of Brazilian Jiu-Jitsu'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Master of striking and counter-attacking'
            },
            {
              name: 'Georges St-Pierre',
              title: 'GSP',
              description: 'Perfect example of well-rounded MMA skills'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Train in the world\'s most comprehensive combat sport and develop skills for competition or self-defense.',
          joinButton: 'Join MMA Classes',
          backButton: 'Back to Classes'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Forging fighters since 2017',
      copyright: '© 2024 Sport Academy. All rights reserved.'
    },
    common: {
      joinNow: 'Join Now',
      viewClasses: 'View Classes',
      viewSchedule: 'View Schedule',
      viewMembership: 'View Membership',
      contactUs: 'Contact Us',
      callNow: 'Call Now',
      learnMore: 'Learn More',
      allLevels: 'All Levels',
      ages: 'Ages',
      joinSportAcademy: 'Join Sport Academy',
      registerOnline: 'Register Online',
      bookClasses: 'Book Classes',
      visitUs: 'Visit Us',
      dropInWelcome: 'Drop-ins Welcome',
      duringTrainingHours: 'During training hours',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates & DMs',
      instantConfirmation: 'Instant confirmation'
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
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Kämpfer schmieden seit 2017'
      },
      welcome: {
        title: 'Willkommen bei der Sport Academy',
        description: 'Elite-Training in Mixed Martial Arts, Brazilian Jiu-Jitsu und Grappling. Mit Standorten in Campo Tures und Bruneck bieten wir erstklassigen Unterricht für alle Leistungsstufen.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Kämpfer schmieden seit 2017',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Campo Tures & Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'MMA, BJJ, Grappling & mehr',
        exploreClasses: 'Unsere Kurse entdecken'
      },
      trainLikeFighter: {
        title: 'Trainiere wie ein Kämpfer',
        subtitle: 'Meistere die Kunst der Kampfsportarten mit unseren umfassenden Trainingsprogrammen'
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
        title: 'Heute beginnen',
        subtitle: 'Wähle deinen Weg zur Kampfsport-Exzellenz'
      },
      quickLinks: {
        viewClasses: 'Kurse ansehen',
        viewClassesDesc: 'Entdecke unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan prüfen',
        checkScheduleDesc: 'Finde deine Trainingszeiten',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wähle deine Mitgliedschaft',
        contactUs: 'Kontaktiere uns',
        contactUsDesc: 'Nimm Kontakt mit uns auf'
      }
    },
    classes: {
      hero: {
        title: 'Unsere Kurse',
        description: 'Umfassende Kampfsport-Trainingsprogramme für alle Leistungsstufen, von Anfängern bis zu fortgeschrittenen Wettkämpfern.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Komplettes MMA-Training mit Schlagtechniken, Wrestling und Brazilian Jiu-Jitsu. Lerne alle Aspekte der Mixed Martial Arts in sicherer, kontrollierter Umgebung.',
        features: [
          'Stand-up Schlagtechniken',
          'Wrestling und Takedowns',
          'Bodenkampf und Aufgabegriffe',
          'Käfigarbeit und Clinch-Kampf',
          'Kondition und Fitness',
          'Wettkampfvorbereitung'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Die sanfte Kunst mit Fokus auf Hebel, Technik und Timing. Perfekt für Selbstverteidigung und Selbstvertrauen bei gleichzeitiger Fitness.',
        features: [
          'Grundpositionen und Befreiungen',
          'Guard-Arbeit und Sweeps',
          'Aufgabetechniken',
          'Selbstverteidigungsanwendungen',
          'Wettkampftraining',
          'Gürtel-Fortschrittssystem'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'No-Gi Grappling mit Fokus auf Takedowns, Kontrolle und Aufgabegriffe ohne traditionelle Gi-Uniform.',
        features: [
          'Wrestling-basierte Takedowns',
          'No-Gi Guard-Systeme',
          'Beinhebel und Heel Hooks',
          'Scrambles und Übergänge',
          'Wettkampfvorbereitung',
          'Submission-Only Formate'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Brazilian Jiu-Jitsu Kurse speziell für Kinder, mit Fokus auf Disziplin, Respekt und Spaß beim Kampfsport lernen.',
        features: [
          'Altersgerechte Techniken',
          'Charakterentwicklung',
          'Anti-Mobbing Fähigkeiten',
          'Körperliche Fitness',
          'Selbstvertrauen aufbauen',
          'Respekt und Disziplin'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'No-Gi Grappling Kurse für junge Athleten, mit Betonung auf Wrestling und Submission Grappling in spaßiger, sicherer Umgebung.',
        features: [
          'Wrestling Grundlagen',
          'Basis Aufgabegriffe',
          'Koordination und Beweglichkeit',
          'Teamwork und Sportlichkeit',
          'Wettkampfmöglichkeiten',
          'Körperliche Kondition'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelles Wrestling-Training mit Fokus auf Takedowns, Kontrolle und Kondition. Essentiell für MMA und Grappling.',
        features: [
          'Single und Double Leg Takedowns',
          'Sprawls und Verteidigungstechniken',
          'Top-Kontrolle und Pins',
          'Kondition und Kraft',
          'Mentale Stärke',
          'Wettkampfvorbereitung'
        ]
      },
      whatYouLearn: 'Was du lernst',
      cta: {
        title: 'Bereit zum Training?',
        description: 'Tritt unserer Gemeinschaft engagierter Kampfsportler bei und beginne heute deine Reise.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finde die perfekten Trainingszeiten für deinen Zeitplan. Wir bieten Kurse während der ganzen Woche an beiden Standorten.'
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
      classGuidelines: 'Kurs-Richtlinien',
      guidelines: {
        arrive: '10 Minuten früher zum Aufwärmen kommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'BJJ-Kurse erfordern Gi-Uniform',
        noGi: 'Grappling-Kurse sind No-Gi (Shorts & Rash Guard)'
      },
      membershipBenefits: 'Mitgliedschaftsvorteile',
      benefits: {
        allClasses: 'Zugang zu allen Kursen inklusive',
        openMat: 'Kostenlose freie Trainingseinheiten',
        bothLocations: 'Training an beiden Standorten',
        personalTraining: 'Ermäßigtes Personaltraining'
      },
      cta: {
        title: 'Bereit beizutreten?',
        description: 'Buche deinen ersten Kurs und beginne deine Kampfsport-Reise mit uns.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne unsere erfahrenen Instruktoren kennen, die sich dafür einsetzen, dir beim Erreichen deiner Kampfsport-Ziele zu helfen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 8 Jahren Erfahrung in Kampfsportarten gründete Matteo die Sport Academy, um seine Leidenschaft für Kampfsport zu teilen. Er besitzt schwarze Gürtel im Brazilian Jiu-Jitsu und hat auf nationaler und internationaler Ebene gekämpft.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Mixed Martial Arts',
          'Wettkampfvorbereitung',
          'Selbstverteidigung'
        ],
        achievements: [
          'BJJ Schwarzgurt',
          'MMA Profikämpfer',
          'Nationaler BJJ Champion',
          'Zertifizierter Instruktor'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt umfangreiche Erfahrung in Grappling und Wrestling in unser Team. Sein technischer Ansatz und seine Aufmerksamkeit für Details machen ihn zu einem außergewöhnlichen Instruktor für Schüler aller Levels.',
        specializations: [
          'Grappling',
          'Wrestling',
          'No-Gi Jiu-Jitsu',
          'Takedown-Verteidigung'
        ],
        achievements: [
          'Wrestling Regionalmeister',
          'Grappling Schwarzgurt',
          'Wettkampftrainer',
          'Jugendentwicklungsspezialist'
        ]
      },
      background: 'Hintergrund',
      specializations: 'Spezialisierungen',
      achievements: 'Erfolge',
      philosophy: {
        title: 'Unsere Trainingsphilosophie',
        technical: {
          title: 'Technische Exzellenz',
          description: 'Wir konzentrieren uns auf richtige Technik und Grundlagen, um eine starke Basis für alle Schüler zu schaffen.'
        },
        individual: {
          title: 'Individuelle Betreuung',
          description: 'Jeder Schüler erhält persönlichen Unterricht, der auf seine Ziele und sein Leistungsniveau zugeschnitten ist.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir betonen Respekt, Disziplin und Sportlichkeit sowohl auf als auch neben den Matten.'
        }
      },
      cta: {
        title: 'Trainiere mit den Besten',
        description: 'Lerne von erfahrenen Trainern, die leidenschaftlich an deinem Erfolg interessiert sind.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle den Mitgliedschaftsplan, der zu deinen Trainingszielen und deinem Zeitplan passt. Alle Pläne beinhalten Zugang zu beiden Standorten.'
      },
      mainSeason: {
        title: 'Hauptsaison',
        period: 'September - Juni',
        duration: '10 Monate',
        mostPopular: 'Beliebteste'
      },
      summerSeason: {
        title: 'Sommersaison',
        period: 'Juli - August',
        duration: '2,5 Monate'
      },
      bjjOnly: {
        title: 'Nur BJJ Mitgliedschaft',
        program: 'BJJ Fokussiertes Training',
        subtitle: 'Spezielles Brazilian Jiu-Jitsu Trainingsprogramm',
        description: 'Zugang zu allen BJJ-Kursen während der Sommersaison'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was ist enthalten',
      mainIncludes: [
        'Unbegrenzter Zugang zu allen Kursen',
        'Training an beiden Standorten',
        'Freie Trainingseinheiten',
        'Wettkampfteam-Zugang',
        'Anfängerfreundlicher Unterricht',
        'Ausrüstungsnutzung'
      ],
      summerIncludes: [
        'Alle Sommerkurse inklusive',
        'Campo Tures & Bruneck',
        'Flexible Terminplanung',
        'Freier Mattenzugang',
        'Ausrüstung bereitgestellt',
        'Anfänger willkommen'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse inklusive',
        'Zugang zu beiden Standorten',
        'Gi und No-Gi Training',
        'Freie Trainingseinheiten',
        'Gürtel-Fortschritt',
        'Wettkampfvorbereitung'
      ],
      selectMainSeason: 'Hauptsaison wählen',
      selectSummerSeason: 'Sommersaison wählen',
      selectBjjOnly: 'Nur BJJ wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessere dein Training mit unseren spezialisierten Dienstleistungen und persönlichen Coaching-Optionen.'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Eins-zu-eins Coaching, zugeschnitten auf deine spezifischen Ziele und Bedürfnisse.',
        price: '€50',
        duration: 'pro Einheit'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training zur Vorbereitung auf Turniere und Wettkämpfe.',
        price: '€40',
        duration: 'pro Einheit'
      },
      seminars: {
        title: 'Seminare',
        description: 'Spezielle Workshops mit Gastinstruktoren und fortgeschrittenen Techniken.',
        price: '€30',
        duration: 'pro Seminar'
      },
      faq: {
        title: 'Häufig gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Die Hauptsaison (September-Juni) bietet unser vollständiges Curriculum mit 10 Monaten Training. Die Sommersaison (Juli-August) ist ein kürzeres, flexibleres Programm, perfekt um Fähigkeiten während der Pause zu erhalten.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu beiden Standorten Campo Tures und Bruneck. Du kannst jeden Kurs in beiden Studios besuchen.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Absolut! Wir bieten eine kostenlose Probestunde für neue Schüler. Kontaktiere uns, um deine erste Einheit zu planen.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Anfänger stellen wir Grundausrüstung zur Verfügung. Mit fortschreitendem Training solltest du in deine eigene Gi für BJJ-Kurse und angemessene Trainingskleidung investieren.'
        }
      },
      cta: {
        title: 'Beginne deine Reise',
        description: 'Wähle deine Mitgliedschaft und beginne das Training bei Südtirols führender Kampfsport-Akademie.'
      }
    },
    contact: {
      hero: {
        title: 'Kontaktiere uns',
        description: 'Nimm Kontakt mit uns auf, um deine Kampfsport-Reise zu beginnen oder Fragen zu unseren Programmen zu stellen.'
      },
      getInTouch: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Verschiedene Wege, um mit der Sport Academy in Kontakt zu treten'
      },
      callUs: 'Ruf uns an',
      instagram: 'Instagram',
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Standorte in Südtirol'
      },
      parkingAccessibility: {
        title: 'Parken & Barrierefreiheit',
        subtitle: 'Einfacher Zugang und Parkmöglichkeiten an beiden Standorten'
      },
      parking: 'Parken',
      publicTransport: 'Öffentliche Verkehrsmittel',
      accessibility: 'Barrierefreiheit',
      campoTures: {
        parking: 'Kostenlose Straßenparkplätze in der Via Hugo von Taufers und umliegenden Straßen verfügbar. Zusätzliche Parkplätze beim nahegelegenen Sportzentrum.',
        transport: 'Bushaltestelle "Campo Tures Centro" ist 2 Gehminuten entfernt. Regelmäßige Verbindungen von Bruneck und umliegenden Tälern.',
        accessibility: 'Erdgeschoss-Zugang mit breitem Eingang. Barrierefreie Umkleidekabinen und Einrichtungen verfügbar.'
      },
      brunico: {
        parking: 'Kostenlose Parkplätze im Wohngebiet verfügbar. Straßenparkplätze in der Via Maria Teresa Riedl und nahegelegenen Straßen.',
        transport: 'Zentrale Lage in Bruneck, zu Fuß vom Bahnhof erreichbar (10 Minuten). Mehrere Busverbindungen.',
        accessibility: 'Erdgeschoss-Einrichtung mit stufenfreiem Zugang. Barrierefreie Parkplätze in der Nähe verfügbar.'
      },
      visitRequirements: {
        title: 'Zum ersten Mal hier?',
        subtitle: 'Alles was du für deine erste Stunde wissen musst'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was mitbringen',
      whatWeProvide: 'Was wir bereitstellen',
      bring: [
        'Bequeme Trainingskleidung',
        'Wasserflasche',
        'Handtuch',
        'Positive Einstellung'
      ],
      provide: [
        'Trainingsmatten',
        'Grundlegende Schutzausrüstung',
        'Umkleidemöglichkeiten',
        'Expertenunterricht'
      ],
      specialInstructions: 'Besondere Hinweise',
      instructions: {
        age: 'Altersanforderungen: 16+ für Erwachsenenkurse, Kinderkurse 6-16',
        health: 'Gesundheit: Bitte informiere uns über Verletzungen oder medizinische Beschwerden',
        equipment: 'Ausrüstung: Anfänger können zunächst ohne spezielle Ausrüstung trainieren',
        payment: 'Zahlung: Bar, Karte oder Banküberweisung akzeptiert'
      },
      cta: {
        title: 'Bereit zu beginnen?',
        description: 'Kontaktiere uns heute, um deine Kampfsport-Reise bei der Sport Academy zu beginnen.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Die sanfte Kunst, die Hebel, Technik und mentale Stärke lehrt'
        },
        overview: {
          title: 'Die Kunst des Brazilian Jiu-Jitsu',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Aufgabegriffe konzentriert. Es betont das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner durch richtige Technik, Hebel und Timing verteidigen kann.',
            'Bei der Sport Academy unterrichten wir traditionelles BJJ mit Gi- und No-Gi-Training. Unser Lehrplan deckt alles ab, von Grundpositionen und Befreiungen bis hin zu fortgeschrittenen Aufgabetechniken und Wettkampfstrategien.',
            'Ob du nach Selbstverteidigung, Fitness, Wettkampf oder persönlichem Wachstum suchst, BJJ bietet ein komplettes System, das sowohl Körper als auch Geist herausfordert.'
          ]
        },
        techniques: {
          title: 'Kern-BJJ-Techniken',
          subtitle: 'Meistere die fundamentalen Techniken, die die Grundlage des Brazilian Jiu-Jitsu bilden',
          guardWork: {
            title: 'Guard-Arbeit',
            items: [
              'Closed Guard Kontrolle',
              'Open Guard Systeme',
              'Guard Sweeps',
              'Guard Retention',
              'Aufgaben aus der Guard'
            ]
          },
          submissions: {
            title: 'Aufgabegriffe',
            items: [
              'Armhebel',
              'Würge- und Drosselgriffe',
              'Schulterhebel',
              'Beinhebel',
              'Aufgabeketten'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount Kontrolle',
              'Seitenkontrolle',
              'Rückenkontrolle',
              'Knie auf Bauch',
              'Turtle Position'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Gürtelsystem',
          subtitle: 'Fortschritt durch das traditionelle Brazilian Jiu-Jitsu Rangsystem',
          belts: [
            {
              name: 'Weißgurt',
              color: 'gray',
              description: 'Anfänger Grundlagen'
            },
            {
              name: 'Blaugurt',
              color: 'blue',
              description: 'Solide Grundlage'
            },
            {
              name: 'Violettgurt',
              color: 'purple',
              description: 'Fortgeschrittene Techniken'
            },
            {
              name: 'Braungurt',
              color: 'yellow',
              description: 'Expertenlevel'
            },
            {
              name: 'Schwarzgurt',
              color: 'gray',
              description: 'Meisterlevel'
            }
          ],
          philosophy: {
            title: 'Gürtel-Philosophie',
            description: 'Jeder Gürtel repräsentiert Jahre engagierten Trainings, technisches Wissen und persönliches Wachstum. Der Fortschritt basiert auf Fähigkeiten, Wissen und Charakterentwicklung, nicht nur auf der Trainingszeit.'
          }
        },
        history: {
          title: 'Geschichte des BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu entwickelte sich aus traditionellem japanischem Jujutsu und Judo, das von Mitsuyo Maeda im frühen 20. Jahrhundert nach Brasilien gebracht wurde. Die Gracie-Familie, insbesondere Helio Gracie, passte diese Techniken an, um ein effektiveres System für kleinere Praktiker zu schaffen.',
            'Die Kunst erlangte weltweite Anerkennung durch die frühen UFC-Turniere, wo Royce Gracie die Effektivität des BJJ gegen größere Gegner aus verschiedenen Kampfkunst-Hintergründen demonstrierte.',
            'Heute wird BJJ weltweit praktiziert und bildet die Grundlage des modernen Mixed Martial Arts Bodenkampfs.'
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
                description: 'UFC-Champion, der die Effektivität des BJJ bewies'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ Trainingsplan',
          subtitle: 'Nimm an unseren regelmäßigen BJJ-Kursen an beiden Standorten teil'
        },
        cta: {
          title: 'Beginne deine BJJ-Reise',
          description: 'Erlebe die sanfte Kunst, die Selbstvertrauen, Fitness und mentale Stärke aufbaut.',
          joinButton: 'BJJ-Kurse beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'No-Gi Submission Wrestling mit Betonung auf Geschwindigkeit, Athletik und modernen Techniken'
        },
        overview: {
          title: 'Die Kunst des Grappling',
          paragraphs: [
            'Grappling, auch bekannt als Submission Wrestling oder No-Gi Jiu-Jitsu, ist eine Form des Kampfsports, die sich auf Takedowns, Kontrollpositionen und Aufgabegriffe ohne die traditionelle Gi-Uniform konzentriert.',
            'Diese dynamische Kampfkunst betont Geschwindigkeit, Athletik und moderne Aufgabetechniken. Ohne die Griffe der Gi müssen Grappler auf Unterhaken, Überhaken und Körperkontrolle setzen, um ihre Gegner zu dominieren.',
            'Grappling ist essentiell für Mixed Martial Arts und bietet eine ausgezeichnete Grundlage für Selbstverteidigung, Fitness und Wettkampfsport.'
          ]
        },
        techniques: {
          title: 'Kern-Grappling-Techniken',
          subtitle: 'Meistere die essentiellen Techniken des modernen Submission Wrestling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Double Leg Takedown',
              'Single Leg Takedown',
              'Hüftwürfe',
              'Fußfeger',
              'Sprawl-Verteidigung'
            ]
          },
          control: {
            title: 'Kontrollpositionen',
            items: [
              'Seitenkontrolle',
              'Mount Position',
              'Rückenkontrolle',
              'Nord-Süd',
              'Turtle Kontrolle'
            ]
          },
          submissions: {
            title: 'Aufgabegriffe',
            items: [
              'Rear Naked Choke',
              'Armhebel',
              'Beinhebel',
              'Heel Hooks',
              'Guillotine Choke'
            ]
          }
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Unser systematischer Ansatz für Grappling-Unterricht',
          technical: {
            title: 'Technische Entwicklung',
            methods: [
              {
                title: 'Positionsübungen',
                description: 'Wiederholtes Üben fundamentaler Positionen und Übergänge'
              },
              {
                title: 'Flow Rolling',
                description: 'Leichtes Widerstandstraining zur Entwicklung von Timing und Technik'
              },
              {
                title: 'Situatives Sparring',
                description: 'Fokussiertes Üben aus spezifischen Positionen und Szenarien'
              }
            ]
          },
          conditioning: {
            title: 'Körperliche Kondition',
            methods: [
              {
                title: 'Grappling Cardio',
                description: 'Sportspezifische Kondition für Ausdauer und Kraft'
              },
              {
                title: 'Flexibilitätstraining',
                description: 'Mobilitätsarbeit essentiell für Grappling-Bewegungen'
              },
              {
                title: 'Krafttraining',
                description: 'Funktionale Kraftentwicklung für Grappling'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grappling',
          subtitle: 'Körperliche und mentale Vorteile des regelmäßigen Grappling-Trainings',
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
              icon: '❤️',
              title: 'Herz-Kreislauf-Gesundheit',
              description: 'Ausgezeichnetes Cardio-Training und Herzgesundheit'
            },
            {
              icon: '🎯',
              title: 'Selbstverteidigung',
              description: 'Praktische Fähigkeiten für reale Situationen'
            }
          ]
        },
        schedule: {
          title: 'Grappling Trainingsplan',
          subtitle: 'Nimm an unseren dynamischen Grappling-Kursen teil'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Lerne von den Techniken der Grappling-Meister',
          grapplers: [
            {
              name: 'John Danaher',
              title: 'Submission-Spezialist',
              description: 'Revolutionärer Entwickler von Beinhebel-Systemen'
            },
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominanter No-Gi Grappling-Wettkämpfer'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Grappling-Genie',
              description: 'Meister der Butterfly Guard und Arm Drags'
            }
          ]
        },
        cta: {
          title: 'Meistere die Kunst des Grappling',
          description: 'Entwickle Geschwindigkeit, Technik und mentale Stärke durch unser umfassendes Grappling-Programm.',
          joinButton: 'Grappling-Kurse beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der Schlagtechniken, Wrestling und Bodenkampf kombiniert'
        },
        overview: {
          title: 'Das komplette Kampfsystem',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der vollständigste Kampfsport, der Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkunst-Disziplinen kombiniert.',
            'Unser MMA-Programm lehrt Schülern, wie sie nahtlos zwischen Schlag- und Grappling-Techniken wechseln und entwickelt vielseitige Kämpfer, die in allen Kampfdistanzen konkurrieren können.',
            'Ob dein Ziel Wettkampf, Fitness oder Selbstverteidigung ist, MMA-Training bietet die umfassendste Kampfkunst-Ausbildung.'
          ]
        },
        techniques: {
          title: 'MMA-Techniken',
          subtitle: 'Meistere alle Aspekte des Mixed Martial Arts Kampfs',
          striking: {
            title: 'Schlagtechniken',
            items: [
              'Box-Kombinationen',
              'Muay Thai Kicks',
              'Kniestöße',
              'Ellbogentechniken',
              'Beinarbeit und Bewegung'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Verteidigung',
              'Käfig-Wrestling',
              'Clinch-Arbeit',
              'Bodenkontrolle',
              'Sprawl-Techniken'
            ]
          },
          groundGame: {
            title: 'Bodenkampf',
            items: [
              'Ground and Pound',
              'Aufgabe-Verteidigung',
              'Guard Passing',
              'Übergänge',
              'Befreiungstechniken'
            ]
          }
        },
        history: {
          title: 'Geschichte des MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit der Ultimate Fighting Championship (UFC) 1993, die entwickelt wurde, um die effektivste Kampfkunst zu bestimmen.',
            'Frühe Turniere zeigten, dass keine einzelne Kampfkunst vollständig war, was zur Evolution des Cross-Trainings und der Entwicklung vielseitiger Kämpfer führte.',
            'Heute ist MMA ein globaler Sport mit professionellen Organisationen weltweit, der das höchste Level der Kampfkunst-Konkurrenz zeigt.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erstes UFC-Event demonstriert Effektivität verschiedener Kampfkünste'
              },
              {
                year: '2000er',
                description: 'Evolution vielseitiger Kämpfer und modernes MMA'
              },
              {
                year: '2010er',
                description: 'MMA wird Mainstream mit globaler Anerkennung'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des MMA-Trainings',
          subtitle: 'Komplette körperliche und mentale Entwicklung durch Mixed Martial Arts',
          items: [
            {
              icon: '🥊',
              title: 'Komplette Fitness',
              description: 'Ganzkörper-Training mit Cardio und Kraft'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Real anwendbare Kampffähigkeiten'
            },
            {
              icon: '🧠',
              title: 'Mentale Disziplin',
              description: 'Fokus, Selbstvertrauen und Stressmanagement'
            },
            {
              icon: '⚡',
              title: 'Athletische Leistung',
              description: 'Verbesserte Koordination, Geschwindigkeit und Kraft'
            }
          ]
        },
        schedule: {
          title: 'MMA Trainingsplan',
          subtitle: 'Umfassende Mixed Martial Arts Trainingseinheiten'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Lerne von den Techniken der Mixed Martial Arts Pioniere',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC-Pionier',
              description: 'Bewies die Effektivität des Brazilian Jiu-Jitsu'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Meister der Schlagtechniken und Konterangriffe'
            },
            {
              name: 'Georges St-Pierre',
              title: 'GSP',
              description: 'Perfektes Beispiel vielseitiger MMA-Fähigkeiten'
            }
          ]
        },
        cta: {
          title: 'Werde ein kompletter Kämpfer',
          description: 'Trainiere im weltweit umfassendsten Kampfsport und entwickle Fähigkeiten für Wettkampf oder Selbstverteidigung.',
          joinButton: 'MMA-Kurse beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Kämpfer schmieden seit 2017',
      copyright: '© 2024 Sport Academy. Alle Rechte vorbehalten.'
    },
    common: {
      joinNow: 'Jetzt beitreten',
      viewClasses: 'Kurse ansehen',
      viewSchedule: 'Stundenplan ansehen',
      viewMembership: 'Mitgliedschaft ansehen',
      contactUs: 'Kontaktiere uns',
      callNow: 'Jetzt anrufen',
      learnMore: 'Mehr erfahren',
      allLevels: 'Alle Level',
      ages: 'Alter',
      joinSportAcademy: 'Sport Academy beitreten',
      registerOnline: 'Online registrieren',
      bookClasses: 'Kurse buchen',
      visitUs: 'Besuche uns',
      dropInWelcome: 'Drop-ins willkommen',
      duringTrainingHours: 'Während der Trainingszeiten',
      responseWithin2Hours: 'Antwort innerhalb 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates & DMs',
      instantConfirmation: 'Sofortige Bestätigung'
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
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Forgiamo combattenti dal 2017'
      },
      welcome: {
        title: 'Benvenuti alla Sport Academy',
        description: 'Allenamento d\'élite in Arti Marziali Miste, Brazilian Jiu-Jitsu e Grappling. Con sedi a Campo Tures e Brunico, offriamo istruzione di livello mondiale per tutti i livelli di abilità.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Forgiamo combattenti dal 2017',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'MMA, BJJ, Grappling e altro',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come un Combattente',
        subtitle: 'Padroneggia l\'arte degli sport da combattimento con i nostri programmi di allenamento completi'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, grappling e combattimento a terra.'
      },
      bjj: {
        description: 'Brazilian Jiu-Jitsu incentrato sul combattimento a terra, sottomissioni e tecniche basate sulla leva.'
      },
      grappling: {
        description: 'Grappling no-gi che enfatizza takedown, posizioni di controllo e prese di sottomissione.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Scegli il tuo percorso verso l\'eccellenza nelle arti marziali'
      },
      quickLinks: {
        viewClasses: 'Visualizza Corsi',
        viewClassesDesc: 'Esplora i nostri programmi di allenamento',
        checkSchedule: 'Controlla Orari',
        checkScheduleDesc: 'Trova i tuoi orari di allenamento',
        membershipPlans: 'Piani di Abbonamento',
        membershipPlansDesc: 'Scegli il tuo abbonamento',
        contactUs: 'Contattaci',
        contactUsDesc: 'Mettiti in contatto con noi'
      }
    },
    classes: {
      hero: {
        title: 'I Nostri Corsi',
        description: 'Programmi completi di allenamento nelle arti marziali progettati per tutti i livelli di abilità, dai principianti ai competitori avanzati.'
      },
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Allenamento MMA completo che combina striking, wrestling e Brazilian Jiu-Jitsu. Impara tutti gli aspetti delle arti marziali miste in un ambiente sicuro e controllato.',
        features: [
          'Tecniche di striking in piedi',
          'Wrestling e takedown',
          'Combattimento a terra e sottomissioni',
          'Lavoro in gabbia e clinch',
          'Condizionamento e fitness',
          'Preparazione alle competizioni'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'L\'arte gentile che si concentra su leva, tecnica e tempismo. Perfetto per l\'autodifesa e per costruire fiducia mentre ci si mantiene in forma.',
        features: [
          'Posizioni fondamentali e fughe',
          'Lavoro di guardia e spazzate',
          'Tecniche di sottomissione',
          'Applicazioni di autodifesa',
          'Allenamento per competizioni',
          'Sistema di progressione delle cinture'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Grappling no-gi incentrato su takedown, controllo e sottomissioni senza l\'uniforme gi tradizionale.',
        features: [
          'Takedown basati sul wrestling',
          'Sistemi di guardia no-gi',
          'Leve alle gambe e heel hook',
          'Scramble e transizioni',
          'Preparazione alle competizioni',
          'Formati submission-only'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Corsi di Brazilian Jiu-Jitsu specificamente progettati per bambini, incentrati su disciplina, rispetto e divertimento nell\'apprendimento delle arti marziali.',
        features: [
          'Tecniche appropriate per l\'età',
          'Sviluppo del carattere',
          'Abilità anti-bullismo',
          'Fitness fisico',
          'Costruzione della fiducia',
          'Rispetto e disciplina'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Corsi di grappling no-gi per giovani atleti, enfatizzando wrestling e submission grappling in un ambiente divertente e sicuro.',
        features: [
          'Fondamentali del wrestling',
          'Sottomissioni di base',
          'Coordinazione e agilità',
          'Lavoro di squadra e sportività',
          'Opportunità di competizione',
          'Condizionamento fisico'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Allenamento di wrestling tradizionale incentrato su takedown, controllo e condizionamento. Essenziale per MMA e grappling.',
        features: [
          'Takedown single e double leg',
          'Sprawl e tecniche difensive',
          'Controllo dall\'alto e pin',
          'Condizionamento e forza',
          'Resistenza mentale',
          'Preparazione alle competizioni'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Pronto per Iniziare l\'Allenamento?',
        description: 'Unisciti alla nostra comunità di artisti marziali dedicati e inizia il tuo viaggio oggi.'
      }
    },
    schedule: {
      hero: {
        title: 'Orario di Allenamento',
        description: 'Trova gli orari di allenamento perfetti che si adattano al tuo programma. Offriamo corsi durante tutta la settimana in entrambe le sedi.'
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
      openMat: 'Tappeto Libero',
      importantInfo: 'Informazioni Importanti',
      classGuidelines: 'Linee Guida dei Corsi',
      guidelines: {
        arrive: 'Arriva 10 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'I corsi BJJ richiedono l\'uniforme gi',
        noGi: 'I corsi di grappling sono no-gi (pantaloncini e rash guard)'
      },
      membershipBenefits: 'Vantaggi dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutti i corsi incluso',
        openMat: 'Sessioni di tappeto libero gratuite',
        bothLocations: 'Allenati in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto per Unirti?',
        description: 'Prenota il tuo primo corso e inizia il tuo viaggio nelle arti marziali con noi.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Incontra i nostri istruttori esperti che si dedicano ad aiutarti a raggiungere i tuoi obiettivi nelle arti marziali.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore & Fondatore',
        background: 'Con oltre 8 anni di esperienza nelle arti marziali, Matteo ha fondato la Sport Academy per condividere la sua passione per gli sport da combattimento. Possiede cinture nere nel Brazilian Jiu-Jitsu e ha gareggiato a livello nazionale e internazionale.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Arti Marziali Miste',
          'Preparazione alle Competizioni',
          'Autodifesa'
        ],
        achievements: [
          'Cintura Nera BJJ',
          'Combattente Professionista MMA',
          'Campione Nazionale BJJ',
          'Istruttore Certificato'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta una vasta esperienza nel grappling e wrestling al nostro team. Il suo approccio tecnico e l\'attenzione ai dettagli lo rendono un istruttore eccezionale per studenti di tutti i livelli.',
        specializations: [
          'Grappling',
          'Wrestling',
          'No-Gi Jiu-Jitsu',
          'Difesa da Takedown'
        ],
        achievements: [
          'Campione Regionale di Wrestling',
          'Cintura Nera di Grappling',
          'Allenatore per Competizioni',
          'Specialista nello Sviluppo Giovanile'
        ]
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      philosophy: {
        title: 'La Nostra Filosofia di Insegnamento',
        technical: {
          title: 'Eccellenza Tecnica',
          description: 'Ci concentriamo sulla tecnica corretta e sui fondamentali per costruire una base solida per tutti gli studenti.'
        },
        individual: {
          title: 'Attenzione Individuale',
          description: 'Ogni studente riceve istruzione personalizzata adattata ai propri obiettivi e livello di abilità.'
        },
        respect: {
          title: 'Rispetto & Disciplina',
          description: 'Enfatizziamo rispetto, disciplina e sportività sia dentro che fuori dai tappeti.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Impara da istruttori esperti che sono appassionati del tuo successo.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il piano di abbonamento che si adatta ai tuoi obiettivi di allenamento e al tuo programma. Tutti i piani includono l\'accesso a entrambe le sedi.'
      },
      mainSeason: {
        title: 'Stagione Principale',
        period: 'Settembre - Giugno',
        duration: '10 mesi',
        mostPopular: 'Più Popolare'
      },
      summerSeason: {
        title: 'Stagione Estiva',
        period: 'Luglio - Agosto',
        duration: '2,5 mesi'
      },
      bjjOnly: {
        title: 'Abbonamento Solo BJJ',
        program: 'Allenamento Focalizzato BJJ',
        subtitle: 'Programma di allenamento dedicato al Brazilian Jiu-Jitsu',
        description: 'Accesso a tutti i corsi BJJ durante la stagione estiva'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      mainIncludes: [
        'Accesso illimitato a tutti i corsi',
        'Allenamento in entrambe le sedi',
        'Sessioni di tappeto libero',
        'Accesso al team competizioni',
        'Istruzione adatta ai principianti',
        'Uso dell\'attrezzatura'
      ],
      summerIncludes: [
        'Tutti i corsi estivi inclusi',
        'Campo Tures & Brunico',
        'Programmazione flessibile',
        'Accesso al tappeto libero',
        'Attrezzatura fornita',
        'Principianti benvenuti'
      ],
      bjjIncludes: [
        'Tutti i corsi BJJ inclusi',
        'Accesso a entrambe le sedi',
        'Allenamento Gi e No-Gi',
        'Sessioni di tappeto libero',
        'Progressione delle cinture',
        'Preparazione alle competizioni'
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
        description: 'Coaching uno-a-uno adattato ai tuoi obiettivi e bisogni specifici.',
        price: '€50',
        duration: 'per sessione'
      },
      competitionPrep: {
        title: 'Preparazione Competizioni',
        description: 'Allenamento specializzato per prepararsi a tornei e competizioni.',
        price: '€40',
        duration: 'per sessione'
      },
      seminars: {
        title: 'Seminari',
        description: 'Workshop speciali con istruttori ospiti e tecniche avanzate.',
        price: '€30',
        duration: 'per seminario'
      },
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra le stagioni?',
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro curriculum completo con 10 mesi di allenamento. La stagione estiva (Luglio-Agosto) è un programma più breve e flessibile, perfetto per mantenere le abilità durante la pausa.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso a entrambe le sedi di Campo Tures e Brunico. Puoi partecipare a qualsiasi corso in entrambe le palestre.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo una lezione di prova gratuita per i nuovi studenti. Contattaci per programmare la tua prima sessione.'
        },
        equipment: {
          question: 'Di che attrezzatura ho bisogno?',
          answer: 'Per i principianti, forniamo l\'attrezzatura di base. Man mano che progredisci, vorrai investire nel tuo gi per i corsi BJJ e nell\'abbigliamento da allenamento appropriato.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio',
        description: 'Scegli il tuo abbonamento e inizia l\'allenamento con l\'accademia di arti marziali premier dell\'Alto Adige.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Mettiti in contatto con noi per iniziare il tuo viaggio nelle arti marziali o per fare domande sui nostri programmi.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con la Sport Academy'
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
        subtitle: 'Facile accesso e parcheggio in entrambe le sedi'
      },
      parking: 'Parcheggio',
      publicTransport: 'Trasporti Pubblici',
      accessibility: 'Accessibilità',
      campoTures: {
        parking: 'Parcheggio gratuito in strada disponibile in Via Hugo von Taufers e strade circostanti. Parcheggio aggiuntivo presso il centro sportivo vicino.',
        transport: 'Fermata dell\'autobus "Campo Tures Centro" a 2 minuti a piedi. Collegamenti regolari da Brunico e valli circostanti.',
        accessibility: 'Accesso al piano terra con ingresso ampio. Spogliatoi e strutture accessibili disponibili.'
      },
      brunico: {
        parking: 'Parcheggio gratuito disponibile nella zona residenziale. Parcheggio in strada in Via Maria Teresa Riedl e strade vicine.',
        transport: 'Posizione centrale a Brunico, raggiungibile a piedi dalla stazione ferroviaria (10 minuti). Molteplici collegamenti autobus.',
        accessibility: 'Struttura al piano terra con accesso senza gradini. Posti auto accessibili disponibili nelle vicinanze.'
      },
      visitRequirements: {
        title: 'Prima Volta qui?',
        subtitle: 'Tutto quello che devi sapere per la tua prima lezione'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      whatWeProvide: 'Cosa Forniamo',
      bring: [
        'Abbigliamento comodo da allenamento',
        'Bottiglia d\'acqua',
        'Asciugamano',
        'Atteggiamento positivo'
      ],
      provide: [
        'Tappeti da allenamento',
        'Attrezzatura protettiva di base',
        'Spogliatoi',
        'Istruzione esperta'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Requisiti di Età: 16+ per corsi adulti, corsi bambini 6-16',
        health: 'Salute: Ti preghiamo di informarci di eventuali infortuni o condizioni mediche',
        equipment: 'Attrezzatura: I principianti possono allenarsi inizialmente senza attrezzatura speciale',
        payment: 'Pagamento: Contanti, carta o bonifico bancario accettati'
      },
      cta: {
        title: 'Pronto per Iniziare?',
        description: 'Contattaci oggi per iniziare il tuo viaggio nelle arti marziali alla Sport Academy.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'L\'arte gentile che insegna leva, tecnica e forza mentale'
        },
        overview: {
          title: 'L\'Arte del Brazilian Jiu-Jitsu',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione. Enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte attraverso tecnica, leva e tempismo appropriati.',
            'Alla Sport Academy, insegniamo BJJ tradizionale con allenamento sia gi che no-gi. Il nostro curriculum copre tutto, dalle posizioni di base e fughe alle tecniche di sottomissione avanzate e strategie competitive.',
            'Che tu stia cercando autodifesa, fitness, competizione o crescita personale, il BJJ offre un sistema completo che sfida sia corpo che mente.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali BJJ',
          subtitle: 'Padroneggia le tecniche fondamentali che formano la base del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Controllo Guardia Chiusa',
              'Sistemi Guardia Aperta',
              'Spazzate dalla Guardia',
              'Mantenimento Guardia',
              'Sottomissioni dalla Guardia'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Leve al Braccio',
              'Strangolamenti',
              'Leve alla Spalla',
              'Leve alle Gambe',
              'Catene di Sottomissione'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Controllo Mount',
              'Controllo Laterale',
              'Controllo Schiena',
              'Ginocchio su Pancia',
              'Posizione Tartaruga'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di classificazione tradizionale del Brazilian Jiu-Jitsu',
          belts: [
            {
              name: 'Cintura Bianca',
              color: 'gray',
              description: 'Fondamentali per principianti'
            },
            {
              name: 'Cintura Blu',
              color: 'blue',
              description: 'Base solida'
            },
            {
              name: 'Cintura Viola',
              color: 'purple',
              description: 'Tecniche avanzate'
            },
            {
              name: 'Cintura Marrone',
              color: 'yellow',
              description: 'Livello esperto'
            },
            {
              name: 'Cintura Nera',
              color: 'gray',
              description: 'Livello maestro'
            }
          ],
          philosophy: {
            title: 'Filosofia delle Cinture',
            description: 'Ogni cintura rappresenta anni di allenamento dedicato, conoscenza tecnica e crescita personale. La progressione si basa su abilità, conoscenza e sviluppo del carattere, non solo sul tempo trascorso ad allenarsi.'
          }
        },
        history: {
          title: 'Storia del BJJ',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu si è evoluto dal jujutsu giapponese tradizionale e dal judo, portato in Brasile da Mitsuyo Maeda all\'inizio del XX secolo. La famiglia Gracie, in particolare Helio Gracie, ha adattato queste tecniche per creare un sistema più efficace per i praticanti più piccoli.',
            'L\'arte ha ottenuto riconoscimento mondiale attraverso i primi tornei UFC, dove Royce Gracie ha dimostrato l\'efficacia del BJJ contro avversari più grandi provenienti da diversi background di arti marziali.',
            'Oggi, il BJJ è praticato in tutto il mondo e forma la base del combattimento a terra delle moderne arti marziali miste.'
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
          title: 'Orario Allenamento BJJ',
          subtitle: 'Unisciti ai nostri corsi regolari di BJJ in entrambe le sedi'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Sperimenta l\'arte gentile che costruisce fiducia, fitness e forza mentale.',
          joinButton: 'Unisciti ai Corsi BJJ',
          backButton: 'Torna ai Corsi'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Wrestling di sottomissione no-gi che enfatizza velocità, atletismo e tecniche moderne'
        },
        overview: {
          title: 'L\'Arte del Grappling',
          paragraphs: [
            'Il Grappling, noto anche come submission wrestling o jiu-jitsu no-gi, è una forma di sport da combattimento che si concentra su takedown, posizioni di controllo e prese di sottomissione senza l\'uniforme gi tradizionale.',
            'Quest\'arte marziale dinamica enfatizza velocità, atletismo e tecniche di sottomissione moderne. Senza le prese fornite dal gi, i grappler devono fare affidamento su underhook, overhook e controllo del corpo per dominare i loro avversari.',
            'Il Grappling è essenziale per le arti marziali miste e fornisce un\'eccellente base per autodifesa, fitness e sport competitivo.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali di Grappling',
          subtitle: 'Padroneggia le tecniche essenziali del submission wrestling moderno',
          takedowns: {
            title: 'Takedown',
            items: [
              'Double Leg Takedown',
              'Single Leg Takedown',
              'Proiezioni d\'Anca',
              'Spazzate con i Piedi',
              'Difesa Sprawl'
            ]
          },
          control: {
            title: 'Posizioni di Controllo',
            items: [
              'Controllo Laterale',
              'Posizione Mount',
              'Controllo Schiena',
              'Nord-Sud',
              'Controllo Tartaruga'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Rear Naked Choke',
              'Leve al Braccio',
              'Leve alle Gambe',
              'Heel Hook',
              'Guillotine Choke'
            ]
          }
        },
        methodology: {
          title: 'Metodologia di Allenamento',
          subtitle: 'Il nostro approccio sistematico all\'istruzione del grappling',
          technical: {
            title: 'Sviluppo Tecnico',
            methods: [
              {
                title: 'Esercizi di Posizione',
                description: 'Pratica ripetitiva di posizioni fondamentali e transizioni'
              },
              {
                title: 'Flow Rolling',
                description: 'Allenamento a resistenza leggera per sviluppare tempismo e tecnica'
              },
              {
                title: 'Sparring Situazionale',
                description: 'Pratica focalizzata da posizioni e scenari specifici'
              }
            ]
          },
          conditioning: {
            title: 'Condizionamento Fisico',
            methods: [
              {
                title: 'Cardio Grappling',
                description: 'Condizionamento sport-specifico per resistenza e forza'
              },
              {
                title: 'Allenamento Flessibilità',
                description: 'Lavoro di mobilità essenziale per i movimenti del grappling'
              },
              {
                title: 'Allenamento Forza',
                description: 'Sviluppo della forza funzionale per il grappling'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici del Grappling',
          subtitle: 'Benefici fisici e mentali dell\'allenamento regolare di grappling',
          items: [
            {
              icon: '💪',
              title: 'Forza Corpo Intero',
              description: 'Sviluppa forza funzionale e resistenza muscolare'
            },
            {
              icon: '🧠',
              title: 'Resistenza Mentale',
              description: 'Costruisce resilienza e abilità di problem-solving'
            },
            {
              icon: '❤️',
              title: 'Salute Cardiovascolare',
              description: 'Eccellente allenamento cardio e salute del cuore'
            },
            {
              icon: '🎯',
              title: 'Autodifesa',
              description: 'Abilità pratiche per situazioni del mondo reale'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento Grappling',
          subtitle: 'Unisciti ai nostri corsi dinamici di grappling'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Impara dalle tecniche pioniere dei maestri del grappling',
          grapplers: [
            {
              name: 'John Danaher',
              title: 'Specialista Sottomissioni',
              description: 'Sviluppatore rivoluzionario del sistema leg lock'
            },
            {
              name: 'Gordon Ryan',
              title: 'Campione ADCC',
              description: 'Competitore dominante di grappling no-gi'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Genio del Grappling',
              description: 'Maestro della butterfly guard e arm drag'
            }
          ]
        },
        cta: {
          title: 'Padroneggia l\'Arte del Grappling',
          description: 'Sviluppa velocità, tecnica e resistenza mentale attraverso il nostro programma completo di grappling.',
          joinButton: 'Unisciti ai Corsi di Grappling',
          backButton: 'Torna ai Corsi'
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
            'Le Arti Marziali Miste (MMA) sono lo sport da combattimento più completo, combinando tecniche da boxe, kickboxing, wrestling, Brazilian Jiu-Jitsu e altre discipline di arti marziali.',
            'Il nostro programma MMA insegna agli studenti come passare senza soluzione di continuità tra striking e grappling, sviluppando combattenti completi capaci di competere in tutte le distanze di combattimento.',
            'Che il tuo obiettivo sia competizione, fitness o autodifesa, l\'allenamento MMA fornisce l\'educazione più completa nelle arti marziali disponibile.'
          ]
        },
        techniques: {
          title: 'Tecniche MMA',
          subtitle: 'Padroneggia tutti gli aspetti del combattimento nelle arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Combinazioni di Boxe',
              'Calci Muay Thai',
              'Colpi di Ginocchio',
              'Tecniche di Gomito',
              'Gioco di Gambe e Movimento'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Difesa da Takedown',
              'Wrestling in Gabbia',
              'Lavoro in Clinch',
              'Controllo a Terra',
              'Tecniche Sprawl'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Ground and Pound',
              'Difesa da Sottomissione',
              'Passaggio di Guardia',
              'Transizioni',
              'Tecniche di Fuga'
            ]
          }
        },
        history: {
          title: 'Storia delle MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma le MMA moderne iniziarono con l\'Ultimate Fighting Championship (UFC) nel 1993, progettato per determinare l\'arte marziale più efficace.',
            'I primi tornei mostrarono che nessuna singola arte marziale era completa, portando all\'evoluzione del cross-training e allo sviluppo di combattenti completi.',
            'Oggi, le MMA sono uno sport globale con organizzazioni professionali in tutto il mondo, che mostrano il più alto livello di competizione nelle arti marziali.'
          ],
          milestones: {
            title: 'Pietre Miliari Chiave',
            events: [
              {
                year: '1993',
                description: 'Il primo evento UFC dimostra l\'efficacia di diverse arti marziali'
              },
              {
                year: '2000s',
                description: 'Evoluzione di combattenti completi e MMA moderne'
              },
              {
                year: '2010s',
                description: 'Le MMA diventano mainstream con riconoscimento globale'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento MMA',
          subtitle: 'Sviluppo fisico e mentale completo attraverso le arti marziali miste',
          items: [
            {
              icon: '🥊',
              title: 'Fitness Completo',
              description: 'Allenamento per tutto il corpo che combina cardio e forza'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Abilità di combattimento applicabili nel mondo reale'
            },
            {
              icon: '🧠',
              title: 'Disciplina Mentale',
              description: 'Focus, fiducia e gestione dello stress'
            },
            {
              icon: '⚡',
              title: 'Performance Atletica',
              description: 'Miglioramento di coordinazione, velocità e potenza'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento MMA',
          subtitle: 'Sessioni complete di allenamento arti marziali miste'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Impara dalle tecniche dei pionieri delle arti marziali miste',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'Pioniere UFC',
              description: 'Dimostrò l\'efficacia del Brazilian Jiu-Jitsu'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Maestro di striking e contrattacco'
            },
            {
              name: 'Georges St-Pierre',
              title: 'GSP',
              description: 'Esempio perfetto di abilità MMA complete'
            }
          ]
        },
        cta: {
          title: 'Diventa un Combattente Completo',
          description: 'Allenati nello sport da combattimento più completo al mondo e sviluppa abilità per competizione o autodifesa.',
          joinButton: 'Unisciti ai Corsi MMA',
          backButton: 'Torna ai Corsi'
        }
      }
    },
    footer: {
      tagline: 'Allenamento Elite MMA, BJJ & Grappling',
      subtitle: 'Forgiamo combattenti dal 2017',
      copyright: '© 2024 Sport Academy. Tutti i diritti riservati.'
    },
    common: {
      joinNow: 'Iscriviti Ora',
      viewClasses: 'Visualizza Corsi',
      viewSchedule: 'Visualizza Orari',
      viewMembership: 'Visualizza Abbonamenti',
      contactUs: 'Contattaci',
      callNow: 'Chiama Ora',
      learnMore: 'Scopri di Più',
      allLevels: 'Tutti i Livelli',
      ages: 'Età',
      joinSportAcademy: 'Unisciti alla Sport Academy',
      registerOnline: 'Registrati Online',
      bookClasses: 'Prenota Corsi',
      visitUs: 'Visitaci',
      dropInWelcome: 'Drop-in Benvenuti',
      duringTrainingHours: 'Durante gli orari di allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM',
      instantConfirmation: 'Conferma istantanea'
    }
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
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
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}