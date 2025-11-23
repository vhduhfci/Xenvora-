import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Smartphone, Globe, ChevronRight, BookOpen, Users, Video, Award } from 'lucide-react';
import { PROJECTS, SERVICES, CLIENTS } from '../constants';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-dark z-0">
          <img 
            src="https://image.pollinations.ai/prompt/Abstract%20futuristic%20technology%20network%20background%20circuits%20dark%20blue%20particles?width=1920&height=1080&nologo=true" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark"></div>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-secondary font-medium">Dream • Learn • Achieve</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-8">
            <span className="block text-white">Master The</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text">
              Art of Coding
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            Join the most loved coding community. From Data Structures (DSA) to Full Stack Web Development, Xenvora is your gateway to top tech companies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NavLink
              to="/services"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,166,255,0.4)] transition-all duration-300 w-full sm:w-auto"
            >
              Explore Courses
            </NavLink>
            <NavLink
              to="/portfolio"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-primary/50 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Student Projects <ArrowRight className="w-5 h-5" />
            </NavLink>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
             <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Trusted By / Clients Section */}
      <section className="py-12 border-y border-white/5 bg-dark/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest font-medium">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {CLIENTS.map((client, idx) => (
              <div key={idx} className="group relative">
                 <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-8 md:h-10 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen" 
                 />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-dark relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Video, title: 'Live Lectures', desc: 'Interactive sessions with industry experts.' },
              { icon: Users, title: 'Doubt Support', desc: '1:1 mentorship and active community.' },
              { icon: Award, title: 'Placement', desc: 'Dedicated support to crack dream jobs.' },
              { icon: BookOpen, title: 'Top Curriculum', desc: 'Structured paths: Delta, Alpha, Sigma.' },
            ].map((feature, idx) => (
              <div key={idx} className="group p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Our Batches</h2>
              <p className="text-gray-400">Comprehensive learning paths designed for success.</p>
            </div>
            <NavLink to="/services" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors">
              All Courses <ChevronRight className="w-4 h-4" />
            </NavLink>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="rounded-2xl bg-card border border-white/5 hover:border-secondary/30 transition-all duration-300 group overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">{service.description}</p>
                  <NavLink to="/services" className="text-sm font-semibold text-white group-hover:text-secondary flex items-center gap-2 mt-auto">
                    View Details <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Student Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">See what our students are building after mastering the concepts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {PROJECTS.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <NavLink to={`/portfolio/${project.id}`} className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                    View Project <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <NavLink to="/portfolio" className="inline-block px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-dark transition-all font-semibold">
              View All Projects
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Ready to Crack FAANG?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Start your journey with Xenvora today. Learn from the best, build the best.</p>
          <NavLink to="/contact" className="px-10 py-4 bg-white text-dark rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Join Now
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Home;