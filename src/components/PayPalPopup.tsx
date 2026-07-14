import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PAYPAL_CLIENT_ID = 'AUxHewCBct180v0k1Rot5rSQXEQwiB8jzYkF9nS4wd_VaRIf1kv_hO5_m0SzfwN9AiEiH2axul55kuGH';
const ROSE = '#FF2D87';
const MAROON = '#8E1155';

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: Record<string, unknown>) => {
        render: (selector: string) => void;
      };
    };
  }
}

interface PayPalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  amount: string;
}

export default function PayPalPopup({ isOpen, onClose, planName, amount }: PayPalPopupProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const buttonsRef = useRef<HTMLDivElement>(null);
  const buttonsInstanceRef = useRef<ReturnType<typeof window.paypal.Buttons> | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    if (window.paypal) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!scriptLoaded || !isOpen || !buttonsRef.current) return;

    if (buttonsInstanceRef.current) {
      buttonsRef.current.innerHTML = '';
      buttonsInstanceRef.current = null;
    }

    const buttons = window.paypal!.Buttons({
      style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
        label: 'pay',
        height: 45,
      },
      createOrder: (_data: unknown, actions: Record<string, unknown>) => {
        return (actions.order as (details: Record<string, unknown>) => Promise<string>).create({
          purchase_units: [
            {
              description: `CedarLogics ${planName} Plan`,
              amount: {
                currency_code: 'USD',
                value: amount,
              },
            },
          ],
        });
      },
      onApprove: async (_data: unknown, actions: Record<string, unknown>) => {
        try {
          const order = await (actions.order as { capture: () => Promise<unknown> }).capture();
          console.log('Payment successful:', order);
          setPaymentStatus('success');
        } catch (err) {
          console.error('Payment capture error:', err);
          setPaymentStatus('error');
        }
      },
      onError: (err: unknown) => {
        console.error('PayPal error:', err);
        setPaymentStatus('error');
      },
    });

    buttons.render(buttonsRef.current);
    buttonsInstanceRef.current = buttons;

    return () => {
      if (buttonsInstanceRef.current) {
        try {
          buttonsInstanceRef.current.close();
        } catch {
          // ignore
        }
        buttonsInstanceRef.current = null;
      }
    };
  }, [scriptLoaded, isOpen, planName, amount]);

  useEffect(() => {
    if (!isOpen) {
      setPaymentStatus('idle');
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            className="relative w-full max-w-md rounded-3xl p-8 overflow-hidden"
            style={{
              background: 'linear-gradient(165deg, #1A0510 0%, #0F0309 100%)',
              border: `1px solid ${ROSE}30`,
              boxShadow: `0 25px 80px rgba(0,0,0,0.5), 0 0 40px ${ROSE}15`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
            >
              <X size={16} />
            </button>

            {paymentStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${ROSE}30, ${MAROON}30)` }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Payment Successful!</h3>
                <p className="text-white/50 text-sm mb-6">Thank you for subscribing to the {planName} plan. We&apos;ll be in touch shortly.</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${ROSE}, ${MAROON})` }}
                >
                  Close
                </button>
              </div>
            ) : paymentStatus === 'error' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: 'rgba(239,68,68,0.15)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Payment Failed</h3>
                <p className="text-white/50 text-sm mb-6">Something went wrong. Please try again or contact support.</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-xl text-white mb-1">{planName} Plan</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-lg text-white/50">$</span>
                    <span className="font-display font-bold text-4xl text-white">{amount}</span>
                    <span className="text-sm text-white/30">/month</span>
                  </div>
                </div>

                <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.08)' }} />

                <div className="text-center text-sm text-white/40 mb-4">
                  Pay securely with PayPal
                </div>

                <div ref={buttonsRef} className="flex justify-center" />

                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-xs text-white/30">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    Secure checkout
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
