import{a3 as $,O as k,$ as S,z as M,B as D,a4 as C,E as U,F as H,a2 as R}from"./app-7998ab3f.js";let _=Symbol("headlessui.useid"),K=0;function pe(){return $(_,()=>`${++K}`)()}function N(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function b(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,b),r}var W=Object.defineProperty,G=(e,t,n)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t,n)=>(G(e,typeof t!="symbol"?t+"":t,n),n);let V=class{constructor(){O(this,"current",this.detect()),O(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},E=new V;function A(e){if(E.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=N(e);if(t)return t.ownerDocument}return document}let y=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var B=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(B||{}),X=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(X||{}),q=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(q||{});function P(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(y)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var j=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(j||{});function x(e,t=0){var n;return e===((n=A(e))==null?void 0:n.body)?!1:b(t,{0(){return e.matches(y)},1(){let r=e;for(;r!==null;){if(r.matches(y))return!0;r=r.parentElement}return!1}})}function ve(e){let t=A(e);k(()=>{t&&!x(t.activeElement,0)&&Y(e)})}var z=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(z||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Y(e){e==null||e.focus({preventScroll:!0})}let J=["textarea","input"].join(",");function Q(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,J))!=null?n:!1}function Z(e,t=n=>n){return e.slice().sort((n,r)=>{let i=t(n),o=t(r);if(i===null||o===null)return 0;let a=i.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function he(e,t){return ee(P(),t,{relativeTo:e})}function ee(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){var o;let a=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,l=Array.isArray(e)?n?Z(e):e:P(e);i.length>0&&l.length>1&&(l=l.filter(c=>!i.includes(c))),r=r??a.activeElement;let m=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=t&32?{preventScroll:!0}:{},p=0,v=l.length,f;do{if(p>=v||p+v<=0)return 0;let c=u+p;if(t&16)c=(c+v)%v;else{if(c<0)return 3;if(c>=v)return 1}f=l[c],f==null||f.focus(s),p+=m}while(f!==a.activeElement);return t&6&&Q(f)&&f.select(),2}function te(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ne(){return/Android/gi.test(window.navigator.userAgent)}function re(){return te()||ne()}function h(e,t,n){E.isServer||S(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function oe(e,t,n){E.isServer||S(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function we(e,t,n=D(()=>!0)){function r(o,a){if(!n.value||o.defaultPrevented)return;let l=a(o);if(l===null||!l.getRootNode().contains(l))return;let m=function u(s){return typeof s=="function"?u(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let u of m){if(u===null)continue;let s=u instanceof HTMLElement?u:N(u);if(s!=null&&s.contains(l)||o.composed&&o.composedPath().includes(s))return}return!x(l,j.Loose)&&l.tabIndex!==-1&&o.preventDefault(),t(o,l)}let i=M(null);h("pointerdown",o=>{var a,l;n.value&&(i.value=((l=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:l[0])||o.target)},!0),h("mousedown",o=>{var a,l;n.value&&(i.value=((l=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:l[0])||o.target)},!0),h("click",o=>{re()||i.value&&(r(o,()=>i.value),i.value=null)},!0),h("touchend",o=>r(o,()=>o.target instanceof HTMLElement?o.target:null),!0),oe("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var ie=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ie||{}),le=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(le||{});function ge({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...i}){var o;let a=T(r,n),l=Object.assign(i,{props:a});if(e||t&2&&a.static)return g(l);if(t&1){let m=(o=a.unmount)==null||o?0:1;return b(m,{0(){return null},1(){return g({...i,props:{...a,hidden:!0,style:{display:"none"}}})}})}return g(l)}function g({props:e,attrs:t,slots:n,slot:r,name:i}){var o,a;let{as:l,...m}=ae(e,["unmount","static"]),u=(o=n.default)==null?void 0:o.call(n,r),s={};if(r){let p=!1,v=[];for(let[f,c]of Object.entries(r))typeof c=="boolean"&&(p=!0),c===!0&&v.push(f);p&&(s["data-headlessui-state"]=v.join(" "))}if(l==="template"){if(u=F(u??[]),Object.keys(m).length>0||Object.keys(t).length>0){let[p,...v]=u??[];if(!ue(p)||v.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(m).concat(Object.keys(t)).map(d=>d.trim()).filter((d,w,I)=>I.indexOf(d)===w).sort((d,w)=>d.localeCompare(w)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let f=T((a=p.props)!=null?a:{},m,s),c=C(p,f,!0);for(let d in f)d.startsWith("on")&&(c.props||(c.props={}),c.props[d]=f[d]);return c}return Array.isArray(u)&&u.length===1?u[0]:u}return U(l,Object.assign({},m,s),{default:()=>u})}function F(e){return e.flatMap(t=>t.type===H?F(t.children):[t])}function T(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):t[i]=r[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](i,...o){let a=n[r];for(let l of a){if(i instanceof Event&&i.defaultPrevented)return;l(i,...o)}}});return t}function ae(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function ue(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let L=Symbol("Context");var se=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(se||{});function ye(){return ce()!==null}function ce(){return $(L,null)}function be(e){R(L,e)}var de=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(de||{});export{ge as A,pe as I,B as N,Z as O,ee as P,Y as S,X as T,ve as _,se as a,we as b,E as c,ie as d,de as e,le as f,be as g,ae as h,A as i,x as j,j as k,ce as l,N as o,ye as s,te as t,b as u,he as v,oe as w};
