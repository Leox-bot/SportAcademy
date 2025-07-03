import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Zap, Heart, Star, Flame, ExternalLink } from 'lucide-react';

export default function Classes() {
  const classes = [
    {
      title: "MMA Classes",
      description: "Complete mixed martial arts training combining striking, grappling, and ground fighting techniques. Perfect for those looking to develop well-rounded combat skills.",
      icon: <Flame className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />,
      image: "/d6309e04-e42c-4a1f-ac84-09a85f5e1207.jpg",
      features: ["Striking techniques", "Grappling fundamentals", "Ground fighting", "Conditioning", "Sparring sessions"],
      level: "All Levels"
    },
    {
      title: "Brazilian Jiu-Jitsu",
      description: "Master the gentle art of BJJ with our comprehensive ground fighting program. Learn leverage, technique, and strategy over brute strength.",
      icon: <Shield className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />,
      image: "/1bbb3fa2-9687-490a-9fb6-bb49e05175c8.jpg",
      features: ["Guard techniques", "Submissions", "Escapes", "Positional control", "Competition preparation"],
      level: "Beginner to Advanced"
    },
    {
      title: "Grappling",
      description: "Develop your wrestling and submission skills in our intensive grappling sessions. Focus on takedowns, control, and submissions.",
      icon: <Target className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />,
      image: "/1bbb3fa2-9687-490a-9fb6-bb49e05175c8.jpg",
      features: ["Takedown techniques", "Wrestling fundamentals", "Submission grappling", "No-gi training", "Competition prep"],
      level: "Intermediate to Advanced"
    },
    {
      title: "BJJ for Kids",
      description: "Safe and fun Brazilian Jiu-Jitsu classes designed specifically for young athletes. Building confidence, discipline, and respect.",
      icon: <Heart className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />,
      image: "/1bbb3fa2-9687-490a-9fb6-bb49e05175c8.jpg",
      features: ["Age-appropriate techniques", "Character development", "Anti-bullying skills", "Physical fitness", "Fun games and drills"],
      level: "Ages 6-14"
    },
    {
      title: "Grappling for Kids",
      description: "Build confidence, discipline, and physical fitness through youth grappling programs. Emphasis on safety and skill development.",
      icon: <Star className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />,
      image: "/1bbb3fa2-9687-490a-9fb6-bb49e05175c8.jpg",
      features: ["Basic wrestling moves", "Coordination drills", "Strength building", "Teamwork skills", "Safe training environment"],
      level: "Ages 8-16"
    },
    {
      title: "Wrestling",
      description: "Traditional wrestling techniques and conditioning for competitive athletes. Build strength, endurance, and technical proficiency.",
      icon: <Zap className="w-12 h-12" style={{ color: '#FFD700', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))' }} />,
      image: "/1bbb3fa2-9687-490a-9fb6-bb49e05175c8.jpg",
      features: ["Olympic wrestling", "Freestyle techniques", "Greco-Roman style", "Conditioning programs", "Competition training"],
      level: "All Levels"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-wide">
              OUR CLASSES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Professional training programs designed for all skill levels. From beginners taking their first steps 
              to advanced athletes preparing for competition, we have the perfect class for your martial arts journey.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {classes.map((classItem, index) => (
              <div key={index} className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Class Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={classItem.image} 
                    alt={classItem.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    {classItem.icon}
                    <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">{classItem.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium tracking-wide">
                      {classItem.level}
                    </span>
                  </div>
                </div>
                
                {/* Class Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed tracking-wide">
                    {classItem.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3 tracking-wide">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {classItem.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 tracking-wide">
                          <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wide">
            READY TO START TRAINING?
          </h2>
          <p className="text-xl text-gray-300 mb-8 tracking-wide">
            Join Sport Academy today and begin your martial arts journey with expert instruction and a supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maat-app.link/7BGCKjdtuUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 tracking-wide"
            >
              JOIN NOW
              <ExternalLink size={20} />
            </a>
            <Link 
              to="/schedule" 
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg tracking-wide"
            >
              VIEW SCHEDULE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}