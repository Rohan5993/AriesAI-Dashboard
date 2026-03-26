import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass rounded-[4rem] overflow-hidden border-primary/20 h-[500px] md:h-[700px] w-full"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[120px] -z-10 pointer-events-none" />
          
          {/* CTA Content */}
          <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 h-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl"
            >
              Ready to Scale Your <br />
              <span className="text-gradient">Growth Automatically?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 mb-12 max-w-2xl"
            >
              Join hundreds of forward-thinking companies using Northstar Studio to dominate their markets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/dashboard" className="px-10 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                Get Started Now
              </Link>
              <button className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all">
                Schedule a Demo
              </button>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/20 rounded-tl-[4rem] pointer-events-none z-20" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-secondary/20 rounded-br-[4rem] pointer-events-none z-20" />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
