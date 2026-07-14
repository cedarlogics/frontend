import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import builtToEndure from '../../assets/Built to Endure.png';
import aiNative from '../../assets/AI-Native Architecture.png';
import processPrecision from '../../assets/Process Precision.png';
import continuousOpt from '../../assets/Process Precision (2).png';
import whoWeAre from '../../assets/Who We Are.png';

const BLUSH = '#FF1A75';
const ROSE = '#FF5CA8';
const MAROON = '#7A1247';
const WINE = '#1A0510';

const pillars = [
  {
    title: 'Built to Endure',
    body: 'Like cedar wood renowned for its strength, we build automation that withstands the test of time. No shortcuts. No technical debt accepted as inevitable.',
    accent: BLUSH,
    img: builtToEndure,
  },
  {
    title: 'AI-Native Architecture',
    body: 'Artificial intelligence is not a feature we bolt on — it is the architectural layer from which every workflow is designed. Intelligence woven into the fabric of every process.',
    accent: ROSE,
    img: aiNative,
  },
  {
    title: 'Process Precision',
    body: 'Every workflow is deliberate. Every automation has a purpose. We apply algorithmic thinking to business process design, enterprise integration, and operational efficiency.',
    accent: MAROON,
    img: processPrecision,
  },
  {
    title: 'Continuous Optimization',
    body: 'Automation that learns and improves over time. Our AI agents monitor, analyze, and optimize workflows continuously — compounding operational value with every cycle.',
    accent: ROSE,
    img: continuousOpt,
  },
];

export default function WhyCedarLogics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${WINE} 0%, #0F0309 100%)` }}>
      {/* Same editorial texture as the other sections: fine grain + two restrained
          light pools instead of a scattered multi-spot glow field */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${ROSE}2e 0%, transparent 65%)`, filter: 'blur(90px)' }}
      />
      <div
        className="absolute -bottom-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${MAROON}40 0%, transparent 65%)`, filter: 'blur(100px)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column intro */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
              <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>
                About CedarLogics
              </span>
            </div>
            <h2 className="font-orbitron text-4xl sm:text-5xl text-white mb-5">
              Intelligent Workflow
              <br />
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${MAROON})`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Automation for Modern Enterprises
              </span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Business operations shouldn't slow down because of disconnected systems or repetitive manual work. CedarLogics brings your applications, teams, and processes together through AI-powered workflow orchestration.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              Our platform intelligently coordinates tasks, automates decisions, and continuously improves workflows using real-time insights. Instead of managing individual processes, organizations gain a unified automation ecosystem that grows with their business.
            </p>
          </div>

          {/* Visual right — rings, orbital dots, and center emblem re-tuned to the
              same three tones instead of the previous red/indigo/violet mix */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Rings */}
              {[0.9, 0.7, 0.5, 0.3].map((scale, i) => {
                const ringColors = [ROSE, MAROON, BLUSH, ROSE];
                return (
                  <motion.div
                    key={i}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full border"
                    style={{
                      margin: `${(1 - scale) * 50}%`,
                      borderColor: `${ringColors[i]}${i === 0 ? '40' : i === 1 ? '35' : i === 2 ? '30' : '2a'}`,
                      borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
                    }}
                  />
                );
              })}

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 rounded-3xl flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${ROSE}, ${MAROON})` }}>
                  <img src={whoWeAre} alt="Who We Are" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Orbital dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                const dotColors = [ROSE, BLUSH, MAROON];
                return (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      background: dotColors[i % dotColors.length],
                      boxShadow: `0 0 8px ${dotColors[i % dotColors.length]}80`,
                      top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 38}% - 6px)`,
                      left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 38}% - 6px)`,
                    }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Pillars - circles with icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${pillar.accent}25, ${pillar.accent}10)`,
                    border: `2px solid ${pillar.accent}40`,
                  }}
                >
                  <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover" />
                </motion.div>
                <h3 className="font-display font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-xs">{pillar.body}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}