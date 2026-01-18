import{j as e,m as r}from"./proxy.tDCkox3c.js";import{r as l}from"./index.CVf8TyFT.js";import{u as p}from"./use-in-view.BGRZOW7P.js";import{A as g}from"./index.CQ9V23e5.js";const h=[{id:"project-1",title:"Complete Digital Transformation",client:"TechVenture Corp",category:"Strategy & Platform",tags:["Digital Strategy","Web Development","Brand Identity"],image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop",description:"End-to-end digital transformation including brand repositioning, platform development, and growth strategy.",metrics:[{label:"Revenue Growth",value:"+147%"},{label:"User Engagement",value:"+89%"}],href:"/portfolio/techventure",color:"#FF5757",size:"large"},{id:"project-2",title:"E-commerce Platform Redesign",client:"Luxe Lifestyle",category:"Platform & Growth",tags:["UI/UX Design","E-commerce","Paid Media"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",description:"Complete redesign of luxury e-commerce experience with integrated marketing strategy.",metrics:[{label:"Conversion Rate",value:"+62%"},{label:"AOV Increase",value:"+34%"}],href:"/portfolio/luxe-lifestyle",color:"#FF9800",size:"small"},{id:"project-3",title:"Brand Launch Campaign",client:"GreenPath Energy",category:"Brand & Media",tags:["Branding","Video Production","Paid Social"],image:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=900&fit=crop",description:"Full brand development and launch campaign for sustainable energy startup.",metrics:[{label:"Brand Awareness",value:"+312%"},{label:"Lead Generation",value:"2.4K+"}],href:"/portfolio/greenpath",color:"#FF6B4D",size:"medium"},{id:"project-4",title:"Mobile App Development",client:"FitLife Pro",category:"Digital Platform",tags:["App Development","UI/UX","Backend"],image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",description:"Native iOS and Android fitness app with AI-powered workout recommendations.",metrics:[{label:"App Downloads",value:"500K+"},{label:"User Retention",value:"78%"}],href:"/portfolio/fitlife",color:"#E68A00",size:"small"},{id:"project-5",title:"Performance Marketing",client:"Scale Finance",category:"Growth & Media",tags:["SEM","Paid Social","Analytics"],image:"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=1100&fit=crop",description:"Full-funnel performance marketing strategy for fintech client.",metrics:[{label:"ROAS",value:"4.2x"},{label:"CAC Reduction",value:"-38%"}],href:"/portfolio/scale-finance",color:"#FF7A7A",size:"large"},{id:"project-6",title:"Corporate Website",client:"Nexus Innovations",category:"Platform & Brand",tags:["Web Development","Content Strategy","SEO"],image:"https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=700&fit=crop",description:"Enterprise website with advanced CMS and multi-language support.",metrics:[{label:"Organic Traffic",value:"+215%"},{label:"Lead Quality",value:"+67%"}],href:"/portfolio/nexus",color:"#FFB340",size:"medium"}],b=()=>{const n=l.useRef(null),o=p(n,{once:!0,margin:"-100px"}),[c,i]=l.useState(null),d={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},m={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.46,.45,.94]}}};return e.jsxs("section",{className:"portfolio-section",ref:n,"aria-labelledby":"portfolio-heading",children:[e.jsxs("div",{className:"portfolio-container",children:[e.jsxs(r.header,{className:"portfolio-header",initial:{opacity:0,y:30},animate:o?{opacity:1,y:0}:{},transition:{duration:.6},children:[e.jsx("span",{className:"section-label","aria-hidden":"true",children:"Selected Work"}),e.jsxs("h2",{id:"portfolio-heading",className:"section-title",children:["Results that speak ",e.jsx("span",{className:"text-gradient",children:"louder"})]}),e.jsx("p",{className:"section-description",children:"Real outcomes from our integrated approach. Every project demonstrates how strategy, brand, platform, and growth work together."})]}),e.jsx(r.div,{className:"portfolio-masonry",variants:d,initial:"hidden",animate:o?"visible":"hidden",role:"list","aria-label":"Portfolio projects",children:h.map(a=>e.jsxs(r.a,{href:a.href,className:`masonry-card masonry-${a.size}`,variants:m,onMouseEnter:()=>i(a.id),onMouseLeave:()=>i(null),onFocus:()=>i(a.id),onBlur:()=>i(null),style:{"--card-color":a.color},role:"listitem","aria-label":`${a.title} - ${a.client}. ${a.description}`,children:[e.jsxs("div",{className:"card-image",children:[e.jsx("img",{src:a.image,alt:"",loading:"lazy","aria-hidden":"true"}),e.jsx("div",{className:"card-overlay","aria-hidden":"true"})]}),e.jsxs("div",{className:"card-title-bar",children:[e.jsx("span",{className:"card-client",children:a.client}),e.jsx("h3",{className:"card-title",children:a.title})]}),e.jsx(g,{children:c===a.id&&e.jsx(r.div,{className:"card-hover-content",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},"aria-hidden":"true",children:e.jsxs("div",{className:"hover-inner",children:[e.jsx("span",{className:"hover-category",children:a.category}),e.jsx("p",{className:"hover-description",children:a.description}),a.metrics&&e.jsx("div",{className:"hover-metrics",children:a.metrics.map((t,s)=>e.jsxs("div",{className:"metric",children:[e.jsx("span",{className:"metric-value",children:t.value}),e.jsx("span",{className:"metric-label",children:t.label})]},s))}),e.jsx("div",{className:"hover-tags",children:a.tags.map((t,s)=>e.jsx("span",{className:"tag",children:t},s))}),e.jsxs("div",{className:"hover-cta",children:[e.jsx("span",{children:"View Case Study"}),e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M4 10H16M16 10L10 4M16 10L10 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})})]},a.id))}),e.jsx(r.div,{className:"portfolio-cta",initial:{opacity:0,y:20},animate:o?{opacity:1,y:0}:{},transition:{duration:.6,delay:.5},children:e.jsxs("a",{href:"/portfolio",className:"btn btn-secondary btn-lg",children:[e.jsx("span",{children:"Explore All Projects"}),e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M4 10H16M16 10L10 4M16 10L10 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]}),e.jsx("style",{children:`
        .portfolio-section {
          padding: var(--space-5xl) 0;
          background: var(--color-white);
          position: relative;
        }
        
        .portfolio-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--space-xl);
        }
        
        .portfolio-header {
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
        
        .portfolio-masonry {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 10px;
          gap: var(--space-md);
        }
        
        .masonry-card {
          position: relative;
          display: block;
          border-radius: var(--radius-xl);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          transform: translateZ(0);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .masonry-card:hover,
        .masonry-card:focus-visible {
          transform: scale(1.02);
          z-index: 2;
        }
        
        .masonry-card:focus-visible {
          outline: 3px solid var(--color-primary);
          outline-offset: 4px;
        }
        
        /* Grid span heights for masonry effect */
        .masonry-small { grid-row: span 28; }
        .masonry-medium { grid-row: span 38; }
        .masonry-large { grid-row: span 48; }
        
        .card-image {
          position: absolute;
          inset: 0;
        }
        
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .masonry-card:hover .card-image img,
        .masonry-card:focus-visible .card-image img {
          transform: scale(1.08);
        }
        
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, transparent 30%, rgba(0, 0, 0, 0.7) 100%);
          transition: opacity 0.4s ease;
        }
        
        .masonry-card:hover .card-overlay,
        .masonry-card:focus-visible .card-overlay {
          background: rgba(0, 0, 0, 0.75);
        }
        
        .card-title-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: var(--space-xl);
          z-index: 2;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .masonry-card:hover .card-title-bar,
        .masonry-card:focus-visible .card-title-bar {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .card-client {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--card-color);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-xs);
        }
        
        .card-title {
          font-size: 1.375rem;
          font-weight: 700;
          color: white;
          line-height: 1.25;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        .card-hover-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-xl);
          z-index: 3;
        }
        
        .hover-inner {
          text-align: center;
          max-width: 100%;
        }
        
        .hover-category {
          display: inline-block;
          padding: var(--space-xs) var(--space-md);
          background: var(--card-color);
          border-radius: var(--radius-full);
          font-size: 0.6875rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-md);
        }
        
        .hover-description {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: var(--space-lg);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .hover-metrics {
          display: flex;
          justify-content: center;
          gap: var(--space-xl);
          margin-bottom: var(--space-lg);
        }
        
        .metric {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        
        .metric-value {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 800;
          color: white;
          line-height: 1;
        }
        
        .metric-label {
          font-size: 0.6875rem;
          color: rgba(255, 255, 255, 0.75);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .hover-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-xs);
          margin-bottom: var(--space-lg);
        }
        
        .tag {
          padding: var(--space-xs) var(--space-sm);
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: var(--radius-sm);
          font-size: 0.6875rem;
          font-weight: 500;
          color: white;
        }
        
        .hover-cta {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-sm) var(--space-lg);
          background: white;
          border-radius: var(--radius-full);
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text);
          transition: all 0.3s ease;
        }
        
        .hover-cta:hover {
          background: var(--card-color);
          color: white;
        }
        
        .hover-cta svg {
          transition: transform 0.3s ease;
        }
        
        .masonry-card:hover .hover-cta svg {
          transform: translateX(4px);
        }
        
        .portfolio-cta {
          text-align: center;
          margin-top: var(--space-4xl);
        }
        
        .portfolio-cta .btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
        }
        
        .portfolio-cta .btn svg {
          transition: transform 0.3s ease;
        }
        
        .portfolio-cta .btn:hover svg {
          transform: translateX(4px);
        }
        
        @media (max-width: 1024px) {
          .portfolio-masonry {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 8px;
          }
          
          .masonry-small { grid-row: span 32; }
          .masonry-medium { grid-row: span 42; }
          .masonry-large { grid-row: span 52; }
        }
        
        @media (max-width: 640px) {
          .portfolio-masonry {
            grid-template-columns: 1fr;
            grid-auto-rows: 6px;
          }
          
          .masonry-small,
          .masonry-medium,
          .masonry-large { 
            grid-row: span 50; 
          }
          
          .hover-metrics {
            gap: var(--space-lg);
          }
          
          .metric-value {
            font-size: 1.5rem;
          }
        }
      `})]})};export{b as default};
