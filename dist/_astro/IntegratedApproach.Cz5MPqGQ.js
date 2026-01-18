import{j as i,m as e}from"./proxy.tDCkox3c.js";import{r as s}from"./index.CVf8TyFT.js";import{u as l}from"./use-in-view.BGRZOW7P.js";const m=()=>{const r=s.useRef(null),t=l(r,{once:!0,margin:"-100px"}),n=[{id:"strategy",number:"01",title:"Strategy",description:"We start with clarity. Understanding your market, audience, and objectives to build a roadmap that aligns digital initiatives with business goals.",icon:"◎",color:"#FF5757"},{id:"brand",number:"02",title:"Brand",description:"Strategy informs design. We create identities and experiences that resonate emotionally while driving business outcomes.",icon:"✦",color:"#FF6B4D"},{id:"platform",number:"03",title:"Platform",description:"Design enables technology. We build fast, scalable, conversion-optimized digital products that bring your brand to life.",icon:"⬡",color:"#FF9800"},{id:"growth",number:"04",title:"Growth",description:"Platform powers performance. Data-driven campaigns that drive qualified traffic, conversions, and sustainable growth.",icon:"▲",color:"#FFB340"}];return i.jsxs("section",{className:"approach-section",ref:r,children:[i.jsxs("div",{className:"approach-container",children:[i.jsxs(e.div,{className:"approach-header",initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.6},children:[i.jsx("span",{className:"section-label",children:"The Integrated Difference"}),i.jsxs("h2",{className:"section-title",children:["Four pillars. ",i.jsx("span",{className:"text-gradient",children:"One outcome."})]}),i.jsx("p",{className:"section-description",children:"Most agencies operate in silos. We don't. Our integrated approach means every discipline works together—strategy informing brand, brand enabling platform, platform powering growth, and growth validating strategy."})]}),i.jsx("div",{className:"pillars-grid",children:n.map((a,o)=>i.jsxs(e.div,{className:"pillar-card",initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.6,delay:o*.1},children:[i.jsx("div",{className:"pillar-connector","aria-hidden":"true",children:i.jsxs("svg",{viewBox:"0 0 100 20",preserveAspectRatio:"none",children:[i.jsx("path",{d:"M0 10 Q 50 0, 100 10",stroke:"url(#gradient)",strokeWidth:"2",fill:"none"}),i.jsx("defs",{children:i.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[i.jsx("stop",{offset:"0%",stopColor:"#FF5757"}),i.jsx("stop",{offset:"100%",stopColor:"#FF9800"})]})})]})}),i.jsx("div",{className:"pillar-number",style:{color:a.color},children:a.number}),i.jsx("div",{className:"pillar-icon",style:{background:`${a.color}15`,color:a.color},children:a.icon}),i.jsx("h3",{className:"pillar-title",children:a.title}),i.jsx("p",{className:"pillar-description",children:a.description}),i.jsx("div",{className:"pillar-flow",children:o<n.length-1&&i.jsx(e.div,{className:"flow-arrow",animate:{x:[0,5,0]},transition:{duration:1.5,repeat:1/0},children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:i.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]},a.id))}),i.jsxs(e.div,{className:"approach-visual",initial:{opacity:0,scale:.95},animate:t?{opacity:1,scale:1}:{},transition:{duration:.8,delay:.4},children:[i.jsx("div",{className:"visual-ring visual-ring-outer",children:i.jsx(e.div,{className:"ring-orbit",animate:{rotate:360},transition:{duration:30,repeat:1/0,ease:"linear"},children:i.jsx("span",{className:"orbit-dot",style:{background:"#FF5757"}})})}),i.jsx("div",{className:"visual-ring visual-ring-middle",children:i.jsx(e.div,{className:"ring-orbit",animate:{rotate:-360},transition:{duration:25,repeat:1/0,ease:"linear"},children:i.jsx("span",{className:"orbit-dot",style:{background:"#FF9800"}})})}),i.jsx("div",{className:"visual-ring visual-ring-inner",children:i.jsx(e.div,{className:"ring-orbit",animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"},children:i.jsx("span",{className:"orbit-dot",style:{background:"#FF6B4D"}})})}),i.jsx("div",{className:"visual-center",children:i.jsx("span",{className:"text-gradient",children:"DX"})})]}),i.jsx(e.div,{className:"approach-quote",initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.6,delay:.6},children:i.jsxs("blockquote",{children:['"A fragmented approach costs more and delivers less.',i.jsx("span",{className:"text-gradient",children:" Integration is the competitive advantage."}),'"']})})]}),i.jsx("style",{children:`
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
      `})]})};export{m as default};
