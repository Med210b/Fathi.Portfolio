import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';

const LOGOS = [
  { name: 'Google', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  { name: 'Microsoft', icon: 'https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785456750/fmm8enud3ir47gzbt8ef.png' },
  { name: 'Adobe', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
];

export default function LogoCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  // Create a continuous loop
  useAnimationFrame((t, delta) => {
    if (isPaused) return;
    
    const moveAmount = delta * 0.05; 
    const currentX = x.get();
    
    // Width of one full set of logos (10 logos * (160px width + 40px gap) = 2000px)
    const itemWidth = 160 + 40;
    const totalWidth = LOGOS.length * itemWidth; 
    
    if (currentX <= -totalWidth) {
      x.set(0);
    } else {
      x.set(currentX - moveAmount);
    }
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full bg-[#050816] border-y border-white/5 py-6 md:py-8 overflow-hidden relative z-20 h-[120px] md:h-[160px] flex flex-col justify-center"
    >
      {/* Background Gradient & Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.05)_0%,_transparent_70%)]" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-brand-cyan/10 blur-[100px] rounded-full opacity-20" />
        
        {/* Subtle digital particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-1 h-1 bg-brand-primary/20 rounded-full"
            style={{ 
              top: `${20 + i * 15}%`, 
              left: `${10 + i * 20}%` 
            }}
          />
        ))}
      </div>

      <div 
        ref={containerRef}
        className="relative flex items-center justify-center h-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* The Track */}
        <motion.div 
          style={{ x }}
          className="flex items-center gap-10 px-10"
        >
          {/* Double the logos for seamless loop */}
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <LogoCard key={`${logo.name}-${idx}`} logo={logo} containerRef={containerRef} x={x} index={idx} />
          ))}
        </motion.div>

        {/* Side Overlays for Depth Fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050816] to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050816] to-transparent z-30 pointer-events-none" />
      </div>
    </motion.div>
  );
}

interface LogoCardProps {
  key?: string | number;
  logo: { name: string; icon: string };
  containerRef: React.RefObject<HTMLDivElement>;
  x: any;
  index: number;
}

function LogoCard({ logo, containerRef, x, index }: LogoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [perspective, setPerspective] = useState(0);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0.4);
  const [blur, setBlur] = useState(0);

  useAnimationFrame((t) => {
    if (!cardRef.current || !containerRef.current) return;
    
    // Floating animation
    const float = Math.sin(t / 1000 + index) * 5;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect();
    
    const containerCenter = containerRect.left + containerRect.width / 2;
    const cardCenter = cardRect.left + cardRect.width / 2;
    
    const distanceFromCenter = (cardCenter - containerCenter) / (containerRect.width / 2);
    
    const s = 1.15 - Math.abs(distanceFromCenter) * 0.3;
    setScale(Math.max(0.85, s));
    
    setPerspective(distanceFromCenter * 20); 
    setOpacity(1 - Math.abs(distanceFromCenter) * 0.5);
    setBlur(Math.abs(distanceFromCenter) * 1.5);
  });

  return (
    <motion.div
      ref={cardRef}
      animate={{ y: [0, -5, 0] }}
      transition={{ 
        duration: 3 + Math.random() * 2, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: index * 0.2
      }}
      style={{ 
        rotateY: perspective,
        scale: scale,
        opacity: opacity,
        filter: `blur(${blur}px)`,
        perspective: '1000px'
      }}
      whileHover={{ 
        scale: 1.25, 
        opacity: 1, 
        filter: 'blur(0px)',
        rotateY: 0,
        zIndex: 50
      }}
      className="relative shrink-0 w-[160px] h-[80px] flex items-center justify-center group"
    >
      <div className="absolute inset-0 glass rounded-xl border border-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-all group-hover:border-brand-primary/40 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] overflow-hidden">
        {/* Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="relative z-10 flex items-center gap-3">
        <img 
          src={logo.icon} 
          alt={logo.name} 
          className="h-6 grayscale brightness-[5] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" 
        />
        <span className="text-[9px] font-black text-white/50 group-hover:text-white uppercase tracking-[0.2em] transition-colors whitespace-nowrap">
          {logo.name}
        </span>
      </div>

      {/* Center Glow */}
      <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 blur-2xl rounded-full transition-all" />
    </motion.div>
  );
}
