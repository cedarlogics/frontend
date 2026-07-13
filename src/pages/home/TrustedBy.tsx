import { motion } from 'framer-motion';

const BLUSH = '#FF1A75';
const ROSE = '#FF5CA8';
const MAROON = '#7A1247';
const WINE = '#1A0510';

const companies = [
  'Anthropic', 'Vercel', 'Stripe', 'Linear', 'Notion',
  'Figma', 'Resend', 'PlanetScale', 'Railway', 'Loom',
  'Raycast', 'Clerk', 'Supabase', 'Turso', 'Neon',
];

const accents = [BLUSH, ROSE, MAROON];

export default function TrustedBy() {
  const rowA = companies;
  const rowB = [...companies].reverse();

  return (
    <section id="trusted" className="py-24 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${WINE} 0%, #0F0309 100%)` }}>
      {/* Same grain + restrained glow language as the other sections */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[360px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${MAROON}33 0%, transparent 70%)`, filter: 'blur(80px)' }}
      />

      {/* Local keyframes for the counter-scrolling second row */}
      <style>{`
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-reverse { animation: marquee-reverse 42s linear infinite; }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3"
        >
          <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
          <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>
            Trusted by engineering teams worldwide
          </span>
          <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${ROSE}, transparent)` }} />
        </motion.div>
      </div>

      <div className="relative space-y-3">
        {/* Gradient masks for black bg */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${WINE}, transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${WINE}, transparent)` }} />

        

        {/* Row 2 — lighter weight, muted, moving right. Same names, offset order,
            slower and quieter, so the strip reads as one layered signal rather
            than a repeated single line. */}
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...rowB, ...rowB].map((company, i) => (
            <div key={`b-${i}`} className="inline-flex items-center flex-shrink-0">
              <span
                className="w-1 h-1 rounded-full mx-6"
                style={{ background: accents[(i + 1) % accents.length], opacity: 0.6 }}
              />
              <span
                className="text-sm font-mono uppercase tracking-[0.2em] whitespace-nowrap"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}