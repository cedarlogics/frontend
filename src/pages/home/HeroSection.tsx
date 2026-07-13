import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Cog, Github } from 'lucide-react';
import heroImg1 from '../../assets/Hero image.png';
import heroImg2 from '../../assets/Hero image (2).png';
import heroImg3 from '../../assets/Hero image (3).png';
import heroImg4 from '../../assets/Hero image (4).png';

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4];

const BRIGHT = '#FF2D87';
const DARK = '#8E1155';

// Featured case studies — the fanned card arc. Order encodes the index shown
// beside the quote (e.g. "02/04"), so treat this array as a real sequence.
const stories = [
  {
    client: 'Atlas Robotics',
    project: 'Fleet Automation',
    quote: '"We had 42% of our fleet sitting idle due to routing inefficiencies. CedarLogics built an AI dispatch system that rebalanced our entire fleet in real-time — cutting downtime by 42% in a single quarter and saving us over $2.3M annually."',
  },
  {
    client: 'Meridian Bank',
    project: 'Fraud Detection AI',
    quote: '"Our legacy rules engine missed sophisticated fraud patterns that were costing millions. The CedarLogics team deployed a graph-based AI that detects anomalies our old system never caught — stopping 94% of fraudulent transactions before they settled."',
  },
  {
    client: 'NovaHealth',
    project: 'Clinical Copilot',
    quote: '"Clinicians were drowning in administrative work, spending hours on documentation every shift. CedarLogics built an AI copilot that integrates directly with our EHR — giving our providers back four hours a day to focus on patient care."',
  },
  {
    client: 'Vantage Logistics',
    project: 'Route Intelligence',
    quote: '"Rebuilding our routing engine without interrupting live operations seemed impossible. CedarLogics executed a seamless migration to their intelligent routing platform — zero downtime, 23% faster delivery times, and our customers noticed immediately."',
  },
];

// Rotation + offset for each card in the fan, back to front.
const fanTransforms = [
  { rotate: -14, x: -92, y: 18, scale: 0.88, z: 0 },
  { rotate: -5, x: -34, y: 4, scale: 0.94, z: 1 },
  { rotate: 6, x: 30, y: 6, scale: 0.94, z: 1 },
  { rotate: 15, x: 90, y: 20, scale: 0.88, z: 0 },
];

function GearShape({ cx, cy, r, teeth = 8, color = '#FF1A75' }: { cx: number; cy: number; r: number; teeth?: number; color?: string }) {
  const innerR = r * 0.65;
  const toothH = r * 0.35;
  const toothW = (Math.PI * 2 * r) / teeth * 0.4;
  const points: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a1 = (i / teeth) * Math.PI * 2;
    const a2 = ((i + 0.5) / teeth) * Math.PI * 2;
    const a3 = ((i + 0.5) / teeth) * Math.PI * 2;
    const a4 = ((i + 1) / teeth) * Math.PI * 2;
    points.push(`${cx + Math.cos(a1) * r},${cy + Math.sin(a1) * r}`);
    points.push(`${cx + Math.cos(a2) * (r + toothH)},${cy + Math.sin(a2) * (r + toothH)}`);
    points.push(`${cx + Math.cos(a3) * (r + toothH)},${cy + Math.sin(a3) * (r + toothH)}`);
    points.push(`${cx + Math.cos(a4) * r},${cy + Math.sin(a4) * r}`);
  }
  return (
    <motion.g
      style={{ transformOrigin: `${cx}px ${cy}px` }}
      animate={{ rotate: 360 }}
      transition={{ duration: 60 + Math.random() * 30, repeat: Infinity, ease: 'linear' }}
    >
      <polygon points={points.join(' ')} fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={innerR} fill={color} fillOpacity="0.08" stroke={color} strokeOpacity="0.2" strokeWidth="0.8" />
      <circle cx={cx} cy={cy} r={r * 0.2} fill={color} fillOpacity="0.3" />
    </motion.g>
  );
}

function EngineeringDial() {
  return (
    <motion.svg
      viewBox="0 0 800 800"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
    >
      <circle cx="400" cy="400" r="380" stroke="#FF1A75" strokeOpacity="0.15" strokeWidth="1.5" fill="none" />
      <circle cx="400" cy="400" r="300" stroke="#FF1A75" strokeOpacity="0.25" strokeWidth="1" fill="none" />
      <motion.g
        style={{ transformOrigin: '400px 400px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        {Array.from({ length: 48 }).map((_, i) => {
          const angle = (i / 48) * 360;
          const long = i % 4 === 0;
          return (
            <line
              key={i}
              x1="400"
              y1={long ? '32' : '48'}
              x2="400"
              y2="66"
              stroke="#FF5CA8"
              strokeOpacity={long ? 0.55 : 0.25}
              strokeWidth={long ? 2 : 1}
              transform={`rotate(${angle} 400 400)`}
            />
          );
        })}
      </motion.g>
      <motion.g
        style={{ transformOrigin: '400px 400px' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 130, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="400" cy="80" r="6" fill="#FF1A75" />
        <circle cx="720" cy="400" r="4" fill="#FF5CA8" fillOpacity="0.7" />
        <circle cx="400" cy="720" r="4" fill="#FF5CA8" fillOpacity="0.7" />
        <circle cx="80" cy="400" r="6" fill="#FF1A75" />
      </motion.g>
      <circle cx="400" cy="400" r="140" stroke="#FF1A75" strokeOpacity="0.3" strokeWidth="1" fill="rgba(255,26,117,0.04)" />
      <circle cx="400" cy="400" r="8" fill="#FF1A75" />
    </motion.svg>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);
  const featured = stories[active];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % stories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 grid-dot-bg opacity-40" />

      {/* Gradient background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(160deg, #FFF0F5 0%, #FFE4EF 20%, #FFD6E8 40%, #FFFFFF 70%, #F5F0FF 100%)',
      }} />

      {/* Social media icons - left edge column */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-5"
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
          className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-cedar-frost/40 hover:text-[#FF2D87] transition-colors">
          <Github size={16} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
          className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-cedar-frost/40 hover:text-[#FF2D87] transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-cedar-frost/40 hover:text-[#FF2D87] transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-cedar-frost/40 hover:text-[#FF2D87] transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <div className="w-px h-12" style={{ background: DARK, opacity: 0.2 }} />
      </motion.div>

      {/* Large engineering dial, cropped at the bottom like a horizon */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ bottom: '-38%', width: 'min(1100px, 130vw)', height: 'min(1100px, 130vw)' }}
      >
        <EngineeringDial />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col">
        <div className="grid lg:grid-cols-2 gap-16 items-center flex-1">
          {/* Left: quote + fanned case-study cards */}
          <div className="relative order-2 lg:order-1">
            <motion.p
              key={featured.client}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative pl-5 border-l-2 italic text-cedar-frost/70 text-sm sm:text-base max-w-md mb-8 leading-relaxed"
              style={{ borderColor: `rgba(255, 45, 135, 0.4)` }}
            >
              {featured.quote}
            </motion.p>

            <div className="relative h-72 sm:h-80" style={{ perspective: 1200 }}>
              {stories.map((story, i) => {
                const t = fanTransforms[i];
                const isActive = i === active;
                return (
                  <motion.button
                    key={story.client}
                    onClick={() => setActive(i)}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{
                      opacity: 1,
                      y: isActive ? -10 : 0,
                      x: t.x,
                      rotate: t.rotate,
                      scale: isActive ? t.scale + 0.08 : t.scale,
                    }}
                    transition={{ duration: 0.5, delay: 0.15 * i }}
                    style={{
                      zIndex: isActive ? 20 : t.z,
                      transformOrigin: 'bottom center',
                      borderColor: isActive ? `rgba(199, 21, 133, 0.3)` : undefined,
                    }}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 sm:w-48 aspect-[3/4] rounded-2xl glass-card p-4 flex flex-col justify-between text-left transition-shadow ${
                      isActive ? 'shadow-xl' : 'border-transparent'
                    }`}
                  >
                    <div
                      className="relative w-full h-2/3 rounded-xl overflow-hidden"
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          background: isActive
                            ? 'linear-gradient(135deg, rgba(255,45,135,0.4), rgba(142,17,85,0.4))'
                            : 'linear-gradient(135deg, rgba(255,45,135,0.15), rgba(142,17,85,0.15))',
                        }}
                      />
                      <img
                        src={heroImages[i]}
                        alt={story.client}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ opacity: isActive ? 1 : 0.6 }}
                      />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-cedar-frost leading-tight">
                        {story.client}
                      </div>
                      <div className="text-xs text-cedar-frost/50 font-medium">{story.project}</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="flex items-center gap-3 mt-8">
              <span className="font-display text-sm font-bold" style={{ color: BRIGHT }}>
                {String(active + 1).padStart(2, '0')}
              </span>
              <div className="w-10 h-px" style={{ background: DARK, opacity: 0.4 }} />
              <span className="font-display text-sm text-cedar-frost/40 font-medium">
                {String(stories.length).padStart(2, '0')}
              </span>
              <div className="flex gap-1.5 ml-2">
                {stories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Show case study ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'scale-125' : 'bg-cedar-frost/20 hover:bg-cedar-frost/40'
                    }`}
                    style={i === active ? { background: BRIGHT } : undefined}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: headline */}
          <div className="order-1 lg:order-2 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8"
              style={{ borderColor: `rgba(199, 21, 133, 0.2)` }}
            >
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: BRIGHT }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: BRIGHT }}>
                Automate Complex Workflows. Accelerate Smarter Decisions.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="section-heading font-orbitron text-4xl sm:text-5xl lg:text-6xl leading-[0.95] mb-6"
            >
              <span className="text-cedar-frost block">ENTERPRISE</span>
              <span className="text-gradient-red block">AI</span>
              <span className="text-cedar-frost block">THAT MOVES</span>
              <span className="text-gradient-red block">WORK FORWARD</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="text-cedar-frost/60 text-sm sm:text-base max-w-sm mx-auto lg:mx-0 lg:ml-auto mb-10 leading-relaxed"
            >
              CedarLogics helps enterprises streamline operations with AI-powered workflow automation, intelligent decision engines, and connected business systems. Replace repetitive manual processes with AI agents that coordinate tasks, optimize workflows, and keep your business running efficiently from end to end.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center lg:justify-end justify-center gap-4"
            >
              <Link to="/console" className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:translate-y-[-1px] bg-white/50 hover:bg-white/80 backdrop-blur-sm group border" style={{ color: BRIGHT, borderColor: `rgba(255, 45, 135, 0.3)` }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(255, 45, 135, 0.6)`}
                onMouseLeave={e => e.currentTarget.style.borderColor = `rgba(255, 45, 135, 0.3)`}>
                Get a Demo
                <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${BRIGHT}, ${DARK})` }}>
                  <ArrowRight size={14} className="text-white" />
                </span>
              </Link>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-xl"
                style={{ background: `linear-gradient(135deg, ${BRIGHT}, ${DARK})`, boxShadow: `0 4px 24px rgba(199, 21, 133, 0.3)` }}
              >
                Explore Platform
                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white/20">
                  <ArrowRight size={14} className="text-white" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Corner affordance, mirroring the reference's small expand icon */}
      <a
        href="#stories"
        onClick={(e) => { e.preventDefault(); document.getElementById('trusted')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="absolute bottom-8 right-6 sm:right-10 z-10 w-11 h-11 rounded-full glass-card flex items-center justify-center text-cedar-frost/50 hover:text-cedar-frost transition-colors"
        aria-label="See all case studies"
      >
        <ArrowUpRight size={18} />
      </a>
    </section>
  );
}