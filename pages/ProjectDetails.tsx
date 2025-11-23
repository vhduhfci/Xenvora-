import React, { useEffect } from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Layers, Code2, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="py-12 md:py-24">
      {/* Header / Hero */}
      <section className="container mx-auto px-6 mb-12">
        <NavLink to="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </NavLink>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex gap-4 pt-4">
              <a href={project.liveUrl} className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,166,255,0.3)]">
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
              <a href={project.githubUrl} className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-bold hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-2">
                Github <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
             <div className="absolute inset-0 bg-primary/10 blur-[50px] opacity-50"></div>
             <img 
               src={project.imageUrl} 
               alt={project.title} 
               className="w-full h-auto object-cover relative z-10 transform transition-transform duration-700 hover:scale-105"
             />
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="container mx-auto px-6">
        <div className="space-y-8">
          
          {/* About the Project */}
          <div className="bg-card border border-white/5 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" /> About the Project
            </h2>
            <p className="text-gray-400 leading-relaxed whitespace-pre-line">
              {project.fullDescription || project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Technologies Used */}
            <div className="bg-card border border-white/5 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" /> Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 hover:scale-105 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-card border border-white/5 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" /> Key Features
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {project.features?.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-surface rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;