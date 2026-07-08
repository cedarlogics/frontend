import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What types of projects does CedarLogics take on?',
    a: 'We specialize in AI-integrated applications, enterprise software platforms, cloud-native systems, and product engineering. We work best with companies that value engineering quality over commodity delivery — whether you are a funded startup building your core product or an enterprise modernizing critical infrastructure.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary based on scope. A focused MVP typically takes 6–12 weeks. Enterprise platform builds or AI system integrations range from 3–9 months. We always provide a detailed timeline during our discovery phase, and we have never missed a committed delivery date in our company history.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes. Every engagement includes structured post-launch support. Our Starter plan includes 30 days of support, Professional includes 3 months, and Enterprise clients receive dedicated SLA-backed support with guaranteed response times. We also offer retainer-based long-term maintenance plans.',
  },
  {
    q: 'What does the CedarLogics Console do?',
    a: 'CedarLogics Console is our flagship AI operations platform — a unified workspace for deploying intelligent agents, building automation workflows, monitoring infrastructure, and analyzing business intelligence. It is designed for engineering and operations teams who need enterprise-grade AI tooling without the enterprise complexity.',
  },
  {
    q: 'How do you handle intellectual property?',
    a: 'You own 100% of everything we build for you. All source code, architecture decisions, documentation, and assets are fully transferred to you upon project completion. We retain no licensing claims, no backdoors, and no dependencies on proprietary CedarLogics infrastructure.',
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Absolutely — team augmentation is one of our most common engagement models. We embed senior engineers, AI specialists, and architects directly into your workflow, matching your tooling, processes, and communication style. Many clients prefer this approach for continuity and knowledge transfer.',
  },
  {
    q: 'What is your approach to AI integration?',
    a: 'We treat AI as an architectural layer, not an add-on feature. This means we design data pipelines, vector stores, inference infrastructure, and model selection strategies from day one. We work with OpenAI, Anthropic, open-source models, and fine-tuned domain-specific models — always choosing what is right for your use case, not what is trending.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,184,224,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4">
            <div className="w-4 h-px bg-cedar-red" />
            FAQ
            <div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading font-orbitron text-4xl sm:text-5xl text-cedar-frost mb-4">
            Common <span className="text-gradient-red">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-cedar-red/20 transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-cedar-frost text-sm sm:text-base leading-snug">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={18} className="text-cedar-frost/40" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-cedar-red/5 mb-4" />
                      <p className="text-cedar-frost/60 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
