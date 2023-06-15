import{a as K,f as M,I as A,o as d,H as k,T as Z,t as U,N as G,u as D,b as y,c as B,d as _,m as J,O as $,e as g}from"./transition-df680bd8.js";import{b as Q}from"./use-resolve-button-type-c28a8c4f.js";import{B as O,q as h,Z as j,x as c,_ as C,s as L,I as V,$ as X,F as Y,a0 as W,R}from"./app-ab7df90b.js";let ee=O({props:{onFocus:{type:Function,required:!0}},setup(t){let o=h(!0);return()=>o.value?j(M,{as:"button",type:"button",features:K.Focusable,onFocus(v){v.preventDefault();let i,r=50;function l(){var u;if(r--<=0){i&&cancelAnimationFrame(i);return}if((u=t.onFocus)!=null&&u.call(t)){o.value=!1,cancelAnimationFrame(i);return}i=requestAnimationFrame(l)}i=requestAnimationFrame(l)}}):null}});var te=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(te||{}),ae=(t=>(t[t.Less=-1]="Less",t[t.Equal=0]="Equal",t[t.Greater=1]="Greater",t))(ae||{});let z=Symbol("TabsContext");function E(t){let o=R(z,null);if(o===null){let v=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,E),v}return o}let q=Symbol("TabsSSRContext"),ue=O({name:"TabGroup",emits:{change:t=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:o,attrs:v,emit:i}){var r;let l=h((r=t.selectedIndex)!=null?r:t.defaultIndex),u=h([]),m=h([]),x=c(()=>t.selectedIndex!==null),f=c(()=>x.value?t.selectedIndex:l.value);function p(a){var e;let n=A(s.tabs.value,d),b=A(s.panels.value,d),S=n.filter(I=>{var P;return!((P=d(I))!=null&&P.hasAttribute("disabled"))});if(a<0||a>n.length-1){let I=D(l.value===null?0:Math.sign(a-l.value),{[-1]:()=>1,[0]:()=>D(Math.sign(a),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});l.value=D(I,{[0]:()=>n.indexOf(S[0]),[1]:()=>n.indexOf(S[S.length-1])}),s.tabs.value=n,s.panels.value=b}else{let I=n.slice(0,a),P=[...n.slice(a),...I].find(H=>S.includes(H));if(!P)return;let N=(e=n.indexOf(P))!=null?e:s.selectedIndex.value;N===-1&&(N=s.selectedIndex.value),l.value=N,s.tabs.value=n,s.panels.value=b}}let s={selectedIndex:c(()=>{var a,e;return(e=(a=l.value)!=null?a:t.defaultIndex)!=null?e:null}),orientation:c(()=>t.vertical?"vertical":"horizontal"),activation:c(()=>t.manual?"manual":"auto"),tabs:u,panels:m,setSelectedIndex(a){f.value!==a&&i("change",a),x.value||p(a)},registerTab(a){var e;if(u.value.includes(a))return;let n=u.value[l.value];u.value.push(a),u.value=A(u.value,d);let b=(e=u.value.indexOf(n))!=null?e:l.value;b!==-1&&(l.value=b)},unregisterTab(a){let e=u.value.indexOf(a);e!==-1&&u.value.splice(e,1)},registerPanel(a){m.value.includes(a)||(m.value.push(a),m.value=A(m.value,d))},unregisterPanel(a){let e=m.value.indexOf(a);e!==-1&&m.value.splice(e,1)}};C(z,s);let T=h({tabs:[],panels:[]}),w=h(!1);L(()=>{w.value=!0}),C(q,c(()=>w.value?null:T.value));let F=c(()=>t.selectedIndex);return L(()=>{V([F],()=>{var a;return p((a=t.selectedIndex)!=null?a:t.defaultIndex)},{immediate:!0})}),X(()=>{if(!x.value||f.value==null||s.tabs.value.length<=0)return;let a=A(s.tabs.value,d);a.some((e,n)=>d(s.tabs.value[n])!==d(e))&&s.setSelectedIndex(a.findIndex(e=>d(e)===d(s.tabs.value[f.value])))}),()=>{let a={selectedIndex:l.value};return j(Y,[u.value.length<=0&&j(ee,{onFocus:()=>{for(let e of u.value){let n=d(e);if((n==null?void 0:n.tabIndex)===0)return n.focus(),!0}return!1}}),k({theirProps:{...v,...Z(t,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:a,slots:o,attrs:v,name:"TabGroup"})])}}}),se=O({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:o,slots:v}){let i=E("TabList");return()=>{let r={selectedIndex:i.selectedIndex.value},l={role:"tablist","aria-orientation":i.orientation.value};return k({ourProps:l,theirProps:t,slot:r,attrs:o,slots:v,name:"TabList"})}}}),oe=O({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${U()}`}},setup(t,{attrs:o,slots:v,expose:i}){let r=E("Tab"),l=h(null);i({el:l,$el:l}),L(()=>r.registerTab(l)),W(()=>r.unregisterTab(l));let u=R(q),m=c(()=>{if(u.value){let e=u.value.tabs.indexOf(t.id);return e===-1?u.value.tabs.push(t.id)-1:e}return-1}),x=c(()=>{let e=r.tabs.value.indexOf(l);return e===-1?m.value:e}),f=c(()=>x.value===r.selectedIndex.value);function p(e){var n;let b=e();if(b===B.Success&&r.activation.value==="auto"){let S=(n=J(l))==null?void 0:n.activeElement,I=r.tabs.value.findIndex(P=>d(P)===S);I!==-1&&r.setSelectedIndex(I)}return b}function s(e){let n=r.tabs.value.map(b=>d(b)).filter(Boolean);if(e.key===y.Space||e.key===y.Enter){e.preventDefault(),e.stopPropagation(),r.setSelectedIndex(x.value);return}switch(e.key){case y.Home:case y.PageUp:return e.preventDefault(),e.stopPropagation(),p(()=>$(n,g.First));case y.End:case y.PageDown:return e.preventDefault(),e.stopPropagation(),p(()=>$(n,g.Last))}if(p(()=>D(r.orientation.value,{vertical(){return e.key===y.ArrowUp?$(n,g.Previous|g.WrapAround):e.key===y.ArrowDown?$(n,g.Next|g.WrapAround):B.Error},horizontal(){return e.key===y.ArrowLeft?$(n,g.Previous|g.WrapAround):e.key===y.ArrowRight?$(n,g.Next|g.WrapAround):B.Error}}))===B.Success)return e.preventDefault()}let T=h(!1);function w(){var e;T.value||(T.value=!0,!t.disabled&&((e=d(l))==null||e.focus(),r.setSelectedIndex(x.value),_(()=>{T.value=!1})))}function F(e){e.preventDefault()}let a=Q(c(()=>({as:t.as,type:o.type})),l);return()=>{var e;let n={selected:f.value},{id:b,...S}=t,I={ref:l,onKeydown:s,onMousedown:F,onClick:w,id:b,role:"tab",type:a.value,"aria-controls":(e=d(r.panels.value[x.value]))==null?void 0:e.id,"aria-selected":f.value,tabIndex:f.value?0:-1,disabled:t.disabled?!0:void 0};return k({ourProps:I,theirProps:S,slot:n,attrs:o,slots:v,name:"Tab"})}}}),ie=O({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:o,attrs:v}){let i=E("TabPanels");return()=>{let r={selectedIndex:i.selectedIndex.value};return k({theirProps:t,ourProps:{},slot:r,attrs:v,slots:o,name:"TabPanels"})}}}),de=O({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${U()}`},tabIndex:{type:Number,default:0}},setup(t,{attrs:o,slots:v,expose:i}){let r=E("TabPanel"),l=h(null);i({el:l,$el:l}),L(()=>r.registerPanel(l)),W(()=>r.unregisterPanel(l));let u=R(q),m=c(()=>{if(u.value){let p=u.value.panels.indexOf(t.id);return p===-1?u.value.panels.push(t.id)-1:p}return-1}),x=c(()=>{let p=r.panels.value.indexOf(l);return p===-1?m.value:p}),f=c(()=>x.value===r.selectedIndex.value);return()=>{var p;let s={selected:f.value},{id:T,tabIndex:w,...F}=t,a={ref:l,id:T,role:"tabpanel","aria-labelledby":(p=d(r.tabs.value[x.value]))==null?void 0:p.id,tabIndex:f.value?w:-1};return!f.value&&t.unmount&&!t.static?j(M,{as:"span",...a}):k({ourProps:a,theirProps:F,slot:s,attrs:o,slots:v,features:G.Static|G.RenderStrategy,visible:f.value,name:"TabPanel"})}}});export{se as I,ie as S,de as g,ue as x,oe as y};
