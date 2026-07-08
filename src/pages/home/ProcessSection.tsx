import { motion } from 'framer-motion';
import { Search, Microscope, Palette, Code2, Rocket, BarChart3, TrendingUp } from 'lucide-react';

const steps = [
  { icon: Search, label: 'Discover', desc: 'Deep dive into your business context, technical landscape, and user needs.' },
  { icon: Microscope, label: 'Research', desc: 'Competitive analysis, technical feasibility, and architecture scoping.' },
  { icon: Palette, label: 'Design', desc: 'Systems thinking meets interface design — clarity before code.' },
  { icon: Code2, label: 'Build', desc: 'Iterative development with continuous feedback and engineering rigor.' },
  { icon: Rocket, label: 'Deploy', desc: 'Zero-downtime releases with full observability from day one.' },
  { icon: BarChart3, label: 'Optimize', desc: 'Performance profiling, cost analysis, and reliability improvements.' },
  { icon: TrendingUp, label: 'Scale', desc: 'Evolve architecture to handle 10x, 100x, and beyond.' },
];

export default function ProcessSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-dot-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="section-label mb-4">
            <div className="w-4 h-px bg-cedar-red" />
            Our Process
            <div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading font-orbitron text-4xl sm:text-5xl text-cedar-frost mb-5">
            From Concept to
            <br />
            <span className="text-gradient-violet">Production at Scale</span>
          </h2>
          <p className="text-lg text-cedar-frost/50 max-w-2xl mx-auto">
            A methodical approach that respects your time, budget, and engineering standards—
            every phase designed to reduce risk and maximize output.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-14 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(236,127,169,0.3) 10%, rgba(255,184,224,0.3) 50%, rgba(236,127,169,0.3) 90%, transparent)' }} />

          <div className="grid grid-cols-7 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Node */}
                  <div className="relative mb-6">
                    <motion.div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: i === 0 || i === 3 || i === 6
                          ? 'linear-gradient(135deg, #EC7FA9, #EC7FA9)'
                          : 'linear-gradient(135deg, rgba(255,184,224,0.6), rgba(255,184,224,0.3))',
                        boxShadow: i === 0 || i === 3 || i === 6
                          ? '0 0 20px rgba(236,127,169,0.3)'
                          : 'none',
                      }}
                      whileHover={{ boxShadow: '0 0 20px rgba(236,127,169,0.4)' }}
                    >
                      <Icon size={18} className="text-white" />
                    </motion.div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs font-bold text-white flex items-center justify-center"
                      style={{ background: '#EC7FA9' }}>
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-cedar-frost text-sm mb-2">{step.label}</h3>
                  <p className="text-xs text-cedar-frost/40 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 glass-card rounded-xl p-4"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: i === 0 || i === 3 || i === 6 ? 'linear-gradient(135deg, #EC7FA9, #EC7FA9)' : 'rgba(255,184,224,0.5)' }}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs font-bold text-white flex items-center justify-center"
                    style={{ background: '#EC7FA9', fontSize: '9px' }}>
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-cedar-frost text-sm mb-1">{step.label}</h3>
                  <p className="text-xs text-cedar-frost/50">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
