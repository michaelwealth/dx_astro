import{f as m,c as W,r as Q,p as ee,v as te,i as X,d as re,a as ne,b as $,n as ae,s as ie,u as C,e as H,w as se,g as b,M as J,h as A,k as oe,l as E,j as i,m as p}from"./proxy.tDCkox3c.js";import{r as g}from"./index.CVf8TyFT.js";function _(e,t){let n;const r=()=>{const{currentTime:a}=t,o=(a===null?0:a.value)/100;n!==o&&e(o),n=o};return m.update(r,!0),()=>W(r)}const k=new WeakMap;let h;function le(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function ce({target:e,contentRect:t,borderBoxSize:n}){var r;(r=k.get(e))===null||r===void 0||r.forEach(a=>{a({target:e,contentSize:t,get size(){return le(e,n)}})})}function de(e){e.forEach(ce)}function ue(){typeof ResizeObserver>"u"||(h=new ResizeObserver(de))}function fe(e,t){h||ue();const n=Q(e);return n.forEach(r=>{let a=k.get(r);a||(a=new Set,k.set(r,a)),a.add(t),h?.observe(r)}),()=>{n.forEach(r=>{const a=k.get(r);a?.delete(t),a?.size||h?.unobserve(r)})}}const N=new Set;let w;function pe(){w=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};N.forEach(n=>n(t))},window.addEventListener("resize",w)}function ge(e){return N.add(e),w||pe(),()=>{N.delete(e),!N.size&&w&&(w=void 0)}}function he(e,t){return typeof e=="function"?ge(e):fe(e,t)}const me=50,M=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),xe=()=>({time:0,x:M(),y:M()}),ve={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function I(e,t,n,r){const a=n[t],{length:s,position:o}=ve[t],l=a.current,d=n.time;a.current=e[`scroll${o}`],a.scrollLength=e[`scroll${s}`]-e[`client${s}`],a.offset.length=0,a.offset[0]=0,a.offset[1]=a.scrollLength,a.progress=ee(0,a.scrollLength,a.current);const c=r-d;a.velocity=c>me?0:te(a.current-l,c)}function ye(e,t,n){I(e,"x",t,n),I(e,"y",t,n),t.time=n}function be(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const a=r.getBoundingClientRect();r=r.parentElement;const s=r.getBoundingClientRect();n.x+=a.left-s.left,n.y+=a.top-s.top}else if(r instanceof SVGGraphicsElement){const{x:a,y:s}=r.getBBox();n.x+=a,n.y+=s;let o=null,l=r.parentNode;for(;!o;)l.tagName==="svg"&&(o=l),l=r.parentNode;r=o}else break;return n}const L={start:0,center:.5,end:1};function R(e,t,n=0){let r=0;if(e in L&&(e=L[e]),typeof e=="string"){const a=parseFloat(e);e.endsWith("px")?r=a:e.endsWith("%")?e=a/100:e.endsWith("vw")?r=a/100*document.documentElement.clientWidth:e.endsWith("vh")?r=a/100*document.documentElement.clientHeight:e=a}return typeof e=="number"&&(r=t*e),n+r}const we=[0,0];function je(e,t,n,r){let a=Array.isArray(e)?e:we,s=0,o=0;return typeof e=="number"?a=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?a=e.split(" "):a=[e,L[e]?e:"0"]),s=R(a[0],n,r),o=R(a[1],t),s-o}const ke={All:[[0,0],[1,1]]},Ne={x:0,y:0};function Ee(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Se(e,t,n){const{offset:r=ke.All}=n,{target:a=e,axis:s="y"}=n,o=s==="y"?"height":"width",l=a!==e?be(a,e):Ne,d=a===e?{width:e.scrollWidth,height:e.scrollHeight}:Ee(a),c={width:e.clientWidth,height:e.clientHeight};t[s].offset.length=0;let u=!t[s].interpolate;const x=r.length;for(let f=0;f<x;f++){const j=je(r[f],c[o],d[o],l[s]);!u&&j!==t[s].interpolatorOffsets[f]&&(u=!0),t[s].offset[f]=j}u&&(t[s].interpolate=X(t[s].offset,re(r),{clamp:!1}),t[s].interpolatorOffsets=[...t[s].offset]),t[s].progress=ne(0,1,t[s].interpolate(t[s].current))}function ze(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function Le(e,t,n,r={}){return{measure:()=>ze(e,r.target,n),update:a=>{ye(e,n,a),(r.offset||r.target)&&Se(e,n,r)},notify:()=>t(n)}}const v=new WeakMap,V=new WeakMap,S=new WeakMap,F=e=>e===document.documentElement?window:e;function O(e,{container:t=document.documentElement,...n}={}){let r=S.get(t);r||(r=new Set,S.set(t,r));const a=xe(),s=Le(t,e,a,n);if(r.add(s),!v.has(t)){const l=()=>{for(const f of r)f.measure()},d=()=>{for(const f of r)f.update($.timestamp)},c=()=>{for(const f of r)f.notify()},u=()=>{m.read(l,!1,!0),m.read(d,!1,!0),m.update(c,!1,!0)};v.set(t,u);const x=F(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&V.set(t,he(t,u)),x.addEventListener("scroll",u,{passive:!0})}const o=v.get(t);return m.read(o,!1,!0),()=>{var l;W(o);const d=S.get(t);if(!d||(d.delete(s),d.size))return;const c=v.get(t);v.delete(t),c&&(F(t).removeEventListener("scroll",c),(l=V.get(t))===null||l===void 0||l(),window.removeEventListener("resize",c))}}function We({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},a=O(s=>{r.value=s[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:a}}const z=new Map;function U({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),z.has(t)||z.set(t,{});const r=z.get(t);return r[n]||(r[n]=ie()?new ScrollTimeline({source:t,axis:n}):We({source:t,axis:n})),r[n]}function Ce(e){return e.length===2}function q(e){return e&&(e.target||e.offset)}function He(e,t){return Ce(e)||q(t)?O(n=>{e(n[t.axis].progress,n)},t):_(e,U(t))}function Oe(e,t){if(e.flatten(),q(t))return e.pause(),O(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=U(t);return e.attachTimeline?e.attachTimeline(n,r=>(r.pause(),_(a=>{r.time=r.duration*a},n))):ae}}function Be(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?He(e,r):Oe(e,r)}function P(e,t){se(!!(!t||t.current))}const Te=()=>({scrollX:b(0),scrollY:b(0),scrollXProgress:b(0),scrollYProgress:b(0)});function Ae({container:e,target:t,layoutEffect:n=!0,...r}={}){const a=C(Te);return(n?H:g.useEffect)(()=>(P("target",t),P("container",e),Be((o,{x:l,y:d})=>{a.scrollX.set(l.current),a.scrollXProgress.set(l.progress),a.scrollY.set(d.current),a.scrollYProgress.set(d.progress)},{...r,container:e?.current||void 0,target:t?.current||void 0})),[e,t,JSON.stringify(r.offset)]),a}function Z(e){const t=C(()=>b(e)),{isStatic:n}=g.useContext(J);if(n){const[,r]=g.useState(e);g.useEffect(()=>t.on("change",r),[])}return t}function K(e,t){const n=Z(t()),r=()=>n.set(t());return r(),H(()=>{const a=()=>m.preRender(r,!1,!0),s=e.map(o=>o.on("change",a));return()=>{s.forEach(o=>o()),W(r)}}),n}function Y(e){return typeof e=="number"?e:parseFloat(e)}function D(e,t={}){const{isStatic:n}=g.useContext(J),r=g.useRef(null),a=Z(A(e)?Y(e.get()):e),s=g.useRef(a.get()),o=g.useRef(()=>{}),l=()=>{const c=r.current;c&&c.time===0&&c.sample($.delta),d(),r.current=oe({keyframes:[a.get(),s.current],velocity:a.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:o.current})},d=()=>{r.current&&r.current.stop()};return g.useInsertionEffect(()=>a.attach((c,u)=>n?u(c):(s.current=c,o.current=u,m.update(l),a.get()),d),[JSON.stringify(t)]),H(()=>{if(A(e))return e.on("change",c=>a.set(Y(c)))},[a]),a}const Me=e=>e&&typeof e=="object"&&e.mix,Ie=e=>Me(e)?e.mix:void 0;function Re(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],a=e[1+n],s=e[2+n],o=e[3+n],l=X(a,s,{mixer:Ie(s[0]),...o});return t?l(r):l}function Ve(e){E.current=[],e();const t=K(E.current,e);return E.current=void 0,t}function y(e,t,n,r){if(typeof e=="function")return Ve(e);const a=typeof t=="function"?t:Re(t,n,r);return Array.isArray(e)?G(e,a):G([e],([s])=>a(s))}function G(e,t){const n=C(()=>[]);return K(e,()=>{n.length=0;const r=e.length;for(let a=0;a<r;a++)n[a]=e[a].get();return t(n)})}const Ye=({title:e="Build brands. Drive growth. Exceed expectations.",subtitle:t="We're an integrated digital agency that brings together strategy, design, technology, and growth expertise to deliver measurable outcomes.",cta:n={primary:{label:"Start Your Journey",href:"/contact"},secondary:{label:"Explore Our Work",href:"/portfolio"}}})=>{const r=g.useRef(null),{scrollY:a}=Ae(),s=y(a,[0,500],[0,150]),o=y(a,[0,300],[1,0]),l=y(a,[0,300],[1,.98]),d=y(a,[0,500],[0,100]),c=y(a,[0,500],[1,1.1]),u={stiffness:100,damping:30,restDelta:.001},x=D(s,u),f=D(d,u),j=e.split(" ");return i.jsxs("section",{className:"hero",ref:r,children:[i.jsxs("div",{className:"hero-background",children:[i.jsx(p.div,{className:"hero-orb hero-orb-1",animate:{x:[0,30,0],y:[0,-20,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),i.jsx(p.div,{className:"hero-orb hero-orb-2",animate:{x:[0,-25,0],y:[0,30,0]},transition:{duration:12,repeat:1/0,ease:"easeInOut"}}),i.jsx("div",{className:"hero-grid"})]}),i.jsxs("div",{className:"hero-container",children:[i.jsxs(p.div,{className:"hero-content",style:{y:x,scale:l},children:[i.jsxs(p.div,{className:"hero-badge",initial:{opacity:0,y:20,x:-20},animate:{opacity:1,y:0,x:0},transition:{duration:.6},children:[i.jsx("span",{className:"badge-dot"}),i.jsx("span",{children:"Strategy × Brand × Platform × Growth"})]}),i.jsx("h1",{className:"hero-title",children:j.map((B,T)=>i.jsxs(p.span,{className:B.includes(".")?"hero-word-accent":"",initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1+T*.08,ease:[.25,.46,.45,.94]},children:[B," "]},T))}),i.jsx(p.p,{className:"hero-subtitle",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:t}),i.jsxs(p.div,{className:"hero-cta",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.5},children:[i.jsxs("a",{href:n.primary.href,className:"btn btn-primary btn-lg hero-btn-primary",children:[i.jsx("span",{children:n.primary.label}),i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:i.jsx("path",{d:"M4 10H16M16 10L10 4M16 10L10 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),n.secondary&&i.jsx("a",{href:n.secondary.href,className:"btn btn-secondary btn-lg",children:n.secondary.label})]})]}),i.jsx(p.div,{className:"hero-visual",style:{y:f,scale:c},initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:1,delay:.3,ease:[.25,.46,.45,.94]},children:i.jsxs("div",{className:"visual-wrapper",children:[i.jsx("div",{className:"visual-shape visual-shape-1"}),i.jsx("div",{className:"visual-shape visual-shape-2"}),i.jsx("div",{className:"visual-shape visual-shape-3"}),i.jsx("div",{className:"visual-image",children:i.jsx("img",{src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&fit=crop&q=80",alt:"Creative team collaboration"})}),i.jsxs(p.div,{className:"floating-card floating-card-1",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.8,duration:.5},children:[i.jsx("div",{className:"floating-icon",children:"✦"}),i.jsxs("div",{className:"floating-text",children:[i.jsx("span",{className:"floating-value",children:"147%"}),i.jsx("span",{className:"floating-label",children:"Avg. Growth"})]})]}),i.jsxs(p.div,{className:"floating-card floating-card-2",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:1,duration:.5},children:[i.jsx("div",{className:"floating-icon",children:"◈"}),i.jsxs("div",{className:"floating-text",children:[i.jsx("span",{className:"floating-value",children:"50+"}),i.jsx("span",{className:"floating-label",children:"Projects"})]})]})]})})]}),i.jsxs(p.div,{className:"hero-scroll",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2,duration:.6},style:{opacity:o},children:[i.jsx("span",{children:"Scroll to explore"}),i.jsx(p.div,{className:"scroll-line",animate:{y:[0,8,0]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},children:i.jsx("span",{})})]}),i.jsx("div",{className:"hero-curve",children:i.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:i.jsx("path",{d:"M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z",fill:"var(--color-cream)"})})}),i.jsx("style",{children:`
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
      `})]})};export{Ye as default};
