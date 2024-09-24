import{B as m}from"./Authenticated-2464c72b.js";import{L as f,H as g}from"./@inertiajs-c7856c69.js";import"./moment-a9aaa855.js";import{T as u}from"./TimeAgo-81d94847.js";import{g as h,h as v,i as b,j as x,k as w,l as _,m as y,b as $,n as k,r as N,o as S,p as I}from"./@heroicons-4f5c57a0.js";import{Y as C,_ as M,g as j,a as A,b as B,M as D,h as L,S as R}from"./@headlessui-4b33c316.js";import{y as s,x as l,u as U,Q as d,F as c,r as T,t as n,z as e,q as a,D as z,H as p,E as F}from"./@vue-fa39c8c3.js";import"./ApplicationLogo-bc2e3fb2.js";import"./radix-vue-b52878ef.js";import"./@floating-ui-d22e3cce.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f5e40355.js";import"./axios-1779699b.js";import"./pusher-js-ddef06ed.js";import"./@vueform-b962800d.js";import"./@vuepic-62f3604d.js";import"./@babel-1b80a44a.js";import"./cropperjs-aef143af.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1a2c766e.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-0175b845.js";import"./@radix-icons-a5b56816.js";import"./lodash.isequal-32ec3540.js";import"./vue-e0f979ce.js";import"./lodash.clonedeep-2dfa23d9.js";import"./qs-fddd7d85.js";import"./side-channel-a64b5f12.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-6df2283d.js";import"./deepmerge-89e33937.js";import"./nprogress-4f526f01.js";import"./lucide-vue-next-f94b1320.js";import"./javascript-time-ago-55ed0321.js";import"./relative-time-format-ec7ee7be.js";const H={class:"py-4 px-4"},V={class:"overflow-x-auto"},E={class:"mx-auto"},O={class:"align-middle inline-block min-w-full"},Y={class:"h-full flex flex-col"},q={class:"min-h-0 flex-1 flex overflow-hidden"},P={class:"h-full relative flex flex-col border-r border-gray-200 bg-gray-100 w-1/3"},Q={class:"h-[74vh]"},X={class:"flex flex-row space-x-2 border-t border-b border-gray-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-gray-500"},G={key:0,class:"bg-indigo-100 h-[70vh] overflow-hidden overflow-y-auto scrollbar"},J={"aria-label":"Message list",class:"h-full"},K={role:"list",class:"border-b border-gray-200 divide-y divide-gray-200"},W=["onClick"],Z={class:"flex justify-between space-x-3"},ee={class:"min-w-0 flex-1"},te=["href"],oe={class:"text-sm font-medium text-gray-900 truncate"},ie={class:"mt-1"},re={class:"line-clamp-2 text-sm text-gray-600"},se={class:"flex flex-col grow w-full"},ne={class:"flex flex-col"},ae={key:0,class:"flex h-[74vh] justify-center items-center bg-white"},le={key:1,class:"flex justify-center h-[74vh] overflow-y-auto scrollbar"},de={components:{Dialog:C,DialogOverlay:M,Menu:j,MenuButton:A,MenuItem:B,MenuItems:D,TransitionChild:L,TransitionRoot:R,Link:f,TimeAgo:u,ArchiveIconSolid:h,BellIcon:v,ChevronDownIcon:b,ChevronUpIcon:x,DotsVerticalIcon:w,FolderDownloadIcon:_,MenuIcon:y,PencilIcon:$,ReplyIcon:k,SearchIcon:N,UserAddIcon:S,XIcon:I},setup(){const r=T(!1);return{user,navigation,sidebarNavigation,userNavigation,messages,open:r}},data(){return{current_data_count:10}},methods:{viewNotification(r){this.$inertia.get(route("view_notification"),{id:r,data_count:this.current_data_count},{preserveScroll:!0,preserveState:!0})},deleteNotification(r){this.$inertia.delete(route("delete_notification",r))},showAllNotifications(){this.$inertia.get(route("notifications"))},showUnreadNotifications(){this.$inertia.get(route("notifications"),{filter:"read"},{preserveScroll:!0})},showReadNotifications(){this.$inertia.get(route("notifications"),{filter:"unread"},{preserveScroll:!0})},onScroll({target:{scrollTop:r,clientHeight:o,scrollHeight:t}}){r+o>=t&&axios.get(route("show_more_notifications"),{params:{data_count:this.current_data_count+=10}}).then(i=>{this.$page.props.notifications=i.data})}}},nt=Object.assign(de,{__name:"Layout",setup(r){return(o,t)=>(n(),s(c,null,[l(U(g),{title:"Notifications"}),l(m,null,{header:d(()=>t[4]||(t[4]=[])),default:d(()=>[e("div",H,[e("div",V,[e("div",E,[e("div",O,[e("div",Y,[e("div",q,[e("div",P,[t[7]||(t[7]=e("div",{class:"flex-shrink-0"},[e("div",{class:"h-16 px-6 flex flex-col justify-center bg-indigo-200"},[e("div",{class:"flex items-baseline space-x-3"},[e("h2",{class:"text-lg font-medium text-gray-900"},"Notifications")])])],-1)),e("div",Q,[e("div",X,[e("button",{class:a(["shadow-md inline-flex items-center border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest focus:outline-none transition ease-in-out duration-150 cursor-pointer",o.route().current("notifications",{filter:"unread"})||o.route().current("notifications",{filter:"read"})?"bg-indigo-400 px-2 py-1":"bg-indigo-700 py-1 px-2"]),onClick:t[0]||(t[0]=i=>o.showAllNotifications())},"All",2),e("button",{class:a(["shadow-md inline-flex items-center border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest focus:outline-none transition ease-in-out duration-150 cursor-pointer",o.route().current("notifications",{filter:"unread"})?"bg-indigo-700 px-2 py-1":"bg-indigo-400 py-1 px-2"]),onClick:t[1]||(t[1]=i=>o.showReadNotifications())},"Unread",2),e("button",{class:a(["shadow-md inline-flex items-center border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest focus:outline-none transition ease-in-out duration-150 cursor-pointer",o.route().current("notifications",{filter:"read"})?"bg-indigo-700 px-2 py-1":"bg-indigo-400 py-1 px-2"]),onClick:t[2]||(t[2]=i=>o.showUnreadNotifications())},"Read",2)]),o.$page.props.notifications.length?(n(),s("div",{key:1,class:"bg-white h-[70vh] overflow-hidden hover:overflow-y-auto scrollbar w-full",onScroll:t[3]||(t[3]=(...i)=>o.onScroll&&o.onScroll(...i))},[e("div",J,[e("ul",K,[(n(!0),s(c,null,z(o.$page.props.notifications,i=>(n(),s("li",{key:i.id,class:a([[o.route().current("view_notification",{id:i.id})?"bg-indigo-50":"",i.seen?"":"bg-indigo-200"],"relative cursor-pointer bg-white py-5 px-6 hover:bg-indigo-50"]),onClick:ce=>o.viewNotification(i.id)},[e("div",Z,[e("div",ee,[e("a",{href:i.href,class:"block focus:outline-none"},[t[6]||(t[6]=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),e("p",oe,p(i.sender),1)],8,te)]),l(u,{class:"flex-shrink-0 whitespace-nowrap text-sm text-gray-500",datetime:i.created_at},null,8,["datetime"])]),e("div",ie,[e("p",re,p(i.message),1)])],10,W))),128))])])],32)):(n(),s("div",G,t[5]||(t[5]=[e("div",{"aria-label":"Message list",class:"h-full text-center pt-6"},[e("span",{class:"text-sm text-gray-500 font-semibold"},"No notification")],-1)])))])]),e("div",se,[t[9]||(t[9]=e("div",{class:"flex h-16 items-center justify-end bg-indigo-200"},null,-1)),e("div",ne,[o.$page.props.user_notifications.length?(n(),s("div",le,[F(o.$slots,"default")])):(n(),s("div",ae,t[8]||(t[8]=[e("img",{src:"/images/no_notification_yet.png",class:"h-1/3 w-1/5",alt:""},null,-1)])))])])])])])])])])]),_:3})],64))}});export{nt as default};
