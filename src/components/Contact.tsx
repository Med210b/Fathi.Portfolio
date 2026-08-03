import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, Linkedin, Send } from 'lucide-react';

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'hello@fathi.com', href: 'mailto:hello@fathi.com' },
  { icon: Phone, label: 'Phone', value: '+971 52 113 6151', href: 'tel:+971521136151' },
  { icon: MessageSquare, label: 'WhatsApp', value: '+971 55 905 4601', href: 'https://wa.me/971559054601' },
];

const SOCIALS = [
  { icon: Linkedin, href: '#' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="bg-glow w-[600px] h-[600px] -bottom-40 -right-40 bg-brand-primary/10" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container-custom relative z-10"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left: Info */}
          <div className="w-full lg:w-2/5 space-y-8 md:space-y-12">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">
                Get In Touch
              </span>
              <h2 className="text-white">
                Let's Build Something <br />
                <span className="text-gradient">Extraordinary</span>
              </h2>
              <p className="text-brand-text/80 text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                Have a project in mind? Reach out and let's discuss how we can work together to bring your vision to life.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {CONTACT_INFO.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 md:gap-6 p-4 md:p-6 glass rounded-2xl md:rounded-[32px] border-brand-border hover:border-brand-primary/30 transition-all group min-h-[44px]"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-brand-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-bold text-brand-text uppercase tracking-widest">{item.label}</p>
                    <p className="text-white font-bold group-hover:text-brand-primary transition-colors text-sm md:text-base break-all">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center lg:justify-start">
              <p className="text-xs md:text-sm font-bold text-brand-text uppercase tracking-widest">Follow Me</p>
              <div className="flex items-center gap-4">
                {SOCIALS.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl glass flex items-center justify-center text-white hover:text-brand-primary hover:border-brand-primary/50 transition-all min-w-[44px] min-h-[44px]"
                    aria-label="LinkedIn"
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-3/5"
          >
            <form className="glass p-6 md:p-12 rounded-3xl md:rounded-[48px] border-brand-border space-y-6 md:space-y-8 relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-brand-text uppercase tracking-widest ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all min-h-[44px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-brand-text uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all min-h-[44px]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold text-brand-text uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all min-h-[44px]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold text-brand-text uppercase tracking-widest ml-1">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all resize-none min-h-[44px]"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 md:py-5 bg-brand-primary rounded-xl md:rounded-2xl font-bold text-white flex items-center justify-center gap-3 shadow-xl shadow-brand-primary/20 hover:bg-brand-accent transition-all group min-h-[44px]"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
              
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
