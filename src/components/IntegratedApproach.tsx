import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const IntegratedApproach: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      id: 'strategy',
      number: '01',
      title: 'Strategy',
      description: 'We start with clarity. Understanding your market, audience, and objectives to build a roadmap that aligns digital initiatives with business goals.',
      icon: '◎',
      color: '#FF5757'
    },
    {
      id: 'brand',
      number: '02',
      title: 'Brand',
      description: 'Strategy informs design. We create identities and experiences that resonate emotionally while driving business outcomes.',
      icon: '✦',
      color: '#FF6B4D'
    },
    {
      id: 'platform',
      number: '03',
      title: 'Platform',
      description: 'Design enables technology. We build fast, scalable, conversion-optimized digital products that bring your brand to life.',
      icon: '⬡',
      color: '#FF9800'
    },
    {
      id: 'growth',
      number: '04',
      title: 'Growth',
      description: 'Platform powers performance. Data-driven campaigns that drive qualified traffic, conversions, and sustainable growth.',
      icon: '▲',
      color: '#FFB340'
    }
  ];

  return (
    <section className="approach-section" ref={ref}>
      <div className="approach-container">
        <motion.div 
          className="approach-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">The Integrated Difference</span>
          <h2 className="section-title">
            Four pillars. <span className="text-gradient">One outcome.</span>
          </h2>
          <p className="section-description">
            Most agencies operate in silos. We don't. Our integrated approach means every 
            discipline works together—strategy informing brand, brand enabling platform, 
            platform powering growth, and growth validating strategy.
          </p>
        </motion.div>

        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              className="pillar-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="pillar-connector" aria-hidden="true">
                <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 0, 100 10" stroke="url(#gradient)" strokeWidth="2" fill="none"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF5757" />
                      <stop offset="100%" stopColor="#FF9800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <div className="pillar-number" style={{ color: pillar.color }}>
                {pillar.number}
              </div>
              
              <div className="pillar-icon" style={{ background: `${pillar.color}15`, color: pillar.color }}>
                {pillar.icon}
              </div>
              
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>
              
              <div className="pillar-flow">
                {index < pillars.length - 1 && (
                  <motion.div 
                    className="flow-arrow"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="approach-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="visual-ring visual-ring-outer">
            <motion.div 
              className="ring-orbit"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <span className="orbit-dot" style={{ background: '#FF5757' }} />
            </motion.div>
          </div>
          <div className="visual-ring visual-ring-middle">
            <motion.div 
              className="ring-orbit"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <span className="orbit-dot" style={{ background: '#FF9800' }} />
            </motion.div>
          </div>
          <div className="visual-ring visual-ring-inner">
            <motion.div 
              className="ring-orbit"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="orbit-dot" style={{ background: '#FF6B4D' }} />
            </motion.div>
          </div>
          <div className="visual-center">
            <span className="text-gradient">DX</span>
          </div>
        </motion.div>

        <motion.div 
          className="approach-quote"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <blockquote>
            "A fragmented approach costs more and delivers less. 
            <span className="text-gradient"> Integration is the competitive advantage.</span>"
          </blockquote>
        </motion.div>
      </div>

      <style>{`
        .approach-section {
          padding: var(--space-5xl) 0;
          background: linear-gradient(180deg, var(--color-cream) 0%, var(--color-white) 50%, var(--color-cream) 100%);
          position: relative;
          overflow: hidden;
        }
        
        .approach-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--space-xl);
        }
        
        .approach-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto var(--space-4xl);
        }
        
        .section-label {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-primary);
          margin-bottom: var(--space-md);
        }
        
        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          margin-bottom: var(--space-lg);
        }
        
        .section-description {
          font-size: 1.125rem;
          color: var(--color-text-light);
          line-height: 1.7;
        }
        
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-lg);
          margin-bottom: var(--space-4xl);
        }
        
        .pillar-card {
          position: relative;
          text-align: center;
          padding: var(--space-2xl) var(--space-lg);
        }
        
        .pillar-connector {
          position: absolute;
          top: 60px;
          right: -20px;
          width: 40px;
          height: 20px;
          display: none;
        }
        
        .pillar-card:not(:last-child) .pillar-connector {
          display: block;
        }
        
        .pillar-number {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-md);
        }
        
        .pillar-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-xl);
          font-size: 1.5rem;
          margin: 0 auto var(--space-lg);
        }
        
        .pillar-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: var(--space-md);
        }
        
        .pillar-description {
          font-size: 0.9375rem;
          color: var(--color-text-light);
          line-height: 1.6;
        }
        
        .pillar-flow {
          margin-top: var(--space-lg);
          color: var(--color-primary);
          opacity: 0.5;
        }
        
        .approach-visual {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 auto var(--space-4xl);
        }
        
        .visual-ring {
          position: absolute;
          border: 1px solid var(--color-soft-gray);
          border-radius: 50%;
        }
        
        .visual-ring-outer {
          inset: 0;
        }
        
        .visual-ring-middle {
          inset: 40px;
        }
        
        .visual-ring-inner {
          inset: 80px;
        }
        
        .ring-orbit {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .orbit-dot {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .visual-center {
          position: absolute;
          inset: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-white);
          border-radius: 50%;
          box-shadow: var(--shadow-lg);
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
        }
        
        .approach-quote {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .approach-quote blockquote {
          font-family: var(--font-display);
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          font-weight: 600;
          line-height: 1.5;
          color: var(--color-text);
        }
        
        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .pillar-connector {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          
          .pillar-card {
            text-align: left;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: var(--space-md);
            align-items: start;
            padding: var(--space-lg);
          }
          
          .pillar-icon {
            margin: 0;
            grid-row: span 2;
          }
          
          .pillar-number {
            position: absolute;
            top: var(--space-md);
            right: var(--space-md);
          }
          
          .pillar-flow {
            display: none;
          }
          
          .approach-visual {
            width: 200px;
            height: 200px;
          }
          
          .visual-ring-middle {
            inset: 30px;
          }
          
          .visual-ring-inner {
            inset: 60px;
          }
          
          .visual-center {
            inset: 80px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default IntegratedApproach;
