import{a as K,r as de,_ as ue}from"./XIcon-6ae3497b.js";import{o as m,s as M,a as s,_ as N,z as C,a2 as U,B as H,A as Y,a0 as G,$ as pe,a3 as J,j as c,c as w,d as e,w as a,g,F as T,e as W,t as x,h as he,p as fe,T as Z,u as v,n as $,Q as me,R as _e,y as V,q as ve}from"./app-7998ab3f.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{Y as L,_ as ee,V as P,h as B,S as A,G as te}from"./transition-3b4d2d6c.js";import{I as q,u as Q,o as k,g as ge,a as O,A as E,l as xe,d as X,e as z}from"./keyboard-b4baaa3b.js";import{s as we}from"./use-resolve-button-type-6cd319a6.js";import{g as se,S as oe,M as ae,b as I}from"./menu-c224ea41.js";import{s as le}from"./simplebar.min-e7ad064a.js";function ye(o,t){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})])}function be(o,t){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})])}function $e(o,t){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})])}function Ce(o,t){return m(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"})])}var De=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(De||{});let ne=Symbol("DisclosureContext");function R(o){let t=J(ne,null);if(t===null){let u=new Error(`<${o} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,R),u}return t}let ie=Symbol("DisclosurePanelContext");function ke(){return J(ie,null)}let re=N({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(o,{slots:t,attrs:u}){let n=C(o.defaultOpen?0:1),l=C(null),_=C(null),p={buttonId:C(`headlessui-disclosure-button-${q()}`),panelId:C(`headlessui-disclosure-panel-${q()}`),disclosureState:n,panel:l,button:_,toggleDisclosure(){n.value=Q(n.value,{0:1,1:0})},closeDisclosure(){n.value!==1&&(n.value=1)},close(d){p.closeDisclosure();let f=(()=>d?d instanceof HTMLElement?d:d.value instanceof HTMLElement?k(d):k(p.button):k(p.button))();f==null||f.focus()}};return U(ne,p),ge(H(()=>Q(n.value,{0:O.Open,1:O.Closed}))),()=>{let{defaultOpen:d,...f}=o,r={open:n.value===0,close:p.close};return E({theirProps:f,ourProps:{},slot:r,slots:t,attrs:u,name:"Disclosure"})}}}),Me=N({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(o,{attrs:t,slots:u,expose:n}){let l=R("DisclosureButton"),_=ke(),p=H(()=>_===null?!1:_.value===l.panelId.value);Y(()=>{p.value||o.id!==null&&(l.buttonId.value=o.id)}),G(()=>{p.value||(l.buttonId.value=null)});let d=C(null);n({el:d,$el:d}),p.value||pe(()=>{l.button.value=d.value});let f=we(H(()=>({as:o.as,type:t.type})),d);function r(){var h;o.disabled||(p.value?(l.toggleDisclosure(),(h=k(l.button))==null||h.focus()):l.toggleDisclosure())}function y(h){var i;if(!o.disabled)if(p.value)switch(h.key){case z.Space:case z.Enter:h.preventDefault(),h.stopPropagation(),l.toggleDisclosure(),(i=k(l.button))==null||i.focus();break}else switch(h.key){case z.Space:case z.Enter:h.preventDefault(),h.stopPropagation(),l.toggleDisclosure();break}}function b(h){switch(h.key){case z.Space:h.preventDefault();break}}return()=>{var h;let i={open:l.disclosureState.value===0},{id:F,...S}=o,ce=p.value?{ref:d,type:f.value,onClick:r,onKeydown:y}:{id:(h=l.buttonId.value)!=null?h:F,ref:d,type:f.value,"aria-expanded":l.disclosureState.value===0,"aria-controls":l.disclosureState.value===0||k(l.panel)?l.panelId.value:void 0,disabled:o.disabled?!0:void 0,onClick:r,onKeydown:y,onKeyup:b};return E({ourProps:ce,theirProps:S,slot:i,attrs:t,slots:u,name:"DisclosureButton"})}}}),Se=N({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(o,{attrs:t,slots:u,expose:n}){let l=R("DisclosurePanel");Y(()=>{o.id!==null&&(l.panelId.value=o.id)}),G(()=>{l.panelId.value=null}),n({el:l.panel,$el:l.panel}),U(ie,l.panelId);let _=xe(),p=H(()=>_!==null?(_.value&O.Open)===O.Open:l.disclosureState.value===0);return()=>{var d;let f={open:l.disclosureState.value===0,close:l.close},{id:r,...y}=o,b={id:(d=l.panelId.value)!=null?d:r,ref:l.panel};return E({ourProps:b,theirProps:y,slot:f,attrs:t,slots:u,features:X.RenderStrategy|X.Static,visible:p.value,name:"DisclosurePanel"})}}});const ze=[{id:1,new:!0,title:"Start the school year strong with Plus!",href:"https://www.google.com",date:"A week ago",imageSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{id:2,new:!0,title:"Start the school year strong with Plus. Learn the fun and simple way!",href:"#",date:"A week ago",imageSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}],Ie={name:"Notification",components:{Dialog:L,DialogOverlay:ee,DialogTitle:P,TransitionChild:B,TransitionRoot:A,XIcon:K,BellIcon:ye},setup(){const o=C(!1);return{notifications:ze,open:o}}},Be={class:"relative"},je=e("div",{class:"absolute w-3 h-3 bg-red-500 rounded-full top-1 right-4 animate-ping"},null,-1),He=e("div",{class:"absolute w-3 h-3 bg-red-700 rounded-full top-1 right-4"},null,-1),Te={class:"absolute inset-0 overflow-hidden"},Oe={class:"fixed inset-y-0 right-0 flex max-w-full"},Le={class:"w-screen max-w-md"},Pe={class:"flex flex-col h-full overflow-y-scroll bg-white shadow-md"},Ae={class:"flex-1 py-5 overflow-y-auto"},Ve={class:"flex items-start justify-between px-5"},Ne={class:"flex items-center"},Ee={class:"mt-10 md:mt-8"},Re={class:"flow-root"},Fe={role:"list",class:"-my-6 divide-y divide-gray-200"},qe=["href"],Qe={class:"w-12 h-12 overflow-hidden rounded-full"},Xe=["src"],Ke={class:"flex flex-col flex-1 ml-4"},Ue={class:"flex justify-between font-medium text-left text-gray-700"},Ye={class:"flex-shrink-0 w-3 h-3 my-auto ml-2 bg-red-700 rounded-full"},Ge={class:"mt-2 text-sm font-medium text-left text-gray-400"};function Je(o,t,u,n,l,_){const p=c("BellIcon"),d=c("DialogOverlay"),f=c("TransitionChild"),r=c("DialogTitle"),y=c("XIcon"),b=c("Dialog"),h=c("TransitionRoot");return m(),w(T,null,[e("div",Be,[e("button",{onClick:t[0]||(t[0]=i=>n.open=!0),class:"mt-1.5 mr-5"},[s(p,{class:"w-7 h-7 md:w-6 md:h-6","aria-hidden":"true"}),je,He])]),s(h,{as:"template",show:n.open,class:"z-50"},{default:a(()=>[s(b,{as:"div",class:"fixed inset-0 overflow-hidden",onClose:t[2]||(t[2]=i=>n.open=!1)},{default:a(()=>[e("div",Te,[s(f,{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[s(d,{class:"absolute inset-0 transition-opacity bg-black bg-opacity-50"})]),_:1}),e("div",Oe,[s(f,{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:a(()=>[e("div",Le,[e("div",Pe,[e("div",Ae,[e("div",Ve,[s(r,{class:"text-lg font-bold text-gray-700"},{default:a(()=>[g("Notifications")]),_:1}),e("div",Ne,[e("button",{type:"button",class:"mt-1 text-gray-400 hover:text-gray-500",onClick:t[1]||(t[1]=i=>n.open=!1)},[s(y,{class:"w-5 h-5","aria-hidden":"true"})])])]),e("div",Ee,[e("div",Re,[e("ul",Fe,[(m(!0),w(T,null,W(n.notifications,i=>(m(),w("li",{key:i.id},[e("a",{href:i.href,class:"flex items-center h-auto p-5 cursor-pointer hover:bg-indigo-50"},[e("div",Qe,[e("img",{src:i.imageSrc},null,8,Xe)]),e("div",Ke,[e("div",Ue,[e("h3",null,x(i.title),1),he(e("p",Ye,null,512),[[fe,i.new]])]),e("p",Ge,x(i.date),1)])],8,qe)]))),128))])])])])])])]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}const We=j(Ie,[["render",Je]]),Ze=[{id:1,name:"Throwback Hip Bag",href:"#",color:"Salmon",price:"$90.00",quantity:1,imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",imageAlt:"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."},{id:2,name:"Medium Stuff Satchel",href:"#",color:"Blue",price:"$32.00",quantity:1,imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",imageAlt:"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."}],et={Name:"Cart",components:{Dialog:L,DialogOverlay:ee,DialogTitle:P,TransitionChild:B,TransitionRoot:A,XIcon:K,ShoppingCartIcon:$e},setup(){const o=C(!1);return{products:Ze,open:o}}},tt={class:"relative"},st={class:"absolute inset-0 overflow-hidden"},ot={class:"fixed inset-y-0 right-0 flex max-w-full pl-10"},at={class:"w-screen max-w-md"},lt={class:"flex flex-col h-full overflow-y-scroll bg-white shadow-xl"},nt={class:"flex-1 px-4 py-6 overflow-y-auto sm:px-6"},it={class:"flex items-start justify-between"},rt={class:"flex items-center ml-3 h-7"},ct=e("span",{class:"sr-only"},"Close panel",-1),dt={class:"mt-8"},ut={class:"flow-root"},pt={role:"list",class:"-my-6 divide-y divide-gray-200"},ht={class:"flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md"},ft=["src","alt"],mt={class:"flex flex-col flex-1 ml-4"},_t={class:"flex justify-between text-base font-medium text-gray-900"},vt=["href"],gt={class:"ml-4"},xt={class:"mt-1 text-sm text-gray-500"},wt={class:"flex items-end justify-between flex-1 text-sm"},yt={class:"text-gray-500"},bt=e("div",{class:"flex"},[e("button",{type:"button",class:"font-medium text-indigo-600 hover:text-indigo-500"},"Remove")],-1),$t={class:"px-4 py-6 border-t border-gray-200 sm:px-6"},Ct=e("div",{class:"flex justify-between text-base font-medium text-gray-900"},[e("p",null,"Subtotal"),e("p",null,"$262.00")],-1),Dt=e("p",{class:"mt-0.5 text-sm text-gray-500"},"Shipping and taxes calculated at checkout.",-1),kt=e("div",{class:"mt-6"},[e("a",{href:"#",class:"flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"},"Checkout")],-1),Mt={class:"flex justify-center mt-6 text-sm text-center text-gray-500"},St=e("span",{"aria-hidden":"true"}," →",-1);function zt(o,t,u,n,l,_){const p=c("ShoppingCartIcon"),d=c("DialogOverlay"),f=c("TransitionChild"),r=c("DialogTitle"),y=c("XIcon"),b=c("Dialog"),h=c("TransitionRoot");return m(),w(T,null,[e("div",tt,[e("button",{onClick:t[0]||(t[0]=i=>n.open=!0),class:"mt-1.5 mr-5"},[s(p,{class:"w-7 h-7 md:w-6 md:h-6","aria-hidden":"true"})])]),s(h,{as:"template",show:n.open,class:"z-50"},{default:a(()=>[s(b,{as:"div",class:"fixed inset-0 overflow-hidden",onClose:t[3]||(t[3]=i=>n.open=!1)},{default:a(()=>[e("div",st,[s(f,{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[s(d,{class:"absolute inset-0 transition-opacity bg-black bg-opacity-50"})]),_:1}),e("div",ot,[s(f,{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:a(()=>[e("div",at,[e("div",lt,[e("div",nt,[e("div",it,[s(r,{class:"text-lg font-medium text-gray-900"},{default:a(()=>[g(" Shopping cart ")]),_:1}),e("div",rt,[e("button",{type:"button",class:"p-2 -m-2 text-gray-400 hover:text-gray-500",onClick:t[1]||(t[1]=i=>n.open=!1)},[ct,s(y,{class:"w-6 h-6","aria-hidden":"true"})])])]),e("div",dt,[e("div",ut,[e("ul",pt,[(m(!0),w(T,null,W(n.products,i=>(m(),w("li",{key:i.id,class:"flex py-6"},[e("div",ht,[e("img",{src:i.imageSrc,alt:i.imageAlt,class:"object-cover object-center w-full h-full"},null,8,ft)]),e("div",mt,[e("div",null,[e("div",_t,[e("h3",null,[e("a",{href:i.href},x(i.name),9,vt)]),e("p",gt,x(i.price),1)]),e("p",xt,x(i.color),1)]),e("div",wt,[e("p",yt,"Qty "+x(i.quantity),1),bt])])]))),128))])])])]),e("div",$t,[Ct,Dt,kt,e("div",Mt,[e("p",null,[g(" or "),e("button",{type:"button",class:"font-medium text-indigo-600 hover:text-indigo-500",onClick:t[2]||(t[2]=i=>n.open=!1)},[g("Continue Shopping"),St])])])])])])]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}const It=j(et,[["render",zt]]),Bt={name:"Header",components:{Notification:We,Cart:It,Disclosure:re,DisclosureButton:Me,DisclosurePanel:Se,Menu:se,MenuButton:oe,MenuItems:ae,UserCircleIcon:Ce,CogIcon:de,QuestionMarkCircleIcon:be,BreezeNavLink:ue},data(){return{switching:!1}},methods:{switchChild(o,t,u){this.switching||o==this.$page.props.current_active_child.child_id||(this.switching=!0,axios.post(route("parent.switch_child",{child_id:o,child_name:t,student_id:u})).then(n=>{n.data&&location.reload()}))},viewProfile(){this.$inertia.get(route("parent.profile"))}}},jt={class:"fixed top-0 inset-x-0 z-50 text-gray-700 bg-white md:top-0 md:sticky"},Ht={class:"max-w-4xl px-5 mx-auto"},Tt={class:"flex justify-between gap-5 items-center h-16 md:h-20"},Ot={class:"max-w-xs w-full text-center sm:text-lg font-semibold truncate"},Lt={class:"text-right"},Pt={class:"hidden md:flex"},At=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-white",fill:"currentColor",viewBox:"0 0 448 512"},[e("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})],-1),Vt={class:"flex md:hidden"},Nt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7 text-white",fill:"currentColor",viewBox:"0 0 448 512"},[e("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})],-1),Et={class:"px-5 pt-2 pb-3 border-b"},Rt={class:"font-medium text-gray-700 text-left"},Ft={class:"font-bold"},qt=e("hr",null,null,-1),Qt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-700",fill:"currentcolor",viewBox:"0 0 512 512"},[e("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})],-1),Xt=e("span",null,"Log Out",-1),Kt={class:"bg-white shadow-md z-50"},Ut={class:"flex items-center p-5 mb-2 border-b"},Yt={class:"font-medium text-gray-700"},Gt={class:"font-bold"},Jt={class:"py-2 mt-2 border-t"},Wt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-700",fill:"currentcolor",viewBox:"0 0 512 512"},[e("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})],-1),Zt=e("span",null,"Log Out",-1);function es(o,t,u,n,l,_){const p=c("MenuButton"),d=c("DisclosureButton"),f=c("UserCircleIcon"),r=c("BreezeNavLink"),y=c("MenuItems"),b=c("Menu"),h=c("DisclosurePanel"),i=c("Disclosure");return m(),w("div",jt,[s(i,{as:"nav",class:"text-white bg-indigo-600"},{default:a(({open:F})=>[e("div",Ht,[e("div",Tt,[e("div",Ot,x(o.$page.props.current_active_child.child_name),1),e("div",Lt,[s(b,{as:"div",class:"relative"},{default:a(()=>[e("div",Pt,[s(p,{class:"flex rounded-full pl-5 py-5 space-x-4 items-center"},{default:a(()=>[At]),_:1})]),e("div",Vt,[s(d,{class:"flex space-x-4 items-center"},{default:a(()=>[Nt]),_:1})]),s(Z,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:a(()=>[s(y,{class:"absolute w-96 py-3 mt-2 origin-top-right bg-white shadow-md -right-1 rounded-xl focus:outline-none"},{default:a(()=>[e("div",Et,[e("div",Rt,[g(" Hi, "),e("span",Ft,x(o.$page.props.auth.user.display_name),1)])]),e("div",{class:"flex items-center px-5 my-1 py-2 font-medium text-gray-700 hover:bg-indigo-50 cursor-pointer",onClick:t[0]||(t[0]=(...S)=>_.viewProfile&&_.viewProfile(...S))},[s(f,{class:"w-6 h-6 mr-3"}),g("Profile ")]),qt,s(r,{href:o.route("logout"),method:"post",as:"button",class:"flex items-center space-x-3 w-full ml-1 px-5 py-2 mt-3 font-medium text-left text-gray-700 hover:text-gray-700 hover:bg-indigo-50"},{default:a(()=>[Qt,Xt]),_:1},8,["href"])]),_:1})]),_:1})]),_:1})])])]),s(h,{class:"md:hidden lg:hidden"},{default:a(()=>[e("div",Kt,[e("div",Ut,[e("div",Yt,[g(" Hi, "),e("span",Gt,x(o.$page.props.auth.user.display_name),1)])]),e("div",{class:"cursor-pointer flex items-center px-5 py-3 font-medium text-gray-700 hover:bg-indigo-50",onClick:t[1]||(t[1]=(...S)=>_.viewProfile&&_.viewProfile(...S))},[s(f,{class:"w-6 h-6 mr-3"}),g("Profile ")]),e("div",Jt,[s(r,{href:o.route("logout"),method:"post",as:"button",class:"flex items-center space-x-3 w-full ml-1 px-5 py-2 mt-3 font-medium text-left text-gray-700 hover:text-gray-700 hover:bg-indigo-50"},{default:a(()=>[Wt,Zt]),_:1},8,["href"])])])]),_:1})]),_:1})])}const ts=j(Bt,[["render",es]]),ss={name:"Footer"},os={class:"hidden md:block text-white bg-gray-600"},as={class:"max-w-4xl p-5 mx-auto text-sm tracking-wider text-center"};function ls(o,t,u,n,l,_){return m(),w("footer",os,[e("div",as,x(new Date().getFullYear())+" © ALFA and Friends",1)])}const ns=j(ss,[["render",ls]]);const D=o=>(me("data-v-7889f402"),o=o(),_e(),o),is={class:"fixed inset-x-0 bottom-0 z-20 bg-white border border-t md:border-gray-200 md:border-b-2 md:top-[5rem] md:sticky"},rs={class:"max-w-4xl px-5 mx-auto"},cs={class:"flex justify-center items-center h-16 md:h-20"},ds={class:""},us=["href"],ps=D(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 576 512"},[e("path",{d:"M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"})],-1)),hs=D(()=>e("span",{class:"block text-xs pb-1"},"Home",-1)),fs=[ps,hs],ms={class:""},_s=["href"],vs=D(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 384 512"},[e("path",{d:"M256 64A64 64 0 1 0 128 64a64 64 0 1 0 128 0zM152.9 169.3c-23.7-8.4-44.5-24.3-58.8-45.8L74.6 94.2C64.8 79.5 45 75.6 30.2 85.4s-18.7 29.7-8.9 44.4L40.9 159c18.1 27.1 42.8 48.4 71.1 62.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32V384h32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V221.6c29.1-14.2 54.4-36.2 72.7-64.2l18.2-27.9c9.6-14.8 5.4-34.6-9.4-44.3s-34.6-5.5-44.3 9.4L291 122.4c-21.8 33.4-58.9 53.6-98.8 53.6c-12.6 0-24.9-2-36.6-5.8c-.9-.3-1.8-.7-2.7-.9z"})],-1)),gs=D(()=>e("span",{class:"block text-xs pb-1 whitespace-nowrap"},"Kids",-1)),xs=[vs,gs],ws={class:""},ys=["href"],bs=D(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 640 512"},[e("path",{d:"M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"})],-1)),$s=D(()=>e("span",{class:"block text-xs pb-1 whitespace-nowrap"},"Messages",-1)),Cs=[bs,$s],Ds={class:"relative"},ks=D(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 576 512"},[e("path",{d:"M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"})],-1)),Ms=D(()=>e("span",{class:"block text-xs pb-1 whitespace-nowrap"},"Class",-1)),Ss={class:"px-1 py-1"},zs={class:"px-1 py-1"},Is={class:"px-1 py-1"},Bs={components:{simplebar:le}},js=Object.assign(Bs,{__name:"Navigation",setup(o){return(t,u)=>{const n=c("EditIcon"),l=c("DuplicateIcon"),_=c("ArchiveIcon"),p=c("MoveIcon"),d=c("DeleteIcon");return m(),w("div",is,[s(v(re),{as:"nav",class:"text-white bg-white"},{default:a(({open:f})=>[e("div",rs,[e("div",cs,[s(v(se),{as:"div",class:"flex justify-evenly"},{default:a(()=>[e("div",ds,[e("a",{href:t.route("parent.home"),class:$([t.route().current("parent.home")?"text-indigo-500 border-b-2 border-transparent border-indigo-500 ":"text-gray-500 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500","flex flex-col space-y-1 items-center justify-center text-center mx-auto px-4 pt-2 w-full"])},fs,10,us)]),e("div",ms,[e("a",{href:t.route("parent.children"),class:$([t.route().current("parent.children")?"text-indigo-500 border-b-2 border-transparent border-indigo-500 ":"text-gray-500 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500","flex flex-col space-y-1 items-center justify-center text-center mx-auto px-4 pt-2 w-full"])},xs,10,_s)]),e("div",ws,[e("a",{href:t.route("parent.messages"),class:$([t.route().current("parent.messages")?"text-indigo-500 border-b-2 border-transparent border-indigo-500 ":"text-gray-500 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500","flex flex-col space-y-1 items-center justify-center text-center mx-auto px-4 pt-2 w-full"])},Cs,10,ys)]),e("div",Ds,[s(v(oe),{class:"flex flex-col space-y-1 items-center justify-center text-center mx-auto px-4 pt-2 w-full text-gray-500 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"},{default:a(()=>[ks,Ms]),_:1}),s(Z,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:a(()=>[s(v(ae),{class:"absolute w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none bottom-16 right-0"},{default:a(()=>[e("div",Ss,[s(v(I),null,{default:a(({active:r})=>[e("button",{class:$([r?"bg-violet-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"])},[s(n,{active:r,class:"mr-2 h-5 w-5 text-violet-400","aria-hidden":"true"},null,8,["active"]),g(" Edit ")],2)]),_:1}),s(v(I),null,{default:a(({active:r})=>[e("button",{class:$([r?"bg-violet-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"])},[s(l,{active:r,class:"mr-2 h-5 w-5 text-violet-400","aria-hidden":"true"},null,8,["active"]),g(" Duplicate ")],2)]),_:1})]),e("div",zs,[s(v(I),null,{default:a(({active:r})=>[e("button",{class:$([r?"bg-violet-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"])},[s(_,{active:r,class:"mr-2 h-5 w-5 text-violet-400","aria-hidden":"true"},null,8,["active"]),g(" Archive ")],2)]),_:1}),s(v(I),null,{default:a(({active:r})=>[e("button",{class:$([r?"bg-violet-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"])},[s(p,{active:r,class:"mr-2 h-5 w-5 text-violet-400","aria-hidden":"true"},null,8,["active"]),g(" Move ")],2)]),_:1})]),e("div",Is,[s(v(I),null,{default:a(({active:r})=>[e("button",{class:$([r?"bg-violet-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"])},[s(d,{active:r,class:"mr-2 h-5 w-5 text-violet-400","aria-hidden":"true"},null,8,["active"]),g(" Delete ")],2)]),_:1})])]),_:1})]),_:1})])]),_:1})])])]),_:1})])}}}),Hs=j(js,[["__scopeId","data-v-7889f402"]]),Ts=e("div",{class:"fixed inset-0 bg-black/40"},null,-1),Os={class:"fixed inset-0 overflow-y-auto mt-44"},Ls={class:"flex min-h-full items-center justify-center p-4 text-center"},Ps={class:"fixed inset-0 w-screen overflow-y-auto"},As={class:"flex min-h-full items-center justify-center p-4"},Vs={class:"flex items-center justify-between mb-2 rounded-t text-lg font-semibold text-slate-800 dark:text-white"},Ns=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Es=[Ns],Rs=e("hr",{class:"mb-3"},null,-1),Fs={components:{TransitionRoot:A,TransitionChild:B,Dialog:L,DialogPanel:te,DialogTitle:P},props:{isOpen:Boolean},methods:{closeModal(){this.$emit("close",!1)}}},qs=Object.assign(Fs,{__name:"SimpleModal",setup(o){return(t,u)=>(m(),M(v(A),{appear:"",show:o.isOpen,as:"template"},{default:a(()=>[s(v(L),{as:"div",onClose:t.closeModal,class:"relative z-50",static:"true"},{default:a(()=>[s(v(B),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[Ts]),_:1}),e("div",Os,[e("div",Ls,[s(v(B),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e("div",Ps,[e("div",As,[s(v(te),{class:"w-full max-w-3xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all z-10 min-h-80"},{default:a(()=>[t.$slots.header?(m(),M(v(P),{key:0,as:"div"},{default:a(()=>[e("div",Vs,[V(t.$slots,"header"),e("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"default-modal",onClick:u[0]||(u[0]=(...n)=>t.closeModal&&t.closeModal(...n))},Es)]),Rs]),_:3})):ve("",!0),V(t.$slots,"default")]),_:3})])])]),_:3})])])]),_:3},8,["onClose"])]),_:3},8,["show"]))}}),Qs={class:"flex andika-regular"},Xs={class:"min-h-screen bg-gray-100 w-full"},Ks={class:"flex flex-col bg-indigo-50 relative h-full justify-between mt-16 md:mt-0"},Us={class:"bg-orange-50 h-full p-3"},Ys={class:"text-center flex flex-col items-center justify-start space-y-2 p-6"},Gs={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-2/12 w-2/12 text-green-500",viewBox:"0 0 512 512",fill:"currentColor"},Js=e("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},null,-1),Ws=[Js],Zs={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-2/12 w-2/12 text-red-500",viewBox:"0 0 512 512",fill:"currentColor"},eo=e("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),to=[eo],so={class:"md:text-2xl text-base text-gray-900 font-semibold text-center"},oo={class:"text-gray-600 my-2"},ao={class:"py-2 text-center"},lo={components:{simplebar:le},data(){return{show_modal:!!this.$page.props.flash.type}}},mo=Object.assign(lo,{__name:"Authenticated",setup(o){return(t,u)=>(m(),w("div",Qs,[e("div",Xs,[s(ts),s(Hs),e("main",Ks,[e("div",Us,[V(t.$slots,"default")]),s(ns),s(qs,{open:t.$page.props.flash.type!==null,"onClose:modal":u[1]||(u[1]=n=>t.$page.props.flash.type=null),class:"md:w-2/6"},{default:a(()=>[e("div",Ys,[t.$page.props.flash.type=="success"?(m(),w("svg",Gs,Ws)):(m(),w("svg",Zs,to)),e("h3",so,x(t.$page.props.flash.header),1),e("p",oo,x(t.$page.props.flash.message),1),e("div",ao,[e("button",{onClick:u[0]||(u[0]=n=>t.$page.props.flash.type=null),class:"rounded px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-1.5"},"Close")])])]),_:1},8,["open"])])])]))}});export{mo as _,qs as a};
