import{m as B,o as b,y as j,g as K,h as U,e as _,u as H,l as R,H as D,t as w,p as q,a as F,b as m,v as V,N as k,_ as O,O as W}from"./use-outside-click-50f012b5.js";import{Y as $,y as x,D as P,A as y,$ as Y,z as Q,Z,R as S,a0 as z}from"./app-d3bda284.js";import{b as J}from"./use-resolve-button-type-f21a4cbd.js";function X(t){throw new Error("Unexpected object: "+t)}var h=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(h||{});function G(t,l){let u=l.resolveItems();if(u.length<=0)return null;let i=l.resolveActiveIndex(),e=i??-1,o=(()=>{switch(t.focus){case 0:return u.findIndex(a=>!l.resolveDisabled(a));case 1:{let a=u.slice().reverse().findIndex((d,v,c)=>e!==-1&&c.length-v-1>=e?!1:!l.resolveDisabled(d));return a===-1?a:u.length-1-a}case 2:return u.findIndex((a,d)=>d<=e?!1:!l.resolveDisabled(a));case 3:{let a=u.slice().reverse().findIndex(d=>!l.resolveDisabled(d));return a===-1?a:u.length-1-a}case 4:return u.findIndex(a=>l.resolveId(a)===t.id);case 5:return null;default:X(t)}})();return o===-1?i:o}function ee({container:t,accept:l,walk:u,enabled:i}){$(()=>{let e=t.value;if(!e||i!==void 0&&!i.value)return;let o=B(t);if(!o)return;let a=Object.assign(v=>l(v),{acceptNode:l}),d=o.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,a,!1);for(;d.nextNode();)u(d.currentNode)})}function E(t){return[t.screenX,t.screenY]}function te(){let t=x([-1,-1]);return{wasMoved(l){let u=E(l);return t.value[0]===u[0]&&t.value[1]===u[1]?!1:(t.value=u,!0)},update(l){t.value=E(l)}}}let N=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function A(t){var l,u;let i=(l=t.innerText)!=null?l:"",e=t.cloneNode(!0);if(!(e instanceof HTMLElement))return i;let o=!1;for(let d of e.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))d.remove(),o=!0;let a=o?(u=e.innerText)!=null?u:"":i;return N.test(a)&&(a=a.replace(N,"")),a}function ne(t){let l=t.getAttribute("aria-label");if(typeof l=="string")return l.trim();let u=t.getAttribute("aria-labelledby");if(u){let i=u.split(" ").map(e=>{let o=document.getElementById(e);if(o){let a=o.getAttribute("aria-label");return typeof a=="string"?a.trim():A(o).trim()}return null}).filter(Boolean);if(i.length>0)return i.join(", ")}return A(t).trim()}function ae(t){let l=x(""),u=x("");return()=>{let i=b(t);if(!i)return"";let e=i.innerText;if(l.value===e)return u.value;let o=ne(i).trim().toLowerCase();return l.value=e,u.value=o,o}}var le=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(le||{}),ue=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(ue||{});function re(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let C=Symbol("MenuContext");function T(t){let l=z(C,null);if(l===null){let u=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,T),u}return l}let ce=P({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:l,attrs:u}){let i=x(1),e=x(null),o=x(null),a=x([]),d=x(""),v=x(null),c=x(1);function n(s=p=>p){let p=v.value!==null?a.value[v.value]:null,f=W(s(a.value.slice()),I=>b(I.dataRef.domRef)),r=p?f.indexOf(p):null;return r===-1&&(r=null),{items:f,activeItemIndex:r}}let g={menuState:i,buttonRef:e,itemsRef:o,items:a,searchQuery:d,activeItemIndex:v,activationTrigger:c,closeMenu:()=>{i.value=1,v.value=null},openMenu:()=>i.value=0,goToItem(s,p,f){let r=n(),I=G(s===h.Specific?{focus:h.Specific,id:p}:{focus:s},{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:M=>M.id,resolveDisabled:M=>M.dataRef.disabled});d.value="",v.value=I,c.value=f??1,a.value=r.items},search(s){let p=d.value!==""?0:1;d.value+=s.toLowerCase();let f=(v.value!==null?a.value.slice(v.value+p).concat(a.value.slice(0,v.value+p)):a.value).find(I=>I.dataRef.textValue.startsWith(d.value)&&!I.dataRef.disabled),r=f?a.value.indexOf(f):-1;r===-1||r===v.value||(v.value=r,c.value=1)},clearSearch(){d.value=""},registerItem(s,p){let f=n(r=>[...r,{id:s,dataRef:p}]);a.value=f.items,v.value=f.activeItemIndex,c.value=1},unregisterItem(s){let p=n(f=>{let r=f.findIndex(I=>I.id===s);return r!==-1&&f.splice(r,1),f});a.value=p.items,v.value=p.activeItemIndex,c.value=1}};return j([e,o],(s,p)=>{var f;g.closeMenu(),K(p,U.Loose)||(s.preventDefault(),(f=b(e))==null||f.focus())},y(()=>i.value===0)),Y(C,g),_(y(()=>H(i.value,{0:R.Open,1:R.Closed}))),()=>{let s={open:i.value===0,close:g.closeMenu};return D({ourProps:{},theirProps:t,slot:s,slots:l,attrs:u,name:"Menu"})}}}),de=P({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${w()}`}},setup(t,{attrs:l,slots:u,expose:i}){let e=T("MenuButton");i({el:e.buttonRef,$el:e.buttonRef});function o(c){switch(c.key){case m.Space:case m.Enter:case m.ArrowDown:c.preventDefault(),c.stopPropagation(),e.openMenu(),S(()=>{var n;(n=b(e.itemsRef))==null||n.focus({preventScroll:!0}),e.goToItem(h.First)});break;case m.ArrowUp:c.preventDefault(),c.stopPropagation(),e.openMenu(),S(()=>{var n;(n=b(e.itemsRef))==null||n.focus({preventScroll:!0}),e.goToItem(h.Last)});break}}function a(c){switch(c.key){case m.Space:c.preventDefault();break}}function d(c){t.disabled||(e.menuState.value===0?(e.closeMenu(),S(()=>{var n;return(n=b(e.buttonRef))==null?void 0:n.focus({preventScroll:!0})})):(c.preventDefault(),e.openMenu(),re(()=>{var n;return(n=b(e.itemsRef))==null?void 0:n.focus({preventScroll:!0})})))}let v=J(y(()=>({as:t.as,type:l.type})),e.buttonRef);return()=>{var c;let n={open:e.menuState.value===0},{id:g,...s}=t,p={ref:e.buttonRef,id:g,type:v.value,"aria-haspopup":"menu","aria-controls":(c=b(e.itemsRef))==null?void 0:c.id,"aria-expanded":e.menuState.value===0,onKeydown:o,onKeyup:a,onClick:d};return D({ourProps:p,theirProps:s,slot:n,attrs:l,slots:u,name:"MenuButton"})}}}),ve=P({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${w()}`}},setup(t,{attrs:l,slots:u,expose:i}){let e=T("MenuItems"),o=x(null);i({el:e.itemsRef,$el:e.itemsRef}),ee({container:y(()=>b(e.itemsRef)),enabled:y(()=>e.menuState.value===0),accept(n){return n.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none")}});function a(n){var g;switch(o.value&&clearTimeout(o.value),n.key){case m.Space:if(e.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),e.search(n.key);case m.Enter:if(n.preventDefault(),n.stopPropagation(),e.activeItemIndex.value!==null){let s=e.items.value[e.activeItemIndex.value];(g=b(s.dataRef.domRef))==null||g.click()}e.closeMenu(),O(b(e.buttonRef));break;case m.ArrowDown:return n.preventDefault(),n.stopPropagation(),e.goToItem(h.Next);case m.ArrowUp:return n.preventDefault(),n.stopPropagation(),e.goToItem(h.Previous);case m.Home:case m.PageUp:return n.preventDefault(),n.stopPropagation(),e.goToItem(h.First);case m.End:case m.PageDown:return n.preventDefault(),n.stopPropagation(),e.goToItem(h.Last);case m.Escape:n.preventDefault(),n.stopPropagation(),e.closeMenu(),S(()=>{var s;return(s=b(e.buttonRef))==null?void 0:s.focus({preventScroll:!0})});break;case m.Tab:n.preventDefault(),n.stopPropagation(),e.closeMenu(),S(()=>V(b(e.buttonRef),n.shiftKey?k.Previous:k.Next));break;default:n.key.length===1&&(e.search(n.key),o.value=setTimeout(()=>e.clearSearch(),350));break}}function d(n){switch(n.key){case m.Space:n.preventDefault();break}}let v=q(),c=y(()=>v!==null?(v.value&R.Open)===R.Open:e.menuState.value===0);return()=>{var n,g;let s={open:e.menuState.value===0},{id:p,...f}=t,r={"aria-activedescendant":e.activeItemIndex.value===null||(n=e.items.value[e.activeItemIndex.value])==null?void 0:n.id,"aria-labelledby":(g=b(e.buttonRef))==null?void 0:g.id,id:p,onKeydown:a,onKeyup:d,role:"menu",tabIndex:0,ref:e.itemsRef};return D({ourProps:r,theirProps:f,slot:s,attrs:l,slots:u,features:F.RenderStrategy|F.Static,visible:c.value,name:"MenuItems"})}}}),pe=P({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${w()}`}},setup(t,{slots:l,attrs:u,expose:i}){let e=T("MenuItem"),o=x(null);i({el:o,$el:o});let a=y(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===t.id:!1),d=ae(o),v=y(()=>({disabled:t.disabled,get textValue(){return d()},domRef:o}));Q(()=>e.registerItem(t.id,v)),Z(()=>e.unregisterItem(t.id)),$(()=>{e.menuState.value===0&&a.value&&e.activationTrigger.value!==0&&S(()=>{var r,I;return(I=(r=b(o))==null?void 0:r.scrollIntoView)==null?void 0:I.call(r,{block:"nearest"})})});function c(r){if(t.disabled)return r.preventDefault();e.closeMenu(),O(b(e.buttonRef))}function n(){if(t.disabled)return e.goToItem(h.Nothing);e.goToItem(h.Specific,t.id)}let g=te();function s(r){g.update(r)}function p(r){g.wasMoved(r)&&(t.disabled||a.value||e.goToItem(h.Specific,t.id,0))}function f(r){g.wasMoved(r)&&(t.disabled||a.value&&e.goToItem(h.Nothing))}return()=>{let{disabled:r}=t,I={active:a.value,disabled:r,close:e.closeMenu},{id:M,...L}=t;return D({ourProps:{id:M,ref:o,role:"menuitem",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,disabled:void 0,onClick:c,onFocus:n,onPointerenter:s,onMouseenter:s,onPointermove:p,onMousemove:p,onPointerleave:f,onMouseleave:f},theirProps:{...u,...L},slot:I,attrs:u,slots:l,name:"MenuItem"})}}});export{ce as M,de as R,ve as h,pe as y};
