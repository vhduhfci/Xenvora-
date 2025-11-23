import React from 'react';
import { Target, BookOpen, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12 md:py-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-24">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          We Are <span className="text-primary">Xenvora</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
          Xenvora is India's most loved coding community. We are dedicated to providing top-quality education in Data Structures, Algorithms, and Web Development to help students crack their dream jobs.
        </p>
      </section>

      {/* Story & Mission */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block p-3 rounded-xl bg-primary/10 mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              To make high-quality coding education accessible to everyone. Whether you are a beginner starting with Java or an advanced developer mastering the MERN stack, Xenvora guides you every step of the way towards placement success.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">4M+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Students Taught</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">10k+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Placements</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3"></div>
            <img 
              src="https://image.pollinations.ai/prompt/Students%20learning%20coding%20in%20a%20futuristic%20high%20tech%20classroom%20blue%20neon%20lights?width=600&height=600&nologo=true" 
              alt="Students learning" 
              className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full"
            />
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-card py-24 mb-24 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="https://image.pollinations.ai/prompt/Professional%20portrait%20of%20a%20young%20indian%20male%20tech%20educator%20studio%20lighting%20dark%20background?width=200&height=200&nologo=true" 
              alt="Raj Verma" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-2 border-primary p-1 object-cover"
            />
            <h2 className="text-3xl font-bold text-white mb-2">Raj Verma</h2>
            <p className="text-primary font-medium mb-8">Lead Instructor & Founder</p>
            <p className="text-gray-400 text-lg leading-relaxed italic">
              "Coding is not just about syntax, it's about logic and problem-solving. At Xenvora, we don't just teach you how to code; we teach you how to think like an engineer."
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technologies You Will Master</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {['Java', 'DSA', 'React', 'Node.js', 'MongoDB', 'Express', 'System Design', 'SQL', 'Python', 'Git', 'AWS', 'Next.js'].map((tech) => (
            <div key={tech} className="p-4 bg-surface rounded-xl border border-white/5 flex items-center justify-center text-gray-400 font-semibold hover:text-white hover:border-primary/50 transition-colors">
              {tech}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;