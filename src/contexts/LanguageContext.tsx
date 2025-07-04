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
    home: {
      hero: {
        title: 'SPORT ACADEMY'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Located in the heart of South Tyrol, Sport Academy has been the premier destination for combat sports training since 2017. Our academy offers world-class instruction in MMA, Brazilian Jiu-Jitsu, and Grappling across two state-of-the-art facilities in Campo Tures and Brunico.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Training champions since 2017',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures and Brunico',
        trainingPrograms: 'Training Programs',
        programsDescription: 'From beginner to elite level',
        exploreClasses: 'Explore Our Classes'
      },
      trainLikeFighter: {
        title: 'Train Like a Fighter',
        subtitle: 'Master the art of combat sports with our comprehensive training programs'
      },
      mma: {
        description: 'Complete combat sport combining striking, wrestling, and ground fighting for the ultimate martial arts experience.'
      },
      bjj: {
        description: 'The gentle art that focuses on leverage and technique, perfect for building confidence and self-defense skills.'
      },
      grappling: {
        description: 'Dynamic no-gi combat sport emphasizing takedowns, control, and submissions without strikes.'
      },
      getStarted: {
        title: 'Ready to Get Started?',
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
        title: 'Our Classes',
        description: 'Discover our comprehensive range of martial arts programs designed for all skill levels. From complete beginners to seasoned fighters, we have the perfect training program to help you achieve your goals.'
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
          'Sprawls and defensive techniques',
          'Conditioning and mental toughness'
        ]
      },
      whatYouLearn: 'What You\'ll Learn',
      cta: {
        title: 'Ready to Start Your Journey?',
        description: 'Join our community of dedicated martial artists and transform your life through training.'
      }
    },
    schedule: {
      hero: {
        title: 'Training Schedule',
        description: 'Plan your training with our comprehensive schedule. Classes are available throughout the week at both our Campo Tures and Brunico locations.'
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
        noGi: 'Grappling and MMA are no-gi classes'
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
        description: 'Join us for your first class and experience the Sport Academy difference.'
      }
    },
    coaches: {
      hero: {
        title: 'Our Coaches',
        description: 'Meet our world-class instructors who bring decades of experience and passion to every training session.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 15 years of experience in martial arts, Matteo founded Sport Academy with the vision of creating a premier training facility in South Tyrol. His expertise spans multiple disciplines, making him one of the most respected coaches in the region.',
        specializations: [
          'Brazilian Jiu-Jitsu Black Belt',
          'MMA Competition Coach',
          'Grappling Specialist',
          'Youth Development Programs'
        ],
        achievements: [
          'Founded Sport Academy in 2017',
          'Trained multiple regional champions',
          'Certified BJJ Black Belt instructor',
          'Over 100 successful student promotions'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings a wealth of knowledge from his competitive background and teaching experience. His technical precision and ability to break down complex techniques make him an invaluable part of our coaching team.',
        specializations: [
          'Competition Preparation',
          'Technical Refinement',
          'Advanced Grappling',
          'Mental Performance Coaching'
        ],
        achievements: [
          'Multiple tournament victories',
          'Specialized in competition coaching',
          'Expert in advanced techniques',
          'Mentored numerous successful competitors'
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
          title: 'Individual Attention',
          description: 'Every student receives personalized instruction tailored to their goals, whether fitness, self-defense, or competition.'
        },
        respect: {
          title: 'Respect & Discipline',
          description: 'We instill values of respect, discipline, and perseverance that extend far beyond the training mats.'
        }
      },
      cta: {
        title: 'Train with the Best',
        description: 'Experience world-class instruction and take your martial arts journey to the next level.'
      }
    },
    membership: {
      hero: {
        title: 'Membership Plans',
        description: 'Choose the perfect training package for your martial arts journey. All memberships include access to our complete range of classes and both training locations.'
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
        'Flexible training schedule',
        'Both locations access',
        'Perfect for vacation training'
      ],
      bjjIncludes: [
        'All BJJ classes included',
        'Gi and No-Gi training',
        'Both locations access',
        'Belt progression system'
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
        description: 'Specialized training program for upcoming competitions and tournaments.',
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
          answer: 'The main season (September-June) offers our complete curriculum with consistent training partners and structured progression. The summer season (July-August) provides flexible training during vacation months with a more relaxed schedule.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to both our Campo Tures and Brunico facilities. You can mix and match classes based on your schedule and preferences.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We encourage new students to try a class before committing. Contact us to schedule your free trial session and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For your first class, just bring comfortable workout clothes and water. We\'ll provide guidance on any specific equipment needed for your chosen disciplines, such as a gi for BJJ classes.'
        }
      },
      cta: {
        title: 'Start Your Journey Today',
        description: 'Join the Sport Academy family and transform your life through martial arts training.'
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
      visitRequirements: {
        title: 'First Time Visiting?',
        subtitle: 'Here\'s what you need to know'
      },
      firstTimeVisitors: 'First Time Visitors',
      whatToBring: 'What to Bring',
      bring: [
        'Comfortable workout clothes',
        'Water bottle and towel',
        'Positive attitude and willingness to learn',
        'Valid ID for registration'
      ],
      whatWeProvide: 'What We Provide',
      provide: [
        'All training equipment for trial classes',
        'Clean, safe training environment',
        'Expert instruction and guidance',
        'Friendly, welcoming community'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Minimum age: 8 years old for kids classes, 16+ for adult classes',
        health: 'Please inform us of any injuries or health conditions',
        equipment: 'Trial students can borrow equipment for first class',
        payment: 'Cash, card, and bank transfer accepted'
      },
      locations: {
        title: 'Our Locations',
        subtitle: 'Two convenient locations in South Tyrol'
      },
      cta: {
        title: 'Ready to Begin?',
        description: 'Take the first step towards your martial arts journey. Contact us today to get started.'
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
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. It emphasizes the principle that a smaller, weaker person can successfully defend themselves against a bigger, stronger opponent through proper technique, leverage, and timing.',
            'BJJ promotes the concept that most of the advantage of a larger, stronger opponent comes from superior reach and more powerful strikes, both of which are negated when grappling on the ground. BJJ places emphasis on taking an opponent to the ground and utilizing ground fighting techniques and submission holds involving joint-locks and chokeholds.',
            'The art was adapted from traditional Japanese jujutsu and judo by the Gracie family in Brazil, who modified the techniques to create a more effective system for smaller practitioners.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Master the fundamental skills of Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Guard Work',
            items: [
              'Closed Guard fundamentals',
              'Open Guard variations',
              'Guard retention and recovery',
              'Sweeps and submissions from guard'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Arm locks (armbar, kimura, americana)',
              'Chokes (rear naked, triangle, guillotine)',
              'Leg locks and foot attacks',
              'Submission defense and escapes'
            ]
          },
          positions: {
            title: 'Positions',
            items: [
              'Mount and mount escapes',
              'Side control and knee on belly',
              'Back control and back escapes',
              'Half guard and guard passing'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the ranks with dedicated training',
          philosophy: {
            title: 'Belt Philosophy',
            description: 'The BJJ belt system represents not just technical knowledge, but also time on the mat, character development, and the ability to help others learn. Each belt typically takes 2-3 years to achieve, making BJJ one of the most respected ranking systems in martial arts.'
          }
        },
        history: {
          title: 'History of BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu originated in the early 20th century when Japanese judoka Mitsuyo Maeda traveled to Brazil and taught the Gracie family. The Gracies, particularly Helio Gracie, adapted the techniques to work better for smaller practitioners.',
            'The art gained international recognition when Royce Gracie dominated the early UFC tournaments, proving that technique could overcome size and strength. This led to BJJ becoming an essential component of mixed martial arts training worldwide.'
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
                description: 'Adapted techniques for smaller practitioners'
              },
              {
                name: 'Royce Gracie',
                description: 'Proved BJJ\'s effectiveness in early UFC'
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
          description: 'Experience the gentle art that has transformed millions of lives worldwide.',
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
            'Grappling is a form of combat sport that involves wrestling, ground fighting, and submission techniques without the use of strikes. Unlike Brazilian Jiu-Jitsu, grappling is typically practiced without the traditional gi (uniform), allowing for faster-paced, more dynamic movements.',
            'This discipline combines elements from wrestling, judo, and submission grappling to create a comprehensive fighting system. Grappling emphasizes takedowns, ground control, and submission techniques, making it an essential component of mixed martial arts training.',
            'The sport has gained popularity due to its practical applications in self-defense and MMA, as well as its effectiveness as a complete body workout that builds strength, flexibility, and mental toughness.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Master the essential skills of submission grappling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Single and double leg takedowns',
              'Hip tosses and throws',
              'Sprawls and takedown defense',
              'Clinch work and dirty boxing'
            ]
          },
          control: {
            title: 'Ground Control',
            items: [
              'Top position maintenance',
              'Pressure passing techniques',
              'Transition between positions',
              'Pinning and control holds'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Joint locks and arm attacks',
              'Chokes and strangulation',
              'Leg locks and heel hooks',
              'Submission chains and setups'
            ]
          }
        },
        methodology: {
          title: 'Training Methodology',
          subtitle: 'Our comprehensive approach to grappling instruction',
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
                description: 'Continuous movement practice at controlled pace'
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
                description: 'Mobility work for injury prevention'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of Grappling',
          subtitle: 'Transform your body and mind through grappling training',
          items: [
            {
              icon: '💪',
              title: 'Full Body Strength',
              description: 'Builds functional strength and muscle endurance'
            },
            {
              icon: '🧠',
              title: 'Mental Toughness',
              description: 'Develops problem-solving and resilience'
            },
            {
              icon: '⚡',
              title: 'Explosive Power',
              description: 'Improves speed and athletic performance'
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
          subtitle: 'Join our dynamic grappling classes'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Learn from the techniques of grappling masters',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'ADCC Champion',
              description: 'Dominant no-gi grappler and submission specialist'
            },
            {
              name: 'Garry Tonon',
              title: 'EBI Champion',
              description: 'Dynamic leg lock specialist and MMA fighter'
            },
            {
              name: 'Craig Jones',
              title: 'Submission Expert',
              description: 'Australian grappler known for technical innovation'
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
            'Mixed Martial Arts (MMA) is a full-contact combat sport that allows a wide variety of fighting techniques from different martial arts and combat sports. MMA combines striking and grappling techniques, both standing and on the ground, from various combat sports and martial arts.',
            'Modern MMA incorporates techniques from boxing, kickboxing, Muay Thai, wrestling, Brazilian Jiu-Jitsu, judo, and other martial arts. This creates the most complete and realistic form of combat training available today.',
            'MMA has evolved from early vale tudo competitions to become one of the fastest-growing sports in the world, with professional organizations like the UFC showcasing the highest level of mixed martial arts competition.'
          ]
        },
        techniques: {
          title: 'Core Techniques',
          subtitle: 'Master all aspects of mixed martial arts combat',
          striking: {
            title: 'Striking',
            items: [
              'Boxing fundamentals and combinations',
              'Muay Thai kicks and knee strikes',
              'Elbow strikes and clinch work',
              'Footwork and head movement'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown techniques and setups',
              'Sprawls and takedown defense',
              'Cage work and dirty boxing',
              'Ground and pound techniques'
            ]
          },
          groundGame: {
            title: 'Ground Game',
            items: [
              'Brazilian Jiu-Jitsu fundamentals',
              'Submission techniques and defense',
              'Ground control and positioning',
              'Transitions between positions'
            ]
          }
        },
        history: {
          title: 'History of MMA',
          paragraphs: [
            'Mixed Martial Arts has ancient roots in various cultures, but modern MMA began with vale tudo competitions in Brazil and early UFC events in the 1990s. These early competitions had minimal rules and showcased different martial arts styles against each other.',
            'The sport evolved rapidly as fighters realized the importance of being well-rounded. The most successful fighters began cross-training in multiple disciplines, leading to the modern MMA athlete who is skilled in all aspects of combat.'
          ],
          milestones: {
            title: 'Key Milestones',
            events: [
              {
                year: '1993',
                description: 'First UFC event demonstrates effectiveness of different martial arts'
              },
              {
                year: '2001',
                description: 'Unified Rules of MMA established for fighter safety'
              },
              {
                year: '2016',
                description: 'MMA becomes legal in New York, completing US legalization'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of MMA Training',
          subtitle: 'Transform your body and mind through complete combat training',
          items: [
            {
              icon: '🥊',
              title: 'Complete Fitness',
              description: 'Ultimate full-body workout combining cardio and strength'
            },
            {
              icon: '🛡️',
              title: 'Self-Defense',
              description: 'Real-world applicable fighting skills'
            },
            {
              icon: '🧠',
              title: 'Mental Strength',
              description: 'Builds confidence, discipline, and mental toughness'
            },
            {
              icon: '⚡',
              title: 'Athletic Performance',
              description: 'Improves speed, power, and coordination'
            }
          ]
        },
        schedule: {
          title: 'MMA Training Schedule',
          subtitle: 'Train like a professional fighter'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Learn from the greatest mixed martial artists',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Former UFC Middleweight Champion known for striking precision'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendary heavyweight with incredible ground game'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Dominant light heavyweight with creative techniques'
            }
          ]
        },
        cta: {
          title: 'Become a Complete Fighter',
          description: 'Master all aspects of combat sports with our comprehensive MMA program.',
          joinButton: 'Join MMA Classes'
        }
      }
    },
    footer: {
      tagline: 'Elite MMA, BJJ & Grappling Training',
      subtitle: 'Forging Fighters Since 2017',
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
        description: 'Im Herzen Südtirols gelegen, ist die Sport Academy seit 2017 die führende Adresse für Kampfsporttraining. Unsere Akademie bietet Weltklasse-Unterricht in MMA, Brazilian Jiu-Jitsu und Grappling in zwei hochmodernen Einrichtungen in Campo Tures und Bruneck.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Ausbildung von Champions seit 2017',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Campo Tures und Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'Vom Anfänger bis zum Elite-Level',
        exploreClasses: 'Entdecke unsere Kurse'
      },
      trainLikeFighter: {
        title: 'Trainiere wie ein Kämpfer',
        subtitle: 'Meistere die Kunst der Kampfsportarten mit unseren umfassenden Trainingsprogrammen'
      },
      mma: {
        description: 'Vollständiger Kampfsport, der Schlagen, Ringen und Bodenkampf für das ultimative Kampfkunsterlebnis kombiniert.'
      },
      bjj: {
        description: 'Die sanfte Kunst, die sich auf Hebelwirkung und Technik konzentriert, perfekt für den Aufbau von Selbstvertrauen und Selbstverteidigungsfähigkeiten.'
      },
      grappling: {
        description: 'Dynamischer No-Gi-Kampfsport mit Schwerpunkt auf Takedowns, Kontrolle und Submissions ohne Schläge.'
      },
      getStarted: {
        title: 'Bereit anzufangen?',
        subtitle: 'Wähle deinen Weg zur Kampfkunst-Exzellenz'
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
        title: 'Unsere Kurse',
        description: 'Entdecke unser umfassendes Angebot an Kampfkunstprogrammen für alle Könnensstufen. Von kompletten Anfängern bis zu erfahrenen Kämpfern haben wir das perfekte Trainingsprogramm, um dir zu helfen, deine Ziele zu erreichen.'
      },
      mma: {
        title: 'MMA-Kurs (Mixed Martial Arts)',
        description: 'MMA ist ein vollständiger Kampfsport, der Schlagen, Ringen und Bodenkampf kombiniert. Es ist ideal für diejenigen, die eine vielseitige, realistische und körperlich anspruchsvolle Disziplin suchen.',
        features: [
          'Schlagtechniken: Schläge, Tritte, Ellbogen, Knie',
          'Takedowns und Clinch-Arbeit (Ringen und Judo)',
          'Bodenkontrolle und Submissions (BJJ-basiert)',
          'Körperliche Konditionierung und Druckmanagement'
        ]
      },
      bjj: {
        title: 'BJJ-Kurs (Brazilian Jiu-Jitsu)',
        description: 'Brazilian Jiu-Jitsu konzentriert sich auf Bodenkampf und Submissions unter Verwendung von Hebelwirkung und Technik über Kraft. Es ist eine strategische, hochwirksame Kampfkunst, die für alle Levels und Körpertypen geeignet ist.',
        features: [
          'Wichtige Bodenpositionen und Übergänge',
          'Submission-Techniken und wie man sie verteidigt',
          'Wie man Gegner kontrolliert und schlechten Positionen entkommt',
          'Fokus, Disziplin und Selbstvertrauen-Entwicklung'
        ]
      },
      grappling: {
        title: 'Grappling-Kurs',
        description: 'Grappling ist ein Kampfsport ohne Schläge, basierend auf Takedowns, Kontrolle und Submissions, praktiziert ohne Gi. Es ist realistisch, dynamisch und wird häufig im MMA- und Selbstverteidigungstraining verwendet.',
        features: [
          'Takedown-Techniken und Verteidigung im Stehen',
          'Guard-Passing und Bodenkontrolle',
          'Gelenkhebel und Würge-Submissions',
          'Beweglichkeit, Balance und Körperbewusstsein'
        ]
      },
      kidsBjj: {
        title: 'BJJ-Kurs für Kinder (8–14 Jahre)',
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
          'Sprawls und Verteidigungstechniken',
          'Konditionierung und mentale Stärke'
        ]
      },
      whatYouLearn: 'Was du lernst',
      cta: {
        title: 'Bereit, deine Reise zu beginnen?',
        description: 'Tritt unserer Gemeinschaft engagierter Kampfkünstler bei und verwandle dein Leben durch Training.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Plane dein Training mit unserem umfassenden Stundenplan. Kurse sind während der Woche an beiden Standorten in Campo Tures und Bruneck verfügbar.'
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
      importantInfo: 'Wichtige Informationen',
      classGuidelines: 'Kursrichtlinien',
      guidelines: {
        arrive: '10 Minuten früher zum Aufwärmen ankommen',
        water: 'Wasserflasche und Handtuch mitbringen',
        gi: 'BJJ-Kurse erfordern einen Gi (Uniform)',
        noGi: 'Grappling und MMA sind No-Gi-Kurse'
      },
      membershipBenefits: 'Mitgliedschaftsvorteile',
      benefits: {
        allClasses: 'Zugang zu allen Kursen inklusive',
        openMat: 'Kostenlose Open-Mat-Sessions',
        bothLocations: 'Training an beiden Standorten',
        personalTraining: 'Ermäßigtes Personaltraining'
      },
      cta: {
        title: 'Bereit zu trainieren?',
        description: 'Komm zu deiner ersten Stunde und erlebe den Sport Academy Unterschied.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne unsere Weltklasse-Instruktoren kennen, die jahrzehntelange Erfahrung und Leidenschaft in jede Trainingseinheit einbringen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 15 Jahren Erfahrung in Kampfkünsten gründete Matteo die Sport Academy mit der Vision, eine erstklassige Trainingseinrichtung in Südtirol zu schaffen. Seine Expertise erstreckt sich über mehrere Disziplinen und macht ihn zu einem der respektiertesten Trainer der Region.',
        specializations: [
          'Brazilian Jiu-Jitsu Schwarzgurt',
          'MMA-Wettkampftrainer',
          'Grappling-Spezialist',
          'Jugendentwicklungsprogramme'
        ],
        achievements: [
          'Gründete Sport Academy 2017',
          'Trainierte mehrere regionale Champions',
          'Zertifizierter BJJ-Schwarzgurt-Instruktor',
          'Über 100 erfolgreiche Schülerbeförderungen'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior-Instruktor',
        background: 'Christian bringt eine Fülle von Wissen aus seinem Wettkampfhintergrund und seiner Lehrerfahrung mit. Seine technische Präzision und Fähigkeit, komplexe Techniken zu erklären, machen ihn zu einem unschätzbaren Teil unseres Trainerteams.',
        specializations: [
          'Wettkampfvorbereitung',
          'Technische Verfeinerung',
          'Fortgeschrittenes Grappling',
          'Mentales Leistungscoaching'
        ],
        achievements: [
          'Mehrere Turniersiege',
          'Spezialisiert auf Wettkampfcoaching',
          'Experte für fortgeschrittene Techniken',
          'Betreute zahlreiche erfolgreiche Wettkämpfer'
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
          title: 'Individuelle Betreuung',
          description: 'Jeder Schüler erhält personalisierten Unterricht, der auf seine Ziele zugeschnitten ist, sei es Fitness, Selbstverteidigung oder Wettkampf.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir vermitteln Werte von Respekt, Disziplin und Ausdauer, die weit über die Trainingsmatten hinausgehen.'
        }
      },
      cta: {
        title: 'Trainiere mit den Besten',
        description: 'Erlebe Weltklasse-Unterricht und bringe deine Kampfkunst-Reise auf die nächste Stufe.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle das perfekte Trainingspaket für deine Kampfkunst-Reise. Alle Mitgliedschaften beinhalten Zugang zu unserem kompletten Kursangebot und beiden Trainingsstandorten.'
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
        title: 'Nur BJJ-Mitgliedschaft',
        subtitle: 'Spezielles Brazilian Jiu-Jitsu Trainingsprogramm',
        program: 'BJJ-fokussiertes Programm',
        description: 'Zugang nur zu allen BJJ-Kursen'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was ist enthalten',
      mainIncludes: [
        'Unbegrenzter Zugang zu allen Kursen',
        'Training an beiden Standorten',
        'Open-Mat-Sessions',
        'Anfängerfreundlicher Unterricht',
        'Zugang zum Wettkampfteam'
      ],
      summerIncludes: [
        'Alle Sommerkurse enthalten',
        'Flexibler Trainingsplan',
        'Zugang zu beiden Standorten',
        'Perfekt für Urlaubstraining'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse enthalten',
        'Gi- und No-Gi-Training',
        'Zugang zu beiden Standorten',
        'Gürtel-Fortschrittssystem'
      ],
      selectMainSeason: 'Hauptsaison wählen',
      selectSummerSeason: 'Sommersaison wählen',
      selectBjjOnly: 'Nur BJJ wählen',
      additionalServices: {
        title: 'Zusätzliche Services',
        description: 'Verbessere dein Training mit unseren spezialisierten Programmen und Personal Coaching Optionen.'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Eins-zu-eins-Coaching, zugeschnitten auf deine spezifischen Ziele und Bedürfnisse.',
        price: '€50',
        duration: 'pro Session'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Trainingsprogramm für bevorstehende Wettkämpfe und Turniere.',
        price: '€80',
        duration: 'pro Session'
      },
      seminars: {
        title: 'Seminare',
        description: 'Spezielle Workshops mit Gastinstruktoren und fortgeschrittene Techniksessions.',
        price: '€30',
        duration: 'pro Seminar'
      },
      faq: {
        title: 'Häufig gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Die Hauptsaison (September-Juni) bietet unser komplettes Curriculum mit konstanten Trainingspartnern und strukturiertem Fortschritt. Die Sommersaison (Juli-August) bietet flexibles Training während der Urlaubsmonate mit einem entspannteren Zeitplan.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu beiden unserer Einrichtungen in Campo Tures und Bruneck. Du kannst Kurse je nach deinem Zeitplan und deinen Vorlieben mischen und kombinieren.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Absolut! Wir ermutigen neue Schüler, eine Stunde auszuprobieren, bevor sie sich festlegen. Kontaktiere uns, um deine kostenlose Probestunde zu vereinbaren und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für deine erste Stunde bring einfach bequeme Trainingskleidung und Wasser mit. Wir geben dir Anleitung zu spezifischer Ausrüstung, die für deine gewählten Disziplinen benötigt wird, wie einen Gi für BJJ-Kurse.'
        }
      },
      cta: {
        title: 'Starte deine Reise heute',
        description: 'Tritt der Sport Academy Familie bei und verwandle dein Leben durch Kampfkunsttraining.'
      }
    },
    contact: {
      hero: {
        title: 'Kontaktiere uns',
        description: 'Bereit, deine Kampfkunst-Reise zu beginnen? Nimm Kontakt mit uns auf, um mehr über unsere Programme zu erfahren, eine Probestunde zu vereinbaren oder Fragen zu stellen.'
      },
      getInTouch: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Mehrere Wege, um mit unserem Team in Verbindung zu treten'
      },
      callUs: 'Ruf uns an',
      instagram: 'Instagram',
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      visitRequirements: {
        title: 'Zum ersten Mal hier?',
        subtitle: 'Das musst du wissen'
      },
      firstTimeVisitors: 'Erstbesucher',
      whatToBring: 'Was mitbringen',
      bring: [
        'Bequeme Trainingskleidung',
        'Wasserflasche und Handtuch',
        'Positive Einstellung und Lernbereitschaft',
        'Gültiger Ausweis für die Anmeldung'
      ],
      whatWeProvide: 'Was wir bereitstellen',
      provide: [
        'Alle Trainingsausrüstung für Probestunden',
        'Saubere, sichere Trainingsumgebung',
        'Expertenunterricht und Anleitung',
        'Freundliche, einladende Gemeinschaft'
      ],
      specialInstructions: 'Besondere Anweisungen',
      instructions: {
        age: 'Mindestalter: 8 Jahre für Kinderkurse, 16+ für Erwachsenenkurse',
        health: 'Bitte informiere uns über Verletzungen oder Gesundheitszustände',
        equipment: 'Probeschüler können Ausrüstung für die erste Stunde ausleihen',
        payment: 'Bar, Karte und Banküberweisung akzeptiert'
      },
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Standorte in Südtirol'
      },
      cta: {
        title: 'Bereit anzufangen?',
        description: 'Mache den ersten Schritt zu deiner Kampfkunst-Reise. Kontaktiere uns heute, um loszulegen.'
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
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Es betont das Prinzip, dass eine kleinere, schwächere Person sich erfolgreich gegen einen größeren, stärkeren Gegner durch richtige Technik, Hebelwirkung und Timing verteidigen kann.',
            'BJJ fördert das Konzept, dass der größte Teil des Vorteils eines größeren, stärkeren Gegners aus überlegener Reichweite und kraftvolleren Schlägen kommt, die beide beim Grappling am Boden neutralisiert werden. BJJ legt Wert darauf, einen Gegner zu Boden zu bringen und Bodenkampftechniken und Submission-Griffe mit Gelenkhebeln und Würgegriffen zu verwenden.',
            'Die Kunst wurde vom traditionellen japanischen Jujutsu und Judo von der Gracie-Familie in Brasilien adaptiert, die die Techniken modifizierten, um ein effektiveres System für kleinere Praktiker zu schaffen.'
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
              'Guard-Erhaltung und -Wiederherstellung',
              'Sweeps und Submissions aus der Guard'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Armhebel (Armbar, Kimura, Americana)',
              'Würgegriffe (Rear Naked, Triangle, Guillotine)',
              'Beinhebel und Fußangriffe',
              'Submission-Verteidigung und Befreiungen'
            ]
          },
          positions: {
            title: 'Positionen',
            items: [
              'Mount und Mount-Befreiungen',
              'Side Control und Knee on Belly',
              'Back Control und Back-Befreiungen',
              'Half Guard und Guard Passing'
            ]
          }
        },
        beltSystem: {
          title: 'BJJ-Gürtelsystem',
          subtitle: 'Fortschritt durch die Ränge mit engagiertem Training',
          philosophy: {
            title: 'Gürtel-Philosophie',
            description: 'Das BJJ-Gürtelsystem repräsentiert nicht nur technisches Wissen, sondern auch Zeit auf der Matte, Charakterentwicklung und die Fähigkeit, anderen beim Lernen zu helfen. Jeder Gürtel dauert typischerweise 2-3 Jahre, was BJJ zu einem der respektiertesten Ranking-Systeme in den Kampfkünsten macht.'
          }
        },
        history: {
          title: 'Geschichte des BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu entstand im frühen 20. Jahrhundert, als der japanische Judoka Mitsuyo Maeda nach Brasilien reiste und die Gracie-Familie unterrichtete. Die Gracies, besonders Helio Gracie, passten die Techniken an, um besser für kleinere Praktiker zu funktionieren.',
            'Die Kunst erlangte internationale Anerkennung, als Royce Gracie die frühen UFC-Turniere dominierte und bewies, dass Technik Größe und Kraft überwinden kann. Dies führte dazu, dass BJJ zu einem wesentlichen Bestandteil des Mixed Martial Arts-Trainings weltweit wurde.'
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
                description: 'Passte Techniken für kleinere Praktiker an'
              },
              {
                name: 'Royce Gracie',
                description: 'Bewies BJJs Effektivität in der frühen UFC'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ-Trainingsplan',
          subtitle: 'Nimm an unseren regelmäßigen BJJ-Kursen an beiden Standorten teil'
        },
        cta: {
          title: 'Starte deine BJJ-Reise',
          description: 'Erlebe die sanfte Kunst, die Millionen von Leben weltweit verändert hat.',
          joinButton: 'BJJ-Kurse beitreten'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Dynamischer No-Gi-Kampfsport mit Schwerpunkt auf Takedowns, Kontrolle und Submissions'
        },
        overview: {
          title: 'Was ist Grappling?',
          paragraphs: [
            'Grappling ist eine Form des Kampfsports, die Wrestling, Bodenkampf und Submission-Techniken ohne den Einsatz von Schlägen beinhaltet. Im Gegensatz zu Brazilian Jiu-Jitsu wird Grappling typischerweise ohne den traditionellen Gi (Uniform) praktiziert, was schnellere, dynamischere Bewegungen ermöglicht.',
            'Diese Disziplin kombiniert Elemente aus Wrestling, Judo und Submission Grappling, um ein umfassendes Kampfsystem zu schaffen. Grappling betont Takedowns, Bodenkontrolle und Submission-Techniken und macht es zu einem wesentlichen Bestandteil des Mixed Martial Arts-Trainings.',
            'Der Sport hat aufgrund seiner praktischen Anwendungen in der Selbstverteidigung und MMA sowie seiner Effektivität als komplettes Körpertraining, das Kraft, Flexibilität und mentale Stärke aufbaut, an Popularität gewonnen.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Meistere die wesentlichen Fähigkeiten des Submission Grappling',
          takedowns: {
            title: 'Takedowns',
            items: [
              'Einzel- und Doppelbein-Takedowns',
              'Hüftwürfe und Würfe',
              'Sprawls und Takedown-Verteidigung',
              'Clinch-Arbeit und Dirty Boxing'
            ]
          },
          control: {
            title: 'Bodenkontrolle',
            items: [
              'Top-Position-Erhaltung',
              'Druckpass-Techniken',
              'Übergänge zwischen Positionen',
              'Pin- und Kontrollgriffe'
            ]
          },
          submissions: {
            title: 'Submissions',
            items: [
              'Gelenkhebel und Armangriffe',
              'Würgegriffe und Strangulation',
              'Beinhebel und Heel Hooks',
              'Submission-Ketten und Setups'
            ]
          }
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Unser umfassender Ansatz für Grappling-Unterricht',
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
                description: 'Kontinuierliche Bewegungspraxis in kontrolliertem Tempo'
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
                description: 'Mobilitätsarbeit zur Verletzungsprävention'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grappling',
          subtitle: 'Verwandle deinen Körper und Geist durch Grappling-Training',
          items: [
            {
              icon: '💪',
              title: 'Ganzkörperkraft',
              description: 'Baut funktionale Kraft und Muskelausdauer auf'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Entwickelt Problemlösung und Widerstandsfähigkeit'
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
          title: 'Grappling-Trainingsplan',
          subtitle: 'Nimm an unseren dynamischen Grappling-Kursen teil'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Lerne von den Techniken der Grappling-Meister',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'ADCC-Champion',
              description: 'Dominanter No-Gi-Grappler und Submission-Spezialist'
            },
            {
              name: 'Garry Tonon',
              title: 'EBI-Champion',
              description: 'Dynamischer Leg-Lock-Spezialist und MMA-Kämpfer'
            },
            {
              name: 'Craig Jones',
              title: 'Submission-Experte',
              description: 'Australischer Grappler bekannt für technische Innovation'
            }
          ]
        },
        cta: {
          title: 'Meistere die Kunst des Grappling',
          description: 'Entwickle die Fähigkeiten, die das Fundament moderner Kampfsportarten bilden.',
          joinButton: 'Grappling-Kurse beitreten'
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
            'Mixed Martial Arts (MMA) ist ein Vollkontakt-Kampfsport, der eine große Vielfalt von Kampftechniken aus verschiedenen Kampfkünsten und Kampfsportarten erlaubt. MMA kombiniert Schlag- und Grappling-Techniken, sowohl im Stehen als auch am Boden, aus verschiedenen Kampfsportarten und Kampfkünsten.',
            'Modernes MMA integriert Techniken aus Boxen, Kickboxen, Muay Thai, Wrestling, Brazilian Jiu-Jitsu, Judo und anderen Kampfkünsten. Dies schafft die vollständigste und realistischste Form des Kampftrainings, die heute verfügbar ist.',
            'MMA hat sich von frühen Vale Tudo-Wettkämpfen zu einer der am schnellsten wachsenden Sportarten der Welt entwickelt, mit professionellen Organisationen wie der UFC, die das höchste Niveau der Mixed Martial Arts-Konkurrenz zeigen.'
          ]
        },
        techniques: {
          title: 'Kerntechniken',
          subtitle: 'Meistere alle Aspekte des Mixed Martial Arts-Kampfes',
          striking: {
            title: 'Schlagen',
            items: [
              'Box-Grundlagen und Kombinationen',
              'Muay Thai-Tritte und Kniestöße',
              'Ellbogenschläge und Clinch-Arbeit',
              'Fußarbeit und Kopfbewegung'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Takedown-Techniken und Setups',
              'Sprawls und Takedown-Verteidigung',
              'Käfig-Arbeit und Dirty Boxing',
              'Ground and Pound-Techniken'
            ]
          },
          groundGame: {
            title: 'Bodenkampf',
            items: [
              'Brazilian Jiu-Jitsu-Grundlagen',
              'Submission-Techniken und Verteidigung',
              'Bodenkontrolle und Positionierung',
              'Übergänge zwischen Positionen'
            ]
          }
        },
        history: {
          title: 'Geschichte des MMA',
          paragraphs: [
            'Mixed Martial Arts hat antike Wurzeln in verschiedenen Kulturen, aber modernes MMA begann mit Vale Tudo-Wettkämpfen in Brasilien und frühen UFC-Events in den 1990er Jahren. Diese frühen Wettkämpfe hatten minimale Regeln und zeigten verschiedene Kampfkunststile gegeneinander.',
            'Der Sport entwickelte sich schnell, als Kämpfer die Wichtigkeit erkannten, vielseitig zu sein. Die erfolgreichsten Kämpfer begannen, in mehreren Disziplinen zu trainieren, was zum modernen MMA-Athleten führte, der in allen Aspekten des Kampfes geschickt ist.'
          ],
          milestones: {
            title: 'Wichtige Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erstes UFC-Event demonstriert Effektivität verschiedener Kampfkünste'
              },
              {
                year: '2001',
                description: 'Einheitliche MMA-Regeln für Kämpfersicherheit etabliert'
              },
              {
                year: '2016',
                description: 'MMA wird in New York legal, vervollständigt US-Legalisierung'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des MMA-Trainings',
          subtitle: 'Verwandle deinen Körper und Geist durch komplettes Kampftraining',
          items: [
            {
              icon: '🥊',
              title: 'Komplette Fitness',
              description: 'Ultimatives Ganzkörpertraining, das Cardio und Kraft kombiniert'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Real anwendbare Kampffähigkeiten'
            },
            {
              icon: '🧠',
              title: 'Mentale Stärke',
              description: 'Baut Selbstvertrauen, Disziplin und mentale Stärke auf'
            },
            {
              icon: '⚡',
              title: 'Athletische Leistung',
              description: 'Verbessert Geschwindigkeit, Kraft und Koordination'
            }
          ]
        },
        schedule: {
          title: 'MMA-Trainingsplan',
          subtitle: 'Trainiere wie ein professioneller Kämpfer'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Lerne von den größten Mixed Martial Artists',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Ehemaliger UFC-Mittelgewichts-Champion bekannt für Schlagpräzision'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Legendärer Schwergewichtler mit unglaublichem Bodenkampf'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Dominanter Halbschwergewichtler mit kreativen Techniken'
            }
          ]
        },
        cta: {
          title: 'Werde ein kompletter Kämpfer',
          description: 'Meistere alle Aspekte der Kampfsportarten mit unserem umfassenden MMA-Programm.',
          joinButton: 'MMA-Kurse beitreten'
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
      allLevels: 'Alle Level',
      ages: 'Alter',
      joinSportAcademy: 'Sport Academy beitreten',
      registerOnline: 'Online registrieren',
      visitUs: 'Besuche uns',
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
        description: 'Situata nel cuore dell\'Alto Adige, la Sport Academy è la destinazione principale per l\'allenamento di sport da combattimento dal 2017. La nostra accademia offre istruzione di livello mondiale in MMA, Brazilian Jiu-Jitsu e Grappling in due strutture all\'avanguardia a Campo Tures e Brunico.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Formando campioni dal 2017',
        trainingLocations: 'Sedi di Allenamento',
        locationsDescription: 'Campo Tures e Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'Dal principiante al livello elite',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come un Combattente',
        subtitle: 'Padroneggia l\'arte degli sport da combattimento con i nostri programmi di allenamento completi'
      },
      mma: {
        description: 'Sport da combattimento completo che combina striking, wrestling e ground fighting per l\'esperienza definitiva di arti marziali.'
      },
      bjj: {
        description: 'L\'arte gentile che si concentra su leva e tecnica, perfetta per costruire fiducia e abilità di autodifesa.'
      },
      grappling: {
        description: 'Sport da combattimento dinamico no-gi che enfatizza takedown, controllo e submission senza colpi.'
      },
      getStarted: {
        title: 'Pronto per Iniziare?',
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
        title: 'I Nostri Corsi',
        description: 'Scopri la nostra gamma completa di programmi di arti marziali progettati per tutti i livelli di abilità. Dai principianti completi ai combattenti esperti, abbiamo il programma di allenamento perfetto per aiutarti a raggiungere i tuoi obiettivi.'
      },
      mma: {
        title: 'Corso MMA (Mixed Martial Arts)',
        description: 'L\'MMA è uno sport da combattimento completo che combina striking, wrestling e ground fighting. È ideale per coloro che cercano una disciplina completa, realistica e fisicamente impegnativa.',
        features: [
          'Tecniche di striking: pugni, calci, gomitate, ginocchiate',
          'Takedown e lavoro in clinch (wrestling e judo)',
          'Controllo a terra e submission (basato su BJJ)',
          'Condizionamento fisico e gestione della pressione'
        ]
      },
      bjj: {
        title: 'Corso BJJ (Brazilian Jiu-Jitsu)',
        description: 'Il Brazilian Jiu-Jitsu si concentra sul combattimento a terra e le submission utilizzando leva e tecnica sulla forza. È un\'arte marziale strategica, altamente efficace, adatta a tutti i livelli e tipi di corpo.',
        features: [
          'Posizioni chiave a terra e transizioni',
          'Tecniche di submission e come difenderle',
          'Come controllare gli avversari e sfuggire alle posizioni svantaggiose',
          'Sviluppo di concentrazione, disciplina e fiducia in se stessi'
        ]
      },
      grappling: {
        title: 'Corso Grappling',
        description: 'Il Grappling è uno sport da combattimento senza colpi basato su takedown, controllo e submission, praticato senza gi. È realistico, dinamico e comunemente usato nell\'allenamento MMA e di autodifesa.',
        features: [
          'Tecniche di takedown e difesa in piedi',
          'Passaggio della guardia e controllo a terra',
          'Leve articolari e submission per strangolamento',
          'Agilità, equilibrio e consapevolezza corporea'
        ]
      },
      kidsBjj: {
        title: 'Corso BJJ per Bambini (8–14 anni)',
        description: 'Un corso strutturato per bambini dagli 8 ai 14 anni che li introduce al Brazilian Jiu-Jitsu in un ambiente sicuro e positivo. Attraverso tecnica e esercizi ludici, i bambini sviluppano abilità fisiche e mentali divertendosi.',
        features: [
          'Movimenti BJJ di base, posizioni e submission semplici',
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
          'Sprawl e tecniche difensive',
          'Condizionamento e forza mentale'
        ]
      },
      whatYouLearn: 'Cosa Imparerai',
      cta: {
        title: 'Pronto per Iniziare il Tuo Viaggio?',
        description: 'Unisciti alla nostra comunità di artisti marziali dedicati e trasforma la tua vita attraverso l\'allenamento.'
      }
    },
    schedule: {
      hero: {
        title: 'Orario di Allenamento',
        description: 'Pianifica il tuo allenamento con il nostro orario completo. Le lezioni sono disponibili durante la settimana in entrambe le nostre sedi di Campo Tures e Brunico.'
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
        arrive: 'Arriva 10 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'Le lezioni BJJ richiedono un gi (uniforme)',
        noGi: 'Grappling e MMA sono lezioni no-gi'
      },
      membershipBenefits: 'Vantaggi dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutte le lezioni incluso',
        openMat: 'Sessioni open mat gratuite',
        bothLocations: 'Allenati in entrambe le sedi',
        personalTraining: 'Allenamento personale scontato'
      },
      cta: {
        title: 'Pronto per Allenarti?',
        description: 'Unisciti a noi per la tua prima lezione e sperimenta la differenza Sport Academy.'
      }
    },
    coaches: {
      hero: {
        title: 'I Nostri Istruttori',
        description: 'Incontra i nostri istruttori di livello mondiale che portano decenni di esperienza e passione in ogni sessione di allenamento.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Istruttore & Fondatore',
        background: 'Con oltre 15 anni di esperienza nelle arti marziali, Matteo ha fondato la Sport Academy con la visione di creare una struttura di allenamento di primo livello in Alto Adige. La sua competenza abbraccia multiple discipline, rendendolo uno degli istruttori più rispettati della regione.',
        specializations: [
          'Cintura Nera Brazilian Jiu-Jitsu',
          'Allenatore di Competizione MMA',
          'Specialista Grappling',
          'Programmi di Sviluppo Giovanile'
        ],
        achievements: [
          'Fondò Sport Academy nel 2017',
          'Allenò multipli campioni regionali',
          'Istruttore certificato Cintura Nera BJJ',
          'Oltre 100 promozioni di studenti di successo'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta una ricchezza di conoscenza dal suo background competitivo e dalla sua esperienza di insegnamento. La sua precisione tecnica e capacità di spiegare tecniche complesse lo rendono una parte inestimabile del nostro team di istruttori.',
        specializations: [
          'Preparazione alla Competizione',
          'Raffinamento Tecnico',
          'Grappling Avanzato',
          'Coaching delle Prestazioni Mentali'
        ],
        achievements: [
          'Multiple vittorie in tornei',
          'Specializzato nel coaching competitivo',
          'Esperto in tecniche avanzate',
          'Ha guidato numerosi competitori di successo'
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
          title: 'Attenzione Individuale',
          description: 'Ogni studente riceve istruzione personalizzata adattata ai suoi obiettivi, che si tratti di fitness, autodifesa o competizione.'
        },
        respect: {
          title: 'Rispetto & Disciplina',
          description: 'Instilliamo valori di rispetto, disciplina e perseveranza che si estendono ben oltre i tappeti di allenamento.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Sperimenta istruzione di livello mondiale e porta il tuo viaggio nelle arti marziali al livello successivo.'
      }
    },
    membership: {
      hero: {
        title: 'Piani di Abbonamento',
        description: 'Scegli il pacchetto di allenamento perfetto per il tuo viaggio nelle arti marziali. Tutti gli abbonamenti includono l\'accesso alla nostra gamma completa di corsi e a entrambe le sedi di allenamento.'
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
        description: 'Accesso solo a tutti i corsi BJJ'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      mainIncludes: [
        'Accesso illimitato a tutti i corsi',
        'Allenamento in entrambe le sedi',
        'Sessioni open mat',
        'Istruzione adatta ai principianti',
        'Accesso al team di competizione'
      ],
      summerIncludes: [
        'Tutti i corsi estivi inclusi',
        'Orario di allenamento flessibile',
        'Accesso a entrambe le sedi',
        'Perfetto per l\'allenamento in vacanza'
      ],
      bjjIncludes: [
        'Tutti i corsi BJJ inclusi',
        'Allenamento Gi e No-Gi',
        'Accesso a entrambe le sedi',
        'Sistema di progressione delle cinture'
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
        description: 'Coaching uno-a-uno adattato ai tuoi obiettivi e bisogni specifici.',
        price: '€50',
        duration: 'per sessione'
      },
      competitionPrep: {
        title: 'Preparazione Competizione',
        description: 'Programma di allenamento specializzato per competizioni e tornei imminenti.',
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
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro curriculum completo con partner di allenamento costanti e progressione strutturata. La stagione estiva (Luglio-Agosto) fornisce allenamento flessibile durante i mesi di vacanza con un programma più rilassato.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le sedi?',
          answer: 'Sì! Tutti gli abbonamenti includono l\'accesso a entrambe le nostre strutture di Campo Tures e Brunico. Puoi mescolare e abbinare i corsi in base al tuo programma e alle tue preferenze.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Incoraggiamo i nuovi studenti a provare una lezione prima di impegnarsi. Contattaci per programmare la tua sessione di prova gratuita e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Di che attrezzatura ho bisogno?',
          answer: 'Per la tua prima lezione, porta semplicemente abbigliamento da allenamento comodo e acqua. Ti forniremo indicazioni su qualsiasi attrezzatura specifica necessaria per le tue discipline scelte, come un gi per i corsi BJJ.'
        }
      },
      cta: {
        title: 'Inizia il Tuo Viaggio Oggi',
        description: 'Unisciti alla famiglia Sport Academy e trasforma la tua vita attraverso l\'allenamento delle arti marziali.'
      }
    },
    contact: {
      hero: {
        title: 'Contattaci',
        description: 'Pronto per iniziare il tuo viaggio nelle arti marziali? Mettiti in contatto con noi per saperne di più sui nostri programmi, programmare una lezione di prova o fare qualsiasi domanda tu possa avere.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Diversi modi per connettersi con il nostro team'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      address: 'Indirizzo',
      trainingSchedule: 'Orario di Allenamento',
      visitRequirements: {
        title: 'Prima Volta in Visita?',
        subtitle: 'Ecco cosa devi sapere'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      bring: [
        'Abbigliamento da allenamento comodo',
        'Bottiglia d\'acqua e asciugamano',
        'Atteggiamento positivo e volontà di imparare',
        'Documento d\'identità valido per la registrazione'
      ],
      whatWeProvide: 'Cosa Forniamo',
      provide: [
        'Tutta l\'attrezzatura da allenamento per le lezioni di prova',
        'Ambiente di allenamento pulito e sicuro',
        'Istruzione esperta e guida',
        'Comunità amichevole e accogliente'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Età minima: 8 anni per i corsi bambini, 16+ per i corsi adulti',
        health: 'Per favore informaci di eventuali infortuni o condizioni di salute',
        equipment: 'Gli studenti di prova possono prendere in prestito l\'attrezzatura per la prima lezione',
        payment: 'Contanti, carta e bonifico bancario accettati'
      },
      locations: {
        title: 'Le Nostre Sedi',
        subtitle: 'Due sedi convenienti in Alto Adige'
      },
      cta: {
        title: 'Pronto per Iniziare?',
        description: 'Fai il primo passo verso il tuo viaggio nelle arti marziali. Contattaci oggi per iniziare.'
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
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione. Enfatizza il principio che una persona più piccola e debole può difendersi con successo contro un avversario più grande e forte attraverso tecnica, leva e tempismo appropriati.',
            'Il BJJ promuove il concetto che la maggior parte del vantaggio di un avversario più grande e forte deriva da una portata superiore e colpi più potenti, entrambi neutralizzati quando si lotta a terra. Il BJJ pone enfasi sul portare un avversario a terra e utilizzare tecniche di combattimento a terra e prese di sottomissione che coinvolgono leve articolari e strangolamenti.',
            'L\'arte è stata adattata dal jujutsu e judo giapponese tradizionale dalla famiglia Gracie in Brasile, che ha modificato le tecniche per creare un sistema più efficace per i praticanti più piccoli.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia le abilità fondamentali del Brazilian Jiu-Jitsu',
          guardWork: {
            title: 'Lavoro di Guardia',
            items: [
              'Fondamentali della Guardia Chiusa',
              'Variazioni della Guardia Aperta',
              'Mantenimento e recupero della guardia',
              'Sweep e submission dalla guardia'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Leve al braccio (armbar, kimura, americana)',
              'Strangolamenti (rear naked, triangle, guillotine)',
              'Leve alle gambe e attacchi ai piedi',
              'Difesa dalle submission e fughe'
            ]
          },
          positions: {
            title: 'Posizioni',
            items: [
              'Mount e fughe dal mount',
              'Side control e knee on belly',
              'Back control e fughe dal back',
              'Half guard e passaggio della guardia'
            ]
          }
        },
        beltSystem: {
          title: 'Sistema delle Cinture BJJ',
          subtitle: 'Progredisci attraverso i gradi con allenamento dedicato',
          philosophy: {
            title: 'Filosofia delle Cinture',
            description: 'Il sistema delle cinture BJJ rappresenta non solo conoscenza tecnica, ma anche tempo sul tatami, sviluppo del carattere e capacità di aiutare altri ad imparare. Ogni cintura richiede tipicamente 2-3 anni per essere raggiunta, rendendo il BJJ uno dei sistemi di classificazione più rispettati nelle arti marziali.'
          }
        },
        history: {
          title: 'Storia del BJJ',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu ebbe origine all\'inizio del XX secolo quando il judoka giapponese Mitsuyo Maeda viaggiò in Brasile e insegnò alla famiglia Gracie. I Gracie, in particolare Helio Gracie, adattarono le tecniche per funzionare meglio per i praticanti più piccoli.',
            'L\'arte ottenne riconoscimento internazionale quando Royce Gracie dominò i primi tornei UFC, dimostrando che la tecnica poteva superare dimensioni e forza. Questo portò il BJJ a diventare un componente essenziale dell\'allenamento di arti marziali miste in tutto il mondo.'
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
                description: 'Adattò le tecniche per i praticanti più piccoli'
              },
              {
                name: 'Royce Gracie',
                description: 'Dimostrò l\'efficacia del BJJ nella prima UFC'
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
          description: 'Sperimenta l\'arte gentile che ha trasformato milioni di vite in tutto il mondo.',
          joinButton: 'Unisciti ai Corsi BJJ'
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
            'Il Grappling è una forma di sport da combattimento che coinvolge wrestling, combattimento a terra e tecniche di submission senza l\'uso di colpi. A differenza del Brazilian Jiu-Jitsu, il grappling è tipicamente praticato senza il gi tradizionale (uniforme), permettendo movimenti più veloci e dinamici.',
            'Questa disciplina combina elementi dal wrestling, judo e submission grappling per creare un sistema di combattimento completo. Il Grappling enfatizza takedown, controllo a terra e tecniche di submission, rendendolo un componente essenziale dell\'allenamento di arti marziali miste.',
            'Lo sport ha guadagnato popolarità grazie alle sue applicazioni pratiche nell\'autodifesa e MMA, così come alla sua efficacia come allenamento completo del corpo che costruisce forza, flessibilità e resistenza mentale.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia le abilità essenziali del submission grappling',
          takedowns: {
            title: 'Takedown',
            items: [
              'Takedown a gamba singola e doppia',
              'Proiezioni dell\'anca e lanci',
              'Sprawl e difesa dai takedown',
              'Lavoro in clinch e dirty boxing'
            ]
          },
          control: {
            title: 'Controllo a Terra',
            items: [
              'Mantenimento della posizione superiore',
              'Tecniche di passaggio con pressione',
              'Transizioni tra posizioni',
              'Prese di controllo e immobilizzazione'
            ]
          },
          submissions: {
            title: 'Submission',
            items: [
              'Leve articolari e attacchi al braccio',
              'Strangolamenti e soffocamento',
              'Leve alle gambe e heel hook',
              'Catene di submission e preparazioni'
            ]
          }
        },
        methodology: {
          title: 'Metodologia di Allenamento',
          subtitle: 'Il nostro approccio completo all\'istruzione del grappling',
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
                description: 'Pratica di movimento continuo a ritmo controllato'
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
                description: 'Forza funzionale per i movimenti del grappling'
              },
              {
                title: 'Flessibilità',
                description: 'Lavoro di mobilità per la prevenzione degli infortuni'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici del Grappling',
          subtitle: 'Trasforma il tuo corpo e la tua mente attraverso l\'allenamento di grappling',
          items: [
            {
              icon: '💪',
              title: 'Forza Totale del Corpo',
              description: 'Costruisce forza funzionale e resistenza muscolare'
            },
            {
              icon: '🧠',
              title: 'Resistenza Mentale',
              description: 'Sviluppa problem-solving e resilienza'
            },
            {
              icon: '⚡',
              title: 'Potenza Esplosiva',
              description: 'Migliora velocità e prestazioni atletiche'
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
          subtitle: 'Unisciti ai nostri corsi di grappling dinamici'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Impara dalle tecniche dei maestri del grappling',
          grapplers: [
            {
              name: 'Gordon Ryan',
              title: 'Campione ADCC',
              description: 'Grappler no-gi dominante e specialista delle submission'
            },
            {
              name: 'Garry Tonon',
              title: 'Campione EBI',
              description: 'Specialista dinamico delle leg lock e combattente MMA'
            },
            {
              name: 'Craig Jones',
              title: 'Esperto di Submission',
              description: 'Grappler australiano noto per l\'innovazione tecnica'
            }
          ]
        },
        cta: {
          title: 'Padroneggia l\'Arte del Grappling',
          description: 'Sviluppa le abilità che formano le fondamenta degli sport da combattimento moderni.',
          joinButton: 'Unisciti ai Corsi di Grappling'
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
            'Le Mixed Martial Arts (MMA) sono uno sport da combattimento a contatto pieno che permette un\'ampia varietà di tecniche di combattimento da diverse arti marziali e sport da combattimento. L\'MMA combina tecniche di striking e grappling, sia in piedi che a terra, da vari sport da combattimento e arti marziali.',
            'L\'MMA moderno incorpora tecniche da boxe, kickboxing, Muay Thai, wrestling, Brazilian Jiu-Jitsu, judo e altre arti marziali. Questo crea la forma più completa e realistica di allenamento da combattimento disponibile oggi.',
            'L\'MMA si è evoluto dalle prime competizioni vale tudo per diventare uno degli sport in più rapida crescita al mondo, con organizzazioni professionali come l\'UFC che mostrano il più alto livello di competizione di arti marziali miste.'
          ]
        },
        techniques: {
          title: 'Tecniche Fondamentali',
          subtitle: 'Padroneggia tutti gli aspetti del combattimento di arti marziali miste',
          striking: {
            title: 'Striking',
            items: [
              'Fondamentali di boxe e combinazioni',
              'Calci e ginocchiate Muay Thai',
              'Colpi di gomito e lavoro in clinch',
              'Gioco di gambe e movimento della testa'
            ]
          },
          wrestling: {
            title: 'Wrestling',
            items: [
              'Tecniche di takedown e preparazioni',
              'Sprawl e difesa dai takedown',
              'Lavoro in gabbia e dirty boxing',
              'Tecniche di ground and pound'
            ]
          },
          groundGame: {
            title: 'Gioco a Terra',
            items: [
              'Fondamentali di Brazilian Jiu-Jitsu',
              'Tecniche di submission e difesa',
              'Controllo a terra e posizionamento',
              'Transizioni tra posizioni'
            ]
          }
        },
        history: {
          title: 'Storia dell\'MMA',
          paragraphs: [
            'Le Mixed Martial Arts hanno radici antiche in varie culture, ma l\'MMA moderno iniziò con le competizioni vale tudo in Brasile e i primi eventi UFC negli anni \'90. Queste prime competizioni avevano regole minime e mostravano diversi stili di arti marziali l\'uno contro l\'altro.',
            'Lo sport si è evoluto rapidamente quando i combattenti hanno realizzato l\'importanza di essere completi. I combattenti di maggior successo hanno iniziato ad allenarsi in multiple discipline, portando all\'atleta MMA moderno che è abile in tutti gli aspetti del combattimento.'
          ],
          milestones: {
            title: 'Pietre Miliari Chiave',
            events: [
              {
                year: '1993',
                description: 'Il primo evento UFC dimostra l\'efficacia di diverse arti marziali'
              },
              {
                year: '2001',
                description: 'Regole Unificate dell\'MMA stabilite per la sicurezza dei combattenti'
              },
              {
                year: '2016',
                description: 'L\'MMA diventa legale a New York, completando la legalizzazione negli USA'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici dell\'Allenamento MMA',
          subtitle: 'Trasforma il tuo corpo e la tua mente attraverso l\'allenamento da combattimento completo',
          items: [
            {
              icon: '🥊',
              title: 'Fitness Completo',
              description: 'Allenamento definitivo per tutto il corpo che combina cardio e forza'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Abilità di combattimento applicabili nel mondo reale'
            },
            {
              icon: '🧠',
              title: 'Forza Mentale',
              description: 'Costruisce fiducia, disciplina e resistenza mentale'
            },
            {
              icon: '⚡',
              title: 'Prestazioni Atletiche',
              description: 'Migliora velocità, potenza e coordinazione'
            }
          ]
        },
        schedule: {
          title: 'Orario Allenamento MMA',
          subtitle: 'Allenati come un combattente professionista'
        },
        legends: {
          title: 'Leggende dell\'MMA',
          subtitle: 'Impara dai più grandi artisti marziali misti',
          fighters: [
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Ex Campione UFC dei Pesi Medi noto per la precisione nello striking'
            },
            {
              name: 'Fedor Emelianenko',
              title: 'The Last Emperor',
              description: 'Leggendario peso massimo con incredibile gioco a terra'
            },
            {
              name: 'Jon Jones',
              title: 'Bones',
              description: 'Dominante peso medio-massimo con tecniche creative'
            }
          ]
        },
        cta: {
          title: 'Diventa un Combattente Completo',
          description: 'Padroneggia tutti gli aspetti degli sport da combattimento con il nostro programma MMA completo.',
          joinButton: 'Unisciti ai Corsi MMA'
        }
      }
    },
    footer: {
      tagline: 'Allenamento Elite MMA, BJJ & Grappling',
      subtitle: 'Forgiando Combattenti dal 2017',
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
      visitUs: 'Visitaci',
      dropInWelcome: 'Drop-in Benvenuti',
      duringTrainingHours: 'Durante gli orari di allenamento',
      responseWithin2Hours: 'Risposta entro 2 ore',
      dailyUpdatesAndDMs: 'Aggiornamenti quotidiani e DM',
      instantConfirmation: 'Conferma istantanea'
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
        return key; // Return key if translation not found
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