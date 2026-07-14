import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import PayPalPopup from '../../components/PayPalPopup';

const BLUSH = '#FF6FB5';
const ROSE = '#FF2D87';
const MAROON = '#8E1155';
const WINE = '#1A0510';

const plans = [
  {
    name: 'Starter',
    price: 'Custom',
    period: 'month',
    annualPeriod: 'year, billed annually',
    description: 'For teams exploring workflow automation and AI agent capabilities.',
    features: [
      'Up to 5 active workflows',
      'Visual workflow designer',
      'Basic AI agent orchestration',
      '3 system integrations',
      'Operations dashboard',
      'Email & chat support',
    ],
    cta: 'Get Started',
    popular: false,
    accent: BLUSH,
  },
  {
    name: 'Professional',
    price: 'Custom',
    period: 'month',
    annualPeriod: 'year, billed annually',
    description: 'For scaling organizations running production automation at volume.',
    features: [
      'Unlimited workflows',
      'Advanced AI agent orchestration',
      'Business process intelligence',
      'Unlimited integrations',
      'Real-time analytics dashboard',
      'Priority support & SLA',
      'API access',
      'Custom AI model training',
    ],
    cta: 'Enroll Now',
    popular: true,
    accent: ROSE,
    amount: 'Custom',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'engagement',
    annualPeriod: 'engagement',
    description: 'For large enterprises requiring dedicated infrastructure and compliance.',
    features: [
      'Dedicated automation infrastructure',
      'Custom AI agent development',
      'Private cloud deployment',
      'Enterprise security & compliance',
      'Dedicated success manager',
      '24/7 support & SLA guarantee',
      'Executive reporting',
      'Professional implementation',
    ],
    cta: 'Contact Us',
    popular: false,
    accent: MAROON,
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const [paypalOpen, setPaypalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; amount: string } | null>(null);
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-28 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${WINE} 0%, #0F0309 100%)` }}>
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
            <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>
              Pricing
            </span>
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${ROSE}, transparent)` }} />
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl text-white mb-5">
            Flexible{' '}
            <span
              style={{
                backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${MAROON})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Plans
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-8">
            Subscription-based SaaS platform with pricing that scales with your automation needs.
            Enterprise licensing and professional services available.
          </p>

          <div className="inline-flex items-center gap-3 px-1.5 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <button
              onClick={() => setAnnual(false)}
              className="relative px-4 py-2 rounded-full text-sm font-semibold transition-colors z-10"
              style={{ color: !annual ? '#fff' : 'rgba(255,255,255,0.4)' }}
            >
              {!annual && (
                <motion.span
                  layoutId="billing-toggle"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ background: `linear-gradient(135deg, ${ROSE}, ${MAROON})` }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="relative px-4 py-2 rounded-full text-sm font-semibold transition-colors z-10 flex items-center gap-2"
              style={{ color: annual ? '#fff' : 'rgba(255,255,255,0.4)' }}
            >
              {annual && (
                <motion.span
                  layoutId="billing-toggle"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ background: `linear-gradient(135deg, ${ROSE}, ${MAROON})` }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              Annual
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                style={{
                  background: annual ? 'rgba(255,255,255,0.2)' : `${ROSE}22`,
                  color: annual ? '#fff' : ROSE,
                }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: plan.popular ? -10 : -6 }}
              className="relative rounded-3xl p-8 transition-all duration-500 border"
              style={
                plan.popular
                  ? {
                      background: `linear-gradient(165deg, ${ROSE}22 0%, ${WINE} 65%)`,
                      border: `1px solid ${ROSE}55`,
                      boxShadow: `0 0 0 1px ${ROSE}20, 0 20px 60px ${ROSE}25`,
                      transform: 'scale(1.04)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }
              }
            >
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white whitespace-nowrap"
                  style={{ background: `linear-gradient(135deg, ${ROSE}, ${MAROON})`, boxShadow: `0 4px 16px ${ROSE}55` }}
                >
                  <Sparkles size={12} />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div
                  className="inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-3"
                  style={{ background: `${plan.accent}18`, color: plan.accent }}
                >
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  {plan.price === 'Custom' ? (
                    <span className="font-display font-bold text-4xl text-white">Custom</span>
                  ) : (
                    <>
                      <span className="text-lg text-white/50">$</span>
                      <span className="font-display font-bold text-4xl text-white">{plan.price}</span>
                    </>
                  )}
                </div>
                <div className="text-xs text-white/30 mb-3">
                  per {annual ? plan.annualPeriod : plan.period}
                </div>
                <p className="text-sm text-white/50">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${plan.accent}22` }}
                    >
                      <Check size={11} style={{ color: plan.accent }} />
                    </div>
                    <span className="text-white/70">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  if (plan.name === 'Professional') {
                    setSelectedPlan({ name: plan.name, amount: plan.amount || '99' });
                    setPaypalOpen(true);
                  } else if (plan.name === 'Starter') {
                    navigate('/console');
                  } else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={
                  plan.popular
                    ? { background: `linear-gradient(135deg, ${ROSE}, ${MAROON})`, color: '#fff', boxShadow: `0 4px 24px rgba(255,45,135,0.3)` }
                    : { background: 'rgba(255,255,255,0.06)', color: ROSE, border: `1px solid rgba(255,45,135,0.3)` }
                }
              >
                {plan.cta}
                <ArrowRight size={14} className="inline ml-2" />
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-white/30 mt-10">
          Workflow execution-based pricing available. All plans include onboarding, documentation, and support.
          <br />
          Custom enterprise contracts with dedicated infrastructure, compliance, and professional implementation services.
        </p>
      </div>

      <PayPalPopup
        isOpen={paypalOpen}
        onClose={() => setPaypalOpen(false)}
        planName={selectedPlan?.name ?? ''}
        amount={selectedPlan?.amount ?? '99'}
      />
    </section>
  );
}
