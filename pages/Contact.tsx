import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-12 md:py-24">
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Let's <span className="text-primary">Talk</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Have a project in mind? We'd love to hear from you. Fill out the form or reach out directly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-card border border-white/5 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:dev@xenvora.com" className="text-gray-400 hover:text-white transition-colors">dev@xenvora.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-card border border-white/5 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-card border border-white/5 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-400">San Francisco, CA<br/>(Remote Global)</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-card border border-white/5 rounded-2xl relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-[url('https://image.pollinations.ai/prompt/Futuristic%20digital%20city%20map%20interface%20blue%20dark%20mode%20grid%20location%20pin?width=800&height=400&nologo=true')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              <span className="relative z-10 text-primary font-mono text-sm bg-black/50 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-md">
                Global HQ: San Francisco
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-white/5 p-8 md:p-10 rounded-3xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">First Name</label>
                  <input type="text" className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Last Name</label>
                  <input type="text" className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Service Interest</label>
                <select className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors">
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Automation & AI</option>
                  <option>Branding</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea rows={5} className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="w-full py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;