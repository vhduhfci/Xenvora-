import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories from projects
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  // Filter projects based on selection
  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <div className="py-12 md:py-24">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          Our <span className="text-secondary">Work</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          A collection of projects that define the Xenvora standard of quality.
        </p>
      </section>

      {/* Filter Buttons */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(0,166,255,0.4)]'
                  : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <NavLink to={`/portfolio/${project.id}`} className="px-6 py-2 bg-white text-black rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-200">
                    View Details
                  </NavLink>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <NavLink to={`/portfolio/${project.id}`}>
                     <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                  </NavLink>
                </div>
                <span className="text-xs text-primary font-bold uppercase tracking-wider mb-4 block">{project.category}</span>
                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.technologies?.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-500">{tech}</span>
                  ))}
                  {project.technologies && project.technologies.length > 3 && (
                     <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-500">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Portfolio;