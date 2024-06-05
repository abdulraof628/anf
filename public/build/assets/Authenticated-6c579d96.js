import{a as Y,r as ne,_ as ae}from"./XIcon-d4937228.js";import{o as i,s as M,a as o,_ as R,z as b,a2 as J,B as L,A as W,a0 as Z,$ as ie,a3 as ee,j as p,c as u,d as e,w as r,g as $,F as D,e as T,t as x,h as re,p as ce,T as de,q as B,n as I,u as k,Q as ue,R as pe,y as E}from"./app-2cb814f6.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{Y as P,_ as te,V,h as H,S as A,G as se}from"./transition-f7e95242.js";import{I as U,u as K,o as z,g as he,a as O,A as F,l as _e,d as G,e as S}from"./keyboard-5b23c67a.js";import{s as me}from"./use-resolve-button-type-20003b5a.js";import{g as fe,S as ge,M as xe}from"./menu-9ca6990d.js";import{s as q}from"./simplebar.min-27efebb1.js";function ve(t,s){return i(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})])}function we(t,s){return i(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})])}function ye(t,s){return i(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})])}function be(t,s){return i(),M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"})])}var $e=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))($e||{});let oe=Symbol("DisclosureContext");function Q(t){let s=ee(oe,null);if(s===null){let c=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,Q),c}return s}let le=Symbol("DisclosurePanelContext");function Ce(){return ee(le,null)}let ke=R({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:s,attrs:c}){let n=b(t.defaultOpen?0:1),l=b(null),g=b(null),_={buttonId:b(`headlessui-disclosure-button-${U()}`),panelId:b(`headlessui-disclosure-panel-${U()}`),disclosureState:n,panel:l,button:g,toggleDisclosure(){n.value=K(n.value,{0:1,1:0})},closeDisclosure(){n.value!==1&&(n.value=1)},close(d){_.closeDisclosure();let f=(()=>d?d instanceof HTMLElement?d:d.value instanceof HTMLElement?z(d):z(_.button):z(_.button))();f==null||f.focus()}};return J(oe,_),he(L(()=>K(n.value,{0:O.Open,1:O.Closed}))),()=>{let{defaultOpen:d,...f}=t,v={open:n.value===0,close:_.close};return F({theirProps:f,ourProps:{},slot:v,slots:s,attrs:c,name:"Disclosure"})}}}),ze=R({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(t,{attrs:s,slots:c,expose:n}){let l=Q("DisclosureButton"),g=Ce(),_=L(()=>g===null?!1:g.value===l.panelId.value);W(()=>{_.value||t.id!==null&&(l.buttonId.value=t.id)}),Z(()=>{_.value||(l.buttonId.value=null)});let d=b(null);n({el:d,$el:d}),_.value||ie(()=>{l.button.value=d.value});let f=me(L(()=>({as:t.as,type:s.type})),d);function v(){var h;t.disabled||(_.value?(l.toggleDisclosure(),(h=z(l.button))==null||h.focus()):l.toggleDisclosure())}function w(h){var a;if(!t.disabled)if(_.value)switch(h.key){case S.Space:case S.Enter:h.preventDefault(),h.stopPropagation(),l.toggleDisclosure(),(a=z(l.button))==null||a.focus();break}else switch(h.key){case S.Space:case S.Enter:h.preventDefault(),h.stopPropagation(),l.toggleDisclosure();break}}function y(h){switch(h.key){case S.Space:h.preventDefault();break}}return()=>{var h;let a={open:l.disclosureState.value===0},{id:X,...m}=t,N=_.value?{ref:d,type:f.value,onClick:v,onKeydown:w}:{id:(h=l.buttonId.value)!=null?h:X,ref:d,type:f.value,"aria-expanded":l.disclosureState.value===0,"aria-controls":l.disclosureState.value===0||z(l.panel)?l.panelId.value:void 0,disabled:t.disabled?!0:void 0,onClick:v,onKeydown:w,onKeyup:y};return F({ourProps:N,theirProps:m,slot:a,attrs:s,slots:c,name:"DisclosureButton"})}}}),Me=R({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:s,slots:c,expose:n}){let l=Q("DisclosurePanel");W(()=>{t.id!==null&&(l.panelId.value=t.id)}),Z(()=>{l.panelId.value=null}),n({el:l.panel,$el:l.panel}),J(le,l.panelId);let g=_e(),_=L(()=>g!==null?(g.value&O.Open)===O.Open:l.disclosureState.value===0);return()=>{var d;let f={open:l.disclosureState.value===0,close:l.close},{id:v,...w}=t,y={id:(d=l.panelId.value)!=null?d:v,ref:l.panel};return F({ourProps:y,theirProps:w,slot:f,attrs:s,slots:c,features:G.RenderStrategy|G.Static,visible:_.value,name:"DisclosurePanel"})}}});const De=[{id:1,new:!0,title:"Start the school year strong with Plus!",href:"https://www.google.com",date:"A week ago",imageSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{id:2,new:!0,title:"Start the school year strong with Plus. Learn the fun and simple way!",href:"#",date:"A week ago",imageSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}],Se={name:"Notification",components:{Dialog:P,DialogOverlay:te,DialogTitle:V,TransitionChild:H,TransitionRoot:A,XIcon:Y,BellIcon:ve},setup(){const t=b(!1);return{notifications:De,open:t}}},Be={class:"relative"},He=e("div",{class:"absolute w-3 h-3 bg-red-500 rounded-full top-1 right-4 animate-ping"},null,-1),je=e("div",{class:"absolute w-3 h-3 bg-red-700 rounded-full top-1 right-4"},null,-1),Ie={class:"absolute inset-0 overflow-hidden"},Le={class:"fixed inset-y-0 right-0 flex max-w-full"},Te={class:"w-screen max-w-md"},Oe={class:"flex flex-col h-full overflow-y-scroll bg-white shadow-md"},Pe={class:"flex-1 py-5 overflow-y-auto"},Ve={class:"flex items-start justify-between px-5"},Ae={class:"flex items-center"},Ne={class:"mt-10 md:mt-8"},Ee={class:"flow-root"},Re={role:"list",class:"-my-6 divide-y divide-gray-200"},Fe=["href"],qe={class:"w-12 h-12 overflow-hidden rounded-full"},Qe=["src"],Xe={class:"flex flex-col flex-1 ml-4"},Ue={class:"flex justify-between font-medium text-left text-gray-700"},Ke={class:"flex-shrink-0 w-3 h-3 my-auto ml-2 bg-red-700 rounded-full"},Ge={class:"mt-2 text-sm font-medium text-left text-gray-400"};function Ye(t,s,c,n,l,g){const _=p("BellIcon"),d=p("DialogOverlay"),f=p("TransitionChild"),v=p("DialogTitle"),w=p("XIcon"),y=p("Dialog"),h=p("TransitionRoot");return i(),u(D,null,[e("div",Be,[e("button",{onClick:s[0]||(s[0]=a=>n.open=!0),class:"mt-1.5 mr-5"},[o(_,{class:"w-7 h-7 md:w-6 md:h-6","aria-hidden":"true"}),He,je])]),o(h,{as:"template",show:n.open,class:"z-50"},{default:r(()=>[o(y,{as:"div",class:"fixed inset-0 overflow-hidden",onClose:s[2]||(s[2]=a=>n.open=!1)},{default:r(()=>[e("div",Ie,[o(f,{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[o(d,{class:"absolute inset-0 transition-opacity bg-black bg-opacity-50"})]),_:1}),e("div",Le,[o(f,{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:r(()=>[e("div",Te,[e("div",Oe,[e("div",Pe,[e("div",Ve,[o(v,{class:"text-lg font-bold text-gray-700"},{default:r(()=>[$("Notifications")]),_:1}),e("div",Ae,[e("button",{type:"button",class:"mt-1 text-gray-400 hover:text-gray-500",onClick:s[1]||(s[1]=a=>n.open=!1)},[o(w,{class:"w-5 h-5","aria-hidden":"true"})])])]),e("div",Ne,[e("div",Ee,[e("ul",Re,[(i(!0),u(D,null,T(n.notifications,a=>(i(),u("li",{key:a.id},[e("a",{href:a.href,class:"flex items-center h-auto p-5 cursor-pointer hover:bg-indigo-50"},[e("div",qe,[e("img",{src:a.imageSrc},null,8,Qe)]),e("div",Xe,[e("div",Ue,[e("h3",null,x(a.title),1),re(e("p",Ke,null,512),[[ce,a.new]])]),e("p",Ge,x(a.date),1)])],8,Fe)]))),128))])])])])])])]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}const Je=j(Se,[["render",Ye]]),We=[{id:1,name:"Throwback Hip Bag",href:"#",color:"Salmon",price:"$90.00",quantity:1,imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",imageAlt:"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."},{id:2,name:"Medium Stuff Satchel",href:"#",color:"Blue",price:"$32.00",quantity:1,imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",imageAlt:"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."}],Ze={Name:"Cart",components:{Dialog:P,DialogOverlay:te,DialogTitle:V,TransitionChild:H,TransitionRoot:A,XIcon:Y,ShoppingCartIcon:ye},setup(){const t=b(!1);return{products:We,open:t}}},et={class:"relative"},tt={class:"absolute inset-0 overflow-hidden"},st={class:"fixed inset-y-0 right-0 flex max-w-full pl-10"},ot={class:"w-screen max-w-md"},lt={class:"flex flex-col h-full overflow-y-scroll bg-white shadow-xl"},nt={class:"flex-1 px-4 py-6 overflow-y-auto sm:px-6"},at={class:"flex items-start justify-between"},it={class:"flex items-center ml-3 h-7"},rt=e("span",{class:"sr-only"},"Close panel",-1),ct={class:"mt-8"},dt={class:"flow-root"},ut={role:"list",class:"-my-6 divide-y divide-gray-200"},pt={class:"flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md"},ht=["src","alt"],_t={class:"flex flex-col flex-1 ml-4"},mt={class:"flex justify-between text-base font-medium text-gray-900"},ft=["href"],gt={class:"ml-4"},xt={class:"mt-1 text-sm text-gray-500"},vt={class:"flex items-end justify-between flex-1 text-sm"},wt={class:"text-gray-500"},yt=e("div",{class:"flex"},[e("button",{type:"button",class:"font-medium text-indigo-600 hover:text-indigo-500"},"Remove")],-1),bt={class:"px-4 py-6 border-t border-gray-200 sm:px-6"},$t=e("div",{class:"flex justify-between text-base font-medium text-gray-900"},[e("p",null,"Subtotal"),e("p",null,"$262.00")],-1),Ct=e("p",{class:"mt-0.5 text-sm text-gray-500"},"Shipping and taxes calculated at checkout.",-1),kt=e("div",{class:"mt-6"},[e("a",{href:"#",class:"flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"},"Checkout")],-1),zt={class:"flex justify-center mt-6 text-sm text-center text-gray-500"},Mt=e("span",{"aria-hidden":"true"}," →",-1);function Dt(t,s,c,n,l,g){const _=p("ShoppingCartIcon"),d=p("DialogOverlay"),f=p("TransitionChild"),v=p("DialogTitle"),w=p("XIcon"),y=p("Dialog"),h=p("TransitionRoot");return i(),u(D,null,[e("div",et,[e("button",{onClick:s[0]||(s[0]=a=>n.open=!0),class:"mt-1.5 mr-5"},[o(_,{class:"w-7 h-7 md:w-6 md:h-6","aria-hidden":"true"})])]),o(h,{as:"template",show:n.open,class:"z-50"},{default:r(()=>[o(y,{as:"div",class:"fixed inset-0 overflow-hidden",onClose:s[3]||(s[3]=a=>n.open=!1)},{default:r(()=>[e("div",tt,[o(f,{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[o(d,{class:"absolute inset-0 transition-opacity bg-black bg-opacity-50"})]),_:1}),e("div",st,[o(f,{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:r(()=>[e("div",ot,[e("div",lt,[e("div",nt,[e("div",at,[o(v,{class:"text-lg font-medium text-gray-900"},{default:r(()=>[$(" Shopping cart ")]),_:1}),e("div",it,[e("button",{type:"button",class:"p-2 -m-2 text-gray-400 hover:text-gray-500",onClick:s[1]||(s[1]=a=>n.open=!1)},[rt,o(w,{class:"w-6 h-6","aria-hidden":"true"})])])]),e("div",ct,[e("div",dt,[e("ul",ut,[(i(!0),u(D,null,T(n.products,a=>(i(),u("li",{key:a.id,class:"flex py-6"},[e("div",pt,[e("img",{src:a.imageSrc,alt:a.imageAlt,class:"object-cover object-center w-full h-full"},null,8,ht)]),e("div",_t,[e("div",null,[e("div",mt,[e("h3",null,[e("a",{href:a.href},x(a.name),9,ft)]),e("p",gt,x(a.price),1)]),e("p",xt,x(a.color),1)]),e("div",vt,[e("p",wt,"Qty "+x(a.quantity),1),yt])])]))),128))])])])]),e("div",bt,[$t,Ct,kt,e("div",zt,[e("p",null,[$(" or "),e("button",{type:"button",class:"font-medium text-indigo-600 hover:text-indigo-500",onClick:s[2]||(s[2]=a=>n.open=!1)},[$("Continue Shopping"),Mt])])])])])])]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}const St=j(Ze,[["render",Dt]]),Bt={name:"Header",components:{Notification:Je,Cart:St,Disclosure:ke,DisclosureButton:ze,DisclosurePanel:Me,Menu:fe,MenuButton:ge,MenuItems:xe,UserCircleIcon:be,CogIcon:ne,QuestionMarkCircleIcon:we,BreezeNavLink:ae},data(){return{switching:!1}},methods:{switchChild(t,s,c){this.switching||t==this.$page.props.current_active_child.child_id||(this.switching=!0,axios.post(route("parent.switch_child",{child_id:t,child_name:s,student_id:c})).then(n=>{n.data&&location.reload()}))},viewProfile(){this.$inertia.get(route("parent.profile"))}}},Ht={class:"fixed top-0 inset-x-0 z-50 text-gray-700 bg-white md:top-0 md:sticky"},jt={class:"max-w-4xl px-5 mx-auto"},It={class:"flex items-center justify-between h-16 md:h-20"},Lt={class:"flex items-center"},Tt=["href"],Ot=e("img",{class:"object-scale-down h-10 md:h-12",src:"/images/anf-logo-main-2x.png",alt:""},null,-1),Pt=[Ot],Vt={class:"flex"},At={class:"flex items-center"},Nt={class:"hidden md:flex"},Et={class:"truncate max-w-xs text-lg font-semibold"},Rt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-white",fill:"currentColor",viewBox:"0 0 448 512"},[e("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})],-1),Ft={class:"flex md:hidden"},qt={class:"truncate max-w-[200px] text-lg font-semibold"},Qt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7 text-white",fill:"currentColor",viewBox:"0 0 448 512"},[e("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})],-1),Xt={class:"px-5 pt-2 pb-3 border-b"},Ut={class:"font-medium text-gray-700"},Kt={class:"font-bold"},Gt=e("hr",null,null,-1),Yt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-700",fill:"currentcolor",viewBox:"0 0 512 512"},[e("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})],-1),Jt=e("span",null,"Log Out",-1),Wt={class:"w-full p-4 rounded-lg text-gray-800"},Zt={class:"flex justify-between px-3 pt-2 mt-2 items-center text-sm font-bold text-left"},es=e("span",null,"Children List",-1),ts=["href"],ss=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 text-gray-700",fill:"currentColor",viewBox:"0 0 512 512"},[e("path",{d:"M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"})],-1),os=[ss],ls=e("hr",{class:"my-3"},null,-1),ns=["onClick"],as={class:"text-gray-500 hover:text-gray-800 text-left text-sm"},is={key:0,class:"bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"},rs={key:1,class:"bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"},cs={key:1,class:"flex justify-between items-center w-full px-3"},ds=e("span",{class:"text-gray-500 font-semibold text-sm"},"No children added. ",-1),us=[ds],ps={class:"bg-white shadow-md z-50"},hs={class:"flex items-center p-5 mb-2 border-b"},_s={class:"font-medium text-gray-700"},ms={class:"font-bold"},fs={class:"py-2 mt-2 border-t"},gs=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-700",fill:"currentcolor",viewBox:"0 0 512 512"},[e("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})],-1),xs=e("span",null,"Log Out",-1),vs={class:"flex justify-center md:hidden"},ws={class:"w-full p-4 rounded-lg text-gray-800"},ys={class:"flex justify-between px-3 pt-2 mt-2 items-center text-sm font-bold text-left"},bs=e("span",null,"Children List",-1),$s=["href"],Cs=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 text-gray-700",fill:"currentColor",viewBox:"0 0 512 512"},[e("path",{d:"M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"})],-1),ks=[Cs],zs=e("hr",{class:"my-3"},null,-1),Ms=["onClick"],Ds={class:"text-gray-500 hover:text-gray-800 text-left"},Ss={key:0,class:"bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"},Bs={key:1,class:"bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"},Hs={key:1,class:"flex justify-between items-center w-full px-3"},js=e("span",{class:"text-gray-500 font-semibold text-sm"},"No children added. ",-1),Is=[js];function Ls(t,s,c,n,l,g){const _=p("MenuButton"),d=p("DisclosureButton"),f=p("UserCircleIcon"),v=p("BreezeNavLink"),w=p("MenuItems"),y=p("Menu"),h=p("DisclosurePanel"),a=p("Disclosure");return i(),u("div",Ht,[o(a,{as:"nav",class:"text-white bg-indigo-600"},{default:r(({open:X})=>[e("div",jt,[e("div",It,[e("div",Lt,[e("a",{class:"flex items-center space-x-4 font-bold select-none",href:t.route("parent.home")},Pt,8,Tt)]),e("div",Vt,[e("div",At,[o(y,{as:"div",class:"relative"},{default:r(()=>[e("div",Nt,[o(_,{class:"flex rounded-full pl-5 py-5 space-x-4 items-center"},{default:r(()=>[e("span",Et,x(t.$page.props.current_active_child.child_name),1),Rt]),_:1})]),e("div",Ft,[o(d,{class:"flex space-x-4 items-center"},{default:r(()=>[e("span",qt,x(t.$page.props.current_active_child.child_name),1),Qt]),_:1})]),o(de,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:r(()=>[o(w,{class:"absolute w-96 py-3 mt-2 origin-top-right bg-white shadow-md -right-1 rounded-xl focus:outline-none"},{default:r(()=>[e("div",Xt,[e("div",Ut,[$(" Hi, "),e("span",Kt,x(t.$page.props.auth.user.display_name),1)])]),e("div",{class:"flex items-center px-5 my-1 py-2 font-medium text-gray-700 hover:bg-indigo-50 cursor-pointer",onClick:s[0]||(s[0]=(...m)=>g.viewProfile&&g.viewProfile(...m))},[o(f,{class:"w-6 h-6 mr-3"}),$("Profile ")]),Gt,o(v,{href:t.route("logout"),method:"post",as:"button",class:"flex items-center space-x-3 w-full ml-1 px-5 py-2 mt-3 font-medium text-left text-gray-700 hover:text-gray-700 hover:bg-indigo-50"},{default:r(()=>[Yt,Jt]),_:1},8,["href"]),e("div",Wt,[e("div",Zt,[es,e("a",{href:t.route("parent.children"),class:"text-sm text-indigo-600 cursor-pointer font-medium hover:underline"},os,8,ts)]),ls,t.$page.props.user_has_children.length?(i(!0),u(D,{key:0},T(t.$page.props.user_has_children,m=>(i(),u("button",{href:"#",class:"flex items-center space-x-4 text-sm font-semibold md:text-base py-2 px-3",onClick:N=>g.switchChild(m.child_id,m.child_name,m.student_id)},[e("span",as,x(m.child_name),1),!l.switching&&m.child_id==t.$page.props.current_active_child.child_id?(i(),u("span",is,"Current")):B("",!0),l.switching&&m.child_id==t.$page.props.current_active_child.child_id?(i(),u("span",rs,"Switching")):B("",!0)],8,ns))),256)):(i(),u("div",cs,us))])]),_:1})]),_:1})]),_:1})])])])]),o(h,{class:"md:hidden lg:hidden"},{default:r(()=>[e("div",ps,[e("div",hs,[e("div",_s,[$(" Hi, "),e("span",ms,x(t.$page.props.auth.user.display_name),1)])]),e("div",{class:"cursor-pointer flex items-center px-5 py-3 font-medium text-gray-700 hover:bg-indigo-50",onClick:s[1]||(s[1]=(...m)=>g.viewProfile&&g.viewProfile(...m))},[o(f,{class:"w-6 h-6 mr-3"}),$("Profile ")]),e("div",fs,[o(v,{href:t.route("logout"),method:"post",as:"button",class:"flex items-center space-x-3 w-full ml-1 px-5 py-2 mt-3 font-medium text-left text-gray-700 hover:text-gray-700 hover:bg-indigo-50"},{default:r(()=>[gs,xs]),_:1},8,["href"])]),e("div",vs,[e("div",ws,[e("div",ys,[bs,e("a",{href:t.route("parent.children"),class:"text-sm text-indigo-600 cursor-pointer font-medium hover:underline"},ks,8,$s)]),zs,t.$page.props.user_has_children.length?(i(!0),u(D,{key:0},T(t.$page.props.user_has_children,m=>(i(),u("button",{href:"#",class:"flex items-center space-x-4 text-sm font-semibold md:text-base py-2 px-3",onClick:N=>g.switchChild(m.child_id,m.child_name,m.student_id)},[e("span",Ds,x(m.child_name),1),!l.switching&&m.child_id==t.$page.props.current_active_child.child_id?(i(),u("span",Ss,"Current")):B("",!0),l.switching&&m.child_id==t.$page.props.current_active_child.child_id?(i(),u("span",Bs,"Switching")):B("",!0)],8,Ms))),256)):(i(),u("div",Hs,Is))])])])]),_:1})]),_:1})])}const Ts=j(Bt,[["render",Ls]]),Os={name:"Footer"},Ps={class:"hidden md:block text-white bg-gray-600"},Vs={class:"max-w-4xl p-5 mx-auto text-sm tracking-wider text-center"};function As(t,s,c,n,l,g){return i(),u("footer",Ps,[e("div",Vs,x(new Date().getFullYear())+" © ALFA and Friends",1)])}const Ns=j(Os,[["render",As]]);const C=t=>(ue("data-v-67a617f6"),t=t(),pe(),t),Es={class:"fixed overflow-x-auto inset-x-0 bottom-0 z-20 bg-white border border-t md:border-gray-200 md:border-b-2 md:top-[5rem] md:sticky"},Rs={class:"flex mt-1 andika-bold"},Fs={class:"flex-1 group"},qs=["href"],Qs=C(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 576 512"},[e("path",{d:"M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"})],-1)),Xs=C(()=>e("span",{class:"block text-xs pb-1"},"Home",-1)),Us=[Qs,Xs],Ks={class:"flex-1 group"},Gs=["href"],Ys=C(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 384 512"},[e("path",{d:"M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm0 32v64H288V256H96zM240 416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})],-1)),Js=C(()=>e("span",{class:"block text-xs pb-1 whitespace-nowrap"},"Fee Invoices",-1)),Ws=[Ys,Js],Zs={class:"flex-1 group"},eo=["href"],to=C(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 512 512"},[e("path",{d:"M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"})],-1)),so=C(()=>e("span",{class:"block text-xs pb-1 whitespace-nowrap"},"Art Gallery",-1)),oo=[to,so],lo={class:"flex-1 group"},no=["href"],ao=C(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 576 512"},[e("path",{d:"M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"})],-1)),io=C(()=>e("span",{class:"block text-xs pb-1 whitespace-nowrap"},"Art Book",-1)),ro=[ao,io],co={components:{simplebar:q}},uo=Object.assign(co,{__name:"Navigation",setup(t){return(s,c)=>(i(),u("nav",Es,[o(k(q),{"data-simplebar-auto-hide":"true",class:"flex items-center md:justify-center max-w-4xl px-3 mx-auto"},{default:r(()=>[e("div",Rs,[e("div",Fs,[e("a",{href:s.route("parent.home"),class:I([s.route().current("parent.home")?"text-indigo-500 border-b-2 border-transparent border-indigo-500 ":"text-gray-500 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500","flex flex-col space-y-1 items-center justify-center text-center mx-auto px-4 pt-2 w-full"])},Us,10,qs)]),e("div",Ks,[e("a",{href:s.route("parent.invoices"),class:I([s.route().current("parent.invoices")?"text-indigo-500 border-b-2 border-transparent border-indigo-500 ":"text-gray-500 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500","flex flex-col space-y-1 items-center justify-center text-center mx-auto px-4 pt-2 w-full"])},Ws,10,Gs)]),e("div",Zs,[e("a",{href:s.route("parent.art_gallery"),class:I([s.route().current("parent.art_gallery")?"text-indigo-500 border-b-2 border-transparent border-indigo-500 ":"text-gray-500 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500","flex flex-col space-y-1 items-center justify-center text-center mx-auto px-4 pt-2 w-full"])},oo,10,eo)]),e("div",lo,[e("a",{href:s.route("parent.art_book"),class:I([s.route().current("parent.art_book")?"text-indigo-500 border-b-2 border-transparent border-indigo-500 ":"text-gray-500 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500","flex flex-col space-y-1 items-center justify-center text-center mx-auto px-4 pt-2 w-full"])},ro,10,no)])])]),_:1})]))}}),po=j(uo,[["__scopeId","data-v-67a617f6"]]),ho=e("div",{class:"fixed inset-0 bg-black/40"},null,-1),_o={class:"fixed inset-0 overflow-y-auto mt-44"},mo={class:"flex min-h-full items-center justify-center p-4 text-center"},fo={class:"fixed inset-0 w-screen overflow-y-auto"},go={class:"flex min-h-full items-center justify-center p-4"},xo={class:"flex items-center justify-between mb-2 rounded-t text-lg font-semibold text-slate-800 dark:text-white"},vo=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),wo=[vo],yo=e("hr",{class:"mb-3"},null,-1),bo={components:{TransitionRoot:A,TransitionChild:H,Dialog:P,DialogPanel:se,DialogTitle:V},props:{isOpen:Boolean},methods:{closeModal(){this.$emit("close",!1)}}},$o=Object.assign(bo,{__name:"SimpleModal",setup(t){return(s,c)=>(i(),M(k(A),{appear:"",show:t.isOpen,as:"template"},{default:r(()=>[o(k(P),{as:"div",onClose:s.closeModal,class:"relative z-50",static:"true"},{default:r(()=>[o(k(H),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[ho]),_:1}),e("div",_o,[e("div",mo,[o(k(H),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[e("div",fo,[e("div",go,[o(k(se),{class:"w-full max-w-3xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all z-10 min-h-80"},{default:r(()=>[s.$slots.header?(i(),M(k(V),{key:0,as:"div"},{default:r(()=>[e("div",xo,[E(s.$slots,"header"),e("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"default-modal",onClick:c[0]||(c[0]=(...n)=>s.closeModal&&s.closeModal(...n))},wo)]),yo]),_:3})):B("",!0),E(s.$slots,"default")]),_:3})])])]),_:3})])])]),_:3},8,["onClose"])]),_:3},8,["show"]))}}),Co={class:"flex andika-regular"},ko={class:"min-h-screen bg-gray-100 w-full"},zo={class:"flex flex-col bg-indigo-50 relative h-full justify-between mt-16 md:mt-0"},Mo={class:"bg-orange-50 h-full p-3"},Do={class:"text-center flex flex-col items-center justify-start space-y-2 p-6"},So={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-2/12 w-2/12 text-green-500",viewBox:"0 0 512 512",fill:"currentColor"},Bo=e("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},null,-1),Ho=[Bo],jo={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-2/12 w-2/12 text-red-500",viewBox:"0 0 512 512",fill:"currentColor"},Io=e("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),Lo=[Io],To={class:"md:text-2xl text-base text-gray-900 font-semibold text-center"},Oo={class:"text-gray-600 my-2"},Po={class:"py-2 text-center"},Vo={components:{simplebar:q},data(){return{show_modal:!!this.$page.props.flash.type}}},Uo=Object.assign(Vo,{__name:"Authenticated",setup(t){return(s,c)=>(i(),u("div",Co,[e("div",ko,[o(Ts),o(po),e("main",zo,[e("div",Mo,[E(s.$slots,"default")]),o(Ns),o($o,{open:s.$page.props.flash.type!==null,"onClose:modal":c[1]||(c[1]=n=>s.$page.props.flash.type=null),class:"md:w-2/6"},{default:r(()=>[e("div",Do,[s.$page.props.flash.type=="success"?(i(),u("svg",So,Ho)):(i(),u("svg",jo,Lo)),e("h3",To,x(s.$page.props.flash.header),1),e("p",Oo,x(s.$page.props.flash.message),1),e("div",Po,[e("button",{onClick:c[0]||(c[0]=n=>s.$page.props.flash.type=null),class:"rounded px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-1.5"},"Close")])])]),_:1},8,["open"])])])]))}});export{Uo as _,$o as a};
