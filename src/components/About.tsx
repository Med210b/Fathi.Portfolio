import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const STATS = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Projects Completed', value: '150+' },
  { label: 'Happy Clients', value: '80+' },
  { label: 'Countries Reached', value: '15+' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-bg-secondary/30 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="bg-glow w-[600px] h-[600px] top-1/2 -left-40 bg-brand-primary/10" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container-custom relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left: Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-primary/20 blur-2xl rounded-[40px] opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative glass p-2 md:p-4 rounded-[40px] overflow-hidden border-brand-border">
                <img
                  src="https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785455057/cdmwgiw27bubgsup8wfe.png"
                  alt="Fathi Hammami Workspace"
                  className="w-full h-auto rounded-[32px] transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 glass p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border-white/20">
                  <p className="text-3xl md:text-4xl font-display font-bold text-gradient">8+</p>
                  <p className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider mt-1">Years Exp.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8 md:space-y-10"
          >
            <div className="space-y-4">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">
                About Me
              </span>
              <h2 className="text-white">
                Designing Digital Excellence <br />
                <span className="text-brand-text/50">One Pixel at a Time</span>
              </h2>
              <p className="text-brand-text/80 text-base md:text-lg max-w-2xl">
                I am a passionate designer and developer based in Dubai, UAE. With over 8 years of experience, I specialize in creating premium digital experiences that are not only visually stunning but also highly functional.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="space-y-1"
                >
                  <p className="text-2xl md:text-4xl font-display font-bold text-white">{stat.value}</p>
                  <p className="text-xs md:text-sm text-brand-text uppercase tracking-wider font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-4 pt-4"
            >
              {['Award Winning Designs', 'Modern Technology Stack', 'User-Centric Approach'].map((item, idx) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (idx * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  </div>
                  <span className="text-white font-medium text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
