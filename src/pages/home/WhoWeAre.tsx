import { motion } from 'framer-motion';
import enterpriseIcon from '../../assets/Enterprise Operations.png';
import healthcareIcon from '../../assets/Healthcare.png';
import manufacturingIcon from '../../assets/Manufacturing.png';
import financeIcon from '../../assets/Finance & Banking.png';
import hrIcon from '../../assets/HR & People Operations.png';
import governmentIcon from '../../assets/Government & Public Sector (7).png';

// A single restrained palette — blush, rose, deep maroon, ink, white —
// instead of one hue per card. Variation comes from tone + light/dark
// balance, the way an editorial spread varies within one story, not six.
const BLUSH = '#FF1A75';
const ROSE = '#FF5CA8';
const MAROON = '#7A1247';
const WINE = '#1A0510';

const industries = [
  {
    icon: enterpriseIcon,
    title: 'Enterprise Operations',
    body: 'Automate cross-departmental workflows, approvals, and compliance processes across your entire organization with AI-driven orchestration.',
    tag: 'Operations',
    tone: ROSE,
    mood: 'noir',
    shape: 'notch-tl-br',
  },
  {
    icon: healthcareIcon,
    title: 'Healthcare',
    body: 'Streamline patient data workflows, clinical approvals, billing automation, and compliance reporting while maintaining HIPAA and regulatory standards.',
    tag: 'Healthcare',
    tone: BLUSH,
    mood: 'blush',
    shape: 'squircle',
  },
  {
    icon: manufacturingIcon,
    title: 'Manufacturing',
    body: 'Integrate supply chain systems, automate production workflows, synchronize inventory management, and optimize logistics with intelligent process automation.',
    tag: 'Manufacturing',
    tone: MAROON,
    mood: 'noir',
    shape: 'notch-tr-bl',
  },
  {
    icon: financeIcon,
    title: 'Finance & Banking',
    body: 'Automate fraud detection workflows, compliance checks, transaction processing, and regulatory reporting with AI agents and decision automation.',
    tag: 'Finance',
    tone: ROSE,
    mood: 'blush',
    shape: 'notch-tl-br',
  },
  {
    icon: hrIcon,
    title: 'HR & People Operations',
    body: 'Streamline employee onboarding, benefits administration, performance reviews, and cross-system HR workflows connecting HRMS, payroll, and IT systems.',
    tag: 'Human Resources',
    tone: BLUSH,
    mood: 'noir',
    shape: 'squircle',
  },
  {
    icon: governmentIcon,
    title: 'Government & Public Sector',
    body: 'Modernize legacy processes, automate citizen services workflows, ensure compliance with public sector regulations, and reduce operational overhead.',
    tag: 'Government',
    tone: MAROON,
    mood: 'blush',
    shape: 'notch-tr-bl',
  },
];

const roles = [
  { label: 'Enterprise Operations Teams', tone: ROSE },
  { label: 'Digital Transformation Leaders', tone: BLUSH },
  { label: 'Business Process Managers', tone: MAROON },
  { label: 'IT & Engineering Departments', tone: ROSE },
  { label: 'Finance & Accounting Teams', tone: BLUSH },
  { label: 'Compliance & Audit Officers', tone: MAROON },
];

const NOTCH = 28; // px, corner cut size for chip-shaped cards

function getShapeStyle(shape) {
  if (shape === 'notch-tl-br') {
    return {
      clipPath: `polygon(${NOTCH}px 0, 100% 0, 100% calc(100% - ${NOTCH}px), calc(100% - ${NOTCH}px) 100%, 0 100%, 0 ${NOTCH}px)`,
      borderRadius: 0,
    };
  }
  if (shape === 'notch-tr-bl') {
    return {
      clipPath: `polygon(0 0, calc(100% - ${NOTCH}px) 0, 100% ${NOTCH}px, 100% 100%, ${NOTCH}px 100%, 0 calc(100% - ${NOTCH}px))`,
      borderRadius: 0,
    };
  }
  return { borderRadius: '34px 10px 34px 10px' };
}

export default function WhoWeAre() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${WINE} 0%, #0F0309 100%)` }}>
      {/* Fine grain — reads as film grain rather than a tech grid, keeps the editorial tone */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      {/* Two restrained light sources instead of a rainbow field — a bright blush wash
          upper-right, a deep maroon pool lower-left, both fading straight to black */}
      <div
        className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${ROSE}33 0%, transparent 65%)`, filter: 'blur(90px)' }}
      />
      <div
        className="absolute -bottom-52 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${MAROON}40 0%, transparent 65%)`, filter: 'blur(100px)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
            <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>Who Uses Us</span>
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${ROSE}, transparent)` }} />
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl text-white mb-5">
            Purpose-Built for
            <br />
            <span
              style={{
                backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${MAROON})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Every Enterprise
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            From healthcare to finance, manufacturing to government — CedarLogics adapts to your industry's
            unique workflows, compliance requirements, and operational complexity.
          </p>
        </motion.div>

        {/* Roles */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {roles.map((role, i) => (
            <motion.span
              key={role.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-white/70 hover:border-white/20 transition-all duration-300"
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: role.tone, boxShadow: `0 0 6px ${role.tone}` }}
              />
              {role.label}
            </motion.span>
          ))}
        </div>

        {/* Industries */}
        <div className="relative">
          {/* Signature: a single ribbon of light drawn through the grid — one gradient,
              pink through maroon to black, rendered as a soft brushstroke rather than a
              circuit trace, echoing the gradient used in the headline above */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 640"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={BLUSH} stopOpacity="0" />
                <stop offset="20%" stopColor={BLUSH} stopOpacity="0.9" />
                <stop offset="55%" stopColor={ROSE} stopOpacity="0.8" />
                <stop offset="85%" stopColor={MAROON} stopOpacity="0.6" />
                <stop offset="100%" stopColor={MAROON} stopOpacity="0" />
              </linearGradient>
              <filter id="ribbonBlur">
                <feGaussianBlur stdDeviation="1.4" />
              </filter>
            </defs>
            <motion.path
              d="M 40 60 C 300 20, 420 220, 640 200 S 980 40, 1160 140"
              fill="none"
              stroke="url(#ribbonGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#ribbonBlur)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 60 560 C 320 610, 480 420, 700 460 S 960 600, 1140 540"
              fill="none"
              stroke="url(#ribbonGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#ribbonBlur)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
            />
          </svg>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => {
              const shapeStyle = getShapeStyle(ind.shape);
              const isNotch = ind.shape !== 'squircle';
              const isBlush = ind.mood === 'blush';

              // Noir cards: near-black base, tone-colored ring, white icon.
              // Blush cards: a dark-to-tone gradient wash, white ring, tone-colored icon.
              const baseBackground = isBlush
                ? `linear-gradient(155deg, ${ind.tone}26 0%, ${WINE} 65%)`
                : `linear-gradient(155deg, rgba(255,255,255,0.05) 0%, transparent 45%)`;

              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="group relative p-6 cursor-default overflow-hidden transition-all duration-500 border"
                  style={{
                    ...shapeStyle,
                    background: `${baseBackground}, ${WINE}`,
                    borderColor: 'rgba(255,255,255,0.08)',
                  }}
                  whileHover={{ y: -4 }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${ind.tone}55`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                >
                  {isNotch && (
                    <span
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        background: ind.tone,
                        boxShadow: `0 0 8px ${ind.tone}`,
                        top: '9px',
                        left: ind.shape === 'notch-tl-br' ? '9px' : undefined,
                        right: ind.shape === 'notch-tr-bl' ? '9px' : undefined,
                      }}
                    />
                  )}

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${ind.tone}22 0%, transparent 70%)` }}
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${ind.tone}, transparent)` }}
                  />

                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={
                        isBlush
                          ? { background: 'rgba(255,255,255,0.1)', color: '#fff' }
                          : { background: `${ind.tone}22`, color: ind.tone }
                      }
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: ind.tone }} />
                      {ind.tag}
                    </span>
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={
                        isBlush
                          ? { background: 'rgba(255,255,255,0.08)', boxShadow: '0 0 0 1px rgba(255,255,255,0.18)' }
                          : { background: `${ind.tone}1f`, boxShadow: `0 0 0 1px ${ind.tone}40` }
                      }
                    >
                      <img src={ind.icon} alt={ind.title} className="w-8 h-8 object-contain" />
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-white mb-2 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    {ind.body}
                  </p>

                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${ind.tone}, transparent)` }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}