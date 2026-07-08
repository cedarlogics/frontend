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
      {/* Deep background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(68,63,128,0.06) 50%, transparent)',
        }}
      />
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
            <h2 className="section-heading text-4xl sm:text-5xl text-cedar-frost mb-6 leading-tight">
              Introducing
              <br />
              <span className="text-gradient-red">CedarLogics Console</span>
            </h2>
            <p className="text-cedar-frost/50 leading-relaxed mb-8">
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
                    <span className="text-sm text-cedar-frost/70 font-medium">{h.label}</span>
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

          {/* Right: console mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-3xl opacity-20"
              style={{ background: 'radial-gradient(ellipse, #FFB8E0 0%, transparent 70%)' }} />

            <div className="relative glass-card rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-cedar-red/10"
                style={{ background: 'rgba(255,255,255,0.9)' }}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-cedar-red/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
                  </div>
                  <span className="text-xs text-cedar-frost/40 font-mono">console.cedarlogics.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400/80">Live</span>
                </div>
              </div>

              {/* Console content */}
              <div className="p-5 space-y-4" style={{ background: 'rgba(255,255,255,0.7)' }}>
                {/* Top row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'AI Agents', val: '24', unit: 'active', color: '#EC7FA9' },
                    { label: 'Workflows', val: '847', unit: 'running', color: '#FFB8E0' },
                    { label: 'API Calls', val: '1.2M', unit: '/ day', color: '#FFB8E0' },
                  ].map((m) => (
                    <div key={m.label} className="glass rounded-xl p-3 text-center">
                      <div className="text-xs text-cedar-frost/40 mb-1">{m.label}</div>
                      <div className="font-display font-bold text-xl" style={{ color: m.color }}>{m.val}</div>
                      <div className="text-xs text-cedar-frost/30">{m.unit}</div>
                    </div>
                  ))}
                </div>

                {/* Workflow builder */}
                <div className="glass rounded-xl p-4">
                  <div className="text-xs text-cedar-frost/50 mb-3 font-semibold">Active Workflow — Data Processing Pipeline</div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {['Trigger', 'Fetch', 'Transform', 'AI Classify', 'Store', 'Notify'].map((step, i) => (
                      <div key={step} className="flex items-center gap-2 flex-shrink-0">
                        <div className="flex flex-col items-center">
                          <div
                            className="text-xs px-3 py-1.5 rounded-lg font-medium whitespace-nowrap"
                            style={{
                              background: i === 3 ? 'rgba(236,127,169,0.2)' : 'rgba(236,127,169,0.06)',
                              color: i === 3 ? '#EC7FA9' : 'rgba(255,255,255,0.6)',
                              border: i === 3 ? '1px solid rgba(236,127,169,0.3)' : '1px solid transparent',
                            }}
                          >
                            {step}
                          </div>
                          {i === 3 && (
                            <div className="text-xs text-cedar-red/60 mt-1">Running</div>
                          )}
                        </div>
                        {i < 5 && <div className="w-4 h-px bg-cedar-red/15 flex-shrink-0" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div className="glass rounded-xl p-4">
                  <div className="text-xs text-cedar-frost/50 mb-3 font-semibold">Recent Activity</div>
                  <div className="space-y-2">
                    {[
                      { msg: 'Agent #7 completed classification batch', time: '2s ago', color: '#EC7FA9' },
                      { msg: 'Workflow "ETL Daily" executed successfully', time: '1m ago', color: '#FFB8E0' },
                      { msg: 'New integration: Slack webhook configured', time: '4m ago', color: '#FFB8E0' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                          <span className="text-xs text-cedar-frost/50">{item.msg}</span>
                        </div>
                        <span className="text-xs text-cedar-frost/30 whitespace-nowrap">{item.time}</span>
                      </div>
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
