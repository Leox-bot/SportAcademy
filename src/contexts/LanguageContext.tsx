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
        description: 'Where champions are forged through dedication, discipline, and expert training. Join our elite community of fighters and discover your true potential in MMA, Brazilian Jiu-Jitsu, and Grappling.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Proven track record since 2017',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures and Brunico',
        trainingPrograms: 'Training Programs',
        programsDescription: 'From beginner to elite level',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Master the art of combat through our comprehensive training programs'
      },
      mma: {
        description: 'Complete mixed martial arts training combining striking, grappling, and ground fighting techniques for the ultimate combat experience.'
      },
      bjj: {
        description: 'Master the gentle art of Brazilian Jiu-Jitsu, focusing on leverage, technique, and mental strategy over brute strength.'
      },
      grappling: {
        description: 'Develop superior ground control, takedowns, and submission techniques in our comprehensive grappling program.'
      },
      getStarted: {
        title: 'Get Started Today',
        subtitle: 'Choose your path to becoming a complete fighter'
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
        title: 'Training Classes',
        description: 'Discover our comprehensive range of martial arts classes designed for all skill levels. From beginner-friendly sessions to advanced competition training.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'The ultimate combat sport combining striking, grappling, and ground fighting. Our MMA classes integrate techniques from boxing, kickboxing, wrestling, and Brazilian Jiu-Jitsu.',
        features: [
          'Stand-up striking techniques',
          'Takedowns and wrestling',
          'Ground and pound',
          'Submission defense',
          'Cage work and clinch fighting',
          'Cardio and conditioning'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'The gentle art that emphasizes technique over strength. Learn the sophisticated ground fighting system that has revolutionized martial arts.',
        features: [
          'Guard work and sweeps',
          'Submissions and escapes',
          'Position control',
          'Self-defense applications',
          'Competition preparation',
          'Mental strategy and problem-solving'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Focus on takedowns, ground control, and submission techniques without the traditional gi. Perfect for MMA preparation and self-defense.',
        features: [
          'Wrestling takedowns',
          'No-gi submission techniques',
          'Scrambles and transitions',
          'Leg locks and heel hooks',
          'Pressure passing',
          'Competition strategies'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Specially designed Brazilian Jiu-Jitsu program for children aged 6-14. Focus on discipline, respect, and fundamental techniques in a safe, fun environment.',
        features: [
          'Basic BJJ fundamentals',
          'Self-defense skills',
          'Discipline and respect',
          'Confidence building',
          'Anti-bullying techniques',
          'Fun games and activities'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Introduction to grappling and wrestling for young athletes aged 8-16. Builds strength, coordination, and mental toughness.',
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
        description: 'Traditional wrestling techniques focusing on takedowns, control, and conditioning. Essential foundation for MMA and grappling.',
        features: [
          'Single and double leg takedowns',
          'Hip tosses and throws',
          'Sprawls and defensive techniques',
          'Conditioning and drilling',
          'Competition wrestling',
          'Mental toughness training'
        ]
      },
      whatYouLearn: 'What You\'ll Learn',
      cta: {
        title: 'Ready to Start Training?',
        description: 'Join our community of dedicated athletes and begin your martial arts journey today.'
      }
    },
    schedule: {
      hero: {
        title: 'Training Schedule',
        description: 'Plan your training with our comprehensive schedule across both locations. All classes are included in your membership.'
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
      cta: {
        title: 'Ready to Join?',
        description: 'Start training with us today and become part of our fighting family.'
      }
    },
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Meet our world-class instructors who bring years of experience and passion to every training session.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 15 years of martial arts experience, Matteo founded Sport Academy in 2017 with a vision to bring world-class MMA and BJJ training to South Tyrol. His dedication to technical excellence and student development has made Sport Academy a premier training destination.',
        specializations: [
          'Brazilian Jiu-Jitsu Black Belt',
          'MMA Competition Coaching',
          'Wrestling Techniques',
          'Competition Strategy'
        ],
        achievements: [
          'Founded Sport Academy in 2017',
          'Trained multiple regional champions',
          'Over 100 successful student promotions',
          'Certified BJJ Black Belt instructor'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings a wealth of knowledge in both traditional martial arts and modern MMA techniques. His patient teaching style and technical expertise make him an invaluable part of our coaching team.',
        specializations: [
          'Striking Techniques',
          'Grappling Fundamentals',
          'Youth Programs',
          'Beginner Development'
        ],
        achievements: [
          'Over 10 years teaching experience',
          'Specialized in youth development',
          'Competition coaching certification',
          'Advanced striking instructor'
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
          description: 'Every student is unique. We tailor our approach to help each person reach their personal goals and potential.'
        },
        respect: {
          title: 'Respect & Discipline',
          description: 'We instill values of respect, discipline, and sportsmanship that extend far beyond the training mats.'
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
        description: 'Choose the membership plan that fits your goals and schedule. All plans include access to both training locations.'
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
        description: 'Access to all BJJ classes and open mat sessions'
      },
      adults: 'Adults',
      students: 'Students',
      month: 'month',
      whatsIncluded: 'What\'s Included',
      mainIncludes: [
        'All classes at both locations',
        'Open mat sessions',
        'Competition team training',
        'Technique workshops',
        'Progress tracking and belt promotions'
      ],
      summerIncludes: [
        'All summer classes',
        'Open mat sessions',
        'Intensive workshops',
        'Flexible scheduling'
      ],
      bjjIncludes: [
        'All BJJ classes',
        'Open mat sessions',
        'Belt progression system',
        'Competition preparation'
      ],
      selectMainSeason: 'Select Main Season',
      selectSummerSeason: 'Select Summer Season',
      selectBjjOnly: 'Select BJJ Only',
      faq: {
        title: 'Frequently Asked Questions',
        seasons: {
          question: 'What\'s the difference between seasons?',
          answer: 'The main season (September-June) offers our complete program with all classes and intensive training. The summer season (July-August) is a shorter program with flexible scheduling perfect for maintaining skills during summer break.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to classes at both Campo Tures and Brunico locations. You can mix and match based on your schedule.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer a free trial class for new students. Contact us to schedule your trial and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For your first class, just bring comfortable workout clothes and water. We provide all necessary training equipment. As you progress, we\'ll guide you on personal gear purchases.'
        }
      },
      cta: {
        title: 'Start Your Journey',
        description: 'Join Sport Academy today and become part of our elite training community.'
      }
    },
    contact: {
      hero: {
        title: 'Contact Us',
        description: 'Ready to start your martial arts journey? Get in touch with us to learn more about our programs and schedule your first class.'
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
        'Positive attitude and willingness to learn',
        'Valid ID for registration'
      ],
      provide: [
        'All training equipment and mats',
        'Changing rooms and showers',
        'Professional instruction',
        'Safe and clean training environment'
      ],
      specialInstructions: 'Important Information',
      instructions: {
        age: 'Minimum Age: 6 years old for kids classes, 16+ for adult classes',
        health: 'Health Requirements: Please inform us of any injuries or medical conditions',
        equipment: 'Equipment: All training gear provided for beginners',
        payment: 'Payment: Cash and card accepted'
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Take the first step towards mastering martial arts. Contact us today!'
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
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent through proper technique and leverage.',
            'At Sport Academy, our BJJ program is designed to teach students the fundamental principles of this sophisticated art. Whether you\'re a complete beginner or an experienced practitioner, our structured curriculum will help you develop both technical skills and tactical understanding.',
            'Our classes emphasize live sparring (rolling) in a controlled environment, allowing students to test their techniques against resisting opponents while maintaining safety and respect.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Master the fundamental skills of Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard Work',
            items: [
              'Closed guard fundamentals',
              'Open guard variations',
              'Guard sweeps and transitions',
              'Submission attacks from guard'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Arm locks and joint manipulation',
              'Chokes and strangulation',
              'Leg locks and foot attacks',
              'Submission chains and setups'
            ]
          },
          positions: {
            title: 'Positional Control',
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
          subtitle: 'Progress through the traditional ranking system',
          philosophy: {
            title: 'Belt Philosophy',
            description: 'The BJJ belt system represents not just technical knowledge, but also character development, teaching ability, and time on the mats. Each belt level requires dedication, consistency, and demonstration of both technical and mental growth.'
          }
        },
        history: {
          title: 'History & Lineage',
          paragraphs: [
            'Brazilian Jiu-Jitsu evolved from traditional Japanese jujutsu and judo, brought to Brazil by Mitsuyo Maeda in the early 20th century. The Gracie family, particularly Helio Gracie, adapted these techniques to create a more efficient system for smaller practitioners.',
            'The art gained worldwide recognition through the early UFC events, where Royce Gracie demonstrated the effectiveness of BJJ against larger opponents from different martial arts backgrounds.',
            'Today, BJJ is practiced worldwide and forms the foundation of modern mixed martial arts ground fighting.'
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
          subtitle: 'Regular classes at both locations'
        },
        cta: {
          title: 'Start Your BJJ Journey',
          description: 'Join our Brazilian Jiu-Jitsu program and discover the gentle art.',
          joinButton: 'Join BJJ Program'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Master takedowns, control, and submissions without the gi'
        },
        overview: {
          title: 'No-Gi Grappling',
          paragraphs: [
            'Grappling, also known as submission wrestling or no-gi jiu-jitsu, focuses on takedowns, ground control, and submission techniques without the traditional gi uniform. This style emphasizes speed, athleticism, and adaptability.',
            'Our grappling program combines elements from wrestling, Brazilian jiu-jitsu, sambo, and catch wrestling to create a comprehensive ground fighting system. Students learn to control opponents through superior positioning and finish fights with various submission holds.',
            'This discipline is essential for MMA preparation and provides practical self-defense skills that work in real-world situations where clothing cannot be relied upon for grips.'
          ]
        },
        techniques: {
          title: 'Grappling Techniques',
          subtitle: 'Essential skills for no-gi ground fighting',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single and double leg attacks',
              'Hip tosses and throws',
              'Foot sweeps and trips',
              'Sprawls and takedown defense'
            ]
          },
          control: {
            title: 'Ground Control',
            items: [
              'Pressure passing techniques',
              'Underhooks and overhooks',
              'Leg entanglements',
              'Scrambling and transitions'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Leg locks and heel hooks',
              'Arm drags and arm locks',
              'Chokes and neck cranks',
              'Submission combinations'
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
                description: 'Live practice from specific positions and scenarios'
              },
              {
                title: 'Flow Rolling',
                description: 'Continuous movement practice focusing on transitions'
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
              icon: '🎯',
              title: 'Self Defense',
              description: 'Practical skills for real-world situations'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'No-gi training sessions at both locations'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Influential figures in the grappling world',
          grapplers: [
            {
              name: 'John Danaher',
              title: 'Submission Specialist',
              description: 'Revolutionary leg lock system developer'
            },
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominant no-gi competitor and innovator'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Technical Master',
              description: 'Multiple-time world champion known for technique'
            }
          ]
        },
        cta: {
          title: 'Master No-Gi Grappling',
          description: 'Develop superior ground fighting skills in our grappling program.',
          joinButton: 'Join Grappling Program'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining all martial arts disciplines'
        },
        overview: {
          title: 'The Ultimate Fighting System',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, kickboxing, wrestling, Brazilian jiu-jitsu, and other martial arts. Fighters must be proficient in striking, grappling, and ground fighting to succeed.',
            'Our MMA program at Sport Academy provides comprehensive training in all aspects of mixed martial arts. Students learn to seamlessly transition between striking and grappling, developing the skills needed for competition or self-defense.',
            'Whether your goal is professional competition, amateur fighting, or simply becoming a complete martial artist, our structured MMA curriculum will take you there safely and effectively.'
          ]
        },
        techniques: {
          title: 'MMA Techniques',
          subtitle: 'Master all ranges of combat',
          striking: {
            title: 'Striking',
            items: [
              'Boxing combinations and footwork',
              'Kickboxing and knee strikes',
              'Elbow strikes and clinch work',
              'Defensive head movement'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown techniques',
              'Takedown defense and sprawls',
              'Cage wrestling and clinch',
              'Ground and pound positioning'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Submission techniques',
              'Ground and pound',
              'Submission defense',
              'Transitions and escapes'
            ]
          }
        },
        history: {
          title: 'MMA History',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with the Ultimate Fighting Championship (UFC) in 1993. The early events pitted different martial arts styles against each other to determine the most effective fighting system.',
            'Brazilian Jiu-Jitsu initially dominated, but as the sport evolved, fighters began cross-training in multiple disciplines. This led to the development of well-rounded athletes who could fight effectively in all ranges.',
            'Today, MMA is a global sport with professional organizations worldwide, and it continues to evolve as new techniques and training methods are developed.'
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
                description: 'Evolution of well-rounded fighters and modern MMA'
              },
              {
                year: '2010s',
                description: 'MMA becomes mainstream with global recognition'
              }
            ]
          }
        },
        benefits: {
          title: 'MMA Training Benefits',
          subtitle: 'Complete physical and mental development',
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
              icon: '🛡️',
              title: 'Self Defense',
              description: 'Most effective real-world protection skills'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Complete mixed martial arts training'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Fighters who shaped the sport',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC Pioneer',
              description: 'Proved effectiveness of Brazilian Jiu-Jitsu'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Longest reigning UFC middleweight champion'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendary heavyweight with incredible record'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Master all aspects of combat in our comprehensive MMA program.',
          joinButton: 'Join MMA Program'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Forging Champions Since 2017',
      copyright: '© 2024 Sport Academy. All rights reserved.'
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
      visitUs: 'Visit Us',
      dropInWelcome: 'Drop-ins Welcome',
      duringTrainingHours: 'During training hours',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates and DMs',
      instantConfirmation: 'Instant confirmation'
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
        description: 'Wo Champions durch Hingabe, Disziplin und Expertentraining geschmiedet werden. Treten Sie unserer Elite-Gemeinschaft von Kämpfern bei und entdecken Sie Ihr wahres Potenzial in MMA, Brazilian Jiu-Jitsu und Grappling.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Bewährte Erfolgsbilanz seit 2017',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Campo Tures und Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'Vom Anfänger bis zum Elite-Level',
        exploreClasses: 'Entdecken Sie unsere Kurse'
      },
      trainLikeFighter: {
        title: 'Trainiere wie ein Kämpfer',
        subtitle: 'Meistere die Kampfkunst durch unsere umfassenden Trainingsprogramme'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training, das Schlag-, Grappling- und Bodenkampftechniken für das ultimative Kampferlebnis kombiniert.'
      },
      bjj: {
        description: 'Meistere die sanfte Kunst des Brazilian Jiu-Jitsu, die sich auf Hebelwirkung, Technik und mentale Strategie statt auf rohe Kraft konzentriert.'
      },
      grappling: {
        description: 'Entwickle überlegene Bodenkontrolle, Takedowns und Submission-Techniken in unserem umfassenden Grappling-Programm.'
      },
      getStarted: {
        title: 'Starte heute',
        subtitle: 'Wähle deinen Weg, um ein kompletter Kämpfer zu werden'
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
        title: 'Trainingskurse',
        description: 'Entdecken Sie unser umfassendes Angebot an Kampfkunstkursen für alle Leistungsstufen. Von anfängerfreundlichen Stunden bis hin zu fortgeschrittenem Wettkampftraining.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Der ultimative Kampfsport, der Schlagen, Grappling und Bodenkampf kombiniert. Unsere MMA-Kurse integrieren Techniken aus Boxen, Kickboxen, Ringen und Brazilian Jiu-Jitsu.',
        features: [
          'Stand-up Schlagtechniken',
          'Takedowns und Ringen',
          'Ground and Pound',
          'Submission-Verteidigung',
          'Käfigarbeit und Clinch-Kampf',
          'Cardio und Konditionierung'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Die sanfte Kunst, die Technik über Kraft betont. Lernen Sie das ausgeklügelte Bodenkampfsystem, das die Kampfkünste revolutioniert hat.',
        features: [
          'Guard-Arbeit und Sweeps',
          'Submissions und Befreiungen',
          'Positionskontrolle',
          'Selbstverteidigungsanwendungen',
          'Wettkampfvorbereitung',
          'Mentale Strategie und Problemlösung'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Fokus auf Takedowns, Bodenkontrolle und Submission-Techniken ohne den traditionellen Gi. Perfekt für MMA-Vorbereitung und Selbstverteidigung.',
        features: [
          'Wrestling-Takedowns',
          'No-Gi Submission-Techniken',
          'Scrambles und Übergänge',
          'Leg Locks und Heel Hooks',
          'Pressure Passing',
          'Wettkampfstrategien'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Speziell entwickeltes Brazilian Jiu-Jitsu Programm für Kinder im Alter von 6-14 Jahren. Fokus auf Disziplin, Respekt und grundlegende Techniken in einer sicheren, spaßigen Umgebung.',
        features: [
          'Grundlegende BJJ-Fundamentals',
          'Selbstverteidigungsfähigkeiten',
          'Disziplin und Respekt',
          'Selbstvertrauen aufbauen',
          'Anti-Mobbing-Techniken',
          'Spaßige Spiele und Aktivitäten'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Einführung in Grappling und Ringen für junge Athleten im Alter von 8-16 Jahren. Baut Kraft, Koordination und mentale Stärke auf.',
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
        description: 'Traditionelle Wrestling-Techniken mit Fokus auf Takedowns, Kontrolle und Konditionierung. Wesentliche Grundlage für MMA und Grappling.',
        features: [
          'Single und Double Leg Takedowns',
          'Hip Tosses und Würfe',
          'Sprawls und Verteidigungstechniken',
          'Konditionierung und Drilling',
          'Wettkampf-Wrestling',
          'Training der mentalen Stärke'
        ]
      },
      whatYouLearn: 'Was Sie lernen werden',
      cta: {
        title: 'Bereit zum Training?',
        description: 'Treten Sie unserer Gemeinschaft engagierter Athleten bei und beginnen Sie heute Ihre Kampfkunst-Reise.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Planen Sie Ihr Training mit unserem umfassenden Stundenplan an beiden Standorten. Alle Kurse sind in Ihrer Mitgliedschaft enthalten.'
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
      cta: {
        title: 'Bereit beizutreten?',
        description: 'Beginnen Sie heute mit dem Training bei uns und werden Sie Teil unserer Kämpferfamilie.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lernen Sie unsere Weltklasse-Instruktoren kennen, die jahrelange Erfahrung und Leidenschaft in jede Trainingseinheit einbringen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 15 Jahren Kampfkunsterfahrung gründete Matteo 2017 die Sport Academy mit der Vision, Weltklasse-MMA- und BJJ-Training nach Südtirol zu bringen. Seine Hingabe an technische Exzellenz und Schülerentwicklung hat die Sport Academy zu einem erstklassigen Trainingsziel gemacht.',
        specializations: [
          'Brazilian Jiu-Jitsu Schwarzgurt',
          'MMA-Wettkampftraining',
          'Wrestling-Techniken',
          'Wettkampfstrategie'
        ],
        achievements: [
          'Gründung der Sport Academy 2017',
          'Training mehrerer regionaler Champions',
          'Über 100 erfolgreiche Schülerbeförderungen',
          'Zertifizierter BJJ-Schwarzgurt-Instruktor'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior-Instruktor',
        background: 'Christian bringt eine Fülle von Wissen sowohl in traditionellen Kampfkünsten als auch in modernen MMA-Techniken mit. Sein geduldiger Unterrichtsstil und seine technische Expertise machen ihn zu einem unschätzbaren Teil unseres Trainerteams.',
        specializations: [
          'Schlagtechniken',
          'Grappling-Grundlagen',
          'Jugendprogramme',
          'Anfängerentwicklung'
        ],
        achievements: [
          'Über 10 Jahre Unterrichtserfahrung',
          'Spezialisiert auf Jugendentwicklung',
          'Wettkampftrainer-Zertifizierung',
          'Fortgeschrittener Schlag-Instruktor'
        ]
      },
      background: 'Hintergrund',
      specializations: 'Spezialisierungen',
      achievements: 'Erfolge',
      philosophy: {
        title: 'Unsere Trainingsphilosophie',
        technical: {
          title: 'Technische Exzellenz',
          description: 'Wir konzentrieren uns auf die richtige Technik und Grundlagen und stellen sicher, dass jeder Schüler eine solide Basis für langfristigen Erfolg aufbaut.'
        },
        individual: {
          title: 'Individuelle Entwicklung',
          description: 'Jeder Schüler ist einzigartig. Wir passen unseren Ansatz an, um jeder Person zu helfen, ihre persönlichen Ziele und ihr Potenzial zu erreichen.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir vermitteln Werte von Respekt, Disziplin und Sportlichkeit, die weit über die Trainingsmatten hinausgehen.'
        }
      },
      cta: {
        title: 'Trainiere mit den Besten',
        description: 'Erleben Sie Weltklasse-Unterricht und bringen Sie Ihre Fähigkeiten auf die nächste Stufe.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wählen Sie den Mitgliedschaftsplan, der zu Ihren Zielen und Ihrem Zeitplan passt. Alle Pläne beinhalten Zugang zu beiden Trainingsstandorten.'
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
        program: 'BJJ-fokussiertes Programm',
        description: 'Zugang zu allen BJJ-Kursen und Open Mat-Sitzungen'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was enthalten ist',
      mainIncludes: [
        'Alle Kurse an beiden Standorten',
        'Open Mat-Sitzungen',
        'Wettkampfteam-Training',
        'Technik-Workshops',
        'Fortschrittsverfolgung und Gürtelbeförderungen'
      ],
      summerIncludes: [
        'Alle Sommerkurse',
        'Open Mat-Sitzungen',
        'Intensive Workshops',
        'Flexible Terminplanung'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse',
        'Open Mat-Sitzungen',
        'Gürtel-Fortschrittssystem',
        'Wettkampfvorbereitung'
      ],
      selectMainSeason: 'Hauptsaison wählen',
      selectSummerSeason: 'Sommersaison wählen',
      selectBjjOnly: 'Nur BJJ wählen',
      faq: {
        title: 'Häufig gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Die Hauptsaison (September-Juni) bietet unser komplettes Programm mit allen Kursen und intensivem Training. Die Sommersaison (Juli-August) ist ein kürzeres Programm mit flexibler Terminplanung, perfekt um die Fähigkeiten während der Sommerpause zu erhalten.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu Kursen an beiden Standorten Campo Tures und Bruneck. Sie können je nach Ihrem Zeitplan mischen und anpassen.'
        },
        trial: {
          question: 'Bieten Sie Probestunden an?',
          answer: 'Absolut! Wir bieten eine kostenlose Probestunde für neue Schüler an. Kontaktieren Sie uns, um Ihre Probestunde zu planen und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung benötige ich?',
          answer: 'Für Ihre erste Stunde bringen Sie einfach bequeme Trainingskleidung und Wasser mit. Wir stellen alle notwendige Trainingsausrüstung zur Verfügung. Während Sie Fortschritte machen, werden wir Sie beim Kauf persönlicher Ausrüstung beraten.'
        }
      },
      cta: {
        title: 'Beginnen Sie Ihre Reise',
        description: 'Treten Sie heute der Sport Academy bei und werden Sie Teil unserer Elite-Trainingsgemeinschaft.'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Bereit, Ihre Kampfkunst-Reise zu beginnen? Nehmen Sie Kontakt mit uns auf, um mehr über unsere Programme zu erfahren und Ihre erste Stunde zu planen.'
      },
      getInTouch: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Mehrere Wege, um mit der Sport Academy in Verbindung zu treten'
      },
      callUs: 'Rufen Sie uns an',
      instagram: 'Instagram',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Standorte in Südtirol'
      },
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      visitRequirements: {
        title: 'Zum ersten Mal hier?',
        subtitle: 'Alles was Sie für Ihre erste Stunde wissen müssen'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was mitbringen',
      whatWeProvide: 'Was wir bereitstellen',
      bring: [
        'Bequeme Trainingskleidung',
        'Wasserflasche',
        'Positive Einstellung und Lernbereitschaft',
        'Gültiger Ausweis für die Anmeldung'
      ],
      provide: [
        'Alle Trainingsausrüstung und Matten',
        'Umkleideräume und Duschen',
        'Professioneller Unterricht',
        'Sichere und saubere Trainingsumgebung'
      ],
      specialInstructions: 'Wichtige Informationen',
      instructions: {
        age: 'Mindestalter: 6 Jahre für Kinderkurse, 16+ für Erwachsenenkurse',
        health: 'Gesundheitsanforderungen: Bitte informieren Sie uns über Verletzungen oder medizinische Beschwerden',
        equipment: 'Ausrüstung: Alle Trainingsausrüstung für Anfänger bereitgestellt',
        payment: 'Zahlung: Bargeld und Karte akzeptiert'
      },
      cta: {
        title: 'Bereit anzufangen?',
        description: 'Machen Sie den ersten Schritt zur Beherrschung der Kampfkünste. Kontaktieren Sie uns heute!'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Meistere die sanfte Kunst durch Technik, Hebelwirkung und Strategie'
        },
        overview: {
          title: 'Die sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Es betont das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner durch richtige Technik und Hebelwirkung verteidigen kann.',
            'In der Sport Academy ist unser BJJ-Programm darauf ausgelegt, den Schülern die grundlegenden Prinzipien dieser ausgeklügelten Kunst zu vermitteln. Ob Sie ein kompletter Anfänger oder ein erfahrener Praktiker sind, unser strukturierter Lehrplan wird Ihnen helfen, sowohl technische Fähigkeiten als auch taktisches Verständnis zu entwickeln.',
            'Unsere Kurse betonen Live-Sparring (Rolling) in einer kontrollierten Umgebung, wodurch die Schüler ihre Techniken gegen sich wehrende Gegner testen können, während Sicherheit und Respekt gewährleistet bleiben.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Meistere die grundlegenden Fähigkeiten des Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard-Arbeit',
            items: [
              'Closed Guard Grundlagen',
              'Open Guard Variationen',
              'Guard Sweeps und Übergänge',
              'Submission-Angriffe aus der Guard'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Armhebel und Gelenkmanipulation',
              'Würgegriffe und Strangulation',
              'Leg Locks und Fußangriffe',
              'Submission-Ketten und Setups'
            ]
          },
          positions: {
            title: 'Positionskontrolle',
            items: [
              'Mount und Side Control',
              'Back Control und Rear Mount',
              'Knee on Belly und North-South',
              'Übergänge zwischen Positionen'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ-Gürtelsystem',
          subtitle: 'Fortschritt durch das traditionelle Ranking-System',
          philosophy: {
            title: 'Gürtel-Philosophie',
            description: 'Das BJJ-Gürtelsystem repräsentiert nicht nur technisches Wissen, sondern auch Charakterentwicklung, Lehrfähigkeit und Zeit auf den Matten. Jede Gürtelstufe erfordert Hingabe, Beständigkeit und den Nachweis sowohl technischen als auch mentalen Wachstums.'
          }
        },
        history: {
          title: 'Geschichte & Abstammung',
          paragraphs: [
            'Brazilian Jiu-Jitsu entwickelte sich aus traditionellem japanischem Jujutsu und Judo, das von Mitsuyo Maeda im frühen 20. Jahrhundert nach Brasilien gebracht wurde. Die Gracie-Familie, insbesondere Helio Gracie, passte diese Techniken an, um ein effizienteres System für kleinere Praktiker zu schaffen.',
            'Die Kunst erlangte weltweite Anerkennung durch die frühen UFC-Veranstaltungen, wo Royce Gracie die Wirksamkeit von BJJ gegen größere Gegner aus verschiedenen Kampfkunst-Hintergründen demonstrierte.',
            'Heute wird BJJ weltweit praktiziert und bildet die Grundlage des modernen Mixed Martial Arts Bodenkampfs.'
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
          title: 'BJJ-Trainingsplan',
          subtitle: 'Regelmäßige Kurse an beiden Standorten'
        },
        cta: {
          title: 'Beginnen Sie Ihre BJJ-Reise',
          description: 'Treten Sie unserem Brazilian Jiu-Jitsu Programm bei und entdecken Sie die sanfte Kunst.',
          joinButton: 'BJJ-Programm beitreten'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Meistere Takedowns, Kontrolle und Submissions ohne Gi'
        },
        overview: {
          title: 'No-Gi Grappling',
          paragraphs: [
            'Grappling, auch bekannt als Submission Wrestling oder No-Gi Jiu-Jitsu, konzentriert sich auf Takedowns, Bodenkontrolle und Submission-Techniken ohne die traditionelle Gi-Uniform. Dieser Stil betont Geschwindigkeit, Athletik und Anpassungsfähigkeit.',
            'Unser Grappling-Programm kombiniert Elemente aus Wrestling, Brazilian Jiu-Jitsu, Sambo und Catch Wrestling, um ein umfassendes Bodenkampfsystem zu schaffen. Die Schüler lernen, Gegner durch überlegene Positionierung zu kontrollieren und Kämpfe mit verschiedenen Submission-Griffen zu beenden.',
            'Diese Disziplin ist wesentlich für die MMA-Vorbereitung und bietet praktische Selbstverteidigungsfähigkeiten, die in realen Situationen funktionieren, wo man sich nicht auf Kleidung für Griffe verlassen kann.'
          ]
        },
        techniques: {
          title: 'Grappling-Techniken',
          subtitle: 'Wesentliche Fähigkeiten für No-Gi Bodenkampf',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single und Double Leg Angriffe',
              'Hip Tosses und Würfe',
              'Fußfeger und Trips',
              'Sprawls und Takedown-Verteidigung'
            ]
          },
          control: {
            title: 'Bodenkontrolle',
            items: [
              'Pressure Passing Techniken',
              'Underhooks und Overhooks',
              'Beinverschränkungen',
              'Scrambling und Übergänge'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Leg Locks und Heel Hooks',
              'Arm Drags und Arm Locks',
              'Würgegriffe und Nackenhebel',
              'Submission-Kombinationen'
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
                description: 'Wiederholende Praxis von Techniken zum Aufbau des Muskelgedächtnisses'
              },
              {
                title: 'Positionelles Sparring',
                description: 'Live-Praxis aus spezifischen Positionen und Szenarien'
              },
              {
                title: 'Flow Rolling',
                description: 'Kontinuierliche Bewegungspraxis mit Fokus auf Übergänge'
              }
            ]
          },
          conditioning: {
            title: 'Körperliche Konditionierung',
            methods: [
              {
                title: 'Grappling Cardio',
                description: 'Sportspezifische Konditionierung für Ausdauer'
              },
              {
                title: 'Krafttraining',
                description: 'Funktionelle Kraft für Grappling-Bewegungen'
              },
              {
                title: 'Flexibilität',
                description: 'Mobilitätsarbeit zur Verletzungsprävention und Leistung'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grapplings',
          subtitle: 'Körperliche und mentale Vorteile des No-Gi Trainings',
          items: [
            {
              icon: '💪',
              title: 'Ganzkörperkraft',
              description: 'Entwickelt funktionelle Kraft und Muskelausdauer'
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
              icon: '🎯',
              title: 'Selbstverteidigung',
              description: 'Praktische Fähigkeiten für reale Situationen'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Zeitplan',
          subtitle: 'No-Gi Trainingseinheiten an beiden Standorten'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Einflussreiche Figuren in der Grappling-Welt',
          grapplers: [
            {
              name: 'John Danaher',
              title: 'Submission-Spezialist',
              description: 'Revolutionärer Leg Lock System Entwickler'
            },
            {
              name: 'Gordon Ryan',
              title: 'ADCC-Champion',
              description: 'Dominanter No-Gi Wettkämpfer und Innovator'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Technischer Meister',
              description: 'Mehrfacher Weltmeister bekannt für Technik'
            }
          ]
        },
        cta: {
          title: 'Meistere No-Gi Grappling',
          description: 'Entwickle überlegene Bodenkampffähigkeiten in unserem Grappling-Programm.',
          joinButton: 'Grappling-Programm beitreten'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der alle Kampfkunst-Disziplinen kombiniert'
        },
        overview: {
          title: 'Das ultimative Kampfsystem',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der vollständigste Kampfsport, der Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkünsten kombiniert. Kämpfer müssen im Schlagen, Grappling und Bodenkampf versiert sein, um erfolgreich zu sein.',
            'Unser MMA-Programm in der Sport Academy bietet umfassendes Training in allen Aspekten der Mixed Martial Arts. Die Schüler lernen, nahtlos zwischen Schlagen und Grappling zu wechseln und entwickeln die Fähigkeiten, die für Wettkampf oder Selbstverteidigung benötigt werden.',
            'Ob Ihr Ziel professioneller Wettkampf, Amateur-Kämpfen oder einfach ein kompletter Kampfkünstler zu werden ist, unser strukturierter MMA-Lehrplan wird Sie sicher und effektiv dorthin bringen.'
          ]
        },
        techniques: {
          title: 'MMA-Techniken',
          subtitle: 'Meistere alle Kampfdistanzen',
          striking: {
            title: 'Schlagen',
            items: [
              'Box-Kombinationen und Beinarbeit',
              'Kickboxen und Kniestöße',
              'Ellbogenschläge und Clinch-Arbeit',
              'Defensive Kopfbewegung'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken',
              'Takedown-Verteidigung und Sprawls',
              'Käfig-Wrestling und Clinch',
              'Ground and Pound Positionierung'
            ]
          },
          groundGame: {
            title: 'Bodenkampf',
            items: [
              'Submission-Techniken',
              'Ground and Pound',
              'Submission-Verteidigung',
              'Übergänge und Befreiungen'
            ]
          }
        },
        history: {
          title: 'MMA-Geschichte',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit der Ultimate Fighting Championship (UFC) im Jahr 1993. Die frühen Veranstaltungen stellten verschiedene Kampfkunststile gegeneinander, um das effektivste Kampfsystem zu bestimmen.',
            'Brazilian Jiu-Jitsu dominierte zunächst, aber als sich der Sport entwickelte, begannen Kämpfer, in mehreren Disziplinen zu trainieren. Dies führte zur Entwicklung von vielseitigen Athleten, die in allen Distanzen effektiv kämpfen konnten.',
            'Heute ist MMA ein globaler Sport mit professionellen Organisationen weltweit, und er entwickelt sich weiter, während neue Techniken und Trainingsmethoden entwickelt werden.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erste UFC-Veranstaltung demonstriert Wirksamkeit verschiedener Kampfkünste'
              },
              {
                year: '2000er',
                description: 'Evolution vielseitiger Kämpfer und modernes MMA'
              },
              {
                year: '2010er',
                description: 'MMA wird Mainstream mit globaler Anerkennung'
              }
            ]
          }
        },
        benefits: {
          title: 'MMA-Trainingsvorteile',
          subtitle: 'Komplette körperliche und mentale Entwicklung',
          items: [
            {
              icon: '🥊',
              title: 'Kompletter Kampf',
              description: 'Meistere alle Kampfdistanzen'
            },
            {
              icon: '💪',
              title: 'Spitzenfitness',
              description: 'Ultimative Herz-Kreislauf- und Kraftkonditionierung'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Entwickle Selbstvertrauen und mentale Härte'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Effektivste reale Schutzfähigkeiten'
            }
          ]
        },
        schedule: {
          title: 'MMA-Trainingsplan',
          subtitle: 'Komplettes Mixed Martial Arts Training'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Kämpfer, die den Sport prägten',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC-Pionier',
              description: 'Bewies die Wirksamkeit des Brazilian Jiu-Jitsu'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Längster regierender UFC-Mittelgewichts-Champion'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendärer Schwergewichtler mit unglaublicher Bilanz'
            }
          ]
        },
        cta: {
          title: 'Werde ein kompletter Kämpfer',
          description: 'Meistere alle Aspekte des Kampfes in unserem umfassenden MMA-Programm.',
          joinButton: 'MMA-Programm beitreten'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Champions schmieden seit 2017',
      copyright: '© 2024 Sport Academy. Alle Rechte vorbehalten.'
    },
    common: {
      joinNow: 'Jetzt beitreten',
      viewClasses: 'Kurse ansehen',
      viewSchedule: 'Stundenplan ansehen',
      viewMembership: 'Mitgliedschaft ansehen',
      contactUs: 'Kontakt',
      learnMore: 'Mehr erfahren',
      allLevels: 'Alle Level',
      ages: 'Alter',
      joinSportAcademy: 'Sport Academy beitreten',
      callNow: 'Jetzt anrufen',
      registerOnline: 'Online registrieren',
      visitUs: 'Besuchen Sie uns',
      dropInWelcome: 'Drop-ins willkommen',
      duringTrainingHours: 'Während der Trainingszeiten',
      responseWithin2Hours: 'Antwort innerhalb von 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates und DMs',
      instantConfirmation: 'Sofortige Bestätigung'
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
        description: 'Dove i campioni vengono forgiati attraverso dedizione, disciplina e allenamento esperto. Unisciti alla nostra comunità d\'élite di combattenti e scopri il tuo vero potenziale in MMA, Brazilian Jiu-Jitsu e Grappling.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Comprovata esperienza dal 2017',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'Dal principiante al livello élite',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come un Combattente',
        subtitle: 'Padroneggia l\'arte del combattimento attraverso i nostri programmi di allenamento completi'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, grappling e combattimento a terra per l\'esperienza di combattimento definitiva.'
      },
      bjj: {
        description: 'Padroneggia l\'arte gentile del Brazilian Jiu-Jitsu, concentrandoti su leva, tecnica e strategia mentale piuttosto che sulla forza bruta.'
      },
      grappling: {
        description: 'Sviluppa controllo a terra superiore, takedown e tecniche di sottomissione nel nostro programma di grappling completo.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Scegli il tuo percorso per diventare un combattente completo'
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
        title: 'Corsi di Allenamento',
        description: 'Scopri la nostra gamma completa di corsi di arti marziali progettati per tutti i livelli di abilità. Dalle sessioni per principianti all\'allenamento avanzato per competizioni.'
      },
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Lo sport da combattimento definitivo che combina striking, grappling e combattimento a terra. I nostri corsi MMA integrano tecniche da boxe, kickboxing, wrestling e Brazilian Jiu-Jitsu.',
        features: [
          'Tecniche di striking in piedi',
          'Takedown e wrestling',
          'Ground and pound',
          'Difesa da sottomissioni',
          'Lavoro in gabbia e clinch',
          'Cardio e condizionamento'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'L\'arte gentile che enfatizza la tecnica sulla forza. Impara il sofisticato sistema di combattimento a terra che ha rivoluzionato le arti marziali.',
        features: [
          'Lavoro di guardia e spazzate',
          'Sottomissioni e fughe',
          'Controllo delle posizioni',
          'Applicazioni di autodifesa',
          'Preparazione alle competizioni',
          'Strategia mentale e risoluzione problemi'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Focus su takedown, controllo a terra e tecniche di sottomissione senza il gi tradizionale. Perfetto per la preparazione MMA e l\'autodifesa.',
        features: [
          'Takedown di wrestling',
          'Tecniche di sottomissione no-gi',
          'Scramble e transizioni',
          'Leg lock e heel hook',
          'Pressure passing',
          'Strategie competitive'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Programma di Brazilian Jiu-Jitsu appositamente progettato per bambini dai 6 ai 14 anni. Focus su disciplina, rispetto e tecniche fondamentali in un ambiente sicuro e divertente.',
        features: [
          'Fondamentali base del BJJ',
          'Abilità di autodifesa',
          'Disciplina e rispetto',
          'Costruzione della fiducia',
          'Tecniche anti-bullismo',
          'Giochi e attività divertenti'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Introduzione al grappling e wrestling per giovani atleti dai 8 ai 16 anni. Costruisce forza, coordinazione e resistenza mentale.',
        features: [
          'Fondamentali di wrestling',
          'Tecniche di takedown',
          'Basi del controllo a terra',
          'Lavoro di squadra e sportività',
          'Preparazione alle competizioni'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Tecniche di wrestling tradizionale con focus su takedown, controllo e condizionamento. Base essenziale per MMA e grappling.',
        features: [
          'Takedown single e double leg',
          'Hip toss e proiezioni',
          'Sprawl e tecniche difensive',
          'Condizionamento e drilling',
          'Wrestling competitivo',
          'Allenamento della resistenza mentale'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Pronto per Iniziare ad Allenarti?',
        description: 'Unisciti alla nostra comunità di atleti dedicati e inizia oggi il tuo viaggio nelle arti marziali.'
      }
    },
    schedule: {
      hero: {
        title: 'Orari di Allenamento',
        description: 'Pianifica il tuo allenamento con i nostri orari completi in entrambe le sedi. Tutti i corsi sono inclusi nel tuo abbonamento.'
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
      cta: {
        title: 'Pronto per Unirti?',
        description: 'Inizia ad allenarti con noi oggi e diventa parte della nostra famiglia di combattenti.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Incontra i nostri istruttori di classe mondiale che portano anni di esperienza e passione in ogni sessione di allenamento.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore e Fondatore',
        background: 'Con oltre 15 anni di esperienza nelle arti marziali, Matteo ha fondato la Sport Academy nel 2017 con la visione di portare allenamento MMA e BJJ di classe mondiale in Alto Adige. La sua dedizione all\'eccellenza tecnica e allo sviluppo degli studenti ha reso la Sport Academy una destinazione di allenamento di primo livello.',
        specializations: [
          'Cintura Nera Brazilian Jiu-Jitsu',
          'Coaching Competizioni MMA',
          'Tecniche di Wrestling',
          'Strategia Competitiva'
        ],
        achievements: [
          'Fondazione Sport Academy nel 2017',
          'Allenamento di multipli campioni regionali',
          'Oltre 100 promozioni di studenti di successo',
          'Istruttore certificato Cintura Nera BJJ'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta una ricchezza di conoscenze sia nelle arti marziali tradizionali che nelle tecniche MMA moderne. Il suo stile di insegnamento paziente e la sua competenza tecnica lo rendono una parte inestimabile del nostro team di coaching.',
        specializations: [
          'Tecniche di Striking',
          'Fondamentali di Grappling',
          'Programmi Giovanili',
          'Sviluppo Principianti'
        ],
        achievements: [
          'Oltre 10 anni di esperienza di insegnamento',
          'Specializzato nello sviluppo giovanile',
          'Certificazione coaching competizioni',
          'Istruttore avanzato di striking'
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
          description: 'Ogni studente è unico. Adattiamo il nostro approccio per aiutare ogni persona a raggiungere i propri obiettivi personali e il proprio potenziale.'
        },
        respect: {
          title: 'Rispetto e Disciplina',
          description: 'Instilliamo valori di rispetto, disciplina e sportività che si estendono ben oltre i tappetini di allenamento.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Sperimenta l\'istruzione di classe mondiale e porta le tue abilità al livello successivo.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il piano di abbonamento che si adatta ai tuoi obiettivi e al tuo programma. Tutti i piani includono l\'accesso a entrambe le sedi di allenamento.'
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
        program: 'Programma Focalizzato BJJ',
        description: 'Accesso a tutti i corsi BJJ e sessioni open mat'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      mainIncludes: [
        'Tutti i corsi in entrambe le sedi',
        'Sessioni open mat',
        'Allenamento squadra competizioni',
        'Workshop tecnici',
        'Monitoraggio progressi e promozioni cinture'
      ],
      summerIncludes: [
        'Tutti i corsi estivi',
        'Sessioni open mat',
        'Workshop intensivi',
        'Programmazione flessibile'
      ],
      bjjIncludes: [
        'Tutti i corsi BJJ',
        'Sessioni open mat',
        'Sistema progressione cinture',
        'Preparazione competizioni'
      ],
      selectMainSeason: 'Seleziona Stagione Principale',
      selectSummerSeason: 'Seleziona Stagione Estiva',
      selectBjjOnly: 'Seleziona Solo BJJ',
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra le stagioni?',
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro programma completo con tutti i corsi e allenamento intensivo. La stagione estiva (Luglio-Agosto) è un programma più breve con programmazione flessibile perfetta per mantenere le abilità durante la pausa estiva.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso ai corsi in entrambe le sedi di Campo Tures e Brunico. Puoi mescolare e abbinare in base al tuo programma.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo una lezione di prova gratuita per i nuovi studenti. Contattaci per programmare la tua prova e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Che attrezzatura mi serve?',
          answer: 'Per la tua prima lezione, porta semplicemente abbigliamento da allenamento comodo e acqua. Forniamo tutta l\'attrezzatura di allenamento necessaria. Man mano che progredisci, ti guideremo negli acquisti di attrezzatura personale.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio',
        description: 'Unisciti alla Sport Academy oggi e diventa parte della nostra comunità di allenamento d\'élite.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Pronto per iniziare il tuo viaggio nelle arti marziali? Mettiti in contatto con noi per saperne di più sui nostri programmi e programmare la tua prima lezione.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con la Sport Academy'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due sedi convenienti che servono l\'Alto Adige'
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
        'Abbigliamento da allenamento comodo',
        'Bottiglia d\'acqua',
        'Atteggiamento positivo e voglia di imparare',
        'Documento d\'identità valido per la registrazione'
      ],
      provide: [
        'Tutta l\'attrezzatura di allenamento e tappetini',
        'Spogliatoi e docce',
        'Istruzione professionale',
        'Ambiente di allenamento sicuro e pulito'
      ],
      specialInstructions: 'Informazioni Importanti',
      instructions: {
        age: 'Età Minima: 6 anni per i corsi bambini, 16+ per i corsi adulti',
        health: 'Requisiti Sanitari: Si prega di informarci di eventuali infortuni o condizioni mediche',
        equipment: 'Attrezzatura: Tutta l\'attrezzatura di allenamento fornita per i principianti',
        payment: 'Pagamento: Contanti e carta accettati'
      },
      cta: {
        title: 'Pronto per Iniziare?',
        description: 'Fai il primo passo verso la padronanza delle arti marziali. Contattaci oggi!'
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
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione. Enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte attraverso la tecnica corretta e la leva.',
            'Alla Sport Academy, il nostro programma BJJ è progettato per insegnare agli studenti i principi fondamentali di quest\'arte sofisticata. Che tu sia un principiante completo o un praticante esperto, il nostro curriculum strutturato ti aiuterà a sviluppare sia le abilità tecniche che la comprensione tattica.',
            'Le nostre lezioni enfatizzano lo sparring dal vivo (rolling) in un ambiente controllato, permettendo agli studenti di testare le loro tecniche contro avversari che si oppongono mantenendo sicurezza e rispetto.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia le abilità fondamentali del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Fondamentali della guardia chiusa',
              'Variazioni della guardia aperta',
              'Spazzate e transizioni di guardia',
              'Attacchi di sottomissione dalla guardia'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Leve al braccio e manipolazione articolare',
              'Strangolamenti e soffocamento',
              'Leg lock e attacchi ai piedi',
              'Catene di sottomissioni e setup'
            ]
          },
          positions: {
            title: 'Controllo Posizionale',
            items: [
              'Mount e side control',
              'Back control e rear mount',
              'Knee on belly e north-south',
              'Transizioni tra posizioni'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema di Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di ranking tradizionale',
          philosophy: {
            title: 'Filosofia delle Cinture',
            description: 'Il sistema di cinture BJJ rappresenta non solo la conoscenza tecnica, ma anche lo sviluppo del carattere, l\'abilità di insegnamento e il tempo sui tappetini. Ogni livello di cintura richiede dedizione, costanza e dimostrazione di crescita sia tecnica che mentale.'
          }
        },
        history: {
          title: 'Storia e Lignaggio',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu si è evoluto dal jujutsu giapponese tradizionale e dal judo, portato in Brasile da Mitsuyo Maeda all\'inizio del XX secolo. La famiglia Gracie, in particolare Helio Gracie, ha adattato queste tecniche per creare un sistema più efficiente per i praticanti più piccoli.',
            'L\'arte ha ottenuto riconoscimento mondiale attraverso i primi eventi UFC, dove Royce Gracie ha dimostrato l\'efficacia del BJJ contro avversari più grandi provenienti da diversi background di arti marziali.',
            'Oggi, il BJJ è praticato in tutto il mondo e forma la base del combattimento a terra delle arti marziali miste moderne.'
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
          subtitle: 'Lezioni regolari in entrambe le sedi'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Unisciti al nostro programma Brazilian Jiu-Jitsu e scopri l\'arte gentile.',
          joinButton: 'Unisciti al Programma BJJ'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Padroneggia takedown, controllo e sottomissioni senza gi'
        },
        overview: {
          title: 'Grappling No-Gi',
          paragraphs: [
            'Il Grappling, noto anche come submission wrestling o jiu-jitsu no-gi, si concentra su takedown, controllo a terra e tecniche di sottomissione senza l\'uniforme gi tradizionale. Questo stile enfatizza velocità, atletismo e adattabilità.',
            'Il nostro programma di grappling combina elementi da wrestling, Brazilian jiu-jitsu, sambo e catch wrestling per creare un sistema completo di combattimento a terra. Gli studenti imparano a controllare gli avversari attraverso un posizionamento superiore e a finire i combattimenti con varie prese di sottomissione.',
            'Questa disciplina è essenziale per la preparazione MMA e fornisce abilità di autodifesa pratiche che funzionano in situazioni del mondo reale dove non ci si può affidare ai vestiti per le prese.'
          ]
        },
        techniques: {
          title: 'Tecniche di Grappling',
          subtitle: 'Abilità essenziali per il combattimento a terra no-gi',
          takedowns: {
            title: 'Takedown',
            items: [
              'Attacchi single e double leg',
              'Hip toss e proiezioni',
              'Spazzate ai piedi e sgambetti',
              'Sprawl e difesa da takedown'
            ]
          },
          control: {
            title: 'Controllo a Terra',
            items: [
              'Tecniche di pressure passing',
              'Underhook e overhook',
              'Intrecci delle gambe',
              'Scrambling e transizioni'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Leg lock e heel hook',
              'Arm drag e arm lock',
              'Strangolamenti e neck crank',
              'Combinazioni di sottomissioni'
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
                description: 'Pratica ripetitiva delle tecniche per costruire la memoria muscolare'
              },
              {
                title: 'Sparring Posizionale',
                description: 'Pratica dal vivo da posizioni e scenari specifici'
              },
              {
                title: 'Flow Rolling',
                description: 'Pratica di movimento continuo focalizzata sulle transizioni'
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
                title: 'Allenamento Forza',
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
              description: 'Migliora velocità e performance atletica'
            },
            {
              icon: '🎯',
              title: 'Autodifesa',
              description: 'Abilità pratiche per situazioni del mondo reale'
            }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Sessioni di allenamento no-gi in entrambe le sedi'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Figure influenti nel mondo del grappling',
          grapplers: [
            {
              name: 'John Danaher',
              title: 'Specialista Sottomissioni',
              description: 'Sviluppatore rivoluzionario del sistema leg lock'
            },
            {
              name: 'Gordon Ryan',
              title: 'Campione ADCC',
              description: 'Competitore no-gi dominante e innovatore'
            },
            {
              name: 'Marcelo Garcia',
              title: 'Maestro Tecnico',
              description: 'Campione mondiale multiplo noto per la tecnica'
            }
          ]
        },
        cta: {
          title: 'Padroneggia il Grappling No-Gi',
          description: 'Sviluppa abilità superiori di combattimento a terra nel nostro programma di grappling.',
          joinButton: 'Unisciti al Programma Grappling'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina tutte le discipline delle arti marziali'
        },
        overview: {
          title: 'Il Sistema di Combattimento Definitivo',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono lo sport da combattimento più completo, combinando tecniche da boxe, kickboxing, wrestling, Brazilian jiu-jitsu e altre arti marziali. I combattenti devono essere competenti nel striking, grappling e combattimento a terra per avere successo.',
            'Il nostro programma MMA alla Sport Academy fornisce allenamento completo in tutti gli aspetti delle arti marziali miste. Gli studenti imparano a passare senza soluzione di continuità tra striking e grappling, sviluppando le abilità necessarie per la competizione o l\'autodifesa.',
            'Che il tuo obiettivo sia la competizione professionale, il combattimento amatoriale o semplicemente diventare un artista marziale completo, il nostro curriculum MMA strutturato ti porterà lì in modo sicuro ed efficace.'
          ]
        },
        techniques: {
          title: 'Tecniche MMA',
          subtitle: 'Padroneggia tutte le distanze di combattimento',
          striking: {
            title: 'Striking',
            items: [
              'Combinazioni di boxe e gioco di gambe',
              'Kickboxing e colpi di ginocchio',
              'Colpi di gomito e lavoro in clinch',
              'Movimento difensivo della testa'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche di takedown',
              'Difesa da takedown e sprawl',
              'Wrestling in gabbia e clinch',
              'Posizionamento ground and pound'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Tecniche di sottomissione',
              'Ground and pound',
              'Difesa da sottomissioni',
              'Transizioni e fughe'
            ]
          }
        },
        history: {
          title: 'Storia MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma le MMA moderne iniziarono con l\'Ultimate Fighting Championship (UFC) nel 1993. I primi eventi misero diversi stili di arti marziali l\'uno contro l\'altro per determinare il sistema di combattimento più efficace.',
            'Il Brazilian Jiu-Jitsu inizialmente dominò, ma mentre lo sport si evolveva, i combattenti iniziarono ad allenarsi in multiple discipline. Questo portò allo sviluppo di atleti ben equilibrati che potevano combattere efficacemente in tutte le distanze.',
            'Oggi, le MMA sono uno sport globale con organizzazioni professionali in tutto il mondo, e continuano ad evolversi mentre vengono sviluppate nuove tecniche e metodi di allenamento.'
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
                description: 'Evoluzione di combattenti ben equilibrati e MMA moderne'
              },
              {
                year: '2010s',
                description: 'Le MMA diventano mainstream con riconoscimento globale'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento MMA',
          subtitle: 'Sviluppo fisico e mentale completo',
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
              description: 'Sviluppa fiducia e resistenza mentale'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Abilità di protezione del mondo reale più efficaci'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento MMA',
          subtitle: 'Allenamento completo di arti marziali miste'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Combattenti che hanno plasmato lo sport',
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
              description: 'Leggendario peso massimo con record incredibile'
            }
          ]
        },
        cta: {
          title: 'Diventa un Combattente Completo',
          description: 'Padroneggia tutti gli aspetti del combattimento nel nostro programma MMA completo.',
          joinButton: 'Unisciti al Programma MMA'
        }
      }
    },
    footer: {
      tagline: 'Allenamento Elite MMA, BJJ e Grappling',
      subtitle: 'Forgiando Campioni dal 2017',
      copyright: '© 2024 Sport Academy. Tutti i diritti riservati.'
    },
    common: {
      joinNow: 'Unisciti Ora',
      viewClasses: 'Visualizza Corsi',
      viewSchedule: 'Visualizza Orari',
      viewMembership: 'Visualizza Abbonamenti',
      contactUs: 'Contattaci',
      learnMore: 'Scopri di Più',
      allLevels: 'Tutti i Livelli',
      ages: 'Età',
      joinSportAcademy: 'Unisciti alla Sport Academy',
      callNow: 'Chiama Ora',
      registerOnline: 'Registrati Online',
      visitUs: 'Visitaci',
      dropInWelcome: 'Drop-in benvenuti',
      duringTrainingHours: 'Durante gli orari di allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM',
      instantConfirmation: 'Conferma istantanea'
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