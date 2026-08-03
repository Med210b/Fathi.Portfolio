import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-brand-bg-secondary/50 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container-custom relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">
            Kind Words
          </span>
          <h2 className="text-white">
            What My <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative glass p-6 md:p-10 rounded-3xl md:rounded-[40px] border-brand-border flex flex-col justify-between"
            >
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-8 h-8 md:w-10 md:h-10 text-brand-primary/10 -z-0" />
                  <p className="relative z-10 text-brand-text/90 italic leading-relaxed text-base md:text-lg">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-brand-border">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl object-cover border-2 border-brand-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-white group-hover:text-brand-primary transition-colors text-sm md:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] md:text-xs text-brand-text font-medium">{testimonial.role}</p>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-all" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
