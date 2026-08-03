import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6"
            >
              <HelpCircle className="w-4 h-4 text-brand-primary" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-primary">Knowledge Base</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white mb-6"
            >
              Common <span className="text-gradient">Questions</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-text/70 text-base md:text-lg max-w-2xl mx-auto"
            >
              Everything you need to know about my process, technologies, and how we can collaborate on your next project.
            </motion.p>
          </div>

          {/* Accordion */}
          <div className="space-y-3 md:space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 flex items-start justify-between gap-4 glass group-hover:border-brand-primary/30 min-h-[44px] ${
                    activeIndex === index 
                      ? 'border-brand-primary/50 bg-brand-primary/5' 
                      : 'border-white/5'
                  }`}
                  aria-expanded={activeIndex === index}
                >
                  <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${
                    activeIndex === index ? 'text-brand-primary' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-500 mt-1 ${
                    activeIndex === index ? 'rotate-180 text-brand-primary' : 'text-white/40'
                  }`} />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 md:p-6 pt-2 text-brand-text/70 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 md:mt-16 p-6 md:p-8 rounded-3xl glass border border-brand-border text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-primary/5 blur-3xl -z-10" />
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-sm md:text-base text-brand-text/60 mb-6">I'm always happy to chat about your project and provide more details.</p>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-accent transition-all shadow-xl shadow-brand-primary/20 w-full sm:w-auto"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] translate-x-1/4 pointer-events-none" />
    </section>
  );
}
