import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLUSH = '#F9A8D4';
const ROSE = '#EC4899';
const MAROON = '#7A1247';
const tones = [ROSE, BLUSH, MAROON];

const posts = [
  {
    slug: 'building-ai-agents-that-scale',
    category: 'AI Engineering',
    title: 'Building AI Agents That Scale: Architecture Patterns for Production',
    excerpt: 'A deep technical exploration of agent architectures, memory systems, and the infrastructure decisions that determine whether your AI agents thrive or fail under real-world load.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Aiden Cole',
    authorInitials: 'AC',
    date: 'Jun 28, 2025',
    readTime: '12 min read',
  },
  {
    slug: 'zero-downtime-migrations',
    category: 'Platform Engineering',
    title: 'Zero-Downtime Database Migrations at Enterprise Scale',
    excerpt: 'How we migrated 2TB of production PostgreSQL data for a financial services client without a single minute of downtime, using blue-green deployments and event sourcing.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Maya Torres',
    authorInitials: 'MT',
    date: 'Jun 14, 2025',
    readTime: '9 min read',
  },
  {
    slug: 'llm-cost-optimization',
    category: 'AI Cost',
    title: 'LLM Cost Optimization: How We Cut AI Inference Costs by 78%',
    excerpt: 'Practical techniques including prompt caching, model routing, quantization, and smart batching that dramatically reduce inference costs without sacrificing output quality.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Liam Park',
    authorInitials: 'LP',
    date: 'May 30, 2025',
    readTime: '15 min read',
  },
].map((p, i) => ({ ...p, tone: tones[i % tones.length], index: String(i + 1).padStart(2, '0') }));

const [featured, ...rest] = posts;

export default function BlogPreview() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-line-bg opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
              <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>
                Latest Insights
              </span>
            </div>
            <h2 className="font-orbitron text-4xl sm:text-5xl text-cedar-frost">
              Engineering{' '}
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 55%, ${MAROON})`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Intelligence
              </span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="btn-secondary inline-flex items-center gap-2 flex-shrink-0 px-6 py-3 text-sm"
          >
            View all posts <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Editorial spread: one large feature + a stacked "further reading" column,
            instead of three identical cards — the hierarchy itself is the point */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured post */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative lg:col-span-2 rounded-3xl overflow-hidden border"
            style={{ borderColor: 'rgba(255,255,255,0.08)', minHeight: '480px' }}
          >
            <Link to={`/blog/${featured.slug}`} className="absolute inset-0 z-20" aria-label={featured.title} />

            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)` }}
            />

            {/* Giant outline numeral — the editorial marker */}
            <span
              className="absolute top-2 right-4 font-orbitron font-bold pointer-events-none select-none"
              style={{
                fontSize: '9rem',
                lineHeight: 1,
                color: 'transparent',
                WebkitTextStroke: `1.5px ${featured.tone}55`,
              }}
            >
              {featured.index}
            </span>

            <div
              className="absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-semibold z-10"
              style={{ background: `${featured.tone}22`, color: featured.tone, border: `1px solid ${featured.tone}45` }}
            >
              {featured.category}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3 leading-snug max-w-xl">
                {featured.title}
              </h3>
              <p className="text-sm text-white/60 mb-5 leading-relaxed max-w-lg line-clamp-2">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between max-w-lg">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${featured.tone}, ${MAROON})` }}
                  >
                    {featured.authorInitials}
                  </div>
                  <span className="text-xs text-white/70">{featured.author}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/40">
                  <span className="flex items-center gap-1"><Calendar size={10} /> {featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {featured.readTime}</span>
                </div>
              </div>
            </div>

            <div
              className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
              style={{ background: `linear-gradient(90deg, transparent, ${featured.tone}, transparent)` }}
            />
          </motion.article>

          {/* Further reading — compact horizontal rows instead of a repeated card shape */}
          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1 }}
                className="group relative flex-1 rounded-2xl overflow-hidden p-5 flex gap-4 items-start"
                style={{ background: `linear-gradient(135deg, ${post.tone}18, ${post.tone}08)`, border: `1px solid ${post.tone}25` }}
                onMouseEnter={(e) => (e.currentTarget.style.border = `1px solid ${post.tone}55`)}
                onMouseLeave={(e) => (e.currentTarget.style.border = `1px solid ${post.tone}25`)}
              >
                <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-20" aria-label={post.title} />

                <span
                  className="absolute -bottom-3 -right-1 font-orbitron font-bold pointer-events-none select-none"
                  style={{ fontSize: '4.5rem', lineHeight: 1, color: 'transparent', WebkitTextStroke: `1px ${post.tone}30` }}
                >
                  {post.index}
                </span>

                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: `${post.tone}18` }} />
                </div>

                <div className="relative min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: post.tone }} />
                    <span className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: post.tone }}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-sm text-cedar-frost mb-2 leading-snug line-clamp-2 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[11px] text-cedar-frost/60">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1"><Clock size={9} /> {post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}