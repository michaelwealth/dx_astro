import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

interface HeroProps {
  title?: string;
  subtitle?: string;
  cta?: {
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
}

const Hero: React.FC<HeroProps> = ({
  title = "Build brands. Drive growth. Exceed expectations.",
  subtitle = "We're an integrated digital agency that brings together strategy, design, technology, and growth expertise to deliver measurable outcomes.",
  cta = {
    primary: { label: "Start Your Journey", href: "/contact" },
    secondary: { label: "Explore Our Work", href: "/portfolio" }
  }
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.98]);
  const imageY = useTransform(scrollY, [0, 500], [0, 100]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);
  const imageYSpring = useSpring(imageY, springConfig);

  // Animated text reveal
  const words = title.split(' ');

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero-background">
        {/* Subtle gradient orbs */}
        <motion.div 
          className="hero-orb hero-orb-1"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="hero-orb hero-orb-2"
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid pattern */}
        <div className="hero-grid" />
      </div>
      
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          style={{ y: ySpring, scale }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-dot" />
            <span>Strategy × Brand × Platform × Growth</span>
          </motion.div>
          
          <h1 className="hero-title">
            {words.map((word, i) => (
              <motion.span 
                key={i} 
                className={word.includes('.') ? 'hero-word-accent' : ''}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 + i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href={cta.primary.href} className="btn btn-primary btn-lg hero-btn-primary">
              <span>{cta.primary.label}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            {cta.secondary && (
              <a href={cta.secondary.href} className="btn btn-secondary btn-lg">
                {cta.secondary.label}
              </a>
            )}
          </motion.div>
        </motion.div>
        
        {/* Right side visual */}
        <motion.div 
          className="hero-visual"
          style={{ y: imageYSpring, scale: imageScale }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="visual-wrapper">
            <div className="visual-shape visual-shape-1" />
            <div className="visual-shape visual-shape-2" />
            <div className="visual-shape visual-shape-3" />
            <div className="visual-image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&fit=crop&q=80" 
                alt="Creative team collaboration"
              />
            </div>
            {/* Floating elements */}
            <motion.div 
              className="floating-card floating-card-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="floating-icon">✦</div>
              <div className="floating-text">
                <span className="floating-value">147%</span>
                <span className="floating-label">Avg. Growth</span>
              </div>
            </motion.div>
            <motion.div 
              className="floating-card floating-card-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="floating-icon">◈</div>
              <div className="floating-text">
                <span className="floating-value">50+</span>
                <span className="floating-label">Projects</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ opacity }}
      >
        <span>Scroll to explore</span>
        <motion.div 
          className="scroll-line"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span />
        </motion.div>
      </motion.div>
      
      {/* Bottom curve */}
      <div className="hero-curve">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--color-cream)"/>
        </svg>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: calc(var(--header-height) + var(--space-3xl)) 0 var(--space-4xl);
          overflow: hidden;
          background: linear-gradient(180deg, #FFFFFF 0%, var(--color-cream) 100%);
        }
        
        .hero-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
        }
        
        .hero-orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, rgba(255, 87, 87, 0.25) 0%, rgba(255, 152, 0, 0.15) 100%);
          top: -100px;
          left: -150px;
        }
        
        .hero-orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, rgba(255, 152, 0, 0.2) 0%, rgba(255, 87, 87, 0.1) 100%);
          bottom: -50px;
          right: 10%;
        }
        
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.015) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at 30% 50%, black 0%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at 30% 50%, black 0%, transparent 70%);
        }
        
        .hero-container {
          position: relative;
          width: 100%;
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--space-xl);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4xl);
          align-items: center;
        }
        
        .hero-content {
          max-width: 650px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-sm) var(--space-lg);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 87, 87, 0.15);
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-text);
          margin-bottom: var(--space-xl);
          box-shadow: 0 4px 20px rgba(255, 87, 87, 0.1);
        }
        
        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--gradient-warm);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.3); }
        }
        
        .hero-title {
          font-size: clamp(2.75rem, 5.5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin-bottom: var(--space-xl);
          color: var(--color-text);
        }
        
        .hero-title span {
          display: inline-block;
        }
        
        .hero-word-accent {
          background: var(--gradient-warm);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: clamp(1.125rem, 1.5vw, 1.25rem);
          color: var(--color-text-light);
          max-width: 540px;
          line-height: 1.7;
          margin-bottom: var(--space-2xl);
        }
        
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
        }
        
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
        }
        
        .hero-btn-primary svg {
          transition: transform var(--transition-fast);
        }
        
        .hero-btn-primary:hover svg {
          transform: translateX(4px);
        }
        
        /* Right side visual */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          min-height: 500px;
        }
        
        .visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 4/5;
        }
        
        .visual-shape {
          position: absolute;
          border-radius: var(--radius-2xl);
        }
        
        .visual-shape-1 {
          inset: -20px;
          background: linear-gradient(135deg, rgba(255, 87, 87, 0.1) 0%, rgba(255, 152, 0, 0.05) 100%);
          transform: rotate(-3deg);
        }
        
        .visual-shape-2 {
          inset: -10px;
          background: linear-gradient(135deg, rgba(255, 152, 0, 0.08) 0%, rgba(255, 87, 87, 0.04) 100%);
          transform: rotate(2deg);
        }
        
        .visual-shape-3 {
          inset: 0;
          background: var(--gradient-warm);
          opacity: 0.1;
        }
        
        .visual-image {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }
        
        .visual-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .visual-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 87, 87, 0.1) 0%, rgba(255, 152, 0, 0.05) 50%, transparent 100%);
          mix-blend-mode: overlay;
        }
        
        /* Floating cards */
        .floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md) var(--space-lg);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.8);
          z-index: 10;
        }
        
        .floating-card-1 {
          top: 10%;
          right: -30px;
          animation: float1 4s ease-in-out infinite;
        }
        
        .floating-card-2 {
          bottom: 15%;
          left: -40px;
          animation: float2 5s ease-in-out infinite;
        }
        
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }
        
        .floating-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-warm);
          border-radius: var(--radius-md);
          font-size: 1.25rem;
          color: white;
        }
        
        .floating-text {
          display: flex;
          flex-direction: column;
        }
        
        .floating-value {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-text);
        }
        
        .floating-label {
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        
        /* Scroll indicator */
        .hero-scroll {
          position: absolute;
          bottom: var(--space-4xl);
          left: var(--space-xl);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-md);
        }
        
        .hero-scroll > span {
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-text-light);
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        
        .scroll-line {
          width: 1px;
          height: 50px;
          background: var(--color-warm-gray);
          position: relative;
          overflow: hidden;
        }
        
        .scroll-line span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 25px;
          background: var(--gradient-warm);
        }
        
        .hero-curve {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          width: 100%;
          line-height: 0;
        }
        
        .hero-curve svg {
          width: 100%;
          height: auto;
        }
        
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: var(--space-3xl);
          }
          
          .hero-content {
            max-width: 100%;
          }
          
          .hero-visual {
            display: none;
          }
          
          .hero-scroll {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding-top: calc(var(--header-height) + var(--space-2xl));
            padding-bottom: var(--space-5xl);
          }
          
          .hero-cta {
            flex-direction: column;
            width: 100%;
          }
          
          .hero-cta .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
