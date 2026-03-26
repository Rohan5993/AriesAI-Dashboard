import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import ContentCalendar from '../components/ContentCalendar';
import FeatureShowcase3D from '../components/FeatureShowcase3D';
import Pricing from '../components/Pricing';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Global Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trusted By Section */}
        <section className="py-12 border-y border-white/5 bg-black/50 overflow-hidden">
          <div className="container mx-auto px-6">
            <p className="text-center text-white/30 text-sm font-medium uppercase tracking-widest mb-8">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-bold">NEXUS</span>
              <span className="text-2xl font-bold">VELOCITY</span>
              <span className="text-2xl font-bold">QUANTUM</span>
              <span className="text-2xl font-bold">ELEVATE</span>
              <span className="text-2xl font-bold">ORBIT</span>
            </div>
          </div>
        </section>

        <Problem />
        
        {/* Solution Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-[48px] leading-tight font-bold mb-8">Meet Northstar Studio</h2>
                <p className="text-xl text-white/60 mb-12 leading-relaxed">
                  Northstar Studio is an AI-native marketing intelligence system that continuously learns and executes campaigns automatically. It's not just a tool; it's your new autonomous marketing department.
                </p>
              </div>
              
              {/* Workflow Visualization */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 w-full pb-4">
                {['Market Intelligence', 'Strategy', 'Content', 'Automation', 'Optimization'].map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="glass px-8 py-4 rounded-full text-sm font-semibold border-primary/20 whitespace-nowrap cursor-pointer hover-gradient-border">
                      {step}
                    </div>
                    {i < 4 && <div className="hidden md:block w-8 md:w-12 h-px bg-white/20" />}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <Features />
        
        <FeatureShowcase3D />
        
        <HowItWorks />
        
        <ContentCalendar />
        
        <Pricing />
        
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
