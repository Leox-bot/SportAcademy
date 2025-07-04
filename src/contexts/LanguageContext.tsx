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
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Elite training in Mixed Martial Arts, Brazilian Jiu-Jitsu, and Grappling. Located in Campo Tures and Brunico, we offer world-class instruction for all skill levels.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Training champions since 2017',
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
        description: 'Complete MMA training combining striking, wrestling, and ground fighting. Learn techniques from boxing, kickboxing, wrestling, and Brazilian Jiu-Jitsu.',
        features: [
          'Stand-up striking techniques',
          'Wrestling and takedowns',
          'Ground fighting and submissions',
          'Cage work and clinch fighting',
          'Conditioning and fitness'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'The gentle art focusing on leverage, technique, and timing. Learn to control and submit opponents using minimal force.',
        features: [
          'Guard work and sweeps',
          'Submission techniques',
          'Positional control',
          'Self-defense applications',
          'Competition preparation'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'No-gi grappling combining wrestling, submission grappling, and ground control techniques.',
        features: [
          'Takedown techniques',
          'Ground control positions',
          'Submission holds',
          'Scrambling and transitions',
          'Competition training'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Brazilian Jiu-Jitsu classes specifically designed for children, focusing on discipline, respect, and fundamental techniques.',
        features: [
          'Age-appropriate techniques',
          'Character development',
          'Physical fitness',
          'Self-confidence building',
          'Anti-bullying skills'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Youth grappling program teaching wrestling and submission grappling in a safe, fun environment.',
        features: [
          'Basic wrestling techniques',
          'Ground control',
          'Safe submission holds',
          'Teamwork and sportsmanship',
          'Physical conditioning'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling focusing on takedowns, control, and ground positioning.',
        features: [
          'Single and double leg takedowns',
          'Hip tosses and throws',
          'Ground control techniques',
          'Conditioning and strength',
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
        description: 'Meet our experienced instructors who bring years of competition and teaching experience to every class.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'Matteo is the founder and head coach of Sport Academy with over 15 years of martial arts experience. He holds black belts in Brazilian Jiu-Jitsu and has competed at the highest levels internationally.',
        specializations: [
          'Brazilian Jiu-Jitsu Black Belt',
          'MMA Competition Experience',
          'Wrestling Techniques',
          'Competition Preparation'
        ],
        achievements: [
          'IBJJF World Championship Competitor',
          'Multiple European Championship Medals',
          'Over 10 years teaching experience',
          'Certified BJJ Black Belt Instructor'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings extensive experience in both Brazilian Jiu-Jitsu and Mixed Martial Arts. His technical approach and attention to detail make him an exceptional instructor for students of all levels.',
        specializations: [
          'Brazilian Jiu-Jitsu Brown Belt',
          'MMA Striking Techniques',
          'Grappling Fundamentals',
          'Youth Training Programs'
        ],
        achievements: [
          'Regional BJJ Championship Winner',
          'Professional MMA Competition Experience',
          'Certified Youth Martial Arts Instructor',
          'Over 8 years teaching experience'
        ]
      },
      background: 'Background',
      specializations: 'Specializations',
      achievements: 'Achievements',
      philosophy: {
        title: 'Our Coaching Philosophy',
        technical: {
          title: 'Technical Excellence',
          description: 'We focus on proper technique and fundamentals, ensuring every student builds a strong foundation.'
        },
        individual: {
          title: 'Individual Attention',
          description: 'Each student receives personalized instruction tailored to their goals and skill level.'
        },
        respect: {
          title: 'Respect & Discipline',
          description: 'We emphasize respect, discipline, and sportsmanship both on and off the mats.'
        }
      },
      cta: {
        title: 'Train with the Best',
        description: 'Learn from experienced coaches who are dedicated to your success and development.'
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
        arrive: 'Arrive 10 minutes early for warm-up',
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
        title: 'Ready to Join?',
        description: 'Start your martial arts journey with us today.'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the membership plan that fits your training goals and schedule. All plans include access to our complete training programs.'
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
        title: 'Brazilian Jiu-Jitsu Only',
        subtitle: 'Dedicated BJJ training program',
        program: 'BJJ Focused Program',
        description: 'Exclusive access to Brazilian Jiu-Jitsu classes and open mat sessions'
      },
      adults: 'Adults',
      students: 'Students',
      month: 'month',
      selectMainSeason: 'Select Main Season',
      selectSummerSeason: 'Select Summer Season',
      selectBjjOnly: 'Select BJJ Only',
      faq: {
        title: 'Frequently Asked Questions',
        seasons: {
          question: 'What\'s the difference between seasons?',
          answer: 'The main season runs from September to June with our full program schedule. Summer season is a shorter period with modified schedules and includes open mat sessions.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to classes at both Campo Tures and Brunico locations.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Yes, we offer trial classes for new students. Contact us to schedule your first session.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For beginners, we provide basic equipment. As you progress, you\'ll need your own gi for BJJ classes and appropriate training gear.'
        }
      },
      cta: {
        title: 'Start Your Journey',
        description: 'Join Sport Academy today and begin your martial arts transformation.'
      }
    },
    contact: {
      hero: {
        title: 'Contact Us',
        description: 'Get in touch with us to start your martial arts journey or learn more about our programs.'
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
      visitRequirements: {
        title: 'Visit Requirements',
        subtitle: 'Everything you need to know for your first visit'
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
        'Basic training equipment for beginners',
        'Clean and safe training environment',
        'Professional instruction',
        'Supportive community atmosphere'
      ],
      specialInstructions: 'Important Information',
      instructions: {
        age: 'Minimum Age: Participants must be at least 16 years old to join adult classes',
        health: 'Health Requirements: Please inform us of any medical conditions or injuries',
        equipment: 'Equipment: Basic training gear is provided for first-time visitors',
        payment: 'Payment: We accept cash and card payments only'
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Take the first step towards your martial arts journey with Sport Academy.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'The gentle art that teaches leverage, technique, and mental strategy over brute force'
        },
        overview: {
          title: 'The Art of Brazilian Jiu-Jitsu',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. Developed from traditional Japanese jujitsu and judo, BJJ emphasizes technique, leverage, and timing over strength and size.',
            'Often called "the gentle art," BJJ teaches practitioners to use an opponent\'s force against them, making it an effective form of self-defense for people of all sizes and ages. The art revolves around the concept that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent.',
            'At Sport Academy, our BJJ program covers all aspects of the art, from fundamental positions and movements to advanced techniques and competition strategies.'
          ]
        },
        techniques: {
          title: 'Core BJJ Techniques',
          subtitle: 'Master the fundamental techniques that form the foundation of Brazilian Jiu-Jitsu',
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
              'Chokes (Rear Naked, Triangle)',
              'Leg Locks',
              'Shoulder Locks',
              'Wrist Control'
            ]
          },
          positions: {
            title: 'Positions',
            items: [
              'Mount and Side Control',
              'Back Control',
              'Knee on Belly',
              'Half Guard',
              'Turtle Position'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the traditional Brazilian Jiu-Jitsu ranking system',
          philosophy: {
            title: 'Belt Progression Philosophy',
            description: 'In Brazilian Jiu-Jitsu, belt progression is earned through consistent training, technical knowledge, sparring ability, and demonstration of the art\'s principles. Each belt represents years of dedication and mastery of increasingly complex techniques.'
          }
        },
        history: {
          title: 'History of Brazilian Jiu-Jitsu',
          paragraphs: [
            'Brazilian Jiu-Jitsu was developed in the early 20th century when Japanese judoka Mitsuyo Maeda taught traditional jujitsu and judo to the Gracie family in Brazil. The Gracies, particularly Helio Gracie, adapted these techniques to create a more ground-focused martial art.',
            'The effectiveness of BJJ was proven in early mixed martial arts competitions, particularly when Royce Gracie won the first UFC tournaments using primarily BJJ techniques against larger opponents from different martial arts backgrounds.',
            'Today, BJJ is practiced worldwide and is considered an essential component of mixed martial arts training, while also thriving as a sport and self-defense system in its own right.'
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
                description: 'Founder of Gracie Jiu-Jitsu and BJJ pioneer'
              },
              {
                name: 'Royce Gracie',
                description: 'Proved BJJ effectiveness in early UFC competitions'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ Training Schedule',
          subtitle: 'Join our Brazilian Jiu-Jitsu classes at both locations'
        },
        cta: {
          title: 'Start Your BJJ Journey',
          description: 'Experience the gentle art that has revolutionized martial arts and self-defense.',
          joinButton: 'Join BJJ Classes'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'No-gi grappling combining wrestling, submission holds, and ground control techniques'
        },
        overview: {
          title: 'The Art of Grappling',
          paragraphs: [
            'Grappling is a form of combat sport that involves wrestling, ground fighting, and submission techniques without the traditional gi uniform. This no-gi approach emphasizes speed, athleticism, and adaptability.',
            'Drawing from wrestling, Brazilian Jiu-Jitsu, judo, and sambo, grappling focuses on takedowns, ground control, and submissions. The absence of gi grips creates a faster-paced, more dynamic style of fighting.',
            'Our grappling program at Sport Academy teaches both offensive and defensive techniques, preparing students for competition and real-world self-defense situations.'
          ]
        },
        techniques: {
          title: 'Essential Grappling Techniques',
          subtitle: 'Master the core techniques of no-gi grappling and submission wrestling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single Leg Takedown',
              'Double Leg Takedown',
              'Hip Toss',
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
              'Knee on Belly'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Rear Naked Choke',
              'Guillotine Choke',
              'Arm Triangle',
              'Kimura Lock',
              'Ankle Lock'
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
                title: 'Drilling',
                description: 'Repetitive practice of techniques to build muscle memory'
              },
              {
                title: 'Positional Sparring',
                description: 'Practice specific positions and transitions'
              },
              {
                title: 'Flow Rolling',
                description: 'Light sparring focusing on technique over intensity'
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
                description: 'Mobility work for injury prevention and performance'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of Grappling',
          subtitle: 'Physical and mental benefits of no-gi grappling training',
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
              title: 'Cardiovascular Fitness',
              description: 'Intense workout that improves heart health'
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
          subtitle: 'Join our no-gi grappling classes for dynamic training sessions'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Learn from the techniques developed by grappling masters',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Catch Wrestling Expert',
              description: 'Former UFC Heavyweight Champion and catch wrestling specialist'
            },
            {
              name: 'Eddie Bravo',
              title: '10th Planet Founder',
              description: 'Pioneer of no-gi jiu-jitsu and rubber guard system'
            },
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominant no-gi grappler and submission specialist'
            }
          ]
        },
        cta: {
          title: 'Master No-Gi Grappling',
          description: 'Develop your grappling skills in our dynamic no-gi training environment.',
          joinButton: 'Join Grappling Classes'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining striking, wrestling, and ground fighting techniques'
        },
        overview: {
          title: 'The Complete Fighting System',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most complete form of combat sports, combining techniques from boxing, kickboxing, wrestling, Brazilian Jiu-Jitsu, and other martial arts disciplines. MMA tests a fighter\'s skills in all ranges of combat.',
            'Often called "the fastest growing sport in the world," MMA has evolved from early no-holds-barred competitions to a highly regulated sport with unified rules and weight classes. Modern MMA requires athletes to be well-rounded in all aspects of fighting.',
            'Our MMA program at Sport Academy provides comprehensive training in all phases of mixed martial arts, from striking fundamentals to advanced ground fighting techniques.'
          ]
        },
        techniques: {
          title: 'MMA Fighting Techniques',
          subtitle: 'Master all ranges of combat in mixed martial arts',
          striking: {
            title: 'Striking',
            items: [
              'Boxing Combinations',
              'Kickboxing Techniques',
              'Muay Thai Clinch',
              'Elbow and Knee Strikes',
              'Footwork and Movement'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown Defense',
              'Single/Double Leg Takedowns',
              'Cage Wrestling',
              'Sprawl Techniques',
              'Ground Control'
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
            'Mixed Martial Arts has ancient roots in pankration, a combat sport in ancient Greece that combined wrestling and boxing. Modern MMA began with vale tudo fights in Brazil and early "no holds barred" competitions.',
            'The sport gained worldwide attention with the creation of the Ultimate Fighting Championship (UFC) in 1993, which pitted fighters from different martial arts backgrounds against each other to determine the most effective fighting style.',
            'Over the decades, MMA has evolved into a sophisticated sport with unified rules, weight classes, and athletic commissions overseeing competition safety and integrity.'
          ],
          milestones: {
            title: 'MMA Milestones',
            events: [
              {
                year: '1993',
                description: 'First UFC event held in Denver, Colorado'
              },
              {
                year: '2001',
                description: 'Unified Rules of MMA established'
              },
              {
                year: '2016',
                description: 'MMA legalized in New York, completing US expansion'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of MMA Training',
          subtitle: 'Physical and mental advantages of mixed martial arts training',
          items: [
            {
              icon: '🥊',
              title: 'Complete Fitness',
              description: 'Full-body workout combining cardio and strength'
            },
            {
              icon: '🛡️',
              title: 'Self-Defense',
              description: 'Practical skills for real-world situations'
            },
            {
              icon: '🧠',
              title: 'Mental Discipline',
              description: 'Develops focus, confidence, and mental toughness'
            },
            {
              icon: '⚡',
              title: 'Athletic Performance',
              description: 'Improves coordination, reflexes, and agility'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Comprehensive mixed martial arts training sessions'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Learn from techniques developed by MMA pioneers',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC Pioneer',
              description: 'Proved effectiveness of Brazilian Jiu-Jitsu in early UFC'
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
          title: 'Enter the Octagon',
          description: 'Train like a professional fighter and master all aspects of mixed martial arts.',
          joinButton: 'Join MMA Classes'
        }
      }
    },
    common: {
      learnMore: 'Learn More',
      joinNow: 'Join Now',
      viewClasses: 'View Classes',
      viewSchedule: 'View Schedule',
      viewMembership: 'View Membership',
      contactUs: 'Contact Us',
      callNow: 'Call Now',
      joinSportAcademy: 'Join Sport Academy',
      allLevels: 'All Levels',
      ages: 'Ages',
      registerOnline: 'Register Online',
      bookClasses: 'Book Classes',
      instantConfirmation: 'Instant Confirmation',
      visitUs: 'Visit Us',
      dropInWelcome: 'Drop-ins Welcome',
      duringTrainingHours: 'During Training Hours',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates and DMs'
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
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Willkommen bei der Sport Academy',
        description: 'Elite-Training in Mixed Martial Arts, Brazilian Jiu-Jitsu und Grappling. Mit Standorten in Campo Tures und Bruneck bieten wir erstklassigen Unterricht für alle Leistungsstufen.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Wir bilden Champions seit 2017 aus',
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
        description: 'Komplettes Mixed Martial Arts Training mit Schlag-, Grappling- und Bodenkampftechniken.'
      },
      bjj: {
        description: 'Brazilian Jiu-Jitsu mit Fokus auf Bodenkampf, Aufgabegriffe und hebelbasierte Techniken.'
      },
      grappling: {
        description: 'No-Gi Grappling mit Schwerpunkt auf Takedowns, Kontrollpositionen und Aufgabegriffen.'
      },
      getStarted: {
        title: 'Starte noch heute',
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
        description: 'Komplettes MMA-Training mit Schlag-, Wrestling- und Bodenkampftechniken. Lerne Techniken aus Boxen, Kickboxen, Wrestling und Brazilian Jiu-Jitsu.',
        features: [
          'Stand-up Schlagtechniken',
          'Wrestling und Takedowns',
          'Bodenkampf und Aufgabegriffe',
          'Käfigarbeit und Clinch-Kampf',
          'Kondition und Fitness'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Die sanfte Kunst mit Fokus auf Hebel, Technik und Timing. Lerne, Gegner mit minimaler Kraft zu kontrollieren und zur Aufgabe zu zwingen.',
        features: [
          'Guard-Arbeit und Sweeps',
          'Aufgabetechniken',
          'Positionskontrolle',
          'Selbstverteidigungsanwendungen',
          'Wettkampfvorbereitung'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'No-Gi Grappling kombiniert Wrestling, Submission Grappling und Bodenkontrolltechniken.',
        features: [
          'Takedown-Techniken',
          'Bodenkontrollpositionen',
          'Aufgabegriffe',
          'Scrambling und Übergänge',
          'Wettkampftraining'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Brazilian Jiu-Jitsu Kurse speziell für Kinder, mit Fokus auf Disziplin, Respekt und grundlegende Techniken.',
        features: [
          'Altersgerechte Techniken',
          'Charakterentwicklung',
          'Körperliche Fitness',
          'Selbstvertrauen aufbauen',
          'Anti-Mobbing-Fähigkeiten'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Jugend-Grappling-Programm, das Wrestling und Submission Grappling in einer sicheren, spaßigen Umgebung lehrt.',
        features: [
          'Grundlegende Wrestling-Techniken',
          'Bodenkontrolle',
          'Sichere Aufgabegriffe',
          'Teamwork und Sportlichkeit',
          'Körperliche Konditionierung'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelles Wrestling mit Fokus auf Takedowns, Kontrolle und Bodenpositionierung.',
        features: [
          'Einzel- und Doppelbein-Takedowns',
          'Hüftwürfe und Würfe',
          'Bodenkontrolltechniken',
          'Kondition und Kraft',
          'Wettkampfvorbereitung'
        ]
      },
      whatYouLearn: 'Was du lernst',
      cta: {
        title: 'Bereit zum Training?',
        description: 'Tritt unserer Gemeinschaft engagierter Kampfsportler bei und beginne noch heute deine Reise.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne unsere erfahrenen Instruktoren kennen, die jahrelange Wettkampf- und Lehrerfahrung in jeden Kurs einbringen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Matteo ist der Gründer und Cheftrainer der Sport Academy mit über 15 Jahren Kampfsporterfahrung. Er besitzt schwarze Gürtel im Brazilian Jiu-Jitsu und hat auf höchstem internationalen Niveau gekämpft.',
        specializations: [
          'Brazilian Jiu-Jitsu Schwarzgurt',
          'MMA Wettkampferfahrung',
          'Wrestling-Techniken',
          'Wettkampfvorbereitung'
        ],
        achievements: [
          'IBJJF Weltmeisterschafts-Teilnehmer',
          'Mehrere Europameisterschafts-Medaillen',
          'Über 10 Jahre Lehrerfahrung',
          'Zertifizierter BJJ Schwarzgurt-Instruktor'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt umfangreiche Erfahrung sowohl im Brazilian Jiu-Jitsu als auch in Mixed Martial Arts mit. Sein technischer Ansatz und seine Aufmerksamkeit für Details machen ihn zu einem außergewöhnlichen Instruktor für Schüler aller Stufen.',
        specializations: [
          'Brazilian Jiu-Jitsu Braungurt',
          'MMA Schlagtechniken',
          'Grappling-Grundlagen',
          'Jugend-Trainingsprogramme'
        ],
        achievements: [
          'Regionaler BJJ Meisterschaftsgewinner',
          'Professionelle MMA Wettkampferfahrung',
          'Zertifizierter Jugend-Kampfsport-Instruktor',
          'Über 8 Jahre Lehrerfahrung'
        ]
      },
      background: 'Hintergrund',
      specializations: 'Spezialisierungen',
      achievements: 'Erfolge',
      philosophy: {
        title: 'Unsere Trainingsphilosophie',
        technical: {
          title: 'Technische Exzellenz',
          description: 'Wir konzentrieren uns auf richtige Technik und Grundlagen, um sicherzustellen, dass jeder Schüler eine starke Basis aufbaut.'
        },
        individual: {
          title: 'Individuelle Betreuung',
          description: 'Jeder Schüler erhält personalisierten Unterricht, der auf seine Ziele und sein Leistungsniveau zugeschnitten ist.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir betonen Respekt, Disziplin und Sportlichkeit sowohl auf als auch neben den Matten.'
        }
      },
      cta: {
        title: 'Trainiere mit den Besten',
        description: 'Lerne von erfahrenen Trainern, die sich deinem Erfolg und deiner Entwicklung widmen.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finde die perfekten Trainingszeiten, die zu deinem Zeitplan passen. Wir bieten Kurse während der ganzen Woche an beiden Standorten an.'
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
        arrive: 'Komme 10 Minuten früher zum Aufwärmen',
        water: 'Bringe Wasserflasche und Handtuch mit',
        gi: 'BJJ-Kurse erfordern Gi (Uniform)',
        noGi: 'Grappling-Kurse sind No-Gi (Shorts & Rashguard)'
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
        description: 'Beginne noch heute deine Kampfsport-Reise mit uns.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle den Mitgliedschaftsplan, der zu deinen Trainingszielen und deinem Zeitplan passt. Alle Pläne beinhalten Zugang zu unseren kompletten Trainingsprogrammen.'
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
        title: 'Nur Brazilian Jiu-Jitsu',
        subtitle: 'Spezielles BJJ-Trainingsprogramm',
        program: 'BJJ-fokussiertes Programm',
        description: 'Exklusiver Zugang zu Brazilian Jiu-Jitsu Kursen und freien Trainingseinheiten'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      selectMainSeason: 'Hauptsaison wählen',
      selectSummerSeason: 'Sommersaison wählen',
      selectBjjOnly: 'Nur BJJ wählen',
      faq: {
        title: 'Häufig gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Die Hauptsaison läuft von September bis Juni mit unserem vollständigen Programmplan. Die Sommersaison ist eine kürzere Periode mit angepassten Zeitplänen und beinhaltet freie Trainingseinheiten.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu Kursen an beiden Standorten Campo Tures und Bruneck.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Ja, wir bieten Probestunden für neue Schüler an. Kontaktiere uns, um deine erste Stunde zu planen.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Anfänger stellen wir grundlegende Ausrüstung zur Verfügung. Mit fortschreitendem Training benötigst du deinen eigenen Gi für BJJ-Kurse und entsprechende Trainingsausrüstung.'
        }
      },
      cta: {
        title: 'Beginne deine Reise',
        description: 'Tritt noch heute der Sport Academy bei und beginne deine Kampfsport-Transformation.'
      }
    },
    contact: {
      hero: {
        title: 'Kontaktiere uns',
        description: 'Nimm Kontakt mit uns auf, um deine Kampfsport-Reise zu beginnen oder mehr über unsere Programme zu erfahren.'
      },
      getInTouch: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Verschiedene Wege, um mit der Sport Academy in Kontakt zu treten'
      },
      callUs: 'Rufe uns an',
      instagram: 'Instagram',
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Standorte in Südtirol'
      },
      visitRequirements: {
        title: 'Besuchsanforderungen',
        subtitle: 'Alles was du für deinen ersten Besuch wissen musst'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was mitbringen',
      bring: [
        'Bequeme Sportkleidung',
        'Wasserflasche',
        'Handtuch',
        'Positive Einstellung und Lernbereitschaft'
      ],
      whatWeProvide: 'Was wir bereitstellen',
      provide: [
        'Grundlegende Trainingsausrüstung für Anfänger',
        'Saubere und sichere Trainingsumgebung',
        'Professioneller Unterricht',
        'Unterstützende Gemeinschaftsatmosphäre'
      ],
      specialInstructions: 'Wichtige Informationen',
      instructions: {
        age: 'Mindestalter: Teilnehmer müssen mindestens 16 Jahre alt sein, um an Erwachsenenkursen teilzunehmen',
        health: 'Gesundheitsanforderungen: Bitte informiere uns über medizinische Beschwerden oder Verletzungen',
        equipment: 'Ausrüstung: Grundlegende Trainingsausrüstung wird für Erstbesucher bereitgestellt',
        payment: 'Zahlung: Wir akzeptieren nur Bar- und Kartenzahlungen'
      },
      cta: {
        title: 'Bereit anzufangen?',
        description: 'Mache den ersten Schritt zu deiner Kampfsport-Reise mit der Sport Academy.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Die sanfte Kunst, die Hebel, Technik und mentale Strategie über rohe Kraft lehrt'
        },
        overview: {
          title: 'Die Kunst des Brazilian Jiu-Jitsu',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Aufgabegriffe konzentriert. Entwickelt aus traditionellem japanischen Jujitsu und Judo, betont BJJ Technik, Hebel und Timing über Kraft und Größe.',
            'Oft als "die sanfte Kunst" bezeichnet, lehrt BJJ Praktiker, die Kraft eines Gegners gegen ihn zu verwenden, was es zu einer effektiven Form der Selbstverteidigung für Menschen aller Größen und Altersgruppen macht. Die Kunst dreht sich um das Konzept, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner verteidigen kann.',
            'Bei der Sport Academy deckt unser BJJ-Programm alle Aspekte der Kunst ab, von grundlegenden Positionen und Bewegungen bis hin zu fortgeschrittenen Techniken und Wettkampfstrategien.'
          ]
        },
        techniques: {
          title: 'Kern-BJJ-Techniken',
          subtitle: 'Meistere die grundlegenden Techniken, die das Fundament des Brazilian Jiu-Jitsu bilden',
          guardWork: {
            title: 'Guard-Arbeit',
            items: [
              'Geschlossene Guard-Kontrolle',
              'Offene Guard-Variationen',
              'Guard-Sweeps',
              'Guard-Retention',
              'Aufgaben aus der Guard'
            ]
          },
          submissions: {
            title: 'Aufgaben',
            items: [
              'Armhebel (Armbar, Kimura)',
              'Würgegriffe (Rear Naked, Triangle)',
              'Beinhebel',
              'Schulterhebel',
              'Handgelenkskontrolle'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Seitenkontrolle',
              'Rückenkontrolle',
              'Knie auf Bauch',
              'Half Guard',
              'Turtle-Position'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ-Gurtsystem',
          subtitle: 'Fortschritt durch das traditionelle Brazilian Jiu-Jitsu Rangsystem',
          philosophy: {
            title: 'Gurt-Fortschritts-Philosophie',
            description: 'Im Brazilian Jiu-Jitsu wird der Gurt-Fortschritt durch konsequentes Training, technisches Wissen, Sparring-Fähigkeiten und Demonstration der Kunstprinzipien verdient. Jeder Gurt repräsentiert Jahre der Hingabe und Beherrschung zunehmend komplexer Techniken.'
          }
        },
        history: {
          title: 'Geschichte des Brazilian Jiu-Jitsu',
          paragraphs: [
            'Brazilian Jiu-Jitsu wurde im frühen 20. Jahrhundert entwickelt, als der japanische Judoka Mitsuyo Maeda traditionelles Jujitsu und Judo der Gracie-Familie in Brasilien lehrte. Die Gracies, insbesondere Helio Gracie, passten diese Techniken an, um eine bodenfokussiertere Kampfkunst zu schaffen.',
            'Die Wirksamkeit von BJJ wurde in frühen Mixed Martial Arts Wettkämpfen bewiesen, insbesondere als Royce Gracie die ersten UFC-Turniere hauptsächlich mit BJJ-Techniken gegen größere Gegner aus verschiedenen Kampfkunst-Hintergründen gewann.',
            'Heute wird BJJ weltweit praktiziert und gilt als wesentlicher Bestandteil des Mixed Martial Arts Trainings, während es auch als Sport und Selbstverteidigungssystem für sich allein gedeiht.'
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
                description: 'Gründer des Gracie Jiu-Jitsu und BJJ-Pionier'
              },
              {
                name: 'Royce Gracie',
                description: 'Bewies BJJ-Wirksamkeit in frühen UFC-Wettkämpfen'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ-Trainingsplan',
          subtitle: 'Tritt unseren Brazilian Jiu-Jitsu Kursen an beiden Standorten bei'
        },
        cta: {
          title: 'Beginne deine BJJ-Reise',
          description: 'Erlebe die sanfte Kunst, die Kampfkünste und Selbstverteidigung revolutioniert hat.',
          joinButton: 'BJJ-Kursen beitreten'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'No-Gi Grappling kombiniert Wrestling, Aufgabegriffe und Bodenkontrolltechniken'
        },
        overview: {
          title: 'Die Kunst des Grappling',
          paragraphs: [
            'Grappling ist eine Form des Kampfsports, die Wrestling, Bodenkampf und Aufgabetechniken ohne die traditionelle Gi-Uniform beinhaltet. Dieser No-Gi-Ansatz betont Geschwindigkeit, Athletik und Anpassungsfähigkeit.',
            'Aus Wrestling, Brazilian Jiu-Jitsu, Judo und Sambo schöpfend, konzentriert sich Grappling auf Takedowns, Bodenkontrolle und Aufgaben. Das Fehlen von Gi-Griffen schafft einen schnelleren, dynamischeren Kampfstil.',
            'Unser Grappling-Programm bei der Sport Academy lehrt sowohl offensive als auch defensive Techniken und bereitet Schüler auf Wettkämpfe und reale Selbstverteidigungssituationen vor.'
          ]
        },
        techniques: {
          title: 'Wesentliche Grappling-Techniken',
          subtitle: 'Meistere die Kerntechniken des No-Gi Grappling und Submission Wrestling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Einzelbein-Takedown',
              'Doppelbein-Takedown',
              'Hüftwurf',
              'Fußfeger',
              'Sprawl-Verteidigung'
            ]
          },
          control: {
            title: 'Kontrollpositionen',
            items: [
              'Seitenkontrolle',
              'Mount-Position',
              'Rückenkontrolle',
              'Nord-Süd',
              'Knie auf Bauch'
            ]
          },
          submissions: {
            title: 'Aufgaben',
            items: [
              'Rear Naked Choke',
              'Guillotine Choke',
              'Arm Triangle',
              'Kimura Lock',
              'Ankle Lock'
            ]
          }
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Unser systematischer Ansatz zum Grappling-Unterricht',
          technical: {
            title: 'Technische Entwicklung',
            methods: [
              {
                title: 'Drilling',
                description: 'Wiederholende Praxis von Techniken zum Aufbau von Muskelgedächtnis'
              },
              {
                title: 'Positions-Sparring',
                description: 'Übe spezifische Positionen und Übergänge'
              },
              {
                title: 'Flow Rolling',
                description: 'Leichtes Sparring mit Fokus auf Technik über Intensität'
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
                description: 'Mobilitätsarbeit zur Verletzungsprävention und Leistung'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grappling',
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
              title: 'Herz-Kreislauf-Fitness',
              description: 'Intensives Training, das die Herzgesundheit verbessert'
            },
            {
              icon: '🎯',
              title: 'Selbstverteidigung',
              description: 'Praktische Fähigkeiten für reale Situationen'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Trainingsplan',
          subtitle: 'Tritt unseren No-Gi Grappling-Kursen für dynamische Trainingseinheiten bei'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Lerne von den Techniken, die von Grappling-Meistern entwickelt wurden',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Catch Wrestling Experte',
              description: 'Ehemaliger UFC Schwergewichts-Champion und Catch Wrestling Spezialist'
            },
            {
              name: 'Eddie Bravo',
              title: '10th Planet Gründer',
              description: 'Pionier des No-Gi Jiu-Jitsu und Rubber Guard Systems'
            },
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominanter No-Gi Grappler und Submission-Spezialist'
            }
          ]
        },
        cta: {
          title: 'Meistere No-Gi Grappling',
          description: 'Entwickle deine Grappling-Fähigkeiten in unserer dynamischen No-Gi Trainingsumgebung.',
          joinButton: 'Grappling-Kursen beitreten'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der Schlag-, Wrestling- und Bodenkampftechniken kombiniert'
        },
        overview: {
          title: 'Das komplette Kampfsystem',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist die vollständigste Form der Kampfsportarten und kombiniert Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkunstdisziplinen. MMA testet die Fähigkeiten eines Kämpfers in allen Kampfbereichen.',
            'Oft als "der am schnellsten wachsende Sport der Welt" bezeichnet, hat sich MMA von frühen No-Holds-Barred-Wettkämpfen zu einem hoch regulierten Sport mit einheitlichen Regeln und Gewichtsklassen entwickelt. Modernes MMA erfordert von Athleten, in allen Aspekten des Kampfes vielseitig zu sein.',
            'Unser MMA-Programm bei der Sport Academy bietet umfassendes Training in allen Phasen der Mixed Martial Arts, von Schlag-Grundlagen bis hin zu fortgeschrittenen Bodenkampftechniken.'
          ]
        },
        techniques: {
          title: 'MMA-Kampftechniken',
          subtitle: 'Meistere alle Kampfbereiche in Mixed Martial Arts',
          striking: {
            title: 'Schlagen',
            items: [
              'Box-Kombinationen',
              'Kickbox-Techniken',
              'Muay Thai Clinch',
              'Ellbogen- und Knieschläge',
              'Beinarbeit und Bewegung'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Verteidigung',
              'Einzel-/Doppelbein-Takedowns',
              'Käfig-Wrestling',
              'Sprawl-Techniken',
              'Bodenkontrolle'
            ]
          },
          groundGame: {
            title: 'Bodenspiel',
            items: [
              'Ground and Pound',
              'Aufgabe-Verteidigung',
              'Guard Passing',
              'Übergänge',
              'Flucht-Techniken'
            ]
          }
        },
        history: {
          title: 'Geschichte des MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln im Pankration, einem Kampfsport im antiken Griechenland, der Wrestling und Boxen kombinierte. Modernes MMA begann mit Vale Tudo-Kämpfen in Brasilien und frühen "No Holds Barred"-Wettkämpfen.',
            'Der Sport erlangte weltweite Aufmerksamkeit mit der Gründung der Ultimate Fighting Championship (UFC) im Jahr 1993, die Kämpfer aus verschiedenen Kampfkunst-Hintergründen gegeneinander antreten ließ, um den effektivsten Kampfstil zu bestimmen.',
            'Über die Jahrzehnte hat sich MMA zu einem ausgeklügelten Sport mit einheitlichen Regeln, Gewichtsklassen und Sportkommissionen entwickelt, die die Wettkampfsicherheit und -integrität überwachen.'
          ],
          milestones: {
            title: 'MMA-Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erste UFC-Veranstaltung in Denver, Colorado'
              },
              {
                year: '2001',
                description: 'Einheitliche MMA-Regeln etabliert'
              },
              {
                year: '2016',
                description: 'MMA in New York legalisiert, US-Expansion abgeschlossen'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des MMA-Trainings',
          subtitle: 'Körperliche und mentale Vorteile des Mixed Martial Arts Trainings',
          items: [
            {
              icon: '🥊',
              title: 'Komplette Fitness',
              description: 'Ganzkörper-Training kombiniert Cardio und Kraft'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Praktische Fähigkeiten für reale Situationen'
            },
            {
              icon: '🧠',
              title: 'Mentale Disziplin',
              description: 'Entwickelt Fokus, Selbstvertrauen und mentale Stärke'
            },
            {
              icon: '⚡',
              title: 'Athletische Leistung',
              description: 'Verbessert Koordination, Reflexe und Beweglichkeit'
            }
          ]
        },
        schedule: {
          title: 'MMA-Trainingsplan',
          subtitle: 'Umfassende Mixed Martial Arts Trainingseinheiten'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Lerne von Techniken, die von MMA-Pionieren entwickelt wurden',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC-Pionier',
              description: 'Bewies die Wirksamkeit des Brazilian Jiu-Jitsu in der frühen UFC'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Längster regierender UFC-Mittelgewichts-Champion'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendärer Schwergewichtler mit unglaublichem Bodenspiel'
            }
          ]
        },
        cta: {
          title: 'Betritt das Octagon',
          description: 'Trainiere wie ein professioneller Kämpfer und meistere alle Aspekte der Mixed Martial Arts.',
          joinButton: 'MMA-Kursen beitreten'
        }
      }
    },
    common: {
      learnMore: 'Mehr erfahren',
      joinNow: 'Jetzt beitreten',
      viewClasses: 'Kurse ansehen',
      viewSchedule: 'Stundenplan ansehen',
      viewMembership: 'Mitgliedschaft ansehen',
      contactUs: 'Kontaktiere uns',
      callNow: 'Jetzt anrufen',
      joinSportAcademy: 'Sport Academy beitreten',
      allLevels: 'Alle Stufen',
      ages: 'Alter',
      registerOnline: 'Online registrieren',
      bookClasses: 'Kurse buchen',
      instantConfirmation: 'Sofortige Bestätigung',
      visitUs: 'Besuche uns',
      dropInWelcome: 'Spontanbesuche willkommen',
      duringTrainingHours: 'Während der Trainingszeiten',
      responseWithin2Hours: 'Antwort innerhalb von 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates und DMs'
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Kämpfer schmieden seit 2017',
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
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Benvenuti alla Sport Academy',
        description: 'Allenamento d\'élite in Arti Marziali Miste, Brazilian Jiu-Jitsu e Grappling. Con sedi a Campo Tures e Brunico, offriamo istruzione di livello mondiale per tutti i livelli di abilità.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Formiamo campioni dal 2017',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'MMA, BJJ, Grappling e altro',
        exploreClasses: 'Esplora i nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati come un Combattente',
        subtitle: 'Padroneggia l\'arte degli sport da combattimento con i nostri programmi di allenamento completi'
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
        description: 'Allenamento MMA completo che combina striking, wrestling e combattimento a terra. Impara tecniche da boxe, kickboxing, wrestling e Brazilian Jiu-Jitsu.',
        features: [
          'Tecniche di striking in piedi',
          'Wrestling e takedown',
          'Combattimento a terra e sottomissioni',
          'Lavoro in gabbia e clinch',
          'Condizionamento e fitness'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'L\'arte gentile che si concentra su leva, tecnica e tempismo. Impara a controllare e sottomettere gli avversari usando la forza minima.',
        features: [
          'Lavoro di guardia e spazzate',
          'Tecniche di sottomissione',
          'Controllo posizionale',
          'Applicazioni di autodifesa',
          'Preparazione alle competizioni'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Grappling senza gi che combina wrestling, submission grappling e tecniche di controllo a terra.',
        features: [
          'Tecniche di takedown',
          'Posizioni di controllo a terra',
          'Prese di sottomissione',
          'Scrambling e transizioni',
          'Allenamento per competizioni'
        ]
      },
      kidsBjj: {
        title: 'BJJ per Bambini',
        description: 'Corsi di Brazilian Jiu-Jitsu specificamente progettati per bambini, incentrati su disciplina, rispetto e tecniche fondamentali.',
        features: [
          'Tecniche appropriate per l\'età',
          'Sviluppo del carattere',
          'Fitness fisico',
          'Costruzione dell\'autostima',
          'Abilità anti-bullismo'
        ]
      },
      kidsGrappling: {
        title: 'Grappling per Bambini',
        description: 'Programma di grappling giovanile che insegna wrestling e submission grappling in un ambiente sicuro e divertente.',
        features: [
          'Tecniche di wrestling di base',
          'Controllo a terra',
          'Prese di sottomissione sicure',
          'Lavoro di squadra e sportività',
          'Condizionamento fisico'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Wrestling tradizionale incentrato su takedown, controllo e posizionamento a terra.',
        features: [
          'Takedown a gamba singola e doppia',
          'Lanci d\'anca e proiezioni',
          'Tecniche di controllo a terra',
          'Condizionamento e forza',
          'Preparazione alle competizioni'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Pronto per Iniziare l\'Allenamento?',
        description: 'Unisciti alla nostra comunità di artisti marziali dedicati e inizia il tuo viaggio oggi.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Incontra i nostri istruttori esperti che portano anni di esperienza in competizione e insegnamento in ogni lezione.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore e Fondatore',
        background: 'Matteo è il fondatore e capo istruttore della Sport Academy con oltre 15 anni di esperienza nelle arti marziali. Possiede cinture nere nel Brazilian Jiu-Jitsu e ha gareggiato ai massimi livelli internazionali.',
        specializations: [
          'Cintura Nera Brazilian Jiu-Jitsu',
          'Esperienza in Competizioni MMA',
          'Tecniche di Wrestling',
          'Preparazione alle Competizioni'
        ],
        achievements: [
          'Competitore ai Campionati Mondiali IBJJF',
          'Multiple Medaglie ai Campionati Europei',
          'Oltre 10 anni di esperienza nell\'insegnamento',
          'Istruttore Certificato Cintura Nera BJJ'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta vasta esperienza sia nel Brazilian Jiu-Jitsu che nelle Arti Marziali Miste. Il suo approccio tecnico e l\'attenzione ai dettagli lo rendono un istruttore eccezionale per studenti di tutti i livelli.',
        specializations: [
          'Cintura Marrone Brazilian Jiu-Jitsu',
          'Tecniche di Striking MMA',
          'Fondamentali di Grappling',
          'Programmi di Allenamento Giovanile'
        ],
        achievements: [
          'Vincitore del Campionato Regionale BJJ',
          'Esperienza in Competizioni MMA Professionali',
          'Istruttore Certificato Arti Marziali Giovanili',
          'Oltre 8 anni di esperienza nell\'insegnamento'
        ]
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      philosophy: {
        title: 'La Nostra Filosofia di Insegnamento',
        technical: {
          title: 'Eccellenza Tecnica',
          description: 'Ci concentriamo sulla tecnica corretta e sui fondamentali, assicurando che ogni studente costruisca una base solida.'
        },
        individual: {
          title: 'Attenzione Individuale',
          description: 'Ogni studente riceve istruzione personalizzata adattata ai suoi obiettivi e livello di abilità.'
        },
        respect: {
          title: 'Rispetto e Disciplina',
          description: 'Enfatizziamo rispetto, disciplina e sportività sia dentro che fuori dai tatami.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Impara da istruttori esperti che sono dedicati al tuo successo e sviluppo.'
      }
    },
    schedule: {
      hero: {
        title: 'Orario degli Allenamenti',
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
      openMat: 'Tatami Libero',
      importantInfo: 'Informazioni Importanti',
      classGuidelines: 'Linee Guida dei Corsi',
      guidelines: {
        arrive: 'Arriva 10 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'I corsi BJJ richiedono il gi (uniforme)',
        noGi: 'I corsi di grappling sono no-gi (pantaloncini e rashguard)'
      },
      membershipBenefits: 'Vantaggi dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutti i corsi incluso',
        openMat: 'Sessioni di tatami libero gratuite',
        bothLocations: 'Allenati in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto per Unirti?',
        description: 'Inizia il tuo viaggio nelle arti marziali con noi oggi.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il piano di abbonamento che si adatta ai tuoi obiettivi di allenamento e al tuo programma. Tutti i piani includono l\'accesso ai nostri programmi di allenamento completi.'
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
        title: 'Solo Brazilian Jiu-Jitsu',
        subtitle: 'Programma di allenamento BJJ dedicato',
        program: 'Programma Focalizzato su BJJ',
        description: 'Accesso esclusivo ai corsi di Brazilian Jiu-Jitsu e sessioni di tatami libero'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      selectMainSeason: 'Seleziona Stagione Principale',
      selectSummerSeason: 'Seleziona Stagione Estiva',
      selectBjjOnly: 'Seleziona Solo BJJ',
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra le stagioni?',
          answer: 'La stagione principale va da settembre a giugno con il nostro programma completo. La stagione estiva è un periodo più breve con orari modificati e include sessioni di tatami libero.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso ai corsi in entrambe le sedi di Campo Tures e Brunico.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Sì, offriamo lezioni di prova per nuovi studenti. Contattaci per programmare la tua prima sessione.'
        },
        equipment: {
          question: 'Che attrezzatura mi serve?',
          answer: 'Per i principianti, forniamo attrezzatura di base. Man mano che progredisci, avrai bisogno del tuo gi per i corsi BJJ e attrezzatura da allenamento appropriata.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio',
        description: 'Unisciti alla Sport Academy oggi e inizia la tua trasformazione nelle arti marziali.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Mettiti in contatto con noi per iniziare il tuo viaggio nelle arti marziali o per saperne di più sui nostri programmi.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con la Sport Academy'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      address: 'Indirizzo',
      trainingSchedule: 'Orario degli Allenamenti',
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due sedi convenienti in Alto Adige'
      },
      visitRequirements: {
        title: 'Requisiti per la Visita',
        subtitle: 'Tutto quello che devi sapere per la tua prima visita'
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
        'Attrezzatura di allenamento di base per principianti',
        'Ambiente di allenamento pulito e sicuro',
        'Istruzione professionale',
        'Atmosfera comunitaria di supporto'
      ],
      specialInstructions: 'Informazioni Importanti',
      instructions: {
        age: 'Età Minima: I partecipanti devono avere almeno 16 anni per partecipare ai corsi per adulti',
        health: 'Requisiti di Salute: Ti preghiamo di informarci di eventuali condizioni mediche o infortuni',
        equipment: 'Attrezzatura: L\'attrezzatura di allenamento di base è fornita per i visitatori per la prima volta',
        payment: 'Pagamento: Accettiamo solo pagamenti in contanti e con carta'
      },
      cta: {
        title: 'Pronto per Iniziare?',
        description: 'Fai il primo passo verso il tuo viaggio nelle arti marziali con la Sport Academy.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'L\'arte gentile che insegna leva, tecnica e strategia mentale sulla forza bruta'
        },
        overview: {
          title: 'L\'Arte del Brazilian Jiu-Jitsu',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione. Sviluppato dal jujitsu tradizionale giapponese e dal judo, il BJJ enfatizza tecnica, leva e tempismo sulla forza e dimensione.',
            'Spesso chiamata "l\'arte gentile", il BJJ insegna ai praticanti a usare la forza di un avversario contro di lui, rendendola una forma efficace di autodifesa per persone di tutte le taglie ed età. L\'arte ruota attorno al concetto che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte.',
            'Alla Sport Academy, il nostro programma BJJ copre tutti gli aspetti dell\'arte, dalle posizioni e movimenti fondamentali alle tecniche avanzate e strategie competitive.'
          ]
        },
        techniques: {
          title: 'Tecniche BJJ Fondamentali',
          subtitle: 'Padroneggia le tecniche fondamentali che formano la base del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Controllo Guardia Chiusa',
              'Variazioni Guardia Aperta',
              'Spazzate dalla Guardia',
              'Ritenzione della Guardia',
              'Sottomissioni dalla Guardia'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Leve al Braccio (Armbar, Kimura)',
              'Strangolamenti (Rear Naked, Triangle)',
              'Leve alle Gambe',
              'Leve alle Spalle',
              'Controllo del Polso'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e Controllo Laterale',
              'Controllo della Schiena',
              'Ginocchio sulla Pancia',
              'Half Guard',
              'Posizione Tartaruga'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema di Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di classificazione tradizionale del Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Filosofia della Progressione delle Cinture',
            description: 'Nel Brazilian Jiu-Jitsu, la progressione delle cinture si guadagna attraverso allenamento costante, conoscenza tecnica, abilità di sparring e dimostrazione dei principi dell\'arte. Ogni cintura rappresenta anni di dedizione e padronanza di tecniche sempre più complesse.'
          }
        },
        history: {
          title: 'Storia del Brazilian Jiu-Jitsu',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu fu sviluppato all\'inizio del XX secolo quando il judoka giapponese Mitsuyo Maeda insegnò jujitsu tradizionale e judo alla famiglia Gracie in Brasile. I Gracie, in particolare Helio Gracie, adattarono queste tecniche per creare un\'arte marziale più focalizzata sul terreno.',
            'L\'efficacia del BJJ fu dimostrata nelle prime competizioni di arti marziali miste, in particolare quando Royce Gracie vinse i primi tornei UFC usando principalmente tecniche BJJ contro avversari più grandi provenienti da diversi background di arti marziali.',
            'Oggi, il BJJ è praticato in tutto il mondo ed è considerato un componente essenziale dell\'allenamento di arti marziali miste, prosperando anche come sport e sistema di autodifesa a sé stante.'
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
                description: 'Fondatore del Gracie Jiu-Jitsu e pioniere del BJJ'
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
          subtitle: 'Unisciti ai nostri corsi di Brazilian Jiu-Jitsu in entrambe le sedi'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Sperimenta l\'arte gentile che ha rivoluzionato le arti marziali e l\'autodifesa.',
          joinButton: 'Unisciti ai Corsi BJJ'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Grappling senza gi che combina wrestling, prese di sottomissione e tecniche di controllo a terra'
        },
        overview: {
          title: 'L\'Arte del Grappling',
          paragraphs: [
            'Il Grappling è una forma di sport da combattimento che coinvolge wrestling, combattimento a terra e tecniche di sottomissione senza l\'uniforme gi tradizionale. Questo approccio no-gi enfatizza velocità, atletismo e adattabilità.',
            'Attingendo da wrestling, Brazilian Jiu-Jitsu, judo e sambo, il grappling si concentra su takedown, controllo a terra e sottomissioni. L\'assenza di prese del gi crea uno stile di combattimento più veloce e dinamico.',
            'Il nostro programma di grappling alla Sport Academy insegna tecniche sia offensive che difensive, preparando gli studenti per competizioni e situazioni di autodifesa del mondo reale.'
          ]
        },
        techniques: {
          title: 'Tecniche di Grappling Essenziali',
          subtitle: 'Padroneggia le tecniche fondamentali del grappling no-gi e submission wrestling',
          takedowns: {
            title: 'Takedown',
            items: [
              'Takedown a Gamba Singola',
              'Takedown a Gamba Doppia',
              'Lancio d\'Anca',
              'Spazzate con i Piedi',
              'Difesa Sprawl'
            ]
          },
          control: {
            title: 'Posizioni di Controllo',
            items: [
              'Controllo Laterale',
              'Posizione Mount',
              'Controllo della Schiena',
              'Nord-Sud',
              'Ginocchio sulla Pancia'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Rear Naked Choke',
              'Guillotine Choke',
              'Arm Triangle',
              'Kimura Lock',
              'Ankle Lock'
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
                title: 'Drilling',
                description: 'Pratica ripetitiva delle tecniche per costruire memoria muscolare'
              },
              {
                title: 'Sparring Posizionale',
                description: 'Pratica posizioni specifiche e transizioni'
              },
              {
                title: 'Flow Rolling',
                description: 'Sparring leggero focalizzato sulla tecnica piuttosto che sull\'intensità'
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
                description: 'Forza funzionale per i movimenti di grappling'
              },
              {
                title: 'Flessibilità',
                description: 'Lavoro di mobilità per prevenzione infortuni e performance'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici del Grappling',
          subtitle: 'Benefici fisici e mentali dell\'allenamento di grappling no-gi',
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
              title: 'Fitness Cardiovascolare',
              description: 'Allenamento intenso che migliora la salute del cuore'
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
          subtitle: 'Unisciti ai nostri corsi di grappling no-gi per sessioni di allenamento dinamiche'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Impara dalle tecniche sviluppate dai maestri del grappling',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Esperto Catch Wrestling',
              description: 'Ex Campione Pesi Massimi UFC e specialista catch wrestling'
            },
            {
              name: 'Eddie Bravo',
              title: 'Fondatore 10th Planet',
              description: 'Pioniere del jiu-jitsu no-gi e sistema rubber guard'
            },
            {
              name: 'Gordon Ryan',
              title: 'Campione ADCC',
              description: 'Grappler no-gi dominante e specialista sottomissioni'
            }
          ]
        },
        cta: {
          title: 'Padroneggia il Grappling No-Gi',
          description: 'Sviluppa le tue abilità di grappling nel nostro ambiente di allenamento no-gi dinamico.',
          joinButton: 'Unisciti ai Corsi di Grappling'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina tecniche di striking, wrestling e combattimento a terra'
        },
        overview: {
          title: 'Il Sistema di Combattimento Completo',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono la forma più completa di sport da combattimento, combinando tecniche da boxe, kickboxing, wrestling, Brazilian Jiu-Jitsu e altre discipline di arti marziali. L\'MMA testa le abilità di un combattente in tutte le distanze di combattimento.',
            'Spesso chiamato "lo sport in più rapida crescita al mondo", l\'MMA si è evoluto dalle prime competizioni senza regole a uno sport altamente regolamentato con regole unificate e categorie di peso. L\'MMA moderno richiede agli atleti di essere versatili in tutti gli aspetti del combattimento.',
            'Il nostro programma MMA alla Sport Academy fornisce allenamento completo in tutte le fasi delle arti marziali miste, dai fondamentali di striking alle tecniche avanzate di combattimento a terra.'
          ]
        },
        techniques: {
          title: 'Tecniche di Combattimento MMA',
          subtitle: 'Padroneggia tutte le distanze di combattimento nelle arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Combinazioni di Boxe',
              'Tecniche di Kickboxing',
              'Clinch Muay Thai',
              'Colpi di Gomito e Ginocchio',
              'Gioco di Gambe e Movimento'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Difesa da Takedown',
              'Takedown Gamba Singola/Doppia',
              'Wrestling in Gabbia',
              'Tecniche Sprawl',
              'Controllo a Terra'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Ground and Pound',
              'Difesa da Sottomissione',
              'Passaggio della Guardia',
              'Transizioni',
              'Tecniche di Fuga'
            ]
          }
        },
        history: {
          title: 'Storia dell\'MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche nel pankration, uno sport da combattimento nell\'antica Grecia che combinava wrestling e boxe. L\'MMA moderno iniziò con i combattimenti vale tudo in Brasile e le prime competizioni "senza regole".',
            'Lo sport ottenne attenzione mondiale con la creazione dell\'Ultimate Fighting Championship (UFC) nel 1993, che mise combattenti di diversi background di arti marziali l\'uno contro l\'altro per determinare lo stile di combattimento più efficace.',
            'Nel corso dei decenni, l\'MMA si è evoluto in uno sport sofisticato con regole unificate, categorie di peso e commissioni atletiche che supervisionano la sicurezza e l\'integrità delle competizioni.'
          ],
          milestones: {
            title: 'Pietre Miliari MMA',
            events: [
              {
                year: '1993',
                description: 'Primo evento UFC tenuto a Denver, Colorado'
              },
              {
                year: '2001',
                description: 'Regole Unificate MMA stabilite'
              },
              {
                year: '2016',
                description: 'MMA legalizzato a New York, espansione USA completata'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento MMA',
          subtitle: 'Vantaggi fisici e mentali dell\'allenamento di arti marziali miste',
          items: [
            {
              icon: '🥊',
              title: 'Fitness Completo',
              description: 'Allenamento corpo intero che combina cardio e forza'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Abilità pratiche per situazioni del mondo reale'
            },
            {
              icon: '🧠',
              title: 'Disciplina Mentale',
              description: 'Sviluppa focus, fiducia e resistenza mentale'
            },
            {
              icon: '⚡',
              title: 'Performance Atletica',
              description: 'Migliora coordinazione, riflessi e agilità'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento MMA',
          subtitle: 'Sessioni complete di allenamento arti marziali miste'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Impara dalle tecniche sviluppate dai pionieri MMA',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'Pioniere UFC',
              description: 'Dimostrò l\'efficacia del Brazilian Jiu-Jitsu nella prima UFC'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Campione Pesi Medi UFC più longevo'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Leggendario peso massimo con incredibile gioco a terra'
            }
          ]
        },
        cta: {
          title: 'Entra nell\'Ottagono',
          description: 'Allenati come un combattente professionista e padroneggia tutti gli aspetti delle arti marziali miste.',
          joinButton: 'Unisciti ai Corsi MMA'
        }
      }
    },
    common: {
      learnMore: 'Scopri di Più',
      joinNow: 'Iscriviti Ora',
      viewClasses: 'Visualizza Corsi',
      viewSchedule: 'Visualizza Orari',
      viewMembership: 'Visualizza Abbonamenti',
      contactUs: 'Contattaci',
      callNow: 'Chiama Ora',
      joinSportAcademy: 'Unisciti alla Sport Academy',
      allLevels: 'Tutti i Livelli',
      ages: 'Età',
      registerOnline: 'Registrati Online',
      bookClasses: 'Prenota Corsi',
      instantConfirmation: 'Conferma Istantanea',
      visitUs: 'Visitaci',
      dropInWelcome: 'Visite spontanee benvenute',
      duringTrainingHours: 'Durante gli orari di allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM'
    },
    footer: {
      tagline: 'Allenamento Elite MMA, BJJ e Grappling',
      subtitle: 'Forgiamo Combattenti dal 2017',
      copyright: '© 2024 Sport Academy. Tutti i diritti riservati.'
    }
  }
};

const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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

export { LanguageProvider };