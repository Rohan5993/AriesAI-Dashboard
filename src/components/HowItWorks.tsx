import React from 'react';
import { motion } from 'motion/react';
import { Search, Lightbulb, Zap, BarChart3, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Market Intelligence",
      description: "AI gathers competitor and industry data to understand your landscape."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-secondary" />,
      title: "Strategy",
      description: "AI identifies growth opportunities and creates a custom execution plan."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Execution",
      description: "AI generates and publishes high-performing content across all channels."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: "Optimization",
      description: "AI continuously improves results based on real-time performance data."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[48px] leading-tight font-bold mb-6">How It Works</h2>
          <p className="text-white/60">Four steps to autonomous growth.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-xs font-bold">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
