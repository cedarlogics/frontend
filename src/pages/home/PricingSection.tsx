import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '4,900',
    period: 'project',
    description: 'For startups and early-stage companies validating their ideas.',
    features: [
      'Up to 3 core features',
      'React + Node.js stack',
      'Basic AI integration',
      'Supabase / Firebase DB',
      '30-day support',
      '1 revision cycle',
    ],
    cta: 'Get Started',
    popular: false,
    accent: '#FFB8E0',
  },
  {
    name: 'Professional',
    price: '18,000',
    period: 'project',
    description: 'For scaling companies building production-grade platforms.',
    features: [
      'Unlimited features scope',
      'Full-stack architecture',
      'Advanced AI/ML systems',
      'Custom database design',
      '3 months support',
      'Unlimited revisions',
      'CI/CD & DevOps setup',
      'Performance optimization',
    ],
    cta: 'Most Popular',
    popular: true,
    accent: '#EC7FA9',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'engagement',
    description: 'For enterprises requiring dedicated teams and long-term partnerships.',
    features: [
      'Dedicated engineering team',
      'Multi-platform delivery',
      'Custom AI model training',
      'Enterprise security audit',
      '12+ months support',
      'SLA guarantee',
      'Compliance & governance',
      'Executive reporting',
    ],
    cta: 'Contact Us',
    popular: false,
    accent: '#EC7FA9',
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-dot-bg opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4">
            <div className="w-4 h-px bg-cedar-red" />
            Pricing
            <div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl text-cedar-frost mb-4">
            Transparent <span className="text-gradient-red">Pricing</span>
          </h2>
          <p className="text-cedar-frost/50 max-w-xl mx-auto">
            Fixed-scope engagements with no surprise invoices. 
            Every plan includes our engineering quality guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl p-8 transition-all duration-500 ${
                plan.popular
                  ? 'glass-card'
                  : 'glass-card'
              }`}
              style={plan.popular ? {
                border: '1px solid rgba(236,127,169,0.3)',
                background: 'rgba(236,127,169,0.03)',
              } : {}}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #EC7FA9, #EC7FA9)' }}
                >
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div
                  className="inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-3"
                  style={{ background: `${plan.accent}15`, color: plan.accent }}
                >
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  {plan.price === 'Custom' ? (
                    <span className="font-display font-bold text-4xl text-cedar-frost">Custom</span>
                  ) : (
                    <>
                      <span className="text-lg text-cedar-frost/50">$</span>
                      <span className="font-display font-bold text-4xl text-cedar-frost">{plan.price}</span>
                    </>
                  )}
                </div>
                <div className="text-xs text-cedar-frost/30 mb-3">per {plan.period}</div>
                <p className="text-sm text-cedar-frost/50">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${plan.accent}20` }}
                    >
                      <Check size={11} style={{ color: plan.accent }} />
                    </div>
                    <span className="text-cedar-frost/70">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} className="inline ml-2" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-cedar-frost/30 mt-8">
          All projects include source code ownership, documentation, and post-launch support.
          <br />
          Custom enterprise contracts available with flexible payment structures.
        </p>
      </div>
    </section>
  );
}
