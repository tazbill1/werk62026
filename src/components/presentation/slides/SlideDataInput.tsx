import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Users, UserPlus, Percent, ArrowRight, TrendingUp } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useDealership } from '@/contexts/DealershipContext';

export const SlideDataInput = () => {
  const { data, setData, employeesLost, effectiveTurnoverRate } = useDealership();

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-werk-lime blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-werk-cyan blur-3xl" />
      </div>
      
      <SlideHeader light />
      <div className="relative z-10 w-full max-w-5xl px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-werk-lime mb-3">
            <Users className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Personalize Your Presentation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tell Us About <span className="text-werk-lime">Your Dealership</span>
          </h2>
          <p className="mt-3 text-white/50 text-lg max-w-2xl mx-auto">
            Just two quick numbers and we'll show you where things stand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 space-y-8"
          >
            {/* Employees */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-werk-lime/20 flex items-center justify-center">
                  <Users className="w-4 h-4 text-werk-lime" />
                </div>
                <div className="flex-1">
                  <label className="text-white font-medium text-sm">Team members</label>
                </div>
                <span className="text-werk-lime font-bold text-xl">{data.employees}</span>
              </div>
              <Slider
                value={[data.employees]}
                onValueChange={(val) => setData({ employees: val[0] })}
                min={10}
                max={500}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-white/40 text-xs mt-1">
                <span>10</span>
                <span>500</span>
              </div>
            </div>
            
            {/* Turnover Input - Toggle between Monthly Hires and Rate */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-werk-cyan/20 flex items-center justify-center">
                    {data.useMonthlyHires ? (
                      <UserPlus className="w-4 h-4 text-werk-cyan" />
                    ) : (
                      <Percent className="w-4 h-4 text-werk-cyan" />
                    )}
                  </div>
                  <div className="flex-1">
                    <label className="text-white font-medium text-sm">
                      {data.useMonthlyHires ? 'Hires per month' : 'Annual turnover rate'}
                    </label>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-werk-cyan font-bold text-xl">
                    {data.useMonthlyHires ? data.monthlyHires : `${data.turnoverRate}%`}
                  </span>
                  <Switch
                    checked={!data.useMonthlyHires}
                    onCheckedChange={(checked) => setData({ useMonthlyHires: !checked })}
                    className="scale-75"
                  />
                </div>
              </div>
              
              {data.useMonthlyHires ? (
                <>
                  <Slider
                    value={[data.monthlyHires]}
                    onValueChange={(val) => setData({ monthlyHires: val[0] })}
                    min={1}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-white/40 text-xs">
                      <span>1/mo</span>
                      <span className="mx-2">—</span>
                      <span>20/mo</span>
                    </div>
                    <div className="bg-werk-cyan/20 border border-werk-cyan/40 rounded-lg px-3 py-1">
                      <span className="text-werk-cyan font-bold text-sm">= {effectiveTurnoverRate}%</span>
                      <span className="text-white/60 text-xs ml-1">annual</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Slider
                    value={[data.turnoverRate]}
                    onValueChange={(val) => setData({ turnoverRate: val[0] })}
                    min={10}
                    max={80}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-white/40 text-xs mt-1">
                    <span>10%</span>
                    <span>80%</span>
                  </div>
                </>
              )}
              
              <p className="text-white/30 text-xs mt-2 flex items-center gap-1">
                <span>Toggle for</span>
                <span className="text-werk-cyan/70">
                  {data.useMonthlyHires ? 'annual rate %' : 'monthly hires'}
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right: Turnover Summary (no $ math) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-werk-cyan/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-werk-cyan" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Your Turnover Snapshot</h3>
                <p className="text-white/50 text-sm">Based on what you shared</p>
              </div>
            </div>

            {/* Big turnover % */}
            <motion.div
              key={effectiveTurnoverRate}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-6"
            >
              <p className="text-werk-cyan font-black text-6xl md:text-7xl">
                {effectiveTurnoverRate}%
              </p>
              <p className="text-white/60 mt-2">annual turnover rate</p>
            </motion.div>

            {/* Breakdown */}
            <div className="bg-black/20 rounded-xl p-4 space-y-3">
              <p className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-3">The Breakdown</p>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">Team size</span>
                <span className="text-white font-semibold">{data.employees} people</span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">
                  {data.useMonthlyHires ? 'Monthly hires' : 'Annual turnover'}
                </span>
                <span className="text-white font-semibold">
                  {data.useMonthlyHires ? `${data.monthlyHires}/mo` : `${data.turnoverRate}%`}
                </span>
              </div>
              
              <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                <span className="text-white/70 text-sm">Employees lost per year</span>
                <span className="text-werk-lime font-bold text-lg">{employeesLost}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-white/40 text-xs">
              <ArrowRight className="w-3 h-3" />
              <span>We'll get into the financial impact on a later slide.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
