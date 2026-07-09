import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Globe, Cloud, Building, Workflow, Smartphone, Server, Lightbulb, ArrowRight, Plus } from 'lucide-react';

const BLUSH = '#F9A8D4';
const ROSE = '#EC4899';
const MAROON = '#7A1247';
const tones = [ROSE, BLUSH, MAROON];

const services = [
  {
    icon: Bot,
    title: 'AI Solutions',
    description: 'Custom language models, computer vision systems, intelligent agents, and ML pipelines tailored to your specific domain and data.',
    features: ['LLM Fine-Tuning', 'Autonomous Agents', 'Vector Databases', 'RAG Systems'],
    tag: 'AI',
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Performance-obsessed, accessible web applications with modern React architectures and pixel-perfect interfaces.',
    features: ['React / Next.js', 'Real-time UIs', 'Progressive Web Apps', 'Component Systems'],
    tag: 'Web',
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    description: 'Multi-cloud infrastructure design with Infrastructure-as-Code, GitOps workflows, and automated cost optimization.',
    features: ['AWS / GCP / Azure', 'Kubernetes', 'Terraform / Pulumi', 'FinOps'],
    tag: 'Cloud',
  },
  {
    icon: Building,
    title: 'Enterprise Software',
    description: 'Large-scale, mission-critical software systems with complex domain logic, multi-tenancy, and compliance requirements.',
    features: ['Domain-Driven Design', 'Event Sourcing', 'CQRS', 'SOC 2 Compliance'],
    tag: 'Enterprise',
  },
  {
    icon: Workflow,
    title: 'Automation Systems',
    description: 'End-to-end process automation that eliminates repetitive work and creates self-healing, adaptive operational systems.',
    features: ['RPA', 'ETL Pipelines', 'Scheduled Jobs', 'Event Orchestration'],
    tag: 'Automation',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native performance, offline capabilities, and seamless cloud synchronization.',
    features: ['React Native', 'Expo', 'Native APIs', 'App Store Launch'],
    tag: 'Mobile',
  },
  {
    icon: Server,
    title: 'DevOps & SRE',
    description: 'Continuous delivery pipelines, observability stacks, incident management, and reliability engineering practices.',
    features: ['CI/CD', 'OpenTelemetry', 'SLO Frameworks', 'Chaos Engineering'],
    tag: 'DevOps',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Consulting',
    description: 'Technology strategy, architecture reviews, team augmentation, and AI readiness assessments for leadership teams.',
    features: ['Tech Due Diligence', 'Roadmapping', 'Team Coaching', 'AI Strategy'],
    tag: 'Consulting',
  },
].map((svc, i) => ({ ...svc, tone: tones[i % tones.length] }));

export default function ServicesSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-dot-bg opacity-20" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4 justify-center">
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
            Services
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${ROSE}, transparent)` }} />
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl text-cedar-frost mb-5">
            Full-Spectrum
            <br />
            <span
              style={{
                backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${MAROON})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Engineering Services
            </span>
          </h2>
          <p className="text-lg text-cedar-frost/50 max-w-2xl mx-auto">
            From AI systems to cloud infrastructure to polished products — we cover the entire spectrum
            of modern software engineering.
          </p>
        </motion.div>

        {/* Editorial index */}
        <div className="border-t border-cedar-frost/10">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isOpen = open === i;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                className="relative border-b border-cedar-frost/10 overflow-hidden"
              >
                {/* ghost icon, bleeds off the edge when open */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 0.06, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ duration: 0.4 }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:block"
                    >
                      <Icon size={160} style={{ color: svc.tone }} strokeWidth={1} />
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="relative w-full text-left py-6 flex items-center gap-5 group"
                >
                  <span
                    className="font-mono text-xs flex-shrink-0 transition-colors duration-300"
                    style={{ color: isOpen ? svc.tone : 'rgba(232,232,235,0.25)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3
                        className="font-display font-semibold transition-all duration-300"
                        style={{
                          fontSize: isOpen ? '1.75rem' : '1.35rem',
                          color: isOpen ? '#fff' : 'rgba(232,232,235,0.85)',
                        }}
                      >
                        {svc.title}
                      </h3>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: `${svc.tone}18`, color: svc.tone }}
                      >
                        {svc.tag}
                      </span>
                    </div>
                  </div>

                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300"
                    style={{
                      borderColor: isOpen ? svc.tone : 'rgba(232,232,235,0.15)',
                      background: isOpen ? `${svc.tone}15` : 'transparent',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    <Plus size={16} style={{ color: isOpen ? svc.tone : 'rgba(232,232,235,0.4)' }} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="relative overflow-hidden"
                    >
                      <div className="pb-8 pl-[46px] pr-4 sm:pr-40 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-start">
                        <p className="text-sm text-cedar-frost/55 leading-relaxed max-w-md">
                          {svc.description}
                        </p>
                        <ul className="flex flex-col gap-1.5 flex-shrink-0">
                          {svc.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-xs text-cedar-frost/40 whitespace-nowrap">
                              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: svc.tone }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-secondary inline-flex items-center gap-2 px-8 py-3 text-sm"
          >
            Discuss your project
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}