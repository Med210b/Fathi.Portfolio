import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Globe, Code2, Layout, Smartphone, Clock, Share2, Check } from 'lucide-react';
import { PROJECTS } from '../constants';
import SEO from './SEO';
import { calculateReadingTime } from '../utils/readingTime';

const iconMap = {
  'Web Design': Layout,
  'Web Development': Code2,
  'Mobile App': Smartphone,
};

export default function ProjectDemo() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center text-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-display font-bold">Project Not Found</h1>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[project.category as keyof typeof iconMap] || Globe;

  // Calculate reading time based on available content
  const contentToRead = [
    project.description,
    project.caseStudy?.challenge || '',
    ...(project.caseStudy?.features || [])
  ].filter(Boolean);
  
  const readingTime = calculateReadingTime(contentToRead);

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-brand-primary selection:text-white antialiased">
      <SEO 
        title={`${project.title} | Fathi Hammami Portfolio`}
        description={project.description}
        image={project.imageUrl}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <div className="hidden md:block">
            <span className="text-brand-text/50 text-xs font-bold uppercase tracking-[0.2em]">Project Showcase</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl glass hover:bg-white/10 border border-white/5 transition-all text-white/70 hover:text-brand-primary"
              title="Copy Share Link"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3 text-brand-primary">
                <Icon className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">{project.category}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-brand-text/50 text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{readingTime} min read</span>
                </div>
                
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-brand-primary/80 hover:text-brand-primary text-xs font-bold uppercase tracking-widest bg-brand-primary/5 hover:bg-brand-primary/10 px-3 py-1.5 rounded-full border border-brand-primary/20 transition-all"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Project</span>
                </button>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-text/70 text-xl leading-relaxed max-w-2xl"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {project.technology.map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-wider text-brand-primary/80"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Main Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative aspect-video max-w-6xl mx-auto rounded-[40px] overflow-hidden border border-white/5 shadow-2xl group"
          >
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="glass p-6 rounded-2xl backdrop-blur-xl border-white/10 max-w-md hidden md:block">
                  <p className="text-sm font-medium text-white/80 italic">
                    "This project exemplifies our commitment to quality and innovation in the {project.category.toLowerCase()} space."
                  </p>
               </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <div className="max-w-4xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-bold">The Challenge</h3>
              <div className="space-y-4">
                {project.caseStudy?.challenge ? (
                  <p className="text-brand-text/70 leading-relaxed">
                    {project.caseStudy.challenge}
                  </p>
                ) : (
                  <>
                    <p className="text-brand-text/70 leading-relaxed">
                      Every project comes with its unique set of challenges. For {project.title}, we focused on creating a seamless user experience that balances complex functionality with elegant design. The goal was to provide a premium feel that resonates with the target audience.
                    </p>
                    <p className="text-brand-text/70 leading-relaxed">
                      We utilized {project.technology[0]} to ensure high performance and scalability, allowing for a fluid interface even with high data loads.
                    </p>
                  </>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-bold">Key Features</h3>
              <ul className="space-y-4">
                {(project.caseStudy?.features || [
                  'Customized Responsive Layout',
                  'High-Performance Animations',
                  'Optimized Asset Loading',
                  'Premium Visual Identity',
                  'Secure Data Integration'
                ]).map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-text/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center py-20 glass rounded-[60px] border-brand-border relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-primary/5 blur-3xl" />
            <div className="relative z-10 space-y-8 px-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Interested in similar results?</h2>
              <p className="text-brand-text/70 text-lg max-w-xl mx-auto">
                Let's discuss how we can bring your next big idea to life with the same level of precision and artistry.
              </p>
              <Link 
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary rounded-2xl font-bold hover:bg-brand-accent transition-all shadow-xl shadow-brand-primary/20"
              >
                Start a Conversation
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-[100] px-6 py-3 bg-brand-primary text-white rounded-2xl font-bold shadow-[0_20px_50px_rgba(79,70,229,0.3)] flex items-center gap-3 border border-white/20 backdrop-blur-xl"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Check className="w-4 h-4" />
            </div>
            <span>Link copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
