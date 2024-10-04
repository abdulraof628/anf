import{c as I,r as nt,s as zt,w as mt,g as It,o as jt,a as J,u as Yt}from"./@vue-39dc9ff3.js";const Xt=["top","right","bottom","left"],j=Math.min,S=Math.max,ct=Math.round,rt=Math.floor,Y=t=>({x:t,y:t}),qt={left:"right",right:"left",bottom:"top",top:"bottom"},Ut={start:"end",end:"start"};function gt(t,e,n){return S(t,j(e,n))}function B(t,e){return typeof t=="function"?t(e):t}function H(t){return t.split("-")[0]}function et(t){return t.split("-")[1]}function vt(t){return t==="x"?"y":"x"}function bt(t){return t==="y"?"height":"width"}function X(t){return["top","bottom"].includes(H(t))?"y":"x"}function At(t){return vt(X(t))}function Kt(t,e,n){n===void 0&&(n=!1);const o=et(t),i=At(t),r=bt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=lt(s)),[s,lt(s)]}function Gt(t){const e=lt(t);return[pt(t),e,pt(e)]}function pt(t){return t.replace(/start|end/g,e=>Ut[e])}function Jt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Qt(t,e,n,o){const i=et(t);let r=Jt(H(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(pt)))),r}function lt(t){return t.replace(/left|right|bottom|top/g,e=>qt[e])}function Zt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ft(t){return typeof t!="number"?Zt(t):{top:t,right:t,bottom:t,left:t}}function at(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function St(t,e,n){let{reference:o,floating:i}=t;const r=X(e),s=At(e),c=bt(s),u=H(e),l=r==="y",a=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let f;switch(u){case"top":f={x:a,y:o.y-i.height};break;case"bottom":f={x:a,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(et(e)){case"start":f[s]-=m*(n&&l?-1:1);break;case"end":f[s]+=m*(n&&l?-1:1);break}return f}const te=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),u=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:a,y:d}=St(l,o,u),m=o,f={},h=0;for(let g=0;g<c.length;g++){const{name:p,fn:w}=c[g],{x,y,data:b,reset:v}=await w({x:a,y:d,initialPlacement:o,placement:m,strategy:i,middlewareData:f,rects:l,platform:s,elements:{reference:t,floating:e}});a=x??a,d=y??d,f={...f,[p]:{...f[p],...b}},v&&h<=50&&(h++,typeof v=="object"&&(v.placement&&(m=v.placement),v.rects&&(l=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:a,y:d}=St(l,m,u)),g=-1)}return{x:a,y:d,placement:m,strategy:i,middlewareData:f}};async function ot(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:u}=t,{boundary:l="clippingAncestors",rootBoundary:a="viewport",elementContext:d="floating",altBoundary:m=!1,padding:f=0}=B(e,t),h=Ft(f),p=c[m?d==="floating"?"reference":"floating":d],w=at(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(p)))==null||n?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:l,rootBoundary:a,strategy:u})),x=d==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),b=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=at(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:y,strategy:u}):x);return{top:(w.top-v.top+h.top)/b.y,bottom:(v.bottom-w.bottom+h.bottom)/b.y,left:(w.left-v.left+h.left)/b.x,right:(v.right-w.right+h.right)/b.x}}const ee=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:c,middlewareData:u}=e,{element:l,padding:a=0}=B(t,e)||{};if(l==null)return{};const d=Ft(a),m={x:n,y:o},f=At(i),h=bt(f),g=await s.getDimensions(l),p=f==="y",w=p?"top":"left",x=p?"bottom":"right",y=p?"clientHeight":"clientWidth",b=r.reference[h]+r.reference[f]-m[f]-r.floating[h],v=m[f]-r.reference[f],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let A=R?R[y]:0;(!A||!await(s.isElement==null?void 0:s.isElement(R)))&&(A=c.floating[y]||r.floating[h]);const O=b/2-v/2,E=A/2-g[h]/2-1,T=j(d[w],E),$=j(d[x],E),M=T,N=A-g[h]-$,C=A/2-g[h]/2+O,G=gt(M,C,N),W=!u.arrow&&et(i)!=null&&C!==G&&r.reference[h]/2-(C<M?T:$)-g[h]/2<0,k=W?C<M?C-M:C-N:0;return{[f]:m[f]+k,data:{[f]:G,centerOffset:C-G-k,...W&&{alignmentOffset:k}},reset:W}}}),ne=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:u,elements:l}=e,{mainAxis:a=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...p}=B(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const w=H(i),x=X(c),y=H(c)===c,b=await(u.isRTL==null?void 0:u.isRTL(l.floating)),v=m||(y||!g?[lt(c)]:Gt(c)),R=h!=="none";!m&&R&&v.push(...Qt(c,g,h,b));const A=[c,...v],O=await ot(e,p),E=[];let T=((o=r.flip)==null?void 0:o.overflows)||[];if(a&&E.push(O[w]),d){const C=Kt(i,s,b);E.push(O[C[0]],O[C[1]])}if(T=[...T,{placement:i,overflows:E}],!E.every(C=>C<=0)){var $,M;const C=((($=r.flip)==null?void 0:$.index)||0)+1,G=A[C];if(G)return{data:{index:C,overflows:T},reset:{placement:G}};let W=(M=T.filter(k=>k.overflows[0]<=0).sort((k,_)=>k.overflows[1]-_.overflows[1])[0])==null?void 0:M.placement;if(!W)switch(f){case"bestFit":{var N;const k=(N=T.filter(_=>{if(R){const z=X(_.placement);return z===x||z==="y"}return!0}).map(_=>[_.placement,_.overflows.filter(z=>z>0).reduce((z,_t)=>z+_t,0)]).sort((_,z)=>_[1]-z[1])[0])==null?void 0:N[0];k&&(W=k);break}case"initialPlacement":W=c;break}if(i!==W)return{reset:{placement:W}}}return{}}}};function Dt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Tt(t){return Xt.some(e=>t[e]>=0)}const oe=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=B(t,e);switch(o){case"referenceHidden":{const r=await ot(e,{...i,elementContext:"reference"}),s=Dt(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Tt(s)}}}case"escaped":{const r=await ot(e,{...i,altBoundary:!0}),s=Dt(r,n.floating);return{data:{escapedOffsets:s,escaped:Tt(s)}}}default:return{}}}}};async function ie(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=H(n),c=et(n),u=X(n)==="y",l=["left","top"].includes(s)?-1:1,a=r&&u?-1:1,d=B(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return c&&typeof h=="number"&&(f=c==="end"?h*-1:h),u?{x:f*a,y:m*l}:{x:m*l,y:f*a}}const se=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:c}=e,u=await ie(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:s}}}}},re=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:p=>{let{x:w,y:x}=p;return{x:w,y:x}}},...u}=B(t,e),l={x:n,y:o},a=await ot(e,u),d=X(H(i)),m=vt(d);let f=l[m],h=l[d];if(r){const p=m==="y"?"top":"left",w=m==="y"?"bottom":"right",x=f+a[p],y=f-a[w];f=gt(x,f,y)}if(s){const p=d==="y"?"top":"left",w=d==="y"?"bottom":"right",x=h+a[p],y=h-a[w];h=gt(x,h,y)}const g=c.fn({...e,[m]:f,[d]:h});return{...g,data:{x:g.x-n,y:g.y-o,enabled:{[m]:r,[d]:s}}}}}},ce=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=e,{offset:c=0,mainAxis:u=!0,crossAxis:l=!0}=B(t,e),a={x:n,y:o},d=X(i),m=vt(d);let f=a[m],h=a[d];const g=B(c,e),p=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(u){const y=m==="y"?"height":"width",b=r.reference[m]-r.floating[y]+p.mainAxis,v=r.reference[m]+r.reference[y]-p.mainAxis;f<b?f=b:f>v&&(f=v)}if(l){var w,x;const y=m==="y"?"width":"height",b=["top","left"].includes(H(i)),v=r.reference[d]-r.floating[y]+(b&&((w=s.offset)==null?void 0:w[d])||0)+(b?0:p.crossAxis),R=r.reference[d]+r.reference[y]+(b?0:((x=s.offset)==null?void 0:x[d])||0)-(b?p.crossAxis:0);h<v?h=v:h>R&&(h=R)}return{[m]:f,[d]:h}}}},le=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:i,rects:r,platform:s,elements:c}=e,{apply:u=()=>{},...l}=B(t,e),a=await ot(e,l),d=H(i),m=et(i),f=X(i)==="y",{width:h,height:g}=r.floating;let p,w;d==="top"||d==="bottom"?(p=d,w=m===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(w=d,p=m==="end"?"top":"bottom");const x=g-a.top-a.bottom,y=h-a.left-a.right,b=j(g-a[p],x),v=j(h-a[w],y),R=!e.middlewareData.shift;let A=b,O=v;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(O=y),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(A=x),R&&!m){const T=S(a.left,0),$=S(a.right,0),M=S(a.top,0),N=S(a.bottom,0);f?O=h-2*(T!==0||$!==0?T+$:S(a.left,a.right)):A=g-2*(M!==0||N!==0?M+N:S(a.top,a.bottom))}await u({...e,availableWidth:O,availableHeight:A});const E=await s.getDimensions(c.floating);return h!==E.width||g!==E.height?{reset:{rects:!0}}:{}}}};function ft(){return typeof window<"u"}function K(t){return Ot(t)?(t.nodeName||"").toLowerCase():"#document"}function D(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(Ot(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ot(t){return ft()?t instanceof Node||t instanceof D(t).Node:!1}function L(t){return ft()?t instanceof Element||t instanceof D(t).Element:!1}function F(t){return ft()?t instanceof HTMLElement||t instanceof D(t).HTMLElement:!1}function Lt(t){return!ft()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof D(t).ShadowRoot}function st(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ae(t){return["table","td","th"].includes(K(t))}function ut(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Rt(t){const e=Ct(),n=L(t)?P(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function fe(t){let e=q(t);for(;F(e)&&!tt(e);){if(Rt(e))return e;if(ut(e))return null;e=q(e)}return null}function Ct(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(K(t))}function P(t){return D(t).getComputedStyle(t)}function dt(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function q(t){if(K(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Lt(t)&&t.host||V(t);return Lt(e)?e.host:e}function Vt(t){const e=q(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&st(e)?e:Vt(e)}function it(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Vt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=D(i);if(r){const c=wt(s);return e.concat(s,s.visualViewport||[],st(i)?i:[],c&&n?it(c):[])}return e.concat(i,it(i,[],n))}function wt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Wt(t){const e=P(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=ct(n)!==r||ct(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function Et(t){return L(t)?t:t.contextElement}function Z(t){const e=Et(t);if(!F(e))return Y(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Wt(e);let s=(r?ct(n.width):n.width)/o,c=(r?ct(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const ue=Y(0);function Bt(t){const e=D(t);return!Ct()||!e.visualViewport?ue:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function de(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==D(t)?!1:e}function U(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Et(t);let s=Y(1);e&&(o?L(o)&&(s=Z(o)):s=Z(t));const c=de(r,n,o)?Bt(r):Y(0);let u=(i.left+c.x)/s.x,l=(i.top+c.y)/s.y,a=i.width/s.x,d=i.height/s.y;if(r){const m=D(r),f=o&&L(o)?D(o):o;let h=m,g=wt(h);for(;g&&o&&f!==h;){const p=Z(g),w=g.getBoundingClientRect(),x=P(g),y=w.left+(g.clientLeft+parseFloat(x.paddingLeft))*p.x,b=w.top+(g.clientTop+parseFloat(x.paddingTop))*p.y;u*=p.x,l*=p.y,a*=p.x,d*=p.y,u+=y,l+=b,h=D(g),g=wt(h)}}return at({width:a,height:d,x:u,y:l})}function me(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=V(o),c=e?ut(e.floating):!1;if(o===s||c&&r)return n;let u={scrollLeft:0,scrollTop:0},l=Y(1);const a=Y(0),d=F(o);if((d||!d&&!r)&&((K(o)!=="body"||st(s))&&(u=dt(o)),F(o))){const m=U(o);l=Z(o),a.x=m.x+o.clientLeft,a.y=m.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-u.scrollLeft*l.x+a.x,y:n.y*l.y-u.scrollTop*l.y+a.y}}function he(t){return Array.from(t.getClientRects())}function xt(t,e){const n=dt(t).scrollLeft;return e?e.left+n:U(V(t)).left+n}function ge(t){const e=V(t),n=dt(t),o=t.ownerDocument.body,i=S(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=S(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+xt(t);const c=-n.scrollTop;return P(o).direction==="rtl"&&(s+=S(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function pe(t,e){const n=D(t),o=V(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,u=0;if(i){r=i.width,s=i.height;const l=Ct();(!l||l&&e==="fixed")&&(c=i.offsetLeft,u=i.offsetTop)}return{width:r,height:s,x:c,y:u}}function we(t,e){const n=U(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=F(t)?Z(t):Y(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,u=i*r.x,l=o*r.y;return{width:s,height:c,x:u,y:l}}function Pt(t,e,n){let o;if(e==="viewport")o=pe(t,n);else if(e==="document")o=ge(V(t));else if(L(e))o=we(e,n);else{const i=Bt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return at(o)}function Ht(t,e){const n=q(t);return n===e||!L(n)||tt(n)?!1:P(n).position==="fixed"||Ht(n,e)}function xe(t,e){const n=e.get(t);if(n)return n;let o=it(t,[],!1).filter(c=>L(c)&&K(c)!=="body"),i=null;const r=P(t).position==="fixed";let s=r?q(t):t;for(;L(s)&&!tt(s);){const c=P(s),u=Rt(s);!u&&c.position==="fixed"&&(i=null),(r?!u&&!i:!u&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||st(s)&&!u&&Ht(t,s))?o=o.filter(a=>a!==s):i=c,s=q(s)}return e.set(t,o),o}function ye(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?ut(e)?[]:xe(e,this._c):[].concat(n),o],c=s[0],u=s.reduce((l,a)=>{const d=Pt(e,a,i);return l.top=S(d.top,l.top),l.right=j(d.right,l.right),l.bottom=j(d.bottom,l.bottom),l.left=S(d.left,l.left),l},Pt(e,c,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function ve(t){const{width:e,height:n}=Wt(t);return{width:e,height:n}}function be(t,e,n){const o=F(e),i=V(e),r=n==="fixed",s=U(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const u=Y(0);if(o||!o&&!r)if((K(e)!=="body"||st(i))&&(c=dt(e)),o){const f=U(e,!0,r,e);u.x=f.x+e.clientLeft,u.y=f.y+e.clientTop}else i&&(u.x=xt(i));let l=0,a=0;if(i&&!o&&!r){const f=i.getBoundingClientRect();a=f.top+c.scrollTop,l=f.left+c.scrollLeft-xt(i,f)}const d=s.left+c.scrollLeft-u.x-l,m=s.top+c.scrollTop-u.y-a;return{x:d,y:m,width:s.width,height:s.height}}function ht(t){return P(t).position==="static"}function Mt(t,e){if(!F(t)||P(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return V(t)===n&&(n=n.ownerDocument.body),n}function $t(t,e){const n=D(t);if(ut(t))return n;if(!F(t)){let i=q(t);for(;i&&!tt(i);){if(L(i)&&!ht(i))return i;i=q(i)}return n}let o=Mt(t,e);for(;o&&ae(o)&&ht(o);)o=Mt(o,e);return o&&tt(o)&&ht(o)&&!Rt(o)?n:o||fe(t)||n}const Ae=async function(t){const e=this.getOffsetParent||$t,n=this.getDimensions,o=await n(t.floating);return{reference:be(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Oe(t){return P(t).direction==="rtl"}const Re={convertOffsetParentRelativeRectToViewportRelativeRect:me,getDocumentElement:V,getClippingRect:ye,getOffsetParent:$t,getElementRects:Ae,getClientRects:he,getDimensions:ve,getScale:Z,isElement:L,isRTL:Oe};function Ce(t,e){let n=null,o;const i=V(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,u){c===void 0&&(c=!1),u===void 0&&(u=1),r();const{left:l,top:a,width:d,height:m}=t.getBoundingClientRect();if(c||e(),!d||!m)return;const f=rt(a),h=rt(i.clientWidth-(l+d)),g=rt(i.clientHeight-(a+m)),p=rt(l),x={rootMargin:-f+"px "+-h+"px "+-g+"px "+-p+"px",threshold:S(0,j(1,u))||1};let y=!0;function b(v){const R=v[0].intersectionRatio;if(R!==u){if(!y)return s();R?s(!1,R):o=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{n=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,x)}n.observe(t)}return s(!0),r}function Le(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=o,l=Et(t),a=i||r?[...l?it(l):[],...it(e)]:[];a.forEach(w=>{i&&w.addEventListener("scroll",n,{passive:!0}),r&&w.addEventListener("resize",n)});const d=l&&c?Ce(l,n):null;let m=-1,f=null;s&&(f=new ResizeObserver(w=>{let[x]=w;x&&x.target===l&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var y;(y=f)==null||y.observe(e)})),n()}),l&&!u&&f.observe(l),f.observe(e));let h,g=u?U(t):null;u&&p();function p(){const w=U(t);g&&(w.x!==g.x||w.y!==g.y||w.width!==g.width||w.height!==g.height)&&n(),g=w,h=requestAnimationFrame(p)}return n(),()=>{var w;a.forEach(x=>{i&&x.removeEventListener("scroll",n),r&&x.removeEventListener("resize",n)}),d==null||d(),(w=f)==null||w.disconnect(),f=null,u&&cancelAnimationFrame(h)}}const Pe=se,Me=re,ke=ne,Fe=le,Ve=oe,Ee=ee,We=ce,Se=(t,e,n)=>{const o=new Map,i={platform:Re,...n},r={...i.platform,_c:o};return te(t,e,{...i,platform:r})};function De(t){return t!=null&&typeof t=="object"&&"$el"in t}function yt(t){if(De(t)){const e=t.$el;return Ot(e)&&K(e)==="#comment"?null:e}return t}function Q(t){return typeof t=="function"?t():Yt(t)}function Be(t){return{name:"arrow",options:t,fn(e){const n=yt(Q(t.element));return n==null?{}:Ee({element:n,padding:t.padding}).fn(e)}}}function Nt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function kt(t,e){const n=Nt(t);return Math.round(e*n)/n}function He(t,e,n){n===void 0&&(n={});const o=n.whileElementsMounted,i=I(()=>{var A;return(A=Q(n.open))!=null?A:!0}),r=I(()=>Q(n.middleware)),s=I(()=>{var A;return(A=Q(n.placement))!=null?A:"bottom"}),c=I(()=>{var A;return(A=Q(n.strategy))!=null?A:"absolute"}),u=I(()=>{var A;return(A=Q(n.transform))!=null?A:!0}),l=I(()=>yt(t.value)),a=I(()=>yt(e.value)),d=nt(0),m=nt(0),f=nt(c.value),h=nt(s.value),g=zt({}),p=nt(!1),w=I(()=>{const A={position:f.value,left:"0",top:"0"};if(!a.value)return A;const O=kt(a.value,d.value),E=kt(a.value,m.value);return u.value?{...A,transform:"translate("+O+"px, "+E+"px)",...Nt(a.value)>=1.5&&{willChange:"transform"}}:{position:f.value,left:O+"px",top:E+"px"}});let x;function y(){if(l.value==null||a.value==null)return;const A=i.value;Se(l.value,a.value,{middleware:r.value,placement:s.value,strategy:c.value}).then(O=>{d.value=O.x,m.value=O.y,f.value=O.strategy,h.value=O.placement,g.value=O.middlewareData,p.value=A!==!1})}function b(){typeof x=="function"&&(x(),x=void 0)}function v(){if(b(),o===void 0){y();return}if(l.value!=null&&a.value!=null){x=o(l.value,a.value,y);return}}function R(){i.value||(p.value=!1)}return mt([r,s,c,i],y,{flush:"sync"}),mt([l,a],v,{flush:"sync"}),mt(i,R,{flush:"sync"}),It()&&jt(b),{x:J(d),y:J(m),strategy:J(f),placement:J(h),middlewareData:J(g),isPositioned:J(p),floatingStyles:w,update:y}}export{Fe as a,Be as b,Le as c,ke as f,Ve as h,We as l,Pe as o,Me as s,He as u};
