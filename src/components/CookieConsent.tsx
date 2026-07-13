import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, X } from 'lucide-react';

const HOT = '#FF2D87';
const BRIGHT = '#FF6FB5';
const DEEP = '#8E1155';

const COOKIE_KEY = 'cedarlogics_cookie_consent';

type Consent = 'accepted' | 'rejected' | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY) as Consent | null;
    if (stored) setConsent(stored);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setConsent('accepted');
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setConsent('rejected');
  };

  return (
    <AnimatePresence>
      {consent === null && (
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="fixed bottom-6 left-6 z-50 max-w-xs"
        >
          <div
            className="rounded-2xl backdrop-blur-xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.97)',
              border: `1px solid ${HOT}20`,
              boxShadow: `0 8px 40px rgba(0,0,0,0.08), 0 0 80px ${HOT}10`,
            }}
          >
            <div className="flex items-start gap-3 p-4 pb-0">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `linear-gradient(135deg, ${HOT}, ${DEEP})` }}
              >
                <Shield size={15} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="font-orbitron text-xs font-semibold mb-1"
                  style={{
                    background: `linear-gradient(90deg, ${HOT}, ${BRIGHT} 45%, ${DEEP})`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Cookie Consent
                </h3>
                <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(26,16,36,0.65)' }}>
                  We use essential cookies to provide our services. We do not use tracking
                  cookies. Read our{' '}
                  <Link
                    to="/privacy"
                    className="font-medium underline underline-offset-2 transition-colors"
                    style={{ color: HOT }}
                  >
                    Privacy Policy
                  </Link>{' '}
                  for details.
                </p>
              </div>
              <button
                onClick={reject}
                className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-colors"
                style={{ color: 'rgba(26,16,36,0.35)' }}
                onMouseEnter={e => e.currentTarget.style.background = `${HOT}10`}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                aria-label="Dismiss"
              >
                <X size={13} />
              </button>
            </div>
            <div className="flex items-center gap-2 p-4">
              <button
                onClick={reject}
                className="flex-1 px-3 py-2 rounded-lg text-[11px] font-semibold transition-all duration-300"
                style={{
                  color: HOT,
                  border: `1px solid ${HOT}20`,
                  background: `${HOT}06`,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = `${HOT}12`; e.currentTarget.style.borderColor = `${HOT}35`; }}
                onMouseLeave={e => { e.currentTarget.style.background = `${HOT}06`; e.currentTarget.style.borderColor = `${HOT}20`; }}
              >
                Reject
              </button>
              <button
                onClick={accept}
                className="flex-1 px-3 py-2 rounded-lg text-[11px] font-semibold text-white transition-all duration-300 hover:translate-y-[-1px]"
                style={{
                  background: `linear-gradient(135deg, ${HOT}, ${DEEP})`,
                  boxShadow: `0 4px 12px ${HOT}30`,
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 6px 20px ${HOT}45`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = `0 4px 12px ${HOT}30`}
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
