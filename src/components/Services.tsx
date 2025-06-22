import React from 'react';
import { Code, Smartphone, Bot, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web & Mobile Development',
      description: 'Custom web applications and mobile apps built with modern frameworks and technologies for optimal performance across all platforms.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Bot,
      title: 'Automation & AI Integrations',
      description: 'Intelligent automation solutions and AI integrations that streamline your business processes and enhance productivity.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Dedicated Remote Teams',
      description: 'Skilled remote development teams that work as an extension of your business, delivering consistent results and expertise.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Custom Solutions',
      description: 'Tailored software solutions designed specifically for your unique business requirements and industry challenges.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl shadow-lg shadow-purple-500/0 group-hover:shadow-purple-500/20 transition-shadow duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;