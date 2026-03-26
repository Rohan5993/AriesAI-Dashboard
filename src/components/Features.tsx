import React from 'react';
import { motion } from 'motion/react';
import { Share2, Search, PenTool, Zap, BarChart3, RefreshCw } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "AI Social Media Automation",
      description: "Automatically creates and publishes posts across LinkedIn, X, Instagram, and more.",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Market Intelligence Engine",
      description: "Analyzes competitors, trends, and audience signals to find growth opportunities.",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Creates high-performing marketing content tailored to your brand voice.",
      color: "from-pink-500/20 to-pink-600/20"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Campaign Automation",
      description: "Deploys multi-channel campaigns across platforms with zero manual effort.",
      color: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Real-time insights into what's working and where to double down.",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Continuous Optimization",
      description: "AI continuously learns from performance data to improve results over time.",
      color: "from-red-500/20 to-red-600/20"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] leading-tight font-bold mb-6"
          >
            Features for <br />
            <span className="text-gradient">Hyper-Growth</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[2.5rem] relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
