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
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates and DMs',
      instantConfirmation: 'Instant confirmation',
      dropInWelcome: 'Drop-in welcome',
      duringTrainingHours: 'During training hours',
      visitUs: 'Visit Us'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Located in Campo Tures and Brunico, Sport Academy has been the premier destination for MMA, Brazilian Jiu-Jitsu, and Grappling training since 2017. Our expert coaches provide world-class instruction in a supportive, professional environment.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Training champions since 2017',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures and Brunico',
        trainingPrograms: 'Training Programs',
        programsDescription: 'From beginner to advanced',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Master the art of combat sports with our comprehensive training programs'
      },
      mma: {
        description: 'Complete combat sport combining striking, wrestling, and ground fighting for the ultimate martial arts experience.'
      },
      bjj: {
        description: 'The gentle art that teaches leverage and technique over strength, perfect for self-defense and competition.'
      },
      grappling: {
        description: 'No-gi grappling focused on takedowns, control, and submissions - essential for MMA and self-defense.'
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
        description: 'Discover our comprehensive range of martial arts programs designed for all skill levels and ages. From traditional Brazilian Jiu-Jitsu to modern MMA training, we offer expert instruction in a supportive environment.'
      },
      mma: {
        title: 'MMA Course (Mixed Martial Arts)',
        description: 'MMA is a complete combat sport that combines striking, wrestling, and ground fighting. It\'s ideal for those looking for a well-rounded, realistic, and physically demanding discipline.',
        features: [
          'Striking techniques: punches, kicks, elbows, knees',
          'Takedowns and clinch work (wrestling and judo)',
          'Ground control and submissions (BJJ-based)',
          'Physical conditioning and pressure management'
        ]
      },
      bjj: {
        title: 'BJJ Course (Brazilian Jiu-Jitsu)',
        description: 'Brazilian Jiu-Jitsu focuses on ground fighting and submissions using leverage and technique over strength. It\'s a strategic, highly effective martial art suitable for all levels and body types.',
        features: [
          'Key ground positions and transitions',
          'Submission techniques and how to defend them',
          'How to control opponents and escape bad positions',
          'Focus, discipline, and self-confidence development'
        ]
      },
      grappling: {
        title: 'Grappling Course',
        description: 'Grappling is a no-strike combat sport based on takedowns, control, and submissions, practiced without the gi. It\'s realistic, dynamic, and commonly used in MMA and self-defense training.',
        features: [
          'Takedown techniques and defense from standing',
          'Guard passing and ground control',
          'Joint locks and choke submissions',
          'Agility, balance, and body awareness'
        ]
      },
      kidsBjj: {
        title: 'BJJ Course for Kids (Ages 8–14)',
        description: 'A structured course for kids aged 8 to 14 that introduces them to Brazilian Jiu-Jitsu in a safe and positive environment. Through technique and playful drills, kids build physical and mental skills while having fun.',
        features: [
          'Basic BJJ movements, positions, and simple submissions',
          'How to fall, roll, and move safely on the ground',
          'Respect for rules, instructors, and teammates',
          'Confidence, discipline, and emotional control'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Fun and engaging grappling program designed specifically for young athletes to develop fundamental wrestling and grappling skills.',
        features: [
          'Wrestling fundamentals',
          'Takedown techniques',
          'Ground control basics',
          'Teamwork and sportsmanship',
          'Competition preparation'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling training focusing on takedowns, control, and conditioning for competitive and recreational athletes.',
        features: [
          'Single and double leg takedowns',
          'Wrestling stance and movement',
          'Sprawls and defensive techniques',
          'Conditioning and strength training',
          'Competition preparation'
        ]
      },
      whatYouLearn: 'What You\'ll Learn',
      cta: {
        title: 'Ready to Start Your Journey?',
        description: 'Join our community of dedicated martial artists and begin your transformation today.'
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
      membershipBenefits: 'Membership Benefits',
      guidelines: {
        arrive: 'Arrive 10 minutes early for warm-up',
        water: 'Bring water bottle and towel',
        gi: 'Gi required for BJJ classes',
        noGi: 'No-gi attire for Grappling and MMA'
      },
      benefits: {
        allClasses: 'Access to all classes included',
        openMat: 'Free open mat sessions',
        bothLocations: 'Train at both locations',
        personalTraining: 'Discounted personal training'
      },
      cta: {
        title: 'Ready to Train?',
        description: 'Book your first class today and start your martial arts journey with us.'
      }
    },
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Meet our world-class instructors who bring years of experience, passion, and expertise to every training session.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 15 years of martial arts experience, Matteo founded Sport Academy in 2017 with a vision to bring world-class MMA and BJJ training to South Tyrol. His dedication to technical excellence and student development has made Sport Academy the premier martial arts destination in the region.',
        specializations: [
          'Brazilian Jiu-Jitsu Black Belt',
          'MMA Competition Coaching',
          'Wrestling Techniques',
          'Youth Development Programs'
        ],
        achievements: [
          'Founded Sport Academy in 2017',
          'Trained multiple regional champions',
          'Certified BJJ Black Belt instructor',
          'Over 500 students trained'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior BJJ Instructor',
        background: 'Christian brings a wealth of knowledge in Brazilian Jiu-Jitsu and grappling to Sport Academy. His technical approach and patient teaching style make him an invaluable asset to students of all levels, from beginners to advanced competitors.',
        specializations: [
          'Brazilian Jiu-Jitsu Instruction',
          'Competition Preparation',
          'Technical Development',
          'Advanced Grappling Concepts'
        ],
        achievements: [
          'BJJ Brown Belt under renowned lineage',
          'Multiple tournament victories',
          'Specialized in technical instruction',
          'Expert in competition strategy'
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
        description: 'Experience world-class instruction from our expert coaching team.'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the membership plan that fits your goals and schedule. All memberships include access to our complete range of classes and both training locations.'
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
        'Competition team access',
        'Beginner workshops included'
      ],
      summerIncludes: [
        'All summer classes included',
        'Both locations access',
        'Open mat sessions',
        'Flexible schedule'
      ],
      bjjIncludes: [
        'All BJJ classes included',
        'Both locations access',
        'Open mat sessions',
        'Belt progression tracking'
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
        description: 'Specialized training program designed to prepare you for tournaments and competitions.',
        price: '€80',
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
          answer: 'The main season (September-June) offers our complete curriculum with structured progression. The summer season (July-August) provides flexible training to maintain skills during the break.'
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
          answer: 'For beginners, just comfortable workout clothes. We provide basic equipment for trial classes. As you progress, you\'ll need a gi for BJJ and appropriate gear for other disciplines.'
        }
      },
      cta: {
        title: 'Start Your Journey Today',
        description: 'Join our community of dedicated martial artists and transform your life through training.'
      }
    },
    contact: {
      hero: {
        title: 'Contact Us',
        description: 'Ready to start your martial arts journey? Get in touch with us today to learn more about our programs, schedule a trial class, or ask any questions you might have.'
      },
      getInTouch: {
        title: 'Get In Touch',
        subtitle: 'Multiple ways to connect with Sport Academy'
      },
      callUs: 'Call Us',
      instagram: 'Instagram',
      locations: {
        title: 'Our Locations',
        subtitle: 'Two convenient locations in South Tyrol'
      },
      address: 'Address',
      trainingSchedule: 'Training Schedule',
      visitRequirements: {
        title: 'Visit Requirements',
        subtitle: 'Everything you need to know for your first visit'
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
        'Clean training mats',
        'Basic protective equipment for trials',
        'Experienced instruction',
        'Welcoming community environment'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Minimum age for adult classes is 16 years old',
        health: 'Please inform us of any injuries or health conditions',
        equipment: 'Rental equipment available for trial classes',
        payment: 'Trial classes are free for first-time visitors'
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Take the first step towards your martial arts journey. Contact us today to schedule your free trial class.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'The gentle art that teaches leverage and technique over strength'
        },
        overview: {
          title: 'What is Brazilian Jiu-Jitsu?',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. Developed from traditional Japanese jujitsu and judo, BJJ emphasizes technique, leverage, and timing over brute strength.',
            'Often called "the gentle art," BJJ allows smaller practitioners to successfully defend against larger opponents through proper technique and strategy. This makes it an ideal martial art for people of all ages, sizes, and fitness levels.',
            'At Sport Academy, our BJJ program follows traditional Brazilian methodology while incorporating modern training techniques to help students develop both technical skills and physical conditioning.'
          ]
        },
        techniques: {
          title: 'Key Techniques You\'ll Master',
          subtitle: 'Comprehensive curriculum covering all aspects of Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard Work',
            items: [
              'Closed guard fundamentals',
              'Open guard variations',
              'Guard retention and recovery',
              'Sweeps and submissions from guard'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Chokes and strangulations',
              'Joint locks and arm bars',
              'Leg locks and foot attacks',
              'Submission defense and escapes'
            ]
          },
          positions: {
            title: 'Positions',
            items: [
              'Mount and side control',
              'Back control and rear mount',
              'Knee on belly and north-south',
              'Transitions between positions'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the traditional Brazilian Jiu-Jitsu ranking system',
          philosophy: {
            title: 'Our Approach to Progression',
            description: 'At Sport Academy, belt promotion is based on technical knowledge, sparring ability, and demonstration of BJJ principles. We follow traditional Brazilian standards while ensuring each student develops at their own pace.'
          }
        },
        history: {
          title: 'History of Brazilian Jiu-Jitsu',
          paragraphs: [
            'Brazilian Jiu-Jitsu was developed in the early 20th century when Japanese judoka Mitsuyo Maeda taught the Gracie family in Brazil. The Gracies, particularly Helio Gracie, adapted the techniques to create a more ground-focused martial art.',
            'The effectiveness of BJJ was proven in early mixed martial arts competitions, where Royce Gracie defeated much larger opponents using superior technique and strategy.',
            'Today, BJJ is practiced worldwide and forms the foundation of modern mixed martial arts ground fighting.'
          ],
          keyFigures: {
            title: 'Key Figures',
            people: [
              {
                name: 'Mitsuyo Maeda',
                description: 'Japanese judoka who brought jujitsu to Brazil'
              },
              {
                name: 'Helio Gracie',
                description: 'Founder of modern Brazilian Jiu-Jitsu'
              },
              {
                name: 'Royce Gracie',
                description: 'Proved BJJ effectiveness in early UFC'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ Training Schedule',
          subtitle: 'Regular classes available at both locations'
        },
        cta: {
          title: 'Start Your BJJ Journey',
          description: 'Experience the gentle art that has transformed martial arts worldwide.',
          joinButton: 'Join BJJ Program'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'No-gi combat sport focused on takedowns, control, and submissions'
        },
        overview: {
          title: 'What is Grappling?',
          paragraphs: [
            'Grappling is a form of combat sport that involves wrestling, takedowns, and submission techniques performed without the traditional gi (uniform). This no-gi approach emphasizes speed, athleticism, and adaptability.',
            'Unlike traditional martial arts that rely on gripping the uniform, grappling requires practitioners to control opponents through body positioning, underhooks, overhooks, and direct contact techniques.',
            'Grappling is essential for mixed martial arts and provides excellent conditioning while developing practical self-defense skills applicable in real-world situations.'
          ]
        },
        techniques: {
          title: 'Core Grappling Techniques',
          subtitle: 'Master the fundamental skills of no-gi grappling',
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
            title: 'Control Positions',
            items: [
              'Side control and mount',
              'Back control and hooks',
              'Knee on belly and north-south',
              'Transition timing and flow'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Rear naked chokes',
              'Arm bars and kimuras',
              'Leg locks and heel hooks',
              'Guillotines and D\'Arce chokes'
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
                description: 'Live practice from specific positions'
              },
              {
                title: 'Flow Rolling',
                description: 'Continuous movement practice at controlled pace'
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
                description: 'Mobility work for injury prevention'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of Grappling',
          subtitle: 'Physical and mental advantages of no-gi training',
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
              description: 'Improves speed and athletic performance'
            },
            {
              icon: '🛡️',
              title: 'Self Defense',
              description: 'Practical skills for real-world situations'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'No-gi training sessions throughout the week'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Icons who shaped the sport of grappling',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominant no-gi grappler and submission specialist'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Multiple-time World Champion',
              description: 'Technical master known for butterfly guard'
            },
            {
              name: 'John Danaher',
              title: 'Renowned Coach',
              description: 'Revolutionary instructor and system developer'
            }
          ]
        },
        cta: {
          title: 'Master No-Gi Grappling',
          description: 'Develop the skills used in MMA and modern submission grappling.',
          joinButton: 'Join Grappling Program'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining all martial arts disciplines'
        },
        overview: {
          title: 'What is Mixed Martial Arts?',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, kickboxing, wrestling, Brazilian Jiu-Jitsu, and other martial arts. Fighters must be proficient in striking, grappling, and ground fighting.',
            'MMA tests every aspect of martial arts ability - from stand-up striking to takedown defense, from ground control to submission techniques. This comprehensive approach creates well-rounded fighters capable of adapting to any situation.',
            'At Sport Academy, our MMA program integrates all combat disciplines into a cohesive training system, preparing students for competition or providing the ultimate fitness and self-defense experience.'
          ]
        },
        techniques: {
          title: 'MMA Techniques',
          subtitle: 'Master all ranges of combat in mixed martial arts',
          striking: {
            title: 'Striking',
            items: [
              'Boxing combinations and footwork',
              'Muay Thai kicks and knees',
              'Elbow strikes and clinch work',
              'Defensive head movement and blocking'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown techniques and setups',
              'Takedown defense and sprawls',
              'Cage work and dirty boxing',
              'Ground and pound positioning'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Submission techniques and defense',
              'Ground control and transitions',
              'Guard work and sweeps',
              'Escape techniques and scrambles'
            ]
          }
        },
        history: {
          title: 'History of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in pankration, a combat sport in ancient Greece. Modern MMA emerged in the 1990s with the creation of the Ultimate Fighting Championship (UFC), designed to determine the most effective martial art.',
            'Early competitions featured specialists from different disciplines - boxers, wrestlers, karate practitioners, and Brazilian Jiu-Jitsu fighters. Over time, it became clear that the most successful fighters needed skills in all areas.',
            'Today\'s MMA athletes are complete martial artists, training in striking, grappling, and conditioning to compete at the highest levels of the sport.'
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
                description: 'Unified rules established for professional MMA'
              },
              {
                year: '2016',
                description: 'MMA becomes mainstream with global popularity'
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
              description: 'Ultimate cardiovascular and strength conditioning'
            },
            {
              icon: '🧠',
              title: 'Mental Discipline',
              description: 'Develops focus, confidence, and mental toughness'
            },
            {
              icon: '⚔️',
              title: 'Self Defense',
              description: 'Most comprehensive self-defense system available'
            },
            {
              icon: '🏆',
              title: 'Competition Ready',
              description: 'Preparation for amateur and professional competition'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Comprehensive mixed martial arts classes'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Fighters who defined mixed martial arts',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC Pioneer',
              description: 'Proved effectiveness of Brazilian Jiu-Jitsu in early UFC'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Longest reigning UFC middleweight champion'
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
          description: 'Train in the world\'s most comprehensive combat sport.',
          joinButton: 'Join MMA Program'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Forging Fighters Since 2017',
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
      responseWithin2Hours: 'Antwort innerhalb von 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates und DMs',
      instantConfirmation: 'Sofortige Bestätigung',
      dropInWelcome: 'Spontanbesuche willkommen',
      duringTrainingHours: 'Während der Trainingszeiten',
      visitUs: 'Besuchen Sie Uns'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Willkommen bei der Sport Academy',
        description: 'Die Sport Academy in Campo Tures und Brunico ist seit 2017 die führende Adresse für MMA-, Brazilian Jiu-Jitsu- und Grappling-Training. Unsere Experten-Trainer bieten Weltklasse-Unterricht in einer unterstützenden, professionellen Umgebung.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Champions trainieren seit 2017',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Campo Tures und Brunico',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'Von Anfänger bis Fortgeschritten',
        exploreClasses: 'Unsere Kurse Entdecken'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Meistere die Kunst der Kampfsportarten mit unseren umfassenden Trainingsprogrammen'
      },
      mma: {
        description: 'Vollständiger Kampfsport, der Schlagen, Ringen und Bodenkampf für das ultimative Kampfkunst-Erlebnis kombiniert.'
      },
      bjj: {
        description: 'Die sanfte Kunst, die Hebelwirkung und Technik über Kraft lehrt, perfekt für Selbstverteidigung und Wettkampf.'
      },
      grappling: {
        description: 'No-Gi-Grappling fokussiert auf Takedowns, Kontrolle und Submissions - essentiell für MMA und Selbstverteidigung.'
      },
      getStarted: {
        title: 'Heute Beginnen',
        subtitle: 'Wählen Sie Ihren Weg zur Kampfkunst-Exzellenz'
      },
      quickLinks: {
        viewClasses: 'Kurse Ansehen',
        viewClassesDesc: 'Entdecken Sie unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan Prüfen',
        checkScheduleDesc: 'Finden Sie Ihre Trainingszeiten',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wählen Sie Ihre Mitgliedschaft',
        contactUs: 'Kontakt',
        contactUsDesc: 'Nehmen Sie Kontakt mit uns auf'
      }
    },
    classes: {
      hero: {
        title: 'Unsere Kurse',
        description: 'Entdecken Sie unser umfassendes Angebot an Kampfkunstprogrammen, die für alle Fähigkeitsstufen und Altersgruppen konzipiert sind. Von traditionellem Brazilian Jiu-Jitsu bis hin zu modernem MMA-Training bieten wir Expertenunterricht in einer unterstützenden Umgebung.'
      },
      mma: {
        title: 'MMA-Kurs (Mixed Martial Arts)',
        description: 'MMA ist ein vollständiger Kampfsport, der Schlagen, Ringen und Bodenkampf kombiniert. Es ist ideal für diejenigen, die eine vielseitige, realistische und körperlich anspruchsvolle Disziplin suchen.',
        features: [
          'Schlagtechniken: Schläge, Tritte, Ellbogen, Knie',
          'Takedowns und Clinch-Arbeit (Ringen und Judo)',
          'Bodenkontrolle und Submissions (BJJ-basiert)',
          'Körperliche Konditionierung und Druckmanagement'
        ]
      },
      bjj: {
        title: 'BJJ-Kurs (Brazilian Jiu-Jitsu)',
        description: 'Brazilian Jiu-Jitsu konzentriert sich auf Bodenkampf und Submissions unter Verwendung von Hebelwirkung und Technik über Kraft. Es ist eine strategische, hochwirksame Kampfkunst, die für alle Stufen und Körpertypen geeignet ist.',
        features: [
          'Wichtige Bodenpositionen und Übergänge',
          'Submission-Techniken und wie man sie verteidigt',
          'Wie man Gegner kontrolliert und schlechten Positionen entkommt',
          'Fokus, Disziplin und Selbstvertrauen-Entwicklung'
        ]
      },
      grappling: {
        title: 'Grappling-Kurs',
        description: 'Grappling ist ein schlagfreier Kampfsport basierend auf Takedowns, Kontrolle und Submissions, praktiziert ohne Gi. Es ist realistisch, dynamisch und wird häufig im MMA- und Selbstverteidigungstraining verwendet.',
        features: [
          'Takedown-Techniken und Verteidigung aus dem Stand',
          'Guard-Passing und Bodenkontrolle',
          'Gelenkhebel und Würge-Submissions',
          'Beweglichkeit, Balance und Körperbewusstsein'
        ]
      },
      kidsBjj: {
        title: 'BJJ-Kurs für Kinder (Alter 8–14)',
        description: 'Ein strukturierter Kurs für Kinder im Alter von 8 bis 14 Jahren, der sie in einer sicheren und positiven Umgebung in Brazilian Jiu-Jitsu einführt. Durch Technik und spielerische Übungen bauen Kinder körperliche und geistige Fähigkeiten auf und haben dabei Spaß.',
        features: [
          'Grundlegende BJJ-Bewegungen, Positionen und einfache Submissions',
          'Wie man fällt, rollt und sich sicher am Boden bewegt',
          'Respekt vor Regeln, Lehrern und Teamkameraden',
          'Selbstvertrauen, Disziplin und emotionale Kontrolle'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Spaßiges und ansprechendes Grappling-Programm, speziell für junge Athleten entwickelt, um grundlegende Wrestling- und Grappling-Fähigkeiten zu entwickeln.',
        features: [
          'Wrestling-Grundlagen',
          'Takedown-Techniken',
          'Grundlagen der Bodenkontrolle',
          'Teamwork und Sportlichkeit',
          'Wettkampfvorbereitung'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelles Wrestling-Training mit Fokus auf Takedowns, Kontrolle und Konditionierung für Wettkampf- und Freizeitsportler.',
        features: [
          'Einzel- und Doppelbein-Takedowns',
          'Wrestling-Haltung und Bewegung',
          'Sprawls und Verteidigungstechniken',
          'Konditionierung und Krafttraining',
          'Wettkampfvorbereitung'
        ]
      },
      whatYouLearn: 'Was Sie Lernen',
      cta: {
        title: 'Bereit, Ihre Reise zu Beginnen?',
        description: 'Treten Sie unserer Gemeinschaft engagierter Kampfkünstler bei und beginnen Sie noch heute Ihre Transformation.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finden Sie die perfekten Trainingszeiten, die zu Ihrem Zeitplan passen. Wir bieten Kurse während der ganzen Woche an beiden Standorten Campo Tures und Brunico an.'
      },
      campoTures: 'Campo Tures',
      brunico: 'Brunico',
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
      membershipBenefits: 'Mitgliedschaftsvorteile',
      guidelines: {
        arrive: '10 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'Gi erforderlich für BJJ-Kurse',
        noGi: 'No-Gi-Kleidung für Grappling und MMA'
      },
      benefits: {
        allClasses: 'Zugang zu allen Kursen inklusive',
        openMat: 'Kostenlose freie Trainingseinheiten',
        bothLocations: 'Training an beiden Standorten',
        personalTraining: 'Ermäßigtes Personaltraining'
      },
      cta: {
        title: 'Bereit zu Trainieren?',
        description: 'Buchen Sie noch heute Ihren ersten Kurs und beginnen Sie Ihre Kampfkunst-Reise mit uns.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lernen Sie unsere Weltklasse-Instruktoren kennen, die jahrelange Erfahrung, Leidenschaft und Expertise in jede Trainingseinheit einbringen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 15 Jahren Kampfkunst-Erfahrung gründete Matteo 2017 die Sport Academy mit der Vision, Weltklasse-MMA- und BJJ-Training nach Südtirol zu bringen. Seine Hingabe an technische Exzellenz und Schülerentwicklung hat die Sport Academy zum führenden Kampfkunst-Ziel in der Region gemacht.',
        specializations: [
          'Brazilian Jiu-Jitsu Schwarzgurt',
          'MMA-Wettkampf-Coaching',
          'Wrestling-Techniken',
          'Jugendentwicklungsprogramme'
        ],
        achievements: [
          'Gründete Sport Academy 2017',
          'Trainierte mehrere regionale Champions',
          'Zertifizierter BJJ-Schwarzgurt-Instruktor',
          'Über 500 trainierte Schüler'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior BJJ-Instruktor',
        background: 'Christian bringt eine Fülle von Wissen in Brazilian Jiu-Jitsu und Grappling zur Sport Academy. Sein technischer Ansatz und geduldiger Unterrichtsstil machen ihn zu einem unschätzbaren Vorteil für Schüler aller Stufen, von Anfängern bis zu fortgeschrittenen Wettkämpfern.',
        specializations: [
          'Brazilian Jiu-Jitsu Unterricht',
          'Wettkampfvorbereitung',
          'Technische Entwicklung',
          'Fortgeschrittene Grappling-Konzepte'
        ],
        achievements: [
          'BJJ-Braungurt unter renommierter Linie',
          'Mehrere Turniersiege',
          'Spezialisiert auf technischen Unterricht',
          'Experte in Wettkampfstrategie'
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
          description: 'Wir vermitteln Werte von Respekt, Disziplin und Sportlichkeit in all unseren Trainingsprogrammen.'
        }
      },
      cta: {
        title: 'Mit den Besten Trainieren',
        description: 'Erleben Sie Weltklasse-Unterricht von unserem Experten-Trainerteam.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wählen Sie den Mitgliedschaftsplan, der zu Ihren Zielen und Ihrem Zeitplan passt. Alle Mitgliedschaften beinhalten Zugang zu unserem kompletten Kursangebot und beiden Trainingsstandorten.'
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
        title: 'Nur BJJ-Mitgliedschaft',
        subtitle: 'Spezielles Brazilian Jiu-Jitsu Trainingsprogramm',
        program: 'BJJ-Fokussiertes Programm',
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
        'Zugang zum Wettkampfteam',
        'Anfänger-Workshops inklusive'
      ],
      summerIncludes: [
        'Alle Sommerkurse inklusive',
        'Zugang zu beiden Standorten',
        'Freie Trainingseinheiten',
        'Flexibler Zeitplan'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse inklusive',
        'Zugang zu beiden Standorten',
        'Freie Trainingseinheiten',
        'Gürtel-Fortschritt-Verfolgung'
      ],
      selectMainSeason: 'Hauptsaison Wählen',
      selectSummerSeason: 'Sommersaison Wählen',
      selectBjjOnly: 'Nur BJJ Wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessern Sie Ihr Training mit unseren spezialisierten Programmen und persönlichen Coaching-Optionen.'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Einzelcoaching-Sitzungen, die auf Ihre spezifischen Ziele und Bedürfnisse zugeschnitten sind.',
        price: '€50',
        duration: 'pro Sitzung'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Trainingsprogramm zur Vorbereitung auf Turniere und Wettkämpfe.',
        price: '€80',
        duration: 'pro Sitzung'
      },
      seminars: {
        title: 'Seminare',
        description: 'Spezielle Workshops mit Gastinstruktoren und fortgeschrittenen Techniksitzungen.',
        price: '€30',
        duration: 'pro Seminar'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Die Hauptsaison (September-Juni) bietet unser komplettes Curriculum mit strukturiertem Fortschritt. Die Sommersaison (Juli-August) bietet flexibles Training zur Aufrechterhaltung der Fähigkeiten während der Pause.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu Kursen an beiden Standorten Campo Tures und Brunico. Sie können je nach Zeitplan mischen und anpassen.'
        },
        trial: {
          question: 'Bieten Sie Probestunden an?',
          answer: 'Absolut! Wir bieten eine kostenlose Probestunde für neue Schüler an. Kontaktieren Sie uns, um Ihre erste Sitzung zu planen und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Anfänger nur bequeme Trainingskleidung. Wir stellen Grundausrüstung für Probestunden zur Verfügung. Mit dem Fortschritt benötigen Sie einen Gi für BJJ und entsprechende Ausrüstung für andere Disziplinen.'
        }
      },
      cta: {
        title: 'Beginnen Sie Heute Ihre Reise',
        description: 'Treten Sie unserer Gemeinschaft engagierter Kampfkünstler bei und transformieren Sie Ihr Leben durch Training.'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Bereit, Ihre Kampfkunst-Reise zu beginnen? Nehmen Sie noch heute Kontakt mit uns auf, um mehr über unsere Programme zu erfahren, eine Probestunde zu vereinbaren oder Fragen zu stellen.'
      },
      getInTouch: {
        title: 'Kontakt Aufnehmen',
        subtitle: 'Mehrere Wege, sich mit der Sport Academy zu verbinden'
      },
      callUs: 'Rufen Sie Uns An',
      instagram: 'Instagram',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Standorte in Südtirol'
      },
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      visitRequirements: {
        title: 'Besuchsanforderungen',
        subtitle: 'Alles, was Sie für Ihren ersten Besuch wissen müssen'
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
        'Saubere Trainingsmatten',
        'Grundlegende Schutzausrüstung für Probestunden',
        'Erfahrene Anleitung',
        'Einladende Gemeinschaftsumgebung'
      ],
      specialInstructions: 'Besondere Anweisungen',
      instructions: {
        age: 'Mindestalter für Erwachsenenkurse ist 16 Jahre',
        health: 'Bitte informieren Sie uns über Verletzungen oder Gesundheitszustände',
        equipment: 'Leihausrüstung für Probestunden verfügbar',
        payment: 'Probestunden sind für Erstbesucher kostenlos'
      },
      cta: {
        title: 'Bereit zu Beginnen?',
        description: 'Machen Sie den ersten Schritt zu Ihrer Kampfkunst-Reise. Kontaktieren Sie uns noch heute, um Ihre kostenlose Probestunde zu vereinbaren.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Die sanfte Kunst, die Hebelwirkung und Technik über Kraft lehrt'
        },
        overview: {
          title: 'Was ist Brazilian Jiu-Jitsu?',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Entwickelt aus traditionellem japanischem Jujitsu und Judo, betont BJJ Technik, Hebelwirkung und Timing über rohe Kraft.',
            'Oft als "die sanfte Kunst" bezeichnet, ermöglicht BJJ kleineren Praktizierenden, sich erfolgreich gegen größere Gegner durch richtige Technik und Strategie zu verteidigen. Dies macht es zu einer idealen Kampfkunst für Menschen aller Altersgruppen, Größen und Fitnesslevel.',
            'In der Sport Academy folgt unser BJJ-Programm traditioneller brasilianischer Methodik und integriert moderne Trainingstechniken, um Schülern zu helfen, sowohl technische Fähigkeiten als auch körperliche Konditionierung zu entwickeln.'
          ]
        },
        techniques: {
          title: 'Schlüsseltechniken, die Sie Meistern',
          subtitle: 'Umfassendes Curriculum, das alle Aspekte des Brazilian Jiu-Jitsu abdeckt',
          guardWork: {
            title: 'Guard-Arbeit',
            items: [
              'Closed Guard Grundlagen',
              'Open Guard Variationen',
              'Guard-Erhaltung und -Wiederherstellung',
              'Sweeps und Submissions aus dem Guard'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Würgegriffe und Strangulationen',
              'Gelenkhebel und Armhebel',
              'Beinhebel und Fußangriffe',
              'Submission-Verteidigung und Befreiungen'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Seitenkontrolle',
              'Rückenkontrolle und Rear Mount',
              'Knee on Belly und North-South',
              'Übergänge zwischen Positionen'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ-Gürtelsystem',
          subtitle: 'Fortschritt durch das traditionelle Brazilian Jiu-Jitsu Rangsystem',
          philosophy: {
            title: 'Unser Ansatz zum Fortschritt',
            description: 'In der Sport Academy basiert die Gürtelbeförderung auf technischem Wissen, Sparring-Fähigkeit und Demonstration von BJJ-Prinzipien. Wir folgen traditionellen brasilianischen Standards und stellen sicher, dass sich jeder Schüler in seinem eigenen Tempo entwickelt.'
          }
        },
        history: {
          title: 'Geschichte des Brazilian Jiu-Jitsu',
          paragraphs: [
            'Brazilian Jiu-Jitsu wurde im frühen 20. Jahrhundert entwickelt, als der japanische Judoka Mitsuyo Maeda die Gracie-Familie in Brasilien unterrichtete. Die Gracies, insbesondere Helio Gracie, passten die Techniken an, um eine bodenfokussiertere Kampfkunst zu schaffen.',
            'Die Wirksamkeit von BJJ wurde in frühen Mixed Martial Arts-Wettkämpfen bewiesen, wo Royce Gracie viel größere Gegner mit überlegener Technik und Strategie besiegte.',
            'Heute wird BJJ weltweit praktiziert und bildet die Grundlage des modernen Mixed Martial Arts-Bodenkampfs.'
          ],
          keyFigures: {
            title: 'Schlüsselfiguren',
            people: [
              {
                name: 'Mitsuyo Maeda',
                description: 'Japanischer Judoka, der Jujitsu nach Brasilien brachte'
              },
              {
                name: 'Helio Gracie',
                description: 'Gründer des modernen Brazilian Jiu-Jitsu'
              },
              {
                name: 'Royce Gracie',
                description: 'Bewies BJJ-Wirksamkeit in der frühen UFC'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ-Trainingsplan',
          subtitle: 'Regelmäßige Kurse an beiden Standorten verfügbar'
        },
        cta: {
          title: 'Beginnen Sie Ihre BJJ-Reise',
          description: 'Erleben Sie die sanfte Kunst, die die Kampfkünste weltweit transformiert hat.',
          joinButton: 'BJJ-Programm Beitreten'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'No-Gi-Kampfsport fokussiert auf Takedowns, Kontrolle und Submissions'
        },
        overview: {
          title: 'Was ist Grappling?',
          paragraphs: [
            'Grappling ist eine Form des Kampfsports, die Wrestling, Takedowns und Submission-Techniken ohne das traditionelle Gi (Uniform) beinhaltet. Dieser No-Gi-Ansatz betont Geschwindigkeit, Athletik und Anpassungsfähigkeit.',
            'Im Gegensatz zu traditionellen Kampfkünsten, die auf das Greifen der Uniform angewiesen sind, erfordert Grappling von den Praktizierenden, Gegner durch Körperpositionierung, Underhooks, Overhooks und direkte Kontakttechniken zu kontrollieren.',
            'Grappling ist essentiell für Mixed Martial Arts und bietet ausgezeichnete Konditionierung bei der Entwicklung praktischer Selbstverteidigungsfähigkeiten, die in realen Situationen anwendbar sind.'
          ]
        },
        techniques: {
          title: 'Kern-Grappling-Techniken',
          subtitle: 'Meistern Sie die grundlegenden Fähigkeiten des No-Gi-Grapplings',
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
            title: 'Kontrollpositionen',
            items: [
              'Seitenkontrolle und Mount',
              'Rückenkontrolle und Hooks',
              'Knee on Belly und North-South',
              'Übergangs-Timing und Flow'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Rear Naked Chokes',
              'Armhebel und Kimuras',
              'Beinhebel und Heel Hooks',
              'Guillotines und D\'Arce Chokes'
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
                description: 'Live-Praxis aus spezifischen Positionen'
              },
              {
                title: 'Flow Rolling',
                description: 'Kontinuierliche Bewegungspraxis in kontrolliertem Tempo'
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
                description: 'Mobilitätsarbeit zur Verletzungsprävention'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grapplings',
          subtitle: 'Körperliche und geistige Vorteile des No-Gi-Trainings',
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
              description: 'Verbessert Geschwindigkeit und athletische Leistung'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Praktische Fähigkeiten für reale Situationen'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Zeitplan',
          subtitle: 'No-Gi-Trainingseinheiten während der Woche'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Ikonen, die den Sport des Grapplings geprägt haben',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'ADCC-Champion',
              description: 'Dominanter No-Gi-Grappler und Submission-Spezialist'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Mehrfacher Weltmeister',
              description: 'Technischer Meister bekannt für Butterfly Guard'
            },
            {
              name: 'John Danaher',
              title: 'Renommierter Trainer',
              description: 'Revolutionärer Instruktor und Systementwickler'
            }
          ]
        },
        cta: {
          title: 'Meistern Sie No-Gi-Grappling',
          description: 'Entwickeln Sie die Fähigkeiten, die in MMA und modernem Submission-Grappling verwendet werden.',
          joinButton: 'Grappling-Programm Beitreten'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der alle Kampfkunstdisziplinen kombiniert'
        },
        overview: {
          title: 'Was ist Mixed Martial Arts?',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der vollständigste Kampfsport, der Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkünsten kombiniert. Kämpfer müssen im Schlagen, Grappling und Bodenkampf versiert sein.',
            'MMA testet jeden Aspekt der Kampfkunstfähigkeit - vom Stand-up-Schlagen bis zur Takedown-Verteidigung, von der Bodenkontrolle bis zu Submission-Techniken. Dieser umfassende Ansatz schafft vielseitige Kämpfer, die sich an jede Situation anpassen können.',
            'In der Sport Academy integriert unser MMA-Programm alle Kampfdisziplinen in ein kohärentes Trainingssystem und bereitet Schüler auf Wettkämpfe vor oder bietet das ultimative Fitness- und Selbstverteidigungserlebnis.'
          ]
        },
        techniques: {
          title: 'MMA-Techniken',
          subtitle: 'Meistern Sie alle Kampfbereiche in Mixed Martial Arts',
          striking: {
            title: 'Schlagen',
            items: [
              'Box-Kombinationen und Beinarbeit',
              'Muay Thai-Tritte und Knie',
              'Ellbogenschläge und Clinch-Arbeit',
              'Defensive Kopfbewegung und Blocken'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken und Setups',
              'Takedown-Verteidigung und Sprawls',
              'Käfig-Arbeit und Dirty Boxing',
              'Ground and Pound-Positionierung'
            ]
          },
          groundGame: {
            title: 'Bodenkampf',
            items: [
              'Submission-Techniken und Verteidigung',
              'Bodenkontrolle und Übergänge',
              'Guard-Arbeit und Sweeps',
              'Befreiungstechniken und Scrambles'
            ]
          }
        },
        history: {
          title: 'Geschichte von MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln im Pankration, einem Kampfsport im antiken Griechenland. Modernes MMA entstand in den 1990er Jahren mit der Schaffung der Ultimate Fighting Championship (UFC), die darauf ausgelegt war, die effektivste Kampfkunst zu bestimmen.',
            'Frühe Wettkämpfe zeigten Spezialisten aus verschiedenen Disziplinen - Boxer, Ringer, Karate-Praktizierende und Brazilian Jiu-Jitsu-Kämpfer. Mit der Zeit wurde klar, dass die erfolgreichsten Kämpfer Fähigkeiten in allen Bereichen benötigten.',
            'Heutige MMA-Athleten sind vollständige Kampfkünstler, die in Schlagen, Grappling und Konditionierung trainieren, um auf höchstem Niveau des Sports zu konkurrieren.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erstes UFC-Event demonstriert Wirksamkeit verschiedener Kampfkünste'
              },
              {
                year: '2001',
                description: 'Einheitliche Regeln für professionelles MMA etabliert'
              },
              {
                year: '2016',
                description: 'MMA wird Mainstream mit globaler Popularität'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des MMA-Trainings',
          subtitle: 'Vollständige körperliche und geistige Entwicklung durch Mixed Martial Arts',
          items: [
            {
              icon: '🥊',
              title: 'Vollständige Fitness',
              description: 'Ultimative Herz-Kreislauf- und Kraftkonditionierung'
            },
            {
              icon: '🧠',
              title: 'Mentale Disziplin',
              description: 'Entwickelt Fokus, Selbstvertrauen und mentale Stärke'
            },
            {
              icon: '⚔️',
              title: 'Selbstverteidigung',
              description: 'Umfassendstes verfügbares Selbstverteidigungssystem'
            },
            {
              icon: '🏆',
              title: 'Wettkampfbereit',
              description: 'Vorbereitung auf Amateur- und Profi-Wettkämpfe'
            }
          ]
        },
        schedule: {
          title: 'MMA-Trainingsplan',
          subtitle: 'Umfassende Mixed Martial Arts-Kurse'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Kämpfer, die Mixed Martial Arts definierten',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC-Pionier',
              description: 'Bewies Wirksamkeit von Brazilian Jiu-Jitsu in der frühen UFC'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Längster regierender UFC-Mittelgewichts-Champion'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Von vielen als der größte Schwergewichtler aller Zeiten betrachtet'
            }
          ]
        },
        cta: {
          title: 'Werden Sie ein Vollständiger Kämpfer',
          description: 'Trainieren Sie im umfassendsten Kampfsport der Welt.',
          joinButton: 'MMA-Programm Beitreten'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Champions schmieden seit 2017',
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
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM',
      instantConfirmation: 'Conferma istantanea',
      dropInWelcome: 'Visite spontanee benvenute',
      duringTrainingHours: 'Durante gli orari di allenamento',
      visitUs: 'Visitaci'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Benvenuti alla Sport Academy',
        description: 'Situata a Campo Tures e Brunico, Sport Academy è dal 2017 la destinazione principale per l\'allenamento di MMA, Brazilian Jiu-Jitsu e Grappling. I nostri istruttori esperti forniscono istruzioni di livello mondiale in un ambiente professionale e di supporto.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Allenando campioni dal 2017',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'Da principiante ad avanzato',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come un Combattente',
        subtitle: 'Padroneggia l\'arte degli sport da combattimento con i nostri programmi di allenamento completi'
      },
      mma: {
        description: 'Sport da combattimento completo che combina striking, wrestling e ground fighting per l\'esperienza di arti marziali definitiva.'
      },
      bjj: {
        description: 'L\'arte gentile che insegna leva e tecnica sulla forza, perfetta per autodifesa e competizione.'
      },
      grappling: {
        description: 'Grappling no-gi focalizzato su takedown, controllo e submission - essenziale per MMA e autodifesa.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Scegli il tuo percorso verso l\'eccellenza nelle arti marziali'
      },
      quickLinks: {
        viewClasses: 'Vedi Corsi',
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
        description: 'Scopri la nostra gamma completa di programmi di arti marziali progettati per tutti i livelli di abilità ed età. Dal tradizionale Brazilian Jiu-Jitsu al moderno allenamento MMA, offriamo istruzioni esperte in un ambiente di supporto.'
      },
      mma: {
        title: 'Corso MMA (Mixed Martial Arts)',
        description: 'L\'MMA è uno sport da combattimento completo che combina striking, wrestling e ground fighting. È ideale per chi cerca una disciplina completa, realistica e fisicamente impegnativa.',
        features: [
          'Tecniche di striking: pugni, calci, gomitate, ginocchiate',
          'Takedown e lavoro in clinch (wrestling e judo)',
          'Controllo a terra e submission (basato su BJJ)',
          'Condizionamento fisico e gestione della pressione'
        ]
      },
      bjj: {
        title: 'Corso BJJ (Brazilian Jiu-Jitsu)',
        description: 'Il Brazilian Jiu-Jitsu si concentra sul combattimento a terra e le submission utilizzando leva e tecnica sulla forza. È un\'arte marziale strategica, altamente efficace, adatta a tutti i livelli e tipi di corpo.',
        features: [
          'Posizioni chiave a terra e transizioni',
          'Tecniche di submission e come difenderle',
          'Come controllare gli avversari e sfuggire alle posizioni svantaggiose',
          'Sviluppo di concentrazione, disciplina e fiducia in se stessi'
        ]
      },
      grappling: {
        title: 'Corso Grappling',
        description: 'Il Grappling è uno sport da combattimento senza colpi basato su takedown, controllo e submission, praticato senza gi. È realistico, dinamico e comunemente usato nell\'allenamento MMA e di autodifesa.',
        features: [
          'Tecniche di takedown e difesa dalla posizione eretta',
          'Passaggio della guardia e controllo a terra',
          'Leve articolari e submission di strangolamento',
          'Agilità, equilibrio e consapevolezza corporea'
        ]
      },
      kidsBjj: {
        title: 'Corso BJJ per Bambini (Età 8–14)',
        description: 'Un corso strutturato per bambini di età compresa tra 8 e 14 anni che li introduce al Brazilian Jiu-Jitsu in un ambiente sicuro e positivo. Attraverso tecnica e esercizi ludici, i bambini sviluppano abilità fisiche e mentali divertendosi.',
        features: [
          'Movimenti BJJ di base, posizioni e submission semplici',
          'Come cadere, rotolare e muoversi in sicurezza a terra',
          'Rispetto per le regole, gli istruttori e i compagni di squadra',
          'Fiducia, disciplina e controllo emotivo'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Programma di grappling divertente e coinvolgente progettato specificamente per giovani atleti per sviluppare abilità fondamentali di wrestling e grappling.',
        features: [
          'Fondamenti di wrestling',
          'Tecniche di takedown',
          'Basi del controllo a terra',
          'Lavoro di squadra e sportività',
          'Preparazione alla competizione'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Allenamento di wrestling tradizionale focalizzato su takedown, controllo e condizionamento per atleti competitivi e ricreativi.',
        features: [
          'Takedown singoli e doppi',
          'Postura e movimento del wrestling',
          'Sprawl e tecniche difensive',
          'Condizionamento e allenamento della forza',
          'Preparazione alla competizione'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Pronto a Iniziare il Tuo Viaggio?',
        description: 'Unisciti alla nostra comunità di artisti marziali dedicati e inizia la tua trasformazione oggi.'
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
      membershipBenefits: 'Vantaggi dell\'Abbonamento',
      guidelines: {
        arrive: 'Arriva 10 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'Gi richiesto per le lezioni di BJJ',
        noGi: 'Abbigliamento no-gi per Grappling e MMA'
      },
      benefits: {
        allClasses: 'Accesso a tutte le lezioni incluso',
        openMat: 'Sessioni di allenamento libero gratuite',
        bothLocations: 'Allenati in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto ad Allenarti?',
        description: 'Prenota la tua prima lezione oggi e inizia il tuo viaggio nelle arti marziali con noi.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Incontra i nostri istruttori di livello mondiale che portano anni di esperienza, passione e competenza in ogni sessione di allenamento.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore e Fondatore',
        background: 'Con oltre 15 anni di esperienza nelle arti marziali, Matteo ha fondato Sport Academy nel 2017 con la visione di portare allenamento MMA e BJJ di livello mondiale in Alto Adige. La sua dedizione all\'eccellenza tecnica e allo sviluppo degli studenti ha reso Sport Academy la destinazione principale per le arti marziali nella regione.',
        specializations: [
          'Cintura Nera Brazilian Jiu-Jitsu',
          'Coaching di Competizione MMA',
          'Tecniche di Wrestling',
          'Programmi di Sviluppo Giovanile'
        ],
        achievements: [
          'Fondato Sport Academy nel 2017',
          'Allenato diversi campioni regionali',
          'Istruttore certificato Cintura Nera BJJ',
          'Oltre 500 studenti allenati'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior BJJ',
        background: 'Christian porta una ricchezza di conoscenze nel Brazilian Jiu-Jitsu e grappling alla Sport Academy. Il suo approccio tecnico e lo stile di insegnamento paziente lo rendono una risorsa inestimabile per studenti di tutti i livelli, dai principianti ai competitori avanzati.',
        specializations: [
          'Istruzione Brazilian Jiu-Jitsu',
          'Preparazione alla Competizione',
          'Sviluppo Tecnico',
          'Concetti Avanzati di Grappling'
        ],
        achievements: [
          'Cintura Marrone BJJ sotto lignaggio rinomato',
          'Vittorie multiple in tornei',
          'Specializzato in istruzione tecnica',
          'Esperto in strategia di competizione'
        ]
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      philosophy: {
        title: 'La Nostra Filosofia di Coaching',
        technical: {
          title: 'Eccellenza Tecnica',
          description: 'Ci concentriamo sulla tecnica corretta e sui fondamenti per costruire una base solida per tutti gli studenti.'
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
        description: 'Sperimenta istruzioni di livello mondiale dal nostro team di coaching esperto.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il piano di abbonamento che si adatta ai tuoi obiettivi e al tuo programma. Tutti gli abbonamenti includono l\'accesso alla nostra gamma completa di corsi e a entrambe le sedi di allenamento.'
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
        subtitle: 'Programma di allenamento Brazilian Jiu-Jitsu dedicato',
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
        'Accesso al team di competizione',
        'Workshop per principianti inclusi'
      ],
      summerIncludes: [
        'Tutte le lezioni estive incluse',
        'Accesso a entrambe le sedi',
        'Sessioni di allenamento libero',
        'Programma flessibile'
      ],
      bjjIncludes: [
        'Tutte le lezioni di BJJ incluse',
        'Accesso a entrambe le sedi',
        'Sessioni di allenamento libero',
        'Tracciamento progressione cinture'
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
        description: 'Sessioni di coaching uno-a-uno personalizzate sui tuoi obiettivi e bisogni specifici.',
        price: '€50',
        duration: 'per sessione'
      },
      competitionPrep: {
        title: 'Preparazione Competizione',
        description: 'Programma di allenamento specializzato progettato per prepararti a tornei e competizioni.',
        price: '€80',
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
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro curriculum completo con progressione strutturata. La stagione estiva (Luglio-Agosto) fornisce allenamento flessibile per mantenere le abilità durante la pausa.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso alle lezioni in entrambe le sedi di Campo Tures e Brunico. Puoi mescolare e abbinare in base al tuo programma.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo una lezione di prova gratuita per nuovi studenti. Contattaci per programmare la tua prima sessione e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Che attrezzatura mi serve?',
          answer: 'Per i principianti, solo abbigliamento comodo da allenamento. Forniamo attrezzatura di base per le lezioni di prova. Man mano che progredisci, avrai bisogno di un gi per BJJ e attrezzatura appropriata per altre discipline.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio Oggi',
        description: 'Unisciti alla nostra comunità di artisti marziali dedicati e trasforma la tua vita attraverso l\'allenamento.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Pronto a iniziare il tuo viaggio nelle arti marziali? Mettiti in contatto con noi oggi per saperne di più sui nostri programmi, programmare una lezione di prova o fare qualsiasi domanda tu possa avere.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con Sport Academy'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due sedi convenienti in Alto Adige'
      },
      address: 'Indirizzo',
      trainingSchedule: 'Orario di Allenamento',
      visitRequirements: {
        title: 'Requisiti per la Visita',
        subtitle: 'Tutto quello che devi sapere per la tua prima visita'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      whatWeProvide: 'Cosa Forniamo',
      bring: [
        'Abbigliamento comodo da allenamento',
        'Bottiglia d\'acqua',
        'Asciugamano',
        'Atteggiamento positivo e volontà di imparare'
      ],
      provide: [
        'Tappetini di allenamento puliti',
        'Attrezzatura protettiva di base per le prove',
        'Istruzione esperta',
        'Ambiente comunitario accogliente'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'L\'età minima per le lezioni per adulti è 16 anni',
        health: 'Ti preghiamo di informarci di eventuali infortuni o condizioni di salute',
        equipment: 'Attrezzatura a noleggio disponibile per le lezioni di prova',
        payment: 'Le lezioni di prova sono gratuite per i visitatori per la prima volta'
      },
      cta: {
        title: 'Pronto a Iniziare?',
        description: 'Fai il primo passo verso il tuo viaggio nelle arti marziali. Contattaci oggi per programmare la tua lezione di prova gratuita.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'L\'arte gentile che insegna leva e tecnica sulla forza'
        },
        overview: {
          title: 'Cos\'è il Brazilian Jiu-Jitsu?',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione. Sviluppato dal tradizionale jujitsu giapponese e judo, il BJJ enfatizza tecnica, leva e tempismo sulla forza bruta.',
            'Spesso chiamata "l\'arte gentile", il BJJ permette ai praticanti più piccoli di difendersi con successo contro avversari più grandi attraverso tecnica e strategia appropriate. Questo lo rende un\'arte marziale ideale per persone di tutte le età, dimensioni e livelli di fitness.',
            'Alla Sport Academy, il nostro programma BJJ segue la metodologia brasiliana tradizionale incorporando tecniche di allenamento moderne per aiutare gli studenti a sviluppare sia abilità tecniche che condizionamento fisico.'
          ]
        },
        techniques: {
          title: 'Tecniche Chiave che Padroneggerai',
          subtitle: 'Curriculum completo che copre tutti gli aspetti del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Fondamenti della guardia chiusa',
              'Variazioni della guardia aperta',
              'Ritenzione e recupero della guardia',
              'Sweep e submission dalla guardia'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Strangolamenti e strozzature',
              'Leve articolari e arm bar',
              'Leve alle gambe e attacchi ai piedi',
              'Difesa dalle submission e fughe'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e controllo laterale',
              'Controllo della schiena e rear mount',
              'Knee on belly e north-south',
              'Transizioni tra posizioni'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema di Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di classificazione tradizionale del Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Il Nostro Approccio alla Progressione',
            description: 'Alla Sport Academy, la promozione delle cinture si basa sulla conoscenza tecnica, abilità di sparring e dimostrazione dei principi BJJ. Seguiamo gli standard brasiliani tradizionali assicurando che ogni studente si sviluppi al proprio ritmo.'
          }
        },
        history: {
          title: 'Storia del Brazilian Jiu-Jitsu',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu fu sviluppato all\'inizio del XX secolo quando il judoka giapponese Mitsuyo Maeda insegnò alla famiglia Gracie in Brasile. I Gracie, in particolare Helio Gracie, adattarono le tecniche per creare un\'arte marziale più focalizzata sul terreno.',
            'L\'efficacia del BJJ fu dimostrata nelle prime competizioni di arti marziali miste, dove Royce Gracie sconfisse avversari molto più grandi usando tecnica e strategia superiori.',
            'Oggi, il BJJ è praticato in tutto il mondo e forma la base del combattimento a terra delle moderne arti marziali miste.'
          ],
          keyFigures: {
            title: 'Figure Chiave',
            people: [
              {
                name: 'Mitsuyo Maeda',
                description: 'Judoka giapponese che portò il jujitsu in Brasile'
              },
              {
                name: 'Helio Gracie',
                description: 'Fondatore del moderno Brazilian Jiu-Jitsu'
              },
              {
                name: 'Royce Gracie',
                description: 'Dimostrò l\'efficacia del BJJ nella prima UFC'
              }
            ]
          }
        },
        schedule: {
          title: 'Orario Allenamento BJJ',
          subtitle: 'Lezioni regolari disponibili in entrambe le sedi'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Sperimenta l\'arte gentile che ha trasformato le arti marziali in tutto il mondo.',
          joinButton: 'Unisciti al Programma BJJ'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Sport da combattimento no-gi focalizzato su takedown, controllo e submission'
        },
        overview: {
          title: 'Cos\'è il Grappling?',
          paragraphs: [
            'Il Grappling è una forma di sport da combattimento che coinvolge wrestling, takedown e tecniche di submission eseguite senza il tradizionale gi (uniforme). Questo approccio no-gi enfatizza velocità, atletismo e adattabilità.',
            'A differenza delle arti marziali tradizionali che si basano sull\'afferrare l\'uniforme, il grappling richiede ai praticanti di controllare gli avversari attraverso posizionamento del corpo, underhook, overhook e tecniche di contatto diretto.',
            'Il Grappling è essenziale per le arti marziali miste e fornisce un eccellente condizionamento sviluppando abilità di autodifesa pratiche applicabili in situazioni del mondo reale.'
          ]
        },
        techniques: {
          title: 'Tecniche Core del Grappling',
          subtitle: 'Padroneggia le abilità fondamentali del grappling no-gi',
          takedowns: {
            title: 'Takedown',
            items: [
              'Takedown singoli e doppi alle gambe',
              'Proiezioni dell\'anca e lanci',
              'Sprawl e difesa dai takedown',
              'Lavoro in clinch e dirty boxing'
            ]
          },
          control: {
            title: 'Posizioni di Controllo',
            items: [
              'Controllo laterale e mount',
              'Controllo della schiena e hook',
              'Knee on belly e north-south',
              'Timing delle transizioni e flow'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Rear naked choke',
              'Arm bar e kimura',
              'Leve alle gambe e heel hook',
              'Guillotine e D\'Arce choke'
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
                description: 'Pratica dal vivo da posizioni specifiche'
              },
              {
                title: 'Flow Rolling',
                description: 'Pratica di movimento continuo a ritmo controllato'
              }
            ]
          },
          conditioning: {
            title: 'Condizionamento Fisico',
            methods: [
              {
                title: 'Cardio Grappling',
                description: 'Condizionamento sport-specifico per la resistenza'
              },
              {
                title: 'Allenamento della Forza',
                description: 'Forza funzionale per i movimenti del grappling'
              },
              {
                title: 'Flessibilità',
                description: 'Lavoro di mobilità per la prevenzione degli infortuni'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici del Grappling',
          subtitle: 'Vantaggi fisici e mentali dell\'allenamento no-gi',
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
              icon: '⚡',
              title: 'Potenza Esplosiva',
              description: 'Migliora velocità e prestazioni atletiche'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Abilità pratiche per situazioni del mondo reale'
            }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Sessioni di allenamento no-gi durante la settimana'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Icone che hanno plasmato lo sport del grappling',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'Campione ADCC',
              description: 'Grappler no-gi dominante e specialista in submission'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Campione del Mondo Multiplo',
              description: 'Maestro tecnico noto per la butterfly guard'
            },
            {
              name: 'John Danaher',
              title: 'Allenatore Rinomato',
              description: 'Istruttore rivoluzionario e sviluppatore di sistemi'
            }
          ]
        },
        cta: {
          title: 'Padroneggia il Grappling No-Gi',
          description: 'Sviluppa le abilità usate nell\'MMA e nel submission grappling moderno.',
          joinButton: 'Unisciti al Programma Grappling'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina tutte le discipline delle arti marziali'
        },
        overview: {
          title: 'Cos\'è la Mixed Martial Arts?',
          paragraphs: [
            'La Mixed Martial Arts (MMA) è lo sport da combattimento più completo, combinando tecniche da boxe, kickboxing, wrestling, Brazilian Jiu-Jitsu e altre arti marziali. I combattenti devono essere competenti nello striking, grappling e combattimento a terra.',
            'L\'MMA testa ogni aspetto dell\'abilità nelle arti marziali - dallo striking in piedi alla difesa dai takedown, dal controllo a terra alle tecniche di submission. Questo approccio completo crea combattenti completi capaci di adattarsi a qualsiasi situazione.',
            'Alla Sport Academy, il nostro programma MMA integra tutte le discipline da combattimento in un sistema di allenamento coeso, preparando gli studenti per la competizione o fornendo l\'esperienza definitiva di fitness e autodifesa.'
          ]
        },
        techniques: {
          title: 'Tecniche MMA',
          subtitle: 'Padroneggia tutte le distanze di combattimento nelle arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Combinazioni di boxe e gioco di gambe',
              'Calci e ginocchiate Muay Thai',
              'Colpi di gomito e lavoro in clinch',
              'Movimento difensivo della testa e parate'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche di takedown e setup',
              'Difesa dai takedown e sprawl',
              'Lavoro alla gabbia e dirty boxing',
              'Posizionamento ground and pound'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Tecniche di submission e difesa',
              'Controllo a terra e transizioni',
              'Lavoro di guardia e sweep',
              'Tecniche di fuga e scramble'
            ]
          }
        },
        history: {
          title: 'Storia dell\'MMA',
          paragraphs: [
            'La Mixed Martial Arts ha radici antiche nel pankration, uno sport da combattimento nell\'antica Grecia. L\'MMA moderna è emersa negli anni \'90 con la creazione dell\'Ultimate Fighting Championship (UFC), progettata per determinare l\'arte marziale più efficace.',
            'Le prime competizioni presentavano specialisti di diverse discipline - pugili, lottatori, praticanti di karate e combattenti di Brazilian Jiu-Jitsu. Nel tempo, divenne chiaro che i combattenti di maggior successo avevano bisogno di abilità in tutte le aree.',
            'Gli atleti MMA di oggi sono artisti marziali completi, che si allenano nello striking, grappling e condizionamento per competere ai livelli più alti dello sport.'
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
                description: 'Regole unificate stabilite per l\'MMA professionale'
              },
              {
                year: '2016',
                description: 'L\'MMA diventa mainstream con popolarità globale'
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
              description: 'Condizionamento cardiovascolare e di forza definitivo'
            },
            {
              icon: '🧠',
              title: 'Disciplina Mentale',
              description: 'Sviluppa concentrazione, fiducia e resistenza mentale'
            },
            {
              icon: '⚔️',
              title: 'Autodifesa',
              description: 'Sistema di autodifesa più completo disponibile'
            },
            {
              icon: '🏆',
              title: 'Pronto per la Competizione',
              description: 'Preparazione per competizioni amatoriali e professionali'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento MMA',
          subtitle: 'Lezioni complete di arti marziali miste'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Combattenti che hanno definito le arti marziali miste',
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
          description: 'Allenati nello sport da combattimento più completo del mondo.',
          joinButton: 'Unisciti al Programma MMA'
        }
      }
    },
    footer: {
      tagline: 'Allenamento Elite MMA, BJJ e Grappling',
      subtitle: 'Forgiando Combattenti dal 2017',
      copyright: '© 2024 Sport Academy. Tutti i diritti riservati.'
    }
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
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

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};