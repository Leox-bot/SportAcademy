import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

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
      dropInWelcome: 'Drop-in Welcome',
      duringTrainingHours: 'During Training Hours',
      responseWithin2Hours: 'Response within 2 hours',
      dailyUpdatesAndDMs: 'Daily updates & DMs'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Forging fighters since 2017'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Elite training in Mixed Martial Arts, Brazilian Jiu-Jitsu, and Grappling. Located in Campo Tures and Brunico, we offer world-class instruction for all skill levels.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Forging fighters since 2017',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Training Programs',
        programsDescription: 'MMA, BJJ, Grappling & More',
        exploreClasses: 'Explore Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Choose your discipline and start your journey'
      },
      mma: {
        description: 'Complete mixed martial arts training combining striking, grappling, and ground fighting techniques.'
      },
      bjj: {
        description: 'Master the gentle art of Brazilian Jiu-Jitsu with focus on leverage, technique, and mental strategy.'
      },
      grappling: {
        description: 'Develop superior ground control and submission skills through intensive grappling training.'
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
        description: 'Professional training programs designed for all skill levels, from beginners to advanced competitors.'
      },
      whatYouLearn: 'What You\'ll Learn',
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Complete combat training combining striking, wrestling, and ground fighting. Perfect for those who want to experience the full spectrum of martial arts.',
        features: [
          'Striking techniques (boxing, kickboxing, Muay Thai)',
          'Wrestling and takedown defense',
          'Ground fighting and submissions',
          'Cage work and clinch fighting',
          'Cardio and strength conditioning',
          'Competition preparation'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'The gentle art that teaches you to overcome larger opponents through technique, leverage, and strategy. Build confidence while learning self-defense.',
        features: [
          'Fundamental positions and escapes',
          'Guard work and sweeps',
          'Submission techniques',
          'Self-defense applications',
          'Mental strategy and problem-solving',
          'Belt progression system'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Focus on ground control, takedowns, and submission wrestling. Develop superior grappling skills for MMA or pure grappling competition.',
        features: [
          'Takedown techniques',
          'Ground control positions',
          'Submission holds and escapes',
          'Wrestling fundamentals',
          'Competition grappling rules',
          'Strength and conditioning'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Fun and safe Brazilian Jiu-Jitsu classes designed specifically for children. Build confidence, discipline, and physical fitness.',
        features: [
          'Age-appropriate techniques',
          'Character development',
          'Anti-bullying skills',
          'Physical fitness and coordination',
          'Respect and discipline',
          'Fun games and activities'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Introduction to wrestling and grappling for young athletes. Develop strength, agility, and competitive spirit.',
        features: [
          'Basic wrestling techniques',
          'Coordination and balance',
          'Competitive spirit',
          'Teamwork and sportsmanship',
          'Physical conditioning',
          'Goal setting and achievement'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditional wrestling training focusing on takedowns, control, and conditioning. Essential for MMA and competitive grappling.',
        features: [
          'Single and double leg takedowns',
          'Sprawl and defensive techniques',
          'Top control and pins',
          'Conditioning and strength training',
          'Competition preparation',
          'Mental toughness development'
        ]
      },
      cta: {
        title: 'Ready to Start Training?',
        description: 'Join our community of dedicated martial artists and begin your journey today.'
      }
    },
    schedule: {
      hero: {
        title: 'Training Schedule',
        description: 'Find the perfect training times that fit your schedule. Classes available throughout the week at both locations.'
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
        gi: 'BJJ classes require a gi (uniform)',
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
        description: 'Book your first class today and start your martial arts journey.'
      }
    },
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Learn from experienced instructors dedicated to helping you achieve your martial arts goals.'
      },
      background: 'Background',
      specializations: 'Specializations',
      achievements: 'Achievements',
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 8 years of experience in martial arts, Matteo founded Sport Academy to bring high-quality MMA and BJJ training to South Tyrol. His passion for teaching and technical expertise make him an exceptional instructor.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Mixed Martial Arts',
          'Grappling',
          'Competition Coaching'
        ],
        achievements: [
          'Founder of Sport Academy (2017)',
          'Multiple BJJ competition medals',
          'Certified BJJ instructor',
          'MMA coaching certification'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'BJJ & Grappling Instructor',
        background: 'Christian brings years of competitive experience and technical knowledge to Sport Academy. His methodical approach to teaching helps students develop solid fundamentals and advanced techniques.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'No-Gi Grappling',
          'Wrestling',
          'Self-Defense'
        ],
        achievements: [
          'BJJ competition champion',
          'Certified grappling instructor',
          'Wrestling background',
          'Self-defense specialist'
        ]
      },
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
          description: 'We cultivate a respectful training environment that promotes growth and mutual support.'
        }
      },
      cta: {
        title: 'Train with the Best',
        description: 'Experience world-class instruction from our dedicated coaching team.'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the perfect training package for your goals and schedule. All memberships include access to both locations.'
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
        subtitle: 'Perfect for those focused exclusively on Brazilian Jiu-Jitsu',
        program: 'BJJ Focused Training',
        description: 'Access to all BJJ classes at both locations'
      },
      adults: 'Adults',
      students: 'Students',
      month: 'month',
      whatsIncluded: 'What\'s Included',
      mainIncludes: [
        'All group classes (MMA, BJJ, Grappling)',
        'Access to both Campo Tures and Brunico locations',
        'Open mat sessions',
        'Beginner-friendly instruction',
        'Competition team training',
        'Equipment storage'
      ],
      summerIncludes: [
        'All summer classes',
        'Both locations access',
        'Flexible schedule',
        'Open mat sessions',
        'Outdoor training sessions'
      ],
      bjjIncludes: [
        'All BJJ classes',
        'Both locations access',
        'Belt progression system',
        'Competition preparation',
        'Open mat sessions',
        'Gi and No-Gi training'
      ],
      selectMainSeason: 'Select Main Season',
      selectSummerSeason: 'Select Summer Season',
      selectBjjOnly: 'Select BJJ Only',
      additionalServices: {
        title: 'Additional Services',
        description: 'Enhance your training with our specialized programs and personal coaching.'
      },
      personalTraining: {
        title: 'Personal Training',
        description: 'One-on-one coaching tailored to your specific goals',
        price: '€50',
        duration: 'per session'
      },
      competitionPrep: {
        title: 'Competition Prep',
        description: 'Specialized training for upcoming competitions',
        price: '€80',
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
          answer: 'The main season (September-June) offers our complete program with all classes and competitions. Summer season (July-August) has a more relaxed schedule perfect for maintaining fitness during vacation time.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to both Campo Tures and Brunico locations. You can attend any class at either gym.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer a free trial class for new students. Contact us to schedule your first session.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For beginners, just comfortable workout clothes. We provide basic equipment for trial classes. As you progress, you\'ll need a gi for BJJ and appropriate gear for other classes.'
        }
      },
      cta: {
        title: 'Start Your Journey',
        description: 'Choose your membership and begin training with South Tyrol\'s premier martial arts academy.'
      }
    },
    contact: {
      hero: {
        title: 'Contact Us',
        description: 'Get in touch with our team and start your martial arts journey today. We\'re here to help you every step of the way.'
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
      parkingAccessibility: {
        title: 'Parking & Accessibility',
        subtitle: 'Easy access and convenient parking at both locations'
      },
      parking: 'Parking',
      publicTransport: 'Public Transport',
      accessibility: 'Accessibility',
      campoTures: {
        parking: 'Free parking is available right in front of the entrance, with additional spots nearby. EV charging station approximately 200 meters away.',
        transport: 'The "Campo Tures Centro" stop is just a 2-minute walk away. Several bus lines stop here, including 450, 451, and 452, offering regular connections to Brunico, local villages, and the surrounding valleys.',
        accessibility: 'The gym is easy to reach on foot, by car or public transport. Located in a wide, flat and well-lit area — perfect for evening training.'
      },
      brunico: {
        parking: 'Free street parking available along Via Riedl and nearby roads. During peak hours, public garages and paid blue-zone parking are just 5 minutes away on foot.',
        transport: 'Brunico Nord train station is only a 2-minute walk from the gym — perfect if you\'re coming from San Candido, Fortezza or anywhere in the valley. There\'s also a nearby bus stop with urban and regional connections.',
        accessibility: 'The gym is in a quiet, flat area with a short, direct walk from all nearby transport stops. Easy to reach even with gear or training bags.'
      },
      visitRequirements: {
        title: 'Visit Requirements & Policies',
        subtitle: 'Everything you need to know for your first visit'
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
        'Training gloves and shin guards',
        'Clean training mats',
        'Changing rooms and showers',
        'Professional instruction'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Age Requirements: Minimum age 16 for adult classes, kids classes available for ages 6-14',
        health: 'Health: Please inform instructors of any injuries or health conditions',
        equipment: 'Equipment: We provide gloves and shin guards, but students should purchase their own gear',
        payment: 'Payment: We accept card and cash payments only'
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Contact us today to schedule your first class and start your martial arts journey.'
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
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. Often called "the gentle art," BJJ emphasizes technique and leverage over strength and size, making it accessible to practitioners of all ages and physical abilities.',
            'At Sport Academy, our BJJ program is designed to teach you the fundamental principles of this incredible martial art while building your confidence, fitness, and mental resilience. Whether you\'re interested in self-defense, competition, or simply staying in shape, BJJ offers something for everyone.'
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
              'Guard retention techniques'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Chokes and strangulations',
              'Joint locks and arm bars',
              'Leg locks and foot attacks',
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
          subtitle: 'Progress through the ranks with dedication and skill',
          philosophy: {
            title: 'Belt Philosophy',
            description: 'The BJJ belt system represents not just technical skill, but also character development, perseverance, and understanding of the art. Each belt level requires years of dedicated training and represents a significant milestone in your martial arts journey.'
          }
        },
        history: {
          title: 'History & Origins',
          paragraphs: [
            'Brazilian Jiu-Jitsu evolved from traditional Japanese jujutsu and judo, brought to Brazil in the early 20th century by Mitsuyo Maeda. The Gracie family, particularly Helio Gracie, adapted these techniques to create a more effective system for smaller practitioners.',
            'The art gained worldwide recognition through the early UFC competitions, where Royce Gracie demonstrated the effectiveness of BJJ against larger opponents from different martial arts backgrounds.'
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
          subtitle: 'Regular classes available at both locations'
        },
        cta: {
          title: 'Start Your BJJ Journey',
          description: 'Join our BJJ program and discover the gentle art that builds both physical and mental strength.',
          joinButton: 'Join BJJ Classes'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining all martial arts disciplines'
        },
        overview: {
          title: 'The Complete Fighter',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, kickboxing, wrestling, Brazilian Jiu-Jitsu, and other martial arts. MMA training develops well-rounded fighters who are comfortable in all ranges of combat.',
            'Our MMA program at Sport Academy provides comprehensive training that covers striking, grappling, and ground fighting. Whether you\'re interested in competition or simply want the most complete martial arts training available, our MMA classes will challenge and develop you as a complete martial artist.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Master all aspects of mixed martial arts combat',
          striking: {
            title: 'Striking',
            items: [
              'Boxing fundamentals and combinations',
              'Kickboxing and Muay Thai techniques',
              'Elbow and knee strikes',
              'Footwork and head movement'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown techniques',
              'Takedown defense and sprawls',
              'Clinch work and dirty boxing',
              'Cage wrestling tactics'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Ground and pound techniques',
              'Submission grappling',
              'Ground control positions',
              'Transitions and escapes'
            ]
          }
        },
        history: {
          title: 'MMA Evolution',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with the Ultimate Fighting Championship (UFC) in 1993. Early competitions pitted different martial arts styles against each other to determine the most effective fighting system.',
            'Over time, fighters realized that to be successful, they needed to be well-rounded in all aspects of combat. This led to the evolution of MMA as we know it today - a sport where athletes train in multiple disciplines to become complete fighters.'
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
                description: 'Evolution of well-rounded fighters training multiple disciplines'
              },
              {
                year: '2010s',
                description: 'MMA becomes mainstream with global popularity'
              }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Develop complete martial arts skills and fitness',
          items: [
            {
              icon: '💪',
              title: 'Complete Fitness',
              description: 'Full-body conditioning and strength development'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Build confidence and mental resilience'
            },
            {
              icon: '⚡',
              title: 'Self-Defense',
              description: 'Learn practical self-defense for any situation'
            },
            {
              icon: '🎯',
              title: 'Technical Skills',
              description: 'Master techniques from multiple martial arts'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Comprehensive MMA classes for all levels'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Learn from the techniques of the greatest fighters',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Legendary striker with incredible precision and creativity'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Dominant heavyweight with exceptional ground game'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Versatile champion with unorthodox striking and wrestling'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Join our MMA program and develop skills in all aspects of combat sports.',
          joinButton: 'Join MMA Training'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Master ground control, takedowns, and submission techniques'
        },
        overview: {
          title: 'The Art of Control',
          paragraphs: [
            'Grappling is the art of controlling your opponent through wrestling, takedowns, and ground fighting techniques. It forms the foundation of many martial arts and is essential for both self-defense and competitive combat sports.',
            'Our grappling program focuses on developing superior ground control, takedown skills, and submission techniques. Whether you\'re preparing for MMA competition or want to improve your overall grappling game, our classes provide comprehensive training in all aspects of grappling.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Develop superior grappling skills and ground control',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single and double leg takedowns',
              'Hip tosses and throws',
              'Foot sweeps and trips',
              'Takedown combinations'
            ]
          },
          control: {
            title: 'Control',
            items: [
              'Top position control',
              'Side control and mount',
              'Back control techniques',
              'Transitional control'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Joint locks and arm bars',
              'Chokes and strangulations',
              'Leg locks and ankle attacks',
              'Submission setups'
            ]
          }
        },
        methodology: {
          title: 'Training Methodology',
          subtitle: 'Systematic approach to grappling development',
          technical: {
            title: 'Technical Development',
            methods: [
              {
                title: 'Drilling',
                description: 'Repetitive practice of fundamental movements and techniques'
              },
              {
                title: 'Positional Sparring',
                description: 'Live training from specific positions to develop skills'
              },
              {
                title: 'Flow Rolling',
                description: 'Continuous movement practice to develop timing and transitions'
              }
            ]
          },
          conditioning: {
            title: 'Physical Conditioning',
            methods: [
              {
                title: 'Strength Training',
                description: 'Building functional strength for grappling movements'
              },
              {
                title: 'Cardio Conditioning',
                description: 'Developing endurance for extended grappling sessions'
              },
              {
                title: 'Flexibility',
                description: 'Maintaining mobility and preventing injuries'
              }
            ]
          }
        },
        benefits: {
          title: 'Training Benefits',
          subtitle: 'Develop strength, technique, and mental toughness',
          items: [
            {
              icon: '🏋️',
              title: 'Functional Strength',
              description: 'Build real-world applicable strength and power'
            },
            {
              icon: '🧘',
              title: 'Mental Focus',
              description: 'Develop concentration and problem-solving skills'
            },
            {
              icon: '🛡️',
              title: 'Self-Defense',
              description: 'Learn practical techniques for real situations'
            },
            {
              icon: '🏆',
              title: 'Competition Ready',
              description: 'Prepare for grappling and MMA competitions'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'Regular grappling classes at both locations'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Study the techniques of the greatest grapplers',
          grapplers: [
            {
              name: 'Kazushi Sakuraba',
              title: 'The Gracie Hunter',
              description: 'Legendary catch wrestler who defeated multiple Gracie family members'
            },
            {
              name: 'Frank Shamrock',
              title: 'The Legend',
              description: 'Pioneer of modern MMA with exceptional grappling skills'
            },
            {
              name: 'Marcelo Garcia',
              title: 'The Magician',
              description: 'BJJ legend known for his incredible technique and teaching'
            }
          ]
        },
        cta: {
          title: 'Master the Ground Game',
          description: 'Join our grappling program and develop superior ground fighting skills.',
          joinButton: 'Join Grappling Classes'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Forging fighters since 2017',
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
      responseWithin2Hours: 'Antwort innerhalb von 2 Stunden',
      dailyUpdatesAndDMs: 'Tägliche Updates & DMs'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Kämpfer schmieden seit 2017'
      },
      welcome: {
        title: 'Willkommen bei Sport Academy',
        description: 'Elite-Training in Mixed Martial Arts, Brazilian Jiu-Jitsu und Grappling. Mit Standorten in Campo Tures und Brunico bieten wir erstklassigen Unterricht für alle Könnensstufen.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Kämpfer schmieden seit 2017',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'MMA, BJJ, Grappling & Mehr',
        exploreClasses: 'Kurse Erkunden'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Wähle deine Disziplin und beginne deine Reise'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training mit Schlag-, Grappling- und Bodenkampftechniken.'
      },
      bjj: {
        description: 'Meistere die sanfte Kunst des Brazilian Jiu-Jitsu mit Fokus auf Hebelwirkung, Technik und mentale Strategie.'
      },
      grappling: {
        description: 'Entwickle überlegene Bodenkontrolle und Submission-Fähigkeiten durch intensives Grappling-Training.'
      },
      getStarted: {
        title: 'Heute Beginnen',
        subtitle: 'Alles was du brauchst, um deine Kampfkunst-Reise zu beginnen'
      },
      quickLinks: {
        viewClasses: 'Kurse Ansehen',
        viewClassesDesc: 'Erkunde unsere Trainingsprogramme',
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
        description: 'Professionelle Trainingsprogramme für alle Könnensstufen, von Anfängern bis zu fortgeschrittenen Wettkämpfern.'
      },
      whatYouLearn: 'Was Du Lernst',
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Komplettes Kampftraining mit Schlag-, Wrestling- und Bodenkampftechniken. Perfekt für alle, die das volle Spektrum der Kampfkünste erleben möchten.',
        features: [
          'Schlagtechniken (Boxen, Kickboxen, Muay Thai)',
          'Wrestling und Takedown-Verteidigung',
          'Bodenkampf und Submissions',
          'Käfigarbeit und Clinch-Kampf',
          'Cardio- und Krafttraining',
          'Wettkampfvorbereitung'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Die sanfte Kunst, die lehrt, größere Gegner durch Technik, Hebelwirkung und Strategie zu überwinden. Baue Selbstvertrauen auf und lerne Selbstverteidigung.',
        features: [
          'Grundpositionen und Befreiungen',
          'Guard-Arbeit und Sweeps',
          'Submission-Techniken',
          'Selbstverteidigungsanwendungen',
          'Mentale Strategie und Problemlösung',
          'Gürtel-Fortschrittssystem'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Fokus auf Bodenkontrolle, Takedowns und Submission-Wrestling. Entwickle überlegene Grappling-Fähigkeiten für MMA oder reine Grappling-Wettkämpfe.',
        features: [
          'Takedown-Techniken',
          'Bodenkontrollpositionen',
          'Submission-Griffe und Befreiungen',
          'Wrestling-Grundlagen',
          'Wettkampf-Grappling-Regeln',
          'Kraft- und Konditionstraining'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Spaßige und sichere Brazilian Jiu-Jitsu Kurse speziell für Kinder. Baue Selbstvertrauen, Disziplin und körperliche Fitness auf.',
        features: [
          'Altersgerechte Techniken',
          'Charakterentwicklung',
          'Anti-Mobbing-Fähigkeiten',
          'Körperliche Fitness und Koordination',
          'Respekt und Disziplin',
          'Spaßige Spiele und Aktivitäten'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Einführung in Wrestling und Grappling für junge Athleten. Entwickle Kraft, Beweglichkeit und Wettkampfgeist.',
        features: [
          'Grundlegende Wrestling-Techniken',
          'Koordination und Balance',
          'Wettkampfgeist',
          'Teamwork und Sportlichkeit',
          'Körperliche Konditionierung',
          'Zielsetzung und Erfolg'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Traditionelles Wrestling-Training mit Fokus auf Takedowns, Kontrolle und Konditionierung. Essentiell für MMA und Wettkampf-Grappling.',
        features: [
          'Single- und Double-Leg-Takedowns',
          'Sprawl- und Verteidigungstechniken',
          'Top-Kontrolle und Pins',
          'Konditions- und Krafttraining',
          'Wettkampfvorbereitung',
          'Mentale Stärke-Entwicklung'
        ]
      },
      cta: {
        title: 'Bereit Zu Trainieren?',
        description: 'Tritt unserer Gemeinschaft engagierter Kampfkünstler bei und beginne heute deine Reise.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finde die perfekten Trainingszeiten, die zu deinem Zeitplan passen. Kurse sind die ganze Woche über an beiden Standorten verfügbar.'
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
        arrive: '10 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'BJJ-Kurse erfordern einen Gi (Uniform)',
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
        description: 'Buche heute deinen ersten Kurs und beginne deine Kampfkunst-Reise.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne von erfahrenen Instruktoren, die sich dafür einsetzen, dir beim Erreichen deiner Kampfkunst-Ziele zu helfen.'
      },
      background: 'Hintergrund',
      specializations: 'Spezialisierungen',
      achievements: 'Erfolge',
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 8 Jahren Erfahrung in Kampfkünsten gründete Matteo die Sport Academy, um hochwertiges MMA- und BJJ-Training nach Südtirol zu bringen. Seine Leidenschaft für das Unterrichten und technische Expertise machen ihn zu einem außergewöhnlichen Instruktor.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Mixed Martial Arts',
          'Grappling',
          'Wettkampf-Coaching'
        ],
        achievements: [
          'Gründer der Sport Academy (2017)',
          'Mehrere BJJ-Wettkampfmedaillen',
          'Zertifizierter BJJ-Instruktor',
          'MMA-Coaching-Zertifizierung'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'BJJ & Grappling Instruktor',
        background: 'Christian bringt jahrelange Wettkampferfahrung und technisches Wissen zur Sport Academy. Sein methodischer Ansatz beim Unterrichten hilft Schülern, solide Grundlagen und fortgeschrittene Techniken zu entwickeln.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'No-Gi Grappling',
          'Wrestling',
          'Selbstverteidigung'
        ],
        achievements: [
          'BJJ-Wettkampfmeister',
          'Zertifizierter Grappling-Instruktor',
          'Wrestling-Hintergrund',
          'Selbstverteidigungsspezialist'
        ]
      },
      philosophy: {
        title: 'Unsere Trainingsphilosophie',
        technical: {
          title: 'Technische Exzellenz',
          description: 'Wir konzentrieren uns auf richtige Technik und Grundlagen, um eine starke Basis für alle Schüler zu schaffen.'
        },
        individual: {
          title: 'Individuelle Betreuung',
          description: 'Jeder Schüler erhält personalisierten Unterricht, der auf seine Ziele und sein Können zugeschnitten ist.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir kultivieren eine respektvolle Trainingsumgebung, die Wachstum und gegenseitige Unterstützung fördert.'
        }
      },
      cta: {
        title: 'Trainiere Mit Den Besten',
        description: 'Erlebe erstklassigen Unterricht von unserem engagierten Trainerteam.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle das perfekte Trainingspaket für deine Ziele und deinen Zeitplan. Alle Mitgliedschaften beinhalten Zugang zu beiden Standorten.'
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
        subtitle: 'Perfekt für alle, die sich ausschließlich auf Brazilian Jiu-Jitsu konzentrieren',
        program: 'BJJ-Fokussiertes Training',
        description: 'Zugang zu allen BJJ-Kursen an beiden Standorten'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was Enthalten Ist',
      mainIncludes: [
        'Alle Gruppenkurse (MMA, BJJ, Grappling)',
        'Zugang zu beiden Standorten Campo Tures und Brunico',
        'Freie Trainingseinheiten',
        'Anfängerfreundlicher Unterricht',
        'Wettkampfteam-Training',
        'Ausrüstungslagerung'
      ],
      summerIncludes: [
        'Alle Sommerkurse',
        'Zugang zu beiden Standorten',
        'Flexibler Zeitplan',
        'Freie Trainingseinheiten',
        'Outdoor-Trainingseinheiten'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse',
        'Zugang zu beiden Standorten',
        'Gürtel-Fortschrittssystem',
        'Wettkampfvorbereitung',
        'Freie Trainingseinheiten',
        'Gi- und No-Gi-Training'
      ],
      selectMainSeason: 'Hauptsaison Wählen',
      selectSummerSeason: 'Sommersaison Wählen',
      selectBjjOnly: 'Nur BJJ Wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessere dein Training mit unseren spezialisierten Programmen und Personal Coaching.'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Eins-zu-eins Coaching auf deine spezifischen Ziele zugeschnitten',
        price: '€50',
        duration: 'pro Einheit'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training für bevorstehende Wettkämpfe',
        price: '€80',
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
          answer: 'Die Hauptsaison (September-Juni) bietet unser komplettes Programm mit allen Kursen und Wettkämpfen. Die Sommersaison (Juli-August) hat einen entspannteren Zeitplan, perfekt um während der Urlaubszeit fit zu bleiben.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu beiden Standorten Campo Tures und Brunico. Du kannst jeden Kurs in beiden Gyms besuchen.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Absolut! Wir bieten eine kostenlose Probestunde für neue Schüler an. Kontaktiere uns, um deine erste Einheit zu planen.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Anfänger reicht bequeme Sportkleidung. Wir stellen Grundausrüstung für Probestunden zur Verfügung. Mit fortschreitendem Training brauchst du einen Gi für BJJ und entsprechende Ausrüstung für andere Kurse.'
        }
      },
      cta: {
        title: 'Beginne Deine Reise',
        description: 'Wähle deine Mitgliedschaft und beginne das Training bei Südtirols führender Kampfkunst-Akademie.'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Nimm Kontakt mit unserem Team auf und beginne heute deine Kampfkunst-Reise. Wir sind hier, um dir bei jedem Schritt zu helfen.'
      },
      getInTouch: {
        title: 'Kontakt Aufnehmen',
        subtitle: 'Verschiedene Wege, um mit Sport Academy in Kontakt zu treten'
      },
      callUs: 'Anrufen',
      instagram: 'Instagram',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Standorte in Südtirol'
      },
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      parkingAccessibility: {
        title: 'Parken & Erreichbarkeit',
        subtitle: 'Einfacher Zugang und bequemes Parken an beiden Standorten'
      },
      parking: 'Parken',
      publicTransport: 'Öffentliche Verkehrsmittel',
      accessibility: 'Erreichbarkeit',
      campoTures: {
        parking: 'Kostenlose Parkplätze stehen direkt vor dem Eingang zur Verfügung, mit zusätzlichen Plätzen in der Nähe. E-Ladestation etwa 200 Meter entfernt.',
        transport: 'Die Haltestelle "Campo Tures Centro" ist nur 2 Gehminuten entfernt. Mehrere Buslinien halten hier, einschließlich 450, 451 und 452, die regelmäßige Verbindungen nach Brunico, zu lokalen Dörfern und den umliegenden Tälern bieten.',
        accessibility: 'Das Gym ist zu Fuß, mit dem Auto oder öffentlichen Verkehrsmitteln leicht zu erreichen. Gelegen in einem breiten, flachen und gut beleuchteten Bereich — perfekt für abendliches Training.'
      },
      brunico: {
        parking: 'Kostenlose Straßenparkplätze entlang der Via Riedl und nahegelegenen Straßen verfügbar. Während der Stoßzeiten sind öffentliche Garagen und kostenpflichtige Blaue-Zone-Parkplätze nur 5 Gehminuten entfernt.',
        transport: 'Der Bahnhof Brunico Nord ist nur 2 Gehminuten vom Gym entfernt — perfekt wenn du aus San Candido, Fortezza oder irgendwo im Tal kommst. Es gibt auch eine nahegelegene Bushaltestelle mit städtischen und regionalen Verbindungen.',
        accessibility: 'Das Gym befindet sich in einer ruhigen, flachen Gegend mit einem kurzen, direkten Weg von allen nahegelegenen Verkehrshaltestellen. Leicht zu erreichen auch mit Ausrüstung oder Trainingstaschen.'
      },
      visitRequirements: {
        title: 'Besuchsanforderungen & Richtlinien',
        subtitle: 'Alles was du für deinen ersten Besuch wissen musst'
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
        'Trainingshandschuhe und Schienbeinschoner',
        'Saubere Trainingsmatten',
        'Umkleideräume und Duschen',
        'Professioneller Unterricht'
      ],
      specialInstructions: 'Besondere Anweisungen',
      instructions: {
        age: 'Altersanforderungen: Mindestalter 16 für Erwachsenenkurse, Kinderkurse verfügbar für Alter 6-14',
        health: 'Gesundheit: Bitte informiere die Instruktoren über Verletzungen oder Gesundheitszustände',
        equipment: 'Ausrüstung: Wir stellen Handschuhe und Schienbeinschoner zur Verfügung, aber Schüler sollten ihre eigene Ausrüstung kaufen',
        payment: 'Zahlung: Wir akzeptieren nur Karten- und Barzahlungen'
      },
      cta: {
        title: 'Bereit Zu Beginnen?',
        description: 'Kontaktiere uns heute, um deinen ersten Kurs zu planen und deine Kampfkunst-Reise zu beginnen.'
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
          title: 'Die Sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Oft als "die sanfte Kunst" bezeichnet, betont BJJ Technik und Hebelwirkung über Kraft und Größe, was es für Praktizierende aller Altersgruppen und körperlichen Fähigkeiten zugänglich macht.',
            'Bei Sport Academy ist unser BJJ-Programm darauf ausgelegt, dir die grundlegenden Prinzipien dieser unglaublichen Kampfkunst beizubringen, während es dein Selbstvertrauen, deine Fitness und mentale Widerstandsfähigkeit aufbaut. Ob du dich für Selbstverteidigung, Wettkampf oder einfach nur für das Fitbleiben interessierst, BJJ bietet für jeden etwas.'
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
              'Guard Retention Techniken'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Würgegriffe und Strangulationen',
              'Gelenkhebel und Armhebel',
              'Beinhebel und Fußangriffe',
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
          title: 'BJJ Gürtel-System',
          subtitle: 'Schreite durch die Ränge mit Hingabe und Können voran',
          philosophy: {
            title: 'Gürtel-Philosophie',
            description: 'Das BJJ-Gürtelsystem repräsentiert nicht nur technische Fähigkeiten, sondern auch Charakterentwicklung, Ausdauer und Verständnis der Kunst. Jede Gürtelstufe erfordert Jahre engagierten Trainings und stellt einen bedeutenden Meilenstein in deiner Kampfkunst-Reise dar.'
          }
        },
        history: {
          title: 'Geschichte & Ursprünge',
          paragraphs: [
            'Brazilian Jiu-Jitsu entwickelte sich aus traditionellem japanischem Jujutsu und Judo, das Anfang des 20. Jahrhunderts von Mitsuyo Maeda nach Brasilien gebracht wurde. Die Gracie-Familie, insbesondere Helio Gracie, passte diese Techniken an, um ein effektiveres System für kleinere Praktizierende zu schaffen.',
            'Die Kunst erlangte weltweite Anerkennung durch die frühen UFC-Wettkämpfe, wo Royce Gracie die Wirksamkeit von BJJ gegen größere Gegner aus verschiedenen Kampfkunst-Hintergründen demonstrierte.'
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
          subtitle: 'Regelmäßige Kurse an beiden Standorten verfügbar'
        },
        cta: {
          title: 'Beginne Deine BJJ-Reise',
          description: 'Tritt unserem BJJ-Programm bei und entdecke die sanfte Kunst, die sowohl körperliche als auch mentale Stärke aufbaut.',
          joinButton: 'BJJ-Kurse Beitreten'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der alle Kampfkunst-Disziplinen kombiniert'
        },
        overview: {
          title: 'Der Komplette Kämpfer',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der kompletteste Kampfsport, der Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkünsten kombiniert. MMA-Training entwickelt vielseitige Kämpfer, die in allen Kampfdistanzen komfortabel sind.',
            'Unser MMA-Programm bei Sport Academy bietet umfassendes Training, das Schlagen, Grappling und Bodenkampf abdeckt. Ob du dich für Wettkampf interessierst oder einfach das kompletteste verfügbare Kampfkunst-Training möchtest, unsere MMA-Kurse werden dich als kompletten Kampfkünstler herausfordern und entwickeln.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Meistere alle Aspekte des Mixed Martial Arts Kampfes',
          striking: {
            title: 'Schlagtechniken',
            items: [
              'Box-Grundlagen und Kombinationen',
              'Kickbox- und Muay Thai-Techniken',
              'Ellbogen- und Knieschläge',
              'Fußarbeit und Kopfbewegung'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken',
              'Takedown-Verteidigung und Sprawls',
              'Clinch-Arbeit und Dirty Boxing',
              'Käfig-Wrestling-Taktiken'
            ]
          },
          groundGame: {
            title: 'Bodenkampf',
            items: [
              'Ground and Pound Techniken',
              'Submission Grappling',
              'Bodenkontrollpositionen',
              'Übergänge und Befreiungen'
            ]
          }
        },
        history: {
          title: 'MMA Evolution',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit der Ultimate Fighting Championship (UFC) im Jahr 1993. Frühe Wettkämpfe stellten verschiedene Kampfkunst-Stile gegeneinander, um das effektivste Kampfsystem zu bestimmen.',
            'Mit der Zeit erkannten Kämpfer, dass sie vielseitig in allen Kampfaspekten sein mussten, um erfolgreich zu sein. Dies führte zur Evolution von MMA, wie wir es heute kennen - ein Sport, in dem Athleten in mehreren Disziplinen trainieren, um komplette Kämpfer zu werden.'
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
                description: 'Evolution vielseitiger Kämpfer, die mehrere Disziplinen trainieren'
              },
              {
                year: '2010er',
                description: 'MMA wird Mainstream mit globaler Popularität'
              }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Entwickle komplette Kampfkunst-Fähigkeiten und Fitness',
          items: [
            {
              icon: '💪',
              title: 'Komplette Fitness',
              description: 'Ganzkörper-Konditionierung und Kraftentwicklung'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Baue Selbstvertrauen und mentale Widerstandsfähigkeit auf'
            },
            {
              icon: '⚡',
              title: 'Selbstverteidigung',
              description: 'Lerne praktische Selbstverteidigung für jede Situation'
            },
            {
              icon: '🎯',
              title: 'Technische Fähigkeiten',
              description: 'Meistere Techniken aus mehreren Kampfkünsten'
            }
          ]
        },
        schedule: {
          title: 'MMA Trainingsplan',
          subtitle: 'Umfassende MMA-Kurse für alle Stufen'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Lerne von den Techniken der größten Kämpfer',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Legendärer Schlagkämpfer mit unglaublicher Präzision und Kreativität'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Dominanter Schwergewichtler mit außergewöhnlichem Bodenkampf'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Vielseitiger Champion mit unorthodoxen Schlag- und Wrestling-Techniken'
            }
          ]
        },
        cta: {
          title: 'Werde Ein Kompletter Kämpfer',
          description: 'Tritt unserem MMA-Programm bei und entwickle Fähigkeiten in allen Aspekten der Kampfsportarten.',
          joinButton: 'MMA-Training Beitreten'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Meistere Bodenkontrolle, Takedowns und Submission-Techniken'
        },
        overview: {
          title: 'Die Kunst der Kontrolle',
          paragraphs: [
            'Grappling ist die Kunst, deinen Gegner durch Wrestling, Takedowns und Bodenkampftechniken zu kontrollieren. Es bildet die Grundlage vieler Kampfkünste und ist essentiell sowohl für Selbstverteidigung als auch für Wettkampf-Kampfsportarten.',
            'Unser Grappling-Programm konzentriert sich auf die Entwicklung überlegener Bodenkontrolle, Takedown-Fähigkeiten und Submission-Techniken. Ob du dich auf MMA-Wettkämpfe vorbereitest oder dein gesamtes Grappling-Spiel verbessern möchtest, unsere Kurse bieten umfassendes Training in allen Aspekten des Grapplings.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Entwickle überlegene Grappling-Fähigkeiten und Bodenkontrolle',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single- und Double-Leg-Takedowns',
              'Hüftwürfe und Würfe',
              'Fußfeger und Trips',
              'Takedown-Kombinationen'
            ]
          },
          control: {
            title: 'Kontrolle',
            items: [
              'Top-Position-Kontrolle',
              'Side Control und Mount',
              'Back Control Techniken',
              'Übergangskontrolle'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Gelenkhebel und Armhebel',
              'Würgegriffe und Strangulationen',
              'Beinhebel und Knöchelangriffe',
              'Submission-Setups'
            ]
          }
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Systematischer Ansatz zur Grappling-Entwicklung',
          technical: {
            title: 'Technische Entwicklung',
            methods: [
              {
                title: 'Drilling',
                description: 'Wiederholende Übung grundlegender Bewegungen und Techniken'
              },
              {
                title: 'Positionelles Sparring',
                description: 'Live-Training aus spezifischen Positionen zur Fähigkeitsentwicklung'
              },
              {
                title: 'Flow Rolling',
                description: 'Kontinuierliche Bewegungsübung zur Entwicklung von Timing und Übergängen'
              }
            ]
          },
          conditioning: {
            title: 'Körperliche Konditionierung',
            methods: [
              {
                title: 'Krafttraining',
                description: 'Aufbau funktionaler Kraft für Grappling-Bewegungen'
              },
              {
                title: 'Cardio-Konditionierung',
                description: 'Entwicklung von Ausdauer für ausgedehnte Grappling-Sessions'
              },
              {
                title: 'Flexibilität',
                description: 'Erhaltung der Beweglichkeit und Verletzungsprävention'
              }
            ]
          }
        },
        benefits: {
          title: 'Trainingsvorteile',
          subtitle: 'Entwickle Kraft, Technik und mentale Stärke',
          items: [
            {
              icon: '🏋️',
              title: 'Funktionale Kraft',
              description: 'Baue real anwendbare Kraft und Power auf'
            },
            {
              icon: '🧘',
              title: 'Mentaler Fokus',
              description: 'Entwickle Konzentration und Problemlösungsfähigkeiten'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Lerne praktische Techniken für reale Situationen'
            },
            {
              icon: '🏆',
              title: 'Wettkampfbereit',
              description: 'Bereite dich auf Grappling- und MMA-Wettkämpfe vor'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Zeitplan',
          subtitle: 'Regelmäßige Grappling-Kurse an beiden Standorten'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Studiere die Techniken der größten Grappler',
          grapplers: [
            {
              name: 'Kazushi Sakuraba',
              title: 'The Gracie Hunter',
              description: 'Legendärer Catch Wrestler, der mehrere Gracie-Familienmitglieder besiegte'
            },
            {
              name: 'Frank Shamrock',
              title: 'The Legend',
              description: 'Pionier des modernen MMA mit außergewöhnlichen Grappling-Fähigkeiten'
            },
            {
              name: 'Marcelo Garcia',
              title: 'The Magician',
              description: 'BJJ-Legende bekannt für seine unglaubliche Technik und Lehre'
            }
          ]
        },
        cta: {
          title: 'Meistere Das Bodenkampfspiel',
          description: 'Tritt unserem Grappling-Programm bei und entwickle überlegene Bodenkampf-Fähigkeiten.',
          joinButton: 'Grappling-Kurse Beitreten'
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
      duringTrainingHours: 'Durante gli Orari di Allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Forgiamo combattenti dal 2017'
      },
      welcome: {
        title: 'Benvenuti a Sport Academy',
        description: 'Allenamento d\'élite in Arti Marziali Miste, Brazilian Jiu-Jitsu e Grappling. Con sedi a Campo Tures e Brunico, offriamo istruzione di livello mondiale per tutti i livelli di abilità.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Forgiamo combattenti dal 2017',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'MMA, BJJ, Grappling & Altro',
        exploreClasses: 'Esplora i Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come Un Combattente',
        subtitle: 'Scegli la tua disciplina e inizia il tuo viaggio'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, grappling e combattimento a terra.'
      },
      bjj: {
        description: 'Padroneggia l\'arte gentile del Brazilian Jiu-Jitsu con focus su leva, tecnica e strategia mentale.'
      },
      grappling: {
        description: 'Sviluppa controllo superiore a terra e abilità di submission attraverso allenamento intensivo di grappling.'
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
        description: 'Programmi di allenamento professionale progettati per tutti i livelli di abilità, dai principianti ai competitori avanzati.'
      },
      whatYouLearn: 'Cosa Imparerai',
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Allenamento di combattimento completo che combina striking, wrestling e combattimento a terra. Perfetto per chi vuole sperimentare l\'intero spettro delle arti marziali.',
        features: [
          'Tecniche di striking (boxe, kickboxing, Muay Thai)',
          'Wrestling e difesa da takedown',
          'Combattimento a terra e submission',
          'Lavoro in gabbia e clinch fighting',
          'Condizionamento cardio e forza',
          'Preparazione alle competizioni'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'L\'arte gentile che ti insegna a superare avversari più grandi attraverso tecnica, leva e strategia. Costruisci fiducia mentre impari l\'autodifesa.',
        features: [
          'Posizioni fondamentali e fughe',
          'Lavoro di guardia e sweep',
          'Tecniche di submission',
          'Applicazioni di autodifesa',
          'Strategia mentale e risoluzione problemi',
          'Sistema di progressione delle cinture'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Focus su controllo a terra, takedown e submission wrestling. Sviluppa abilità superiori di grappling per MMA o competizioni di grappling puro.',
        features: [
          'Tecniche di takedown',
          'Posizioni di controllo a terra',
          'Prese di submission e fughe',
          'Fondamentali di wrestling',
          'Regole di grappling competitivo',
          'Forza e condizionamento'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Lezioni di Brazilian Jiu-Jitsu divertenti e sicure progettate specificamente per bambini. Costruisci fiducia, disciplina e forma fisica.',
        features: [
          'Tecniche appropriate per l\'età',
          'Sviluppo del carattere',
          'Abilità anti-bullismo',
          'Forma fisica e coordinazione',
          'Rispetto e disciplina',
          'Giochi e attività divertenti'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Introduzione al wrestling e grappling per giovani atleti. Sviluppa forza, agilità e spirito competitivo.',
        features: [
          'Tecniche base di wrestling',
          'Coordinazione ed equilibrio',
          'Spirito competitivo',
          'Lavoro di squadra e sportività',
          'Condizionamento fisico',
          'Definizione e raggiungimento obiettivi'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Allenamento di wrestling tradizionale con focus su takedown, controllo e condizionamento. Essenziale per MMA e grappling competitivo.',
        features: [
          'Takedown single e double leg',
          'Tecniche di sprawl e difesa',
          'Controllo superiore e pin',
          'Allenamento di condizionamento e forza',
          'Preparazione alle competizioni',
          'Sviluppo della resistenza mentale'
        ]
      },
      cta: {
        title: 'Pronto a Iniziare l\'Allenamento?',
        description: 'Unisciti alla nostra comunità di artisti marziali dedicati e inizia il tuo viaggio oggi.'
      }
    },
    schedule: {
      hero: {
        title: 'Orario Allenamenti',
        description: 'Trova gli orari di allenamento perfetti che si adattano al tuo programma. Lezioni disponibili durante tutta la settimana in entrambe le sedi.'
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
      guidelines: {
        arrive: 'Arriva 10 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'Le lezioni di BJJ richiedono un gi (uniforme)',
        noGi: 'Le lezioni di grappling sono no-gi (pantaloncini e rash guard)'
      },
      membershipBenefits: 'Vantaggi dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutte le lezioni incluso',
        openMat: 'Sessioni di tappeto libero gratuite',
        bothLocations: 'Allenati in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto a Unirti?',
        description: 'Prenota la tua prima lezione oggi e inizia il tuo viaggio nelle arti marziali.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Impara da istruttori esperti dedicati ad aiutarti a raggiungere i tuoi obiettivi nelle arti marziali.'
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore & Fondatore',
        background: 'Con oltre 8 anni di esperienza nelle arti marziali, Matteo ha fondato Sport Academy per portare allenamento MMA e BJJ di alta qualità in Alto Adige. La sua passione per l\'insegnamento e l\'expertise tecnica lo rendono un istruttore eccezionale.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Arti Marziali Miste',
          'Grappling',
          'Coaching Competitivo'
        ],
        achievements: [
          'Fondatore di Sport Academy (2017)',
          'Multiple medaglie in competizioni BJJ',
          'Istruttore BJJ certificato',
          'Certificazione coaching MMA'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore BJJ & Grappling',
        background: 'Christian porta anni di esperienza competitiva e conoscenza tecnica a Sport Academy. Il suo approccio metodico all\'insegnamento aiuta gli studenti a sviluppare fondamentali solidi e tecniche avanzate.',
        specializations: [
          'Brazilian Jiu-Jitsu',
          'Grappling No-Gi',
          'Wrestling',
          'Autodifesa'
        ],
        achievements: [
          'Campione di competizioni BJJ',
          'Istruttore di grappling certificato',
          'Background nel wrestling',
          'Specialista in autodifesa'
        ]
      },
      philosophy: {
        title: 'La Nostra Filosofia di Coaching',
        technical: {
          title: 'Eccellenza Tecnica',
          description: 'Ci concentriamo sulla tecnica corretta e sui fondamentali per costruire una base solida per tutti gli studenti.'
        },
        individual: {
          title: 'Attenzione Individuale',
          description: 'Ogni studente riceve istruzione personalizzata adattata ai suoi obiettivi e livello di abilità.'
        },
        respect: {
          title: 'Rispetto & Disciplina',
          description: 'Coltiviamo un ambiente di allenamento rispettoso che promuove crescita e supporto reciproco.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Sperimenta istruzione di livello mondiale dal nostro team di coaching dedicato.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il pacchetto di allenamento perfetto per i tuoi obiettivi e il tuo programma. Tutti gli abbonamenti includono accesso a entrambe le sedi.'
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
        subtitle: 'Perfetto per chi si concentra esclusivamente sul Brazilian Jiu-Jitsu',
        program: 'Allenamento Focalizzato BJJ',
        description: 'Accesso a tutte le lezioni BJJ in entrambe le sedi'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa È Incluso',
      mainIncludes: [
        'Tutte le lezioni di gruppo (MMA, BJJ, Grappling)',
        'Accesso a entrambe le sedi Campo Tures e Brunico',
        'Sessioni di tappeto libero',
        'Istruzione adatta ai principianti',
        'Allenamento del team competitivo',
        'Deposito attrezzature'
      ],
      summerIncludes: [
        'Tutte le lezioni estive',
        'Accesso a entrambe le sedi',
        'Orario flessibile',
        'Sessioni di tappeto libero',
        'Sessioni di allenamento all\'aperto'
      ],
      bjjIncludes: [
        'Tutte le lezioni BJJ',
        'Accesso a entrambe le sedi',
        'Sistema di progressione cinture',
        'Preparazione alle competizioni',
        'Sessioni di tappeto libero',
        'Allenamento Gi e No-Gi'
      ],
      selectMainSeason: 'Seleziona Stagione Principale',
      selectSummerSeason: 'Seleziona Stagione Estiva',
      selectBjjOnly: 'Seleziona Solo BJJ',
      additionalServices: {
        title: 'Servizi Aggiuntivi',
        description: 'Migliora il tuo allenamento con i nostri programmi specializzati e coaching personale.'
      },
      personalTraining: {
        title: 'Allenamento Personale',
        description: 'Coaching uno-a-uno adattato ai tuoi obiettivi specifici',
        price: '€50',
        duration: 'per sessione'
      },
      competitionPrep: {
        title: 'Preparazione Competizioni',
        description: 'Allenamento specializzato per competizioni imminenti',
        price: '€80',
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
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro programma completo con tutte le lezioni e competizioni. La stagione estiva (Luglio-Agosto) ha un programma più rilassato perfetto per mantenere la forma durante il periodo delle vacanze.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono accesso a entrambe le sedi Campo Tures e Brunico. Puoi partecipare a qualsiasi lezione in entrambe le palestre.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo una lezione di prova gratuita per nuovi studenti. Contattaci per programmare la tua prima sessione.'
        },
        equipment: {
          question: 'Di che attrezzatura ho bisogno?',
          answer: 'Per i principianti, basta abbigliamento sportivo comodo. Forniamo attrezzatura base per le lezioni di prova. Man mano che progredisci, avrai bisogno di un gi per BJJ e attrezzatura appropriata per altre lezioni.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio',
        description: 'Scegli il tuo abbonamento e inizia ad allenarti con la principale accademia di arti marziali dell\'Alto Adige.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Mettiti in contatto con il nostro team e inizia oggi il tuo viaggio nelle arti marziali. Siamo qui per aiutarti in ogni passo.'
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
      trainingSchedule: 'Orario Allenamenti',
      parkingAccessibility: {
        title: 'Parcheggio & Accessibilità',
        subtitle: 'Accesso facile e parcheggio conveniente in entrambe le sedi'
      },
      parking: 'Parcheggio',
      publicTransport: 'Trasporti Pubblici',
      accessibility: 'Accessibilità',
      campoTures: {
        parking: 'Parcheggio gratuito disponibile proprio davanti all\'ingresso, con posti aggiuntivi nelle vicinanze. Stazione di ricarica EV a circa 200 metri di distanza.',
        transport: 'La fermata "Campo Tures Centro" è a soli 2 minuti a piedi. Diverse linee di autobus si fermano qui, incluse 450, 451 e 452, offrendo collegamenti regolari a Brunico, paesi locali e le valli circostanti.',
        accessibility: 'La palestra è facile da raggiungere a piedi, in auto o con i trasporti pubblici. Situata in un\'area ampia, pianeggiante e ben illuminata — perfetta per l\'allenamento serale.'
      },
      brunico: {
        parking: 'Parcheggio gratuito in strada disponibile lungo Via Riedl e strade vicine. Durante le ore di punta, garage pubblici e parcheggi a pagamento zona blu sono a soli 5 minuti a piedi.',
        transport: 'La stazione ferroviaria Brunico Nord è a soli 2 minuti a piedi dalla palestra — perfetta se arrivi da San Candido, Fortezza o da qualsiasi parte della valle. C\'è anche una fermata dell\'autobus nelle vicinanze con collegamenti urbani e regionali.',
        accessibility: 'La palestra si trova in una zona tranquilla e pianeggiante con una breve camminata diretta da tutte le fermate di trasporto vicine. Facile da raggiungere anche con attrezzature o borse da allenamento.'
      },
      visitRequirements: {
        title: 'Requisiti di Visita & Politiche',
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
        'Guanti da allenamento e parastinchi',
        'Tappetini da allenamento puliti',
        'Spogliatoi e docce',
        'Istruzione professionale'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Requisiti di Età: Età minima 16 anni per le lezioni adulti, lezioni bambini disponibili per età 6-14',
        health: 'Salute: Si prega di informare gli istruttori di eventuali infortuni o condizioni di salute',
        equipment: 'Attrezzatura: Forniamo guanti e parastinchi, ma gli studenti dovrebbero acquistare la propria attrezzatura',
        payment: 'Pagamento: Accettiamo solo pagamenti con carta e contanti'
      },
      cta: {
        title: 'Pronto a Iniziare?',
        description: 'Contattaci oggi per programmare la tua prima lezione e iniziare il tuo viaggio nelle arti marziali.'
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
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di submission. Spesso chiamato "l\'arte gentile", il BJJ enfatizza tecnica e leva rispetto a forza e dimensioni, rendendolo accessibile a praticanti di tutte le età e abilità fisiche.',
            'A Sport Academy, il nostro programma BJJ è progettato per insegnarti i principi fondamentali di questa incredibile arte marziale mentre costruisce la tua fiducia, forma fisica e resilienza mentale. Che tu sia interessato all\'autodifesa, alle competizioni o semplicemente a mantenerti in forma, il BJJ offre qualcosa per tutti.'
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
              'Sweep di guardia e transizioni',
              'Tecniche di ritenzione della guardia'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Strangolamenti e soffocamenti',
              'Leve articolari e leve al braccio',
              'Leve alle gambe e attacchi ai piedi',
              'Catene di submission'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e controllo laterale',
              'Tecniche di controllo della schiena',
              'Posizione ginocchio sulla pancia',
              'Movimenti di transizione'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema delle Cinture BJJ',
          subtitle: 'Progredisci attraverso i gradi con dedizione e abilità',
          philosophy: {
            title: 'Filosofia delle Cinture',
            description: 'Il sistema delle cinture BJJ rappresenta non solo abilità tecnica, ma anche sviluppo del carattere, perseveranza e comprensione dell\'arte. Ogni livello di cintura richiede anni di allenamento dedicato e rappresenta una pietra miliare significativa nel tuo viaggio nelle arti marziali.'
          }
        },
        history: {
          title: 'Storia & Origini',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu si è evoluto dal jujutsu tradizionale giapponese e dal judo, portato in Brasile all\'inizio del XX secolo da Mitsuyo Maeda. La famiglia Gracie, in particolare Helio Gracie, ha adattato queste tecniche per creare un sistema più efficace per praticanti più piccoli.',
            'L\'arte ha guadagnato riconoscimento mondiale attraverso le prime competizioni UFC, dove Royce Gracie ha dimostrato l\'efficacia del BJJ contro avversari più grandi provenienti da diversi background di arti marziali.'
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
          subtitle: 'Lezioni regolari disponibili in entrambe le sedi'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Unisciti al nostro programma BJJ e scopri l\'arte gentile che costruisce sia forza fisica che mentale.',
          joinButton: 'Unisciti alle Lezioni BJJ'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina tutte le discipline delle arti marziali'
        },
        overview: {
          title: 'Il Combattente Completo',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono lo sport da combattimento più completo, combinando tecniche da boxe, kickboxing, wrestling, Brazilian Jiu-Jitsu e altre arti marziali. L\'allenamento MMA sviluppa combattenti completi che sono a loro agio in tutte le distanze di combattimento.',
            'Il nostro programma MMA a Sport Academy fornisce allenamento completo che copre striking, grappling e combattimento a terra. Che tu sia interessato alle competizioni o semplicemente voglia l\'allenamento di arti marziali più completo disponibile, le nostre lezioni MMA ti sfideranno e ti svilupperanno come artista marziale completo.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia tutti gli aspetti del combattimento nelle arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Fondamentali di boxe e combinazioni',
              'Tecniche di kickboxing e Muay Thai',
              'Colpi di gomito e ginocchio',
              'Gioco di gambe e movimento della testa'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche di takedown',
              'Difesa da takedown e sprawl',
              'Lavoro in clinch e dirty boxing',
              'Tattiche di wrestling in gabbia'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Tecniche di ground and pound',
              'Grappling di submission',
              'Posizioni di controllo a terra',
              'Transizioni e fughe'
            ]
          }
        },
        history: {
          title: 'Evoluzione MMA',
          paragraphs: [
            'Le Arti Marziali Miste hanno radici antiche in varie culture, ma le MMA moderne iniziarono con l\'Ultimate Fighting Championship (UFC) nel 1993. Le prime competizioni misero diversi stili di arti marziali l\'uno contro l\'altro per determinare il sistema di combattimento più efficace.',
            'Nel tempo, i combattenti si resero conto che per avere successo dovevano essere completi in tutti gli aspetti del combattimento. Questo portò all\'evoluzione delle MMA come le conosciamo oggi - uno sport dove gli atleti si allenano in multiple discipline per diventare combattenti completi.'
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
                description: 'Evoluzione di combattenti completi che si allenano in multiple discipline'
              },
              {
                year: '2010s',
                description: 'Le MMA diventano mainstream con popolarità globale'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Sviluppa abilità complete nelle arti marziali e forma fisica',
          items: [
            {
              icon: '💪',
              title: 'Forma Fisica Completa',
              description: 'Condizionamento e sviluppo della forza per tutto il corpo'
            },
            {
              icon: '🧠',
              title: 'Resistenza Mentale',
              description: 'Costruisci fiducia e resilienza mentale'
            },
            {
              icon: '⚡',
              title: 'Autodifesa',
              description: 'Impara autodifesa pratica per qualsiasi situazione'
            },
            {
              icon: '🎯',
              title: 'Abilità Tecniche',
              description: 'Padroneggia tecniche da multiple arti marziali'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento MMA',
          subtitle: 'Lezioni MMA complete per tutti i livelli'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Impara dalle tecniche dei più grandi combattenti',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Striker leggendario con precisione e creatività incredibili'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Peso massimo dominante con gioco a terra eccezionale'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Campione versatile con striking e wrestling non ortodossi'
            }
          ]
        },
        cta: {
          title: 'Diventa un Combattente Completo',
          description: 'Unisciti al nostro programma MMA e sviluppa abilità in tutti gli aspetti degli sport da combattimento.',
          joinButton: 'Unisciti all\'Allenamento MMA'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Padroneggia il controllo a terra, i takedown e le tecniche di submission'
        },
        overview: {
          title: 'L\'Arte del Controllo',
          paragraphs: [
            'Il Grappling è l\'arte di controllare il tuo avversario attraverso wrestling, takedown e tecniche di combattimento a terra. Forma la base di molte arti marziali ed è essenziale sia per l\'autodifesa che per gli sport da combattimento competitivi.',
            'Il nostro programma di grappling si concentra sullo sviluppo di controllo superiore a terra, abilità di takedown e tecniche di submission. Che tu ti stia preparando per competizioni MMA o voglia migliorare il tuo gioco di grappling generale, le nostre lezioni forniscono allenamento completo in tutti gli aspetti del grappling.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Sviluppa abilità superiori di grappling e controllo a terra',
          takedowns: {
            title: 'Takedown',
            items: [
              'Takedown single e double leg',
              'Lanci d\'anca e proiezioni',
              'Spazzate di piede e sgambetti',
              'Combinazioni di takedown'
            ]
          },
          control: {
            title: 'Controllo',
            items: [
              'Controllo posizione superiore',
              'Controllo laterale e mount',
              'Tecniche di controllo della schiena',
              'Controllo di transizione'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Leve articolari e leve al braccio',
              'Strangolamenti e soffocamenti',
              'Leve alle gambe e attacchi alla caviglia',
              'Setup di submission'
            ]
          }
        },
        methodology: {
          title: 'Metodologia di Allenamento',
          subtitle: 'Approccio sistematico allo sviluppo del grappling',
          technical: {
            title: 'Sviluppo Tecnico',
            methods: [
              {
                title: 'Drilling',
                description: 'Pratica ripetitiva di movimenti e tecniche fondamentali'
              },
              {
                title: 'Sparring Posizionale',
                description: 'Allenamento dal vivo da posizioni specifiche per sviluppare abilità'
              },
              {
                title: 'Flow Rolling',
                description: 'Pratica di movimento continuo per sviluppare timing e transizioni'
              }
            ]
          },
          conditioning: {
            title: 'Condizionamento Fisico',
            methods: [
              {
                title: 'Allenamento della Forza',
                description: 'Costruzione di forza funzionale per movimenti di grappling'
              },
              {
                title: 'Condizionamento Cardio',
                description: 'Sviluppo di resistenza per sessioni di grappling prolungate'
              },
              {
                title: 'Flessibilità',
                description: 'Mantenimento della mobilità e prevenzione degli infortuni'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento',
          subtitle: 'Sviluppa forza, tecnica e resistenza mentale',
          items: [
            {
              icon: '🏋️',
              title: 'Forza Funzionale',
              description: 'Costruisci forza e potenza applicabili nel mondo reale'
            },
            {
              icon: '🧘',
              title: 'Focus Mentale',
              description: 'Sviluppa concentrazione e abilità di risoluzione problemi'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Impara tecniche pratiche per situazioni reali'
            },
            {
              icon: '🏆',
              title: 'Pronto per le Competizioni',
              description: 'Preparati per competizioni di grappling e MMA'
            }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Lezioni regolari di grappling in entrambe le sedi'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Studia le tecniche dei più grandi grappler',
          grapplers: [
            {
              name: 'Kazushi Sakuraba',
              title: 'The Gracie Hunter',
              description: 'Wrestler catch leggendario che sconfisse più membri della famiglia Gracie'
            },
            {
              name: 'Frank Shamrock',
              title: 'The Legend',
              description: 'Pioniere delle MMA moderne con abilità di grappling eccezionali'
            },
            {
              name: 'Marcelo Garcia',
              title: 'The Magician',
              description: 'Leggenda BJJ conosciuto per la sua tecnica incredibile e insegnamento'
            }
          ]
        },
        cta: {
          title: 'Padroneggia il Gioco a Terra',
          description: 'Unisciti al nostro programma di grappling e sviluppa abilità superiori di combattimento a terra.',
          joinButton: 'Unisciti alle Lezioni di Grappling'
        }
      }
    },
    footer: {
      tagline: 'Allenamento Elite MMA, BJJ & Grappling',
      subtitle: 'Forgiamo combattenti dal 2017',
      copyright: '© 2024 Sport Academy. Tutti i diritti riservati.'
    }
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
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
};