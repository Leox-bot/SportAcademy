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
        title: 'SPORT ACADEMY',
        subtitle: 'Forging Fighters Since 2017'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Located in the heart of South Tyrol, Sport Academy offers world-class training in Mixed Martial Arts, Brazilian Jiu-Jitsu, and Grappling. Our expert coaches Matteo Parolin and Christian Zecchetto bring years of competitive experience to help you achieve your martial arts goals.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Dedicated to martial arts training',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Training Programs',
        programsDescription: 'For all ages and skill levels',
        exploreClasses: 'Explore Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Choose your discipline and start your martial arts journey'
      },
      mma: {
        description: 'Complete mixed martial arts training combining striking, wrestling, and ground fighting techniques for the ultimate combat sport experience.'
      },
      bjj: {
        description: 'Master the gentle art of Brazilian Jiu-Jitsu, focusing on leverage, technique, and ground fighting to overcome larger opponents.'
      },
      grappling: {
        description: 'Develop superior grappling skills through wrestling, takedowns, and submission techniques without the traditional gi.'
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
        membershipPlansDesc: 'Choose the right plan for you',
        contactUs: 'Contact Us',
        contactUsDesc: 'Get in touch with our team'
      }
    },
    classes: {
      hero: {
        title: 'Training Classes',
        description: 'Discover our comprehensive martial arts programs designed for all skill levels. From beginner-friendly classes to advanced training, we offer the perfect path for your martial arts journey.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Experience the ultimate combat sport that combines striking, wrestling, and ground fighting. Our MMA classes integrate techniques from boxing, kickboxing, wrestling, and Brazilian Jiu-Jitsu to create well-rounded fighters.',
        features: [
          'Striking techniques (boxing, kickboxing)',
          'Wrestling and takedowns',
          'Ground fighting and submissions',
          'Cardio and strength conditioning',
          'Self-defense applications'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Master the gentle art that emphasizes technique over strength. BJJ teaches you to use leverage, timing, and technique to control and submit opponents, making it effective for practitioners of all sizes.',
        features: [
          'Guard work and sweeps',
          'Submissions (chokes and joint locks)',
          'Positional control',
          'Self-defense techniques',
          'Mental strategy and problem-solving'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Develop superior wrestling and submission skills without the traditional gi. Grappling focuses on takedowns, control positions, and submissions in a fast-paced, athletic environment.',
        features: [
          'Wrestling techniques',
          'No-gi submissions',
          'Takedown defense',
          'Scrambling and transitions',
          'Competition preparation'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Introduce your children to the fundamentals of Brazilian Jiu-Jitsu in a safe, fun, and structured environment. Our kids program builds confidence, discipline, and physical fitness.',
        features: [
          'Basic BJJ techniques',
          'Self-defense skills',
          'Discipline and respect',
          'Physical fitness and coordination',
          'Anti-bullying strategies'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Youth-focused grappling program that teaches wrestling fundamentals and submission techniques. Perfect for young athletes looking to develop strength, agility, and competitive spirit.',
        features: [
          'Wrestling fundamentals',
          'Basic submissions',
          'Athletic development',
          'Competition preparation',
          'Teamwork and sportsmanship'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Build a strong foundation in wrestling with focus on takedowns, control, and conditioning. Essential for MMA and excellent for overall athletic development.',
        features: [
          'Single and double leg takedowns',
          'Sprawls and takedown defense',
          'Top and bottom position work',
          'Conditioning and strength training',
          'Mental toughness development'
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
        description: 'Meet our experienced instructors who bring diverse martial arts backgrounds and competitive experience to guide your training journey.'
      },
      background: 'Background',
      specializations: 'Specializations',
      achievements: 'Achievements',
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 8 years of dedicated training and competition experience, Matteo has established himself as a leading martial arts instructor in South Tyrol. His journey began with Brazilian Jiu-Jitsu and expanded to include MMA and grappling, where he has competed at national and international levels.',
        specializations: [
          'Brazilian Jiu-Jitsu (Brown Belt)',
          'Mixed Martial Arts',
          'Grappling and Wrestling',
          'Competition Coaching',
          'Youth Development'
        ],
        achievements: [
          'Multiple regional BJJ championships',
          'MMA competition experience',
          'Certified BJJ instructor',
          'Over 100 students trained',
          'Youth program developer'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings a wealth of knowledge from diverse martial arts backgrounds. His technical expertise and patient teaching style make him an invaluable asset to our coaching team, specializing in both traditional and modern grappling techniques.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'No-Gi Grappling',
          'Wrestling Techniques',
          'Self-Defense',
          'Technical Development'
        ],
        achievements: [
          'Regional grappling competitions',
          'BJJ tournament placements',
          'Specialized in technical instruction',
          'Youth and adult program development',
          'Continuous education in martial arts'
        ]
      },
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
          description: 'We instill values of respect, discipline, and sportsmanship that extend beyond the training mats.'
        }
      },
      cta: {
        title: 'Train with the Best',
        description: 'Experience world-class instruction from our dedicated coaching team.'
      }
    },
    schedule: {
      hero: {
        title: 'Training Schedule',
        description: 'Find the perfect class times that fit your schedule. We offer training sessions throughout the week at both our Campo Tures and Brunico locations.'
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
        gi: 'BJJ classes require gi (rental available)',
        noGi: 'Grappling classes are no-gi (shorts and rash guard)'
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
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the membership plan that best fits your training goals and schedule. All memberships include access to our complete range of classes.'
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
        'Both Campo Tures and Brunico locations',
        'Open mat sessions',
        'Beginner-friendly instruction',
        'Competition team access',
        'Equipment rental available'
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
        'Specialized technique sessions',
        'Competition preparation',
        'Both locations access',
        'Advanced curriculum'
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
        description: 'One-on-one coaching tailored to your specific goals',
        price: '€50',
        duration: 'per session'
      },
      competitionPrep: {
        title: 'Competition Prep',
        description: 'Specialized training for upcoming tournaments',
        price: '€40',
        duration: 'per session'
      },
      seminars: {
        title: 'Seminars',
        description: 'Special workshops with guest instructors',
        price: '€30',
        duration: 'per seminar'
      },
      faq: {
        title: 'Frequently Asked Questions',
        seasons: {
          question: 'What\'s the difference between seasons?',
          answer: 'Our main season runs September through June with full programming. Summer season offers a shorter commitment with flexible scheduling perfect for trying out our classes.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to classes at both our Campo Tures and Brunico facilities.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer a free trial class for new students. Contact us to schedule your first session.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For beginners, just comfortable workout clothes. We have rental gis available for BJJ classes. As you progress, we\'ll help you choose the right gear.'
        }
      },
      cta: {
        title: 'Start Your Journey Today',
        description: 'Choose your membership and join our community of dedicated martial artists.'
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
        'Water bottle',
        'Towel',
        'Positive attitude and willingness to learn'
      ],
      provide: [
        'All training equipment',
        'Gi rental for BJJ classes',
        'Protective gear',
        'Clean, safe training environment'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Age Requirements: 16+ for adult classes, kids classes available',
        health: 'Health: Please inform us of any injuries or medical conditions',
        equipment: 'Equipment: Rental gear available for first-time visitors',
        payment: 'Payment: Cash, card, and online payments accepted'
      },
      cta: {
        title: 'Ready to Start Training?',
        description: 'Contact us today to schedule your first class or ask any questions about our programs.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Master the gentle art that emphasizes technique, leverage, and strategy over brute strength'
        },
        overview: {
          title: 'The Gentle Art',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent by using leverage, technique, and timing.',
            'At Sport Academy, our BJJ program is designed to teach students the fundamental techniques while building physical fitness, mental toughness, and problem-solving skills. Whether you\'re a complete beginner or an experienced practitioner, our classes provide a supportive environment for continuous learning and improvement.'
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
              'Joint locks (armbar, kimura)',
              'Leg locks and heel hooks',
              'Submission chains'
            ]
          },
          positions: {
            title: 'Positions',
            items: [
              'Mount and side control',
              'Back control techniques',
              'Knee on belly',
              'Transitional movements'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the traditional ranking system of Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Belt Philosophy',
            description: 'The BJJ belt system represents not just technical knowledge, but also character development, perseverance, and dedication to the art. Each belt level requires years of consistent training and demonstrates mastery of increasingly complex techniques and concepts.'
          }
        },
        history: {
          title: 'History & Lineage',
          paragraphs: [
            'Brazilian Jiu-Jitsu evolved from traditional Japanese jujutsu and judo, brought to Brazil by Mitsuyo Maeda in the early 20th century. The Gracie family, particularly Helio Gracie, adapted these techniques to create a more effective martial art for smaller practitioners.',
            'The art gained worldwide recognition through the early UFC tournaments, where Royce Gracie demonstrated the effectiveness of BJJ against larger opponents from different martial arts backgrounds.'
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
          description: 'Experience the gentle art that has transformed martial arts forever.',
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
          title: 'The Ultimate Fighting Art',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, kickboxing, wrestling, Brazilian Jiu-Jitsu, and other martial arts. It represents the evolution of martial arts, where practitioners must be well-rounded in all aspects of fighting.',
            'Our MMA program at Sport Academy provides comprehensive training that develops striking, grappling, and ground fighting skills. Students learn to seamlessly transition between different fighting ranges while building the cardio, strength, and mental toughness required for this demanding sport.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Master the diverse skill set required for mixed martial arts competition',
          striking: {
            title: 'Striking',
            items: [
              'Boxing fundamentals',
              'Kickboxing techniques',
              'Muay Thai clinch work',
              'Defensive striking'
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
              'Guard work for MMA',
              'Ground transitions'
            ]
          }
        },
        history: {
          title: 'History of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with the Ultimate Fighting Championship (UFC) in 1993. The early tournaments were designed to determine which martial art was most effective in real combat.',
            'Over the years, MMA has evolved from style vs. style competitions to a sophisticated sport where athletes must be proficient in all aspects of fighting. Today\'s MMA fighters are complete martial artists with skills in striking, wrestling, and submission grappling.'
          ],
          milestones: {
            title: 'Key Milestones',
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
                description: 'MMA becomes mainstream with UFC on major networks'
              }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Discover the physical and mental advantages of MMA training',
          items: [
            {
              icon: '💪',
              title: 'Complete Fitness',
              description: 'Full-body workout combining cardio, strength, and flexibility'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Develop confidence, discipline, and problem-solving skills'
            },
            {
              icon: '🥊',
              title: 'Self-Defense',
              description: 'Learn practical skills for real-world situations'
            },
            {
              icon: '🏆',
              title: 'Competition Ready',
              description: 'Prepare for amateur and professional competition'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Join our comprehensive MMA classes'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Learn from the techniques of the greatest fighters in MMA history',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Former UFC Middleweight Champion known for his striking precision'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendary heavyweight with incredible ground game'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Dominant light heavyweight with creative striking'
            }
          ]
        },
        cta: {
          title: 'Enter the Octagon',
          description: 'Begin your journey in the world\'s most complete combat sport.',
          joinButton: 'Join MMA Classes',
          backButton: 'Back to Classes'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Master the art of wrestling and submission grappling without the gi'
        },
        overview: {
          title: 'The Art of Control',
          paragraphs: [
            'Grappling encompasses wrestling, submission holds, and ground control techniques performed without the traditional gi. This dynamic martial art emphasizes takedowns, positional control, and submissions in a fast-paced, athletic environment.',
            'Our grappling program combines elements from wrestling, Brazilian Jiu-Jitsu, and submission grappling to create well-rounded grapplers. Students develop exceptional body awareness, strength, and the ability to control opponents through superior technique and positioning.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Develop the essential skills for effective grappling and submission wrestling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single and double leg takedowns',
              'Hip tosses and throws',
              'Foot sweeps',
              'Takedown combinations'
            ]
          },
          control: {
            title: 'Control',
            items: [
              'Top position control',
              'Pinning combinations',
              'Ride and control techniques',
              'Transition movements'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Leg locks and heel hooks',
              'Arm submissions',
              'Chokes and strangles',
              'Submission chains'
            ]
          }
        },
        methodology: {
          title: 'Training Methodology',
          subtitle: 'Our systematic approach to developing superior grappling skills',
          technical: {
            title: 'Technical Development',
            methods: [
              {
                title: 'Drilling',
                description: 'Repetitive practice of fundamental movements and techniques'
              },
              {
                title: 'Positional Sparring',
                description: 'Live training from specific positions to develop timing'
              },
              {
                title: 'Flow Rolling',
                description: 'Continuous movement practice to improve transitions'
              }
            ]
          },
          conditioning: {
            title: 'Physical Conditioning',
            methods: [
              {
                title: 'Grappling Cardio',
                description: 'Sport-specific conditioning for endurance and power'
              },
              {
                title: 'Strength Training',
                description: 'Functional strength development for grappling'
              },
              {
                title: 'Flexibility',
                description: 'Mobility work to prevent injury and improve performance'
              }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Discover the advantages of dedicated grappling training',
          items: [
            {
              icon: '🤼',
              title: 'Athletic Development',
              description: 'Build functional strength, endurance, and coordination'
            },
            {
              icon: '🧩',
              title: 'Problem Solving',
              description: 'Develop tactical thinking and adaptability under pressure'
            },
            {
              icon: '🏃',
              title: 'Cardio Fitness',
              description: 'Intense full-body workout that builds incredible endurance'
            },
            {
              icon: '🎯',
              title: 'Technical Precision',
              description: 'Master the subtle details that separate good from great'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'Join our dynamic grappling classes'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Study the techniques of the greatest grapplers in history',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'The King',
              description: 'Dominant no-gi grappler and ADCC champion'
            },
            {
              name: 'Marcelo Garcia',
              title: 'The Wizard',
              description: 'Multiple-time world champion known for his guard game'
            },
            {
              name: 'John Danaher',
              title: 'The Professor',
              description: 'Legendary coach and leg lock specialist'
            }
          ]
        },
        cta: {
          title: 'Master the Art of Grappling',
          description: 'Develop superior grappling skills in our comprehensive program.',
          joinButton: 'Join Grappling Classes',
          backButton: 'Back to Classes'
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
      bookClasses: 'Kurse Buchen',
      visitUs: 'Besuchen Sie Uns',
      dropInWelcome: 'Spontanbesuche Willkommen',
      duringTrainingHours: 'Während der Trainingszeiten',
      responseWithin2Hours: 'Antwort innerhalb 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates & DMs',
      instantConfirmation: 'Sofortige Bestätigung'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Kämpfer Schmieden Seit 2017'
      },
      welcome: {
        title: 'Willkommen bei Sport Academy',
        description: 'Im Herzen Südtirols gelegen, bietet Sport Academy Weltklasse-Training in Mixed Martial Arts, Brazilian Jiu-Jitsu und Grappling. Unsere Experten-Trainer Matteo Parolin und Christian Zecchetto bringen jahrelange Wettkampferfahrung mit, um Ihnen bei der Erreichung Ihrer Kampfsport-Ziele zu helfen.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Dem Kampfsport-Training gewidmet',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Campo Tures & Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'Für alle Altersgruppen und Fähigkeitsstufen',
        exploreClasses: 'Kurse Erkunden'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Wähle deine Disziplin und beginne deine Kampfsport-Reise'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training, das Schlag-, Ring- und Bodenkampftechniken für das ultimative Kampfsport-Erlebnis kombiniert.'
      },
      bjj: {
        description: 'Meistere die sanfte Kunst des Brazilian Jiu-Jitsu, mit Fokus auf Hebelwirkung, Technik und Bodenkampf, um größere Gegner zu überwinden.'
      },
      grappling: {
        description: 'Entwickle überlegene Grappling-Fähigkeiten durch Wrestling, Takedowns und Submission-Techniken ohne den traditionellen Gi.'
      },
      getStarted: {
        title: 'Heute Beginnen',
        subtitle: 'Alles was Sie brauchen, um Ihre Kampfsport-Reise zu beginnen'
      },
      quickLinks: {
        viewClasses: 'Kurse Ansehen',
        viewClassesDesc: 'Erkunden Sie unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan Prüfen',
        checkScheduleDesc: 'Finden Sie Kurszeiten und Standorte',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wählen Sie den richtigen Plan für Sie',
        contactUs: 'Kontakt',
        contactUsDesc: 'Nehmen Sie Kontakt mit unserem Team auf'
      }
    },
    classes: {
      hero: {
        title: 'Trainingskurse',
        description: 'Entdecken Sie unsere umfassenden Kampfsport-Programme, die für alle Fähigkeitsstufen entwickelt wurden. Von anfängerfreundlichen Kursen bis hin zu fortgeschrittenem Training bieten wir den perfekten Weg für Ihre Kampfsport-Reise.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Erleben Sie den ultimativen Kampfsport, der Schlagen, Wrestling und Bodenkampf kombiniert. Unsere MMA-Kurse integrieren Techniken aus Boxen, Kickboxen, Wrestling und Brazilian Jiu-Jitsu, um vielseitige Kämpfer zu schaffen.',
        features: [
          'Schlagtechniken (Boxen, Kickboxen)',
          'Wrestling und Takedowns',
          'Bodenkampf und Submissions',
          'Cardio- und Krafttraining',
          'Selbstverteidigungsanwendungen'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Meistern Sie die sanfte Kunst, die Technik über Kraft betont. BJJ lehrt Sie, Hebelwirkung, Timing und Technik zu nutzen, um Gegner zu kontrollieren und zu unterwerfen, was es für Praktizierende aller Größen effektiv macht.',
        features: [
          'Guard-Arbeit und Sweeps',
          'Submissions (Würgegriffe und Gelenkhebel)',
          'Positionskontrolle',
          'Selbstverteidigungstechniken',
          'Mentale Strategie und Problemlösung'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Entwickeln Sie überlegene Wrestling- und Submission-Fähigkeiten ohne den traditionellen Gi. Grappling konzentriert sich auf Takedowns, Kontrollpositionen und Submissions in einer schnellen, athletischen Umgebung.',
        features: [
          'Wrestling-Techniken',
          'No-Gi Submissions',
          'Takedown-Verteidigung',
          'Scrambling und Übergänge',
          'Wettkampfvorbereitung'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Führen Sie Ihre Kinder in die Grundlagen des Brazilian Jiu-Jitsu in einer sicheren, spaßigen und strukturierten Umgebung ein. Unser Kinderprogramm baut Selbstvertrauen, Disziplin und körperliche Fitness auf.',
        features: [
          'Grundlegende BJJ-Techniken',
          'Selbstverteidigungsfähigkeiten',
          'Disziplin und Respekt',
          'Körperliche Fitness und Koordination',
          'Anti-Mobbing-Strategien'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Jugendorientiertes Grappling-Programm, das Wrestling-Grundlagen und Submission-Techniken lehrt. Perfekt für junge Athleten, die Kraft, Beweglichkeit und Wettkampfgeist entwickeln möchten.',
        features: [
          'Wrestling-Grundlagen',
          'Grundlegende Submissions',
          'Athletische Entwicklung',
          'Wettkampfvorbereitung',
          'Teamwork und Sportlichkeit'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Bauen Sie eine starke Grundlage im Wrestling mit Fokus auf Takedowns, Kontrolle und Konditionierung auf. Wesentlich für MMA und ausgezeichnet für die allgemeine athletische Entwicklung.',
        features: [
          'Einzel- und Doppelbein-Takedowns',
          'Sprawls und Takedown-Verteidigung',
          'Ober- und Unterpositionsarbeit',
          'Konditions- und Krafttraining',
          'Mentale Härte-Entwicklung'
        ]
      },
      whatYouLearn: 'Was Sie Lernen',
      cta: {
        title: 'Bereit Zu Trainieren?',
        description: 'Treten Sie unserer Gemeinschaft engagierter Kampfkünstler bei und beginnen Sie heute Ihre Reise.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lernen Sie unsere erfahrenen Instruktoren kennen, die diverse Kampfsport-Hintergründe und Wettkampferfahrung mitbringen, um Ihre Trainingsreise zu leiten.'
      },
      background: 'Hintergrund',
      specializations: 'Spezialisierungen',
      achievements: 'Erfolge',
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 8 Jahren engagiertem Training und Wettkampferfahrung hat sich Matteo als führender Kampfsport-Instruktor in Südtirol etabliert. Seine Reise begann mit Brazilian Jiu-Jitsu und erweiterte sich um MMA und Grappling, wo er auf nationaler und internationaler Ebene gekämpft hat.',
        specializations: [
          'Brazilian Jiu-Jitsu (Brauner Gürtel)',
          'Mixed Martial Arts',
          'Grappling und Wrestling',
          'Wettkampf-Coaching',
          'Jugendentwicklung'
        ],
        achievements: [
          'Mehrere regionale BJJ-Meisterschaften',
          'MMA-Wettkampferfahrung',
          'Zertifizierter BJJ-Instruktor',
          'Über 100 ausgebildete Schüler',
          'Jugendprogramm-Entwickler'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt eine Fülle von Wissen aus verschiedenen Kampfsport-Hintergründen mit. Seine technische Expertise und geduldige Unterrichtsmethode machen ihn zu einem unschätzbaren Wert für unser Trainerteam, spezialisiert auf traditionelle und moderne Grappling-Techniken.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'No-Gi Grappling',
          'Wrestling-Techniken',
          'Selbstverteidigung',
          'Technische Entwicklung'
        ],
        achievements: [
          'Regionale Grappling-Wettkämpfe',
          'BJJ-Turnier-Platzierungen',
          'Spezialisiert auf technischen Unterricht',
          'Jugend- und Erwachsenenprogramm-Entwicklung',
          'Kontinuierliche Weiterbildung in Kampfkünsten'
        ]
      },
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
          description: 'Wir vermitteln Werte von Respekt, Disziplin und Sportlichkeit, die über die Trainingsmatten hinausgehen.'
        }
      },
      cta: {
        title: 'Trainieren Sie Mit Den Besten',
        description: 'Erleben Sie Weltklasse-Unterricht von unserem engagierten Trainerteam.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finden Sie die perfekten Kurszeiten, die zu Ihrem Zeitplan passen. Wir bieten Trainingseinheiten während der ganzen Woche an beiden Standorten Campo Tures und Bruneck an.'
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
      membershipBenefits: 'Mitgliedschaftsvorteile',
      guidelines: {
        arrive: '10 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'BJJ-Kurse erfordern Gi (Verleih verfügbar)',
        noGi: 'Grappling-Kurse sind No-Gi (Shorts und Rash Guard)'
      },
      benefits: {
        allClasses: 'Zugang zu allen Kursen inklusive',
        openMat: 'Kostenlose freie Trainingseinheiten',
        bothLocations: 'Training an beiden Standorten',
        personalTraining: 'Ermäßigtes Personaltraining'
      },
      cta: {
        title: 'Bereit Für Einen Kurs?',
        description: 'Buchen Sie Ihren Platz in unserer nächsten Trainingseinheit und beginnen Sie Ihre Kampfsport-Reise.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wählen Sie den Mitgliedschaftsplan, der am besten zu Ihren Trainingszielen und Ihrem Zeitplan passt. Alle Mitgliedschaften beinhalten Zugang zu unserem kompletten Kursangebot.'
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
        title: 'BJJ Fokussiertes Training',
        subtitle: 'Spezielles Brazilian Jiu-Jitsu Programm für ernsthafte Praktizierende',
        program: 'Nur BJJ Programm',
        description: 'Intensives BJJ-Training mit zusätzlichen Technikstunden'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was Enthalten Ist',
      mainIncludes: [
        'Unbegrenzter Zugang zu allen Kursen',
        'Beide Standorte Campo Tures und Bruneck',
        'Freie Trainingseinheiten',
        'Anfängerfreundlicher Unterricht',
        'Wettkampfteam-Zugang',
        'Ausrüstungsverleih verfügbar'
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
        'Spezialisierte Technikstunden',
        'Wettkampfvorbereitung',
        'Zugang zu beiden Standorten',
        'Fortgeschrittener Lehrplan'
      ],
      selectMainSeason: 'Hauptsaison Wählen',
      selectSummerSeason: 'Sommersaison Wählen',
      selectBjjOnly: 'BJJ Programm Wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessern Sie Ihr Training mit unseren spezialisierten Programmen und persönlichen Coaching-Optionen.'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Eins-zu-eins Coaching auf Ihre spezifischen Ziele zugeschnitten',
        price: '€50',
        duration: 'pro Einheit'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training für bevorstehende Turniere',
        price: '€40',
        duration: 'pro Einheit'
      },
      seminars: {
        title: 'Seminare',
        description: 'Spezielle Workshops mit Gastinstruktoren',
        price: '€30',
        duration: 'pro Seminar'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Unsere Hauptsaison läuft von September bis Juni mit vollem Programm. Die Sommersaison bietet eine kürzere Verpflichtung mit flexibler Terminplanung, perfekt zum Ausprobieren unserer Kurse.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu Kursen an beiden unserer Einrichtungen in Campo Tures und Bruneck.'
        },
        trial: {
          question: 'Bieten Sie Probestunden an?',
          answer: 'Absolut! Wir bieten eine kostenlose Probestunde für neue Schüler an. Kontaktieren Sie uns, um Ihre erste Einheit zu planen.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Anfänger nur bequeme Trainingskleidung. Wir haben Leih-Gis für BJJ-Kurse verfügbar. Während Sie Fortschritte machen, helfen wir Ihnen bei der Auswahl der richtigen Ausrüstung.'
        }
      },
      cta: {
        title: 'Beginnen Sie Heute Ihre Reise',
        description: 'Wählen Sie Ihre Mitgliedschaft und treten Sie unserer Gemeinschaft engagierter Kampfkünstler bei.'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Nehmen Sie Kontakt mit unserem Team auf, um Ihre Kampfsport-Reise zu beginnen. Wir sind hier, um Ihre Fragen zu beantworten und Ihnen zu helfen, das perfekte Trainingsprogramm zu finden.'
      },
      getInTouch: {
        title: 'Kontakt Aufnehmen',
        subtitle: 'Verschiedene Wege, sich mit Sport Academy zu verbinden'
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
        'Wasserflasche',
        'Handtuch',
        'Positive Einstellung und Lernbereitschaft'
      ],
      provide: [
        'Alle Trainingsausrüstung',
        'Gi-Verleih für BJJ-Kurse',
        'Schutzausrüstung',
        'Saubere, sichere Trainingsumgebung'
      ],
      specialInstructions: 'Spezielle Anweisungen',
      instructions: {
        age: 'Altersanforderungen: 16+ für Erwachsenenkurse, Kinderkurse verfügbar',
        health: 'Gesundheit: Bitte informieren Sie uns über Verletzungen oder medizinische Bedingungen',
        equipment: 'Ausrüstung: Leihausrüstung für Erstbesucher verfügbar',
        payment: 'Zahlung: Bar-, Karten- und Online-Zahlungen akzeptiert'
      },
      cta: {
        title: 'Bereit Zu Trainieren?',
        description: 'Kontaktieren Sie uns heute, um Ihre erste Stunde zu planen oder Fragen zu unseren Programmen zu stellen.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Meistern Sie die sanfte Kunst, die Technik, Hebelwirkung und Strategie über rohe Kraft betont'
        },
        overview: {
          title: 'Die Sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Es betont das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner verteidigen kann, indem sie Hebelwirkung, Technik und Timing einsetzt.',
            'Bei Sport Academy ist unser BJJ-Programm darauf ausgelegt, Schülern die grundlegenden Techniken beizubringen und gleichzeitig körperliche Fitness, mentale Härte und Problemlösungsfähigkeiten aufzubauen. Ob Sie ein kompletter Anfänger oder ein erfahrener Praktizierender sind, unsere Kurse bieten eine unterstützende Umgebung für kontinuierliches Lernen und Verbesserung.'
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
              'Gelenkhebel (Armbar, Kimura)',
              'Beinhebel und Heel Hooks',
              'Submission-Ketten'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Side Control',
              'Back Control Techniken',
              'Knee on Belly',
              'Übergangsbewegungen'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Gürtelsystem',
          subtitle: 'Fortschritt durch das traditionelle Ranking-System des Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Gürtel-Philosophie',
            description: 'Das BJJ-Gürtelsystem repräsentiert nicht nur technisches Wissen, sondern auch Charakterentwicklung, Ausdauer und Hingabe zur Kunst. Jede Gürtelstufe erfordert Jahre konsistenten Trainings und demonstriert die Beherrschung zunehmend komplexer Techniken und Konzepte.'
          }
        },
        history: {
          title: 'Geschichte & Abstammung',
          paragraphs: [
            'Brazilian Jiu-Jitsu entwickelte sich aus traditionellem japanischem Jujutsu und Judo, das von Mitsuyo Maeda im frühen 20. Jahrhundert nach Brasilien gebracht wurde. Die Gracie-Familie, insbesondere Helio Gracie, passte diese Techniken an, um eine effektivere Kampfkunst für kleinere Praktizierende zu schaffen.',
            'Die Kunst erlangte weltweite Anerkennung durch die frühen UFC-Turniere, wo Royce Gracie die Wirksamkeit von BJJ gegen größere Gegner aus verschiedenen Kampfkunst-Hintergründen demonstrierte.'
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
          subtitle: 'Nehmen Sie an unseren regelmäßigen BJJ-Kursen an beiden Standorten teil'
        },
        cta: {
          title: 'Beginnen Sie Ihre BJJ-Reise',
          description: 'Erleben Sie die sanfte Kunst, die die Kampfkünste für immer verändert hat.',
          joinButton: 'BJJ-Kurse Beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der Schlagen, Wrestling und Bodenkampf kombiniert'
        },
        overview: {
          title: 'Die Ultimative Kampfkunst',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der vollständigste Kampfsport, der Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkünsten kombiniert. Es repräsentiert die Evolution der Kampfkünste, wo Praktizierende in allen Aspekten des Kampfes vielseitig sein müssen.',
            'Unser MMA-Programm bei Sport Academy bietet umfassendes Training, das Schlag-, Grappling- und Bodenkampffähigkeiten entwickelt. Schüler lernen, nahtlos zwischen verschiedenen Kampfdistanzen zu wechseln, während sie das Cardio, die Kraft und die mentale Härte aufbauen, die für diesen anspruchsvollen Sport erforderlich sind.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Meistern Sie das vielfältige Fähigkeitsset, das für Mixed Martial Arts-Wettkämpfe erforderlich ist',
          striking: {
            title: 'Schlagen',
            items: [
              'Box-Grundlagen',
              'Kickbox-Techniken',
              'Muay Thai Clinch-Arbeit',
              'Defensives Schlagen'
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
              'Submission Grappling',
              'Guard-Arbeit für MMA',
              'Boden-Übergänge'
            ]
          }
        },
        history: {
          title: 'Geschichte des MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit der Ultimate Fighting Championship (UFC) im Jahr 1993. Die frühen Turniere wurden entwickelt, um zu bestimmen, welche Kampfkunst im echten Kampf am effektivsten war.',
            'Im Laufe der Jahre hat sich MMA von Stil-gegen-Stil-Wettkämpfen zu einem ausgeklügelten Sport entwickelt, in dem Athleten in allen Aspekten des Kampfes kompetent sein müssen. Heutige MMA-Kämpfer sind komplette Kampfkünstler mit Fähigkeiten im Schlagen, Wrestling und Submission Grappling.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erstes UFC-Event in Denver, Colorado abgehalten'
              },
              {
                year: '2001',
                description: 'Einheitliche MMA-Regeln etabliert'
              },
              {
                year: '2016',
                description: 'MMA wird Mainstream mit UFC auf großen Netzwerken'
              }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Entdecken Sie die körperlichen und mentalen Vorteile des MMA-Trainings',
          items: [
            {
              icon: '💪',
              title: 'Komplette Fitness',
              description: 'Ganzkörper-Workout, das Cardio, Kraft und Flexibilität kombiniert'
            },
            {
              icon: '🧠',
              title: 'Mentale Härte',
              description: 'Entwickeln Sie Selbstvertrauen, Disziplin und Problemlösungsfähigkeiten'
            },
            {
              icon: '🥊',
              title: 'Selbstverteidigung',
              description: 'Lernen Sie praktische Fähigkeiten für reale Situationen'
            },
            {
              icon: '🏆',
              title: 'Wettkampfbereit',
              description: 'Vorbereitung auf Amateur- und Profi-Wettkämpfe'
            }
          ]
        },
        schedule: {
          title: 'MMA Trainingsplan',
          subtitle: 'Nehmen Sie an unseren umfassenden MMA-Kursen teil'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Lernen Sie von den Techniken der größten Kämpfer in der MMA-Geschichte',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Ehemaliger UFC-Mittelgewichts-Champion, bekannt für seine Schlagpräzision'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendärer Schwergewichtler mit unglaublichem Bodenspiel'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Dominanter Halbschwergewichtler mit kreativem Schlagen'
            }
          ]
        },
        cta: {
          title: 'Betreten Sie Das Octagon',
          description: 'Beginnen Sie Ihre Reise in der vollständigsten Kampfsportart der Welt.',
          joinButton: 'MMA-Kurse Beitreten',
          backButton: 'Zurück zu den Kursen'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Meistern Sie die Kunst des Wrestling und Submission Grappling ohne Gi'
        },
        overview: {
          title: 'Die Kunst der Kontrolle',
          paragraphs: [
            'Grappling umfasst Wrestling, Submission-Griffe und Bodenkontrolltechniken, die ohne den traditionellen Gi ausgeführt werden. Diese dynamische Kampfkunst betont Takedowns, Positionskontrolle und Submissions in einer schnellen, athletischen Umgebung.',
            'Unser Grappling-Programm kombiniert Elemente aus Wrestling, Brazilian Jiu-Jitsu und Submission Grappling, um vielseitige Grappler zu schaffen. Schüler entwickeln außergewöhnliches Körperbewusstsein, Kraft und die Fähigkeit, Gegner durch überlegene Technik und Positionierung zu kontrollieren.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Entwickeln Sie die wesentlichen Fähigkeiten für effektives Grappling und Submission Wrestling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Einzel- und Doppelbein-Takedowns',
              'Hüftwürfe und Würfe',
              'Fußfeger',
              'Takedown-Kombinationen'
            ]
          },
          control: {
            title: 'Kontrolle',
            items: [
              'Oberpositions-Kontrolle',
              'Pinning-Kombinationen',
              'Ride- und Kontrolltechniken',
              'Übergangsbewegungen'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Beinhebel und Heel Hooks',
              'Arm-Submissions',
              'Würgegriffe und Strangulationen',
              'Submission-Ketten'
            ]
          }
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Unser systematischer Ansatz zur Entwicklung überlegener Grappling-Fähigkeiten',
          technical: {
            title: 'Technische Entwicklung',
            methods: [
              {
                title: 'Drilling',
                description: 'Wiederholende Übung grundlegender Bewegungen und Techniken'
              },
              {
                title: 'Positions-Sparring',
                description: 'Live-Training aus spezifischen Positionen zur Timing-Entwicklung'
              },
              {
                title: 'Flow Rolling',
                description: 'Kontinuierliche Bewegungsübung zur Verbesserung der Übergänge'
              }
            ]
          },
          conditioning: {
            title: 'Körperliche Konditionierung',
            methods: [
              {
                title: 'Grappling-Cardio',
                description: 'Sportspezifische Konditionierung für Ausdauer und Kraft'
              },
              {
                title: 'Krafttraining',
                description: 'Funktionale Kraftentwicklung für Grappling'
              },
              {
                title: 'Flexibilität',
                description: 'Mobilitätsarbeit zur Verletzungsprävention und Leistungsverbesserung'
              }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Entdecken Sie die Vorteile des dedizierten Grappling-Trainings',
          items: [
            {
              icon: '🤼',
              title: 'Athletische Entwicklung',
              description: 'Aufbau funktionaler Kraft, Ausdauer und Koordination'
            },
            {
              icon: '🧩',
              title: 'Problemlösung',
              description: 'Entwickeln Sie taktisches Denken und Anpassungsfähigkeit unter Druck'
            },
            {
              icon: '🏃',
              title: 'Cardio-Fitness',
              description: 'Intensives Ganzkörper-Workout, das unglaubliche Ausdauer aufbaut'
            },
            {
              icon: '🎯',
              title: 'Technische Präzision',
              description: 'Meistern Sie die subtilen Details, die Gut von Großartig trennen'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Plan',
          subtitle: 'Nehmen Sie an unseren dynamischen Grappling-Kursen teil'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Studieren Sie die Techniken der größten Grappler der Geschichte',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'The King',
              description: 'Dominanter No-Gi Grappler und ADCC-Champion'
            },
            {
              name: 'Marcelo Garcia',
              title: 'The Wizard',
              description: 'Mehrfacher Weltmeister, bekannt für sein Guard-Spiel'
            },
            {
              name: 'John Danaher',
              title: 'The Professor',
              description: 'Legendärer Trainer und Beinhebel-Spezialist'
            }
          ]
        },
        cta: {
          title: 'Meistern Sie Die Kunst Des Grappling',
          description: 'Entwickeln Sie überlegene Grappling-Fähigkeiten in unserem umfassenden Programm.',
          joinButton: 'Grappling-Kurse Beitreten',
          backButton: 'Zurück zu den Kursen'
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
      registerOnline: 'Registrati Online',
      bookClasses: 'Prenota Lezioni',
      visitUs: 'Visitaci',
      dropInWelcome: 'Visite Spontanee Benvenute',
      duringTrainingHours: 'Durante gli orari di allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM',
      instantConfirmation: 'Conferma istantanea'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Forgiamo Combattenti Dal 2017'
      },
      welcome: {
        title: 'Benvenuti a Sport Academy',
        description: 'Situata nel cuore dell\'Alto Adige, Sport Academy offre allenamenti di livello mondiale in Arti Marziali Miste, Brazilian Jiu-Jitsu e Grappling. I nostri istruttori esperti Matteo Parolin e Christian Zecchetto portano anni di esperienza competitiva per aiutarti a raggiungere i tuoi obiettivi nelle arti marziali.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Dedicati all\'allenamento delle arti marziali',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'Per tutte le età e livelli di abilità',
        exploreClasses: 'Esplora i Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come Un Combattente',
        subtitle: 'Scegli la tua disciplina e inizia il tuo viaggio nelle arti marziali'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, wrestling e combattimento a terra per l\'esperienza di sport da combattimento definitiva.'
      },
      bjj: {
        description: 'Padroneggia l\'arte gentile del Brazilian Jiu-Jitsu, concentrandoti su leva, tecnica e combattimento a terra per superare avversari più grandi.'
      },
      grappling: {
        description: 'Sviluppa abilità superiori di grappling attraverso wrestling, takedown e tecniche di sottomissione senza il gi tradizionale.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Tutto ciò di cui hai bisogno per iniziare il tuo viaggio nelle arti marziali'
      },
      quickLinks: {
        viewClasses: 'Vedi Corsi',
        viewClassesDesc: 'Esplora i nostri programmi di allenamento',
        checkSchedule: 'Controlla Orari',
        checkScheduleDesc: 'Trova orari e sedi delle lezioni',
        membershipPlans: 'Piani di Abbonamento',
        membershipPlansDesc: 'Scegli il piano giusto per te',
        contactUs: 'Contattaci',
        contactUsDesc: 'Mettiti in contatto con il nostro team'
      }
    },
    classes: {
      hero: {
        title: 'Corsi di Allenamento',
        description: 'Scopri i nostri programmi completi di arti marziali progettati per tutti i livelli di abilità. Dai corsi per principianti all\'allenamento avanzato, offriamo il percorso perfetto per il tuo viaggio nelle arti marziali.'
      },
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Sperimenta lo sport da combattimento definitivo che combina striking, wrestling e combattimento a terra. I nostri corsi MMA integrano tecniche di boxe, kickboxing, wrestling e Brazilian Jiu-Jitsu per creare combattenti completi.',
        features: [
          'Tecniche di striking (boxe, kickboxing)',
          'Wrestling e takedown',
          'Combattimento a terra e sottomissioni',
          'Condizionamento cardio e forza',
          'Applicazioni di autodifesa'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Padroneggia l\'arte gentile che enfatizza la tecnica sulla forza. Il BJJ ti insegna a usare leva, tempismo e tecnica per controllare e sottomettere gli avversari, rendendolo efficace per praticanti di tutte le taglie.',
        features: [
          'Lavoro di guardia e spazzate',
          'Sottomissioni (strangolamenti e leve articolari)',
          'Controllo posizionale',
          'Tecniche di autodifesa',
          'Strategia mentale e risoluzione problemi'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Sviluppa abilità superiori di wrestling e sottomissione senza il gi tradizionale. Il grappling si concentra su takedown, posizioni di controllo e sottomissioni in un ambiente veloce e atletico.',
        features: [
          'Tecniche di wrestling',
          'Sottomissioni no-gi',
          'Difesa da takedown',
          'Scrambling e transizioni',
          'Preparazione per competizioni'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Introduci i tuoi bambini ai fondamentali del Brazilian Jiu-Jitsu in un ambiente sicuro, divertente e strutturato. Il nostro programma per bambini costruisce fiducia, disciplina e forma fisica.',
        features: [
          'Tecniche base di BJJ',
          'Abilità di autodifesa',
          'Disciplina e rispetto',
          'Forma fisica e coordinazione',
          'Strategie anti-bullismo'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Programma di grappling focalizzato sui giovani che insegna i fondamentali del wrestling e tecniche di sottomissione. Perfetto per giovani atleti che vogliono sviluppare forza, agilità e spirito competitivo.',
        features: [
          'Fondamentali di wrestling',
          'Sottomissioni base',
          'Sviluppo atletico',
          'Preparazione per competizioni',
          'Lavoro di squadra e sportività'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Costruisci una solida base nel wrestling con focus su takedown, controllo e condizionamento. Essenziale per MMA e eccellente per lo sviluppo atletico generale.',
        features: [
          'Takedown singoli e doppi',
          'Sprawl e difesa da takedown',
          'Lavoro in posizione superiore e inferiore',
          'Allenamento di condizionamento e forza',
          'Sviluppo della durezza mentale'
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
        description: 'Incontra i nostri istruttori esperti che portano diversi background di arti marziali ed esperienza competitiva per guidare il tuo percorso di allenamento.'
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore e Fondatore',
        background: 'Con oltre 8 anni di allenamento dedicato ed esperienza competitiva, Matteo si è affermato come un istruttore di arti marziali leader in Alto Adige. Il suo viaggio è iniziato con il Brazilian Jiu-Jitsu e si è espanso per includere MMA e grappling, dove ha gareggiato a livello nazionale e internazionale.',
        specializations: [
          'Brazilian Jiu-Jitsu (Cintura Marrone)',
          'Arti Marziali Miste',
          'Grappling e Wrestling',
          'Coaching per Competizioni',
          'Sviluppo Giovanile'
        ],
        achievements: [
          'Diversi campionati regionali di BJJ',
          'Esperienza competitiva in MMA',
          'Istruttore certificato di BJJ',
          'Oltre 100 studenti allenati',
          'Sviluppatore di programmi giovanili'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta una ricchezza di conoscenze da diversi background di arti marziali. La sua competenza tecnica e il suo stile di insegnamento paziente lo rendono una risorsa inestimabile per il nostro team di coaching, specializzandosi in tecniche di grappling tradizionali e moderne.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Grappling No-Gi',
          'Tecniche di Wrestling',
          'Autodifesa',
          'Sviluppo Tecnico'
        ],
        achievements: [
          'Competizioni regionali di grappling',
          'Piazzamenti in tornei di BJJ',
          'Specializzato in istruzione tecnica',
          'Sviluppo programmi per giovani e adulti',
          'Formazione continua nelle arti marziali'
        ]
      },
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
          title: 'Rispetto e Disciplina',
          description: 'Instilliamo valori di rispetto, disciplina e sportività che si estendono oltre i tappetini di allenamento.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Sperimenta l\'istruzione di livello mondiale dal nostro team di coaching dedicato.'
      }
    },
    schedule: {
      hero: {
        title: 'Orario di Allenamento',
        description: 'Trova gli orari perfetti delle lezioni che si adattano al tuo programma. Offriamo sessioni di allenamento durante tutta la settimana in entrambe le nostre sedi di Campo Tures e Brunico.'
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
      classGuidelines: 'Linee Guida delle Lezioni',
      membershipBenefits: 'Benefici dell\'Abbonamento',
      guidelines: {
        arrive: 'Arriva 10 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'Le lezioni di BJJ richiedono il gi (noleggio disponibile)',
        noGi: 'Le lezioni di grappling sono no-gi (pantaloncini e rash guard)'
      },
      benefits: {
        allClasses: 'Accesso a tutte le lezioni incluso',
        openMat: 'Sessioni di tappeto libero gratuite',
        bothLocations: 'Allenati in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto a Unirti a una Lezione?',
        description: 'Prenota il tuo posto nella nostra prossima sessione di allenamento e inizia il tuo viaggio nelle arti marziali.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il piano di abbonamento che meglio si adatta ai tuoi obiettivi di allenamento e al tuo programma. Tutti gli abbonamenti includono l\'accesso alla nostra gamma completa di corsi.'
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
        title: 'Allenamento Focalizzato BJJ',
        subtitle: 'Programma dedicato di Brazilian Jiu-Jitsu per praticanti seri',
        program: 'Programma Solo BJJ',
        description: 'Allenamento intensivo di BJJ con sessioni tecniche aggiuntive'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      mainIncludes: [
        'Accesso illimitato a tutte le lezioni',
        'Entrambe le sedi Campo Tures e Brunico',
        'Sessioni di tappeto libero',
        'Istruzione adatta ai principianti',
        'Accesso al team competitivo',
        'Noleggio attrezzature disponibile'
      ],
      summerIncludes: [
        'Tutte le lezioni estive incluse',
        'Accesso a entrambe le sedi',
        'Programmazione flessibile',
        'Perfetto per principianti',
        'Nessun impegno a lungo termine'
      ],
      bjjIncludes: [
        'Tutte le lezioni di BJJ incluse',
        'Sessioni tecniche specializzate',
        'Preparazione per competizioni',
        'Accesso a entrambe le sedi',
        'Curriculum avanzato'
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
        description: 'Coaching uno-a-uno su misura per i tuoi obiettivi specifici',
        price: '€50',
        duration: 'per sessione'
      },
      competitionPrep: {
        title: 'Preparazione Competizioni',
        description: 'Allenamento specializzato per tornei imminenti',
        price: '€40',
        duration: 'per sessione'
      },
      seminars: {
        title: 'Seminari',
        description: 'Workshop speciali con istruttori ospiti',
        price: '€30',
        duration: 'per seminario'
      },
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra le stagioni?',
          answer: 'La nostra stagione principale va da settembre a giugno con programmazione completa. La stagione estiva offre un impegno più breve con programmazione flessibile perfetta per provare i nostri corsi.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso alle lezioni in entrambe le nostre strutture di Campo Tures e Brunico.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo una lezione di prova gratuita per nuovi studenti. Contattaci per programmare la tua prima sessione.'
        },
        equipment: {
          question: 'Di quale attrezzatura ho bisogno?',
          answer: 'Per i principianti, solo abbigliamento comodo da allenamento. Abbiamo gi a noleggio disponibili per le lezioni di BJJ. Man mano che progredisci, ti aiuteremo a scegliere l\'attrezzatura giusta.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio Oggi',
        description: 'Scegli il tuo abbonamento e unisciti alla nostra comunità di artisti marziali dedicati.'
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
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due comode strutture di allenamento in Alto Adige'
      },
      address: 'Indirizzo',
      trainingSchedule: 'Orario di Allenamento',
      visitRequirements: {
        title: 'Prima Volta in Visita?',
        subtitle: 'Tutto quello che devi sapere per la tua prima lezione'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      whatWeProvide: 'Cosa Forniamo',
      bring: [
        'Abbigliamento comodo da allenamento',
        'Bottiglia d\'acqua',
        'Asciugamano',
        'Atteggiamento positivo e voglia di imparare'
      ],
      provide: [
        'Tutta l\'attrezzatura da allenamento',
        'Noleggio gi per lezioni di BJJ',
        'Attrezzature protettive',
        'Ambiente di allenamento pulito e sicuro'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Requisiti di Età: 16+ per lezioni adulti, lezioni bambini disponibili',
        health: 'Salute: Per favore informaci di eventuali infortuni o condizioni mediche',
        equipment: 'Attrezzatura: Attrezzatura a noleggio disponibile per visitatori per la prima volta',
        payment: 'Pagamento: Accettiamo contanti, carte e pagamenti online'
      },
      cta: {
        title: 'Pronto a Iniziare l\'Allenamento?',
        description: 'Contattaci oggi per programmare la tua prima lezione o fare domande sui nostri programmi.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Padroneggia l\'arte gentile che enfatizza tecnica, leva e strategia sulla forza bruta'
        },
        overview: {
          title: 'L\'Arte Gentile',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione. Enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte usando leva, tecnica e tempismo.',
            'A Sport Academy, il nostro programma BJJ è progettato per insegnare agli studenti le tecniche fondamentali costruendo forma fisica, durezza mentale e abilità di risoluzione dei problemi. Che tu sia un principiante completo o un praticante esperto, le nostre lezioni forniscono un ambiente di supporto per l\'apprendimento continuo e il miglioramento.'
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
              'Strangolamenti e strozzature',
              'Leve articolari (armbar, kimura)',
              'Leve alle gambe e heel hook',
              'Catene di sottomissioni'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e controllo laterale',
              'Tecniche di controllo della schiena',
              'Ginocchio sulla pancia',
              'Movimenti di transizione'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema di Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di classificazione tradizionale del Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Filosofia delle Cinture',
            description: 'Il sistema di cinture BJJ rappresenta non solo conoscenza tecnica, ma anche sviluppo del carattere, perseveranza e dedizione all\'arte. Ogni livello di cintura richiede anni di allenamento costante e dimostra la padronanza di tecniche e concetti sempre più complessi.'
          }
        },
        history: {
          title: 'Storia e Lignaggio',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu si è evoluto dal jujutsu e judo giapponese tradizionale, portato in Brasile da Mitsuyo Maeda all\'inizio del XX secolo. La famiglia Gracie, in particolare Helio Gracie, ha adattato queste tecniche per creare un\'arte marziale più efficace per i praticanti più piccoli.',
            'L\'arte ha guadagnato riconoscimento mondiale attraverso i primi tornei UFC, dove Royce Gracie ha dimostrato l\'efficacia del BJJ contro avversari più grandi provenienti da diversi background di arti marziali.'
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
          subtitle: 'Unisciti alle nostre lezioni regolari di BJJ in entrambe le sedi'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Sperimenta l\'arte gentile che ha trasformato le arti marziali per sempre.',
          joinButton: 'Unisciti alle Lezioni BJJ',
          backButton: 'Torna ai Corsi'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina striking, wrestling e combattimento a terra'
        },
        overview: {
          title: 'L\'Arte di Combattimento Definitiva',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono lo sport da combattimento più completo, combinando tecniche di boxe, kickboxing, wrestling, Brazilian Jiu-Jitsu e altre arti marziali. Rappresenta l\'evoluzione delle arti marziali, dove i praticanti devono essere versatili in tutti gli aspetti del combattimento.',
            'Il nostro programma MMA a Sport Academy fornisce allenamento completo che sviluppa abilità di striking, grappling e combattimento a terra. Gli studenti imparano a passare senza soluzione di continuità tra diverse distanze di combattimento costruendo il cardio, la forza e la durezza mentale richiesti per questo sport impegnativo.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia il set di abilità diverse richiesto per la competizione di arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Fondamentali di boxe',
              'Tecniche di kickboxing',
              'Lavoro di clinch Muay Thai',
              'Striking difensivo'
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
            title: 'Gioco a Terra',
            items: [
              'Ground and pound',
              'Grappling di sottomissione',
              'Lavoro di guardia per MMA',
              'Transizioni a terra'
            ]
          }
        },
        history: {
          title: 'Storia delle MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma le MMA moderne iniziarono con l\'Ultimate Fighting Championship (UFC) nel 1993. I primi tornei furono progettati per determinare quale arte marziale fosse più efficace nel combattimento reale.',
            'Nel corso degli anni, le MMA si sono evolute da competizioni stile contro stile a uno sport sofisticato dove gli atleti devono essere competenti in tutti gli aspetti del combattimento. I combattenti MMA di oggi sono artisti marziali completi con abilità in striking, wrestling e grappling di sottomissione.'
          ],
          milestones: {
            title: 'Pietre Miliari Chiave',
            events: [
              {
                year: '1993',
                description: 'Primo evento UFC tenuto a Denver, Colorado'
              },
              {
                year: '2001',
                description: 'Regole Unificate delle MMA stabilite'
              },
              {
                year: '2016',
                description: 'Le MMA diventano mainstream con UFC su reti principali'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Scopri i vantaggi fisici e mentali dell\'allenamento MMA',
          items: [
            {
              icon: '💪',
              title: 'Fitness Completo',
              description: 'Allenamento per tutto il corpo che combina cardio, forza e flessibilità'
            },
            {
              icon: '🧠',
              title: 'Durezza Mentale',
              description: 'Sviluppa fiducia, disciplina e abilità di risoluzione dei problemi'
            },
            {
              icon: '🥊',
              title: 'Autodifesa',
              description: 'Impara abilità pratiche per situazioni del mondo reale'
            },
            {
              icon: '🏆',
              title: 'Pronto per la Competizione',
              description: 'Preparati per competizioni amatoriali e professionali'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento MMA',
          subtitle: 'Unisciti alle nostre lezioni complete di MMA'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Impara dalle tecniche dei più grandi combattenti nella storia delle MMA',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Ex Campione UFC dei Pesi Medi noto per la sua precisione nel striking'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Leggendario peso massimo con incredibile gioco a terra'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Dominante peso medio-massimo con striking creativo'
            }
          ]
        },
        cta: {
          title: 'Entra nell\'Ottagono',
          description: 'Inizia il tuo viaggio nello sport da combattimento più completo del mondo.',
          joinButton: 'Unisciti alle Lezioni MMA',
          backButton: 'Torna ai Corsi'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Padroneggia l\'arte del wrestling e grappling di sottomissione senza gi'
        },
        overview: {
          title: 'L\'Arte del Controllo',
          paragraphs: [
            'Il grappling comprende wrestling, prese di sottomissione e tecniche di controllo a terra eseguite senza il gi tradizionale. Quest\'arte marziale dinamica enfatizza takedown, controllo posizionale e sottomissioni in un ambiente veloce e atletico.',
            'Il nostro programma di grappling combina elementi di wrestling, Brazilian Jiu-Jitsu e grappling di sottomissione per creare grappler completi. Gli studenti sviluppano eccezionale consapevolezza corporea, forza e la capacità di controllare gli avversari attraverso tecnica e posizionamento superiori.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Sviluppa le abilità essenziali per grappling efficace e wrestling di sottomissione',
          takedowns: {
            title: 'Takedown',
            items: [
              'Takedown a gamba singola e doppia',
              'Lanci d\'anca e proiezioni',
              'Spazzate con i piedi',
              'Combinazioni di takedown'
            ]
          },
          control: {
            title: 'Controllo',
            items: [
              'Controllo in posizione superiore',
              'Combinazioni di immobilizzazione',
              'Tecniche di ride e controllo',
              'Movimenti di transizione'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Leve alle gambe e heel hook',
              'Sottomissioni alle braccia',
              'Strangolamenti e strozzature',
              'Catene di sottomissioni'
            ]
          }
        },
        methodology: {
          title: 'Metodologia di Allenamento',
          subtitle: 'Il nostro approccio sistematico per sviluppare abilità superiori di grappling',
          technical: {
            title: 'Sviluppo Tecnico',
            methods: [
              {
                title: 'Drilling',
                description: 'Pratica ripetitiva di movimenti e tecniche fondamentali'
              },
              {
                title: 'Sparring Posizionale',
                description: 'Allenamento dal vivo da posizioni specifiche per sviluppare il tempismo'
              },
              {
                title: 'Flow Rolling',
                description: 'Pratica di movimento continuo per migliorare le transizioni'
              }
            ]
          },
          conditioning: {
            title: 'Condizionamento Fisico',
            methods: [
              {
                title: 'Cardio Grappling',
                description: 'Condizionamento sport-specifico per resistenza e potenza'
              },
              {
                title: 'Allenamento della Forza',
                description: 'Sviluppo della forza funzionale per il grappling'
              },
              {
                title: 'Flessibilità',
                description: 'Lavoro di mobilità per prevenire infortuni e migliorare le prestazioni'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Scopri i vantaggi dell\'allenamento dedicato di grappling',
          items: [
            {
              icon: '🤼',
              title: 'Sviluppo Atletico',
              description: 'Costruisci forza funzionale, resistenza e coordinazione'
            },
            {
              icon: '🧩',
              title: 'Risoluzione Problemi',
              description: 'Sviluppa pensiero tattico e adattabilità sotto pressione'
            },
            {
              icon: '🏃',
              title: 'Fitness Cardio',
              description: 'Allenamento intenso per tutto il corpo che costruisce resistenza incredibile'
            },
            {
              icon: '🎯',
              title: 'Precisione Tecnica',
              description: 'Padroneggia i dettagli sottili che separano il buono dal grande'
            }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Unisciti alle nostre lezioni dinamiche di grappling'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Studia le tecniche dei più grandi grappler della storia',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'The King',
              description: 'Grappler no-gi dominante e campione ADCC'
            },
            {
              name: 'Marcelo Garcia',
              title: 'The Wizard',
              description: 'Campione mondiale multiplo noto per il suo gioco di guardia'
            },
            {
              name: 'John Danaher',
              title: 'The Professor',
              description: 'Allenatore leggendario e specialista di leve alle gambe'
            }
          ]
        },
        cta: {
          title: 'Padroneggia l\'Arte del Grappling',
          description: 'Sviluppa abilità superiori di grappling nel nostro programma completo.',
          joinButton: 'Unisciti alle Lezioni di Grappling',
          backButton: 'Torna ai Corsi'
        }
      }
    },
    footer: {
      tagline: 'Allenamento Elite di MMA, BJJ e Grappling',
      subtitle: 'Forgiamo Combattenti Dal 2017',
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