import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { blogPosts, BlogPost } from '../../data/blogPosts';
import BlogPostPopup from '../../components/BlogPostPopup';

const BLUSH = '#FF6FB5';
const ROSE = '#FF2D87';
const MAROON = '#8E1155';
const tones = [ROSE, BLUSH, MAROON];

const posts = blogPosts.slice(0, 3).map((p, i) => ({
  ...p,
  tone: tones[i % tones.length],
  index: String(i + 1).padStart(2, '0'),
}));

const [featured, ...rest] = posts;

export default function BlogPreview() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    setPopupOpen(true);
  };

  return (
    <section id="blog" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${BLUSH} 1px, transparent 1px)`,
          backgroundSize: '4px 4px',
        }}
      />

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
            <h2 className="font-orbitron text-4xl sm:text-5xl text-cedar-frost mb-5">
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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured post */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative lg:col-span-2 rounded-3xl overflow-hidden border cursor-pointer"
            style={{ borderColor: 'rgba(255,255,255,0.08)', minHeight: '480px' }}
            onClick={() => openPost(featured)}
          >
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

          {/* Further reading */}
          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1 }}
                className="group relative flex-1 rounded-2xl overflow-hidden p-5 flex gap-4 items-start cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${post.tone}18, ${post.tone}08)`, border: `1px solid ${post.tone}25` }}
                onMouseEnter={(e) => (e.currentTarget.style.border = `1px solid ${post.tone}55`)}
                onMouseLeave={(e) => (e.currentTarget.style.border = `1px solid ${post.tone}25`)}
                onClick={() => openPost(post)}
              >
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

      <BlogPostPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        post={selectedPost}
      />
    </section>
  );
}
