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
      instantConfirmation: 'Instant Confirmation',
      visitUs: 'Visit Us',
      dropInWelcome: 'Drop-ins Welcome',
      duringTrainingHours: 'During training hours',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates & DMs'
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
        yearsDescription: 'Training champions since 2017',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Training Programs',
        programsDescription: 'MMA, BJJ, Grappling & more',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Master the art of combat sports with our comprehensive training programs'
      },
      mma: {
        description: 'Complete mixed martial arts training combining striking, grappling, and ground fighting techniques for the ultimate combat sport experience.'
      },
      bjj: {
        description: 'Master the gentle art of Brazilian Jiu-Jitsu, focusing on leverage, technique, and ground fighting to overcome larger opponents.'
      },
      grappling: {
        description: 'Develop superior wrestling and submission skills through no-gi grappling training that emphasizes control and positioning.'
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
        membershipPlansDesc: 'Choose your membership',
        contactUs: 'Contact Us',
        contactUsDesc: 'Get in touch with our team'
      }
    },
    classes: {
      hero: {
        title: 'Our Classes',
        description: 'Discover our comprehensive range of martial arts programs designed for all skill levels. From beginner-friendly introductions to advanced competition preparation, we offer expert instruction in MMA, Brazilian Jiu-Jitsu, Grappling, and specialized youth programs.'
      },
      mma: {
        title: 'Mixed Martial Arts (MMA)',
        description: 'Experience the ultimate combat sport that combines striking, grappling, and ground fighting. Our MMA program integrates techniques from boxing, Muay Thai, wrestling, and Brazilian Jiu-Jitsu to create well-rounded fighters.',
        features: [
          'Stand-up striking techniques',
          'Takedowns and wrestling',
          'Ground fighting and submissions',
          'Cage work and clinch fighting',
          'Conditioning and fitness training'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu (BJJ)',
        description: 'Master the gentle art that emphasizes leverage, technique, and timing over strength and size. Our BJJ program focuses on ground fighting, submissions, and positional control.',
        features: [
          'Guard work and sweeps',
          'Submission techniques',
          'Positional control',
          'Self-defense applications',
          'Competition preparation'
        ]
      },
      grappling: {
        title: 'Grappling (No-Gi)',
        description: 'Develop your wrestling and submission skills without the traditional gi. Our grappling classes focus on takedowns, control positions, and submission techniques.',
        features: [
          'Wrestling takedowns',
          'Submission grappling',
          'Positional control',
          'Scrambles and transitions',
          'Competition training'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Introduce your children to the fundamentals of Brazilian Jiu-Jitsu in a safe, fun, and supportive environment. Our kids program builds confidence, discipline, and physical fitness.',
        features: [
          'Basic BJJ techniques',
          'Self-defense skills',
          'Discipline and respect',
          'Physical fitness',
          'Social skills development'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Youth-focused grappling program that teaches wrestling fundamentals and submission techniques in an age-appropriate setting.',
        features: [
          'Wrestling basics',
          'Grappling fundamentals',
          'Strength and conditioning',
          'Competition preparation',
          'Character development'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Build a strong foundation in wrestling with our comprehensive program covering takedowns, control, and conditioning.',
        features: [
          'Takedown techniques',
          'Wrestling conditioning',
          'Mat control',
          'Defensive wrestling',
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
      cta: {
        title: 'Ready to Train?',
        description: 'Book your first class today and start your martial arts journey with us.'
      }
    },
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Meet our world-class instructors who bring decades of combined experience in martial arts, competition, and coaching to every training session.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 15 years of martial arts experience, Matteo is a certified Brazilian Jiu-Jitsu black belt and accomplished MMA fighter. He founded Sport Academy in 2017 with the vision of bringing world-class martial arts training to South Tyrol.',
        specializations: [
          'Brazilian Jiu-Jitsu Black Belt',
          'MMA Competition Experience',
          'Wrestling Techniques',
          'Competition Coaching'
        ],
        achievements: [
          'BJJ Black Belt under renowned lineage',
          'Multiple regional MMA victories',
          'Certified martial arts instructor',
          'Over 100 students trained to competition level'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings a wealth of knowledge in grappling and submission wrestling. His technical approach and attention to detail make him an exceptional instructor for students of all levels.',
        specializations: [
          'Submission Wrestling',
          'No-Gi Grappling',
          'Technical Instruction',
          'Youth Programs'
        ],
        achievements: [
          'Advanced grappling certifications',
          'Regional grappling championships',
          'Specialized youth instructor training',
          'Expert in submission techniques'
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
          description: 'Every student receives personalized attention and instruction tailored to their goals and skill level.'
        },
        respect: {
          title: 'Respect & Discipline',
          description: 'We instill the values of respect, discipline, and sportsmanship that extend beyond the training mats.'
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
        description: 'Choose the membership plan that fits your goals and schedule. All memberships include access to our expert coaching and comprehensive training programs.'
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
        description: 'Perfect for those who want to focus exclusively on Brazilian Jiu-Jitsu'
      },
      adults: 'Adults',
      students: 'Students',
      month: 'month',
      whatsIncluded: 'What\'s Included',
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
        description: 'Specialized training programs designed to prepare you for tournaments and competitions.',
        price: '€80',
        duration: 'per session'
      },
      seminars: {
        title: 'Seminars',
        description: 'Special workshops and seminars with guest instructors and advanced techniques.',
        price: '€30',
        duration: 'per seminar'
      },
      faq: {
        title: 'Frequently Asked Questions',
        seasons: {
          question: 'What\'s the difference between seasons?',
          answer: 'The main season (September-June) offers our full program with consistent training throughout the academic year. The summer season (July-August) provides a more flexible schedule perfect for vacation periods.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to classes at both our Campo Tures and Brunico locations, giving you maximum flexibility in your training schedule.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We encourage new students to try a class before committing to a membership. Contact us to schedule your trial session.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For beginners, we provide basic equipment. As you progress, you\'ll want to invest in your own gear including gi, gloves, and protective equipment.'
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
        description: 'Ready to start your martial arts journey? Get in touch with us to learn more about our programs, schedule a trial class, or ask any questions you might have.'
      },
      getInTouch: {
        title: 'Get In Touch',
        subtitle: 'Multiple ways to connect with our team'
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
        subtitle: 'Here\'s what you need to know before your first class'
      },
      firstTimeVisitors: 'First Time Visitors',
      whatToBring: 'What to Bring',
      whatWeProvide: 'What We Provide',
      bring: [
        'Comfortable athletic clothing',
        'Water bottle',
        'Positive attitude and willingness to learn',
        'Towel for after training'
      ],
      provide: [
        'Basic training gloves (temporary use)',
        'Shin guards (temporary use)',
        'Clean training mats',
        'Expert instruction and guidance'
      ],
      specialInstructions: 'Important Information',
      instructions: {
        age: 'Minimum Age: 16 years for adult classes, younger students welcome in youth programs',
        health: 'Health: Please inform instructors of any injuries or health conditions',
        equipment: 'Equipment: Basic gear provided for beginners, personal equipment recommended for regular training',
        payment: 'Payment: Trial classes available, membership plans start after your first session'
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Take the first step towards mastering martial arts. Contact us today to schedule your trial class.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Master the gentle art that emphasizes technique over strength'
        },
        overview: {
          title: 'The Gentle Art',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. Developed from traditional Japanese jujitsu and judo, BJJ emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent through proper technique and leverage.',
            'At Sport Academy, our BJJ program is designed to teach students the fundamental principles of this art while building physical fitness, mental toughness, and self-confidence. Whether you\'re a complete beginner or an experienced practitioner, our structured curriculum will help you develop your skills systematically.',
            'Our classes combine technical instruction with live sparring (rolling), allowing students to practice techniques in a controlled but realistic environment. This approach ensures that students not only learn the movements but also understand how to apply them effectively.'
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
            description: 'The BJJ belt system represents not just technical knowledge, but also time on the mat, character development, and the ability to help others learn. Each belt level requires dedication, consistency, and a deep understanding of the art\'s principles.'
          }
        },
        history: {
          title: 'History & Lineage',
          paragraphs: [
            'Brazilian Jiu-Jitsu was developed in Brazil in the early 20th century by the Gracie family, who modified traditional Japanese jujitsu and judo techniques. The art gained international recognition through mixed martial arts competitions, where BJJ practitioners consistently defeated opponents from other martial arts.',
            'The effectiveness of BJJ lies in its focus on ground fighting, where size and strength advantages are minimized. This makes it an ideal martial art for self-defense and an essential component of modern mixed martial arts training.'
          ],
          keyFigures: {
            title: 'Key Figures',
            people: [
              {
                name: 'Helio Gracie',
                description: 'Co-founder of Brazilian Jiu-Jitsu, adapted techniques for smaller practitioners'
              },
              {
                name: 'Carlos Gracie',
                description: 'Brought Japanese jujitsu to Brazil and founded the Gracie fighting system'
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
          subtitle: 'Join our regular BJJ classes at both locations'
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
          subtitle: 'Master the art of control, positioning, and submission without the gi'
        },
        overview: {
          title: 'No-Gi Grappling',
          paragraphs: [
            'Grappling, also known as submission wrestling or no-gi grappling, is a form of combat sport that focuses on takedowns, control positions, and submission techniques without the traditional gi uniform. This style emphasizes speed, athleticism, and technical precision.',
            'Our grappling program combines elements from wrestling, Brazilian Jiu-Jitsu, and submission wrestling to create a comprehensive ground fighting system. Students learn to control opponents through superior positioning and finish fights with various submission techniques.',
            'Training in no-gi grappling develops different skills compared to gi-based arts, as grips are more limited and the pace is typically faster. This makes it an excellent complement to BJJ training and essential preparation for mixed martial arts.'
          ]
        },
        techniques: {
          title: 'Essential Techniques',
          subtitle: 'Develop the core skills needed for effective no-gi grappling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Wrestling shots and entries',
              'Throws and trips',
              'Clinch work and dirty boxing',
              'Sprawls and takedown defense'
            ]
          },
          control: {
            title: 'Control Positions',
            items: [
              'Top control and pressure',
              'Side control variations',
              'Mount and back control',
              'Transitional control'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Rear naked chokes',
              'Arm bars and kimuras',
              'Leg locks and heel hooks',
              'Guillotines and front chokes'
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
                description: 'Repetitive practice of techniques to build muscle memory'
              },
              {
                title: 'Positional Sparring',
                description: 'Live practice from specific positions to develop timing'
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
          subtitle: 'Discover how grappling training transforms your physical and mental capabilities',
          items: [
            {
              icon: '💪',
              title: 'Functional Strength',
              description: 'Build real-world applicable strength through resistance training'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Develop resilience and problem-solving under pressure'
            },
            {
              icon: '⚡',
              title: 'Explosive Power',
              description: 'Improve athletic performance and reaction time'
            },
            {
              icon: '🎯',
              title: 'Technical Precision',
              description: 'Master complex movements and timing'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'Train with us at both locations throughout the week'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Learn from the techniques developed by the masters of the art',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Catch Wrestling Expert',
              description: 'Former UFC Heavyweight Champion known for his submission skills'
            },
            {
              name: 'Frank Shamrock',
              title: 'Submission Fighting Pioneer',
              description: 'Early MMA champion who popularized no-gi submission fighting'
            },
            {
              name: 'Eddie Bravo',
              title: '10th Planet Founder',
              description: 'Revolutionary no-gi system creator and innovator'
            }
          ]
        },
        cta: {
          title: 'Master the Art of Control',
          description: 'Develop superior grappling skills that translate to all areas of combat sports.',
          joinButton: 'Join Grappling Classes'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining striking, grappling, and ground fighting'
        },
        overview: {
          title: 'The Complete Fighter',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most comprehensive combat sport, combining techniques from boxing, Muay Thai, wrestling, Brazilian Jiu-Jitsu, and other martial arts. MMA fighters must be proficient in all ranges of combat: standing striking, clinch work, takedowns, and ground fighting.',
            'Our MMA program is designed to develop well-rounded fighters who can adapt to any situation in the cage or ring. We focus on building a strong foundation in each discipline while teaching students how to transition seamlessly between different ranges of combat.',
            'Whether your goal is to compete professionally, improve your fitness, or learn effective self-defense, our MMA training will challenge you physically and mentally while building confidence and discipline.'
          ]
        },
        techniques: {
          title: 'Core Disciplines',
          subtitle: 'Master all aspects of mixed martial arts combat',
          striking: {
            title: 'Striking',
            items: [
              'Boxing fundamentals and combinations',
              'Muay Thai kicks and knees',
              'Footwork and head movement',
              'Striking defense and counters'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown techniques and setups',
              'Takedown defense and sprawls',
              'Clinch work and dirty boxing',
              'Ground control and positioning'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Submission techniques and escapes',
              'Ground and pound strategies',
              'Guard work and sweeps',
              'Submission defense'
            ]
          }
        },
        history: {
          title: 'Evolution of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with events like the Ultimate Fighting Championship (UFC) in 1993. Early competitions pitted practitioners of different martial arts against each other to determine the most effective fighting style.',
            'Over time, it became clear that the most successful fighters were those who could adapt and combine techniques from multiple disciplines. This led to the evolution of MMA as a distinct sport with its own training methods and strategies.'
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
                description: 'MMA becomes mainstream with global recognition'
              },
              {
                year: 'Present',
                description: 'Highly technical, well-rounded athletes dominate the sport'
              }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Discover how MMA training transforms your physical and mental capabilities',
          items: [
            {
              icon: '🥊',
              title: 'Complete Fitness',
              description: 'Full-body conditioning that builds strength, cardio, and flexibility'
            },
            {
              icon: '🛡️',
              title: 'Self-Defense',
              description: 'Real-world applicable skills for personal protection'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Develop confidence, discipline, and stress management'
            },
            {
              icon: '⚡',
              title: 'Athletic Performance',
              description: 'Improve coordination, reaction time, and overall athleticism'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Join our comprehensive MMA program'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Learn from the techniques and strategies of the greatest fighters',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Former UFC Middleweight Champion known for his striking precision'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendary heavyweight with incredible ground and pound'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Innovative fighter known for his reach and creativity'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Master all aspects of combat sports and reach your full potential.',
          joinButton: 'Join MMA Training'
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
      instantConfirmation: 'Sofortige Bestätigung',
      visitUs: 'Besuchen Sie Uns',
      dropInWelcome: 'Spontanbesuche Willkommen',
      duringTrainingHours: 'Während der Trainingszeiten',
      responseWithin2Hours: 'Antwort innerhalb 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates & DMs'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Willkommen bei Sport Academy',
        description: 'Im Herzen Südtirols gelegen, ist Sport Academy seit 2017 die führende Destination für MMA, Brazilian Jiu-Jitsu und Grappling Training. Unsere Experten-Trainer Matteo Parolin und Christian Zecchetto bringen Weltklasse-Unterricht nach Campo Tures und Bruneck.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Champions trainieren seit 2017',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Campo Tures & Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'MMA, BJJ, Grappling & mehr',
        exploreClasses: 'Unsere Kurse Entdecken'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Meistere die Kunst der Kampfsportarten mit unseren umfassenden Trainingsprogrammen'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training, das Schlag-, Grappling- und Bodenkampftechniken für das ultimative Kampfsporterlebnis kombiniert.'
      },
      bjj: {
        description: 'Meistere die sanfte Kunst des Brazilian Jiu-Jitsu, die sich auf Hebelwirkung, Technik und Bodenkampf konzentriert, um größere Gegner zu überwinden.'
      },
      grappling: {
        description: 'Entwickle überlegene Wrestling- und Submission-Fähigkeiten durch No-Gi Grappling Training, das Kontrolle und Positionierung betont.'
      },
      getStarted: {
        title: 'Heute Beginnen',
        subtitle: 'Wähle deinen Weg zur Kampfkunst-Exzellenz'
      },
      quickLinks: {
        viewClasses: 'Kurse Ansehen',
        viewClassesDesc: 'Entdecke unsere Trainingsprogramme',
        checkSchedule: 'Stundenplan Prüfen',
        checkScheduleDesc: 'Finde deine perfekte Trainingszeit',
        membershipPlans: 'Mitgliedschaftspläne',
        membershipPlansDesc: 'Wähle deine Mitgliedschaft',
        contactUs: 'Kontakt',
        contactUsDesc: 'Kontaktiere unser Team'
      }
    },
    classes: {
      hero: {
        title: 'Unsere Kurse',
        description: 'Entdecke unser umfassendes Angebot an Kampfkunstprogrammen für alle Fähigkeitsstufen. Von anfängerfreundlichen Einführungen bis zur fortgeschrittenen Wettkampfvorbereitung bieten wir Expertenunterricht in MMA, Brazilian Jiu-Jitsu, Grappling und spezialisierten Jugendprogrammen.'
      },
      mma: {
        title: 'Mixed Martial Arts (MMA)',
        description: 'Erlebe den ultimativen Kampfsport, der Schlagen, Grappling und Bodenkampf kombiniert. Unser MMA-Programm integriert Techniken aus Boxen, Muay Thai, Wrestling und Brazilian Jiu-Jitsu, um vielseitige Kämpfer zu schaffen.',
        features: [
          'Stand-up Schlagtechniken',
          'Takedowns und Wrestling',
          'Bodenkampf und Submissions',
          'Käfigarbeit und Clinch-Kampf',
          'Konditions- und Fitnesstraining'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu (BJJ)',
        description: 'Meistere die sanfte Kunst, die Hebelwirkung, Technik und Timing über Kraft und Größe betont. Unser BJJ-Programm konzentriert sich auf Bodenkampf, Submissions und Positionskontrolle.',
        features: [
          'Guard-Arbeit und Sweeps',
          'Submission-Techniken',
          'Positionskontrolle',
          'Selbstverteidigungsanwendungen',
          'Wettkampfvorbereitung'
        ]
      },
      grappling: {
        title: 'Grappling (No-Gi)',
        description: 'Entwickle deine Wrestling- und Submission-Fähigkeiten ohne den traditionellen Gi. Unsere Grappling-Kurse konzentrieren sich auf Takedowns, Kontrollpositionen und Submission-Techniken.',
        features: [
          'Wrestling Takedowns',
          'Submission Grappling',
          'Positionskontrolle',
          'Scrambles und Übergänge',
          'Wettkampftraining'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Führe deine Kinder in die Grundlagen des Brazilian Jiu-Jitsu in einer sicheren, spaßigen und unterstützenden Umgebung ein. Unser Kinderprogramm baut Selbstvertrauen, Disziplin und körperliche Fitness auf.',
        features: [
          'Grundlegende BJJ-Techniken',
          'Selbstverteidigungsfähigkeiten',
          'Disziplin und Respekt',
          'Körperliche Fitness',
          'Entwicklung sozialer Fähigkeiten'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Jugendfokussiertes Grappling-Programm, das Wrestling-Grundlagen und Submission-Techniken in einem altersgerechten Setting lehrt.',
        features: [
          'Wrestling-Grundlagen',
          'Grappling-Fundamentals',
          'Kraft und Kondition',
          'Wettkampfvorbereitung',
          'Charakterentwicklung'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Baue eine starke Grundlage im Wrestling mit unserem umfassenden Programm, das Takedowns, Kontrolle und Konditionierung abdeckt.',
        features: [
          'Takedown-Techniken',
          'Wrestling-Konditionierung',
          'Mattenkontrolle',
          'Defensives Wrestling',
          'Wettkampfvorbereitung'
        ]
      },
      whatYouLearn: 'Was Du Lernst',
      cta: {
        title: 'Bereit, Deine Reise zu Beginnen?',
        description: 'Tritt unserer Gemeinschaft engagierter Kampfkünstler bei und beginne heute deine Transformation.'
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
      openMat: 'Offene Matte',
      cta: {
        title: 'Bereit zu Trainieren?',
        description: 'Buche heute deinen ersten Kurs und beginne deine Kampfkunst-Reise mit uns.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne unsere Weltklasse-Instruktoren kennen, die jahrzehntelange kombinierte Erfahrung in Kampfkunst, Wettkampf und Coaching in jede Trainingseinheit einbringen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 15 Jahren Kampfkunsterfahrung ist Matteo ein zertifizierter Brazilian Jiu-Jitsu Schwarzgurt und erfolgreicher MMA-Kämpfer. Er gründete Sport Academy 2017 mit der Vision, Weltklasse-Kampfkunsttraining nach Südtirol zu bringen.',
        specializations: [
          'Brazilian Jiu-Jitsu Schwarzgurt',
          'MMA Wettkampferfahrung',
          'Wrestling-Techniken',
          'Wettkampf-Coaching'
        ],
        achievements: [
          'BJJ Schwarzgurt unter renommierter Linie',
          'Mehrere regionale MMA-Siege',
          'Zertifizierter Kampfkunstinstruktor',
          'Über 100 Schüler auf Wettkampfniveau trainiert'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt eine Fülle von Wissen in Grappling und Submission Wrestling mit. Sein technischer Ansatz und seine Aufmerksamkeit für Details machen ihn zu einem außergewöhnlichen Instruktor für Schüler aller Stufen.',
        specializations: [
          'Submission Wrestling',
          'No-Gi Grappling',
          'Technischer Unterricht',
          'Jugendprogramme'
        ],
        achievements: [
          'Fortgeschrittene Grappling-Zertifizierungen',
          'Regionale Grappling-Meisterschaften',
          'Spezialisierte Jugendtrainer-Ausbildung',
          'Experte in Submission-Techniken'
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
          description: 'Jeder Schüler erhält persönliche Aufmerksamkeit und Unterricht, der auf seine Ziele und sein Fähigkeitsniveau zugeschnitten ist.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir vermitteln die Werte von Respekt, Disziplin und Sportlichkeit, die über die Trainingsmatten hinausgehen.'
        }
      },
      cta: {
        title: 'Trainiere mit den Besten',
        description: 'Erlebe Weltklasse-Unterricht und bringe deine Kampfkunstfähigkeiten auf die nächste Stufe.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle den Mitgliedschaftsplan, der zu deinen Zielen und deinem Zeitplan passt. Alle Mitgliedschaften beinhalten Zugang zu unserem Expertencoaching und umfassenden Trainingsprogrammen.'
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
        subtitle: 'Spezielles Brazilian Jiu-Jitsu Trainingsprogramm',
        program: 'BJJ Fokussiertes Programm',
        description: 'Perfekt für diejenigen, die sich ausschließlich auf Brazilian Jiu-Jitsu konzentrieren möchten'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was Enthalten Ist',
      selectMainSeason: 'Hauptsaison Wählen',
      selectSummerSeason: 'Sommersaison Wählen',
      selectBjjOnly: 'Nur BJJ Wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessere dein Training mit unseren spezialisierten Programmen und persönlichen Coaching-Optionen.'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Einzelcoaching-Sitzungen, die auf deine spezifischen Ziele und Bedürfnisse zugeschnitten sind.',
        price: '€50',
        duration: 'pro Sitzung'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisierte Trainingsprogramme, die dich auf Turniere und Wettkämpfe vorbereiten.',
        price: '€80',
        duration: 'pro Sitzung'
      },
      seminars: {
        title: 'Seminare',
        description: 'Spezielle Workshops und Seminare mit Gastinstruktoren und fortgeschrittenen Techniken.',
        price: '€30',
        duration: 'pro Seminar'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Die Hauptsaison (September-Juni) bietet unser vollständiges Programm mit konsistentem Training während des Schuljahres. Die Sommersaison (Juli-August) bietet einen flexibleren Zeitplan, perfekt für Urlaubszeiten.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu Kursen an beiden Standorten Campo Tures und Bruneck, was dir maximale Flexibilität in deinem Trainingsplan gibt.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Absolut! Wir ermutigen neue Schüler, eine Stunde auszuprobieren, bevor sie sich für eine Mitgliedschaft entscheiden. Kontaktiere uns, um deine Probestunde zu planen.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Anfänger stellen wir Grundausrüstung zur Verfügung. Mit fortschreitendem Training solltest du in deine eigene Ausrüstung investieren, einschließlich Gi, Handschuhe und Schutzausrüstung.'
        }
      },
      cta: {
        title: 'Beginne Heute Deine Reise',
        description: 'Tritt unserer Gemeinschaft engagierter Kampfkünstler bei und transformiere dein Leben durch Training.'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Bereit, deine Kampfkunst-Reise zu beginnen? Kontaktiere uns, um mehr über unsere Programme zu erfahren, eine Probestunde zu vereinbaren oder Fragen zu stellen.'
      },
      getInTouch: {
        title: 'Kontakt Aufnehmen',
        subtitle: 'Verschiedene Wege, um mit unserem Team in Kontakt zu treten'
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
        subtitle: 'Das solltest du vor deiner ersten Stunde wissen'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was Mitbringen',
      whatWeProvide: 'Was Wir Bereitstellen',
      bring: [
        'Bequeme Sportkleidung',
        'Wasserflasche',
        'Positive Einstellung und Lernbereitschaft',
        'Handtuch für nach dem Training'
      ],
      provide: [
        'Grundlegende Trainingshandschuhe (temporäre Nutzung)',
        'Schienbeinschoner (temporäre Nutzung)',
        'Saubere Trainingsmatten',
        'Expertenunterricht und Anleitung'
      ],
      specialInstructions: 'Wichtige Informationen',
      instructions: {
        age: 'Mindestalter: 16 Jahre für Erwachsenenkurse, jüngere Schüler willkommen in Jugendprogrammen',
        health: 'Gesundheit: Bitte informiere Instruktoren über Verletzungen oder Gesundheitszustände',
        equipment: 'Ausrüstung: Grundausrüstung für Anfänger bereitgestellt, persönliche Ausrüstung für regelmäßiges Training empfohlen',
        payment: 'Zahlung: Probestunden verfügbar, Mitgliedschaftspläne beginnen nach deiner ersten Sitzung'
      },
      cta: {
        title: 'Bereit zu Beginnen?',
        description: 'Mache den ersten Schritt zur Beherrschung der Kampfkünste. Kontaktiere uns heute, um deine Probestunde zu vereinbaren.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Meistere die sanfte Kunst, die Technik über Kraft betont'
        },
        overview: {
          title: 'Die Sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Entwickelt aus traditionellem japanischem Jujitsu und Judo, betont BJJ das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner durch richtige Technik und Hebelwirkung verteidigen kann.',
            'Bei Sport Academy ist unser BJJ-Programm darauf ausgelegt, Schülern die grundlegenden Prinzipien dieser Kunst zu lehren, während körperliche Fitness, mentale Stärke und Selbstvertrauen aufgebaut werden. Ob du ein kompletter Anfänger oder ein erfahrener Praktiker bist, unser strukturierter Lehrplan wird dir helfen, deine Fähigkeiten systematisch zu entwickeln.',
            'Unsere Kurse kombinieren technischen Unterricht mit Live-Sparring (Rolling), wodurch Schüler Techniken in einer kontrollierten, aber realistischen Umgebung üben können. Dieser Ansatz stellt sicher, dass Schüler nicht nur die Bewegungen lernen, sondern auch verstehen, wie sie effektiv angewendet werden.'
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
              'Submission Ketten und Setups'
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
            description: 'Das BJJ-Gurtsystem repräsentiert nicht nur technisches Wissen, sondern auch Zeit auf der Matte, Charakterentwicklung und die Fähigkeit, anderen beim Lernen zu helfen. Jede Gurtstufe erfordert Hingabe, Beständigkeit und ein tiefes Verständnis der Prinzipien der Kunst.'
          }
        },
        history: {
          title: 'Geschichte & Linie',
          paragraphs: [
            'Brazilian Jiu-Jitsu wurde im frühen 20. Jahrhundert in Brasilien von der Familie Gracie entwickelt, die traditionelle japanische Jujitsu- und Judo-Techniken modifizierte. Die Kunst erlangte internationale Anerkennung durch Mixed Martial Arts Wettkämpfe, wo BJJ-Praktiker konsequent Gegner aus anderen Kampfkünsten besiegten.',
            'Die Effektivität von BJJ liegt in seinem Fokus auf Bodenkampf, wo Größen- und Kraftvorteile minimiert werden. Dies macht es zu einer idealen Kampfkunst für Selbstverteidigung und einem wesentlichen Bestandteil des modernen Mixed Martial Arts Trainings.'
          ],
          keyFigures: {
            title: 'Schlüsselfiguren',
            people: [
              {
                name: 'Helio Gracie',
                description: 'Mitbegründer des Brazilian Jiu-Jitsu, passte Techniken für kleinere Praktiker an'
              },
              {
                name: 'Carlos Gracie',
                description: 'Brachte japanisches Jujitsu nach Brasilien und gründete das Gracie-Kampfsystem'
              },
              {
                name: 'Royce Gracie',
                description: 'Bewies BJJs Effektivität in frühen UFC-Wettkämpfen'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ Trainingsplan',
          subtitle: 'Nimm an unseren regelmäßigen BJJ-Kursen an beiden Standorten teil'
        },
        cta: {
          title: 'Beginne Deine BJJ-Reise',
          description: 'Erlebe die sanfte Kunst, die Kampfkünste und Selbstverteidigung revolutioniert hat.',
          joinButton: 'BJJ-Kurse Beitreten'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Meistere die Kunst der Kontrolle, Positionierung und Submission ohne Gi'
        },
        overview: {
          title: 'No-Gi Grappling',
          paragraphs: [
            'Grappling, auch bekannt als Submission Wrestling oder No-Gi Grappling, ist eine Form des Kampfsports, die sich auf Takedowns, Kontrollpositionen und Submission-Techniken ohne die traditionelle Gi-Uniform konzentriert. Dieser Stil betont Geschwindigkeit, Athletik und technische Präzision.',
            'Unser Grappling-Programm kombiniert Elemente aus Wrestling, Brazilian Jiu-Jitsu und Submission Wrestling, um ein umfassendes Bodenkampfsystem zu schaffen. Schüler lernen, Gegner durch überlegene Positionierung zu kontrollieren und Kämpfe mit verschiedenen Submission-Techniken zu beenden.',
            'Training in No-Gi Grappling entwickelt andere Fähigkeiten im Vergleich zu Gi-basierten Künsten, da Griffe begrenzter sind und das Tempo typischerweise schneller ist. Dies macht es zu einer ausgezeichneten Ergänzung zum BJJ-Training und wesentlichen Vorbereitung für Mixed Martial Arts.'
          ]
        },
        techniques: {
          title: 'Wesentliche Techniken',
          subtitle: 'Entwickle die Kernfähigkeiten, die für effektives No-Gi Grappling benötigt werden',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Wrestling Shots und Eingänge',
              'Würfe und Trips',
              'Clinch-Arbeit und Dirty Boxing',
              'Sprawls und Takedown-Verteidigung'
            ]
          },
          control: {
            title: 'Kontrollpositionen',
            items: [
              'Top Control und Druck',
              'Side Control Variationen',
              'Mount und Back Control',
              'Übergangskontrolle'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Rear Naked Chokes',
              'Arm Bars und Kimuras',
              'Leg Locks und Heel Hooks',
              'Guillotines und Front Chokes'
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
                description: 'Wiederholende Praxis von Techniken zum Aufbau von Muskelgedächtnis'
              },
              {
                title: 'Positionelles Sparring',
                description: 'Live-Praxis aus spezifischen Positionen zur Entwicklung von Timing'
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
                title: 'Grappling Cardio',
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
          subtitle: 'Entdecke, wie Grappling-Training deine körperlichen und mentalen Fähigkeiten transformiert',
          items: [
            {
              icon: '💪',
              title: 'Funktionale Kraft',
              description: 'Baue real anwendbare Kraft durch Widerstandstraining auf'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Entwickle Widerstandsfähigkeit und Problemlösung unter Druck'
            },
            {
              icon: '⚡',
              title: 'Explosive Kraft',
              description: 'Verbessere athletische Leistung und Reaktionszeit'
            },
            {
              icon: '🎯',
              title: 'Technische Präzision',
              description: 'Meistere komplexe Bewegungen und Timing'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Zeitplan',
          subtitle: 'Trainiere mit uns an beiden Standorten während der Woche'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Lerne von den Techniken, die von den Meistern der Kunst entwickelt wurden',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Catch Wrestling Experte',
              description: 'Ehemaliger UFC Schwergewichts-Champion bekannt für seine Submission-Fähigkeiten'
            },
            {
              name: 'Frank Shamrock',
              title: 'Submission Fighting Pionier',
              description: 'Früher MMA-Champion, der No-Gi Submission Fighting populär machte'
            },
            {
              name: 'Eddie Bravo',
              title: '10th Planet Gründer',
              description: 'Revolutionärer No-Gi System-Schöpfer und Innovator'
            }
          ]
        },
        cta: {
          title: 'Meistere die Kunst der Kontrolle',
          description: 'Entwickle überlegene Grappling-Fähigkeiten, die sich auf alle Bereiche der Kampfsportarten übertragen.',
          joinButton: 'Grappling-Kurse Beitreten'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der Schlagen, Grappling und Bodenkampf kombiniert'
        },
        overview: {
          title: 'Der Komplette Kämpfer',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der umfassendste Kampfsport, der Techniken aus Boxen, Muay Thai, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkünsten kombiniert. MMA-Kämpfer müssen in allen Kampfbereichen versiert sein: Stehschlagen, Clinch-Arbeit, Takedowns und Bodenkampf.',
            'Unser MMA-Programm ist darauf ausgelegt, vielseitige Kämpfer zu entwickeln, die sich an jede Situation im Käfig oder Ring anpassen können. Wir konzentrieren uns darauf, eine starke Grundlage in jeder Disziplin aufzubauen, während wir Schülern beibringen, wie sie nahtlos zwischen verschiedenen Kampfbereichen wechseln.',
            'Ob dein Ziel ist, professionell zu kämpfen, deine Fitness zu verbessern oder effektive Selbstverteidigung zu lernen, unser MMA-Training wird dich körperlich und mental herausfordern, während es Selbstvertrauen und Disziplin aufbaut.'
          ]
        },
        techniques: {
          title: 'Kerndisziplinen',
          subtitle: 'Meistere alle Aspekte des Mixed Martial Arts Kampfes',
          striking: {
            title: 'Schlagen',
            items: [
              'Box-Grundlagen und Kombinationen',
              'Muay Thai Kicks und Knees',
              'Fußarbeit und Kopfbewegung',
              'Schlagverteidigung und Konter'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken und Setups',
              'Takedown-Verteidigung und Sprawls',
              'Clinch-Arbeit und Dirty Boxing',
              'Bodenkontrolle und Positionierung'
            ]
          },
          groundGame: {
            title: 'Bodenkampf',
            items: [
              'Submission-Techniken und Escapes',
              'Ground and Pound Strategien',
              'Guard-Arbeit und Sweeps',
              'Submission-Verteidigung'
            ]
          }
        },
        history: {
          title: 'Evolution von MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit Veranstaltungen wie der Ultimate Fighting Championship (UFC) im Jahr 1993. Frühe Wettkämpfe stellten Praktiker verschiedener Kampfkünste gegeneinander, um den effektivsten Kampfstil zu bestimmen.',
            'Mit der Zeit wurde klar, dass die erfolgreichsten Kämpfer diejenigen waren, die sich anpassen und Techniken aus mehreren Disziplinen kombinieren konnten. Dies führte zur Evolution von MMA als eigenständiger Sport mit eigenen Trainingsmethoden und Strategien.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'UFC 1 demonstriert die Effektivität des Brazilian Jiu-Jitsu'
              },
              {
                year: '2000er',
                description: 'Kämpfer beginnen Cross-Training in mehreren Disziplinen'
              },
              {
                year: '2010er',
                description: 'MMA wird Mainstream mit globaler Anerkennung'
              },
              {
                year: 'Gegenwart',
                description: 'Hochtechnische, vielseitige Athleten dominieren den Sport'
              }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Entdecke, wie MMA-Training deine körperlichen und mentalen Fähigkeiten transformiert',
          items: [
            {
              icon: '🥊',
              title: 'Komplette Fitness',
              description: 'Ganzkörper-Konditionierung, die Kraft, Cardio und Flexibilität aufbaut'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Real anwendbare Fähigkeiten für persönlichen Schutz'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Entwickle Selbstvertrauen, Disziplin und Stressmanagement'
            },
            {
              icon: '⚡',
              title: 'Athletische Leistung',
              description: 'Verbessere Koordination, Reaktionszeit und allgemeine Athletik'
            }
          ]
        },
        schedule: {
          title: 'MMA Trainingsplan',
          subtitle: 'Nimm an unserem umfassenden MMA-Programm teil'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Lerne von den Techniken und Strategien der größten Kämpfer',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Ehemaliger UFC Mittelgewichts-Champion bekannt für seine Schlagpräzision'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendärer Schwergewichtler mit unglaublichem Ground and Pound'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Innovativer Kämpfer bekannt für seine Reichweite und Kreativität'
            }
          ]
        },
        cta: {
          title: 'Werde ein Kompletter Kämpfer',
          description: 'Meistere alle Aspekte der Kampfsportarten und erreiche dein volles Potenzial.',
          joinButton: 'MMA-Training Beitreten'
        }
      }
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
      instantConfirmation: 'Conferma Istantanea',
      visitUs: 'Visitaci',
      dropInWelcome: 'Visite Spontanee Benvenute',
      duringTrainingHours: 'Durante gli orari di allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Benvenuti a Sport Academy',
        description: 'Situata nel cuore dell\'Alto Adige, Sport Academy è la destinazione principale per l\'allenamento di MMA, Brazilian Jiu-Jitsu e Grappling dal 2017. I nostri istruttori esperti Matteo Parolin e Christian Zecchetto portano istruzione di livello mondiale a Campo Tures e Brunico.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Allenando campioni dal 2017',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'MMA, BJJ, Grappling e altro',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come un Combattente',
        subtitle: 'Padroneggia l\'arte degli sport da combattimento con i nostri programmi di allenamento completi'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, grappling e combattimento a terra per l\'esperienza di sport da combattimento definitiva.'
      },
      bjj: {
        description: 'Padroneggia l\'arte gentile del Brazilian Jiu-Jitsu, concentrandoti su leva, tecnica e combattimento a terra per superare avversari più grandi.'
      },
      grappling: {
        description: 'Sviluppa abilità superiori di wrestling e submission attraverso l\'allenamento di grappling no-gi che enfatizza controllo e posizionamento.'
      },
      getStarted: {
        title: 'Inizia Oggi',
        subtitle: 'Scegli il tuo percorso verso l\'eccellenza nelle arti marziali'
      },
      quickLinks: {
        viewClasses: 'Vedi Corsi',
        viewClassesDesc: 'Esplora i nostri programmi di allenamento',
        checkSchedule: 'Controlla Orari',
        checkScheduleDesc: 'Trova il tuo orario di allenamento perfetto',
        membershipPlans: 'Piani di Abbonamento',
        membershipPlansDesc: 'Scegli il tuo abbonamento',
        contactUs: 'Contattaci',
        contactUsDesc: 'Mettiti in contatto con il nostro team'
      }
    },
    classes: {
      hero: {
        title: 'I Nostri Corsi',
        description: 'Scopri la nostra gamma completa di programmi di arti marziali progettati per tutti i livelli di abilità. Dalle introduzioni adatte ai principianti alla preparazione avanzata per le competizioni, offriamo istruzione esperta in MMA, Brazilian Jiu-Jitsu, Grappling e programmi specializzati per giovani.'
      },
      mma: {
        title: 'Arti Marziali Miste (MMA)',
        description: 'Sperimenta lo sport da combattimento definitivo che combina striking, grappling e combattimento a terra. Il nostro programma MMA integra tecniche da boxe, Muay Thai, wrestling e Brazilian Jiu-Jitsu per creare combattenti completi.',
        features: [
          'Tecniche di striking in piedi',
          'Takedown e wrestling',
          'Combattimento a terra e submission',
          'Lavoro in gabbia e clinch fighting',
          'Allenamento di condizionamento e fitness'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu (BJJ)',
        description: 'Padroneggia l\'arte gentile che enfatizza leva, tecnica e timing su forza e dimensioni. Il nostro programma BJJ si concentra su combattimento a terra, submission e controllo posizionale.',
        features: [
          'Lavoro di guardia e sweep',
          'Tecniche di submission',
          'Controllo posizionale',
          'Applicazioni di autodifesa',
          'Preparazione per competizioni'
        ]
      },
      grappling: {
        title: 'Grappling (No-Gi)',
        description: 'Sviluppa le tue abilità di wrestling e submission senza il gi tradizionale. Le nostre lezioni di grappling si concentrano su takedown, posizioni di controllo e tecniche di submission.',
        features: [
          'Takedown di wrestling',
          'Submission grappling',
          'Controllo posizionale',
          'Scramble e transizioni',
          'Allenamento per competizioni'
        ]
      },
      kidsBjj: {
        title: 'BJJ per Bambini',
        description: 'Introduci i tuoi bambini ai fondamenti del Brazilian Jiu-Jitsu in un ambiente sicuro, divertente e di supporto. Il nostro programma per bambini costruisce fiducia, disciplina e forma fisica.',
        features: [
          'Tecniche base di BJJ',
          'Abilità di autodifesa',
          'Disciplina e rispetto',
          'Forma fisica',
          'Sviluppo delle abilità sociali'
        ]
      },
      kidsGrappling: {
        title: 'Grappling per Bambini',
        description: 'Programma di grappling focalizzato sui giovani che insegna i fondamenti del wrestling e le tecniche di submission in un ambiente appropriato per l\'età.',
        features: [
          'Basi del wrestling',
          'Fondamenti del grappling',
          'Forza e condizionamento',
          'Preparazione per competizioni',
          'Sviluppo del carattere'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Costruisci una solida base nel wrestling con il nostro programma completo che copre takedown, controllo e condizionamento.',
        features: [
          'Tecniche di takedown',
          'Condizionamento del wrestling',
          'Controllo del tappeto',
          'Wrestling difensivo',
          'Preparazione per competizioni'
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
      openMat: 'Open Mat',
      cta: {
        title: 'Pronto ad Allenarti?',
        description: 'Prenota la tua prima lezione oggi e inizia il tuo viaggio nelle arti marziali con noi.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Incontra i nostri istruttori di livello mondiale che portano decenni di esperienza combinata in arti marziali, competizioni e coaching in ogni sessione di allenamento.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore e Fondatore',
        background: 'Con oltre 15 anni di esperienza nelle arti marziali, Matteo è una cintura nera certificata di Brazilian Jiu-Jitsu e un combattente MMA di successo. Ha fondato Sport Academy nel 2017 con la visione di portare allenamento di arti marziali di livello mondiale in Alto Adige.',
        specializations: [
          'Cintura Nera Brazilian Jiu-Jitsu',
          'Esperienza in Competizioni MMA',
          'Tecniche di Wrestling',
          'Coaching per Competizioni'
        ],
        achievements: [
          'Cintura Nera BJJ sotto lignaggio rinomato',
          'Multiple vittorie MMA regionali',
          'Istruttore di arti marziali certificato',
          'Oltre 100 studenti allenati a livello competitivo'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta una ricchezza di conoscenze nel grappling e submission wrestling. Il suo approccio tecnico e l\'attenzione ai dettagli lo rendono un istruttore eccezionale per studenti di tutti i livelli.',
        specializations: [
          'Submission Wrestling',
          'Grappling No-Gi',
          'Istruzione Tecnica',
          'Programmi Giovanili'
        ],
        achievements: [
          'Certificazioni avanzate di grappling',
          'Campionati regionali di grappling',
          'Formazione specializzata per istruttori giovanili',
          'Esperto in tecniche di submission'
        ]
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      philosophy: {
        title: 'La Nostra Filosofia di Coaching',
        technical: {
          title: 'Eccellenza Tecnica',
          description: 'Ci concentriamo sulla tecnica corretta e sui fondamenti, assicurando che ogni studente costruisca una base solida per il successo a lungo termine.'
        },
        individual: {
          title: 'Crescita Individuale',
          description: 'Ogni studente riceve attenzione personalizzata e istruzione su misura per i propri obiettivi e livello di abilità.'
        },
        respect: {
          title: 'Rispetto e Disciplina',
          description: 'Instilliamo i valori di rispetto, disciplina e sportività che si estendono oltre i tappeti di allenamento.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Sperimenta istruzione di livello mondiale e porta le tue abilità di arti marziali al livello successivo.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il piano di abbonamento che si adatta ai tuoi obiettivi e al tuo programma. Tutti gli abbonamenti includono l\'accesso al nostro coaching esperto e ai programmi di allenamento completi.'
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
        subtitle: 'Programma di allenamento dedicato al Brazilian Jiu-Jitsu',
        program: 'Programma Focalizzato su BJJ',
        description: 'Perfetto per coloro che vogliono concentrarsi esclusivamente sul Brazilian Jiu-Jitsu'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      selectMainSeason: 'Seleziona Stagione Principale',
      selectSummerSeason: 'Seleziona Stagione Estiva',
      selectBjjOnly: 'Seleziona Solo BJJ',
      additionalServices: {
        title: 'Servizi Aggiuntivi',
        description: 'Migliora il tuo allenamento con i nostri programmi specializzati e opzioni di coaching personale.'
      },
      personalTraining: {
        title: 'Allenamento Personale',
        description: 'Sessioni di coaching uno-a-uno su misura per i tuoi obiettivi e bisogni specifici.',
        price: '€50',
        duration: 'per sessione'
      },
      competitionPrep: {
        title: 'Preparazione Competizioni',
        description: 'Programmi di allenamento specializzati progettati per prepararti a tornei e competizioni.',
        price: '€80',
        duration: 'per sessione'
      },
      seminars: {
        title: 'Seminari',
        description: 'Workshop speciali e seminari con istruttori ospiti e tecniche avanzate.',
        price: '€30',
        duration: 'per seminario'
      },
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra le stagioni?',
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro programma completo con allenamento costante durante l\'anno accademico. La stagione estiva (Luglio-Agosto) fornisce un programma più flessibile perfetto per i periodi di vacanza.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso alle lezioni in entrambe le nostre sedi di Campo Tures e Brunico, dandoti la massima flessibilità nel tuo programma di allenamento.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Incoraggiamo i nuovi studenti a provare una lezione prima di impegnarsi in un abbonamento. Contattaci per programmare la tua sessione di prova.'
        },
        equipment: {
          question: 'Di che attrezzatura ho bisogno?',
          answer: 'Per i principianti, forniamo attrezzatura di base. Man mano che progredisci, vorrai investire nella tua attrezzatura personale inclusi gi, guanti e equipaggiamento protettivo.'
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
        description: 'Pronto a iniziare il tuo viaggio nelle arti marziali? Mettiti in contatto con noi per saperne di più sui nostri programmi, programmare una lezione di prova o fare qualsiasi domanda tu possa avere.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con il nostro team'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      address: 'Indirizzo',
      trainingSchedule: 'Orario di Allenamento',
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due sedi convenienti in Alto Adige'
      },
      visitRequirements: {
        title: 'Prima Volta qui?',
        subtitle: 'Ecco cosa devi sapere prima della tua prima lezione'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      whatWeProvide: 'Cosa Forniamo',
      bring: [
        'Abbigliamento sportivo comodo',
        'Bottiglia d\'acqua',
        'Atteggiamento positivo e volontà di imparare',
        'Asciugamano per dopo l\'allenamento'
      ],
      provide: [
        'Guanti da allenamento di base (uso temporaneo)',
        'Parastinchi (uso temporaneo)',
        'Tappeti di allenamento puliti',
        'Istruzione esperta e guida'
      ],
      specialInstructions: 'Informazioni Importanti',
      instructions: {
        age: 'Età Minima: 16 anni per le lezioni per adulti, studenti più giovani benvenuti nei programmi giovanili',
        health: 'Salute: Si prega di informare gli istruttori di eventuali infortuni o condizioni di salute',
        equipment: 'Attrezzatura: Attrezzatura di base fornita per principianti, attrezzatura personale raccomandata per allenamento regolare',
        payment: 'Pagamento: Lezioni di prova disponibili, i piani di abbonamento iniziano dopo la tua prima sessione'
      },
      cta: {
        title: 'Pronto a Iniziare?',
        description: 'Fai il primo passo verso la padronanza delle arti marziali. Contattaci oggi per programmare la tua lezione di prova.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Padroneggia l\'arte gentile che enfatizza la tecnica sulla forza'
        },
        overview: {
          title: 'L\'Arte Gentile',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di submission. Sviluppato dal jujitsu giapponese tradizionale e dal judo, il BJJ enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte attraverso la tecnica corretta e la leva.',
            'A Sport Academy, il nostro programma BJJ è progettato per insegnare agli studenti i principi fondamentali di quest\'arte mentre costruisce forma fisica, resistenza mentale e fiducia in se stessi. Che tu sia un principiante completo o un praticante esperto, il nostro curriculum strutturato ti aiuterà a sviluppare le tue abilità sistematicamente.',
            'Le nostre lezioni combinano istruzione tecnica con sparring dal vivo (rolling), permettendo agli studenti di praticare le tecniche in un ambiente controllato ma realistico. Questo approccio assicura che gli studenti non solo imparino i movimenti ma capiscano anche come applicarli efficacemente.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia le abilità fondamentali che formano la base del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Fondamenti della guardia chiusa',
              'Variazioni della guardia aperta',
              'Sweep e submission dalla guardia',
              'Ritenzione e recupero della guardia'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Strangolamenti e soffocamenti',
              'Leve articolari e arm bar',
              'Leg lock e attacchi ai piedi',
              'Catene di submission e setup'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e side control',
              'Back control e rear mount',
              'Knee on belly e north-south',
              'Movimenti di transizione'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema di Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di classificazione tradizionale del Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Filosofia delle Cinture',
            description: 'Il sistema di cinture BJJ rappresenta non solo conoscenza tecnica, ma anche tempo sul tappeto, sviluppo del carattere e la capacità di aiutare gli altri a imparare. Ogni livello di cintura richiede dedizione, costanza e una profonda comprensione dei principi dell\'arte.'
          }
        },
        history: {
          title: 'Storia e Lignaggio',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu fu sviluppato in Brasile all\'inizio del XX secolo dalla famiglia Gracie, che modificò le tecniche tradizionali di jujitsu giapponese e judo. L\'arte ottenne riconoscimento internazionale attraverso le competizioni di arti marziali miste, dove i praticanti di BJJ sconfissero costantemente avversari di altre arti marziali.',
            'L\'efficacia del BJJ risiede nel suo focus sul combattimento a terra, dove i vantaggi di dimensione e forza sono minimizzati. Questo lo rende un\'arte marziale ideale per l\'autodifesa e un componente essenziale dell\'allenamento moderno di arti marziali miste.'
          ],
          keyFigures: {
            title: 'Figure Chiave',
            people: [
              {
                name: 'Helio Gracie',
                description: 'Co-fondatore del Brazilian Jiu-Jitsu, adattò le tecniche per praticanti più piccoli'
              },
              {
                name: 'Carlos Gracie',
                description: 'Portò il jujitsu giapponese in Brasile e fondò il sistema di combattimento Gracie'
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
          subtitle: 'Unisciti alle nostre lezioni regolari di BJJ in entrambe le sedi'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Sperimenta l\'arte gentile che ha rivoluzionato le arti marziali e l\'autodifesa.',
          joinButton: 'Unisciti alle Lezioni BJJ'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Padroneggia l\'arte del controllo, posizionamento e submission senza gi'
        },
        overview: {
          title: 'Grappling No-Gi',
          paragraphs: [
            'Il Grappling, noto anche come submission wrestling o grappling no-gi, è una forma di sport da combattimento che si concentra su takedown, posizioni di controllo e tecniche di submission senza l\'uniforme gi tradizionale. Questo stile enfatizza velocità, atletismo e precisione tecnica.',
            'Il nostro programma di grappling combina elementi dal wrestling, Brazilian Jiu-Jitsu e submission wrestling per creare un sistema completo di combattimento a terra. Gli studenti imparano a controllare gli avversari attraverso posizionamento superiore e finire i combattimenti con varie tecniche di submission.',
            'L\'allenamento nel grappling no-gi sviluppa abilità diverse rispetto alle arti basate sul gi, poiché le prese sono più limitate e il ritmo è tipicamente più veloce. Questo lo rende un eccellente complemento all\'allenamento BJJ e preparazione essenziale per le arti marziali miste.'
          ]
        },
        techniques: {
          title: 'Tecniche Essenziali',
          subtitle: 'Sviluppa le abilità fondamentali necessarie per un grappling no-gi efficace',
          takedowns: {
            title: 'Takedown',
            items: [
              'Shot e entrate del wrestling',
              'Proiezioni e sgambetti',
              'Lavoro in clinch e dirty boxing',
              'Sprawl e difesa da takedown'
            ]
          },
          control: {
            title: 'Posizioni di Controllo',
            items: [
              'Controllo dall\'alto e pressione',
              'Variazioni di side control',
              'Mount e back control',
              'Controllo di transizione'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Rear naked choke',
              'Arm bar e kimura',
              'Leg lock e heel hook',
              'Guillotine e front choke'
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
                description: 'Pratica ripetitiva delle tecniche per costruire memoria muscolare'
              },
              {
                title: 'Sparring Posizionale',
                description: 'Pratica dal vivo da posizioni specifiche per sviluppare il timing'
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
          subtitle: 'Scopri come l\'allenamento di grappling trasforma le tue capacità fisiche e mentali',
          items: [
            {
              icon: '💪',
              title: 'Forza Funzionale',
              description: 'Costruisci forza applicabile nel mondo reale attraverso l\'allenamento di resistenza'
            },
            {
              icon: '🧠',
              title: 'Resistenza Mentale',
              description: 'Sviluppa resilienza e risoluzione dei problemi sotto pressione'
            },
            {
              icon: '⚡',
              title: 'Potenza Esplosiva',
              description: 'Migliora le prestazioni atletiche e il tempo di reazione'
            },
            {
              icon: '🎯',
              title: 'Precisione Tecnica',
              description: 'Padroneggia movimenti complessi e timing'
            }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Allenati con noi in entrambe le sedi durante la settimana'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Impara dalle tecniche sviluppate dai maestri dell\'arte',
          grapplers: [
            {
              name: 'Josh Barnett',
              title: 'Esperto di Catch Wrestling',
              description: 'Ex Campione UFC dei Pesi Massimi noto per le sue abilità di submission'
            },
            {
              name: 'Frank Shamrock',
              title: 'Pioniere del Submission Fighting',
              description: 'Primo campione MMA che rese popolare il submission fighting no-gi'
            },
            {
              name: 'Eddie Bravo',
              title: 'Fondatore 10th Planet',
              description: 'Creatore rivoluzionario del sistema no-gi e innovatore'
            }
          ]
        },
        cta: {
          title: 'Padroneggia l\'Arte del Controllo',
          description: 'Sviluppa abilità superiori di grappling che si traducono in tutte le aree degli sport da combattimento.',
          joinButton: 'Unisciti alle Lezioni di Grappling'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina striking, grappling e combattimento a terra'
        },
        overview: {
          title: 'Il Combattente Completo',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono lo sport da combattimento più completo, combinando tecniche da boxe, Muay Thai, wrestling, Brazilian Jiu-Jitsu e altre arti marziali. I combattenti MMA devono essere competenti in tutte le distanze di combattimento: striking in piedi, lavoro in clinch, takedown e combattimento a terra.',
            'Il nostro programma MMA è progettato per sviluppare combattenti completi che possono adattarsi a qualsiasi situazione nella gabbia o sul ring. Ci concentriamo sulla costruzione di una base solida in ogni disciplina mentre insegniamo agli studenti come passare senza soluzione di continuità tra diverse distanze di combattimento.',
            'Che il tuo obiettivo sia competere professionalmente, migliorare la tua forma fisica o imparare autodifesa efficace, il nostro allenamento MMA ti sfiderà fisicamente e mentalmente mentre costruisce fiducia e disciplina.'
          ]
        },
        techniques: {
          title: 'Discipline Fondamentali',
          subtitle: 'Padroneggia tutti gli aspetti del combattimento di arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Fondamenti di boxe e combinazioni',
              'Calci e ginocchiate Muay Thai',
              'Gioco di gambe e movimento della testa',
              'Difesa da striking e contrattacchi'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche di takedown e setup',
              'Difesa da takedown e sprawl',
              'Lavoro in clinch e dirty boxing',
              'Controllo a terra e posizionamento'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Tecniche di submission e fughe',
              'Strategie di ground and pound',
              'Lavoro di guardia e sweep',
              'Difesa da submission'
            ]
          }
        },
        history: {
          title: 'Evoluzione delle MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma le MMA moderne iniziarono con eventi come l\'Ultimate Fighting Championship (UFC) nel 1993. Le prime competizioni misero praticanti di diverse arti marziali l\'uno contro l\'altro per determinare lo stile di combattimento più efficace.',
            'Nel tempo, divenne chiaro che i combattenti di maggior successo erano quelli che potevano adattarsi e combinare tecniche da multiple discipline. Questo portò all\'evoluzione delle MMA come sport distinto con i propri metodi di allenamento e strategie.'
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
                description: 'I combattenti iniziano l\'allenamento incrociato in multiple discipline'
              },
              {
                year: '2010s',
                description: 'Le MMA diventano mainstream con riconoscimento globale'
              },
              {
                year: 'Presente',
                description: 'Atleti altamente tecnici e completi dominano lo sport'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Scopri come l\'allenamento MMA trasforma le tue capacità fisiche e mentali',
          items: [
            {
              icon: '🥊',
              title: 'Fitness Completo',
              description: 'Condizionamento di tutto il corpo che costruisce forza, cardio e flessibilità'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Abilità applicabili nel mondo reale per protezione personale'
            },
            {
              icon: '🧠',
              title: 'Resistenza Mentale',
              description: 'Sviluppa fiducia, disciplina e gestione dello stress'
            },
            {
              icon: '⚡',
              title: 'Prestazione Atletica',
              description: 'Migliora coordinazione, tempo di reazione e atletismo generale'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento MMA',
          subtitle: 'Unisciti al nostro programma MMA completo'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Impara dalle tecniche e strategie dei più grandi combattenti',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Ex Campione UFC dei Pesi Medi noto per la sua precisione di striking'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Leggendario peso massimo con incredibile ground and pound'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Combattente innovativo noto per la sua portata e creatività'
            }
          ]
        },
        cta: {
          title: 'Diventa un Combattente Completo',
          description: 'Padroneggia tutti gli aspetti degli sport da combattimento e raggiungi il tuo pieno potenziale.',
          joinButton: 'Unisciti all\'Allenamento MMA'
        }
      }
    },
    footer: {
      tagline: 'Allenamento Elite di MMA, BJJ e Grappling',
      subtitle: 'Forgiando Combattenti dal 2017',
      copyright: '© 2024 Sport Academy. Tutti i diritti riservati.'
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
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
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