import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bot, Globe, Cloud, Building, Workflow, Smartphone, Server, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Solutions',
    description: 'Custom language models, computer vision systems, intelligent agents, and ML pipelines tailored to your specific domain and data.',
    features: ['LLM Fine-Tuning', 'Autonomous Agents', 'Vector Databases', 'RAG Systems'],
    gradient: 'from-cedar-red/10 via-transparent to-transparent',
    accent: '#EC7FA9',
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Performance-obsessed, accessible web applications with modern React architectures and pixel-perfect interfaces.',
    features: ['React / Next.js', 'Real-time UIs', 'Progressive Web Apps', 'Component Systems'],
    gradient: 'from-cedar-violet/10 via-transparent to-transparent',
    accent: '#FFB8E0',
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    description: 'Multi-cloud infrastructure design with Infrastructure-as-Code, GitOps workflows, and automated cost optimization.',
    features: ['AWS / GCP / Azure', 'Kubernetes', 'Terraform / Pulumi', 'FinOps'],
    gradient: 'from-cedar-steel/10 via-transparent to-transparent',
    accent: '#FFB8E0',
  },
  {
    icon: Building,
    title: 'Enterprise Software',
    description: 'Large-scale, mission-critical software systems with complex domain logic, multi-tenancy, and compliance requirements.',
    features: ['Domain-Driven Design', 'Event Sourcing', 'CQRS', 'SOC 2 Compliance'],
    gradient: 'from-cedar-orchid/10 via-transparent to-transparent',
    accent: '#EC7FA9',
  },
  {
    icon: Workflow,
    title: 'Automation Systems',
    description: 'End-to-end process automation that eliminates repetitive work and creates self-healing, adaptive operational systems.',
    features: ['RPA', 'ETL Pipelines', 'Scheduled Jobs', 'Event Orchestration'],
    gradient: 'from-cedar-mist/10 via-transparent to-transparent',
    accent: '#FFB8E0',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native performance, offline capabilities, and seamless cloud synchronization.',
    features: ['React Native', 'Expo', 'Native APIs', 'App Store Launch'],
    gradient: 'from-cedar-red/10 via-transparent to-transparent',
    accent: '#EC7FA9',
  },
  {
    icon: Server,
    title: 'DevOps & SRE',
    description: 'Continuous delivery pipelines, observability stacks, incident management, and reliability engineering practices.',
    features: ['CI/CD', 'OpenTelemetry', 'SLO Frameworks', 'Chaos Engineering'],
    gradient: 'from-cedar-violet/10 via-transparent to-transparent',
    accent: '#FFB8E0',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Consulting',
    description: 'Technology strategy, architecture reviews, team augmentation, and AI readiness assessments for leadership teams.',
    features: ['Tech Due Diligence', 'Roadmapping', 'Team Coaching', 'AI Strategy'],
    gradient: 'from-cedar-steel/10 via-transparent to-transparent',
    accent: '#FFB8E0',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-dot-bg opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(236,127,169,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="section-label mb-4">
            <div className="w-4 h-px bg-cedar-red" />
            Services
            <div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl lg:text-6xl text-cedar-frost mb-5">
            Full-Spectrum
            <br />
            <span className="text-gradient-red">Engineering Services</span>
          </h2>
          <p className="text-lg text-cedar-frost/50 max-w-2xl mx-auto">
            From AI systems to cloud infrastructure to polished products—we cover the entire spectrum 
            of modern software engineering.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className={`group relative rounded-2xl p-6 overflow-hidden cursor-default glass-card hover:border-cedar-red/20 transition-all duration-500`}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div
                  className="relative w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${svc.accent}20` }}
                >
                  <Icon size={22} style={{ color: svc.accent }} />
                </div>

                <h3 className="relative font-display font-semibold text-lg text-cedar-frost mb-2">
                  {svc.title}
                </h3>
                <p className="relative text-sm text-cedar-frost/50 leading-relaxed mb-4">
                  {svc.description}
                </p>

                <ul className="relative space-y-1.5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-cedar-frost/40">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: svc.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
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
