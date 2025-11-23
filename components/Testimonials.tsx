import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 300);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our students who transformed their careers and cracked top tech companies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative glass-panel rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
            
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12">
              <Quote className="w-12 h-12 text-primary/20 rotate-180" />
            </div>

            {/* Content */}
            <div 
              className={`flex flex-col items-center text-center transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 relative z-10 italic">
                "{current.content}"
              </p>

              <div className="flex items-center gap-4 mt-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full animate-spin-slow blur-sm opacity-70"></div>
                  <img 
                    src={current.image} 
                    alt={current.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-dark relative z-10"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-white">{current.name}</h4>
                  <p className="text-sm text-primary font-medium">{current.role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4 pointer-events-none">
              <button 
                onClick={handlePrev}
                className="pointer-events-auto p-3 rounded-full bg-dark/50 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all duration-300 backdrop-blur-md -translate-x-4 md:-translate-x-12 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button 
                onClick={handleNext}
                className="pointer-events-auto p-3 rounded-full bg-dark/50 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all duration-300 backdrop-blur-md translate-x-4 md:translate-x-12 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-primary' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;