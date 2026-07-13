import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import discoverIcon from '../../assets/Discover.png';
import researchIcon from '../../assets/Research.png';
import designIcon from '../../assets/Design (2).png';
import buildIcon from '../../assets/Build.png';
import deployIcon from '../../assets/Deploy.png';
import optimizeIcon from '../../assets/Optimize.png';
import scaleIcon from '../../assets/Scale.png';

const steps = [
  { icon: discoverIcon, label: 'Discover', desc: 'Deep dive into your business context, technical landscape, and user needs.' },
  { icon: researchIcon, label: 'Research', desc: 'Competitive analysis, technical feasibility, and architecture scoping.' },
  { icon: designIcon, label: 'Design', desc: 'Systems thinking meets interface design — clarity before code.' },
  { icon: buildIcon, label: 'Build', desc: 'Iterative development with continuous feedback and engineering rigor.' },
  { icon: deployIcon, label: 'Deploy', desc: 'Zero-downtime releases with full observability from day one.' },
  { icon: optimizeIcon, label: 'Optimize', desc: 'Performance profiling, cost analysis, and reliability improvements.' },
  { icon: scaleIcon, label: 'Scale', desc: 'Evolve architecture to handle 10x, 100x, and beyond.' },
];

const BLUSH = '#FF6FB5';
const ROSE = '#FF2D87';
const DARK = '#8E1155';
const DARK_SOFT = 'rgba(142,17,85,0.14)';
const BRIGHT = '#FF6FB5';

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const interacted = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!interacted.current) setActive((p) => (p + 1) % steps.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (i: number) => {
    interacted.current = true;
    setActive(i);
  };

  const progressPct = ((active + 1) / steps.length) * 100;

  return (
    <section className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${BLUSH} 1px, transparent 1px)`,
          backgroundSize: '4px 4px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
            <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>Our Process</span>
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${ROSE}, transparent)` }} />
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl text-cedar-frost mb-5">
            From Concept to
            <br />
            <span
              style={{
                backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${DARK})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Production at Scale
            </span>
          </h2>
          <p className="text-lg text-cedar-frost/50 max-w-2xl mx-auto">
            A methodical approach that respects your time, budget, and engineering standards —
            every phase designed to reduce risk and maximize output.
          </p>
        </motion.div>

        {/* Progress rail */}
        <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-cedar-frost/30 mb-3">
          <span>DELIVERY PIPELINE</span>
          <span>STAGE {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</span>
        </div>
        <div className="relative h-[3px] rounded-full bg-cedar-frost/10 mb-12 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: `linear-gradient(90deg, ${DARK}, ${BRIGHT})` }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 w-16 opacity-60"
            style={{ background: `linear-gradient(90deg, transparent, ${BRIGHT}, transparent)` }}
            animate={{ left: ['-10%', '110%'] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Desktop: expanding stepper */}
        <div className="hidden lg:flex gap-3 h-64">
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={step.label}
                onClick={() => handleSelect(i)}
                layout
                initial={false}
                animate={{ flexGrow: isActive ? 5 : 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex-shrink-0 rounded-2xl border text-left overflow-hidden ${
                  isActive ? 'border-violet-400/30' : 'border-cedar-frost/10 hover:border-cedar-frost/25'
                }`}
                style={{
                  flexBasis: 0,
                  minWidth: isActive ? 260 : 64,
                  background: isActive ? DARK_SOFT : 'transparent',
                }}
              >
                {/* Number */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-cedar-frost/25">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, delay: 0.15 }}
                      className="h-full flex flex-col justify-end p-6"
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                        style={{ background: DARK, boxShadow: `0 0 24px ${DARK}60` }}
                      >
                        <img src={step.icon} alt={step.label} className="w-5 h-5 object-contain" />
                      </div>
                      <h3 className="font-display font-semibold text-cedar-frost text-base mb-2">
                        {step.label}
                      </h3>
                      <p className="text-xs text-cedar-frost/45 leading-relaxed">{step.desc}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-full flex flex-col items-center justify-end gap-4 pb-6"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-cedar-frost/[0.06] group-hover:bg-cedar-frost/10">
                        <img src={step.icon} alt={step.label} className="w-4 h-4 object-contain opacity-40" />
                      </div>
                      <span
                        className="text-[11px] font-medium text-cedar-frost/35 whitespace-nowrap"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                      >
                        {step.label}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* Mobile: vertical accordion */}
        <div className="lg:hidden space-y-3">
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <motion.div key={step.label} layout className="rounded-2xl border border-cedar-frost/10 overflow-hidden">
                <button
                  onClick={() => handleSelect(i)}
                  className="w-full flex items-center gap-4 p-4 text-left"
                  style={{ background: isActive ? DARK_SOFT : 'transparent' }}
                >
                  <span className="font-mono text-[10px] text-cedar-frost/25">{String(i + 1).padStart(2, '0')}</span>
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: isActive ? DARK : 'rgba(255,255,255,0.06)' }}
                  >
                    <img src={step.icon} alt={step.label} className={`w-4 h-4 object-contain ${isActive ? '' : 'opacity-40'}`} />
                  </div>
                  <span className="font-display font-semibold text-cedar-frost text-sm flex-1">{step.label}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="text-xs text-cedar-frost/50 leading-relaxed px-4 pb-4 pl-[52px]">
                        {step.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}