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
      instantConfirmation: 'Instant confirmation',
      backToTrainLikeFighter: 'Back to Train Like a Fighter'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Elite MMA, Brazilian Jiu-Jitsu, and Grappling training in Campo Tures and Brunico. Professional coaching by Matteo Parolin and Christian Zecchetto.'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Where champions are forged through dedication, discipline, and expert training. Join our community of fighters and discover your potential in MMA, BJJ, and Grappling.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Proven track record in combat sports training',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures and Brunico facilities',
        trainingPrograms: 'Training Programs',
        programsDescription: 'Comprehensive martial arts curriculum',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Master the art of combat through our specialized disciplines'
      },
      mma: {
        description: 'Mixed Martial Arts combines striking, grappling, and ground fighting techniques for the ultimate combat sport experience.'
      },
      bjj: {
        description: 'Brazilian Jiu-Jitsu focuses on ground fighting and submission techniques, emphasizing leverage and technique over strength.'
      },
      grappling: {
        description: 'No-Gi grappling develops wrestling and submission skills without the traditional gi, focusing on speed and athleticism.'
      },
      getStarted: {
        title: 'Ready to Get Started?',
        subtitle: 'Choose your path to becoming a fighter'
      },
      quickLinks: {
        viewClasses: 'View Classes',
        viewClassesDesc: 'Explore our training programs',
        checkSchedule: 'Check Schedule',
        checkScheduleDesc: 'Find your training times',
        membershipPlans: 'Membership Plans',
        membershipPlansDesc: 'Choose your commitment level',
        contactUs: 'Contact Us',
        contactUsDesc: 'Get in touch with our team'
      }
    },
    classes: {
      hero: {
        title: 'Our Classes',
        description: 'Comprehensive training programs designed to develop your skills, strength, and fighting spirit. From beginners to advanced practitioners, we have the perfect class for your journey.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'The ultimate combat sport combining striking, grappling, and ground fighting. Develop complete fighting skills through comprehensive MMA training.',
        features: [
          'Striking techniques (Boxing, Muay Thai, Kickboxing)',
          'Wrestling and takedown defense',
          'Ground fighting and submissions',
          'Cage work and clinch fighting',
          'Conditioning and fight preparation'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'The gentle art that teaches leverage, technique, and timing over brute strength. Master the ground game through traditional BJJ training.',
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
        description: 'Fast-paced submission wrestling without the gi. Develop explosive grappling skills and submission techniques.',
        features: [
          'Wrestling fundamentals',
          'Submission grappling',
          'Takedown techniques',
          'Leg locks and heel hooks',
          'Competition training'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Age-appropriate Brazilian Jiu-Jitsu training that builds confidence, discipline, and physical fitness in a fun environment.',
        features: [
          'Basic BJJ techniques',
          'Self-defense skills',
          'Discipline and respect',
          'Physical fitness',
          'Anti-bullying strategies'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Introduction to wrestling and grappling for young athletes, focusing on fundamental movement and technique.',
        features: [
          'Wrestling basics',
          'Coordination development',
          'Strength building',
          'Teamwork skills',
          'Competition preparation'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling techniques focusing on takedowns, control, and conditioning for all martial arts applications.',
        features: [
          'Takedown techniques',
          'Wrestling conditioning',
          'Positional wrestling',
          'Scrambling and defense',
          'Competition training'
        ]
      },
      whatYouLearn: 'What You\'ll Learn',
      cta: {
        title: 'Start Your Journey Today',
        description: 'Join our community of fighters and begin your transformation'
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
      importantInfo: 'Important Information',
      classGuidelines: 'Class Guidelines',
      guidelines: {
        arrive: 'Arrive 10 minutes early to warm up',
        water: 'Bring water bottle and towel',
        gi: 'BJJ classes require a gi (rental available)',
        noGi: 'No-Gi classes: shorts and rash guard'
      },
      membershipBenefits: 'Membership Benefits',
      benefits: {
        allClasses: 'Access to all classes at both locations',
        openMat: 'Free open mat sessions',
        bothLocations: 'Train at Campo Tures and Brunico',
        personalTraining: 'Discounted personal training'
      },
      cta: {
        title: 'Ready to Train?',
        description: 'Book your first class and start your martial arts journey'
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
        background: 'With over 15 years of experience in martial arts, Matteo is a certified instructor in Brazilian Jiu-Jitsu and Mixed Martial Arts. He has competed at national and international levels, bringing real-world fighting experience to his teaching.',
        specializations: [
          'Brazilian Jiu-Jitsu (Black Belt)',
          'Mixed Martial Arts',
          'Competition Preparation',
          'Self-Defense Systems'
        ],
        achievements: [
          'BJJ Black Belt under renowned lineage',
          'Multiple regional MMA victories',
          'Certified instructor in various martial arts',
          '8+ years coaching experience'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings a diverse background in combat sports with expertise in wrestling, grappling, and striking arts. His technical approach and attention to detail make him an exceptional instructor for students of all levels.',
        specializations: [
          'Wrestling & Grappling',
          'No-Gi Submission Grappling',
          'Striking Arts',
          'Youth Programs'
        ],
        achievements: [
          'Competitive wrestling background',
          'Advanced grappling certifications',
          'Youth development specialist',
          'Tournament coaching experience'
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
        description: 'Learn from experienced coaches who are dedicated to your success'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the membership that fits your goals and schedule. All plans include access to both locations and all classes.'
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
        description: 'Intensive BJJ training during summer months'
      },
      adults: 'Adults',
      students: 'Students & Under 18',
      month: 'month',
      whatsIncluded: 'What\'s Included',
      mainIncludes: [
        'Unlimited access to all classes',
        'Training at both Campo Tures and Brunico',
        'Open mat sessions',
        'Competition team training',
        'Beginner-friendly instruction',
        'Equipment rental available'
      ],
      summerIncludes: [
        'All summer classes included',
        'Both locations access',
        'Open mat sessions',
        'Flexible scheduling',
        'Perfect for beginners'
      ],
      bjjIncludes: [
        'All BJJ classes included',
        'Gi and No-Gi training',
        'Competition preparation',
        'Both locations access',
        'Open mat sessions'
      ],
      selectMainSeason: 'Select Main Season',
      selectSummerSeason: 'Select Summer Season',
      selectBjjOnly: 'Select BJJ Program',
      additionalServices: {
        title: 'Additional Services',
        description: 'Enhance your training with our specialized programs and personal coaching'
      },
      personalTraining: {
        title: 'Personal Training',
        description: 'One-on-one coaching tailored to your specific goals and needs',
        price: '€50',
        duration: 'per session (60 min)'
      },
      competitionPrep: {
        title: 'Competition Prep',
        description: 'Specialized training for upcoming tournaments and competitions',
        price: '€40',
        duration: 'per session (90 min)'
      },
      seminars: {
        title: 'Seminars & Workshops',
        description: 'Special technique workshops and guest instructor seminars',
        price: '€25',
        duration: 'per seminar'
      },
      faq: {
        title: 'Frequently Asked Questions',
        seasons: {
          question: 'What\'s the difference between seasons?',
          answer: 'The main season (September-June) offers our complete curriculum with 10 months of training. Summer season (July-August) is perfect for maintaining skills or starting your journey with a shorter commitment.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to both Campo Tures and Brunico locations. You can attend any class at either facility.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer a free trial class for new students. Contact us to schedule your first session and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For your first class, just bring comfortable workout clothes and water. We have rental equipment available. As you progress, we\'ll guide you on purchasing your own gear.'
        }
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Choose your membership and start your martial arts journey today'
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
        subtitle: 'Two convenient locations serving the South Tyrol region'
      },
      address: 'Address',
      trainingSchedule: 'Training Schedule',
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
        'All training equipment',
        'Mats and training space',
        'Basic protective gear',
        'Beginner-friendly instruction'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Age Requirements: 6+ for kids classes, 16+ for adult classes',
        health: 'Health: Please inform us of any injuries or medical conditions',
        equipment: 'Equipment: Rental gear available for first-time visitors',
        payment: 'Payment: Cash, card, or online payment accepted'
      },
      cta: {
        title: 'Start Your Journey Today',
        description: 'Contact us now to schedule your first class and begin your transformation'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Master the gentle art of leverage, technique, and mental strategy'
        },
        overview: {
          title: 'The Gentle Art',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent through proper technique, leverage, and timing.',
            'At Sport Academy, our BJJ program is designed to teach students the fundamental principles of this art while building physical fitness, mental toughness, and self-confidence. Whether you\'re a complete beginner or an experienced practitioner, our structured curriculum will help you develop your skills systematically.',
            'Our classes combine traditional BJJ techniques with modern training methods, ensuring you receive the most comprehensive and effective instruction possible.'
          ]
        },
        techniques: {
          title: 'Core BJJ Techniques',
          subtitle: 'Master the fundamental skills that form the foundation of Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard Work',
            items: [
              'Closed Guard fundamentals',
              'Open Guard variations',
              'Guard sweeps and submissions',
              'Guard retention and recovery'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Chokes and strangulations',
              'Joint locks and arm bars',
              'Leg locks and foot attacks',
              'Submission chains and setups'
            ]
          },
          positions: {
            title: 'Positions',
            items: [
              'Mount and side control',
              'Back control and rear mount',
              'Knee on belly and north-south',
              'Transitional movements'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the traditional ranking system of Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Belt Philosophy',
            description: 'In BJJ, belts represent not just technical knowledge, but also character development, perseverance, and the ability to help others grow. Each belt is earned through consistent training, demonstration of technique, and embodiment of BJJ values.'
          }
        },
        history: {
          title: 'History & Lineage',
          paragraphs: [
            'Brazilian Jiu-Jitsu evolved from traditional Japanese Jujutsu and Judo, brought to Brazil by Mitsuyo Maeda in the early 20th century. The Gracie family, particularly Helio Gracie, adapted these techniques to create a more efficient system for smaller practitioners.',
            'The art gained worldwide recognition through the early UFC events, where Royce Gracie demonstrated the effectiveness of BJJ against larger opponents from different martial arts backgrounds.',
            'Today, BJJ continues to evolve as both a martial art and a sport, with practitioners constantly refining techniques and developing new strategies for both self-defense and competition.'
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
          description: 'Experience the gentle art that has transformed millions of lives worldwide',
          joinButton: 'Join BJJ Classes',
          backButton: 'Back to Train Like a Fighter'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining all fighting disciplines'
        },
        overview: {
          title: 'The Ultimate Fighting Art',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, wrestling, Brazilian Jiu-Jitsu, Muay Thai, and other martial arts. It tests a fighter\'s skills in all ranges of combat: standing, clinching, and ground fighting.',
            'Our MMA program at Sport Academy provides comprehensive training that develops well-rounded fighters. Whether your goal is self-defense, fitness, or competition, our structured approach ensures you develop skills safely and effectively.',
            'Training includes striking fundamentals, takedown defense, ground control, and submission techniques, all while building the cardiovascular endurance and mental toughness required for this demanding sport.'
          ]
        },
        techniques: {
          title: 'MMA Skill Sets',
          subtitle: 'Master all aspects of mixed martial arts combat',
          striking: {
            title: 'Striking',
            items: [
              'Boxing fundamentals and combinations',
              'Muay Thai kicks and knees',
              'Defensive movement and footwork',
              'Cage cutting and angles'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown techniques and setups',
              'Takedown defense and sprawls',
              'Clinch work and dirty boxing',
              'Cage wrestling and control'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Ground and pound techniques',
              'Submission defense and escapes',
              'Positional control and transitions',
              'Getting back to feet safely'
            ]
          }
        },
        history: {
          title: 'Evolution of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with events like the Ultimate Fighting Championship (UFC) in 1993. Early competitions pitted different martial arts styles against each other to determine the most effective fighting system.',
            'The sport evolved rapidly as fighters realized they needed to be proficient in all areas of combat. This led to the development of comprehensive training programs that combined striking, wrestling, and submission grappling.',
            'Today, MMA is a highly regulated sport with unified rules and weight classes, featuring some of the world\'s most skilled and athletic competitors.'
          ],
          milestones: {
            title: 'MMA Milestones',
            events: [
              {
                year: '1993',
                description: 'First UFC event demonstrates effectiveness of different martial arts'
              },
              {
                year: '2001',
                description: 'Unified Rules of MMA established for consistent regulation'
              },
              {
                year: '2016',
                description: 'MMA becomes mainstream with global television coverage'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of MMA Training',
          subtitle: 'Develop complete fighting skills while improving fitness and confidence',
          items: [
            {
              icon: '💪',
              title: 'Total Body Fitness',
              description: 'Comprehensive workout targeting all muscle groups'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Build confidence and mental resilience'
            },
            {
              icon: '🥊',
              title: 'Self-Defense',
              description: 'Learn practical skills for real-world situations'
            },
            {
              icon: '⚡',
              title: 'Athletic Performance',
              description: 'Improve speed, power, and coordination'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Join our MMA classes and develop complete fighting skills'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Learn from the techniques pioneered by the greatest fighters',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC Pioneer',
              description: 'Proved the effectiveness of Brazilian Jiu-Jitsu in early UFC'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Longest-reigning UFC Middleweight Champion'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Considered one of the greatest heavyweights of all time'
            }
          ]
        },
        cta: {
          title: 'Begin Your MMA Journey',
          description: 'Train like a professional fighter and discover your potential',
          joinButton: 'Join MMA Classes',
          backButton: 'Back to Train Like a Fighter'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'No-Gi Grappling',
        hero: {
          subtitle: 'Fast-paced submission wrestling without the traditional gi'
        },
        overview: {
          title: 'The Art of Submission Wrestling',
          paragraphs: [
            'No-Gi Grappling, also known as submission wrestling, focuses on takedowns, control, and submissions without the traditional gi uniform. This style emphasizes speed, athleticism, and adaptability, making it highly effective for both sport and self-defense applications.',
            'Our grappling program combines elements from wrestling, Brazilian Jiu-Jitsu, and catch wrestling to create a comprehensive submission grappling system. Students learn to control opponents through superior positioning and finish fights with various submission techniques.',
            'Training in No-Gi grappling develops exceptional body awareness, flexibility, and mental toughness while providing an intense cardiovascular workout that builds functional strength and endurance.'
          ]
        },
        techniques: {
          title: 'Grappling Fundamentals',
          subtitle: 'Master the essential skills of submission wrestling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Wrestling shots and setups',
              'Judo throws and trips',
              'Foot sweeps and reaps',
              'Takedown combinations'
            ]
          },
          control: {
            title: 'Control',
            items: [
              'Top position maintenance',
              'Pressure and weight distribution',
              'Transitional control',
              'Escape prevention'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Chokes and strangulations',
              'Joint locks and cranks',
              'Leg locks and heel hooks',
              'Submission entries and finishes'
            ]
          }
        },
        methodology: {
          title: 'Training Methodology',
          subtitle: 'Our systematic approach to developing grappling skills',
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
                title: 'Flexibility Work',
                description: 'Mobility and injury prevention exercises'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of Grappling',
          subtitle: 'Develop physical and mental attributes through submission wrestling',
          items: [
            {
              icon: '🤸',
              title: 'Flexibility',
              description: 'Improve mobility and range of motion'
            },
            {
              icon: '💨',
              title: 'Cardio Endurance',
              description: 'Build exceptional cardiovascular fitness'
            },
            {
              icon: '🧩',
              title: 'Problem Solving',
              description: 'Develop tactical thinking and adaptability'
            },
            {
              icon: '⚖️',
              title: 'Body Control',
              description: 'Master balance and spatial awareness'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'Join our No-Gi grappling classes for intense submission wrestling training'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Study the techniques of submission wrestling masters',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Catch Wrestling Expert',
              description: 'Former UFC Heavyweight Champion and catch wrestling specialist'
            },
            {
              name: 'Eddie Bravo',
              title: '10th Planet Founder',
              description: 'Revolutionary No-Gi system creator and innovator'
            },
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominant No-Gi grappler and submission specialist'
            }
          ]
        },
        cta: {
          title: 'Master Submission Wrestling',
          description: 'Develop elite grappling skills through our comprehensive No-Gi program',
          joinButton: 'Join Grappling Classes',
          backButton: 'Back to Train Like a Fighter'
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
      instantConfirmation: 'Sofortige Bestätigung',
      backToTrainLikeFighter: 'Zurück zu Trainiere Wie Ein Kämpfer'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Elite MMA, Brazilian Jiu-Jitsu und Grappling Training in Campo Tures und Bruneck. Professionelles Coaching von Matteo Parolin und Christian Zecchetto.'
      },
      welcome: {
        title: 'Willkommen bei Sport Academy',
        description: 'Wo Champions durch Hingabe, Disziplin und Expertentraining geschmiedet werden. Treten Sie unserer Kämpfergemeinschaft bei und entdecken Sie Ihr Potenzial in MMA, BJJ und Grappling.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Bewährte Erfolgsbilanz im Kampfsporttraining',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Einrichtungen in Campo Tures und Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'Umfassendes Kampfkunst-Curriculum',
        exploreClasses: 'Unsere Kurse Erkunden'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Meistere die Kampfkunst durch unsere spezialisierten Disziplinen'
      },
      mma: {
        description: 'Mixed Martial Arts kombiniert Schlag-, Grappling- und Bodenkampftechniken für das ultimative Kampfsporterlebnis.'
      },
      bjj: {
        description: 'Brazilian Jiu-Jitsu konzentriert sich auf Bodenkampf und Submission-Techniken und betont Hebelwirkung und Technik über Kraft.'
      },
      grappling: {
        description: 'No-Gi Grappling entwickelt Wrestling- und Submission-Fähigkeiten ohne das traditionelle Gi und konzentriert sich auf Geschwindigkeit und Athletik.'
      },
      getStarted: {
        title: 'Bereit Anzufangen?',
        subtitle: 'Wählen Sie Ihren Weg zum Kämpfer'
      },
      quickLinks: {
        viewClasses: 'Kurse Ansehen',
        viewClassesDesc: 'Erkunden Sie unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan Prüfen',
        checkScheduleDesc: 'Finden Sie Ihre Trainingszeiten',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wählen Sie Ihr Engagement-Level',
        contactUs: 'Kontakt',
        contactUsDesc: 'Kontaktieren Sie unser Team'
      }
    },
    classes: {
      hero: {
        title: 'Unsere Kurse',
        description: 'Umfassende Trainingsprogramme zur Entwicklung Ihrer Fähigkeiten, Kraft und Kampfgeist. Von Anfängern bis zu fortgeschrittenen Praktizierenden haben wir den perfekten Kurs für Ihre Reise.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Der ultimative Kampfsport, der Schlagen, Grappling und Bodenkampf kombiniert. Entwickeln Sie komplette Kampffähigkeiten durch umfassendes MMA-Training.',
        features: [
          'Schlagtechniken (Boxen, Muay Thai, Kickboxen)',
          'Wrestling und Takedown-Verteidigung',
          'Bodenkampf und Submissions',
          'Käfigarbeit und Clinch-Kampf',
          'Konditionierung und Kampfvorbereitung'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Die sanfte Kunst, die Hebelwirkung, Technik und Timing über rohe Kraft lehrt. Meistern Sie das Bodenspiel durch traditionelles BJJ-Training.',
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
        description: 'Schnelles Submission-Wrestling ohne Gi. Entwickeln Sie explosive Grappling-Fähigkeiten und Submission-Techniken.',
        features: [
          'Wrestling-Grundlagen',
          'Submission-Grappling',
          'Takedown-Techniken',
          'Leg Locks und Heel Hooks',
          'Wettkampftraining'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Altersgerechtes Brazilian Jiu-Jitsu Training, das Selbstvertrauen, Disziplin und körperliche Fitness in einer spaßigen Umgebung aufbaut.',
        features: [
          'Grundlegende BJJ-Techniken',
          'Selbstverteidigungsfähigkeiten',
          'Disziplin und Respekt',
          'Körperliche Fitness',
          'Anti-Mobbing-Strategien'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Einführung in Wrestling und Grappling für junge Athleten, mit Fokus auf grundlegende Bewegung und Technik.',
        features: [
          'Wrestling-Grundlagen',
          'Koordinationsentwicklung',
          'Kraftaufbau',
          'Teamwork-Fähigkeiten',
          'Wettkampfvorbereitung'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelle Wrestling-Techniken mit Fokus auf Takedowns, Kontrolle und Konditionierung für alle Kampfkunstanwendungen.',
        features: [
          'Takedown-Techniken',
          'Wrestling-Konditionierung',
          'Positions-Wrestling',
          'Scrambling und Verteidigung',
          'Wettkampftraining'
        ]
      },
      whatYouLearn: 'Was Sie Lernen',
      cta: {
        title: 'Beginnen Sie Ihre Reise Heute',
        description: 'Treten Sie unserer Kämpfergemeinschaft bei und beginnen Sie Ihre Transformation'
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
      striking: 'Schlagen',
      openMat: 'Freies Training',
      importantInfo: 'Wichtige Informationen',
      classGuidelines: 'Kursrichtlinien',
      guidelines: {
        arrive: '10 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'BJJ-Kurse erfordern ein Gi (Verleih verfügbar)',
        noGi: 'No-Gi Kurse: Shorts und Rash Guard'
      },
      membershipBenefits: 'Mitgliedschaftsvorteile',
      benefits: {
        allClasses: 'Zugang zu allen Kursen an beiden Standorten',
        openMat: 'Kostenlose freie Trainingseinheiten',
        bothLocations: 'Training in Campo Tures und Bruneck',
        personalTraining: 'Ermäßigtes Personaltraining'
      },
      cta: {
        title: 'Bereit Zu Trainieren?',
        description: 'Buchen Sie Ihren ersten Kurs und beginnen Sie Ihre Kampfkunstreise'
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
        background: 'Mit über 15 Jahren Erfahrung in Kampfkünsten ist Matteo ein zertifizierter Instruktor in Brazilian Jiu-Jitsu und Mixed Martial Arts. Er hat auf nationaler und internationaler Ebene gekämpft und bringt echte Kampferfahrung in seinen Unterricht ein.',
        specializations: [
          'Brazilian Jiu-Jitsu (Schwarzgurt)',
          'Mixed Martial Arts',
          'Wettkampfvorbereitung',
          'Selbstverteidigungssysteme'
        ],
        achievements: [
          'BJJ Schwarzgurt unter renommierter Linie',
          'Diverse regionale MMA-Siege',
          'Zertifizierter Instruktor in verschiedenen Kampfkünsten',
          '8+ Jahre Coaching-Erfahrung'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt einen vielfältigen Hintergrund in Kampfsportarten mit Expertise in Wrestling, Grappling und Schlagkünsten mit. Sein technischer Ansatz und seine Aufmerksamkeit für Details machen ihn zu einem außergewöhnlichen Instruktor für Schüler aller Stufen.',
        specializations: [
          'Wrestling & Grappling',
          'No-Gi Submission Grappling',
          'Schlagkünste',
          'Jugendprogramme'
        ],
        achievements: [
          'Wettkampf-Wrestling-Hintergrund',
          'Fortgeschrittene Grappling-Zertifizierungen',
          'Jugendentwicklungsspezialist',
          'Turnier-Coaching-Erfahrung'
        ]
      },
      background: 'Hintergrund',
      specializations: 'Spezialisierungen',
      achievements: 'Erfolge',
      philosophy: {
        title: 'Unsere Coaching-Philosophie',
        technical: {
          title: 'Technische Exzellenz',
          description: 'Wir konzentrieren uns auf richtige Technik und Grundlagen und stellen sicher, dass jeder Schüler eine solide Basis für langfristigen Erfolg aufbaut.'
        },
        individual: {
          title: 'Individuelles Wachstum',
          description: 'Jeder Schüler ist einzigartig. Wir passen unseren Ansatz an, um jeder Person zu helfen, ihre persönlichen Ziele und ihr Potenzial zu erreichen.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir vermitteln Werte von Respekt, Disziplin und Sportlichkeit, die weit über die Trainingsmatten hinausgehen.'
        }
      },
      cta: {
        title: 'Mit Den Besten Trainieren',
        description: 'Lernen Sie von erfahrenen Trainern, die sich Ihrem Erfolg widmen'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wählen Sie die Mitgliedschaft, die zu Ihren Zielen und Ihrem Zeitplan passt. Alle Pläne beinhalten Zugang zu beiden Standorten und allen Kursen.'
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
        title: 'BJJ Fokussiertes Training',
        subtitle: 'Spezielles Brazilian Jiu-Jitsu Programm für ernsthafte Praktizierende',
        program: 'Nur BJJ Programm',
        description: 'Intensives BJJ-Training während der Sommermonate'
      },
      adults: 'Erwachsene',
      students: 'Studenten & Unter 18',
      month: 'Monat',
      whatsIncluded: 'Was Enthalten Ist',
      mainIncludes: [
        'Unbegrenzter Zugang zu allen Kursen',
        'Training in Campo Tures und Bruneck',
        'Freie Trainingseinheiten',
        'Wettkampfteam-Training',
        'Anfängerfreundlicher Unterricht',
        'Ausrüstungsverleih verfügbar'
      ],
      summerIncludes: [
        'Alle Sommerkurse enthalten',
        'Zugang zu beiden Standorten',
        'Freie Trainingseinheiten',
        'Flexible Terminplanung',
        'Perfekt für Anfänger'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse enthalten',
        'Gi und No-Gi Training',
        'Wettkampfvorbereitung',
        'Zugang zu beiden Standorten',
        'Freie Trainingseinheiten'
      ],
      selectMainSeason: 'Hauptsaison Wählen',
      selectSummerSeason: 'Sommersaison Wählen',
      selectBjjOnly: 'BJJ Programm Wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessern Sie Ihr Training mit unseren spezialisierten Programmen und persönlichem Coaching'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Eins-zu-eins Coaching, zugeschnitten auf Ihre spezifischen Ziele und Bedürfnisse',
        price: '€50',
        duration: 'pro Einheit (60 Min)'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training für bevorstehende Turniere und Wettkämpfe',
        price: '€40',
        duration: 'pro Einheit (90 Min)'
      },
      seminars: {
        title: 'Seminare & Workshops',
        description: 'Spezielle Technik-Workshops und Gastinstruktor-Seminare',
        price: '€25',
        duration: 'pro Seminar'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Die Hauptsaison (September-Juni) bietet unser komplettes Curriculum mit 10 Monaten Training. Die Sommersaison (Juli-August) ist perfekt, um Fähigkeiten zu erhalten oder Ihre Reise mit einer kürzeren Verpflichtung zu beginnen.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu beiden Standorten Campo Tures und Bruneck. Sie können jeden Kurs an beiden Einrichtungen besuchen.'
        },
        trial: {
          question: 'Bieten Sie Probestunden an?',
          answer: 'Absolut! Wir bieten eine kostenlose Probestunde für neue Schüler an. Kontaktieren Sie uns, um Ihre erste Einheit zu planen und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Ihre erste Stunde bringen Sie einfach bequeme Trainingskleidung und Wasser mit. Wir haben Leihausrüstung verfügbar. Während Sie Fortschritte machen, führen wir Sie beim Kauf Ihrer eigenen Ausrüstung.'
        }
      },
      cta: {
        title: 'Bereit Anzufangen?',
        description: 'Wählen Sie Ihre Mitgliedschaft und beginnen Sie heute Ihre Kampfkunstreise'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Bereit, Ihre Kampfkunstreise zu beginnen? Kontaktieren Sie uns, um mehr über unsere Programme zu erfahren und Ihre erste Stunde zu planen.'
      },
      getInTouch: {
        title: 'Kontakt Aufnehmen',
        subtitle: 'Verschiedene Wege, sich mit Sport Academy zu verbinden'
      },
      callUs: 'Rufen Sie Uns An',
      instagram: 'Instagram',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Standorte in der Region Südtirol'
      },
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      visitRequirements: {
        title: 'Zum Ersten Mal Hier?',
        subtitle: 'Alles was Sie für Ihre erste Stunde wissen müssen'
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
        'Alle Trainingsausrüstung',
        'Matten und Trainingsraum',
        'Grundlegende Schutzausrüstung',
        'Anfängerfreundlicher Unterricht'
      ],
      specialInstructions: 'Besondere Anweisungen',
      instructions: {
        age: 'Altersanforderungen: 6+ für Kinderkurse, 16+ für Erwachsenenkurse',
        health: 'Gesundheit: Bitte informieren Sie uns über Verletzungen oder medizinische Bedingungen',
        equipment: 'Ausrüstung: Leihausrüstung für Erstbesucher verfügbar',
        payment: 'Zahlung: Bar, Karte oder Online-Zahlung akzeptiert'
      },
      cta: {
        title: 'Beginnen Sie Ihre Reise Heute',
        description: 'Kontaktieren Sie uns jetzt, um Ihre erste Stunde zu planen und Ihre Transformation zu beginnen'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Meistern Sie die sanfte Kunst der Hebelwirkung, Technik und mentalen Strategie'
        },
        overview: {
          title: 'Die Sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Es betont das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner durch richtige Technik, Hebelwirkung und Timing verteidigen kann.',
            'Bei Sport Academy ist unser BJJ-Programm darauf ausgelegt, Schülern die grundlegenden Prinzipien dieser Kunst zu lehren, während körperliche Fitness, mentale Stärke und Selbstvertrauen aufgebaut werden. Ob Sie ein kompletter Anfänger oder ein erfahrener Praktizierender sind, unser strukturiertes Curriculum hilft Ihnen, Ihre Fähigkeiten systematisch zu entwickeln.',
            'Unsere Kurse kombinieren traditionelle BJJ-Techniken mit modernen Trainingsmethoden und stellen sicher, dass Sie den umfassendsten und effektivsten Unterricht erhalten.'
          ]
        },
        techniques: {
          title: 'Kern BJJ-Techniken',
          subtitle: 'Meistern Sie die grundlegenden Fähigkeiten, die das Fundament des Brazilian Jiu-Jitsu bilden',
          guardWork: {
            title: 'Guard-Arbeit',
            items: [
              'Closed Guard Grundlagen',
              'Open Guard Variationen',
              'Guard Sweeps und Submissions',
              'Guard Retention und Recovery'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Würgegriffe und Strangulationen',
              'Gelenkhebel und Arm Bars',
              'Leg Locks und Fußangriffe',
              'Submission-Ketten und Setups'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Side Control',
              'Back Control und Rear Mount',
              'Knee on Belly und North-South',
              'Übergangsbewegungen'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Gurtsystem',
          subtitle: 'Fortschritt durch das traditionelle Ranking-System des Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Gurt-Philosophie',
            description: 'In BJJ repräsentieren Gürtel nicht nur technisches Wissen, sondern auch Charakterentwicklung, Ausdauer und die Fähigkeit, anderen beim Wachsen zu helfen. Jeder Gürtel wird durch konsequentes Training, Demonstration von Technik und Verkörperung von BJJ-Werten verdient.'
          }
        },
        history: {
          title: 'Geschichte & Linie',
          paragraphs: [
            'Brazilian Jiu-Jitsu entwickelte sich aus traditionellem japanischem Jujutsu und Judo, das von Mitsuyo Maeda im frühen 20. Jahrhundert nach Brasilien gebracht wurde. Die Gracie-Familie, insbesondere Helio Gracie, passte diese Techniken an, um ein effizienteres System für kleinere Praktizierende zu schaffen.',
            'Die Kunst erlangte weltweite Anerkennung durch die frühen UFC-Veranstaltungen, wo Royce Gracie die Wirksamkeit von BJJ gegen größere Gegner aus verschiedenen Kampfkunst-Hintergründen demonstrierte.',
            'Heute entwickelt sich BJJ sowohl als Kampfkunst als auch als Sport weiter, wobei Praktizierende ständig Techniken verfeinern und neue Strategien sowohl für Selbstverteidigung als auch für Wettkämpfe entwickeln.'
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
          description: 'Erleben Sie die sanfte Kunst, die Millionen von Leben weltweit verändert hat',
          joinButton: 'BJJ-Kurse Beitreten',
          backButton: 'Zurück zu Trainiere Wie Ein Kämpfer'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der alle Kampfdisziplinen kombiniert'
        },
        overview: {
          title: 'Die Ultimative Kampfkunst',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der vollständigste Kampfsport, der Techniken aus Boxen, Wrestling, Brazilian Jiu-Jitsu, Muay Thai und anderen Kampfkünsten kombiniert. Es testet die Fähigkeiten eines Kämpfers in allen Kampfbereichen: Stehen, Clinchen und Bodenkampf.',
            'Unser MMA-Programm bei Sport Academy bietet umfassendes Training, das vielseitige Kämpfer entwickelt. Ob Ihr Ziel Selbstverteidigung, Fitness oder Wettkampf ist, unser strukturierter Ansatz stellt sicher, dass Sie Fähigkeiten sicher und effektiv entwickeln.',
            'Das Training umfasst Schlag-Grundlagen, Takedown-Verteidigung, Bodenkontrolle und Submission-Techniken, während gleichzeitig die kardiovaskuläre Ausdauer und mentale Stärke aufgebaut wird, die für diesen anspruchsvollen Sport erforderlich sind.'
          ]
        },
        techniques: {
          title: 'MMA Fähigkeiten',
          subtitle: 'Meistern Sie alle Aspekte des Mixed Martial Arts Kampfes',
          striking: {
            title: 'Schlagen',
            items: [
              'Box-Grundlagen und Kombinationen',
              'Muay Thai Kicks und Knees',
              'Defensive Bewegung und Fußarbeit',
              'Käfig-Cutting und Winkel'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken und Setups',
              'Takedown-Verteidigung und Sprawls',
              'Clinch-Arbeit und Dirty Boxing',
              'Käfig-Wrestling und Kontrolle'
            ]
          },
          groundGame: {
            title: 'Bodenspiel',
            items: [
              'Ground and Pound Techniken',
              'Submission-Verteidigung und Escapes',
              'Positionskontrolle und Übergänge',
              'Sicher wieder auf die Füße kommen'
            ]
          }
        },
        history: {
          title: 'Evolution von MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit Veranstaltungen wie der Ultimate Fighting Championship (UFC) im Jahr 1993. Frühe Wettkämpfe stellten verschiedene Kampfkunststile gegeneinander, um das effektivste Kampfsystem zu bestimmen.',
            'Der Sport entwickelte sich schnell, als Kämpfer erkannten, dass sie in allen Kampfbereichen kompetent sein mussten. Dies führte zur Entwicklung umfassender Trainingsprogramme, die Schlagen, Wrestling und Submission-Grappling kombinierten.',
            'Heute ist MMA ein hoch regulierter Sport mit einheitlichen Regeln und Gewichtsklassen, der einige der geschicktesten und athletischsten Wettkämpfer der Welt zeigt.'
          ],
          milestones: {
            title: 'MMA Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erste UFC-Veranstaltung demonstriert Wirksamkeit verschiedener Kampfkünste'
              },
              {
                year: '2001',
                description: 'Einheitliche MMA-Regeln für konsistente Regulierung etabliert'
              },
              {
                year: '2016',
                description: 'MMA wird Mainstream mit globaler Fernsehübertragung'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des MMA-Trainings',
          subtitle: 'Entwickeln Sie komplette Kampffähigkeiten während Sie Fitness und Selbstvertrauen verbessern',
          items: [
            {
              icon: '💪',
              title: 'Ganzkörper-Fitness',
              description: 'Umfassendes Workout für alle Muskelgruppen'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Selbstvertrauen und mentale Widerstandsfähigkeit aufbauen'
            },
            {
              icon: '🥊',
              title: 'Selbstverteidigung',
              description: 'Praktische Fähigkeiten für reale Situationen lernen'
            },
            {
              icon: '⚡',
              title: 'Athletische Leistung',
              description: 'Geschwindigkeit, Kraft und Koordination verbessern'
            }
          ]
        },
        schedule: {
          title: 'MMA Trainingsplan',
          subtitle: 'Nehmen Sie an unseren MMA-Kursen teil und entwickeln Sie komplette Kampffähigkeiten'
        },
        legends: {
          title: 'MMA Legenden',
          subtitle: 'Lernen Sie von den Techniken der größten Kämpfer',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC Pionier',
              description: 'Bewies die Wirksamkeit von Brazilian Jiu-Jitsu in der frühen UFC'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Längster regierender UFC Mittelgewichts-Champion'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Gilt als einer der größten Schwergewichte aller Zeiten'
            }
          ]
        },
        cta: {
          title: 'Beginnen Sie Ihre MMA-Reise',
          description: 'Trainieren Sie wie ein professioneller Kämpfer und entdecken Sie Ihr Potenzial',
          joinButton: 'MMA-Kurse Beitreten',
          backButton: 'Zurück zu Trainiere Wie Ein Kämpfer'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'No-Gi Grappling',
        hero: {
          subtitle: 'Schnelles Submission-Wrestling ohne das traditionelle Gi'
        },
        overview: {
          title: 'Die Kunst des Submission-Wrestling',
          paragraphs: [
            'No-Gi Grappling, auch bekannt als Submission-Wrestling, konzentriert sich auf Takedowns, Kontrolle und Submissions ohne die traditionelle Gi-Uniform. Dieser Stil betont Geschwindigkeit, Athletik und Anpassungsfähigkeit und macht ihn hocheffektiv sowohl für Sport- als auch für Selbstverteidigungsanwendungen.',
            'Unser Grappling-Programm kombiniert Elemente aus Wrestling, Brazilian Jiu-Jitsu und Catch Wrestling, um ein umfassendes Submission-Grappling-System zu schaffen. Schüler lernen, Gegner durch überlegene Positionierung zu kontrollieren und Kämpfe mit verschiedenen Submission-Techniken zu beenden.',
            'Training in No-Gi Grappling entwickelt außergewöhnliches Körperbewusstsein, Flexibilität und mentale Stärke, während es ein intensives kardiovaskuläres Workout bietet, das funktionale Kraft und Ausdauer aufbaut.'
          ]
        },
        techniques: {
          title: 'Grappling-Grundlagen',
          subtitle: 'Meistern Sie die wesentlichen Fähigkeiten des Submission-Wrestling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Wrestling-Shots und Setups',
              'Judo-Würfe und Trips',
              'Fußsweeps und Reaps',
              'Takedown-Kombinationen'
            ]
          },
          control: {
            title: 'Kontrolle',
            items: [
              'Top-Position Aufrechterhaltung',
              'Druck und Gewichtsverteilung',
              'Übergangskontrolle',
              'Escape-Prävention'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Würgegriffe und Strangulationen',
              'Gelenkhebel und Cranks',
              'Leg Locks und Heel Hooks',
              'Submission-Eingänge und Finishes'
            ]
          }
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Unser systematischer Ansatz zur Entwicklung von Grappling-Fähigkeiten',
          technical: {
            title: 'Technische Entwicklung',
            methods: [
              {
                title: 'Drilling',
                description: 'Wiederholende Praxis grundlegender Bewegungen und Techniken'
              },
              {
                title: 'Positions-Sparring',
                description: 'Live-Training aus spezifischen Positionen zur Timing-Entwicklung'
              },
              {
                title: 'Flow Rolling',
                description: 'Kontinuierliche Bewegungspraxis zur Verbesserung von Übergängen'
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
                title: 'Flexibilitätsarbeit',
                description: 'Mobilität und Verletzungspräventionsübungen'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grappling',
          subtitle: 'Entwickeln Sie körperliche und mentale Eigenschaften durch Submission-Wrestling',
          items: [
            {
              icon: '🤸',
              title: 'Flexibilität',
              description: 'Mobilität und Bewegungsumfang verbessern'
            },
            {
              icon: '💨',
              title: 'Cardio-Ausdauer',
              description: 'Außergewöhnliche kardiovaskuläre Fitness aufbauen'
            },
            {
              icon: '🧩',
              title: 'Problemlösung',
              description: 'Taktisches Denken und Anpassungsfähigkeit entwickeln'
            },
            {
              icon: '⚖️',
              title: 'Körperkontrolle',
              description: 'Balance und räumliches Bewusstsein meistern'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Stundenplan',
          subtitle: 'Nehmen Sie an unseren No-Gi Grappling-Kursen für intensives Submission-Wrestling-Training teil'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Studieren Sie die Techniken der Submission-Wrestling-Meister',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Catch Wrestling Experte',
              description: 'Ehemaliger UFC Schwergewichts-Champion und Catch Wrestling Spezialist'
            },
            {
              name: 'Eddie Bravo',
              title: '10th Planet Gründer',
              description: 'Revolutionärer No-Gi System-Schöpfer und Innovator'
            },
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominanter No-Gi Grappler und Submission-Spezialist'
            }
          ]
        },
        cta: {
          title: 'Submission-Wrestling Meistern',
          description: 'Entwickeln Sie Elite-Grappling-Fähigkeiten durch unser umfassendes No-Gi Programm',
          joinButton: 'Grappling-Kurse Beitreten',
          backButton: 'Zurück zu Trainiere Wie Ein Kämpfer'
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
      coaches: 'Allenatori',
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
      instantConfirmation: 'Conferma istantanea',
      backToTrainLikeFighter: 'Torna a Allena Come Un Combattente'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Allenamento d\'élite di MMA, Brazilian Jiu-Jitsu e Grappling a Campo Tures e Brunico. Coaching professionale di Matteo Parolin e Christian Zecchetto.'
      },
      welcome: {
        title: 'Benvenuti a Sport Academy',
        description: 'Dove i campioni vengono forgiati attraverso dedizione, disciplina e allenamento esperto. Unisciti alla nostra comunità di combattenti e scopri il tuo potenziale in MMA, BJJ e Grappling.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Comprovata esperienza nell\'allenamento di sport da combattimento',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Strutture a Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'Curriculum completo di arti marziali',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allena Come Un Combattente',
        subtitle: 'Padroneggia l\'arte del combattimento attraverso le nostre discipline specializzate'
      },
      mma: {
        description: 'Le Arti Marziali Miste combinano tecniche di striking, grappling e combattimento a terra per l\'esperienza di sport da combattimento definitiva.'
      },
      bjj: {
        description: 'Il Brazilian Jiu-Jitsu si concentra sul combattimento a terra e tecniche di sottomissione, enfatizzando leva e tecnica sulla forza.'
      },
      grappling: {
        description: 'Il Grappling No-Gi sviluppa abilità di wrestling e sottomissione senza il gi tradizionale, concentrandosi su velocità e atletismo.'
      },
      getStarted: {
        title: 'Pronto per Iniziare?',
        subtitle: 'Scegli il tuo percorso per diventare un combattente'
      },
      quickLinks: {
        viewClasses: 'Vedi Corsi',
        viewClassesDesc: 'Esplora i nostri programmi di allenamento',
        checkSchedule: 'Controlla Orari',
        checkScheduleDesc: 'Trova i tuoi orari di allenamento',
        membershipPlans: 'Piani di Abbonamento',
        membershipPlansDesc: 'Scegli il tuo livello di impegno',
        contactUs: 'Contattaci',
        contactUsDesc: 'Mettiti in contatto con il nostro team'
      }
    },
    classes: {
      hero: {
        title: 'I Nostri Corsi',
        description: 'Programmi di allenamento completi progettati per sviluppare le tue abilità, forza e spirito combattivo. Dai principianti ai praticanti avanzati, abbiamo il corso perfetto per il tuo percorso.'
      },
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Lo sport da combattimento definitivo che combina striking, grappling e combattimento a terra. Sviluppa abilità di combattimento complete attraverso l\'allenamento MMA completo.',
        features: [
          'Tecniche di striking (Boxe, Muay Thai, Kickboxing)',
          'Wrestling e difesa da takedown',
          'Combattimento a terra e sottomissioni',
          'Lavoro in gabbia e clinch fighting',
          'Condizionamento e preparazione al combattimento'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'L\'arte gentile che insegna leva, tecnica e timing sulla forza bruta. Padroneggia il gioco a terra attraverso l\'allenamento BJJ tradizionale.',
        features: [
          'Lavoro di guardia e sweep',
          'Tecniche di sottomissione',
          'Controllo posizionale',
          'Applicazioni di autodifesa',
          'Preparazione alle competizioni'
        ]
      },
      grappling: {
        title: 'Grappling No-Gi',
        description: 'Wrestling di sottomissione veloce senza il gi. Sviluppa abilità esplosive di grappling e tecniche di sottomissione.',
        features: [
          'Fondamentali di wrestling',
          'Grappling di sottomissione',
          'Tecniche di takedown',
          'Leg lock e heel hook',
          'Allenamento per competizioni'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Allenamento di Brazilian Jiu-Jitsu appropriato per l\'età che costruisce fiducia, disciplina e forma fisica in un ambiente divertente.',
        features: [
          'Tecniche BJJ di base',
          'Abilità di autodifesa',
          'Disciplina e rispetto',
          'Forma fisica',
          'Strategie anti-bullismo'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Introduzione al wrestling e grappling per giovani atleti, concentrandosi su movimento fondamentale e tecnica.',
        features: [
          'Basi di wrestling',
          'Sviluppo della coordinazione',
          'Costruzione della forza',
          'Abilità di squadra',
          'Preparazione alle competizioni'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Tecniche di wrestling tradizionali che si concentrano su takedown, controllo e condizionamento per tutte le applicazioni di arti marziali.',
        features: [
          'Tecniche di takedown',
          'Condizionamento wrestling',
          'Wrestling posizionale',
          'Scrambling e difesa',
          'Allenamento per competizioni'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Inizia il Tuo Viaggio Oggi',
        description: 'Unisciti alla nostra comunità di combattenti e inizia la tua trasformazione'
      }
    },
    schedule: {
      hero: {
        title: 'Orario degli Allenamenti',
        description: 'Pianifica il tuo allenamento con il nostro programma completo in entrambe le sedi. Tutti i corsi sono inclusi nel tuo abbonamento.'
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
        gi: 'I corsi BJJ richiedono un gi (noleggio disponibile)',
        noGi: 'Corsi No-Gi: pantaloncini e rash guard'
      },
      membershipBenefits: 'Vantaggi dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutti i corsi in entrambe le sedi',
        openMat: 'Sessioni di tatami libero gratuite',
        bothLocations: 'Allenati a Campo Tures e Brunico',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto ad Allenarti?',
        description: 'Prenota la tua prima lezione e inizia il tuo viaggio nelle arti marziali'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Allenatori',
        description: 'Incontra i nostri istruttori di classe mondiale che portano anni di esperienza e passione in ogni sessione di allenamento.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Allenatore & Fondatore',
        background: 'Con oltre 15 anni di esperienza nelle arti marziali, Matteo è un istruttore certificato in Brazilian Jiu-Jitsu e Arti Marziali Miste. Ha gareggiato a livello nazionale e internazionale, portando esperienza di combattimento reale nel suo insegnamento.',
        specializations: [
          'Brazilian Jiu-Jitsu (Cintura Nera)',
          'Arti Marziali Miste',
          'Preparazione alle Competizioni',
          'Sistemi di Autodifesa'
        ],
        achievements: [
          'Cintura Nera BJJ sotto lignaggio rinomato',
          'Diverse vittorie MMA regionali',
          'Istruttore certificato in varie arti marziali',
          '8+ anni di esperienza di coaching'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta un background diversificato negli sport da combattimento con competenza in wrestling, grappling e arti di striking. Il suo approccio tecnico e l\'attenzione ai dettagli lo rendono un istruttore eccezionale per studenti di tutti i livelli.',
        specializations: [
          'Wrestling & Grappling',
          'Grappling di Sottomissione No-Gi',
          'Arti di Striking',
          'Programmi Giovanili'
        ],
        achievements: [
          'Background di wrestling competitivo',
          'Certificazioni avanzate di grappling',
          'Specialista nello sviluppo giovanile',
          'Esperienza di coaching in tornei'
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
          description: 'Ogni studente è unico. Adattiamo il nostro approccio per aiutare ogni persona a raggiungere i propri obiettivi personali e il potenziale.'
        },
        respect: {
          title: 'Rispetto & Disciplina',
          description: 'Instilliamo valori di rispetto, disciplina e sportività che si estendono ben oltre i tappetini di allenamento.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Impara da allenatori esperti che sono dedicati al tuo successo'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli l\'abbonamento che si adatta ai tuoi obiettivi e al tuo programma. Tutti i piani includono l\'accesso a entrambe le sedi e a tutti i corsi.'
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
        description: 'Allenamento BJJ intensivo durante i mesi estivi'
      },
      adults: 'Adulti',
      students: 'Studenti e Sotto i 18',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      mainIncludes: [
        'Accesso illimitato a tutti i corsi',
        'Allenamento a Campo Tures e Brunico',
        'Sessioni di tatami libero',
        'Allenamento del team competitivo',
        'Istruzione adatta ai principianti',
        'Noleggio attrezzature disponibile'
      ],
      summerIncludes: [
        'Tutti i corsi estivi inclusi',
        'Accesso a entrambe le sedi',
        'Sessioni di tatami libero',
        'Programmazione flessibile',
        'Perfetto per principianti'
      ],
      bjjIncludes: [
        'Tutti i corsi BJJ inclusi',
        'Allenamento Gi e No-Gi',
        'Preparazione alle competizioni',
        'Accesso a entrambe le sedi',
        'Sessioni di tatami libero'
      ],
      selectMainSeason: 'Seleziona Stagione Principale',
      selectSummerSeason: 'Seleziona Stagione Estiva',
      selectBjjOnly: 'Seleziona Programma BJJ',
      additionalServices: {
        title: 'Servizi Aggiuntivi',
        description: 'Migliora il tuo allenamento con i nostri programmi specializzati e coaching personale'
      },
      personalTraining: {
        title: 'Allenamento Personale',
        description: 'Coaching uno-a-uno su misura per i tuoi obiettivi e bisogni specifici',
        price: '€50',
        duration: 'per sessione (60 min)'
      },
      competitionPrep: {
        title: 'Preparazione Competizioni',
        description: 'Allenamento specializzato per tornei e competizioni imminenti',
        price: '€40',
        duration: 'per sessione (90 min)'
      },
      seminars: {
        title: 'Seminari & Workshop',
        description: 'Workshop di tecniche speciali e seminari di istruttori ospiti',
        price: '€25',
        duration: 'per seminario'
      },
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra le stagioni?',
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro curriculum completo con 10 mesi di allenamento. La stagione estiva (Luglio-Agosto) è perfetta per mantenere le abilità o iniziare il tuo viaggio con un impegno più breve.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso a entrambe le sedi di Campo Tures e Brunico. Puoi partecipare a qualsiasi corso in entrambe le strutture.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo una lezione di prova gratuita per nuovi studenti. Contattaci per programmare la tua prima sessione e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Che attrezzatura mi serve?',
          answer: 'Per la tua prima lezione, porta semplicemente abbigliamento comodo da allenamento e acqua. Abbiamo attrezzature a noleggio disponibili. Man mano che progredisci, ti guideremo nell\'acquisto della tua attrezzatura.'
        }
      },
      cta: {
        title: 'Pronto per Iniziare?',
        description: 'Scegli il tuo abbonamento e inizia oggi il tuo viaggio nelle arti marziali'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Pronto per iniziare il tuo viaggio nelle arti marziali? Mettiti in contatto con noi per saperne di più sui nostri programmi e programmare la tua prima lezione.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con Sport Academy'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due sedi convenienti che servono la regione dell\'Alto Adige'
      },
      address: 'Indirizzo',
      trainingSchedule: 'Orario degli Allenamenti',
      visitRequirements: {
        title: 'Prima Volta qui?',
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
        'Tutta l\'attrezzatura da allenamento',
        'Tappetini e spazio di allenamento',
        'Attrezzature protettive di base',
        'Istruzione adatta ai principianti'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Requisiti di Età: 6+ per corsi bambini, 16+ per corsi adulti',
        health: 'Salute: Per favore informaci di eventuali infortuni o condizioni mediche',
        equipment: 'Attrezzatura: Attrezzature a noleggio disponibili per visitatori per la prima volta',
        payment: 'Pagamento: Contanti, carta o pagamento online accettati'
      },
      cta: {
        title: 'Inizia il Tuo Viaggio Oggi',
        description: 'Contattaci ora per programmare la tua prima lezione e iniziare la tua trasformazione'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Padroneggia l\'arte gentile della leva, tecnica e strategia mentale'
        },
        overview: {
          title: 'L\'Arte Gentile',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione. Enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte attraverso tecnica, leva e timing appropriati.',
            'Alla Sport Academy, il nostro programma BJJ è progettato per insegnare agli studenti i principi fondamentali di quest\'arte mentre costruisce forma fisica, resistenza mentale e fiducia in se stessi. Che tu sia un principiante completo o un praticante esperto, il nostro curriculum strutturato ti aiuterà a sviluppare le tue abilità sistematicamente.',
            'I nostri corsi combinano tecniche BJJ tradizionali con metodi di allenamento moderni, assicurando che tu riceva l\'istruzione più completa ed efficace possibile.'
          ]
        },
        techniques: {
          title: 'Tecniche BJJ Fondamentali',
          subtitle: 'Padroneggia le abilità fondamentali che formano la base del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Fondamentali della Guardia Chiusa',
              'Variazioni della Guardia Aperta',
              'Sweep e sottomissioni dalla guardia',
              'Ritenzione e recupero della guardia'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Strangolamenti e soffocamenti',
              'Leve articolari e arm bar',
              'Leg lock e attacchi ai piedi',
              'Catene di sottomissioni e setup'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e controllo laterale',
              'Controllo della schiena e rear mount',
              'Knee on belly e north-south',
              'Movimenti di transizione'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema delle Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di classificazione tradizionale del Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Filosofia delle Cinture',
            description: 'Nel BJJ, le cinture rappresentano non solo conoscenza tecnica, ma anche sviluppo del carattere, perseveranza e capacità di aiutare gli altri a crescere. Ogni cintura è guadagnata attraverso allenamento costante, dimostrazione di tecnica e incarnazione dei valori BJJ.'
          }
        },
        history: {
          title: 'Storia e Lignaggio',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu si è evoluto dal Jujutsu giapponese tradizionale e dal Judo, portato in Brasile da Mitsuyo Maeda all\'inizio del XX secolo. La famiglia Gracie, in particolare Helio Gracie, ha adattato queste tecniche per creare un sistema più efficiente per i praticanti più piccoli.',
            'L\'arte ha guadagnato riconoscimento mondiale attraverso i primi eventi UFC, dove Royce Gracie ha dimostrato l\'efficacia del BJJ contro avversari più grandi provenienti da diversi background di arti marziali.',
            'Oggi, il BJJ continua ad evolversi sia come arte marziale che come sport, con i praticanti che raffinano costantemente le tecniche e sviluppano nuove strategie sia per l\'autodifesa che per la competizione.'
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
          subtitle: 'Unisciti ai nostri corsi BJJ regolari in entrambe le sedi'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Sperimenta l\'arte gentile che ha trasformato milioni di vite in tutto il mondo',
          joinButton: 'Unisciti ai Corsi BJJ',
          backButton: 'Torna a Allena Come Un Combattente'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina tutte le discipline di combattimento'
        },
        overview: {
          title: 'L\'Arte di Combattimento Definitiva',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono lo sport da combattimento più completo, combinando tecniche da boxe, wrestling, Brazilian Jiu-Jitsu, Muay Thai e altre arti marziali. Testa le abilità di un combattente in tutte le gamme di combattimento: in piedi, clinch e combattimento a terra.',
            'Il nostro programma MMA alla Sport Academy fornisce allenamento completo che sviluppa combattenti ben equilibrati. Che il tuo obiettivo sia autodifesa, fitness o competizione, il nostro approccio strutturato assicura che tu sviluppi abilità in modo sicuro ed efficace.',
            'L\'allenamento include fondamentali di striking, difesa da takedown, controllo a terra e tecniche di sottomissione, tutto mentre costruisce la resistenza cardiovascolare e la resistenza mentale richieste per questo sport impegnativo.'
          ]
        },
        techniques: {
          title: 'Set di Abilità MMA',
          subtitle: 'Padroneggia tutti gli aspetti del combattimento di arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Fondamentali di boxe e combinazioni',
              'Calci e ginocchiate Muay Thai',
              'Movimento difensivo e gioco di gambe',
              'Taglio della gabbia e angoli'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche di takedown e setup',
              'Difesa da takedown e sprawl',
              'Lavoro di clinch e dirty boxing',
              'Wrestling in gabbia e controllo'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Tecniche di ground and pound',
              'Difesa da sottomissioni e fughe',
              'Controllo posizionale e transizioni',
              'Tornare in piedi in sicurezza'
            ]
          }
        },
        history: {
          title: 'Evoluzione delle MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma le MMA moderne iniziarono con eventi come l\'Ultimate Fighting Championship (UFC) nel 1993. Le prime competizioni misero diversi stili di arti marziali l\'uno contro l\'altro per determinare il sistema di combattimento più efficace.',
            'Lo sport si è evoluto rapidamente quando i combattenti si sono resi conto che dovevano essere competenti in tutte le aree del combattimento. Questo ha portato allo sviluppo di programmi di allenamento completi che combinavano striking, wrestling e grappling di sottomissione.',
            'Oggi, le MMA sono uno sport altamente regolamentato con regole unificate e categorie di peso, caratterizzato da alcuni dei competitori più abili e atletici del mondo.'
          ],
          milestones: {
            title: 'Pietre Miliari delle MMA',
            events: [
              {
                year: '1993',
                description: 'Il primo evento UFC dimostra l\'efficacia di diverse arti marziali'
              },
              {
                year: '2001',
                description: 'Regole Unificate delle MMA stabilite per regolamentazione coerente'
              },
              {
                year: '2016',
                description: 'Le MMA diventano mainstream con copertura televisiva globale'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento MMA',
          subtitle: 'Sviluppa abilità di combattimento complete mentre migliori fitness e fiducia',
          items: [
            {
              icon: '💪',
              title: 'Fitness Totale del Corpo',
              description: 'Allenamento completo che coinvolge tutti i gruppi muscolari'
            },
            {
              icon: '🧠',
              title: 'Resistenza Mentale',
              description: 'Costruisci fiducia e resilienza mentale'
            },
            {
              icon: '🥊',
              title: 'Autodifesa',
              description: 'Impara abilità pratiche per situazioni del mondo reale'
            },
            {
              icon: '⚡',
              title: 'Prestazione Atletica',
              description: 'Migliora velocità, potenza e coordinazione'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento MMA',
          subtitle: 'Unisciti ai nostri corsi MMA e sviluppa abilità di combattimento complete'
        },
        legends: {
          title: 'Leggende delle MMA',
          subtitle: 'Impara dalle tecniche pionieristiche dei più grandi combattenti',
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
              description: 'Considerato uno dei più grandi pesi massimi di tutti i tempi'
            }
          ]
        },
        cta: {
          title: 'Inizia il Tuo Viaggio MMA',
          description: 'Allenati come un combattente professionista e scopri il tuo potenziale',
          joinButton: 'Unisciti ai Corsi MMA',
          backButton: 'Torna a Allena Come Un Combattente'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling No-Gi',
        hero: {
          subtitle: 'Wrestling di sottomissione veloce senza il gi tradizionale'
        },
        overview: {
          title: 'L\'Arte del Wrestling di Sottomissione',
          paragraphs: [
            'Il Grappling No-Gi, noto anche come wrestling di sottomissione, si concentra su takedown, controllo e sottomissioni senza l\'uniforme gi tradizionale. Questo stile enfatizza velocità, atletismo e adattabilità, rendendolo altamente efficace sia per applicazioni sportive che di autodifesa.',
            'Il nostro programma di grappling combina elementi da wrestling, Brazilian Jiu-Jitsu e catch wrestling per creare un sistema completo di grappling di sottomissione. Gli studenti imparano a controllare gli avversari attraverso posizionamento superiore e finire i combattimenti con varie tecniche di sottomissione.',
            'L\'allenamento nel grappling No-Gi sviluppa eccezionale consapevolezza corporea, flessibilità e resistenza mentale fornendo un allenamento cardiovascolare intenso che costruisce forza funzionale e resistenza.'
          ]
        },
        techniques: {
          title: 'Fondamentali del Grappling',
          subtitle: 'Padroneggia le abilità essenziali del wrestling di sottomissione',
          takedowns: {
            title: 'Takedown',
            items: [
              'Shot di wrestling e setup',
              'Proiezioni e sgambetti judo',
              'Sweep e reap dei piedi',
              'Combinazioni di takedown'
            ]
          },
          control: {
            title: 'Controllo',
            items: [
              'Mantenimento della posizione superiore',
              'Pressione e distribuzione del peso',
              'Controllo di transizione',
              'Prevenzione delle fughe'
            ]
          },
          submissions: {
            title: 'Sottomissioni',
            items: [
              'Strangolamenti e soffocamenti',
              'Leve articolari e cranks',
              'Leg lock e heel hook',
              'Entrate e finalizzazioni di sottomissioni'
            ]
          }
        },
        methodology: {
          title: 'Metodologia di Allenamento',
          subtitle: 'Il nostro approccio sistematico allo sviluppo delle abilità di grappling',
          technical: {
            title: 'Sviluppo Tecnico',
            methods: [
              {
                title: 'Drilling',
                description: 'Pratica ripetitiva di movimenti e tecniche fondamentali'
              },
              {
                title: 'Sparring Posizionale',
                description: 'Allenamento dal vivo da posizioni specifiche per sviluppare il timing'
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
                title: 'Lavoro di Flessibilità',
                description: 'Esercizi di mobilità e prevenzione infortuni'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici del Grappling',
          subtitle: 'Sviluppa attributi fisici e mentali attraverso il wrestling di sottomissione',
          items: [
            {
              icon: '🤸',
              title: 'Flessibilità',
              description: 'Migliora mobilità e range di movimento'
            },
            {
              icon: '💨',
              title: 'Resistenza Cardio',
              description: 'Costruisci fitness cardiovascolare eccezionale'
            },
            {
              icon: '🧩',
              title: 'Risoluzione Problemi',
              description: 'Sviluppa pensiero tattico e adattabilità'
            },
            {
              icon: '⚖️',
              title: 'Controllo del Corpo',
              description: 'Padroneggia equilibrio e consapevolezza spaziale'
            }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Unisciti ai nostri corsi di grappling No-Gi per allenamento intensivo di wrestling di sottomissione'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Studia le tecniche dei maestri del wrestling di sottomissione',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Esperto di Catch Wrestling',
              description: 'Ex Campione dei Pesi Massimi UFC e specialista di catch wrestling'
            },
            {
              name: 'Eddie Bravo',
              title: 'Fondatore 10th Planet',
              description: 'Creatore rivoluzionario del sistema No-Gi e innovatore'
            },
            {
              name: 'Gordon Ryan',
              title: 'Campione ADCC',
              description: 'Grappler No-Gi dominante e specialista di sottomissioni'
            }
          ]
        },
        cta: {
          title: 'Padroneggia il Wrestling di Sottomissione',
          description: 'Sviluppa abilità di grappling d\'élite attraverso il nostro programma No-Gi completo',
          joinButton: 'Unisciti ai Corsi di Grappling',
          backButton: 'Torna a Allena Come Un Combattente'
        }
      }
    },
    footer: {
      tagline: 'Allenamento d\'Élite MMA, BJJ & Grappling',
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