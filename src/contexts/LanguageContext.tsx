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
      duringTrainingHours: 'During training hours',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates & DMs',
      instantConfirmation: 'Instant confirmation'
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
        description: 'Complete mixed martial arts training combining striking, grappling, and ground game techniques for the ultimate fighting experience.'
      },
      bjj: {
        description: 'Master the gentle art of Brazilian Jiu-Jitsu, focusing on leverage, technique, and ground fighting to overcome larger opponents.'
      },
      grappling: {
        description: 'Develop superior wrestling and submission skills through no-gi grappling training that emphasizes speed and athleticism.'
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
        description: 'Discover our comprehensive range of martial arts programs designed for all skill levels. From beginner-friendly introductions to advanced competition training, we have the perfect class for your journey.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'The ultimate combat sport combining striking, wrestling, and submission techniques. Our MMA classes integrate boxing, kickboxing, wrestling, and Brazilian Jiu-Jitsu to create well-rounded fighters.',
        features: [
          'Stand-up striking techniques',
          'Wrestling and takedowns',
          'Ground fighting and submissions',
          'Cage work and clinch fighting',
          'Conditioning and fight preparation'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'The gentle art that teaches you to use leverage and technique to overcome larger, stronger opponents. Our BJJ program focuses on both gi and no-gi training with emphasis on self-defense and sport application.',
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
        description: 'No-gi submission wrestling that emphasizes speed, athleticism, and modern techniques. Perfect for those who want to focus on submission grappling without the traditional gi.',
        features: [
          'No-gi techniques and positions',
          'Leg locks and modern submissions',
          'Wrestling-based takedowns',
          'Submission chains and setups',
          'Competition strategy'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'A fun and safe introduction to Brazilian Jiu-Jitsu for children. Our kids program focuses on building confidence, discipline, and physical fitness while learning valuable self-defense skills.',
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
        description: 'Dynamic grappling program for young athletes that combines wrestling and submission techniques in a safe, structured environment that promotes growth and learning.',
        features: [
          'Wrestling fundamentals',
          'Basic submission techniques',
          'Strength and conditioning',
          'Competition opportunities',
          'Teamwork and sportsmanship'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling training focusing on takedowns, control, and conditioning. Essential for MMA fighters and grapplers looking to improve their takedown game.',
        features: [
          'Single and double leg takedowns',
          'Sprawls and defensive techniques',
          'Top control and riding',
          'Conditioning and drilling',
          'Competition preparation'
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
        description: 'Meet our world-class instructors who bring decades of combined experience in martial arts, competition, and teaching to every class.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 15 years of martial arts experience, Matteo is a dedicated practitioner and instructor of Brazilian Jiu-Jitsu and Mixed Martial Arts. His passion for combat sports began in his youth and has evolved into a lifelong commitment to excellence and teaching.',
        specializations: [
          'Brazilian Jiu-Jitsu (Brown Belt)',
          'Mixed Martial Arts',
          'Grappling and No-Gi',
          'Competition Coaching',
          'Youth Development'
        ],
        achievements: [
          'Founded Sport Academy in 2017',
          'Multiple regional BJJ championships',
          'Certified instructor in diverse martial arts',
          'Developed successful youth programs',
          'Mentored numerous competition winners'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings a wealth of knowledge and technical expertise to Sport Academy. His analytical approach to martial arts and dedication to continuous learning makes him an invaluable instructor for students of all levels.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Technical Analysis',
          'Competition Strategy',
          'Advanced Grappling',
          'Strength and Conditioning'
        ],
        achievements: [
          'High-level BJJ competitor',
          'Technical specialist in diverse techniques',
          'Successful competition coach',
          'Expert in modern grappling methods',
          'Dedicated to student development'
        ]
      },
      background: 'Background',
      specializations: 'Specializations',
      achievements: 'Achievements',
      philosophy: {
        title: 'Our Coaching Philosophy',
        technical: {
          title: 'Technical Excellence',
          description: 'We believe in building a strong foundation of fundamental techniques before advancing to complex movements.'
        },
        individual: {
          title: 'Individual Growth',
          description: 'Every student is unique. We tailor our instruction to help each person reach their personal goals.'
        },
        respect: {
          title: 'Respect & Discipline',
          description: 'Martial arts teach more than fighting techniques - they build character, respect, and mental strength.'
        }
      },
      cta: {
        title: 'Train with the Best',
        description: 'Learn from experienced coaches who are committed to your success and development.'
      }
    },
    contact: {
      hero: {
        title: 'Contact Us',
        description: 'Ready to start your martial arts journey? Get in touch with us to learn more about our programs, schedule a visit, or ask any questions you might have.'
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
      visitRequirements: {
        title: 'First Time Visiting?',
        subtitle: 'Here\'s what you need to know before your first class'
      },
      firstTimeVisitors: 'First Time Visitors',
      whatToBring: 'What to Bring',
      bring: [
        'Comfortable athletic clothing',
        'Water bottle',
        'Towel',
        'Positive attitude and willingness to learn'
      ],
      whatWeProvide: 'What We Provide',
      provide: [
        'Temporary basic gloves and shin guards',
        'Clean training mats',
        'Professional instruction',
        'Welcoming training environment'
      ],
      specialInstructions: 'Important Information',
      instructions: {
        age: 'Age Requirements: Kids classes 6-16, Adult classes 16+',
        health: 'Health: Please inform us of any injuries or medical conditions',
        equipment: 'Equipment: Students must purchase their own gi and protective gear',
        payment: 'Payment: Trial classes available, membership required for regular training'
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Take the first step towards your martial arts journey. Contact us today to get started.'
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
        arrive: 'Arrive 10-15 minutes early for warm-up',
        water: 'Bring water bottle and towel',
        gi: 'BJJ classes require gi (can be purchased at gym)',
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
        title: 'Ready to Train?',
        description: 'Join us for any of our scheduled classes. New students always welcome!'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the membership plan that fits your training goals and schedule. All memberships include access to both locations and all class types.'
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
        subtitle: 'Perfect for those focused exclusively on Brazilian Jiu-Jitsu',
        program: 'BJJ Focused Program',
        description: 'Access to all BJJ classes at both locations'
      },
      adults: 'Adults',
      students: 'Students (with valid ID)',
      month: 'month',
      whatsIncluded: 'What\'s Included',
      mainIncludes: [
        'Unlimited access to all classes',
        'Training at both Campo Tures and Brunico',
        'Open mat sessions',
        'Beginner-friendly instruction',
        'Competition team opportunities'
      ],
      summerIncludes: [
        'All summer classes included',
        'Both locations access',
        'Flexible drop-in schedule',
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
        description: 'Enhance your training with our specialized programs and personal instruction'
      },
      personalTraining: {
        title: 'Personal Training',
        description: 'One-on-one instruction tailored to your specific goals and needs',
        price: '€50',
        duration: 'per hour'
      },
      competitionPrep: {
        title: 'Competition Prep',
        description: 'Specialized training for upcoming tournaments and competitions',
        price: '€40',
        duration: 'per session'
      },
      seminars: {
        title: 'Seminars',
        description: 'Special workshops with guest instructors and advanced techniques',
        price: '€30',
        duration: 'per seminar'
      },
      faq: {
        title: 'Frequently Asked Questions',
        seasons: {
          question: 'What\'s the difference between seasons?',
          answer: 'The main season (September-June) offers our full curriculum with consistent training partners and structured progression. Summer season is more flexible with a relaxed schedule perfect for maintaining skills during vacation time.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to both Campo Tures and Brunico facilities. You can mix and match classes based on your schedule.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We encourage new students to try a class before committing. Contact us to schedule your trial session.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For your first class, just bring comfortable athletic clothes. We provide temporary basic gloves and shin guards. You\'ll need to purchase your own gi for BJJ classes and any additional protective gear.'
        }
      },
      cta: {
        title: 'Start Your Journey Today',
        description: 'Choose your membership and begin training with South Tyrol\'s premier martial arts academy.'
      }
    },
    footer: {
      tagline: 'South Tyrol\'s Premier Martial Arts Academy',
      subtitle: 'Forging Fighters Since 2017',
      copyright: '© 2024 Sport Academy. All rights reserved.'
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Master the gentle art that teaches technique over strength'
        },
        overview: {
          title: 'The Gentle Art',
          paragraphs: [
            'Brazilian Jiu-Jitsu is a martial art and combat sport that focuses on ground fighting and submission holds. It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent through proper technique and leverage.',
            'Our BJJ program at Sport Academy provides comprehensive training in both gi and no-gi environments, ensuring students develop a well-rounded skill set applicable to self-defense, sport competition, and mixed martial arts.',
            'Whether you\'re a complete beginner or an experienced practitioner, our structured curriculum and expert instruction will help you progress safely and effectively through the ranks of this beautiful martial art.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Master the fundamental skills that form the foundation of Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard Work',
            items: [
              'Closed Guard Control',
              'Open Guard Variations',
              'Guard Sweeps',
              'Guard Retention',
              'Submission from Guard'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Arm Locks (Armbar, Kimura)',
              'Chokes (RNC, Triangle)',
              'Leg Locks',
              'Shoulder Locks',
              'Submission Chains'
            ]
          },
          positions: {
            title: 'Positions',
            items: [
              'Mount and Back Control',
              'Side Control',
              'Knee on Belly',
              'Half Guard',
              'Turtle Position'
            ]
          }
        },
        beltSystem: {
          title: 'Belt Progression System',
          subtitle: 'Track your journey through the traditional BJJ ranking system',
          philosophy: {
            title: 'Our Approach to Promotion',
            description: 'At Sport Academy, belt promotions are based on technical knowledge, sparring ability, time in grade, and demonstration of the values that make BJJ special: respect, perseverance, and continuous learning.'
          }
        },
        history: {
          title: 'History & Lineage',
          paragraphs: [
            'Brazilian Jiu-Jitsu evolved from traditional Japanese jujutsu and judo, brought to Brazil by Mitsuyo Maeda in the early 20th century. The Gracie family, particularly Helio Gracie, adapted these techniques to create a martial art that emphasized leverage and technique over strength.',
            'This evolution led to the development of a unique fighting system that proved its effectiveness in early mixed martial arts competitions, forever changing the landscape of combat sports.',
            'Today, BJJ continues to evolve with contributions from practitioners worldwide, maintaining its core principles while adapting to modern competition and self-defense needs.'
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
                description: 'Founder of Gracie Jiu-Jitsu, emphasized technique over strength'
              },
              {
                name: 'Royce Gracie',
                description: 'Proved BJJ\'s effectiveness in early UFC competitions'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ Training Schedule',
          subtitle: 'Regular classes available at both locations throughout the week'
        },
        cta: {
          title: 'Begin Your BJJ Journey',
          description: 'Join our welcoming community and discover the art that changed martial arts forever.',
          joinButton: 'Start BJJ Training'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Master the art of submission wrestling without the gi'
        },
        overview: {
          title: 'No-Gi Submission Wrestling',
          paragraphs: [
            'Grappling, also known as submission wrestling or no-gi jiu-jitsu, is a dynamic combat sport that focuses on takedowns, ground control, and submission techniques without the traditional gi uniform.',
            'This fast-paced discipline emphasizes athleticism, speed, and modern techniques that are highly applicable to mixed martial arts and self-defense situations.',
            'Our grappling program combines elements from wrestling, Brazilian jiu-jitsu, sambo, and catch wrestling to create well-rounded grapplers capable of competing at the highest levels.'
          ]
        },
        techniques: {
          title: 'Essential Techniques',
          subtitle: 'Develop the skills that make grappling such an effective martial art',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single & Double Leg Takedowns',
              'Hip Tosses',
              'Foot Sweeps',
              'Sprawls and Defensive Wrestling',
              'Cage Wrestling'
            ]
          },
          control: {
            title: 'Control Positions',
            items: [
              'Top Control Systems',
              'Pinning Combinations',
              'Transition Chains',
              'Pressure Passing',
              'Back Control'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Leg Lock Systems',
              'Chokes and Strangles',
              'Arm Locks',
              'Submission Entries',
              'Counter Submissions'
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
                title: 'Progressive Drilling',
                description: 'Build muscle memory through repetitive practice of fundamental movements'
              },
              {
                title: 'Positional Sparring',
                description: 'Focus on specific positions to develop problem-solving skills'
              },
              {
                title: 'Flow Rolling',
                description: 'Develop timing and smooth transitions between techniques'
              }
            ]
          },
          conditioning: {
            title: 'Physical Conditioning',
            methods: [
              {
                title: 'Grappling-Specific Fitness',
                description: 'Build the endurance and strength needed for competition'
              },
              {
                title: 'Flexibility Training',
                description: 'Improve range of motion and injury prevention'
              },
              {
                title: 'Mental Toughness',
                description: 'Develop the psychological resilience of a champion'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of Grappling',
          subtitle: 'Why grappling is one of the most effective martial arts for real-world application',
          items: [
            {
              icon: '💪',
              title: 'Full Body Strength',
              description: 'Develop functional strength and conditioning'
            },
            {
              icon: '🧠',
              title: 'Mental Chess',
              description: 'Improve problem-solving and strategic thinking'
            },
            {
              icon: '🛡️',
              title: 'Self Defense',
              description: 'Learn practical skills for real situations'
            },
            {
              icon: '🏆',
              title: 'Competition Ready',
              description: 'Prepare for tournaments and competitions'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'High-intensity training sessions designed to push your limits'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Learn from the techniques developed by the greatest grapplers in history',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominant no-gi grappler known for his leg lock system'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Multiple-time World Champion',
              description: 'Master of butterfly guard and arm drags'
            },
            {
              name: 'John Danaher',
              title: 'Legendary Coach',
              description: 'Revolutionary instructor who modernized leg lock systems'
            }
          ]
        },
        cta: {
          title: 'Master the Art of Grappling',
          description: 'Join our grappling program and develop the skills that translate directly to real-world effectiveness.',
          joinButton: 'Start Grappling'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate test of martial arts skill combining all fighting disciplines'
        },
        overview: {
          title: 'The Ultimate Fighting Art',
          paragraphs: [
            'Mixed Martial Arts represents the evolution of combat sports, combining techniques from boxing, kickboxing, wrestling, Brazilian jiu-jitsu, and other martial arts into one comprehensive fighting system.',
            'Our MMA program at Sport Academy provides students with a complete skill set, teaching both the individual components and how to seamlessly blend them together in competition and self-defense scenarios.',
            'Whether your goal is professional competition, amateur tournaments, or simply becoming a well-rounded martial artist, our MMA training will challenge you physically and mentally while building real fighting skills.'
          ]
        },
        techniques: {
          title: 'Core Fighting Skills',
          subtitle: 'Master all aspects of mixed martial arts combat',
          striking: {
            title: 'Striking',
            items: [
              'Boxing Fundamentals',
              'Kickboxing Techniques',
              'Muay Thai Clinch Work',
              'Defensive Movement',
              'Combination Striking'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown Techniques',
              'Takedown Defense',
              'Cage Wrestling',
              'Ground Control',
              'Get-ups and Scrambles'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Ground and Pound',
              'Submission Grappling',
              'Guard Work',
              'Submission Defense',
              'Transitions'
            ]
          }
        },
        history: {
          title: 'Evolution of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with events like UFC 1 in 1993, which sought to determine the most effective martial art in real fighting conditions.',
            'Early competitions revealed that no single martial art was complete, leading to the evolution of fighters who cross-trained in multiple disciplines.',
            'Today\'s MMA represents the culmination of this evolution, with fighters who are skilled in all aspects of combat and constantly pushing the boundaries of what\'s possible in martial arts.'
          ],
          milestones: {
            title: 'Key Milestones',
            events: [
              {
                year: '1993',
                description: 'UFC 1 demonstrates the effectiveness of Brazilian Jiu-Jitsu'
              },
              {
                year: '2000s',
                description: 'Fighters begin cross-training in multiple disciplines'
              },
              {
                year: '2010s',
                description: 'Modern MMA emerges with complete mixed martial artists'
              },
              {
                year: 'Today',
                description: 'MMA continues to evolve with new techniques and strategies'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of MMA Training',
          subtitle: 'Why MMA is the most complete martial art for modern practitioners',
          items: [
            {
              icon: '🥊',
              title: 'Complete Skill Set',
              description: 'Learn all aspects of fighting and self-defense'
            },
            {
              icon: '💪',
              title: 'Peak Fitness',
              description: 'Achieve the highest levels of physical conditioning'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Develop unbreakable confidence and resilience'
            },
            {
              icon: '🎯',
              title: 'Real Application',
              description: 'Train techniques that work in real situations'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Comprehensive training sessions covering all aspects of mixed martial arts'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Study the techniques and strategies of the greatest mixed martial artists',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Master striker with incredible precision and creativity'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Complete fighter with devastating ground and pound'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Innovative fighter who redefined modern MMA techniques'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Train in the world\'s most effective martial art and develop skills that work in any situation.',
          joinButton: 'Start MMA Training'
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
      allLevels: 'Alle Stufen',
      ages: 'Alter',
      joinSportAcademy: 'Sport Academy Beitreten',
      callNow: 'Jetzt Anrufen',
      registerOnline: 'Online Registrieren',
      bookClasses: 'Kurse Buchen',
      visitUs: 'Besuchen Sie Uns',
      dropInWelcome: 'Drop-ins Willkommen',
      duringTrainingHours: 'Während der Trainingszeiten',
      responseWithin2Hours: 'Antwort innerhalb von 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates & DMs',
      instantConfirmation: 'Sofortige Bestätigung'
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
        yearsDescription: 'Kämpfer schmieden seit 2017',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Sand in Taufers & Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'MMA, BJJ, Grappling & Mehr',
        exploreClasses: 'Unsere Kurse Entdecken'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Meistere die Kunst der Kampfsportarten mit unseren umfassenden Trainingsprogrammen'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training, das Schlag-, Grappling- und Bodenkampftechniken für das ultimative Kampferlebnis kombiniert.'
      },
      bjj: {
        description: 'Meistere die sanfte Kunst des Brazilian Jiu-Jitsu, die sich auf Hebelwirkung, Technik und Bodenkampf konzentriert, um größere Gegner zu überwinden.'
      },
      grappling: {
        description: 'Entwickle überlegene Wrestling- und Submission-Fähigkeiten durch No-Gi-Grappling-Training, das Geschwindigkeit und Athletik betont.'
      },
      getStarted: {
        title: 'Heute Beginnen',
        subtitle: 'Alles was du brauchst, um deine Kampfkunst-Reise zu beginnen'
      },
      quickLinks: {
        viewClasses: 'Kurse Ansehen',
        viewClassesDesc: 'Entdecke unsere Trainingsprogramme',
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
        description: 'Entdecke unser umfassendes Angebot an Kampfkunstprogrammen, die für alle Fähigkeitsstufen konzipiert sind. Von anfängerfreundlichen Einführungen bis hin zu fortgeschrittenem Wettkampftraining haben wir den perfekten Kurs für deine Reise.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Der ultimative Kampfsport, der Schlag-, Wrestling- und Submission-Techniken kombiniert. Unsere MMA-Kurse integrieren Boxen, Kickboxen, Wrestling und Brazilian Jiu-Jitsu, um vielseitige Kämpfer zu schaffen.',
        features: [
          'Stand-up Schlagtechniken',
          'Wrestling und Takedowns',
          'Bodenkampf und Submissions',
          'Käfigarbeit und Clinch-Kampf',
          'Konditionierung und Kampfvorbereitung'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Die sanfte Kunst, die lehrt, Hebelwirkung und Technik zu nutzen, um größere, stärkere Gegner zu überwinden. Unser BJJ-Programm konzentriert sich sowohl auf Gi- als auch No-Gi-Training mit Schwerpunkt auf Selbstverteidigung und Sportanwendung.',
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
        description: 'No-Gi Submission Wrestling, das Geschwindigkeit, Athletik und moderne Techniken betont. Perfekt für diejenigen, die sich auf Submission Grappling ohne das traditionelle Gi konzentrieren möchten.',
        features: [
          'No-Gi Techniken und Positionen',
          'Leg Locks und moderne Submissions',
          'Wrestling-basierte Takedowns',
          'Submission-Ketten und Setups',
          'Wettkampfstrategie'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Eine spaßige und sichere Einführung in Brazilian Jiu-Jitsu für Kinder. Unser Kinderprogramm konzentriert sich darauf, Selbstvertrauen, Disziplin und körperliche Fitness aufzubauen, während wertvolle Selbstverteidigungsfähigkeiten erlernt werden.',
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
        description: 'Dynamisches Grappling-Programm für junge Athleten, das Wrestling- und Submission-Techniken in einer sicheren, strukturierten Umgebung kombiniert, die Wachstum und Lernen fördert.',
        features: [
          'Wrestling-Grundlagen',
          'Grundlegende Submission-Techniken',
          'Kraft und Konditionierung',
          'Wettkampfmöglichkeiten',
          'Teamwork und Sportlichkeit'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelles Wrestling-Training mit Fokus auf Takedowns, Kontrolle und Konditionierung. Essentiell für MMA-Kämpfer und Grappler, die ihr Takedown-Spiel verbessern möchten.',
        features: [
          'Single und Double Leg Takedowns',
          'Sprawls und Verteidigungstechniken',
          'Top Control und Riding',
          'Konditionierung und Drilling',
          'Wettkampfvorbereitung'
        ]
      },
      whatYouLearn: 'Was Du Lernst',
      cta: {
        title: 'Bereit Zu Trainieren?',
        description: 'Tritt unserer Gemeinschaft engagierter Kampfkünstler bei und beginne heute deine Reise.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne unsere Weltklasse-Instruktoren kennen, die jahrzehntelange kombinierte Erfahrung in Kampfkunst, Wettkampf und Unterricht in jeden Kurs einbringen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 15 Jahren Kampfkunsterfahrung ist Matteo ein engagierter Praktiker und Instruktor für Brazilian Jiu-Jitsu und Mixed Martial Arts. Seine Leidenschaft für Kampfsport begann in seiner Jugend und hat sich zu einem lebenslangen Engagement für Exzellenz und Unterricht entwickelt.',
        specializations: [
          'Brazilian Jiu-Jitsu (Brauner Gürtel)',
          'Mixed Martial Arts',
          'Grappling und No-Gi',
          'Wettkampf-Coaching',
          'Jugendentwicklung'
        ],
        achievements: [
          'Gründete Sport Academy 2017',
          'Mehrere regionale BJJ-Meisterschaften',
          'Zertifizierter Instruktor in diversen Kampfkünsten',
          'Entwickelte erfolgreiche Jugendprogramme',
          'Betreute zahlreiche Wettkampfsieger'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt eine Fülle von Wissen und technischer Expertise zur Sport Academy. Sein analytischer Ansatz zu Kampfkünsten und sein Engagement für kontinuierliches Lernen machen ihn zu einem unschätzbaren Instruktor für Schüler aller Stufen.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Technische Analyse',
          'Wettkampfstrategie',
          'Fortgeschrittenes Grappling',
          'Kraft und Konditionierung'
        ],
        achievements: [
          'High-Level BJJ-Wettkämpfer',
          'Technischer Spezialist in diversen Techniken',
          'Erfolgreicher Wettkampf-Coach',
          'Experte in modernen Grappling-Methoden',
          'Engagiert für Schülerentwicklung'
        ]
      },
      background: 'Hintergrund',
      specializations: 'Spezialisierungen',
      achievements: 'Erfolge',
      philosophy: {
        title: 'Unsere Trainingsphilosophie',
        technical: {
          title: 'Technische Exzellenz',
          description: 'Wir glauben daran, eine starke Grundlage fundamentaler Techniken aufzubauen, bevor wir zu komplexen Bewegungen übergehen.'
        },
        individual: {
          title: 'Individuelles Wachstum',
          description: 'Jeder Schüler ist einzigartig. Wir passen unseren Unterricht an, um jeder Person zu helfen, ihre persönlichen Ziele zu erreichen.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Kampfkünste lehren mehr als Kampftechniken - sie bauen Charakter, Respekt und mentale Stärke auf.'
        }
      },
      cta: {
        title: 'Trainiere Mit Den Besten',
        description: 'Lerne von erfahrenen Trainern, die sich deinem Erfolg und deiner Entwicklung verpflichtet haben.'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Bereit, deine Kampfkunst-Reise zu beginnen? Nimm Kontakt mit uns auf, um mehr über unsere Programme zu erfahren, einen Besuch zu planen oder Fragen zu stellen.'
      },
      getInTouch: {
        title: 'Kontakt Aufnehmen',
        subtitle: 'Verschiedene Wege, um mit der Sport Academy in Verbindung zu treten'
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
        title: 'Zum Ersten Mal Hier?',
        subtitle: 'Das solltest du vor deiner ersten Stunde wissen'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was Mitbringen',
      bring: [
        'Bequeme Sportkleidung',
        'Wasserflasche',
        'Handtuch',
        'Positive Einstellung und Lernbereitschaft'
      ],
      whatWeProvide: 'Was Wir Bereitstellen',
      provide: [
        'Temporäre Basis-Handschuhe und Schienbeinschoner',
        'Saubere Trainingsmatten',
        'Professioneller Unterricht',
        'Einladende Trainingsumgebung'
      ],
      specialInstructions: 'Wichtige Informationen',
      instructions: {
        age: 'Altersanforderungen: Kinderkurse 6-16, Erwachsenenkurse 16+',
        health: 'Gesundheit: Bitte informiere uns über Verletzungen oder medizinische Bedingungen',
        equipment: 'Ausrüstung: Schüler müssen ihr eigenes Gi und Schutzausrüstung kaufen',
        payment: 'Zahlung: Probestunden verfügbar, Mitgliedschaft für regelmäßiges Training erforderlich'
      },
      cta: {
        title: 'Bereit Zu Beginnen?',
        description: 'Mache den ersten Schritt zu deiner Kampfkunst-Reise. Kontaktiere uns heute, um zu beginnen.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finde die perfekten Trainingszeiten, die zu deinem Zeitplan passen. Wir bieten Kurse während der ganzen Woche an beiden Standorten Sand in Taufers und Bruneck an.'
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
      striking: 'Striking',
      openMat: 'Open Mat',
      importantInfo: 'Wichtige Informationen',
      classGuidelines: 'Kursrichtlinien',
      guidelines: {
        arrive: '10-15 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'BJJ-Kurse erfordern Gi (kann im Gym gekauft werden)',
        noGi: 'Grappling- und MMA-Kurse sind No-Gi'
      },
      membershipBenefits: 'Mitgliedschaftsvorteile',
      benefits: {
        allClasses: 'Zugang zu allen Kursen inklusive',
        openMat: 'Kostenlose Open Mat Sessions',
        bothLocations: 'Training an beiden Standorten',
        personalTraining: 'Ermäßigtes Personaltraining'
      },
      cta: {
        title: 'Bereit Zu Trainieren?',
        description: 'Komm zu einem unserer geplanten Kurse. Neue Schüler sind immer willkommen!'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle den Mitgliedschaftsplan, der zu deinen Trainingszielen und deinem Zeitplan passt. Alle Mitgliedschaften beinhalten Zugang zu beiden Standorten und allen Kursarten.'
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
        subtitle: 'Perfekt für diejenigen, die sich ausschließlich auf Brazilian Jiu-Jitsu konzentrieren',
        program: 'BJJ-Fokussiertes Programm',
        description: 'Zugang zu allen BJJ-Kursen an beiden Standorten'
      },
      adults: 'Erwachsene',
      students: 'Studenten (mit gültigem Ausweis)',
      month: 'Monat',
      whatsIncluded: 'Was Enthalten Ist',
      mainIncludes: [
        'Unbegrenzter Zugang zu allen Kursen',
        'Training in Sand in Taufers und Bruneck',
        'Open Mat Sessions',
        'Anfängerfreundlicher Unterricht',
        'Wettkampfteam-Möglichkeiten'
      ],
      summerIncludes: [
        'Alle Sommerkurse inklusive',
        'Zugang zu beiden Standorten',
        'Flexibler Drop-in Zeitplan',
        'Perfekt für Urlaubstraining'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse (Gi und No-Gi)',
        'Zugang zu beiden Standorten',
        'Open Mat Sessions',
        'Gürtel-Fortschrittssystem',
        'Wettkampfvorbereitung'
      ],
      selectMainSeason: 'Hauptsaison Wählen',
      selectSummerSeason: 'Sommersaison Wählen',
      selectBjjOnly: 'Nur BJJ Wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessere dein Training mit unseren spezialisierten Programmen und persönlichem Unterricht'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Eins-zu-eins Unterricht, der auf deine spezifischen Ziele und Bedürfnisse zugeschnitten ist',
        price: '€50',
        duration: 'pro Stunde'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training für bevorstehende Turniere und Wettkämpfe',
        price: '€40',
        duration: 'pro Session'
      },
      seminars: {
        title: 'Seminare',
        description: 'Spezielle Workshops mit Gastinstruktoren und fortgeschrittenen Techniken',
        price: '€30',
        duration: 'pro Seminar'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Die Hauptsaison (September-Juni) bietet unser vollständiges Curriculum mit konstanten Trainingspartnern und strukturiertem Fortschritt. Die Sommersaison ist flexibler mit einem entspannten Zeitplan, perfekt um Fähigkeiten während der Urlaubszeit zu erhalten.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu beiden Einrichtungen in Sand in Taufers und Bruneck. Du kannst Kurse je nach deinem Zeitplan mischen und kombinieren.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Absolut! Wir ermutigen neue Schüler, eine Stunde auszuprobieren, bevor sie sich verpflichten. Kontaktiere uns, um deine Probesession zu planen.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für deine erste Stunde bring einfach bequeme Sportkleidung mit. Wir stellen temporäre Basis-Handschuhe und Schienbeinschoner zur Verfügung. Du musst dein eigenes Gi für BJJ-Kurse und zusätzliche Schutzausrüstung kaufen.'
        }
      },
      cta: {
        title: 'Beginne Heute Deine Reise',
        description: 'Wähle deine Mitgliedschaft und beginne das Training bei Südtirols führender Kampfkunst-Akademie.'
      }
    },
    footer: {
      tagline: 'Südtirols Führende Kampfkunst-Akademie',
      subtitle: 'Kämpfer Schmieden Seit 2017',
      copyright: '© 2024 Sport Academy. Alle Rechte vorbehalten.'
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Meistere die sanfte Kunst, die Technik über Kraft lehrt'
        },
        overview: {
          title: 'Die Sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Es betont das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner durch richtige Technik und Hebelwirkung verteidigen kann.',
            'Unser BJJ-Programm in der Sport Academy bietet umfassendes Training sowohl in Gi- als auch No-Gi-Umgebungen und stellt sicher, dass Schüler ein vielseitiges Fähigkeitsset entwickeln, das auf Selbstverteidigung, Sportwettkampf und Mixed Martial Arts anwendbar ist.',
            'Ob du ein kompletter Anfänger oder ein erfahrener Praktiker bist, unser strukturiertes Curriculum und Expertenunterricht wird dir helfen, sicher und effektiv durch die Ränge dieser schönen Kampfkunst zu fortschreiten.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Meistere die fundamentalen Fähigkeiten, die die Grundlage des Brazilian Jiu-Jitsu bilden',
          guardWork: {
            title: 'Guard-Arbeit',
            items: [
              'Closed Guard Kontrolle',
              'Open Guard Variationen',
              'Guard Sweeps',
              'Guard Retention',
              'Submission aus Guard'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Arm Locks (Armbar, Kimura)',
              'Chokes (RNC, Triangle)',
              'Leg Locks',
              'Shoulder Locks',
              'Submission Chains'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Back Control',
              'Side Control',
              'Knee on Belly',
              'Half Guard',
              'Turtle Position'
            ]
          }
        },
        beltSystem: {
          title: 'Gürtel-Fortschrittssystem',
          subtitle: 'Verfolge deine Reise durch das traditionelle BJJ-Rangsystem',
          philosophy: {
            title: 'Unser Ansatz zur Beförderung',
            description: 'In der Sport Academy basieren Gürtelbeförderungen auf technischem Wissen, Sparring-Fähigkeit, Zeit im Grad und Demonstration der Werte, die BJJ besonders machen: Respekt, Ausdauer und kontinuierliches Lernen.'
          }
        },
        history: {
          title: 'Geschichte & Abstammung',
          paragraphs: [
            'Brazilian Jiu-Jitsu entwickelte sich aus traditionellem japanischem Jujutsu und Judo, das von Mitsuyo Maeda im frühen 20. Jahrhundert nach Brasilien gebracht wurde. Die Gracie-Familie, insbesondere Helio Gracie, passte diese Techniken an, um eine Kampfkunst zu schaffen, die Hebelwirkung und Technik über Kraft betonte.',
            'Diese Evolution führte zur Entwicklung eines einzigartigen Kampfsystems, das seine Wirksamkeit in frühen Mixed Martial Arts Wettkämpfen bewies und die Landschaft der Kampfsportarten für immer veränderte.',
            'Heute entwickelt sich BJJ weiter mit Beiträgen von Praktikern weltweit, behält seine Kernprinzipien bei, während es sich an moderne Wettkampf- und Selbstverteidigungsbedürfnisse anpasst.'
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
                description: 'Gründer des Gracie Jiu-Jitsu, betonte Technik über Kraft'
              },
              {
                name: 'Royce Gracie',
                description: 'Bewies BJJs Wirksamkeit in frühen UFC-Wettkämpfen'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ Trainingsplan',
          subtitle: 'Regelmäßige Kurse an beiden Standorten während der ganzen Woche verfügbar'
        },
        cta: {
          title: 'Beginne Deine BJJ-Reise',
          description: 'Tritt unserer einladenden Gemeinschaft bei und entdecke die Kunst, die die Kampfkünste für immer verändert hat.',
          joinButton: 'BJJ Training Beginnen'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Meistere die Kunst des Submission Wrestling ohne Gi'
        },
        overview: {
          title: 'No-Gi Submission Wrestling',
          paragraphs: [
            'Grappling, auch bekannt als Submission Wrestling oder No-Gi Jiu-Jitsu, ist ein dynamischer Kampfsport, der sich auf Takedowns, Bodenkontrolle und Submission-Techniken ohne die traditionelle Gi-Uniform konzentriert.',
            'Diese schnelle Disziplin betont Athletik, Geschwindigkeit und moderne Techniken, die hochgradig auf Mixed Martial Arts und Selbstverteidigungssituationen anwendbar sind.',
            'Unser Grappling-Programm kombiniert Elemente aus Wrestling, Brazilian Jiu-Jitsu, Sambo und Catch Wrestling, um vielseitige Grappler zu schaffen, die auf höchstem Niveau konkurrieren können.'
          ]
        },
        techniques: {
          title: 'Wesentliche Techniken',
          subtitle: 'Entwickle die Fähigkeiten, die Grappling zu einer so effektiven Kampfkunst machen',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single & Double Leg Takedowns',
              'Hip Tosses',
              'Foot Sweeps',
              'Sprawls und Defensive Wrestling',
              'Cage Wrestling'
            ]
          },
          control: {
            title: 'Kontrollpositionen',
            items: [
              'Top Control Systeme',
              'Pinning Kombinationen',
              'Transition Chains',
              'Pressure Passing',
              'Back Control'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Leg Lock Systeme',
              'Chokes und Strangles',
              'Arm Locks',
              'Submission Entries',
              'Counter Submissions'
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
                title: 'Progressives Drilling',
                description: 'Baue Muskelgedächtnis durch wiederholtes Üben fundamentaler Bewegungen auf'
              },
              {
                title: 'Positionelles Sparring',
                description: 'Konzentriere dich auf spezifische Positionen, um Problemlösungsfähigkeiten zu entwickeln'
              },
              {
                title: 'Flow Rolling',
                description: 'Entwickle Timing und flüssige Übergänge zwischen Techniken'
              }
            ]
          },
          conditioning: {
            title: 'Körperliche Konditionierung',
            methods: [
              {
                title: 'Grappling-Spezifische Fitness',
                description: 'Baue die Ausdauer und Kraft auf, die für Wettkämpfe benötigt wird'
              },
              {
                title: 'Flexibilitätstraining',
                description: 'Verbessere Bewegungsumfang und Verletzungsprävention'
              },
              {
                title: 'Mentale Härte',
                description: 'Entwickle die psychologische Widerstandsfähigkeit eines Champions'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grapplings',
          subtitle: 'Warum Grappling eine der effektivsten Kampfkünste für reale Anwendung ist',
          items: [
            {
              icon: '💪',
              title: 'Ganzkörperstärke',
              description: 'Entwickle funktionale Kraft und Konditionierung'
            },
            {
              icon: '🧠',
              title: 'Mentales Schach',
              description: 'Verbessere Problemlösung und strategisches Denken'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Lerne praktische Fähigkeiten für reale Situationen'
            },
            {
              icon: '🏆',
              title: 'Wettkampfbereit',
              description: 'Bereite dich auf Turniere und Wettkämpfe vor'
            }
          ]
        },
        schedule: {
          title: 'Grappling Zeitplan',
          subtitle: 'Hochintensive Trainingseinheiten, die darauf ausgelegt sind, deine Grenzen zu verschieben'
        },
        legends: {
          title: 'Grappling Legenden',
          subtitle: 'Lerne von den Techniken, die von den größten Grapplern der Geschichte entwickelt wurden',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominanter No-Gi Grappler bekannt für sein Leg Lock System'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Mehrfacher Weltmeister',
              description: 'Meister der Butterfly Guard und Arm Drags'
            },
            {
              name: 'John Danaher',
              title: 'Legendärer Coach',
              description: 'Revolutionärer Instruktor, der Leg Lock Systeme modernisierte'
            }
          ]
        },
        cta: {
          title: 'Meistere die Kunst des Grapplings',
          description: 'Tritt unserem Grappling-Programm bei und entwickle die Fähigkeiten, die direkt in reale Wirksamkeit übertragen werden.',
          joinButton: 'Grappling Beginnen'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Test der Kampfkunstfähigkeiten, der alle Kampfdisziplinen kombiniert'
        },
        overview: {
          title: 'Die Ultimative Kampfkunst',
          paragraphs: [
            'Mixed Martial Arts repräsentiert die Evolution der Kampfsportarten und kombiniert Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkünsten in ein umfassendes Kampfsystem.',
            'Unser MMA-Programm in der Sport Academy bietet Schülern ein komplettes Fähigkeitsset und lehrt sowohl die einzelnen Komponenten als auch wie man sie nahtlos in Wettkampf- und Selbstverteidigungsszenarien zusammenfügt.',
            'Ob dein Ziel professioneller Wettkampf, Amateur-Turniere oder einfach ein vielseitiger Kampfkünstler zu werden ist, unser MMA-Training wird dich körperlich und mental herausfordern, während es echte Kampffähigkeiten aufbaut.'
          ]
        },
        techniques: {
          title: 'Kern-Kampffähigkeiten',
          subtitle: 'Meistere alle Aspekte des Mixed Martial Arts Kampfes',
          striking: {
            title: 'Striking',
            items: [
              'Box-Grundlagen',
              'Kickbox-Techniken',
              'Muay Thai Clinch Work',
              'Defensive Bewegung',
              'Kombinations-Striking'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken',
              'Takedown-Verteidigung',
              'Cage Wrestling',
              'Bodenkontrolle',
              'Get-ups und Scrambles'
            ]
          },
          groundGame: {
            title: 'Bodenspiel',
            items: [
              'Ground and Pound',
              'Submission Grappling',
              'Guard Work',
              'Submission Defense',
              'Übergänge'
            ]
          }
        },
        history: {
          title: 'Evolution des MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit Veranstaltungen wie UFC 1 im Jahr 1993, die darauf abzielten, die effektivste Kampfkunst in echten Kampfbedingungen zu bestimmen.',
            'Frühe Wettkämpfe zeigten, dass keine einzelne Kampfkunst vollständig war, was zur Evolution von Kämpfern führte, die in mehreren Disziplinen trainierten.',
            'Das heutige MMA repräsentiert den Höhepunkt dieser Evolution, mit Kämpfern, die in allen Aspekten des Kampfes geschickt sind und ständig die Grenzen dessen verschieben, was in Kampfkünsten möglich ist.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'UFC 1 demonstriert die Wirksamkeit des Brazilian Jiu-Jitsu'
              },
              {
                year: '2000er',
                description: 'Kämpfer beginnen Cross-Training in mehreren Disziplinen'
              },
              {
                year: '2010er',
                description: 'Modernes MMA entsteht mit kompletten Mixed Martial Artists'
              },
              {
                year: 'Heute',
                description: 'MMA entwickelt sich weiter mit neuen Techniken und Strategien'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des MMA-Trainings',
          subtitle: 'Warum MMA die vollständigste Kampfkunst für moderne Praktiker ist',
          items: [
            {
              icon: '🥊',
              title: 'Komplettes Fähigkeitsset',
              description: 'Lerne alle Aspekte des Kampfes und der Selbstverteidigung'
            },
            {
              icon: '💪',
              title: 'Spitzenfitness',
              description: 'Erreiche die höchsten Stufen körperlicher Konditionierung'
            },
            {
              icon: '🧠',
              title: 'Mentale Härte',
              description: 'Entwickle unzerbrechliches Selbstvertrauen und Widerstandsfähigkeit'
            },
            {
              icon: '🎯',
              title: 'Reale Anwendung',
              description: 'Trainiere Techniken, die in echten Situationen funktionieren'
            }
          ]
        },
        schedule: {
          title: 'MMA Trainingsplan',
          subtitle: 'Umfassende Trainingseinheiten, die alle Aspekte der Mixed Martial Arts abdecken'
        },
        legends: {
          title: 'MMA Legenden',
          subtitle: 'Studiere die Techniken und Strategien der größten Mixed Martial Artists',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Meister-Striker mit unglaublicher Präzision und Kreativität'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Kompletter Kämpfer mit verheerendem Ground and Pound'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Innovativer Kämpfer, der moderne MMA-Techniken neu definierte'
            }
          ]
        },
        cta: {
          title: 'Werde Ein Kompletter Kämpfer',
          description: 'Trainiere in der weltweit effektivsten Kampfkunst und entwickle Fähigkeiten, die in jeder Situation funktionieren.',
          joinButton: 'MMA Training Beginnen'
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
      duringTrainingHours: 'Durante gli orari di allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM',
      instantConfirmation: 'Conferma istantanea'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Benvenuti alla Sport Academy',
        description: 'Situata nel cuore dell\'Alto Adige, Sport Academy è la destinazione principale per l\'allenamento di MMA, Brazilian Jiu-Jitsu e Grappling dal 2017. I nostri istruttori esperti Matteo Parolin e Christian Zecchetto portano istruzione di livello mondiale a Campo Tures e Brunico.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Forgiamo combattenti dal 2017',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'MMA, BJJ, Grappling e Altro',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come Un Combattente',
        subtitle: 'Padroneggia l\'arte degli sport da combattimento con i nostri programmi di allenamento completi'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, grappling e combattimento a terra per l\'esperienza di combattimento definitiva.'
      },
      bjj: {
        description: 'Padroneggia l\'arte gentile del Brazilian Jiu-Jitsu, concentrandoti su leva, tecnica e combattimento a terra per superare avversari più grandi.'
      },
      grappling: {
        description: 'Sviluppa abilità superiori di wrestling e submission attraverso l\'allenamento di grappling no-gi che enfatizza velocità e atletismo.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Tutto ciò di cui hai bisogno per iniziare il tuo viaggio nelle arti marziali'
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
        description: 'Scopri la nostra gamma completa di programmi di arti marziali progettati per tutti i livelli di abilità. Dalle introduzioni adatte ai principianti all\'allenamento avanzato per competizioni, abbiamo il corso perfetto per il tuo viaggio.'
      },
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Lo sport da combattimento definitivo che combina tecniche di striking, wrestling e submission. I nostri corsi di MMA integrano boxe, kickboxing, wrestling e Brazilian Jiu-Jitsu per creare combattenti completi.',
        features: [
          'Tecniche di striking in piedi',
          'Wrestling e takedown',
          'Combattimento a terra e submission',
          'Lavoro in gabbia e clinch',
          'Condizionamento e preparazione al combattimento'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'L\'arte gentile che insegna a usare leva e tecnica per superare avversari più grandi e forti. Il nostro programma BJJ si concentra sia sull\'allenamento con gi che no-gi con enfasi su autodifesa e applicazione sportiva.',
        features: [
          'Posizioni fondamentali e fughe',
          'Lavoro di guardia e spazzate',
          'Tecniche di submission',
          'Applicazioni di autodifesa',
          'Preparazione alle competizioni'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Wrestling di submission no-gi che enfatizza velocità, atletismo e tecniche moderne. Perfetto per coloro che vogliono concentrarsi sul grappling di submission senza il gi tradizionale.',
        features: [
          'Tecniche e posizioni no-gi',
          'Leg lock e submission moderne',
          'Takedown basati sul wrestling',
          'Catene e setup di submission',
          'Strategia competitiva'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Un\'introduzione divertente e sicura al Brazilian Jiu-Jitsu per bambini. Il nostro programma per bambini si concentra sulla costruzione di fiducia, disciplina e forma fisica mentre si apprendono preziose abilità di autodifesa.',
        features: [
          'Tecniche appropriate per l\'età',
          'Sviluppo del carattere',
          'Strategie anti-bullismo',
          'Forma fisica e coordinazione',
          'Giochi e attività divertenti'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Programma di grappling dinamico per giovani atleti che combina tecniche di wrestling e submission in un ambiente sicuro e strutturato che promuove crescita e apprendimento.',
        features: [
          'Fondamenti di wrestling',
          'Tecniche di submission di base',
          'Forza e condizionamento',
          'Opportunità competitive',
          'Lavoro di squadra e sportività'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Allenamento di wrestling tradizionale che si concentra su takedown, controllo e condizionamento. Essenziale per combattenti MMA e grappler che vogliono migliorare il loro gioco di takedown.',
        features: [
          'Takedown single e double leg',
          'Sprawl e tecniche difensive',
          'Controllo superiore e riding',
          'Condizionamento e drilling',
          'Preparazione alle competizioni'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Pronto a Iniziare l\'Allenamento?',
        description: 'Unisciti alla nostra comunità di artisti marziali dedicati e inizia il tuo viaggio oggi.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Incontra i nostri istruttori di livello mondiale che portano decenni di esperienza combinata in arti marziali, competizione e insegnamento in ogni lezione.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore e Fondatore',
        background: 'Con oltre 15 anni di esperienza nelle arti marziali, Matteo è un praticante e istruttore dedicato di Brazilian Jiu-Jitsu e Arti Marziali Miste. La sua passione per gli sport da combattimento è iniziata nella sua giovinezza e si è evoluta in un impegno per tutta la vita verso l\'eccellenza e l\'insegnamento.',
        specializations: [
          'Brazilian Jiu-Jitsu (Cintura Marrone)',
          'Arti Marziali Miste',
          'Grappling e No-Gi',
          'Coaching Competitivo',
          'Sviluppo Giovanile'
        ],
        achievements: [
          'Fondò Sport Academy nel 2017',
          'Multipli campionati regionali BJJ',
          'Istruttore certificato in diversi arti marziali',
          'Sviluppò programmi giovanili di successo',
          'Mentore di numerosi vincitori di competizioni'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta una ricchezza di conoscenza e competenza tecnica alla Sport Academy. Il suo approccio analitico alle arti marziali e la dedizione all\'apprendimento continuo lo rendono un istruttore inestimabile per studenti di tutti i livelli.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Analisi Tecnica',
          'Strategia Competitiva',
          'Grappling Avanzato',
          'Forza e Condizionamento'
        ],
        achievements: [
          'Competitore BJJ di alto livello',
          'Specialista tecnico in diversi tecniche',
          'Coach competitivo di successo',
          'Esperto in metodi di grappling moderni',
          'Dedicato allo sviluppo degli studenti'
        ]
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      philosophy: {
        title: 'La Nostra Filosofia di Coaching',
        technical: {
          title: 'Eccellenza Tecnica',
          description: 'Crediamo nel costruire una solida base di tecniche fondamentali prima di avanzare a movimenti complessi.'
        },
        individual: {
          title: 'Crescita Individuale',
          description: 'Ogni studente è unico. Adattiamo la nostra istruzione per aiutare ogni persona a raggiungere i propri obiettivi personali.'
        },
        respect: {
          title: 'Rispetto e Disciplina',
          description: 'Le arti marziali insegnano più delle tecniche di combattimento - costruiscono carattere, rispetto e forza mentale.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Impara da istruttori esperti che sono impegnati nel tuo successo e sviluppo.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Pronto a iniziare il tuo viaggio nelle arti marziali? Mettiti in contatto con noi per saperne di più sui nostri programmi, programmare una visita o fare qualsiasi domanda tu possa avere.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con Sport Academy'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due comode strutture di allenamento in Alto Adige'
      },
      address: 'Indirizzo',
      trainingSchedule: 'Orario di Allenamento',
      visitRequirements: {
        title: 'Prima Volta Qui?',
        subtitle: 'Ecco cosa devi sapere prima della tua prima lezione'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      bring: [
        'Abbigliamento sportivo comodo',
        'Bottiglia d\'acqua',
        'Asciugamano',
        'Atteggiamento positivo e voglia di imparare'
      ],
      whatWeProvide: 'Cosa Forniamo',
      provide: [
        'Guanti base e parastinchi temporanei',
        'Tappetini di allenamento puliti',
        'Istruzione professionale',
        'Ambiente di allenamento accogliente'
      ],
      specialInstructions: 'Informazioni Importanti',
      instructions: {
        age: 'Requisiti di Età: Corsi bambini 6-16, Corsi adulti 16+',
        health: 'Salute: Per favore informaci di eventuali infortuni o condizioni mediche',
        equipment: 'Attrezzatura: Gli studenti devono acquistare il proprio gi e attrezzatura protettiva',
        payment: 'Pagamento: Lezioni di prova disponibili, abbonamento richiesto per allenamento regolare'
      },
      cta: {
        title: 'Pronto a Iniziare?',
        description: 'Fai il primo passo verso il tuo viaggio nelle arti marziali. Contattaci oggi per iniziare.'
      }
    },
    schedule: {
      hero: {
        title: 'Orario di Allenamento',
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
      openMat: 'Open Mat',
      importantInfo: 'Informazioni Importanti',
      classGuidelines: 'Linee Guida delle Lezioni',
      guidelines: {
        arrive: 'Arriva 10-15 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'Le lezioni BJJ richiedono il gi (può essere acquistato in palestra)',
        noGi: 'Le lezioni di Grappling e MMA sono no-gi'
      },
      membershipBenefits: 'Benefici dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutte le lezioni incluso',
        openMat: 'Sessioni open mat gratuite',
        bothLocations: 'Allenamento in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto ad Allenarti?',
        description: 'Unisciti a noi per qualsiasi delle nostre lezioni programmate. Nuovi studenti sempre benvenuti!'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il piano di abbonamento che si adatta ai tuoi obiettivi di allenamento e al tuo programma. Tutti gli abbonamenti includono l\'accesso a entrambe le sedi e a tutti i tipi di lezioni.'
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
        subtitle: 'Perfetto per coloro che si concentrano esclusivamente sul Brazilian Jiu-Jitsu',
        program: 'Programma Focalizzato BJJ',
        description: 'Accesso a tutte le lezioni BJJ in entrambe le sedi'
      },
      adults: 'Adulti',
      students: 'Studenti (con documento valido)',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      mainIncludes: [
        'Accesso illimitato a tutte le lezioni',
        'Allenamento a Campo Tures e Brunico',
        'Sessioni open mat',
        'Istruzione adatta ai principianti',
        'Opportunità del team competitivo'
      ],
      summerIncludes: [
        'Tutte le lezioni estive incluse',
        'Accesso a entrambe le sedi',
        'Programma flessibile drop-in',
        'Perfetto per allenamento in vacanza'
      ],
      bjjIncludes: [
        'Tutte le lezioni BJJ (gi e no-gi)',
        'Accesso a entrambe le sedi',
        'Sessioni open mat',
        'Sistema di progressione delle cinture',
        'Preparazione alle competizioni'
      ],
      selectMainSeason: 'Seleziona Stagione Principale',
      selectSummerSeason: 'Seleziona Stagione Estiva',
      selectBjjOnly: 'Seleziona Solo BJJ',
      additionalServices: {
        title: 'Servizi Aggiuntivi',
        description: 'Migliora il tuo allenamento con i nostri programmi specializzati e istruzione personale'
      },
      personalTraining: {
        title: 'Allenamento Personale',
        description: 'Istruzione uno-a-uno su misura per i tuoi obiettivi e bisogni specifici',
        price: '€50',
        duration: 'all\'ora'
      },
      competitionPrep: {
        title: 'Preparazione Competizioni',
        description: 'Allenamento specializzato per tornei e competizioni imminenti',
        price: '€40',
        duration: 'per sessione'
      },
      seminars: {
        title: 'Seminari',
        description: 'Workshop speciali con istruttori ospiti e tecniche avanzate',
        price: '€30',
        duration: 'per seminario'
      },
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra le stagioni?',
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro curriculum completo con partner di allenamento costanti e progressione strutturata. La stagione estiva è più flessibile con un programma rilassato perfetto per mantenere le abilità durante il periodo di vacanza.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso a entrambe le strutture di Campo Tures e Brunico. Puoi mescolare e abbinare le lezioni in base al tuo programma.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Incoraggiamo i nuovi studenti a provare una lezione prima di impegnarsi. Contattaci per programmare la tua sessione di prova.'
        },
        equipment: {
          question: 'Di quale attrezzatura ho bisogno?',
          answer: 'Per la tua prima lezione, porta semplicemente abbigliamento sportivo comodo. Forniamo guanti base e parastinchi temporanei. Dovrai acquistare il tuo gi per le lezioni BJJ e qualsiasi attrezzatura protettiva aggiuntiva.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio Oggi',
        description: 'Scegli il tuo abbonamento e inizia ad allenarti con l\'accademia di arti marziali premier dell\'Alto Adige.'
      }
    },
    footer: {
      tagline: 'L\'Accademia di Arti Marziali Premier dell\'Alto Adige',
      subtitle: 'Forgiamo Combattenti dal 2017',
      copyright: '© 2024 Sport Academy. Tutti i diritti riservati.'
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Padroneggia l\'arte gentile che insegna la tecnica sulla forza'
        },
        overview: {
          title: 'L\'Arte Gentile',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di submission. Enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte attraverso la tecnica appropriata e la leva.',
            'Il nostro programma BJJ alla Sport Academy fornisce allenamento completo sia in ambienti gi che no-gi, assicurando che gli studenti sviluppino un set di abilità ben arrotondato applicabile all\'autodifesa, alla competizione sportiva e alle arti marziali miste.',
            'Che tu sia un principiante completo o un praticante esperto, il nostro curriculum strutturato e l\'istruzione esperta ti aiuteranno a progredire in modo sicuro ed efficace attraverso i gradi di questa bellissima arte marziale.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia le abilità fondamentali che formano la base del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Controllo Closed Guard',
              'Variazioni Open Guard',
              'Spazzate di Guardia',
              'Ritenzione di Guardia',
              'Submission dalla Guardia'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Arm Lock (Armbar, Kimura)',
              'Strangolamenti (RNC, Triangle)',
              'Leg Lock',
              'Shoulder Lock',
              'Catene di Submission'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e Back Control',
              'Side Control',
              'Knee on Belly',
              'Half Guard',
              'Turtle Position'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema di Progressione delle Cinture',
          subtitle: 'Traccia il tuo viaggio attraverso il sistema di classificazione BJJ tradizionale',
          philosophy: {
            title: 'Il Nostro Approccio alla Promozione',
            description: 'Alla Sport Academy, le promozioni delle cinture si basano sulla conoscenza tecnica, abilità di sparring, tempo nel grado e dimostrazione dei valori che rendono speciale il BJJ: rispetto, perseveranza e apprendimento continuo.'
          }
        },
        history: {
          title: 'Storia e Lignaggio',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu si è evoluto dal jujutsu giapponese tradizionale e dal judo, portato in Brasile da Mitsuyo Maeda all\'inizio del XX secolo. La famiglia Gracie, in particolare Helio Gracie, ha adattato queste tecniche per creare un\'arte marziale che enfatizzava la leva e la tecnica sulla forza.',
            'Questa evoluzione ha portato allo sviluppo di un sistema di combattimento unico che ha dimostrato la sua efficacia nelle prime competizioni di arti marziali miste, cambiando per sempre il panorama degli sport da combattimento.',
            'Oggi, il BJJ continua ad evolversi con contributi da praticanti di tutto il mondo, mantenendo i suoi principi fondamentali mentre si adatta alle esigenze moderne di competizione e autodifesa.'
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
                description: 'Fondatore del Gracie Jiu-Jitsu, enfatizzò la tecnica sulla forza'
              },
              {
                name: 'Royce Gracie',
                description: 'Dimostrò l\'efficacia del BJJ nelle prime competizioni UFC'
              }
            ]
          }
        },
        schedule: {
          title: 'Orario di Allenamento BJJ',
          subtitle: 'Lezioni regolari disponibili in entrambe le sedi durante tutta la settimana'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Unisciti alla nostra comunità accogliente e scopri l\'arte che ha cambiato per sempre le arti marziali.',
          joinButton: 'Inizia Allenamento BJJ'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Padroneggia l\'arte del wrestling di submission senza gi'
        },
        overview: {
          title: 'Wrestling di Submission No-Gi',
          paragraphs: [
            'Il Grappling, noto anche come wrestling di submission o jiu-jitsu no-gi, è uno sport da combattimento dinamico che si concentra su takedown, controllo a terra e tecniche di submission senza l\'uniforme gi tradizionale.',
            'Questa disciplina veloce enfatizza atletismo, velocità e tecniche moderne che sono altamente applicabili alle arti marziali miste e alle situazioni di autodifesa.',
            'Il nostro programma di grappling combina elementi dal wrestling, Brazilian jiu-jitsu, sambo e catch wrestling per creare grappler ben arrotondati capaci di competere ai livelli più alti.'
          ]
        },
        techniques: {
          title: 'Tecniche Essenziali',
          subtitle: 'Sviluppa le abilità che rendono il grappling un\'arte marziale così efficace',
          takedowns: {
            title: 'Takedown',
            items: [
              'Takedown Single e Double Leg',
              'Hip Toss',
              'Foot Sweep',
              'Sprawl e Wrestling Difensivo',
              'Cage Wrestling'
            ]
          },
          control: {
            title: 'Posizioni di Controllo',
            items: [
              'Sistemi di Top Control',
              'Combinazioni di Pinning',
              'Catene di Transizione',
              'Pressure Passing',
              'Back Control'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Sistemi di Leg Lock',
              'Strangolamenti',
              'Arm Lock',
              'Entrate di Submission',
              'Counter Submission'
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
                title: 'Drilling Progressivo',
                description: 'Costruisci memoria muscolare attraverso la pratica ripetitiva di movimenti fondamentali'
              },
              {
                title: 'Sparring Posizionale',
                description: 'Concentrati su posizioni specifiche per sviluppare abilità di risoluzione problemi'
              },
              {
                title: 'Flow Rolling',
                description: 'Sviluppa timing e transizioni fluide tra tecniche'
              }
            ]
          },
          conditioning: {
            title: 'Condizionamento Fisico',
            methods: [
              {
                title: 'Fitness Specifico per Grappling',
                description: 'Costruisci la resistenza e la forza necessarie per la competizione'
              },
              {
                title: 'Allenamento di Flessibilità',
                description: 'Migliora il range di movimento e la prevenzione degli infortuni'
              },
              {
                title: 'Durezza Mentale',
                description: 'Sviluppa la resilienza psicologica di un campione'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici del Grappling',
          subtitle: 'Perché il grappling è una delle arti marziali più efficaci per l\'applicazione nel mondo reale',
          items: [
            {
              icon: '💪',
              title: 'Forza Corpo Intero',
              description: 'Sviluppa forza funzionale e condizionamento'
            },
            {
              icon: '🧠',
              title: 'Scacchi Mentali',
              description: 'Migliora risoluzione problemi e pensiero strategico'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Impara abilità pratiche per situazioni reali'
            },
            {
              icon: '🏆',
              title: 'Pronto per Competizione',
              description: 'Preparati per tornei e competizioni'
            }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Sessioni di allenamento ad alta intensità progettate per spingere i tuoi limiti'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Impara dalle tecniche sviluppate dai più grandi grappler della storia',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'Campione ADCC',
              description: 'Grappler no-gi dominante noto per il suo sistema di leg lock'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Campione Mondiale Multiplo',
              description: 'Maestro della butterfly guard e arm drag'
            },
            {
              name: 'John Danaher',
              title: 'Coach Leggendario',
              description: 'Istruttore rivoluzionario che ha modernizzato i sistemi di leg lock'
            }
          ]
        },
        cta: {
          title: 'Padroneggia l\'Arte del Grappling',
          description: 'Unisciti al nostro programma di grappling e sviluppa le abilità che si traducono direttamente in efficacia nel mondo reale.',
          joinButton: 'Inizia Grappling'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Il test definitivo dell\'abilità nelle arti marziali che combina tutte le discipline di combattimento'
        },
        overview: {
          title: 'L\'Arte di Combattimento Definitiva',
          paragraphs: [
            'Le Arti Marziali Miste rappresentano l\'evoluzione degli sport da combattimento, combinando tecniche da boxe, kickboxing, wrestling, Brazilian jiu-jitsu e altre arti marziali in un sistema di combattimento completo.',
            'Il nostro programma MMA alla Sport Academy fornisce agli studenti un set di abilità completo, insegnando sia i componenti individuali che come fonderli insieme senza soluzione di continuità in scenari di competizione e autodifesa.',
            'Che il tuo obiettivo sia la competizione professionale, tornei amatoriali o semplicemente diventare un artista marziale ben arrotondato, il nostro allenamento MMA ti sfiderà fisicamente e mentalmente mentre costruisce vere abilità di combattimento.'
          ]
        },
        techniques: {
          title: 'Abilità di Combattimento Fondamentali',
          subtitle: 'Padroneggia tutti gli aspetti del combattimento di arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Fondamenti di Boxe',
              'Tecniche di Kickboxing',
              'Lavoro di Clinch Muay Thai',
              'Movimento Difensivo',
              'Striking di Combinazione'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche di Takedown',
              'Difesa da Takedown',
              'Cage Wrestling',
              'Controllo a Terra',
              'Get-up e Scramble'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Ground and Pound',
              'Grappling di Submission',
              'Lavoro di Guardia',
              'Difesa da Submission',
              'Transizioni'
            ]
          }
        },
        history: {
          title: 'Evoluzione dell\'MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma l\'MMA moderno è iniziato con eventi come UFC 1 nel 1993, che cercava di determinare l\'arte marziale più efficace in condizioni di combattimento reali.',
            'Le prime competizioni hanno rivelato che nessuna singola arte marziale era completa, portando all\'evoluzione di combattenti che si allenavano in più discipline.',
            'L\'MMA di oggi rappresenta il culmine di questa evoluzione, con combattenti che sono abili in tutti gli aspetti del combattimento e spingono costantemente i confini di ciò che è possibile nelle arti marziali.'
          ],
          milestones: {
            title: 'Pietre Miliari Chiave',
            events: [
              {
                year: '1993',
                description: 'UFC 1 dimostra l\'efficacia del Brazilian Jiu-Jitsu'
              },
              {
                year: '2000s',
                description: 'I combattenti iniziano l\'allenamento incrociato in più discipline'
              },
              {
                year: '2010s',
                description: 'L\'MMA moderno emerge con artisti marziali misti completi'
              },
              {
                year: 'Oggi',
                description: 'L\'MMA continua ad evolversi con nuove tecniche e strategie'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento MMA',
          subtitle: 'Perché l\'MMA è l\'arte marziale più completa per i praticanti moderni',
          items: [
            {
              icon: '🥊',
              title: 'Set di Abilità Completo',
              description: 'Impara tutti gli aspetti del combattimento e dell\'autodifesa'
            },
            {
              icon: '💪',
              title: 'Fitness di Picco',
              description: 'Raggiungi i livelli più alti di condizionamento fisico'
            },
            {
              icon: '🧠',
              title: 'Durezza Mentale',
              description: 'Sviluppa fiducia e resilienza indistruttibili'
            },
            {
              icon: '🎯',
              title: 'Applicazione Reale',
              description: 'Allena tecniche che funzionano in situazioni reali'
            }
          ]
        },
        schedule: {
          title: 'Orario di Allenamento MMA',
          subtitle: 'Sessioni di allenamento complete che coprono tutti gli aspetti delle arti marziali miste'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Studia le tecniche e strategie dei più grandi artisti marziali misti',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Striker maestro con precisione e creatività incredibili'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Combattente completo con ground and pound devastante'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Combattente innovativo che ha ridefinito le tecniche MMA moderne'
            }
          ]
        },
        cta: {
          title: 'Diventa un Combattente Completo',
          description: 'Allenati nell\'arte marziale più efficace del mondo e sviluppa abilità che funzionano in qualsiasi situazione.',
          joinButton: 'Inizia Allenamento MMA'
        }
      }
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