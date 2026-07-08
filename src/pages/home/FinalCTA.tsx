import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Big glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(236,127,169,0.12) 0%, rgba(236,127,169,0.08) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div className="absolute inset-0 grid-dot-bg opacity-20" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-cedar-red/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label justify-center mb-6">
            <div className="w-4 h-px bg-cedar-red" />
            Ready to Build?
            <div className="w-4 h-px bg-cedar-red" />
          </div>

          <h2 className="section-heading font-orbitron text-5xl sm:text-6xl lg:text-7xl text-cedar-frost mb-6 leading-tight">
            Ready to Engineer
            <br />
            <span className="text-gradient-red">the Future?</span>
          </h2>

          <p className="text-xl text-cedar-frost/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's build your next intelligent platform together. 
            Share your vision — we'll architect the path forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary text-lg px-10 py-5 rounded-2xl"
            >
              Start a Project
              <ArrowRight size={18} />
            </a>
            <Link to="/console" className="btn-secondary text-lg px-10 py-5 rounded-2xl">
              <Zap size={18} />
              Explore Console
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
              <div key={item} className="flex items-center gap-2 text-sm text-cedar-frost/40">
                <div className="w-1.5 h-1.5 rounded-full bg-cedar-red" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
