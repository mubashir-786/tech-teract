import React, { useEffect, useRef, useState } from 'react';
import { Users, Award, Clock, TrendingUp } from 'lucide-react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const About = () => {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const parallaxOffset = useParallax(0.2);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { icon: Award, label: 'Projects Completed', value: 250, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: 150, suffix: '+' },
    { icon: Clock, label: 'Years Experience', value: 8, suffix: '+' },
    { icon: TrendingUp, label: 'Client Satisfaction', value: 98, suffix: '%' }
  ];

  useEffect(() => {
    if (isVisible) {
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
    }
  }, [isVisible]);

  return (
    <section 
      ref={elementRef}
      id="about" 
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Enhanced Parallax Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transition-transform duration-1000"
          style={{ 
            transform: `translateY(${parallaxOffset * 0.3}px) scale(${1.2 + parallaxOffset * 0.0002}) rotate(${parallaxOffset * 0.05}deg)` 
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl transition-transform duration-1000"
          style={{ 
            transform: `translateY(${-parallaxOffset * 0.2}px) scale(${1.2 + parallaxOffset * 0.0002}) rotate(${-parallaxOffset * 0.05}deg)` 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Tech Teract</span>
            </h2>
            
            <p className={`text-xl text-gray-300 mb-6 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              We are a passionate team of developers, designers, and innovators dedicated to creating 
              exceptional digital experiences. Our mission is to transform your ideas into powerful, 
              scalable solutions that drive business growth.
            </p>
            
            <p className={`text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              With years of experience in cutting-edge technologies, we've helped businesses across 
              various industries achieve their digital transformation goals. From startups to 
              enterprise-level solutions, we deliver quality that exceeds expectations.
            </p>

            <div className="space-y-4">
              {[
                'Expert team with 8+ years of experience',
                'Cutting-edge technologies and best practices',
                '24/7 support and maintenance',
                'Agile development methodology'
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                  style={{ transitionDelay: `${700 + index * 150}ms` }}
                >
                  <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-purple-400' : 'bg-cyan-400'} animate-pulse`} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className={`transition-all duration-1200 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const countKey = stat.label.toLowerCase().includes('project') ? 'projects' :
                                 stat.label.toLowerCase().includes('client') && !stat.label.toLowerCase().includes('satisfaction') ? 'clients' :
                                 stat.label.toLowerCase().includes('year') ? 'years' : 'satisfaction';
                
                return (
                  <div
                    key={index}
                    className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ 
                      transitionDelay: `${600 + index * 200}ms`,
                      transform: isVisible ? `translateY(${parallaxOffset * 0.05}px)` : undefined
                    }}
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
      </div>
    </section>
  );
};

export default About;