import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';

const ROSE = '#FF2D87';
const MAROON = '#8E1155';

interface BlogPostPopupProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

function renderContent(content: string[]) {
  return content.map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i} className="font-display font-bold text-xl text-white mt-8 mb-3">{block.replace('## ', '')}</h2>;
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n').filter(l => l.startsWith('- '));
      return (
        <ul key={i} className="space-y-1.5 mb-4 ml-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-white/60">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ROSE }} />
              {item.replace('- ', '')}
            </li>
          ))}
        </ul>
      );
    }
    return <p key={i} className="text-sm text-white/60 leading-relaxed mb-4">{block}</p>;
  });
}

export default function BlogPostPopup({ isOpen, onClose, post }: BlogPostPopupProps) {
  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 pt-12 pb-12"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(165deg, #1A0510 0%, #0F0309 100%)',
              border: `1px solid ${ROSE}25`,
              boxShadow: `0 25px 80px rgba(0,0,0,0.6), 0 0 40px ${ROSE}10`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image */}
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, #1A0510 0%, rgba(0,0,0,0.3) 100%)' }} />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center z-10 transition-colors"
                style={{ background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: `${post.categoryColor}22`, color: post.categoryColor, border: `1px solid ${post.categoryColor}45` }}>
                    {post.category}
                  </span>
                </div>
                <h1 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug">{post.title}</h1>
              </div>
            </div>

            {/* Meta */}
            <div className="px-6 py-4 flex items-center justify-between border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${post.categoryColor}, ${MAROON})` }}>
                  {post.authorInitials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{post.author}</div>
                  <div className="text-xs text-white/40">{post.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/40">
                <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
              <p className="text-sm text-white/50 leading-relaxed mb-6 italic">{post.excerpt}</p>
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="px-6 py-4 border-t flex items-center gap-2 flex-wrap" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs text-white/40"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
