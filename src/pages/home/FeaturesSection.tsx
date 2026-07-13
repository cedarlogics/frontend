import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import coreEngineIcon from '../../assets/Process Precision.png';
import designIcon from '../../assets/Design.png';
import agentManagementIcon from '../../assets/Agent Management.png';
import analyticsIcon from '../../assets/analysis.png';
import connectivityIcon from '../../assets/Connectivity.png';
import monitoringIcon from '../../assets/Monitoring.png';

const HOT = '#FF2D87';
const BRIGHT = '#FF6FB5';
const SOFT = '#FFE3EF';
const INK = '#1A1024';
const BLUSH = HOT;
const ROSE = BRIGHT;
const MAROON = '#8E1155';

const features = [
  {
    icon: coreEngineIcon,
    title: 'AI Workflow Automation Engine',
    description: 'Core orchestration engine powering end-to-end enterprise workflows with AI-driven execution, conditional branching, and adaptive process management at scale.',
    accent: HOT,
    tag: 'Core Engine',
  },
  {
    icon: designIcon,
    title: 'Visual Workflow Designer',
    description: 'Drag-and-drop interface for designing complex multi-step workflows with conditional logic, parallel branches, and AI-assisted decision paths.',
    accent: '#E0117A',
    tag: 'Design',
  },
  {
    icon: agentManagementIcon,
    title: 'AI Agent Orchestration Framework',
    description: 'Coordinate specialized AI agents across business functions. Automate approvals, routing, and task execution with collaborative multi-agent workflows.',
    accent: BRIGHT,
    tag: 'Agent Management',
  },
  {
    icon: analyticsIcon,
    title: 'Business Process Intelligence',
    description: 'Identify bottlenecks, analyze execution patterns, and optimize process paths using AI-driven recommendations. Continuously improve operational efficiency.',
    accent: '#E0117A',
    tag: 'Analytics',
  },
  {
    icon: connectivityIcon,
    title: 'Enterprise Integration Hub',
    description: 'Connect ERP, CRM, HRMS, finance, and cloud platforms. Synchronize workflows across systems with API-driven automation and pre-built enterprise connectors.',
    accent: BRIGHT,
    tag: 'Connectivity',
  },
  {
    icon: monitoringIcon,
    title: 'Workflow Monitoring Dashboard',
    description: 'Centralized real-time monitoring of workflow execution. Track active processes, completion rates, error states, and system health across all automation pipelines.',
    accent: '#E0117A',
    tag: 'Monitoring',
  },
];

const NODE_POS = [
  { x: 50, y: 12 },
  { x: 86, y: 38 },
  { x: 72, y: 81 },
  { x: 28, y: 81 },
  { x: 14, y: 38 },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState(0);

  const satellites = features.slice(1);
  const activeFeat = features[active];

  return (
    <section id="features" className="py-28 relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 100% 20%, #FFE3EF 0%, transparent 60%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${HOT} 1px, transparent 1px)`,
          backgroundSize: '4px 4px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-center">
          {/* Left: sticky heading + copy */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
              <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>
                Core Features
              </span>
              <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${ROSE}, transparent)` }} />
            </div>
            <h2 className="font-orbitron text-4xl sm:text-5xl text-cedar-frost mb-5">
              Enterprise AI
              <br />
              Workflow
              <br />
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${MAROON})`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Automation Platform
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: `${INK}90` }}>
              A comprehensive suite of AI-powered workflow automation capabilities — from visual
              process design and agent orchestration to enterprise integration and real-time analytics.
            </p>

            {/* Feature quick-nav list */}
            <div className="hidden lg:flex flex-col gap-1">
              {features.map((feat, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={feat.title}
                    onClick={() => setActive(i)}
                    className="group flex items-center gap-3 py-2.5 text-left border-b transition-colors"
                    style={{ borderColor: isActive ? `${feat.accent}30` : '#F3E4EC' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform"
                      style={{ background: feat.accent, transform: isActive ? 'scale(1.4)' : 'scale(1)' }}
                    />
                    <span
                      className="text-sm font-medium flex-1 transition-colors"
                      style={{ color: isActive ? INK : `${INK}55` }}
                    >
                      {feat.tag}
                    </span>
                    <ArrowRight
                      size={14}
                      className="transition-all"
                      style={{
                        color: feat.accent,
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateX(0)' : 'translateX(-4px)',
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right: diagram + detail strip */}
          <div>
            <div className="relative aspect-square max-w-[480px] mx-auto w-full">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
                {satellites.map((feat, i) => {
                  const pos = NODE_POS[i];
                  const isActive = active === i + 1;
                  return (
                    <line
                      key={feat.title}
                      x1={50}
                      y1={50}
                      x2={pos.x}
                      y2={pos.y}
                      stroke={isActive ? feat.accent : '#FFD5E8'}
                      strokeWidth={isActive ? 0.6 : 0.4}
                      style={{ transition: 'stroke 0.4s, stroke-width 0.4s' }}
                    />
                  );
                })}
              </svg>

              <motion.button
                onClick={() => setActive(0)}
                className="absolute rounded-2xl flex flex-col items-center justify-center gap-1.5 z-10"
                initial={{ x: '-50%', y: '-50%' }}
                style={{
                  left: '50%',
                  top: '50%',
                  width: 116,
                  height: 116,
                  background: `linear-gradient(135deg, ${HOT}, ${BRIGHT})`,
                  boxShadow: active === 0 ? `0 8px 32px ${HOT}55, 0 0 0 6px #FFE3EF` : `0 8px 24px ${HOT}35`,
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={coreEngineIcon} alt="Core Engine" className="w-10 h-10 object-contain" />
                <span className="text-[10px] font-mono tracking-wider text-white/90">CORE ENGINE</span>
              </motion.button>

              {satellites.map((feat, i) => {
                const pos = NODE_POS[i];
                const isActive = active === i + 1;
                return (
                  <motion.button
                    key={feat.title}
                    onClick={() => setActive(i + 1)}
                    className="absolute rounded-xl flex flex-col items-center justify-center gap-1 z-10"
                    initial={{ x: '-50%', y: '-50%' }}
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      width: 82,
                      height: 82,
                      background: isActive ? `${feat.accent}12` : '#FFFFFF',
                      border: `1.5px solid ${isActive ? feat.accent : '#FFD5E8'}`,
                      boxShadow: isActive ? `0 8px 20px ${feat.accent}30` : '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                  >
                    <img src={feat.icon} alt={feat.tag} className="w-[32px] h-[32px] object-contain" />
                    <span
                      className="text-[9px] font-semibold text-center leading-tight px-1"
                      style={{ color: isActive ? INK : '#B79AAC' }}
                    >
                      {feat.tag}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Detail strip under the diagram */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-6 mt-6 flex items-start gap-4"
                style={{
                  background: '#FFFFFF',
                  border: `1.5px solid ${activeFeat.accent}30`,
                  boxShadow: `0 12px 28px ${activeFeat.accent}15`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: SOFT }}
                >
                  <img src={activeFeat.icon} alt={activeFeat.tag} className="w-[36px] h-[36px] object-contain" />
                </div>
                <div className="flex-1">
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mb-2"
                    style={{ background: SOFT, color: activeFeat.accent }}
                  >
                    {activeFeat.tag}
                  </span>
                  <h3 className="font-display font-semibold text-base mb-1.5" style={{ color: INK }}>
                    {activeFeat.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: `${INK}90` }}>
                    {activeFeat.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: connected vertical stack (unchanged) */}
        <div className="lg:hidden relative pl-6 mt-14">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px"
            style={{ background: `linear-gradient(to bottom, ${HOT}60, #FFE3EF)` }}
          />
          <div className="space-y-3">
            {features.map((feat, i) => {
              const isActive = active === i;
              return (
                <motion.div key={feat.title} className="relative">
                  <div
                    className="absolute -left-6 top-5 w-[9px] h-[9px] rounded-full"
                    style={{ background: feat.accent, boxShadow: `0 0 8px ${feat.accent}` }}
                  />
                  <button
                    onClick={() => setActive(isActive ? -1 : i)}
                    className="w-full text-left rounded-xl p-4 flex items-start gap-3"
                    style={{
                      background: '#FFFFFF',
                      border: `1.5px solid ${isActive ? feat.accent + '50' : '#FFE3EF'}`,
                      boxShadow: isActive ? `0 8px 20px ${feat.accent}20` : '0 2px 8px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: SOFT }}
                    >
                      <img src={feat.icon} alt={feat.tag} className="w-8 h-8 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mb-1.5"
                        style={{ background: SOFT, color: feat.accent }}
                      >
                        {feat.tag}
                      </span>
                      <h3 className="font-display font-semibold text-sm" style={{ color: INK }}>{feat.title}</h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-xs leading-relaxed mt-2 overflow-hidden"
                            style={{ color: `${INK}90` }}
                          >
                            {feat.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}