import{B as W}from"./Authenticated-36680990.js";import{B as A}from"./Button-5cb0f01e.js";import{o as m,c as M,a as g,$ as U,r as y,A as D,j as S,_ as X,g as F,a0 as Y,Q as R,S as J,h as k,b as Z,w as C,F as j,L as G,H as ee,d as i,n as T,e as L,q as te,t as z,m as ne}from"./app-825cb09d.js";import{T as K}from"./default.css_vue_type_style_index_0_src_true_lang-ba7b10a7.js";import{m as oe,y as ae,g as re,F as le,o as b,i as se,u as ie,l as P,H as B,t as E,p as ue,N as O,b as w,D as de,e as V,v as q,I as ce,q as ve,K as fe,h as pe,S as he}from"./transition-198f9b98.js";import{b as me}from"./use-resolve-button-type-47bd049c.js";import{r as ge}from"./PencilIcon-76447f7f.js";import{r as we}from"./SearchIcon-59b03115.js";import"./ApplicationLogo-47fe7a8e.js";import"./_plugin-vue_export-helper-c27b6911.js";function be(e,o){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[g("path",{d:"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}),g("path",{"fill-rule":"evenodd",d:"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z","clip-rule":"evenodd"})])}function xe(e,o){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[g("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])}function _e(e,o){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[g("path",{"fill-rule":"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clip-rule":"evenodd"})])}function Ie(e,o){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[g("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})])}function ye(e,o){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[g("path",{"fill-rule":"evenodd",d:"M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1.586l-.293-.293a1 1 0 10-1.414 1.414l2 2 .002.002a.997.997 0 001.41 0l.002-.002 2-2a1 1 0 00-1.414-1.414l-.293.293V9z"})])}function Me(e,o){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[g("path",{"fill-rule":"evenodd",d:"M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})])}function Se(e,o){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[g("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})])}function ke(e){throw new Error("Unexpected object: "+e)}var I=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(I||{});function Re(e,o){let r=o.resolveItems();if(r.length<=0)return null;let l=o.resolveActiveIndex(),t=l??-1,h=(()=>{switch(e.focus){case 0:return r.findIndex(s=>!o.resolveDisabled(s));case 1:{let s=r.slice().reverse().findIndex((p,v,c)=>t!==-1&&c.length-v-1>=t?!1:!o.resolveDisabled(p));return s===-1?s:r.length-1-s}case 2:return r.findIndex((s,p)=>p<=t?!1:!o.resolveDisabled(s));case 3:{let s=r.slice().reverse().findIndex(p=>!o.resolveDisabled(p));return s===-1?s:r.length-1-s}case 4:return r.findIndex(s=>o.resolveId(s)===e.id);case 5:return null;default:ke(e)}})();return h===-1?l:h}function Ne({container:e,accept:o,walk:r,enabled:l}){U(()=>{let t=e.value;if(!t||l!==void 0&&!l.value)return;let h=oe(e);if(!h)return;let s=Object.assign(v=>o(v),{acceptNode:o}),p=h.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,s,!1);for(;p.nextNode();)r(p.currentNode)})}function H(e){return[e.screenX,e.screenY]}function Ce(){let e=y([-1,-1]);return{wasMoved(o){let r=H(o);return e.value[0]===r[0]&&e.value[1]===r[1]?!1:(e.value=r,!0)},update(o){e.value=H(o)}}}var Te=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Te||{}),Pe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Pe||{});function De(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Q=Symbol("MenuContext");function $(e){let o=J(Q,null);if(o===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,$),r}return o}let Be=D({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:o,attrs:r}){let l=y(1),t=y(null),h=y(null),s=y([]),p=y(""),v=y(null),c=y(1);function n(u=f=>f){let f=v.value!==null?s.value[v.value]:null,a=ce(u(s.value.slice()),_=>b(_.dataRef.domRef)),d=f?a.indexOf(f):null;return d===-1&&(d=null),{items:a,activeItemIndex:d}}let x={menuState:l,buttonRef:t,itemsRef:h,items:s,searchQuery:p,activeItemIndex:v,activationTrigger:c,closeMenu:()=>{l.value=1,v.value=null},openMenu:()=>l.value=0,goToItem(u,f,a){let d=n(),_=Re(u===I.Specific?{focus:I.Specific,id:f}:{focus:u},{resolveItems:()=>d.items,resolveActiveIndex:()=>d.activeItemIndex,resolveId:N=>N.id,resolveDisabled:N=>N.dataRef.disabled});p.value="",v.value=_,c.value=a??1,s.value=d.items},search(u){let f=p.value!==""?0:1;p.value+=u.toLowerCase();let a=(v.value!==null?s.value.slice(v.value+f).concat(s.value.slice(0,v.value+f)):s.value).find(_=>_.dataRef.textValue.startsWith(p.value)&&!_.dataRef.disabled),d=a?s.value.indexOf(a):-1;d===-1||d===v.value||(v.value=d,c.value=1)},clearSearch(){p.value=""},registerItem(u,f){let a=n(d=>[...d,{id:u,dataRef:f}]);s.value=a.items,v.value=a.activeItemIndex,c.value=1},unregisterItem(u){let f=n(a=>{let d=a.findIndex(_=>_.id===u);return d!==-1&&a.splice(d,1),a});s.value=f.items,v.value=f.activeItemIndex,c.value=1}};return ae([t,h],(u,f)=>{var a;x.closeMenu(),re(f,le.Loose)||(u.preventDefault(),(a=b(t))==null||a.focus())},S(()=>l.value===0)),X(Q,x),se(S(()=>ie(l.value,{[0]:P.Open,[1]:P.Closed}))),()=>{let u={open:l.value===0,close:x.closeMenu};return B({ourProps:{},theirProps:e,slot:u,slots:o,attrs:r,name:"Menu"})}}}),$e=D({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${E()}`}},setup(e,{attrs:o,slots:r,expose:l}){let t=$("MenuButton");l({el:t.buttonRef,$el:t.buttonRef});function h(c){switch(c.key){case w.Space:case w.Enter:case w.ArrowDown:c.preventDefault(),c.stopPropagation(),t.openMenu(),R(()=>{var n;(n=b(t.itemsRef))==null||n.focus({preventScroll:!0}),t.goToItem(I.First)});break;case w.ArrowUp:c.preventDefault(),c.stopPropagation(),t.openMenu(),R(()=>{var n;(n=b(t.itemsRef))==null||n.focus({preventScroll:!0}),t.goToItem(I.Last)});break}}function s(c){switch(c.key){case w.Space:c.preventDefault();break}}function p(c){e.disabled||(t.menuState.value===0?(t.closeMenu(),R(()=>{var n;return(n=b(t.buttonRef))==null?void 0:n.focus({preventScroll:!0})})):(c.preventDefault(),t.openMenu(),De(()=>{var n;return(n=b(t.itemsRef))==null?void 0:n.focus({preventScroll:!0})})))}let v=me(S(()=>({as:e.as,type:o.type})),t.buttonRef);return()=>{var c;let n={open:t.menuState.value===0},{id:x,...u}=e,f={ref:t.buttonRef,id:x,type:v.value,"aria-haspopup":"menu","aria-controls":(c=b(t.itemsRef))==null?void 0:c.id,"aria-expanded":e.disabled?void 0:t.menuState.value===0,onKeydown:h,onKeyup:s,onClick:p};return B({ourProps:f,theirProps:u,slot:n,attrs:o,slots:r,name:"MenuButton"})}}}),Ae=D({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${E()}`}},setup(e,{attrs:o,slots:r,expose:l}){let t=$("MenuItems"),h=y(null);l({el:t.itemsRef,$el:t.itemsRef}),Ne({container:S(()=>b(t.itemsRef)),enabled:S(()=>t.menuState.value===0),accept(n){return n.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none")}});function s(n){var x;switch(h.value&&clearTimeout(h.value),n.key){case w.Space:if(t.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),t.search(n.key);case w.Enter:if(n.preventDefault(),n.stopPropagation(),t.activeItemIndex.value!==null){let u=t.items.value[t.activeItemIndex.value];(x=b(u.dataRef.domRef))==null||x.click()}t.closeMenu(),q(b(t.buttonRef));break;case w.ArrowDown:return n.preventDefault(),n.stopPropagation(),t.goToItem(I.Next);case w.ArrowUp:return n.preventDefault(),n.stopPropagation(),t.goToItem(I.Previous);case w.Home:case w.PageUp:return n.preventDefault(),n.stopPropagation(),t.goToItem(I.First);case w.End:case w.PageDown:return n.preventDefault(),n.stopPropagation(),t.goToItem(I.Last);case w.Escape:n.preventDefault(),n.stopPropagation(),t.closeMenu(),R(()=>{var u;return(u=b(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case w.Tab:n.preventDefault(),n.stopPropagation(),t.closeMenu(),R(()=>de(b(t.buttonRef),n.shiftKey?V.Previous:V.Next));break;default:n.key.length===1&&(t.search(n.key),h.value=setTimeout(()=>t.clearSearch(),350));break}}function p(n){switch(n.key){case w.Space:n.preventDefault();break}}let v=ue(),c=S(()=>v!==null?(v.value&P.Open)===P.Open:t.menuState.value===0);return()=>{var n,x;let u={open:t.menuState.value===0},{id:f,...a}=e,d={"aria-activedescendant":t.activeItemIndex.value===null||(n=t.items.value[t.activeItemIndex.value])==null?void 0:n.id,"aria-labelledby":(x=b(t.buttonRef))==null?void 0:x.id,id:f,onKeydown:s,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return B({ourProps:d,theirProps:a,slot:u,attrs:o,slots:r,features:O.RenderStrategy|O.Static,visible:c.value,name:"MenuItems"})}}}),Le=D({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${E()}`}},setup(e,{slots:o,attrs:r,expose:l}){let t=$("MenuItem"),h=y(null);l({el:h,$el:h});let s=S(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),p=S(()=>({disabled:e.disabled,textValue:"",domRef:h}));F(()=>{var a,d;let _=(d=(a=b(h))==null?void 0:a.textContent)==null?void 0:d.toLowerCase().trim();_!==void 0&&(p.value.textValue=_)}),F(()=>t.registerItem(e.id,p)),Y(()=>t.unregisterItem(e.id)),U(()=>{t.menuState.value===0&&s.value&&t.activationTrigger.value!==0&&R(()=>{var a,d;return(d=(a=b(h))==null?void 0:a.scrollIntoView)==null?void 0:d.call(a,{block:"nearest"})})});function v(a){if(e.disabled)return a.preventDefault();t.closeMenu(),q(b(t.buttonRef))}function c(){if(e.disabled)return t.goToItem(I.Nothing);t.goToItem(I.Specific,e.id)}let n=Ce();function x(a){n.update(a)}function u(a){n.wasMoved(a)&&(e.disabled||s.value||t.goToItem(I.Specific,e.id,0))}function f(a){n.wasMoved(a)&&(e.disabled||s.value&&t.goToItem(I.Nothing))}return()=>{let{disabled:a}=e,d={active:s.value,disabled:a,close:t.closeMenu},{id:_,...N}=e;return B({ourProps:{id:_,ref:h,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,disabled:void 0,onClick:v,onFocus:c,onPointerenter:x,onMouseenter:x,onPointermove:u,onMousemove:u,onPointerleave:f,onMouseleave:f},theirProps:{...r,...N},slot:d,attrs:r,slots:o,name:"MenuItem"})}}});function Ee(e,o){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})])}function Fe(e,o){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})])}function je(e,o){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const ze={class:"py-4 px-4"},Oe={class:"overflow-x-auto"},Ve={class:"mx-auto"},He={class:"align-middle inline-block min-w-full"},Ue={class:"h-full flex flex-col"},Ke={class:"min-h-0 flex-1 flex overflow-hidden"},qe={class:"h-full relative flex flex-col border-r border-gray-200 bg-gray-100 w-1/3"},Qe=i("div",{class:"flex-shrink-0"},[i("div",{class:"h-16 px-6 flex flex-col justify-center bg-blue-200"},[i("div",{class:"flex items-baseline space-x-3"},[i("h2",{class:"text-lg font-medium text-gray-900"},"Notifications")])])],-1),We={class:"h-[74vh]"},Xe={class:"flex flex-row space-x-2 border-t border-b border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-500"},Ye={key:0,class:"bg-blue-100 h-[70vh] overflow-hidden overflow-y-auto no-scrollbar"},Je=i("div",{"aria-label":"Message list",class:"h-full text-center pt-6"},[i("span",{class:"text-md text-gray-500"},"Nothing to see here.")],-1),Ze=[Je],Ge={"aria-label":"Message list",class:"h-full"},et={role:"list",class:"border-b border-gray-200 divide-y divide-gray-200"},tt=["onClick"],nt={class:"flex justify-between space-x-3"},ot={class:"min-w-0 flex-1"},at=["href"],rt=i("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),lt={class:"text-sm font-medium text-gray-900 truncate"},st={class:"mt-1"},it={class:"line-clamp-2 text-sm text-gray-600"},ut={class:"flex flex-col grow w-full"},dt=i("div",{class:"flex h-16 items-center justify-end bg-blue-200"},null,-1),ct={class:"flex flex-col"},vt={key:0,class:"flex h-[74vh] justify-center items-center bg-white"},ft=i("img",{src:"images/no_notification_yet.png",class:"h-1/3 w-1/5",alt:""},null,-1),pt=[ft],ht={key:1,class:"flex justify-center h-[74vh] overflow-y-auto no-scrollbar"},mt={components:{Dialog:ve,DialogOverlay:fe,Menu:Be,MenuButton:$e,MenuItem:Le,MenuItems:Ae,TransitionChild:pe,TransitionRoot:he,Link:G,TimeAgo:K,ArchiveIconSolid:be,BellIcon:Ee,ChevronDownIcon:xe,ChevronUpIcon:_e,DotsVerticalIcon:Ie,FolderDownloadIcon:ye,MenuIcon:Fe,PencilIcon:ge,ReplyIcon:Me,SearchIcon:we,UserAddIcon:Se,XIcon:je},created(){},setup(){const e=y(!1);return{user,navigation,sidebarNavigation,userNavigation,messages,open:e}},data(){return{current_data_count:10}},methods:{viewNotification(e){this.$inertia.get(route("view_notification"),{id:e,data_count:this.current_data_count},{preserveScroll:!0,preserveState:!0})},deleteNotification(e){this.$inertia.delete(route("delete_notification",e))},showAllNotifications(){this.$inertia.get(route("notifications"))},showUnreadNotifications(){this.$inertia.get(route("notifications"),{filter:"read"},{preserveScroll:!0})},showReadNotifications(){this.$inertia.get(route("notifications"),{filter:"unread"},{preserveScroll:!0})},onScroll({target:{scrollTop:e,clientHeight:o,scrollHeight:r}}){e+o>=r&&axios.get(route("show_more_notifications"),{params:{data_count:this.current_data_count+=10}}).then(l=>{this.$page.props.notifications=l.data}).finally(()=>{console.log(this.current_data_count)})}}},Rt=Object.assign(mt,{__name:"Layout",setup(e){return(o,r)=>(m(),k(j,null,[g(Z(ee),{title:"Notifications"}),g(W,null,{header:C(()=>[]),default:C(()=>[i("div",ze,[i("div",Oe,[i("div",Ve,[i("div",He,[i("div",Ue,[i("div",Ke,[i("div",qe,[Qe,i("div",We,[i("div",Xe,[g(A,{buttonType:"blue",class:T(o.route().params.filter?"bg-blue-400":""),onClick:r[0]||(r[0]=l=>o.showAllNotifications())},{default:C(()=>[L("All")]),_:1},8,["class"]),g(A,{buttonType:"blue",class:T(o.route().current("notifications",{filter:"unread"})?"":"bg-blue-400"),onClick:r[1]||(r[1]=l=>o.showReadNotifications())},{default:C(()=>[L("Unread")]),_:1},8,["class"]),g(A,{buttonType:"blue",class:T(o.route().current("notifications",{filter:"read"})?"":"bg-blue-400"),onClick:r[2]||(r[2]=l=>o.showUnreadNotifications())},{default:C(()=>[L("Read")]),_:1},8,["class"])]),o.$page.props.notifications.length?(m(),k("div",{key:1,class:"bg-white h-[70vh] overflow-hidden hover:overflow-y-auto no-scrollbar w-full",onScroll:r[3]||(r[3]=(...l)=>o.onScroll&&o.onScroll(...l))},[i("div",Ge,[i("ul",et,[(m(!0),k(j,null,te(o.$page.props.notifications,l=>(m(),k("li",{key:l.id,class:T([[o.route().current("view_notification",{id:l.id})?"bg-indigo-50":"",l.seen?"":"bg-blue-200"],"relative cursor-pointer bg-white py-5 px-6 hover:bg-indigo-50"]),onClick:t=>o.viewNotification(l.id)},[i("div",nt,[i("div",ot,[i("a",{href:l.href,class:"block focus:outline-none"},[rt,i("p",lt,z(l.sender),1)],8,at)]),g(K,{class:"flex-shrink-0 whitespace-nowrap text-sm text-gray-500",datetime:l.created_at},null,8,["datetime"])]),i("div",st,[i("p",it,z(l.message),1)])],10,tt))),128))])])],32)):(m(),k("div",Ye,Ze))])]),i("div",ut,[dt,i("div",ct,[o.$page.props.user_notifications.length?(m(),k("div",ht,[ne(o.$slots,"default")])):(m(),k("div",vt,pt))])])])])])])])])]),_:3})],64))}});export{Rt as default};
