import React, { useEffect, useState } from 'react';
import { Users, Award, Clock, TrendingUp, Building2, ExternalLink } from 'lucide-react';

const About = () => {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { icon: Award, label: 'Projects Completed', value: 250, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: 150, suffix: '+' },
    { icon: Clock, label: 'Years Experience', value: 8, suffix: '+' },
    { icon: TrendingUp, label: 'Client Satisfaction', value: 98, suffix: '%' }
  ];

  const majorClients = [
    { 
      name: 'Fronta', 
      url: 'https://www.fronta.se/',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
      description: 'Digital Solutions Leader'
    },
    { 
      name: 'Dometic', 
      url: 'https://www.dometic.com/',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
      description: 'Mobile Living Solutions'
    },
    { 
      name: 'Ampiro', 
      url: 'https://ampiro.se/',
      logo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=100&h=100&fit=crop',
      description: 'Energy & Automation'
    },
    { 
      name: 'Elitfonster', 
      url: 'https://www.elitfonster.se/',
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop',
      description: 'Premium Windows & Doors'
    },
    { 
      name: 'Mardskog', 
      url: 'https://mardskog.se/artiklar/',
      logo: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop',
      description: 'Forestry & Timber'
    }
  ];

  useEffect(() => {
    // Trigger animations on component mount
    setIsVisible(true);
    
    // Animate counters
    const duration = 2500;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCounts({
        projects: Math.floor(250 * easeOutQuart),
        clients: Math.floor(150 * easeOutQuart),
        years: Math.floor(8 * easeOutQuart),
        satisfaction: Math.floor(98 * easeOutQuart)
      });
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, []);

  return (
    <section 
      id="about" 
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Tech Teract</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Founded by Omar after 3 successful years as a senior consultant at Consid Sweden, 
              Tech Teract was born from a vision to deliver world-class digital solutions with 
              the agility and personal touch that only an independent agency can provide.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our founder's extensive experience working with major Swedish enterprises like Fronta, 
              Dometic, Ampiro, and Elitfonster has shaped our approach to building scalable, 
              enterprise-grade solutions. Now based in the UK, we're currently developing 
              cutting-edge automation and property acquisition software (Sourcio) while serving 
              clients globally.
            </p>

            <div className="space-y-4">
              {[
                'Enterprise-level expertise from Consid Sweden background',
                'Proven track record with Fortune 500 companies',
                'UK-based with global reach and 24/7 support',
                'Specializing in automation and AI-driven solutions'
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-purple-400' : 'bg-cyan-400'} animate-pulse`} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const countKey = stat.label.toLowerCase().includes('project') ? 'projects' :
                                 stat.label.toLowerCase().includes('client') && !stat.label.toLowerCase().includes('satisfaction') ? 'clients' :
                                 stat.label.toLowerCase().includes('year') ? 'years' : 'satisfaction';
                
                return (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-500 group hover:scale-105 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {counts[countKey as keyof typeof counts]}{stat.suffix}
                    </div>
                    
                    <div className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {stat.label}
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl shadow-lg shadow-purple-500/0 group-hover:shadow-purple-500/20 transition-shadow duration-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Major Clients Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
              <Building2 className="h-8 w-8 text-purple-400 mr-3" />
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-300 text-lg">
              Our founder's consulting experience includes major Swedish enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {majorClients.map((client, index) => (
              <a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 text-center hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="relative mb-4">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-gray-600 group-hover:border-purple-400 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h4 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {client.name}
                </h4>
                
                <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">
                  {client.description}
                </p>

                <div className="flex items-center justify-center text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  <span className="text-xs">Visit Site</span>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl shadow-lg shadow-purple-500/0 group-hover:shadow-purple-500/20 transition-shadow duration-500" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;