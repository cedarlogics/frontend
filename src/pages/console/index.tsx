import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Zap, Bot, GitBranch, BarChart3, Shield, Users, Puzzle, Activity,
  ArrowRight, Check, ChevronDown, Star, Play, Building2, HeartPulse,
  GraduationCap, ShoppingBag, Factory, Landmark, Cpu, ChevronRight
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

// ---- Hero ----
function ConsoleHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-dot-bg opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,184,224,0.25) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(236,127,169,0.08) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-cedar-violet/30">
            <div className="w-1.5 h-1.5 rounded-full bg-cedar-red animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-cedar-frost/70">Flagship Platform</span>
            <div className="w-px h-3 bg-cedar-red/20" />
            <span className="text-xs text-cedar-frost/40">v2.0</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="section-heading text-5xl sm:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto"
        >
          <span className="text-cedar-frost">The AI Operations</span>
          <br />
          <span className="text-gradient-red">Platform for</span>
          <br />
          <span className="text-cedar-frost">Modern Engineering Teams</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-xl text-cedar-frost/50 max-w-2xl mx-auto mb-10"
        >
          Deploy intelligent agents, orchestrate automation workflows, and monitor everything in real time — unified in a single, powerful platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#demo" onClick={(e) => { e.preventDefault(); document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary text-base px-8 py-4 rounded-2xl">
            <Zap size={18} />
            Request a Demo
            <ArrowRight size={16} />
          </a>
          <button className="btn-secondary text-base px-8 py-4 rounded-2xl inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-cedar-red/10 flex items-center justify-center">
              <Play size={12} className="fill-cedar-frost text-cedar-frost ml-0.5" />
            </div>
            Watch Overview
          </button>
        </motion.div>

        {/* Mega Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-4 rounded-3xl opacity-20"
            style={{ background: 'radial-gradient(ellipse, rgba(255,184,224,0.6) 0%, transparent 70%)' }} />

          <div className="relative glass-card rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(236,127,169,0.1)' }}>
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-cedar-red/10"
              style={{ background: 'rgba(255,255,255,0.95)' }}>
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-cedar-red/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                  <div className="w-3 h-3 rounded-full bg-green-400/50" />
                </div>
                <div className="ml-2 w-56 h-5 rounded glass flex items-center justify-center text-xs text-cedar-frost/30">
                  console.cedarlogics.com/dashboard
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-cedar-frost/40">All systems operational</span>
              </div>
            </div>

            <div className="grid grid-cols-5 h-[360px] sm:h-[420px]"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))' }}>
              {/* Sidebar */}
              <div className="col-span-1 border-r border-cedar-red/10 p-3 space-y-1 hidden sm:block">
                {[
                  { icon: Activity, label: 'Dashboard', active: true },
                  { icon: Bot, label: 'Agents' },
                  { icon: GitBranch, label: 'Workflows' },
                  { icon: BarChart3, label: 'Analytics' },
                  { icon: Shield, label: 'Security' },
                  { icon: Users, label: 'Team' },
                  { icon: Puzzle, label: 'Integrations' },
                ].map(({ icon: Icon, label, active }) => (
                  <div key={label} className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs cursor-default ${active ? 'bg-cedar-red/15 text-cedar-frost' : 'text-cedar-frost/35 hover:text-cedar-frost/60'}`}>
                    <Icon size={13} className={active ? 'text-cedar-red' : ''} />
                    <span className="hidden lg:block">{label}</span>
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="col-span-5 sm:col-span-4 p-4 space-y-4 overflow-hidden">
                {/* Top metrics */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { l: 'Agents', v: '24', c: '#EC7FA9', ch: '+3' },
                    { l: 'Workflows', v: '847', c: '#FFB8E0', ch: '+12' },
                    { l: 'API/min', v: '14.2K', c: '#FFB8E0', ch: '+5%' },
                    { l: 'Accuracy', v: '97.4%', c: '#EC7FA9', ch: '+0.4' },
                  ].map((m) => (
                    <div key={m.l} className="glass rounded-xl p-3">
                      <div className="text-xs text-cedar-frost/40 mb-1">{m.l}</div>
                      <div className="font-display font-bold text-lg leading-none" style={{ color: m.c }}>{m.v}</div>
                      <div className="text-xs text-green-400 mt-1">{m.ch}</div>
                    </div>
                  ))}
                </div>

                {/* Two columns */}
                <div className="grid grid-cols-2 gap-3 flex-1">
                  {/* Chart */}
                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-cedar-frost/50 font-semibold mb-3">Inference Volume (7d)</div>
                    <div className="flex items-end gap-1 h-24">
                      {[30, 45, 38, 62, 55, 78, 70, 88, 72, 95, 88, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: 0.8 + i * 0.04 }}
                          className="flex-1 rounded-t-sm origin-bottom"
                          style={{
                            height: `${h}%`,
                            background: i >= 10 ? 'linear-gradient(180deg,#EC7FA9,rgba(236,127,169,0.3))' : 'linear-gradient(180deg,rgba(255,184,224,0.7),rgba(255,184,224,0.2))',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Agents */}
                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-cedar-frost/50 font-semibold mb-3">Active Agents</div>
                    <div className="space-y-2">
                      {[
                        { name: 'Classifier #1', status: 'Running', load: 82 },
                        { name: 'Summarizer #3', status: 'Running', load: 64 },
                        { name: 'Extractor #5', status: 'Idle', load: 12 },
                      ].map((agent) => (
                        <div key={agent.name} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${agent.status === 'Running' ? 'bg-green-400' : 'bg-cedar-frost/30'}`} />
                          <span className="text-xs text-cedar-frost/60 flex-1 truncate">{agent.name}</span>
                          <div className="w-16 h-1.5 rounded-full bg-cedar-red/10 overflow-hidden">
                            <div className="h-full rounded-full bg-cedar-red/60" style={{ width: `${agent.load}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Workflow */}
                <div className="glass rounded-xl p-4">
                  <div className="text-xs text-cedar-frost/50 font-semibold mb-2">Workflow: Customer Intent Pipeline</div>
                  <div className="flex items-center gap-2 overflow-x-auto">
                    {['Ingest', 'Preprocess', 'Embed', 'Classify', 'Route', 'Respond', 'Log'].map((s, i) => (
                      <div key={s} className="flex items-center gap-2 flex-shrink-0">
                        <div className={`px-2.5 py-1 rounded-lg text-xs font-medium ${i === 3 ? 'bg-cedar-red/20 text-cedar-red border border-cedar-red/30' : i < 3 ? 'bg-green-400/15 text-green-400' : 'bg-cedar-red/5 text-cedar-frost/35'}`}>
                          {s}
                        </div>
                        {i < 6 && <div className="w-3 h-px bg-cedar-red/15" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- Core Features ----
const coreFeatures = [
  { icon: Bot, title: 'AI Agents', desc: 'Deploy and orchestrate autonomous AI agents that learn from your data and handle complex multi-step tasks with remarkable accuracy.', accent: '#EC7FA9' },
  { icon: GitBranch, title: 'Workflow Automation', desc: 'Visual workflow builder with 150+ pre-built connectors. Build sophisticated automation pipelines in minutes, not weeks.', accent: '#FFB8E0' },
  { icon: BarChart3, title: 'Intelligent Analytics', desc: 'AI-powered dashboards that surface anomalies, predict trends, and explain insights in plain language — no data science degree required.', accent: '#FFB8E0' },
  { icon: Activity, title: 'Live Monitoring', desc: 'Full-stack observability with distributed tracing, log aggregation, and AI-powered anomaly detection that alerts before issues escalate.', accent: '#FFB8E0' },
  { icon: Shield, title: 'Zero-Trust Security', desc: 'Enterprise-grade security with end-to-end encryption, RBAC, audit logging, and automated compliance checks for SOC 2 and HIPAA.', accent: '#EC7FA9' },
  { icon: Users, title: 'Team Collaboration', desc: 'Role-based access, shared workspaces, real-time commenting, and version control for every agent, workflow, and dashboard.', accent: '#EC7FA9' },
  { icon: Puzzle, title: 'API Management', desc: 'Full API lifecycle management with rate limiting, versioning, authentication, documentation generation, and usage analytics.', accent: '#FFB8E0' },
  { icon: Cpu, title: 'Integrations Hub', desc: '200+ native integrations with your existing stack — Slack, Jira, Salesforce, AWS, GitHub, Stripe, and everything in between.', accent: '#FFB8E0' },
];

function CoreFeatures() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 grid-line-bg opacity-15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4 justify-center">
            <div className="w-4 h-px bg-cedar-red" />Platform Features<div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl text-cedar-frost mb-4">
            Everything Your Team Needs<br /><span className="text-gradient-red">In One Place</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 group hover:border-cedar-red/20 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${f.accent}20` }}>
                  <Icon size={22} style={{ color: f.accent }} />
                </div>
                <h3 className="font-display font-semibold text-cedar-frost mb-2">{f.title}</h3>
                <p className="text-sm text-cedar-frost/50 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---- Use Cases ----
const useCases = [
  { icon: HeartPulse, title: 'Healthcare', desc: 'AI-powered patient triage, clinical note summarization, and HIPAA-compliant data pipelines.', accent: '#EC7FA9' },
  { icon: Landmark, title: 'Finance', desc: 'Real-time fraud detection, intelligent reporting, and automated compliance monitoring.', accent: '#FFB8E0' },
  { icon: GraduationCap, title: 'Education', desc: 'Personalized learning agents, automated grading, and student performance analytics.', accent: '#FFB8E0' },
  { icon: ShoppingBag, title: 'Retail', desc: 'Dynamic pricing optimization, inventory forecasting, and AI product recommendations.', accent: '#EC7FA9' },
  { icon: Factory, title: 'Manufacturing', desc: 'Predictive maintenance, quality control vision systems, and supply chain automation.', accent: '#FFB8E0' },
  { icon: Building2, title: 'Enterprise', desc: 'HR automation, document intelligence, and cross-department workflow orchestration.', accent: '#EC7FA9' },
];

function UseCases() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 grid-dot-bg opacity-15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4 justify-center">
            <div className="w-4 h-px bg-cedar-red" />Use Cases<div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl text-cedar-frost mb-4">
            Built for Every <span className="text-gradient-red">Industry</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 group hover:border-cedar-red/20 transition-all duration-300 cursor-default flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: `${uc.accent}20` }}>
                  <Icon size={22} style={{ color: uc.accent }} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-cedar-frost mb-1">{uc.title}</h3>
                  <p className="text-sm text-cedar-frost/50">{uc.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---- Architecture ----
function ArchitectureSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-line-bg opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(ellipse, #FFB8E0 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4 justify-center">
            <div className="w-4 h-px bg-cedar-red" />Architecture<div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl text-cedar-frost mb-4">
            Designed for <span className="text-gradient-violet">Reliability & Scale</span>
          </h2>
        </motion.div>

        {/* Architecture diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12">
            <div className="flex flex-col items-center gap-4">
              {/* Input layer */}
              <div className="flex gap-3 flex-wrap justify-center">
                {['Web App', 'Mobile', 'API', 'Webhooks', 'SDK'].map((s) => (
                  <div key={s} className="px-4 py-2 rounded-xl glass text-xs font-semibold text-cedar-frost/60 border border-cedar-red/15">{s}</div>
                ))}
              </div>
              <ChevronRight size={18} className="text-cedar-frost/20 rotate-90" />

              {/* Gateway */}
              <div className="w-full max-w-sm px-6 py-3 rounded-2xl text-sm font-semibold text-center"
                style={{ background: 'rgba(255,184,224,0.3)', border: '1px solid rgba(255,184,224,0.4)', color: '#FFB8E0' }}>
                API Gateway + Auth Layer
              </div>
              <ChevronRight size={18} className="text-cedar-frost/20 rotate-90" />

              {/* Core services */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
                {['Agent Engine', 'Workflow Runtime', 'Analytics Core'].map((s, i) => (
                  <div key={s} className="px-3 py-2.5 rounded-xl text-xs font-semibold text-center"
                    style={{
                      background: ['rgba(236,127,169,0.15)', 'rgba(255,184,224,0.2)', 'rgba(236,127,169,0.15)'][i],
                      border: `1px solid ${['rgba(236,127,169,0.2)', 'rgba(255,184,224,0.3)', 'rgba(236,127,169,0.2)'][i]}`,
                      color: ['#EC7FA9', '#FFB8E0', '#FFB8E0'][i],
                    }}>
                    {s}
                  </div>
                ))}
              </div>
              <ChevronRight size={18} className="text-cedar-frost/20 rotate-90" />

              {/* Infrastructure */}
              <div className="flex gap-3 flex-wrap justify-center">
                {['Vector DB', 'Postgres', 'Redis Cache', 'Object Storage', 'Message Queue'].map((s) => (
                  <div key={s} className="px-3 py-1.5 rounded-lg glass text-xs text-cedar-frost/50">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Integrations ----
const integrations = [
  'Slack', 'GitHub', 'Jira', 'Notion', 'Salesforce', 'HubSpot',
  'Stripe', 'Twilio', 'SendGrid', 'AWS S3', 'Snowflake', 'BigQuery',
];

function IntegrationsSection() {
  return (
    <section className="py-20 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="section-label mb-4 justify-center">
            <div className="w-4 h-px bg-cedar-red" />Integrations<div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading text-4xl text-cedar-frost mb-4">
            Works with Your <span className="text-gradient-red">Existing Stack</span>
          </h2>
          <p className="text-cedar-frost/50">200+ native integrations. No custom code required.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {integrations.map((intg, i) => (
            <motion.div
              key={intg}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="glass-card rounded-xl px-5 py-3 text-sm font-medium text-cedar-frost/60 hover:text-cedar-frost hover:border-cedar-violet/30 transition-all duration-200 cursor-default"
            >
              {intg}
            </motion.div>
          ))}
          <div className="glass-card rounded-xl px-5 py-3 text-sm font-medium text-cedar-red cursor-default">
            +188 more →
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Console Pricing ----
const consolePlans = [
  {
    name: 'Growth', price: '299', unit: 'mo',
    desc: 'For small teams just getting started with AI automation.',
    features: ['5 AI Agents', '50 Workflows', '500K API calls/mo', '10GB storage', 'Community support'],
    accent: '#FFB8E0', popular: false,
  },
  {
    name: 'Scale', price: '899', unit: 'mo',
    desc: 'For growing companies that need advanced AI capabilities.',
    features: ['Unlimited Agents', 'Unlimited Workflows', '5M API calls/mo', '100GB storage', 'Priority support', 'SSO + RBAC', 'Custom models'],
    accent: '#EC7FA9', popular: true,
  },
  {
    name: 'Enterprise', price: 'Custom', unit: '',
    desc: 'For large organizations with dedicated compliance and SLA requirements.',
    features: ['Everything in Scale', 'Dedicated infrastructure', 'Custom SLA', 'SOC 2 compliance', 'HIPAA BAA', 'Dedicated CSM'],
    accent: '#EC7FA9', popular: false,
  },
];

function ConsolePricing() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 grid-dot-bg opacity-15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4 justify-center">
            <div className="w-4 h-px bg-cedar-red" />Console Pricing<div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl text-cedar-frost mb-4">
            Simple, Predictable <span className="text-gradient-red">Pricing</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {consolePlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-8 relative transition-all duration-300"
              style={plan.popular ? { border: '1px solid rgba(236,127,169,0.3)', background: 'rgba(236,127,169,0.02)' } : {}}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #EC7FA9, #EC7FA9)' }}>
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-3"
                  style={{ background: `${plan.accent}15`, color: plan.accent }}>
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  {plan.price === 'Custom'
                    ? <span className="font-display font-bold text-3xl text-cedar-frost">Custom</span>
                    : <><span className="text-cedar-frost/50">$</span><span className="font-display font-bold text-3xl text-cedar-frost">{plan.price}</span><span className="text-cedar-frost/40 text-sm">/{plan.unit}</span></>}
                </div>
                <p className="text-sm text-cedar-frost/50">{plan.desc}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${plan.accent}20` }}>
                      <Check size={11} style={{ color: plan.accent }} />
                    </div>
                    <span className="text-cedar-frost/70">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl text-sm font-semibold ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Console FAQ ----
const consoleFaqs = [
  { q: 'Is there a free trial?', a: 'Yes — all Growth and Scale plans include a 14-day free trial with full feature access and no credit card required.' },
  { q: 'What AI models does Console support?', a: 'Console supports OpenAI GPT-4o, Claude 3.5, Gemini Pro, and any OpenAI-compatible model including self-hosted open source models via Ollama or vLLM.' },
  { q: 'Can I bring my own infrastructure?', a: 'Enterprise plans support BYOC (Bring Your Own Cloud) deployments to AWS, GCP, or Azure, so data never leaves your VPC.' },
  { q: 'How does billing work for API calls?', a: 'Each plan includes a monthly allocation of API calls. Overages are charged at a flat per-call rate with no surprise billing — you set hard limits and alerts.' },
];

function ConsoleFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-heading text-3xl sm:text-4xl text-cedar-frost mb-4">
          Platform <span className="text-gradient-red">FAQ</span>
        </h2>
      </motion.div>
      <div className="space-y-3">
        {consoleFaqs.map((f, i) => (
          <div key={i} className="glass-card rounded-2xl overflow-hidden">
            <button className="w-full flex items-center justify-between p-5 text-left gap-4"
              onClick={() => setOpen(open === i ? null : i)}>
              <span className="font-medium text-cedar-frost text-sm">{f.q}</span>
              <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={16} className="text-cedar-frost/40 flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <div className="h-px bg-cedar-red/5 mb-3" />
                    <p className="text-sm text-cedar-frost/55">{f.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---- Demo CTA ----
function DemoCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <section id="demo" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(236,127,169,0.08) 0%, transparent 70%)' }} />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <div className="section-label justify-center mb-6">
            <div className="w-4 h-px bg-cedar-red" />Get Access<div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl text-cedar-frost mb-6">
            See Console in Action
          </h2>
          <p className="text-xl text-cedar-frost/50 mb-10">
            Book a personalized 30-minute demo with our engineering team. 
            We'll walk through your exact use case, not a scripted pitch.
          </p>

          {submitted ? (
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-cedar-red/20 flex items-center justify-center mx-auto mb-4">
                <Check size={28} className="text-cedar-red" />
              </div>
              <h3 className="font-display font-semibold text-cedar-frost text-xl mb-2">Demo Requested!</h3>
              <p className="text-cedar-frost/50">We'll reach out within one business day to schedule your session.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email address"
                className="flex-1 px-5 py-4 rounded-2xl bg-cedar-red/5 border border-cedar-red/15 text-cedar-frost placeholder-cedar-frost/30 focus:outline-none focus:border-cedar-red/50 transition-colors text-sm"
              />
              <button type="submit" className="btn-primary px-8 py-4 rounded-2xl text-base whitespace-nowrap">
                Book Demo <ArrowRight size={16} />
              </button>
            </form>
          )}

          <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
            {['No commitment required', '30-min tailored session', 'Free 14-day trial'].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-cedar-frost/40">
                <Check size={12} className="text-cedar-red" />{t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- Main Export ----
export default function ConsolePage() {
  return (
    <main>
      <ConsoleHero />
      <CoreFeatures />
      <ArchitectureSection />
      <UseCases />
      <IntegrationsSection />
      <ConsolePricing />
      <ConsoleFAQ />
      <DemoCTA />
    </main>
  );
}
