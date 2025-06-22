import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Omar',
      role: 'Founder & CEO',
      image: '/WhatsApp Image 2025-06-15 at 12.30.08 AM.jpeg',
      bio: 'Visionary leader with 3+ years at Consid Sweden, serving major clients like Fronta, Dometic, and Ampiro. Founded Tech Teract in the UK to deliver cutting-edge automation and property acquisition solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Mubashir Raza',
      role: 'Co-Founder & CTO',
      image: '/mub.jpeg',
      bio: 'Strategic co-founder with deep expertise in software development and team leadership, ensuring exceptional project delivery and technical excellence across all our solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  return (
    <section 
      id="team" 
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate innovators and experts dedicated to delivering exceptional digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-3"
            >
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex space-x-3 justify-center">
                    {[
                      { icon: Linkedin, href: member.social.linkedin },
                      { icon: Twitter, href: member.social.twitter },
                      { icon: Github, href: member.social.github }
                    ].map(({ icon: Icon, href }, socialIndex) => (
                      <a 
                        key={socialIndex}
                        href={href}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300"
                      >
                        <Icon className="h-4 w-4 text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="text-purple-400 font-medium mb-4 text-lg group-hover:text-cyan-400 transition-colors duration-300">
                  {member.role}
                </div>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {member.bio}
                </p>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl shadow-lg shadow-purple-500/0 group-hover:shadow-purple-500/25 transition-shadow duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;