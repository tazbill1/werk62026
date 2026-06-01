import { motion } from 'framer-motion';
import { MessageSquareText, Sparkles, Users } from 'lucide-react';
import textmeConversation from '@/assets/textme-conversation.png.asset.json';

export const SlideTextMe = () => {
  const audiences = [
    'All Technicians',
    'Service Advisors',
    'Sales / BDC',
    'New Hires <90 Days',
    'Parts Team',
    'Managers',
  ];

  const useCases = [
    { title: 'Targeted Pulse', desc: 'Text a single department a focused question — get answers in minutes, not weeks.' },
    { title: 'Onboarding Check-Ins', desc: 'Automatic texts at day 7, 30, 60, 90 to new hires — catch issues before they quit.' },
    { title: 'Post-Training Feedback', desc: 'Follow up after a training session to confirm it landed and was useful.' },
    { title: 'Anonymous Concerns', desc: 'Employees text honestly without fear — surface issues leadership would never hear otherwise.' },
    { title: 'Exit-Risk Follow-Up', desc: 'When CheckMe flags a flight risk, the AI HR agent reaches out by text — conversationally.' },
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <MessageSquareText className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">TextMe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Meet Your Team <span className="text-gradient-werk">Where They Already Are</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
            Targeted SMS to specific teams — backed by a conversational AI HR agent that listens, follows up, and goes deeper than any survey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Audiences + Use cases */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 space-y-5"
          >
            <div className="bg-card rounded-2xl p-5 border shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-secondary" />
                <h3 className="font-bold text-foreground">Target Any Team</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {audiences.map((a, i) => (
                  <motion.span
                    key={a}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary/10 text-foreground border border-secondary/20"
                  >
                    {a}
                  </motion.span>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground italic">
                Internal team messaging only — not customer SMS.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-4 border-2 border-accent shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground text-sm">AI HR Agent</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Conversational, not a one-way blast. The AI asks, listens, and follows up — surfacing the "why" behind the answer.
              </p>
            </div>
          </motion.div>

          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 gradient-werk rounded-3xl opacity-20 blur-xl" />
              <img
                src={textmeConversation.url}
                alt="TextMe AI HR agent conversation"
                className="relative rounded-2xl shadow-2xl border border-white/10 max-h-[420px] object-contain"
              />
            </div>
          </motion.div>

          {/* Use cases */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl p-5 border shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageSquareText className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">Use Cases</h3>
            </div>
            <ul className="space-y-3">
              {useCases.map((uc, i) => (
                <motion.li
                  key={uc.title}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{uc.title}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{uc.desc}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
