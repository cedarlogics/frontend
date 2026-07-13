import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';
import logo from '../../public/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/#features' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/#blog' },
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
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = navLinks
      .map(l => l.href.replace('/#', ''))
      .filter(id => id && document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

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
          <div className="flex items-center justify-between h-16 lg:h-20 overflow-visible">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <img src={logo} alt="CedarLogics" className="w-[120px] h-[120px] rounded-xl object-contain -my-7" />
              
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
              <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'rgba(122,18,71,0.1)' }}>
                <div className="flex items-center gap-2">
                  <img src={logo} alt="CedarLogics" className="w-14 h-14 rounded-lg object-contain" />
                  <span className="font-orbitron font-bold" style={{ color: '#8E1155' }}>
                    Cedar<span style={{ color: '#FF2D87' }}>Logics</span>
                  </span>
                </div>
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
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-cedar-frost/70 hover:text-cedar-frost transition-all duration-200 group"
                      style={{ hover: { background: 'rgba(255,20,147,0.08)' } }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,20,147,0.08)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '' }}
                    >
                      <span className="font-medium">{link.label}</span>
                      <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-6 border-t" style={{ borderColor: 'rgba(122,18,71,0.1)' }}>
                  <Link to="/console" onClick={() => setMobileOpen(false)}
                    className="btn-primary w-full justify-center">
                    Live Dashboard
                  </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({ link, active, onNavigate }: { link: { label: string; href: string }; active: string; onNavigate: (href: string) => void }) {
  const location = useLocation();
  const sectionId = link.href.replace('/#', '');
  const isActive = link.href === '/'
    ? location.pathname === '/' && active === '' || active === 'home'
    : link.href.startsWith('/#')
      ? active === sectionId
      : location.pathname.startsWith(link.href);

  return (
    <Link
      to={link.href.startsWith('/#') ? '/' : link.href}
      onClick={(e) => {
        if (link.href.startsWith('/#')) {
          e.preventDefault();
          onNavigate(link.href);
        }
      }}
      className="relative px-4 py-2 text-sm font-orbitron font-semibold rounded-lg transition-colors duration-200 group"
      style={{ color: isActive ? '#7A1247' : 'rgba(122,18,71,0.5)' }}
    >
      <span className="relative z-10 transition-colors" style={{ color: 'inherit' }}>
        {link.label}
      </span>
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute inset-0 rounded-lg"
          style={{ background: 'rgba(255,20,147,0.07)' }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
        />
      )}
      <div className="absolute bottom-1 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,20,147,0.6), transparent)' }} />
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
        style={{ background: 'linear-gradient(135deg, #FF2D87, #8E1155)' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPos({ x: 0, y: 0 }); }}
      >
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(135deg, #FF2D87, #8E1155)' }} />
        <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: '0 0 30px rgba(255,20,147,0.5)', }} />
        <span className="relative z-10">Live Dashboard</span>
      </Link>
    </motion.div>
  );
}
