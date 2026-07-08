import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TreePine, Zap, Target, Infinity } from 'lucide-react';

const pillars = [
  {
    icon: TreePine,
    title: 'Built to Endure',
    body: 'Like cedar wood renowned across millennia for its strength and resistance, we build software that withstands the test of time. No shortcuts. No technical debt accepted as inevitable.',
    accent: '#FFB8E0',
  },
  {
    icon: Zap,
    title: 'AI-First Mindset',
    body: 'Artificial intelligence is not a feature we bolt on—it is the architectural layer from which every system is designed. We engineer intelligence directly into the fabric of every solution.',
    accent: '#EC7FA9',
  },
  {
    icon: Target,
    title: 'Engineering Precision',
    body: 'Every decision is deliberate. Every abstraction has a reason. We apply algorithmic thinking to product design, infrastructure, and user experience alike.',
    accent: '#EC7FA9',
  },
  {
    icon: Infinity,
    title: 'Long-Term Partnerships',
    body: 'We are not a vendor—we are an extension of your engineering team. We invest in understanding your domain deeply, then build systems that grow with your ambitions.',
    accent: '#FFB8E0',
  },
];

export default function WhyCedarLogics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,184,224,0.08) 0%, transparent 70%)',
        }}
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
            <div className="section-label mb-4">
              <div className="w-4 h-px bg-cedar-red" />
              Why CedarLogics
            </div>
            <h2 className="section-heading text-4xl sm:text-5xl text-cedar-frost mb-6 leading-tight">
              The Intersection of
              <br />
              <span className="text-gradient-red">Strength & Intelligence</span>
            </h2>
            <p className="text-cedar-frost/50 leading-relaxed mb-6">
              The cedar tree has stood at the center of civilizations for thousands of years — sacred, 
              resilient, architectural. We chose this name deliberately. Engineering should be the same: 
              foundational, enduring, and trusted.
            </p>
            <p className="text-cedar-frost/50 leading-relaxed">
              We merge that philosophy with the precision of modern AI — systems that reason, adapt, 
              and evolve. The result is software that doesn't just work today — it compounds in value 
              over years.
            </p>

            {/* Visual accent */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['#EC7FA9', '#FFB8E0', '#FFB8E0', '#EC7FA9'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-cedar-dark flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: c }}>
                    {['A', 'B', 'C', 'D'][i]}
                  </div>
                ))}
              </div>
              <span className="text-sm text-cedar-frost/50">
                80+ enterprise clients trust us
              </span>
            </div>
          </div>

          {/* Visual right */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Rings */}
              {[0.9, 0.7, 0.5, 0.3].map((scale, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border"
                  style={{
                    margin: `${(1 - scale) * 50}%`,
                    borderColor: `rgba(${i === 0 ? '230,0,35' : i === 1 ? '68,63,128' : i === 2 ? '126,161,200' : '185,134,203'},${0.15 + i * 0.05})`,
                    borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
                  }}
                />
              ))}

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 rounded-3xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #EC7FA9, #FFB8E0)' }}>
                  <svg width="56" height="56" viewBox="0 0 36 36" fill="none">
                    <path d="M18 2L32 11V25L18 34L4 25V11L18 2Z" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M18 9L26 14V22L18 27L10 22V14L18 9Z" fill="white" fillOpacity="0.2"/>
                    <circle cx="18" cy="18" r="5" fill="white"/>
                    <circle cx="18" cy="18" r="2" fill="rgba(236,127,169,1)"/>
                  </svg>
                </div>
              </div>

              {/* Orbital dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: i % 3 === 0 ? '#EC7FA9' : i % 3 === 1 ? '#FFB8E0' : '#FFB8E0',
                    top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 38}% - 6px)`,
                    left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 38}% - 6px)`,
                  }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 group hover:border-cedar-red/20 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${pillar.accent}15` }}
                >
                  <Icon size={22} style={{ color: pillar.accent }} />
                </div>
                <h3 className="font-display font-semibold text-cedar-frost mb-2">{pillar.title}</h3>
                <p className="text-sm text-cedar-frost/50 leading-relaxed">{pillar.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
