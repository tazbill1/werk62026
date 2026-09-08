import { useMemo } from 'react';
import { useDealership } from '@/contexts/DealershipContext';

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

  const leftStats = [
    { label: 'Industry-Wide Turnover (2024)', value: '42%' },
    { label: 'Non-Luxury Store Turnover', value: '45%' },
    { label: 'Sales Consultant Turnover (Non-Luxury)', value: '73%' },
    { label: 'Annual Industry Cost', value: '$20B+' },
  ];


  return (
    <>
      <div
        className="w-full h-full flex items-center justify-center px-4 py-2 overflow-hidden"
        style={{ backgroundColor: MIDNIGHT, fontFamily: 'Inter, sans-serif' }}
      >
        <div className="w-full max-w-[1200px] mx-auto space-y-1.5">
          {/* Row 1 */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden"
            style={{
              backgroundColor: MIDNIGHT,
              border: `1px solid ${ULTRA}66`,
            }}
          >
            {/* Left card - NADA 2025 Data */}
            <div
              className="p-3 md:border-r"
              style={{ borderColor: `${ULTRA}66` }}
            >
              <h3
                className="text-base mb-0.5"
                style={{ color: '#FFFFFF' }}
              >
                NADA 2025 Workforce Study
              </h3>
              <p className="text-[9px] mb-2" style={{ color: MUTED }}>
                2024 calendar year data · 2,500+ dealerships · 246,000 payroll records
              </p>
              <div className="space-y-1">
                {leftStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-[9px] uppercase tracking-wider" style={{ color: MUTED }}>
                      {s.label}
                    </p>
                    <p
                      className="text-lg md:text-xl font-bold mt-0"
                      style={{ color: CHARTREUSE }}
                    >
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[9px] mt-2 italic" style={{ color: MUTED }}>
                Source: NADA Dealership Workforce Study (2025 Report)
              </p>
            </div>

            {/* Right card */}
            <div className="p-3">
              {/* Headline */}
              <h3
                className="text-sm md:text-base font-bold leading-tight mb-0.5"
              >
                <span style={{ color: SAPPHIRE }}>42%</span>
                <span style={{ color: '#FFFFFF' }}> Leave. </span>
                <span style={{ color: CHARTREUSE }}>33%</span>
                <span style={{ color: '#FFFFFF' }}> Stay But Stop Caring.</span>
              </h3>

              {/* Subhead */}
              <p className="text-[10px] mb-1.5" style={{ color: MUTED }}>
                Turnover gets counted. Disengagement gets ignored. Both are costing you.
              </p>

              {/* Stat blocks */}
              <div className="space-y-1">
                <div
                  className="rounded-lg p-1.5"
                  style={{ backgroundColor: `${MIDNIGHT}cc`, border: `1px solid ${ULTRA}66` }}
                >
                  <p className="text-lg md:text-xl font-bold" style={{ color: CHARTREUSE }}>1 in 3</p>
                  <p className="text-[10px] text-white mt-0">
                    dealership employees say they're not engaged or excited about their job
                  </p>
                  <p className="text-[8px] italic mt-0" style={{ color: MUTED }}>
                    Cox Automotive Dealership Staffing Study
                  </p>
                </div>

                <div
                  className="rounded-lg p-1.5"
                  style={{ backgroundColor: `${MIDNIGHT}cc`, border: `1px solid ${ULTRA}66` }}
                >
                  <p className="text-lg md:text-xl font-bold" style={{ color: SAPPHIRE }}>59%</p>
                  <p className="text-[10px] text-white mt-0">
                    of the workforce is filling a seat and watching the clock — doing the minimum, psychologically checked out
                  </p>
                  <p className="text-[8px] italic mt-0" style={{ color: MUTED }}>
                    Gallup State of the Global Workplace
                  </p>
                </div>

                <div
                  className="rounded-lg p-1.5"
                  style={{ backgroundColor: `${MIDNIGHT}cc`, border: `1px solid ${ULTRA}66` }}
                >
                  <p className="text-lg md:text-xl font-bold" style={{ color: '#FFFFFF' }}>34% of salary</p>
                  <p className="text-[10px] text-white mt-0">
                    lost per disengaged employee per year in productivity
                  </p>
                  <p className="text-[8px] italic mt-0" style={{ color: MUTED }}>Gallup</p>
                </div>
              </div>

              {/* Bottom callout */}
              <div className="rounded-lg p-1.5 mt-1.5" style={{ backgroundColor: '#252a55' }}>
                <p className="text-[10px] italic leading-snug" style={{ color: MUTED }}>
                  "39% of managers haven't noticed their employee's performance has already dropped."
                </p>
                <p className="text-[9px] mt-0" style={{ color: 'rgba(255,255,255,0.4)' }}>— Gallup</p>
              </div>
            </div>
          </div>

          {/* Row 2 - personalized from slide 3 inputs */}
          <div
            className="rounded-xl p-3"
            style={{
              backgroundColor: `${ULTRA}33`,
              borderTop: `2px solid ${CHARTREUSE}`,
            }}
          >
            <h3
              className="text-base mb-0"
              style={{ color: '#FFFFFF' }}
            >
              What This Means for Your Store
            </h3>
            <p className="text-[10px] mb-2" style={{ color: MUTED }}>
              Based on the {fmt(data.employees)} employees you shared
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
              {/* Turnover % */}
              <div className="text-center">
                <p className="text-[9px] uppercase tracking-wider mb-0.5" style={{ color: MUTED }}>
                  Your annual turnover rate
                </p>
                <p className="text-3xl md:text-4xl font-black" style={{ color: SAPPHIRE }}>
                  {effectiveTurnoverRate}%
                </p>
                <p className="mt-0.5 text-[10px]" style={{ color: MUTED }}>
                  {fmt(employeesLost)} employees lost per year
                </p>
              </div>

              {/* Estimated annual cost */}
              <div className="text-center">
                <p className="text-[9px] uppercase tracking-wider mb-0.5" style={{ color: MUTED }}>
                  Estimated annual cost
                </p>
                <p className="text-3xl md:text-4xl font-black" style={{ color: CHARTREUSE }}>
                  {fmtMoney(annualCost)}
                </p>
                <p className="mt-0.5 text-[10px]" style={{ color: MUTED }}>
                  {fmt(employeesLost)} × {fmtMoney(REPLACEMENT_COST)} to hire, train &amp; ramp
                </p>
              </div>
            </div>

            <div className="mt-1.5 pt-1.5 border-t text-center" style={{ borderColor: `${ULTRA}66` }}>
              <p className="text-[9px] italic" style={{ color: MUTED }}>
                Turnover is the fire alarm. Disengagement is the slow leak. Most dealerships only fix what's on fire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideCostComparison;
