<<<<<<< HEAD:public/build/assets/menu-fd4ea28f.js
import{i as j,o as b,b as K,j as _,k as U,g as q,u as H,a as R,A as P,I as F,l as V,d as k,e as m,v as W,N as E,_ as O,O as Q}from"./keyboard-39c9e581.js";import{s as z}from"./use-resolve-button-type-4aed63cd.js";import{z as h,$ as C,_ as T,B as x,a2 as J,A as X,a0 as Y,O as y,a3 as Z}from"./app-864f64ce.js";function A(t){return[t.screenX,t.screenY]}function G(){let t=h([-1,-1]);return{wasMoved(r){let l=A(r);return t.value[0]===l[0]&&t.value[1]===l[1]?!1:(t.value=l,!0)},update(r){t.value=A(r)}}}function ee({container:t,accept:r,walk:l,enabled:u}){C(()=>{let s=t.value;if(!s||u!==void 0&&!u.value)return;let n=j(t);if(!n)return;let e=Object.assign(v=>r(v),{acceptNode:r}),c=n.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,e,!1);for(;c.nextNode();)l(c.currentNode)})}function te(t){throw new Error("Unexpected object: "+t)}var I=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(I||{});function ae(t,r){let l=r.resolveItems();if(l.length<=0)return null;let u=r.resolveActiveIndex(),s=u??-1;switch(t.focus){case 0:{for(let n=0;n<l.length;++n)if(!r.resolveDisabled(l[n],n,l))return n;return u}case 1:{s===-1&&(s=l.length);for(let n=s-1;n>=0;--n)if(!r.resolveDisabled(l[n],n,l))return n;return u}case 2:{for(let n=s+1;n<l.length;++n)if(!r.resolveDisabled(l[n],n,l))return n;return u}case 3:{for(let n=l.length-1;n>=0;--n)if(!r.resolveDisabled(l[n],n,l))return n;return u}case 4:{for(let n=0;n<l.length;++n)if(r.resolveId(l[n],n,l)===t.id)return n;return u}case 5:return null;default:te(t)}}let $=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function N(t){var r,l;let u=(r=t.innerText)!=null?r:"",s=t.cloneNode(!0);if(!(s instanceof HTMLElement))return u;let n=!1;for(let c of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))c.remove(),n=!0;let e=n?(l=s.innerText)!=null?l:"":u;return $.test(e)&&(e=e.replace($,"")),e}function ne(t){let r=t.getAttribute("aria-label");if(typeof r=="string")return r.trim();let l=t.getAttribute("aria-labelledby");if(l){let u=l.split(" ").map(s=>{let n=document.getElementById(s);if(n){let e=n.getAttribute("aria-label");return typeof e=="string"?e.trim():N(n).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return N(t).trim()}function le(t){let r=h(""),l=h("");return()=>{let u=b(t);if(!u)return"";let s=u.innerText;if(r.value===s)return l.value;let n=ne(u).trim().toLowerCase();return r.value=s,l.value=n,n}}var re=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(re||{}),ue=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(ue||{});function oe(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let L=Symbol("MenuContext");function w(t){let r=Z(L,null);if(r===null){let l=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,w),l}return r}let ve=T({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:r,attrs:l}){let u=h(1),s=h(null),n=h(null),e=h([]),c=h(""),v=h(null),S=h(1);function M(a=i=>i){let i=v.value!==null?e.value[v.value]:null,o=Q(a(e.value.slice()),g=>b(g.dataRef.domRef)),f=i?o.indexOf(i):null;return f===-1&&(f=null),{items:o,activeItemIndex:f}}let d={menuState:u,buttonRef:s,itemsRef:n,items:e,searchQuery:c,activeItemIndex:v,activationTrigger:S,closeMenu:()=>{u.value=1,v.value=null},openMenu:()=>u.value=0,goToItem(a,i,o){let f=M(),g=ae(a===I.Specific?{focus:I.Specific,id:i}:{focus:a},{resolveItems:()=>f.items,resolveActiveIndex:()=>f.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.disabled});c.value="",v.value=g,S.value=o??1,e.value=f.items},search(a){let i=c.value!==""?0:1;c.value+=a.toLowerCase();let o=(v.value!==null?e.value.slice(v.value+i).concat(e.value.slice(0,v.value+i)):e.value).find(g=>g.dataRef.textValue.startsWith(c.value)&&!g.dataRef.disabled),f=o?e.value.indexOf(o):-1;f===-1||f===v.value||(v.value=f,S.value=1)},clearSearch(){c.value=""},registerItem(a,i){let o=M(f=>[...f,{id:a,dataRef:i}]);e.value=o.items,v.value=o.activeItemIndex,S.value=1},unregisterItem(a){let i=M(o=>{let f=o.findIndex(g=>g.id===a);return f!==-1&&o.splice(f,1),o});e.value=i.items,v.value=i.activeItemIndex,S.value=1}};return K([s,n],(a,i)=>{var o;d.closeMenu(),_(i,U.Loose)||(a.preventDefault(),(o=b(s))==null||o.focus())},x(()=>u.value===0)),J(L,d),q(x(()=>H(u.value,{0:R.Open,1:R.Closed}))),()=>{let a={open:u.value===0,close:d.closeMenu};return P({ourProps:{},theirProps:t,slot:a,slots:r,attrs:l,name:"Menu"})}}}),de=T({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(t,{attrs:r,slots:l,expose:u}){var s;let n=(s=t.id)!=null?s:`headlessui-menu-button-${F()}`,e=w("MenuButton");u({el:e.buttonRef,$el:e.buttonRef});function c(d){switch(d.key){case m.Space:case m.Enter:case m.ArrowDown:d.preventDefault(),d.stopPropagation(),e.openMenu(),y(()=>{var a;(a=b(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(I.First)});break;case m.ArrowUp:d.preventDefault(),d.stopPropagation(),e.openMenu(),y(()=>{var a;(a=b(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(I.Last)});break}}function v(d){switch(d.key){case m.Space:d.preventDefault();break}}function S(d){t.disabled||(e.menuState.value===0?(e.closeMenu(),y(()=>{var a;return(a=b(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(d.preventDefault(),e.openMenu(),oe(()=>{var a;return(a=b(e.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let M=z(x(()=>({as:t.as,type:r.type})),e.buttonRef);return()=>{var d;let a={open:e.menuState.value===0},{...i}=t,o={ref:e.buttonRef,id:n,type:M.value,"aria-haspopup":"menu","aria-controls":(d=b(e.itemsRef))==null?void 0:d.id,"aria-expanded":e.menuState.value===0,onKeydown:c,onKeyup:v,onClick:S};return P({ourProps:o,theirProps:i,slot:a,attrs:r,slots:l,name:"MenuButton"})}}}),fe=T({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:r,slots:l,expose:u}){var s;let n=(s=t.id)!=null?s:`headlessui-menu-items-${F()}`,e=w("MenuItems"),c=h(null);u({el:e.itemsRef,$el:e.itemsRef}),ee({container:x(()=>b(e.itemsRef)),enabled:x(()=>e.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function v(a){var i;switch(c.value&&clearTimeout(c.value),a.key){case m.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case m.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeItemIndex.value!==null){let o=e.items.value[e.activeItemIndex.value];(i=b(o.dataRef.domRef))==null||i.click()}e.closeMenu(),O(b(e.buttonRef));break;case m.ArrowDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(I.Next);case m.ArrowUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(I.Previous);case m.Home:case m.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(I.First);case m.End:case m.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(I.Last);case m.Escape:a.preventDefault(),a.stopPropagation(),e.closeMenu(),y(()=>{var o;return(o=b(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})});break;case m.Tab:a.preventDefault(),a.stopPropagation(),e.closeMenu(),y(()=>W(b(e.buttonRef),a.shiftKey?E.Previous:E.Next));break;default:a.key.length===1&&(e.search(a.key),c.value=setTimeout(()=>e.clearSearch(),350));break}}function S(a){switch(a.key){case m.Space:a.preventDefault();break}}let M=V(),d=x(()=>M!==null?(M.value&R.Open)===R.Open:e.menuState.value===0);return()=>{var a,i;let o={open:e.menuState.value===0},{...f}=t,g={"aria-activedescendant":e.activeItemIndex.value===null||(a=e.items.value[e.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(i=b(e.buttonRef))==null?void 0:i.id,id:n,onKeydown:v,onKeyup:S,role:"menu",tabIndex:0,ref:e.itemsRef};return P({ourProps:g,theirProps:f,slot:o,attrs:r,slots:l,features:k.RenderStrategy|k.Static,visible:d.value,name:"MenuItems"})}}}),pe=T({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(t,{slots:r,attrs:l,expose:u}){var s;let n=(s=t.id)!=null?s:`headlessui-menu-item-${F()}`,e=w("MenuItem"),c=h(null);u({el:c,$el:c});let v=x(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===n:!1),S=le(c),M=x(()=>({disabled:t.disabled,get textValue(){return S()},domRef:c}));X(()=>e.registerItem(n,M)),Y(()=>e.unregisterItem(n)),C(()=>{e.menuState.value===0&&v.value&&e.activationTrigger.value!==0&&y(()=>{var p,D;return(D=(p=b(c))==null?void 0:p.scrollIntoView)==null?void 0:D.call(p,{block:"nearest"})})});function d(p){if(t.disabled)return p.preventDefault();e.closeMenu(),O(b(e.buttonRef))}function a(){if(t.disabled)return e.goToItem(I.Nothing);e.goToItem(I.Specific,n)}let i=G();function o(p){i.update(p)}function f(p){i.wasMoved(p)&&(t.disabled||v.value||e.goToItem(I.Specific,n,0))}function g(p){i.wasMoved(p)&&(t.disabled||v.value&&e.goToItem(I.Nothing))}return()=>{let{disabled:p,...D}=t,B={active:v.value,disabled:p,close:e.closeMenu};return P({ourProps:{id:n,ref:c,role:"menuitem",tabIndex:p===!0?void 0:-1,"aria-disabled":p===!0?!0:void 0,onClick:d,onFocus:a,onPointerenter:o,onMouseenter:o,onPointermove:f,onMousemove:f,onPointerleave:g,onMouseleave:g},theirProps:{...l,...D},slot:B,attrs:l,slots:r,name:"MenuItem"})}}});export{fe as M,de as S,pe as b,ve as g};
=======
import{i as j,o as g,b as K,j as _,k as U,g as q,u as H,a as R,A as P,I as F,l as V,d as k,e as m,v as W,N as E,_ as O,O as Q}from"./keyboard-361618b8.js";import{s as z}from"./use-resolve-button-type-19077f4b.js";import{z as h,$ as C,_ as T,B as x,a2 as J,A as X,a0 as Y,O as y,a3 as Z}from"./app-6f86c80f.js";function A(t){return[t.screenX,t.screenY]}function G(){let t=h([-1,-1]);return{wasMoved(r){let l=A(r);return t.value[0]===l[0]&&t.value[1]===l[1]?!1:(t.value=l,!0)},update(r){t.value=A(r)}}}function ee({container:t,accept:r,walk:l,enabled:u}){C(()=>{let s=t.value;if(!s||u!==void 0&&!u.value)return;let n=j(t);if(!n)return;let e=Object.assign(v=>r(v),{acceptNode:r}),c=n.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,e,!1);for(;c.nextNode();)l(c.currentNode)})}function te(t){throw new Error("Unexpected object: "+t)}var I=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(I||{});function ae(t,r){let l=r.resolveItems();if(l.length<=0)return null;let u=r.resolveActiveIndex(),s=u??-1;switch(t.focus){case 0:{for(let n=0;n<l.length;++n)if(!r.resolveDisabled(l[n],n,l))return n;return u}case 1:{s===-1&&(s=l.length);for(let n=s-1;n>=0;--n)if(!r.resolveDisabled(l[n],n,l))return n;return u}case 2:{for(let n=s+1;n<l.length;++n)if(!r.resolveDisabled(l[n],n,l))return n;return u}case 3:{for(let n=l.length-1;n>=0;--n)if(!r.resolveDisabled(l[n],n,l))return n;return u}case 4:{for(let n=0;n<l.length;++n)if(r.resolveId(l[n],n,l)===t.id)return n;return u}case 5:return null;default:te(t)}}let N=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function $(t){var r,l;let u=(r=t.innerText)!=null?r:"",s=t.cloneNode(!0);if(!(s instanceof HTMLElement))return u;let n=!1;for(let c of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))c.remove(),n=!0;let e=n?(l=s.innerText)!=null?l:"":u;return N.test(e)&&(e=e.replace(N,"")),e}function ne(t){let r=t.getAttribute("aria-label");if(typeof r=="string")return r.trim();let l=t.getAttribute("aria-labelledby");if(l){let u=l.split(" ").map(s=>{let n=document.getElementById(s);if(n){let e=n.getAttribute("aria-label");return typeof e=="string"?e.trim():$(n).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return $(t).trim()}function le(t){let r=h(""),l=h("");return()=>{let u=g(t);if(!u)return"";let s=u.innerText;if(r.value===s)return l.value;let n=ne(u).trim().toLowerCase();return r.value=s,l.value=n,n}}var re=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(re||{}),ue=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(ue||{});function oe(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let L=Symbol("MenuContext");function w(t){let r=Z(L,null);if(r===null){let l=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,w),l}return r}let ve=T({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:r,attrs:l}){let u=h(1),s=h(null),n=h(null),e=h([]),c=h(""),v=h(null),S=h(1);function M(a=i=>i){let i=v.value!==null?e.value[v.value]:null,o=Q(a(e.value.slice()),b=>g(b.dataRef.domRef)),f=i?o.indexOf(i):null;return f===-1&&(f=null),{items:o,activeItemIndex:f}}let d={menuState:u,buttonRef:s,itemsRef:n,items:e,searchQuery:c,activeItemIndex:v,activationTrigger:S,closeMenu:()=>{u.value=1,v.value=null},openMenu:()=>u.value=0,goToItem(a,i,o){let f=M(),b=ae(a===I.Specific?{focus:I.Specific,id:i}:{focus:a},{resolveItems:()=>f.items,resolveActiveIndex:()=>f.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.disabled});c.value="",v.value=b,S.value=o??1,e.value=f.items},search(a){let i=c.value!==""?0:1;c.value+=a.toLowerCase();let o=(v.value!==null?e.value.slice(v.value+i).concat(e.value.slice(0,v.value+i)):e.value).find(b=>b.dataRef.textValue.startsWith(c.value)&&!b.dataRef.disabled),f=o?e.value.indexOf(o):-1;f===-1||f===v.value||(v.value=f,S.value=1)},clearSearch(){c.value=""},registerItem(a,i){let o=M(f=>[...f,{id:a,dataRef:i}]);e.value=o.items,v.value=o.activeItemIndex,S.value=1},unregisterItem(a){let i=M(o=>{let f=o.findIndex(b=>b.id===a);return f!==-1&&o.splice(f,1),o});e.value=i.items,v.value=i.activeItemIndex,S.value=1}};return K([s,n],(a,i)=>{var o;d.closeMenu(),_(i,U.Loose)||(a.preventDefault(),(o=g(s))==null||o.focus())},x(()=>u.value===0)),J(L,d),q(x(()=>H(u.value,{0:R.Open,1:R.Closed}))),()=>{let a={open:u.value===0,close:d.closeMenu};return P({ourProps:{},theirProps:t,slot:a,slots:r,attrs:l,name:"Menu"})}}}),de=T({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(t,{attrs:r,slots:l,expose:u}){var s;let n=(s=t.id)!=null?s:`headlessui-menu-button-${F()}`,e=w("MenuButton");u({el:e.buttonRef,$el:e.buttonRef});function c(d){switch(d.key){case m.Space:case m.Enter:case m.ArrowDown:d.preventDefault(),d.stopPropagation(),e.openMenu(),y(()=>{var a;(a=g(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(I.First)});break;case m.ArrowUp:d.preventDefault(),d.stopPropagation(),e.openMenu(),y(()=>{var a;(a=g(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(I.Last)});break}}function v(d){switch(d.key){case m.Space:d.preventDefault();break}}function S(d){t.disabled||(e.menuState.value===0?(e.closeMenu(),y(()=>{var a;return(a=g(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(d.preventDefault(),e.openMenu(),oe(()=>{var a;return(a=g(e.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let M=z(x(()=>({as:t.as,type:r.type})),e.buttonRef);return()=>{var d;let a={open:e.menuState.value===0},{...i}=t,o={ref:e.buttonRef,id:n,type:M.value,"aria-haspopup":"menu","aria-controls":(d=g(e.itemsRef))==null?void 0:d.id,"aria-expanded":e.menuState.value===0,onKeydown:c,onKeyup:v,onClick:S};return P({ourProps:o,theirProps:i,slot:a,attrs:r,slots:l,name:"MenuButton"})}}}),fe=T({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:r,slots:l,expose:u}){var s;let n=(s=t.id)!=null?s:`headlessui-menu-items-${F()}`,e=w("MenuItems"),c=h(null);u({el:e.itemsRef,$el:e.itemsRef}),ee({container:x(()=>g(e.itemsRef)),enabled:x(()=>e.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function v(a){var i;switch(c.value&&clearTimeout(c.value),a.key){case m.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case m.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeItemIndex.value!==null){let o=e.items.value[e.activeItemIndex.value];(i=g(o.dataRef.domRef))==null||i.click()}e.closeMenu(),O(g(e.buttonRef));break;case m.ArrowDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(I.Next);case m.ArrowUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(I.Previous);case m.Home:case m.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(I.First);case m.End:case m.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(I.Last);case m.Escape:a.preventDefault(),a.stopPropagation(),e.closeMenu(),y(()=>{var o;return(o=g(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})});break;case m.Tab:a.preventDefault(),a.stopPropagation(),e.closeMenu(),y(()=>W(g(e.buttonRef),a.shiftKey?E.Previous:E.Next));break;default:a.key.length===1&&(e.search(a.key),c.value=setTimeout(()=>e.clearSearch(),350));break}}function S(a){switch(a.key){case m.Space:a.preventDefault();break}}let M=V(),d=x(()=>M!==null?(M.value&R.Open)===R.Open:e.menuState.value===0);return()=>{var a,i;let o={open:e.menuState.value===0},{...f}=t,b={"aria-activedescendant":e.activeItemIndex.value===null||(a=e.items.value[e.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(i=g(e.buttonRef))==null?void 0:i.id,id:n,onKeydown:v,onKeyup:S,role:"menu",tabIndex:0,ref:e.itemsRef};return P({ourProps:b,theirProps:f,slot:o,attrs:r,slots:l,features:k.RenderStrategy|k.Static,visible:d.value,name:"MenuItems"})}}}),pe=T({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(t,{slots:r,attrs:l,expose:u}){var s;let n=(s=t.id)!=null?s:`headlessui-menu-item-${F()}`,e=w("MenuItem"),c=h(null);u({el:c,$el:c});let v=x(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===n:!1),S=le(c),M=x(()=>({disabled:t.disabled,get textValue(){return S()},domRef:c}));X(()=>e.registerItem(n,M)),Y(()=>e.unregisterItem(n)),C(()=>{e.menuState.value===0&&v.value&&e.activationTrigger.value!==0&&y(()=>{var p,D;return(D=(p=g(c))==null?void 0:p.scrollIntoView)==null?void 0:D.call(p,{block:"nearest"})})});function d(p){if(t.disabled)return p.preventDefault();e.closeMenu(),O(g(e.buttonRef))}function a(){if(t.disabled)return e.goToItem(I.Nothing);e.goToItem(I.Specific,n)}let i=G();function o(p){i.update(p)}function f(p){i.wasMoved(p)&&(t.disabled||v.value||e.goToItem(I.Specific,n,0))}function b(p){i.wasMoved(p)&&(t.disabled||v.value&&e.goToItem(I.Nothing))}return()=>{let{disabled:p}=t,D={active:v.value,disabled:p,close:e.closeMenu},{...B}=t;return P({ourProps:{id:n,ref:c,role:"menuitem",tabIndex:p===!0?void 0:-1,"aria-disabled":p===!0?!0:void 0,disabled:void 0,onClick:d,onFocus:a,onPointerenter:o,onMouseenter:o,onPointermove:f,onMousemove:f,onPointerleave:b,onMouseleave:b},theirProps:{...l,...B},slot:D,attrs:l,slots:r,name:"MenuItem"})}}});export{pe as M,de as S,fe as b,ve as g};
>>>>>>> c2529f1455e20904eed99f089d92c14252739910:public/build/assets/menu-021d91d6.js
