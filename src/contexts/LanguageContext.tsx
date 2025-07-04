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
        description: 'Sport Academy is your gym for MMA, fitness, and combat sports in Campo Tures and Brunico. We offer training for all levels — including kids\' classes — with expert coaches and a focused, high-energy environment.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Established in 2017',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Training Programs',
        programsDescription: 'MMA, BJJ, Grappling & More',
        exploreClasses: 'Explore Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Master the art of combat with our comprehensive training programs'
      },
      mma: {
        description: 'Complete mixed martial arts training combining striking, grappling, and ground fighting techniques.'
      },
      bjj: {
        description: 'Brazilian Jiu-Jitsu focused on ground fighting, submissions, and leverage-based techniques.'
      },
      grappling: {
        description: 'No-gi grappling emphasizing takedowns, control positions, and submission holds.'
      },
      getStarted: {
        title: 'Get Started Today',
        subtitle: 'Choose your path to becoming a better fighter'
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
        description: 'Discover our comprehensive range of martial arts and combat sports training programs designed for all skill levels.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Complete MMA training combining striking, wrestling, and Brazilian Jiu-Jitsu. Learn all aspects of mixed martial arts in a safe, controlled environment with expert instruction.',
        features: [
          'Striking techniques (boxing, kickboxing, Muay Thai)',
          'Wrestling and takedown defense',
          'Ground fighting and submissions',
          'Cage work and clinch fighting',
          'Conditioning and fight preparation'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'The gentle art of Brazilian Jiu-Jitsu focuses on ground fighting, leverage, and technique over strength. Perfect for self-defense and competition.',
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
        description: 'No-gi grappling training emphasizing takedowns, control, and submissions without the traditional gi uniform.',
        features: [
          'Takedown techniques',
          'No-gi specific grips and controls',
          'Submission wrestling',
          'Scrambles and transitions',
          'Competition grappling'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Brazilian Jiu-Jitsu classes specifically designed for children, focusing on discipline, respect, and fundamental techniques.',
        features: [
          'Age-appropriate techniques',
          'Character development',
          'Anti-bullying skills',
          'Physical fitness',
          'Fun and engaging activities'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling training focusing on takedowns, control, and conditioning. Essential for MMA and grappling.',
        features: [
          'Single and double leg takedowns',
          'Wrestling conditioning',
          'Sprawls and defensive techniques',
          'Mat wrestling',
          'Competition preparation'
        ]
      },
      whatYouLearn: 'What You\'ll Learn',
      cta: {
        title: 'Ready to Start Training?',
        description: 'Join Sport Academy today and begin your martial arts journey with expert instruction and a supportive community.'
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
        description: 'Start your training journey today with our flexible membership options.'
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
        background: 'With over 15 years of martial arts experience, Matteo founded Sport Academy in 2017 with a vision to bring high-quality MMA and BJJ training to South Tyrol. His passion for teaching and technical expertise make him an exceptional instructor.',
        specializations: [
          'Brazilian Jiu-Jitsu Black Belt',
          'MMA Competition Experience',
          'Wrestling Techniques',
          'Youth Development Programs'
        ],
        achievements: [
          'BJJ Black Belt under renowned instructors',
          'Multiple MMA competition victories',
          'Certified youth martial arts instructor',
          'Over 8 years of teaching experience'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings a wealth of knowledge in striking arts and grappling to Sport Academy. His technical precision and ability to break down complex techniques make him an invaluable part of our coaching team.',
        specializations: [
          'Striking Arts (Boxing, Kickboxing)',
          'Brazilian Jiu-Jitsu',
          'MMA Training',
          'Competition Preparation'
        ],
        achievements: [
          'Extensive striking arts background',
          'BJJ Brown Belt',
          'MMA coaching certification',
          'Competition coaching experience'
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
          description: 'We instill values of respect, discipline, and sportsmanship in all our training programs.'
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
        description: 'Choose the membership plan that fits your training goals and schedule. All plans include access to both locations.'
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
        'Flexible scheduling',
        'Perfect for beginners',
        'No long-term commitment'
      ],
      bjjIncludes: [
        'All BJJ classes included',
        'Gi and No-Gi training',
        'Both locations access',
        'Belt progression system',
        'Competition preparation'
      ],
      selectMainSeason: 'Select Main Season',
      selectSummerSeason: 'Select Summer Season',
      selectBjjOnly: 'Select BJJ Only',
      additionalServices: {
        title: 'Additional Services',
        description: 'Enhance your training with our specialized programs and personal instruction.'
      },
      personalTraining: {
        title: 'Personal Training',
        description: 'One-on-one instruction tailored to your specific goals and needs.',
        price: '€50',
        duration: 'per session'
      },
      competitionPrep: {
        title: 'Competition Prep',
        description: 'Specialized training to prepare for BJJ and MMA competitions.',
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
          answer: 'The main season (September-June) offers our full curriculum with 10 months of training. The summer season (July-August) is a shorter program perfect for trying out our classes or maintaining training during summer break.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to classes at both Campo Tures and Brunico locations. You can mix and match based on your schedule.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer trial classes for new students. Contact us to schedule your first session and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For beginners, we provide basic equipment. As you progress, you\'ll want to invest in your own gear. We can guide you on what to purchase and when.'
        }
      },
      cta: {
        title: 'Start Your Journey',
        description: 'Join Sport Academy today and become part of our martial arts family.'
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
      visitRequirements: {
        title: 'First Time Visiting?',
        subtitle: 'Here\'s what you need to know'
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
        'Basic training equipment for beginners',
        'Clean and safe training environment',
        'Expert instruction and guidance',
        'Supportive training community'
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
        description: 'Take the first step towards your martial arts journey. Contact us today!'
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
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. Developed from traditional Japanese jujitsu and judo, BJJ emphasizes technique and leverage over strength and size.',
            'At Sport Academy, our BJJ program is designed to teach students the fundamental principles of this beautiful art while building physical fitness, mental toughness, and self-confidence.',
            'Whether you\'re interested in self-defense, competition, or simply want to challenge yourself physically and mentally, our BJJ classes provide a comprehensive foundation in this highly effective martial art.'
          ]
        },
        techniques: {
          title: 'Core BJJ Techniques',
          subtitle: 'Master the fundamental skills that form the foundation of Brazilian Jiu-Jitsu'
        },
        beltSystem: {
          title: 'BJJ Belt Progression',
          subtitle: 'Your journey through the ranks of Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'The Journey, Not the Destination',
            description: 'In Brazilian Jiu-Jitsu, each belt represents years of dedicated training, technical development, and personal growth. The journey from white to black belt typically takes 8-12 years, making it one of the most respected ranking systems in martial arts.'
          }
        },
        history: {
          title: 'History of BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu was developed in the early 20th century when Japanese jujitsu and judo master Mitsuyo Maeda taught the Gracie family in Brazil. The Gracies, particularly Helio Gracie, adapted these techniques to create a more effective system for smaller practitioners.',
            'The art gained worldwide recognition when Royce Gracie dominated the early UFC tournaments, proving that technique and leverage could overcome size and strength. This led to BJJ becoming an essential component of mixed martial arts training.'
          ],
          keyFigures: {
            title: 'Key Figures',
            people: [
              {
                name: 'Mitsuyo Maeda',
                description: 'Japanese master who brought jujitsu to Brazil'
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
          subtitle: 'Regular classes available at both locations'
        },
        cta: {
          title: 'Start Your BJJ Journey',
          description: 'Join our Brazilian Jiu-Jitsu program and discover the gentle art that builds both body and mind.',
          joinButton: 'Join BJJ Program'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'No-gi submission wrestling that emphasizes speed, athleticism, and adaptability'
        },
        overview: {
          title: 'The Art of Grappling',
          paragraphs: [
            'Grappling, also known as submission wrestling or no-gi jiu-jitsu, is a form of combat sport that focuses on takedowns, ground control, and submission holds without the traditional gi uniform.',
            'This dynamic discipline emphasizes speed, athleticism, and adaptability, making it an excellent complement to both Brazilian Jiu-Jitsu and mixed martial arts training.',
            'At Sport Academy, our grappling program teaches students to excel in the fast-paced world of no-gi competition while developing the skills necessary for real-world self-defense situations.'
          ]
        },
        techniques: {
          title: 'Essential Grappling Techniques',
          subtitle: 'Master the core skills of no-gi submission wrestling'
        },
        methodology: {
          title: 'Training Methodology',
          subtitle: 'Our systematic approach to grappling excellence',
          technical: {
            title: 'Technical Development',
            methods: [
              {
                title: 'Position Before Submission',
                description: 'Master control positions before attempting submissions'
              },
              {
                title: 'Chain Wrestling',
                description: 'Learn to connect techniques in flowing sequences'
              },
              {
                title: 'Pressure and Timing',
                description: 'Develop the ability to apply pressure and recognize opportunities'
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
                title: 'Flexibility and Mobility',
                description: 'Maintain range of motion and prevent injuries'
              },
              {
                title: 'Mental Toughness',
                description: 'Develop the mindset to persevere under pressure'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of Grappling',
          subtitle: 'Why grappling training transforms both body and mind',
          items: [
            {
              icon: '💪',
              title: 'Full Body Strength',
              description: 'Develop functional strength and muscle endurance'
            },
            {
              icon: '🧠',
              title: 'Mental Chess',
              description: 'Improve problem-solving and strategic thinking'
            },
            {
              icon: '⚡',
              title: 'Explosive Power',
              description: 'Build speed and explosive movement capabilities'
            },
            {
              icon: '🛡️',
              title: 'Self Defense',
              description: 'Learn practical skills for real-world situations'
            }
          ]
        },
        schedule: {
          title: 'Grappling Training Schedule',
          subtitle: 'High-intensity no-gi sessions at both locations'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Icons who shaped the sport of submission wrestling',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Catch Wrestling Master',
              description: 'MMA veteran and catch wrestling expert'
            },
            {
              name: 'Dean Lister',
              title: 'Leg Lock Pioneer',
              description: 'Revolutionary leg attack specialist'
            },
            {
              name: 'Marcelo Garcia',
              title: 'No-Gi Legend',
              description: 'Multiple-time ADCC champion'
            }
          ]
        },
        cta: {
          title: 'Master the Art of Grappling',
          description: 'Join our grappling program and develop the skills to excel in no-gi competition.',
          joinButton: 'Join Grappling Program'
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
            'Mixed Martial Arts (MMA) is the most complete form of combat sports, combining techniques from boxing, kickboxing, wrestling, Brazilian Jiu-Jitsu, and other martial arts disciplines.',
            'At Sport Academy, our MMA program is designed to teach students all aspects of fighting while emphasizing safety, technique, and sportsmanship.',
            'Whether your goal is fitness, self-defense, or competition, our comprehensive MMA training will challenge you physically and mentally while building confidence and discipline.'
          ]
        },
        techniques: {
          title: 'MMA Skill Sets',
          subtitle: 'Master all ranges of combat in mixed martial arts'
        },
        history: {
          title: 'Evolution of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with the Ultimate Fighting Championship (UFC) in 1993. Early events pitted different martial arts styles against each other to determine the most effective fighting system.',
            'Over time, fighters realized they needed to be well-rounded in all aspects of combat. This led to the evolution of MMA as we know it today - a sport where athletes train in multiple disciplines to become complete fighters.'
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
                description: 'Unified rules established for professional MMA'
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
          subtitle: 'Why MMA is the ultimate workout and self-defense system',
          items: [
            {
              icon: '🥊',
              title: 'Complete Fitness',
              description: 'Full-body workout combining cardio and strength'
            },
            {
              icon: '🛡️',
              title: 'Self Defense',
              description: 'Learn to defend yourself in any situation'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Build confidence and mental resilience'
            },
            {
              icon: '⚡',
              title: 'Explosive Power',
              description: 'Develop speed, power, and athleticism'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Comprehensive mixed martial arts training sessions'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Fighters who defined mixed martial arts',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC Pioneer',
              description: 'Proved the effectiveness of Brazilian Jiu-Jitsu'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Longest reigning UFC middleweight champion'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Considered by many as the greatest heavyweight'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Join our MMA program and master all aspects of mixed martial arts.',
          joinButton: 'Join MMA Program'
        }
      }
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
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates and DMs',
      visitUs: 'Visit Us',
      dropInWelcome: 'Drop-in Welcome',
      duringTrainingHours: 'During training hours'
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
        description: 'Sport Academy ist Ihr Fitnessstudio für MMA, Fitness und Kampfsport in Campo Tures und Brunico. Wir bieten Training für alle Levels — einschließlich Kinderkurse — mit erfahrenen Trainern und einer fokussierten, energiegeladenen Umgebung.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Gegründet 2017',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'MMA, BJJ, Grappling & Mehr',
        exploreClasses: 'Kurse Erkunden'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Meistere die Kunst des Kampfes mit unseren umfassenden Trainingsprogrammen'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training mit Schlag-, Grappling- und Bodenkampftechniken.'
      },
      bjj: {
        description: 'Brazilian Jiu-Jitsu fokussiert auf Bodenkampf, Submissions und hebelbasierte Techniken.'
      },
      grappling: {
        description: 'No-Gi Grappling mit Schwerpunkt auf Takedowns, Kontrollpositionen und Submission Holds.'
      },
      getStarted: {
        title: 'Heute Beginnen',
        subtitle: 'Wähle deinen Weg zu einem besseren Kämpfer'
      },
      quickLinks: {
        viewClasses: 'Kurse Ansehen',
        viewClassesDesc: 'Entdecke unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan Prüfen',
        checkScheduleDesc: 'Finde deine Trainingszeiten',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wähle deine Mitgliedschaft',
        contactUs: 'Kontaktiere Uns',
        contactUsDesc: 'Nimm Kontakt mit uns auf'
      }
    },
    classes: {
      hero: {
        title: 'Unsere Kurse',
        description: 'Entdecke unser umfassendes Angebot an Kampfkunst- und Kampfsport-Trainingsprogrammen für alle Leistungsstufen.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Komplettes MMA-Training mit Schlag-, Wrestling- und Brazilian Jiu-Jitsu-Techniken. Lerne alle Aspekte der Mixed Martial Arts in einer sicheren, kontrollierten Umgebung.',
        features: [
          'Schlagtechniken (Boxen, Kickboxen, Muay Thai)',
          'Wrestling und Takedown-Verteidigung',
          'Bodenkampf und Submissions',
          'Käfigarbeit und Clinch-Kampf',
          'Konditionierung und Kampfvorbereitung'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Die sanfte Kunst des Brazilian Jiu-Jitsu fokussiert auf Bodenkampf, Hebel und Technik über Kraft.',
        features: [
          'Guard-Arbeit und Sweeps',
          'Submission-Techniken',
          'Positionskontrolle',
          'Selbstverteidigungsanwendungen',
          'Wettkampfvorbereitung'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'No-Gi Grappling-Training mit Schwerpunkt auf Takedowns, Kontrolle und Submissions ohne traditionelle Gi-Uniform.',
        features: [
          'Takedown-Techniken',
          'No-Gi spezifische Griffe und Kontrollen',
          'Submission Wrestling',
          'Scrambles und Übergänge',
          'Wettkampf-Grappling'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Brazilian Jiu-Jitsu-Kurse speziell für Kinder, mit Fokus auf Disziplin, Respekt und grundlegende Techniken.',
        features: [
          'Altersgerechte Techniken',
          'Charakterentwicklung',
          'Anti-Mobbing-Fähigkeiten',
          'Körperliche Fitness',
          'Spaßige und ansprechende Aktivitäten'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelles Wrestling-Training mit Fokus auf Takedowns, Kontrolle und Konditionierung.',
        features: [
          'Single und Double Leg Takedowns',
          'Wrestling-Konditionierung',
          'Sprawls und Verteidigungstechniken',
          'Mattenwrestling',
          'Wettkampfvorbereitung'
        ]
      },
      whatYouLearn: 'Was Du Lernst',
      cta: {
        title: 'Bereit Zu Trainieren?',
        description: 'Tritt der Sport Academy heute bei und beginne deine Kampfkunst-Reise mit Expertenunterricht.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finde die perfekten Trainingszeiten für deinen Zeitplan. Wir bieten Kurse während der Woche an beiden Standorten.'
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
      striking: 'Schlagtechniken',
      openMat: 'Freies Training',
      importantInfo: 'Wichtige Informationen',
      classGuidelines: 'Kursrichtlinien',
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
        title: 'Bereit Beizutreten?',
        description: 'Beginne deine Trainingsreise heute mit unseren flexiblen Mitgliedschaftsoptionen.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne unsere erfahrenen Instruktoren kennen, die sich dafür einsetzen, dir beim Erreichen deiner Kampfkunstziele zu helfen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 15 Jahren Kampfkunsterfahrung gründete Matteo 2017 die Sport Academy mit der Vision, hochwertiges MMA- und BJJ-Training nach Südtirol zu bringen.',
        specializations: [
          'Brazilian Jiu-Jitsu Schwarzgurt',
          'MMA-Wettkampferfahrung',
          'Wrestling-Techniken',
          'Jugendentwicklungsprogramme'
        ],
        achievements: [
          'BJJ-Schwarzgurt unter renommierten Instruktoren',
          'Mehrere MMA-Wettkampfsiege',
          'Zertifizierter Jugend-Kampfkunstinstruktor',
          'Über 8 Jahre Unterrichtserfahrung'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt umfangreiches Wissen in Schlagkünsten und Grappling zur Sport Academy. Seine technische Präzision macht ihn zu einem wertvollen Teil unseres Trainerteams.',
        specializations: [
          'Schlagkünste (Boxen, Kickboxen)',
          'Brazilian Jiu-Jitsu',
          'MMA-Training',
          'Wettkampfvorbereitung'
        ],
        achievements: [
          'Umfangreicher Schlagkunst-Hintergrund',
          'BJJ-Braungurt',
          'MMA-Trainerzertifizierung',
          'Wettkampf-Coaching-Erfahrung'
        ]
      },
      background: 'Hintergrund',
      specializations: 'Spezialisierungen',
      achievements: 'Erfolge',
      philosophy: {
        title: 'Unsere Trainingsphilosophie',
        technical: {
          title: 'Technische Exzellenz',
          description: 'Wir konzentrieren uns auf richtige Technik und Grundlagen für alle Schüler.'
        },
        individual: {
          title: 'Individuelle Betreuung',
          description: 'Jeder Schüler erhält personalisierten Unterricht für seine Ziele.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir vermitteln Werte von Respekt, Disziplin und Fairness.'
        }
      },
      cta: {
        title: 'Trainiere Mit Den Besten',
        description: 'Erlebe Weltklasse-Unterricht und bringe deine Kampfkunstfähigkeiten auf die nächste Stufe.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle den Mitgliedschaftsplan, der zu deinen Trainingszielen und deinem Zeitplan passt.'
      },
      mainSeason: {
        title: 'Hauptsaison',
        period: 'September - Juni',
        duration: '10 Monate Training',
        mostPopular: 'Am Beliebtesten'
      },
      summerSeason: {
        title: 'Sommersaison',
        period: 'Juli - August',
        duration: '2,5 Monate Training'
      },
      bjjOnly: {
        title: 'Nur BJJ Mitgliedschaft',
        subtitle: 'Spezielles Brazilian Jiu-Jitsu Trainingsprogramm',
        program: 'BJJ-Fokussiertes Training',
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
        'Anfängerfreundlicher Unterricht',
        'Wettkampfteam-Zugang'
      ],
      summerIncludes: [
        'Alle Sommerkurse inklusive',
        'Zugang zu beiden Standorten',
        'Flexible Terminplanung',
        'Perfekt für Anfänger',
        'Keine langfristige Verpflichtung'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse inklusive',
        'Gi- und No-Gi-Training',
        'Zugang zu beiden Standorten',
        'Gürtel-Fortschrittssystem',
        'Wettkampfvorbereitung'
      ],
      selectMainSeason: 'Hauptsaison Wählen',
      selectSummerSeason: 'Sommersaison Wählen',
      selectBjjOnly: 'Nur BJJ Wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessere dein Training mit unseren spezialisierten Programmen.'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Einzelunterricht auf deine spezifischen Ziele zugeschnitten.',
        price: '€50',
        duration: 'pro Einheit'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training für BJJ- und MMA-Wettkämpfe.',
        price: '€40',
        duration: 'pro Einheit'
      },
      seminars: {
        title: 'Seminare',
        description: 'Spezielle Workshops mit Gastinstruktoren.',
        price: '€30',
        duration: 'pro Seminar'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Die Hauptsaison (September-Juni) bietet unser vollständiges Curriculum mit 10 Monaten Training. Die Sommersaison (Juli-August) ist ein kürzeres Programm.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu Kursen an beiden Standorten.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Absolut! Wir bieten Probestunden für neue Schüler an. Kontaktiere uns für deine erste Einheit.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Anfänger stellen wir Grundausrüstung zur Verfügung. Wir können dich beraten, was du kaufen solltest.'
        }
      },
      cta: {
        title: 'Beginne Deine Reise',
        description: 'Tritt der Sport Academy heute bei und werde Teil unserer Kampfkunstfamilie.'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Nimm Kontakt mit uns auf, um deine Kampfkunstreise zu beginnen oder Fragen zu unseren Programmen zu stellen.'
      },
      getInTouch: {
        title: 'Kontakt Aufnehmen',
        subtitle: 'Verschiedene Wege, um mit der Sport Academy in Kontakt zu treten'
      },
      callUs: 'Anrufen',
      instagram: 'Instagram',
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Standorte in Südtirol'
      },
      visitRequirements: {
        title: 'Zum Ersten Mal Hier?',
        subtitle: 'Das solltest du wissen'
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
        'Grundausrüstung für Anfänger',
        'Saubere und sichere Trainingsumgebung',
        'Expertenunterricht und Anleitung',
        'Unterstützende Trainingsgemeinschaft'
      ],
      specialInstructions: 'Besondere Anweisungen',
      instructions: {
        age: 'Das Alter für Kinderkurse ist 8-14 Jahre',
        health: 'Bitte informiere uns über Verletzungen oder Gesundheitszustände',
        equipment: 'Probestudenten können vorübergehend Grundausrüstung ausleihen',
        payment: 'Bargeld und Karte sind die einzigen akzeptierten Zahlungsmethoden'
      },
      cta: {
        title: 'Bereit Anzufangen?',
        description: 'Mache den ersten Schritt zu deiner Kampfkunstreise. Kontaktiere uns heute!'
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
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission Holds konzentriert.',
            'In der Sport Academy ist unser BJJ-Programm darauf ausgelegt, Schülern die grundlegenden Prinzipien dieser schönen Kunst zu vermitteln.',
            'Ob du dich für Selbstverteidigung, Wettkampf interessierst oder dich einfach körperlich und geistig herausfordern möchtest.'
          ]
        },
        techniques: {
          title: 'Kern-BJJ-Techniken',
          subtitle: 'Meistere die grundlegenden Fähigkeiten des Brazilian Jiu-Jitsu'
        },
        beltSystem: {
          title: 'BJJ-Gürtel-Progression',
          subtitle: 'Deine Reise durch die Ränge des Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Die Reise, Nicht Das Ziel',
            description: 'Im Brazilian Jiu-Jitsu repräsentiert jeder Gürtel Jahre des engagierten Trainings und der persönlichen Entwicklung.'
          }
        },
        history: {
          title: 'Geschichte des BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu wurde im frühen 20. Jahrhundert entwickelt, als der japanische Meister Mitsuyo Maeda die Gracie-Familie in Brasilien unterrichtete.',
            'Die Kunst gewann weltweite Anerkennung, als Royce Gracie die frühen UFC-Turniere dominierte.'
          ],
          keyFigures: {
            title: 'Schlüsselfiguren',
            people: [
              {
                name: 'Mitsuyo Maeda',
                description: 'Japanischer Meister, der Jujitsu nach Brasilien brachte'
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
          title: 'BJJ-Trainingsplan',
          subtitle: 'Regelmäßige Kurse an beiden Standorten verfügbar'
        },
        cta: {
          title: 'Beginne Deine BJJ-Reise',
          description: 'Tritt unserem Brazilian Jiu-Jitsu-Programm bei und entdecke die sanfte Kunst.',
          joinButton: 'BJJ-Programm Beitreten'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'No-Gi Submission Wrestling mit Schwerpunkt auf Geschwindigkeit und Anpassungsfähigkeit'
        },
        overview: {
          title: 'Die Kunst des Grappling',
          paragraphs: [
            'Grappling, auch bekannt als Submission Wrestling oder No-Gi Jiu-Jitsu, konzentriert sich auf Takedowns und Submissions ohne Gi-Uniform.',
            'Diese dynamische Disziplin betont Geschwindigkeit, Athletik und Anpassungsfähigkeit.',
            'In der Sport Academy lehrt unser Grappling-Programm Schülern, in der schnelllebigen Welt des No-Gi-Wettkampfs zu glänzen.'
          ]
        },
        techniques: {
          title: 'Wesentliche Grappling-Techniken',
          subtitle: 'Meistere die Kernfähigkeiten des No-Gi Submission Wrestling'
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Unser systematischer Ansatz zur Grappling-Exzellenz',
          technical: {
            title: 'Technische Entwicklung',
            methods: [
              {
                title: 'Position Vor Submission',
                description: 'Meistere Kontrollpositionen vor Submission-Versuchen'
              },
              {
                title: 'Chain Wrestling',
                description: 'Lerne Techniken in fließenden Sequenzen zu verbinden'
              },
              {
                title: 'Druck und Timing',
                description: 'Entwickle die Fähigkeit, Druck anzuwenden und Gelegenheiten zu erkennen'
              }
            ]
          },
          conditioning: {
            title: 'Körperliche Konditionierung',
            methods: [
              {
                title: 'Grappling-Spezifische Fitness',
                description: 'Baue die Ausdauer und Kraft auf, die für den Wettkampf benötigt wird'
              },
              {
                title: 'Flexibilität und Mobilität',
                description: 'Erhalte den Bewegungsumfang und verhindere Verletzungen'
              },
              {
                title: 'Mentale Stärke',
                description: 'Entwickle die Denkweise, um unter Druck durchzuhalten'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grappling',
          subtitle: 'Warum Grappling-Training Körper und Geist transformiert',
          items: [
            {
              icon: '💪',
              title: 'Ganzkörperstärke',
              description: 'Entwickle funktionale Kraft und Muskelausdauer'
            },
            {
              icon: '🧠',
              title: 'Mentales Schach',
              description: 'Verbessere Problemlösung und strategisches Denken'
            },
            {
              icon: '⚡',
              title: 'Explosive Kraft',
              description: 'Baue Geschwindigkeit und explosive Bewegungsfähigkeiten auf'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Lerne praktische Fähigkeiten für reale Situationen'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Trainingsplan',
          subtitle: 'Hochintensive No-Gi-Sessions an beiden Standorten'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Ikonen, die den Sport des Submission Wrestling prägten',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Catch Wrestling Meister',
              description: 'MMA-Veteran und Catch Wrestling-Experte'
            },
            {
              name: 'Dean Lister',
              title: 'Leg Lock Pionier',
              description: 'Revolutionärer Beinangriff-Spezialist'
            },
            {
              name: 'Marcelo Garcia',
              title: 'No-Gi Legende',
              description: 'Mehrfacher ADCC-Champion'
            }
          ]
        },
        cta: {
          title: 'Meistere Die Kunst Des Grappling',
          description: 'Tritt unserem Grappling-Programm bei und entwickle die Fähigkeiten für No-Gi-Wettkämpfe.',
          joinButton: 'Grappling-Programm Beitreten'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der Schlagen, Wrestling und Bodenkampf kombiniert'
        },
        overview: {
          title: 'Das Komplette Kampfsystem',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist die vollständigste Form des Kampfsports, die Techniken aus verschiedenen Disziplinen kombiniert.',
            'In der Sport Academy ist unser MMA-Programm darauf ausgelegt, alle Aspekte des Kampfes zu lehren.',
            'Ob dein Ziel Fitness, Selbstverteidigung oder Wettkampf ist, unser umfassendes MMA-Training wird dich herausfordern.'
          ]
        },
        techniques: {
          title: 'MMA-Fähigkeiten',
          subtitle: 'Meistere alle Kampfbereiche in Mixed Martial Arts'
        },
        history: {
          title: 'Evolution des MMA',
          paragraphs: [
            'Mixed Martial Arts hat alte Wurzeln, aber modernes MMA begann 1993 mit der Ultimate Fighting Championship.',
            'Im Laufe der Zeit erkannten Kämpfer, dass sie in allen Kampfaspekten vielseitig sein mussten.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erstes UFC-Event zeigt verschiedene Kampfkünste'
              },
              {
                year: '2001',
                description: 'Einheitliche Regeln für professionelles MMA etabliert'
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
          subtitle: 'Warum MMA das ultimative Workout und Selbstverteidigungssystem ist',
          items: [
            {
              icon: '🥊',
              title: 'Komplette Fitness',
              description: 'Ganzkörper-Workout mit Cardio und Kraft'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Lerne dich in jeder Situation zu verteidigen'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Baue Selbstvertrauen und mentale Widerstandsfähigkeit auf'
            },
            {
              icon: '⚡',
              title: 'Explosive Kraft',
              description: 'Entwickle Geschwindigkeit, Kraft und Athletik'
            }
          ]
        },
        schedule: {
          title: 'MMA-Trainingsplan',
          subtitle: 'Umfassende Mixed Martial Arts Trainingseinheiten'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Kämpfer, die Mixed Martial Arts definierten',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC-Pionier',
              description: 'Bewies die Wirksamkeit des Brazilian Jiu-Jitsu'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Längster regierender UFC-Mittelgewichtschampion'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Von vielen als der größte Schwergewichtler angesehen'
            }
          ]
        },
        cta: {
          title: 'Werde Ein Kompletter Kämpfer',
          description: 'Tritt unserem MMA-Programm bei und meistere alle Aspekte der Mixed Martial Arts.',
          joinButton: 'MMA-Programm Beitreten'
        }
      }
    },
    common: {
      joinNow: 'Jetzt Beitreten',
      viewClasses: 'Kurse Ansehen',
      viewSchedule: 'Stundenplan Ansehen',
      viewMembership: 'Mitgliedschaft Ansehen',
      contactUs: 'Kontakt',
      learnMore: 'Mehr Erfahren',
      allLevels: 'Alle Level',
      ages: 'Alter',
      joinSportAcademy: 'Sport Academy Beitreten',
      callNow: 'Jetzt Anrufen',
      registerOnline: 'Online Registrieren',
      bookClasses: 'Kurse Buchen',
      instantConfirmation: 'Sofortige Bestätigung',
      responseWithin2Hours: 'Antwort innerhalb 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates und DMs',
      visitUs: 'Besuche Uns',
      dropInWelcome: 'Drop-in Willkommen',
      duringTrainingHours: 'Während der Trainingszeiten'
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Kämpfer Schmieden Seit 2017',
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
        description: 'Sport Academy è la tua palestra per MMA, fitness e sport da combattimento a Campo Tures e Brunico. Offriamo allenamenti per tutti i livelli — inclusi corsi per bambini — con istruttori esperti e un ambiente focalizzato e ad alta energia.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Fondata nel 2017',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'MMA, BJJ, Grappling & Altro',
        exploreClasses: 'Esplora i Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come Un Fighter',
        subtitle: 'Padroneggia l\'arte del combattimento con i nostri programmi di allenamento completi'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, grappling e combattimento a terra.'
      },
      bjj: {
        description: 'Brazilian Jiu-Jitsu focalizzato sul combattimento a terra, sottomissioni e tecniche basate sulla leva.'
      },
      grappling: {
        description: 'Grappling no-gi che enfatizza takedown, posizioni di controllo e prese di sottomissione.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Scegli il tuo percorso per diventare un fighter migliore'
      },
      quickLinks: {
        viewClasses: 'Vedi Corsi',
        viewClassesDesc: 'Esplora i nostri programmi di allenamento',
        checkSchedule: 'Controlla Orari',
        checkScheduleDesc: 'Trova i tuoi orari di allenamento',
        membershipPlans: 'Piani Abbonamento',
        membershipPlansDesc: 'Scegli il tuo abbonamento',
        contactUs: 'Contattaci',
        contactUsDesc: 'Mettiti in contatto con noi'
      }
    },
    classes: {
      hero: {
        title: 'I Nostri Corsi',
        description: 'Scopri la nostra gamma completa di programmi di allenamento di arti marziali e sport da combattimento per tutti i livelli.'
      },
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Allenamento MMA completo che combina striking, wrestling e Brazilian Jiu-Jitsu in un ambiente sicuro e controllato.',
        features: [
          'Tecniche di striking (boxe, kickboxing, Muay Thai)',
          'Wrestling e difesa da takedown',
          'Combattimento a terra e sottomissioni',
          'Lavoro in gabbia e clinch fighting',
          'Condizionamento e preparazione al combattimento'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'L\'arte gentile del Brazilian Jiu-Jitsu si concentra sul combattimento a terra, leva e tecnica sulla forza.',
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
        description: 'Allenamento di grappling no-gi che enfatizza takedown, controllo e sottomissioni senza l\'uniforme gi tradizionale.',
        features: [
          'Tecniche di takedown',
          'Prese e controlli specifici no-gi',
          'Submission wrestling',
          'Scramble e transizioni',
          'Grappling competitivo'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Corsi di Brazilian Jiu-Jitsu specificamente progettati per bambini, focalizzati su disciplina, rispetto e tecniche fondamentali.',
        features: [
          'Tecniche appropriate per l\'età',
          'Sviluppo del carattere',
          'Abilità anti-bullismo',
          'Fitness fisico',
          'Attività divertenti e coinvolgenti'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Allenamento di wrestling tradizionale focalizzato su takedown, controllo e condizionamento.',
        features: [
          'Takedown single e double leg',
          'Condizionamento wrestling',
          'Sprawl e tecniche difensive',
          'Wrestling su tappeto',
          'Preparazione alle competizioni'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Pronto ad Iniziare l\'Allenamento?',
        description: 'Unisciti alla Sport Academy oggi e inizia il tuo viaggio nelle arti marziali con istruzione esperta.'
      }
    },
    schedule: {
      hero: {
        title: 'Orari di Allenamento',
        description: 'Trova gli orari di allenamento perfetti per il tuo programma. Offriamo corsi durante la settimana in entrambe le sedi.'
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
        bothLocations: 'Allenamento in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto ad Unirti?',
        description: 'Inizia il tuo viaggio di allenamento oggi con le nostre opzioni di abbonamento flessibili.'
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
        background: 'Con oltre 15 anni di esperienza nelle arti marziali, Matteo ha fondato la Sport Academy nel 2017 con la visione di portare allenamento MMA e BJJ di alta qualità in Alto Adige.',
        specializations: [
          'Cintura Nera Brazilian Jiu-Jitsu',
          'Esperienza Competitiva MMA',
          'Tecniche di Wrestling',
          'Programmi di Sviluppo Giovanile'
        ],
        achievements: [
          'Cintura Nera BJJ sotto istruttori rinomati',
          'Multiple vittorie in competizioni MMA',
          'Istruttore certificato arti marziali giovanili',
          'Oltre 8 anni di esperienza di insegnamento'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta una ricchezza di conoscenze nelle arti del striking e grappling alla Sport Academy. La sua precisione tecnica lo rende una parte preziosa del nostro team di coaching.',
        specializations: [
          'Arti del Striking (Boxe, Kickboxing)',
          'Brazilian Jiu-Jitsu',
          'Allenamento MMA',
          'Preparazione alle Competizioni'
        ],
        achievements: [
          'Ampio background nelle arti del striking',
          'Cintura Marrone BJJ',
          'Certificazione coaching MMA',
          'Esperienza di coaching competitivo'
        ]
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      philosophy: {
        title: 'La Nostra Filosofia di Coaching',
        technical: {
          title: 'Eccellenza Tecnica',
          description: 'Ci concentriamo sulla tecnica corretta e sui fondamentali per tutti gli studenti.'
        },
        individual: {
          title: 'Attenzione Individuale',
          description: 'Ogni studente riceve istruzione personalizzata per i suoi obiettivi.'
        },
        respect: {
          title: 'Rispetto & Disciplina',
          description: 'Instilliamo valori di rispetto, disciplina e sportività.'
        }
      },
      cta: {
        title: 'Allenati Con I Migliori',
        description: 'Sperimenta istruzione di classe mondiale e porta le tue abilità nelle arti marziali al livello successivo.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il piano di abbonamento che si adatta ai tuoi obiettivi di allenamento e al tuo programma.'
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
        subtitle: 'Programma di allenamento Brazilian Jiu-Jitsu dedicato',
        program: 'Allenamento Focalizzato BJJ',
        description: 'Accesso solo a tutti i corsi BJJ'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa È Incluso',
      mainIncludes: [
        'Accesso illimitato a tutti i corsi',
        'Allenamento in entrambe le sedi',
        'Sessioni di tappeto libero',
        'Istruzione adatta ai principianti',
        'Accesso al team competitivo'
      ],
      summerIncludes: [
        'Tutti i corsi estivi inclusi',
        'Accesso a entrambe le sedi',
        'Programmazione flessibile',
        'Perfetto per principianti',
        'Nessun impegno a lungo termine'
      ],
      bjjIncludes: [
        'Tutti i corsi BJJ inclusi',
        'Allenamento Gi e No-Gi',
        'Accesso a entrambe le sedi',
        'Sistema di progressione cinture',
        'Preparazione alle competizioni'
      ],
      selectMainSeason: 'Seleziona Stagione Principale',
      selectSummerSeason: 'Seleziona Stagione Estiva',
      selectBjjOnly: 'Seleziona Solo BJJ',
      additionalServices: {
        title: 'Servizi Aggiuntivi',
        description: 'Migliora il tuo allenamento con i nostri programmi specializzati.'
      },
      personalTraining: {
        title: 'Allenamento Personale',
        description: 'Istruzione uno-a-uno su misura per i tuoi obiettivi specifici.',
        price: '€50',
        duration: 'per sessione'
      },
      competitionPrep: {
        title: 'Preparazione Competizioni',
        description: 'Allenamento specializzato per preparare competizioni BJJ e MMA.',
        price: '€40',
        duration: 'per sessione'
      },
      seminars: {
        title: 'Seminari',
        description: 'Workshop speciali con istruttori ospiti.',
        price: '€30',
        duration: 'per seminario'
      },
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra le stagioni?',
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro curriculum completo con 10 mesi di allenamento. La stagione estiva (Luglio-Agosto) è un programma più breve.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso ai corsi in entrambe le sedi.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo lezioni di prova per nuovi studenti. Contattaci per programmare la tua prima sessione.'
        },
        equipment: {
          question: 'Che attrezzatura mi serve?',
          answer: 'Per i principianti, forniamo attrezzatura di base. Ti possiamo guidare su cosa acquistare.'
        }
      },
      cta: {
        title: 'Inizia Il Tuo Viaggio',
        description: 'Unisciti alla Sport Academy oggi e diventa parte della nostra famiglia di arti marziali.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Mettiti in contatto con noi per iniziare il tuo viaggio nelle arti marziali o per fare domande sui nostri programmi.'
      },
      getInTouch: {
        title: 'Mettiti In Contatto',
        subtitle: 'Diversi modi per connettersi con la Sport Academy'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      address: 'Indirizzo',
      trainingSchedule: 'Orari di Allenamento',
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due sedi convenienti in Alto Adige'
      },
      visitRequirements: {
        title: 'Prima Volta Qui?',
        subtitle: 'Ecco cosa devi sapere'
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
        'Attrezzatura di base per principianti',
        'Ambiente di allenamento pulito e sicuro',
        'Istruzione esperta e guida',
        'Comunità di allenamento di supporto'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'L\'età per i corsi bambini è 8-14 anni',
        health: 'Ti preghiamo di informarci di eventuali infortuni o condizioni di salute',
        equipment: 'Gli studenti di prova possono prendere in prestito temporaneamente l\'attrezzatura di base',
        payment: 'Contanti e carta sono gli unici metodi di pagamento accettati'
      },
      cta: {
        title: 'Pronto ad Iniziare?',
        description: 'Fai il primo passo verso il tuo viaggio nelle arti marziali. Contattaci oggi!'
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
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione.',
            'Alla Sport Academy, il nostro programma BJJ è progettato per insegnare agli studenti i principi fondamentali di questa bella arte.',
            'Che tu sia interessato all\'autodifesa, alla competizione, o semplicemente vuoi sfidare te stesso fisicamente e mentalmente.'
          ]
        },
        techniques: {
          title: 'Tecniche BJJ Fondamentali',
          subtitle: 'Padroneggia le abilità fondamentali che formano la base del Brazilian Jiu-Jitsu'
        },
        beltSystem: {
          title: 'Progressione Cinture BJJ',
          subtitle: 'Il tuo viaggio attraverso i gradi del Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Il Viaggio, Non La Destinazione',
            description: 'Nel Brazilian Jiu-Jitsu, ogni cintura rappresenta anni di allenamento dedicato e crescita personale.'
          }
        },
        history: {
          title: 'Storia del BJJ',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu fu sviluppato all\'inizio del XX secolo quando il maestro giapponese Mitsuyo Maeda insegnò alla famiglia Gracie in Brasile.',
            'L\'arte ottenne riconoscimento mondiale quando Royce Gracie dominò i primi tornei UFC.'
          ],
          keyFigures: {
            title: 'Figure Chiave',
            people: [
              {
                name: 'Mitsuyo Maeda',
                description: 'Maestro giapponese che portò il jujitsu in Brasile'
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
          title: 'Orari Allenamento BJJ',
          subtitle: 'Corsi regolari disponibili in entrambe le sedi'
        },
        cta: {
          title: 'Inizia Il Tuo Viaggio BJJ',
          description: 'Unisciti al nostro programma Brazilian Jiu-Jitsu e scopri l\'arte gentile.',
          joinButton: 'Unisciti al Programma BJJ'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Submission wrestling no-gi che enfatizza velocità, atletismo e adattabilità'
        },
        overview: {
          title: 'L\'Arte del Grappling',
          paragraphs: [
            'Il Grappling, noto anche come submission wrestling o no-gi jiu-jitsu, si concentra su takedown e sottomissioni senza l\'uniforme gi.',
            'Questa disciplina dinamica enfatizza velocità, atletismo e adattabilità.',
            'Alla Sport Academy, il nostro programma di grappling insegna agli studenti ad eccellere nel mondo veloce della competizione no-gi.'
          ]
        },
        techniques: {
          title: 'Tecniche Essenziali di Grappling',
          subtitle: 'Padroneggia le abilità fondamentali del submission wrestling no-gi'
        },
        methodology: {
          title: 'Metodologia di Allenamento',
          subtitle: 'Il nostro approccio sistematico all\'eccellenza nel grappling',
          technical: {
            title: 'Sviluppo Tecnico',
            methods: [
              {
                title: 'Posizione Prima della Sottomissione',
                description: 'Padroneggia le posizioni di controllo prima di tentare sottomissioni'
              },
              {
                title: 'Chain Wrestling',
                description: 'Impara a collegare le tecniche in sequenze fluide'
              },
              {
                title: 'Pressione e Timing',
                description: 'Sviluppa la capacità di applicare pressione e riconoscere opportunità'
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
                title: 'Flessibilità e Mobilità',
                description: 'Mantieni il range di movimento e previeni infortuni'
              },
              {
                title: 'Forza Mentale',
                description: 'Sviluppa la mentalità per perseverare sotto pressione'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici del Grappling',
          subtitle: 'Perché l\'allenamento di grappling trasforma corpo e mente',
          items: [
            {
              icon: '💪',
              title: 'Forza Totale',
              description: 'Sviluppa forza funzionale e resistenza muscolare'
            },
            {
              icon: '🧠',
              title: 'Scacchi Mentali',
              description: 'Migliora la risoluzione dei problemi e il pensiero strategico'
            },
            {
              icon: '⚡',
              title: 'Potenza Esplosiva',
              description: 'Costruisci velocità e capacità di movimento esplosivo'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Impara abilità pratiche per situazioni reali'
            }
          ]
        },
        schedule: {
          title: 'Orari Allenamento Grappling',
          subtitle: 'Sessioni no-gi ad alta intensità in entrambe le sedi'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Icone che hanno plasmato lo sport del submission wrestling',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Maestro Catch Wrestling',
              description: 'Veterano MMA ed esperto di catch wrestling'
            },
            {
              name: 'Dean Lister',
              title: 'Pioniere Leg Lock',
              description: 'Specialista rivoluzionario degli attacchi alle gambe'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Leggenda No-Gi',
              description: 'Campione ADCC multiplo'
            }
          ]
        },
        cta: {
          title: 'Padroneggia L\'Arte del Grappling',
          description: 'Unisciti al nostro programma di grappling e sviluppa le abilità per eccellere nella competizione no-gi.',
          joinButton: 'Unisciti al Programma Grappling'
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
            'Le Arti Marziali Miste (MMA) sono la forma più completa di sport da combattimento, combinando tecniche da diverse discipline.',
            'Alla Sport Academy, il nostro programma MMA è progettato per insegnare tutti gli aspetti del combattimento.',
            'Che il tuo obiettivo sia fitness, autodifesa o competizione, il nostro allenamento MMA completo ti sfiderà.'
          ]
        },
        techniques: {
          title: 'Set di Abilità MMA',
          subtitle: 'Padroneggia tutti i range di combattimento nelle arti marziali miste'
        },
        history: {
          title: 'Evoluzione delle MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche, ma le MMA moderne iniziarono con l\'Ultimate Fighting Championship nel 1993.',
            'Nel tempo, i fighter si resero conto che dovevano essere versatili in tutti gli aspetti del combattimento.'
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
                description: 'Regole unificate stabilite per le MMA professionali'
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
          subtitle: 'Perché le MMA sono l\'allenamento definitivo e il sistema di autodifesa',
          items: [
            {
              icon: '🥊',
              title: 'Fitness Completo',
              description: 'Allenamento total body che combina cardio e forza'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Impara a difenderti in qualsiasi situazione'
            },
            {
              icon: '🧠',
              title: 'Forza Mentale',
              description: 'Costruisci fiducia e resilienza mentale'
            },
            {
              icon: '⚡',
              title: 'Potenza Esplosiva',
              description: 'Sviluppa velocità, potenza e atletismo'
            }
          ]
        },
        schedule: {
          title: 'Orari Allenamento MMA',
          subtitle: 'Sessioni complete di allenamento arti marziali miste'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Fighter che hanno definito le arti marziali miste',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'Pioniere UFC',
              description: 'Dimostrò l\'efficacia del Brazilian Jiu-Jitsu'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Campione dei pesi medi UFC più longevo'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Considerato da molti il più grande peso massimo'
            }
          ]
        },
        cta: {
          title: 'Diventa Un Fighter Completo',
          description: 'Unisciti al nostro programma MMA e padroneggia tutti gli aspetti delle arti marziali miste.',
          joinButton: 'Unisciti al Programma MMA'
        }
      }
    },
    common: {
      joinNow: 'Unisciti Ora',
      viewClasses: 'Vedi Corsi',
      viewSchedule: 'Vedi Orari',
      viewMembership: 'Vedi Abbonamenti',
      contactUs: 'Contattaci',
      learnMore: 'Scopri di Più',
      allLevels: 'Tutti i Livelli',
      ages: 'Età',
      joinSportAcademy: 'Unisciti alla Sport Academy',
      callNow: 'Chiama Ora',
      registerOnline: 'Registrati Online',
      bookClasses: 'Prenota Corsi',
      instantConfirmation: 'Conferma Istantanea',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM',
      visitUs: 'Visitaci',
      dropInWelcome: 'Drop-in Benvenuto',
      duringTrainingHours: 'Durante gli orari di allenamento'
    },
    footer: {
      tagline: 'Allenamento Elite MMA, BJJ & Grappling',
      subtitle: 'Forgiamo Fighter Dal 2017',
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

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};