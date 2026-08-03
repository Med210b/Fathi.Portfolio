import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container-custom relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-primary font-bold tracking-widest uppercase text-xs"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white"
          >
            Premium Solutions for <span className="text-gradient">Modern Businesses</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-brand-text/80 text-base md:text-lg"
          >
            We combine technical excellence with artistic vision to deliver digital products that stand out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = (Icons as any)[service.iconName];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-[32px] glass border-brand-border hover:border-brand-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Container */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="w-7 h-7 text-brand-primary group-hover:text-brand-cyan transition-colors" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-display font-bold group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-text/70 leading-relaxed group-hover:text-brand-text transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Corner Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/20 transition-all" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
