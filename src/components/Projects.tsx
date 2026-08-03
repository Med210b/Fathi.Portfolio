import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative bg-brand-bg-secondary/20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container-custom"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-primary font-bold tracking-widest uppercase text-xs"
            >
              Selected Works
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white"
            >
              Building <span className="text-gradient">Digital Masterpieces</span>
            </motion.h2>
          </div>
          
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group inline-flex items-center gap-2 text-white font-bold hover:text-brand-primary transition-colors text-sm md:text-base"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative glass rounded-[40px] overflow-hidden border-brand-border group-hover:border-brand-primary/30 transition-all duration-500">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-bg/40 group-hover:bg-brand-bg/10 transition-colors duration-500" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full text-xs font-bold text-white backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold group-hover:text-brand-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-brand-text/70 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technology.map((tech) => (
                      <span key={tech} className="text-[10px] font-bold text-brand-primary/80 uppercase tracking-wider px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-2">
                    <Link
                      to={`/project/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary rounded-2xl text-sm font-bold text-white hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-4 bg-brand-primary/5 blur-3xl rounded-[50px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
