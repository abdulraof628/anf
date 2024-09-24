import{c as T,t as n,v,Q as r,E as x,q as f,u as c,be as d,y as i,x as o,z as e,H as p,Y as M,W as h,A as g,F as U,D as E,L as Y,bH as q,C as G}from"./@vue-fa39c8c3.js";import{q as Q}from"./@heroicons-4f5c57a0.js";import{L as W}from"./@inertiajs-c7856c69.js";import{_}from"./app-f5e40355.js";import{N as z,Q as K,c as R,g as B,a as H,M as L,b as k,h as y,G as j,V,Y as D,S}from"./@headlessui-4b33c316.js";import{s as N}from"./simplebar-vue-2c529a53.js";import{B as J}from"./Button-912507f9.js";const X={__name:"NavLink",props:["href","active"],setup(a){const t=a,s=T(()=>t.active?" flex items-center px-2 py-2 text-gray-200 transition bg-gray-800 cursor-pointer group hover:bg-gray-800 hover:text-gray-200":"flex items-center px-4 py-2 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200");return(l,m)=>(n(),v(c(W),{href:a.href,class:f(s.value)},{default:r(()=>[x(l.$slots,"default")]),_:3},8,["href","class"]))}},Z={name:"Header",components:{Disclosure:z,DisclosureButton:K,DisclosurePanel:R,Menu:B,MenuButton:H,MenuItems:L,UserCircleIcon:Q,BreezeNavLink:X},data(){return{switching:!1}},methods:{switchChild(a,t,s){this.switching||a==this.$page.props.current_active_child.child_id||(this.switching=!0,axios.post(route("parent.switch_child",{child_id:a,child_name:t,student_id:s})).then(l=>{l.data&&location.reload()}))},viewProfile(){this.$inertia.get(route("parent.profile"))}}},ee={class:"fixed top-0 inset-x-0 z-30 text-gray-700 bg-white md:top-0 md:sticky"},te={class:"max-w-3xl px-5 sm:px-3 mx-auto"},se={class:"flex justify-between gap-5 items-center h-16 md:h-20"},oe={class:"max-w-xs w-full text-center text-md font-semibold truncate"},re={class:"text-right"},ae={class:"hidden md:flex"},ne={class:"flex md:hidden"},le={class:"px-5 pt-2 pb-3 border-b"},ie={class:"font-medium text-gray-700 text-left"},ce={class:"font-bold"},de={class:"bg-white shadow-md"},pe={class:"flex items-center p-5 mb-2 border-b"},ue={class:"font-medium text-gray-700"},me={class:"font-bold"},fe={class:"py-2 mt-2 border-t"};function ge(a,t,s,l,m,u){const b=d("MenuButton"),P=d("DisclosureButton"),$=d("UserCircleIcon"),C=d("BreezeNavLink"),A=d("MenuItems"),F=d("Menu"),I=d("DisclosurePanel"),O=d("Disclosure");return n(),i("div",ee,[o(O,{as:"nav",class:"text-white bg-indigo-600"},{default:r(({open:tt})=>[e("div",te,[e("div",se,[e("div",oe,p(a.$page.props.current_active_child.child_name),1),e("div",re,[o(F,{as:"div",class:"relative"},{default:r(()=>[e("div",ae,[o(b,{class:"flex rounded-full pl-5 pr-6 py-5 space-x-4 items-center"},{default:r(()=>t[2]||(t[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-white",fill:"currentColor",viewBox:"0 0 448 512"},[e("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})],-1)])),_:1})]),e("div",ne,[o(P,{class:"flex space-x-4 items-center"},{default:r(()=>t[3]||(t[3]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7 text-white",fill:"currentColor",viewBox:"0 0 448 512"},[e("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})],-1)])),_:1})]),o(M,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:r(()=>[o(A,{class:"absolute w-96 py-3 mt-2 origin-top-right bg-white shadow-md -right-1 rounded-xl focus:outline-none"},{default:r(()=>[e("div",le,[e("div",ie,[t[4]||(t[4]=h(" Hi, ")),e("span",ce,p(a.$page.props.auth.user.display_name),1)])]),e("div",{class:"flex items-center px-5 my-1 py-2 font-medium text-gray-700 hover:bg-indigo-50 cursor-pointer",onClick:t[0]||(t[0]=(...w)=>u.viewProfile&&u.viewProfile(...w))},[o($,{class:"w-6 h-6 mr-3"}),t[5]||(t[5]=h("Profile "))]),t[7]||(t[7]=e("hr",null,null,-1)),o(C,{href:a.route("logout"),method:"post",as:"button",class:"flex items-center space-x-3 w-full ml-1 px-5 py-2 mt-3 font-medium text-left text-gray-700 hover:text-gray-700 hover:bg-indigo-50"},{default:r(()=>t[6]||(t[6]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-700",fill:"currentcolor",viewBox:"0 0 512 512"},[e("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})],-1),e("span",null,"Log Out",-1)])),_:1},8,["href"])]),_:1})]),_:1})]),_:1})])])]),o(I,{class:"md:hidden lg:hidden"},{default:r(()=>[e("div",de,[e("div",pe,[e("div",ue,[t[8]||(t[8]=h(" Hi, ")),e("span",me,p(a.$page.props.auth.user.display_name),1)])]),e("div",{class:"cursor-pointer flex items-center px-5 py-3 font-medium text-gray-700 hover:bg-indigo-50",onClick:t[1]||(t[1]=(...w)=>u.viewProfile&&u.viewProfile(...w))},[o($,{class:"w-6 h-6 mr-3"}),t[9]||(t[9]=h("Profile "))]),e("div",fe,[o(C,{href:a.route("logout"),method:"post",as:"button",class:"flex items-center space-x-3 w-full ml-1 px-5 py-2 mt-3 font-medium text-left text-gray-700 hover:text-gray-700 hover:bg-indigo-50"},{default:r(()=>t[10]||(t[10]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-700",fill:"currentcolor",viewBox:"0 0 512 512"},[e("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})],-1),e("span",null,"Log Out",-1)])),_:1},8,["href"])])])]),_:1})]),_:1})])}const he=_(Z,[["render",ge]]),xe={name:"Footer"},we={class:"hidden md:block text-white bg-gray-600"},ve={class:"max-w-4xl p-5 mx-auto text-sm tracking-wider text-center"};function ye(a,t,s,l,m,u){return n(),i("footer",we,[e("div",ve,p(new Date().getFullYear())+" © ALFA and Friends",1)])}const _e=_(xe,[["render",ye]]);const be={class:"fixed inset-x-0 bottom-0 z-20 bg-white border border-t md:border-gray-200 md:border-b-2 md:top-[5rem] md:sticky"},$e={class:"max-w-2xl mx-auto"},Ce={class:""},ke=["href"],Me={key:0,class:""},ze=["href"],Be={key:1,class:""},He=["href"],Le={key:2,class:"relative"},je={class:"px-2 py-1"},Ve=["onClick"],De={key:1,class:"px-2 py-1"},Se={components:{simplebar:N}},Ne=Object.assign(Se,{__name:"Navigation",setup(a){return(t,s)=>(n(),i("div",be,[o(c(z),{as:"nav",class:"text-white bg-white"},{default:r(({open:l})=>[e("div",$e,[o(c(B),{as:"div",class:"flex justify-evenly items-center font-medium h-16 md:h-20"},{default:r(()=>[e("div",Ce,[e("a",{href:t.route("parent.home"),class:f([t.route().current("parent.home")?"text-indigo-500 border-b-2 border-transparent border-indigo-500 ":"text-gray-500 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500","flex flex-col space-y-1 items-center justify-center text-center mx-auto px-4 pt-2 w-full"])},s[0]||(s[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 576 512"},[e("path",{d:"M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"})],-1),e("span",{class:"block text-sm pb-1"},"Home",-1)]),10,ke)]),t.$page.props.can.view_kids?(n(),i("div",Me,[e("a",{href:t.route("parent.children"),class:f([t.route().current("parent.children")?"text-indigo-500":"text-gray-500","flex flex-col space-y-1 items-center justify-center text-center mx-auto px-4 pt-2 w-full"])},s[1]||(s[1]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 384 512"},[e("path",{d:"M256 64A64 64 0 1 0 128 64a64 64 0 1 0 128 0zM152.9 169.3c-23.7-8.4-44.5-24.3-58.8-45.8L74.6 94.2C64.8 79.5 45 75.6 30.2 85.4s-18.7 29.7-8.9 44.4L40.9 159c18.1 27.1 42.8 48.4 71.1 62.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32V384h32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V221.6c29.1-14.2 54.4-36.2 72.7-64.2l18.2-27.9c9.6-14.8 5.4-34.6-9.4-44.3s-34.6-5.5-44.3 9.4L291 122.4c-21.8 33.4-58.9 53.6-98.8 53.6c-12.6 0-24.9-2-36.6-5.8c-.9-.3-1.8-.7-2.7-.9z"})],-1),e("span",{class:"block text-sm pb-1 whitespace-nowrap"},"Kids",-1)]),10,ze)])):g("",!0),t.$page.props.can.view_messages?(n(),i("div",Be,[e("a",{href:t.route("parent.messages"),class:f([t.route().current("parent.messages")?"text-indigo-500":"text-gray-500","flex flex-col space-y-1 items-center justify-center text-center mx-auto px-4 pt-2 w-full"])},s[2]||(s[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 640 512"},[e("path",{d:"M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"})],-1),e("span",{class:"block text-sm pb-1 whitespace-nowrap"},"Messages",-1)]),10,He)])):g("",!0),t.$page.props.can.view_class?(n(),i("div",Le,[o(c(H),{class:f([t.route().current("parent.stories")?"text-indigo-500":"text-gray-500","flex flex-col space-y-1 items-center justify-center text-center mx-auto px-4 pt-2 w-full text-gray-500 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"])},{default:r(()=>s[3]||(s[3]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 576 512"},[e("path",{d:"M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"})],-1),e("span",{class:"block text-sm pb-1 whitespace-nowrap"},"Class",-1)])),_:1},8,["class"]),o(M,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:r(()=>[o(c(L),{class:"absolute w-72 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none bottom-16 right-0 md:bottom-auto md:right-auto"},{default:r(()=>[t.$page.props.children_classes.length?(n(!0),i(U,{key:0},E(t.$page.props.children_classes,m=>(n(),i("div",je,[o(c(k),null,{default:r(({active:u})=>[e("button",{onClick:b=>t.$inertia.get(t.route("parent.stories",m.programme_id)),class:"text-gray-600 group hover:bg-indigo-500 hover:text-white flex justify-left w-full items-center rounded-md px-2 py-2 text-sm"},p(m.programme_name),9,Ve)]),_:2},1024)]))),256)):(n(),i("div",De,[o(c(k),null,{default:r(()=>s[4]||(s[4]=[e("button",{class:"text-gray-600 group flex justify-left w-full cursor-default items-center rounded-md px-2 py-2 text-sm"}," No class found. ",-1)])),_:1})]))]),_:1})]),_:1})])):g("",!0)]),_:1})])]),_:1})]))}}),Pe=_(Ne,[["__scopeId","data-v-1f7fc4ac"]]),Ae={class:"fixed inset-0 overflow-y-auto mt-44"},Fe={class:"flex min-h-full items-center justify-center p-4 text-center"},Ie={class:"fixed inset-0 w-screen overflow-y-auto"},Oe={class:"flex min-h-full items-center justify-center p-4"},Te={class:"flex items-center justify-between mb-2 rounded-t text-lg font-semibold text-slate-800 dark:text-white"},Ue={components:{TransitionRoot:S,TransitionChild:y,Dialog:D,DialogPanel:j,DialogTitle:V},props:{isOpen:Boolean,static:{type:Boolean,default:!0}},methods:{closeModal(){this.$emit("close",!1)}}},Ee=Object.assign(Ue,{__name:"SimpleModal",setup(a){return(t,s)=>(n(),v(c(S),{show:a.isOpen},{default:r(()=>[o(c(D),{as:"div",class:"relative z-30"},{default:r(()=>[o(c(y),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0",static:"true"},{default:r(()=>s[1]||(s[1]=[e("div",{class:"fixed inset-0 bg-black/40"},null,-1)])),_:1}),e("div",Ae,[e("div",Fe,[o(c(y),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[e("div",Ie,[e("div",Oe,[o(c(j),{class:"transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all z-10 max-w-3xl min-w-[18rem] md:min-w-[35rem]"},{default:r(()=>[t.$slots.header?(n(),v(c(V),{key:0,as:"div"},{default:r(()=>[e("div",Te,[x(t.$slots,"header"),e("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"default-modal",onClick:s[0]||(s[0]=(...l)=>t.closeModal&&t.closeModal(...l))},s[2]||(s[2]=[e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)]))]),s[3]||(s[3]=e("hr",{class:"mb-3"},null,-1))]),_:3})):g("",!0),x(t.$slots,"default")]),_:3})])])]),_:3})])])]),_:3})]),_:3},8,["show"]))}}),Ye={class:"min-h-screen bg-gray-100 flex flex-col justify-between w-full font-andika"},qe={key:0,class:"px-6 py-3 bg-blue bg-red-500 space-y-4 md:flex md:space-y-0 justify-between items-center mt-16 md:mt-0"},Ge={class:"flex space-x-2 items-center"},Qe={class:"flex-grow flex-col bg-orange-50 relative justify-start mb-16 md:mb-0 md:mt-0 py-5 px-3"},We={class:"text-center flex flex-col items-center justify-start space-y-2 p-6"},Ke={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-2/12 w-2/12 text-green-500",viewBox:"0 0 512 512",fill:"currentColor"},Re={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-2/12 w-2/12 text-red-500",viewBox:"0 0 512 512",fill:"currentColor"},Je={class:"md:text-2xl text-base text-gray-900 font-semibold text-center"},Xe={class:"text-gray-600 my-2"},Ze={class:"py-2 text-center"},et={components:{simplebar:N},data(){return{username:"",show_add_tag:!1,show_modal:!!this.$page.props.flash.type}},methods:{onScroll(a){this.$emit("scroll",a)},impersonate(){this.username&&this.$inertia.get(route("impersonate",this.username))}},mounted(){window.addEventListener("scroll",this.onScroll)},beforedDestroy(){window.removeEventListener("scroll",this.onScroll)}},ct=Object.assign(et,{__name:"Authenticated",setup(a){return(t,s)=>(n(),i("div",Ye,[o(he),o(Pe),t.$page.props.can.impersonate_access||t.$page.props.can.is_impersonated?(n(),i("div",qe,[s[6]||(s[6]=e("span",{class:"text-white text-sm font-semibold italic whitespace-nowrap"},"Warning: Please use this feature with caution!",-1)),e("form",{onSubmit:s[1]||(s[1]=G((...l)=>t.impersonate&&t.impersonate(...l),["prevent"])),class:"flex flex-col lg:flex-row w-full space-x-2 items-center md:justify-end lg:justify-end"},[s[5]||(s[5]=e("label",{for:"impersonate_username",class:"text-white 2xl:text-sm sm:text-md font-bold"},"Username",-1)),e("div",Ge,[Y(e("input",{type:"text",id:"impersonate_username",class:"rounded py-1 px-2 border-orange-500 focus:ring-0 focus:border-orange-500","onUpdate:modelValue":s[0]||(s[0]=l=>t.username=l),autocomplete:"none"},null,512),[[q,t.username]]),o(J,{tooltip:"Switch User",onClick:t.impersonate,class:"px-3 py-2"},{default:r(()=>s[4]||(s[4]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 512 512"},[e("path",{d:"M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"})],-1)])),_:1},8,["onClick"])])],32)])):g("",!0),e("main",Qe,[x(t.$slots,"default"),o(Ee,{open:t.$page.props.flash.type!==null,"onClose:modal":s[3]||(s[3]=l=>t.$page.props.flash.type=null),class:"md:w-2/6"},{default:r(()=>[e("div",We,[t.$page.props.flash.type=="success"?(n(),i("svg",Ke,s[7]||(s[7]=[e("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},null,-1)]))):(n(),i("svg",Re,s[8]||(s[8]=[e("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1)]))),e("h3",Je,p(t.$page.props.flash.header),1),e("p",Xe,p(t.$page.props.flash.message),1),e("div",Ze,[e("button",{onClick:s[2]||(s[2]=l=>t.$page.props.flash.type=null),class:"rounded px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-1.5"},"Close")])])]),_:1},8,["open"])]),o(_e)]))}});export{ct as _,Ee as a};
