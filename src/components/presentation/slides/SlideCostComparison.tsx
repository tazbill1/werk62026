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

  const rightStats = [
    { label: 'Employees Actively Disengaged', value: '17%' },
    { label: 'Productivity Loss', value: '18% lower' },
    { label: 'Profitability Impact', value: '21% lower' },
    { label: 'Cost Per Disengaged Employee', value: '34% of salary' },
  ];

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600;700&display=swap');`}</style>
      <div
        className="w-full min-h-full flex items-center justify-center p-8"
        style={{ backgroundColor: MIDNIGHT, fontFamily: 'Inter, sans-serif' }}
      >
        <div className="w-full max-w-[1200px] mx-auto space-y-6">
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
              className="p-8 md:border-r"
              style={{ borderColor: `${ULTRA}66` }}
            >
              <h3
                className="text-2xl mb-2"
                style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
              >
                NADA 2025 Workforce Study
              </h3>
              <p className="text-sm mb-6" style={{ color: MUTED }}>
                2024 calendar year data · 2,500+ dealerships · 246,000 payroll records
              </p>
              <div className="space-y-5">
                {leftStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xs uppercase tracking-wider" style={{ color: MUTED }}>
                      {s.label}
                    </p>
                    <p
                      className="text-3xl md:text-4xl font-bold mt-1"
                      style={{ color: CHARTREUSE }}
                    >
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-8 italic" style={{ color: MUTED }}>
                Source: NADA Dealership Workforce Study (2025 Report)
              </p>
            </div>

            {/* Right card */}
            <div className="p-8">
              <h3
                className="text-2xl mb-2"
                style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
              >
                The Hidden Cost of Apathy
              </h3>
              <p className="text-sm mb-6" style={{ color: MUTED }}>
                What happens when disengaged employees stay — and checked-out employees leave
              </p>
              <div className="space-y-5">
                {rightStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xs uppercase tracking-wider" style={{ color: MUTED }}>
                      {s.label}
                    </p>
                    <p
                      className="text-3xl md:text-4xl font-bold mt-1"
                      style={{ color: SAPPHIRE }}
                    >
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-8 italic" style={{ color: MUTED }}>
                Source: Gallup State of the American Workplace
              </p>
            </div>
          </div>

          {/* Row 2 - personalized from slide 3 inputs */}
          <div
            className="rounded-xl p-8"
            style={{
              backgroundColor: `${ULTRA}33`,
              borderTop: `2px solid ${CHARTREUSE}`,
            }}
          >
            <h3
              className="text-2xl mb-2"
              style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
            >
              What This Means for Your Store
            </h3>
            <p className="text-sm mb-8" style={{ color: MUTED }}>
              Based on the {fmt(data.employees)} employees you shared
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Turnover % */}
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider mb-3" style={{ color: MUTED }}>
                  Your annual turnover rate
                </p>
                <p className="text-7xl md:text-8xl font-black" style={{ color: SAPPHIRE }}>
                  {effectiveTurnoverRate}%
                </p>
                <p className="mt-3 text-sm" style={{ color: MUTED }}>
                  {fmt(employeesLost)} employees lost per year
                </p>
              </div>

              {/* Estimated annual cost */}
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider mb-3" style={{ color: MUTED }}>
                  Estimated annual cost
                </p>
                <p className="text-6xl md:text-7xl font-black" style={{ color: CHARTREUSE }}>
                  {fmtMoney(annualCost)}
                </p>
                <p className="mt-3 text-sm" style={{ color: MUTED }}>
                  {fmt(employeesLost)} × {fmtMoney(REPLACEMENT_COST)} to hire, train &amp; ramp
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t text-center space-y-1" style={{ borderColor: `${ULTRA}66` }}>
              <p className="text-xs" style={{ color: MUTED }}>
                Assumes {fmtMoney(AVG_SALARY)} average salary and {fmtMoney(REPLACEMENT_COST)} replacement cost per employee.
              </p>
              <p className="text-xs italic" style={{ color: MUTED }}>
                Source: NADA Dealership Workforce Study (2025 Report)
              </p>
            </div>
          </div>


          {/* Footer line */}
          <p
            className="text-center italic text-sm pt-2"
            style={{ color: MUTED }}
          >
            Turnover is the fire alarm. Disengagement is the slow leak. Most dealerships only fix what's on fire.
          </p>
        </div>
      </div>
    </>
  );
};

export default SlideCostComparison;
