import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import govIcon1 from '../../assets/Government & Public Sector (2).png';
import govIcon2 from '../../assets/Government & Public Sector (3).png';
import govIcon3 from '../../assets/Government & Public Sector (8).png';
import govIcon5 from '../../assets/Government & Public Sector (4).png';
import govIcon4 from '../../assets/Government & Public Sector (5).png';
const BLUSH = '#FF6FB5';
const ROSE = '#FF2D87';
const MAROON = '#8E1155';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatarColor: string;
  avatarIcon: string;
  quote: string;
  metricValue: string;
  metricLabel: string;
  trend: number[];
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Meridian Health',
    avatarColor: '#FF1A75',
    avatarIcon: govIcon1,
    quote:
      "CedarLogics rebuilt our entire patient data platform with AI-powered triage features. The engineering quality is exceptional. They don't just ship code, they engineer solutions.",
    metricValue: '94%',
    metricLabel: 'incident rate reduction · 3 months',
    trend: [78, 65, 58, 40, 22, 6],
  },
  {
    name: 'Marcus Williams',
    role: 'VP Engineering',
    company: 'FinPath Capital',
    avatarColor: '#FF5CA8',
    avatarIcon: govIcon5,
    quote:
      'Our trading platform required ultra-low latency and bulletproof reliability. CedarLogics delivered a system that processes 50k transactions per second with 99.99% uptime.',
    metricValue: '50k/s',
    metricLabel: 'transactions · 99.99% uptime',
    trend: [30, 42, 55, 68, 80, 96],
  },
  {
    name: 'Priya Sharma',
    role: 'Founder & CEO',
    company: 'EduFlow',
    avatarColor: '#FF1A75',
    avatarIcon: govIcon3,
    quote:
      'Within 4 months CedarLogics transformed our idea into a fully deployed AI tutoring platform serving 40,000 students. They felt like our in-house engineering team.',
    metricValue: '40,000',
    metricLabel: 'students onboarded · 4 months',
    trend: [10, 24, 38, 55, 74, 92],
  },
  {
    name: 'Alexander Frost',
    role: 'Head of Product',
    company: 'Nexus Retail',
    avatarColor: '#FF5CA8',
    avatarIcon: govIcon4,
    quote:
      'The intelligent recommendation engine CedarLogics built increased our conversion rate by 38%. What set them apart was total transparency, no surprises, no delays.',
    metricValue: '+38%',
    metricLabel: 'conversion rate lift',
    trend: [50, 54, 60, 68, 79, 88],
  },
  {
    name: 'Yuki Tanaka',
    role: 'Director of Engineering',
    company: 'Automata Labs',
    avatarColor: '#FF1A75',
    avatarIcon: govIcon2,
    quote:
      'CedarLogics helped us migrate an 8-year-old monolith to an event-driven microservices architecture without a single hour of downtime. Their methodology is surgical.',
    metricValue: '0 hrs',
    metricLabel: 'downtime · full migration',
    trend: [90, 90, 88, 90, 89, 91],
  },
];

function Sparkline({ data, color, animKey }: { data: number[]; color: string; animKey: string }) {
  const w = 160;
  const h = 44;
  const step = w / (data.length - 1);
  const points = data.map((v, i) => `${i * step},${h - (v / 100) * h}`).join(' ');

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-11 overflow-visible">
      <motion.polyline
        key={animKey}
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      {data.map((v, i) => (
        <motion.circle
          key={`${animKey}-${i}`}
          cx={i * step}
          cy={h - (v / 100) * h}
          r={i === data.length - 1 ? 3 : 1.5}
          fill={color}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
        />
      ))}
    </svg>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) setCurrent((p) => (p + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section
      className="py-28 relative overflow-hidden"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,184,224,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${BLUSH} 1px, transparent 1px)`,
          backgroundSize: '4px 4px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
            <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>
              Testimonials
            </span>
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${ROSE}, transparent)` }} />
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl text-cedar-frost mb-5">
            What Our Clients{' '}
            <span
              style={{
                backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${MAROON})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Say
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Client log list */}
          <div className="flex flex-col gap-2 overflow-visible pb-2 lg:pb-0">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setCurrent(i)}
                className={`group relative w-full text-left px-4 py-3 rounded-xl border transition-all duration-300 ${
                  i === current
                    ? 'border-cedar-red/40 bg-cedar-red/[0.06]'
                    : 'border-cedar-frost/10 hover:border-cedar-frost/25 hover:bg-cedar-frost/[0.03]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img src={item.avatarIcon} alt={item.name} className="w-5 h-5 object-contain flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div
                      className={`text-sm font-semibold truncate transition-colors ${
                        i === current ? 'text-cedar-frost' : 'text-cedar-frost/60'
                      }`}
                    >
                      {item.name}
                    </div>
                    <div className="text-[11px] text-cedar-frost/35 truncate">{item.role} · {item.company}</div>
                  </div>
                </div>
                {i === current && (
                  <motion.div
                    layoutId="active-rail"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 rounded-full bg-cedar-red"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active log entry */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 relative min-h-[380px] flex flex-col">
            <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-cedar-frost/30 mb-8">
              <span>LOG_ENTRY // {String(current + 1).padStart(2, '0')} OF {String(testimonials.length).padStart(2, '0')}</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cedar-red animate-pulse" />
                VERIFIED CLIENT
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-8"
              >
                <div>
                  <p className="text-cedar-frost/85 leading-relaxed text-base sm:text-lg mb-8">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <img src={t.avatarIcon} alt={t.name} className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                      <div className="font-semibold text-cedar-frost text-sm">{t.name}</div>
                      <div className="text-xs text-cedar-frost/40">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>

                {/* Metric readout */}
                <div className="border-t sm:border-t-0 sm:border-l border-cedar-frost/10 pt-6 sm:pt-0 sm:pl-8 flex flex-col justify-center">
                  <div className="font-mono text-[10px] tracking-widest text-cedar-frost/30 mb-2">
                    RESULT
                  </div>
                  <div
                    className="text-3xl sm:text-4xl font-orbitron font-bold mb-1"
                    style={{ color: t.avatarColor }}
                  >
                    {t.metricValue}
                  </div>
                  <div className="text-[11px] text-cedar-frost/45 leading-snug mb-3">
                    {t.metricLabel}
                  </div>
                  <Sparkline data={t.trend} color={t.avatarColor} animKey={t.name} />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-1.5 mt-8 pt-6 border-t border-cedar-frost/10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    i === current ? 'w-8 bg-cedar-red' : 'w-3 bg-cedar-frost/15 hover:bg-cedar-frost/30'
                  }`}
                />
              ))}
              <ArrowUpRight size={13} className="ml-auto text-cedar-frost/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}