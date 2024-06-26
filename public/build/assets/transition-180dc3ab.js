import{A,c as Ne,w as ze,i as Z,S as V,o as E,u as Y,P as de,N as W,T as Ke,t as Qe,I as ee,l as xe,a as P,b as Je,d as we,e as Xe,s as Ze,f as U,g as et,h as tt}from"./keyboard-462b33c7.js";import{_ as O,$ as k,z as v,B as f,A as L,a0 as C,E as T,F as nt,N as z,a1 as lt,a2 as M,a3 as R,M as at,J as rt,V as ot,O as it,n as ut}from"./app-b0ada57f.js";var ce=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ce||{});let Ee=O({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var l;let{features:a,...r}=e,o={"aria-hidden":(a&2)===2?!0:(l=r["aria-hidden"])!=null?l:void 0,hidden:(a&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(a&4)===4&&(a&2)!==2&&{display:"none"}}};return A({ourProps:o,theirProps:r,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function st(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let I=[];st(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&I[0]!==t.target&&(I.unshift(t.target),I=I.filter(n=>n!=null&&n.isConnected),I.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Pe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function te(){let e=[],t={addEventListener(n,l,a,r){return n.addEventListener(l,a,r),t.add(()=>n.removeEventListener(l,a,r))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},microTask(...n){let l={current:!0};return Pe(()=>{l.current&&n[0]()}),t.add(()=>{l.current=!1})},style(n,l,a){let r=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:a}),this.add(()=>{Object.assign(n.style,{[l]:r})})},group(n){let l=te();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let a of e.splice(l,1))a()}},dispose(){for(let n of e.splice(0))n()}};return t}function je(e,t,n,l){Ne.isServer||k(a=>{e=e??window,e.addEventListener(t,n,l),a(()=>e.removeEventListener(t,n,l))})}var X=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(X||{});function dt(){let e=v(0);return ze("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function We(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=E(n);l instanceof HTMLElement&&t.add(l)}return t}var Ie=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ie||{});let Q=Object.assign(O({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let a=v(null);l({el:a,$el:a});let r=f(()=>Z(a)),o=v(!1);L(()=>o.value=!0),C(()=>o.value=!1),ft({ownerDocument:r},f(()=>o.value&&!!(e.features&16)));let i=vt({ownerDocument:r,container:a,initialFocus:f(()=>e.initialFocus)},f(()=>o.value&&!!(e.features&2)));pt({ownerDocument:r,container:a,containers:e.containers,previousActiveElement:i},f(()=>o.value&&!!(e.features&8)));let u=dt();function d(g){let m=E(a);m&&(w=>w())(()=>{Y(u.value,{[X.Forwards]:()=>{de(m,W.First,{skipElements:[g.relatedTarget]})},[X.Backwards]:()=>{de(m,W.Last,{skipElements:[g.relatedTarget]})}})})}let s=v(!1);function b(g){g.key==="Tab"&&(s.value=!0,requestAnimationFrame(()=>{s.value=!1}))}function c(g){if(!o.value)return;let m=We(e.containers);E(a)instanceof HTMLElement&&m.add(E(a));let w=g.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(Ue(m,w)||(s.value?de(E(a),Y(u.value,{[X.Forwards]:()=>W.Next,[X.Backwards]:()=>W.Previous})|W.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&V(g.target)))}return()=>{let g={},m={ref:a,onKeydown:b,onFocusout:c},{features:w,initialFocus:y,containers:N,...S}=e;return T(nt,[!!(w&4)&&T(Ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:ce.Focusable}),A({ourProps:m,theirProps:{...t,...S},slot:g,attrs:t,slots:n,name:"FocusTrap"}),!!(w&4)&&T(Ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:ce.Focusable})])}}}),{features:Ie});function ct(e){let t=v(I.slice());return z([e],([n],[l])=>{l===!0&&n===!1?Pe(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=I.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function ft({ownerDocument:e},t){let n=ct(t);L(()=>{k(()=>{var l,a;t.value||((l=e.value)==null?void 0:l.activeElement)===((a=e.value)==null?void 0:a.body)&&V(n())},{flush:"post"})}),C(()=>{t.value&&V(n())})}function vt({ownerDocument:e,container:t,initialFocus:n},l){let a=v(null),r=v(!1);return L(()=>r.value=!0),C(()=>r.value=!1),L(()=>{z([t,n,l],(o,i)=>{if(o.every((d,s)=>(i==null?void 0:i[s])===d)||!l.value)return;let u=E(t);u&&Pe(()=>{var d,s;if(!r.value)return;let b=E(n),c=(d=e.value)==null?void 0:d.activeElement;if(b){if(b===c){a.value=c;return}}else if(u.contains(c)){a.value=c;return}b?V(b):de(u,W.First|W.NoScroll)===Ke.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.value=(s=e.value)==null?void 0:s.activeElement})},{immediate:!0,flush:"post"})}),a}function pt({ownerDocument:e,container:t,containers:n,previousActiveElement:l},a){var r;je((r=e.value)==null?void 0:r.defaultView,"focus",o=>{if(!a.value)return;let i=We(n);E(t)instanceof HTMLElement&&i.add(E(t));let u=l.value;if(!u)return;let d=o.target;d&&d instanceof HTMLElement?Ue(i,d)?(l.value=d,V(d)):(o.preventDefault(),o.stopPropagation(),V(u)):V(l.value)},!0)}function Ue(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function mt(e){let t=lt(e.getSnapshot());return C(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function gt(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(a){return l.add(a),()=>l.delete(a)},dispatch(a,...r){let o=t[a].call(n,...r);o&&(n=o,l.forEach(i=>i()))}}}function ht(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,a=l.clientWidth-l.offsetWidth,r=e-a;n.style(l,"paddingRight",`${r}px`)}}}function yt(){return Qe()?{before({doc:e,d:t,meta:n}){function l(a){return n.containers.flatMap(r=>r()).some(r=>r.contains(a))}t.microTask(()=>{var a;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=te();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let r=(a=window.scrollY)!=null?a:window.pageYOffset,o=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let u=i.target.closest("a");if(!u)return;let{hash:d}=new URL(u.href),s=e.querySelector(d);s&&!l(s)&&(o=s)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(l(i.target)){let u=i.target;for(;u.parentElement&&l(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement)if(l(i.target)){let u=i.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()},{passive:!1}),t.add(()=>{var i;let u=(i=window.scrollY)!=null?i:window.pageYOffset;r!==u&&window.scrollTo(0,r),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function bt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function wt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let q=gt(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:te(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:wt(n)},a=[yt(),ht(),bt()];a.forEach(({before:r})=>r==null?void 0:r(l)),a.forEach(({after:r})=>r==null?void 0:r(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});q.subscribe(()=>{let e=q.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!l||!a&&l)&&q.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&q.dispatch("TEARDOWN",n)}});function Et(e,t,n){let l=mt(q),a=f(()=>{let r=e.value?l.value.get(e.value):void 0;return r?r.count>0:!1});return z([e,t],([r,o],[i],u)=>{if(!r||!o)return;q.dispatch("PUSH",r,n);let d=!1;u(()=>{d||(q.dispatch("POP",i??r,n),d=!0)})},{immediate:!0}),a}let ye=new Map,J=new Map;function Be(e,t=v(!0)){k(n=>{var l;if(!t.value)return;let a=E(e);if(!a)return;n(function(){var o;if(!a)return;let i=(o=J.get(a))!=null?o:1;if(i===1?J.delete(a):J.set(a,i-1),i!==1)return;let u=ye.get(a);u&&(u["aria-hidden"]===null?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",u["aria-hidden"]),a.inert=u.inert,ye.delete(a))});let r=(l=J.get(a))!=null?l:0;J.set(a,r+1),r===0&&(ye.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),a.setAttribute("aria-hidden","true"),a.inert=!0)})}function Tt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=v(null),a=Z(l);function r(){var o,i,u;let d=[];for(let s of e)s!==null&&(s instanceof HTMLElement?d.push(s):"value"in s&&s.value instanceof HTMLElement&&d.push(s.value));if(t!=null&&t.value)for(let s of t.value)d.push(s);for(let s of(o=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?o:[])s!==document.body&&s!==document.head&&s instanceof HTMLElement&&s.id!=="headlessui-portal-root"&&(s.contains(E(l))||s.contains((u=(i=E(l))==null?void 0:i.getRootNode())==null?void 0:u.host)||d.some(b=>s.contains(b))||d.push(s));return d}return{resolveContainers:r,contains(o){return r().some(i=>i.contains(o))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:T(Ee,{features:ce.Hidden,ref:l})}}}let qe=Symbol("ForcePortalRootContext");function St(){return R(qe,!1)}let He=O({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return M(qe,e.force),()=>{let{force:l,...a}=e;return A({theirProps:a,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}}),Ve=Symbol("StackContext");var Te=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Te||{});function Lt(){return R(Ve,()=>{})}function $t({type:e,enabled:t,element:n,onUpdate:l}){let a=Lt();function r(...o){l==null||l(...o),a(...o)}L(()=>{z(t,(o,i)=>{o?r(0,e,n):i===!0&&r(1,e,n)},{immediate:!0,flush:"sync"})}),C(()=>{t.value&&r(1,e,n)}),M(Ve,r)}let Ft=Symbol("DescriptionContext");function Pt({slot:e=v({}),name:t="Description",props:n={}}={}){let l=v([]);function a(r){return l.value.push(r),()=>{let o=l.value.indexOf(r);o!==-1&&l.value.splice(o,1)}}return M(Ft,{register:a,slot:e,name:t,props:n}),f(()=>l.value.length>0?l.value.join(" "):void 0)}function Ot(e){let t=Z(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}const Se=new WeakMap;function At(e){var t;return(t=Se.get(e))!=null?t:0}function ke(e,t){let n=t(At(e));return n<=0?Se.delete(e):Se.set(e,n),n}let Dt=O({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=v(null),a=f(()=>Z(l)),r=St(),o=R(Ye,null),i=v(r===!0||o==null?Ot(l.value):o.resolveTarget());i.value&&ke(i.value,c=>c+1);let u=v(!1);L(()=>{u.value=!0}),k(()=>{r||o!=null&&(i.value=o.resolveTarget())});let d=R(Le,null),s=!1,b=at();return z(l,()=>{if(s||!d)return;let c=E(l);c&&(C(d.register(c),b),s=!0)}),C(()=>{var c,g;let m=(c=a.value)==null?void 0:c.getElementById("headlessui-portal-root");!m||i.value!==m||ke(i.value,w=>w-1)||i.value.children.length>0||(g=i.value.parentElement)==null||g.removeChild(i.value)}),()=>{if(!u.value||i.value===null)return null;let c={ref:l,"data-headlessui-portal":""};return T(rt,{to:i.value},A({ourProps:c,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Le=Symbol("PortalParentContext");function Ct(){let e=R(Le,null),t=v([]);function n(r){return t.value.push(r),e&&e.register(r),()=>l(r)}function l(r){let o=t.value.indexOf(r);o!==-1&&t.value.splice(o,1),e&&e.unregister(r)}let a={register:n,unregister:l,portals:t};return[t,O({name:"PortalWrapper",setup(r,{slots:o}){return M(Le,a),()=>{var i;return(i=o.default)==null?void 0:i.call(o)}}})]}let Ye=Symbol("PortalGroupContext"),Rt=O({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=ot({resolveTarget(){return e.target}});return M(Ye,l),()=>{let{target:a,...r}=e;return A({theirProps:r,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}});var Bt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Bt||{});let $e=Symbol("DialogContext");function fe(e){let t=R($e,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,fe),n}return t}let ue="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Yt=O({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ue},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){var r,o;let i=(r=e.id)!=null?r:`headlessui-dialog-${ee()}`,u=v(!1);L(()=>{u.value=!0});let d=!1,s=f(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(d||(d=!0,console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),b=v(0),c=xe(),g=f(()=>e.open===ue&&c!==null?(c.value&P.Open)===P.Open:e.open),m=v(null),w=f(()=>Z(m));if(a({el:m,$el:m}),!(e.open!==ue||c!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof g.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${g.value===ue?void 0:e.open}`);let y=f(()=>u.value&&g.value?0:1),N=f(()=>y.value===0),S=f(()=>b.value>1),x=R($e,null)!==null,[ne,le]=Ct(),{resolveContainers:_,mainTreeNodeRef:ae,MainTreeNode:re}=Tt({portals:ne,defaultContainers:[f(()=>{var p;return(p=G.panelRef.value)!=null?p:m.value})]}),pe=f(()=>S.value?"parent":"leaf"),oe=f(()=>c!==null?(c.value&P.Closing)===P.Closing:!1),me=f(()=>x||oe.value?!1:N.value),ge=f(()=>{var p,h,$;return($=Array.from((h=(p=w.value)==null?void 0:p.querySelectorAll("body > *"))!=null?h:[]).find(F=>F.id==="headlessui-portal-root"?!1:F.contains(E(ae))&&F instanceof HTMLElement))!=null?$:null});Be(ge,me);let D=f(()=>S.value?!0:N.value),K=f(()=>{var p,h,$;return($=Array.from((h=(p=w.value)==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?h:[]).find(F=>F.contains(E(ae))&&F instanceof HTMLElement))!=null?$:null});Be(K,D),$t({type:"Dialog",enabled:f(()=>y.value===0),element:m,onUpdate:(p,h)=>{if(h==="Dialog")return Y(p,{[Te.Add]:()=>b.value+=1,[Te.Remove]:()=>b.value-=1})}});let B=Pt({name:"DialogDescription",slot:f(()=>({open:g.value}))}),H=v(null),G={titleId:H,panelRef:v(null),dialogState:y,setTitleId(p){H.value!==p&&(H.value=p)},close(){t("close",!1)}};M($e,G);let De=f(()=>!(!N.value||S.value));Je(_,(p,h)=>{p.preventDefault(),G.close(),it(()=>h==null?void 0:h.focus())},De);let Ce=f(()=>!(S.value||y.value!==0));je((o=w.value)==null?void 0:o.defaultView,"keydown",p=>{Ce.value&&(p.defaultPrevented||p.key===Xe.Escape&&(p.preventDefault(),p.stopPropagation(),G.close()))});let Re=f(()=>!(oe.value||y.value!==0||x));return Et(w,Re,p=>{var h;return{containers:[...(h=p.containers)!=null?h:[],_]}}),k(p=>{if(y.value!==0)return;let h=E(m);if(!h)return;let $=new ResizeObserver(F=>{for(let he of F){let ie=he.target.getBoundingClientRect();ie.x===0&&ie.y===0&&ie.width===0&&ie.height===0&&G.close()}});$.observe(h),p(()=>$.disconnect())}),()=>{let{open:p,initialFocus:h,...$}=e,F={...n,ref:m,id:i,role:s.value,"aria-modal":y.value===0?!0:void 0,"aria-labelledby":H.value,"aria-describedby":B.value},he={open:y.value===0};return T(He,{force:!0},()=>[T(Dt,()=>T(Rt,{target:m.value},()=>T(He,{force:!1},()=>T(Q,{initialFocus:h,containers:_,features:N.value?Y(pe.value,{parent:Q.features.RestoreFocus,leaf:Q.features.All&~Q.features.FocusLock}):Q.features.None},()=>T(le,{},()=>A({ourProps:F,theirProps:{...$,...n},slot:he,attrs:n,slots:l,visible:y.value===0,features:we.RenderStrategy|we.Static,name:"Dialog"})))))),T(re)])}}}),_t=O({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n}){var l;let a=(l=e.id)!=null?l:`headlessui-dialog-overlay-${ee()}`,r=fe("DialogOverlay");function o(i){i.target===i.currentTarget&&(i.preventDefault(),i.stopPropagation(),r.close())}return()=>{let{...i}=e;return A({ourProps:{id:a,"aria-hidden":!0,onClick:o},theirProps:i,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogOverlay"})}}}),Gt=O({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:l}){var a;let r=(a=e.id)!=null?a:`headlessui-dialog-panel-${ee()}`,o=fe("DialogPanel");l({el:o.panelRef,$el:o.panelRef});function i(u){u.stopPropagation()}return()=>{let{...u}=e,d={id:r,ref:o.panelRef,onClick:i};return A({ourProps:d,theirProps:u,slot:{open:o.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),zt=O({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n}){var l;let a=(l=e.id)!=null?l:`headlessui-dialog-title-${ee()}`,r=fe("DialogTitle");return L(()=>{r.setTitleId(a),C(()=>r.setTitleId(null))}),()=>{let{...o}=e;return A({ourProps:{id:a},theirProps:o,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function Ht(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function be(e,...t){e&&t.length>0&&e.classList.add(...t)}function se(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Fe=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Fe||{});function kt(e,t){let n=te();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:a}=getComputedStyle(e),[r,o]=[l,a].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,s)=>s-d);return u});return r!==0?n.setTimeout(()=>t("finished"),r+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Me(e,t,n,l,a,r){let o=te(),i=r!==void 0?Ht(r):()=>{};return se(e,...a),be(e,...t,...n),o.nextFrame(()=>{se(e,...n),be(e,...l),o.add(kt(e,u=>(se(e,...l,...t),be(e,...a),i(u))))}),o.add(()=>se(e,...t,...n,...l,...a)),o.add(()=>i("cancelled")),o.dispose}function j(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let Oe=Symbol("TransitionContext");var Mt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Mt||{});function Nt(){return R(Oe,null)!==null}function xt(){let e=R(Oe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function jt(){let e=R(Ae,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ae=Symbol("NestingContext");function ve(e){return"children"in e?ve(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function _e(e){let t=v([]),n=v(!1);L(()=>n.value=!0),C(()=>n.value=!1);function l(r,o=U.Hidden){let i=t.value.findIndex(({id:u})=>u===r);i!==-1&&(Y(o,{[U.Unmount](){t.value.splice(i,1)},[U.Hidden](){t.value[i].state="hidden"}}),!ve(t)&&n.value&&(e==null||e()))}function a(r){let o=t.value.find(({id:i})=>i===r);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:r,state:"visible"}),()=>l(r,U.Unmount)}return{children:t,register:a,unregister:l}}let Ge=we.RenderStrategy,Wt=O({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){let r=v(0);function o(){r.value|=P.Opening,t("beforeEnter")}function i(){r.value&=~P.Opening,t("afterEnter")}function u(){r.value|=P.Closing,t("beforeLeave")}function d(){r.value&=~P.Closing,t("afterLeave")}if(!Nt()&&Ze())return()=>T(Ut,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:u,onAfterLeave:d},l);let s=v(null),b=f(()=>e.unmount?U.Unmount:U.Hidden);a({el:s,$el:s});let{show:c,appear:g}=xt(),{register:m,unregister:w}=jt(),y=v(c.value?"visible":"hidden"),N={value:!0},S=ee(),x={value:!1},ne=_e(()=>{!x.value&&y.value!=="hidden"&&(y.value="hidden",w(S),d())});L(()=>{let D=m(S);C(D)}),k(()=>{if(b.value===U.Hidden&&S){if(c.value&&y.value!=="visible"){y.value="visible";return}Y(y.value,{hidden:()=>w(S),visible:()=>m(S)})}});let le=j(e.enter),_=j(e.enterFrom),ae=j(e.enterTo),re=j(e.entered),pe=j(e.leave),oe=j(e.leaveFrom),me=j(e.leaveTo);L(()=>{k(()=>{if(y.value==="visible"){let D=E(s);if(D instanceof Comment&&D.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ge(D){let K=N.value&&!g.value,B=E(s);!B||!(B instanceof HTMLElement)||K||(x.value=!0,c.value&&o(),c.value||u(),D(c.value?Me(B,le,_,ae,re,H=>{x.value=!1,H===Fe.Finished&&i()}):Me(B,pe,oe,me,re,H=>{x.value=!1,H===Fe.Finished&&(ve(ne)||(y.value="hidden",w(S),d()))})))}return L(()=>{z([c],(D,K,B)=>{ge(B),N.value=!1},{immediate:!0})}),M(Ae,ne),et(f(()=>Y(y.value,{visible:P.Open,hidden:P.Closed})|r.value)),()=>{let{appear:D,show:K,enter:B,enterFrom:H,enterTo:G,entered:De,leave:Ce,leaveFrom:Re,leaveTo:p,...h}=e,$={ref:s},F={...h,...g.value&&c.value&&Ne.isServer?{class:ut([n.class,h.class,...le,..._])}:{}};return A({theirProps:F,ourProps:$,slot:{},slots:l,attrs:n,features:Ge,visible:y.value==="visible",name:"TransitionChild"})}}}),It=Wt,Ut=O({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let a=xe(),r=f(()=>e.show===null&&a!==null?(a.value&P.Open)===P.Open:e.show);k(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=v(r.value?"visible":"hidden"),i=_e(()=>{o.value="hidden"}),u=v(!0),d={show:r,appear:f(()=>e.appear||!u.value)};return L(()=>{k(()=>{u.value=!1,r.value?o.value="visible":ve(i)||(o.value="hidden")})}),M(Ae,i),M(Oe,d),()=>{let s=tt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),b={unmount:e.unmount};return A({ourProps:{...b,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[T(It,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...b,...s},l.default)]},attrs:{},features:Ge,visible:o.value==="visible",name:"Transition"})}}});export{Gt as G,Ut as S,zt as V,Yt as Y,_t as _,Ee as f,Wt as h,Pe as t,ce as u};
