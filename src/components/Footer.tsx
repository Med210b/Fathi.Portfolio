import { motion } from 'motion/react';
import { ArrowUp, Linkedin, Twitter, Instagram } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-padding bg-brand-bg-secondary/50 border-t border-brand-border overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
          {/* Logo & Desc */}
          <div className="space-y-6 lg:col-span-1 text-center sm:text-left">
            <a href="#home" className="text-3xl font-display font-bold text-white tracking-tighter">
              FATHI<span className="text-brand-primary">.</span>
            </a>
            <p className="text-brand-text/70 leading-relaxed max-w-xs mx-auto sm:mx-0 text-sm md:text-base">
              Crafting premium digital experiences through innovative design and cutting-edge development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 text-center sm:text-left">
            <h4 className="text-lg font-display font-bold text-white">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-brand-text hover:text-brand-primary transition-colors text-sm md:text-base min-h-[44px] inline-flex items-center">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6 text-center sm:text-left">
            <h4 className="text-lg font-display font-bold text-white">Services</h4>
            <ul className="space-y-4">
              {['Web Design', 'Web Development', 'UI/UX Design', 'App Development'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-brand-text hover:text-brand-primary transition-colors text-sm md:text-base min-h-[44px] inline-flex items-center">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-6 text-center sm:text-left">
            <h4 className="text-lg font-display font-bold text-white">Follow Me</h4>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {[Linkedin, Twitter, Instagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -5, rotate: 5 }}
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white hover:text-brand-primary hover:border-brand-primary/50 transition-all min-w-[44px] min-h-[44px]"
                  aria-label={`Follow on ${Icon.name}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="pt-4">
               <p className="text-[10px] md:text-xs font-bold text-brand-text uppercase tracking-widest mb-1">Location</p>
               <p className="text-sm md:text-base text-white font-medium">Dubai, United Arab Emirates</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-brand-text/50 text-[10px] md:text-xs font-medium text-center md:text-left">
            © {new Date().getFullYear()} Fathi Hammami. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] md:text-xs font-bold text-brand-text uppercase tracking-widest hover:text-white transition-colors min-h-[44px]"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
              <ArrowUp className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="bg-glow w-[400px] h-[400px] -bottom-20 left-1/2 -translate-x-1/2 bg-brand-primary/5" />
    </footer>
  );
}
