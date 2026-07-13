import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, GitBranch, BarChart2, Shield, Bot } from 'lucide-react';

// Same restrained palette as the "Who Uses Us" section — blush, rose,
// deep maroon, ink, white — so the two sections read as one story.
const BLUSH = '#FF6FB5';
const ROSE = '#FF2D87';
const MAROON = '#8E1155';
const WINE = '#1A0510';

// rgba equivalents of ROSE (236,72,153), used for translucent fills/borders
const ROSE_RGB = '255,45,135';

const highlights = [
  { icon: GitBranch, label: 'AI Workflow Designer', color: ROSE },
  { icon: Bot, label: 'AI Agent Orchestration', color: BLUSH },
  { icon: BarChart2, label: 'Process Intelligence', color: BLUSH },
  { icon: Shield, label: 'Enterprise Integration Hub', color: MAROON },
];

export default function ConsolePreview() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${WINE} 0%, #0F0309 100%)` }}>
      {/* Fine grain — matches the "Who Uses Us" section's editorial texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      {/* Two restrained light sources — blush upper-right, maroon lower-left,
          both fading straight to black — instead of a flat purple wash */}
      <div
        className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${ROSE}2e 0%, transparent 65%)`, filter: 'blur(90px)' }}
      />
      <div
        className="absolute -bottom-52 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${MAROON}40 0%, transparent 65%)`, filter: 'blur(100px)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
              <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>Operations Hub</span>
            </div>
            <h2 className="font-orbitron text-4xl sm:text-5xl text-white mb-5">
              CedarLogics
              <br />
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${MAROON})`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Console
              </span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              The unified command center for your enterprise workflow automation. Deploy AI agents,
              design intelligent workflows, monitor execution in real time, and optimize business
              processes — all from a single operations console.
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-8">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${h.color}20`, boxShadow: `0 0 0 1px ${h.color}30` }}>
                      <Icon size={16} style={{ color: h.color }} />
                    </div>
                    <span className="text-sm text-white/90 font-medium">{h.label}</span>
                    <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
                  </div>
                );
              })}
            </div>

            <Link
              to="/console"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${ROSE}, ${MAROON})`,
                boxShadow: '0 4px 24px rgba(255,45,135,0.3)',
              }}
            >
              <Zap size={16} />
              Explore Console
              <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white/20">
                <ArrowRight size={14} className="text-white" />
              </span>
            </Link>
          </motion.div>

          {/* Right: console mockup with floating insights */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative py-8"
          >
            <div className="absolute -inset-8 rounded-3xl opacity-30"
              style={{ background: `radial-gradient(ellipse, ${ROSE} 0%, transparent 70%)` }} />
            <div className="absolute -inset-4 rounded-3xl opacity-20 blur-xl"
              style={{ background: `radial-gradient(ellipse, ${BLUSH} 0%, transparent 60%)` }} />

            {/* Floating insight cards — dot colors now cycle within the same palette */}
            {[
              { label: 'Cost Efficiency', value: '32% reduction', desc: 'vs last quarter', dot: ROSE, x: 'left-8', y: '-top-3', delay: 0 },
              { label: 'AI Accuracy', value: '97.4%', desc: 'across all models', dot: MAROON, x: '-right-4', y: 'top-8', delay: 0.15 },
              { label: 'Anomalies', value: '12 detected', desc: '3 critical · resolved', dot: BLUSH, x: '-left-2', y: 'bottom-12', delay: 0.3 },
              { label: 'Avg Response', value: '48ms', desc: '99.9% uptime', dot: ROSE, x: 'right-12', y: '-bottom-2', delay: 0.45 },
            ].map((insight, idx) => {
              return (
                <motion.div
                  key={insight.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    opacity: { duration: 0.4, delay: 0.6 + insight.delay },
                    scale: { duration: 0.4, delay: 0.6 + insight.delay },
                    y: {
                      duration: 3 + idx * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: idx * 0.8,
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className={`absolute ${insight.x} ${insight.y} z-10 rounded-2xl px-4 py-2.5 min-w-[175px]`}
                  style={{
                    background: 'rgba(255,255,255,0.92)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: insight.dot, boxShadow: `0 0 6px ${insight.dot}80` }} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-semibold text-black/70 truncate">{insight.label}</span>
                        <span className="font-display font-bold text-sm flex-shrink-0" style={{ color: insight.dot }}>{insight.value}</span>
                      </div>
                      <div className="text-[10px] text-black/50 mt-0.5">{insight.desc}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ border: `1px solid ${ROSE}30`, boxShadow: `0 20px 60px rgba(0,0,0,0.5)` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b"
                style={{ background: 'rgba(255,255,255,0.95)', borderColor: `${ROSE}20` }}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: `${ROSE}99` }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: `${BLUSH}99` }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: `${MAROON}99` }} />
                  </div>
                  <span className="text-xs text-black/70 font-mono font-semibold">console.cedarlogics.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ROSE }} />
                  <span className="text-xs font-semibold" style={{ color: ROSE }}>Live</span>
                </div>
              </div>

              {/* Console content */}
              <div className="p-5 space-y-4 font-mono" style={{ background: 'rgba(255,255,255,0.85)' }}>
                {/* Top row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'AI Agents', val: '24', unit: 'active', color: ROSE },
                    { label: 'Workflows', val: '847', unit: 'running', color: MAROON },
                    { label: 'API Calls', val: '1.2M', unit: '/ day', color: ROSE },
                  ].map((m, idx) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="rounded-xl p-3 text-center"
                      style={{
                        background: `linear-gradient(135deg, ${m.color}22, ${m.color}10)`,
                        border: `1px solid ${m.color}45`,
                      }}
                    >
                      <div className="text-xs text-black/60 mb-1 font-medium">{m.label}</div>
                      <div className="font-display font-bold text-xl" style={{ color: m.color }}>{m.val}</div>
                      <div className="text-xs text-black/50">{m.unit}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Workflow builder */}
                <div className="rounded-xl p-4" style={{
                  background: `linear-gradient(135deg, rgba(${ROSE_RGB},0.12), rgba(${ROSE_RGB},0.04))`,
                  border: `1px solid rgba(${ROSE_RGB},0.2)`,
                }}>
                  <div className="text-xs text-black/70 mb-3 font-semibold">Active Workflow — Data Processing Pipeline</div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {['Trigger', 'Fetch', 'Transform', 'AI Classify', 'Store', 'Notify'].map((step, i) => (
                      <div key={step} className="flex items-center gap-2 flex-shrink-0">
                        <div className="flex flex-col items-center">
                          <div
                            className="text-xs px-3 py-1.5 rounded-lg font-medium whitespace-nowrap"
                            style={{
                              background: i === 3 ? `rgba(${ROSE_RGB},0.3)` : `rgba(${ROSE_RGB},0.1)`,
                              color: i === 3 ? ROSE : 'rgba(0,0,0,0.7)',
                              border: i === 3 ? `1px solid rgba(${ROSE_RGB},0.5)` : `1px solid rgba(${ROSE_RGB},0.12)`,
                            }}
                          >
                            {step}
                          </div>
                          {i === 3 && (
                            <div className="text-xs font-medium mt-1" style={{ color: ROSE }}>● Running</div>
                          )}
                        </div>
                        {i < 5 && <div className="w-4 h-px flex-shrink-0" style={{ background: `rgba(${ROSE_RGB},0.3)` }} />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div className="rounded-xl p-4" style={{
                  background: `linear-gradient(135deg, rgba(${ROSE_RGB},0.1), rgba(${ROSE_RGB},0.03))`,
                  border: `1px solid rgba(${ROSE_RGB},0.18)`,
                }}>
                  <div className="text-xs text-black/60 mb-3 font-semibold">Recent Activity</div>
                  <div className="space-y-2.5">
                    {[
                      { msg: 'Agent #7 completed classification batch', time: '2s ago', color: ROSE },
                      { msg: 'Workflow "ETL Daily" executed successfully', time: '1m ago', color: MAROON },
                      { msg: 'New integration: Slack webhook configured', time: '4m ago', color: BLUSH },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                          <span className="text-xs text-black/60">{item.msg}</span>
                        </div>
                        <span className="text-xs text-black/40 whitespace-nowrap font-medium">{item.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}