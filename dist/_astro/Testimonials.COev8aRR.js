import{j as e,m as r}from"./proxy.tDCkox3c.js";import{r as c}from"./index.CVf8TyFT.js";import{u as p}from"./use-in-view.BGRZOW7P.js";import{A as h}from"./index.CQ9V23e5.js";const a=[{id:"1",quote:"Digital Xceeded transformed our entire digital presence. What impressed us most was how their strategy, design, and marketing teams worked as one unit. The results speak for themselves—147% revenue growth in 12 months.",author:"Sarah Chen",role:"Chief Marketing Officer",company:"TechVenture Corp",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"},{id:"2",quote:"We've worked with agencies that excel at design or development or marketing. Digital Xceeded is the first that delivered excellence across all three—integrated seamlessly. They're partners, not vendors.",author:"Michael Torres",role:"VP of Digital",company:"Luxe Lifestyle",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"},{id:"3",quote:"Their integrated approach eliminated the finger-pointing we experienced with our previous multi-agency setup. One team, one strategy, real accountability. Our conversion rate improved 62% within the first quarter.",author:"Emily Richardson",role:"Founder & CEO",company:"GreenPath Energy",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"},{id:"4",quote:"The strategic thinking behind every recommendation was impressive. They didn't just build us a website—they built us a growth engine. Our qualified leads have tripled since launch.",author:"David Park",role:"Chief Digital Officer",company:"Scale Finance",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"}],f=()=>{const[t,o]=c.useState(0),l=c.useRef(null),n=p(l,{once:!0,margin:"-100px"}),d=()=>{o(i=>(i+1)%a.length)},m=()=>{o(i=>(i-1+a.length)%a.length)};return e.jsxs("section",{className:"testimonials-section",ref:l,children:[e.jsxs("div",{className:"testimonials-container",children:[e.jsxs(r.div,{className:"testimonials-header",initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{},transition:{duration:.6},children:[e.jsx("span",{className:"section-label",children:"Client Stories"}),e.jsxs("h2",{className:"section-title",children:["Trusted by leaders who ",e.jsx("span",{className:"text-gradient",children:"demand results"})]})]}),e.jsxs(r.div,{className:"testimonials-carousel",initial:{opacity:0},animate:n?{opacity:1}:{},transition:{duration:.6,delay:.2},children:[e.jsx("div",{className:"carousel-wrapper",children:e.jsx(h,{mode:"wait",children:e.jsxs(r.div,{className:"testimonial-card",initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},transition:{duration:.4},children:[e.jsx("div",{className:"quote-mark",children:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",children:[e.jsx("path",{d:"M14 24H6C6 15.163 13.163 8 22 8V14C16.477 14 12 18.477 12 24V40H28V24H20C20 20.686 22.686 18 26 18V8C18.268 8 12 14.268 12 22V24H14ZM42 24H34C34 15.163 41.163 8 50 8V14C44.477 14 40 18.477 40 24V40H56V24H48C48 20.686 50.686 18 54 18V8C46.268 8 40 14.268 40 22V24H42Z",fill:"url(#quote-gradient)"}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"quote-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FF5757",stopOpacity:"0.2"}),e.jsx("stop",{offset:"100%",stopColor:"#FF9800",stopOpacity:"0.2"})]})})]})}),e.jsx("blockquote",{className:"testimonial-quote",children:a[t].quote}),e.jsxs("div",{className:"testimonial-author",children:[a[t].image&&e.jsx("img",{src:a[t].image,alt:a[t].author,className:"author-image"}),e.jsxs("div",{className:"author-info",children:[e.jsx("strong",{className:"author-name",children:a[t].author}),e.jsxs("span",{className:"author-role",children:[a[t].role,", ",a[t].company]})]})]})]},t)})}),e.jsxs("div",{className:"carousel-controls",children:[e.jsx("button",{className:"carousel-btn prev",onClick:m,"aria-label":"Previous testimonial",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M15 18L9 12L15 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("div",{className:"carousel-dots",children:a.map((i,s)=>e.jsx("button",{className:`dot ${s===t?"active":""}`,onClick:()=>o(s),"aria-label":`Go to testimonial ${s+1}`},s))}),e.jsx("button",{className:"carousel-btn next",onClick:d,"aria-label":"Next testimonial",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M9 18L15 12L9 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),e.jsxs(r.div,{className:"stats-row",initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{},transition:{duration:.6,delay:.4},children:[e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-value",children:"50+"}),e.jsx("span",{className:"stat-label",children:"Clients Served"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-value",children:"4.9"}),e.jsx("span",{className:"stat-label",children:"Average Rating"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-value",children:"92%"}),e.jsx("span",{className:"stat-label",children:"Client Retention"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-value",children:"$24M+"}),e.jsx("span",{className:"stat-label",children:"Revenue Generated"})]})]})]}),e.jsx("style",{children:`
        .testimonials-section {
          padding: var(--space-5xl) 0;
          background: var(--color-text);
          color: var(--color-white);
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
      `})]})};export{f as default};
