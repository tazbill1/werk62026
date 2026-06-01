import { useState, useMemo } from 'react';

const MIDNIGHT = '#1E2248';
const ULTRA = '#1A51A0';
const SAPPHIRE = '#39BDE1';
const CHARTREUSE = '#DDDE40';
const MUTED = 'rgba(255,255,255,0.6)';

const AVG_SALARY = 60000;
const REPLACEMENT_COST = 15000; // 25% of salary
const DISENGAGED_RATE = 0.17;
const DISENGAGED_COST_RATE = 0.34;

const fmt = (n: number) => n.toLocaleString();
const fmtMoney = (n: number) => `$${Math.round(n).toLocaleString()}`;

export const SlideCostComparison = () => {
  const [employees, setEmployees] = useState(65);
  const [turnoverRate, setTurnoverRate] = useState(42);

  const calc = useMemo(() => {
    const lost = Math.round(employees * (turnoverRate / 100));
    const turnoverCost = lost * REPLACEMENT_COST;
    const disengaged = Math.round(employees * DISENGAGED_RATE);
    const disengagementCost = Math.round(disengaged * AVG_SALARY * DISENGAGED_COST_RATE);
    const combined = turnoverCost + disengagementCost;
    return { lost, turnoverCost, disengaged, disengagementCost, combined };
  }, [employees, turnoverRate]);

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
            {/* Left card */}
            <div
              className="p-8 md:border-r"
              style={{ borderColor: `${ULTRA}66` }}
            >
              <h3
                className="text-2xl mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
              >
                The Cost of Turnover
              </h3>
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
                Source: NADA Dealership Workforce Study
              </p>
            </div>

            {/* Right card */}
            <div className="p-8">
              <h3
                className="text-2xl mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
              >
                The Cost of Apathy
              </h3>
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

          {/* Row 2 */}
          <div
            className="rounded-xl p-8"
            style={{
              backgroundColor: `${ULTRA}33`,
              borderTop: `2px solid ${CHARTREUSE}`,
            }}
          >
            <h3
              className="text-2xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
            >
              What This Means for Your Store
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div>
                <p
                  className="text-xs uppercase tracking-wider mb-4"
                  style={{ color: MUTED }}
                >
                  Your store's numbers
                </p>

                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: '#FFFFFF' }}
                    >
                      Number of employees
                    </label>
                    <input
                      type="number"
                      min={1}
                      value={employees}
                      onChange={(e) => setEmployees(Math.max(0, Number(e.target.value) || 0))}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                      style={{
                        backgroundColor: MIDNIGHT,
                        color: '#FFFFFF',
                        border: `1px solid ${ULTRA}`,
                        boxShadow: 'none',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 2px ${SAPPHIRE}`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: '#FFFFFF' }}
                    >
                      Current turnover rate %
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={turnoverRate}
                      onChange={(e) => setTurnoverRate(Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                      style={{
                        backgroundColor: MIDNIGHT,
                        color: '#FFFFFF',
                        border: `1px solid ${ULTRA}`,
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 2px ${SAPPHIRE}`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-wider" style={{ color: MUTED }}>
                    Employees lost per year
                  </p>
                  <p className="text-2xl font-semibold" style={{ color: '#FFFFFF' }}>
                    {fmt(calc.lost)}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider" style={{ color: MUTED }}>
                    Annual turnover cost
                  </p>
                  <p className="text-4xl font-bold" style={{ color: CHARTREUSE }}>
                    {fmtMoney(calc.turnoverCost)}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider" style={{ color: MUTED }}>
                    Disengaged employees still on payroll
                  </p>
                  <p className="text-2xl font-semibold" style={{ color: '#FFFFFF' }}>
                    {fmt(calc.disengaged)}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider" style={{ color: MUTED }}>
                    Cost of disengagement
                  </p>
                  <p className="text-4xl font-bold" style={{ color: SAPPHIRE }}>
                    {fmtMoney(calc.disengagementCost)}
                  </p>
                </div>

                <div className="pt-4 border-t" style={{ borderColor: `${ULTRA}66` }}>
                  <p className="text-xs uppercase tracking-wider" style={{ color: MUTED }}>
                    Combined annual drag
                  </p>
                  <p
                    className="text-5xl md:text-6xl font-extrabold"
                    style={{ color: '#FFFFFF' }}
                  >
                    {fmtMoney(calc.combined)}
                  </p>
                </div>
              </div>
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
