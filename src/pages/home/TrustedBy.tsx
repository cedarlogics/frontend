import { motion } from 'framer-motion';

const companies = [
  'Anthropic', 'Vercel', 'Stripe', 'Linear', 'Notion',
  'Figma', 'Resend', 'PlanetScale', 'Railway', 'Loom',
  'Raycast', 'Clerk', 'Supabase', 'Turso', 'Neon',
];

export default function TrustedBy() {
  return (
    <section id="trusted" className="py-20 border-y border-cedar-red/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-sm text-cedar-frost/30 uppercase tracking-widest font-semibold">
          Trusted by engineering teams worldwide
        </p>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #FFFFFF, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #FFFFFF, transparent)' }} />

        {/* Marquee row 1 */}
        <div className="flex animate-marquee whitespace-nowrap mb-4">
          {[...companies, ...companies].map((company, i) => (
            <div
              key={i}
              className="inline-flex items-center mx-6 px-6 py-3 rounded-xl glass text-sm font-semibold text-cedar-frost/40 hover:text-cedar-frost/70 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <LogoMark name={company} />
              {company}
            </div>
          ))}
        </div>

        {/* Marquee row 2 reversed */}
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...companies.slice().reverse(), ...companies.slice().reverse()].map((company, i) => (
            <div
              key={i}
              className="inline-flex items-center mx-6 px-6 py-3 rounded-xl glass text-sm font-semibold text-cedar-frost/30 hover:text-cedar-frost/60 transition-colors whitespace-nowrap flex-shrink-0"
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
      style={{ background: `${colors[name]}20`, color: colors[name] || '#2D2D3A' }}
    >
      {name[0]}
    </div>
  );
}
