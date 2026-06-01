import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Users, Sparkles, Award } from 'lucide-react';

export const SlideWorkforceWants = () => {
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
      stat: '62% / 20%',
      statLabel: 'of new-car buyers vs. dealership jobs',
      desc: "Automotive's largest untapped talent pool — and the customers most of your buyers identify with.",
    },
    {
      icon: Award,
      tag: 'Experienced 40+',
      stat: '2×',
      statLabel: 'longer tenure when invested in',
      desc: 'Deep product and customer expertise. They stay when dealerships offer growth, not just a paycheck.',
    },
  ];

  const shared = [
    { label: 'Purpose & meaning', pct: 76 },
    { label: 'Recognition', pct: 69 },
    { label: 'Growth opportunities', pct: 87 },
    { label: 'Work-life balance', pct: 72 },
  ];

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-werk-cyan blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-werk-lime blur-3xl" />
      </div>

      <SlideHeader light />
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-werk-cyan mb-3">
            <Users className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Today's Workforce</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Your Workforce Has Changed
          </h2>
          <p className="mt-3 text-lg text-white/70 max-w-3xl mx-auto">
            It's not one generation — it's three audiences with very different expectations.
            Winning dealerships speak to all of them.
          </p>
        </motion.div>

        {/* Three segments */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {segments.map((seg, index) => (
            <motion.div
              key={seg.tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl gradient-werk-accent flex items-center justify-center mb-3">
                <seg.icon className="w-5 h-5 text-werk-dark" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-werk-cyan mb-1">
                {seg.tag}
              </div>
              <div className="text-3xl font-bold text-white leading-none mb-1">{seg.stat}</div>
              <div className="text-xs text-werk-lime mb-2">{seg.statLabel}</div>
              <div className="text-sm text-white/70">{seg.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Shared expectations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
        >
          <h3 className="text-base font-semibold text-white mb-3 text-center">
            What all three groups want from work
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shared.map((d, index) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.08 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-xs font-medium">{d.label}</span>
                  <span className="text-werk-lime font-bold text-xs">{d.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${d.pct}%` }}
                    transition={{ delay: 0.8 + index * 0.08, duration: 0.8 }}
                    className="h-full gradient-werk-horizontal rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-5 text-center"
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
            <p className="text-white">
              <span className="font-semibold">The dealership that adapts</span> to all three
              <span className="font-semibold text-werk-lime"> wins the talent war.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
