import { motion } from 'framer-motion';

const companies = [
  'Anthropic', 'Vercel', 'Stripe', 'Linear', 'Notion',
  'Figma', 'Resend', 'PlanetScale', 'Railway', 'Loom',
  'Raycast', 'Clerk', 'Supabase', 'Turso', 'Neon',
];

export default function TrustedBy() {
  return (
    <section id="trusted" className="py-20 overflow-hidden" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-sm uppercase tracking-widest font-semibold font-orbitron" style={{ color: '#EC7FA9' }}>
          Trusted by engineering teams worldwide
        </p>
      </div>

      <div className="relative">
        {/* Gradient masks for black bg */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #000000, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #000000, transparent)' }} />

        {/* Single marquee row */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...companies, ...companies].map((company, i) => (
            <div
              key={i}
              className="inline-flex items-center mx-6 px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap flex-shrink-0"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(236,127,169,0.12)',
                color: 'rgba(236,127,169,0.7)',
              }}
            >
              <LogoMark name={company} />
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoMark({ name }: { name: string }) {
  const colors: Record<string, string> = {
    Anthropic: '#D4A017', Vercel: '#FFFFFF', Stripe: '#635BFF',
    Linear: '#5E6AD2', Notion: '#FFFFFF', Figma: '#F24E1E',
    Resend: '#FFFFFF', PlanetScale: '#7B61FF', Railway: '#0B0D0E',
    Loom: '#625DF5', Raycast: '#FF6363', Clerk: '#6C47FF',
    Supabase: '#3ECF8E', Turso: '#4FF8D2', Neon: '#00E599',
  };

  return (
    <div
      className="w-5 h-5 rounded-md mr-2.5 flex-shrink-0 flex items-center justify-center text-xs font-bold"
      style={{ background: `${colors[name]}20`, color: colors[name] || '#EC7FA9' }}
    >
      {name[0]}
    </div>
  );
}
