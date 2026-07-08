import { motion } from 'framer-motion';

const techs = [
  { name: 'React', color: '#61DAFB', category: 'Frontend' },
  { name: 'TypeScript', color: '#3178C6', category: 'Language' },
  { name: 'Node.js', color: '#339933', category: 'Runtime' },
  { name: 'Python', color: '#3776AB', category: 'AI / Backend' },
  { name: 'PostgreSQL', color: '#4169E1', category: 'Database' },
  { name: 'Redis', color: '#DC382D', category: 'Cache' },
  { name: 'Docker', color: '#2496ED', category: 'Containers' },
  { name: 'Kubernetes', color: '#326CE5', category: 'Orchestration' },
  { name: 'AWS', color: '#FF9900', category: 'Cloud' },
  { name: 'Terraform', color: '#7B42BC', category: 'IaC' },
  { name: 'PyTorch', color: '#EE4C2C', category: 'ML' },
  { name: 'LangChain', color: '#1C3C3C', category: 'AI Framework' },
  { name: 'GraphQL', color: '#E10098', category: 'API' },
  { name: 'Next.js', color: '#FFFFFF', category: 'Framework' },
  { name: 'Rust', color: '#CE412B', category: 'Systems' },
  { name: 'Go', color: '#00ADD8', category: 'Backend' },
];

export default function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-line-bg opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4">
            <div className="w-4 h-px bg-cedar-red" />
            Technology
            <div className="w-4 h-px bg-cedar-red" />
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl text-cedar-frost mb-4">
            Best-in-Class <span className="text-gradient-red">Tech Stack</span>
          </h2>
          <p className="text-cedar-frost/50 max-w-xl mx-auto">
            We pick the right tool for each job — not just the popular one.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="group glass-card rounded-2xl px-5 py-4 flex flex-col items-center gap-2 cursor-default hover:border-cedar-violet/30 transition-all duration-300 min-w-[100px]"
            >
              {/* Tech logo placeholder */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${tech.color}20`, color: tech.color, fontSize: '10px', fontFamily: 'monospace' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8" stroke={tech.color} strokeWidth="1.5" fill="none"/>
                  <path d="M12 4 L12 20 M4 12 L20 12" stroke={tech.color} strokeWidth="1" opacity="0.5"/>
                  <circle cx="12" cy="12" r="3" fill={tech.color} fillOpacity="0.4"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-cedar-frost/70 group-hover:text-cedar-frost transition-colors">
                {tech.name}
              </span>
              <span className="text-xs text-cedar-frost/30" style={{ fontSize: '10px' }}>
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
