import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen pt-20">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <p className="text-cedar-frost/50 text-lg mb-6">Blog post not found.</p>
          <Link to="/blog" className="text-cedar-red hover:text-cedar-frost transition-colors">
            &larr; Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-dot-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(255,184,224,0.2) 0%, transparent 70%)', filter: 'blur(30px)' }} />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-cedar-frost/50 hover:text-cedar-red transition-colors mb-8">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <div className="inline-flex items-center gap-2 text-xs font-semibold mb-4 px-3 py-1 rounded-full"
              style={{ background: `${post.categoryColor}20`, color: post.categoryColor }}>
              <Tag size={10} /> {post.category}
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-cedar-frost mb-6 leading-snug">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: post.authorColor }}>
                  {post.authorInitials}
                </div>
                <span className="text-sm text-cedar-frost/70">{post.author}</span>
              </div>
              <span className="flex items-center gap-1 text-xs text-cedar-frost/40">
                <Calendar size={12} /> {post.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-cedar-frost/40">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>

            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cedar-dark/60 to-transparent" />
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full glass text-cedar-frost/50">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            {post.content.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} className="font-display font-bold text-2xl text-cedar-frost mt-10 mb-4">
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              if (block.startsWith('- ')) {
                const items = block.split('\n').filter((l) => l.startsWith('- '));
                return (
                  <ul key={i} className="space-y-2 mb-6 ml-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-cedar-frost/70 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cedar-red mt-2 flex-shrink-0" />
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-cedar-frost/70 leading-relaxed mb-5 text-base">
                  {block}
                </p>
              );
            })}
          </motion.article>

          <div className="mt-16 pt-8 border-t border-cedar-frost/10 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #FF2D87, #8E1155)', boxShadow: '0 4px 24px rgba(255,45,135,0.3)' }}
            >
              <ArrowLeft size={14} />
              Back to All Posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
