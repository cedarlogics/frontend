import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

const categories = ['All', 'AI Engineering', 'Platform Engineering', 'Cloud & DevOps', 'Product', 'Security', 'AI Cost'];

const posts = blogPosts.map((p, i) => ({
  ...p,
  featured: i === 0,
}));

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);
  const perPage = 6;
  const paginated = rest.slice(0, page * perPage);

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-dot-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(255,184,224,0.2) 0%, transparent 70%)', filter: 'blur(30px)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="section-label mb-4 justify-center">
              <div className="w-4 h-px bg-cedar-red" />Engineering Blog<div className="w-4 h-px bg-cedar-red" />
            </div>
            <h1 className="section-heading text-5xl sm:text-6xl text-cedar-frost mb-4">
              Intelligence <span className="text-gradient-red">in Writing</span>
            </h1>
            <p className="text-cedar-frost/50 max-w-xl mx-auto">
              Deep technical dives, architecture explorations, and engineering insights from the CedarLogics team.
            </p>
          </motion.div>

          {/* Search */}
          <div className="max-w-lg mx-auto mb-10">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-cedar-frost/30" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl glass text-sm text-cedar-frost placeholder-cedar-frost/30 focus:outline-none focus:border-cedar-red/50 border border-cedar-red/15 transition-colors"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setPage(1); }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cedar-red text-white'
                    : 'glass text-cedar-frost/60 hover:text-cedar-frost hover:border-cedar-violet/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        {/* Featured article */}
        {featured && activeCategory === 'All' && !search && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative glass-card rounded-3xl overflow-hidden mb-12 hover:border-cedar-red/20 transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cedar-dark/60 hidden lg:block" />
                <div className="absolute top-5 left-5">
                  <div className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{ background: 'rgba(236,127,169,0.85)', backdropFilter: 'blur(8px)' }}>
                    Featured
                  </div>
                </div>
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-xs font-semibold mb-4 px-3 py-1 rounded-full w-fit"
                  style={{ background: `${featured.categoryColor}20`, color: featured.categoryColor }}>
                  <Tag size={10} /> {featured.category}
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-cedar-frost mb-4 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-cedar-frost/55 mb-6 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: featured.authorColor }}>
                      {featured.authorInitials}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-cedar-frost">{featured.author}</div>
                      <div className="flex items-center gap-3 text-xs text-cedar-frost/40">
                        <span className="flex items-center gap-1"><Calendar size={10} /> {featured.date}</span>
                        <span className="flex items-center gap-1"><Clock size={10} /> {featured.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Link to={`/blog/${featured.slug}`}
                    className="flex items-center gap-2 text-sm font-semibold text-cedar-red hover:text-cedar-frost transition-colors">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-cedar-frost/40">
            <p className="text-lg">No articles found for this search.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginated.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="group glass-card rounded-2xl overflow-hidden hover:border-cedar-red/20 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cedar-dark/80 to-transparent" />
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: `${post.categoryColor}25`, color: post.categoryColor, border: `1px solid ${post.categoryColor}30` }}>
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-cedar-frost mb-3 leading-snug group-hover:text-white transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-cedar-frost/50 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded glass text-cedar-frost/40">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{ background: post.authorColor }}>
                          {post.authorInitials}
                        </div>
                        <div>
                          <div className="text-xs font-medium text-cedar-frost/70">{post.author}</div>
                          <div className="flex items-center gap-2 text-xs text-cedar-frost/30">
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <Link to={`/blog/${post.slug}`}
                        className="text-xs font-semibold text-cedar-red hover:text-cedar-frost transition-colors flex items-center gap-1">
                        Read <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {paginated.length < rest.length && (
              <div className="text-center">
                <button
                  onClick={() => setPage((p) => p + 1)}
                  className="btn-secondary px-8 py-3 rounded-xl"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </>
        )}

        {/* Newsletter */}
        <div className="mt-20 glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-dot-bg opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(236,127,169,0.1) 0%, transparent 70%)', filter: 'blur(20px)' }} />

          <div className="relative">
            <div className="section-label justify-center mb-4">
              <div className="w-4 h-px bg-cedar-red" />Newsletter<div className="w-4 h-px bg-cedar-red" />
            </div>
            <h3 className="section-heading text-3xl sm:text-4xl text-cedar-frost mb-4">
              Engineering Insights, <span className="text-gradient-red">Weekly</span>
            </h3>
            <p className="text-cedar-frost/50 max-w-lg mx-auto mb-8">
              Deep dives, architecture patterns, and AI engineering breakthroughs — 
              delivered to your inbox every Thursday.
            </p>
            {subscribed ? (
              <div className="text-cedar-frost/70 text-sm">
                <span className="text-cedar-red font-semibold">You're subscribed!</span> Check your inbox for a confirmation.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3.5 rounded-2xl glass text-sm text-cedar-frost placeholder-cedar-frost/30 border border-cedar-red/15 focus:border-cedar-red/50 focus:outline-none transition-colors"
                />
                <button type="submit" className="btn-primary px-7 py-3.5 rounded-2xl whitespace-nowrap">
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
