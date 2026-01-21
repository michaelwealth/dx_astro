import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  href: string;
  gradient: string;
  accentColor: string;
}

const services: Service[] = [
  {
    id: 'brand-experience',
    title: 'Brand & Experience',
    description: 'Craft compelling brand identities, intuitive interfaces, and immersive experiences that resonate with your audience and drive meaningful connections.',
    features: ['Brand Strategy & Identity', 'UI/UX Design', 'Experiential Marketing', 'Video Production', 'Creative Content'],
    icon: '✦',
    href: '/services/brand-experience',
    gradient: 'linear-gradient(135deg, #FF5757 0%, #FF8A5B 100%)',
    accentColor: '#FF5757'
  },
  {
    id: 'digital-platforms',
    title: 'Digital Platforms',
    description: 'Build fast, scalable, and conversion-optimized digital products—from responsive websites to native mobile apps with seamless integrations and AI-powered solutions.',
    features: ['Web Development', 'App Development', 'Platform Support', 'AI Integration', 'Automation'],
    icon: '◈',
    href: '/services/digital-platforms',
    gradient: 'linear-gradient(135deg, #FF9800 0%, #FFB340 100%)',
    accentColor: '#FF9800'
  },
  {
    id: 'growth-media',
    title: 'Growth & Media',
    description: 'Drive measurable growth through precision-targeted campaigns across search, social, and display—maximizing ROI at every touchpoint.',
    features: ['Search Marketing (SEM)', 'Paid Social', 'Display & Retargeting', 'Media Relations'],
    icon: '◇',
    href: '/services/growth-media',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF9A8B 100%)',
    accentColor: '#FF6B6B'
  },
  {
    id: 'strategy-advisory',
    title: 'Strategy & Advisory',
    description: 'Navigate digital transformation with clarity. Our strategic frameworks align initiatives with business goals for sustainable competitive advantage.',
    features: ['Digital Strategy', 'Consulting & Advisory', 'Training Programs', 'Audits & Reviews'],
    icon: '▲',
    href: '/services/strategy-advisory',
    gradient: 'linear-gradient(135deg, #E68A00 0%, #FFB340 100%)',
    accentColor: '#E68A00'
  },
];

const ServicesGrid: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="services-section" ref={ref}>
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Capabilities</span>
          <h2 className="section-title">
            Integrated expertise across <span className="text-gradient">every touchpoint</span>
          </h2>
          <p className="section-description">
            Strategy informs design. Design enables growth. Growth validates strategy. 
            This is how we work—connected, coordinated, and focused on outcomes.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href={service.href}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{
                '--service-gradient': service.gradient,
                '--service-accent': service.accentColor
              } as React.CSSProperties}
            >
              <div className="card-glow" />
              
              <div className="card-header">
                <div className="service-icon">
                  <span>{service.icon}</span>
                </div>
                <div className="card-number">0{index + 1}</div>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, i) => (
                  <span key={i} className="feature-badge">
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="service-cta">
                <span>Explore</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9H14M14 9L9 4M14 9L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="/services" className="btn btn-primary btn-lg">
            View All Services
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>

      <style>{`
        .services-section {
          padding: var(--space-5xl) 0;
          background: var(--color-cream);
          position: relative;
          overflow: hidden;
        }
        
        .services-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 87, 87, 0.2), transparent);
        }
        
        .services-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--space-xl);
        }
        
        .services-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto var(--space-4xl);
        }
        
        .section-label {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-primary);
          margin-bottom: var(--space-md);
          padding: var(--space-xs) var(--space-md);
          background: rgba(255, 87, 87, 0.08);
          border-radius: var(--radius-full);
        }
        
        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          margin-bottom: var(--space-lg);
          line-height: 1.15;
        }
        
        .text-gradient {
          background: var(--gradient-warm);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .section-description {
          font-size: 1.125rem;
          color: var(--color-text-light);
          line-height: 1.7;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-xl);
        }
        
        .service-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: var(--space-2xl);
          background: var(--color-white);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(0, 0, 0, 0.04);
          text-decoration: none;
          color: inherit;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .service-card:hover {
          border-color: transparent;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08), 0 0 0 1px var(--service-accent);
        }
        
        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--service-gradient);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .service-card:hover .card-glow {
          opacity: 1;
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-lg);
        }
        
        .service-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--service-gradient);
          border-radius: var(--radius-lg);
          font-size: 1.5rem;
          color: white;
          box-shadow: 0 4px 16px rgba(255, 87, 87, 0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .service-card:hover .service-icon {
          transform: scale(1.05) rotate(-3deg);
          box-shadow: 0 8px 24px rgba(255, 87, 87, 0.35);
        }
        
        .card-number {
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-warm-gray);
          letter-spacing: 0.05em;
        }
        
        .service-title {
          font-size: 1.375rem;
          font-weight: 700;
          margin-bottom: var(--space-md);
          color: var(--color-text);
          transition: color 0.3s ease;
        }
        
        .service-card:hover .service-title {
          color: var(--service-accent);
        }
        
        .service-description {
          font-size: 0.9375rem;
          color: var(--color-text-light);
          line-height: 1.65;
          margin-bottom: var(--space-lg);
          flex: 1;
        }
        
        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
          margin-bottom: var(--space-lg);
        }
        
        .feature-badge {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(255, 87, 87, 0.08) 0%, rgba(255, 152, 0, 0.08) 100%);
          border: 1px solid rgba(255, 87, 87, 0.12);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--service-accent);
          white-space: nowrap;
          transition: all 0.3s ease;
          letter-spacing: 0.05em;
        }
        
        .service-card:hover .feature-badge {
          background: linear-gradient(135deg, rgba(255, 87, 87, 0.12) 0%, rgba(255, 152, 0, 0.12) 100%);
          border-color: var(--service-accent);
          transform: translateY(-1px);
        }
        
        .service-cta {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          font-family: var(--font-display);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--service-accent);
          margin-top: auto;
          padding-top: var(--space-lg);
          border-top: 1px solid var(--color-soft-gray);
        }
        
        .service-cta svg {
          transition: transform 0.3s ease;
        }
        
        .service-card:hover .service-cta svg {
          transform: translateX(6px);
        }
        
        .services-cta {
          text-align: center;
          margin-top: var(--space-4xl);
        }
        
        .services-cta .btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
        }
        
        .services-cta .btn svg {
          transition: transform 0.3s ease;
        }
        
        .services-cta .btn:hover svg {
          transform: translateX(4px);
        }
        
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .service-card {
            padding: var(--space-xl);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;
