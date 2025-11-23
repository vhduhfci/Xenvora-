import React from 'react';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="py-12 md:py-24">
      <section className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          Our <span className="text-primary">Courses</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Industry-relevant batches designed to take you from beginner to pro.
        </p>
      </section>

      <section className="container mx-auto px-6 space-y-24">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                Batch 0{index + 1}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.description} Our curriculum is updated regularly to meet the demands of top tech companies.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-white font-semibold">What you'll learn:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <NavLink to="/contact" className="inline-flex items-center gap-2 text-primary hover:text-white font-semibold mt-4 transition-colors">
                Enroll in {service.title} <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>

            <div className="flex-1 w-full">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-[300px] md:h-[400px] bg-card border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center">
                   <img 
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
                   />
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2 uppercase shadow-black drop-shadow-lg">{service.title}</h3>
                        <p className="text-sm text-white/90">Curriculum Preview</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;