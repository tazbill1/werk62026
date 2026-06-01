import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Bot, MessageSquare, Brain, RefreshCw, BarChart3, Lock, Building2, Shield, Key, ClipboardList, Clock, Sparkles, Target } from 'lucide-react';

type Tab = 'features' | 'security' | 'value';

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-start">
    <div className="w-10 h-10 rounded-lg bg-werk-cyan/15 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-werk-cyan" />
    </div>
    <div>
      <div className="text-white font-semibold text-sm mb-1">{title}</div>
      <div className="text-white/60 text-xs leading-relaxed">{desc}</div>
    </div>
  </div>
);

export const SlideHelpMe = () => {
  const [tab, setTab] = useState<Tab>('features');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'features', label: 'What it does' },
    { id: 'security', label: 'How it\u2019s secured' },
    { id: 'value', label: 'Why it matters' },
  ];

  const stats = [
    { stat: '67%', label: 'of employee questions are repetitive and easily automated' },
    { stat: '24/7', label: 'availability — nights, weekends, holidays' },
    { stat: '30 sec', label: 'avg response vs. hours waiting for a manager' },
    { stat: '100%', label: 'consistent, accurate answers every time' },
  ];

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-werk-cyan blur-3xl" />
      </div>

      <SlideHeader light />

      <div className="relative z-10 w-full max-w-6xl px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-werk-lime mb-3">
            <Bot className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">AI HR Assistant</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Your Dealership's <span className="text-gradient-werk">AI HR Assistant</span>
          </h2>
          <p className="mt-3 text-lg text-white/70 max-w-2xl mx-auto">
            Your dealership's AI-powered HR assistant — trained on your policies, available to every employee, 24/7.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-start">
          {/* Phone visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <div className="w-[280px] bg-werk-dark rounded-[32px] p-2 shadow-2xl border border-white/10">
              <div className="rounded-[26px] overflow-hidden bg-gradient-to-b from-werk-navy to-werk-dark">
                {/* Chat header */}
                <div className="px-4 pt-4 pb-3 border-b border-white/10 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-werk-cyan/20 border border-werk-cyan/40 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-werk-cyan" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-[12px] font-bold leading-tight">
                      help<span className="text-werk-lime">me</span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-white/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-werk-lime animate-pulse" />
                      Online · AI HR Assistant
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="p-3 space-y-2.5 min-h-[320px]">
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-end"
                  >
                    <div className="bg-werk-cyan text-werk-dark rounded-2xl rounded-br-md px-3 py-2 max-w-[80%]">
                      <div className="text-[10px] font-medium leading-snug">
                        How many PTO days do I have left this year?
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/10 text-white rounded-2xl rounded-bl-md px-3 py-2 max-w-[85%]">
                      <div className="text-[10px] leading-snug">
                        You have <span className="text-werk-lime font-bold">7 PTO days</span> remaining for 2026. Requests need 2 weeks notice through your manager.
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="flex justify-end"
                  >
                    <div className="bg-werk-cyan text-werk-dark rounded-2xl rounded-br-md px-3 py-2 max-w-[80%]">
                      <div className="text-[10px] font-medium leading-snug">
                        What's the dress code on Saturdays?
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/10 text-white rounded-2xl rounded-bl-md px-3 py-2 max-w-[85%]">
                      <div className="text-[10px] leading-snug">
                        Saturdays are business casual — polo with dealership logo and clean slacks. No jeans on the showroom floor.
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-2 flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </motion.div>
                </div>

                {/* Input */}
                <div className="px-3 pb-3 pt-2 border-t border-white/10">
                  <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-2">
                    <MessageSquare className="w-3 h-3 text-white/40" />
                    <span className="text-[9px] text-white/40">Ask anything...</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabbed content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex gap-2 mb-5">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    tab === t.id
                      ? 'bg-werk-cyan text-werk-dark'
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {tab === 'features' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2.5">
                <FeatureCard icon={MessageSquare} title="Instant answers, any time" desc="Employees ask in plain language and get instant answers — PTO, dress code, benefits, returns. No waiting, no digging through handbooks." />
                <FeatureCard icon={Brain} title="Trained on your dealership" desc="helpMe only knows what your dealership teaches it. Upload handbooks, SOPs, policies, and FAQs — it learns your store, not generic answers." />
                <FeatureCard icon={RefreshCw} title="Always up to date" desc="Update the knowledge base once and every employee gets the right answer immediately. No outdated binders or conflicting information." />
                <FeatureCard icon={BarChart3} title="See what employees are asking" desc="Managers get visibility into common questions. If 15 people ask about the holiday schedule, that's a signal to communicate proactively." />
              </motion.div>
            )}

            {tab === 'security' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2.5">
                <div className="bg-werk-cyan/10 border border-werk-cyan/20 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Lock className="w-6 h-6 text-werk-cyan" />
                    <div>
                      <div className="text-white font-semibold">Enterprise-grade security</div>
                      <div className="text-white/60 text-xs">Your data never leaves your environment</div>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Powered by a dedicated, secure AI platform purpose-built for business communications. Your dealership's data is completely isolated — never shared, never used to train other models.
                  </p>
                </div>
                <FeatureCard icon={Building2} title="Dealership-isolated data" desc="Each dealership gets its own private knowledge base, completely walled off from every other client." />
                <FeatureCard icon={Shield} title="Secure AI infrastructure" desc="Encrypted storage, secure API communications, and no third-party data sharing. Your information stays yours." />
                <FeatureCard icon={Key} title="Admin-controlled knowledge" desc="Only authorized admins edit the knowledge base. The AI only answers from approved content — never makes things up." />
                <FeatureCard icon={ClipboardList} title="Audit trail" desc="Every question and answer is logged. Full transparency for management on what employees ask and what the AI says." />
              </motion.div>
            )}

            {tab === 'value' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2.5">
                <div className="grid grid-cols-2 gap-2.5">
                  {stats.map((s, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <div className="text-werk-lime text-2xl font-bold mb-1">{s.stat}</div>
                      <div className="text-white/60 text-[11px] leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <FeatureCard icon={Clock} title="Give managers their time back" desc="Stop answering the same questions 10 times a day. helpMe handles the routine so managers focus on selling cars and developing people." />
                <FeatureCard icon={Sparkles} title="Supercharge onboarding" desc="New hires can ask anything in their first 90 days without feeling like they're bugging coworkers — like a patient mentor on call." />
                <FeatureCard icon={Target} title="Only as good as you make it" desc="helpMe reflects your dealership's commitment to its people. The more you train it, the more valuable it becomes." />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
