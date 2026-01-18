import{j as e,m}from"./proxy.tDCkox3c.js";import{r as t}from"./index.CVf8TyFT.js";import{u as v}from"./use-in-view.BGRZOW7P.js";const y=()=>{const i=t.useRef(null),n=v(i,{once:!0,margin:"-100px"}),[a,p]=t.useState({name:"",email:"",company:"",budget:"",service:"",message:""}),[c,l]=t.useState(!1),[h,d]=t.useState(!1),s=r=>{p(o=>({...o,[r.target.name]:r.target.value}))},u=async r=>{r.preventDefault(),l(!0),await new Promise(o=>setTimeout(o,1500)),l(!1),d(!0)},x=["Brand & Design","UI/UX Design","Web Development","App Development","Digital Strategy","Paid Media & Marketing","Full Integrated Project","Other"],g=["Under $25,000","$25,000 - $50,000","$50,000 - $100,000","$100,000 - $250,000","$250,000+"];return e.jsxs("section",{className:"contact-section",ref:i,children:[e.jsx("div",{className:"contact-container",children:e.jsxs("div",{className:"contact-grid",children:[e.jsxs(m.div,{className:"contact-info",initial:{opacity:0,x:-30},animate:n?{opacity:1,x:0}:{},transition:{duration:.6},children:[e.jsx("span",{className:"section-label",children:"Get in Touch"}),e.jsxs("h2",{className:"section-title",children:["Let's start a ",e.jsx("span",{className:"text-gradient",children:"conversation"})]}),e.jsx("p",{className:"section-description",children:"Every great project starts with a conversation. Tell us about your challenges, and let's explore how our integrated approach can help you achieve your goals."}),e.jsxs("div",{className:"contact-details",children:[e.jsxs("div",{className:"contact-item",children:[e.jsx("div",{className:"contact-icon",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Email"}),e.jsx("a",{href:"mailto:hello@digitalxceeded.com",children:"hello@digitalxceeded.com"})]})]}),e.jsxs("div",{className:"contact-item",children:[e.jsx("div",{className:"contact-icon",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.271 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Phone"}),e.jsx("a",{href:"tel:+1234567890",children:"+1 (234) 567-890"})]})]}),e.jsxs("div",{className:"contact-item",children:[e.jsx("div",{className:"contact-icon",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Location"}),e.jsx("span",{children:"Global • Remote-First"})]})]})]}),e.jsx("div",{className:"response-time",children:e.jsxs("div",{className:"response-badge",children:[e.jsx("span",{className:"pulse-dot"}),e.jsx("span",{children:"Typical response: 24 hours"})]})})]}),e.jsx(m.div,{className:"contact-form-wrapper",initial:{opacity:0,x:30},animate:n?{opacity:1,x:0}:{},transition:{duration:.6,delay:.2},children:h?e.jsxs("div",{className:"form-success",children:[e.jsx("div",{className:"success-icon",children:e.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",children:[e.jsx("circle",{cx:"32",cy:"32",r:"30",stroke:"url(#success-gradient)",strokeWidth:"4"}),e.jsx("path",{d:"M20 32L28 40L44 24",stroke:"url(#success-gradient)",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"success-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FF5757"}),e.jsx("stop",{offset:"100%",stopColor:"#FF9800"})]})})]})}),e.jsx("h3",{children:"Message Sent!"}),e.jsx("p",{children:"Thank you for reaching out. We'll be in touch within 24 hours to discuss your project."}),e.jsx("button",{className:"btn btn-secondary",onClick:()=>d(!1),children:"Send Another Message"})]}):e.jsxs("form",{onSubmit:u,className:"contact-form",children:[e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"name",children:"Name *"}),e.jsx("input",{type:"text",id:"name",name:"name",value:a.name,onChange:s,required:!0,placeholder:"Your name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Email *"}),e.jsx("input",{type:"email",id:"email",name:"email",value:a.email,onChange:s,required:!0,placeholder:"your@email.com"})]})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"company",children:"Company"}),e.jsx("input",{type:"text",id:"company",name:"company",value:a.company,onChange:s,placeholder:"Your company"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"budget",children:"Budget Range"}),e.jsxs("select",{id:"budget",name:"budget",value:a.budget,onChange:s,children:[e.jsx("option",{value:"",children:"Select budget"}),g.map(r=>e.jsx("option",{value:r,children:r},r))]})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"service",children:"What can we help with?"}),e.jsxs("select",{id:"service",name:"service",value:a.service,onChange:s,children:[e.jsx("option",{value:"",children:"Select a service"}),x.map(r=>e.jsx("option",{value:r,children:r},r))]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"message",children:"Tell us about your project *"}),e.jsx("textarea",{id:"message",name:"message",value:a.message,onChange:s,required:!0,rows:5,placeholder:"Describe your project, goals, and timeline..."})]}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-lg submit-btn",disabled:c,children:c?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"}),"Sending..."]}):e.jsxs(e.Fragment,{children:["Send Message",e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M4 10H16M16 10L10 4M16 10L10 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})})]})}),e.jsx("style",{children:`
        .contact-section {
          padding: var(--space-5xl) 0;
          background: var(--color-cream);
        }
        
        .contact-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--space-xl);
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: var(--space-4xl);
          align-items: start;
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
          margin-bottom: var(--space-2xl);
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
          margin-bottom: var(--space-2xl);
        }
        
        .contact-item {
          display: flex;
          align-items: start;
          gap: var(--space-md);
        }
        
        .contact-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-warm-soft);
          border-radius: var(--radius-lg);
          color: var(--color-primary);
          flex-shrink: 0;
        }
        
        .contact-item strong {
          display: block;
          font-family: var(--font-display);
          font-size: 0.875rem;
          margin-bottom: var(--space-xs);
        }
        
        .contact-item a,
        .contact-item span {
          color: var(--color-text-light);
          font-size: 0.9375rem;
        }
        
        .contact-item a:hover {
          color: var(--color-primary);
        }
        
        .response-time {
          padding-top: var(--space-lg);
          border-top: 1px solid var(--color-soft-gray);
        }
        
        .response-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          font-size: 0.875rem;
          color: var(--color-text-light);
        }
        
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #22C55E;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        
        .contact-form-wrapper {
          background: var(--color-white);
          border-radius: var(--radius-2xl);
          padding: var(--space-2xl);
          box-shadow: var(--shadow-lg);
        }
        
        .form-success {
          text-align: center;
          padding: var(--space-3xl) var(--space-xl);
        }
        
        .success-icon {
          margin-bottom: var(--space-xl);
        }
        
        .form-success h3 {
          font-size: 1.5rem;
          margin-bottom: var(--space-md);
        }
        
        .form-success p {
          color: var(--color-text-light);
          margin-bottom: var(--space-xl);
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-lg);
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }
        
        .form-group label {
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: var(--space-md) var(--space-lg);
          background: var(--color-cream);
          border: 1px solid var(--color-soft-gray);
          border-radius: var(--radius-lg);
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text);
          transition: all var(--transition-fast);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--color-medium-gray);
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(255, 87, 87, 0.1);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          width: 100%;
          margin-top: var(--space-md);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top-color: currentColor;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .contact-form-wrapper {
            padding: var(--space-xl);
          }
        }
      `})]})};export{y as default};
