import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'services', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className={`container-custom flex items-center justify-between transition-all duration-500 ${
        isScrolled ? 'glass rounded-full py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-6xl px-8' : ''
      }`}>
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          aria-label="Fathi Hammami - Home"
          className="text-2xl font-display font-extrabold text-white tracking-tighter flex items-center gap-3 group shrink-0"
        >
          <div className={`bg-brand-primary rounded-2xl flex items-center justify-center transition-all group-hover:rotate-12 shadow-[0_0_20px_rgba(79,70,229,0.4)] ${
            isScrolled ? 'w-10 h-10 text-xl' : 'w-12 h-12 text-2xl'
          }`}>
            FH
          </div>
          <span className={`hidden sm:block font-black transition-all ${isScrolled ? 'text-xl' : 'text-2xl'}`}>FATHI HAMMAMI</span>
        </motion.a>

        {/* Desktop Links */}
        <div className={`hidden lg:flex items-center transition-all duration-500 ${
          isScrolled ? 'space-x-6' : 'space-x-10'
        }`}>
          {NAV_LINKS.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative text-xs font-bold uppercase tracking-widest transition-colors hover:text-brand-primary ${
                activeSection === link.href.substring(1) ? 'text-brand-primary' : 'text-gray-400'
              }`}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block shrink-0">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-brand-primary rounded-full font-bold text-white shadow-lg shadow-brand-primary/25 hover:bg-brand-accent transition-all flex items-center gap-2 whitespace-nowrap ${
              isScrolled ? 'px-6 py-2.5 text-xs' : 'px-8 py-3.5 text-sm'
            }`}
          >
            <span>Contact Me</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-12 h-12 flex items-center justify-center glass rounded-xl text-white z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#050816]/95 backdrop-blur-2xl flex flex-col p-8 pt-32">
              <div className="flex flex-col space-y-6">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-display font-bold text-white hover:text-brand-primary transition-colors flex items-center justify-between"
                  >
                    {link.label}
                    <ArrowRight className="w-6 h-6 text-brand-primary/50" />
                  </motion.a>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-5 bg-brand-primary text-white text-xl text-center rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-brand-primary/30"
                >
                  Contact Me
                  <ArrowRight className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
