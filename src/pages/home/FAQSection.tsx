import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const BLUSH = '#FF1A75';
const ROSE = '#FF5CA8';
const MAROON = '#7A1247';
const WINE = '#1A0510';

const faqs = [
  {
    q: 'What is CedarLogics?',
    a: 'CedarLogics is an Enterprise AI Workflow Automation Platform that orchestrates end-to-end business operations across departments, applications, and enterprise systems. We deploy AI agents that analyze, automate, monitor, and continuously optimize enterprise workflows — serving as an intelligent orchestration layer for digital transformation.',
  },
  {
    q: 'How does the AI Workflow Designer work?',
    a: 'The AI Workflow Designer provides visual process modeling to build intelligent, multi-step enterprise workflows. It supports conditional logic, AI-assisted decision paths, and automated task execution across systems. Workflows are designed using a drag-and-drop interface with AI recommendations for optimization.',
  },
  {
    q: 'What enterprise systems can CedarLogics integrate with?',
    a: 'Our Enterprise Integration Hub connects seamlessly with ERP, CRM, HRMS, finance platforms, cloud services, and custom APIs. We support major platforms like SAP, Salesforce, Workday, Oracle, Microsoft Dynamics, and thousands of API-driven enterprise applications through our extensible connector framework.',
  },
  {
    q: 'What does the CedarLogics Console do?',
    a: 'CedarLogics Console is the unified command center for your enterprise workflow automation. It provides real-time monitoring of workflow execution, AI agent activity tracking, automation success metrics, business KPI dashboards, and workflow optimization insights — all from a single operations dashboard.',
  },
  {
    q: 'How does AI Agent Orchestration work?',
    a: 'Our AI Agent Orchestration Layer coordinates specialized AI agents across business functions. Agents handle approvals, routing, task execution, and collaborative multi-step workflows autonomously. Each agent is purpose-built for specific business domains and learns from historical process data to improve decision-making.',
  },
  {
    q: 'What kind of businesses benefit from CedarLogics?',
    a: 'CedarLogics serves enterprise operations teams, digital transformation leaders, business process managers, IT departments, finance and HR teams, healthcare organizations, manufacturing enterprises, and government agencies. Any organization that relies on complex, multi-system business processes can benefit from intelligent workflow automation.',
  },
  {
    q: 'How is CedarLogics priced?',
    a: 'We offer subscription-based SaaS pricing with flexible tiers: Workflow Execution pricing based on volume, Enterprise Licensing for large-scale deployments, and API access for custom automation needs. We also provide professional implementation services and consulting for complex enterprise deployments.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${WINE} 0%, #0F0309 100%)` }}>
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />
      <div
        className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${MAROON}40 0%, transparent 65%)`, filter: 'blur(100px)' }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${ROSE}2e 0%, transparent 65%)`, filter: 'blur(90px)' }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
            <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>
              FAQ
            </span>
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${ROSE}, transparent)` }} />
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl text-white mb-5">
            Common{' '}
            <span
              style={{
                backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${MAROON})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Questions
            </span>
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
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 border"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-sm sm:text-base leading-snug" style={{ color: open === i ? '#fff' : 'rgba(255,255,255,0.85)' }}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
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
                      <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, transparent, ${ROSE}40, transparent)` }} />
                      <p className="text-sm leading-relaxed text-white/50">{faq.a}</p>
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
