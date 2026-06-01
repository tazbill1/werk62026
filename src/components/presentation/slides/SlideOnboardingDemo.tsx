import { useState } from "react";

const C = {
  midnight: "#1E2248",
  ultra: "#1A51A0",
  sapphire: "#39BDE1",
  chart: "#DDDE40",
  dark: "#131638",
  card: "rgba(255,255,255,0.06)",
  border: "rgba(255,255,255,0.08)",
  white: "#FFFFFF",
  dim: "rgba(255,255,255,0.5)",
  muted: "rgba(255,255,255,0.3)",
  red: "#E24B4A",
  green: "#2ECC71",
  orange: "#FFA500",
};

const screens = [
  { id: "home", label: "Home Screen" },
  { id: "phases", label: "My Progress" },
  { id: "tasks", label: "Task List" },
  { id: "detail_video", label: "Video Task" },
  { id: "detail_quiz", label: "Quiz" },
  { id: "detail_live", label: "Live Activity" },
  { id: "manager", label: "Dashboard" },
  { id: "manager_detail", label: "Employee Detail" },
  { id: "notifications", label: "Alerts" },
];

function Bar({ pct, color = C.sapphire, h = 6 }: { pct: number; color?: string; h?: number }) {
  return (
    <div style={{ height: h, background: "rgba(255,255,255,0.08)", borderRadius: h, overflow: "hidden" }}>
      <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: h }} />
    </div>
  );
}

function Tag({ text, color, bg }: { text: string; color: string; bg: string }) {
  return <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 12, background: bg, color, fontWeight: 500 }}>{text}</span>;
}

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: "100%", maxWidth: 340, margin: "0 auto", flexShrink: 0 }}>
      <div style={{ background: "#0a0d24", borderRadius: 36, padding: 10, boxShadow: "0 25px 80px rgba(0,0,0,0.6)" }}>
        <div style={{ background: `linear-gradient(180deg, ${C.midnight} 0%, ${C.dark} 100%)`, borderRadius: 28, overflow: "hidden", minHeight: 620 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 22px 6px", color: C.white, fontSize: 13, fontWeight: 600 }}>
            <span>9:41</span>
            <span style={{ fontSize: 10, color: C.muted }}>● ● ●</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

function Hdr({ title, back, right }: { title: string; back?: boolean; right?: React.ReactNode }) {
  return (
    <div style={{ background: C.ultra, padding: "12px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {back && <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 18 }}>‹</span>}
        <span style={{ color: C.white, fontSize: 15, fontWeight: 600, letterSpacing: 0.5 }}>{title}</span>
      </div>
      {right}
    </div>
  );
}

function Nav({ active = "home", mgr = false }: { active?: string; mgr?: boolean }) {
  const tabs = mgr
    ? [{ id: "home", icon: "⌂", l: "Home" }, { id: "bell", icon: "🔔", l: "Alerts" }, { id: "team", icon: "👥", l: "Team" }, { id: "menu", icon: "☰", l: "More" }]
    : [{ id: "home", icon: "⌂", l: "Home" }, { id: "bell", icon: "🔔", l: "Alerts" }, { id: "profile", icon: "👤", l: "Profile" }, { id: "menu", icon: "☰", l: "More" }];
  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 0 6px", borderTop: `1px solid ${C.border}`, marginTop: "auto" }}>
      {tabs.map(t => (
        <div key={t.id} style={{ textAlign: "center", fontSize: 9, color: active === t.id ? C.sapphire : C.muted, fontWeight: active === t.id ? 600 : 400 }}>
          <div style={{ fontSize: 18, marginBottom: 2 }}>{t.icon}</div>{t.l}
        </div>
      ))}
    </div>
  );
}

function HomeScreen() {
  const mods = [
    { n: "challengeMe", s: "Contests", i: "⭐" }, { n: "noticeMe", s: "Recognition", i: "👍" },
    { n: "goMe", s: "Rewards", i: "🏆" }, { n: "serveYou", s: "Events", i: "🤝" },
    { n: "growMe", s: "Professional Growth", i: "💚" }, { n: "askMe", s: "Surveys", i: "📋" },
  ];
  return (
    <Phone>
      <div style={{ background: C.ultra, padding: "6px 18px 10px", textAlign: "center" }}>
        <span style={{ color: C.white, fontSize: 20, fontWeight: 700, letterSpacing: 1 }}>werk<span style={{ fontWeight: 400 }}>and</span>me</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", padding: "12px 18px" }}>
        <div style={{ textAlign: "center" }}><div style={{ color: C.chart, fontSize: 24, fontWeight: 700 }}>250</div><div style={{ color: C.dim, fontSize: 10 }}>Points to Give</div></div>
        <div style={{ width: 54, height: 54, borderRadius: "50%", border: `3px solid ${C.chart}`, background: C.ultra, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>👤</div>
        <div style={{ textAlign: "center" }}><div style={{ color: C.chart, fontSize: 24, fontWeight: 700 }}>3,543</div><div style={{ color: C.dim, fontSize: 10 }}>Points to Spend</div></div>
      </div>
      <div style={{ padding: "0 14px 10px", display: "flex", flexDirection: "column", gap: 5 }}>
        {mods.map(m => (
          <div key={m.n} style={{ background: "rgba(57,189,225,0.12)", border: "1px solid rgba(57,189,225,0.15)", borderRadius: 10, padding: "9px 14px", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: C.chart, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>{m.i}</div>
            <div><div style={{ color: C.white, fontSize: 13, fontWeight: 600 }}>{m.n}</div><div style={{ color: C.dim, fontSize: 11 }}>{m.s}</div></div>
          </div>
        ))}
        <div style={{ background: C.chart, borderRadius: 10, padding: "12px 14px", textAlign: "center", position: "relative" }}>
          <div style={{ color: C.midnight, fontSize: 15, fontWeight: 700 }}>Onboarding</div>
          <div style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: C.red, color: "white", fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 10 }}>3 left</div>
        </div>
      </div>
      <Nav active="home" />
    </Phone>
  );
}

function PhasesScreen() {
  const phases = [
    { n: "Day 1", s: "Orientation & setup", st: "done", t: "6/6", p: 100 },
    { n: "Week 1", s: "Role introduction", st: "active", t: "5/8", p: 63 },
    { n: "30-Day", s: "Competency building", st: "locked", t: "0/12", p: 0 },
    { n: "60-Day", s: "Independence", st: "locked", t: "0/8", p: 0 },
    { n: "90-Day", s: "Mastery & assessment", st: "locked", t: "0/6", p: 0 },
  ];
  return (
    <Phone>
      <Hdr title="Onboarding" back />
      <div style={{ padding: "14px 18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 42, height: 42, borderRadius: "50%", background: C.sapphire, display: "flex", alignItems: "center", justifyContent: "center", color: C.midnight, fontWeight: 700, fontSize: 14 }}>JM</div>
          <div style={{ flex: 1 }}><div style={{ color: C.white, fontSize: 14, fontWeight: 600 }}>Jordan Martinez</div><div style={{ color: C.dim, fontSize: 11 }}>Sales Consultant • Started May 2</div></div>
        </div>
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: 14, marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ color: C.white, fontSize: 13, fontWeight: 600 }}>Overall Progress</span>
            <span style={{ color: C.sapphire, fontSize: 18, fontWeight: 700 }}>30%</span>
          </div>
          <Bar pct={30} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}><span style={{ color: C.muted, fontSize: 10 }}>12 of 40 tasks</span><span style={{ color: C.muted, fontSize: 10 }}>Day 18 of 90</span></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {phases.map(p => {
            const done = p.st === "done", act = p.st === "active", lock = p.st === "locked";
            return (
              <div key={p.n} style={{ background: act ? `linear-gradient(135deg, ${C.chart}, #c8c930)` : done ? "rgba(57,189,225,0.08)" : C.card, border: `1px solid ${act ? C.chart : done ? "rgba(57,189,225,0.2)" : C.border}`, borderRadius: 12, padding: "10px 14px", opacity: lock ? 0.45 : 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ fontSize: 16 }}>{done ? "✅" : act ? "▶" : "🔒"}</div>
                    <div><div style={{ color: act ? C.midnight : C.white, fontSize: 13, fontWeight: 600 }}>{p.n}</div><div style={{ color: act ? "rgba(30,34,72,0.6)" : C.dim, fontSize: 11 }}>{p.s}</div></div>
                  </div>
                  {done && <Tag text="Complete" color={C.green} bg="rgba(46,204,113,0.15)" />}
                  {act && <span style={{ color: C.midnight, fontSize: 12, fontWeight: 700 }}>{p.t}</span>}
                </div>
                {act && <div style={{ marginTop: 8 }}><Bar pct={p.p} color={C.midnight} h={4} /></div>}
              </div>
            );
          })}
        </div>
      </div>
      <Nav active="home" />
    </Phone>
  );
}

function TaskListScreen() {
  const tasks = [
    { t: "Watch: Road to the Sale overview", ty: "Video", s: "done", b: "Video", bc: C.sapphire },
    { t: "Read: dealership dress code policy", ty: "Document", s: "done", b: "Doc", bc: C.dim },
    { t: "Meet & greet knowledge check", ty: "Quiz - Passed ✓", s: "done", b: "Quiz", bc: C.chart },
    { t: "Shadow senior sales consultant (2 hrs)", ty: "Live activity", s: "done", b: "Live", bc: C.orange },
    { t: "Complete DMS login & CRM setup", ty: "Checklist", s: "done", b: "Task", bc: C.dim },
    { t: "First solo vehicle walkaround", ty: "Live activity • Manager verified", s: "pending", b: "Live", bc: C.orange },
    { t: "Watch: walkaround techniques", ty: "Video", s: "todo", b: "Video", bc: C.sapphire },
    { t: "Product knowledge quiz", ty: "Quiz", s: "todo", b: "Quiz", bc: C.chart },
  ];
  return (
    <Phone>
      <Hdr title="Week 1 Tasks" back />
      <div style={{ padding: "14px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}><span style={{ color: C.dim, fontSize: 12 }}>5 of 8 complete</span><span style={{ color: C.sapphire, fontSize: 14, fontWeight: 700 }}>63%</span></div>
        <Bar pct={63} />
        <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 12 }}>
          {tasks.map((t, i) => (
            <div key={i} style={{ background: t.s === "pending" ? "rgba(221,222,64,0.06)" : C.card, border: `1px solid ${t.s === "pending" ? "rgba(221,222,64,0.25)" : C.border}`, borderRadius: 10, padding: "10px 12px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 18, height: 18, borderRadius: 5, flexShrink: 0, background: t.s === "done" ? C.sapphire : t.s === "pending" ? C.chart : "transparent", border: t.s === "todo" ? `2px solid ${C.muted}` : "none", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.midnight, fontWeight: 700 }}>
                {t.s === "done" && "✓"}{t.s === "pending" && "⏳"}
              </div>
              <div style={{ flex: 1 }}><div style={{ color: C.white, fontSize: 11.5, fontWeight: 500 }}>{t.t}</div><div style={{ color: C.muted, fontSize: 10, marginTop: 2 }}>{t.ty}</div></div>
              <div style={{ background: `${t.bc}22`, color: t.bc, fontSize: 9, padding: "2px 7px", borderRadius: 6, fontWeight: 500 }}>{t.b}</div>
            </div>
          ))}
        </div>
      </div>
      <Nav active="home" />
    </Phone>
  );
}

function VideoTaskScreen() {
  return (
    <Phone>
      <Hdr title="Task Detail" back />
      <div style={{ padding: "14px 18px" }}>
        <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: 12, height: 150, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", marginBottom: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "white" }}>▶</div>
          <div style={{ position: "absolute", bottom: 8, right: 10, background: "rgba(0,0,0,0.6)", color: "white", fontSize: 10, padding: "2px 7px", borderRadius: 5 }}>12:34</div>
        </div>
        <div style={{ fontSize: 16, color: C.white, fontWeight: 600, marginBottom: 6 }}>Road to the Sale Overview</div>
        <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.5, marginBottom: 12 }}>Watch this introduction to the complete Road to the Sale process. Covers all 9 steps from Meet & Greet through Delivery.</div>
        <div style={{ display: "flex", gap: 6, marginBottom: 14 }}><Tag text="📹 Video" color={C.sapphire} bg="rgba(57,189,225,0.15)" /><Tag text="Self-reported" color={C.dim} bg="rgba(255,255,255,0.08)" /></div>
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "9px 12px", display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <span style={{ fontSize: 14 }}>⭐</span><span style={{ color: C.chart, fontSize: 12, fontWeight: 500 }}>+15 points on completion</span>
        </div>
        <button style={{ width: "100%", background: C.chart, color: C.midnight, border: "none", borderRadius: 10, padding: "12px 0", fontSize: 14, fontWeight: 700 }}>Mark as Complete</button>
      </div>
      <Nav active="home" />
    </Phone>
  );
}

function QuizScreen() {
  return (
    <Phone>
      <Hdr title="Knowledge Check" back />
      <div style={{ padding: "14px 18px" }}>
        <div style={{ fontSize: 16, color: C.white, fontWeight: 600, marginBottom: 4 }}>Meet & Greet Quiz</div>
        <div style={{ fontSize: 12, color: C.dim, marginBottom: 14 }}>Test your knowledge. 80% to pass.</div>
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, marginBottom: 10 }}>
          <div style={{ color: C.sapphire, fontSize: 10, fontWeight: 600, marginBottom: 6 }}>Question 2 of 5</div>
          <Bar pct={40} h={3} />
          <div style={{ color: C.white, fontSize: 13, fontWeight: 500, marginTop: 12, lineHeight: 1.4 }}>What is the first thing you should do when a customer walks onto the lot?</div>
        </div>
        {[{ t: "Ask what vehicle they're interested in", s: false }, { t: "Greet them with a smile and introduce yourself", s: true }, { t: "Direct them to the showroom", s: false }, { t: "Give them a business card", s: false }].map((a, i) => (
          <div key={i} style={{ background: a.s ? "rgba(57,189,225,0.12)" : C.card, border: `1.5px solid ${a.s ? C.sapphire : C.border}`, borderRadius: 10, padding: "10px 12px", marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: a.s ? C.sapphire : "transparent", border: `2px solid ${a.s ? C.sapphire : C.muted}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "white", fontWeight: 700, flexShrink: 0 }}>{a.s && "✓"}</div>
            <span style={{ color: C.white, fontSize: 12 }}>{a.t}</span>
          </div>
        ))}
        <button style={{ width: "100%", background: C.sapphire, color: "white", border: "none", borderRadius: 10, padding: "12px 0", fontSize: 14, fontWeight: 700, marginTop: 6 }}>Next Question →</button>
      </div>
      <Nav active="home" />
    </Phone>
  );
}

function LiveScreen() {
  return (
    <Phone>
      <Hdr title="Task Detail" back />
      <div style={{ padding: "14px 18px" }}>
        <div style={{ background: "rgba(255,165,0,0.08)", border: "1px solid rgba(255,165,0,0.15)", borderRadius: 12, padding: 16, textAlign: "center", marginBottom: 14 }}>
          <div style={{ fontSize: 30 }}>🚗</div>
          <div style={{ color: C.white, fontSize: 16, fontWeight: 600, marginTop: 6 }}>First Solo Walkaround</div>
          <div style={{ color: C.dim, fontSize: 12, marginTop: 6, lineHeight: 1.4 }}>Complete a full vehicle walkaround presentation with a customer without assistance.</div>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}><Tag text="👥 Live Activity" color={C.orange} bg="rgba(255,165,0,0.15)" /><Tag text="🔒 Manager Verified" color={C.chart} bg="rgba(221,222,64,0.15)" /></div>
        <div style={{ background: "rgba(221,222,64,0.08)", border: "1px solid rgba(221,222,64,0.2)", borderRadius: 8, padding: "10px 12px", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 16 }}>⏳</span>
          <div><div style={{ color: C.chart, fontSize: 12, fontWeight: 600 }}>Pending manager approval</div><div style={{ color: C.muted, fontSize: 10, marginTop: 2 }}>Submitted May 15, 2:30 PM</div></div>
        </div>
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: 12 }}>
          <div style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ color: C.sapphire, fontSize: 11, fontWeight: 600 }}>Jordan</span><span style={{ color: C.muted, fontSize: 9 }}>May 15, 2:30 PM</span></div>
            <div style={{ color: C.dim, fontSize: 11, lineHeight: 1.4 }}>Customer was interested in the Outback. Felt confident on safety but need to brush up on tech package.</div>
          </div>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ color: C.chart, fontSize: 11, fontWeight: 600 }}>Mike (Manager)</span><span style={{ color: C.muted, fontSize: 9 }}>May 15, 4:15 PM</span></div>
            <div style={{ color: C.dim, fontSize: 11, lineHeight: 1.4 }}>Good first effort! Work on the EyeSight presentation for next time.</div>
          </div>
        </div>
      </div>
      <Nav active="home" />
    </Phone>
  );
}

function MgrDash() {
  const emps = [
    { n: "Jordan Martinez", r: "Sales Consultant", d: "May 2", ph: "Week 1", p: 63, t: "5/8", a: 1, s: "ok" },
    { n: "Aisha Thompson", r: "BDC Rep", d: "Apr 28", ph: "30-Day", p: 45, t: "18/40", a: 2, s: "ok" },
    { n: "Ryan Cooper", r: "Service Advisor", d: "Apr 15", ph: "30-Day", p: 28, t: "11/40", a: 0, s: "behind" },
  ];
  return (
    <Phone>
      <Hdr title="Onboarding Dashboard" />
      <div style={{ padding: "14px 18px" }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
          {["Active (3)", "Completed (7)", "Inactive (1)"].map((f, i) => (
            <div key={f} style={{ fontSize: 11, padding: "5px 11px", borderRadius: 16, fontWeight: 500, background: i === 0 ? C.sapphire : "transparent", color: i === 0 ? C.midnight : C.muted, border: `1px solid ${i === 0 ? C.sapphire : C.border}` }}>{f}</div>
          ))}
        </div>
        <div style={{ background: "rgba(221,222,64,0.08)", border: "1px solid rgba(221,222,64,0.2)", borderRadius: 8, padding: "9px 12px", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 14 }}>⚠️</span><span style={{ color: C.chart, fontSize: 11, fontWeight: 500 }}>3 tasks need your approval</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {emps.map(e => (
            <div key={e.n} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "12px 14px", borderLeft: e.s === "behind" ? `3px solid ${C.red}` : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div><div style={{ color: C.white, fontSize: 13, fontWeight: 600 }}>{e.n}</div><div style={{ color: C.dim, fontSize: 10, marginTop: 2 }}>{e.r} • Started {e.d}</div></div>
                <div style={{ textAlign: "right" }}>
                  {e.s === "behind" && <Tag text="Behind" color={C.red} bg="rgba(226,75,74,0.15)" />}
                  {e.a > 0 && <div style={{ color: C.chart, fontSize: 10, fontWeight: 600, marginTop: e.s === "behind" ? 4 : 0 }}>⚠ {e.a} pending</div>}
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, marginBottom: 5 }}>
                <span style={{ color: C.sapphire, fontSize: 11, fontWeight: 500 }}>{e.ph}</span><span style={{ color: C.white, fontSize: 13, fontWeight: 700 }}>{e.p}%</span>
              </div>
              <Bar pct={e.p} color={e.s === "behind" ? C.red : C.sapphire} />
              <div style={{ color: C.muted, fontSize: 10, marginTop: 5 }}>{e.t} tasks complete</div>
            </div>
          ))}
        </div>
      </div>
      <Nav active="team" mgr />
    </Phone>
  );
}

function MgrDetail() {
  return (
    <Phone>
      <Hdr title="Jordan Martinez" back />
      <div style={{ padding: "14px 18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ width: 42, height: 42, borderRadius: "50%", background: C.sapphire, display: "flex", alignItems: "center", justifyContent: "center", color: C.midnight, fontWeight: 700, fontSize: 14 }}>JM</div>
          <div><div style={{ color: C.white, fontSize: 13, fontWeight: 600 }}>Sales Consultant</div><div style={{ color: C.dim, fontSize: 11 }}>Started May 2 • Day 18</div></div>
          <div style={{ marginLeft: "auto", color: C.sapphire, fontSize: 20, fontWeight: 700 }}>63%</div>
        </div>
        <div style={{ color: C.muted, fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Needs Your Approval</div>
        <div style={{ background: "rgba(221,222,64,0.06)", border: "1px solid rgba(221,222,64,0.2)", borderRadius: 10, padding: "12px 14px", marginBottom: 14 }}>
          <div style={{ color: C.white, fontSize: 13, fontWeight: 500 }}>First solo walkaround</div>
          <div style={{ color: C.dim, fontSize: 10, marginTop: 2 }}>Live Activity • Submitted May 15</div>
          <div style={{ color: C.dim, fontSize: 10, marginTop: 6, fontStyle: "italic" }}>"Covered all key features. Confident on safety but need to brush up on tech package."</div>
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <button style={{ flex: 1, background: C.green, color: "white", border: "none", borderRadius: 7, padding: "8px 0", fontSize: 12, fontWeight: 600 }}>✓ Approve</button>
            <button style={{ flex: 1, background: "transparent", color: C.dim, border: `1px solid ${C.border}`, borderRadius: 7, padding: "8px 0", fontSize: 12, fontWeight: 500 }}>Request Redo</button>
          </div>
        </div>
        <div style={{ color: C.muted, fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Phase Progress</div>
        {[{ n: "Day 1", p: 100, i: "✅" }, { n: "Week 1", p: 63, i: "▶" }, { n: "30-Day", p: 0, i: "🔒" }, { n: "60-Day", p: 0, i: "🔒" }, { n: "90-Day", p: 0, i: "🔒" }].map(ph => (
          <div key={ph.n} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, opacity: ph.p === 0 ? 0.4 : 1 }}>
            <span style={{ fontSize: 12, width: 18, textAlign: "center" }}>{ph.i}</span>
            <span style={{ color: C.white, fontSize: 12, fontWeight: 500, width: 56 }}>{ph.n}</span>
            <div style={{ flex: 1 }}><Bar pct={ph.p} h={4} /></div>
            <span style={{ color: C.dim, fontSize: 10, width: 30, textAlign: "right" }}>{ph.p}%</span>
          </div>
        ))}
      </div>
      <Nav active="team" mgr />
    </Phone>
  );
}


function NotiScreen() {
  return (
    <Phone>
      <Hdr title="Notification Examples" />
      <div style={{ padding: "14px 18px" }}>
        <div style={{ color: C.muted, fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>SMS — Morning Summary</div>
        <div style={{ background: "#1a3a1a", border: "1px solid rgba(46,204,113,0.2)", borderRadius: 12, padding: 12, marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}><span style={{ fontSize: 12 }}>💬</span><span style={{ color: C.green, fontSize: 11, fontWeight: 600 }}>SMS • 7:30 AM</span></div>
          <div style={{ color: C.white, fontSize: 11.5, lineHeight: 1.5 }}>WerkandMe: You have 3 onboarding tasks to review. Ryan Cooper is behind on 30-Day (28%). Tap to view.</div>
        </div>
        <div style={{ color: C.muted, fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>SMS — Urgent Alert</div>
        <div style={{ background: "#3a1a1a", border: "1px solid rgba(226,75,74,0.2)", borderRadius: 12, padding: 12, marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}><span style={{ fontSize: 12 }}>🚨</span><span style={{ color: C.red, fontSize: 11, fontWeight: 600 }}>SMS • 2:15 PM</span></div>
          <div style={{ color: C.white, fontSize: 11.5, lineHeight: 1.5 }}>WerkandMe: Ryan Cooper is 5 days past his 30-Day deadline with 4 tasks remaining.</div>
        </div>
        <div style={{ color: C.muted, fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Email — Morning Summary</div>
        <div style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, borderRadius: 12, padding: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}><span style={{ fontSize: 12 }}>📧</span><span style={{ color: C.sapphire, fontSize: 11, fontWeight: 600 }}>Email • 7:30 AM</span></div>
          <div style={{ color: C.dim, fontSize: 10, marginBottom: 8 }}>Subject: Your onboarding summary — May 20</div>
          <div style={{ borderRadius: 6, overflow: "hidden", border: `1px solid ${C.border}` }}>
            <div style={{ background: C.ultra, padding: "5px 8px", display: "grid", gridTemplateColumns: "1fr 60px 50px 50px", gap: 4, fontSize: 9, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}><span>Employee</span><span>Phase</span><span>Prog</span><span>Action</span></div>
            {[{ n: "Jordan M.", p: "Week 1", pc: 63, a: "1 appr." }, { n: "Aisha T.", p: "30-Day", pc: 45, a: "2 appr." }, { n: "Ryan C.", p: "30-Day", pc: 28, a: "Behind ⚠" }].map((r, i) => (
              <div key={i} style={{ padding: "5px 8px", display: "grid", gridTemplateColumns: "1fr 60px 50px 50px", gap: 4, fontSize: 9, color: C.white, borderTop: `1px solid ${C.border}` }}>
                <span>{r.n}</span><span style={{ color: C.sapphire }}>{r.p}</span><span>{r.pc}%</span>
                <span style={{ color: r.a.includes("⚠") ? C.red : C.chart, fontSize: 8 }}>{r.a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Nav active="bell" mgr />
    </Phone>
  );
}

const SCREEN_MAP: Record<string, React.FC> = {
  home: HomeScreen, phases: PhasesScreen, tasks: TaskListScreen,
  detail_video: VideoTaskScreen, detail_quiz: QuizScreen, detail_live: LiveScreen,
  manager: MgrDash, manager_detail: MgrDetail, notifications: NotiScreen,
};

const groups = [
  { label: "Employee View", ids: ["home", "phases", "tasks", "detail_video", "detail_quiz", "detail_live"] },
  { label: "Manager View", ids: ["manager", "manager_detail"] },
  { label: "Alerts", ids: ["notifications"] },
];

const descriptions: Record<string, string> = {
  home: "Home screen with active onboarding in chartreuse. Badge shows remaining tasks.",
  phases: "Phase overview with progress. Current phase highlighted, future phases locked.",
  tasks: "Task list with color-coded types, completion states, and pending approval highlights.",
  detail_video: "Video task with embedded player, self-reported completion, and optional points.",
  detail_quiz: "Knowledge check: multiple choice, progress tracking, 80% pass, unlimited retakes.",
  detail_live: "Manager-verified live activity with pending approval state and two-way notes.",
  manager: "Manager dashboard with filters, approval alerts, and behind warnings.",
  manager_detail: "Drill-in view with approve/redo actions and phase progress.",
  notifications: "SMS and email examples: short punchy texts, rich email with progress table.",
};

export const SlideOnboardingDemo = () => {
  const [active, setActive] = useState("phases");
  const Screen = SCREEN_MAP[active];
  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-auto py-8">
      <div className="w-full max-w-5xl px-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
        {/* Left: title + nav */}
        <div>
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-primary mb-2">
              <span className="text-sm font-semibold uppercase tracking-wider">GuideMe</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Structured 90-Day <span className="text-gradient-werk">Onboarding</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Interactive demo — tap any screen to preview the experience.
            </p>
          </div>

          <div className="space-y-4">
            {groups.map(g => (
              <div key={g.label}>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{g.label}</div>
                <div className="flex flex-wrap gap-2">
                  {g.ids.map(id => {
                    const s = screens.find(x => x.id === id)!;
                    const isActive = active === id;
                    return (
                      <button
                        key={id}
                        onClick={() => setActive(id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-card border border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground italic max-w-md leading-relaxed">
            {descriptions[active]}
          </p>
        </div>

        {/* Right: phone */}
        <div>
          <Screen />
        </div>
      </div>
    </div>
  );
};
