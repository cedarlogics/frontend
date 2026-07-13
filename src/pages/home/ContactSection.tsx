import { useState, useCallback } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Twitter, Linkedin, Check, CheckCheck } from 'lucide-react';

const DEEP = '#8E1155';
const HOT = '#FF2D87';
const BRIGHT = '#FF6FB5';
const SOFT = 'rgba(255,45,135,0.10)';
const BLUSH = HOT;
const ROSE = BRIGHT;
const MAROON = DEEP;

export default function ContactSection() {
  const [preview, setPreview] = useState({ name: '', email: '', company: '', message: '' });
  const [state, handleSubmit] = useForm('xkollvkj');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileExpire = useCallback(() => setTurnstileToken(null), []);
  const turnstileError = useCallback(() => setTurnstileToken(null), []);

  const hasDraft = preview.message.trim().length > 0;

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${HOT} 1px, transparent 1px)`,
          backgroundSize: '4px 4px',
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 100% at 50% 100%, ${HOT}18 0%, transparent 70%)` }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          {/* Left: heading + contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
              <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>
                Contact
              </span>
              <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${ROSE}, transparent)` }} />
            </div>
            <h2 className="font-orbitron text-4xl sm:text-5xl text-cedar-frost mb-5">
              Start a{' '}
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${MAROON})`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Conversation
              </span>
            </h2>
            <p className="text-cedar-frost/70 leading-relaxed mb-10 max-w-sm">
              Tell us about your project. We'll respond within one business day with
              a thoughtful message — not a sales script.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { Icon: Mail, label: 'Email', value: 'hello@cedarlogics.com', href: 'mailto:hello@cedarlogics.com' },
                { Icon: Phone, label: 'Phone', value: '+1 (213) 555-2102', href: 'tel:+12135552102' },
                { Icon: MapPin, label: 'Location', value: 'Los Angeles, CA', href: '#' },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: SOFT, border: `1px solid ${HOT}35` }}
                  >
                    <item.Icon size={17} style={{ color: BRIGHT }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide" style={{ color: `${BRIGHT}99` }}>
                      {item.label}
                    </div>
                    <div className="text-sm text-cedar-frost/85 group-hover:text-white transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { Icon: Github, label: 'GitHub' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-cedar-frost/60 hover:text-white transition-colors"
                  style={{ border: `1px solid ${HOT}30`, background: SOFT }}
                >
                  <s.Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: message thread */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
            style={{ background: 'rgba(255,45,135,0.04)', border: `1px solid ${HOT}30` }}
          >
            {/* Header bar */}
            <div className="flex items-center gap-3 px-6 py-4 border-b" style={{ borderColor: `${HOT}25` }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${DEEP}, ${HOT})` }}
              >
                CL
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-cedar-frost">CedarLogics</div>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: `${BRIGHT}cc` }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: HOT }} />
                  Usually replies within 1 business day
                </div>
              </div>
            </div>

            {/* Thread body */}
            <div className="px-6 py-6 space-y-4">
              <div className="flex justify-start">
                <div
                  className="max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-cedar-frost/90 leading-relaxed"
                  style={{ background: SOFT, border: `1px solid ${HOT}30` }}
                >
                  Hi! Tell us about your project — company, timeline, and goals. We'll get back to you
                  within one business day.
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <div
                  className="max-w-[85%] rounded-2xl rounded-br-sm px-4 py-3 text-sm leading-relaxed"
                  style={{
                    background: hasDraft ? `linear-gradient(135deg, ${HOT}, ${BRIGHT})` : 'transparent',
                    border: hasDraft ? 'none' : `1.5px dashed ${HOT}40`,
                    color: hasDraft ? '#fff' : 'rgba(26,16,36,0.35)',
                  }}
                >
                  {hasDraft ? preview.message : 'Your message will appear here as you type...'}
                  {state.submitting && (
                    <div className="flex items-center justify-end gap-1 mt-1.5">
                      <Check size={12} className="text-white/80" />
                      <span className="text-[10px] text-white/70">Sent</span>
                    </div>
                  )}
                  {state.succeeded && (
                    <div className="flex items-center justify-end gap-1 mt-1.5">
                      <CheckCheck size={12} className="text-white/80" />
                      <span className="text-[10px] text-white/70">Seen</span>
                    </div>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {state.submitting && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex gap-1 px-4 py-3 rounded-2xl rounded-bl-sm" style={{ background: SOFT, border: `1px solid ${HOT}30` }}>
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: HOT }}
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.7, repeat: Infinity, delay: d * 0.15 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
                {state.succeeded && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div
                      className="max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-cedar-frost/90"
                      style={{ background: SOFT, border: `1px solid ${HOT}30` }}
                    >
                      Got it, thanks{preview.name ? `, ${preview.name.split(' ')[0]}` : ''}. We'll review this and reply soon.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Composer */}
            {!state.succeeded && (
              <form onSubmit={handleSubmit} className="border-t" style={{ borderColor: `${HOT}25` }}>
                <div className="grid grid-cols-2 gap-px" style={{ background: `${HOT}20` }}>
                  <input
                    name="name"
                    required
                    value={preview.name}
                    onChange={(e) => setPreview({ ...preview, name: e.target.value })}
                    placeholder="Your name"
                    className="px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ color: '#1A1024', background: 'rgba(255,45,135,0.06)', borderBottom: `1px solid ${HOT}25` }}
                  />
                  <input
                    name="email"
                    required
                    type="email"
                    value={preview.email}
                    onChange={(e) => setPreview({ ...preview, email: e.target.value })}
                    placeholder="your@email.com"
                    className="px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ color: '#1A1024', background: 'rgba(255,45,135,0.06)', borderBottom: `1px solid ${HOT}25` }}
                  />
                </div>
                <ValidationError field="email" errors={state.errors} />
                <input
                  name="company"
                  value={preview.company}
                  onChange={(e) => setPreview({ ...preview, company: e.target.value })}
                  placeholder="Company (optional)"
                  className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                  style={{ color: '#1A1024', background: 'rgba(255,45,135,0.06)', borderBottom: `1px solid ${HOT}25` }}
                />
                <div className="p-3 space-y-3">
                  <textarea
                    name="message"
                    required
                    rows={1}
                    value={preview.message}
                    onChange={(e) => setPreview({ ...preview, message: e.target.value })}
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none transition-colors"
                    style={{ color: '#1A1024', background: 'rgba(255,45,135,0.08)', border: `1.5px solid ${HOT}45` }}
                  />
                  <ValidationError field="message" errors={state.errors} />
                  <div className="flex items-center justify-between gap-3">
                    <Turnstile
                      siteKey="0x4AAAAAADyfg_vS1Wji7upv"
                      onSuccess={setTurnstileToken}
                      onExpire={turnstileExpire}
                      onError={turnstileError}
                      options={{ theme: 'light' }}
                    />
                    <button
                      type="submit"
                      disabled={!hasDraft || state.submitting || !turnstileToken}
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-30 hover:scale-105 active:scale-95"
                      style={{ background: `linear-gradient(135deg, #FF2D87, #FF6FB5)`, boxShadow: `0 4px 16px rgba(255,45,135,0.4)` }}
                    >
                      <Send size={17} className="text-white" />
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-center pb-3" style={{ color: `${BRIGHT}80` }}>
                  By sending, you agree to our Privacy Policy. We never share your data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}