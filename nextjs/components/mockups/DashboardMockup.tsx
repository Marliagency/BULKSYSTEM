"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Body Weight", value: "82.4", unit: "kg", delta: "+0.6", positive: true },
  { label: "Calories", value: "3,240", unit: "kcal", delta: "+12%", positive: true },
  { label: "Consistency", value: "94", unit: "%", delta: "↑ 3pt", positive: true },
  { label: "Recovery", value: "87", unit: "/100", delta: "Good", positive: true },
];

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
const weekStatus = [true, true, true, true, false, false, false];

const chartPoints = [62, 70, 65, 78, 72, 85, 80, 88, 84, 91, 87, 95];

export default function DashboardMockup({ className = "" }: { className?: string }) {
  const maxVal = Math.max(...chartPoints);
  const minVal = Math.min(...chartPoints);
  const range = maxVal - minVal;

  const svgH = 80;
  const svgW = 300;
  const pts = chartPoints.map((v, i) => {
    const x = (i / (chartPoints.length - 1)) * svgW;
    const y = svgH - ((v - minVal) / range) * svgH * 0.85 - 4;
    return [x, y];
  });

  const linePath = pts
    .map(([x, y], i) => {
      if (i === 0) return `M ${x},${y}`;
      const [px, py] = pts[i - 1];
      const cpx = (px + x) / 2;
      return `C ${cpx},${py} ${cpx},${y} ${x},${y}`;
    })
    .join(" ");

  const areaPath =
    linePath +
    ` L ${pts[pts.length - 1][0]},${svgH} L ${pts[0][0]},${svgH} Z`;

  return (
    <div className={`relative ${className}`}>
      {/* Outer glow */}
      <div className="absolute -inset-8 bg-[radial-gradient(ellipse,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Window chrome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#0B0B0B] shadow-[0_40px_100px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.06)_inset]"
      >
        {/* Topbar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
          <span className="ml-auto font-mono text-[10px] text-[#52525B]">bulksystem · overview</span>
        </div>

        {/* Sidebar + content layout */}
        <div className="flex">
          {/* Mini sidebar */}
          <div className="w-10 border-r border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] flex flex-col items-center py-4 gap-4">
            {["◈", "▦", "◉", "◷", "◎"].map((icon, i) => (
              <div
                key={i}
                className={`text-sm ${i === 0 ? "text-[#10B981]" : "text-[#3F3F46]"}`}
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-[#F5F5F5]">Good morning, Alex</div>
                <div className="text-[10px] text-[#52525B] font-mono mt-0.5">Week 12 · Day 4 · Bulk phase</div>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.15)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[10px] text-[#10B981] font-medium">On track</span>
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-4 gap-2">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-xl p-2.5"
                >
                  <div className="text-[9px] text-[#52525B] mb-1">{m.label}</div>
                  <div className="font-mono text-sm font-medium text-[#F5F5F5] leading-none">
                    {m.value}
                    <span className="text-[9px] text-[#52525B] ml-0.5">{m.unit}</span>
                  </div>
                  <div className="text-[9px] text-[#10B981] mt-1">{m.delta}</div>
                </motion.div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-[#A1A1AA] font-medium">Weight Progress</span>
                <span className="text-[9px] text-[#52525B] font-mono">12 weeks</span>
              </div>
              <svg width="100%" viewBox={`0 0 ${svgW} ${svgH}`} className="overflow-visible">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#areaGrad)" />
                <motion.path
                  d={linePath}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                {pts.map(([x, y], i) => (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="2.5"
                    fill="#10B981"
                    stroke="#0B0B0B"
                    strokeWidth="1.5"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + (i / chartPoints.length) * 0.8, duration: 0.2 }}
                  />
                ))}
              </svg>
            </div>

            {/* Week tracker + today's tasks */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded-xl p-3">
                <div className="text-[10px] text-[#A1A1AA] mb-2">This week</div>
                <div className="flex gap-1.5">
                  {weekDays.map((d, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div
                        className={`w-5 h-5 rounded-md text-[8px] flex items-center justify-center font-medium transition-colors ${
                          weekStatus[i]
                            ? "bg-[#10B981] text-black"
                            : i === 4
                            ? "bg-[rgba(16,185,129,0.15)] border border-[rgba(16,185,129,0.3)] text-[#10B981]"
                            : "bg-[rgba(255,255,255,0.04)] text-[#52525B]"
                        }`}
                      >
                        {weekStatus[i] ? "✓" : d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded-xl p-3">
                <div className="text-[10px] text-[#A1A1AA] mb-2">Today</div>
                <div className="space-y-1.5">
                  {[
                    { label: "Upper Push A", done: true },
                    { label: "3,200 kcal target", done: false },
                    { label: "8h sleep goal", done: false },
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <div
                        className={`w-3 h-3 rounded-sm flex items-center justify-center text-[7px] flex-shrink-0 ${
                          t.done
                            ? "bg-[#10B981] text-black"
                            : "border border-[rgba(255,255,255,0.1)]"
                        }`}
                      >
                        {t.done && "✓"}
                      </div>
                      <span
                        className={`text-[9px] ${
                          t.done ? "line-through text-[#52525B]" : "text-[#A1A1AA]"
                        }`}
                      >
                        {t.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
