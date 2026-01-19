import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  logo?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Digital Xceeded transformed our entire digital presence. What impressed us most was how their strategy, design, and marketing teams worked as one unit. The results speak for themselves—147% revenue growth in 12 months.",
    author: "Sarah Chen",
    role: "Chief Marketing Officer",
    company: "TechVenture Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: '2',
    quote: "We've worked with agencies that excel at design or development or marketing. Digital Xceeded is the first that delivered excellence across all three—integrated seamlessly. They're partners, not vendors.",
    author: "Michael Torres",
    role: "VP of Digital",
    company: "Luxe Lifestyle",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    id: '3',
    quote: "Their integrated approach eliminated the finger-pointing we experienced with our previous multi-agency setup. One team, one strategy, real accountability. Our conversion rate improved 62% within the first quarter.",
    author: "Emily Richardson",
    role: "Founder & CEO",
    company: "GreenPath Energy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
  },
  {
    id: '4',
    quote: "The strategic thinking behind every recommendation was impressive. They didn't just build us a website—they built us a growth engine. Our qualified leads have tripled since launch.",
    author: "David Park",
    role: "Chief Digital Officer",
    company: "Scale Finance",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">
            Trusted by leaders who <span className="text-gradient">demand results</span>
          </h2>
        </motion.div>

        <motion.div 
          className="testimonials-carousel"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="carousel-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="quote-mark">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M14 24H6C6 15.163 13.163 8 22 8V14C16.477 14 12 18.477 12 24V40H28V24H20C20 20.686 22.686 18 26 18V8C18.268 8 12 14.268 12 22V24H14ZM42 24H34C34 15.163 41.163 8 50 8V14C44.477 14 40 18.477 40 24V40H56V24H48C48 20.686 50.686 18 54 18V8C46.268 8 40 14.268 40 22V24H42Z" fill="url(#quote-gradient)"/>
                    <defs>
                      <linearGradient id="quote-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF5757" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#FF9800" stopOpacity="0.2"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <blockquote className="testimonial-quote">
                  {testimonials[activeIndex].quote}
                </blockquote>
                
                <div className="testimonial-author">
                  {testimonials[activeIndex].image && (
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].author}
                      className="author-image"
                    />
                  )}
                  <div className="author-info">
                    <strong className="author-name">{testimonials[activeIndex].author}</strong>
                    <span className="author-role">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="carousel-controls">
            <button 
              className="carousel-btn prev" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="carousel-btn next" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div 
          className="stats-row"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stat">
            <span className="stat-value">50+</span>
            <span className="stat-label">Clients Served</span>
          </div>
          <div className="stat">
            <span className="stat-value">4.9</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat">
            <span className="stat-value">92%</span>
            <span className="stat-label">Client Retention</span>
          </div>
          <div className="stat">
            <span className="stat-value">$24M+</span>
            <span className="stat-label">Revenue Generated</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .testimonials-section {
          padding: var(--space-5xl) 0;
          background: #1a1a1a;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }
        
        .testimonials-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 87, 87, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .testimonials-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--space-xl);
          position: relative;
        }
        
        .testimonials-header {
          text-align: center;
          margin-bottom: var(--space-4xl);
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
        }
        
        .testimonials-carousel {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .carousel-wrapper {
          min-height: 350px;
          display: flex;
          align-items: center;
        }
        
        .testimonial-card {
          text-align: center;
          padding: var(--space-2xl);
        }
        
        .quote-mark {
          margin-bottom: var(--space-xl);
        }
        
        .testimonial-quote {
          font-family: var(--font-display);
          font-size: clamp(1.25rem, 2.5vw, 1.5rem);
          line-height: 1.6;
          margin-bottom: var(--space-2xl);
          color: rgba(255, 255, 255, 0.9);
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-md);
        }
        
        .author-image {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        .author-info {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        
        .author-name {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
        }
        
        .author-role {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
        }
        
        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-xl);
          margin-top: var(--space-xl);
        }
        
        .carousel-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--color-white);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        
        .carousel-btn:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
        }
        
        .carousel-dots {
          display: flex;
          gap: var(--space-sm);
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        
        .dot.active {
          background: var(--color-primary);
          transform: scale(1.2);
        }
        
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-xl);
          margin-top: var(--space-4xl);
          padding-top: var(--space-4xl);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-value {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          background: var(--gradient-warm);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--space-sm);
        }
        
        .stat-label {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.6);
        }
        
        @media (max-width: 768px) {
          .carousel-wrapper {
            min-height: auto;
          }
          
          .testimonial-card {
            padding: var(--space-lg);
          }
          
          .stats-row {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-lg);
          }
          
          .testimonial-author {
            flex-direction: column;
            text-align: center;
          }
          
          .author-info {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
