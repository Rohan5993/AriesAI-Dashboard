import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Play, Sparkles, BarChart3, Share2, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import NetworkBackground from './NetworkBackground';
import { XIcon } from './Icons';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const platformsOpacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const centralOrbOpacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const centralOrbScale = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0.8, 1, 1, 0.8]);

  const platforms = [
    { icon: XIcon, angle: 0, radius: 200 },
    { icon: Linkedin, angle: 60, radius: 250 },
    { icon: Instagram, angle: 120, radius: 220 },
    { icon: Youtube, angle: 180, radius: 280 },
    { icon: Facebook, angle: 240, radius: 230 },
    { icon: MessageCircle, angle: 300, radius: 260 },
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-animate">
        {/* Network Background */}
        <NetworkBackground />
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center pointer-events-none">
          <motion.div
            style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
            className="mb-8 pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-reflection relative">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/80">Next-Gen Marketing Intelligence</span>
            </div>
          </motion.div>

          <motion.h1
            style={{ 
              opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]),
              y: useTransform(smoothProgress, [0, 0.1], [0, -20])
            }}
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight mb-8 leading-[1.1] pointer-events-auto"
          >
            Turn Your Marketing Into an <br />
            <span className="text-gradient">Autonomous Growth Engine</span>
          </motion.h1>

          <motion.p
            style={{ 
              opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]),
              y: useTransform(smoothProgress, [0, 0.1], [0, -20])
            }}
            className="max-w-2xl mx-auto text-[1rem] text-white/60 mb-12 pointer-events-auto"
          >
            Northstar Studio analyzes markets, generates content, and automatically publishes across all social media platforms. Experience the future of marketing execution.
          </motion.p>

          <motion.div
            style={{ 
              opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]),
              y: useTransform(smoothProgress, [0, 0.1], [0, -20])
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
          >
            <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Start Automating <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Play className="w-5 h-5 fill-current" /> See Demo
            </button>
          </motion.div>
        </div>

        {/* Animation Layer */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          
          {/* Central Orb */}
          <motion.div
            style={{
              opacity: centralOrbOpacity,
              scale: centralOrbScale,
            }}
            className="w-32 h-32 rounded-full bg-primary/20 blur-xl flex items-center justify-center neon-glow relative z-20"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          {/* Floating Platforms */}
          <motion.div
            style={{ opacity: platformsOpacity }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            {platforms.map((platform, i) => {
              const x = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0, Math.cos((platform.angle * Math.PI) / 180) * platform.radius, Math.cos((platform.angle * Math.PI) / 180) * platform.radius, 0]);
              const y = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0, Math.sin((platform.angle * Math.PI) / 180) * platform.radius, Math.sin((platform.angle * Math.PI) / 180) * platform.radius, 0]);

              return (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute',
                    x,
                    y,
                    scale: useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]),
                  }}
                  className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center border-white/10 shadow-2xl relative z-30"
                >
                  <platform.icon className="w-8 h-8 text-white/80" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
