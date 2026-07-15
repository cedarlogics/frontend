import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const BLUSH = '#FF6FB5';
const ROSE = '#FF2D87';
const MAROON = '#8E1155';
const WINE = '#1A0510';
const INK = '#1A1024';

const Icon = ({ path }: { path: string }) => (
  <svg
    className="w-6 h-6"
    style={{ color: ROSE }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const SectionLabel = ({ number, text }: { number: string; text: string }) => (
  <div className="flex items-center justify-center gap-3 mb-4">
    <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ROSE})` }} />
    <span className="text-xs tracking-[0.3em] uppercase font-orbitron font-semibold" style={{ color: BLUSH }}>
      {number} // {text}
    </span>
    <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${ROSE}, transparent)` }} />
  </div>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-orbitron text-3xl md:text-5xl text-white mb-5 leading-tight">
    {children}
  </h2>
);

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${MAROON})`,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    }}
  >
    {children}
  </span>
);

const gpuCards = [
  {
    title: 'Multi-Agent Orchestration',
    desc: 'PyTorch & LangGraph primitives running specialized task weights directly inside VRAM to bypass Von Neumann CPU bottlenecks.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    title: 'High-Scale Frame Vectorization',
    desc: 'NumPy, Pandas, and Scikit-learn structural extensions computing massive custom matrix-based organizational state evaluations.',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Containerized Topologies',
    desc: 'Distributed microservices on AWS EKS maps hardware primitives, CUDA cores, and Tensor cores directly into agent runtimes.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
  },
];

const sdkData = [
  {
    name: 'NVIDIA RAPIDS (cuDF & cuML)',
    issue: 'Tabular audit logs & multi-source API payloads via CPU dataframes cause strict memory thrashing.',
    solution: 'Accelerates pipeline execution up to 30x. Custom enterprise parameters are ingested, normalized, and mapped directly onto VRAM allocations instantly.',
  },
  {
    name: 'NVIDIA NeMo Framework',
    issue: 'Powering deep agent reasoning loops risks heavy contextual processing lag and unvalidated execution vectors.',
    solution: 'Enables advanced token tuning models (LoRA / P-Tuning) ensuring deterministic multi-lingual tool orchestration inside absolute system boundaries.',
  },
  {
    name: 'NVIDIA Triton Inference Server',
    issue: 'Simultaneously maintaining cross-tenant layout parsers, embedding models, and custom matrix pipelines triggers structural execution blocks.',
    solution: 'Maximizes extreme physical GPU scaling profiles via dynamic token batching, running concurrent pipeline tasks seamlessly under heavy usage spikes.',
  },
];

const CedarLogicsProductPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });

  const section2Ref = useRef<HTMLDivElement>(null);
  const section2InView = useInView(section2Ref, { once: true, margin: '-100px' });

  const section3Ref = useRef<HTMLDivElement>(null);
  const section3InView = useInView(section3Ref, { once: true, margin: '-100px' });

  const section4Ref = useRef<HTMLDivElement>(null);
  const section4InView = useInView(section4Ref, { once: true, margin: '-100px' });

  const section5Ref = useRef<HTMLDivElement>(null);
  const section5InView = useInView(section5Ref, { once: true, margin: '-100px' });

  const section6Ref = useRef<HTMLDivElement>(null);
  const section6InView = useInView(section6Ref, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen relative overflow-hidden antialiased" style={{ background: `linear-gradient(180deg, ${WINE} 0%, #0F0309 100%)` }}>
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      {/* Glow ambient orbs */}
      <div
        className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${MAROON}40 0%, transparent 65%)`, filter: 'blur(100px)' }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${ROSE}2e 0%, transparent 65%)`, filter: 'blur(90px)' }}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-20">

        {/* SECTION 1: HERO */}
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0, y: 40 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="min-h-[80vh] flex flex-col justify-center items-center text-center relative pt-10"
        >
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ROSE }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: ROSE }}>
              NVIDIA Inception Architectural Profile
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="font-orbitron text-4xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[0.95] mb-8"
          >
            <span className="text-white block">ENTERPRISE AI THAT</span>
            <span className="block" style={{
              backgroundImage: `linear-gradient(90deg, ${BLUSH}, ${ROSE} 45%, ${MAROON})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}>
              MOVES WORK FORWARD
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 80 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-base md:text-xl text-white/50 max-w-3xl mb-12 leading-relaxed"
          >
            Transition from rigid RPA to autonomous, context-aware multi-agent workflows. Engineered entirely on the hardware-accelerated NVIDIA AI Enterprise computing platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://app.cedarlogics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:translate-y-[-1px]"
              style={{ background: `linear-gradient(135deg, ${ROSE}, ${MAROON})`, boxShadow: '0 4px 24px rgba(255,45,135,0.3)' }}
            >
              Explore the Dashboard
              <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </a>
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 400);
              }}
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:translate-y-[-1px]"
              style={{ color: ROSE, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,45,135,0.3)' }}
            >
              Contact Us
            </button>
          </motion.div>
        </motion.section>

        {/* SECTION 2: GPU-NATIVE DECOUPLED RUNTIME */}
        <motion.section
          ref={section2Ref}
          initial={{ opacity: 0, y: 40 }}
          animate={section2InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <SectionLabel number="01" text="Architectural Layer" />
            <SectionHeading>
              GPU-Native <GradientText>Decoupled Runtime</GradientText>
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gpuCards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl transition-all duration-300 group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="mb-6 p-3 w-fit rounded-xl transition-colors"
                  style={{ background: `${ROSE}15` }}
                >
                  <Icon path={item.icon} />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 3: NVIDIA SDK INTEGRATION MATRIX */}
        <motion.section
          ref={section3Ref}
          initial={{ opacity: 0, y: 40 }}
          animate={section3InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <SectionLabel number="02" text="Hardware Acceleration" />
            <SectionHeading>
              NVIDIA SDK <GradientText>Ingestion Matrix</GradientText>
            </SectionHeading>
          </div>
          <div
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="absolute top-4 right-6 opacity-[0.04] font-mono text-5xl md:text-7xl select-none font-bold text-white">CUDA</div>
            <div className="space-y-8 relative z-10">
              {sdkData.map((sdk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="flex items-center">
                    <h4 className="font-display font-bold text-lg" style={{ color: '#FFB8E0' }}>{sdk.name}</h4>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider block mb-1 font-mono" style={{ color: ROSE }}>The Bottleneck</span>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{sdk.issue}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider block mb-1 font-mono" style={{ color: BLUSH }}>Our Integration</span>
                    <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>{sdk.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SECTION 4: CLOUD INFRASTRUCTURE SCALING */}
        <motion.section
          ref={section4Ref}
          initial={{ opacity: 0, y: 40 }}
          animate={section4InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <SectionLabel number="03" text="Cloud Infrastructure Scaling" />
            <h3 className="font-orbitron text-3xl md:text-4xl font-bold leading-tight text-white">
              Processing Large-Horizon Attention Matrices <GradientText>Without Memory Overhead</GradientText>
            </h3>
            <p className="text-white/50 leading-relaxed">
              When an autonomous agent maps compound multi-step execution flows—such as parsing a 500-page complex document against active supply chain parameters—attention metrics scale exponentially.
            </p>
            <blockquote
              className="border-l-2 pl-4 italic text-sm my-4"
              style={{ borderColor: ROSE, color: 'rgba(255,255,255,0.45)' }}
            >
              "CedarLogics scales dynamically across Amazon EC2 P4 and next-gen P5 node topologies leveraging native H100 Tensor Core architectural profiles."
            </blockquote>
            <p className="text-white/50 leading-relaxed">
              The hardware-native Transformer Engine combined with ultra-dense HBM3 memory pools lets our pipelines run complex agent models without triggering Out-Of-Memory exceptions.
            </p>
          </div>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl flex justify-between items-center transition-all"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div>
                <h4 className="text-lg font-bold text-white">Amazon EC2 P4 Instances</h4>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>NVIDIA A100 Tensor Core Platform (80GB)</p>
              </div>
              <span
                className="px-3 py-1 text-xs rounded-md font-mono flex-shrink-0 ml-4"
                style={{ background: `${MAROON}40`, color: '#FFB8E0', border: `1px solid ${MAROON}` }}
              >
                Model Fine-Tuning
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl flex justify-between items-center transition-all"
              style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${ROSE}50`, boxShadow: `0 0 20px ${ROSE}15` }}
            >
              <div>
                <h4 className="text-lg font-bold" style={{ color: '#FFB8E0' }}>Amazon EC2 P5 Instances</h4>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>NVIDIA H100 GPU Production Optimization Tier</p>
              </div>
              <span
                className="px-3 py-1 text-xs rounded-md font-mono flex-shrink-0 ml-4"
                style={{ background: `${ROSE}20`, color: 'white', border: `1px solid ${ROSE}` }}
              >
                Active Deploy Target
              </span>
            </motion.div>
          </div>
        </motion.section>

        {/* SECTION 5: ADVANCED ROADMAP */}
        <motion.section
          ref={section5Ref}
          initial={{ opacity: 0, y: 40 }}
          animate={section5InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <SectionLabel number="04" text="Development Pipeline" />
            <SectionHeading>
              Advanced Technology <GradientText>Roadmap</GradientText>
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Structural connecting line */}
            <div
              className="hidden md:block absolute top-1/2 left-4 right-4 h-[1px] -z-10"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl space-y-4 relative transition-all"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="absolute top-4 right-6 text-[10px] font-bold tracking-widest font-mono" style={{ color: BLUSH }}>Q3 TARGET</div>
              <div className="p-3 rounded-xl w-fit" style={{ background: `${BLUSH}15`, color: BLUSH }}>
                <Icon path="M13 10V3L4 14h7v7l9-11h-7z" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">TensorRT-LLM Integration</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Migrating orchestration layouts directly to TensorRT-LLM models to take full advantage of native In-Flight Batching metrics and custom KV-caching variables. Directly minimizes computational times, accelerating model interaction feedback loops.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl space-y-4 relative transition-all"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="absolute top-4 right-6 text-[10px] font-bold tracking-widest font-mono" style={{ color: ROSE }}>Q4 TARGET</div>
              <div className="p-3 rounded-xl w-fit" style={{ background: `${ROSE}15`, color: ROSE }}>
                <Icon path="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">NVIDIA NIM Blueprint Containerization</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Packaging our custom fine-tuned modular infrastructure frameworks (Finance, Human Resources, Logistics) into secure NIM configurations. Standardizes seamless target on-premise execution models for high-scale validation frameworks.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* SECTION 6: CTA */}
        <motion.section
          ref={section6Ref}
          initial={{ opacity: 0, y: 40 }}
          animate={section6InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${MAROON}30, rgba(255,255,255,0.03))`, border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${ROSE}18 0%, transparent 65%)`, filter: 'blur(60px)' }}
          />
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <h2 className="font-orbitron text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Ready to Accelerate Your Enterprise <GradientText>Workflow DAGs?</GradientText>
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Unlock true algorithmic optimization across your custom software infrastructure. Deploy high-throughput multi-agent execution clusters securely backed by hardware-accelerated NVIDIA primitives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 400);
                }}
                className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:translate-y-[-1px]"
                style={{ background: `linear-gradient(135deg, ${ROSE}, ${MAROON})`, boxShadow: '0 4px 24px rgba(255,45,135,0.3)' }}
              >
                Contact Us
                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </button>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default CedarLogicsProductPage;
