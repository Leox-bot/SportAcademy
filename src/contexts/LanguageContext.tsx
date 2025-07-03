import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Comprehensive translations for all martial arts content
const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      classes: 'Classes',
      schedule: 'Schedule',
      coaches: 'Coaches',
      membership: 'Membership',
      contact: 'Contact'
    },
    
    // Common terms
    common: {
      joinNow: 'Join Now',
      viewClasses: 'View Classes',
      viewSchedule: 'View Schedule',
      viewMembership: 'View Membership',
      contactUs: 'Contact Us',
      joinSportAcademy: 'Join Sport Academy',
      callNow: 'Call Now',
      learnMore: 'Learn More',
      allLevels: 'All Levels',
      ages: 'Ages',
      registerOnline: 'Register Online',
      bookClasses: 'Book Classes',
      visitUs: 'Visit Us',
      dropInWelcome: 'Drop-in Welcome',
      instantConfirmation: 'Instant Confirmation',
      duringTrainingHours: 'During Training Hours',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates & DMs'
    },

    // Home page
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Forging fighters since 2017'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Since 2017, Sport Academy has been the premier destination for martial arts training in South Tyrol. We offer world-class instruction in MMA, Brazilian Jiu-Jitsu, and Grappling across our two state-of-the-art facilities.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Established in 2017, we\'ve been developing fighters for over 8 years',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Convenient facilities in Campo Tures and Brunico',
        trainingPrograms: 'Training Programs',
        programsDescription: 'Comprehensive classes for adults and kids of all skill levels',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Master the arts of combat with professional instruction'
      },
      mma: {
        description: 'Complete mixed martial arts training combining striking, grappling, and ground fighting techniques.'
      },
      bjj: {
        description: 'Master the gentle art of Brazilian Jiu-Jitsu with comprehensive ground fighting techniques.'
      },
      grappling: {
        description: 'Develop wrestling and submission skills through intensive no-gi grappling training.'
      },
      getStarted: {
        title: 'Get Started Today',
        subtitle: 'Everything you need to begin your martial arts journey'
      },
      quickLinks: {
        viewClasses: 'View Classes',
        viewClassesDesc: 'Explore our training programs',
        checkSchedule: 'Check Schedule',
        checkScheduleDesc: 'Find the perfect class time',
        membershipPlans: 'Membership Plans',
        membershipPlansDesc: 'Choose your training package',
        contactUs: 'Contact Us',
        contactUsDesc: 'Get in touch with our team'
      }
    },

    // Disciplines - MMA
    disciplines: {
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining striking, grappling, and ground fighting techniques. Train like a professional fighter and develop complete martial arts skills.'
        },
        overview: {
          title: 'What is MMA?',
          paragraphs: [
            'Mixed Martial Arts (MMA) is a full-contact combat sport that allows a wide variety of fighting techniques and skills from a mixture of other combat sports to be used in competition.',
            'MMA combines techniques from boxing, wrestling, Brazilian Jiu-Jitsu, Muay Thai, kickboxing, karate, judo, and other disciplines. It\'s often referred to as "the most complete martial art" because it encompasses all ranges of combat.',
            'At Sport Academy, our MMA program is designed to teach you these diverse skills in a safe, structured environment with expert instruction from experienced fighters.'
          ]
        },
        techniques: {
          title: 'Key Techniques & Skills',
          subtitle: 'Master the fundamental techniques that make MMA the most complete combat sport',
          striking: {
            title: 'Striking',
            items: [
              'Boxing combinations',
              'Muay Thai kicks and knees',
              'Elbow strikes',
              'Footwork and movement',
              'Defensive techniques'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown techniques',
              'Sprawls and defensive wrestling',
              'Clinch work',
              'Ground control',
              'Cage wrestling'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Brazilian Jiu-Jitsu submissions',
              'Ground and pound',
              'Guard work',
              'Escapes and reversals',
              'Positional control'
            ]
          }
        },
        history: {
          title: 'History of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots, with early forms of mixed combat sports dating back to ancient Greece and the Olympic sport of Pankration, which combined wrestling and boxing.',
            'Modern MMA began to take shape in the early 1990s with the creation of the Ultimate Fighting Championship (UFC) in 1993. The early tournaments were designed to determine which martial art was most effective in real combat situations.',
            'Over time, fighters realized that to be successful, they needed to be well-rounded in all aspects of combat. This led to the evolution of MMA into the sophisticated sport we know today, with fighters cross-training in multiple disciplines.',
            'Today, MMA is one of the fastest-growing sports in the world, with professional organizations like UFC, Bellator, and ONE Championship showcasing the highest level of mixed martial arts competition.'
          ],
          milestones: {
            title: 'Key Milestones',
            events: [
              { year: '648 BC', description: 'Pankration introduced to Olympic Games' },
              { year: '1993', description: 'UFC 1 - The beginning of modern MMA' },
              { year: '2001', description: 'Unified Rules of MMA established' },
              { year: '2016', description: 'MMA legalized in New York, completing US expansion' }
            ]
          }
        },
        benefits: {
          title: 'Benefits of MMA Training',
          subtitle: 'Transform your body, mind, and spirit through comprehensive martial arts training',
          items: [
            {
              icon: '💪',
              title: 'Physical Fitness',
              description: 'Complete body conditioning, strength, and cardiovascular health'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Develop discipline, focus, and mental resilience'
            },
            {
              icon: '🛡️',
              title: 'Self-Defense',
              description: 'Learn practical self-defense skills for real-world situations'
            },
            {
              icon: '🤝',
              title: 'Community',
              description: 'Join a supportive community of dedicated athletes'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Join our structured MMA classes designed for all skill levels'
        },
        legends: {
          title: 'Legendary MMA Fighters',
          subtitle: 'Learn from the techniques and philosophies of MMA legends',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'Former UFC Middleweight Champion',
              description: 'Known for his striking precision and creativity'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'PRIDE Heavyweight Champion',
              description: 'Legendary for his calm demeanor and technical skill'
            },
            {
              name: 'Jon Jones',
              title: 'Former UFC Light Heavyweight Champion',
              description: 'Known for his reach, creativity, and wrestling base'
            }
          ]
        },
        cta: {
          title: 'Start Your MMA Journey',
          description: 'Train with experienced coaches and develop complete martial arts skills in a safe, supportive environment.',
          joinButton: 'Join MMA Classes',
          backButton: 'Back to Train Like a Fighter'
        }
      },

      // BJJ
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        breadcrumb: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'The gentle art that teaches leverage, technique, and strategy over brute strength. Master the ground game and develop unshakeable confidence.'
        },
        overview: {
          title: 'The Gentle Art',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent by using leverage, technique, and timing.',
            'BJJ promotes the concept that most of the advantage of a larger, stronger opponent comes from superior reach and more powerful strikes, both of which are negated when grappling on the ground.',
            'At Sport Academy, we teach traditional Brazilian Jiu-Jitsu with both gi and no-gi training, focusing on fundamental techniques, self-defense applications, and sport competition preparation.'
          ]
        },
        techniques: {
          title: 'Fundamental Techniques',
          subtitle: 'Master the essential techniques that form the foundation of Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard Work',
            items: [
              'Closed guard fundamentals',
              'Open guard variations',
              'Half guard techniques',
              'Spider and De La Riva guard',
              'Guard retention and recovery'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Arm bars (Juji-gatame)',
              'Triangle chokes',
              'Rear naked chokes',
              'Kimura and Americana',
              'Leg locks and foot locks'
            ]
          },
          positions: {
            title: 'Positions',
            items: [
              'Mount and back control',
              'Side control variations',
              'Knee on belly',
              'Transitions and sweeps',
              'Escapes and reversals'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt Ranking System',
          subtitle: 'Progress through the traditional Brazilian Jiu-Jitsu belt system',
          belts: [
            { name: 'White Belt', color: 'gray', description: 'Beginning level - Learning fundamentals' },
            { name: 'Blue Belt', color: 'blue', description: 'Intermediate - Developing technique' },
            { name: 'Purple Belt', color: 'purple', description: 'Advanced - Refining skills' },
            { name: 'Brown Belt', color: 'amber', description: 'Expert - Teaching and leading' },
            { name: 'Black Belt', color: 'gray', description: 'Master - Lifetime of dedication' }
          ],
          philosophy: {
            title: 'Promotion Philosophy',
            description: 'At Sport Academy, belt promotions are based on technical proficiency, understanding of principles, ability to apply techniques under pressure, and demonstration of the values of Brazilian Jiu-Jitsu: respect, humility, and continuous learning.'
          }
        },
        history: {
          title: 'History & Origins',
          paragraphs: [
            'Brazilian Jiu-Jitsu originated from traditional Japanese jujutsu and judo, brought to Brazil by Mitsuyo Maeda in the early 20th century. Maeda taught the Gracie family, who adapted and refined the techniques to create what we now know as Brazilian Jiu-Jitsu.',
            'The Gracie family, particularly Helio Gracie, modified the techniques to rely more on leverage and timing rather than strength and speed, making it effective for smaller practitioners against larger opponents.',
            'BJJ gained worldwide recognition through the early UFC tournaments, where Royce Gracie demonstrated the effectiveness of ground fighting against practitioners of other martial arts.',
            'Today, BJJ is practiced worldwide both as a martial art for self-defense and as a competitive sport, with major tournaments like the IBJJF World Championships attracting thousands of competitors.'
          ],
          keyFigures: {
            title: 'Key Figures',
            people: [
              { name: 'Mitsuyo Maeda', description: 'Japanese judoka who brought jujutsu to Brazil' },
              { name: 'Helio Gracie', description: 'Founder of Gracie Jiu-Jitsu' },
              { name: 'Carlos Gracie', description: 'First Gracie to learn from Maeda' },
              { name: 'Royce Gracie', description: 'UFC pioneer who proved BJJ\'s effectiveness' }
            ]
          }
        },
        schedule: {
          title: 'BJJ Training Schedule',
          subtitle: 'Regular classes for all skill levels, from beginner to advanced'
        },
        cta: {
          title: 'Begin Your BJJ Journey',
          description: 'Discover the gentle art that builds character, confidence, and unbreakable technique.',
          joinButton: 'Join BJJ Classes',
          backButton: 'Back to Train Like a Fighter'
        }
      },

      // Grappling
      grappling: {
        title: 'Grappling',
        breadcrumb: 'Grappling',
        hero: {
          subtitle: 'Master the art of control, takedowns, and submissions. Develop explosive power, technical precision, and mental toughness through intensive grappling training.'
        },
        overview: {
          title: 'What is Grappling?',
          paragraphs: [
            'Grappling is a form of combat that involves techniques such as clinch fighting, throws, takedowns, joint locks, pins, and submission holds. It encompasses various martial arts including wrestling, Brazilian Jiu-Jitsu, judo, and sambo.',
            'Our grappling program focuses on no-gi techniques, emphasizing speed, athleticism, and adaptability. Without the traditional gi, grapplers must rely more on underhooks, overhooks, and body control rather than grips on clothing.',
            'Grappling develops incredible functional strength, cardiovascular endurance, and mental resilience. It\'s an essential component for MMA fighters and an excellent standalone martial art for self-defense and competition.'
          ]
        },
        techniques: {
          title: 'Core Grappling Techniques',
          subtitle: 'Master the essential skills that make grappling such an effective combat art',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Double leg takedowns',
              'Single leg attacks',
              'Hip tosses and throws',
              'Sprawls and defensive wrestling',
              'Clinch work and dirty boxing'
            ]
          },
          control: {
            title: 'Control',
            items: [
              'Top position control',
              'Underhooks and overhooks',
              'Body locks and bear hugs',
              'Pressure and weight distribution',
              'Transitions and scrambles'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Rear naked chokes',
              'Guillotine chokes',
              'Arm bars and kimuras',
              'Leg locks and ankle locks',
              'Neck cranks and pressure points'
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
                title: 'Fundamental Drilling',
                description: 'Repetitive practice of basic movements and positions'
              },
              {
                title: 'Positional Sparring',
                description: 'Focused practice from specific positions and scenarios'
              },
              {
                title: 'Flow Rolling',
                description: 'Continuous movement practice at controlled intensity'
              }
            ]
          },
          conditioning: {
            title: 'Physical Conditioning',
            methods: [
              {
                title: 'Functional Strength',
                description: 'Building strength specific to grappling movements'
              },
              {
                title: 'Cardiovascular Endurance',
                description: 'High-intensity training for competition preparation'
              },
              {
                title: 'Flexibility & Mobility',
                description: 'Injury prevention and improved range of motion'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of Grappling',
          subtitle: 'Discover how grappling training transforms your physical and mental capabilities',
          items: [
            {
              icon: '🔥',
              title: 'Fat Burning',
              description: 'Intense full-body workout that burns calories efficiently'
            },
            {
              icon: '💪',
              title: 'Functional Strength',
              description: 'Build real-world applicable strength and power'
            },
            {
              icon: '🧠',
              title: 'Problem Solving',
              description: 'Develop tactical thinking and adaptability'
            },
            {
              icon: '🏆',
              title: 'Competition Ready',
              description: 'Prepare for grappling and MMA competitions'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'High-intensity grappling sessions for all experience levels'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Learn from the techniques and philosophies of grappling masters',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion & No-Gi Specialist',
              description: 'Dominant submission grappler of the modern era'
            },
            {
              name: 'Marcelo Garcia',
              title: '5x ADCC Champion',
              description: 'Master of butterfly guard and back control'
            },
            {
              name: 'Khabib Nurmagomedov',
              title: 'Former UFC Lightweight Champion',
              description: 'Undefeated MMA fighter with dominant wrestling'
            }
          ]
        },
        cta: {
          title: 'Master the Art of Control',
          description: 'Develop explosive power, technical precision, and unbreakable mental toughness through our grappling program.',
          joinButton: 'Join Grappling Classes',
          backButton: 'Back to Train Like a Fighter'
        }
      }
    },

    // Classes page
    classes: {
      hero: {
        title: 'Our Classes',
        description: 'Professional training programs designed for all skill levels. From beginners taking their first steps to advanced athletes preparing for competition, we have the perfect class for your martial arts journey.'
      },
      mma: {
        title: 'MMA Classes',
        description: 'Complete mixed martial arts training combining striking, grappling, and ground fighting techniques. Perfect for those looking to develop well-rounded combat skills.',
        features: [
          'Striking techniques',
          'Grappling fundamentals',
          'Ground fighting',
          'Conditioning',
          'Sparring sessions'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Master the gentle art of BJJ with our comprehensive ground fighting program. Learn leverage, technique, and strategy over brute strength.',
        features: [
          'Guard techniques',
          'Submissions',
          'Escapes',
          'Positional control',
          'Competition preparation'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Develop your wrestling and submission skills in our intensive grappling sessions. Focus on takedowns, control, and submissions.',
        features: [
          'Takedown techniques',
          'Wrestling fundamentals',
          'Submission grappling',
          'No-gi training',
          'Competition prep'
        ]
      },
      kidsBjj: {
        title: 'BJJ for Kids',
        description: 'Safe and fun Brazilian Jiu-Jitsu classes designed specifically for young athletes. Building confidence, discipline, and respect.',
        features: [
          'Age-appropriate techniques',
          'Character development',
          'Anti-bullying skills',
          'Physical fitness',
          'Fun games and drills'
        ]
      },
      kidsGrappling: {
        title: 'Grappling for Kids',
        description: 'Build confidence, discipline, and physical fitness through youth grappling programs. Emphasis on safety and skill development.',
        features: [
          'Basic wrestling moves',
          'Coordination drills',
          'Strength building',
          'Teamwork skills',
          'Safe training environment'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling techniques and conditioning for competitive athletes. Build strength, endurance, and technical proficiency.',
        features: [
          'Olympic wrestling',
          'Freestyle techniques',
          'Greco-Roman style',
          'Conditioning programs',
          'Competition training'
        ]
      },
      whatYouLearn: 'What You\'ll Learn:',
      cta: {
        title: 'Ready to Start Training?',
        description: 'Join Sport Academy today and begin your martial arts journey with expert instruction and a supportive community.'
      }
    },

    // Schedule page
    schedule: {
      hero: {
        title: 'Weekly Schedule',
        description: 'Current Training Schedule - Find the perfect class time that fits your lifestyle. All classes are designed to accommodate different skill levels and age groups.'
      },
      campoTures: 'Campo Tures Location',
      brunico: 'Brunico Location',
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
      membershipBenefits: 'Membership Benefits',
      guidelines: {
        arrive: 'Arrive 10 minutes early for warm-up',
        water: 'Bring water bottle and towel',
        gi: 'Gi required for BJJ classes',
        noGi: 'No-gi attire for MMA, Grappling, and Striking'
      },
      benefits: {
        allClasses: 'Access to all scheduled classes',
        openMat: 'Open mat sessions included',
        bothLocations: 'Both locations available',
        personalTraining: 'Personal training available'
      },
      cta: {
        title: 'Reserve Your Spot',
        description: 'Classes fill up quickly. Secure your membership today and start training with the best in South Tyrol.'
      }
    },

    // Coaches page
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Learn from experienced professionals who are passionate about martial arts and dedicated to helping you achieve your goals. Our coaching team brings years of competitive experience and proven teaching methods.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'Matteo founded Sport Academy in 2017 with a vision to bring world-class martial arts training to South Tyrol. With over 15 years of experience in MMA and Brazilian Jiu-Jitsu, he has competed at national and international levels.',
        specializations: [
          'Mixed Martial Arts (MMA)',
          'Brazilian Jiu-Jitsu (Brown Belt)',
          'Competition Preparation',
          'Youth Development Programs'
        ],
        achievements: [
          'Regional MMA Champion (2019)',
          'BJJ European Championship Medalist',
          'Certified Youth Martial Arts Instructor'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Grappling & Wrestling Coach',
        background: 'Christian brings a wealth of wrestling and grappling expertise to Sport Academy. His technical approach and attention to detail have helped countless students improve their ground game and competitive performance.',
        specializations: [
          'Wrestling (Freestyle & Greco-Roman)',
          'Submission Grappling',
          'Takedown Techniques',
          'Strength & Conditioning'
        ],
        achievements: [
          'National Wrestling Championship Finalist',
          'ADCC European Trials Competitor',
          'Certified Wrestling Coach (Level 2)'
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
          description: 'Every student is unique. We tailor our instruction to meet individual goals, whether recreational or competitive.'
        },
        respect: {
          title: 'Respect & Discipline',
          description: 'Martial arts teaches more than fighting techniques. We emphasize respect, discipline, and character development.'
        }
      },
      cta: {
        title: 'Train with the Best',
        description: 'Experience world-class instruction and personalized attention. Start your journey with Sport Academy\'s expert coaching team.'
      }
    },

    // Membership page
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the membership plan that fits your training goals and schedule. All memberships include access to both locations and all scheduled classes. No hidden fees, no long-term contracts.'
      },
      mainSeason: {
        title: 'Main Season',
        period: 'September - June',
        duration: '10 months of intensive training',
        mostPopular: 'Most Popular'
      },
      summerSeason: {
        title: 'Summer Season',
        period: 'June - September',
        duration: '3 months of summer training'
      },
      bjjOnly: {
        title: 'Jiu Jitsu Only Membership',
        subtitle: 'Dedicated Brazilian Jiu-Jitsu training for summer season',
        program: 'BJJ Summer Program',
        description: '3 months of focused BJJ training'
      },
      adults: 'Adults',
      students: 'Students',
      month: 'month',
      whatsIncluded: 'What\'s Included:',
      mainIncludes: [
        'Unlimited access to all classes',
        'Both Campo Tures & Brunico locations',
        'Open mat sessions',
        'Competition preparation',
        'Personal training discounts'
      ],
      summerIncludes: [
        'Access to summer schedule classes',
        'Both locations available',
        'Open training sessions',
        'Flexible summer schedule',
        'Outdoor training opportunities'
      ],
      bjjIncludes: [
        'Access to all BJJ classes only',
        'Both Campo Tures & Brunico locations',
        'Gi and No-Gi training',
        'Technique refinement focus',
        'BJJ-specific open mat sessions'
      ],
      selectMainSeason: 'Select Main Season',
      selectSummerSeason: 'Select Summer Season',
      selectBjjOnly: 'Select BJJ Only',
      additionalServices: {
        title: 'Additional Services',
        description: 'Enhance your training with our specialized services and programs'
      },
      personalTraining: {
        title: 'Personal Training',
        description: 'One-on-one coaching sessions tailored to your specific goals',
        price: '€50/session',
        duration: '60 minutes'
      },
      competitionPrep: {
        title: 'Competition Prep',
        description: 'Specialized training for upcoming tournaments and competitions',
        price: '€80/session',
        duration: '90 minutes'
      },
      seminars: {
        title: 'Seminars & Workshops',
        description: 'Special events with guest instructors and advanced techniques',
        price: '€30/event',
        duration: '3-4 hours'
      },
      faq: {
        title: 'Frequently Asked Questions',
        seasons: {
          question: 'What\'s the difference between seasons?',
          answer: 'The Main Season (September-June) offers our full program with regular classes and competition preparation. The Summer Season (June-September) has a more relaxed schedule perfect for maintaining fitness during vacation months.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to both our Campo Tures and Brunico facilities. You can attend classes at either location based on your schedule.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer a free trial class for new students. Contact us to schedule your trial and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For BJJ classes, you\'ll need a gi (uniform). For MMA and grappling, comfortable athletic wear is sufficient. We recommend bringing a water bottle and towel to all classes.'
        }
      },
      cta: {
        title: 'Start Your Journey Today',
        description: 'Join Sport Academy and become part of South Tyrol\'s premier martial arts community. Your transformation starts here.'
      }
    },

    // Contact page
    contact: {
      hero: {
        title: 'Get in Touch',
        description: 'Visit us at our two convenient locations in South Tyrol. We\'re here to help you start your martial arts journey and answer any questions you may have about our programs.'
      },
      getInTouch: {
        title: 'Contact Information',
        subtitle: 'Ready to start training? Get in touch with us today'
      },
      callUs: 'Call Us',
      instagram: 'Instagram',
      address: 'Address',
      trainingSchedule: 'Training Schedule',
      landmarkDirections: 'Landmark & Directions',
      availableClasses: 'Available Classes',
      campoTures: {
        address: 'Via Hugo von Taufers 8\nCampo Tures, South Tyrol\nItaly',
        directions: 'Located in the center of Campo Tures, easily accessible from the main road. The gym is near the town center, close to local shops and restaurants.',
        classes: [
          'MMA Classes',
          'Brazilian Jiu-Jitsu',
          'Grappling',
          'Kids BJJ'
        ]
      },
      brunico: {
        address: 'Via Teresa Riedl 3\n39031 Brunico BZ\nSouth Tyrol, Italy',
        directions: 'Conveniently located near the Brunico train station. The facility is easily accessible by car or public transport, with good connections throughout the region.',
        classes: [
          'Brazilian Jiu-Jitsu',
          'Wrestling',
          'Kids Grappling',
          'Open Training'
        ]
      },
      locations: {
        title: 'Our Locations & Directions',
        subtitle: 'Two convenient training facilities in South Tyrol'
      },
      parking: {
        title: 'Parking & Accessibility',
        subtitle: 'Easy access and convenient parking at both locations'
      },
      parking: 'Parking',
      publicTransport: 'Public Transport',
      accessibility: 'Accessibility',
      campoTures: {
        parking: 'Free parking available on Via Hugo von Taufers and surrounding streets. Additional parking spaces available in the town center.',
        transport: 'Regular bus service connects Campo Tures to Brunico and surrounding areas. The gym is a 2-minute walk from the main bus stop.',
        accessibility: 'Ground floor access with wide entrance doors. Accessible changing rooms and training areas available.'
      },
      brunico: {
        parking: 'Parking available on Via Teresa Riedl and in nearby public parking areas. Short-term parking available directly in front of the facility.',
        transport: 'Just 5 minutes walk from Brunico train station. Excellent connections to Bolzano, Innsbruck, and other major cities in the region.',
        accessibility: 'Fully accessible facility with elevator access to all floors. Dedicated accessible parking spaces available.'
      },
      visitRequirements: {
        title: 'Visit Requirements & Policies',
        subtitle: 'What to know before your first visit'
      },
      firstTimeVisitors: 'First-Time Visitors',
      whatToBring: 'What to Bring',
      whatWeProvide: 'What We Provide',
      bring: [
        'Valid ID for registration',
        'Comfortable athletic wear',
        'Water bottle',
        'Towel',
        'Positive attitude!'
      ],
      provide: [
        'Basic training equipment',
        'Mats and training space',
        'Changing rooms with lockers',
        'Shower facilities',
        'Professional instruction'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Age Requirements: Minimum age 16 for adult classes, kids classes available from age 6',
        health: 'Health & Safety: Please inform instructors of any injuries or health conditions',
        equipment: 'Equipment Rental: Shin guards and gloves provided initially, students should purchase own equipment',
        payment: 'Payment Options: Cash, card, and online payment accepted'
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Take the first step towards your martial arts journey. Join Sport Academy today and discover your potential.'
      }
    },

    // Footer
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training in South Tyrol',
      subtitle: 'Forging fighters since 2017',
      copyright: '© 2025 Sport Academy. All rights reserved.'
    }
  },

  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      classes: 'Kurse',
      schedule: 'Stundenplan',
      coaches: 'Trainer',
      membership: 'Mitgliedschaft',
      contact: 'Kontakt'
    },
    
    // Common terms
    common: {
      joinNow: 'Jetzt Beitreten',
      viewClasses: 'Kurse Ansehen',
      viewSchedule: 'Stundenplan Ansehen',
      viewMembership: 'Mitgliedschaft Ansehen',
      contactUs: 'Kontakt',
      joinSportAcademy: 'Sport Academy Beitreten',
      callNow: 'Jetzt Anrufen',
      learnMore: 'Mehr Erfahren',
      allLevels: 'Alle Levels',
      ages: 'Alter',
      registerOnline: 'Online Anmelden',
      bookClasses: 'Kurse Buchen',
      visitUs: 'Besuchen Sie Uns',
      dropInWelcome: 'Spontanbesuche Willkommen',
      instantConfirmation: 'Sofortige Bestätigung',
      duringTrainingHours: 'Während der Trainingszeiten',
      responseWithin2Hours: 'Antwort innerhalb 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates & DMs'
    },

    // Home page
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Kämpfer schmieden seit 2017'
      },
      welcome: {
        title: 'Willkommen bei der Sport Academy',
        description: 'Seit 2017 ist die Sport Academy das führende Ziel für Kampfsporttraining in Südtirol. Wir bieten Weltklasse-Unterricht in MMA, Brazilian Jiu-Jitsu und Grappling in unseren beiden hochmodernen Einrichtungen.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Gegründet 2017, entwickeln wir seit über 8 Jahren Kämpfer',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Praktische Einrichtungen in Sand in Taufers und Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'Umfassende Kurse für Erwachsene und Kinder aller Leistungsstufen',
        exploreClasses: 'Unsere Kurse Entdecken'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Meistere die Kampfkünste mit professionellem Unterricht'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training, das Schlag-, Grappling- und Bodenkampftechniken kombiniert.'
      },
      bjj: {
        description: 'Meistere die sanfte Kunst des Brazilian Jiu-Jitsu mit umfassenden Bodenkampftechniken.'
      },
      grappling: {
        description: 'Entwickle Wrestling- und Submission-Fähigkeiten durch intensives No-Gi Grappling-Training.'
      },
      getStarted: {
        title: 'Heute Beginnen',
        subtitle: 'Alles was du brauchst, um deine Kampfsport-Reise zu beginnen'
      },
      quickLinks: {
        viewClasses: 'Kurse Ansehen',
        viewClassesDesc: 'Entdecke unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan Prüfen',
        checkScheduleDesc: 'Finde die perfekte Kurszeit',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wähle dein Trainingspaket',
        contactUs: 'Kontakt',
        contactUsDesc: 'Nimm Kontakt mit unserem Team auf'
      }
    },

    // Disciplines - MMA
    disciplines: {
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der Schlag-, Grappling- und Bodenkampftechniken kombiniert. Trainiere wie ein Profikämpfer und entwickle komplette Kampfkunstfähigkeiten.'
        },
        overview: {
          title: 'Was ist MMA?',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist ein Vollkontakt-Kampfsport, der eine große Vielfalt von Kampftechniken und Fähigkeiten aus verschiedenen anderen Kampfsportarten im Wettkampf erlaubt.',
            'MMA kombiniert Techniken aus Boxen, Wrestling, Brazilian Jiu-Jitsu, Muay Thai, Kickboxen, Karate, Judo und anderen Disziplinen. Es wird oft als "die vollständigste Kampfkunst" bezeichnet, weil es alle Kampfdistanzen umfasst.',
            'Bei der Sport Academy ist unser MMA-Programm darauf ausgelegt, dir diese vielfältigen Fähigkeiten in einer sicheren, strukturierten Umgebung mit Expertenunterricht von erfahrenen Kämpfern beizubringen.'
          ]
        },
        techniques: {
          title: 'Schlüsseltechniken & Fähigkeiten',
          subtitle: 'Meistere die grundlegenden Techniken, die MMA zum vollständigsten Kampfsport machen',
          striking: {
            title: 'Schlagtechniken',
            items: [
              'Box-Kombinationen',
              'Muay Thai Kicks und Knie',
              'Ellbogenschläge',
              'Beinarbeit und Bewegung',
              'Verteidigungstechniken'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken',
              'Sprawls und defensives Wrestling',
              'Clinch-Arbeit',
              'Bodenkontrolle',
              'Käfig-Wrestling'
            ]
          },
          groundGame: {
            title: 'Bodenkampf',
            items: [
              'Brazilian Jiu-Jitsu Submissions',
              'Ground and Pound',
              'Guard-Arbeit',
              'Befreiungen und Umkehrungen',
              'Positionskontrolle'
            ]
          }
        },
        history: {
          title: 'Geschichte des MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln, mit frühen Formen gemischter Kampfsportarten, die bis ins antike Griechenland und den olympischen Sport Pankration zurückreichen, der Wrestling und Boxen kombinierte.',
            'Modernes MMA begann sich in den frühen 1990er Jahren zu formen mit der Gründung der Ultimate Fighting Championship (UFC) im Jahr 1993. Die frühen Turniere sollten bestimmen, welche Kampfkunst in echten Kampfsituationen am effektivsten war.',
            'Mit der Zeit erkannten Kämpfer, dass sie, um erfolgreich zu sein, in allen Aspekten des Kampfes vielseitig sein mussten. Dies führte zur Entwicklung des MMA zu dem ausgeklügelten Sport, den wir heute kennen, mit Kämpfern, die in mehreren Disziplinen trainieren.',
            'Heute ist MMA eine der am schnellsten wachsenden Sportarten der Welt, mit professionellen Organisationen wie UFC, Bellator und ONE Championship, die das höchste Niveau des Mixed Martial Arts-Wettkampfs zeigen.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              { year: '648 v.Chr.', description: 'Pankration in die Olympischen Spiele eingeführt' },
              { year: '1993', description: 'UFC 1 - Der Beginn des modernen MMA' },
              { year: '2001', description: 'Einheitliche MMA-Regeln etabliert' },
              { year: '2016', description: 'MMA in New York legalisiert, US-Expansion abgeschlossen' }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des MMA-Trainings',
          subtitle: 'Transformiere deinen Körper, Geist und Seele durch umfassendes Kampfkunsttraining',
          items: [
            {
              icon: '💪',
              title: 'Körperliche Fitness',
              description: 'Komplette Körperkonditionierung, Kraft und Herz-Kreislauf-Gesundheit'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Entwickle Disziplin, Fokus und mentale Widerstandsfähigkeit'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Lerne praktische Selbstverteidigungsfähigkeiten für reale Situationen'
            },
            {
              icon: '🤝',
              title: 'Gemeinschaft',
              description: 'Tritt einer unterstützenden Gemeinschaft engagierter Athleten bei'
            }
          ]
        },
        schedule: {
          title: 'MMA Trainingsplan',
          subtitle: 'Tritt unseren strukturierten MMA-Kursen bei, die für alle Leistungsstufen konzipiert sind'
        },
        legends: {
          title: 'Legendäre MMA-Kämpfer',
          subtitle: 'Lerne von den Techniken und Philosophien der MMA-Legenden',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'Ehemaliger UFC Mittelgewichts-Champion',
              description: 'Bekannt für seine Schlagpräzision und Kreativität'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'PRIDE Schwergewichts-Champion',
              description: 'Legendär für seine ruhige Art und technische Fähigkeiten'
            },
            {
              name: 'Jon Jones',
              title: 'Ehemaliger UFC Halbschwergewichts-Champion',
              description: 'Bekannt für seine Reichweite, Kreativität und Wrestling-Basis'
            }
          ]
        },
        cta: {
          title: 'Starte Deine MMA-Reise',
          description: 'Trainiere mit erfahrenen Trainern und entwickle komplette Kampfkunstfähigkeiten in einer sicheren, unterstützenden Umgebung.',
          joinButton: 'MMA-Kursen Beitreten',
          backButton: 'Zurück zu Trainiere Wie Ein Kämpfer'
        }
      },

      // BJJ
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        breadcrumb: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Die sanfte Kunst, die Hebelwirkung, Technik und Strategie über rohe Kraft lehrt. Meistere den Bodenkampf und entwickle unerschütterliches Selbstvertrauen.'
        },
        overview: {
          title: 'Die Sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Es betont das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner verteidigen kann, indem sie Hebelwirkung, Technik und Timing einsetzt.',
            'BJJ fördert das Konzept, dass der größte Teil des Vorteils eines größeren, stärkeren Gegners von überlegener Reichweite und kraftvolleren Schlägen kommt, die beide beim Grappling am Boden neutralisiert werden.',
            'Bei der Sport Academy unterrichten wir traditionelles Brazilian Jiu-Jitsu mit sowohl Gi- als auch No-Gi-Training, wobei wir uns auf grundlegende Techniken, Selbstverteidigungsanwendungen und Sportwettkampfvorbereitung konzentrieren.'
          ]
        },
        techniques: {
          title: 'Grundlegende Techniken',
          subtitle: 'Meistere die wesentlichen Techniken, die das Fundament des Brazilian Jiu-Jitsu bilden',
          guardWork: {
            title: 'Guard-Arbeit',
            items: [
              'Closed Guard Grundlagen',
              'Open Guard Variationen',
              'Half Guard Techniken',
              'Spider und De La Riva Guard',
              'Guard-Erhaltung und -Wiederherstellung'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Arm Bars (Juji-gatame)',
              'Triangle Chokes',
              'Rear Naked Chokes',
              'Kimura und Americana',
              'Leg Locks und Foot Locks'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Back Control',
              'Side Control Variationen',
              'Knee on Belly',
              'Übergänge und Sweeps',
              'Befreiungen und Umkehrungen'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Gürtel-Ranking-System',
          subtitle: 'Fortschritt durch das traditionelle Brazilian Jiu-Jitsu Gürtelsystem',
          belts: [
            { name: 'Weißer Gürtel', color: 'gray', description: 'Anfängerlevel - Grundlagen lernen' },
            { name: 'Blauer Gürtel', color: 'blue', description: 'Mittelstufe - Technik entwickeln' },
            { name: 'Violetter Gürtel', color: 'purple', description: 'Fortgeschritten - Fähigkeiten verfeinern' },
            { name: 'Brauner Gürtel', color: 'amber', description: 'Experte - Unterrichten und führen' },
            { name: 'Schwarzer Gürtel', color: 'gray', description: 'Meister - Lebenslange Hingabe' }
          ],
          philosophy: {
            title: 'Beförderungsphilosophie',
            description: 'Bei der Sport Academy basieren Gürtelbeförderungen auf technischer Kompetenz, Verständnis der Prinzipien, Fähigkeit, Techniken unter Druck anzuwenden, und Demonstration der Werte des Brazilian Jiu-Jitsu: Respekt, Demut und kontinuierliches Lernen.'
          }
        },
        history: {
          title: 'Geschichte & Ursprünge',
          paragraphs: [
            'Brazilian Jiu-Jitsu entstand aus traditionellem japanischem Jujutsu und Judo, das von Mitsuyo Maeda im frühen 20. Jahrhundert nach Brasilien gebracht wurde. Maeda lehrte die Familie Gracie, die die Techniken anpasste und verfeinerte, um das zu schaffen, was wir heute als Brazilian Jiu-Jitsu kennen.',
            'Die Familie Gracie, insbesondere Helio Gracie, modifizierte die Techniken, um mehr auf Hebelwirkung und Timing als auf Kraft und Geschwindigkeit zu setzen, was es für kleinere Praktizierende gegen größere Gegner effektiv machte.',
            'BJJ erlangte weltweite Anerkennung durch die frühen UFC-Turniere, wo Royce Gracie die Effektivität des Bodenkampfs gegen Praktizierende anderer Kampfkünste demonstrierte.',
            'Heute wird BJJ weltweit sowohl als Kampfkunst zur Selbstverteidigung als auch als Wettkampfsport praktiziert, mit großen Turnieren wie den IBJJF-Weltmeisterschaften, die Tausende von Wettkämpfern anziehen.'
          ],
          keyFigures: {
            title: 'Schlüsselfiguren',
            people: [
              { name: 'Mitsuyo Maeda', description: 'Japanischer Judoka, der Jujutsu nach Brasilien brachte' },
              { name: 'Helio Gracie', description: 'Gründer des Gracie Jiu-Jitsu' },
              { name: 'Carlos Gracie', description: 'Erster Gracie, der von Maeda lernte' },
              { name: 'Royce Gracie', description: 'UFC-Pionier, der BJJs Effektivität bewies' }
            ]
          }
        },
        schedule: {
          title: 'BJJ Trainingsplan',
          subtitle: 'Regelmäßige Kurse für alle Leistungsstufen, von Anfänger bis Fortgeschritten'
        },
        cta: {
          title: 'Beginne Deine BJJ-Reise',
          description: 'Entdecke die sanfte Kunst, die Charakter, Selbstvertrauen und unzerbrechliche Technik aufbaut.',
          joinButton: 'BJJ-Kursen Beitreten',
          backButton: 'Zurück zu Trainiere Wie Ein Kämpfer'
        }
      },

      // Grappling
      grappling: {
        title: 'Grappling',
        breadcrumb: 'Grappling',
        hero: {
          subtitle: 'Meistere die Kunst der Kontrolle, Takedowns und Submissions. Entwickle explosive Kraft, technische Präzision und mentale Stärke durch intensives Grappling-Training.'
        },
        overview: {
          title: 'Was ist Grappling?',
          paragraphs: [
            'Grappling ist eine Form des Kampfes, die Techniken wie Clinch-Kämpfe, Würfe, Takedowns, Gelenkhebel, Pins und Submission-Griffe umfasst. Es umfasst verschiedene Kampfkünste einschließlich Wrestling, Brazilian Jiu-Jitsu, Judo und Sambo.',
            'Unser Grappling-Programm konzentriert sich auf No-Gi-Techniken und betont Geschwindigkeit, Athletik und Anpassungsfähigkeit. Ohne den traditionellen Gi müssen sich Grappler mehr auf Underhooks, Overhooks und Körperkontrolle verlassen als auf Griffe an der Kleidung.',
            'Grappling entwickelt unglaubliche funktionale Kraft, Herz-Kreislauf-Ausdauer und mentale Widerstandsfähigkeit. Es ist ein wesentlicher Bestandteil für MMA-Kämpfer und eine ausgezeichnete eigenständige Kampfkunst für Selbstverteidigung und Wettkampf.'
          ]
        },
        techniques: {
          title: 'Kern-Grappling-Techniken',
          subtitle: 'Meistere die wesentlichen Fähigkeiten, die Grappling zu einer so effektiven Kampfkunst machen',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Double Leg Takedowns',
              'Single Leg Angriffe',
              'Hip Tosses und Würfe',
              'Sprawls und defensives Wrestling',
              'Clinch-Arbeit und Dirty Boxing'
            ]
          },
          control: {
            title: 'Kontrolle',
            items: [
              'Top-Position-Kontrolle',
              'Underhooks und Overhooks',
              'Body Locks und Bear Hugs',
              'Druck und Gewichtsverteilung',
              'Übergänge und Scrambles'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Rear Naked Chokes',
              'Guillotine Chokes',
              'Arm Bars und Kimuras',
              'Leg Locks und Ankle Locks',
              'Neck Cranks und Druckpunkte'
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
                title: 'Grundlagen-Drilling',
                description: 'Wiederholende Übung grundlegender Bewegungen und Positionen'
              },
              {
                title: 'Positions-Sparring',
                description: 'Fokussierte Übung aus spezifischen Positionen und Szenarien'
              },
              {
                title: 'Flow Rolling',
                description: 'Kontinuierliche Bewegungsübung bei kontrollierter Intensität'
              }
            ]
          },
          conditioning: {
            title: 'Körperliche Konditionierung',
            methods: [
              {
                title: 'Funktionale Kraft',
                description: 'Kraftaufbau spezifisch für Grappling-Bewegungen'
              },
              {
                title: 'Herz-Kreislauf-Ausdauer',
                description: 'Hochintensives Training für Wettkampfvorbereitung'
              },
              {
                title: 'Flexibilität & Mobilität',
                description: 'Verletzungsprävention und verbesserte Beweglichkeit'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grappling',
          subtitle: 'Entdecke, wie Grappling-Training deine körperlichen und mentalen Fähigkeiten transformiert',
          items: [
            {
              icon: '🔥',
              title: 'Fettverbrennung',
              description: 'Intensives Ganzkörpertraining, das effizient Kalorien verbrennt'
            },
            {
              icon: '💪',
              title: 'Funktionale Kraft',
              description: 'Baue reale, anwendbare Kraft und Power auf'
            },
            {
              icon: '🧠',
              title: 'Problemlösung',
              description: 'Entwickle taktisches Denken und Anpassungsfähigkeit'
            },
            {
              icon: '🏆',
              title: 'Wettkampfbereit',
              description: 'Bereite dich auf Grappling- und MMA-Wettkämpfe vor'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Stundenplan',
          subtitle: 'Hochintensive Grappling-Sessions für alle Erfahrungsstufen'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Lerne von den Techniken und Philosophien der Grappling-Meister',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion & No-Gi Spezialist',
              description: 'Dominanter Submission-Grappler der modernen Ära'
            },
            {
              name: 'Marcelo Garcia',
              title: '5x ADCC Champion',
              description: 'Meister der Butterfly Guard und Back Control'
            },
            {
              name: 'Khabib Nurmagomedov',
              title: 'Ehemaliger UFC Leichtgewichts-Champion',
              description: 'Ungeschlagener MMA-Kämpfer mit dominantem Wrestling'
            }
          ]
        },
        cta: {
          title: 'Meistere die Kunst der Kontrolle',
          description: 'Entwickle explosive Kraft, technische Präzision und unzerbrechliche mentale Stärke durch unser Grappling-Programm.',
          joinButton: 'Grappling-Kursen Beitreten',
          backButton: 'Zurück zu Trainiere Wie Ein Kämpfer'
        }
      }
    },

    // Classes page
    classes: {
      hero: {
        title: 'Unsere Kurse',
        description: 'Professionelle Trainingsprogramme für alle Leistungsstufen. Von Anfängern, die ihre ersten Schritte machen, bis zu fortgeschrittenen Athleten, die sich auf Wettkämpfe vorbereiten, haben wir den perfekten Kurs für deine Kampfsport-Reise.'
      },
      mma: {
        title: 'MMA-Kurse',
        description: 'Komplettes Mixed Martial Arts Training, das Schlag-, Grappling- und Bodenkampftechniken kombiniert. Perfekt für diejenigen, die vielseitige Kampffähigkeiten entwickeln möchten.',
        features: [
          'Schlagtechniken',
          'Grappling-Grundlagen',
          'Bodenkampf',
          'Konditionierung',
          'Sparring-Sessions'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Meistere die sanfte Kunst des BJJ mit unserem umfassenden Bodenkampf-Programm. Lerne Hebelwirkung, Technik und Strategie über rohe Kraft.',
        features: [
          'Guard-Techniken',
          'Submissions',
          'Befreiungen',
          'Positionskontrolle',
          'Wettkampfvorbereitung'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Entwickle deine Wrestling- und Submission-Fähigkeiten in unseren intensiven Grappling-Sessions. Fokus auf Takedowns, Kontrolle und Submissions.',
        features: [
          'Takedown-Techniken',
          'Wrestling-Grundlagen',
          'Submission-Grappling',
          'No-Gi-Training',
          'Wettkampfvorbereitung'
        ]
      },
      kidsBjj: {
        title: 'BJJ für Kinder',
        description: 'Sichere und spaßige Brazilian Jiu-Jitsu-Kurse speziell für junge Athleten entwickelt. Aufbau von Selbstvertrauen, Disziplin und Respekt.',
        features: [
          'Altersgerechte Techniken',
          'Charakterentwicklung',
          'Anti-Mobbing-Fähigkeiten',
          'Körperliche Fitness',
          'Spaßige Spiele und Übungen'
        ]
      },
      kidsGrappling: {
        title: 'Grappling für Kinder',
        description: 'Baue Selbstvertrauen, Disziplin und körperliche Fitness durch Jugend-Grappling-Programme auf. Schwerpunkt auf Sicherheit und Fähigkeitsentwicklung.',
        features: [
          'Grundlegende Wrestling-Bewegungen',
          'Koordinationsübungen',
          'Kraftaufbau',
          'Teamwork-Fähigkeiten',
          'Sichere Trainingsumgebung'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelle Wrestling-Techniken und Konditionierung für Wettkampfathleten. Baue Kraft, Ausdauer und technische Kompetenz auf.',
        features: [
          'Olympisches Wrestling',
          'Freestyle-Techniken',
          'Griechisch-römischer Stil',
          'Konditionierungsprogramme',
          'Wettkampftraining'
        ]
      },
      whatYouLearn: 'Was Du Lernen Wirst:',
      cta: {
        title: 'Bereit zu Trainieren?',
        description: 'Tritt der Sport Academy heute bei und beginne deine Kampfsport-Reise mit Expertenunterricht und einer unterstützenden Gemeinschaft.'
      }
    },

    // Schedule page
    schedule: {
      hero: {
        title: 'Wochenstundenplan',
        description: 'Aktueller Trainingsplan - Finde die perfekte Kurszeit, die zu deinem Lebensstil passt. Alle Kurse sind darauf ausgelegt, verschiedene Leistungsstufen und Altersgruppen zu berücksichtigen.'
      },
      campoTures: 'Standort Sand in Taufers',
      brunico: 'Standort Bruneck',
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
      membershipBenefits: 'Mitgliedschaftsvorteile',
      guidelines: {
        arrive: '10 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'Gi erforderlich für BJJ-Kurse',
        noGi: 'No-Gi-Kleidung für MMA, Grappling und Schlagtechniken'
      },
      benefits: {
        allClasses: 'Zugang zu allen geplanten Kursen',
        openMat: 'Freie Trainingseinheiten inbegriffen',
        bothLocations: 'Beide Standorte verfügbar',
        personalTraining: 'Personaltraining verfügbar'
      },
      cta: {
        title: 'Reserviere Deinen Platz',
        description: 'Kurse füllen sich schnell. Sichere dir heute deine Mitgliedschaft und beginne mit dem Training bei den Besten in Südtirol.'
      }
    },

    // Coaches page
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne von erfahrenen Profis, die leidenschaftlich über Kampfsport sind und sich dafür einsetzen, dir beim Erreichen deiner Ziele zu helfen. Unser Trainerteam bringt jahrelange Wettkampferfahrung und bewährte Lehrmethoden mit.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Matteo gründete die Sport Academy 2017 mit der Vision, Weltklasse-Kampfsporttraining nach Südtirol zu bringen. Mit über 15 Jahren Erfahrung in MMA und Brazilian Jiu-Jitsu hat er auf nationaler und internationaler Ebene gekämpft.',
        specializations: [
          'Mixed Martial Arts (MMA)',
          'Brazilian Jiu-Jitsu (Brauner Gürtel)',
          'Wettkampfvorbereitung',
          'Jugendentwicklungsprogramme'
        ],
        achievements: [
          'Regionaler MMA-Champion (2019)',
          'BJJ Europameisterschafts-Medaillengewinner',
          'Zertifizierter Jugend-Kampfsport-Instruktor'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Grappling & Wrestling Trainer',
        background: 'Christian bringt eine Fülle von Wrestling- und Grappling-Expertise zur Sport Academy. Sein technischer Ansatz und seine Aufmerksamkeit für Details haben unzähligen Schülern geholfen, ihr Bodenkampfspiel und ihre Wettkampfleistung zu verbessern.',
        specializations: [
          'Wrestling (Freistil & Griechisch-Römisch)',
          'Submission-Grappling',
          'Takedown-Techniken',
          'Kraft & Konditionierung'
        ],
        achievements: [
          'Nationaler Wrestling-Meisterschafts-Finalist',
          'ADCC European Trials Teilnehmer',
          'Zertifizierter Wrestling-Trainer (Level 2)'
        ]
      },
      background: 'Hintergrund',
      specializations: 'Spezialisierungen',
      achievements: 'Erfolge',
      philosophy: {
        title: 'Unsere Trainingsphilosophie',
        technical: {
          title: 'Technische Exzellenz',
          description: 'Wir konzentrieren uns auf richtige Technik und Grundlagen und stellen sicher, dass jeder Schüler ein solides Fundament für langfristigen Erfolg aufbaut.'
        },
        individual: {
          title: 'Individuelles Wachstum',
          description: 'Jeder Schüler ist einzigartig. Wir passen unseren Unterricht an individuelle Ziele an, ob Freizeit oder Wettkampf.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Kampfsport lehrt mehr als Kampftechniken. Wir betonen Respekt, Disziplin und Charakterentwicklung.'
        }
      },
      cta: {
        title: 'Trainiere mit den Besten',
        description: 'Erlebe Weltklasse-Unterricht und persönliche Betreuung. Beginne deine Reise mit dem Expertentrainerteam der Sport Academy.'
      }
    },

    // Membership page
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle den Mitgliedschaftsplan, der zu deinen Trainingszielen und deinem Zeitplan passt. Alle Mitgliedschaften beinhalten Zugang zu beiden Standorten und allen geplanten Kursen. Keine versteckten Gebühren, keine langfristigen Verträge.'
      },
      mainSeason: {
        title: 'Hauptsaison',
        period: 'September - Juni',
        duration: '10 Monate intensives Training',
        mostPopular: 'Am Beliebtesten'
      },
      summerSeason: {
        title: 'Sommersaison',
        period: 'Juni - September',
        duration: '3 Monate Sommertraining'
      },
      bjjOnly: {
        title: 'Nur Jiu Jitsu Mitgliedschaft',
        subtitle: 'Spezielles Brazilian Jiu-Jitsu Training für die Sommersaison',
        program: 'BJJ Sommerprogramm',
        description: '3 Monate fokussiertes BJJ-Training'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was Enthalten Ist:',
      mainIncludes: [
        'Unbegrenzter Zugang zu allen Kursen',
        'Beide Standorte Sand in Taufers & Bruneck',
        'Freie Trainingseinheiten',
        'Wettkampfvorbereitung',
        'Personaltraining-Rabatte'
      ],
      summerIncludes: [
        'Zugang zu Sommerstundenplan-Kursen',
        'Beide Standorte verfügbar',
        'Offene Trainingseinheiten',
        'Flexibler Sommerstundenplan',
        'Outdoor-Trainingsmöglichkeiten'
      ],
      bjjIncludes: [
        'Zugang nur zu allen BJJ-Kursen',
        'Beide Standorte Sand in Taufers & Bruneck',
        'Gi- und No-Gi-Training',
        'Technikverfeinerungs-Fokus',
        'BJJ-spezifische freie Trainingseinheiten'
      ],
      selectMainSeason: 'Hauptsaison Wählen',
      selectSummerSeason: 'Sommersaison Wählen',
      selectBjjOnly: 'Nur BJJ Wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessere dein Training mit unseren spezialisierten Dienstleistungen und Programmen'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Eins-zu-eins Coaching-Sessions, die auf deine spezifischen Ziele zugeschnitten sind',
        price: '€50/Session',
        duration: '60 Minuten'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training für bevorstehende Turniere und Wettkämpfe',
        price: '€80/Session',
        duration: '90 Minuten'
      },
      seminars: {
        title: 'Seminare & Workshops',
        description: 'Spezielle Veranstaltungen mit Gastinstruktoren und fortgeschrittenen Techniken',
        price: '€30/Veranstaltung',
        duration: '3-4 Stunden'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Die Hauptsaison (September-Juni) bietet unser vollständiges Programm mit regelmäßigen Kursen und Wettkampfvorbereitung. Die Sommersaison (Juni-September) hat einen entspannteren Zeitplan, perfekt um die Fitness während der Urlaubsmonate zu erhalten.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu beiden unserer Einrichtungen in Sand in Taufers und Bruneck. Du kannst Kurse an beiden Standorten je nach deinem Zeitplan besuchen.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Absolut! Wir bieten eine kostenlose Probestunde für neue Schüler an. Kontaktiere uns, um deine Probestunde zu planen und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für BJJ-Kurse brauchst du einen Gi (Uniform). Für MMA und Grappling ist bequeme Sportkleidung ausreichend. Wir empfehlen, eine Wasserflasche und ein Handtuch zu allen Kursen mitzubringen.'
        }
      },
      cta: {
        title: 'Starte Deine Reise Heute',
        description: 'Tritt der Sport Academy bei und werde Teil von Südtirols führender Kampfsport-Gemeinschaft. Deine Transformation beginnt hier.'
      }
    },

    // Contact page
    contact: {
      hero: {
        title: 'Kontakt Aufnehmen',
        description: 'Besuche uns an unseren zwei praktischen Standorten in Südtirol. Wir sind hier, um dir beim Start deiner Kampfsport-Reise zu helfen und alle Fragen zu unseren Programmen zu beantworten.'
      },
      getInTouch: {
        title: 'Kontaktinformationen',
        subtitle: 'Bereit zu trainieren? Nimm heute Kontakt mit uns auf'
      },
      callUs: 'Anrufen',
      instagram: 'Instagram',
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      landmarkDirections: 'Orientierungspunkte & Wegbeschreibung',
      availableClasses: 'Verfügbare Kurse',
      campoTures: {
        address: 'Via Hugo von Taufers 8\nSand in Taufers, Südtirol\nItalien',
        directions: 'Im Zentrum von Sand in Taufers gelegen, leicht von der Hauptstraße erreichbar. Das Fitnessstudio befindet sich in der Nähe des Stadtzentrums, nahe lokalen Geschäften und Restaurants.',
        classes: [
          'MMA-Kurse',
          'Brazilian Jiu-Jitsu',
          'Grappling',
          'Kinder BJJ'
        ]
      },
      brunico: {
        address: 'Via Teresa Riedl 3\n39031 Bruneck BZ\nSüdtirol, Italien',
        directions: 'Günstig in der Nähe des Bahnhofs Bruneck gelegen. Die Einrichtung ist leicht mit dem Auto oder öffentlichen Verkehrsmitteln erreichbar, mit guten Verbindungen in der gesamten Region.',
        classes: [
          'Brazilian Jiu-Jitsu',
          'Wrestling',
          'Kinder Grappling',
          'Freies Training'
        ]
      },
      locations: {
        title: 'Unsere Standorte & Wegbeschreibungen',
        subtitle: 'Zwei praktische Trainingseinrichtungen in Südtirol'
      },
      parking: {
        title: 'Parken & Barrierefreiheit',
        subtitle: 'Einfacher Zugang und bequemes Parken an beiden Standorten'
      },
      parking: 'Parken',
      publicTransport: 'Öffentliche Verkehrsmittel',
      accessibility: 'Barrierefreiheit',
      campoTures: {
        parking: 'Kostenlose Parkplätze verfügbar in der Via Hugo von Taufers und umliegenden Straßen. Zusätzliche Parkplätze im Stadtzentrum verfügbar.',
        transport: 'Regelmäßiger Busservice verbindet Sand in Taufers mit Bruneck und umliegenden Gebieten. Das Fitnessstudio ist 2 Gehminuten von der Hauptbushaltestelle entfernt.',
        accessibility: 'Erdgeschosszugang mit breiten Eingangstüren. Barrierefreie Umkleideräume und Trainingsbereiche verfügbar.'
      },
      brunico: {
        parking: 'Parkplätze verfügbar in der Via Teresa Riedl und in nahegelegenen öffentlichen Parkbereichen. Kurzzeitparkplätze direkt vor der Einrichtung verfügbar.',
        transport: 'Nur 5 Gehminuten vom Bahnhof Bruneck entfernt. Ausgezeichnete Verbindungen nach Bozen, Innsbruck und anderen Großstädten der Region.',
        accessibility: 'Vollständig barrierefreie Einrichtung mit Aufzugzugang zu allen Etagen. Spezielle barrierefreie Parkplätze verfügbar.'
      },
      visitRequirements: {
        title: 'Besuchsanforderungen & Richtlinien',
        subtitle: 'Was du vor deinem ersten Besuch wissen solltest'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was Mitbringen',
      whatWeProvide: 'Was Wir Bereitstellen',
      bring: [
        'Gültiger Ausweis für Anmeldung',
        'Bequeme Sportkleidung',
        'Wasserflasche',
        'Handtuch',
        'Positive Einstellung!'
      ],
      provide: [
        'Grundlegende Trainingsausrüstung',
        'Matten und Trainingsraum',
        'Umkleideräume mit Schließfächern',
        'Duscheinrichtungen',
        'Professioneller Unterricht'
      ],
      specialInstructions: 'Spezielle Anweisungen',
      instructions: {
        age: 'Altersanforderungen: Mindestalter 16 für Erwachsenenkurse, Kinderkurse ab 6 Jahren verfügbar',
        health: 'Gesundheit & Sicherheit: Bitte informiere Instruktoren über Verletzungen oder Gesundheitszustände',
        equipment: 'Ausrüstungsverleih: Schienbeinschoner und Handschuhe anfangs bereitgestellt, Schüler sollten eigene Ausrüstung kaufen',
        payment: 'Zahlungsoptionen: Bar-, Karten- und Online-Zahlung akzeptiert'
      },
      cta: {
        title: 'Bereit zu Beginnen?',
        description: 'Mache den ersten Schritt zu deiner Kampfsport-Reise. Tritt der Sport Academy heute bei und entdecke dein Potenzial.'
      }
    },

    // Footer
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training in Südtirol',
      subtitle: 'Kämpfer schmieden seit 2017',
      copyright: '© 2025 Sport Academy. Alle Rechte vorbehalten.'
    }
  },

  it: {
    // Navigation
    nav: {
      home: 'Home',
      classes: 'Corsi',
      schedule: 'Orari',
      coaches: 'Istruttori',
      membership: 'Abbonamenti',
      contact: 'Contatti'
    },
    
    // Common terms
    common: {
      joinNow: 'Iscriviti Ora',
      viewClasses: 'Vedi Corsi',
      viewSchedule: 'Vedi Orari',
      viewMembership: 'Vedi Abbonamenti',
      contactUs: 'Contattaci',
      joinSportAcademy: 'Unisciti a Sport Academy',
      callNow: 'Chiama Ora',
      learnMore: 'Scopri di Più',
      allLevels: 'Tutti i Livelli',
      ages: 'Età',
      registerOnline: 'Registrati Online',
      bookClasses: 'Prenota Corsi',
      visitUs: 'Visitaci',
      dropInWelcome: 'Visite Spontanee Benvenute',
      instantConfirmation: 'Conferma Immediata',
      duringTrainingHours: 'Durante gli Orari di Allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM'
    },

    // Home page
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Forgiamo combattenti dal 2017'
      },
      welcome: {
        title: 'Benvenuti alla Sport Academy',
        description: 'Dal 2017, Sport Academy è la destinazione principale per l\'allenamento di arti marziali in Alto Adige. Offriamo istruzione di livello mondiale in MMA, Brazilian Jiu-Jitsu e Grappling nelle nostre due strutture all\'avanguardia.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Fondata nel 2017, sviluppiamo combattenti da oltre 8 anni',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Strutture convenienti a Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'Corsi completi per adulti e bambini di tutti i livelli',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come Un Combattente',
        subtitle: 'Padroneggia le arti del combattimento con istruzione professionale'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, grappling e combattimento a terra.'
      },
      bjj: {
        description: 'Padroneggia l\'arte gentile del Brazilian Jiu-Jitsu con tecniche complete di combattimento a terra.'
      },
      grappling: {
        description: 'Sviluppa abilità di wrestling e submission attraverso allenamento intensivo di grappling no-gi.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Tutto ciò di cui hai bisogno per iniziare il tuo viaggio nelle arti marziali'
      },
      quickLinks: {
        viewClasses: 'Vedi Corsi',
        viewClassesDesc: 'Esplora i nostri programmi di allenamento',
        checkSchedule: 'Controlla Orari',
        checkScheduleDesc: 'Trova l\'orario perfetto per il corso',
        membershipPlans: 'Piani di Abbonamento',
        membershipPlansDesc: 'Scegli il tuo pacchetto di allenamento',
        contactUs: 'Contattaci',
        contactUsDesc: 'Mettiti in contatto con il nostro team'
      }
    },

    // Disciplines - MMA
    disciplines: {
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina tecniche di striking, grappling e combattimento a terra. Allenati come un combattente professionista e sviluppa abilità complete nelle arti marziali.'
        },
        overview: {
          title: 'Cos\'è l\'MMA?',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono uno sport da combattimento a contatto pieno che permette l\'uso di un\'ampia varietà di tecniche di combattimento e abilità da una miscela di altri sport da combattimento in competizione.',
            'L\'MMA combina tecniche da boxe, wrestling, Brazilian Jiu-Jitsu, Muay Thai, kickboxing, karate, judo e altre discipline. È spesso chiamata "l\'arte marziale più completa" perché comprende tutte le distanze di combattimento.',
            'Alla Sport Academy, il nostro programma MMA è progettato per insegnarti queste diverse abilità in un ambiente sicuro e strutturato con istruzione esperta da combattenti esperti.'
          ]
        },
        techniques: {
          title: 'Tecniche e Abilità Chiave',
          subtitle: 'Padroneggia le tecniche fondamentali che rendono l\'MMA lo sport da combattimento più completo',
          striking: {
            title: 'Striking',
            items: [
              'Combinazioni di boxe',
              'Calci e ginocchiate Muay Thai',
              'Colpi di gomito',
              'Gioco di gambe e movimento',
              'Tecniche difensive'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche di takedown',
              'Sprawl e wrestling difensivo',
              'Lavoro in clinch',
              'Controllo a terra',
              'Wrestling in gabbia'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Submission Brazilian Jiu-Jitsu',
              'Ground and pound',
              'Lavoro di guardia',
              'Fughe e ribaltamenti',
              'Controllo posizionale'
            ]
          }
        },
        history: {
          title: 'Storia dell\'MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche, con forme precoci di sport da combattimento misti che risalgono all\'antica Grecia e allo sport olimpico del Pancrazio, che combinava wrestling e boxe.',
            'L\'MMA moderna iniziò a prendere forma nei primi anni \'90 con la creazione dell\'Ultimate Fighting Championship (UFC) nel 1993. I primi tornei erano progettati per determinare quale arte marziale fosse più efficace in situazioni di combattimento reali.',
            'Nel tempo, i combattenti si resero conto che per avere successo dovevano essere versatili in tutti gli aspetti del combattimento. Questo portò all\'evoluzione dell\'MMA nello sport sofisticato che conosciamo oggi, con combattenti che si allenano in più discipline.',
            'Oggi, l\'MMA è uno degli sport in più rapida crescita al mondo, con organizzazioni professionali come UFC, Bellator e ONE Championship che mostrano il più alto livello di competizione nelle arti marziali miste.'
          ],
          milestones: {
            title: 'Tappe Fondamentali',
            events: [
              { year: '648 a.C.', description: 'Pancrazio introdotto nei Giochi Olimpici' },
              { year: '1993', description: 'UFC 1 - L\'inizio dell\'MMA moderna' },
              { year: '2001', description: 'Regole Unificate dell\'MMA stabilite' },
              { year: '2016', description: 'MMA legalizzata a New York, completando l\'espansione USA' }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento MMA',
          subtitle: 'Trasforma il tuo corpo, mente e spirito attraverso l\'allenamento completo nelle arti marziali',
          items: [
            {
              icon: '💪',
              title: 'Fitness Fisico',
              description: 'Condizionamento completo del corpo, forza e salute cardiovascolare'
            },
            {
              icon: '🧠',
              title: 'Forza Mentale',
              description: 'Sviluppa disciplina, concentrazione e resilienza mentale'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Impara abilità pratiche di autodifesa per situazioni reali'
            },
            {
              icon: '🤝',
              title: 'Comunità',
              description: 'Unisciti a una comunità solidale di atleti dedicati'
            }
          ]
        },
        schedule: {
          title: 'Programma di Allenamento MMA',
          subtitle: 'Unisciti ai nostri corsi MMA strutturati progettati per tutti i livelli di abilità'
        },
        legends: {
          title: 'Combattenti MMA Leggendari',
          subtitle: 'Impara dalle tecniche e filosofie delle leggende MMA',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'Ex Campione UFC dei Pesi Medi',
              description: 'Conosciuto per la sua precisione e creatività negli strike'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'Campione PRIDE dei Pesi Massimi',
              description: 'Leggendario per la sua calma e abilità tecnica'
            },
            {
              name: 'Jon Jones',
              title: 'Ex Campione UFC dei Pesi Mediomassimi',
              description: 'Conosciuto per la sua portata, creatività e base di wrestling'
            }
          ]
        },
        cta: {
          title: 'Inizia il Tuo Viaggio MMA',
          description: 'Allenati con istruttori esperti e sviluppa abilità complete nelle arti marziali in un ambiente sicuro e solidale.',
          joinButton: 'Unisciti ai Corsi MMA',
          backButton: 'Torna ad Allenati Come Un Combattente'
        }
      },

      // BJJ
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        breadcrumb: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'L\'arte gentile che insegna leva, tecnica e strategia sulla forza bruta. Padroneggia il gioco a terra e sviluppa fiducia incrollabile.'
        },
        overview: {
          title: 'L\'Arte Gentile',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione. Enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte usando leva, tecnica e tempismo.',
            'Il BJJ promuove il concetto che la maggior parte del vantaggio di un avversario più grande e forte deriva da portata superiore e colpi più potenti, entrambi neutralizzati quando si lotta a terra.',
            'Alla Sport Academy, insegniamo Brazilian Jiu-Jitsu tradizionale con allenamento sia in gi che no-gi, concentrandoci su tecniche fondamentali, applicazioni di autodifesa e preparazione per competizioni sportive.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia le tecniche essenziali che formano le fondamenta del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Fondamentali della guardia chiusa',
              'Variazioni della guardia aperta',
              'Tecniche di mezza guardia',
              'Guardia spider e De La Riva',
              'Mantenimento e recupero della guardia'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Leve al braccio (Juji-gatame)',
              'Strangolamenti triangolari',
              'Strangolamenti da dietro',
              'Kimura e Americana',
              'Leve alle gambe e ai piedi'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Montata e controllo da dietro',
              'Variazioni del controllo laterale',
              'Ginocchio sulla pancia',
              'Transizioni e spazzate',
              'Fughe e ribaltamenti'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema di Classificazione Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema tradizionale di cinture del Brazilian Jiu-Jitsu',
          belts: [
            { name: 'Cintura Bianca', color: 'gray', description: 'Livello principiante - Imparare i fondamentali' },
            { name: 'Cintura Blu', color: 'blue', description: 'Intermedio - Sviluppare la tecnica' },
            { name: 'Cintura Viola', color: 'purple', description: 'Avanzato - Raffinare le abilità' },
            { name: 'Cintura Marrone', color: 'amber', description: 'Esperto - Insegnare e guidare' },
            { name: 'Cintura Nera', color: 'gray', description: 'Maestro - Dedizione di una vita' }
          ],
          philosophy: {
            title: 'Filosofia delle Promozioni',
            description: 'Alla Sport Academy, le promozioni di cintura si basano su competenza tecnica, comprensione dei principi, capacità di applicare tecniche sotto pressione e dimostrazione dei valori del Brazilian Jiu-Jitsu: rispetto, umiltà e apprendimento continuo.'
          }
        },
        history: {
          title: 'Storia e Origini',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu ha origine dal jujutsu e judo giapponesi tradizionali, portati in Brasile da Mitsuyo Maeda all\'inizio del XX secolo. Maeda insegnò alla famiglia Gracie, che adattò e raffinò le tecniche per creare quello che ora conosciamo come Brazilian Jiu-Jitsu.',
            'La famiglia Gracie, in particolare Helio Gracie, modificò le tecniche per fare più affidamento su leva e tempismo piuttosto che forza e velocità, rendendole efficaci per praticanti più piccoli contro avversari più grandi.',
            'Il BJJ ottenne riconoscimento mondiale attraverso i primi tornei UFC, dove Royce Gracie dimostrò l\'efficacia del combattimento a terra contro praticanti di altre arti marziali.',
            'Oggi, il BJJ è praticato in tutto il mondo sia come arte marziale per l\'autodifesa che come sport competitivo, con tornei importanti come i Campionati Mondiali IBJJF che attirano migliaia di competitori.'
          ],
          keyFigures: {
            title: 'Figure Chiave',
            people: [
              { name: 'Mitsuyo Maeda', description: 'Judoka giapponese che portò il jujutsu in Brasile' },
              { name: 'Helio Gracie', description: 'Fondatore del Gracie Jiu-Jitsu' },
              { name: 'Carlos Gracie', description: 'Primo Gracie a imparare da Maeda' },
              { name: 'Royce Gracie', description: 'Pioniere UFC che dimostrò l\'efficacia del BJJ' }
            ]
          }
        },
        schedule: {
          title: 'Programma di Allenamento BJJ',
          subtitle: 'Corsi regolari per tutti i livelli di abilità, da principiante ad avanzato'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Scopri l\'arte gentile che costruisce carattere, fiducia e tecnica indistruttibile.',
          joinButton: 'Unisciti ai Corsi BJJ',
          backButton: 'Torna ad Allenati Come Un Combattente'
        }
      },

      // Grappling
      grappling: {
        title: 'Grappling',
        breadcrumb: 'Grappling',
        hero: {
          subtitle: 'Padroneggia l\'arte del controllo, takedown e sottomissioni. Sviluppa potenza esplosiva, precisione tecnica e forza mentale attraverso allenamento intensivo di grappling.'
        },
        overview: {
          title: 'Cos\'è il Grappling?',
          paragraphs: [
            'Il Grappling è una forma di combattimento che coinvolge tecniche come combattimento in clinch, proiezioni, takedown, leve articolari, immobilizzazioni e prese di sottomissione. Comprende varie arti marziali inclusi wrestling, Brazilian Jiu-Jitsu, judo e sambo.',
            'Il nostro programma di grappling si concentra su tecniche no-gi, enfatizzando velocità, atletismo e adattabilità. Senza il gi tradizionale, i grappler devono fare più affidamento su underhook, overhook e controllo del corpo piuttosto che prese sui vestiti.',
            'Il Grappling sviluppa forza funzionale incredibile, resistenza cardiovascolare e resilienza mentale. È un componente essenziale per i combattenti MMA e un\'eccellente arte marziale autonoma per autodifesa e competizione.'
          ]
        },
        techniques: {
          title: 'Tecniche di Grappling Fondamentali',
          subtitle: 'Padroneggia le abilità essenziali che rendono il grappling un\'arte da combattimento così efficace',
          takedowns: {
            title: 'Takedown',
            items: [
              'Takedown a doppia gamba',
              'Attacchi a gamba singola',
              'Proiezioni d\'anca e lanci',
              'Sprawl e wrestling difensivo',
              'Lavoro in clinch e dirty boxing'
            ]
          },
          control: {
            title: 'Controllo',
            items: [
              'Controllo posizione superiore',
              'Underhook e overhook',
              'Body lock e bear hug',
              'Pressione e distribuzione del peso',
              'Transizioni e scramble'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Strangolamenti da dietro',
              'Strangolamenti guillotine',
              'Leve al braccio e kimura',
              'Leve alle gambe e caviglie',
              'Leve al collo e punti di pressione'
            ]
          }
        },
        methodology: {
          title: 'Metodologia di Allenamento',
          subtitle: 'Il nostro approccio sistematico per sviluppare grappler completi',
          technical: {
            title: 'Sviluppo Tecnico',
            methods: [
              {
                title: 'Drilling Fondamentale',
                description: 'Pratica ripetitiva di movimenti e posizioni di base'
              },
              {
                title: 'Sparring Posizionale',
                description: 'Pratica focalizzata da posizioni e scenari specifici'
              },
              {
                title: 'Flow Rolling',
                description: 'Pratica di movimento continuo a intensità controllata'
              }
            ]
          },
          conditioning: {
            title: 'Condizionamento Fisico',
            methods: [
              {
                title: 'Forza Funzionale',
                description: 'Costruire forza specifica per i movimenti di grappling'
              },
              {
                title: 'Resistenza Cardiovascolare',
                description: 'Allenamento ad alta intensità per preparazione competitiva'
              },
              {
                title: 'Flessibilità e Mobilità',
                description: 'Prevenzione infortuni e miglioramento del range di movimento'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici del Grappling',
          subtitle: 'Scopri come l\'allenamento di grappling trasforma le tue capacità fisiche e mentali',
          items: [
            {
              icon: '🔥',
              title: 'Brucia Grassi',
              description: 'Allenamento intenso per tutto il corpo che brucia calorie efficacemente'
            },
            {
              icon: '💪',
              title: 'Forza Funzionale',
              description: 'Costruisci forza e potenza applicabili nel mondo reale'
            },
            {
              icon: '🧠',
              title: 'Risoluzione Problemi',
              description: 'Sviluppa pensiero tattico e adattabilità'
            },
            {
              icon: '🏆',
              title: 'Pronto per Competizioni',
              description: 'Preparati per competizioni di grappling e MMA'
            }
          ]
        },
        schedule: {
          title: 'Programma Grappling',
          subtitle: 'Sessioni di grappling ad alta intensità per tutti i livelli di esperienza'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Impara dalle tecniche e filosofie dei maestri del grappling',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'Campione ADCC e Specialista No-Gi',
              description: 'Grappler di sottomissione dominante dell\'era moderna'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Campione ADCC 5 volte',
              description: 'Maestro della butterfly guard e controllo da dietro'
            },
            {
              name: 'Khabib Nurmagomedov',
              title: 'Ex Campione UFC dei Pesi Leggeri',
              description: 'Combattente MMA imbattuto con wrestling dominante'
            }
          ]
        },
        cta: {
          title: 'Padroneggia l\'Arte del Controllo',
          description: 'Sviluppa potenza esplosiva, precisione tecnica e forza mentale indistruttibile attraverso il nostro programma di grappling.',
          joinButton: 'Unisciti ai Corsi di Grappling',
          backButton: 'Torna ad Allenati Come Un Combattente'
        }
      }
    },

    // Classes page
    classes: {
      hero: {
        title: 'I Nostri Corsi',
        description: 'Programmi di allenamento professionali progettati per tutti i livelli di abilità. Dai principianti che muovono i primi passi agli atleti avanzati che si preparano per le competizioni, abbiamo il corso perfetto per il tuo viaggio nelle arti marziali.'
      },
      mma: {
        title: 'Corsi MMA',
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, grappling e combattimento a terra. Perfetto per chi vuole sviluppare abilità di combattimento complete.',
        features: [
          'Tecniche di striking',
          'Fondamentali di grappling',
          'Combattimento a terra',
          'Condizionamento',
          'Sessioni di sparring'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Padroneggia l\'arte gentile del BJJ con il nostro programma completo di combattimento a terra. Impara leva, tecnica e strategia sulla forza bruta.',
        features: [
          'Tecniche di guardia',
          'Sottomissioni',
          'Fughe',
          'Controllo posizionale',
          'Preparazione competizioni'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Sviluppa le tue abilità di wrestling e sottomissione nelle nostre sessioni intensive di grappling. Focus su takedown, controllo e sottomissioni.',
        features: [
          'Tecniche di takedown',
          'Fondamentali di wrestling',
          'Grappling di sottomissione',
          'Allenamento no-gi',
          'Preparazione competizioni'
        ]
      },
      kidsBjj: {
        title: 'BJJ per Bambini',
        description: 'Corsi di Brazilian Jiu-Jitsu sicuri e divertenti progettati specificamente per giovani atleti. Costruendo fiducia, disciplina e rispetto.',
        features: [
          'Tecniche appropriate per l\'età',
          'Sviluppo del carattere',
          'Abilità anti-bullismo',
          'Fitness fisico',
          'Giochi e esercizi divertenti'
        ]
      },
      kidsGrappling: {
        title: 'Grappling per Bambini',
        description: 'Costruisci fiducia, disciplina e fitness fisico attraverso programmi di grappling giovanile. Enfasi su sicurezza e sviluppo delle abilità.',
        features: [
          'Mosse di wrestling di base',
          'Esercizi di coordinazione',
          'Costruzione della forza',
          'Abilità di lavoro di squadra',
          'Ambiente di allenamento sicuro'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Tecniche di wrestling tradizionali e condizionamento per atleti competitivi. Costruisci forza, resistenza e competenza tecnica.',
        features: [
          'Wrestling olimpico',
          'Tecniche freestyle',
          'Stile greco-romano',
          'Programmi di condizionamento',
          'Allenamento competitivo'
        ]
      },
      whatYouLearn: 'Cosa Imparerai:',
      cta: {
        title: 'Pronto a Iniziare l\'Allenamento?',
        description: 'Unisciti alla Sport Academy oggi e inizia il tuo viaggio nelle arti marziali con istruzione esperta e una comunità solidale.'
      }
    },

    // Schedule page
    schedule: {
      hero: {
        title: 'Programma Settimanale',
        description: 'Programma di Allenamento Attuale - Trova l\'orario perfetto che si adatta al tuo stile di vita. Tutti i corsi sono progettati per accogliere diversi livelli di abilità e gruppi di età.'
      },
      campoTures: 'Sede Campo Tures',
      brunico: 'Sede Brunico',
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
      membershipBenefits: 'Benefici dell\'Abbonamento',
      guidelines: {
        arrive: 'Arriva 10 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'Gi richiesto per i corsi BJJ',
        noGi: 'Abbigliamento no-gi per MMA, Grappling e Striking'
      },
      benefits: {
        allClasses: 'Accesso a tutti i corsi programmati',
        openMat: 'Sessioni di allenamento libero incluse',
        bothLocations: 'Entrambe le sedi disponibili',
        personalTraining: 'Allenamento personale disponibile'
      },
      cta: {
        title: 'Prenota il Tuo Posto',
        description: 'I corsi si riempiono velocemente. Assicurati il tuo abbonamento oggi e inizia ad allenarti con i migliori in Alto Adige.'
      }
    },

    // Coaches page
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Impara da professionisti esperti che sono appassionati di arti marziali e dedicati ad aiutarti a raggiungere i tuoi obiettivi. Il nostro team di istruttori porta anni di esperienza competitiva e metodi di insegnamento comprovati.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Istruttore Capo e Fondatore',
        background: 'Matteo ha fondato Sport Academy nel 2017 con la visione di portare allenamento di arti marziali di livello mondiale in Alto Adige. Con oltre 15 anni di esperienza in MMA e Brazilian Jiu-Jitsu, ha gareggiato a livello nazionale e internazionale.',
        specializations: [
          'Arti Marziali Miste (MMA)',
          'Brazilian Jiu-Jitsu (Cintura Marrone)',
          'Preparazione Competizioni',
          'Programmi di Sviluppo Giovanile'
        ],
        achievements: [
          'Campione MMA Regionale (2019)',
          'Medagliato Campionato Europeo BJJ',
          'Istruttore Certificato Arti Marziali Giovanili'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Grappling e Wrestling',
        background: 'Christian porta una ricchezza di esperienza in wrestling e grappling alla Sport Academy. Il suo approccio tecnico e attenzione ai dettagli hanno aiutato innumerevoli studenti a migliorare il loro gioco a terra e le prestazioni competitive.',
        specializations: [
          'Wrestling (Freestyle e Greco-Romano)',
          'Grappling di Sottomissione',
          'Tecniche di Takedown',
          'Forza e Condizionamento'
        ],
        achievements: [
          'Finalista Campionato Nazionale Wrestling',
          'Competitore ADCC European Trials',
          'Istruttore Wrestling Certificato (Livello 2)'
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
          description: 'Ogni studente è unico. Adattiamo la nostra istruzione per soddisfare gli obiettivi individuali, che siano ricreativi o competitivi.'
        },
        respect: {
          title: 'Rispetto e Disciplina',
          description: 'Le arti marziali insegnano più delle tecniche di combattimento. Enfatizziamo rispetto, disciplina e sviluppo del carattere.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Sperimenta istruzione di livello mondiale e attenzione personalizzata. Inizia il tuo viaggio con il team di istruttori esperti della Sport Academy.'
      }
    },

    // Membership page
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il piano di abbonamento che si adatta ai tuoi obiettivi di allenamento e al tuo programma. Tutti gli abbonamenti includono accesso a entrambe le sedi e a tutti i corsi programmati. Nessuna tariffa nascosta, nessun contratto a lungo termine.'
      },
      mainSeason: {
        title: 'Stagione Principale',
        period: 'Settembre - Giugno',
        duration: '10 mesi di allenamento intensivo',
        mostPopular: 'Più Popolare'
      },
      summerSeason: {
        title: 'Stagione Estiva',
        period: 'Giugno - Settembre',
        duration: '3 mesi di allenamento estivo'
      },
      bjjOnly: {
        title: 'Abbonamento Solo Jiu Jitsu',
        subtitle: 'Allenamento dedicato Brazilian Jiu-Jitsu per la stagione estiva',
        program: 'Programma BJJ Estivo',
        description: '3 mesi di allenamento BJJ focalizzato'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa È Incluso:',
      mainIncludes: [
        'Accesso illimitato a tutti i corsi',
        'Entrambe le sedi Campo Tures e Brunico',
        'Sessioni di allenamento libero',
        'Preparazione competizioni',
        'Sconti allenamento personale'
      ],
      summerIncludes: [
        'Accesso ai corsi del programma estivo',
        'Entrambe le sedi disponibili',
        'Sessioni di allenamento aperto',
        'Programma estivo flessibile',
        'Opportunità di allenamento all\'aperto'
      ],
      bjjIncludes: [
        'Accesso solo a tutti i corsi BJJ',
        'Entrambe le sedi Campo Tures e Brunico',
        'Allenamento Gi e No-Gi',
        'Focus sul perfezionamento tecnico',
        'Sessioni di allenamento libero specifiche BJJ'
      ],
      selectMainSeason: 'Seleziona Stagione Principale',
      selectSummerSeason: 'Seleziona Stagione Estiva',
      selectBjjOnly: 'Seleziona Solo BJJ',
      additionalServices: {
        title: 'Servizi Aggiuntivi',
        description: 'Migliora il tuo allenamento con i nostri servizi e programmi specializzati'
      },
      personalTraining: {
        title: 'Allenamento Personale',
        description: 'Sessioni di coaching uno-a-uno personalizzate per i tuoi obiettivi specifici',
        price: '€50/sessione',
        duration: '60 minuti'
      },
      competitionPrep: {
        title: 'Preparazione Competizioni',
        description: 'Allenamento specializzato per tornei e competizioni imminenti',
        price: '€80/sessione',
        duration: '90 minuti'
      },
      seminars: {
        title: 'Seminari e Workshop',
        description: 'Eventi speciali con istruttori ospiti e tecniche avanzate',
        price: '€30/evento',
        duration: '3-4 ore'
      },
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra le stagioni?',
          answer: 'La Stagione Principale (Settembre-Giugno) offre il nostro programma completo con corsi regolari e preparazione competizioni. La Stagione Estiva (Giugno-Settembre) ha un programma più rilassato perfetto per mantenere la forma durante i mesi di vacanza.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono accesso a entrambe le nostre strutture di Campo Tures e Brunico. Puoi partecipare ai corsi in entrambe le sedi in base al tuo programma.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo una lezione di prova gratuita per nuovi studenti. Contattaci per programmare la tua prova e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Che attrezzatura mi serve?',
          answer: 'Per i corsi BJJ, avrai bisogno di un gi (uniforme). Per MMA e grappling, abbigliamento atletico comodo è sufficiente. Raccomandiamo di portare una bottiglia d\'acqua e un asciugamano a tutti i corsi.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio Oggi',
        description: 'Unisciti alla Sport Academy e diventa parte della comunità di arti marziali premier dell\'Alto Adige. La tua trasformazione inizia qui.'
      }
    },

    // Contact page
    contact: {
      hero: {
        title: 'Mettiti in Contatto',
        description: 'Visitaci nelle nostre due sedi convenienti in Alto Adige. Siamo qui per aiutarti a iniziare il tuo viaggio nelle arti marziali e rispondere a qualsiasi domanda sui nostri programmi.'
      },
      getInTouch: {
        title: 'Informazioni di Contatto',
        subtitle: 'Pronto a iniziare l\'allenamento? Mettiti in contatto con noi oggi'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      address: 'Indirizzo',
      trainingSchedule: 'Programma di Allenamento',
      landmarkDirections: 'Punti di Riferimento e Indicazioni',
      availableClasses: 'Corsi Disponibili',
      campoTures: {
        address: 'Via Hugo von Taufers 8\nCampo Tures, Alto Adige\nItalia',
        directions: 'Situato nel centro di Campo Tures, facilmente accessibile dalla strada principale. La palestra è vicina al centro città, vicino a negozi e ristoranti locali.',
        classes: [
          'Corsi MMA',
          'Brazilian Jiu-Jitsu',
          'Grappling',
          'BJJ Bambini'
        ]
      },
      brunico: {
        address: 'Via Teresa Riedl 3\n39031 Brunico BZ\nAlto Adige, Italia',
        directions: 'Convenientemente situato vicino alla stazione ferroviaria di Brunico. La struttura è facilmente accessibile in auto o con i mezzi pubblici, con buoni collegamenti in tutta la regione.',
        classes: [
          'Brazilian Jiu-Jitsu',
          'Wrestling',
          'Grappling Bambini',
          'Allenamento Libero'
        ]
      },
      locations: {
        title: 'Le Nostre Sedi e Indicazioni',
        subtitle: 'Due strutture di allenamento convenienti in Alto Adige'
      },
      parking: {
        title: 'Parcheggio e Accessibilità',
        subtitle: 'Accesso facile e parcheggio conveniente in entrambe le sedi'
      },
      parking: 'Parcheggio',
      publicTransport: 'Trasporti Pubblici',
      accessibility: 'Accessibilità',
      campoTures: {
        parking: 'Parcheggio gratuito disponibile in Via Hugo von Taufers e strade circostanti. Posti auto aggiuntivi disponibili nel centro città.',
        transport: 'Servizio autobus regolare collega Campo Tures a Brunico e aree circostanti. La palestra è a 2 minuti a piedi dalla fermata principale dell\'autobus.',
        accessibility: 'Accesso al piano terra con porte d\'ingresso larghe. Spogliatoi e aree di allenamento accessibili disponibili.'
      },
      brunico: {
        parking: 'Parcheggio disponibile in Via Teresa Riedl e nelle aree di parcheggio pubblico vicine. Parcheggio a breve termine disponibile direttamente davanti alla struttura.',
        transport: 'Solo 5 minuti a piedi dalla stazione ferroviaria di Brunico. Eccellenti collegamenti per Bolzano, Innsbruck e altre città principali della regione.',
        accessibility: 'Struttura completamente accessibile con accesso in ascensore a tutti i piani. Posti auto accessibili dedicati disponibili.'
      },
      visitRequirements: {
        title: 'Requisiti di Visita e Politiche',
        subtitle: 'Cosa sapere prima della tua prima visita'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      whatWeProvide: 'Cosa Forniamo',
      bring: [
        'Documento d\'identità valido per registrazione',
        'Abbigliamento atletico comodo',
        'Bottiglia d\'acqua',
        'Asciugamano',
        'Atteggiamento positivo!'
      ],
      provide: [
        'Attrezzatura di allenamento di base',
        'Tappetini e spazio di allenamento',
        'Spogliatoi con armadietti',
        'Strutture doccia',
        'Istruzione professionale'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Requisiti di Età: Età minima 16 per corsi adulti, corsi bambini disponibili dai 6 anni',
        health: 'Salute e Sicurezza: Si prega di informare gli istruttori di eventuali infortuni o condizioni di salute',
        equipment: 'Noleggio Attrezzatura: Parastinchi e guanti forniti inizialmente, gli studenti dovrebbero acquistare la propria attrezzatura',
        payment: 'Opzioni di Pagamento: Contanti, carta e pagamento online accettati'
      },
      cta: {
        title: 'Pronto a Iniziare?',
        description: 'Fai il primo passo verso il tuo viaggio nelle arti marziali. Unisciti alla Sport Academy oggi e scopri il tuo potenziale.'
      }
    },

    // Footer
    footer: {
      tagline: 'Allenamento Elite MMA, BJJ e Grappling in Alto Adige',
      subtitle: 'Forgiamo combattenti dal 2017',
      copyright: '© 2025 Sport Academy. Tutti i diritti riservati.'
    }
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
            return key; // Return key if not found in fallback
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

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};