import{B as q}from"./Authenticated-e419867d.js";import{o as m,p as M,a as x,a0 as H,q as y,C as D,x as k,$ as Q,s as A,a1 as W,Q as R,S as X,c as S,u as Y,w as L,F as E,L as J,H as Z,b as s,n as N,r as G,t as F,A as ee}from"./app-e501deca.js";import{T as V}from"./default.css_vue_type_style_index_0_src_true_lang-1fd6dac0.js";import{r as te}from"./PencilIcon-590e89ad.js";import{r as ne}from"./SearchIcon-0cd5810b.js";import{m as oe,y as re,g as ae,F as le,o as b,i as ie,u as se,l as P,H as T,t as B,p as ue,N as j,b as g,D as de,e as z,v as U,I as ce,q as ve,K as pe,h as fe,S as he}from"./transition-23404d95.js";import{b as me}from"./use-resolve-button-type-13a41d0d.js";import"./ApplicationLogo-c140f20f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Button-c51487b6.js";function ge(e,n){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[x("path",{d:"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}),x("path",{"fill-rule":"evenodd",d:"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z","clip-rule":"evenodd"})])}function be(e,n){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[x("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])}function we(e,n){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[x("path",{"fill-rule":"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clip-rule":"evenodd"})])}function xe(e,n){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[x("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})])}function _e(e,n){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[x("path",{"fill-rule":"evenodd",d:"M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1.586l-.293-.293a1 1 0 10-1.414 1.414l2 2 .002.002a.997.997 0 001.41 0l.002-.002 2-2a1 1 0 00-1.414-1.414l-.293.293V9z"})])}function Ie(e,n){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[x("path",{"fill-rule":"evenodd",d:"M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})])}function ye(e,n){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[x("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})])}function Me(e){throw new Error("Unexpected object: "+e)}var I=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(I||{});function ke(e,n){let a=n.resolveItems();if(a.length<=0)return null;let l=n.resolveActiveIndex(),t=l??-1,h=(()=>{switch(e.focus){case 0:return a.findIndex(i=>!n.resolveDisabled(i));case 1:{let i=a.slice().reverse().findIndex((f,v,c)=>t!==-1&&c.length-v-1>=t?!1:!n.resolveDisabled(f));return i===-1?i:a.length-1-i}case 2:return a.findIndex((i,f)=>f<=t?!1:!n.resolveDisabled(i));case 3:{let i=a.slice().reverse().findIndex(f=>!n.resolveDisabled(f));return i===-1?i:a.length-1-i}case 4:return a.findIndex(i=>n.resolveId(i)===e.id);case 5:return null;default:Me(e)}})();return h===-1?l:h}function Se({container:e,accept:n,walk:a,enabled:l}){H(()=>{let t=e.value;if(!t||l!==void 0&&!l.value)return;let h=oe(e);if(!h)return;let i=Object.assign(v=>n(v),{acceptNode:n}),f=h.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,i,!1);for(;f.nextNode();)a(f.currentNode)})}function O(e){return[e.screenX,e.screenY]}function Re(){let e=y([-1,-1]);return{wasMoved(n){let a=O(n);return e.value[0]===a[0]&&e.value[1]===a[1]?!1:(e.value=a,!0)},update(n){e.value=O(n)}}}var Ce=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ce||{}),Ne=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ne||{});function Pe(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let K=Symbol("MenuContext");function $(e){let n=X(K,null);if(n===null){let a=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,$),a}return n}let De=D({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:a}){let l=y(1),t=y(null),h=y(null),i=y([]),f=y(""),v=y(null),c=y(1);function o(u=p=>p){let p=v.value!==null?i.value[v.value]:null,r=ce(u(i.value.slice()),_=>b(_.dataRef.domRef)),d=p?r.indexOf(p):null;return d===-1&&(d=null),{items:r,activeItemIndex:d}}let w={menuState:l,buttonRef:t,itemsRef:h,items:i,searchQuery:f,activeItemIndex:v,activationTrigger:c,closeMenu:()=>{l.value=1,v.value=null},openMenu:()=>l.value=0,goToItem(u,p,r){let d=o(),_=ke(u===I.Specific?{focus:I.Specific,id:p}:{focus:u},{resolveItems:()=>d.items,resolveActiveIndex:()=>d.activeItemIndex,resolveId:C=>C.id,resolveDisabled:C=>C.dataRef.disabled});f.value="",v.value=_,c.value=r??1,i.value=d.items},search(u){let p=f.value!==""?0:1;f.value+=u.toLowerCase();let r=(v.value!==null?i.value.slice(v.value+p).concat(i.value.slice(0,v.value+p)):i.value).find(_=>_.dataRef.textValue.startsWith(f.value)&&!_.dataRef.disabled),d=r?i.value.indexOf(r):-1;d===-1||d===v.value||(v.value=d,c.value=1)},clearSearch(){f.value=""},registerItem(u,p){let r=o(d=>[...d,{id:u,dataRef:p}]);i.value=r.items,v.value=r.activeItemIndex,c.value=1},unregisterItem(u){let p=o(r=>{let d=r.findIndex(_=>_.id===u);return d!==-1&&r.splice(d,1),r});i.value=p.items,v.value=p.activeItemIndex,c.value=1}};return re([t,h],(u,p)=>{var r;w.closeMenu(),ae(p,le.Loose)||(u.preventDefault(),(r=b(t))==null||r.focus())},k(()=>l.value===0)),Q(K,w),ie(k(()=>se(l.value,{[0]:P.Open,[1]:P.Closed}))),()=>{let u={open:l.value===0,close:w.closeMenu};return T({ourProps:{},theirProps:e,slot:u,slots:n,attrs:a,name:"Menu"})}}}),Te=D({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${B()}`}},setup(e,{attrs:n,slots:a,expose:l}){let t=$("MenuButton");l({el:t.buttonRef,$el:t.buttonRef});function h(c){switch(c.key){case g.Space:case g.Enter:case g.ArrowDown:c.preventDefault(),c.stopPropagation(),t.openMenu(),R(()=>{var o;(o=b(t.itemsRef))==null||o.focus({preventScroll:!0}),t.goToItem(I.First)});break;case g.ArrowUp:c.preventDefault(),c.stopPropagation(),t.openMenu(),R(()=>{var o;(o=b(t.itemsRef))==null||o.focus({preventScroll:!0}),t.goToItem(I.Last)});break}}function i(c){switch(c.key){case g.Space:c.preventDefault();break}}function f(c){e.disabled||(t.menuState.value===0?(t.closeMenu(),R(()=>{var o;return(o=b(t.buttonRef))==null?void 0:o.focus({preventScroll:!0})})):(c.preventDefault(),t.openMenu(),Pe(()=>{var o;return(o=b(t.itemsRef))==null?void 0:o.focus({preventScroll:!0})})))}let v=me(k(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var c;let o={open:t.menuState.value===0},{id:w,...u}=e,p={ref:t.buttonRef,id:w,type:v.value,"aria-haspopup":"menu","aria-controls":(c=b(t.itemsRef))==null?void 0:c.id,"aria-expanded":e.disabled?void 0:t.menuState.value===0,onKeydown:h,onKeyup:i,onClick:f};return T({ourProps:p,theirProps:u,slot:o,attrs:n,slots:a,name:"MenuButton"})}}}),$e=D({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${B()}`}},setup(e,{attrs:n,slots:a,expose:l}){let t=$("MenuItems"),h=y(null);l({el:t.itemsRef,$el:t.itemsRef}),Se({container:k(()=>b(t.itemsRef)),enabled:k(()=>t.menuState.value===0),accept(o){return o.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:o.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(o){o.setAttribute("role","none")}});function i(o){var w;switch(h.value&&clearTimeout(h.value),o.key){case g.Space:if(t.searchQuery.value!=="")return o.preventDefault(),o.stopPropagation(),t.search(o.key);case g.Enter:if(o.preventDefault(),o.stopPropagation(),t.activeItemIndex.value!==null){let u=t.items.value[t.activeItemIndex.value];(w=b(u.dataRef.domRef))==null||w.click()}t.closeMenu(),U(b(t.buttonRef));break;case g.ArrowDown:return o.preventDefault(),o.stopPropagation(),t.goToItem(I.Next);case g.ArrowUp:return o.preventDefault(),o.stopPropagation(),t.goToItem(I.Previous);case g.Home:case g.PageUp:return o.preventDefault(),o.stopPropagation(),t.goToItem(I.First);case g.End:case g.PageDown:return o.preventDefault(),o.stopPropagation(),t.goToItem(I.Last);case g.Escape:o.preventDefault(),o.stopPropagation(),t.closeMenu(),R(()=>{var u;return(u=b(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case g.Tab:o.preventDefault(),o.stopPropagation(),t.closeMenu(),R(()=>de(b(t.buttonRef),o.shiftKey?z.Previous:z.Next));break;default:o.key.length===1&&(t.search(o.key),h.value=setTimeout(()=>t.clearSearch(),350));break}}function f(o){switch(o.key){case g.Space:o.preventDefault();break}}let v=ue(),c=k(()=>v!==null?(v.value&P.Open)===P.Open:t.menuState.value===0);return()=>{var o,w;let u={open:t.menuState.value===0},{id:p,...r}=e,d={"aria-activedescendant":t.activeItemIndex.value===null||(o=t.items.value[t.activeItemIndex.value])==null?void 0:o.id,"aria-labelledby":(w=b(t.buttonRef))==null?void 0:w.id,id:p,onKeydown:i,onKeyup:f,role:"menu",tabIndex:0,ref:t.itemsRef};return T({ourProps:d,theirProps:r,slot:u,attrs:n,slots:a,features:j.RenderStrategy|j.Static,visible:c.value,name:"MenuItems"})}}}),Be=D({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${B()}`}},setup(e,{slots:n,attrs:a,expose:l}){let t=$("MenuItem"),h=y(null);l({el:h,$el:h});let i=k(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),f=k(()=>({disabled:e.disabled,textValue:"",domRef:h}));A(()=>{var r,d;let _=(d=(r=b(h))==null?void 0:r.textContent)==null?void 0:d.toLowerCase().trim();_!==void 0&&(f.value.textValue=_)}),A(()=>t.registerItem(e.id,f)),W(()=>t.unregisterItem(e.id)),H(()=>{t.menuState.value===0&&i.value&&t.activationTrigger.value!==0&&R(()=>{var r,d;return(d=(r=b(h))==null?void 0:r.scrollIntoView)==null?void 0:d.call(r,{block:"nearest"})})});function v(r){if(e.disabled)return r.preventDefault();t.closeMenu(),U(b(t.buttonRef))}function c(){if(e.disabled)return t.goToItem(I.Nothing);t.goToItem(I.Specific,e.id)}let o=Re();function w(r){o.update(r)}function u(r){o.wasMoved(r)&&(e.disabled||i.value||t.goToItem(I.Specific,e.id,0))}function p(r){o.wasMoved(r)&&(e.disabled||i.value&&t.goToItem(I.Nothing))}return()=>{let{disabled:r}=e,d={active:i.value,disabled:r,close:t.closeMenu},{id:_,...C}=e;return T({ourProps:{id:_,ref:h,role:"menuitem",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,disabled:void 0,onClick:v,onFocus:c,onPointerenter:w,onMouseenter:w,onPointermove:u,onMousemove:u,onPointerleave:p,onMouseleave:p},theirProps:{...a,...C},slot:d,attrs:a,slots:n,name:"MenuItem"})}}});function Ae(e,n){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[x("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})])}function Le(e,n){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[x("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})])}function Ee(e,n){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[x("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const Fe={class:"py-4 px-4"},je={class:"overflow-x-auto"},ze={class:"mx-auto"},Oe={class:"align-middle inline-block min-w-full"},He={class:"h-full flex flex-col"},Ve={class:"min-h-0 flex-1 flex overflow-hidden"},Ue={class:"h-full relative flex flex-col border-r border-gray-200 bg-gray-100 w-1/3"},Ke=s("div",{class:"flex-shrink-0"},[s("div",{class:"h-16 px-6 flex flex-col justify-center bg-blue-200"},[s("div",{class:"flex items-baseline space-x-3"},[s("h2",{class:"text-lg font-medium text-gray-900"},"Notifications")])])],-1),qe={class:"h-[74vh]"},Qe={class:"flex flex-row space-x-2 border-t border-b border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-500"},We={key:0,class:"bg-blue-100 h-[70vh] overflow-hidden overflow-y-auto no-scrollbar"},Xe=s("div",{"aria-label":"Message list",class:"h-full text-center pt-6"},[s("span",{class:"text-md text-gray-500"},"Nothing to see here.")],-1),Ye=[Xe],Je={"aria-label":"Message list",class:"h-full"},Ze={role:"list",class:"border-b border-gray-200 divide-y divide-gray-200"},Ge=["onClick"],et={class:"flex justify-between space-x-3"},tt={class:"min-w-0 flex-1"},nt=["href"],ot=s("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),rt={class:"text-sm font-medium text-gray-900 truncate"},at={class:"mt-1"},lt={class:"line-clamp-2 text-sm text-gray-600"},it={class:"flex flex-col grow w-full"},st=s("div",{class:"flex h-16 items-center justify-end bg-blue-200"},null,-1),ut={class:"flex flex-col"},dt={key:0,class:"flex h-[74vh] justify-center items-center bg-white"},ct=s("img",{src:"images/no_notification_yet.png",class:"h-1/3 w-1/5",alt:""},null,-1),vt=[ct],pt={key:1,class:"flex justify-center h-[74vh] overflow-y-auto no-scrollbar"},ft={components:{Dialog:ve,DialogOverlay:pe,Menu:De,MenuButton:Te,MenuItem:Be,MenuItems:$e,TransitionChild:fe,TransitionRoot:he,Link:J,TimeAgo:V,ArchiveIconSolid:ge,BellIcon:Ae,ChevronDownIcon:be,ChevronUpIcon:we,DotsVerticalIcon:xe,FolderDownloadIcon:_e,MenuIcon:Le,PencilIcon:te,ReplyIcon:Ie,SearchIcon:ne,UserAddIcon:ye,XIcon:Ee},created(){console.log(route().current())},setup(){const e=y(!1);return{user,navigation,sidebarNavigation,userNavigation,messages,open:e}},data(){return{current_data_count:10}},methods:{viewNotification(e){this.$inertia.get(route("view_notification"),{id:e,data_count:this.current_data_count},{preserveScroll:!0,preserveState:!0})},deleteNotification(e){this.$inertia.delete(route("delete_notification",e))},showAllNotifications(){this.$inertia.get(route("notifications"))},showUnreadNotifications(){this.$inertia.get(route("notifications"),{filter:"read"},{preserveScroll:!0})},showReadNotifications(){this.$inertia.get(route("notifications"),{filter:"unread"},{preserveScroll:!0})},onScroll({target:{scrollTop:e,clientHeight:n,scrollHeight:a}}){e+n>=a&&axios.get(route("show_more_notifications"),{params:{data_count:this.current_data_count+=10}}).then(l=>{this.$page.props.notifications=l.data}).finally(()=>{console.log(this.current_data_count)})}}},kt=Object.assign(ft,{__name:"Layout",setup(e){return(n,a)=>(m(),S(E,null,[x(Y(Z),{title:"Notifications"}),x(q,null,{header:L(()=>[]),default:L(()=>[s("div",Fe,[s("div",je,[s("div",ze,[s("div",Oe,[s("div",He,[s("div",Ve,[s("div",Ue,[Ke,s("div",qe,[s("div",Qe,[s("button",{class:N(["shadow-md inline-flex items-center border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest focus:outline-none transition ease-in-out duration-150 cursor-pointer",n.route().current("notifications",{filter:"unread"})||n.route().current("notifications",{filter:"read"})?"bg-blue-400 px-2 py-1":"bg-blue-700 py-1 px-2"]),onClick:a[0]||(a[0]=l=>n.showAllNotifications())},"All",2),s("button",{class:N(["shadow-md inline-flex items-center border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest focus:outline-none transition ease-in-out duration-150 cursor-pointer",n.route().current("notifications",{filter:"unread"})?"bg-blue-700 px-2 py-1":"bg-blue-400 py-1 px-2"]),onClick:a[1]||(a[1]=l=>n.showReadNotifications())},"Unread",2),s("button",{class:N(["shadow-md inline-flex items-center border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest focus:outline-none transition ease-in-out duration-150 cursor-pointer",n.route().current("notifications",{filter:"read"})?"bg-blue-700 px-2 py-1":"bg-blue-400 py-1 px-2"]),onClick:a[2]||(a[2]=l=>n.showUnreadNotifications())},"Read",2)]),n.$page.props.notifications.length?(m(),S("div",{key:1,class:"bg-white h-[70vh] overflow-hidden hover:overflow-y-auto no-scrollbar w-full",onScroll:a[3]||(a[3]=(...l)=>n.onScroll&&n.onScroll(...l))},[s("div",Je,[s("ul",Ze,[(m(!0),S(E,null,G(n.$page.props.notifications,l=>(m(),S("li",{key:l.id,class:N([[n.route().current("view_notification",{id:l.id})?"bg-indigo-50":"",l.seen?"":"bg-blue-200"],"relative cursor-pointer bg-white py-5 px-6 hover:bg-indigo-50"]),onClick:t=>n.viewNotification(l.id)},[s("div",et,[s("div",tt,[s("a",{href:l.href,class:"block focus:outline-none"},[ot,s("p",rt,F(l.sender),1)],8,nt)]),x(V,{class:"flex-shrink-0 whitespace-nowrap text-sm text-gray-500",datetime:l.created_at},null,8,["datetime"])]),s("div",at,[s("p",lt,F(l.message),1)])],10,Ge))),128))])])],32)):(m(),S("div",We,Ye))])]),s("div",it,[st,s("div",ut,[n.$page.props.user_notifications.length?(m(),S("div",pt,[ee(n.$slots,"default")])):(m(),S("div",dt,vt))])])])])])])])])]),_:3})],64))}});export{kt as default};
