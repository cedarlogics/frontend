import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Activity, GitBranch, BarChart2, Shield } from 'lucide-react';

const highlights = [
  { icon: Activity, label: 'Real-time Monitoring', color: '#EC7FA9' },
  { icon: GitBranch, label: 'AI Workflow Builder', color: '#FFB8E0' },
  { icon: BarChart2, label: 'Intelligent Analytics', color: '#FFB8E0' },
  { icon: Shield, label: 'Zero-Trust Security', color: '#EC7FA9' },
];

export default function ConsolePreview() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Black background */}
      <div className="absolute inset-0" style={{ background: '#000000' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent, rgba(68,63,128,0.06) 50%, transparent)' }} />
      <div className="absolute inset-0 grid-line-bg opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-4">
              <div className="w-4 h-px bg-cedar-red" />
              Flagship Product
            </div>
            <h2 className="section-heading font-orbitron text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Introducing
              <br />
              <span className="text-gradient-red">CedarLogics Console</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              A unified AI workspace that brings your intelligent agents, automation workflows, 
              analytics, and infrastructure management into one seamless platform. Built for 
              engineering teams who demand control without complexity.
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-8">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${h.color}20` }}>
                      <Icon size={16} style={{ color: h.color }} />
                    </div>
                    <span className="text-sm text-white/90 font-medium">{h.label}</span>
                    <div className="flex-1 h-px bg-cedar-red/5" />
                  </div>
                );
              })}
            </div>

            <Link to="/console" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base rounded-2xl">
              <Zap size={18} />
              Explore Console
              <ArrowRight size={16} />
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
              style={{ background: 'radial-gradient(ellipse, #EC7FA9 0%, transparent 70%)' }} />
            <div className="absolute -inset-4 rounded-3xl opacity-20 blur-xl"
              style={{ background: 'radial-gradient(ellipse, #FFB8E0 0%, transparent 60%)' }} />

            {/* Floating insight cards - randomly placed */}
            {[
              { label: 'Cost Efficiency', value: '32% reduction', desc: 'vs last quarter', dot: '#EC7FA9', x: 'left-8', y: '-top-3', delay: 0 },
              { label: 'AI Accuracy', value: '97.4%', desc: 'across all models', dot: '#A78BFA', x: '-right-4', y: 'top-8', delay: 0.15 },
              { label: 'Anomalies', value: '12 detected', desc: '3 critical · resolved', dot: '#FBBF24', x: '-left-2', y: 'bottom-12', delay: 0.3 },
              { label: 'Avg Response', value: '48ms', desc: '99.9% uptime', dot: '#34D399', x: 'right-12', y: '-bottom-2', delay: 0.45 },
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
                        <span className="text-[11px] font-semibold text-cedar-frost/80 truncate">{insight.label}</span>
                        <span className="font-display font-bold text-sm flex-shrink-0" style={{ color: insight.dot }}>{insight.value}</span>
                      </div>
                      <div className="text-[10px] text-cedar-frost/60 mt-0.5">{insight.desc}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <div className="relative glass-card rounded-3xl border-cedar-red/20">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-cedar-red/20 rounded-t-3xl"
                style={{ background: 'rgba(255,255,255,0.95)' }}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-cedar-red/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <span className="text-xs text-cedar-frost/70 font-mono font-semibold">console.cedarlogics.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-500 font-semibold">Live</span>
                </div>
              </div>

              {/* Console content */}
              <div className="p-5 space-y-4 font-mono rounded-b-3xl" style={{ background: 'rgba(255,255,255,0.85)' }}>
                {/* Top row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'AI Agents', val: '24', unit: 'active', color: '#EC7FA9' },
                    { label: 'Workflows', val: '847', unit: 'running', color: '#FFB8E0' },
                    { label: 'API Calls', val: '1.2M', unit: '/ day', color: '#FFB8E0' },
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
                      <div className="text-xs text-cedar-frost/70 mb-1 font-medium">{m.label}</div>
                      <div className="font-display font-bold text-xl" style={{ color: m.color }}>{m.val}</div>
                      <div className="text-xs text-cedar-frost/60">{m.unit}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Workflow builder */}
                <div className="rounded-xl p-4" style={{
                  background: 'linear-gradient(135deg, rgba(236,127,169,0.12), rgba(255,184,224,0.06))',
                  border: '1px solid rgba(236,127,169,0.2)',
                }}>
                  <div className="text-xs text-cedar-frost/80 mb-3 font-semibold">Active Workflow — Data Processing Pipeline</div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {['Trigger', 'Fetch', 'Transform', 'AI Classify', 'Store', 'Notify'].map((step, i) => (
                      <div key={step} className="flex items-center gap-2 flex-shrink-0">
                        <div className="flex flex-col items-center">
                          <div
                            className="text-xs px-3 py-1.5 rounded-lg font-medium whitespace-nowrap"
                            style={{
                              background: i === 3 ? 'rgba(236,127,169,0.3)' : 'rgba(236,127,169,0.12)',
                              color: i === 3 ? '#EC7FA9' : 'rgba(0,0,0,0.75)',
                              border: i === 3 ? '1px solid rgba(236,127,169,0.5)' : '1px solid rgba(236,127,169,0.12)',
                            }}
                          >
                            {step}
                          </div>
                          {i === 3 && (
                            <div className="text-xs text-cedar-red font-medium mt-1">● Running</div>
                          )}
                        </div>
                        {i < 5 && <div className="w-4 h-px bg-cedar-red/30 flex-shrink-0" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div className="rounded-xl p-4" style={{
                  background: 'linear-gradient(135deg, rgba(236,127,169,0.1), rgba(255,184,224,0.05))',
                  border: '1px solid rgba(236,127,169,0.18)',
                }}>
                  <div className="text-xs text-cedar-frost/60 mb-3 font-semibold">Recent Activity</div>
                  <div className="space-y-2.5">
                    {[
                      { msg: 'Agent #7 completed classification batch', time: '2s ago', color: '#EC7FA9' },
                      { msg: 'Workflow "ETL Daily" executed successfully', time: '1m ago', color: '#FFB8E0' },
                      { msg: 'New integration: Slack webhook configured', time: '4m ago', color: '#FFB8E0' },
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
                          <span className="text-xs text-cedar-frost/60">{item.msg}</span>
                        </div>
                        <span className="text-xs text-cedar-frost/40 whitespace-nowrap font-medium">{item.time}</span>
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
