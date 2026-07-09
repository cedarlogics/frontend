import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/#features' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #EC7FA9, #FFB8E0)' }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1L16 5.5V12.5L9 17L2 12.5V5.5L9 1Z" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M9 5L13 7.5V12.5L9 15L5 12.5V7.5L9 5Z" fill="white" fillOpacity="0.3"/>
                    <circle cx="9" cy="9" r="2" fill="white"/>
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #EC7FA9, #FFB8E0)', filter: 'blur(8px)' }} />
              </div>
              <span className="font-display font-bold text-lg text-cedar-frost tracking-tight">
                Cedar<span className="text-cedar-red">Logics</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavItem
                  key={link.href}
                  link={link}
                  active={activeSection}
                  onNavigate={handleNavClick}
                />
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <ConsoleButton />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-cedar-frost/70 hover:text-cedar-frost transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 glass-dark flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-cedar-red/10">
                <span className="font-display font-bold text-cedar-frost">
                  Cedar<span className="text-cedar-red">Logics</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-cedar-frost/60 hover:text-cedar-frost"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 p-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.href.startsWith('/#') ? '/' : link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-cedar-frost/70 hover:text-cedar-frost hover:bg-cedar-red/8 transition-all duration-200 group"
                    >
                      <span className="font-medium">{link.label}</span>
                      <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-6 border-t border-cedar-red/10">
                <Link to="/console" onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center">
                  <Zap size={15} />
                  CedarLogics Console
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({ link, onNavigate }: { link: { label: string; href: string }; active: string; onNavigate: (href: string) => void }) {
  const location = useLocation();
  const isActive = location.pathname === link.href || 
    (link.href === '/' && location.pathname === '/') ||
    (link.href === '/blog' && location.pathname.startsWith('/blog'));

  return (
    <Link
      to={link.href.startsWith('/#') ? '/' : link.href}
      onClick={(e) => {
        if (link.href.startsWith('/#')) {
          e.preventDefault();
          onNavigate(link.href);
        }
      }}
      className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 group"
      style={{ color: isActive ? '#FFFFFF' : 'rgba(190,89,133,0.6)' }}
    >
      <span className="relative z-10 group-hover:text-cedar-frost transition-colors">
        {link.label}
      </span>
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute inset-0 rounded-lg"
          style={{ background: 'rgba(236,127,169,0.07)' }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
        />
      )}
      <div className="absolute bottom-1 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(236,127,169,0.6), transparent)' }} />
    </Link>
  );
}

function ConsoleButton() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  return (
    <motion.div animate={{ x: hovered ? pos.x : 0, y: hovered ? pos.y : 0 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <Link
        ref={btnRef}
        to="/console"
        className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden group"
        style={{ background: 'linear-gradient(135deg, #EC7FA9, #EC7FA9)' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPos({ x: 0, y: 0 }); }}
      >
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(135deg, #FFB8E0, #EC7FA9)' }} />
        <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: '0 0 30px rgba(236,127,169,0.5)', }} />
        <Zap size={14} className="relative z-10" />
        <span className="relative z-10">Console</span>
      </Link>
    </motion.div>
  );
}
