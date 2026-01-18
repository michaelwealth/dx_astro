import{j as e,m as r}from"./proxy.tDCkox3c.js";import{r as l}from"./index.CVf8TyFT.js";import{u as g}from"./use-in-view.BGRZOW7P.js";const p=[{id:"brand-experience",title:"Brand & Experience",description:"Craft compelling brand identities, intuitive interfaces, and immersive experiences that resonate with your audience and drive meaningful connections.",features:["Brand Strategy & Identity","UI/UX Design","Experiential Marketing","Video Production"],icon:"✦",href:"/services/branding-design",gradient:"linear-gradient(135deg, #FF5757 0%, #FF8A5B 100%)",accentColor:"#FF5757"},{id:"digital-platforms",title:"Digital Platforms",description:"Build fast, scalable, and conversion-optimized digital products—from responsive websites to native mobile apps with seamless integrations.",features:["Web Development","App Development","Platform Support","AI Integration"],icon:"◈",href:"/services/web-development",gradient:"linear-gradient(135deg, #FF9800 0%, #FFB340 100%)",accentColor:"#FF9800"},{id:"growth-media",title:"Growth & Media",description:"Drive measurable growth through precision-targeted campaigns across search, social, and display—maximizing ROI at every touchpoint.",features:["Search Marketing (SEM)","Paid Social","Display & Retargeting","Media Relations"],icon:"◇",href:"/services/sem",gradient:"linear-gradient(135deg, #FF6B6B 0%, #FF9A8B 100%)",accentColor:"#FF6B6B"},{id:"strategy-advisory",title:"Strategy & Advisory",description:"Navigate digital transformation with clarity. Our strategic frameworks align initiatives with business goals for sustainable competitive advantage.",features:["Digital Strategy","Consulting & Advisory","Training Programs","Audits & Reviews"],icon:"▲",href:"/services/digital-strategy",gradient:"linear-gradient(135deg, #E68A00 0%, #FFB340 100%)",accentColor:"#E68A00"},{id:"creative-production",title:"Creative Production",description:"From concept to execution—compelling visual storytelling, motion graphics, and content that captures attention and drives action.",features:["Video Production","Motion Graphics","Photography","Content Creation"],icon:"●",href:"/services/video-production",gradient:"linear-gradient(135deg, #FF7A7A 0%, #FFB347 100%)",accentColor:"#FF7A7A"},{id:"innovation-tech",title:"Innovation & Tech",description:"Stay ahead with cutting-edge solutions—AI-powered tools, automation, and emerging technologies that transform how you operate and compete.",features:["AI Tools Integration","Automation","Tech Consulting","Emerging Tech"],icon:"⬡",href:"/services/ai-integration",gradient:"linear-gradient(135deg, #FF8C42 0%, #FFD166 100%)",accentColor:"#FF8C42"}],x=()=>{const t=l.useRef(null),a=g(t,{once:!0,margin:"-100px"}),s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},n={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.46,.45,.94]}}};return e.jsxs("section",{className:"services-section",ref:t,children:[e.jsxs("div",{className:"services-container",children:[e.jsxs(r.div,{className:"services-header",initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.6},children:[e.jsx("span",{className:"section-label",children:"Our Capabilities"}),e.jsxs("h2",{className:"section-title",children:["Integrated expertise across ",e.jsx("span",{className:"text-gradient",children:"every touchpoint"})]}),e.jsx("p",{className:"section-description",children:"Strategy informs design. Design enables growth. Growth validates strategy. This is how we work—connected, coordinated, and focused on outcomes."})]}),e.jsx(r.div,{className:"services-grid",variants:s,initial:"hidden",animate:a?"visible":"hidden",children:p.map((i,o)=>e.jsxs(r.a,{href:i.href,className:"service-card",variants:n,whileHover:{y:-8,transition:{duration:.3}},style:{"--service-gradient":i.gradient,"--service-accent":i.accentColor},children:[e.jsx("div",{className:"card-glow"}),e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"service-icon",children:e.jsx("span",{children:i.icon})}),e.jsxs("div",{className:"card-number",children:["0",o+1]})]}),e.jsx("h3",{className:"service-title",children:i.title}),e.jsx("p",{className:"service-description",children:i.description}),e.jsx("ul",{className:"service-features",children:i.features.map((c,d)=>e.jsxs("li",{children:[e.jsx("span",{className:"feature-dot"}),c]},d))}),e.jsxs("div",{className:"service-cta",children:[e.jsx("span",{children:"Explore"}),e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M4 9H14M14 9L9 4M14 9L9 14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]},i.id))}),e.jsx(r.div,{className:"services-cta",initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{},transition:{duration:.6,delay:.6},children:e.jsxs("a",{href:"/services",className:"btn btn-primary btn-lg",children:["View All Services",e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M4 10H16M16 10L10 4M16 10L10 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]}),e.jsx("style",{children:`
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
          grid-template-columns: repeat(3, 1fr);
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
          gap: var(--space-xs) var(--space-md);
          list-style: none;
          margin-bottom: var(--space-lg);
        }
        
        .service-features li {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-text-light);
          white-space: nowrap;
        }
        
        .feature-dot {
          width: 6px;
          height: 6px;
          background: var(--service-gradient);
          border-radius: 50%;
          flex-shrink: 0;
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
      `})]})};export{x as default};
