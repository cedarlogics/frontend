import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    slug: 'building-ai-agents-that-scale',
    category: 'AI Engineering',
    categoryColor: '#EC7FA9',
    title: 'Building AI Agents That Scale: Architecture Patterns for Production',
    excerpt: 'A deep technical exploration of agent architectures, memory systems, and the infrastructure decisions that determine whether your AI agents thrive or fail under real-world load.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Aiden Cole',
    authorInitials: 'AC',
    authorColor: '#EC7FA9',
    date: 'Jun 28, 2025',
    readTime: '12 min read',
  },
  {
    slug: 'zero-downtime-migrations',
    category: 'Platform Engineering',
    categoryColor: '#FFB8E0',
    title: 'Zero-Downtime Database Migrations at Enterprise Scale',
    excerpt: 'How we migrated 2TB of production PostgreSQL data for a financial services client without a single minute of downtime, using blue-green deployments and event sourcing.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Maya Torres',
    authorInitials: 'MT',
    authorColor: '#FFB8E0',
    date: 'Jun 14, 2025',
    readTime: '9 min read',
  },
  {
    slug: 'llm-cost-optimization',
    category: 'AI Cost',
    categoryColor: '#FFB8E0',
    title: 'LLM Cost Optimization: How We Cut AI Inference Costs by 78%',
    excerpt: 'Practical techniques including prompt caching, model routing, quantization, and smart batching that dramatically reduce inference costs without sacrificing output quality.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Liam Park',
    authorInitials: 'LP',
    authorColor: '#FFB8E0',
    date: 'May 30, 2025',
    readTime: '15 min read',
  },
];

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
            <div className="section-label mb-3">
              <div className="w-4 h-px bg-cedar-red" />
              Latest Insights
            </div>
            <h2 className="section-heading font-orbitron text-4xl sm:text-5xl text-cedar-frost">
              Engineering <span className="text-gradient-red">Intelligence</span>
            </h2>
          </div>
          <Link to="/blog" className="btn-secondary inline-flex items-center gap-2 flex-shrink-0">
            View all posts <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-cedar-red/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cedar-dark/80 to-transparent" />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${post.categoryColor}20`, color: post.categoryColor, border: `1px solid ${post.categoryColor}30` }}
                >
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-cedar-frost mb-3 leading-snug group-hover:text-white transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-cedar-frost/50 mb-5 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: post.authorColor }}
                    >
                      {post.authorInitials}
                    </div>
                    <span className="text-xs text-cedar-frost/50">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-cedar-frost/30">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
