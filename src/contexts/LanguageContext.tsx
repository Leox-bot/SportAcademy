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
        description: 'Train with elite coaches Matteo Parolin and Christian Zecchetto in our state-of-the-art facilities across Campo Tures and Brunico. Whether you\'re a beginner or seasoned fighter, we offer comprehensive training in MMA, Brazilian Jiu-Jitsu, Grappling, and Wrestling.'
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
        description: 'Master the gentle art of Brazilian Jiu-Jitsu, focusing on leverage, technique, and ground control to overcome any opponent.'
      },
      grappling: {
        description: 'Develop superior wrestling and submission skills through intensive grappling training and positional control.'
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
        title: 'Training Classes',
        description: 'Discover our comprehensive range of martial arts classes designed for all skill levels, from beginners to advanced fighters.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Complete MMA training combining striking, wrestling, and Brazilian Jiu-Jitsu. Learn to fight standing up, in the clinch, and on the ground.',
        features: [
          'Striking techniques (boxing, kickboxing, Muay Thai)',
          'Wrestling and takedown defense',
          'Ground fighting and submissions',
          'Cage work and fight strategy',
          'Conditioning and fight preparation'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Master the gentle art of BJJ, focusing on leverage, technique, and ground control. Perfect for self-defense and competition.',
        features: [
          'Guard work and sweeps',
          'Submission techniques',
          'Positional control',
          'Escape techniques',
          'Competition preparation'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Intensive wrestling and submission grappling training. Develop superior takedown skills and ground control.',
        features: [
          'Wrestling fundamentals',
          'Takedown techniques',
          'Ground control positions',
          'Submission grappling',
          'No-gi training'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Fun and safe Brazilian Jiu-Jitsu classes for children, building confidence, discipline, and physical fitness.',
        features: [
          'Age-appropriate techniques',
          'Character development',
          'Anti-bullying skills',
          'Physical fitness',
          'Fun and engaging activities'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Wrestling and grappling fundamentals for young athletes, emphasizing technique, respect, and sportsmanship.',
        features: [
          'Basic wrestling moves',
          'Coordination and balance',
          'Teamwork and respect',
          'Safe training environment',
          'Competition opportunities'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling training focusing on takedowns, control, and conditioning. Essential for MMA and grappling.',
        features: [
          'Single and double leg takedowns',
          'Sprawl and defensive techniques',
          'Top control and pins',
          'Conditioning and strength',
          'Competition preparation'
        ]
      },
      whatYouLearn: 'What You\'ll Learn',
      cta: {
        title: 'Ready to Start Training?',
        description: 'Join our community of fighters and begin your martial arts journey today.'
      }
    },
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Train with world-class instructors who bring years of competition experience and proven teaching methods to every class.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 15 years of martial arts experience, Matteo is a certified Brazilian Jiu-Jitsu black belt and accomplished MMA fighter. He founded Sport Academy in 2017 with the vision of bringing elite-level training to South Tyrol.',
        specializations: [
          'Brazilian Jiu-Jitsu (Black Belt)',
          'Mixed Martial Arts',
          'Competition Coaching',
          'Self-Defense Systems'
        ],
        achievements: [
          'BJJ Black Belt under renowned lineage',
          'Multiple regional MMA victories',
          'Certified instructor in multiple disciplines',
          '8+ years coaching experience'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings a wealth of grappling and wrestling expertise to Sport Academy. His technical approach and attention to detail make him an exceptional instructor for students of all levels.',
        specializations: [
          'Wrestling & Grappling',
          'No-Gi Brazilian Jiu-Jitsu',
          'Takedown Techniques',
          'Youth Programs'
        ],
        achievements: [
          'Competitive wrestling background',
          'Advanced grappling certifications',
          'Youth development specialist',
          'Tournament preparation expert'
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
        description: 'Book your spot in our next training session and start your martial arts journey.'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the perfect training package for your goals. All memberships include access to both locations and all class types.'
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
        title: 'BJJ Focused Training',
        subtitle: 'Dedicated Brazilian Jiu-Jitsu program for serious practitioners',
        program: 'BJJ Only Program',
        description: 'Intensive BJJ training with additional technique sessions'
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
        'Flexible training schedule',
        'Both locations access',
        'Perfect for vacation training'
      ],
      bjjIncludes: [
        'All BJJ classes included',
        'Specialized technique sessions',
        'Competition preparation',
        'Belt progression tracking'
      ],
      selectMainSeason: 'Select Main Season',
      selectSummerSeason: 'Select Summer Season',
      selectBjjOnly: 'Select BJJ Program',
      additionalServices: {
        title: 'Additional Services',
        description: 'Enhance your training with our specialized programs and personal coaching options.'
      },
      personalTraining: {
        title: 'Personal Training',
        description: 'One-on-one coaching tailored to your specific goals and needs.',
        price: '€50',
        duration: 'per session (60 min)'
      },
      competitionPrep: {
        title: 'Competition Prep',
        description: 'Specialized training for upcoming tournaments and competitions.',
        price: '€80',
        duration: 'per session (90 min)'
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
          answer: 'The main season (September-June) offers our complete program with consistent training. Summer season is perfect for maintaining skills during vacation months with a more flexible schedule.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to both Campo Tures and Brunico locations. You can mix and match classes based on your schedule.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer a free trial class for new students. Contact us to schedule your first session and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For your first class, just bring comfortable workout clothes and water. We\'ll provide guidance on any specific gear needed for your chosen disciplines.'
        }
      },
      cta: {
        title: 'Start Your Journey Today',
        description: 'Join the Sport Academy family and transform your martial arts skills with expert instruction.'
      }
    },
    contact: {
      hero: {
        title: 'Contact Us',
        description: 'Get in touch with our team to start your martial arts journey or learn more about our programs. We\'re here to help you achieve your goals.'
      },
      getInTouch: {
        title: 'Get In Touch',
        subtitle: 'Multiple ways to connect with Sport Academy'
      },
      callUs: 'Call Us',
      instagram: 'Instagram',
      locations: {
        title: 'Our Locations',
        subtitle: 'Two convenient locations serving South Tyrol'
      },
      address: 'Address',
      trainingSchedule: 'Training Schedule',
      parkingAccessibility: {
        title: 'Parking & Accessibility',
        subtitle: 'Easy access and convenient parking at both locations'
      },
      parking: 'Parking',
      publicTransport: 'Public Transport',
      accessibility: 'Accessibility',
      brunico: {
        parking: 'Free street parking available along Via Riedl and nearby roads. During peak hours, public garages and paid blue-zone parking are just 5 minutes away on foot.',
        transport: 'Brunico Nord train station is only a 2-minute walk from the gym — perfect if you\'re coming from San Candido, Fortezza or anywhere in the valley. There\'s also a nearby bus stop with urban and regional connections.',
        accessibility: 'The gym is in a quiet, flat area with a short, direct walk from all nearby transport stops. Easy to reach even with gear or training bags.'
      },
      campoTures: {
        parking: 'Free parking is available right in front of the entrance, with additional spots nearby. EV charging station ~200 m away.',
        transport: 'The "Campo Tures Centro" stop is just a 2-minute walk away. Several bus lines stop here, including 450, 451, and 452, offering regular connections to Brunico, local villages, and the surrounding valleys.',
        accessibility: 'The gym is easy to reach on foot, by car or public transport. Located in a wide, flat and well-lit area — perfect for evening training.'
      },
      visitRequirements: {
        title: 'Visit Requirements',
        subtitle: 'What to know before your first visit'
      },
      firstTimeVisitors: 'First-Time Visitors',
      whatToBring: 'What to Bring',
      bring: [
        'Comfortable workout clothes',
        'Water bottle and towel',
        'Athletic shoes (for striking classes)',
        'Positive attitude and willingness to learn'
      ],
      whatWeProvide: 'What We Provide',
      provide: [
        'All training mats and equipment',
        'Changing rooms and showers',
        'Basic protective gear for beginners',
        'Expert instruction and guidance'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Age Requirements: 16+ for adult classes, kids classes available for ages 6-14',
        health: 'Health: Please inform instructors of any injuries or health conditions',
        equipment: 'Equipment: Gi (uniform) rental available for BJJ classes',
        payment: 'Payment: Cash, card, and bank transfer accepted'
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
          subtitle: 'Master the gentle art of leverage, technique, and ground control'
        },
        overview: {
          title: 'The Gentle Art',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent through proper technique, leverage, and timing.',
            'At Sport Academy, our BJJ program is designed to teach students the fundamental principles of this beautiful art while building physical fitness, mental toughness, and self-confidence. Whether you\'re interested in self-defense, competition, or simply staying in shape, BJJ offers something for everyone.',
            'Our experienced instructors guide students through a progressive curriculum that covers all aspects of Brazilian Jiu-Jitsu, from basic positions and escapes to advanced submissions and competition strategies.'
          ]
        },
        techniques: {
          title: 'Core BJJ Techniques',
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
              'Knee on belly position',
              'Transitional movements'
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
            description: 'Each belt represents years of dedicated training, technical knowledge, and personal growth. Our instructors ensure that every promotion is earned through demonstrated skill, understanding, and character development.'
          }
        },
        history: {
          title: 'History of BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu evolved from traditional Japanese jujutsu and judo, brought to Brazil by Mitsuyo Maeda in the early 20th century. The Gracie family, particularly Helio Gracie, adapted these techniques to create a more effective martial art for smaller practitioners.',
            'The art gained worldwide recognition through the early UFC tournaments, where Royce Gracie demonstrated the effectiveness of BJJ against larger opponents from different martial arts backgrounds. This exposure led to BJJ becoming a fundamental component of modern mixed martial arts.'
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
                description: 'UFC champion who showcased BJJ to the world'
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
          description: 'Join our Brazilian Jiu-Jitsu program and discover the gentle art that has transformed martial arts forever.',
          joinButton: 'Join BJJ Classes',
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
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, kickboxing, wrestling, and Brazilian Jiu-Jitsu. It represents the evolution of martial arts, where fighters must be proficient in all ranges of combat.',
            'Our MMA program at Sport Academy provides comprehensive training that develops well-rounded fighters capable of competing at any level. We focus on building a strong foundation in each discipline while teaching students how to seamlessly transition between striking and grappling.',
            'Whether your goal is professional competition, amateur tournaments, or simply becoming the best martial artist you can be, our MMA program will challenge and transform you both physically and mentally.'
          ]
        },
        techniques: {
          title: 'MMA Techniques',
          subtitle: 'Master all aspects of mixed martial arts combat',
          striking: {
            title: 'Striking',
            items: [
              'Boxing fundamentals',
              'Kickboxing and Muay Thai',
              'Elbow and knee strikes',
              'Footwork and head movement'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown techniques',
              'Takedown defense',
              'Cage wrestling',
              'Ground control'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Ground and pound',
              'Submission grappling',
              'Guard work',
              'Escapes and reversals'
            ]
          }
        },
        history: {
          title: 'History of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with the Ultimate Fighting Championship (UFC) in 1993. The early tournaments were designed to determine which martial art was most effective in real combat situations.',
            'Over the years, MMA has evolved from a spectacle of different fighting styles to a sophisticated sport with unified rules, weight classes, and highly trained athletes who are skilled in multiple disciplines.'
          ],
          milestones: {
            title: 'Key Milestones',
            events: [
              {
                year: '1993',
                description: 'First UFC event showcases different martial arts'
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
          title: 'Benefits of MMA Training',
          subtitle: 'Transform your body and mind through mixed martial arts',
          items: [
            {
              icon: '💪',
              title: 'Total Body Fitness',
              description: 'Complete physical conditioning'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Develop resilience and confidence'
            },
            {
              icon: '🥊',
              title: 'Self Defense',
              description: 'Real-world protection skills'
            },
            {
              icon: '⚡',
              title: 'Explosive Power',
              description: 'Build strength and speed'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'High-intensity training sessions for all skill levels'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Learn from the techniques of the greatest fighters',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Legendary striker with incredible precision'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Dominant heavyweight with sambo background'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Creative striker with exceptional reach'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Join our MMA program and develop skills in all aspects of combat sports.',
          joinButton: 'Join MMA Training',
          backButton: 'Back to Classes'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Master the art of wrestling, takedowns, and submission grappling'
        },
        overview: {
          title: 'The Art of Control',
          paragraphs: [
            'Grappling encompasses all forms of wrestling, submission grappling, and ground control techniques. It\'s the foundation of effective ground fighting and an essential component of both self-defense and mixed martial arts.',
            'Our grappling program focuses on developing superior takedown skills, positional control, and submission techniques. Students learn to dominate opponents through leverage, timing, and technical precision rather than relying solely on strength.',
            'Whether you\'re preparing for MMA competition, improving your BJJ game, or simply wanting to become a more complete grappler, our program provides the tools and techniques you need to succeed.'
          ]
        },
        techniques: {
          title: 'Grappling Techniques',
          subtitle: 'Develop a complete arsenal of wrestling and submission skills',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single and double leg takedowns',
              'Hip tosses and throws',
              'Foot sweeps and trips',
              'Cage takedowns'
            ]
          },
          control: {
            title: 'Control',
            items: [
              'Top position control',
              'Pinning combinations',
              'Ride and control techniques',
              'Pressure and weight distribution'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'No-gi submission techniques',
              'Wrestling-based submissions',
              'Leg locks and heel hooks',
              'Transition submissions'
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
                title: 'Live Rolling',
                description: 'Full-intensity grappling sessions'
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
                description: 'Building grappling-specific power'
              },
              {
                title: 'Flexibility',
                description: 'Mobility and injury prevention'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of Grappling',
          subtitle: 'Why grappling training transforms athletes',
          items: [
            {
              icon: '🤼',
              title: 'Wrestling Skills',
              description: 'Superior takedown and control abilities'
            },
            {
              icon: '💪',
              title: 'Functional Strength',
              description: 'Real-world applicable power'
            },
            {
              icon: '🧘',
              title: 'Mental Chess',
              description: 'Strategic thinking and problem solving'
            },
            {
              icon: '⚡',
              title: 'Explosive Power',
              description: 'Dynamic movement and athleticism'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'Intensive training sessions focused on wrestling and submissions'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Study the techniques of wrestling and grappling masters',
          grapplers: [
            {
              name: 'Dan Gable',
              title: 'Wrestling Legend',
              description: 'Olympic champion and coaching icon'
            },
            {
              name: 'Gordon Ryan',
              title: 'No-Gi King',
              description: 'Dominant submission grappler'
            },
            {
              name: 'John Danaher',
              title: 'The Professor',
              description: 'Revolutionary grappling coach'
            }
          ]
        },
        cta: {
          title: 'Master the Ground Game',
          description: 'Develop superior grappling skills that will elevate your entire martial arts game.',
          joinButton: 'Join Grappling Classes',
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
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates and DMs',
      instantConfirmation: 'Instant confirmation',
      duringTrainingHours: 'During training hours'
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
        description: 'Trainiere mit Elite-Trainern Matteo Parolin und Christian Zecchetto in unseren hochmodernen Einrichtungen in Campo Tures und Bruneck. Ob Anfänger oder erfahrener Kämpfer, wir bieten umfassendes Training in MMA, Brazilian Jiu-Jitsu, Grappling und Wrestling.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Kämpfer schmieden seit 2017',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Campo Tures & Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'MMA, BJJ, Grappling & mehr',
        exploreClasses: 'Entdecke unsere Kurse'
      },
      trainLikeFighter: {
        title: 'Trainiere wie ein Kämpfer',
        subtitle: 'Meistere die Kunst der Kampfsportarten mit unseren umfassenden Trainingsprogrammen'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training, das Schlag-, Grappling- und Bodenkampftechniken für das ultimative Kampferlebnis kombiniert.'
      },
      bjj: {
        description: 'Meistere die sanfte Kunst des Brazilian Jiu-Jitsu, mit Fokus auf Hebelwirkung, Technik und Bodenkontrolle, um jeden Gegner zu überwinden.'
      },
      grappling: {
        description: 'Entwickle überlegene Wrestling- und Submission-Fähigkeiten durch intensives Grappling-Training und Positionskontrolle.'
      },
      getStarted: {
        title: 'Starte heute',
        subtitle: 'Wähle deinen Weg zur Kampfsport-Exzellenz'
      },
      quickLinks: {
        viewClasses: 'Kurse ansehen',
        viewClassesDesc: 'Entdecke unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan prüfen',
        checkScheduleDesc: 'Finde deine perfekte Trainingszeit',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wähle dein Trainingspaket',
        contactUs: 'Kontaktiere uns',
        contactUsDesc: 'Nimm Kontakt mit unserem Team auf'
      }
    },
    classes: {
      hero: {
        title: 'Trainingskurse',
        description: 'Entdecke unser umfassendes Angebot an Kampfsportkursen, die für alle Fähigkeitsstufen konzipiert sind, von Anfängern bis zu fortgeschrittenen Kämpfern.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Komplettes MMA-Training, das Schlagen, Wrestling und Brazilian Jiu-Jitsu kombiniert. Lerne im Stehen, im Clinch und am Boden zu kämpfen.',
        features: [
          'Schlagtechniken (Boxen, Kickboxen, Muay Thai)',
          'Wrestling und Takedown-Verteidigung',
          'Bodenkampf und Submissions',
          'Käfigarbeit und Kampfstrategie',
          'Konditionierung und Kampfvorbereitung'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Meistere die sanfte Kunst des BJJ, mit Fokus auf Hebelwirkung, Technik und Bodenkontrolle. Perfekt für Selbstverteidigung und Wettkampf.',
        features: [
          'Guard-Arbeit und Sweeps',
          'Submission-Techniken',
          'Positionskontrolle',
          'Befreiungstechniken',
          'Wettkampfvorbereitung'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Intensives Wrestling- und Submission-Grappling-Training. Entwickle überlegene Takedown-Fähigkeiten und Bodenkontrolle.',
        features: [
          'Wrestling-Grundlagen',
          'Takedown-Techniken',
          'Bodenkontrollpositionen',
          'Submission-Grappling',
          'No-Gi-Training'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Spaßige und sichere Brazilian Jiu-Jitsu-Kurse für Kinder, die Selbstvertrauen, Disziplin und körperliche Fitness aufbauen.',
        features: [
          'Altersgerechte Techniken',
          'Charakterentwicklung',
          'Anti-Mobbing-Fähigkeiten',
          'Körperliche Fitness',
          'Spaßige und ansprechende Aktivitäten'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Wrestling- und Grappling-Grundlagen für junge Athleten, mit Betonung auf Technik, Respekt und Sportlichkeit.',
        features: [
          'Grundlegende Wrestling-Bewegungen',
          'Koordination und Balance',
          'Teamwork und Respekt',
          'Sichere Trainingsumgebung',
          'Wettkampfmöglichkeiten'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelles Wrestling-Training mit Fokus auf Takedowns, Kontrolle und Konditionierung. Essentiell für MMA und Grappling.',
        features: [
          'Single- und Double-Leg-Takedowns',
          'Sprawl- und Verteidigungstechniken',
          'Top-Kontrolle und Pins',
          'Konditionierung und Kraft',
          'Wettkampfvorbereitung'
        ]
      },
      whatYouLearn: 'Was du lernst',
      cta: {
        title: 'Bereit zum Training?',
        description: 'Tritt unserer Kämpfergemeinschaft bei und beginne heute deine Kampfsport-Reise.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Trainiere mit Weltklasse-Instruktoren, die jahrelange Wettkampferfahrung und bewährte Lehrmethoden in jeden Kurs einbringen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 15 Jahren Kampfsporterfahrung ist Matteo ein zertifizierter Brazilian Jiu-Jitsu Schwarzgurt und erfolgreicher MMA-Kämpfer. Er gründete die Sport Academy 2017 mit der Vision, Elite-Training nach Südtirol zu bringen.',
        specializations: [
          'Brazilian Jiu-Jitsu (Schwarzgurt)',
          'Mixed Martial Arts',
          'Wettkampf-Coaching',
          'Selbstverteidigungssysteme'
        ],
        achievements: [
          'BJJ Schwarzgurt unter renommierter Linie',
          'Mehrere regionale MMA-Siege',
          'Zertifizierter Instruktor in mehreren Disziplinen',
          '8+ Jahre Coaching-Erfahrung'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt eine Fülle von Grappling- und Wrestling-Expertise zur Sport Academy. Sein technischer Ansatz und seine Aufmerksamkeit für Details machen ihn zu einem außergewöhnlichen Instruktor für Schüler aller Stufen.',
        specializations: [
          'Wrestling & Grappling',
          'No-Gi Brazilian Jiu-Jitsu',
          'Takedown-Techniken',
          'Jugendprogramme'
        ],
        achievements: [
          'Wettkampf-Wrestling-Hintergrund',
          'Fortgeschrittene Grappling-Zertifizierungen',
          'Jugendentwicklungsspezialist',
          'Turniervorbereitung-Experte'
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
          description: 'Jeder Schüler erhält persönliche Aufmerksamkeit und Trainingspläne, die auf seine Ziele und sein Fähigkeitsniveau zugeschnitten sind.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir vermitteln Werte von Respekt, Disziplin und Sportlichkeit, die weit über die Trainingsmatten hinausgehen.'
        }
      },
      cta: {
        title: 'Trainiere mit den Besten',
        description: 'Erlebe Weltklasse-Unterricht und bringe deine Kampfsportfähigkeiten auf die nächste Stufe.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finde die perfekten Trainingszeiten, die zu deinem Zeitplan passen. Wir bieten Kurse während der ganzen Woche an beiden Standorten Campo Tures und Bruneck an.'
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
      striking: 'Schlagen',
      openMat: 'Freies Training',
      importantInfo: 'Wichtige Informationen',
      classGuidelines: 'Kursrichtlinien',
      guidelines: {
        arrive: 'Komme 10-15 Minuten früher zum Aufwärmen',
        water: 'Bringe Wasserflasche und Handtuch mit',
        gi: 'BJJ-Kurse erfordern einen Gi (Uniform)',
        noGi: 'Grappling- und MMA-Kurse sind No-Gi'
      },
      membershipBenefits: 'Mitgliedschaftsvorteile',
      benefits: {
        allClasses: 'Zugang zu allen Kursen inklusive',
        openMat: 'Kostenlose freie Trainingseinheiten',
        bothLocations: 'Training an beiden Standorten',
        personalTraining: 'Ermäßigtes Personaltraining'
      },
      cta: {
        title: 'Bereit für einen Kurs?',
        description: 'Buche deinen Platz in unserer nächsten Trainingseinheit und starte deine Kampfsport-Reise.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle das perfekte Trainingspaket für deine Ziele. Alle Mitgliedschaften beinhalten Zugang zu beiden Standorten und allen Kursarten.'
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
        title: 'BJJ-fokussiertes Training',
        subtitle: 'Spezielles Brazilian Jiu-Jitsu-Programm für ernsthafte Praktizierende',
        program: 'Nur BJJ-Programm',
        description: 'Intensives BJJ-Training mit zusätzlichen Technikeinheiten'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was enthalten ist',
      mainIncludes: [
        'Unbegrenzter Zugang zu allen Kursen',
        'Training an beiden Standorten',
        'Freie Trainingseinheiten',
        'Anfängerfreundlicher Unterricht',
        'Zugang zum Wettkampfteam'
      ],
      summerIncludes: [
        'Alle Sommerkurse inklusive',
        'Flexibler Trainingsplan',
        'Zugang zu beiden Standorten',
        'Perfekt für Urlaubstraining'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse inklusive',
        'Spezialisierte Technikeinheiten',
        'Wettkampfvorbereitung',
        'Gürtel-Fortschritt-Tracking'
      ],
      selectMainSeason: 'Hauptsaison wählen',
      selectSummerSeason: 'Sommersaison wählen',
      selectBjjOnly: 'BJJ-Programm wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessere dein Training mit unseren spezialisierten Programmen und persönlichen Coaching-Optionen.'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Eins-zu-eins-Coaching, das auf deine spezifischen Ziele und Bedürfnisse zugeschnitten ist.',
        price: '€50',
        duration: 'pro Einheit (60 Min.)'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training für bevorstehende Turniere und Wettkämpfe.',
        price: '€80',
        duration: 'pro Einheit (90 Min.)'
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
          answer: 'Die Hauptsaison (September-Juni) bietet unser komplettes Programm mit konsistentem Training. Die Sommersaison ist perfekt, um die Fähigkeiten während der Urlaubsmonate mit einem flexibleren Zeitplan zu erhalten.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu beiden Standorten Campo Tures und Bruneck. Du kannst Kurse je nach deinem Zeitplan mischen und kombinieren.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Absolut! Wir bieten eine kostenlose Probestunde für neue Schüler an. Kontaktiere uns, um deine erste Einheit zu planen und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für deine erste Stunde bringe einfach bequeme Trainingskleidung und Wasser mit. Wir geben dir Anleitung zu jeder spezifischen Ausrüstung, die für deine gewählten Disziplinen benötigt wird.'
        }
      },
      cta: {
        title: 'Starte deine Reise heute',
        description: 'Tritt der Sport Academy Familie bei und transformiere deine Kampfsportfähigkeiten mit Expertenunterricht.'
      }
    },
    contact: {
      hero: {
        title: 'Kontaktiere uns',
        description: 'Nimm Kontakt mit unserem Team auf, um deine Kampfsport-Reise zu beginnen oder mehr über unsere Programme zu erfahren. Wir sind hier, um dir zu helfen, deine Ziele zu erreichen.'
      },
      getInTouch: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Mehrere Wege, um mit der Sport Academy in Verbindung zu treten'
      },
      callUs: 'Ruf uns an',
      instagram: 'Instagram',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Standorte in Südtirol'
      },
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      parkingAccessibility: {
        title: 'Parken & Zugänglichkeit',
        subtitle: 'Einfacher Zugang und bequemes Parken an beiden Standorten'
      },
      parking: 'Parken',
      publicTransport: 'Öffentliche Verkehrsmittel',
      accessibility: 'Zugänglichkeit',
      brunico: {
        parking: 'Kostenlose Straßenparkplätze entlang der Via Riedl und nahegelegenen Straßen verfügbar. Während der Stoßzeiten sind öffentliche Garagen und kostenpflichtige Blaue-Zone-Parkplätze nur 5 Gehminuten entfernt.',
        transport: 'Der Bahnhof Bruneck Nord ist nur 2 Gehminuten vom Fitnessstudio entfernt — perfekt, wenn du aus San Candido, Fortezza oder irgendwo im Tal kommst. Es gibt auch eine nahegelegene Bushaltestelle mit städtischen und regionalen Verbindungen.',
        accessibility: 'Das Fitnessstudio befindet sich in einer ruhigen, flachen Gegend mit einem kurzen, direkten Weg von allen nahegelegenen Verkehrshaltestellen. Einfach zu erreichen, auch mit Ausrüstung oder Trainingstaschen.'
      },
      campoTures: {
        parking: 'Kostenlose Parkplätze sind direkt vor dem Eingang verfügbar, mit zusätzlichen Plätzen in der Nähe. E-Ladestation ~200 m entfernt.',
        transport: 'Die Haltestelle "Campo Tures Centro" ist nur 2 Gehminuten entfernt. Mehrere Buslinien halten hier, einschließlich 450, 451 und 452, die regelmäßige Verbindungen nach Bruneck, zu lokalen Dörfern und den umliegenden Tälern bieten.',
        accessibility: 'Das Fitnessstudio ist zu Fuß, mit dem Auto oder öffentlichen Verkehrsmitteln leicht zu erreichen. Befindet sich in einem breiten, flachen und gut beleuchteten Bereich — perfekt für das Abendtraining.'
      },
      visitRequirements: {
        title: 'Besuchsanforderungen',
        subtitle: 'Was du vor deinem ersten Besuch wissen solltest'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was mitbringen',
      bring: [
        'Bequeme Trainingskleidung',
        'Wasserflasche und Handtuch',
        'Sportschuhe (für Schlagkurse)',
        'Positive Einstellung und Lernbereitschaft'
      ],
      whatWeProvide: 'Was wir bereitstellen',
      provide: [
        'Alle Trainingsmatten und Ausrüstung',
        'Umkleideräume und Duschen',
        'Grundlegende Schutzausrüstung für Anfänger',
        'Expertenunterricht und Anleitung'
      ],
      specialInstructions: 'Spezielle Anweisungen',
      instructions: {
        age: 'Altersanforderungen: 16+ für Erwachsenenkurse, Kinderkurse verfügbar für Alter 6-14',
        health: 'Gesundheit: Bitte informiere Instruktoren über Verletzungen oder Gesundheitszustände',
        equipment: 'Ausrüstung: Gi (Uniform) Verleih verfügbar für BJJ-Kurse',
        payment: 'Zahlung: Bargeld, Karte und Banküberweisung akzeptiert'
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
          subtitle: 'Meistere die sanfte Kunst der Hebelwirkung, Technik und Bodenkontrolle'
        },
        overview: {
          title: 'Die sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Es betont das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner durch richtige Technik, Hebelwirkung und Timing verteidigen kann.',
            'Bei der Sport Academy ist unser BJJ-Programm darauf ausgelegt, Schülern die grundlegenden Prinzipien dieser schönen Kunst zu lehren, während körperliche Fitness, mentale Stärke und Selbstvertrauen aufgebaut werden. Ob du dich für Selbstverteidigung, Wettkampf oder einfach nur für das Fitbleiben interessierst, BJJ bietet für jeden etwas.',
            'Unsere erfahrenen Instruktoren führen Schüler durch einen progressiven Lehrplan, der alle Aspekte des Brazilian Jiu-Jitsu abdeckt, von grundlegenden Positionen und Befreiungen bis hin zu fortgeschrittenen Submissions und Wettkampfstrategien.'
          ]
        },
        techniques: {
          title: 'Kern-BJJ-Techniken',
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
              'Gelenkhebel und Armbars',
              'Beinhebel und Heel Hooks',
              'Submission-Ketten'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Side Control',
              'Back Control Techniken',
              'Knee on Belly Position',
              'Übergangsbewegungen'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ-Gürtelsystem',
          subtitle: 'Fortschritt durch das traditionelle Brazilian Jiu-Jitsu-Rangsystem',
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
            description: 'Jeder Gürtel repräsentiert Jahre des engagierten Trainings, technisches Wissen und persönliches Wachstum. Unsere Instruktoren stellen sicher, dass jede Beförderung durch demonstrierte Fähigkeiten, Verständnis und Charakterentwicklung verdient wird.'
          }
        },
        history: {
          title: 'Geschichte des BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu entwickelte sich aus traditionellem japanischem Jujutsu und Judo, das von Mitsuyo Maeda im frühen 20. Jahrhundert nach Brasilien gebracht wurde. Die Gracie-Familie, insbesondere Helio Gracie, passte diese Techniken an, um eine effektivere Kampfkunst für kleinere Praktizierende zu schaffen.',
            'Die Kunst erlangte weltweite Anerkennung durch die frühen UFC-Turniere, wo Royce Gracie die Wirksamkeit des BJJ gegen größere Gegner aus verschiedenen Kampfkunst-Hintergründen demonstrierte. Diese Exposition führte dazu, dass BJJ zu einer grundlegenden Komponente der modernen Mixed Martial Arts wurde.'
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
                description: 'UFC-Champion, der BJJ der Welt zeigte'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ-Trainingsplan',
          subtitle: 'Regelmäßige Kurse an beiden Standorten während der ganzen Woche verfügbar'
        },
        cta: {
          title: 'Starte deine BJJ-Reise',
          description: 'Tritt unserem Brazilian Jiu-Jitsu-Programm bei und entdecke die sanfte Kunst, die die Kampfkünste für immer verändert hat.',
          joinButton: 'BJJ-Kurse beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der Schlagen, Wrestling und Bodenkampf kombiniert'
        },
        overview: {
          title: 'Der komplette Kämpfer',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der vollständigste Kampfsport, der Techniken aus Boxen, Kickboxen, Wrestling und Brazilian Jiu-Jitsu kombiniert. Es repräsentiert die Evolution der Kampfkünste, wo Kämpfer in allen Kampfbereichen kompetent sein müssen.',
            'Unser MMA-Programm bei der Sport Academy bietet umfassendes Training, das vielseitige Kämpfer entwickelt, die auf jedem Level konkurrieren können. Wir konzentrieren uns darauf, eine starke Grundlage in jeder Disziplin aufzubauen und gleichzeitig den Schülern beizubringen, wie sie nahtlos zwischen Schlagen und Grappling wechseln können.',
            'Ob dein Ziel professioneller Wettkampf, Amateur-Turniere oder einfach der beste Kampfkünstler zu werden, der du sein kannst, unser MMA-Programm wird dich sowohl körperlich als auch mental herausfordern und transformieren.'
          ]
        },
        techniques: {
          title: 'MMA-Techniken',
          subtitle: 'Meistere alle Aspekte des Mixed Martial Arts Kampfes',
          striking: {
            title: 'Schlagen',
            items: [
              'Box-Grundlagen',
              'Kickboxen und Muay Thai',
              'Ellbogen- und Knieschläge',
              'Fußarbeit und Kopfbewegung'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken',
              'Takedown-Verteidigung',
              'Käfig-Wrestling',
              'Bodenkontrolle'
            ]
          },
          groundGame: {
            title: 'Bodenspiel',
            items: [
              'Ground and Pound',
              'Submission-Grappling',
              'Guard-Arbeit',
              'Befreiungen und Umkehrungen'
            ]
          }
        },
        history: {
          title: 'Geschichte des MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit der Ultimate Fighting Championship (UFC) im Jahr 1993. Die frühen Turniere wurden entwickelt, um zu bestimmen, welche Kampfkunst in echten Kampfsituationen am effektivsten war.',
            'Im Laufe der Jahre hat sich MMA von einem Spektakel verschiedener Kampfstile zu einem ausgeklügelten Sport mit einheitlichen Regeln, Gewichtsklassen und hochtrainierten Athleten entwickelt, die in mehreren Disziplinen geschult sind.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erste UFC-Veranstaltung zeigt verschiedene Kampfkünste'
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
          title: 'Vorteile des MMA-Trainings',
          subtitle: 'Transformiere deinen Körper und Geist durch Mixed Martial Arts',
          items: [
            {
              icon: '💪',
              title: 'Ganzkörper-Fitness',
              description: 'Komplette körperliche Konditionierung'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Entwickle Widerstandsfähigkeit und Selbstvertrauen'
            },
            {
              icon: '🥊',
              title: 'Selbstverteidigung',
              description: 'Reale Schutzfähigkeiten'
            },
            {
              icon: '⚡',
              title: 'Explosive Kraft',
              description: 'Baue Stärke und Geschwindigkeit auf'
            }
          ]
        },
        schedule: {
          title: 'MMA-Trainingsplan',
          subtitle: 'Hochintensive Trainingseinheiten für alle Fähigkeitsstufen'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Lerne von den Techniken der größten Kämpfer',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'Die Spinne',
              description: 'Legendärer Schläger mit unglaublicher Präzision'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'Der letzte Kaiser',
              description: 'Dominanter Schwergewichtler mit Sambo-Hintergrund'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Kreativer Schläger mit außergewöhnlicher Reichweite'
            }
          ]
        },
        cta: {
          title: 'Werde ein kompletter Kämpfer',
          description: 'Tritt unserem MMA-Programm bei und entwickle Fähigkeiten in allen Aspekten der Kampfsportarten.',
          joinButton: 'MMA-Training beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Meistere die Kunst des Wrestling, Takedowns und Submission-Grappling'
        },
        overview: {
          title: 'Die Kunst der Kontrolle',
          paragraphs: [
            'Grappling umfasst alle Formen des Wrestling, Submission-Grappling und Bodenkontrolltechniken. Es ist die Grundlage für effektiven Bodenkampf und eine wesentliche Komponente sowohl der Selbstverteidigung als auch der Mixed Martial Arts.',
            'Unser Grappling-Programm konzentriert sich darauf, überlegene Takedown-Fähigkeiten, Positionskontrolle und Submission-Techniken zu entwickeln. Schüler lernen, Gegner durch Hebelwirkung, Timing und technische Präzision zu dominieren, anstatt sich ausschließlich auf Kraft zu verlassen.',
            'Ob du dich auf MMA-Wettkämpfe vorbereitest, dein BJJ-Spiel verbesserst oder einfach ein vollständigerer Grappler werden möchtest, unser Programm bietet die Werkzeuge und Techniken, die du zum Erfolg benötigst.'
          ]
        },
        techniques: {
          title: 'Grappling-Techniken',
          subtitle: 'Entwickle ein komplettes Arsenal von Wrestling- und Submission-Fähigkeiten',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single- und Double-Leg-Takedowns',
              'Hüftwürfe und Würfe',
              'Fußfeger und Trips',
              'Käfig-Takedowns'
            ]
          },
          control: {
            title: 'Kontrolle',
            items: [
              'Top-Positionskontrolle',
              'Pinning-Kombinationen',
              'Ride- und Kontrolltechniken',
              'Druck und Gewichtsverteilung'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'No-Gi-Submission-Techniken',
              'Wrestling-basierte Submissions',
              'Beinhebel und Heel Hooks',
              'Übergangs-Submissions'
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
                description: 'Wiederholende Praxis grundlegender Bewegungen'
              },
              {
                title: 'Positions-Sparring',
                description: 'Fokussiertes Training aus spezifischen Positionen'
              },
              {
                title: 'Live Rolling',
                description: 'Vollintensive Grappling-Sitzungen'
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
                description: 'Aufbau grappling-spezifischer Kraft'
              },
              {
                title: 'Flexibilität',
                description: 'Mobilität und Verletzungsprävention'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grappling',
          subtitle: 'Warum Grappling-Training Athleten transformiert',
          items: [
            {
              icon: '🤼',
              title: 'Wrestling-Fähigkeiten',
              description: 'Überlegene Takedown- und Kontrollfähigkeiten'
            },
            {
              icon: '💪',
              title: 'Funktionale Kraft',
              description: 'Real anwendbare Kraft'
            },
            {
              icon: '🧘',
              title: 'Mentales Schach',
              description: 'Strategisches Denken und Problemlösung'
            },
            {
              icon: '⚡',
              title: 'Explosive Kraft',
              description: 'Dynamische Bewegung und Athletik'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Zeitplan',
          subtitle: 'Intensive Trainingseinheiten mit Fokus auf Wrestling und Submissions'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Studiere die Techniken von Wrestling- und Grappling-Meistern',
          grapplers: [
            {
              name: 'Dan Gable',
              title: 'Wrestling-Legende',
              description: 'Olympiasieger und Coaching-Ikone'
            },
            {
              name: 'Gordon Ryan',
              title: 'No-Gi-König',
              description: 'Dominanter Submission-Grappler'
            },
            {
              name: 'John Danaher',
              title: 'Der Professor',
              description: 'Revolutionärer Grappling-Coach'
            }
          ]
        },
        cta: {
          title: 'Meistere das Bodenspiel',
          description: 'Entwickle überlegene Grappling-Fähigkeiten, die dein gesamtes Kampfkunstspiel erheben werden.',
          joinButton: 'Grappling-Kurse beitreten',
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
      allLevels: 'Alle Stufen',
      ages: 'Alter',
      joinSportAcademy: 'Sport Academy beitreten',
      registerOnline: 'Online registrieren',
      bookClasses: 'Kurse buchen',
      visitUs: 'Besuche uns',
      dropInWelcome: 'Drop-ins willkommen',
      responseWithin2Hours: 'Antwort innerhalb von 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates und DMs',
      instantConfirmation: 'Sofortige Bestätigung',
      duringTrainingHours: 'Während der Trainingszeiten'
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
        description: 'Allenati con gli istruttori d\'élite Matteo Parolin e Christian Zecchetto nelle nostre strutture all\'avanguardia a Campo Tures e Brunico. Che tu sia un principiante o un combattente esperto, offriamo allenamento completo in MMA, Brazilian Jiu-Jitsu, Grappling e Wrestling.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Forgiamo combattenti dal 2017',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'MMA, BJJ, Grappling & altro',
        exploreClasses: 'Esplora i nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati come un Combattente',
        subtitle: 'Padroneggia l\'arte degli sport da combattimento con i nostri programmi di allenamento completi'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, grappling e ground game per l\'esperienza di combattimento definitiva.'
      },
      bjj: {
        description: 'Padroneggia l\'arte gentile del Brazilian Jiu-Jitsu, concentrandoti su leva, tecnica e controllo a terra per superare qualsiasi avversario.'
      },
      grappling: {
        description: 'Sviluppa abilità superiori di wrestling e submission attraverso allenamento intensivo di grappling e controllo posizionale.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Scegli il tuo percorso verso l\'eccellenza nelle arti marziali'
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
        title: 'Corsi di Allenamento',
        description: 'Scopri la nostra gamma completa di corsi di arti marziali progettati per tutti i livelli di abilità, dai principianti ai combattenti avanzati.'
      },
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Allenamento MMA completo che combina striking, wrestling e Brazilian Jiu-Jitsu. Impara a combattere in piedi, nel clinch e a terra.',
        features: [
          'Tecniche di striking (boxe, kickboxing, Muay Thai)',
          'Wrestling e difesa da takedown',
          'Ground fighting e submission',
          'Lavoro in gabbia e strategia di combattimento',
          'Condizionamento e preparazione al combattimento'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Padroneggia l\'arte gentile del BJJ, concentrandoti su leva, tecnica e controllo a terra. Perfetto per autodifesa e competizione.',
        features: [
          'Lavoro di guardia e sweep',
          'Tecniche di submission',
          'Controllo posizionale',
          'Tecniche di fuga',
          'Preparazione alla competizione'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Allenamento intensivo di wrestling e submission grappling. Sviluppa abilità superiori di takedown e controllo a terra.',
        features: [
          'Fondamentali di wrestling',
          'Tecniche di takedown',
          'Posizioni di controllo a terra',
          'Submission grappling',
          'Allenamento no-gi'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Corsi di Brazilian Jiu-Jitsu divertenti e sicuri per bambini, che costruiscono fiducia, disciplina e forma fisica.',
        features: [
          'Tecniche appropriate per l\'età',
          'Sviluppo del carattere',
          'Abilità anti-bullismo',
          'Forma fisica',
          'Attività divertenti e coinvolgenti'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Fondamentali di wrestling e grappling per giovani atleti, enfatizzando tecnica, rispetto e sportività.',
        features: [
          'Mosse di wrestling di base',
          'Coordinazione ed equilibrio',
          'Lavoro di squadra e rispetto',
          'Ambiente di allenamento sicuro',
          'Opportunità di competizione'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Allenamento di wrestling tradizionale concentrato su takedown, controllo e condizionamento. Essenziale per MMA e grappling.',
        features: [
          'Takedown single e double leg',
          'Tecniche di sprawl e difesa',
          'Controllo dall\'alto e pin',
          'Condizionamento e forza',
          'Preparazione alla competizione'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Pronto per Iniziare l\'Allenamento?',
        description: 'Unisciti alla nostra comunità di combattenti e inizia oggi il tuo viaggio nelle arti marziali.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Allenati con istruttori di classe mondiale che portano anni di esperienza competitiva e metodi di insegnamento comprovati in ogni lezione.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore & Fondatore',
        background: 'Con oltre 15 anni di esperienza nelle arti marziali, Matteo è una cintura nera certificata di Brazilian Jiu-Jitsu e un combattente MMA di successo. Ha fondato la Sport Academy nel 2017 con la visione di portare allenamento di livello élite in Alto Adige.',
        specializations: [
          'Brazilian Jiu-Jitsu (Cintura Nera)',
          'Arti Marziali Miste',
          'Coaching Competitivo',
          'Sistemi di Autodifesa'
        ],
        achievements: [
          'Cintura Nera BJJ sotto lignaggio rinomato',
          'Multiple vittorie MMA regionali',
          'Istruttore certificato in multiple discipline',
          '8+ anni di esperienza di coaching'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta una ricchezza di esperienza in grappling e wrestling alla Sport Academy. Il suo approccio tecnico e l\'attenzione ai dettagli lo rendono un istruttore eccezionale per studenti di tutti i livelli.',
        specializations: [
          'Wrestling & Grappling',
          'Brazilian Jiu-Jitsu No-Gi',
          'Tecniche di Takedown',
          'Programmi Giovanili'
        ],
        achievements: [
          'Background di wrestling competitivo',
          'Certificazioni avanzate di grappling',
          'Specialista nello sviluppo giovanile',
          'Esperto di preparazione ai tornei'
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
          description: 'Ogni studente riceve attenzione personalizzata e piani di allenamento su misura per i loro obiettivi e livello di abilità.'
        },
        respect: {
          title: 'Rispetto & Disciplina',
          description: 'Instilliamo valori di rispetto, disciplina e sportività che si estendono ben oltre i tappetini di allenamento.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Sperimenta istruzione di classe mondiale e porta le tue abilità nelle arti marziali al livello successivo.'
      }
    },
    schedule: {
      hero: {
        title: 'Orario di Allenamento',
        description: 'Trova gli orari di allenamento perfetti che si adattano al tuo programma. Offriamo corsi durante tutta la settimana in entrambe le nostre sedi di Campo Tures e Brunico.'
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
        arrive: 'Arriva 10-15 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'I corsi BJJ richiedono un gi (uniforme)',
        noGi: 'I corsi di grappling e MMA sono no-gi'
      },
      membershipBenefits: 'Benefici dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutti i corsi incluso',
        openMat: 'Sessioni di tappeto libero gratuite',
        bothLocations: 'Allenamento in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto per Unirti a un Corso?',
        description: 'Prenota il tuo posto nella nostra prossima sessione di allenamento e inizia il tuo viaggio nelle arti marziali.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il pacchetto di allenamento perfetto per i tuoi obiettivi. Tutti gli abbonamenti includono accesso a entrambe le sedi e tutti i tipi di corso.'
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
        title: 'Allenamento Focalizzato BJJ',
        subtitle: 'Programma dedicato di Brazilian Jiu-Jitsu per praticanti seri',
        program: 'Programma Solo BJJ',
        description: 'Allenamento BJJ intensivo con sessioni tecniche aggiuntive'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      mainIncludes: [
        'Accesso illimitato a tutti i corsi',
        'Allenamento in entrambe le sedi',
        'Sessioni di tappeto libero',
        'Istruzione adatta ai principianti',
        'Accesso al team competitivo'
      ],
      summerIncludes: [
        'Tutti i corsi estivi inclusi',
        'Orario di allenamento flessibile',
        'Accesso a entrambe le sedi',
        'Perfetto per allenamento in vacanza'
      ],
      bjjIncludes: [
        'Tutti i corsi BJJ inclusi',
        'Sessioni tecniche specializzate',
        'Preparazione alla competizione',
        'Tracciamento progressione cinture'
      ],
      selectMainSeason: 'Seleziona Stagione Principale',
      selectSummerSeason: 'Seleziona Stagione Estiva',
      selectBjjOnly: 'Seleziona Programma BJJ',
      additionalServices: {
        title: 'Servizi Aggiuntivi',
        description: 'Migliora il tuo allenamento con i nostri programmi specializzati e opzioni di coaching personale.'
      },
      personalTraining: {
        title: 'Allenamento Personale',
        description: 'Coaching uno-a-uno su misura per i tuoi obiettivi e bisogni specifici.',
        price: '€50',
        duration: 'per sessione (60 min)'
      },
      competitionPrep: {
        title: 'Preparazione Competizione',
        description: 'Allenamento specializzato per tornei e competizioni imminenti.',
        price: '€80',
        duration: 'per sessione (90 min)'
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
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro programma completo con allenamento costante. La stagione estiva è perfetta per mantenere le abilità durante i mesi di vacanza con un orario più flessibile.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono accesso a entrambe le sedi Campo Tures e Brunico. Puoi mescolare e abbinare i corsi in base al tuo programma.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo una lezione di prova gratuita per nuovi studenti. Contattaci per programmare la tua prima sessione e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Di che attrezzatura ho bisogno?',
          answer: 'Per la tua prima lezione, porta semplicemente abbigliamento da allenamento comodo e acqua. Ti forniremo indicazioni su qualsiasi attrezzatura specifica necessaria per le discipline scelte.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio Oggi',
        description: 'Unisciti alla famiglia Sport Academy e trasforma le tue abilità nelle arti marziali con istruzione esperta.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Mettiti in contatto con il nostro team per iniziare il tuo viaggio nelle arti marziali o per saperne di più sui nostri programmi. Siamo qui per aiutarti a raggiungere i tuoi obiettivi.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con Sport Academy'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due sedi convenienti che servono l\'Alto Adige'
      },
      address: 'Indirizzo',
      trainingSchedule: 'Orario di Allenamento',
      parkingAccessibility: {
        title: 'Parcheggio e Accessibilità',
        subtitle: 'Accesso facile e parcheggio conveniente in entrambe le sedi'
      },
      parking: 'Parcheggio',
      publicTransport: 'Trasporto Pubblico',
      accessibility: 'Accessibilità',
      brunico: {
        parking: 'Parcheggio gratuito in strada disponibile lungo Via Riedl e strade vicine. Durante le ore di punta, garage pubblici e parcheggi a pagamento zona blu sono a soli 5 minuti a piedi.',
        transport: 'La stazione ferroviaria Brunico Nord è a soli 2 minuti a piedi dalla palestra — perfetta se vieni da San Candido, Fortezza o da qualsiasi parte della valle. C\'è anche una fermata dell\'autobus nelle vicinanze con collegamenti urbani e regionali.',
        accessibility: 'La palestra si trova in una zona tranquilla e pianeggiante con una breve camminata diretta da tutte le fermate di trasporto vicine. Facile da raggiungere anche con attrezzature o borse da allenamento.'
      },
      campoTures: {
        parking: 'Parcheggio gratuito disponibile proprio di fronte all\'ingresso, con posti aggiuntivi nelle vicinanze. Stazione di ricarica EV ~200 m di distanza.',
        transport: 'La fermata "Campo Tures Centro" è a soli 2 minuti a piedi. Diverse linee di autobus si fermano qui, incluse 450, 451 e 452, offrendo collegamenti regolari a Brunico, villaggi locali e le valli circostanti.',
        accessibility: 'La palestra è facile da raggiungere a piedi, in auto o con i trasporti pubblici. Situata in un\'area ampia, pianeggiante e ben illuminata — perfetta per l\'allenamento serale.'
      },
      visitRequirements: {
        title: 'Requisiti per la Visita',
        subtitle: 'Cosa sapere prima della tua prima visita'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      bring: [
        'Abbigliamento da allenamento comodo',
        'Bottiglia d\'acqua e asciugamano',
        'Scarpe sportive (per corsi di striking)',
        'Atteggiamento positivo e voglia di imparare'
      ],
      whatWeProvide: 'Cosa Forniamo',
      provide: [
        'Tutti i tappetini e attrezzature da allenamento',
        'Spogliatoi e docce',
        'Attrezzatura protettiva di base per principianti',
        'Istruzione esperta e guida'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Requisiti di Età: 16+ per corsi adulti, corsi bambini disponibili per età 6-14',
        health: 'Salute: Si prega di informare gli istruttori di eventuali infortuni o condizioni di salute',
        equipment: 'Attrezzatura: Noleggio gi (uniforme) disponibile per corsi BJJ',
        payment: 'Pagamento: Contanti, carta e bonifico bancario accettati'
      },
      cta: {
        title: 'Pronto per Iniziare l\'Allenamento?',
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
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul ground fighting e le prese di submission. Enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte attraverso tecnica appropriata, leva e tempismo.',
            'Alla Sport Academy, il nostro programma BJJ è progettato per insegnare agli studenti i principi fondamentali di questa bellissima arte mentre si costruisce forma fisica, resistenza mentale e fiducia in se stessi. Che tu sia interessato all\'autodifesa, alla competizione o semplicemente a mantenerti in forma, il BJJ offre qualcosa per tutti.',
            'I nostri istruttori esperti guidano gli studenti attraverso un curriculum progressivo che copre tutti gli aspetti del Brazilian Jiu-Jitsu, dalle posizioni di base e fughe alle submission avanzate e strategie competitive.'
          ]
        },
        techniques: {
          title: 'Tecniche BJJ Fondamentali',
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
            title: 'Submission',
            items: [
              'Strangolamenti e soffocamenti',
              'Leve articolari e armbar',
              'Leve alle gambe e heel hook',
              'Catene di submission'
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
            description: 'Ogni cintura rappresenta anni di allenamento dedicato, conoscenza tecnica e crescita personale. I nostri istruttori assicurano che ogni promozione sia guadagnata attraverso abilità dimostrate, comprensione e sviluppo del carattere.'
          }
        },
        history: {
          title: 'Storia del BJJ',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu si è evoluto dal jujutsu giapponese tradizionale e dal judo, portato in Brasile da Mitsuyo Maeda all\'inizio del XX secolo. La famiglia Gracie, in particolare Helio Gracie, ha adattato queste tecniche per creare un\'arte marziale più efficace per i praticanti più piccoli.',
            'L\'arte ha guadagnato riconoscimento mondiale attraverso i primi tornei UFC, dove Royce Gracie ha dimostrato l\'efficacia del BJJ contro avversari più grandi provenienti da diversi background di arti marziali. Questa esposizione ha portato il BJJ a diventare una componente fondamentale delle moderne arti marziali miste.'
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
                description: 'Campione UFC che mostrò il BJJ al mondo'
              }
            ]
          }
        },
        schedule: {
          title: 'Orario Allenamento BJJ',
          subtitle: 'Corsi regolari disponibili in entrambe le sedi durante tutta la settimana'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Unisciti al nostro programma di Brazilian Jiu-Jitsu e scopri l\'arte gentile che ha trasformato le arti marziali per sempre.',
          joinButton: 'Unisciti ai Corsi BJJ',
          backButton: 'Torna ai Corsi'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina striking, wrestling e ground fighting'
        },
        overview: {
          title: 'Il Combattente Completo',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono lo sport da combattimento più completo, combinando tecniche di boxe, kickboxing, wrestling e Brazilian Jiu-Jitsu. Rappresenta l\'evoluzione delle arti marziali, dove i combattenti devono essere competenti in tutti i range di combattimento.',
            'Il nostro programma MMA alla Sport Academy fornisce allenamento completo che sviluppa combattenti ben equilibrati capaci di competere a qualsiasi livello. Ci concentriamo sulla costruzione di una base solida in ogni disciplina mentre insegniamo agli studenti come passare senza soluzione di continuità tra striking e grappling.',
            'Che il tuo obiettivo sia la competizione professionale, tornei amatoriali o semplicemente diventare il miglior artista marziale che puoi essere, il nostro programma MMA ti sfiderà e trasformerà sia fisicamente che mentalmente.'
          ]
        },
        techniques: {
          title: 'Tecniche MMA',
          subtitle: 'Padroneggia tutti gli aspetti del combattimento nelle arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Fondamentali di boxe',
              'Kickboxing e Muay Thai',
              'Colpi di gomito e ginocchio',
              'Gioco di gambe e movimento della testa'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche di takedown',
              'Difesa da takedown',
              'Wrestling in gabbia',
              'Controllo a terra'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Ground and pound',
              'Submission grappling',
              'Lavoro di guardia',
              'Fughe e ribaltamenti'
            ]
          }
        },
        history: {
          title: 'Storia delle MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma le MMA moderne iniziarono con l\'Ultimate Fighting Championship (UFC) nel 1993. I primi tornei furono progettati per determinare quale arte marziale fosse più efficace in situazioni di combattimento reale.',
            'Nel corso degli anni, le MMA si sono evolute da uno spettacolo di diversi stili di combattimento a uno sport sofisticato con regole unificate, categorie di peso e atleti altamente allenati che sono abili in multiple discipline.'
          ],
          milestones: {
            title: 'Pietre Miliari Chiave',
            events: [
              {
                year: '1993',
                description: 'Il primo evento UFC mostra diverse arti marziali'
              },
              {
                year: '2001',
                description: 'Stabilite le Regole Unificate delle MMA'
              },
              {
                year: '2016',
                description: 'Le MMA diventano mainstream con riconoscimento globale'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento MMA',
          subtitle: 'Trasforma il tuo corpo e la tua mente attraverso le arti marziali miste',
          items: [
            {
              icon: '💪',
              title: 'Fitness Totale del Corpo',
              description: 'Condizionamento fisico completo'
            },
            {
              icon: '🧠',
              title: 'Resistenza Mentale',
              description: 'Sviluppa resilienza e fiducia'
            },
            {
              icon: '🥊',
              title: 'Autodifesa',
              description: 'Abilità di protezione nel mondo reale'
            },
            {
              icon: '⚡',
              title: 'Potenza Esplosiva',
              description: 'Costruisci forza e velocità'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento MMA',
          subtitle: 'Sessioni di allenamento ad alta intensità per tutti i livelli di abilità'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Impara dalle tecniche dei più grandi combattenti',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'Il Ragno',
              description: 'Striker leggendario con precisione incredibile'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'L\'Ultimo Imperatore',
              description: 'Peso massimo dominante con background sambo'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Striker creativo con portata eccezionale'
            }
          ]
        },
        cta: {
          title: 'Diventa un Combattente Completo',
          description: 'Unisciti al nostro programma MMA e sviluppa abilità in tutti gli aspetti degli sport da combattimento.',
          joinButton: 'Unisciti all\'Allenamento MMA',
          backButton: 'Torna ai Corsi'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Padroneggia l\'arte del wrestling, takedown e submission grappling'
        },
        overview: {
          title: 'L\'Arte del Controllo',
          paragraphs: [
            'Il Grappling comprende tutte le forme di wrestling, submission grappling e tecniche di controllo a terra. È la base del ground fighting efficace e una componente essenziale sia dell\'autodifesa che delle arti marziali miste.',
            'Il nostro programma di grappling si concentra sullo sviluppo di abilità superiori di takedown, controllo posizionale e tecniche di submission. Gli studenti imparano a dominare gli avversari attraverso leva, tempismo e precisione tecnica piuttosto che affidarsi esclusivamente alla forza.',
            'Che tu ti stia preparando per la competizione MMA, migliorando il tuo gioco BJJ o semplicemente volendo diventare un grappler più completo, il nostro programma fornisce gli strumenti e le tecniche di cui hai bisogno per avere successo.'
          ]
        },
        techniques: {
          title: 'Tecniche di Grappling',
          subtitle: 'Sviluppa un arsenale completo di abilità di wrestling e submission',
          takedowns: {
            title: 'Takedown',
            items: [
              'Takedown single e double leg',
              'Lanci d\'anca e proiezioni',
              'Spazzate di piede e sgambetti',
              'Takedown in gabbia'
            ]
          },
          control: {
            title: 'Controllo',
            items: [
              'Controllo posizione superiore',
              'Combinazioni di immobilizzazione',
              'Tecniche di ride e controllo',
              'Pressione e distribuzione del peso'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Tecniche di submission no-gi',
              'Submission basate sul wrestling',
              'Leve alle gambe e heel hook',
              'Submission di transizione'
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
                title: 'Rolling Live',
                description: 'Sessioni di grappling a piena intensità'
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
                description: 'Costruzione di potenza specifica per il grappling'
              },
              {
                title: 'Flessibilità',
                description: 'Mobilità e prevenzione infortuni'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici del Grappling',
          subtitle: 'Perché l\'allenamento di grappling trasforma gli atleti',
          items: [
            {
              icon: '🤼',
              title: 'Abilità di Wrestling',
              description: 'Capacità superiori di takedown e controllo'
            },
            {
              icon: '💪',
              title: 'Forza Funzionale',
              description: 'Potenza applicabile nel mondo reale'
            },
            {
              icon: '🧘',
              title: 'Scacchi Mentali',
              description: 'Pensiero strategico e risoluzione problemi'
            },
            {
              icon: '⚡',
              title: 'Potenza Esplosiva',
              description: 'Movimento dinamico e atletismo'
            }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Sessioni di allenamento intensive focalizzate su wrestling e submission'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Studia le tecniche dei maestri di wrestling e grappling',
          grapplers: [
            {
              name: 'Dan Gable',
              title: 'Leggenda del Wrestling',
              description: 'Campione olimpico e icona del coaching'
            },
            {
              name: 'Gordon Ryan',
              title: 'Re del No-Gi',
              description: 'Grappler di submission dominante'
            },
            {
              name: 'John Danaher',
              title: 'Il Professore',
              description: 'Coach rivoluzionario di grappling'
            }
          ]
        },
        cta: {
          title: 'Padroneggia il Ground Game',
          description: 'Sviluppa abilità superiori di grappling che eleveranno tutto il tuo gioco di arti marziali.',
          joinButton: 'Unisciti ai Corsi di Grappling',
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
      joinSportAcademy: 'Unisciti a Sport Academy',
      registerOnline: 'Registrati Online',
      bookClasses: 'Prenota Corsi',
      visitUs: 'Visitaci',
      dropInWelcome: 'Drop-in Benvenuti',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM',
      instantConfirmation: 'Conferma istantanea',
      duringTrainingHours: 'Durante gli orari di allenamento'
    }
  }
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

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
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}