import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for solo founders and small startups.",
      features: ["3 Social Accounts", "AI Content Generation", "Basic Analytics", "Weekly Reports"],
      highlight: false
    },
    {
      name: "Growth",
      price: "149",
      description: "Ideal for scaling companies and marketing teams.",
      features: ["Unlimited Accounts", "Market Intelligence Engine", "Advanced Analytics", "Daily Optimization", "Priority Support"],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs.",
      features: ["Custom AI Training", "Dedicated Account Manager", "API Access", "White-label Reports", "SLA Guarantee"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[48px] leading-tight font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-white/60">Choose the plan that fits your growth stage.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col ${
                plan.highlight ? 'scale-105 z-10' : ''
              }`}
            >
              <div className={`glass p-10 rounded-[3rem] h-full flex flex-col ${
                plan.highlight ? 'border-primary/50 glow-purple' : 'border-white/5'
              }`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price === 'Custom' ? '' : '$'}{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-white/50">/mo</span>}
                  </div>
                  <p className="text-white/50 text-sm mt-4">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.highlight 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
                }`}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>

              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-20">
                  Most Popular
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
