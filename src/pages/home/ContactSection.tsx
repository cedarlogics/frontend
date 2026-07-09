import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Twitter, Linkedin, Check, CheckCheck } from 'lucide-react';

const DEEP = '#7A0F44';
const HOT = '#FF2D87';
const BRIGHT = '#FF5FA2';
const SOFT = 'rgba(255,45,135,0.10)';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sent' | 'replied'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.message.trim()) return;
    setStatus('sent');
    setTimeout(() => setStatus('replied'), 1600);
  };

  const hasDraft = form.message.trim().length > 0;

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-line-bg opacity-15" />
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
            <div className="flex items-center gap-3 mb-5">
              <div className="w-4 h-px" style={{ background: HOT }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: BRIGHT }}>
                Contact
              </span>
            </div>
            <h2 className="font-orbitron text-4xl sm:text-5xl text-cedar-frost mb-5">
              Start a <span style={{ color: HOT }}>Conversation</span>
            </h2>
            <p className="text-cedar-frost/70 leading-relaxed mb-10 max-w-sm">
              Tell us about your project. We'll respond within one business day with
              a thoughtful message — not a sales script.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { Icon: Mail, label: 'Email', value: 'hello@cedarlogics.com', href: 'mailto:hello@cedarlogics.com' },
                { Icon: Phone, label: 'Phone', value: '+1 (415) 000-0000', href: 'tel:+14150000000' },
                { Icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
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
                    color: hasDraft ? '#fff' : 'rgba(232,232,235,0.45)',
                  }}
                >
                  {hasDraft ? form.message : 'Your message will appear here as you type...'}
                  {status !== 'idle' && (
                    <div className="flex items-center justify-end gap-1 mt-1.5">
                      {status === 'sent' ? (
                        <Check size={12} className="text-white/80" />
                      ) : (
                        <CheckCheck size={12} className="text-white/80" />
                      )}
                      <span className="text-[10px] text-white/70">{status === 'sent' ? 'Sent' : 'Seen'}</span>
                    </div>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {status === 'sent' && (
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
                {status === 'replied' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div
                      className="max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-cedar-frost/90"
                      style={{ background: SOFT, border: `1px solid ${HOT}30` }}
                    >
                      Got it, thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''}. We'll review this and reply soon.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Composer */}
            {status === 'idle' && (
              <form onSubmit={handleSubmit} className="border-t" style={{ borderColor: `${HOT}25` }}>
                <div className="grid grid-cols-2 gap-px" style={{ background: `${HOT}20` }}>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="px-4 py-3 text-sm text-white placeholder-cedar-frost/40 focus:outline-none"
                    style={{ background: 'rgba(0,0,0,0.2)' }}
                  />
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="px-4 py-3 text-sm text-white placeholder-cedar-frost/40 focus:outline-none"
                    style={{ background: 'rgba(0,0,0,0.2)' }}
                  />
                </div>
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Company (optional)"
                  className="w-full px-4 py-3 text-sm text-white placeholder-cedar-frost/40 focus:outline-none border-t"
                  style={{ borderColor: `${HOT}20`, background: 'rgba(0,0,0,0.2)' }}
                />
                <div className="flex items-end gap-2 p-3">
                  <textarea
                    required
                    rows={1}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message..."
                    className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder-cedar-frost/40 focus:outline-none resize-none"
                    style={{ background: 'rgba(255,45,135,0.06)', border: `1px solid ${HOT}35` }}
                  />
                  <button
                    type="submit"
                    disabled={!hasDraft}
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform disabled:opacity-30"
                    style={{ background: `linear-gradient(135deg, ${DEEP}, ${HOT})` }}
                  >
                    <Send size={17} className="text-white" />
                  </button>
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