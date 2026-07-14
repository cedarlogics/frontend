import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BLUSH = '#FF6FB5';
const ROSE = '#FF2D87';
const MAROON = '#8E1155';
const WINE = '#1A0510';

export default function FinalCTA() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${WINE} 0%, #0F0309 100%)` }}>
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />
      <div
        className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${MAROON}40 0%, transparent 65%)`, filter: 'blur(100px)' }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${ROSE}2e 0%, transparent 65%)`, filter: 'blur(90px)' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
            <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>
              Ready to Build?
            </span>
            <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${ROSE}, transparent)` }} />
          </div>

          <h2 className="font-orbitron text-4xl sm:text-5xl text-white mb-5">
            Ready to Engineer
            <br />
            <span
              style={{
                backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${MAROON})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              the Future?
            </span>
          </h2>

          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's build your next intelligent platform together. 
            Share your vision — we'll architect the path forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/console"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #FF2D87, #8E1155)', boxShadow: '0 4px 24px rgba(255,45,135,0.3)' }}
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
            {[
              'No lock-in contracts',
              '100% code ownership',
              'NDA on request',
              '24h response time',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/40">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: ROSE }} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
