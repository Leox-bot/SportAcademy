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
      bookClasses: 'Book Classes',
      registerOnline: 'Register Online',
      instantConfirmation: 'Instant Confirmation',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates and DMs',
      dropInWelcome: 'Drop-in Welcome',
      duringTrainingHours: 'During training hours',
      visitUs: 'Visit Us'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Founded in 2017, Sport Academy has been the premier destination for MMA, Brazilian Jiu-Jitsu, and Grappling training in South Tyrol. Our expert coaches Matteo Parolin and Christian Zecchetto bring world-class instruction to fighters of all levels.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Founded in 2017',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Training Programs',
        programsDescription: 'MMA, BJJ, Grappling & More',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Choose your discipline and start your martial arts journey'
      },
      mma: {
        description: 'Complete combat sport combining striking, wrestling, and ground fighting for the ultimate martial arts experience.'
      },
      bjj: {
        description: 'The gentle art that focuses on leverage and technique over strength, perfect for all body types and skill levels.'
      },
      grappling: {
        description: 'Dynamic no-gi combat sport emphasizing takedowns, control, and submissions in a realistic training environment.'
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
        description: 'Discover our comprehensive martial arts programs designed for all skill levels. From complete beginners to experienced fighters, we have the perfect training program for you.'
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
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling techniques focusing on takedowns, control, and conditioning.',
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
      membershipBenefits: 'Membership Benefits',
      guidelines: {
        arrive: 'Arrive 10 minutes early to warm up',
        water: 'Bring water bottle and towel',
        gi: 'BJJ classes require gi (uniform)',
        noGi: 'Grappling and MMA are no-gi classes'
      },
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
          'Youth Development Programs'
        ],
        achievements: [
          'BJJ Black Belt under renowned lineage',
          'Multiple regional MMA championship titles',
          'Over 100 students trained to competition level',
          'Certified instructor in multiple disciplines'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings a wealth of knowledge in grappling and wrestling techniques. His technical precision and ability to break down complex movements make him an exceptional instructor for students of all levels.',
        specializations: [
          'No-Gi Grappling',
          'Wrestling Techniques',
          'Takedown Specialists',
          'Conditioning Programs'
        ],
        achievements: [
          'Regional grappling champion',
          'Specialized wrestling certification',
          'Expert in takedown techniques',
          'Strength and conditioning specialist'
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
        description: 'Learn from experienced coaches who are dedicated to helping you achieve your martial arts goals.'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the perfect training package for your goals and schedule. All memberships include access to our complete range of classes and both training locations.'
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
        subtitle: 'Perfect for those who want to focus exclusively on Brazilian Jiu-Jitsu',
        program: 'BJJ Focused Program',
        description: 'Access to all BJJ classes at both locations'
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
        'Perfect for beginners'
      ],
      bjjIncludes: [
        'All BJJ classes included',
        'Both locations access',
        'Gi and No-Gi training',
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
        description: 'Specialized training programs for upcoming competitions and tournaments.',
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
          answer: 'Our main season runs September through June (10 months) and includes our full curriculum. Summer season is a shorter, more flexible program perfect for trying out our classes or maintaining training during summer months.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to classes at both our Campo Tures and Brunico locations. You can mix and match based on your schedule.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer a free trial class for new students. Contact us to schedule your trial and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For your first class, just bring comfortable workout clothes and water. We\'ll provide guidance on any specific equipment needed for your chosen disciplines.'
        }
      },
      cta: {
        title: 'Ready to Join Our Academy?',
        description: 'Start your martial arts journey today with our world-class training programs.'
      }
    },
    contact: {
      hero: {
        title: 'Contact Us',
        description: 'Ready to start your martial arts journey? Get in touch with us today to learn more about our programs or schedule your first class.'
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
        title: 'First Time Visiting?',
        subtitle: 'Everything you need to know for your first class'
      },
      firstTimeVisitors: 'First Time Visitors',
      whatToBring: 'What to Bring',
      whatWeProvide: 'What We Provide',
      bring: [
        'Comfortable workout clothes',
        'Water bottle and towel',
        'Positive attitude and willingness to learn',
        'Athletic shoes (for striking classes)'
      ],
      provide: [
        'All training mats and equipment',
        'Beginner-friendly instruction',
        'Safe and welcoming environment',
        'Loaner gear for first-time students'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Minimum Age: 16 for adult classes, 8 for kids BJJ',
        health: 'Health: Please inform us of any injuries or health conditions',
        equipment: 'Equipment: We provide loaner gear for your first few classes',
        payment: 'Payment: Cash, card, or bank transfer accepted'
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Take the first step towards your martial arts goals. Contact us today to get started.'
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
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. Developed from traditional Japanese jujitsu and judo, BJJ emphasizes technique and leverage over strength and size.',
            'Often called "the gentle art," BJJ allows smaller practitioners to successfully defend against larger opponents through proper technique, timing, and leverage. This makes it an ideal martial art for people of all ages, sizes, and fitness levels.',
            'At Sport Academy, our BJJ program follows traditional Brazilian methodology while incorporating modern training techniques to ensure rapid skill development and injury prevention.'
          ]
        },
        techniques: {
          title: 'Core BJJ Techniques',
          subtitle: 'Master the fundamental skills that form the foundation of Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard Work',
            items: [
              'Closed Guard Control',
              'Open Guard Variations',
              'Guard Sweeps',
              'Guard Submissions'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Arm Locks (Armbar, Kimura)',
              'Chokes (RNC, Triangle)',
              'Leg Locks',
              'Submission Escapes'
            ]
          },
          positions: {
            title: 'Positions',
            items: [
              'Mount and Side Control',
              'Back Control',
              'Knee on Belly',
              'Transitional Movements'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the traditional Brazilian Jiu-Jitsu ranking system',
          philosophy: {
            title: 'Belt Philosophy',
            description: 'In BJJ, belt progression represents not just technical knowledge, but also character development, teaching ability, and time on the mats. Each belt typically takes 2-3 years to achieve, emphasizing the journey over the destination.'
          }
        },
        history: {
          title: 'History of BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu was developed in the early 20th century when Japanese judoka Mitsuyo Maeda taught the Gracie family in Brazil. The Gracies, particularly Helio Gracie, adapted the techniques to work for smaller practitioners.',
            'The art gained worldwide recognition when Royce Gracie dominated the early UFC tournaments, proving that technique could overcome size and strength. This led to BJJ becoming a fundamental component of modern mixed martial arts.'
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
                description: 'Founder of Gracie Jiu-Jitsu and BJJ methodology'
              },
              {
                name: 'Royce Gracie',
                description: 'UFC pioneer who proved BJJ\'s effectiveness'
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
          description: 'Experience the gentle art that has transformed martial arts worldwide.',
          joinButton: 'Join BJJ Classes'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Dynamic no-gi combat sport emphasizing takedowns, control, and submissions'
        },
        overview: {
          title: 'What is Grappling?',
          paragraphs: [
            'Grappling is a dynamic combat sport that focuses on takedowns, ground control, and submissions without the use of a gi (uniform). It combines elements from wrestling, Brazilian Jiu-Jitsu, and judo to create a comprehensive grappling system.',
            'Unlike traditional BJJ, grappling is practiced in athletic wear, making it faster-paced and more applicable to real-world self-defense situations. The absence of gi grips changes the dynamics significantly, requiring different strategies and techniques.',
            'Our grappling program at Sport Academy emphasizes both sport grappling and practical application, making it perfect for MMA preparation or those seeking effective self-defense skills.'
          ]
        },
        techniques: {
          title: 'Core Grappling Techniques',
          subtitle: 'Master the essential skills of no-gi grappling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single and Double Leg Takedowns',
              'Hip Tosses and Throws',
              'Foot Sweeps',
              'Takedown Defense'
            ]
          },
          control: {
            title: 'Control Positions',
            items: [
              'Side Control and Mount',
              'Back Control',
              'Knee on Belly',
              'Sprawl and Turtle Control'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Rear Naked Choke',
              'Guillotine Choke',
              'Arm Locks and Leg Locks',
              'Submission Chains'
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
                description: 'Continuous movement practice at controlled intensity'
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
          subtitle: 'Physical and mental advantages of no-gi grappling training',
          items: [
            {
              icon: '💪',
              title: 'Full Body Strength',
              description: 'Develops functional strength and endurance'
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
          title: 'Grappling Training Schedule',
          subtitle: 'Join our dynamic grappling classes'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Learn from the techniques developed by grappling pioneers',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominant no-gi grappler and submission specialist'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Multiple-time World Champion',
              description: 'Technical master known for his butterfly guard'
            },
            {
              name: 'John Danaher',
              title: 'Renowned Coach',
              description: 'Revolutionary instructor and system developer'
            }
          ]
        },
        cta: {
          title: 'Master the Art of Grappling',
          description: 'Develop the skills that form the foundation of modern combat sports.',
          joinButton: 'Join Grappling Classes'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining striking, wrestling, and ground fighting'
        },
        overview: {
          title: 'What is MMA?',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, kickboxing, wrestling, Brazilian Jiu-Jitsu, and other martial arts. It represents the evolution of combat sports into a comprehensive fighting system.',
            'MMA tests fighters in all ranges of combat: standing striking, clinch work, takedowns, and ground fighting. This makes it the most realistic and demanding martial art for self-defense and overall combat preparation.',
            'Our MMA program at Sport Academy provides structured training in all aspects of mixed martial arts, from fundamental techniques to advanced fight strategies, suitable for both fitness enthusiasts and aspiring competitors.'
          ]
        },
        techniques: {
          title: 'MMA Techniques',
          subtitle: 'Master all ranges of combat in mixed martial arts',
          striking: {
            title: 'Striking',
            items: [
              'Boxing: Punches and Footwork',
              'Kickboxing: Kicks and Knees',
              'Muay Thai: Elbows and Clinch',
              'Defensive Techniques'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown Techniques',
              'Takedown Defense',
              'Cage Wrestling',
              'Ground and Pound'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'BJJ for MMA',
              'Submission Grappling',
              'Ground Control',
              'Submission Defense'
            ]
          }
        },
        history: {
          title: 'History of MMA',
          paragraphs: [
            'Modern MMA began with the Ultimate Fighting Championship (UFC) in 1993, designed to determine the most effective martial art. Early tournaments featured specialists from different disciplines competing with minimal rules.',
            'The sport evolved rapidly as fighters realized the need to be well-rounded. Brazilian Jiu-Jitsu initially dominated, but successful fighters soon incorporated striking, wrestling, and submission grappling into their training.',
            'Today\'s MMA represents the pinnacle of martial arts evolution, with athletes training in multiple disciplines to compete at the highest levels of combat sports.'
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
                description: 'Evolution toward well-rounded fighters and unified rules'
              },
              {
                year: '2010s',
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
              title: 'Complete Fighting',
              description: 'Master all ranges of combat'
            },
            {
              icon: '💪',
              title: 'Peak Fitness',
              description: 'Ultimate cardiovascular and strength conditioning'
            },
            {
              icon: '🧠',
              title: 'Mental Strength',
              description: 'Develop confidence and mental toughness'
            },
            {
              icon: '⚡',
              title: 'Real Application',
              description: 'Most practical self-defense skills'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Comprehensive mixed martial arts training'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Learn from the greatest mixed martial artists in history',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'Former UFC Middleweight Champion',
              description: 'Legendary striker with the longest title reign in UFC history'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'PRIDE Heavyweight Champion',
              description: 'Considered by many as the greatest heavyweight of all time'
            },
            {
              name: 'Jon Jones',
              title: 'Former UFC Light Heavyweight Champion',
              description: 'Dominant champion known for his versatile skill set'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Train in the world\'s most comprehensive combat sport.',
          joinButton: 'Join MMA Classes'
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
      bookClasses: 'Kurse Buchen',
      registerOnline: 'Online Registrieren',
      instantConfirmation: 'Sofortige Bestätigung',
      responseWithin2Hours: 'Antwort innerhalb von 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates und DMs',
      dropInWelcome: 'Drop-in Willkommen',
      duringTrainingHours: 'Während der Trainingszeiten',
      visitUs: 'Besuchen Sie Uns'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Willkommen bei der Sport Academy',
        description: 'Gegründet 2017, ist die Sport Academy das führende Zentrum für MMA, Brazilian Jiu-Jitsu und Grappling Training in Südtirol. Unsere Experten-Trainer Matteo Parolin und Christian Zecchetto bringen Weltklasse-Unterricht für Kämpfer aller Stufen.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Gegründet 2017',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'MMA, BJJ, Grappling & Mehr',
        exploreClasses: 'Unsere Kurse Entdecken'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Wähle deine Disziplin und beginne deine Kampfsport-Reise'
      },
      mma: {
        description: 'Kompletter Kampfsport, der Schlagen, Ringen und Bodenkampf für das ultimative Kampfsport-Erlebnis kombiniert.'
      },
      bjj: {
        description: 'Die sanfte Kunst, die sich auf Hebelwirkung und Technik über Kraft konzentriert, perfekt für alle Körpertypen und Fähigkeitsstufen.'
      },
      grappling: {
        description: 'Dynamischer No-Gi Kampfsport mit Schwerpunkt auf Takedowns, Kontrolle und Submissions in einer realistischen Trainingsumgebung.'
      },
      getStarted: {
        title: 'Heute Beginnen',
        subtitle: 'Alles was Sie brauchen, um Ihre Kampfsport-Reise zu beginnen'
      },
      quickLinks: {
        viewClasses: 'Kurse Ansehen',
        viewClassesDesc: 'Entdecken Sie unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan Prüfen',
        checkScheduleDesc: 'Finden Sie Ihre perfekte Trainingszeit',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wählen Sie Ihr Trainingspaket',
        contactUs: 'Kontakt',
        contactUsDesc: 'Kontaktieren Sie unser Team'
      }
    },
    classes: {
      hero: {
        title: 'Unsere Kurse',
        description: 'Entdecken Sie unsere umfassenden Kampfsportprogramme für alle Fähigkeitsstufen. Von kompletten Anfängern bis zu erfahrenen Kämpfern haben wir das perfekte Trainingsprogramm für Sie.'
      },
      mma: {
        title: 'MMA Kurs (Mixed Martial Arts)',
        description: 'MMA ist ein kompletter Kampfsport, der Schlagen, Ringen und Bodenkampf kombiniert. Es ist ideal für diejenigen, die eine vielseitige, realistische und körperlich anspruchsvolle Disziplin suchen.',
        features: [
          'Schlagtechniken: Schläge, Tritte, Ellbogen, Knie',
          'Takedowns und Clinch-Arbeit (Ringen und Judo)',
          'Bodenkontrolle und Submissions (BJJ-basiert)',
          'Körperliche Konditionierung und Druckmanagement'
        ]
      },
      bjj: {
        title: 'BJJ Kurs (Brazilian Jiu-Jitsu)',
        description: 'Brazilian Jiu-Jitsu konzentriert sich auf Bodenkampf und Submissions unter Verwendung von Hebelwirkung und Technik über Kraft. Es ist eine strategische, hochwirksame Kampfkunst, die für alle Stufen und Körpertypen geeignet ist.',
        features: [
          'Wichtige Bodenpositionen und Übergänge',
          'Submission-Techniken und wie man sie verteidigt',
          'Wie man Gegner kontrolliert und schlechten Positionen entkommt',
          'Fokus, Disziplin und Selbstvertrauen-Entwicklung'
        ]
      },
      grappling: {
        title: 'Grappling Kurs',
        description: 'Grappling ist ein Kampfsport ohne Schläge, basierend auf Takedowns, Kontrolle und Submissions, praktiziert ohne Gi. Es ist realistisch, dynamisch und wird häufig im MMA- und Selbstverteidigungstraining verwendet.',
        features: [
          'Takedown-Techniken und Verteidigung aus dem Stand',
          'Guard Passing und Bodenkontrolle',
          'Gelenkhebel und Würge-Submissions',
          'Beweglichkeit, Balance und Körperbewusstsein'
        ]
      },
      kidsBjj: {
        title: 'BJJ Kurs für Kinder (Alter 8–14)',
        description: 'Ein strukturierter Kurs für Kinder im Alter von 8 bis 14 Jahren, der sie in einer sicheren und positiven Umgebung an Brazilian Jiu-Jitsu heranführt. Durch Technik und spielerische Übungen bauen Kinder körperliche und geistige Fähigkeiten auf und haben dabei Spaß.',
        features: [
          'Grundlegende BJJ-Bewegungen, Positionen und einfache Submissions',
          'Wie man sicher fällt, rollt und sich am Boden bewegt',
          'Respekt vor Regeln, Lehrern und Teamkameraden',
          'Selbstvertrauen, Disziplin und emotionale Kontrolle'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelle Wrestling-Techniken mit Fokus auf Takedowns, Kontrolle und Konditionierung.',
        features: [
          'Einzel- und Doppelbein-Takedowns',
          'Wrestling-Haltung und Bewegung',
          'Sprawls und Takedown-Verteidigung',
          'Konditionierung und mentale Stärke'
        ]
      },
      whatYouLearn: 'Was Sie Lernen',
      cta: {
        title: 'Bereit Zu Trainieren?',
        description: 'Treten Sie unserer Gemeinschaft engagierter Kampfsportler bei und beginnen Sie heute Ihre Reise.'
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
      striking: 'Striking',
      openMat: 'Open Mat',
      importantInfo: 'Wichtige Informationen',
      classGuidelines: 'Kurs-Richtlinien',
      membershipBenefits: 'Mitgliedschaftsvorteile',
      guidelines: {
        arrive: '10 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'BJJ-Kurse erfordern Gi (Uniform)',
        noGi: 'Grappling und MMA sind No-Gi Kurse'
      },
      benefits: {
        allClasses: 'Zugang zu allen Kursen inklusive',
        openMat: 'Kostenlose Open Mat Sessions',
        bothLocations: 'Training an beiden Standorten',
        personalTraining: 'Ermäßigtes Personaltraining'
      },
      cta: {
        title: 'Bereit Einem Kurs Beizutreten?',
        description: 'Buchen Sie Ihren Platz in unserer nächsten Trainingseinheit und beginnen Sie Ihre Kampfsport-Reise.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lernen Sie unsere Weltklasse-Instruktoren kennen, die jahrzehntelange Erfahrung und Expertise auf Meisterschaftsniveau in jede Trainingseinheit einbringen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 15 Jahren Kampfsporterfahrung ist Matteo ein zertifizierter BJJ-Schwarzgurt und erfolgreicher MMA-Kämpfer. Er gründete die Sport Academy 2017 mit der Vision, Weltklasse-Kampfsporttraining nach Südtirol zu bringen.',
        specializations: [
          'Brazilian Jiu-Jitsu (Schwarzgurt)',
          'Mixed Martial Arts',
          'Wettkampfvorbereitung',
          'Jugendentwicklungsprogramme'
        ],
        achievements: [
          'BJJ-Schwarzgurt unter renommierter Linie',
          'Mehrere regionale MMA-Meistertitel',
          'Über 100 Schüler auf Wettkampfniveau trainiert',
          'Zertifizierter Instruktor in mehreren Disziplinen'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt eine Fülle von Wissen in Grappling- und Wrestling-Techniken mit. Seine technische Präzision und Fähigkeit, komplexe Bewegungen zu erklären, machen ihn zu einem außergewöhnlichen Instruktor für Schüler aller Stufen.',
        specializations: [
          'No-Gi Grappling',
          'Wrestling-Techniken',
          'Takedown-Spezialist',
          'Konditionierungsprogramme'
        ],
        achievements: [
          'Regionaler Grappling-Meister',
          'Spezialisierte Wrestling-Zertifizierung',
          'Experte für Takedown-Techniken',
          'Kraft- und Konditionierungsspezialist'
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
        title: 'Mit Den Besten Trainieren',
        description: 'Lernen Sie von erfahrenen Trainern, die sich dafür einsetzen, Ihnen beim Erreichen Ihrer Kampfsportziele zu helfen.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wählen Sie das perfekte Trainingspaket für Ihre Ziele und Ihren Zeitplan. Alle Mitgliedschaften beinhalten Zugang zu unserem kompletten Kursangebot und beiden Trainingsstandorten.'
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
        subtitle: 'Perfekt für diejenigen, die sich ausschließlich auf Brazilian Jiu-Jitsu konzentrieren möchten',
        program: 'BJJ-Fokussiertes Programm',
        description: 'Zugang zu allen BJJ-Kursen an beiden Standorten'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was Ist Enthalten',
      mainIncludes: [
        'Unbegrenzter Zugang zu allen Kursen',
        'Training an beiden Standorten',
        'Open Mat Sessions',
        'Anfängerfreundlicher Unterricht',
        'Zugang zum Wettkampfteam'
      ],
      summerIncludes: [
        'Alle Sommerkurse enthalten',
        'Zugang zu beiden Standorten',
        'Flexible Terminplanung',
        'Perfekt für Anfänger'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse enthalten',
        'Zugang zu beiden Standorten',
        'Gi und No-Gi Training',
        'Wettkampfvorbereitung'
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
        description: 'Eins-zu-eins Coaching, zugeschnitten auf Ihre spezifischen Ziele und Bedürfnisse.',
        price: '€50',
        duration: 'pro Sitzung'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisierte Trainingsprogramme für bevorstehende Wettkämpfe und Turniere.',
        price: '€80',
        duration: 'pro Sitzung'
      },
      seminars: {
        title: 'Seminare',
        description: 'Spezielle Workshops mit Gastinstruktoren und fortgeschrittene Techniksitzungen.',
        price: '€30',
        duration: 'pro Seminar'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Unsere Hauptsaison läuft von September bis Juni (10 Monate) und umfasst unser vollständiges Curriculum. Die Sommersaison ist ein kürzeres, flexibleres Programm, perfekt zum Ausprobieren unserer Kurse oder zur Aufrechterhaltung des Trainings während der Sommermonate.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu Kursen an beiden Standorten Campo Tures und Brunico. Sie können je nach Zeitplan mischen und anpassen.'
        },
        trial: {
          question: 'Bieten Sie Probestunden an?',
          answer: 'Absolut! Wir bieten eine kostenlose Probestunde für neue Schüler an. Kontaktieren Sie uns, um Ihre Probestunde zu planen und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Ihre erste Stunde bringen Sie einfach bequeme Trainingskleidung und Wasser mit. Wir geben Ihnen Anleitung zu jeder spezifischen Ausrüstung, die für Ihre gewählten Disziplinen benötigt wird.'
        }
      },
      cta: {
        title: 'Bereit Unserer Academy Beizutreten?',
        description: 'Beginnen Sie heute Ihre Kampfsport-Reise mit unseren Weltklasse-Trainingsprogrammen.'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Bereit, Ihre Kampfsport-Reise zu beginnen? Kontaktieren Sie uns heute, um mehr über unsere Programme zu erfahren oder Ihre erste Stunde zu planen.'
      },
      getInTouch: {
        title: 'Kontakt Aufnehmen',
        subtitle: 'Mehrere Wege, um mit unserem Team in Kontakt zu treten'
      },
      callUs: 'Rufen Sie Uns An',
      instagram: 'Instagram',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei bequeme Trainingseinrichtungen in Südtirol'
      },
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      visitRequirements: {
        title: 'Zum Ersten Mal Hier?',
        subtitle: 'Alles was Sie für Ihre erste Stunde wissen müssen'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was Mitbringen',
      whatWeProvide: 'Was Wir Bereitstellen',
      bring: [
        'Bequeme Trainingskleidung',
        'Wasserflasche und Handtuch',
        'Positive Einstellung und Lernbereitschaft',
        'Sportschuhe (für Schlagkurse)'
      ],
      provide: [
        'Alle Trainingsmatten und Ausrüstung',
        'Anfängerfreundlicher Unterricht',
        'Sichere und einladende Umgebung',
        'Leihausrüstung für Erstschüler'
      ],
      specialInstructions: 'Spezielle Anweisungen',
      instructions: {
        age: 'Mindestalter: 16 für Erwachsenenkurse, 8 für Kinder-BJJ',
        health: 'Gesundheit: Bitte informieren Sie uns über Verletzungen oder Gesundheitszustände',
        equipment: 'Ausrüstung: Wir stellen Leihausrüstung für Ihre ersten Stunden zur Verfügung',
        payment: 'Zahlung: Bar, Karte oder Banküberweisung akzeptiert'
      },
      cta: {
        title: 'Bereit Zu Beginnen?',
        description: 'Machen Sie den ersten Schritt zu Ihren Kampfsportzielen. Kontaktieren Sie uns heute, um loszulegen.'
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
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Entwickelt aus traditionellem japanischen Jujitsu und Judo, betont BJJ Technik und Hebelwirkung über Kraft und Größe.',
            'Oft als "die sanfte Kunst" bezeichnet, ermöglicht BJJ kleineren Praktizierenden, sich erfolgreich gegen größere Gegner zu verteidigen durch richtige Technik, Timing und Hebelwirkung. Dies macht es zu einer idealen Kampfkunst für Menschen aller Altersgruppen, Größen und Fitnessniveaus.',
            'In der Sport Academy folgt unser BJJ-Programm traditioneller brasilianischer Methodik und integriert moderne Trainingstechniken, um schnelle Fähigkeitsentwicklung und Verletzungsprävention zu gewährleisten.'
          ]
        },
        techniques: {
          title: 'Kern-BJJ-Techniken',
          subtitle: 'Meistern Sie die grundlegenden Fähigkeiten, die das Fundament des Brazilian Jiu-Jitsu bilden',
          guardWork: {
            title: 'Guard-Arbeit',
            items: [
              'Closed Guard Kontrolle',
              'Open Guard Variationen',
              'Guard Sweeps',
              'Guard Submissions'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Armhebel (Armbar, Kimura)',
              'Würgegriffe (RNC, Triangle)',
              'Beinhebel',
              'Submission-Verteidigung'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Side Control',
              'Back Control',
              'Knee on Belly',
              'Übergangsbewegungen'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ-Gurtsystem',
          subtitle: 'Fortschritt durch das traditionelle Brazilian Jiu-Jitsu Rangsystem',
          philosophy: {
            title: 'Gurt-Philosophie',
            description: 'Im BJJ repräsentiert Gurtfortschritt nicht nur technisches Wissen, sondern auch Charakterentwicklung, Lehrfähigkeit und Zeit auf den Matten. Jeder Gurt dauert typischerweise 2-3 Jahre, wobei die Reise über das Ziel betont wird.'
          }
        },
        history: {
          title: 'Geschichte des BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu wurde im frühen 20. Jahrhundert entwickelt, als der japanische Judoka Mitsuyo Maeda die Gracie-Familie in Brasilien unterrichtete. Die Gracies, besonders Helio Gracie, passten die Techniken an, um für kleinere Praktizierende zu funktionieren.',
            'Die Kunst erlangte weltweite Anerkennung, als Royce Gracie die frühen UFC-Turniere dominierte und bewies, dass Technik Größe und Kraft überwinden kann. Dies führte dazu, dass BJJ zu einem grundlegenden Bestandteil der modernen Mixed Martial Arts wurde.'
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
                description: 'Gründer des Gracie Jiu-Jitsu und der BJJ-Methodik'
              },
              {
                name: 'Royce Gracie',
                description: 'UFC-Pionier, der die Wirksamkeit des BJJ bewies'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ-Trainingsplan',
          subtitle: 'Nehmen Sie an unseren regelmäßigen BJJ-Kursen an beiden Standorten teil'
        },
        cta: {
          title: 'Beginnen Sie Ihre BJJ-Reise',
          description: 'Erleben Sie die sanfte Kunst, die die Kampfkünste weltweit transformiert hat.',
          joinButton: 'BJJ-Kursen Beitreten'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Dynamischer No-Gi Kampfsport mit Schwerpunkt auf Takedowns, Kontrolle und Submissions'
        },
        overview: {
          title: 'Was ist Grappling?',
          paragraphs: [
            'Grappling ist ein dynamischer Kampfsport, der sich auf Takedowns, Bodenkontrolle und Submissions ohne Verwendung eines Gi (Uniform) konzentriert. Es kombiniert Elemente aus Wrestling, Brazilian Jiu-Jitsu und Judo zu einem umfassenden Grappling-System.',
            'Im Gegensatz zu traditionellem BJJ wird Grappling in Sportkleidung praktiziert, was es schneller und anwendbarer für reale Selbstverteidigungssituationen macht. Das Fehlen von Gi-Griffen verändert die Dynamik erheblich und erfordert verschiedene Strategien und Techniken.',
            'Unser Grappling-Programm in der Sport Academy betont sowohl Sport-Grappling als auch praktische Anwendung, was es perfekt für MMA-Vorbereitung oder diejenigen macht, die effektive Selbstverteidigungsfähigkeiten suchen.'
          ]
        },
        techniques: {
          title: 'Kern-Grappling-Techniken',
          subtitle: 'Meistern Sie die wesentlichen Fähigkeiten des No-Gi Grappling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Einzel- und Doppelbein-Takedowns',
              'Hüftwürfe und Würfe',
              'Fußfeger',
              'Takedown-Verteidigung'
            ]
          },
          control: {
            title: 'Kontrollpositionen',
            items: [
              'Side Control und Mount',
              'Back Control',
              'Knee on Belly',
              'Sprawl und Turtle Control'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Rear Naked Choke',
              'Guillotine Choke',
              'Armhebel und Beinhebel',
              'Submission-Ketten'
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
                description: 'Kontinuierliche Bewegungspraxis bei kontrollierter Intensität'
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
                description: 'Mobilitätsarbeit für Verletzungsprävention und Leistung'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grappling',
          subtitle: 'Körperliche und geistige Vorteile des No-Gi Grappling-Trainings',
          items: [
            {
              icon: '💪',
              title: 'Ganzkörperkraft',
              description: 'Entwickelt funktionale Kraft und Ausdauer'
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
          title: 'Grappling-Trainingsplan',
          subtitle: 'Nehmen Sie an unseren dynamischen Grappling-Kursen teil'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Lernen Sie von den Techniken, die von Grappling-Pionieren entwickelt wurden',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'ADCC-Champion',
              description: 'Dominanter No-Gi Grappler und Submission-Spezialist'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Mehrfacher Weltmeister',
              description: 'Technischer Meister bekannt für seine Butterfly Guard'
            },
            {
              name: 'John Danaher',
              title: 'Renommierter Trainer',
              description: 'Revolutionärer Instruktor und Systementwickler'
            }
          ]
        },
        cta: {
          title: 'Meistern Sie Die Kunst Des Grappling',
          description: 'Entwickeln Sie die Fähigkeiten, die das Fundament moderner Kampfsportarten bilden.',
          joinButton: 'Grappling-Kursen Beitreten'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der Schlagen, Ringen und Bodenkampf kombiniert'
        },
        overview: {
          title: 'Was ist MMA?',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der vollständigste Kampfsport, der Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkünsten kombiniert. Es repräsentiert die Evolution der Kampfsportarten zu einem umfassenden Kampfsystem.',
            'MMA testet Kämpfer in allen Kampfbereichen: Stehschlagen, Clinch-Arbeit, Takedowns und Bodenkampf. Dies macht es zur realistischsten und anspruchsvollsten Kampfkunst für Selbstverteidigung und allgemeine Kampfvorbereitung.',
            'Unser MMA-Programm in der Sport Academy bietet strukturiertes Training in allen Aspekten der Mixed Martial Arts, von grundlegenden Techniken bis zu fortgeschrittenen Kampfstrategien, geeignet sowohl für Fitness-Enthusiasten als auch angehende Wettkämpfer.'
          ]
        },
        techniques: {
          title: 'MMA-Techniken',
          subtitle: 'Meistern Sie alle Kampfbereiche in Mixed Martial Arts',
          striking: {
            title: 'Schlagen',
            items: [
              'Boxen: Schläge und Beinarbeit',
              'Kickboxen: Tritte und Knie',
              'Muay Thai: Ellbogen und Clinch',
              'Verteidigungstechniken'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken',
              'Takedown-Verteidigung',
              'Cage Wrestling',
              'Ground and Pound'
            ]
          },
          groundGame: {
            title: 'Bodenkampf',
            items: [
              'BJJ für MMA',
              'Submission Grappling',
              'Bodenkontrolle',
              'Submission-Verteidigung'
            ]
          }
        },
        history: {
          title: 'Geschichte des MMA',
          paragraphs: [
            'Modernes MMA begann mit der Ultimate Fighting Championship (UFC) 1993, entworfen um die effektivste Kampfkunst zu bestimmen. Frühe Turniere zeigten Spezialisten aus verschiedenen Disziplinen, die mit minimalen Regeln konkurrierten.',
            'Der Sport entwickelte sich schnell, als Kämpfer erkannten, dass sie vielseitig sein mussten. Brazilian Jiu-Jitsu dominierte zunächst, aber erfolgreiche Kämpfer integrierten bald Schlagen, Wrestling und Submission-Grappling in ihr Training.',
            'Das heutige MMA repräsentiert den Höhepunkt der Kampfkunst-Evolution, mit Athleten, die in mehreren Disziplinen trainieren, um auf höchstem Niveau der Kampfsportarten zu konkurrieren.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erstes UFC-Event demonstriert Wirksamkeit verschiedener Kampfkünste'
              },
              {
                year: '2000er',
                description: 'Evolution zu vielseitigen Kämpfern und einheitlichen Regeln'
              },
              {
                year: '2010er',
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
              title: 'Kompletter Kampf',
              description: 'Meistern Sie alle Kampfbereiche'
            },
            {
              icon: '💪',
              title: 'Spitzenfitness',
              description: 'Ultimative Herz-Kreislauf- und Kraftkonditionierung'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Entwickeln Sie Selbstvertrauen und mentale Härte'
            },
            {
              icon: '⚡',
              title: 'Reale Anwendung',
              description: 'Praktischste Selbstverteidigungsfähigkeiten'
            }
          ]
        },
        schedule: {
          title: 'MMA-Trainingsplan',
          subtitle: 'Umfassendes Mixed Martial Arts Training'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Lernen Sie von den größten Mixed Martial Artists der Geschichte',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'Ehemaliger UFC-Mittelgewichts-Champion',
              description: 'Legendärer Schläger mit der längsten Titelherrschaft in der UFC-Geschichte'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'PRIDE-Schwergewichts-Champion',
              description: 'Von vielen als der größte Schwergewichtler aller Zeiten betrachtet'
            },
            {
              name: 'Jon Jones',
              title: 'Ehemaliger UFC-Halbschwergewichts-Champion',
              description: 'Dominanter Champion bekannt für sein vielseitiges Fähigkeitsset'
            }
          ]
        },
        cta: {
          title: 'Werden Sie Ein Kompletter Kämpfer',
          description: 'Trainieren Sie im umfassendsten Kampfsport der Welt.',
          joinButton: 'MMA-Kursen Beitreten'
        }
      }
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
      bookClasses: 'Prenota Lezioni',
      registerOnline: 'Registrati Online',
      instantConfirmation: 'Conferma Immediata',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM',
      dropInWelcome: 'Drop-in Benvenuto',
      duringTrainingHours: 'Durante gli orari di allenamento',
      visitUs: 'Visitaci'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Benvenuti alla Sport Academy',
        description: 'Fondata nel 2017, Sport Academy è stata la destinazione principale per l\'allenamento di MMA, Brazilian Jiu-Jitsu e Grappling in Alto Adige. I nostri istruttori esperti Matteo Parolin e Christian Zecchetto portano istruzioni di livello mondiale per combattenti di tutti i livelli.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Fondata nel 2017',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'MMA, BJJ, Grappling e Altro',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come Un Combattente',
        subtitle: 'Scegli la tua disciplina e inizia il tuo viaggio nelle arti marziali'
      },
      mma: {
        description: 'Sport da combattimento completo che combina striking, wrestling e ground fighting per l\'esperienza definitiva nelle arti marziali.'
      },
      bjj: {
        description: 'L\'arte gentile che si concentra sulla leva e la tecnica sulla forza, perfetta per tutti i tipi di corpo e livelli di abilità.'
      },
      grappling: {
        description: 'Sport da combattimento dinamico no-gi che enfatizza takedown, controllo e submission in un ambiente di allenamento realistico.'
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
        description: 'Scopri i nostri programmi completi di arti marziali progettati per tutti i livelli di abilità. Dai principianti completi ai combattenti esperti, abbiamo il programma di allenamento perfetto per te.'
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
        description: 'Il Brazilian Jiu-Jitsu si concentra sul ground fighting e le submission utilizzando leva e tecnica sulla forza. È un\'arte marziale strategica, altamente efficace, adatta a tutti i livelli e tipi di corpo.',
        features: [
          'Posizioni chiave a terra e transizioni',
          'Tecniche di submission e come difenderle',
          'Come controllare gli avversari e sfuggire alle posizioni svantaggiose',
          'Sviluppo di concentrazione, disciplina e fiducia in se stessi'
        ]
      },
      grappling: {
        title: 'Corso Grappling',
        description: 'Il Grappling è uno sport da combattimento senza colpi basato su takedown, controllo e submission, praticato senza il gi. È realistico, dinamico e comunemente usato nell\'allenamento MMA e di autodifesa.',
        features: [
          'Tecniche di takedown e difesa dalla posizione eretta',
          'Passaggio della guardia e controllo a terra',
          'Leve articolari e submission di strangolamento',
          'Agilità, equilibrio e consapevolezza corporea'
        ]
      },
      kidsBjj: {
        title: 'Corso BJJ per Bambini (Età 8–14)',
        description: 'Un corso strutturato per bambini dagli 8 ai 14 anni che li introduce al Brazilian Jiu-Jitsu in un ambiente sicuro e positivo. Attraverso tecnica e esercizi ludici, i bambini sviluppano abilità fisiche e mentali divertendosi.',
        features: [
          'Movimenti base del BJJ, posizioni e submission semplici',
          'Come cadere, rotolare e muoversi in sicurezza a terra',
          'Rispetto per le regole, gli istruttori e i compagni di squadra',
          'Fiducia, disciplina e controllo emotivo'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Tecniche di wrestling tradizionali con focus su takedown, controllo e condizionamento.',
        features: [
          'Takedown a gamba singola e doppia',
          'Postura e movimento del wrestling',
          'Sprawl e difesa dai takedown',
          'Condizionamento e forza mentale'
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
        title: 'Orario Allenamenti',
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
      membershipBenefits: 'Benefici dell\'Abbonamento',
      guidelines: {
        arrive: 'Arriva 10 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'Le lezioni di BJJ richiedono il gi (uniforme)',
        noGi: 'Grappling e MMA sono lezioni no-gi'
      },
      benefits: {
        allClasses: 'Accesso a tutte le lezioni incluso',
        openMat: 'Sessioni open mat gratuite',
        bothLocations: 'Allenati in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto a Unirti a una Lezione?',
        description: 'Prenota il tuo posto nella nostra prossima sessione di allenamento e inizia il tuo viaggio nelle arti marziali.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Incontra i nostri istruttori di livello mondiale che portano decenni di esperienza e competenza a livello di campionato in ogni sessione di allenamento.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore & Fondatore',
        background: 'Con oltre 15 anni di esperienza nelle arti marziali, Matteo è una cintura nera certificata di BJJ e un combattente MMA di successo. Ha fondato Sport Academy nel 2017 con la visione di portare allenamento di arti marziali di livello mondiale in Alto Adige.',
        specializations: [
          'Brazilian Jiu-Jitsu (Cintura Nera)',
          'Mixed Martial Arts',
          'Preparazione alle Competizioni',
          'Programmi di Sviluppo Giovanile'
        ],
        achievements: [
          'Cintura Nera BJJ sotto lignaggio rinomato',
          'Multipli titoli regionali di campionato MMA',
          'Oltre 100 studenti allenati a livello competitivo',
          'Istruttore certificato in multiple discipline'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta una ricchezza di conoscenze nelle tecniche di grappling e wrestling. La sua precisione tecnica e capacità di scomporre movimenti complessi lo rendono un istruttore eccezionale per studenti di tutti i livelli.',
        specializations: [
          'No-Gi Grappling',
          'Tecniche di Wrestling',
          'Specialista in Takedown',
          'Programmi di Condizionamento'
        ],
        achievements: [
          'Campione regionale di grappling',
          'Certificazione specializzata in wrestling',
          'Esperto in tecniche di takedown',
          'Specialista in forza e condizionamento'
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
          title: 'Rispetto & Disciplina',
          description: 'Instilliamo valori di rispetto, disciplina e sportività che si estendono ben oltre i tappetini di allenamento.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Impara da istruttori esperti che sono dedicati ad aiutarti a raggiungere i tuoi obiettivi nelle arti marziali.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il pacchetto di allenamento perfetto per i tuoi obiettivi e il tuo programma. Tutti gli abbonamenti includono l\'accesso alla nostra gamma completa di corsi e a entrambe le sedi di allenamento.'
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
        subtitle: 'Perfetto per chi vuole concentrarsi esclusivamente sul Brazilian Jiu-Jitsu',
        program: 'Programma Focalizzato su BJJ',
        description: 'Accesso a tutte le lezioni di BJJ in entrambe le sedi'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa È Incluso',
      mainIncludes: [
        'Accesso illimitato a tutte le lezioni',
        'Allenamento in entrambe le sedi',
        'Sessioni open mat',
        'Istruzione adatta ai principianti',
        'Accesso al team competitivo'
      ],
      summerIncludes: [
        'Tutte le lezioni estive incluse',
        'Accesso a entrambe le sedi',
        'Programmazione flessibile',
        'Perfetto per principianti'
      ],
      bjjIncludes: [
        'Tutte le lezioni di BJJ incluse',
        'Accesso a entrambe le sedi',
        'Allenamento Gi e No-Gi',
        'Preparazione alle competizioni'
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
        description: 'Programmi di allenamento specializzati per competizioni e tornei imminenti.',
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
          answer: 'La nostra stagione principale va da settembre a giugno (10 mesi) e include il nostro curriculum completo. La stagione estiva è un programma più breve e flessibile, perfetto per provare le nostre lezioni o mantenere l\'allenamento durante i mesi estivi.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso alle lezioni in entrambe le nostre sedi di Campo Tures e Brunico. Puoi mescolare e abbinare in base al tuo programma.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo una lezione di prova gratuita per i nuovi studenti. Contattaci per programmare la tua prova e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Di che attrezzatura ho bisogno?',
          answer: 'Per la tua prima lezione, porta semplicemente abbigliamento comodo da allenamento e acqua. Ti forniremo indicazioni su qualsiasi attrezzatura specifica necessaria per le discipline che hai scelto.'
        }
      },
      cta: {
        title: 'Pronto a Unirti alla Nostra Academy?',
        description: 'Inizia oggi il tuo viaggio nelle arti marziali con i nostri programmi di allenamento di livello mondiale.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Pronto a iniziare il tuo viaggio nelle arti marziali? Mettiti in contatto con noi oggi per saperne di più sui nostri programmi o programmare la tua prima lezione.'
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
      trainingSchedule: 'Orario Allenamenti',
      visitRequirements: {
        title: 'Prima Volta Qui?',
        subtitle: 'Tutto quello che devi sapere per la tua prima lezione'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      whatWeProvide: 'Cosa Forniamo',
      bring: [
        'Abbigliamento comodo da allenamento',
        'Bottiglia d\'acqua e asciugamano',
        'Atteggiamento positivo e voglia di imparare',
        'Scarpe sportive (per le lezioni di striking)'
      ],
      provide: [
        'Tutti i tappetini e l\'attrezzatura per l\'allenamento',
        'Istruzione adatta ai principianti',
        'Ambiente sicuro e accogliente',
        'Attrezzatura in prestito per studenti alla prima volta'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Età Minima: 16 per le lezioni adulti, 8 per BJJ bambini',
        health: 'Salute: Ti preghiamo di informarci di eventuali infortuni o condizioni di salute',
        equipment: 'Attrezzatura: Forniamo attrezzatura in prestito per le tue prime lezioni',
        payment: 'Pagamento: Contanti, carta o bonifico bancario accettati'
      },
      cta: {
        title: 'Pronto a Iniziare?',
        description: 'Fai il primo passo verso i tuoi obiettivi nelle arti marziali. Contattaci oggi per iniziare.'
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
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul ground fighting e le prese di sottomissione. Sviluppato dal jujitsu giapponese tradizionale e dal judo, il BJJ enfatizza la tecnica e la leva sulla forza e la taglia.',
            'Spesso chiamata "l\'arte gentile", il BJJ permette ai praticanti più piccoli di difendersi con successo contro avversari più grandi attraverso tecnica, tempismo e leva appropriati. Questo lo rende un\'arte marziale ideale per persone di tutte le età, taglie e livelli di fitness.',
            'Alla Sport Academy, il nostro programma BJJ segue la metodologia brasiliana tradizionale incorporando tecniche di allenamento moderne per garantire rapido sviluppo delle abilità e prevenzione degli infortuni.'
          ]
        },
        techniques: {
          title: 'Tecniche Core del BJJ',
          subtitle: 'Padroneggia le abilità fondamentali che formano la base del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Controllo Closed Guard',
              'Variazioni Open Guard',
              'Guard Sweeps',
              'Guard Submissions'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Leve al Braccio (Armbar, Kimura)',
              'Strangolamenti (RNC, Triangle)',
              'Leve alle Gambe',
              'Difese dalle Submission'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e Side Control',
              'Back Control',
              'Knee on Belly',
              'Movimenti di Transizione'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema di Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di classificazione tradizionale del Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Filosofia delle Cinture',
            description: 'Nel BJJ, la progressione delle cinture rappresenta non solo conoscenza tecnica, ma anche sviluppo del carattere, capacità di insegnamento e tempo sui tappetini. Ogni cintura richiede tipicamente 2-3 anni per essere raggiunta, enfatizzando il viaggio sulla destinazione.'
          }
        },
        history: {
          title: 'Storia del BJJ',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu fu sviluppato all\'inizio del XX secolo quando il judoka giapponese Mitsuyo Maeda insegnò alla famiglia Gracie in Brasile. I Gracie, in particolare Helio Gracie, adattarono le tecniche per funzionare per praticanti più piccoli.',
            'L\'arte ottenne riconoscimento mondiale quando Royce Gracie dominò i primi tornei UFC, dimostrando che la tecnica poteva superare taglia e forza. Questo portò il BJJ a diventare un componente fondamentale delle arti marziali miste moderne.'
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
                description: 'Fondatore del Gracie Jiu-Jitsu e della metodologia BJJ'
              },
              {
                name: 'Royce Gracie',
                description: 'Pioniere UFC che dimostrò l\'efficacia del BJJ'
              }
            ]
          }
        },
        schedule: {
          title: 'Orario Allenamenti BJJ',
          subtitle: 'Unisciti alle nostre lezioni regolari di BJJ in entrambe le sedi'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio nel BJJ',
          description: 'Sperimenta l\'arte gentile che ha trasformato le arti marziali in tutto il mondo.',
          joinButton: 'Unisciti alle Lezioni di BJJ'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Sport da combattimento dinamico no-gi che enfatizza takedown, controllo e submission'
        },
        overview: {
          title: 'Cos\'è il Grappling?',
          paragraphs: [
            'Il Grappling è uno sport da combattimento dinamico che si concentra su takedown, controllo a terra e submission senza l\'uso di un gi (uniforme). Combina elementi dal wrestling, Brazilian Jiu-Jitsu e judo per creare un sistema di grappling completo.',
            'A differenza del BJJ tradizionale, il grappling viene praticato in abbigliamento sportivo, rendendolo più veloce e più applicabile a situazioni di autodifesa del mondo reale. L\'assenza di prese del gi cambia significativamente le dinamiche, richiedendo strategie e tecniche diverse.',
            'Il nostro programma di grappling alla Sport Academy enfatizza sia il grappling sportivo che l\'applicazione pratica, rendendolo perfetto per la preparazione MMA o per coloro che cercano abilità di autodifesa efficaci.'
          ]
        },
        techniques: {
          title: 'Tecniche Core del Grappling',
          subtitle: 'Padroneggia le abilità essenziali del grappling no-gi',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Takedown a Gamba Singola e Doppia',
              'Proiezioni d\'Anca e Lanci',
              'Spazzate con i Piedi',
              'Difesa dai Takedown'
            ]
          },
          control: {
            title: 'Posizioni di Controllo',
            items: [
              'Side Control e Mount',
              'Back Control',
              'Knee on Belly',
              'Sprawl e Turtle Control'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Rear Naked Choke',
              'Guillotine Choke',
              'Leve al Braccio e alle Gambe',
              'Catene di Submission'
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
                description: 'Pratica di movimento continuo a intensità controllata'
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
          subtitle: 'Vantaggi fisici e mentali dell\'allenamento di grappling no-gi',
          items: [
            {
              icon: '💪',
              title: 'Forza Corpo Intero',
              description: 'Sviluppa forza funzionale e resistenza'
            },
            {
              icon: '🧠',
              title: 'Forza Mentale',
              description: 'Costruisce resilienza e abilità di problem-solving'
            },
            {
              icon: '⚡',
              title: 'Potenza Esplosiva',
              description: 'Migliora velocità e performance atletica'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Abilità pratiche per situazioni del mondo reale'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamenti Grappling',
          subtitle: 'Unisciti alle nostre lezioni dinamiche di grappling'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Impara dalle tecniche sviluppate dai pionieri del grappling',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'Campione ADCC',
              description: 'Grappler no-gi dominante e specialista in submission'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Campione del Mondo Multiplo',
              description: 'Maestro tecnico noto per la sua butterfly guard'
            },
            {
              name: 'John Danaher',
              title: 'Allenatore Rinomato',
              description: 'Istruttore rivoluzionario e sviluppatore di sistemi'
            }
          ]
        },
        cta: {
          title: 'Padroneggia l\'Arte del Grappling',
          description: 'Sviluppa le abilità che formano la base degli sport da combattimento moderni.',
          joinButton: 'Unisciti alle Lezioni di Grappling'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina striking, wrestling e ground fighting'
        },
        overview: {
          title: 'Cos\'è l\'MMA?',
          paragraphs: [
            'Le Mixed Martial Arts (MMA) sono lo sport da combattimento più completo, combinando tecniche da boxe, kickboxing, wrestling, Brazilian Jiu-Jitsu e altre arti marziali. Rappresenta l\'evoluzione degli sport da combattimento in un sistema di combattimento completo.',
            'L\'MMA testa i combattenti in tutte le distanze di combattimento: striking in piedi, lavoro in clinch, takedown e ground fighting. Questo lo rende l\'arte marziale più realistica e impegnativa per l\'autodifesa e la preparazione al combattimento generale.',
            'Il nostro programma MMA alla Sport Academy fornisce allenamento strutturato in tutti gli aspetti delle arti marziali miste, dalle tecniche fondamentali alle strategie di combattimento avanzate, adatto sia per gli appassionati di fitness che per gli aspiranti competitori.'
          ]
        },
        techniques: {
          title: 'Tecniche MMA',
          subtitle: 'Padroneggia tutte le distanze di combattimento nelle arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Boxe: Pugni e Gioco di Gambe',
              'Kickboxing: Calci e Ginocchiate',
              'Muay Thai: Gomitate e Clinch',
              'Tecniche Difensive'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche di Takedown',
              'Difesa dai Takedown',
              'Cage Wrestling',
              'Ground and Pound'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'BJJ per MMA',
              'Submission Grappling',
              'Controllo a Terra',
              'Difesa dalle Submission'
            ]
          }
        },
        history: {
          title: 'Storia dell\'MMA',
          paragraphs: [
            'L\'MMA moderno iniziò con l\'Ultimate Fighting Championship (UFC) nel 1993, progettato per determinare l\'arte marziale più efficace. I primi tornei presentavano specialisti di diverse discipline che competevano con regole minime.',
            'Lo sport si evolse rapidamente quando i combattenti si resero conto della necessità di essere completi. Il Brazilian Jiu-Jitsu inizialmente dominò, ma i combattenti di successo presto incorporarono striking, wrestling e submission grappling nel loro allenamento.',
            'L\'MMA di oggi rappresenta l\'apice dell\'evoluzione delle arti marziali, con atleti che si allenano in multiple discipline per competere ai più alti livelli degli sport da combattimento.'
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
                description: 'Evoluzione verso combattenti completi e regole unificate'
              },
              {
                year: '2010s',
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
              title: 'Combattimento Completo',
              description: 'Padroneggia tutte le distanze di combattimento'
            },
            {
              icon: '💪',
              title: 'Fitness di Picco',
              description: 'Condizionamento cardiovascolare e di forza definitivo'
            },
            {
              icon: '🧠',
              title: 'Forza Mentale',
              description: 'Sviluppa fiducia e forza mentale'
            },
            {
              icon: '⚡',
              title: 'Applicazione Reale',
              description: 'Abilità di autodifesa più pratiche'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamenti MMA',
          subtitle: 'Allenamento completo di arti marziali miste'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Impara dai più grandi artisti marziali misti della storia',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'Ex Campione UFC Pesi Medi',
              description: 'Striker leggendario con il regno del titolo più lungo nella storia UFC'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'Campione PRIDE Pesi Massimi',
              description: 'Considerato da molti il più grande peso massimo di tutti i tempi'
            },
            {
              name: 'Jon Jones',
              title: 'Ex Campione UFC Pesi Mediomassimi',
              description: 'Campione dominante noto per il suo set di abilità versatile'
            }
          ]
        },
        cta: {
          title: 'Diventa un Combattente Completo',
          description: 'Allenati nello sport da combattimento più completo del mondo.',
          joinButton: 'Unisciti alle Lezioni MMA'
        }
      }
    },
    footer: {
      tagline: 'Allenamento Elite MMA, BJJ & Grappling',
      subtitle: 'Forgiando Combattenti Dal 2017',
      copyright: '© 2024 Sport Academy. Tutti i diritti riservati.'
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
            return key; // Return the key if not found
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