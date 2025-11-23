import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Github, Twitter, Linkedin, Mail, Minimize2 } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Chatbot from './Chatbot';

// Custom Xenvora Logo Component
const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-label="Xenvora Logo"
  >
    <path 
      d="M20 20L80 80" 
      stroke="currentColor" 
      strokeWidth="12" 
      strokeLinecap="round" 
      className="text-primary"
    />
    <path 
      d="M80 20L20 80" 
      stroke="currentColor" 
      strokeWidth="12" 
      strokeLinecap="round" 
      className="text-primary"
    />
  </svg>
);

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Adjusted threshold for smoother feel
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-dark text-gray-200 font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark/80 backdrop-blur-lg border-b border-white/10 py-4 shadow-xl shadow-black/20' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <Logo className="w-10 h-10 text-primary relative z-10" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight text-white">
              XEN<span className="text-primary">VORA</span>
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                    isActive ? 'text-primary' : 'text-gray-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </>
                )}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-semibold transition-all hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(0,166,255,0.3)]"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className={`flex-1 ${isHome ? '' : 'pt-24'}`}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-white/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Logo className="w-8 h-8 text-primary" />
                <span className="font-heading font-bold text-xl text-white">XENVORA</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Building the digital future with innovation, precision, and futuristic design.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Automation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Brand Identity</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><NavLink to="/about" className="hover:text-primary transition-colors">About Us</NavLink></li>
                <li><NavLink to="/portfolio" className="hover:text-primary transition-colors">Portfolio</NavLink></li>
                <li><NavLink to="/blog" className="hover:text-primary transition-colors">Blog</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-primary transition-colors">Contact</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-4">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:dev@xenvora.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    dev@xenvora.com
                  </a>
                </li>
                <li className="flex gap-4">
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all"><Github className="w-5 h-5" /></a>
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all"><Linkedin className="w-5 h-5" /></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; 2024 XENVORA. All rights reserved.</p>
            <div className="flex gap-6">
              <NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default Layout;