import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { ChevronRight, Download, Calendar, Briefcase, Globe, Code, Braces, Sparkles, Cpu, Database, Cloud, Zap, Hexagon, Loader2, Check } from 'lucide-react';
import { jsPDF } from 'jspdf';

const FLOATING_ICONS = [
  { icon: Code, color: 'text-brand-cyan', top: '15%', left: '10%', delay: 0 },
  { icon: Braces, color: 'text-brand-primary', top: '25%', right: '15%', delay: 1 },
  { icon: Zap, color: 'text-yellow-400', top: '65%', left: '12%', delay: 2 },
  { icon: Hexagon, color: 'text-brand-primary', bottom: '20%', right: '20%', delay: 1.5 },
  { icon: Cpu, color: 'text-brand-cyan', top: '40%', right: '10%', delay: 0.5 },
  { icon: Database, color: 'text-brand-primary', bottom: '30%', left: '15%', delay: 2.5 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const portraitX = useSpring(useTransform(mouseX, [0, 1], [15, -15]), { stiffness: 50, damping: 20 });
  const portraitY = useSpring(useTransform(mouseY, [0, 1], [15, -15]), { stiffness: 50, damping: 20 });

  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'success'>('idle');

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    if (downloadStatus !== 'idle') return;

    setDownloadStatus('downloading');
    const cvUrl = 'https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785515918/mwejzkrxww05u1was6tn.png';
    
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = cvUrl;
      
      img.onload = () => {
        const pdf = new jsPDF({
          orientation: img.width > img.height ? 'l' : 'p',
          unit: 'px',
          format: [img.width, img.height]
        });
        
        pdf.addImage(img, 'PNG', 0, 0, img.width, img.height);
        pdf.save('Fathi_Hammami_CV.pdf');
        setDownloadStatus('success');
        setTimeout(() => setDownloadStatus('idle'), 3000);
      };
      
      img.onerror = () => {
        window.open(cvUrl, '_blank');
        setDownloadStatus('idle');
      };
    } catch (error) {
      window.open(cvUrl, '_blank');
      setDownloadStatus('idle');
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050816]"
    >
      {/* Background Layer: Dubai Skyline */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-full h-full"
        >
          <img 
            src="https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785455563/qmotttaqcqogwajcuvja.png" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover opacity-30 brightness-[0.4] contrast-[0.8] saturate-[0.7] blur-[1.5px]"
            referrerPolicy="no-referrer"
          />
          {/* Atmospheric Haze */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/50 to-transparent" />
          <div className="absolute inset-0 bg-brand-primary/5 mix-blend-overlay" />
        </motion.div>
        
        {/* Digital Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Middle Layers: Particles & Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.08)_0%,_transparent_70%)] blur-[100px]" />
        
        {FLOATING_ICONS.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -40, 0],
              x: [0, 20, 0]
            }}
            transition={{ 
              duration: 8 + Math.random() * 5, 
              repeat: Infinity, 
              delay: item.delay,
              ease: "easeInOut"
            }}
            className="absolute z-10"
            style={{ 
              top: item.top, 
              left: item.left, 
              right: item.right, 
              bottom: item.bottom 
            }}
          >
            <item.icon className={`w-8 h-8 ${item.color} opacity-40 blur-[1px]`} />
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10 pt-32 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] space-y-8 md:space-y-12 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-success/5 border border-brand-success/20 backdrop-blur-md mx-auto lg:mx-0"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-brand-success shadow-[0_0_10px_#00E676] animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold text-brand-success tracking-[0.2em] uppercase">
                Available for Freelance
              </span>
            </motion.div>

            <div className="space-y-4 md:space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Hi, I'm <br />
                <span className="text-gradient drop-shadow-[0_0_30px_rgba(79,70,229,0.2)]">Fathi Hammami</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-medium tracking-wide flex flex-wrap justify-center lg:justify-start items-center gap-3 md:gap-4"
              >
                Web Designer <span className="hidden md:block w-2 h-2 rounded-full bg-brand-primary/50" /> App Developer <span className="hidden md:block w-2 h-2 rounded-full bg-brand-primary/50" /> UI/UX Designer
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl text-gray-500 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0"
            >
              I build premium websites, modern web applications, and exceptional digital experiences that combine creativity, performance, and cutting-edge technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] rounded-2xl md:rounded-[24px] font-bold text-white transition-all shadow-[0_20px_40px_rgba(79,70,229,0.4)] hover:shadow-[0_20px_60px_rgba(79,70,229,0.6)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 text-base md:text-lg">View My Work</span>
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2 relative z-10" />
              </motion.a>
              
              <motion.a
                href="#"
                onClick={handleDownloadCV}
                whileHover={{ scale: downloadStatus === 'idle' ? 1.05 : 1, y: downloadStatus === 'idle' ? -2 : 0 }}
                whileTap={{ scale: downloadStatus === 'idle' ? 0.98 : 1 }}
                className={`w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 border backdrop-blur-2xl rounded-2xl md:rounded-[24px] font-bold text-white transition-all shadow-xl ${
                  downloadStatus === 'downloading' 
                    ? 'bg-white/10 border-brand-primary/50 cursor-wait' 
                    : downloadStatus === 'success'
                    ? 'bg-brand-success/20 border-brand-success/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-brand-primary/30'
                }`}
              >
                {downloadStatus === 'downloading' ? (
                  <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin text-brand-primary" />
                ) : downloadStatus === 'success' ? (
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-brand-success" />
                ) : (
                  <Download className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-y-1" />
                )}
                <span className="text-base md:text-lg">
                  {downloadStatus === 'downloading' ? 'Generating...' : downloadStatus === 'success' ? 'Downloaded' : 'Download CV'}
                </span>
                {downloadStatus === 'idle' && (
                  <div className="absolute -inset-[1px] rounded-2xl md:rounded-[24px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]" />
                )}
              </motion.a>
            </motion.div>

            {/* Premium Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-12"
            >
              <StatCard icon={Calendar} value="08+" label="Years Exp" />
              <StatCard icon={Briefcase} value="120+" label="Projects" />
              <StatCard icon={Globe} value="15+" label="Countries" />
            </motion.div>
          </div>

          {/* Right Content: Portrait with Depth FX */}
          <div className="w-full lg:w-[45%] flex justify-center items-center relative h-[400px] sm:h-[500px] lg:h-[800px] order-1 lg:order-2">
            {/* Energy Rings Middle Layer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 sm:scale-90 lg:scale-100">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] sm:w-[550px] lg:w-[700px] h-[400px] sm:h-[550px] lg:h-[700px] border border-brand-primary/10 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] border border-brand-cyan/5 rounded-full"
              />
              <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.15)_0%,_transparent_70%)] blur-[80px]" />
            </div>

            {/* Portrait Container */}
            <motion.div
              style={{ x: portraitX, y: portraitY }}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="relative z-10 w-[280px] sm:w-[350px] lg:w-[500px] aspect-[4/5] p-2 group"
            >
              {/* Backlight / Halo */}
              <div className="absolute -inset-10 bg-brand-primary/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative w-full h-full rounded-[40px] md:rounded-[60px] overflow-hidden bg-brand-bg-secondary shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10">
                <img
                  src="https://res.cloudinary.com/dlyhuwdrw/image/upload/v1785431689/fsquqbcadg2ziru8jjst.png"
                  alt="Fathi Hammami"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Cinematic Lighting Layers */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Rim Light Effect */}
                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(255,255,255,0.2)] opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-primary/5 to-white/10 opacity-30" />
                  
                  {/* Bottom Blending */}
                  <div className="absolute bottom-0 inset-x-0 h-32 md:h-64 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-transparent" />
                </div>
              </div>

              {/* Floating Element - Top Right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 md:-top-12 md:-right-12 z-20 glass p-3 md:p-5 rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl backdrop-blur-3xl"
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-brand-primary/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Premium</div>
                    <div className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">Experience</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, value, label }: { icon: any, value: string, label: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.05 }}
      className="relative group cursor-default"
    >
      <div className="absolute -inset-[1px] bg-gradient-to-b from-brand-primary/40 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]" />
      <div className="relative glass p-8 rounded-[32px] transition-all hover:bg-white/10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-6 transition-all group-hover:scale-110 group-hover:bg-brand-primary/20 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]">
          <Icon className="w-8 h-8 text-brand-primary" />
        </div>
        <div>
          <div className="text-4xl font-black text-white group-hover:text-brand-primary transition-colors tracking-tight">{value}</div>
          <div className="text-[11px] text-gray-500 uppercase tracking-[0.3em] font-black mt-2 leading-none">{label}</div>
        </div>
      </div>
    </motion.div>
  );
}

function BrandLogo({ name, icon }: { name: string, icon: string }) {
  return (
    <div className="flex items-center gap-3 group cursor-default transition-all hover:opacity-100 opacity-60">
      <img src={icon} alt={name} className="h-6 grayscale brightness-[5] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" />
      <span className="hidden xl:block text-[10px] font-bold text-white tracking-[0.3em] uppercase">{name}</span>
    </div>
  );
}

