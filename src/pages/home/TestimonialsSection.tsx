import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Meridian Health',
    avatar: 'SC',
    avatarColor: '#EC7FA9',
    rating: 5,
    quote: "CedarLogics rebuilt our entire patient data platform with AI-powered triage features. The engineering quality is exceptional — our incident rate dropped by 94% in 3 months. They don't just ship code; they engineer solutions.",
  },
  {
    name: 'Marcus Williams',
    role: 'VP Engineering',
    company: 'FinPath Capital',
    avatar: 'MW',
    avatarColor: '#FFB8E0',
    rating: 5,
    quote: "Our trading platform required ultra-low latency and bulletproof reliability. CedarLogics delivered a system that processes 50k transactions per second with 99.99% uptime. The architecture they designed was far beyond what we imagined.",
  },
  {
    name: 'Priya Sharma',
    role: 'Founder & CEO',
    company: 'EduFlow',
    avatar: 'PS',
    avatarColor: '#FFB8E0',
    rating: 5,
    quote: "Within 4 months CedarLogics transformed our idea into a fully deployed AI tutoring platform serving 40,000 students. The product quality and speed of delivery were remarkable. They felt like our in-house engineering team.",
  },
  {
    name: 'Alexander Frost',
    role: 'Head of Product',
    company: 'Nexus Retail',
    avatar: 'AF',
    avatarColor: '#EC7FA9',
    rating: 5,
    quote: "The intelligent recommendation engine CedarLogics built increased our conversion rate by 38%. But what set them apart was the transparency throughout the project — no surprises, no delays, no excuses.",
  },
  {
    name: 'Yuki Tanaka',
    role: 'Director of Engineering',
    company: 'Automata Labs',
    avatar: 'YT',
    avatarColor: '#FFB8E0',
    rating: 5,
    quote: "CedarLogics helped us migrate a monolithic 8-year-old system to a modern event-driven microservices architecture without a single hour of downtime. Their methodology is surgical and meticulous.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,184,224,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4">
            <div className="w-4 h-px bg-cedar-red" />
            Testimonials
            <div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl text-cedar-frost mb-4">
            What Our Clients <span className="text-gradient-red">Say</span>
          </h2>
        </motion.div>

        {/* Main card */}
        <div className="relative h-72 sm:h-56">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <div className="glass-card rounded-3xl p-8 sm:p-10 h-full flex flex-col sm:flex-row items-start gap-6">
                {/* Quote icon */}
                <Quote size={32} className="text-cedar-red/30 flex-shrink-0 hidden sm:block mt-1" />

                <div className="flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-cedar-frost/80 leading-relaxed mb-6 italic text-sm sm:text-base">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: t.avatarColor }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-cedar-frost text-sm">{t.name}</div>
                      <div className="text-xs text-cedar-frost/40">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <button onClick={prev} className="btn-secondary p-3 rounded-xl">
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2 bg-cedar-red' : 'w-2 h-2 bg-cedar-frost/20 hover:bg-cedar-frost/40'
                }`}
              />
            ))}
          </div>

          <button onClick={next} className="btn-secondary p-3 rounded-xl">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
