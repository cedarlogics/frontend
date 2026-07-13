import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/Logo.png';

const HOT = '#FF2D87';
const BRIGHT = '#FF6FB5';
const DEEP = '#8E1155';

const footerLinks = {
  Company: [
    { label: 'About', href: '/#about' },
    { label: 'Features', href: '/#features' },
    { label: 'Services', href: '/#services' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t overflow-hidden" style={{ borderColor: `${HOT}12` }}>
      <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(${HOT} 1px, transparent 1px)`, backgroundSize: '32px 32px', opacity: 0.04 }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24" style={{ background: `linear-gradient(180deg, ${HOT}, transparent)` }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CedarLogics" className="w-24 h-24 rounded-xl object-contain" />
             
            </div>

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(26,16,36,0.5)' }}>
              The enterprise AI workflow automation platform. We orchestrate intelligent business processes across departments, systems, and AI agents — automating complex operations at scale.
            </p>

            <div className="space-y-3">
              <a href="mailto:hello@cedarlogics.com" className="flex items-center gap-3 text-sm transition-colors group"
                style={{ color: 'rgba(26,16,36,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(26,16,36,0.9)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,16,36,0.5)'}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: `${HOT}08`, border: `1px solid ${HOT}20` }}>
                  <Mail size={14} style={{ color: HOT }} />
                </div>
                hello@cedarlogics.com
              </a>
              <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(26,16,36,0.5)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${HOT}08`, border: `1px solid ${HOT}20` }}>
                  <MapPin size={14} style={{ color: HOT }} />
                </div>
                Los Angeles, CA
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(26,16,36,0.5)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${HOT}08`, border: `1px solid ${HOT}20` }}>
                  <Phone size={14} style={{ color: HOT }} />
                </div>
                +1 (213) 555-2102
              </div>
            </div>

            <div className="flex items-center gap-3">
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
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest" style={{ color: `${HOT}70` }}>
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
                        {'badge' in link && (
                          <span
                            className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                            style={{ background: `${HOT}12`, color: `${HOT}80`, border: `1px solid ${HOT}20` }}
                          >
                            {link.badge}
                          </span>
                        )}
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

        {/* Newsletter */}
        <div
          className="rounded-2xl p-6 mb-12"
          style={{
            background: `${HOT}04`,
            border: `1px solid ${HOT}15`,
            backdropFilter: 'blur(30px)',
          }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex-1 text-center sm:text-left">
              <h4 className="font-orbitron font-semibold mb-1" style={{ color: DEEP }}>Stay ahead of the curve</h4>
              <p className="text-sm" style={{ color: 'rgba(26,16,36,0.5)' }}>Engineering insights, AI breakthroughs, and platform updates.</p>
            </div>
            <form
              action="https://formspree.io/f/xkollvkj"
              method="POST"
              className="flex gap-3 w-full sm:w-auto"
            >
              <input type="hidden" name="_subject" value="Newsletter Subscription" />
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-colors"
                style={{
                  color: '#1A1024',
                  background: `${HOT}06`,
                  border: `1px solid ${HOT}20`,
                }}
              />
              <button
                type="submit"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${HOT}, ${DEEP})`,
                  boxShadow: `0 4px 16px ${HOT}30`,
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t" style={{ borderColor: `${HOT}12` }}>
          <p className="text-sm" style={{ color: 'rgba(26,16,36,0.3)' }}>
            © {new Date().getFullYear()} CedarLogics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs transition-colors" style={{ color: 'rgba(26,16,36,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(26,16,36,0.6)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,16,36,0.3)'}
            >
              Privacy
            </Link>
            <Link to="/terms" className="text-xs transition-colors" style={{ color: 'rgba(26,16,36,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(26,16,36,0.6)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,16,36,0.3)'}
            >
              Terms
            </Link>
            <button
              onClick={scrollTop}
              className="flex items-center gap-2 text-xs transition-colors group"
              style={{ color: 'rgba(26,16,36,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(26,16,36,0.7)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,16,36,0.3)'}
            >
              Back to top
              <div className="w-6 h-6 rounded-md flex items-center justify-center transition-colors"
                style={{ background: `${HOT}08`, border: `1px solid ${HOT}15` }}>
                <ArrowUp size={12} style={{ color: HOT }} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
