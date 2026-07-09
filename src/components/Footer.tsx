import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, ArrowUp, Mail, MapPin, Phone, Code2 } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About', href: '/#about' },
    { label: 'Features', href: '/#features' },
    { label: 'Services', href: '/#services' },
    { label: 'Console', href: '/console' },
    { label: 'Blog', href: '/blog' },
  ],
  Developers: [
    { label: 'API Reference', href: '#', badge: 'Coming Soon' },
    { label: 'REST API Docs', href: '#', badge: 'Coming Soon' },
    { label: 'Webhooks Guide', href: '#', badge: 'Coming Soon' },
    { label: 'SDKs & Libraries', href: '#', badge: 'Coming Soon' },
    { label: 'Integration Hub', href: '#', badge: 'Coming Soon' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Whitepapers', href: '#' },
    { label: 'Workflow Templates', href: '#' },
    { label: 'Newsletter', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Security', href: '#' },
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
    <footer className="relative border-t border-cedar-red/10 overflow-hidden">
      <div className="absolute inset-0 grid-line-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cedar-red/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #EC7FA9, #FFB8E0)' }}>
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1L16 5.5V12.5L9 17L2 12.5V5.5L9 1Z" stroke="white" strokeWidth="1.5" fill="none"/>
                  <path d="M9 5L13 7.5V12.5L9 15L5 12.5V7.5L9 5Z" fill="white" fillOpacity="0.3"/>
                  <circle cx="9" cy="9" r="2" fill="white"/>
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-cedar-frost">
                Cedar<span className="text-cedar-red">Logics</span>
              </span>
            </div>

            <p className="text-cedar-frost/50 text-sm leading-relaxed max-w-xs">
              The enterprise AI workflow automation platform. We orchestrate intelligent business processes across departments, systems, and AI agents — automating complex operations at scale.
            </p>

            <div className="space-y-3">
              <a href="mailto:hello@cedarlogics.com" className="flex items-center gap-3 text-sm text-cedar-frost/50 hover:text-cedar-frost transition-colors group">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:border-cedar-red/30 transition-colors">
                  <Mail size={14} className="text-cedar-red" />
                </div>
                hello@cedarlogics.com
              </a>
              <div className="flex items-center gap-3 text-sm text-cedar-frost/50">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
                  <MapPin size={14} className="text-cedar-red" />
                </div>
                San Francisco, CA
              </div>
              <div className="flex items-center gap-3 text-sm text-cedar-frost/50">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
                  <Phone size={14} className="text-cedar-red" />
                </div>
                +1 (415) 000-0000
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-cedar-frost/40 hover:text-cedar-frost hover:border-cedar-violet/30 transition-all duration-200 hover:scale-110"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-cedar-frost/30">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-cedar-frost/50 hover:text-cedar-frost transition-colors duration-200 relative group"
                    >
                      <span className="relative inline-flex items-center gap-2">
                        {link.label}
                        {'badge' in link && (
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-cedar-red/10 text-cedar-red/60 border border-cedar-red/15">
                            {link.badge}
                          </span>
                        )}
                        <span className="absolute -bottom-px left-0 right-0 h-px bg-cedar-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass-card rounded-2xl p-6 mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex-1 text-center sm:text-left">
              <h4 className="font-display font-semibold text-cedar-frost mb-1">Stay ahead of the curve</h4>
              <p className="text-sm text-cedar-frost/50">Engineering insights, AI breakthroughs, and platform updates.</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-xl bg-cedar-red/5 border border-cedar-red/15 text-sm text-cedar-frost placeholder-cedar-frost/30 focus:outline-none focus:border-cedar-red/50 transition-colors"
              />
              <button className="btn-primary whitespace-nowrap px-5 py-2.5 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-cedar-red/10">
          <p className="text-sm text-cedar-frost/30">
            © {new Date().getFullYear()} CedarLogics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-cedar-frost/30 hover:text-cedar-frost/60 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-cedar-frost/30 hover:text-cedar-frost/60 transition-colors">Terms</Link>
            <button
              onClick={scrollTop}
              className="flex items-center gap-2 text-xs text-cedar-frost/30 hover:text-cedar-frost transition-colors group"
            >
              Back to top
              <div className="w-6 h-6 rounded-md glass flex items-center justify-center group-hover:border-cedar-red/30 transition-colors">
                <ArrowUp size={12} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
