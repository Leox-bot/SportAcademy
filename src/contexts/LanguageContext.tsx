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
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Elite MMA, Brazilian Jiu-Jitsu, and Grappling training in Campo Tures and Brunico. Professional coaching by Matteo Parolin and Christian Zecchetto.'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'We are a premier martial arts academy offering world-class training in MMA, Brazilian Jiu-Jitsu, and Grappling. Our experienced coaches provide personalized instruction for all skill levels in our state-of-the-art facilities.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Providing top-tier martial arts training',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures and Brunico facilities',
        trainingPrograms: 'Training Programs',
        programsDescription: 'Comprehensive martial arts curriculum',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Choose your discipline and start your martial arts journey'
      },
      mma: {
        description: 'Mixed Martial Arts combines striking, grappling, and ground fighting techniques for the ultimate combat sport experience.'
      },
      bjj: {
        description: 'Brazilian Jiu-Jitsu focuses on ground fighting, submissions, and leverage-based techniques that allow smaller practitioners to overcome larger opponents.'
      },
      grappling: {
        description: 'No-Gi Grappling emphasizes wrestling, takedowns, and submission techniques without the traditional gi uniform.'
      },
      getStarted: {
        title: 'Get Started Today',
        subtitle: 'Everything you need to begin your martial arts journey'
      },
      quickLinks: {
        viewClasses: 'View Classes',
        viewClassesDesc: 'Explore our training programs',
        checkSchedule: 'Check Schedule',
        checkScheduleDesc: 'Find class times and locations',
        membershipPlans: 'Membership Plans',
        membershipPlansDesc: 'Choose your training package',
        contactUs: 'Contact Us',
        contactUsDesc: 'Get in touch with our team'
      }
    },
    classes: {
      hero: {
        title: 'Our Classes',
        description: 'Discover our comprehensive range of martial arts programs designed for all skill levels. From beginner-friendly introductions to advanced competition training.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'The ultimate combat sport combining striking, grappling, and ground fighting. Learn techniques from boxing, kickboxing, wrestling, and Brazilian Jiu-Jitsu in one comprehensive program.',
        features: [
          'Stand-up striking techniques',
          'Takedowns and wrestling',
          'Ground fighting and submissions',
          'Cage work and clinch fighting',
          'Cardio and strength conditioning'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'The gentle art that teaches leverage, timing, and technique over strength. Master the ground game with this highly effective martial art that emphasizes submissions and positional control.',
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
        description: 'Fast-paced grappling without the traditional gi. Focus on wrestling, takedowns, and submissions using grips on the body and clothing rather than the gi.',
        features: [
          'Wrestling techniques',
          'Leg locks and submissions',
          'Scrambles and transitions',
          'Takedown defense',
          'Competition grappling'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Age-appropriate Brazilian Jiu-Jitsu training that builds confidence, discipline, and physical fitness while teaching valuable self-defense skills.',
        features: [
          'Basic BJJ fundamentals',
          'Character development',
          'Anti-bullying techniques',
          'Physical fitness',
          'Social skills and teamwork'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Introduction to wrestling and grappling techniques designed specifically for young athletes. Builds strength, coordination, and mental toughness.',
        features: [
          'Wrestling fundamentals',
          'Coordination drills',
          'Strength building',
          'Mental toughness',
          'Competition preparation'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling techniques focusing on takedowns, control, and conditioning. Essential skills for MMA and grappling.',
        features: [
          'Single and double leg takedowns',
          'Sprawls and takedown defense',
          'Top control and pins',
          'Conditioning and drilling',
          'Competition wrestling'
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
        description: 'Find the perfect class time that fits your schedule. We offer training sessions throughout the week at both our Campo Tures and Brunico locations.'
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
        noGi: 'Grappling classes are no-gi (shorts and rash guard)'
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
        description: 'Book your first session and experience our world-class training.'
      }
    },
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Meet our experienced and dedicated coaching team. Our instructors bring years of competition experience and teaching expertise to help you reach your martial arts goals.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Founder & Head Coach',
        background: 'With over 8 years of dedicated training and teaching experience, Matteo founded Sport Academy to share his passion for martial arts. His comprehensive approach combines technical precision with practical application, ensuring students develop both skill and confidence.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Mixed Martial Arts',
          'Grappling',
          'Competition Coaching'
        ],
        achievements: [
          'Founder of Sport Academy',
          '8+ years of training experience',
          'Certified BJJ instructor',
          'Multiple competition medals',
          'Expert in youth development programs'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings a wealth of combat sports experience to Sport Academy. His dynamic teaching style and competitive background make him an invaluable asset to our coaching team.',
        specializations: [
          'Mixed Martial Arts',
          'Brazilian Jiu-Jitsu',
          'Striking'
        ],
        achievements: [
          'Multiple competition medals',
          'Multiple MMA matches',
          'Certified martial arts instructor',
          'Expert in striking techniques'
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
        description: 'Experience world-class coaching and take your martial arts skills to the next level.'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the membership plan that fits your training goals and schedule. All memberships include access to our complete range of classes and facilities.'
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
        subtitle: 'Dedicated Brazilian Jiu-Jitsu training program',
        program: 'BJJ Focused Training',
        description: 'Access to all BJJ classes only'
      },
      adults: 'Adults',
      students: 'Students (with valid ID)',
      month: 'month',
      whatsIncluded: 'What\'s Included',
      mainIncludes: [
        'Unlimited access to all classes',
        'Both Campo Tures and Brunico locations',
        'Open mat sessions',
        'Beginner-friendly instruction',
        'Competition team access'
      ],
      summerIncludes: [
        'All summer classes included',
        'Both locations access',
        'Flexible scheduling',
        'Perfect for beginners'
      ],
      bjjIncludes: [
        'All BJJ classes (Gi and No-Gi)',
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
          answer: 'Our main season runs September through June with our full curriculum. Summer season is a shorter, more relaxed program perfect for beginners or maintaining skills during the break.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to both our Campo Tures and Brunico facilities. You can attend classes at either location.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Yes, we offer trial classes for new students. Contact us to schedule your first session and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For beginners, just comfortable workout clothes. We provide basic equipment for trial classes. As you progress, you\'ll need a gi for BJJ classes and appropriate gear for other disciplines.'
        }
      },
      cta: {
        title: 'Start Your Journey Today',
        description: 'Join our community of dedicated martial artists and unlock your potential.'
      }
    },
    contact: {
      hero: {
        title: 'Contact Us',
        description: 'Get in touch with our team to start your martial arts journey. We\'re here to answer your questions and help you find the perfect training program.'
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
        subtitle: 'Two convenient locations to serve you better'
      },
      parkingAccessibility: {
        title: 'Parking & Accessibility',
        subtitle: 'Easy access and convenient parking at both locations'
      },
      parking: 'Parking',
      publicTransport: 'Public Transport',
      accessibility: 'Accessibility',
      campoTures: {
        parking: 'Free parking available directly in front of the facility. Additional street parking on Via Hugo von Taufers.',
        transport: 'Bus stop "Campo Tures Centro" is 2 minutes walk. Regular connections to Brunico and surrounding areas.',
        accessibility: 'Ground floor facility with wheelchair accessible entrance and restrooms.'
      },
      brunico: {
        parking: 'Free parking in the facility courtyard. Additional public parking on Via Maria Teresa Riedl.',
        transport: 'Central location near Brunico train station. Multiple bus lines stop within 5 minutes walk.',
        accessibility: 'Elevator access to training floor. Accessible restrooms and changing areas available.'
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
        'Training mats and equipment',
        'Changing rooms and showers',
        'Basic protective gear for beginners',
        'Expert instruction and guidance'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Age Requirements: Kids classes 6-16, Adult classes 16+',
        health: 'Health: Please inform instructors of any injuries or health conditions',
        equipment: 'Equipment: Gloves and shin guards provided, students should buy their own',
        payment: 'Payment: Only card and cash accepted'
      },
      cta: {
        title: 'Ready to Start Training?',
        description: 'Contact us today to schedule your first class and begin your martial arts journey.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Master the gentle art of leverage, timing, and technique over strength'
        },
        overview: {
          title: 'The Gentle Art',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent through proper technique, leverage, and timing.',
            'At Sport Academy, our BJJ program is designed to teach students the fundamental principles of this highly effective martial art. Whether you\'re interested in self-defense, competition, or simply getting in great shape, our comprehensive curriculum will help you achieve your goals.',
            'Our classes emphasize both gi and no-gi training, ensuring students develop a well-rounded skill set that translates to real-world applications and various competition formats.'
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
              'Back control and hooks',
              'Knee on belly',
              'Transitional movements'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the traditional ranking system of Brazilian Jiu-Jitsu',
          belts: [
            { name: 'White Belt', color: 'gray', description: 'Beginning level' },
            { name: 'Blue Belt', color: 'blue', description: 'Intermediate level' },
            { name: 'Purple Belt', color: 'purple', description: 'Advanced level' },
            { name: 'Brown Belt', color: 'amber', description: 'Expert level' },
            { name: 'Black Belt', color: 'gray', description: 'Master level' }
          ],
          philosophy: {
            title: 'Belt Philosophy',
            description: 'Each belt represents not just technical knowledge, but also character development, perseverance, and dedication to the art. Progression is based on skill demonstration, time in grade, and embodiment of BJJ values.'
          }
        },
        history: {
          title: 'History & Lineage',
          paragraphs: [
            'Brazilian Jiu-Jitsu evolved from traditional Japanese jujutsu and judo, brought to Brazil by Mitsuyo Maeda in the early 20th century. The Gracie family, particularly Helio Gracie, adapted these techniques to create a more efficient system for smaller practitioners.',
            'The art gained worldwide recognition through the early UFC tournaments, where Royce Gracie demonstrated the effectiveness of BJJ against larger opponents from different martial arts backgrounds.',
            'Today, BJJ continues to evolve as both a martial art and sport, with practitioners constantly refining techniques and developing new strategies for both self-defense and competition.'
          ],
          keyFigures: {
            title: 'Key Figures',
            people: [
              { name: 'Mitsuyo Maeda', description: 'Japanese judoka who brought jujutsu to Brazil' },
              { name: 'Helio Gracie', description: 'Founder of Gracie Jiu-Jitsu and BJJ pioneer' },
              { name: 'Carlos Gracie', description: 'First Gracie to learn from Maeda, established the Gracie Academy' }
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
          joinButton: 'Join BJJ Classes',
          backButton: 'Back to Classes'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining striking, grappling, and ground fighting'
        },
        overview: {
          title: 'The Ultimate Fighting System',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, kickboxing, wrestling, Brazilian Jiu-Jitsu, and other martial arts. It represents the evolution of combat sports, where fighters must be proficient in all ranges of fighting.',
            'Our MMA program at Sport Academy provides comprehensive training in all aspects of mixed martial arts. Students learn to seamlessly transition between striking and grappling, developing the skills needed for both self-defense and competition.',
            'Whether you\'re interested in amateur competition or simply want to experience the most complete martial arts training available, our MMA classes will challenge and develop you as a complete fighter.'
          ]
        },
        techniques: {
          title: 'Core Disciplines',
          subtitle: 'Master all ranges of combat in our comprehensive MMA program',
          striking: {
            title: 'Striking',
            items: [
              'Boxing fundamentals',
              'Kickboxing and Muay Thai',
              'Footwork and head movement',
              'Combinations and counters'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedowns and throws',
              'Takedown defense',
              'Clinch work',
              'Ground control'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Brazilian Jiu-Jitsu',
              'Ground and pound',
              'Submission defense',
              'Transitions and escapes'
            ]
          }
        },
        history: {
          title: 'Evolution of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with events like the Ultimate Fighting Championship (UFC) in 1993. These early competitions pitted different martial arts styles against each other to determine the most effective fighting system.',
            'The sport evolved rapidly as fighters realized the importance of being well-rounded. The most successful fighters became those who could effectively combine striking, wrestling, and submission grappling.',
            'Today, MMA is a highly regulated sport with unified rules and weight classes, featuring some of the world\'s most elite athletes competing at the highest levels of combat sports.'
          ],
          milestones: {
            title: 'Key Milestones',
            events: [
              { year: '1993', description: 'First UFC event demonstrates effectiveness of different martial arts' },
              { year: '2001', description: 'Unified Rules of MMA established' },
              { year: '2016', description: 'MMA becomes legal in New York, completing legalization across major markets' }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Discover the comprehensive benefits of MMA training',
          items: [
            { icon: '💪', title: 'Complete Fitness', description: 'Full-body conditioning and strength' },
            { icon: '🧠', title: 'Mental Toughness', description: 'Develop resilience and confidence' },
            { icon: '🥊', title: 'Self-Defense', description: 'Real-world applicable skills' },
            { icon: '⚡', title: 'Versatility', description: 'Master multiple martial arts' }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Join our MMA classes and train like a professional fighter'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Learn from the techniques pioneered by the greatest fighters',
          fighters: [
            { name: 'Royce Gracie', title: 'UFC Pioneer', description: 'Proved the effectiveness of BJJ in early UFC' },
            { name: 'Anderson Silva', title: 'The Spider', description: 'Longest title reign in UFC middleweight history' },
            { name: 'Fedor Emelianenko', title: 'The Last Emperor', description: 'Considered by many as the greatest heavyweight of all time' }
          ]
        },
        cta: {
          title: 'Train Like a Fighter',
          description: 'Experience the ultimate martial arts training and develop skills in all aspects of combat.',
          joinButton: 'Join MMA Classes',
          backButton: 'Back to Classes'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'No-Gi Grappling',
        hero: {
          subtitle: 'Fast-paced submission grappling without the traditional gi uniform'
        },
        overview: {
          title: 'The Art of Control',
          paragraphs: [
            'No-Gi Grappling, also known as submission grappling, focuses on controlling and submitting opponents without the use of a traditional gi uniform. This style emphasizes speed, athleticism, and adaptability, making it highly applicable to real-world situations and MMA.',
            'Our grappling program combines elements from wrestling, Brazilian Jiu-Jitsu, judo, and sambo to create a comprehensive submission grappling system. Students learn to control opponents through superior positioning and finish fights with various submission techniques.',
            'The absence of gi grips creates a faster-paced, more dynamic style of grappling that requires different strategies and techniques compared to traditional gi-based martial arts.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Master the essential skills of no-gi submission grappling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Wrestling shots and entries',
              'Judo throws and trips',
              'Foot sweeps and reaps',
              'Takedown combinations'
            ]
          },
          control: {
            title: 'Control',
            items: [
              'Top position maintenance',
              'Underhooks and overhooks',
              'Body locks and rides',
              'Transitional control'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Leg locks and heel hooks',
              'Arm bars and kimuras',
              'Chokes and strangles',
              'Submission chains'
            ]
          }
        },
        methodology: {
          title: 'Training Methodology',
          subtitle: 'Our systematic approach to developing complete grapplers',
          technical: {
            title: 'Technical Development',
            methods: [
              { title: 'Position Before Submission', description: 'Master control positions before attempting finishes' },
              { title: 'Chain Wrestling', description: 'Learn to connect techniques in flowing sequences' },
              { title: 'Pressure and Timing', description: 'Develop the ability to apply techniques at the right moment' }
            ]
          },
          conditioning: {
            title: 'Physical Conditioning',
            methods: [
              { title: 'Grappling Cardio', description: 'Build the specific endurance needed for grappling' },
              { title: 'Functional Strength', description: 'Develop strength that translates to grappling performance' },
              { title: 'Flexibility and Mobility', description: 'Maintain range of motion for optimal technique execution' }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Discover why grappling is one of the most effective martial arts',
          items: [
            { icon: '🏃', title: 'Cardio Fitness', description: 'Intense cardiovascular workout' },
            { icon: '🧘', title: 'Mental Chess', description: 'Strategic thinking and problem solving' },
            { icon: '💪', title: 'Functional Strength', description: 'Real-world applicable strength' },
            { icon: '🛡️', title: 'Self-Defense', description: 'Effective control and restraint techniques' }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'Join our no-gi grappling classes for dynamic submission training'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Learn from the pioneers of modern submission grappling',
          grapplers: [
            { name: 'John Danaher', title: 'The Philosopher', description: 'Revolutionary leg lock system developer' },
            { name: 'Gordon Ryan', title: 'The King', description: 'Dominant no-gi grappling champion' },
            { name: 'Marcelo Garcia', title: 'The Magician', description: 'Master of butterfly guard and arm drags' }
          ]
        },
        cta: {
          title: 'Master the Art of Control',
          description: 'Develop superior grappling skills and learn to control any situation.',
          joinButton: 'Join Grappling Classes',
          backButton: 'Back to Classes'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Forging Fighters Since 2017',
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
      registerOnline: 'Register Online',
      bookClasses: 'Book Classes',
      instantConfirmation: 'Instant Confirmation',
      visitUs: 'Visit Us',
      dropInWelcome: 'Drop-ins Welcome',
      duringTrainingHours: 'During Training Hours',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates & DMs',
      joinSportAcademy: 'Join Sport Academy'
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
        subtitle: 'Elite MMA, Brazilian Jiu-Jitsu und Grappling Training in Campo Tures und Bruneck. Professionelles Coaching von Matteo Parolin und Christian Zecchetto.'
      },
      welcome: {
        title: 'Willkommen bei Sport Academy',
        description: 'Wir sind eine erstklassige Kampfsportakademie, die Weltklasse-Training in MMA, Brazilian Jiu-Jitsu und Grappling anbietet. Unsere erfahrenen Trainer bieten persönliche Betreuung für alle Leistungsstufen in unseren hochmodernen Einrichtungen.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Erstklassiges Kampfsporttraining',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Einrichtungen in Campo Tures und Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'Umfassendes Kampfsport-Curriculum',
        exploreClasses: 'Entdecke unsere Kurse'
      },
      trainLikeFighter: {
        title: 'Trainiere wie ein Kämpfer',
        subtitle: 'Wähle deine Disziplin und beginne deine Kampfsport-Reise'
      },
      mma: {
        description: 'Mixed Martial Arts kombiniert Schlag-, Grappling- und Bodenkampftechniken für das ultimative Kampfsporterlebnis.'
      },
      bjj: {
        description: 'Brazilian Jiu-Jitsu konzentriert sich auf Bodenkampf, Aufgabegriffe und hebelbasierte Techniken, die es kleineren Praktizierenden ermöglichen, größere Gegner zu überwinden.'
      },
      grappling: {
        description: 'No-Gi Grappling betont Wrestling, Takedowns und Submission-Techniken ohne die traditionelle Gi-Uniform.'
      },
      getStarted: {
        title: 'Starte heute',
        subtitle: 'Alles was du brauchst, um deine Kampfsport-Reise zu beginnen'
      },
      quickLinks: {
        viewClasses: 'Kurse ansehen',
        viewClassesDesc: 'Entdecke unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan prüfen',
        checkScheduleDesc: 'Finde Kurszeiten und Standorte',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wähle dein Trainingspaket',
        contactUs: 'Kontaktiere uns',
        contactUsDesc: 'Nimm Kontakt mit unserem Team auf'
      }
    },
    classes: {
      hero: {
        title: 'Unsere Kurse',
        description: 'Entdecke unser umfassendes Angebot an Kampfsportprogrammen für alle Leistungsstufen. Von anfängerfreundlichen Einführungen bis hin zu fortgeschrittenem Wettkampftraining.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Der ultimative Kampfsport, der Schlagen, Grappling und Bodenkampf kombiniert. Lerne Techniken aus Boxen, Kickboxen, Wrestling und Brazilian Jiu-Jitsu in einem umfassenden Programm.',
        features: [
          'Stand-up Schlagtechniken',
          'Takedowns und Wrestling',
          'Bodenkampf und Submissions',
          'Käfigarbeit und Clinch-Kampf',
          'Cardio- und Krafttraining'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Die sanfte Kunst, die Hebelwirkung, Timing und Technik über Kraft lehrt. Meistere das Bodenspiel mit dieser hochwirksamen Kampfkunst, die Submissions und Positionskontrolle betont.',
        features: [
          'Guard-Arbeit und Sweeps',
          'Submission-Techniken',
          'Positionskontrolle',
          'Selbstverteidigungsanwendungen',
          'Wettkampfvorbereitung'
        ]
      },
      grappling: {
        title: 'No-Gi Grappling',
        description: 'Schnelles Grappling ohne traditionellen Gi. Fokus auf Wrestling, Takedowns und Submissions mit Griffen am Körper und der Kleidung anstatt am Gi.',
        features: [
          'Wrestling-Techniken',
          'Leg Locks und Submissions',
          'Scrambles und Übergänge',
          'Takedown-Verteidigung',
          'Wettkampf-Grappling'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Altersgerechtes Brazilian Jiu-Jitsu Training, das Selbstvertrauen, Disziplin und körperliche Fitness aufbaut und wertvolle Selbstverteidigungsfähigkeiten vermittelt.',
        features: [
          'BJJ-Grundlagen',
          'Charakterentwicklung',
          'Anti-Mobbing-Techniken',
          'Körperliche Fitness',
          'Soziale Fähigkeiten und Teamwork'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Einführung in Wrestling- und Grappling-Techniken speziell für junge Athleten. Baut Kraft, Koordination und mentale Stärke auf.',
        features: [
          'Wrestling-Grundlagen',
          'Koordinationsübungen',
          'Kraftaufbau',
          'Mentale Stärke',
          'Wettkampfvorbereitung'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelle Wrestling-Techniken mit Fokus auf Takedowns, Kontrolle und Konditionierung. Wesentliche Fähigkeiten für MMA und Grappling.',
        features: [
          'Single und Double Leg Takedowns',
          'Sprawls und Takedown-Verteidigung',
          'Top-Kontrolle und Pins',
          'Konditionierung und Drilling',
          'Wettkampf-Wrestling'
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
        description: 'Finde die perfekte Kurszeit, die zu deinem Zeitplan passt. Wir bieten Trainingseinheiten während der ganzen Woche an beiden Standorten Campo Tures und Bruneck an.'
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
      striking: 'Striking',
      openMat: 'Open Mat',
      importantInfo: 'Wichtige Informationen',
      classGuidelines: 'Kursrichtlinien',
      guidelines: {
        arrive: '10 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'BJJ-Kurse erfordern Gi-Uniform',
        noGi: 'Grappling-Kurse sind No-Gi (Shorts und Rash Guard)'
      },
      membershipBenefits: 'Mitgliedschaftsvorteile',
      benefits: {
        allClasses: 'Zugang zu allen Kursen inklusive',
        openMat: 'Kostenlose Open Mat Sessions',
        bothLocations: 'Training an beiden Standorten',
        personalTraining: 'Ermäßigtes Personaltraining'
      },
      cta: {
        title: 'Bereit für einen Kurs?',
        description: 'Buche deine erste Session und erlebe unser Weltklasse-Training.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne unser erfahrenes und engagiertes Trainerteam kennen. Unsere Instruktoren bringen jahrelange Wettkampferfahrung und Lehrexpertise mit, um dir zu helfen, deine Kampfsportziele zu erreichen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Gründer & Cheftrainer',
        background: 'Mit über 8 Jahren engagierter Trainings- und Lehrerfahrung gründete Matteo die Sport Academy, um seine Leidenschaft für Kampfsport zu teilen. Sein umfassender Ansatz kombiniert technische Präzision mit praktischer Anwendung und stellt sicher, dass Schüler sowohl Fähigkeiten als auch Selbstvertrauen entwickeln.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Mixed Martial Arts',
          'Grappling',
          'Wettkampf-Coaching'
        ],
        achievements: [
          'Gründer der Sport Academy',
          '8+ Jahre Trainingserfahrung',
          'Zertifizierter BJJ-Instruktor',
          'Mehrere Wettkampfmedaillen',
          'Experte in Jugendentwicklungsprogrammen'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt eine Fülle von Kampfsporterfahrung zur Sport Academy. Sein dynamischer Lehrstil und sein Wettkampfhintergrund machen ihn zu einem unschätzbaren Mitglied unseres Trainerteams.',
        specializations: [
          'Mixed Martial Arts',
          'Brazilian Jiu-Jitsu',
          'Striking'
        ],
        achievements: [
          'Mehrere Wettkampfmedaillen',
          'Mehrere MMA-Kämpfe',
          'Zertifizierter Kampfsportinstruktor',
          'Experte in Schlagtechniken'
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
          title: 'Individuelle Entwicklung',
          description: 'Jeder Schüler erhält persönliche Aufmerksamkeit, um ihm zu helfen, sein einzigartiges Potenzial zu erreichen.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir vermitteln Werte von Respekt, Disziplin und Sportlichkeit in allen unseren Trainingsprogrammen.'
        }
      },
      cta: {
        title: 'Trainiere mit den Besten',
        description: 'Erlebe Weltklasse-Coaching und bringe deine Kampfsportfähigkeiten auf die nächste Stufe.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle den Mitgliedschaftsplan, der zu deinen Trainingszielen und deinem Zeitplan passt. Alle Mitgliedschaften beinhalten Zugang zu unserem kompletten Kursangebot und unseren Einrichtungen.'
      },
      mainSeason: {
        title: 'Hauptsaison',
        period: 'September - Juni',
        duration: '10 Monate Training',
        mostPopular: 'Beliebteste'
      },
      summerSeason: {
        title: 'Sommersaison',
        period: 'Juli - August',
        duration: '2,5 Monate Training'
      },
      bjjOnly: {
        title: 'Nur BJJ Mitgliedschaft',
        subtitle: 'Spezielles Brazilian Jiu-Jitsu Trainingsprogramm',
        program: 'BJJ-fokussiertes Training',
        description: 'Zugang nur zu allen BJJ-Kursen'
      },
      adults: 'Erwachsene',
      students: 'Studenten (mit gültigem Ausweis)',
      month: 'Monat',
      whatsIncluded: 'Was ist enthalten',
      mainIncludes: [
        'Unbegrenzter Zugang zu allen Kursen',
        'Beide Standorte Campo Tures und Bruneck',
        'Open Mat Sessions',
        'Anfängerfreundliche Anleitung',
        'Zugang zum Wettkampfteam'
      ],
      summerIncludes: [
        'Alle Sommerkurse enthalten',
        'Zugang zu beiden Standorten',
        'Flexible Terminplanung',
        'Perfekt für Anfänger'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse (Gi und No-Gi)',
        'Zugang zu beiden Standorten',
        'Open Mat Sessions',
        'Gürtel-Fortschrittssystem',
        'Wettkampfvorbereitung'
      ],
      selectMainSeason: 'Hauptsaison wählen',
      selectSummerSeason: 'Sommersaison wählen',
      selectBjjOnly: 'Nur BJJ wählen',
      additionalServices: {
        title: 'Zusätzliche Services',
        description: 'Verbessere dein Training mit unseren spezialisierten Programmen und persönlichen Coaching-Optionen.'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Eins-zu-eins Coaching, zugeschnitten auf deine spezifischen Ziele und Bedürfnisse.',
        price: '€50',
        duration: 'pro Session'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training zur Vorbereitung auf Turniere und Wettkämpfe.',
        price: '€40',
        duration: 'pro Session'
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
          answer: 'Unsere Hauptsaison läuft von September bis Juni mit unserem vollständigen Curriculum. Die Sommersaison ist ein kürzeres, entspannteres Programm, perfekt für Anfänger oder um Fähigkeiten während der Pause zu erhalten.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu beiden Einrichtungen in Campo Tures und Bruneck. Du kannst Kurse an beiden Standorten besuchen.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Ja, wir bieten Probestunden für neue Schüler an. Kontaktiere uns, um deine erste Session zu planen und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Anfänger nur bequeme Trainingskleidung. Wir stellen Grundausrüstung für Probestunden zur Verfügung. Mit fortschreitendem Training benötigst du einen Gi für BJJ-Kurse und entsprechende Ausrüstung für andere Disziplinen.'
        }
      },
      cta: {
        title: 'Starte deine Reise heute',
        description: 'Tritt unserer Gemeinschaft engagierter Kampfsportler bei und entfalte dein Potenzial.'
      }
    },
    contact: {
      hero: {
        title: 'Kontaktiere uns',
        description: 'Nimm Kontakt mit unserem Team auf, um deine Kampfsport-Reise zu beginnen. Wir sind hier, um deine Fragen zu beantworten und dir zu helfen, das perfekte Trainingsprogramm zu finden.'
      },
      getInTouch: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Verschiedene Wege, um mit Sport Academy in Kontakt zu treten'
      },
      callUs: 'Ruf uns an',
      instagram: 'Instagram',
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Standorte, um dir besser zu dienen'
      },
      parkingAccessibility: {
        title: 'Parken & Barrierefreiheit',
        subtitle: 'Einfacher Zugang und bequemes Parken an beiden Standorten'
      },
      parking: 'Parken',
      publicTransport: 'Öffentliche Verkehrsmittel',
      accessibility: 'Barrierefreiheit',
      campoTures: {
        parking: 'Kostenlose Parkplätze direkt vor der Einrichtung verfügbar. Zusätzliche Straßenparkplätze in der Via Hugo von Taufers.',
        transport: 'Bushaltestelle "Campo Tures Centro" ist 2 Minuten zu Fuß entfernt. Regelmäßige Verbindungen nach Bruneck und in die Umgebung.',
        accessibility: 'Erdgeschoss-Einrichtung mit rollstuhlgerechtem Eingang und Toiletten.'
      },
      brunico: {
        parking: 'Kostenlose Parkplätze im Innenhof der Einrichtung. Zusätzliche öffentliche Parkplätze in der Via Maria Teresa Riedl.',
        transport: 'Zentrale Lage in der Nähe des Bahnhofs Bruneck. Mehrere Buslinien halten innerhalb von 5 Minuten zu Fuß.',
        accessibility: 'Aufzugzugang zur Trainingsetage. Barrierefreie Toiletten und Umkleidebereiche verfügbar.'
      },
      visitRequirements: {
        title: 'Zum ersten Mal hier?',
        subtitle: 'Alles was du für deine erste Stunde wissen musst'
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
        'Trainingsmatten und Ausrüstung',
        'Umkleideräume und Duschen',
        'Grundlegende Schutzausrüstung für Anfänger',
        'Fachkundige Anleitung und Führung'
      ],
      specialInstructions: 'Besondere Anweisungen',
      instructions: {
        age: 'Altersanforderungen: Kinderkurse 6-16, Erwachsenenkurse 16+',
        health: 'Gesundheit: Bitte informiere die Instruktoren über Verletzungen oder Gesundheitszustände',
        equipment: 'Ausrüstung: Handschuhe und Schienbeinschoner werden bereitgestellt, Schüler sollten ihre eigenen kaufen',
        payment: 'Zahlung: Nur Karte und Bargeld werden akzeptiert'
      },
      cta: {
        title: 'Bereit zum Training?',
        description: 'Kontaktiere uns heute, um deine erste Stunde zu planen und deine Kampfsport-Reise zu beginnen.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Meistere die sanfte Kunst der Hebelwirkung, des Timings und der Technik über Kraft'
        },
        overview: {
          title: 'Die sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Aufgabegriffe konzentriert. Es betont das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner durch richtige Technik, Hebelwirkung und Timing verteidigen kann.',
            'Bei Sport Academy ist unser BJJ-Programm darauf ausgelegt, Schülern die grundlegenden Prinzipien dieser hochwirksamen Kampfkunst zu lehren. Ob du dich für Selbstverteidigung, Wettkampf oder einfach nur für eine großartige Fitness interessierst, unser umfassendes Curriculum wird dir helfen, deine Ziele zu erreichen.',
            'Unsere Kurse betonen sowohl Gi- als auch No-Gi-Training und stellen sicher, dass Schüler ein vielseitiges Fähigkeitsspektrum entwickeln, das sich auf reale Anwendungen und verschiedene Wettkampfformate überträgt.'
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
              'Guard Sweeps und Übergänge',
              'Guard Retention Techniken'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Würgegriffe und Strangulationen',
              'Gelenkhebel und Arm Bars',
              'Leg Locks und Fußangriffe',
              'Submission Ketten'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Side Control',
              'Back Control und Hooks',
              'Knee on Belly',
              'Übergangsbewegungen'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Gürtelsystem',
          subtitle: 'Fortschritt durch das traditionelle Ranking-System des Brazilian Jiu-Jitsu',
          belts: [
            { name: 'Weißer Gürtel', color: 'gray', description: 'Anfängerlevel' },
            { name: 'Blauer Gürtel', color: 'blue', description: 'Mittleres Level' },
            { name: 'Lila Gürtel', color: 'purple', description: 'Fortgeschrittenes Level' },
            { name: 'Brauner Gürtel', color: 'amber', description: 'Expertenlevel' },
            { name: 'Schwarzer Gürtel', color: 'gray', description: 'Meisterlevel' }
          ],
          philosophy: {
            title: 'Gürtel-Philosophie',
            description: 'Jeder Gürtel repräsentiert nicht nur technisches Wissen, sondern auch Charakterentwicklung, Ausdauer und Hingabe zur Kunst. Der Fortschritt basiert auf Fähigkeitsdemonstration, Zeit im Grad und Verkörperung der BJJ-Werte.'
          }
        },
        history: {
          title: 'Geschichte & Abstammung',
          paragraphs: [
            'Brazilian Jiu-Jitsu entwickelte sich aus traditionellem japanischem Jujutsu und Judo, das von Mitsuyo Maeda im frühen 20. Jahrhundert nach Brasilien gebracht wurde. Die Gracie-Familie, insbesondere Helio Gracie, passte diese Techniken an, um ein effizienteres System für kleinere Praktizierende zu schaffen.',
            'Die Kunst erlangte weltweite Anerkennung durch die frühen UFC-Turniere, wo Royce Gracie die Wirksamkeit von BJJ gegen größere Gegner aus verschiedenen Kampfkunst-Hintergründen demonstrierte.',
            'Heute entwickelt sich BJJ sowohl als Kampfkunst als auch als Sport weiter, wobei Praktizierende ständig Techniken verfeinern und neue Strategien sowohl für Selbstverteidigung als auch für Wettkämpfe entwickeln.'
          ],
          keyFigures: {
            title: 'Schlüsselfiguren',
            people: [
              { name: 'Mitsuyo Maeda', description: 'Japanischer Judoka, der Jujutsu nach Brasilien brachte' },
              { name: 'Helio Gracie', description: 'Gründer des Gracie Jiu-Jitsu und BJJ-Pionier' },
              { name: 'Carlos Gracie', description: 'Erster Gracie, der von Maeda lernte, gründete die Gracie Academy' }
            ]
          }
        },
        schedule: {
          title: 'BJJ Trainingsplan',
          subtitle: 'Nimm an unseren regelmäßigen BJJ-Kursen an beiden Standorten teil'
        },
        cta: {
          title: 'Starte deine BJJ-Reise',
          description: 'Erlebe die sanfte Kunst und entdecke, warum BJJ eine der effektivsten Kampfkünste ist.',
          joinButton: 'BJJ-Kurse beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der Schlagen, Grappling und Bodenkampf kombiniert'
        },
        overview: {
          title: 'Das ultimative Kampfsystem',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der vollständigste Kampfsport, der Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkünsten kombiniert. Es repräsentiert die Evolution der Kampfsportarten, wo Kämpfer in allen Kampfdistanzen kompetent sein müssen.',
            'Unser MMA-Programm bei Sport Academy bietet umfassendes Training in allen Aspekten der Mixed Martial Arts. Schüler lernen, nahtlos zwischen Schlagen und Grappling zu wechseln und entwickeln die Fähigkeiten, die sowohl für Selbstverteidigung als auch für Wettkämpfe benötigt werden.',
            'Ob du dich für Amateurwettkämpfe interessierst oder einfach das vollständigste verfügbare Kampfkunsttraining erleben möchtest, unsere MMA-Kurse werden dich als kompletten Kämpfer herausfordern und entwickeln.'
          ]
        },
        techniques: {
          title: 'Kerndisziplinen',
          subtitle: 'Meistere alle Kampfdistanzen in unserem umfassenden MMA-Programm',
          striking: {
            title: 'Schlagen',
            items: [
              'Box-Grundlagen',
              'Kickboxen und Muay Thai',
              'Fußarbeit und Kopfbewegung',
              'Kombinationen und Konter'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedowns und Würfe',
              'Takedown-Verteidigung',
              'Clinch-Arbeit',
              'Bodenkontrolle'
            ]
          },
          groundGame: {
            title: 'Bodenspiel',
            items: [
              'Brazilian Jiu-Jitsu',
              'Ground and Pound',
              'Submission-Verteidigung',
              'Übergänge und Fluchten'
            ]
          }
        },
        history: {
          title: 'Evolution von MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit Veranstaltungen wie der Ultimate Fighting Championship (UFC) im Jahr 1993. Diese frühen Wettkämpfe stellten verschiedene Kampfkunststile gegeneinander, um das effektivste Kampfsystem zu bestimmen.',
            'Der Sport entwickelte sich schnell, als Kämpfer die Wichtigkeit der Vielseitigkeit erkannten. Die erfolgreichsten Kämpfer wurden diejenigen, die Schlagen, Wrestling und Submission-Grappling effektiv kombinieren konnten.',
            'Heute ist MMA ein hoch regulierter Sport mit einheitlichen Regeln und Gewichtsklassen, der einige der weltbesten Elite-Athleten auf höchstem Niveau der Kampfsportarten zeigt.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              { year: '1993', description: 'Erste UFC-Veranstaltung demonstriert Wirksamkeit verschiedener Kampfkünste' },
              { year: '2001', description: 'Einheitliche MMA-Regeln etabliert' },
              { year: '2016', description: 'MMA wird in New York legal, vervollständigt Legalisierung in wichtigen Märkten' }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Entdecke die umfassenden Vorteile des MMA-Trainings',
          items: [
            { icon: '💪', title: 'Komplette Fitness', description: 'Ganzkörper-Konditionierung und Kraft' },
            { icon: '🧠', title: 'Mentale Stärke', description: 'Entwickle Widerstandsfähigkeit und Selbstvertrauen' },
            { icon: '🥊', title: 'Selbstverteidigung', description: 'Real anwendbare Fähigkeiten' },
            { icon: '⚡', title: 'Vielseitigkeit', description: 'Meistere mehrere Kampfkünste' }
          ]
        },
        schedule: {
          title: 'MMA Trainingsplan',
          subtitle: 'Nimm an unseren MMA-Kursen teil und trainiere wie ein Profikämpfer'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Lerne von den Techniken, die von den größten Kämpfern entwickelt wurden',
          fighters: [
            { name: 'Royce Gracie', title: 'UFC-Pionier', description: 'Bewies die Wirksamkeit von BJJ in der frühen UFC' },
            { name: 'Anderson Silva', title: 'The Spider', description: 'Längste Titelherrschaft in der UFC-Mittelgewichtsgeschichte' },
            { name: 'Fedor Emelianenko', title: 'The Last Emperor', description: 'Von vielen als der größte Schwergewichtler aller Zeiten betrachtet' }
          ]
        },
        cta: {
          title: 'Trainiere wie ein Kämpfer',
          description: 'Erlebe das ultimative Kampfkunsttraining und entwickle Fähigkeiten in allen Aspekten des Kampfes.',
          joinButton: 'MMA-Kurse beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'No-Gi Grappling',
        hero: {
          subtitle: 'Schnelles Submission-Grappling ohne die traditionelle Gi-Uniform'
        },
        overview: {
          title: 'Die Kunst der Kontrolle',
          paragraphs: [
            'No-Gi Grappling, auch bekannt als Submission Grappling, konzentriert sich darauf, Gegner zu kontrollieren und zur Aufgabe zu zwingen, ohne die Verwendung einer traditionellen Gi-Uniform. Dieser Stil betont Geschwindigkeit, Athletik und Anpassungsfähigkeit und macht ihn hochgradig anwendbar auf reale Situationen und MMA.',
            'Unser Grappling-Programm kombiniert Elemente aus Wrestling, Brazilian Jiu-Jitsu, Judo und Sambo, um ein umfassendes Submission-Grappling-System zu schaffen. Schüler lernen, Gegner durch überlegene Positionierung zu kontrollieren und Kämpfe mit verschiedenen Submission-Techniken zu beenden.',
            'Das Fehlen von Gi-Griffen schafft einen schnelleren, dynamischeren Grappling-Stil, der andere Strategien und Techniken erfordert als traditionelle Gi-basierte Kampfkünste.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Meistere die wesentlichen Fähigkeiten des No-Gi Submission Grappling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Wrestling-Angriffe und Eingänge',
              'Judo-Würfe und Trips',
              'Fußfeger und Reaps',
              'Takedown-Kombinationen'
            ]
          },
          control: {
            title: 'Kontrolle',
            items: [
              'Top-Position-Erhaltung',
              'Underhooks und Overhooks',
              'Body Locks und Rides',
              'Übergangskontrolle'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Leg Locks und Heel Hooks',
              'Arm Bars und Kimuras',
              'Würgegriffe und Strangulationen',
              'Submission-Ketten'
            ]
          }
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Unser systematischer Ansatz zur Entwicklung kompletter Grappler',
          technical: {
            title: 'Technische Entwicklung',
            methods: [
              { title: 'Position vor Submission', description: 'Meistere Kontrollpositionen bevor du Finishes versuchst' },
              { title: 'Chain Wrestling', description: 'Lerne Techniken in fließenden Sequenzen zu verbinden' },
              { title: 'Druck und Timing', description: 'Entwickle die Fähigkeit, Techniken im richtigen Moment anzuwenden' }
            ]
          },
          conditioning: {
            title: 'Körperliche Konditionierung',
            methods: [
              { title: 'Grappling-Cardio', description: 'Baue die spezifische Ausdauer auf, die für Grappling benötigt wird' },
              { title: 'Funktionale Kraft', description: 'Entwickle Kraft, die sich auf Grappling-Leistung überträgt' },
              { title: 'Flexibilität und Mobilität', description: 'Erhalte Bewegungsumfang für optimale Technikausführung' }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Entdecke, warum Grappling eine der effektivsten Kampfkünste ist',
          items: [
            { icon: '🏃', title: 'Cardio-Fitness', description: 'Intensives Herz-Kreislauf-Training' },
            { icon: '🧘', title: 'Mentales Schach', description: 'Strategisches Denken und Problemlösung' },
            { icon: '💪', title: 'Funktionale Kraft', description: 'Real anwendbare Kraft' },
            { icon: '🛡️', title: 'Selbstverteidigung', description: 'Effektive Kontroll- und Zurückhaltungstechniken' }
          ]
        },
        schedule: {
          title: 'Grappling-Plan',
          subtitle: 'Nimm an unseren No-Gi Grappling-Kursen für dynamisches Submission-Training teil'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Lerne von den Pionieren des modernen Submission Grappling',
          grapplers: [
            { name: 'John Danaher', title: 'Der Philosoph', description: 'Revolutionärer Leg Lock System-Entwickler' },
            { name: 'Gordon Ryan', title: 'Der König', description: 'Dominanter No-Gi Grappling-Champion' },
            { name: 'Marcelo Garcia', title: 'Der Magier', description: 'Meister der Butterfly Guard und Arm Drags' }
          ]
        },
        cta: {
          title: 'Meistere die Kunst der Kontrolle',
          description: 'Entwickle überlegene Grappling-Fähigkeiten und lerne, jede Situation zu kontrollieren.',
          joinButton: 'Grappling-Kurse beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Forging Fighters Since 2017',
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
      registerOnline: 'Online registrieren',
      bookClasses: 'Kurse buchen',
      instantConfirmation: 'Sofortige Bestätigung',
      visitUs: 'Besuche uns',
      dropInWelcome: 'Drop-ins willkommen',
      duringTrainingHours: 'Während der Trainingszeiten',
      responseWithin2Hours: 'Antwort innerhalb von 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates & DMs',
      joinSportAcademy: 'Sport Academy beitreten'
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
        subtitle: 'Allenamento d\'élite di MMA, Brazilian Jiu-Jitsu e Grappling a Campo Tures e Brunico. Coaching professionale di Matteo Parolin e Christian Zecchetto.'
      },
      welcome: {
        title: 'Benvenuti alla Sport Academy',
        description: 'Siamo un\'accademia di arti marziali di primo livello che offre allenamento di classe mondiale in MMA, Brazilian Jiu-Jitsu e Grappling. I nostri istruttori esperti forniscono istruzioni personalizzate per tutti i livelli di abilità nelle nostre strutture all\'avanguardia.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Fornendo allenamento di arti marziali di alto livello',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Strutture a Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'Curriculum completo di arti marziali',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come un Combattente',
        subtitle: 'Scegli la tua disciplina e inizia il tuo viaggio nelle arti marziali'
      },
      mma: {
        description: 'Le Arti Marziali Miste combinano tecniche di striking, grappling e combattimento a terra per l\'esperienza di sport da combattimento definitiva.'
      },
      bjj: {
        description: 'Il Brazilian Jiu-Jitsu si concentra sul combattimento a terra, sottomissioni e tecniche basate sulla leva che permettono ai praticanti più piccoli di superare avversari più grandi.'
      },
      grappling: {
        description: 'Il Grappling No-Gi enfatizza wrestling, takedown e tecniche di sottomissione senza l\'uniforme gi tradizionale.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Tutto ciò di cui hai bisogno per iniziare il tuo viaggio nelle arti marziali'
      },
      quickLinks: {
        viewClasses: 'Visualizza Corsi',
        viewClassesDesc: 'Esplora i nostri programmi di allenamento',
        checkSchedule: 'Controlla Orari',
        checkScheduleDesc: 'Trova orari e sedi dei corsi',
        membershipPlans: 'Piani di Abbonamento',
        membershipPlansDesc: 'Scegli il tuo pacchetto di allenamento',
        contactUs: 'Contattaci',
        contactUsDesc: 'Mettiti in contatto con il nostro team'
      }
    },
    classes: {
      hero: {
        title: 'I Nostri Corsi',
        description: 'Scopri la nostra gamma completa di programmi di arti marziali progettati per tutti i livelli di abilità. Dalle introduzioni adatte ai principianti all\'allenamento avanzato per competizioni.'
      },
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Lo sport da combattimento definitivo che combina striking, grappling e combattimento a terra. Impara tecniche da boxe, kickboxing, wrestling e Brazilian Jiu-Jitsu in un programma completo.',
        features: [
          'Tecniche di striking in piedi',
          'Takedown e wrestling',
          'Combattimento a terra e sottomissioni',
          'Lavoro in gabbia e clinch fighting',
          'Condizionamento cardio e forza'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'L\'arte gentile che insegna leva, timing e tecnica sulla forza. Padroneggia il gioco a terra con quest\'arte marziale altamente efficace che enfatizza sottomissioni e controllo posizionale.',
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
        description: 'Grappling veloce senza il gi tradizionale. Focus su wrestling, takedown e sottomissioni usando prese sul corpo e sui vestiti piuttosto che sul gi.',
        features: [
          'Tecniche di wrestling',
          'Leg lock e sottomissioni',
          'Scramble e transizioni',
          'Difesa da takedown',
          'Grappling da competizione'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Allenamento di Brazilian Jiu-Jitsu appropriato per l\'età che costruisce fiducia, disciplina e forma fisica insegnando preziose abilità di autodifesa.',
        features: [
          'Fondamentali di BJJ di base',
          'Sviluppo del carattere',
          'Tecniche anti-bullismo',
          'Forma fisica',
          'Abilità sociali e lavoro di squadra'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Introduzione alle tecniche di wrestling e grappling progettate specificamente per giovani atleti. Costruisce forza, coordinazione e resistenza mentale.',
        features: [
          'Fondamentali di wrestling',
          'Esercizi di coordinazione',
          'Costruzione della forza',
          'Resistenza mentale',
          'Preparazione per competizioni'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Tecniche di wrestling tradizionali che si concentrano su takedown, controllo e condizionamento. Abilità essenziali per MMA e grappling.',
        features: [
          'Takedown single e double leg',
          'Sprawl e difesa da takedown',
          'Controllo dall\'alto e pin',
          'Condizionamento e drilling',
          'Wrestling da competizione'
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
        description: 'Trova l\'orario di corso perfetto che si adatta al tuo programma. Offriamo sessioni di allenamento durante tutta la settimana in entrambe le nostre sedi di Campo Tures e Brunico.'
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
      openMat: 'Open Mat',
      importantInfo: 'Informazioni Importanti',
      classGuidelines: 'Linee Guida del Corso',
      guidelines: {
        arrive: 'Arriva 10 minuti prima per riscaldarti',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'I corsi di BJJ richiedono l\'uniforme gi',
        noGi: 'I corsi di grappling sono no-gi (pantaloncini e rash guard)'
      },
      membershipBenefits: 'Benefici dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutti i corsi incluso',
        openMat: 'Sessioni open mat gratuite',
        bothLocations: 'Allenati in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto per Unirti a un Corso?',
        description: 'Prenota la tua prima sessione e sperimenta il nostro allenamento di classe mondiale.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Incontra il nostro team di coaching esperto e dedicato. I nostri istruttori portano anni di esperienza competitiva e competenza nell\'insegnamento per aiutarti a raggiungere i tuoi obiettivi nelle arti marziali.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Fondatore e Capo Istruttore',
        background: 'Con oltre 8 anni di esperienza dedicata nell\'allenamento e nell\'insegnamento, Matteo ha fondato Sport Academy per condividere la sua passione per le arti marziali. Il suo approccio completo combina precisione tecnica con applicazione pratica, assicurando che gli studenti sviluppino sia abilità che fiducia.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Arti Marziali Miste',
          'Grappling',
          'Coaching per Competizioni'
        ],
        achievements: [
          'Fondatore di Sport Academy',
          '8+ anni di esperienza di allenamento',
          'Istruttore BJJ certificato',
          'Medaglie multiple in competizioni',
          'Esperto in programmi di sviluppo giovanile'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta una ricchezza di esperienza negli sport da combattimento alla Sport Academy. Il suo stile di insegnamento dinamico e il background competitivo lo rendono una risorsa inestimabile per il nostro team di coaching.',
        specializations: [
          'Arti Marziali Miste',
          'Brazilian Jiu-Jitsu',
          'Striking'
        ],
        achievements: [
          'Medaglie multiple in competizioni',
          'Incontri MMA multipli',
          'Istruttore di arti marziali certificato',
          'Esperto in tecniche di striking'
        ]
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      philosophy: {
        title: 'La Nostra Filosofia di Coaching',
        technical: {
          title: 'Eccellenza Tecnica',
          description: 'Ci concentriamo sulla tecnica corretta e sui fondamentali per costruire una base solida per tutti gli studenti.'
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
        description: 'Sperimenta il coaching di classe mondiale e porta le tue abilità nelle arti marziali al livello successivo.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il piano di abbonamento che si adatta ai tuoi obiettivi di allenamento e al tuo programma. Tutti gli abbonamenti includono l\'accesso alla nostra gamma completa di corsi e strutture.'
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
        subtitle: 'Programma di allenamento dedicato al Brazilian Jiu-Jitsu',
        program: 'Allenamento Focalizzato su BJJ',
        description: 'Accesso solo a tutti i corsi di BJJ'
      },
      adults: 'Adulti',
      students: 'Studenti (con documento valido)',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      mainIncludes: [
        'Accesso illimitato a tutti i corsi',
        'Entrambe le sedi Campo Tures e Brunico',
        'Sessioni open mat',
        'Istruzioni adatte ai principianti',
        'Accesso al team competitivo'
      ],
      summerIncludes: [
        'Tutti i corsi estivi inclusi',
        'Accesso a entrambe le sedi',
        'Programmazione flessibile',
        'Perfetto per principianti'
      ],
      bjjIncludes: [
        'Tutti i corsi di BJJ (Gi e No-Gi)',
        'Accesso a entrambe le sedi',
        'Sessioni open mat',
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
          answer: 'La nostra stagione principale va da settembre a giugno con il nostro curriculum completo. La stagione estiva è un programma più breve e rilassato, perfetto per principianti o per mantenere le abilità durante la pausa.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso a entrambe le nostre strutture di Campo Tures e Brunico. Puoi partecipare ai corsi in entrambe le sedi.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Sì, offriamo lezioni di prova per nuovi studenti. Contattaci per programmare la tua prima sessione e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Di che attrezzatura ho bisogno?',
          answer: 'Per i principianti, solo abbigliamento comodo da allenamento. Forniamo attrezzatura di base per le lezioni di prova. Man mano che progredisci, avrai bisogno di un gi per i corsi di BJJ e attrezzatura appropriata per altre discipline.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio Oggi',
        description: 'Unisciti alla nostra comunità di artisti marziali dedicati e sblocca il tuo potenziale.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Mettiti in contatto con il nostro team per iniziare il tuo viaggio nelle arti marziali. Siamo qui per rispondere alle tue domande e aiutarti a trovare il programma di allenamento perfetto.'
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
        subtitle: 'Due sedi convenienti per servirti meglio'
      },
      parkingAccessibility: {
        title: 'Parcheggio e Accessibilità',
        subtitle: 'Accesso facile e parcheggio conveniente in entrambe le sedi'
      },
      parking: 'Parcheggio',
      publicTransport: 'Trasporto Pubblico',
      accessibility: 'Accessibilità',
      campoTures: {
        parking: 'Parcheggio gratuito disponibile direttamente davanti alla struttura. Parcheggio aggiuntivo in strada su Via Hugo von Taufers.',
        transport: 'Fermata dell\'autobus "Campo Tures Centro" a 2 minuti a piedi. Collegamenti regolari per Brunico e zone circostanti.',
        accessibility: 'Struttura al piano terra con ingresso accessibile in sedia a rotelle e servizi igienici.'
      },
      brunico: {
        parking: 'Parcheggio gratuito nel cortile della struttura. Parcheggio pubblico aggiuntivo su Via Maria Teresa Riedl.',
        transport: 'Posizione centrale vicino alla stazione ferroviaria di Brunico. Diverse linee di autobus fermano entro 5 minuti a piedi.',
        accessibility: 'Accesso con ascensore al piano di allenamento. Servizi igienici e spogliatoi accessibili disponibili.'
      },
      visitRequirements: {
        title: 'Prima Volta in Visita?',
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
        'Tappetini e attrezzature per l\'allenamento',
        'Spogliatoi e docce',
        'Attrezzatura protettiva di base per principianti',
        'Istruzioni esperte e guida'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Requisiti di Età: Corsi bambini 6-16, Corsi adulti 16+',
        health: 'Salute: Si prega di informare gli istruttori di eventuali infortuni o condizioni di salute',
        equipment: 'Attrezzatura: Guanti e parastinchi forniti, gli studenti dovrebbero comprare i propri',
        payment: 'Pagamento: Accettate solo carte e contanti'
      },
      cta: {
        title: 'Pronto per Iniziare ad Allenarti?',
        description: 'Contattaci oggi per programmare la tua prima lezione e iniziare il tuo viaggio nelle arti marziali.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Padroneggia l\'arte gentile della leva, del timing e della tecnica sulla forza'
        },
        overview: {
          title: 'L\'Arte Gentile',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione. Enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte attraverso tecnica, leva e timing appropriati.',
            'Alla Sport Academy, il nostro programma di BJJ è progettato per insegnare agli studenti i principi fondamentali di quest\'arte marziale altamente efficace. Che tu sia interessato all\'autodifesa, alla competizione o semplicemente a metterti in forma, il nostro curriculum completo ti aiuterà a raggiungere i tuoi obiettivi.',
            'Le nostre lezioni enfatizzano sia l\'allenamento con gi che no-gi, assicurando che gli studenti sviluppino un set di abilità ben arrotondato che si traduce in applicazioni del mondo reale e vari formati di competizione.'
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
              'Sweep di guardia e transizioni',
              'Tecniche di ritenzione della guardia'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Strangolamenti e soffocamenti',
              'Leve articolari e arm bar',
              'Leg lock e attacchi ai piedi',
              'Catene di sottomissione'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e controllo laterale',
              'Controllo della schiena e ganci',
              'Ginocchio sulla pancia',
              'Movimenti di transizione'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema di Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di classificazione tradizionale del Brazilian Jiu-Jitsu',
          belts: [
            { name: 'Cintura Bianca', color: 'gray', description: 'Livello principiante' },
            { name: 'Cintura Blu', color: 'blue', description: 'Livello intermedio' },
            { name: 'Cintura Viola', color: 'purple', description: 'Livello avanzato' },
            { name: 'Cintura Marrone', color: 'amber', description: 'Livello esperto' },
            { name: 'Cintura Nera', color: 'gray', description: 'Livello maestro' }
          ],
          philosophy: {
            title: 'Filosofia delle Cinture',
            description: 'Ogni cintura rappresenta non solo conoscenza tecnica, ma anche sviluppo del carattere, perseveranza e dedizione all\'arte. La progressione si basa sulla dimostrazione delle abilità, tempo nel grado e incarnazione dei valori del BJJ.'
          }
        },
        history: {
          title: 'Storia e Lignaggio',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu si è evoluto dal jujutsu e judo giapponese tradizionale, portato in Brasile da Mitsuyo Maeda all\'inizio del XX secolo. La famiglia Gracie, in particolare Helio Gracie, ha adattato queste tecniche per creare un sistema più efficiente per i praticanti più piccoli.',
            'L\'arte ha guadagnato riconoscimento mondiale attraverso i primi tornei UFC, dove Royce Gracie ha dimostrato l\'efficacia del BJJ contro avversari più grandi provenienti da diversi background di arti marziali.',
            'Oggi, il BJJ continua ad evolversi sia come arte marziale che come sport, con i praticanti che raffinano costantemente le tecniche e sviluppano nuove strategie sia per l\'autodifesa che per la competizione.'
          ],
          keyFigures: {
            title: 'Figure Chiave',
            people: [
              { name: 'Mitsuyo Maeda', description: 'Judoka giapponese che portò il jujutsu in Brasile' },
              { name: 'Helio Gracie', description: 'Fondatore del Gracie Jiu-Jitsu e pioniere del BJJ' },
              { name: 'Carlos Gracie', description: 'Primo Gracie a imparare da Maeda, fondò la Gracie Academy' }
            ]
          }
        },
        schedule: {
          title: 'Orario di Allenamento BJJ',
          subtitle: 'Unisciti alle nostre lezioni regolari di BJJ in entrambe le sedi'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio nel BJJ',
          description: 'Sperimenta l\'arte gentile e scopri perché il BJJ è una delle arti marziali più efficaci.',
          joinButton: 'Unisciti ai Corsi di BJJ',
          backButton: 'Torna ai Corsi'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina striking, grappling e combattimento a terra'
        },
        overview: {
          title: 'Il Sistema di Combattimento Definitivo',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono lo sport da combattimento più completo, combinando tecniche da boxe, kickboxing, wrestling, Brazilian Jiu-Jitsu e altre arti marziali. Rappresenta l\'evoluzione degli sport da combattimento, dove i combattenti devono essere competenti in tutte le distanze di combattimento.',
            'Il nostro programma MMA alla Sport Academy fornisce allenamento completo in tutti gli aspetti delle arti marziali miste. Gli studenti imparano a passare senza soluzione di continuità tra striking e grappling, sviluppando le abilità necessarie sia per l\'autodifesa che per la competizione.',
            'Che tu sia interessato alla competizione amatoriale o semplicemente voglia sperimentare l\'allenamento di arti marziali più completo disponibile, le nostre lezioni di MMA ti sfideranno e ti svilupperanno come combattente completo.'
          ]
        },
        techniques: {
          title: 'Discipline Fondamentali',
          subtitle: 'Padroneggia tutte le distanze di combattimento nel nostro programma MMA completo',
          striking: {
            title: 'Striking',
            items: [
              'Fondamentali di boxe',
              'Kickboxing e Muay Thai',
              'Gioco di gambe e movimento della testa',
              'Combinazioni e contrattacchi'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown e proiezioni',
              'Difesa da takedown',
              'Lavoro in clinch',
              'Controllo a terra'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Brazilian Jiu-Jitsu',
              'Ground and pound',
              'Difesa da sottomissione',
              'Transizioni e fughe'
            ]
          }
        },
        history: {
          title: 'Evoluzione delle MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma le MMA moderne iniziarono con eventi come l\'Ultimate Fighting Championship (UFC) nel 1993. Queste prime competizioni misero diversi stili di arti marziali l\'uno contro l\'altro per determinare il sistema di combattimento più efficace.',
            'Lo sport si è evoluto rapidamente quando i combattenti si sono resi conto dell\'importanza di essere versatili. I combattenti di maggior successo sono diventati quelli che potevano combinare efficacemente striking, wrestling e grappling di sottomissione.',
            'Oggi, le MMA sono uno sport altamente regolamentato con regole unificate e categorie di peso, caratterizzato da alcuni degli atleti d\'élite più grandi del mondo che competono ai massimi livelli degli sport da combattimento.'
          ],
          milestones: {
            title: 'Pietre Miliari Chiave',
            events: [
              { year: '1993', description: 'Il primo evento UFC dimostra l\'efficacia di diverse arti marziali' },
              { year: '2001', description: 'Stabilite le Regole Unificate delle MMA' },
              { year: '2016', description: 'Le MMA diventano legali a New York, completando la legalizzazione nei mercati principali' }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Scopri i benefici completi dell\'allenamento MMA',
          items: [
            { icon: '💪', title: 'Fitness Completo', description: 'Condizionamento e forza per tutto il corpo' },
            { icon: '🧠', title: 'Resistenza Mentale', description: 'Sviluppa resilienza e fiducia' },
            { icon: '🥊', title: 'Autodifesa', description: 'Abilità applicabili nel mondo reale' },
            { icon: '⚡', title: 'Versatilità', description: 'Padroneggia multiple arti marziali' }
          ]
        },
        schedule: {
          title: 'Orario di Allenamento MMA',
          subtitle: 'Unisciti alle nostre lezioni di MMA e allenati come un combattente professionista'
        },
        legends: {
          title: 'Leggende delle MMA',
          subtitle: 'Impara dalle tecniche pionieristiche dei più grandi combattenti',
          fighters: [
            { name: 'Royce Gracie', title: 'Pioniere UFC', description: 'Ha dimostrato l\'efficacia del BJJ nella prima UFC' },
            { name: 'Anderson Silva', title: 'The Spider', description: 'Il regno del titolo più lungo nella storia dei pesi medi UFC' },
            { name: 'Fedor Emelianenko', title: 'The Last Emperor', description: 'Considerato da molti il più grande peso massimo di tutti i tempi' }
          ]
        },
        cta: {
          title: 'Allenati Come un Combattente',
          description: 'Sperimenta l\'allenamento di arti marziali definitivo e sviluppa abilità in tutti gli aspetti del combattimento.',
          joinButton: 'Unisciti ai Corsi di MMA',
          backButton: 'Torna ai Corsi'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling No-Gi',
        hero: {
          subtitle: 'Grappling di sottomissione veloce senza l\'uniforme gi tradizionale'
        },
        overview: {
          title: 'L\'Arte del Controllo',
          paragraphs: [
            'Il Grappling No-Gi, noto anche come grappling di sottomissione, si concentra sul controllare e sottomettere gli avversari senza l\'uso di un\'uniforme gi tradizionale. Questo stile enfatizza velocità, atletismo e adattabilità, rendendolo altamente applicabile a situazioni del mondo reale e MMA.',
            'Il nostro programma di grappling combina elementi da wrestling, Brazilian Jiu-Jitsu, judo e sambo per creare un sistema completo di grappling di sottomissione. Gli studenti imparano a controllare gli avversari attraverso posizionamento superiore e finire i combattimenti con varie tecniche di sottomissione.',
            'L\'assenza di prese del gi crea uno stile di grappling più veloce e dinamico che richiede strategie e tecniche diverse rispetto alle arti marziali tradizionali basate sul gi.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia le abilità essenziali del grappling di sottomissione no-gi',
          takedowns: {
            title: 'Takedown',
            items: [
              'Attacchi e ingressi di wrestling',
              'Proiezioni e sgambetti di judo',
              'Spazzate e falciature dei piedi',
              'Combinazioni di takedown'
            ]
          },
          control: {
            title: 'Controllo',
            items: [
              'Mantenimento della posizione superiore',
              'Underhook e overhook',
              'Body lock e ride',
              'Controllo di transizione'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Leg lock e heel hook',
              'Arm bar e kimura',
              'Strangolamenti e soffocamenti',
              'Catene di sottomissione'
            ]
          }
        },
        methodology: {
          title: 'Metodologia di Allenamento',
          subtitle: 'Il nostro approccio sistematico per sviluppare grappler completi',
          technical: {
            title: 'Sviluppo Tecnico',
            methods: [
              { title: 'Posizione Prima della Sottomissione', description: 'Padroneggia le posizioni di controllo prima di tentare le finalizzazioni' },
              { title: 'Chain Wrestling', description: 'Impara a collegare le tecniche in sequenze fluide' },
              { title: 'Pressione e Timing', description: 'Sviluppa la capacità di applicare le tecniche al momento giusto' }
            ]
          },
          conditioning: {
            title: 'Condizionamento Fisico',
            methods: [
              { title: 'Cardio per Grappling', description: 'Costruisci la resistenza specifica necessaria per il grappling' },
              { title: 'Forza Funzionale', description: 'Sviluppa forza che si traduce in prestazioni di grappling' },
              { title: 'Flessibilità e Mobilità', description: 'Mantieni il range di movimento per un\'esecuzione tecnica ottimale' }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Scopri perché il grappling è una delle arti marziali più efficaci',
          items: [
            { icon: '🏃', title: 'Fitness Cardio', description: 'Allenamento cardiovascolare intenso' },
            { icon: '🧘', title: 'Scacchi Mentali', description: 'Pensiero strategico e risoluzione dei problemi' },
            { icon: '💪', title: 'Forza Funzionale', description: 'Forza applicabile nel mondo reale' },
            { icon: '🛡️', title: 'Autodifesa', description: 'Tecniche efficaci di controllo e contenimento' }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Unisciti alle nostre lezioni di grappling no-gi per allenamento dinamico di sottomissione'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Impara dai pionieri del grappling di sottomissione moderno',
          grapplers: [
            { name: 'John Danaher', title: 'Il Filosofo', description: 'Sviluppatore rivoluzionario del sistema leg lock' },
            { name: 'Gordon Ryan', title: 'Il Re', description: 'Campione dominante di grappling no-gi' },
            { name: 'Marcelo Garcia', title: 'Il Mago', description: 'Maestro della butterfly guard e arm drag' }
          ]
        },
        cta: {
          title: 'Padroneggia l\'Arte del Controllo',
          description: 'Sviluppa abilità superiori di grappling e impara a controllare qualsiasi situazione.',
          joinButton: 'Unisciti ai Corsi di Grappling',
          backButton: 'Torna ai Corsi'
        }
      }
    },
    footer: {
      tagline: 'Allenamento d\'Élite MMA, BJJ & Grappling',
      subtitle: 'Forging Fighters Since 2017',
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
      registerOnline: 'Registrati Online',
      bookClasses: 'Prenota Corsi',
      instantConfirmation: 'Conferma Istantanea',
      visitUs: 'Visitaci',
      dropInWelcome: 'Drop-in Benvenuti',
      duringTrainingHours: 'Durante gli Orari di Allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM',
      joinSportAcademy: 'Unisciti a Sport Academy'
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