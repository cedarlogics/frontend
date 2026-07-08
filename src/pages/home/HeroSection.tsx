import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Cog } from 'lucide-react';

// Featured case studies — the fanned card arc. Order encodes the index shown
// beside the quote (e.g. "02/04"), so treat this array as a real sequence.
const stories = [
  {
    client: 'Atlas Robotics',
    project: 'Fleet Automation',
    quote: '"Cut fleet downtime by 42% in one quarter."',
  },
  {
    client: 'Meridian Bank',
    project: 'Fraud Detection AI',
    quote: '"Caught fraud patterns our old rules missed."',
  },
  {
    client: 'NovaHealth',
    project: 'Clinical Copilot',
    quote: '"Gave clinicians back four hours a day."',
  },
  {
    client: 'Vantage Logistics',
    project: 'Route Intelligence',
    quote: '"Rebuilt routing logic without a single outage."',
  },
];

// Rotation + offset for each card in the fan, back to front.
const fanTransforms = [
  { rotate: -14, x: -92, y: 18, scale: 0.88, z: 0 },
  { rotate: -5, x: -34, y: 4, scale: 0.94, z: 1 },
  { rotate: 6, x: 30, y: 6, scale: 0.94, z: 1 },
  { rotate: 15, x: 90, y: 20, scale: 0.88, z: 0 },
];

function EngineeringDial() {
  return (
    <motion.svg
      viewBox="0 0 800 800"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
    >
      <circle cx="400" cy="400" r="380" stroke="#EC7FA9" strokeOpacity="0.15" strokeWidth="1.5" fill="none" />
      <circle cx="400" cy="400" r="300" stroke="#EC7FA9" strokeOpacity="0.25" strokeWidth="1" fill="none" />
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
              stroke="#FFB8E0"
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
        <circle cx="400" cy="80" r="6" fill="#EC7FA9" />
        <circle cx="720" cy="400" r="4" fill="#FFB8E0" fillOpacity="0.7" />
        <circle cx="400" cy="720" r="4" fill="#FFB8E0" fillOpacity="0.7" />
        <circle cx="80" cy="400" r="6" fill="#EC7FA9" />
      </motion.g>
      <circle cx="400" cy="400" r="140" stroke="#EC7FA9" strokeOpacity="0.3" strokeWidth="1" fill="rgba(236,127,169,0.04)" />
      <circle cx="400" cy="400" r="8" fill="#EC7FA9" />
    </motion.svg>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);
  const featured = stories[active];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 grid-dot-bg opacity-40" />

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
              className="italic text-cedar-frost/50 text-sm sm:text-base max-w-xs mb-8"
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
                    style={{ zIndex: isActive ? 10 : t.z, transformOrigin: 'bottom center' }}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 sm:w-48 aspect-[3/4] rounded-2xl glass-card p-4 flex flex-col justify-between text-left transition-shadow ${
                      isActive ? 'border-cedar-red/30 shadow-xl' : 'border-transparent'
                    }`}
                  >
                    <div
                      className="w-full h-2/3 rounded-xl"
                      style={{
                        background: isActive
                          ? 'linear-gradient(135deg, rgba(236,127,169,0.35), rgba(255,184,224,0.35))'
                          : 'linear-gradient(135deg, rgba(236,127,169,0.12), rgba(255,184,224,0.12))',
                      }}
                    />
                    <div>
                      <div className="font-display font-bold text-sm text-cedar-frost leading-tight">
                        {story.client}
                      </div>
                      <div className="text-xs text-cedar-frost/40">{story.project}</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="flex items-center gap-3 mt-8">
              <span className="font-display text-sm text-cedar-frost/60">
                {String(active + 1).padStart(2, '0')}
              </span>
              <div className="w-10 h-px bg-cedar-red/30" />
              <span className="font-display text-sm text-cedar-frost/30">
                {String(stories.length).padStart(2, '0')}
              </span>
              <div className="flex gap-1.5 ml-2">
                {stories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Show case study ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === active ? 'bg-cedar-red' : 'bg-cedar-frost/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: headline */}
          <div className="order-1 lg:order-2 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-cedar-red/20 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cedar-red animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cedar-frost/70">
                AI Engineering Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-heading text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6"
            >
              <span className="text-cedar-frost block">INTELLIGENT</span>
              <span className="text-gradient-red block">SOFTWARE.</span>
              <span className="text-cedar-frost block">TIMELESS</span>
              <span className="text-gradient-red block">ENGINEERING.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-cedar-frost/50 text-sm sm:text-base max-w-sm mx-auto lg:mx-0 lg:ml-auto mb-10"
            >
              We engineer platforms, automation, and cloud-native systems built to endure — every client, a story worth telling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center lg:justify-end justify-center gap-4"
            >
              <Link to="/console" className="btn-primary text-base px-8 py-4 rounded-2xl">
                <Cog size={18} />
                Explore Console
                <ArrowRight size={16} />
              </Link>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-secondary text-base px-8 py-4 rounded-2xl"
              >
                View Services
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