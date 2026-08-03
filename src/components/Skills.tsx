import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export default function Skills() {
  const programmingSkills = SKILLS.filter(s => s.category === 'Programming');
  const designSkills = SKILLS.filter(s => s.category === 'Design');

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container-custom relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">
            Capabilities
          </span>
          <h2 className="text-white">
            My <span className="text-gradient">Technical Arsenal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Programming Skills */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h3 className="text-2xl font-display font-bold flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-primary" />
              Programming
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {programmingSkills.map((skill, idx) => (
                <SkillItem key={skill.name} name={skill.name} delay={0.2 + (idx * 0.1)} />
              ))}
            </div>
          </motion.div>

          {/* Design Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <h3 className="text-2xl font-display font-bold flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-cyan" />
              Design
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {designSkills.map((skill, idx) => (
                <SkillItem key={skill.name} name={skill.name} delay={0.4 + (idx * 0.1)} color="cyan" />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

interface SkillItemProps {
  name: string;
  delay: number;
  color?: 'primary' | 'cyan';
}

const SkillItem: React.FC<SkillItemProps> = ({ name, delay, color = 'primary' }) => {
  const accentColor = color === 'primary' ? 'bg-brand-primary' : 'bg-brand-cyan';
  const glowColor = color === 'primary' ? 'shadow-brand-primary/50' : 'shadow-brand-cyan/50';

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="space-y-3 group"
    >
      <div className="flex justify-between items-center px-1">
        <span className="text-sm font-bold text-white group-hover:text-brand-primary transition-colors">{name}</span>
        <span className="text-[10px] font-bold text-brand-text uppercase tracking-widest">Mastery</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.floor(Math.random() * (95 - 80) + 80)}%` }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: 'circOut' }}
          className={`h-full ${accentColor} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] relative`}
        >
          {/* Inner Glow */}
          <div className={`absolute inset-0 ${accentColor} blur-sm opacity-50`} />
        </motion.div>
      </div>
    </motion.div>
  );
};
