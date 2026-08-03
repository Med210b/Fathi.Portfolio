import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container-custom relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">
            My Journey
          </span>
          <h2 className="text-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-4 md:px-0">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-primary via-brand-accent to-transparent opacity-30" 
          />

          <div className="space-y-12 md:space-y-20">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="glass p-6 md:p-8 rounded-3xl md:rounded-[32px] border-brand-border hover:border-brand-primary/30 transition-all group"
                  >
                    <span className="inline-block text-[10px] md:text-xs font-bold text-brand-primary uppercase tracking-widest mb-4 bg-brand-primary/5 px-4 py-1.5 rounded-full">
                      {exp.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-1 group-hover:text-brand-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-brand-accent font-bold mb-4 text-sm md:text-base">{exp.company}</p>
                    <p className="text-brand-text/70 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx * 0.2) + 0.3, type: "spring", stiffness: 260, damping: 20 }}
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full glass border-brand-primary/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                >
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
                </motion.div>

                {/* Spacer for empty side */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
