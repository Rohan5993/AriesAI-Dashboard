import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, TrendingDown, Clock, Layers } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-6 h-6 text-red-400" />,
      title: "Inconsistent Lead Flow",
      description: "Manual marketing efforts lead to unpredictable results and missed opportunities."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-orange-400" />,
      title: "Wasted Marketing Budgets",
      description: "Spending money on campaigns that don't convert due to lack of real-time intelligence."
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-400" />,
      title: "Slow Campaign Execution",
      description: "Taking weeks to go from idea to launch while competitors move at lightning speed."
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "Tool Overload",
      description: "Managing 10+ disconnected tools just to keep your social media active."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Marketing Today Is <span className="text-red-400">Fragmented</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Traditional marketing teams are overwhelmed by data and manual tasks. Northstar Studio solves the complexity of modern growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
