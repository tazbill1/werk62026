import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useDealership } from '@/contexts/DealershipContext';
import { SlideHeader } from '../SlideHeader';

const MIDNIGHT = '#1E2248';
const ULTRA = '#1A51A0';
const SAPPHIRE = '#39BDE1';
const CHARTREUSE = '#DDDE40';
const MUTED = 'rgba(255,255,255,0.6)';

const AVG_SALARY = 60000;
const REPLACEMENT_COST = 15000;

const fmt = (n: number) => n.toLocaleString();
const fmtMoney = (n: number) => `$${Math.round(n).toLocaleString()}`;

export const SlideCostComparison = () => {
  const { data, employeesLost, effectiveTurnoverRate } = useDealership();

  const annualCost = useMemo(
    () => employeesLost * REPLACEMENT_COST,
    [employeesLost]
  );

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: MIDNIGHT, fontFamily: 'Inter, sans-serif' }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600;700&display=swap');`}</style>

      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl" style={{ backgroundColor: CHARTREUSE }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl" style={{ backgroundColor: SAPPHIRE }} />
      </div>

      <SlideHeader light />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: SAPPHIRE }}>
            Based on what you shared
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Here's what turnover is <span style={{ color: CHARTREUSE }}>costing you</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Turnover % card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl p-10 text-center flex flex-col justify-center"
            style={{
              backgroundColor: `${ULTRA}33`,
              border: `1px solid ${ULTRA}66`,
            }}
          >
            <p className="text-xs uppercase tracking-wider mb-4" style={{ color: MUTED }}>
              Your annual turnover rate
            </p>
            <motion.p
              key={effectiveTurnoverRate}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-7xl md:text-8xl font-black"
              style={{ color: SAPPHIRE }}
            >
              {effectiveTurnoverRate}%
            </motion.p>
            <p className="mt-4 text-white/70">
              {fmt(employeesLost)} of {fmt(data.employees)} employees lost per year
            </p>
          </motion.div>

          {/* Annual cost card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-10 text-center flex flex-col justify-center"
            style={{
              backgroundColor: `${ULTRA}33`,
              border: `1px solid ${CHARTREUSE}66`,
              borderTop: `3px solid ${CHARTREUSE}`,
            }}
          >
            <p className="text-xs uppercase tracking-wider mb-4" style={{ color: MUTED }}>
              Estimated annual cost
            </p>
            <motion.p
              key={annualCost}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-6xl md:text-7xl font-black"
              style={{ color: CHARTREUSE }}
            >
              {fmtMoney(annualCost)}
            </motion.p>
            <p className="mt-4 text-white/70 text-sm">
              {fmt(employeesLost)} lost × {fmtMoney(REPLACEMENT_COST)} to hire, train &amp; ramp
            </p>
          </motion.div>
        </div>

        {/* Assumptions / source */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center space-y-2"
        >
          <p className="text-xs" style={{ color: MUTED }}>
            Assumes {fmtMoney(AVG_SALARY)} average salary and {fmtMoney(REPLACEMENT_COST)} replacement cost per employee (hire + train + ramp).
          </p>
          <p className="text-xs italic" style={{ color: MUTED }}>
            Source: NADA Dealership Workforce Study (2025 Report) — 2024 calendar year data, 2,500+ dealerships, 246,000 payroll records.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideCostComparison;
