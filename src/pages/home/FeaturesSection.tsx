import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bot, Building2, Cloud, Code2, BarChart3, ShieldCheck, Layers, Cpu } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Intelligent agents that learn, adapt, and autonomously execute complex workflows across your entire stack.',
    accent: '#EC7FA9',
    tag: 'Machine Learning',
  },
  {
    icon: Building2,
    title: 'Enterprise Platforms',
    description: 'Architecting resilient, scalable platforms designed to power thousands of concurrent users across global regions.',
    accent: '#FFB8E0',
    tag: 'Distributed Systems',
  },
  {
    icon: Cloud,
    title: 'Cloud Engineering',
    description: 'Cloud-native infrastructure with multi-region deployments, auto-scaling, and zero-downtime delivery pipelines.',
    accent: '#FFB8E0',
    tag: 'Infrastructure',
  },
  {
    icon: Code2,
    title: 'API Development',
    description: 'Design-first REST and GraphQL APIs that scale effortlessly while maintaining strict type safety and SLA guarantees.',
    accent: '#EC7FA9',
    tag: 'Backend Engineering',
  },
  {
    icon: BarChart3,
    title: 'Intelligent Analytics',
    description: 'Real-time data pipelines and AI-powered dashboards that surface actionable insights without the noise.',
    accent: '#FFB8E0',
    tag: 'Data Intelligence',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'Zero-trust architecture, automated vulnerability scanning, and compliance-ready security frameworks.',
    accent: '#EC7FA9',
    tag: 'Security',
  },
  {
    icon: Layers,
    title: 'Digital Transformation',
    description: 'End-to-end modernization of legacy systems into composable, event-driven architectures.',
    accent: '#FFB8E0',
    tag: 'Modernization',
  },
  {
    icon: Cpu,
    title: 'Product Engineering',
    description: 'From ideation to production—we design, build, and iterate on digital products that users love.',
    accent: '#FFB8E0',
    tag: 'Full-Stack',
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-line-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-cedar-red/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="section-label mb-4">
            <div className="w-4 h-px bg-cedar-red" />
            Core Capabilities
            <div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading font-orbitron text-4xl sm:text-5xl lg:text-6xl text-cedar-frost mb-5">
            Engineering Capabilities
            <br />
            <span className="text-gradient-violet">That Scale Infinitely</span>
          </h2>
          <p className="text-lg text-cedar-frost/50 max-w-2xl mx-auto">
            A comprehensive suite of AI and engineering capabilities, each built to enterprise standards 
            and designed to work cohesively together.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, i) => (
            <FeatureCard key={feat.title} feat={feat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feat, index }: { feat: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = feat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group relative glass-card rounded-2xl p-6 cursor-default overflow-hidden hover:border-cedar-red/20 transition-all duration-500"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${feat.accent}10 0%, transparent 70%)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${feat.accent}60, transparent)` }}
      />

      {/* Tag */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: `${feat.accent}15`, color: feat.accent }}
        >
          {feat.tag}
        </span>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ background: `${feat.accent}15` }}
        >
          <Icon size={20} style={{ color: feat.accent }} />
        </div>
      </div>

      <h3 className="font-display font-semibold text-lg text-cedar-frost mb-2 group-hover:text-white transition-colors">
        {feat.title}
      </h3>
      <p className="text-sm text-cedar-frost/50 leading-relaxed group-hover:text-cedar-frost/70 transition-colors">
        {feat.description}
      </p>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${feat.accent}, transparent)` }}
      />
    </motion.div>
  );
}
