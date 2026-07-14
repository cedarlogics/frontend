import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/Logo.png';

const HOT = '#FF2D87';
const BRIGHT = '#FF6FB5';
const DEEP = '#8E1155';
// CYAN is reserved exclusively for the "AI Agents" node in the orchestration
// trace below — every other node stays in the brand's pink/magenta family,
// so color itself marks which stage of the pipeline is the AI layer.
const CYAN = '#00C2D9';

const footerLinks = {
  Company: [
    { label: 'About', href: '/#about' },
    { label: 'Features', href: '/#features' },
    { label: 'Services', href: '/#services' },
  ],
  Resources: [
    { label: 'Blog', href: '/#blog' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

const contactChips = [
  { icon: Mail, label: 'hello@cedarlogics.com', href: 'mailto:hello@cedarlogics.com' },
  { icon: MapPin, label: 'Los Angeles, CA' },
  { icon: Phone, label: '+1 (213) 555-2102', href: 'tel:+12135552102' },
];

const PinterestIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/CedarLogics/', label: 'Facebook' },
  { icon: Twitter, href: 'https://x.com/CedarLogics', label: 'X' },
  { icon: PinterestIcon, href: 'https://www.pinterest.com/CedarLogics/', label: 'Pinterest' },
  { icon: Youtube, href: 'https://www.youtube.com/@CedarLogics', label: 'YouTube' },
];

// Orchestration trace: Departments -> Systems -> AI Agents -> Outcomes.
// This is a genuine pipeline (CedarLogics' own product story), so labeling
// the sequence is meaningful, not decorative numbering for its own sake.
const traceNodes = [
  { x: 90, y: 66, label: 'DEPARTMENTS', color: DEEP },
  { x: 430, y: 26, label: 'SYSTEMS', color: HOT },
  { x: 770, y: 64, label: 'AI AGENTS', color: CYAN },
  { x: 1110, y: 30, label: 'OUTCOMES', color: HOT },
];
const tracePath = 'M90,66 C220,18 300,18 430,26 C560,34 640,82 770,64 C900,46 990,10 1110,30';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden">
      <style>{`
        @keyframes cl-status-ping {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }
        .cl-status-dot::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: currentColor;
          animation: cl-status-ping 1.8s cubic-bezier(0,0,0.2,1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .cl-pulse, .cl-status-dot::after { animation: none !important; display: none !important; }
        }
      `}</style>

      {/* Ambient systems texture — restrained, sits behind everything */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${HOT}14 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 85%, transparent)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* Orchestration trace — the footer's signature element */}
        <div className="relative w-full mb-14" aria-hidden="true">
          <svg viewBox="0 0 1200 100" className="w-full h-auto block" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cl-trace-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={DEEP} stopOpacity="0.55" />
                <stop offset="35%" stopColor={HOT} stopOpacity="0.55" />
                <stop offset="65%" stopColor={CYAN} stopOpacity="0.55" />
                <stop offset="100%" stopColor={HOT} stopOpacity="0.55" />
              </linearGradient>
            </defs>

            <path d={tracePath} fill="none" stroke="url(#cl-trace-grad)" strokeWidth="1.5" strokeLinecap="round" />

            {/* traveling signal pulses */}
            <circle r="4" fill={HOT} className="cl-pulse">
              <animateMotion dur="7s" repeatCount="indefinite" path={tracePath} />
            </circle>
            <circle r="3.5" fill={CYAN} className="cl-pulse">
              <animateMotion dur="7s" begin="3.5s" repeatCount="indefinite" path={tracePath} />
            </circle>

            {traceNodes.map((n) => (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r="9" fill="none" stroke={n.color} strokeOpacity="0.35" strokeWidth="6" />
                <circle cx={n.x} cy={n.y} r="4.5" fill={n.color} />
              </g>
            ))}
          </svg>

          {/* labels positioned under each node, percentage-based to track the responsive svg */}
          <div className="flex justify-between px-0 -mt-1 sm:-mt-2">
            {traceNodes.map((n) => (
              <span
                key={n.label}
                className="font-orbitron text-[9px] sm:text-[10px] tracking-widest"
                style={{ color: n.color, opacity: 0.75 }}
              >
                {n.label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <img src={logo} alt="CedarLogics" />

            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: `${HOT}08`, border: `1px solid ${HOT}20`, color: 'rgba(26,16,36,0.4)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'rgba(26,16,36,0.9)'; e.currentTarget.style.borderColor = `${HOT}40`; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(26,16,36,0.4)'; e.currentTarget.style.borderColor = `${HOT}20`; }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-[11px] font-orbitron font-semibold uppercase tracking-[0.2em]" style={{ color: `${HOT}90` }}>
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm transition-colors duration-200 relative group"
                        style={{ color: 'rgba(26,16,36,0.5)' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'rgba(26,16,36,0.9)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,16,36,0.5)'}
                      >
                        <span className="relative inline-flex items-center gap-2">
                          {link.label}
                          <span className="absolute -bottom-px left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                            style={{ background: `linear-gradient(90deg, transparent, ${HOT}, transparent)` }} />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* About & Contact */}
          <div className="lg:col-span-3">
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(26,16,36,0.55)' }}>
              The enterprise AI workflow automation platform. We orchestrate intelligent business processes across departments, systems, and AI agents — automating complex operations at scale.
            </p>
            <div className="space-y-3">
              {contactChips.map((c) => {
                const Comp = c.href ? 'a' : 'div';
                return (
                  <Comp
                    key={c.label}
                    {...(c.href ? { href: c.href } : {})}
                    className="flex items-center gap-2 text-xs transition-colors"
                    style={{ color: 'rgba(26,16,36,0.6)' }}
                    onMouseEnter={(e: any) => { e.currentTarget.style.color = 'rgba(26,16,36,0.9)'; }}
                    onMouseLeave={(e: any) => { e.currentTarget.style.color = 'rgba(26,16,36,0.6)'; }}
                  >
                    <c.icon size={12} style={{ color: HOT }} />
                    {c.label}
                  </Comp>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: `1px solid ${HOT}15` }}
        >
          <div className="flex items-center gap-5 flex-wrap justify-center sm:justify-start">
            <p className="text-xs font-orbitron" style={{ color: 'rgba(26,16,36,0.35)' }}>
              © {new Date().getFullYear()} CedarLogics
            </p>
            <span
              className="relative inline-flex items-center gap-1.5 text-[10px] font-orbitron uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ color: '#1a9c5c', background: '#1a9c5c14', border: '1px solid #1a9c5c30' }}
            >
              <span className="cl-status-dot relative inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#1a9c5c' }} />
              All systems operational
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs transition-colors" style={{ color: 'rgba(26,16,36,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(26,16,36,0.7)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,16,36,0.4)'}
            >
              Privacy
            </Link>
            <Link to="/terms" className="text-xs transition-colors" style={{ color: 'rgba(26,16,36,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(26,16,36,0.7)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,16,36,0.4)'}
            >
              Terms
            </Link>
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: `${HOT}0d`, border: `1px solid ${HOT}30`, color: HOT }}
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}