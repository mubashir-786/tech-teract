import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useParallax, useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const parallaxOffset = useParallax(0.15);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Sourcio',
      description: 'Advanced automation and property acquisition software with AI-driven analytics',
      image: '/sourcio.png',
      tags: ['React', 'Node.js', 'AI/ML', 'Automation'],
      color: 'from-purple-500 to-pink-500',
      type: 'internal'
    },
    {
      title: 'Fronta',
      description: 'Enterprise-level consulting project for Swedish market leader in digital solutions',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Enterprise', 'Consulting', 'Sweden'],
      color: 'from-blue-500 to-indigo-500',
      type: 'client',
      url: 'https://www.fronta.se/'
    },
    {
      title: 'Dometic',
      description: 'Global leader in mobile living solutions - enterprise consulting and development',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      tags: ['Global Enterprise', 'Mobile Solutions', 'Consulting'],
      color: 'from-green-500 to-emerald-500',
      type: 'client',
      url: 'https://www.dometic.com/'
    },
    {
      title: 'Ampiro',
      description: 'Swedish energy and automation solutions - technical consulting and system integration',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      tags: ['Energy', 'Automation', 'Integration'],
      color: 'from-yellow-500 to-orange-500',
      type: 'client',
      url: 'https://ampiro.se/'
    },
    {
      title: 'Elitfonster',
      description: 'Premium window and door solutions - e-commerce platform and digital transformation',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Digital Transform', 'Premium'],
      color: 'from-teal-500 to-cyan-500',
      type: 'client',
      url: 'https://www.elitfonster.se/'
    },
    {
      title: 'Mardskog',
      description: 'Swedish forestry and timber industry - content management and digital solutions',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      tags: ['Forestry', 'CMS', 'Industry'],
      color: 'from-emerald-500 to-green-500',
      type: 'client',
      url: 'https://mardskog.se/artiklar/'
    },
    {
      title: 'Van On Road',
      description: 'Real-time vehicle tracking and fleet management system',
      image: '/vanonroad.png',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Socket.io'],
      color: 'from-violet-500 to-purple-500',
      type: 'internal'
    },
    {
      title: 'Western Cape Logistic',
      description: 'Comprehensive logistics management platform for supply chain optimization',
      image: '/western-cape.png',
      tags: ['Next.js', 'TypeScript', 'API Integration'],
      color: 'from-yellow-500 to-orange-500',
      type: 'internal'
    },
    {
      title: 'EZ Skin',
      description: 'E-commerce platform with advanced product customization features',
      image: '/ez-skin.png',
      tags: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js'],
      color: 'from-cyan-500 to-blue-500',
      type: 'internal'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.portfolio-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={elementRef}
      id="portfolio"
      className="py-20 bg-gray-950 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transition-transform duration-1000"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px) rotate(${parallaxOffset * 0.1}deg)` }}
        />
        <div
          className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl transition-transform duration-1000"
          style={{ transform: `translateY(${-parallaxOffset * 0.3}px) rotate(${-parallaxOffset * 0.1}deg)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From enterprise consulting with major Swedish companies to cutting-edge internal projects
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isItemVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                className={`portfolio-item group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 ${isItemVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 rotate-2'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  transform: isItemVisible ? `translateY(${parallaxOffset * 0.08}px)` : undefined
                }}
              >
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.type === 'client' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {project.type === 'client' ? 'Enterprise Client' : 'Our Project'}
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-1000"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-50 transition-all duration-500`} />

                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4">
                    {project.type === 'client' && project.url ? (
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                    ) : (
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-all duration-300"
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl shadow-lg shadow-purple-500/0 group-hover:shadow-purple-500/25 transition-shadow duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;