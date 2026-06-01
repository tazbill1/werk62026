import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Users, Sparkles, Award } from 'lucide-react';

export const Slide06WorkforceChanged = () => {
  const segments = [
    {
      icon: Sparkles,
      tag: 'Gen Z & Millennials',
      stat: '75%',
      statLabel: 'of your workforce by 2025',
      desc: 'Digital-first. Expect purpose, recognition, and continuous feedback — not annual reviews.',
    },
    {
      icon: Users,
      tag: 'Women',
      stat: '62%',
      statLabel: 'of new-car buyers, only 20% of dealership jobs',
      desc: 'The biggest untapped talent and customer-trust pool in automotive retail.',
    },
    {
      icon: Award,
      tag: 'Experienced 40+',
      stat: '2×',
      statLabel: 'longer tenure when supported',
      desc: 'Deep product and customer expertise — if dealerships invest in growth, not just hiring.',
    },
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <SlideHeader />
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-werk-cyan mb-4">
            <Users className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Today's Workforce</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Your Workforce Has Changed
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            It's not one generation — it's three audiences with very different expectations.
            Winning dealerships speak to all of them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((seg, index) => (
            <motion.div
              key={seg.tag}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-3xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl gradient-werk-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <seg.icon className="w-6 h-6 text-werk-dark" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-werk-cyan mb-2">
                  {seg.tag}
                </div>
                <div className="text-4xl font-bold text-gradient-werk leading-none mb-1">
                  {seg.stat}
                </div>
                <div className="text-sm font-medium text-foreground mb-3">{seg.statLabel}</div>
                <div className="text-sm text-muted-foreground mt-auto">{seg.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-werk-navy/10 rounded-2xl px-8 py-4">
            <p className="text-lg text-foreground">
              <span className="font-semibold">The dealership that adapts</span> to all three
              <span className="font-semibold text-werk-blue"> wins the talent war.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
