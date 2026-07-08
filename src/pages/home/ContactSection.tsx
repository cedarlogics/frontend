import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-line-bg opacity-15" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(236,127,169,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4">
            <div className="w-4 h-px bg-cedar-red" />
            Contact
            <div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading font-orbitron text-4xl sm:text-5xl text-cedar-frost mb-4">
            Start a <span className="text-gradient-red">Conversation</span>
          </h2>
          <p className="text-cedar-frost/50 max-w-xl mx-auto">
            Tell us about your project. We'll respond within one business day with 
            a thoughtful response—not a sales script.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'hello@cedarlogics.com', href: 'mailto:hello@cedarlogics.com' },
                { icon: Phone, label: 'Phone', value: '+1 (415) 000-0000', href: 'tel:+14150000000' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA\nUnited States', href: '#' },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0 group-hover:border-cedar-red/30 transition-colors">
                    <item.icon size={16} className="text-cedar-red" />
                  </div>
                  <div>
                    <div className="text-xs text-cedar-frost/30 mb-0.5">{item.label}</div>
                    <div className="text-sm text-cedar-frost/70 group-hover:text-cedar-frost transition-colors whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="glass-card rounded-2xl h-40 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ background: 'radial-gradient(circle at 50% 50%, #FFB8E0 0%, transparent 60%)' }} />
              <div className="absolute inset-0 grid-dot-bg opacity-30" />
              <div className="text-center">
                <MapPin size={24} className="text-cedar-red mx-auto mb-2" />
                <span className="text-xs text-cedar-frost/40">San Francisco, CA</span>
              </div>
            </div>

            {/* Social */}
            <div className="glass-card rounded-2xl p-5">
              <div className="text-xs text-cedar-frost/30 uppercase tracking-widest mb-4">Follow Our Work</div>
              <div className="flex gap-3">
                {[
                  { Icon: Github, href: '#', label: 'GitHub' },
                  { Icon: Twitter, href: '#', label: 'Twitter' },
                  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                ].map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    className="flex-1 py-3 rounded-xl glass flex items-center justify-center text-cedar-frost/40 hover:text-cedar-frost hover:border-cedar-violet/30 transition-all duration-200 group">
                    <s.Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-64 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-cedar-red/20 flex items-center justify-center mb-4">
                    <Send size={24} className="text-cedar-red" />
                  </div>
                  <h3 className="font-display font-semibold text-cedar-frost text-xl mb-2">Message Sent!</h3>
                  <p className="text-cedar-frost/50 text-sm max-w-xs">
                    We'll review your message and get back to you within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-cedar-frost/40 mb-2">Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-cedar-red/5 border border-cedar-red/15 text-sm text-cedar-frost placeholder-cedar-frost/25 focus:outline-none focus:border-cedar-red/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-cedar-frost/40 mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-cedar-red/5 border border-cedar-red/15 text-sm text-cedar-frost placeholder-cedar-frost/25 focus:outline-none focus:border-cedar-red/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-cedar-frost/40 mb-2">Company</label>
                    <input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company (optional)"
                      className="w-full px-4 py-3 rounded-xl bg-cedar-red/5 border border-cedar-red/15 text-sm text-cedar-frost placeholder-cedar-frost/25 focus:outline-none focus:border-cedar-red/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-cedar-frost/40 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-xl bg-cedar-red/5 border border-cedar-red/15 text-sm text-cedar-frost placeholder-cedar-frost/25 focus:outline-none focus:border-cedar-red/50 transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-4 text-base rounded-xl">
                    <Send size={16} />
                    Send Message
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-xs text-cedar-frost/30 text-center">
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
