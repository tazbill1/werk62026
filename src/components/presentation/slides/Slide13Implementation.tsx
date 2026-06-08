import { motion } from 'framer-motion';

export const Slide13Implementation = () => {
  const steps = [
    {
      num: 1,
      color: '#1D9E75',
      circleBg: 'rgba(29,158,117,0.15)',
      title: 'Strategy',
      sub: 'The Who, What & How',
      bullets: ['Define your goals', 'Map your team structure', 'Build your engagement plan'],
    },
    {
      num: 2,
      color: '#378ADD',
      circleBg: 'rgba(55,138,221,0.15)',
      title: 'Set-Up',
      sub: 'Built for your dealership',
      bullets: ['Platform customization', 'Brand integration', 'Admin & manager training'],
    },
    {
      num: 3,
      color: '#7F77DD',
      circleBg: 'rgba(127,119,221,0.15)',
      title: 'Go Live',
      sub: 'In-person launch day',
      bullets: ['On-site team launch', 'Employee app activation', 'First check-ins & challenges'],
    },
    {
      num: 4,
      color: '#B5E550',
      circleBg: 'rgba(181,229,80,0.12)',
      title: 'Collaboration',
      sub: 'Ongoing partnership',
      bullets: ['Monthly coaching sessions', 'Strategy & data reviews', 'New ideas, executed together'],
    },
  ];

  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2145 50%, #0a1a38 100%)' }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-8 z-10 text-lg font-bold tracking-tight">
        <span style={{ color: '#4FC3F7' }}>werk</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>and</span>
        <span style={{ color: '#B5E550' }}>me</span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-16 pt-16 pb-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="slide-kicker mb-4" style={{ color: '#4FC3F7' }}>
            Your path to a fully engaged team
          </div>
          <h2 className="slide-title text-white">
            Four steps. Four weeks.{' '}
            <span style={{ color: '#4FC3F7' }}>Fully live.</span>
          </h2>
          <p className="slide-body mt-5 max-w-[1100px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We guide you through every step — from strategy to launch — and stay by your side long after go-live.
          </p>
        </motion.div>

        {/* 4-step grid */}
        <div className="relative w-full mb-10">
          {/* Connector lines */}
          <div className="absolute top-[44px] left-[10%] right-[10%] h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div
            className="absolute top-[43px] left-[10%] right-[10%] h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #1D9E75, #378ADD, #7F77DD, #B5E550)', opacity: 0.4 }}
          />

          <div className="grid grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Circle */}
                <div
                  className="w-[90px] h-[90px] rounded-full flex items-center justify-center relative z-10 mb-2"
                  style={{ background: s.circleBg, border: `3px solid ${s.color}` }}
                >
                  <div className="slide-subtitle font-bold text-white leading-none">{s.num}</div>
                </div>
                <div className="slide-kicker mb-3" style={{ color: s.color }}>
                  Step
                </div>

                {/* Card */}
                <div
                  className="w-full rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${s.color}33`,
                    borderTop: `3px solid ${s.color}`,
                    padding: '28px 24px',
                  }}
                >
                  <div className="slide-subtitle font-bold text-white mb-1">{s.title}</div>
                  <div className="slide-caption mb-5" style={{ color: s.color }}>{s.sub}</div>
                  <ul className="space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="slide-body flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        <span style={{ color: s.color }} className="mt-1.5 text-[10px]">●</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Culture Coach pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-6 rounded-[48px] max-w-[900px] w-full"
          style={{ background: 'rgba(29,158,117,0.08)', border: '1px solid rgba(29,158,117,0.2)', padding: '20px 32px' }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white slide-body font-bold flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #1D9E75, #4FC3F7)' }}
          >
            CC
          </div>
          <div>
            <div className="slide-kicker mb-1" style={{ color: '#4FC3F7' }}>
              Your dedicated Culture Coach
            </div>
            <div className="slide-body" style={{ color: 'rgba(255,255,255,0.55)' }}>
              With you from day one — bringing ideas, running the playbook, and doing the heavy lifting.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="px-8 py-4 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <span className="slide-chrome" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Built for dealerships. Proven in the showroom.
        </span>
        <span className="slide-chrome font-semibold" style={{ color: '#1D9E75' }}>
          Werk • Life • Community
        </span>
      </div>
    </div>
  );
};

