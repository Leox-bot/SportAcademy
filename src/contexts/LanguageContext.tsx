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
        subtitle: 'Elite MMA, Brazilian Jiu-Jitsu, and Grappling training in Campo Tures and Brunico. Professional coaching by certified instructors.'
      },
      welcome: {
        title: 'Welcome to Sport Academy',
        description: 'Where passion meets precision. Our academy offers world-class training in Mixed Martial Arts, Brazilian Jiu-Jitsu, and Grappling across two premium locations in South Tyrol.'
      },
      stats: {
        yearsOfExcellence: 'Years of Excellence',
        yearsDescription: 'Forging fighters since 2017',
        trainingLocations: 'Training Locations',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Training Programs',
        programsDescription: 'From beginner to elite',
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
        description: 'Develop superior ground control, submission techniques, and wrestling skills in our comprehensive grappling program.'
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
        description: 'Discover our comprehensive range of martial arts programs designed for all skill levels, from beginners to advanced practitioners.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Experience the ultimate combat sport that combines striking, grappling, and ground fighting. Our MMA program integrates techniques from boxing, kickboxing, wrestling, and Brazilian Jiu-Jitsu.',
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
        description: 'Master the gentle art that emphasizes technique over strength. Learn to control and submit opponents through leverage, timing, and proper technique.',
        features: [
          'Guard work and sweeps',
          'Submission techniques',
          'Positional control',
          'Escape techniques',
          'Self-defense applications',
          'Competition preparation'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Develop superior ground fighting skills through our comprehensive grappling program that focuses on takedowns, control, and submissions.',
        features: [
          'Wrestling takedowns',
          'Ground control positions',
          'Submission grappling',
          'No-gi techniques',
          'Scrambles and transitions',
          'Competition training'
        ]
      },
      kidsBjj: {
        title: 'Kids BJJ',
        description: 'Introduce your children to the fundamentals of Brazilian Jiu-Jitsu in a safe, fun, and structured environment that builds confidence and discipline.',
        features: [
          'Basic BJJ techniques',
          'Self-defense skills',
          'Discipline and respect',
          'Physical fitness',
          'Social interaction',
          'Confidence building'
        ]
      },
      kidsGrappling: {
        title: 'Kids Grappling',
        description: 'Youth-focused grappling program that teaches fundamental wrestling and submission grappling techniques while promoting physical fitness and mental toughness.',
        features: [
          'Wrestling fundamentals',
          'Basic submissions',
          'Physical conditioning',
          'Mental toughness',
          'Teamwork skills',
          'Competition preparation'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Build a strong foundation in wrestling with focus on takedowns, control, and conditioning. Essential for MMA and grappling success.',
        features: [
          'Single and double leg takedowns',
          'Hip tosses and throws',
          'Sprawls and defensive techniques',
          'Top control and riding',
          'Conditioning and drilling',
          'Competition techniques'
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
        description: 'Meet our world-class instructors who bring years of experience, technical expertise, and passion for martial arts to every training session.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Head Coach & Founder',
        background: 'With over 15 years of martial arts experience, Matteo is a certified Brazilian Jiu-Jitsu black belt and accomplished MMA fighter. He founded Sport Academy with the vision of bringing world-class martial arts training to South Tyrol.',
        specializations: [
          'Brazilian Jiu-Jitsu (Black Belt)',
          'Mixed Martial Arts',
          'Grappling & Wrestling',
          'Competition Coaching',
          'Self-Defense Systems'
        ],
        achievements: [
          'BJJ Black Belt under renowned lineage',
          'Professional MMA fighter',
          'Multiple regional grappling championships',
          'Certified instructor in multiple disciplines',
          '8+ years coaching experience'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instructor',
        background: 'Christian brings a wealth of knowledge in striking arts and grappling to Sport Academy. His technical precision and teaching ability make him an invaluable asset to our coaching team.',
        specializations: [
          'Striking Arts & Boxing',
          'Kickboxing & Muay Thai',
          'Wrestling Techniques',
          'MMA Integration',
          'Youth Programs'
        ],
        achievements: [
          'Certified striking arts instructor',
          'Regional boxing champion',
          'Wrestling competition background',
          'Youth development specialist',
          '6+ years coaching experience'
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
          description: 'Every student receives personalized attention and coaching tailored to their specific goals and skill level.'
        },
        respect: {
          title: 'Respect & Discipline',
          description: 'We instill values of respect, discipline, and sportsmanship that extend far beyond the training mats.'
        }
      },
      cta: {
        title: 'Train with the Best',
        description: 'Experience world-class coaching and take your martial arts journey to the next level.'
      }
    },
    schedule: {
      hero: {
        title: 'Training Schedule',
        description: 'Find the perfect training times that fit your schedule across our two locations in Campo Tures and Brunico.'
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
        noGi: 'Grappling classes are no-gi'
      },
      membershipBenefits: 'Membership Benefits',
      benefits: {
        allClasses: 'Access to all classes',
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
        description: 'Choose the perfect training package that fits your goals, schedule, and budget. All memberships include access to both locations.'
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
        description: 'Intensive BJJ training with access to all gi and no-gi classes'
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
        'Competition team access',
        'Equipment storage'
      ],
      summerIncludes: [
        'All summer classes',
        'Both location access',
        'Open mat sessions',
        'Flexible scheduling',
        'No long-term commitment'
      ],
      bjjIncludes: [
        'All BJJ classes (gi & no-gi)',
        'Both location access',
        'Open mat sessions',
        'Competition preparation',
        'Belt progression system',
        'Specialized BJJ seminars'
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
        price: '€60',
        duration: 'per session'
      },
      competitionPrep: {
        title: 'Competition Prep',
        description: 'Specialized training for upcoming competitions and tournaments.',
        price: '€80',
        duration: 'per session'
      },
      seminars: {
        title: 'Seminars',
        description: 'Special workshops with guest instructors and advanced techniques.',
        price: '€40',
        duration: 'per seminar'
      },
      faq: {
        title: 'Frequently Asked Questions',
        seasons: {
          question: 'What\'s the difference between seasons?',
          answer: 'The main season (September-June) offers our complete curriculum with structured progression. Summer season is more flexible with condensed training perfect for maintaining skills or trying martial arts.'
        },
        locations: {
          question: 'Can I train at both locations?',
          answer: 'Yes! All memberships include access to classes at both Campo Tures and Brunico locations, giving you maximum flexibility in your training schedule.'
        },
        trial: {
          question: 'Do you offer trial classes?',
          answer: 'Absolutely! We offer a free trial class for new students. Contact us to schedule your trial and experience our training firsthand.'
        },
        equipment: {
          question: 'What equipment do I need?',
          answer: 'For beginners, just comfortable workout clothes. We provide basic equipment for trial classes. As you progress, you\'ll need a gi for BJJ classes and appropriate gear for other disciplines.'
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
        description: 'Ready to start your martial arts journey? Get in touch with us to learn more about our programs, schedule a trial class, or visit our facilities.'
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
        'All training equipment for trial classes',
        'Clean, sanitized facilities',
        'Professional instruction',
        'Welcoming community environment'
      ],
      specialInstructions: 'Special Instructions',
      instructions: {
        age: 'Age Requirements: 16+ for adult classes, kids programs available',
        health: 'Health: Please inform us of any injuries or health conditions',
        equipment: 'Equipment: Basic gear provided for first visit',
        payment: 'Payment: Cash, card, and online payments accepted'
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
          subtitle: 'Master the gentle art that emphasizes technique, leverage, and strategy over brute strength'
        },
        overview: {
          title: 'The Gentle Art',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on ground fighting and submission holds. Developed from traditional Japanese jujitsu and judo, BJJ emphasizes technique and leverage, allowing smaller practitioners to overcome larger opponents.',
            'At Sport Academy, our BJJ program is designed to teach students the fundamental principles of this beautiful art while building physical fitness, mental toughness, and self-confidence.',
            'Whether you\'re a complete beginner or an experienced grappler, our structured curriculum and expert instruction will help you develop your skills and achieve your goals on the mats.'
          ]
        },
        techniques: {
          title: 'Core BJJ Techniques',
          subtitle: 'Master the fundamental techniques that form the foundation of Brazilian Jiu-Jitsu'
        },
        beltSystem: {
          title: 'BJJ Belt System',
          subtitle: 'Progress through the traditional Brazilian Jiu-Jitsu ranking system',
          philosophy: {
            title: 'The Journey of Belts',
            description: 'In Brazilian Jiu-Jitsu, belt progression represents not just technical skill, but also character development, perseverance, and dedication to the art. Each belt level typically takes 2-3 years to achieve, making BJJ one of the most respected ranking systems in martial arts.'
          }
        },
        history: {
          title: 'History of BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu was developed in the early 20th century when Japanese judoka Mitsuyo Maeda taught the Gracie family in Brazil. The Gracies, particularly Helio Gracie, adapted and refined the techniques to create what we now know as Brazilian Jiu-Jitsu.',
            'The art gained worldwide recognition through the early UFC events, where Royce Gracie demonstrated the effectiveness of BJJ against larger opponents from different martial arts backgrounds.'
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
                description: 'UFC champion who showcased BJJ to the world'
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
          joinButton: 'Join BJJ Classes',
          backButton: 'Back to Classes'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'The ultimate combat sport combining striking, grappling, and ground fighting'
        },
        overview: {
          title: 'The Ultimate Fighting Art',
          paragraphs: [
            'Mixed Martial Arts (MMA) is the most complete combat sport, combining techniques from boxing, kickboxing, wrestling, Brazilian Jiu-Jitsu, and other martial arts disciplines. It represents the evolution of combat sports into its most pure and effective form.',
            'Our MMA program at Sport Academy provides comprehensive training that develops well-rounded fighters capable of competing in all ranges of combat - standing, clinch, and ground.',
            'Whether your goal is professional competition, fitness, or self-defense, our MMA training will push your limits and develop both your physical and mental capabilities.'
          ]
        },
        techniques: {
          title: 'MMA Skill Sets',
          subtitle: 'Master all aspects of mixed martial arts combat'
        },
        history: {
          title: 'Evolution of MMA',
          paragraphs: [
            'Modern MMA emerged from vale tudo competitions in Brazil and early "no holds barred" contests. The sport gained mainstream recognition with the creation of the Ultimate Fighting Championship (UFC) in 1993.',
            'What started as a tournament to determine the most effective martial art has evolved into a sophisticated sport with highly trained athletes who are experts in multiple disciplines.'
          ],
          milestones: {
            title: 'MMA Milestones',
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
                description: 'MMA becomes legal in New York, completing US legalization'
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
              title: 'Self-Defense',
              description: 'Real-world applicable skills'
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
          subtitle: 'High-intensity MMA classes for all levels'
        },
        legends: {
          title: 'MMA Legends',
          subtitle: 'Icons who shaped the sport of mixed martial arts',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC Pioneer',
              description: 'Proved the effectiveness of BJJ in early UFC'
            },
            {
              name: 'Chuck Liddell',
              title: 'The Iceman',
              description: 'Brought MMA into mainstream popularity'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Longest reigning UFC middleweight champion'
            }
          ]
        },
        cta: {
          title: 'Enter the Octagon',
          description: 'Train like a professional fighter and discover your potential in mixed martial arts.',
          joinButton: 'Join MMA Training',
          backButton: 'Back to Classes'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Master the art of ground fighting, takedowns, and submission techniques'
        },
        overview: {
          title: 'The Art of Control',
          paragraphs: [
            'Grappling is the foundation of ground fighting, encompassing wrestling, submission holds, and positional control. It\'s an essential component of mixed martial arts and a complete martial art in its own right.',
            'Our grappling program focuses on both gi and no-gi techniques, teaching students how to control opponents, execute takedowns, and apply submissions effectively.',
            'Grappling develops incredible functional strength, flexibility, and mental toughness while providing practical self-defense skills.'
          ]
        },
        techniques: {
          title: 'Grappling Fundamentals',
          subtitle: 'Essential techniques for effective ground fighting'
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
                title: 'Drilling & Repetition',
                description: 'Perfect techniques through consistent practice'
              },
              {
                title: 'Live Rolling',
                description: 'Apply techniques in realistic sparring scenarios'
              }
            ]
          },
          conditioning: {
            title: 'Physical Conditioning',
            methods: [
              {
                title: 'Grappling-Specific Fitness',
                description: 'Build endurance for extended ground fighting'
              },
              {
                title: 'Flexibility Training',
                description: 'Improve mobility and injury prevention'
              },
              {
                title: 'Strength Development',
                description: 'Functional strength for grappling movements'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefits of Grappling',
          subtitle: 'Why grappling is essential for every martial artist',
          items: [
            {
              icon: '🤼',
              title: 'Ground Control',
              description: 'Dominate in ground fighting situations'
            },
            {
              icon: '💪',
              title: 'Functional Strength',
              description: 'Build real-world applicable strength'
            },
            {
              icon: '🧘',
              title: 'Mental Chess',
              description: 'Develop strategic thinking and problem-solving'
            },
            {
              icon: '🛡️',
              title: 'Self-Defense',
              description: 'Essential skills for personal protection'
            }
          ]
        },
        schedule: {
          title: 'Grappling Schedule',
          subtitle: 'Regular grappling classes for all skill levels'
        },
        legends: {
          title: 'Grappling Legends',
          subtitle: 'Masters who defined the art of grappling',
          grapplers: [
            {
              name: 'Frank Shamrock',
              title: 'The Legend',
              description: 'Pioneer of modern MMA grappling'
            },
            {
              name: 'Kazushi Sakuraba',
              title: 'The Gracie Hunter',
              description: 'Master of catch wrestling and submissions'
            },
            {
              name: 'Josh Barnett',
              title: 'The Warmaster',
              description: 'Catch wrestling and submission specialist'
            }
          ]
        },
        cta: {
          title: 'Master the Ground Game',
          description: 'Develop superior grappling skills and become a complete martial artist.',
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
        subtitle: 'Elite MMA, Brazilian Jiu-Jitsu und Grappling Training in Campo Tures und Bruneck. Professionelles Coaching von zertifizierten Trainern.'
      },
      welcome: {
        title: 'Willkommen bei Sport Academy',
        description: 'Wo Leidenschaft auf Präzision trifft. Unsere Akademie bietet Weltklasse-Training in Mixed Martial Arts, Brazilian Jiu-Jitsu und Grappling an zwei Premium-Standorten in Südtirol.'
      },
      stats: {
        yearsOfExcellence: 'Jahre der Exzellenz',
        yearsDescription: 'Kämpfer schmieden seit 2017',
        trainingLocations: 'Trainingsstandorte',
        locationsDescription: 'Campo Tures & Bruneck',
        trainingPrograms: 'Trainingsprogramme',
        programsDescription: 'Vom Anfänger zur Elite',
        exploreClasses: 'Unsere Kurse Entdecken'
      },
      trainLikeFighter: {
        title: 'Trainiere Wie Ein Kämpfer',
        subtitle: 'Meistere die Kampfkunst durch unsere umfassenden Trainingsprogramme'
      },
      mma: {
        description: 'Komplettes Mixed Martial Arts Training, das Schlag-, Grappling- und Bodenkampftechniken für das ultimative Kampferlebnis kombiniert.'
      },
      bjj: {
        description: 'Meistere die sanfte Kunst des Brazilian Jiu-Jitsu, die sich auf Hebelwirkung, Technik und mentale Strategie statt roher Kraft konzentriert.'
      },
      grappling: {
        description: 'Entwickle überlegene Bodenkontrolle, Submission-Techniken und Wrestling-Fähigkeiten in unserem umfassenden Grappling-Programm.'
      },
      getStarted: {
        title: 'Bereit Anzufangen?',
        subtitle: 'Wähle deinen Weg zur Kampfkunst-Exzellenz'
      },
      quickLinks: {
        viewClasses: 'Kurse Ansehen',
        viewClassesDesc: 'Entdecke unsere Trainingsprogramme',
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
        description: 'Entdecke unser umfassendes Angebot an Kampfkunstprogrammen, die für alle Fähigkeitsstufen konzipiert sind, von Anfängern bis zu fortgeschrittenen Praktizierenden.'
      },
      mma: {
        title: 'Mixed Martial Arts',
        description: 'Erlebe den ultimativen Kampfsport, der Schlagen, Grappling und Bodenkampf kombiniert. Unser MMA-Programm integriert Techniken aus Boxen, Kickboxen, Wrestling und Brazilian Jiu-Jitsu.',
        features: [
          'Stand-up Schlagtechniken',
          'Takedowns und Wrestling',
          'Ground and Pound',
          'Submission-Verteidigung',
          'Käfigarbeit und Clinch-Kampf',
          'Cardio und Konditionierung'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Meistere die sanfte Kunst, die Technik über Kraft betont. Lerne, Gegner durch Hebelwirkung, Timing und richtige Technik zu kontrollieren und zu unterwerfen.',
        features: [
          'Guard-Arbeit und Sweeps',
          'Submission-Techniken',
          'Positionskontrolle',
          'Escape-Techniken',
          'Selbstverteidigungsanwendungen',
          'Wettkampfvorbereitung'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Entwickle überlegene Bodenkampffähigkeiten durch unser umfassendes Grappling-Programm, das sich auf Takedowns, Kontrolle und Submissions konzentriert.',
        features: [
          'Wrestling-Takedowns',
          'Bodenkontrollpositionen',
          'Submission-Grappling',
          'No-Gi-Techniken',
          'Scrambles und Übergänge',
          'Wettkampftraining'
        ]
      },
      kidsBjj: {
        title: 'Kinder BJJ',
        description: 'Führe deine Kinder in die Grundlagen des Brazilian Jiu-Jitsu in einer sicheren, spaßigen und strukturierten Umgebung ein, die Selbstvertrauen und Disziplin aufbaut.',
        features: [
          'Grundlegende BJJ-Techniken',
          'Selbstverteidigungsfähigkeiten',
          'Disziplin und Respekt',
          'Körperliche Fitness',
          'Soziale Interaktion',
          'Selbstvertrauen aufbauen'
        ]
      },
      kidsGrappling: {
        title: 'Kinder Grappling',
        description: 'Jugendfokussiertes Grappling-Programm, das grundlegende Wrestling- und Submission-Grappling-Techniken lehrt und gleichzeitig körperliche Fitness und mentale Stärke fördert.',
        features: [
          'Wrestling-Grundlagen',
          'Grundlegende Submissions',
          'Körperliche Konditionierung',
          'Mentale Stärke',
          'Teamwork-Fähigkeiten',
          'Wettkampfvorbereitung'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Baue eine starke Grundlage im Wrestling mit Fokus auf Takedowns, Kontrolle und Konditionierung auf. Essentiell für MMA- und Grappling-Erfolg.',
        features: [
          'Single und Double Leg Takedowns',
          'Hip Tosses und Würfe',
          'Sprawls und Verteidigungstechniken',
          'Top Control und Riding',
          'Konditionierung und Drilling',
          'Wettkampftechniken'
        ]
      },
      whatYouLearn: 'Was Du Lernst',
      cta: {
        title: 'Bereit Mit Dem Training Zu Beginnen?',
        description: 'Tritt unserer Gemeinschaft engagierter Kampfkünstler bei und beginne heute deine Reise.'
      }
    },
    coaches: {
      hero: {
        title: 'Unsere Trainer',
        description: 'Lerne unsere Weltklasse-Instruktoren kennen, die jahrelange Erfahrung, technische Expertise und Leidenschaft für Kampfkunst in jede Trainingseinheit einbringen.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Cheftrainer & Gründer',
        background: 'Mit über 15 Jahren Kampfkunsterfahrung ist Matteo ein zertifizierter Brazilian Jiu-Jitsu Schwarzgurt und erfolgreicher MMA-Kämpfer. Er gründete Sport Academy mit der Vision, Weltklasse-Kampfkunsttraining nach Südtirol zu bringen.',
        specializations: [
          'Brazilian Jiu-Jitsu (Schwarzgurt)',
          'Mixed Martial Arts',
          'Grappling & Wrestling',
          'Wettkampf-Coaching',
          'Selbstverteidigungssysteme'
        ],
        achievements: [
          'BJJ Schwarzgurt unter renommierter Linie',
          'Professioneller MMA-Kämpfer',
          'Mehrere regionale Grappling-Meisterschaften',
          'Zertifizierter Instruktor in verschiedenen Disziplinen',
          '8+ Jahre Coaching-Erfahrung'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Senior Instruktor',
        background: 'Christian bringt eine Fülle von Wissen in Schlagkünsten und Grappling zur Sport Academy. Seine technische Präzision und Lehrfähigkeit machen ihn zu einem unschätzbaren Wert für unser Trainerteam.',
        specializations: [
          'Schlagkünste & Boxen',
          'Kickboxen & Muay Thai',
          'Wrestling-Techniken',
          'MMA-Integration',
          'Jugendprogramme'
        ],
        achievements: [
          'Zertifizierter Schlagkunst-Instruktor',
          'Regionaler Box-Champion',
          'Wrestling-Wettkampfhintergrund',
          'Jugendentwicklungsspezialist',
          '6+ Jahre Coaching-Erfahrung'
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
          description: 'Jeder Schüler erhält persönliche Aufmerksamkeit und Coaching, das auf seine spezifischen Ziele und sein Fähigkeitsniveau zugeschnitten ist.'
        },
        respect: {
          title: 'Respekt & Disziplin',
          description: 'Wir vermitteln Werte von Respekt, Disziplin und Sportlichkeit, die weit über die Trainingsmatten hinausgehen.'
        }
      },
      cta: {
        title: 'Trainiere Mit Den Besten',
        description: 'Erlebe Weltklasse-Coaching und bringe deine Kampfkunstreise auf die nächste Stufe.'
      }
    },
    schedule: {
      hero: {
        title: 'Trainingsplan',
        description: 'Finde die perfekten Trainingszeiten, die zu deinem Zeitplan passen, an unseren beiden Standorten in Campo Tures und Bruneck.'
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
        gi: 'BJJ-Kurse erfordern Gi (Uniform)',
        noGi: 'Grappling-Kurse sind No-Gi'
      },
      membershipBenefits: 'Mitgliedschaftsvorteile',
      benefits: {
        allClasses: 'Zugang zu allen Kursen',
        openMat: 'Kostenlose freie Trainingseinheiten',
        bothLocations: 'Training an beiden Standorten',
        personalTraining: 'Ermäßigtes Personaltraining'
      },
      cta: {
        title: 'Bereit Für Einen Kurs?',
        description: 'Buche deinen Platz in unserer nächsten Trainingseinheit und beginne deine Kampfkunstreise.'
      }
    },
    membership: {
      hero: {
        title: 'Mitgliedschaftspläne',
        description: 'Wähle das perfekte Trainingspaket, das zu deinen Zielen, deinem Zeitplan und deinem Budget passt. Alle Mitgliedschaften beinhalten Zugang zu beiden Standorten.'
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
        description: 'Intensives BJJ-Training mit Zugang zu allen Gi- und No-Gi-Kursen'
      },
      adults: 'Erwachsene',
      students: 'Studenten',
      month: 'Monat',
      whatsIncluded: 'Was Enthalten Ist',
      mainIncludes: [
        'Unbegrenzter Zugang zu allen Kursen',
        'Training an beiden Standorten',
        'Freie Trainingseinheiten',
        'Anfängerfreundliche Anleitung',
        'Wettkampfteam-Zugang',
        'Ausrüstungslagerung'
      ],
      summerIncludes: [
        'Alle Sommerkurse',
        'Zugang zu beiden Standorten',
        'Freie Trainingseinheiten',
        'Flexible Terminplanung',
        'Keine langfristige Verpflichtung'
      ],
      bjjIncludes: [
        'Alle BJJ-Kurse (Gi & No-Gi)',
        'Zugang zu beiden Standorten',
        'Freie Trainingseinheiten',
        'Wettkampfvorbereitung',
        'Gürtel-Fortschrittssystem',
        'Spezialisierte BJJ-Seminare'
      ],
      selectMainSeason: 'Hauptsaison Wählen',
      selectSummerSeason: 'Sommersaison Wählen',
      selectBjjOnly: 'BJJ Programm Wählen',
      additionalServices: {
        title: 'Zusätzliche Dienstleistungen',
        description: 'Verbessere dein Training mit unseren spezialisierten Programmen und persönlichen Coaching-Optionen.'
      },
      personalTraining: {
        title: 'Personaltraining',
        description: 'Eins-zu-eins Coaching, das auf deine spezifischen Ziele und Bedürfnisse zugeschnitten ist.',
        price: '€60',
        duration: 'pro Einheit'
      },
      competitionPrep: {
        title: 'Wettkampfvorbereitung',
        description: 'Spezialisiertes Training für bevorstehende Wettkämpfe und Turniere.',
        price: '€80',
        duration: 'pro Einheit'
      },
      seminars: {
        title: 'Seminare',
        description: 'Spezielle Workshops mit Gastinstruktoren und fortgeschrittenen Techniken.',
        price: '€40',
        duration: 'pro Seminar'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        seasons: {
          question: 'Was ist der Unterschied zwischen den Saisons?',
          answer: 'Die Hauptsaison (September-Juni) bietet unser komplettes Curriculum mit strukturiertem Fortschritt. Die Sommersaison ist flexibler mit verdichtetem Training, perfekt um Fähigkeiten zu erhalten oder Kampfkunst auszuprobieren.'
        },
        locations: {
          question: 'Kann ich an beiden Standorten trainieren?',
          answer: 'Ja! Alle Mitgliedschaften beinhalten Zugang zu Kursen an beiden Standorten Campo Tures und Bruneck, was dir maximale Flexibilität in deinem Trainingsplan gibt.'
        },
        trial: {
          question: 'Bietet ihr Probestunden an?',
          answer: 'Absolut! Wir bieten eine kostenlose Probestunde für neue Schüler an. Kontaktiere uns, um deine Probestunde zu planen und unser Training aus erster Hand zu erleben.'
        },
        equipment: {
          question: 'Welche Ausrüstung brauche ich?',
          answer: 'Für Anfänger nur bequeme Trainingskleidung. Wir stellen Grundausrüstung für Probestunden zur Verfügung. Mit dem Fortschritt brauchst du einen Gi für BJJ-Kurse und entsprechende Ausrüstung für andere Disziplinen.'
        }
      },
      cta: {
        title: 'Beginne Deine Reise Heute',
        description: 'Wähle deine Mitgliedschaft und tritt unserer Gemeinschaft engagierter Kampfkünstler bei.'
      }
    },
    contact: {
      hero: {
        title: 'Kontakt',
        description: 'Bereit, deine Kampfkunstreise zu beginnen? Nimm Kontakt mit uns auf, um mehr über unsere Programme zu erfahren, eine Probestunde zu vereinbaren oder unsere Einrichtungen zu besuchen.'
      },
      getInTouch: {
        title: 'Kontakt Aufnehmen',
        subtitle: 'Verschiedene Wege, um mit Sport Academy in Verbindung zu treten'
      },
      callUs: 'Anrufen',
      instagram: 'Instagram',
      locations: {
        title: 'Unsere Standorte',
        subtitle: 'Zwei praktische Standorte in Südtirol'
      },
      address: 'Adresse',
      trainingSchedule: 'Trainingsplan',
      visitRequirements: {
        title: 'Zum Ersten Mal Hier?',
        subtitle: 'Alles was du für deinen ersten Besuch wissen musst'
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
        'Alle Trainingsausrüstung für Probestunden',
        'Saubere, desinfizierte Einrichtungen',
        'Professionelle Anleitung',
        'Einladende Gemeinschaftsatmosphäre'
      ],
      specialInstructions: 'Spezielle Anweisungen',
      instructions: {
        age: 'Altersanforderungen: 16+ für Erwachsenenkurse, Kinderprogramme verfügbar',
        health: 'Gesundheit: Bitte informiere uns über Verletzungen oder Gesundheitszustände',
        equipment: 'Ausrüstung: Grundausrüstung für ersten Besuch bereitgestellt',
        payment: 'Zahlung: Bar-, Karten- und Online-Zahlungen akzeptiert'
      },
      cta: {
        title: 'Bereit Anzufangen?',
        description: 'Mache den ersten Schritt zu deiner Kampfkunstreise. Kontaktiere uns heute, um loszulegen.'
      }
    },
    disciplines: {
      bjj: {
        breadcrumb: 'Brazilian Jiu-Jitsu',
        title: 'Brazilian Jiu-Jitsu',
        hero: {
          subtitle: 'Meistere die sanfte Kunst, die Technik, Hebelwirkung und Strategie über rohe Kraft betont'
        },
        overview: {
          title: 'Die Sanfte Kunst',
          paragraphs: [
            'Brazilian Jiu-Jitsu (BJJ) ist eine Kampfkunst und ein Kampfsport, der sich auf Bodenkampf und Submission-Griffe konzentriert. Entwickelt aus traditionellem japanischen Jujitsu und Judo, betont BJJ Technik und Hebelwirkung, wodurch kleinere Praktizierende größere Gegner überwinden können.',
            'Bei Sport Academy ist unser BJJ-Programm darauf ausgelegt, Schülern die grundlegenden Prinzipien dieser schönen Kunst zu lehren und gleichzeitig körperliche Fitness, mentale Stärke und Selbstvertrauen aufzubauen.',
            'Ob du ein kompletter Anfänger oder ein erfahrener Grappler bist, unser strukturiertes Curriculum und unsere Expertenanleitung werden dir helfen, deine Fähigkeiten zu entwickeln und deine Ziele auf den Matten zu erreichen.'
          ]
        },
        techniques: {
          title: 'Kern-BJJ-Techniken',
          subtitle: 'Meistere die grundlegenden Techniken, die das Fundament des Brazilian Jiu-Jitsu bilden'
        },
        beltSystem: {
          title: 'BJJ Gürtel-System',
          subtitle: 'Fortschritt durch das traditionelle Brazilian Jiu-Jitsu Ranking-System',
          philosophy: {
            title: 'Die Reise der Gürtel',
            description: 'Im Brazilian Jiu-Jitsu repräsentiert Gürtel-Fortschritt nicht nur technische Fähigkeiten, sondern auch Charakterentwicklung, Ausdauer und Hingabe zur Kunst. Jede Gürtelstufe dauert typischerweise 2-3 Jahre, was BJJ zu einem der respektiertesten Ranking-Systeme in den Kampfkünsten macht.'
          }
        },
        history: {
          title: 'Geschichte des BJJ',
          paragraphs: [
            'Brazilian Jiu-Jitsu wurde im frühen 20. Jahrhundert entwickelt, als der japanische Judoka Mitsuyo Maeda die Gracie-Familie in Brasilien unterrichtete. Die Gracies, besonders Helio Gracie, adaptierten und verfeinerten die Techniken, um das zu schaffen, was wir heute als Brazilian Jiu-Jitsu kennen.',
            'Die Kunst erlangte weltweite Anerkennung durch die frühen UFC-Events, wo Royce Gracie die Effektivität von BJJ gegen größere Gegner aus verschiedenen Kampfkunsthintergründen demonstrierte.'
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
                description: 'UFC-Champion, der BJJ der Welt zeigte'
              }
            ]
          }
        },
        schedule: {
          title: 'BJJ Trainingsplan',
          subtitle: 'Tritt unseren regelmäßigen BJJ-Kursen an beiden Standorten bei'
        },
        cta: {
          title: 'Beginne Deine BJJ-Reise',
          description: 'Erlebe die sanfte Kunst, die Millionen von Leben weltweit verändert hat.',
          joinButton: 'BJJ-Kursen Beitreten',
          backButton: 'Zurück zu Kursen'
        }
      },
      mma: {
        title: 'Mixed Martial Arts',
        hero: {
          subtitle: 'Der ultimative Kampfsport, der Schlagen, Grappling und Bodenkampf kombiniert'
        },
        overview: {
          title: 'Die Ultimative Kampfkunst',
          paragraphs: [
            'Mixed Martial Arts (MMA) ist der vollständigste Kampfsport, der Techniken aus Boxen, Kickboxen, Wrestling, Brazilian Jiu-Jitsu und anderen Kampfkunstdisziplinen kombiniert. Es repräsentiert die Evolution der Kampfsportarten in ihre reinste und effektivste Form.',
            'Unser MMA-Programm bei Sport Academy bietet umfassendes Training, das vielseitige Kämpfer entwickelt, die in allen Kampfbereichen konkurrieren können - stehend, Clinch und Boden.',
            'Ob dein Ziel professioneller Wettkampf, Fitness oder Selbstverteidigung ist, unser MMA-Training wird deine Grenzen verschieben und sowohl deine körperlichen als auch mentalen Fähigkeiten entwickeln.'
          ]
        },
        techniques: {
          title: 'MMA Fähigkeiten',
          subtitle: 'Meistere alle Aspekte des Mixed Martial Arts Kampfes'
        },
        history: {
          title: 'Evolution des MMA',
          paragraphs: [
            'Modernes MMA entstand aus Vale Tudo-Wettkämpfen in Brasilien und frühen "No Holds Barred"-Contests. Der Sport erlangte Mainstream-Anerkennung mit der Schaffung der Ultimate Fighting Championship (UFC) 1993.',
            'Was als Turnier begann, um die effektivste Kampfkunst zu bestimmen, hat sich zu einem anspruchsvollen Sport mit hochtrainierten Athleten entwickelt, die Experten in mehreren Disziplinen sind.'
          ],
          milestones: {
            title: 'MMA Meilensteine',
            events: [
              {
                year: '1993',
                description: 'Erstes UFC-Event zeigt verschiedene Kampfkünste'
              },
              {
                year: '2001',
                description: 'Einheitliche MMA-Regeln etabliert'
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
              description: 'Realitätsnahe anwendbare Fähigkeiten'
            },
            {
              icon: '⚡',
              title: 'Explosive Kraft',
              description: 'Baue Stärke und Geschwindigkeit auf'
            }
          ]
        },
        schedule: {
          title: 'MMA Trainingsplan',
          subtitle: 'Hochintensive MMA-Kurse für alle Stufen'
        },
        legends: {
          title: 'MMA-Legenden',
          subtitle: 'Ikonen, die den Sport Mixed Martial Arts prägten',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'UFC-Pionier',
              description: 'Bewies die Effektivität von BJJ in frühen UFC'
            },
            {
              name: 'Chuck Liddell',
              title: 'The Iceman',
              description: 'Brachte MMA in die Mainstream-Popularität'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Längster regierender UFC-Mittelgewichts-Champion'
            }
          ]
        },
        cta: {
          title: 'Betritt Das Octagon',
          description: 'Trainiere wie ein professioneller Kämpfer und entdecke dein Potenzial in Mixed Martial Arts.',
          joinButton: 'MMA-Training Beitreten',
          backButton: 'Zurück zu Kursen'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Meistere die Kunst des Bodenkampfes, Takedowns und Submission-Techniken'
        },
        overview: {
          title: 'Die Kunst der Kontrolle',
          paragraphs: [
            'Grappling ist das Fundament des Bodenkampfes und umfasst Wrestling, Submission-Griffe und Positionskontrolle. Es ist ein wesentlicher Bestandteil der Mixed Martial Arts und eine vollständige Kampfkunst für sich.',
            'Unser Grappling-Programm konzentriert sich sowohl auf Gi- als auch No-Gi-Techniken und lehrt Schülern, wie sie Gegner kontrollieren, Takedowns ausführen und Submissions effektiv anwenden.',
            'Grappling entwickelt unglaubliche funktionale Stärke, Flexibilität und mentale Stärke und bietet gleichzeitig praktische Selbstverteidigungsfähigkeiten.'
          ]
        },
        techniques: {
          title: 'Grappling-Grundlagen',
          subtitle: 'Wesentliche Techniken für effektiven Bodenkampf'
        },
        methodology: {
          title: 'Trainingsmethodik',
          subtitle: 'Unser systematischer Ansatz zur Grappling-Exzellenz',
          technical: {
            title: 'Technische Entwicklung',
            methods: [
              {
                title: 'Position vor Submission',
                description: 'Meistere Kontrollpositionen vor Submission-Versuchen'
              },
              {
                title: 'Drilling & Wiederholung',
                description: 'Perfektioniere Techniken durch konsequente Übung'
              },
              {
                title: 'Live Rolling',
                description: 'Wende Techniken in realistischen Sparring-Szenarien an'
              }
            ]
          },
          conditioning: {
            title: 'Körperliche Konditionierung',
            methods: [
              {
                title: 'Grappling-Spezifische Fitness',
                description: 'Baue Ausdauer für ausgedehnten Bodenkampf auf'
              },
              {
                title: 'Flexibilitätstraining',
                description: 'Verbessere Mobilität und Verletzungsprävention'
              },
              {
                title: 'Kraftentwicklung',
                description: 'Funktionale Kraft für Grappling-Bewegungen'
              }
            ]
          }
        },
        benefits: {
          title: 'Vorteile des Grapplings',
          subtitle: 'Warum Grappling für jeden Kampfkünstler essentiell ist',
          items: [
            {
              icon: '🤼',
              title: 'Bodenkontrolle',
              description: 'Dominiere in Bodenkampfsituationen'
            },
            {
              icon: '💪',
              title: 'Funktionale Stärke',
              description: 'Baue realitätsnahe anwendbare Stärke auf'
            },
            {
              icon: '🧘',
              title: 'Mentales Schach',
              description: 'Entwickle strategisches Denken und Problemlösung'
            },
            {
              icon: '🛡️',
              title: 'Selbstverteidigung',
              description: 'Wesentliche Fähigkeiten für persönlichen Schutz'
            }
          ]
        },
        schedule: {
          title: 'Grappling-Plan',
          subtitle: 'Regelmäßige Grappling-Kurse für alle Fähigkeitsstufen'
        },
        legends: {
          title: 'Grappling-Legenden',
          subtitle: 'Meister, die die Kunst des Grapplings definierten',
          grapplers: [
            {
              name: 'Frank Shamrock',
              title: 'The Legend',
              description: 'Pionier des modernen MMA-Grapplings'
            },
            {
              name: 'Kazushi Sakuraba',
              title: 'The Gracie Hunter',
              description: 'Meister des Catch Wrestling und Submissions'
            },
            {
              name: 'Josh Barnett',
              title: 'The Warmaster',
              description: 'Catch Wrestling und Submission-Spezialist'
            }
          ]
        },
        cta: {
          title: 'Meistere Das Bodenspiel',
          description: 'Entwickle überlegene Grappling-Fähigkeiten und werde ein kompletter Kampfkünstler.',
          joinButton: 'Grappling-Kursen Beitreten',
          backButton: 'Zurück zu Kursen'
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
      instantConfirmation: 'Conferma istantanea'
    },
    home: {
      hero: {
        title: 'SPORT ACADEMY',
        subtitle: 'Allenamento d\'élite di MMA, Brazilian Jiu-Jitsu e Grappling a Campo Tures e Brunico. Coaching professionale da istruttori certificati.'
      },
      welcome: {
        title: 'Benvenuti a Sport Academy',
        description: 'Dove la passione incontra la precisione. La nostra accademia offre allenamento di classe mondiale in Arti Marziali Miste, Brazilian Jiu-Jitsu e Grappling in due location premium in Alto Adige.'
      },
      stats: {
        yearsOfExcellence: 'Anni di Eccellenza',
        yearsDescription: 'Forgiamo combattenti dal 2017',
        trainingLocations: 'Location di Allenamento',
        locationsDescription: 'Campo Tures & Brunico',
        trainingPrograms: 'Programmi di Allenamento',
        programsDescription: 'Dal principiante all\'élite',
        exploreClasses: 'Esplora i Nostri Corsi'
      },
      trainLikeFighter: {
        title: 'Allenati Come Un Combattente',
        subtitle: 'Padroneggia l\'arte del combattimento attraverso i nostri programmi di allenamento completi'
      },
      mma: {
        description: 'Allenamento completo di arti marziali miste che combina tecniche di striking, grappling e combattimento a terra per l\'esperienza di combattimento definitiva.'
      },
      bjj: {
        description: 'Padroneggia l\'arte gentile del Brazilian Jiu-Jitsu, concentrandoti su leva, tecnica e strategia mentale piuttosto che forza bruta.'
      },
      grappling: {
        description: 'Sviluppa controllo superiore a terra, tecniche di sottomissione e abilità di wrestling nel nostro programma di grappling completo.'
      },
      getStarted: {
        title: 'Pronto per Iniziare?',
        subtitle: 'Scegli il tuo percorso verso l\'eccellenza nelle arti marziali'
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
        description: 'Scopri la nostra gamma completa di programmi di arti marziali progettati per tutti i livelli di abilità, dai principianti ai praticanti avanzati.'
      },
      mma: {
        title: 'Arti Marziali Miste',
        description: 'Sperimenta lo sport da combattimento definitivo che combina striking, grappling e combattimento a terra. Il nostro programma MMA integra tecniche da boxe, kickboxing, wrestling e Brazilian Jiu-Jitsu.',
        features: [
          'Tecniche di striking in piedi',
          'Takedown e wrestling',
          'Ground and pound',
          'Difesa da sottomissioni',
          'Lavoro in gabbia e clinch fighting',
          'Cardio e condizionamento'
        ]
      },
      bjj: {
        title: 'Brazilian Jiu-Jitsu',
        description: 'Padroneggia l\'arte gentile che enfatizza la tecnica sulla forza. Impara a controllare e sottomettere gli avversari attraverso leva, timing e tecnica appropriata.',
        features: [
          'Lavoro di guardia e sweep',
          'Tecniche di sottomissione',
          'Controllo posizionale',
          'Tecniche di fuga',
          'Applicazioni di autodifesa',
          'Preparazione per competizioni'
        ]
      },
      grappling: {
        title: 'Grappling',
        description: 'Sviluppa abilità superiori di combattimento a terra attraverso il nostro programma di grappling completo che si concentra su takedown, controllo e sottomissioni.',
        features: [
          'Takedown di wrestling',
          'Posizioni di controllo a terra',
          'Submission grappling',
          'Tecniche no-gi',
          'Scramble e transizioni',
          'Allenamento per competizioni'
        ]
      },
      kidsBjj: {
        title: 'BJJ Bambini',
        description: 'Introduci i tuoi bambini ai fondamentali del Brazilian Jiu-Jitsu in un ambiente sicuro, divertente e strutturato che costruisce fiducia e disciplina.',
        features: [
          'Tecniche base di BJJ',
          'Abilità di autodifesa',
          'Disciplina e rispetto',
          'Fitness fisico',
          'Interazione sociale',
          'Costruzione della fiducia'
        ]
      },
      kidsGrappling: {
        title: 'Grappling Bambini',
        description: 'Programma di grappling focalizzato sui giovani che insegna tecniche fondamentali di wrestling e submission grappling promuovendo fitness fisico e resistenza mentale.',
        features: [
          'Fondamentali di wrestling',
          'Sottomissioni base',
          'Condizionamento fisico',
          'Resistenza mentale',
          'Abilità di squadra',
          'Preparazione per competizioni'
        ]
      },
      wrestling: {
        title: 'Wrestling',
        description: 'Costruisci una base solida nel wrestling con focus su takedown, controllo e condizionamento. Essenziale per il successo in MMA e grappling.',
        features: [
          'Takedown single e double leg',
          'Hip toss e proiezioni',
          'Sprawl e tecniche difensive',
          'Controllo dall\'alto e riding',
          'Condizionamento e drilling',
          'Tecniche da competizione'
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
        title: 'I Nostri Allenatori',
        description: 'Incontra i nostri istruttori di classe mondiale che portano anni di esperienza, competenza tecnica e passione per le arti marziali in ogni sessione di allenamento.'
      },
      matteo: {
        name: 'Matteo Parolin',
        title: 'Capo Allenatore & Fondatore',
        background: 'Con oltre 15 anni di esperienza nelle arti marziali, Matteo è una cintura nera certificata di Brazilian Jiu-Jitsu e un combattente MMA di successo. Ha fondato Sport Academy con la visione di portare allenamento di arti marziali di classe mondiale in Alto Adige.',
        specializations: [
          'Brazilian Jiu-Jitsu (Cintura Nera)',
          'Arti Marziali Miste',
          'Grappling & Wrestling',
          'Coaching per Competizioni',
          'Sistemi di Autodifesa'
        ],
        achievements: [
          'Cintura Nera BJJ sotto lignaggio rinomato',
          'Combattente MMA professionista',
          'Campionati regionali di grappling multipli',
          'Istruttore certificato in discipline diverse',
          '8+ anni di esperienza di coaching'
        ]
      },
      christian: {
        name: 'Christian Zecchetto',
        title: 'Istruttore Senior',
        background: 'Christian porta una ricchezza di conoscenza nelle arti di striking e grappling a Sport Academy. La sua precisione tecnica e capacità di insegnamento lo rendono una risorsa inestimabile per il nostro team di coaching.',
        specializations: [
          'Arti di Striking & Boxe',
          'Kickboxing & Muay Thai',
          'Tecniche di Wrestling',
          'Integrazione MMA',
          'Programmi Giovanili'
        ],
        achievements: [
          'Istruttore certificato di arti di striking',
          'Campione regionale di boxe',
          'Background di competizione nel wrestling',
          'Specialista nello sviluppo giovanile',
          '6+ anni di esperienza di coaching'
        ]
      },
      background: 'Background',
      specializations: 'Specializzazioni',
      achievements: 'Risultati',
      philosophy: {
        title: 'La Nostra Filosofia di Coaching',
        technical: {
          title: 'Eccellenza Tecnica',
          description: 'Ci concentriamo sulla tecnica appropriata e sui fondamentali, assicurando che ogni studente costruisca una base solida per il successo a lungo termine.'
        },
        individual: {
          title: 'Crescita Individuale',
          description: 'Ogni studente riceve attenzione personalizzata e coaching su misura per i loro obiettivi specifici e livello di abilità.'
        },
        respect: {
          title: 'Rispetto & Disciplina',
          description: 'Instilliamo valori di rispetto, disciplina e sportività che si estendono ben oltre i tappeti di allenamento.'
        }
      },
      cta: {
        title: 'Allenati con i Migliori',
        description: 'Sperimenta coaching di classe mondiale e porta il tuo viaggio nelle arti marziali al livello successivo.'
      }
    },
    schedule: {
      hero: {
        title: 'Orario di Allenamento',
        description: 'Trova gli orari di allenamento perfetti che si adattano al tuo programma nelle nostre due location a Campo Tures e Brunico.'
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
      classGuidelines: 'Linee Guida del Corso',
      guidelines: {
        arrive: 'Arriva 10 minuti prima per il riscaldamento',
        water: 'Porta bottiglia d\'acqua e asciugamano',
        gi: 'I corsi BJJ richiedono gi (uniforme)',
        noGi: 'I corsi di grappling sono no-gi'
      },
      membershipBenefits: 'Benefici dell\'Abbonamento',
      benefits: {
        allClasses: 'Accesso a tutti i corsi',
        openMat: 'Sessioni di tappeto libero gratuite',
        bothLocations: 'Allenamento in entrambe le location',
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
        description: 'Scegli il pacchetto di allenamento perfetto che si adatta ai tuoi obiettivi, programma e budget. Tutti gli abbonamenti includono accesso a entrambe le location.'
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
        description: 'Allenamento BJJ intensivo con accesso a tutti i corsi gi e no-gi'
      },
      adults: 'Adulti',
      students: 'Studenti',
      month: 'mese',
      whatsIncluded: 'Cosa è Incluso',
      mainIncludes: [
        'Accesso illimitato a tutti i corsi',
        'Allenamento in entrambe le location',
        'Sessioni di tappeto libero',
        'Istruzione adatta ai principianti',
        'Accesso al team di competizione',
        'Deposito attrezzature'
      ],
      summerIncludes: [
        'Tutti i corsi estivi',
        'Accesso a entrambe le location',
        'Sessioni di tappeto libero',
        'Programmazione flessibile',
        'Nessun impegno a lungo termine'
      ],
      bjjIncludes: [
        'Tutti i corsi BJJ (gi & no-gi)',
        'Accesso a entrambe le location',
        'Sessioni di tappeto libero',
        'Preparazione per competizioni',
        'Sistema di progressione delle cinture',
        'Seminari BJJ specializzati'
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
        price: '€60',
        duration: 'per sessione'
      },
      competitionPrep: {
        title: 'Preparazione Competizioni',
        description: 'Allenamento specializzato per competizioni e tornei imminenti.',
        price: '€80',
        duration: 'per sessione'
      },
      seminars: {
        title: 'Seminari',
        description: 'Workshop speciali con istruttori ospiti e tecniche avanzate.',
        price: '€40',
        duration: 'per seminario'
      },
      faq: {
        title: 'Domande Frequenti',
        seasons: {
          question: 'Qual è la differenza tra le stagioni?',
          answer: 'La stagione principale (Settembre-Giugno) offre il nostro curriculum completo con progressione strutturata. La stagione estiva è più flessibile con allenamento condensato perfetto per mantenere le abilità o provare le arti marziali.'
        },
        locations: {
          question: 'Posso allenarmi in entrambe le location?',
          answer: 'Sì! Tutti gli abbonamenti includono accesso ai corsi in entrambe le location Campo Tures e Brunico, dandoti massima flessibilità nel tuo programma di allenamento.'
        },
        trial: {
          question: 'Offrite lezioni di prova?',
          answer: 'Assolutamente! Offriamo una lezione di prova gratuita per nuovi studenti. Contattaci per programmare la tua prova e sperimentare il nostro allenamento in prima persona.'
        },
        equipment: {
          question: 'Che attrezzatura mi serve?',
          answer: 'Per i principianti, solo abbigliamento da allenamento comodo. Forniamo attrezzatura base per le lezioni di prova. Man mano che progredisci, avrai bisogno di un gi per i corsi BJJ e attrezzatura appropriata per altre discipline.'
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
        description: 'Pronto per iniziare il tuo viaggio nelle arti marziali? Mettiti in contatto con noi per saperne di più sui nostri programmi, programmare una lezione di prova o visitare le nostre strutture.'
      },
      getInTouch: {
        title: 'Mettiti in Contatto',
        subtitle: 'Modi diversi per connettersi con Sport Academy'
      },
      callUs: 'Chiamaci',
      instagram: 'Instagram',
      locations: {
        title: 'Le Nostre Location',
        subtitle: 'Due location convenienti che servono l\'Alto Adige'
      },
      address: 'Indirizzo',
      trainingSchedule: 'Orario di Allenamento',
      visitRequirements: {
        title: 'Prima Volta in Visita?',
        subtitle: 'Tutto quello che devi sapere per la tua prima visita'
      },
      firstTimeVisitors: 'Visitatori per la Prima Volta',
      whatToBring: 'Cosa Portare',
      bring: [
        'Abbigliamento da allenamento comodo',
        'Bottiglia d\'acqua',
        'Asciugamano',
        'Atteggiamento positivo e voglia di imparare'
      ],
      whatWeProvide: 'Cosa Forniamo',
      provide: [
        'Tutta l\'attrezzatura di allenamento per le lezioni di prova',
        'Strutture pulite e sanificate',
        'Istruzione professionale',
        'Ambiente comunitario accogliente'
      ],
      specialInstructions: 'Istruzioni Speciali',
      instructions: {
        age: 'Requisiti di Età: 16+ per corsi adulti, programmi bambini disponibili',
        health: 'Salute: Per favore informaci di eventuali infortuni o condizioni di salute',
        equipment: 'Attrezzatura: Attrezzatura base fornita per la prima visita',
        payment: 'Pagamento: Contanti, carta e pagamenti online accettati'
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
          subtitle: 'Padroneggia l\'arte gentile che enfatizza tecnica, leva e strategia sulla forza bruta'
        },
        overview: {
          title: 'L\'Arte Gentile',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu (BJJ) è un\'arte marziale e sport da combattimento che si concentra sul combattimento a terra e le prese di sottomissione. Sviluppato dal jujitsu giapponese tradizionale e dal judo, il BJJ enfatizza tecnica e leva, permettendo ai praticanti più piccoli di superare avversari più grandi.',
            'A Sport Academy, il nostro programma BJJ è progettato per insegnare agli studenti i principi fondamentali di questa bella arte costruendo fitness fisico, resistenza mentale e fiducia in se stessi.',
            'Che tu sia un principiante completo o un grappler esperto, il nostro curriculum strutturato e l\'istruzione esperta ti aiuteranno a sviluppare le tue abilità e raggiungere i tuoi obiettivi sui tappeti.'
          ]
        },
        techniques: {
          title: 'Tecniche Core BJJ',
          subtitle: 'Padroneggia le tecniche fondamentali che formano la base del Brazilian Jiu-Jitsu'
        },
        beltSystem: {
          title: 'Sistema di Cinture BJJ',
          subtitle: 'Progredisci attraverso il sistema di ranking tradizionale del Brazilian Jiu-Jitsu',
          philosophy: {
            title: 'Il Viaggio delle Cinture',
            description: 'Nel Brazilian Jiu-Jitsu, la progressione delle cinture rappresenta non solo abilità tecnica, ma anche sviluppo del carattere, perseveranza e dedizione all\'arte. Ogni livello di cintura richiede tipicamente 2-3 anni per essere raggiunto, rendendo il BJJ uno dei sistemi di ranking più rispettati nelle arti marziali.'
          }
        },
        history: {
          title: 'Storia del BJJ',
          paragraphs: [
            'Il Brazilian Jiu-Jitsu fu sviluppato all\'inizio del XX secolo quando il judoka giapponese Mitsuyo Maeda insegnò alla famiglia Gracie in Brasile. I Gracie, in particolare Helio Gracie, adattarono e raffinarono le tecniche per creare quello che ora conosciamo come Brazilian Jiu-Jitsu.',
            'L\'arte ottenne riconoscimento mondiale attraverso i primi eventi UFC, dove Royce Gracie dimostrò l\'efficacia del BJJ contro avversari più grandi provenienti da diversi background di arti marziali.'
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
                description: 'Campione UFC che mostrò il BJJ al mondo'
              }
            ]
          }
        },
        schedule: {
          title: 'Orario Allenamento BJJ',
          subtitle: 'Unisciti ai nostri corsi BJJ regolari in entrambe le location'
        },
        cta: {
          title: 'Inizia il Tuo Viaggio BJJ',
          description: 'Sperimenta l\'arte gentile che ha trasformato milioni di vite in tutto il mondo.',
          joinButton: 'Unisciti ai Corsi BJJ',
          backButton: 'Torna ai Corsi'
        }
      },
      mma: {
        title: 'Arti Marziali Miste',
        hero: {
          subtitle: 'Lo sport da combattimento definitivo che combina striking, grappling e combattimento a terra'
        },
        overview: {
          title: 'L\'Arte di Combattimento Definitiva',
          paragraphs: [
            'Le Arti Marziali Miste (MMA) sono lo sport da combattimento più completo, combinando tecniche da boxe, kickboxing, wrestling, Brazilian Jiu-Jitsu e altre discipline di arti marziali. Rappresenta l\'evoluzione degli sport da combattimento nella loro forma più pura ed efficace.',
            'Il nostro programma MMA a Sport Academy fornisce allenamento completo che sviluppa combattenti versatili capaci di competere in tutti i range di combattimento - in piedi, clinch e terra.',
            'Che il tuo obiettivo sia competizione professionale, fitness o autodifesa, il nostro allenamento MMA spingerà i tuoi limiti e svilupperà sia le tue capacità fisiche che mentali.'
          ]
        },
        techniques: {
          title: 'Set di Abilità MMA',
          subtitle: 'Padroneggia tutti gli aspetti del combattimento di arti marziali miste'
        },
        history: {
          title: 'Evoluzione delle MMA',
          paragraphs: [
            'Le MMA moderne emersero dalle competizioni vale tudo in Brasile e dai primi contest "senza regole". Lo sport ottenne riconoscimento mainstream con la creazione dell\'Ultimate Fighting Championship (UFC) nel 1993.',
            'Quello che iniziò come un torneo per determinare l\'arte marziale più efficace si è evoluto in uno sport sofisticato con atleti altamente allenati che sono esperti in discipline multiple.'
          ],
          milestones: {
            title: 'Pietre Miliari MMA',
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
                description: 'Le MMA diventano legali a New York, completando la legalizzazione USA'
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
              description: 'Abilità applicabili nel mondo reale'
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
          subtitle: 'Corsi MMA ad alta intensità per tutti i livelli'
        },
        legends: {
          title: 'Leggende MMA',
          subtitle: 'Icone che hanno plasmato lo sport delle arti marziali miste',
          fighters: [
            {
              name: 'Royce Gracie',
              title: 'Pioniere UFC',
              description: 'Dimostrò l\'efficacia del BJJ nei primi UFC'
            },
            {
              name: 'Chuck Liddell',
              title: 'The Iceman',
              description: 'Portò le MMA nella popolarità mainstream'
            },
            {
              name: 'Anderson Silva',
              title: 'The Spider',
              description: 'Campione dei pesi medi UFC più longevo'
            }
          ]
        },
        cta: {
          title: 'Entra nell\'Ottagono',
          description: 'Allenati come un combattente professionista e scopri il tuo potenziale nelle arti marziali miste.',
          joinButton: 'Unisciti all\'Allenamento MMA',
          backButton: 'Torna ai Corsi'
        }
      },
      grappling: {
        breadcrumb: 'Grappling',
        title: 'Grappling',
        hero: {
          subtitle: 'Padroneggia l\'arte del combattimento a terra, takedown e tecniche di sottomissione'
        },
        overview: {
          title: 'L\'Arte del Controllo',
          paragraphs: [
            'Il grappling è la base del combattimento a terra, comprendendo wrestling, prese di sottomissione e controllo posizionale. È un componente essenziale delle arti marziali miste e un\'arte marziale completa di per sé.',
            'Il nostro programma di grappling si concentra sia su tecniche gi che no-gi, insegnando agli studenti come controllare gli avversari, eseguire takedown e applicare sottomissioni efficacemente.',
            'Il grappling sviluppa forza funzionale incredibile, flessibilità e resistenza mentale fornendo abilità pratiche di autodifesa.'
          ]
        },
        techniques: {
          title: 'Fondamentali del Grappling',
          subtitle: 'Tecniche essenziali per un combattimento a terra efficace'
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
                title: 'Drilling & Ripetizione',
                description: 'Perfeziona le tecniche attraverso pratica costante'
              },
              {
                title: 'Live Rolling',
                description: 'Applica le tecniche in scenari di sparring realistici'
              }
            ]
          },
          conditioning: {
            title: 'Condizionamento Fisico',
            methods: [
              {
                title: 'Fitness Specifico per Grappling',
                description: 'Costruisci resistenza per combattimento a terra prolungato'
              },
              {
                title: 'Allenamento di Flessibilità',
                description: 'Migliora mobilità e prevenzione infortuni'
              },
              {
                title: 'Sviluppo della Forza',
                description: 'Forza funzionale per movimenti di grappling'
              }
            ]
          }
        },
        benefits: {
          title: 'Benefici del Grappling',
          subtitle: 'Perché il grappling è essenziale per ogni artista marziale',
          items: [
            {
              icon: '🤼',
              title: 'Controllo a Terra',
              description: 'Domina nelle situazioni di combattimento a terra'
            },
            {
              icon: '💪',
              title: 'Forza Funzionale',
              description: 'Costruisci forza applicabile nel mondo reale'
            },
            {
              icon: '🧘',
              title: 'Scacchi Mentali',
              description: 'Sviluppa pensiero strategico e risoluzione problemi'
            },
            {
              icon: '🛡️',
              title: 'Autodifesa',
              description: 'Abilità essenziali per protezione personale'
            }
          ]
        },
        schedule: {
          title: 'Orario Grappling',
          subtitle: 'Corsi di grappling regolari per tutti i livelli di abilità'
        },
        legends: {
          title: 'Leggende del Grappling',
          subtitle: 'Maestri che hanno definito l\'arte del grappling',
          grapplers: [
            {
              name: 'Frank Shamrock',
              title: 'The Legend',
              description: 'Pioniere del grappling MMA moderno'
            },
            {
              name: 'Kazushi Sakuraba',
              title: 'The Gracie Hunter',
              description: 'Maestro di catch wrestling e sottomissioni'
            },
            {
              name: 'Josh Barnett',
              title: 'The Warmaster',
              description: 'Specialista di catch wrestling e sottomissioni'
            }
          ]
        },
        cta: {
          title: 'Padroneggia il Gioco a Terra',
          description: 'Sviluppa abilità superiori di grappling e diventa un artista marziale completo.',
          joinButton: 'Unisciti ai Corsi di Grappling',
          backButton: 'Torna ai Corsi'
        }
      }
    },
    footer: {
      tagline: 'Allenamento d\'Élite MMA, BJJ & Grappling',
      subtitle: 'Forgiamo Combattenti dal 2017',
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