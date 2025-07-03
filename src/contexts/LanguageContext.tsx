import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

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
        subtitle: 'Elite MMA, Brazilian Jiu-Jitsu & Grappling Training in Campo Tures and Brunico'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Where champions are forged through dedication, discipline, and expert coaching. Join our elite training programs and discover your potential in Mixed Martial Arts, Brazilian Jiu-Jitsu, and Grappling.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Proven track record of developing fighters',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures and Brunico facilities',
        trainingPrograms: 'Training Programs',
        programsDescription: 'Comprehensive martial arts curriculum',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Choose your discipline and begin your journey'
      },
      mma: {
        description: 'Complete mixed martial arts training combining striking, grappling, and ground fighting techniques.'
      },
      bjj: {
        description: 'Master the gentle art of Brazilian Jiu-Jitsu with focus on leverage, technique, and mental strategy.'
      },
      grappling: {
        description: 'Develop superior ground control and submission skills through intensive grappling training.'
      },
      getStarted: {
        title: 'Get Started Today',
        subtitle: 'Everything you need to begin your martial arts journey'
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
        description: 'Comprehensive martial arts training programs designed for all skill levels, from beginners to advanced competitors.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Complete combat training combining striking, wrestling, and ground fighting. Develop skills in boxing, kickboxing, wrestling, and Brazilian Jiu-Jitsu in one comprehensive program.',
        features: [
          'Stand-up striking techniques',
          'Wrestling and takedowns',
          'Ground fighting and submissions',
          'Cage work and clinch fighting',
          'Cardio and strength conditioning',
          'Competition preparation'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Master the gentle art focusing on leverage, technique, and strategy over strength. Learn to control and submit opponents through superior positioning and technique.',
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
        description: 'Intensive ground fighting training focusing on takedowns, control positions, and submission techniques without the traditional gi.',
        features: [
          'Wrestling fundamentals',
          'No-gi grappling techniques',
          'Submission wrestling',
          'Takedown defense',
          'Ground control positions',
          'Competition preparation'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Age-appropriate Brazilian Jiu-Jitsu training that builds confidence, discipline, and physical fitness while teaching valuable self-defense skills.',
        features: [
          'Basic BJJ fundamentals',
          'Character development',
          'Anti-bullying techniques',
          'Physical fitness and coordination',
          'Respect and discipline',
          'Fun and engaging activities'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Dynamic grappling program for young athletes focusing on wrestling basics, ground control, and building athletic foundation.',
        features: [
          'Wrestling basics',
          'Ground movement and control',
          'Strength and agility training',
          'Teamwork and sportsmanship',
          'Competition opportunities',
          'Athletic development'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling training focusing on takedowns, control, and conditioning. Perfect foundation for MMA or competitive wrestling.',
        features: [
          'Single and double leg takedowns',
          'Sprawls and takedown defense',
          'Top and bottom position work',
          'Conditioning and strength training',
          'Competition techniques',
          'Mental toughness development'
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
        description: 'Find the perfect training times that fit your schedule. All classes are included with your membership.'
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
        gi: 'BJJ classes require gi (uniform)',
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
        title: 'Join Our Training Community',
        description: 'Start training with us today and experience the difference.'
      }
    },
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Learn from experienced martial artists dedicated to helping you achieve your goals through expert instruction and personalized guidance.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 8 years of martial arts experience, Matteo brings a wealth of knowledge in MMA, Brazilian Jiu-Jitsu, and grappling. His passion for teaching and developing fighters has made Sport Academy a premier training destination.',
        specializations: [
          'Mixed Martial Arts',
          'Brazilian Jiu-Jitsu',
          'Grappling & Wrestling',
          'Competition Preparation',
          'Youth Programs'
        ],
        achievements: [
          'Certified BJJ Instructor',
          'MMA Competition Experience',
          'Youth Development Specialist',
          '8+ Years Teaching Experience',
          'Multiple Tournament Victories'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings technical expertise and competitive experience to Sport Academy. His methodical approach to teaching ensures students develop proper fundamentals while progressing safely through their martial arts journey.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Technical Grappling',
          'Competition Strategy',
          'Advanced Techniques',
          'Mental Preparation'
        ],
        achievements: [
          'Competition Medalist',
          'Technical Specialist',
          'Advanced BJJ Practitioner',
          'Student Development Focus',
          'Continuous Education Advocate'
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
          title: 'Individual Growth',
          description: 'Every student receives personalized attention to help them reach their unique potential.'
        },
        respect: {
          title: 'Respect & Discipline',
          description: 'We instill values of respect, discipline, and sportsmanship in all our training programs.'
        }
      },
      cta: {
        title: 'Train with the Best',
        description: 'Experience world-class instruction and take your skills to the next level.'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the perfect training package for your goals. All memberships include access to both locations and all classes.'
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
        program: 'BJJ Focused Training',
        description: 'Access to all BJJ classes at both locations'
      },
      adults: 'Adults',
      students: 'Students',
      month: 'month',
      whatsIncluded: 'What\'s Included',
      mainIncludes: [
        'All MMA, BJJ, and Grappling classes',
        'Access to both Campo Tures and Brunico locations',
        'Open mat sessions',
        'Competition team training',
        'Beginner-friendly instruction',
        'Equipment usage during classes'
      ],
      summerIncludes: [
        'All summer training classes',
        'Both location access',
        'Intensive summer programs',
        'Open mat sessions',
        'Flexible scheduling',
        'Equipment included'
      ],
      bjjIncludes: [
        'All BJJ classes (gi and no-gi)',
        'Both location access',
        'Open mat sessions',
        'Belt progression system',
        'Competition preparation',
        'Fundamental and advanced classes'
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
        description: 'Specialized training to prepare for tournaments and competitions.',
        price: '€80',
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
          answer: 'The main season (September-June) offers our complete curriculum with consistent training. Summer season (July-August) provides intensive training during vacation months with flexible scheduling.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to both Campo Tures and Brunico locations. You can attend classes at either facility based on your schedule.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer trial classes for new students. Contact us to schedule your first session and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For beginners, we provide basic equipment during classes. As you progress, you\'ll want to invest in your own gi for BJJ classes and appropriate workout gear.'
        }
      },
      cta: {
        title: 'Start Your Journey Today',
        description: 'Choose your membership and begin training with South Tyrol\'s premier martial arts academy.'
      }
    },
    contact: {
      hero: {
        title: 'Contact Us',
        description: 'Get in touch with our team to start your martial arts journey or learn more about our programs.'
      },
      getInTouch: {
        title: 'Get In Touch',
        subtitle: 'Multiple ways to connect with Sport Academy'
      },
      callUs: 'Call Us',
      instagram: 'Instagram',
      locations: {
        title: 'Our Locations',
        subtitle: 'Two convenient training facilities in South Tyrol'
      },
      address: 'Address',
      trainingSchedule: 'Training Schedule',
      parking: 'Parking',
      publicTransport: 'Public Transport',
      accessibility: 'Accessibility',
      parkingAccessibility: {
        title: 'Parking & Accessibility',
        subtitle: 'Accessibility of the gym'
      },
      campoTures: {
        parking: 'Free parking available directly in front of the gym. Additional street parking nearby.',
        transport: 'Bus stop "Campo Tures Centro" is 2 minutes walk from the gym.',
        accessibility: 'Ground floor access with wide entrance. Wheelchair accessible facilities.'
      },
      brunico: {
        parking: 'Free parking in the adjacent lot. Street parking also available on Via Maria Teresa Riedl.',
        transport: 'Brunico train station is 10 minutes walk. Multiple bus lines stop nearby.',
        accessibility: 'Elevator access to training floor. Full wheelchair accessibility throughout the facility.'
      },
      visitRequirements: {
        title: 'First Time Visiting?',
        subtitle: 'Everything you need to know for your first class'
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
        'Basic training equipment',
        'Mats and training space',
        'Changing rooms',
        'Expert instruction and guidance'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Age Requirements: 16+ for adult classes, 6-16 for youth programs',
        health: 'Health: Please inform instructors of any injuries or health conditions',
        equipment: 'Equipment: Beginners can use gym equipment, own gear recommended later',
        payment: 'Payment: Trial classes available, membership required for regular training'
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Contact us today to schedule your first class or learn more about our programs.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Master the gentle art through technique, leverage, and strategy'
        },
        overview: {
          title: 'The Gentle Art',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent through proper technique, leverage, and timing.',
            'At Sport Academy, our BJJ program is designed to teach students the fundamental principles of this art while building physical fitness, mental toughness, and self-confidence. Whether you\'re a complete beginner or an experienced grappler, our structured curriculum will help you develop your skills systematically.',
            'Our classes combine traditional BJJ techniques with modern training methods, ensuring students learn both the art\'s rich heritage and its practical applications in self-defense and competition.'
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
              'Guard sweeps and transitions',
              'Guard retention techniques'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Chokes and strangulations',
              'Joint locks and arm bars',
              'Leg locks and foot attacks',
              'Submission chains'
            ]
          },
          positions: {
            title: 'Positions',
            items: [
              'Mount and side control',
              'Back control techniques',
              'Knee on belly position',
              'Transitional movements'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the traditional ranking system of Brazilian Jiu-Jitsu',
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
            description: 'Each belt represents not just technical knowledge, but also character development, perseverance, and dedication to the art. Progression is based on skill demonstration, time in grade, and personal growth.'
          }
        },
        history: {
          title: 'History & Heritage',
          paragraphs: [
            'Brazilian Jiu-Jitsu evolved from traditional Japanese jujutsu and judo, brought to Brazil by Mitsuyo Maeda in the early 20th century. The Gracie family, particularly Helio Gracie, adapted these techniques to create a more efficient system for smaller practitioners.',
            'The art gained worldwide recognition through the early UFC tournaments, where Royce Gracie demonstrated BJJ\'s effectiveness against larger opponents from different martial arts backgrounds.',
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
          subtitle: 'Regular classes available at both locations throughout the week'
        },
        cta: {
          title: 'Start Your BJJ Journey',
          description: 'Join our Brazilian Jiu-Jitsu program and discover the gentle art that builds both physical and mental strength.',
          joinButton: 'Join BJJ Classes',
          backButton: 'Back to Classes'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Develop superior ground control and submission skills through intensive training'
        },
        overview: {
          title: 'The Art of Ground Fighting',
          paragraphs: [
            'Grappling is the foundation of ground fighting, encompassing wrestling, submission holds, and positional control. Unlike traditional martial arts that focus on striking, grappling emphasizes close-contact combat where technique and leverage overcome size and strength.',
            'Our grappling program combines elements from wrestling, Brazilian Jiu-Jitsu, and submission wrestling to create well-rounded ground fighters. Students learn to control opponents, escape dangerous positions, and apply submission techniques effectively.',
            'Whether your goal is self-defense, MMA preparation, or competitive grappling, our program provides the technical foundation and physical conditioning needed to excel in ground fighting situations.'
          ]
        },
        techniques: {
          title: 'Essential Techniques',
          subtitle: 'Master the core skills that define effective grappling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single and double leg attacks',
              'Hip tosses and throws',
              'Foot sweeps and trips',
              'Takedown defense and sprawls'
            ]
          },
          control: {
            title: 'Control Positions',
            items: [
              'Top position dominance',
              'Side control and mount',
              'Back control techniques',
              'Transitional movements'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Chokes and strangulations',
              'Joint locks and holds',
              'Leg attacks and foot locks',
              'Submission combinations'
            ]
          }
        },
        methodology: {
          title: 'Training Methodology',
          subtitle: 'Our systematic approach to developing complete grapplers',
          technical: {
            title: 'Technical Development',
            methods: [
              {
                title: 'Progressive Learning',
                description: 'Step-by-step technique instruction building from basics to advanced'
              },
              {
                title: 'Drilling & Repetition',
                description: 'Focused practice to develop muscle memory and timing'
              },
              {
                title: 'Live Rolling',
                description: 'Controlled sparring to apply techniques under pressure'
              }
            ]
          },
          conditioning: {
            title: 'Physical Conditioning',
            methods: [
              {
                title: 'Grappling Cardio',
                description: 'Sport-specific conditioning for endurance and recovery'
              },
              {
                title: 'Strength Training',
                description: 'Functional strength development for grappling movements'
              },
              {
                title: 'Flexibility Work',
                description: 'Mobility and flexibility training to prevent injury'
              }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Discover how grappling training transforms both body and mind',
          items: [
            {
              icon: '💪',
              title: 'Physical Strength',
              description: 'Build functional strength and endurance'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Develop resilience and problem-solving skills'
            },
            {
              icon: '🛡️',
              title: 'Self-Defense',
              description: 'Learn practical self-protection techniques'
            },
            {
              icon: '🏆',
              title: 'Competition Ready',
              description: 'Prepare for grappling tournaments'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'Regular training sessions available throughout the week'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Learn from the techniques pioneered by grappling masters',
          grapplers: [
            {
              name: 'Dan Gable',
              title: 'Wrestling Legend',
              description: 'Olympic champion and coaching icon'
            },
            {
              name: 'Frank Shamrock',
              title: 'Submission Fighter',
              description: 'Pioneer of modern submission grappling'
            },
            {
              name: 'Kazushi Sakuraba',
              title: 'The Gracie Hunter',
              description: 'Master of catch wrestling and submissions'
            }
          ]
        },
        cta: {
          title: 'Master the Ground Game',
          description: 'Join our grappling program and develop the skills that form the foundation of all ground fighting.',
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
          title: 'The Complete Fighter',
          paragraphs: [
            'Mixed Martial Arts (MMA) represents the evolution of combat sports, combining techniques from boxing, kickboxing, wrestling, Brazilian Jiu-Jitsu, and other martial arts into one comprehensive fighting system. MMA tests a fighter\'s skills in all ranges of combat.',
            'Our MMA program is designed to develop well-rounded fighters who are comfortable in all aspects of combat. Students learn to seamlessly transition between striking and grappling, developing the versatility that defines modern mixed martial arts.',
            'Whether your goal is professional competition, amateur tournaments, or simply becoming a complete martial artist, our MMA training provides the technical foundation and physical conditioning needed to excel.'
          ]
        },
        techniques: {
          title: 'Core Disciplines',
          subtitle: 'Master all aspects of mixed martial arts combat',
          striking: {
            title: 'Striking',
            items: [
              'Boxing fundamentals and combinations',
              'Kickboxing and knee strikes',
              'Elbow techniques and clinch work',
              'Footwork and movement patterns'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown techniques and setups',
              'Takedown defense and sprawls',
              'Cage wrestling and clinch control',
              'Ground and pound positioning'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Brazilian Jiu-Jitsu fundamentals',
              'Submission techniques and escapes',
              'Ground control and transitions',
              'Submission defense strategies'
            ]
          }
        },
        history: {
          title: 'MMA Evolution',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with events like UFC 1 in 1993, which sought to determine the most effective martial art. Early tournaments featured specialists from different disciplines competing against each other.',
            'The sport evolved rapidly as fighters realized the importance of being well-rounded. The most successful competitors became those who could fight effectively in all ranges - standing, clinching, and on the ground.',
            'Today\'s MMA represents the pinnacle of martial arts evolution, with fighters training in multiple disciplines to become complete martial artists capable of adapting to any fighting situation.'
          ],
          milestones: {
            title: 'Key Milestones',
            events: [
              {
                year: '1993',
                description: 'UFC 1 introduces modern MMA to the world'
              },
              {
                year: '2001',
                description: 'Unified Rules of MMA established'
              },
              {
                year: '2016',
                description: 'MMA becomes mainstream with global recognition'
              }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Discover how MMA training develops complete martial artists',
          items: [
            {
              icon: '🥊',
              title: 'Complete Skillset',
              description: 'Master all ranges of combat'
            },
            {
              icon: '💪',
              title: 'Peak Fitness',
              description: 'Achieve elite physical conditioning'
            },
            {
              icon: '🧠',
              title: 'Strategic Thinking',
              description: 'Develop tactical combat intelligence'
            },
            {
              icon: '🛡️',
              title: 'Self-Defense',
              description: 'Learn comprehensive protection skills'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Comprehensive mixed martial arts training sessions'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Study the techniques of mixed martial arts pioneers',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC Pioneer',
              description: 'Proved the effectiveness of Brazilian Jiu-Jitsu'
            },
            {
              name: 'Chuck Liddell',
              title: 'The Iceman',
              description: 'Master of takedown defense and striking'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Legendary striker with incredible precision'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Join our MMA program and develop skills in all aspects of mixed martial arts combat.',
          joinButton: 'Join MMA Classes',
          backButton: 'Back to Classes'
        }
      }
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
      instantConfirmation: 'Instant Confirmation',
      visitUs: 'Visit Us',
      dropInWelcome: 'Drop-ins Welcome',
      duringTrainingHours: 'During training hours',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates and DMs'
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
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Elite MMA, Brazilian Jiu-Jitsu & Grappling Training in Sand in Taufers und Bruneck'
      },
      welcome: {
        title: 'Willkommen bei der Sport Academy',
        description: 'Wo Champions durch Hingabe, Disziplin und Expertentraining geschmiedet werden. Treten Sie unseren Elite-Trainingsprogrammen bei und entdecken Sie Ihr Potenzial in Mixed Martial Arts, Brazilian Jiu-Jitsu und Grappling.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Bewährte Erfolgsbilanz in der Kämpferentwicklung',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Einrichtungen in Sand in Taufers und Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'Umfassendes Kampfkunst-Curriculum',
        exploreClasses: 'Entdecken Sie unsere Kurse'
      },
      trainLikeFighter: {
        title: 'Trainiere wie ein Kämpfer',
        subtitle: 'Wählen Sie Ihre Disziplin und beginnen Sie Ihre Reise'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training mit Schlag-, Grappling- und Bodenkampftechniken.'
      },
      bjj: {
        description: 'Meistern Sie die sanfte Kunst des Brazilian Jiu-Jitsu mit Fokus auf Hebelwirkung, Technik und mentale Strategie.'
      },
      grappling: {
        description: 'Entwickeln Sie überlegene Bodenkontrolle und Submission-Fähigkeiten durch intensives Grappling-Training.'
      },
      getStarted: {
        title: 'Starten Sie heute',
        subtitle: 'Alles was Sie brauchen, um Ihre Kampfkunst-Reise zu beginnen'
      },
      quickLinks: {
        viewClasses: 'Kurse ansehen',
        viewClassesDesc: 'Entdecken Sie unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan prüfen',
        checkScheduleDesc: 'Finden Sie Ihre perfekte Trainingszeit',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wählen Sie Ihr Trainingspaket',
        contactUs: 'Kontaktieren Sie uns',
        contactUsDesc: 'Nehmen Sie Kontakt mit unserem Team auf'
      }
    },
    classes: {
      hero: {
        title: 'Unsere Kurse',
        description: 'Umfassende Kampfkunst-Trainingsprogramme für alle Fähigkeitsstufen, von Anfängern bis zu fortgeschrittenen Wettkämpfern.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Komplettes Kampftraining mit Schlag-, Wrestling- und Bodenkampftechniken. Entwickeln Sie Fähigkeiten in Boxen, Kickboxen, Wrestling und Brazilian Jiu-Jitsu in einem umfassenden Programm.',
        features: [
          'Stand-up Schlagtechniken',
          'Wrestling und Takedowns',
          'Bodenkampf und Submissions',
          'Käfigarbeit und Clinch-Kampf',
          'Cardio- und Krafttraining',
          'Wettkampfvorbereitung'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Meistern Sie die sanfte Kunst mit Fokus auf Hebelwirkung, Technik und Strategie über Kraft. Lernen Sie Gegner durch überlegene Positionierung und Technik zu kontrollieren und zu unterwerfen.',
        features: [
          'Grundlegende Positionen und Befreiungen',
          'Guard-Arbeit und Sweeps',
          'Submission-Techniken',
          'Selbstverteidigungsanwendungen',
          'Wettkampftraining',
          'Gürtel-Fortschrittssystem'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Intensives Bodenkampftraining mit Fokus auf Takedowns, Kontrollpositionen und Submission-Techniken ohne traditionellen Gi.',
        features: [
          'Wrestling-Grundlagen',
          'No-Gi Grappling-Techniken',
          'Submission Wrestling',
          'Takedown-Verteidigung',
          'Bodenkontrollpositionen',
          'Wettkampfvorbereitung'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Altersgerechtes Brazilian Jiu-Jitsu Training, das Selbstvertrauen, Disziplin und körperliche Fitness aufbaut und wertvolle Selbstverteidigungsfähigkeiten vermittelt.',
        features: [
          'BJJ-Grundlagen',
          'Charakterentwicklung',
          'Anti-Mobbing-Techniken',
          'Körperliche Fitness und Koordination',
          'Respekt und Disziplin',
          'Spaßige und ansprechende Aktivitäten'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Dynamisches Grappling-Programm für junge Athleten mit Fokus auf Wrestling-Grundlagen, Bodenkontrolle und Aufbau einer athletischen Basis.',
        features: [
          'Wrestling-Grundlagen',
          'Bodenbewegung und -kontrolle',
          'Kraft- und Beweglichkeitstraining',
          'Teamwork und Sportlichkeit',
          'Wettkampfmöglichkeiten',
          'Athletische Entwicklung'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelles Wrestling-Training mit Fokus auf Takedowns, Kontrolle und Konditionierung. Perfekte Grundlage für MMA oder Wettkampf-Wrestling.',
        features: [
          'Single- und Double-Leg Takedowns',
          'Sprawls und Takedown-Verteidigung',
          'Top- und Bottom-Positionsarbeit',
          'Konditions- und Krafttraining',
          'Wettkampftechniken',
          'Mentale Stärke-Entwicklung'
        ]
      },
      whatYouLearn: 'Was Sie lernen werden',
      cta: {
        title: 'Bereit zum Training?',
        description: 'Treten Sie unserer Gemeinschaft engagierter Kampfkünstler bei und beginnen Sie heute Ihre Reise.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finden Sie die perfekten Trainingszeiten, die zu Ihrem Zeitplan passen. Alle Kurse sind in Ihrer Mitgliedschaft enthalten.'
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
      striking: 'Schlagtechniken',
      openMat: 'Freies Training',
      importantInfo: 'Wichtige Informationen',
      classGuidelines: 'Kursrichtlinien',
      guidelines: {
        arrive: '10 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'BJJ-Kurse erfordern Gi (Uniform)',
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
        title: 'Treten Sie unserer Trainingsgemeinschaft bei',
        description: 'Beginnen Sie heute mit dem Training bei uns und erleben Sie den Unterschied.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lernen Sie von erfahrenen Kampfkünstlern, die sich dafür einsetzen, Ihnen durch Expertenunterricht und persönliche Betreuung beim Erreichen Ihrer Ziele zu helfen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 8 Jahren Kampfkunsterfahrung bringt Matteo umfangreiches Wissen in MMA, Brazilian Jiu-Jitsu und Grappling mit. Seine Leidenschaft für das Unterrichten und die Entwicklung von Kämpfern hat die Sport Academy zu einem erstklassigen Trainingsziel gemacht.',
        specializations: [
          'Mixed Martial Arts',
          'Brazilian Jiu-Jitsu',
          'Grappling & Wrestling',
          'Wettkampfvorbereitung',
          'Jugendprogramme'
        ],
        achievements: [
          'Zertifizierter BJJ-Instruktor',
          'MMA-Wettkampferfahrung',
          'Jugendentwicklungsspezialist',
          '8+ Jahre Unterrichtserfahrung',
          'Mehrere Turniersiege'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt technische Expertise und Wettkampferfahrung zur Sport Academy. Sein methodischer Unterrichtsansatz stellt sicher, dass Schüler ordentliche Grundlagen entwickeln und sicher durch ihre Kampfkunst-Reise fortschreiten.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Technisches Grappling',
          'Wettkampfstrategie',
          'Fortgeschrittene Techniken',
          'Mentale Vorbereitung'
        ],
        achievements: [
          'Wettkampfmedaillengewinner',
          'Technischer Spezialist',
          'Fortgeschrittener BJJ-Praktiker',
          'Fokus auf Schülerentwicklung',
          'Befürworter kontinuierlicher Bildung'
        ]
      },
      background: 'Hintergrund',
      specializations: 'Spezialisierungen',
      achievements: 'Erfolge',
      philosophy: {
        title: 'Unsere Trainingsphilosophie',
        technical: {
          title: 'Technische Exzellenz',
          description: 'Wir konzentrieren uns auf ordentliche Technik und Grundlagen, um eine starke Basis für alle Schüler zu schaffen.'
        },
        individual: {
          title: 'Individuelles Wachstum',
          description: 'Jeder Schüler erhält persönliche Aufmerksamkeit, um ihm zu helfen, sein einzigartiges Potenzial zu erreichen.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir vermitteln Werte von Respekt, Disziplin und Sportlichkeit in allen unseren Trainingsprogrammen.'
        }
      },
      cta: {
        title: 'Trainieren Sie mit den Besten',
        description: 'Erleben Sie Weltklasse-Unterricht und bringen Sie Ihre Fähigkeiten auf die nächste Stufe.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wählen Sie das perfekte Trainingspaket für Ihre Ziele. Alle Mitgliedschaften beinhalten Zugang zu beiden Standorten und allen Kursen.'
      },
      mainSeason: {
        title: 'Hauptsaison',
        period: 'September - Juni',
        duration: '10 Monate intensives Training',
        mostPopular: 'Am beliebtesten'
      },
      summerSeason: {
        title: 'Sommersaison',
        period: 'Juli - August',
        duration: '2,5 Monate Sommertraining'
      },
      bjjOnly: {
        title: 'Nur BJJ Mitgliedschaft',
        subtitle: 'Spezielles Brazilian Jiu-Jitsu Trainingsprogramm',
        program: 'BJJ-fokussiertes Training',
        description: 'Zugang zu allen BJJ-Kursen an beiden Standorten'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was ist enthalten',
      mainIncludes: [
        'Alle MMA-, BJJ- und Grappling-Kurse',
        'Zugang zu beiden Standorten Sand in Taufers und Bruneck',
        'Freie Trainingseinheiten',
        'Wettkampfteam-Training',
        'Anfängerfreundlicher Unterricht',
        'Ausrüstungsnutzung während der Kurse'
      ],
      summerIncludes: [
        'Alle Sommer-Trainingskurse',
        'Zugang zu beiden Standorten',
        'Intensive Sommerprogramme',
        'Freie Trainingseinheiten',
        'Flexible Terminplanung',
        'Ausrüstung inklusive'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse (Gi und No-Gi)',
        'Zugang zu beiden Standorten',
        'Freie Trainingseinheiten',
        'Gürtel-Fortschrittssystem',
        'Wettkampfvorbereitung',
        'Grundlagen- und Fortgeschrittenenkurse'
      ],
      selectMainSeason: 'Hauptsaison wählen',
      selectSummerSeason: 'Sommersaison wählen',
      selectBjjOnly: 'Nur BJJ wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessern Sie Ihr Training mit unseren spezialisierten Programmen und persönlichen Coaching-Optionen.'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Eins-zu-eins Coaching, zugeschnitten auf Ihre spezifischen Ziele und Bedürfnisse.',
        price: '€50',
        duration: 'pro Einheit'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training zur Vorbereitung auf Turniere und Wettkämpfe.',
        price: '€80',
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
          answer: 'Die Hauptsaison (September-Juni) bietet unser komplettes Curriculum mit konsistentem Training. Die Sommersaison (Juli-August) bietet intensives Training während der Urlaubsmonate mit flexibler Terminplanung.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu beiden Standorten Sand in Taufers und Bruneck. Sie können je nach Zeitplan an beiden Einrichtungen an Kursen teilnehmen.'
        },
        trial: {
          question: 'Bieten Sie Probestunden an?',
          answer: 'Absolut! Wir bieten Probestunden für neue Schüler an. Kontaktieren Sie uns, um Ihre erste Einheit zu planen und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Anfänger stellen wir grundlegende Ausrüstung während der Kurse zur Verfügung. Mit fortschreitendem Training sollten Sie in Ihren eigenen Gi für BJJ-Kurse und angemessene Trainingskleidung investieren.'
        }
      },
      cta: {
        title: 'Beginnen Sie heute Ihre Reise',
        description: 'Wählen Sie Ihre Mitgliedschaft und beginnen Sie das Training bei Südtirols führender Kampfkunst-Akademie.'
      }
    },
    contact: {
      hero: {
        title: 'Kontaktieren Sie uns',
        description: 'Nehmen Sie Kontakt mit unserem Team auf, um Ihre Kampfkunst-Reise zu beginnen oder mehr über unsere Programme zu erfahren.'
      },
      getInTouch: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Verschiedene Wege, um mit der Sport Academy in Kontakt zu treten'
      },
      callUs: 'Rufen Sie uns an',
      instagram: 'Instagram',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei bequeme Trainingseinrichtungen in Südtirol'
      },
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      parking: 'Parken',
      publicTransport: 'Öffentliche Verkehrsmittel',
      accessibility: 'Barrierefreiheit',
      parkingAccessibility: {
        title: 'Parken & Barrierefreiheit',
        subtitle: 'Zugänglichkeit des Fitnessstudios'
      },
      campoTures: {
        parking: 'Kostenlose Parkplätze direkt vor dem Fitnessstudio verfügbar. Zusätzliche Straßenparkplätze in der Nähe.',
        transport: 'Bushaltestelle "Sand in Taufers Zentrum" ist 2 Gehminuten vom Fitnessstudio entfernt.',
        accessibility: 'Erdgeschosszugang mit breitem Eingang. Rollstuhlgerechte Einrichtungen.'
      },
      brunico: {
        parking: 'Kostenlose Parkplätze auf dem angrenzenden Parkplatz. Straßenparkplätze auch in der Via Maria Teresa Riedl verfügbar.',
        transport: 'Bahnhof Bruneck ist 10 Gehminuten entfernt. Mehrere Buslinien halten in der Nähe.',
        accessibility: 'Aufzugzugang zur Trainingsetage. Vollständige Rollstuhlzugänglichkeit in der gesamten Einrichtung.'
      },
      visitRequirements: {
        title: 'Zum ersten Mal hier?',
        subtitle: 'Alles was Sie für Ihre erste Stunde wissen müssen'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was mitbringen',
      bring: [
        'Bequeme Trainingskleidung',
        'Wasserflasche',
        'Handtuch',
        'Positive Einstellung und Lernbereitschaft'
      ],
      whatWeProvide: 'Was wir bereitstellen',
      provide: [
        'Grundlegende Trainingsausrüstung',
        'Matten und Trainingsraum',
        'Umkleidekabinen',
        'Expertenunterricht und Anleitung'
      ],
      specialInstructions: 'Besondere Anweisungen',
      instructions: {
        age: 'Altersanforderungen: 16+ für Erwachsenenkurse, 6-16 für Jugendprogramme',
        health: 'Gesundheit: Bitte informieren Sie Instruktoren über Verletzungen oder Gesundheitszustände',
        equipment: 'Ausrüstung: Anfänger können Studioausrüstung nutzen, eigene Ausrüstung später empfohlen',
        payment: 'Zahlung: Probestunden verfügbar, Mitgliedschaft für regelmäßiges Training erforderlich'
      },
      cta: {
        title: 'Bereit anzufangen?',
        description: 'Kontaktieren Sie uns heute, um Ihre erste Stunde zu planen oder mehr über unsere Programme zu erfahren.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Meistern Sie die sanfte Kunst durch Technik, Hebelwirkung und Strategie'
        },
        overview: {
          title: 'Die sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Es betont das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner durch richtige Technik, Hebelwirkung und Timing verteidigen kann.',
            'Bei der Sport Academy ist unser BJJ-Programm darauf ausgelegt, Schülern die grundlegenden Prinzipien dieser Kunst zu vermitteln und gleichzeitig körperliche Fitness, mentale Stärke und Selbstvertrauen aufzubauen. Ob Sie ein kompletter Anfänger oder ein erfahrener Grappler sind, unser strukturiertes Curriculum hilft Ihnen, Ihre Fähigkeiten systematisch zu entwickeln.',
            'Unsere Kurse kombinieren traditionelle BJJ-Techniken mit modernen Trainingsmethoden und stellen sicher, dass Schüler sowohl das reiche Erbe der Kunst als auch ihre praktischen Anwendungen in Selbstverteidigung und Wettkampf lernen.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Meistern Sie die grundlegenden Fähigkeiten, die das Fundament des Brazilian Jiu-Jitsu bilden',
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
            title: 'Submissions',
            items: [
              'Würgegriffe und Strangulationen',
              'Gelenkhebel und Armhebel',
              'Beinhebel und Fußangriffe',
              'Submission-Ketten'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Seitenkontrolle',
              'Rückenkontrolltechniken',
              'Knee on Belly Position',
              'Übergangsbewegungen'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Gürtelsystem',
          subtitle: 'Fortschritt durch das traditionelle Ranking-System des Brazilian Jiu-Jitsu',
          belts: [
            {
              name: 'Weißgurt',
              color: 'gray',
              description: 'Anfänger-Grundlagen'
            },
            {
              name: 'Blaugurt',
              color: 'blue',
              description: 'Solide Grundlage'
            },
            {
              name: 'Lila Gurt',
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
            description: 'Jeder Gürtel repräsentiert nicht nur technisches Wissen, sondern auch Charakterentwicklung, Ausdauer und Hingabe zur Kunst. Der Fortschritt basiert auf Fähigkeitsdemonstration, Zeit im Grad und persönlichem Wachstum.'
          }
        },
        history: {
          title: 'Geschichte & Erbe',
          paragraphs: [
            'Brazilian Jiu-Jitsu entwickelte sich aus traditionellem japanischem Jujutsu und Judo, das von Mitsuyo Maeda im frühen 20. Jahrhundert nach Brasilien gebracht wurde. Die Gracie-Familie, insbesondere Helio Gracie, passte diese Techniken an, um ein effizienteres System für kleinere Praktiker zu schaffen.',
            'Die Kunst erlangte weltweite Anerkennung durch die frühen UFC-Turniere, wo Royce Gracie die Wirksamkeit von BJJ gegen größere Gegner aus verschiedenen Kampfkunst-Hintergründen demonstrierte.',
            'Heute entwickelt sich BJJ sowohl als Kampfkunst als auch als Sport weiter, wobei Praktiker ständig Techniken verfeinern und neue Strategien für Selbstverteidigung und Wettkampf entwickeln.'
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
          subtitle: 'Regelmäßige Kurse an beiden Standorten während der Woche verfügbar'
        },
        cta: {
          title: 'Beginnen Sie Ihre BJJ-Reise',
          description: 'Treten Sie unserem Brazilian Jiu-Jitsu Programm bei und entdecken Sie die sanfte Kunst, die sowohl körperliche als auch mentale Stärke aufbaut.',
          joinButton: 'BJJ-Kurse beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Entwickeln Sie überlegene Bodenkontrolle und Submission-Fähigkeiten durch intensives Training'
        },
        overview: {
          title: 'Die Kunst des Bodenkampfes',
          paragraphs: [
            'Grappling ist die Grundlage des Bodenkampfes und umfasst Wrestling, Submission-Griffe und Positionskontrolle. Im Gegensatz zu traditionellen Kampfkünsten, die sich auf Schläge konzentrieren, betont Grappling den Nahkampf, bei dem Technik und Hebelwirkung Größe und Kraft überwinden.',
            'Unser Grappling-Programm kombiniert Elemente aus Wrestling, Brazilian Jiu-Jitsu und Submission Wrestling, um vielseitige Bodenkämpfer zu schaffen. Schüler lernen, Gegner zu kontrollieren, gefährlichen Positionen zu entkommen und Submission-Techniken effektiv anzuwenden.',
            'Ob Ihr Ziel Selbstverteidigung, MMA-Vorbereitung oder Wettkampf-Grappling ist, unser Programm bietet die technische Grundlage und körperliche Konditionierung, die für Exzellenz in Bodenkampfsituationen erforderlich ist.'
          ]
        },
        techniques: {
          title: 'Wesentliche Techniken',
          subtitle: 'Meistern Sie die Kernfähigkeiten, die effektives Grappling definieren',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single- und Double-Leg-Angriffe',
              'Hüftwürfe und Würfe',
              'Fußfeger und Trips',
              'Takedown-Verteidigung und Sprawls'
            ]
          },
          control: {
            title: 'Kontrollpositionen',
            items: [
              'Top-Position Dominanz',
              'Seitenkontrolle und Mount',
              'Rückenkontrolltechniken',
              'Übergangsbewegungen'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Würgegriffe und Strangulationen',
              'Gelenkhebel und Griffe',
              'Beinangriffe und Fußhebel',
              'Submission-Kombinationen'
            ]
          }
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Unser systematischer Ansatz zur Entwicklung kompletter Grappler',
          technical: {
            title: 'Technische Entwicklung',
            methods: [
              {
                title: 'Progressives Lernen',
                description: 'Schritt-für-Schritt Technikunterweisung von Grundlagen bis Fortgeschritten'
              },
              {
                title: 'Drilling & Wiederholung',
                description: 'Fokussierte Übung zur Entwicklung von Muskelgedächtnis und Timing'
              },
              {
                title: 'Live Rolling',
                description: 'Kontrolliertes Sparring zur Anwendung von Techniken unter Druck'
              }
            ]
          },
          conditioning: {
            title: 'Körperliche Konditionierung',
            methods: [
              {
                title: 'Grappling Cardio',
                description: 'Sportspezifische Konditionierung für Ausdauer und Erholung'
              },
              {
                title: 'Krafttraining',
                description: 'Funktionale Kraftentwicklung für Grappling-Bewegungen'
              },
              {
                title: 'Flexibilitätsarbeit',
                description: 'Mobilität und Flexibilitätstraining zur Verletzungsprävention'
              }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Entdecken Sie, wie Grappling-Training sowohl Körper als auch Geist transformiert',
          items: [
            {
              icon: '💪',
              title: 'Körperliche Stärke',
              description: 'Aufbau funktionaler Kraft und Ausdauer'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Entwicklung von Widerstandsfähigkeit und Problemlösungsfähigkeiten'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Lernen praktischer Selbstschutztechniken'
            },
            {
              icon: '🏆',
              title: 'Wettkampfbereit',
              description: 'Vorbereitung auf Grappling-Turniere'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Zeitplan',
          subtitle: 'Regelmäßige Trainingseinheiten während der Woche verfügbar'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Lernen Sie von den Techniken, die von Grappling-Meistern entwickelt wurden',
          grapplers: [
            {
              name: 'Dan Gable',
              title: 'Wrestling-Legende',
              description: 'Olympiasieger und Trainingsikone'
            },
            {
              name: 'Frank Shamrock',
              title: 'Submission-Kämpfer',
              description: 'Pionier des modernen Submission-Grapplings'
            },
            {
              name: 'Kazushi Sakuraba',
              title: 'Der Gracie-Jäger',
              description: 'Meister des Catch Wrestling und Submissions'
            }
          ]
        },
        cta: {
          title: 'Meistern Sie das Bodenspiel',
          description: 'Treten Sie unserem Grappling-Programm bei und entwickeln Sie die Fähigkeiten, die die Grundlage aller Bodenkämpfe bilden.',
          joinButton: 'Grappling-Kurse beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der Schlag-, Wrestling- und Bodenkampftechniken kombiniert'
        },
        overview: {
          title: 'Der komplette Kämpfer',
          paragraphs: [
            'Mixed Martial Arts (MMA) repräsentiert die Evolution der Kampfsportarten und kombiniert Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkünsten zu einem umfassenden Kampfsystem. MMA testet die Fähigkeiten eines Kämpfers in allen Kampfbereichen.',
            'Unser MMA-Programm ist darauf ausgelegt, vielseitige Kämpfer zu entwickeln, die in allen Aspekten des Kampfes komfortabel sind. Schüler lernen, nahtlos zwischen Schlag- und Grappling-Techniken zu wechseln und entwickeln die Vielseitigkeit, die moderne Mixed Martial Arts definiert.',
            'Ob Ihr Ziel professioneller Wettkampf, Amateur-Turniere oder einfach ein kompletter Kampfkünstler zu werden ist, unser MMA-Training bietet die technische Grundlage und körperliche Konditionierung, die für Exzellenz erforderlich ist.'
          ]
        },
        techniques: {
          title: 'Kerndisziplinen',
          subtitle: 'Meistern Sie alle Aspekte des Mixed Martial Arts Kampfes',
          striking: {
            title: 'Schlagtechniken',
            items: [
              'Box-Grundlagen und Kombinationen',
              'Kickboxen und Kniestöße',
              'Ellbogentechniken und Clinch-Arbeit',
              'Fußarbeit und Bewegungsmuster'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken und Setups',
              'Takedown-Verteidigung und Sprawls',
              'Käfig-Wrestling und Clinch-Kontrolle',
              'Ground and Pound Positionierung'
            ]
          },
          groundGame: {
            title: 'Bodenspiel',
            items: [
              'Brazilian Jiu-Jitsu Grundlagen',
              'Submission-Techniken und Befreiungen',
              'Bodenkontrolle und Übergänge',
              'Submission-Verteidigungsstrategien'
            ]
          }
        },
        history: {
          title: 'MMA-Evolution',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit Veranstaltungen wie UFC 1 im Jahr 1993, die darauf abzielten, die effektivste Kampfkunst zu bestimmen. Frühe Turniere zeigten Spezialisten aus verschiedenen Disziplinen, die gegeneinander antraten.',
            'Der Sport entwickelte sich schnell, als Kämpfer erkannten, wie wichtig es ist, vielseitig zu sein. Die erfolgreichsten Wettkämpfer wurden diejenigen, die in allen Bereichen effektiv kämpfen konnten - stehend, im Clinch und am Boden.',
            'Das heutige MMA repräsentiert den Höhepunkt der Kampfkunst-Evolution, wobei Kämpfer in mehreren Disziplinen trainieren, um komplette Kampfkünstler zu werden, die sich an jede Kampfsituation anpassen können.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'UFC 1 führt modernes MMA in die Welt ein'
              },
              {
                year: '2001',
                description: 'Einheitliche MMA-Regeln etabliert'
              },
              {
                year: '2016',
                description: 'MMA wird Mainstream mit globaler Anerkennung'
              }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Entdecken Sie, wie MMA-Training komplette Kampfkünstler entwickelt',
          items: [
            {
              icon: '🥊',
              title: 'Komplettes Skillset',
              description: 'Meistern Sie alle Kampfbereiche'
            },
            {
              icon: '💪',
              title: 'Spitzenfitness',
              description: 'Erreichen Sie Elite-Körperkonditionierung'
            },
            {
              icon: '🧠',
              title: 'Strategisches Denken',
              description: 'Entwickeln Sie taktische Kampfintelligenz'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Lernen Sie umfassende Schutzfähigkeiten'
            }
          ]
        },
        schedule: {
          title: 'MMA Trainingsplan',
          subtitle: 'Umfassende Mixed Martial Arts Trainingseinheiten'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Studieren Sie die Techniken der Mixed Martial Arts Pioniere',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC-Pionier',
              description: 'Bewies die Wirksamkeit des Brazilian Jiu-Jitsu'
            },
            {
              name: 'Chuck Liddell',
              title: 'The Iceman',
              description: 'Meister der Takedown-Verteidigung und Schlagtechniken'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Legendärer Schlagkämpfer mit unglaublicher Präzision'
            }
          ]
        },
        cta: {
          title: 'Werden Sie ein kompletter Kämpfer',
          description: 'Treten Sie unserem MMA-Programm bei und entwickeln Sie Fähigkeiten in allen Aspekten des Mixed Martial Arts Kampfes.',
          joinButton: 'MMA-Kurse beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      }
    },
    common: {
      joinNow: 'Jetzt beitreten',
      viewClasses: 'Kurse ansehen',
      viewSchedule: 'Stundenplan ansehen',
      viewMembership: 'Mitgliedschaft ansehen',
      contactUs: 'Kontakt',
      callNow: 'Jetzt anrufen',
      learnMore: 'Mehr erfahren',
      allLevels: 'Alle Level',
      ages: 'Alter',
      joinSportAcademy: 'Sport Academy beitreten',
      registerOnline: 'Online registrieren',
      bookClasses: 'Kurse buchen',
      instantConfirmation: 'Sofortige Bestätigung',
      visitUs: 'Besuchen Sie uns',
      dropInWelcome: 'Drop-ins willkommen',
      duringTrainingHours: 'Während der Trainingszeiten',
      responseWithin2Hours: 'Antwort innerhalb von 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates und DMs'
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Wo Champions gemacht werden',
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
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Allenamento Elite di MMA, Brazilian Jiu-Jitsu e Grappling a Campo Tures e Brunico'
      },
      welcome: {
        title: 'Benvenuti alla Sport Academy',
        description: 'Dove i campioni vengono forgiati attraverso dedizione, disciplina e coaching esperto. Unisciti ai nostri programmi di allenamento d\'elite e scopri il tuo potenziale nelle Arti Marziali Miste, Brazilian Jiu-Jitsu e Grappling.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Comprovata esperienza nello sviluppo di combattenti',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Strutture a Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'Curriculum completo di arti marziali',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come un Combattente',
        subtitle: 'Scegli la tua disciplina e inizia il tuo viaggio'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, grappling e combattimento a terra.'
      },
      bjj: {
        description: 'Padroneggia l\'arte gentile del Brazilian Jiu-Jitsu con focus su leva, tecnica e strategia mentale.'
      },
      grappling: {
        description: 'Sviluppa controllo superiore a terra e abilità di sottomissione attraverso allenamento intensivo di grappling.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Tutto ciò di cui hai bisogno per iniziare il tuo viaggio nelle arti marziali'
      },
      quickLinks: {
        viewClasses: 'Visualizza Corsi',
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
        description: 'Programmi completi di allenamento di arti marziali progettati per tutti i livelli di abilità, dai principianti ai competitori avanzati.'
      },
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Allenamento completo di combattimento che combina striking, wrestling e combattimento a terra. Sviluppa abilità in boxe, kickboxing, wrestling e Brazilian Jiu-Jitsu in un programma completo.',
        features: [
          'Tecniche di striking in piedi',
          'Wrestling e takedown',
          'Combattimento a terra e sottomissioni',
          'Lavoro in gabbia e clinch fighting',
          'Condizionamento cardio e forza',
          'Preparazione per competizioni'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Padroneggia l\'arte gentile concentrandoti su leva, tecnica e strategia piuttosto che forza. Impara a controllare e sottomettere gli avversari attraverso posizionamento e tecnica superiori.',
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
        description: 'Allenamento intensivo di combattimento a terra concentrato su takedown, posizioni di controllo e tecniche di sottomissione senza il gi tradizionale.',
        features: [
          'Fondamentali di wrestling',
          'Tecniche di grappling no-gi',
          'Submission wrestling',
          'Difesa da takedown',
          'Posizioni di controllo a terra',
          'Preparazione per competizioni'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Allenamento di Brazilian Jiu-Jitsu appropriato per l\'età che costruisce fiducia, disciplina e forma fisica insegnando preziose abilità di autodifesa.',
        features: [
          'Fondamentali base di BJJ',
          'Sviluppo del carattere',
          'Tecniche anti-bullismo',
          'Forma fisica e coordinazione',
          'Rispetto e disciplina',
          'Attività divertenti e coinvolgenti'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Programma dinamico di grappling per giovani atleti concentrato sui fondamentali del wrestling, controllo a terra e costruzione di una base atletica.',
        features: [
          'Basi del wrestling',
          'Movimento e controllo a terra',
          'Allenamento di forza e agilità',
          'Lavoro di squadra e sportività',
          'Opportunità di competizione',
          'Sviluppo atletico'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Allenamento tradizionale di wrestling concentrato su takedown, controllo e condizionamento. Base perfetta per MMA o wrestling competitivo.',
        features: [
          'Takedown single e double leg',
          'Sprawl e difesa da takedown',
          'Lavoro in posizione superiore e inferiore',
          'Condizionamento e allenamento della forza',
          'Tecniche di competizione',
          'Sviluppo della resistenza mentale'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Pronto per Iniziare ad Allenarti?',
        description: 'Unisciti alla nostra comunità di artisti marziali dedicati e inizia il tuo viaggio oggi.'
      }
    },
    schedule: {
      hero: {
        title: 'Orario di Allenamento',
        description: 'Trova gli orari di allenamento perfetti che si adattano al tuo programma. Tutti i corsi sono inclusi con il tuo abbonamento.'
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
      classGuidelines: 'Linee Guida dei Corsi',
      guidelines: {
        arrive: 'Arriva 10 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'I corsi di BJJ richiedono il gi (uniforme)',
        noGi: 'I corsi di grappling sono no-gi (pantaloncini e rash guard)'
      },
      membershipBenefits: 'Vantaggi dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutti i corsi incluso',
        openMat: 'Sessioni di allenamento libero gratuite',
        bothLocations: 'Allenati in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Unisciti alla Nostra Comunità di Allenamento',
        description: 'Inizia ad allenarti con noi oggi e sperimenta la differenza.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Impara da artisti marziali esperti dedicati ad aiutarti a raggiungere i tuoi obiettivi attraverso istruzione esperta e guida personalizzata.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore e Fondatore',
        background: 'Con oltre 8 anni di esperienza nelle arti marziali, Matteo porta una ricchezza di conoscenze in MMA, Brazilian Jiu-Jitsu e grappling. La sua passione per l\'insegnamento e lo sviluppo di combattenti ha reso la Sport Academy una destinazione di allenamento di primo livello.',
        specializations: [
          'Arti Marziali Miste',
          'Brazilian Jiu-Jitsu',
          'Grappling e Wrestling',
          'Preparazione per Competizioni',
          'Programmi Giovanili'
        ],
        achievements: [
          'Istruttore BJJ Certificato',
          'Esperienza in Competizioni MMA',
          'Specialista nello Sviluppo Giovanile',
          '8+ Anni di Esperienza nell\'Insegnamento',
          'Multiple Vittorie in Tornei'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta competenza tecnica ed esperienza competitiva alla Sport Academy. Il suo approccio metodico all\'insegnamento assicura che gli studenti sviluppino fondamentali appropriati mentre progrediscono in sicurezza nel loro viaggio nelle arti marziali.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Grappling Tecnico',
          'Strategia di Competizione',
          'Tecniche Avanzate',
          'Preparazione Mentale'
        ],
        achievements: [
          'Medagliato in Competizioni',
          'Specialista Tecnico',
          'Praticante BJJ Avanzato',
          'Focus sullo Sviluppo degli Studenti',
          'Sostenitore dell\'Educazione Continua'
        ]
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      philosophy: {
        title: 'La Nostra Filosofia di Coaching',
        technical: {
          title: 'Eccellenza Tecnica',
          description: 'Ci concentriamo sulla tecnica appropriata e sui fondamentali per costruire una base solida per tutti gli studenti.'
        },
        individual: {
          title: 'Crescita Individuale',
          description: 'Ogni studente riceve attenzione personalizzata per aiutarlo a raggiungere il suo potenziale unico.'
        },
        respect: {
          title: 'Rispetto e Disciplina',
          description: 'Instilliamo valori di rispetto, disciplina e sportività in tutti i nostri programmi di allenamento.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Sperimenta istruzione di classe mondiale e porta le tue abilità al livello successivo.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il pacchetto di allenamento perfetto per i tuoi obiettivi. Tutti gli abbonamenti includono accesso a entrambe le sedi e a tutti i corsi.'
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
        program: 'Allenamento Focalizzato su BJJ',
        description: 'Accesso a tutti i corsi di BJJ in entrambe le sedi'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      mainIncludes: [
        'Tutti i corsi di MMA, BJJ e Grappling',
        'Accesso a entrambe le sedi Campo Tures e Brunico',
        'Sessioni di allenamento libero',
        'Allenamento del team di competizione',
        'Istruzione adatta ai principianti',
        'Uso dell\'attrezzatura durante i corsi'
      ],
      summerIncludes: [
        'Tutti i corsi di allenamento estivo',
        'Accesso a entrambe le sedi',
        'Programmi estivi intensivi',
        'Sessioni di allenamento libero',
        'Programmazione flessibile',
        'Attrezzatura inclusa'
      ],
      bjjIncludes: [
        'Tutti i corsi di BJJ (gi e no-gi)',
        'Accesso a entrambe le sedi',
        'Sessioni di allenamento libero',
        'Sistema di progressione delle cinture',
        'Preparazione per competizioni',
        'Corsi fondamentali e avanzati'
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
        description: 'Coaching uno-a-uno personalizzato sui tuoi obiettivi e bisogni specifici.',
        price: '€50',
        duration: 'per sessione'
      },
      competitionPrep: {
        title: 'Preparazione Competizioni',
        description: 'Allenamento specializzato per prepararsi a tornei e competizioni.',
        price: '€80',
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
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro curriculum completo con allenamento costante. La stagione estiva (Luglio-Agosto) fornisce allenamento intensivo durante i mesi di vacanza con programmazione flessibile.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono accesso a entrambe le sedi Campo Tures e Brunico. Puoi partecipare ai corsi in entrambe le strutture in base al tuo programma.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo lezioni di prova per nuovi studenti. Contattaci per programmare la tua prima sessione e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Di quale attrezzatura ho bisogno?',
          answer: 'Per i principianti, forniamo attrezzatura di base durante i corsi. Man mano che progredisci, vorrai investire nel tuo gi per i corsi di BJJ e abbigliamento da allenamento appropriato.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio Oggi',
        description: 'Scegli il tuo abbonamento e inizia ad allenarti con l\'accademia di arti marziali premier dell\'Alto Adige.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Mettiti in contatto con il nostro team per iniziare il tuo viaggio nelle arti marziali o per saperne di più sui nostri programmi.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con la Sport Academy'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due comode strutture di allenamento in Alto Adige'
      },
      address: 'Indirizzo',
      trainingSchedule: 'Orario di Allenamento',
      parking: 'Parcheggio',
      publicTransport: 'Trasporti Pubblici',
      accessibility: 'Accessibilità',
      parkingAccessibility: {
        title: 'Parcheggio e Accessibilità',
        subtitle: 'Accessibilità della palestra'
      },
      campoTures: {
        parking: 'Parcheggio gratuito disponibile direttamente davanti alla palestra. Parcheggio stradale aggiuntivo nelle vicinanze.',
        transport: 'La fermata dell\'autobus "Campo Tures Centro" è a 2 minuti a piedi dalla palestra.',
        accessibility: 'Accesso al piano terra con ingresso ampio. Strutture accessibili in sedia a rotelle.'
      },
      brunico: {
        parking: 'Parcheggio gratuito nel parcheggio adiacente. Parcheggio stradale disponibile anche in Via Maria Teresa Riedl.',
        transport: 'La stazione ferroviaria di Brunico è a 10 minuti a piedi. Diverse linee di autobus si fermano nelle vicinanze.',
        accessibility: 'Accesso con ascensore al piano di allenamento. Piena accessibilità in sedia a rotelle in tutta la struttura.'
      },
      visitRequirements: {
        title: 'Prima Volta qui?',
        subtitle: 'Tutto quello che devi sapere per la tua prima lezione'
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
        'Attrezzatura di allenamento di base',
        'Tappetini e spazio di allenamento',
        'Spogliatoi',
        'Istruzione esperta e guida'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Requisiti di Età: 16+ per corsi adulti, 6-16 per programmi giovanili',
        health: 'Salute: Si prega di informare gli istruttori di eventuali infortuni o condizioni di salute',
        equipment: 'Attrezzatura: I principianti possono usare l\'attrezzatura della palestra, attrezzatura propria consigliata in seguito',
        payment: 'Pagamento: Lezioni di prova disponibili, abbonamento richiesto per allenamento regolare'
      },
      cta: {
        title: 'Pronto per Iniziare?',
        description: 'Contattaci oggi per programmare la tua prima lezione o per saperne di più sui nostri programmi.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Padroneggia l\'arte gentile attraverso tecnica, leva e strategia'
        },
        overview: {
          title: 'L\'Arte Gentile',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione. Enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte attraverso tecnica appropriata, leva e tempismo.',
            'Alla Sport Academy, il nostro programma BJJ è progettato per insegnare agli studenti i principi fondamentali di quest\'arte costruendo forma fisica, resistenza mentale e fiducia in se stessi. Che tu sia un principiante completo o un grappler esperto, il nostro curriculum strutturato ti aiuterà a sviluppare le tue abilità sistematicamente.',
            'I nostri corsi combinano tecniche tradizionali di BJJ con metodi di allenamento moderni, assicurando che gli studenti imparino sia il ricco patrimonio dell\'arte che le sue applicazioni pratiche nell\'autodifesa e nella competizione.'
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
              'Spazzate e transizioni di guardia',
              'Tecniche di ritenzione della guardia'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Strangolamenti e soffocamenti',
              'Leve articolari e armbar',
              'Attacchi alle gambe e ai piedi',
              'Catene di sottomissione'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e controllo laterale',
              'Tecniche di controllo della schiena',
              'Posizione knee on belly',
              'Movimenti di transizione'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema di Cinture BJJ',
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
            description: 'Ogni cintura rappresenta non solo conoscenza tecnica, ma anche sviluppo del carattere, perseveranza e dedizione all\'arte. La progressione si basa sulla dimostrazione delle abilità, tempo nel grado e crescita personale.'
          }
        },
        history: {
          title: 'Storia e Patrimonio',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu si è evoluto dal jujutsu e judo giapponese tradizionale, portato in Brasile da Mitsuyo Maeda all\'inizio del XX secolo. La famiglia Gracie, in particolare Helio Gracie, ha adattato queste tecniche per creare un sistema più efficiente per i praticanti più piccoli.',
            'L\'arte ha guadagnato riconoscimento mondiale attraverso i primi tornei UFC, dove Royce Gracie ha dimostrato l\'efficacia del BJJ contro avversari più grandi provenienti da diversi background di arti marziali.',
            'Oggi, il BJJ continua ad evolversi sia come arte marziale che come sport, con i praticanti che raffinano costantemente le tecniche e sviluppano nuove strategie sia per l\'autodifesa che per la competizione.'
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
          subtitle: 'Corsi regolari disponibili in entrambe le sedi durante la settimana'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio nel BJJ',
          description: 'Unisciti al nostro programma di Brazilian Jiu-Jitsu e scopri l\'arte gentile che costruisce sia forza fisica che mentale.',
          joinButton: 'Unisciti ai Corsi di BJJ',
          backButton: 'Torna ai Corsi'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Sviluppa controllo superiore a terra e abilità di sottomissione attraverso allenamento intensivo'
        },
        overview: {
          title: 'L\'Arte del Combattimento a Terra',
          paragraphs: [
            'Il grappling è la base del combattimento a terra, comprendendo wrestling, prese di sottomissione e controllo posizionale. A differenza delle arti marziali tradizionali che si concentrano sui colpi, il grappling enfatizza il combattimento a contatto ravvicinato dove tecnica e leva superano dimensioni e forza.',
            'Il nostro programma di grappling combina elementi dal wrestling, Brazilian Jiu-Jitsu e submission wrestling per creare combattenti a terra completi. Gli studenti imparano a controllare gli avversari, sfuggire a posizioni pericolose e applicare tecniche di sottomissione efficacemente.',
            'Che il tuo obiettivo sia l\'autodifesa, la preparazione MMA o il grappling competitivo, il nostro programma fornisce la base tecnica e il condizionamento fisico necessari per eccellere nelle situazioni di combattimento a terra.'
          ]
        },
        techniques: {
          title: 'Tecniche Essenziali',
          subtitle: 'Padroneggia le abilità fondamentali che definiscono il grappling efficace',
          takedowns: {
            title: 'Takedown',
            items: [
              'Attacchi single e double leg',
              'Proiezioni e lanci dell\'anca',
              'Spazzate dei piedi e sgambetti',
              'Difesa da takedown e sprawl'
            ]
          },
          control: {
            title: 'Posizioni di Controllo',
            items: [
              'Dominanza in posizione superiore',
              'Controllo laterale e mount',
              'Tecniche di controllo della schiena',
              'Movimenti di transizione'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Strangolamenti e soffocamenti',
              'Leve articolari e prese',
              'Attacchi alle gambe e leve ai piedi',
              'Combinazioni di sottomissione'
            ]
          }
        },
        methodology: {
          title: 'Metodologia di Allenamento',
          subtitle: 'Il nostro approccio sistematico allo sviluppo di grappler completi',
          technical: {
            title: 'Sviluppo Tecnico',
            methods: [
              {
                title: 'Apprendimento Progressivo',
                description: 'Istruzione tecnica passo-passo che costruisce dalle basi all\'avanzato'
              },
              {
                title: 'Drilling e Ripetizione',
                description: 'Pratica focalizzata per sviluppare memoria muscolare e tempismo'
              },
              {
                title: 'Rolling dal Vivo',
                description: 'Sparring controllato per applicare tecniche sotto pressione'
              }
            ]
          },
          conditioning: {
            title: 'Condizionamento Fisico',
            methods: [
              {
                title: 'Cardio per Grappling',
                description: 'Condizionamento sport-specifico per resistenza e recupero'
              },
              {
                title: 'Allenamento della Forza',
                description: 'Sviluppo della forza funzionale per movimenti di grappling'
              },
              {
                title: 'Lavoro di Flessibilità',
                description: 'Allenamento di mobilità e flessibilità per prevenire infortuni'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Scopri come l\'allenamento di grappling trasforma sia corpo che mente',
          items: [
            {
              icon: '💪',
              title: 'Forza Fisica',
              description: 'Costruisci forza funzionale e resistenza'
            },
            {
              icon: '🧠',
              title: 'Resistenza Mentale',
              description: 'Sviluppa resilienza e abilità di problem-solving'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Impara tecniche pratiche di autoprotezione'
            },
            {
              icon: '🏆',
              title: 'Pronto per la Competizione',
              description: 'Preparati per tornei di grappling'
            }
          ]
        },
        schedule: {
          title: 'Orario di Grappling',
          subtitle: 'Sessioni di allenamento regolari disponibili durante la settimana'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Impara dalle tecniche sviluppate dai maestri del grappling',
          grapplers: [
            {
              name: 'Dan Gable',
              title: 'Leggenda del Wrestling',
              description: 'Campione olimpico e icona del coaching'
            },
            {
              name: 'Frank Shamrock',
              title: 'Combattente di Submission',
              description: 'Pioniere del submission grappling moderno'
            },
            {
              name: 'Kazushi Sakuraba',
              title: 'Il Cacciatore di Gracie',
              description: 'Maestro del catch wrestling e delle sottomissioni'
            }
          ]
        },
        cta: {
          title: 'Padroneggia il Gioco a Terra',
          description: 'Unisciti al nostro programma di grappling e sviluppa le abilità che formano la base di tutto il combattimento a terra.',
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
          title: 'Il Combattente Completo',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) rappresentano l\'evoluzione degli sport da combattimento, combinando tecniche da boxe, kickboxing, wrestling, Brazilian Jiu-Jitsu e altre arti marziali in un sistema di combattimento completo. L\'MMA testa le abilità di un combattente in tutti i range di combattimento.',
            'Il nostro programma MMA è progettato per sviluppare combattenti completi che sono a loro agio in tutti gli aspetti del combattimento. Gli studenti imparano a passare senza soluzione di continuità tra striking e grappling, sviluppando la versatilità che definisce le arti marziali miste moderne.',
            'Che il tuo obiettivo sia la competizione professionale, tornei amatoriali o semplicemente diventare un artista marziale completo, il nostro allenamento MMA fornisce la base tecnica e il condizionamento fisico necessari per eccellere.'
          ]
        },
        techniques: {
          title: 'Discipline Fondamentali',
          subtitle: 'Padroneggia tutti gli aspetti del combattimento di arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Fondamentali e combinazioni di boxe',
              'Kickboxing e colpi di ginocchio',
              'Tecniche di gomito e lavoro in clinch',
              'Gioco di gambe e schemi di movimento'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche e setup di takedown',
              'Difesa da takedown e sprawl',
              'Wrestling in gabbia e controllo del clinch',
              'Posizionamento ground and pound'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Fondamentali di Brazilian Jiu-Jitsu',
              'Tecniche di sottomissione e fughe',
              'Controllo a terra e transizioni',
              'Strategie di difesa dalle sottomissioni'
            ]
          }
        },
        history: {
          title: 'Evoluzione MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma l\'MMA moderno iniziò con eventi come UFC 1 nel 1993, che cercava di determinare l\'arte marziale più efficace. I primi tornei presentavano specialisti di diverse discipline che competevano l\'uno contro l\'altro.',
            'Lo sport si è evoluto rapidamente quando i combattenti hanno realizzato l\'importanza di essere completi. I competitori di maggior successo sono diventati quelli che potevano combattere efficacemente in tutti i range - in piedi, nel clinch e a terra.',
            'L\'MMA di oggi rappresenta l\'apice dell\'evoluzione delle arti marziali, con combattenti che si allenano in multiple discipline per diventare artisti marziali completi capaci di adattarsi a qualsiasi situazione di combattimento.'
          ],
          milestones: {
            title: 'Pietre Miliari Chiave',
            events: [
              {
                year: '1993',
                description: 'UFC 1 introduce l\'MMA moderno al mondo'
              },
              {
                year: '2001',
                description: 'Stabilite le Regole Unificate dell\'MMA'
              },
              {
                year: '2016',
                description: 'L\'MMA diventa mainstream con riconoscimento globale'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Scopri come l\'allenamento MMA sviluppa artisti marziali completi',
          items: [
            {
              icon: '🥊',
              title: 'Skillset Completo',
              description: 'Padroneggia tutti i range di combattimento'
            },
            {
              icon: '💪',
              title: 'Forma Fisica di Picco',
              description: 'Raggiungi condizionamento fisico d\'elite'
            },
            {
              icon: '🧠',
              title: 'Pensiero Strategico',
              description: 'Sviluppa intelligenza tattica di combattimento'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Impara abilità di protezione complete'
            }
          ]
        },
        schedule: {
          title: 'Orario di Allenamento MMA',
          subtitle: 'Sessioni complete di allenamento di arti marziali miste'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Studia le tecniche dei pionieri delle arti marziali miste',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'Pioniere UFC',
              description: 'Dimostrò l\'efficacia del Brazilian Jiu-Jitsu'
            },
            {
              name: 'Chuck Liddell',
              title: 'The Iceman',
              description: 'Maestro della difesa da takedown e striking'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Striker leggendario con precisione incredibile'
            }
          ]
        },
        cta: {
          title: 'Diventa un Combattente Completo',
          description: 'Unisciti al nostro programma MMA e sviluppa abilità in tutti gli aspetti del combattimento di arti marziali miste.',
          joinButton: 'Unisciti ai Corsi MMA',
          backButton: 'Torna ai Corsi'
        }
      }
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
      instantConfirmation: 'Conferma Istantanea',
      visitUs: 'Visitaci',
      dropInWelcome: 'Drop-in Benvenuti',
      duringTrainingHours: 'Durante gli orari di allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM'
    },
    footer: {
      tagline: 'Allenamento Elite di MMA, BJJ e Grappling',
      subtitle: 'Dove Nascono i Campioni',
      copyright: '© 2024 Sport Academy. Tutti i diritti riservati.'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
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