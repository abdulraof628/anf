import{_ as U}from"./ApplicationLogo-4d8d9123.js";import{B as X}from"./Button-375c20b5.js";import{B as $,o,c as i,d as e,y as k,h as D,p as H,q as d,a as l,w as c,n as m,T as C,s as v,u as N,L as M,t as p,j as h,F as b,e as B,E as G,g as S,l as Y,v as J}from"./app-2cb814f6.js";import{_ as Q,r as Z,a as ee}from"./XIcon-d4937228.js";import{P as te,b as se}from"./vue3-perfect-scrollbar-26fe73dc.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import{T as oe}from"./TimeAgo-79159604.js";const ne={class:"relative"},ie={data(){return{open:!1}},methods:{closeOverlay(){this.open=!1,this.$emit("close-notification","true")}}},re=Object.assign(ie,{__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["bg-white"]}},setup(t){const s=t,a=$(()=>({48:"w-48",72:"w-72",80:"w-80",96:"w-96"})[s.width.toString()]),f=$(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top");return(n,r)=>(o(),i("div",ne,[e("div",{onClick:r[0]||(r[0]=_=>n.open=!n.open)},[k(n.$slots,"trigger")]),n.open?D((o(),i("div",{key:0,class:"fixed inset-0 z-40",onClick:r[1]||(r[1]=_=>n.closeOverlay())},null,512)),[[H,n.open]]):d("",!0),l(C,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:c(()=>[D(e("div",{class:m(["absolute z-50 mt-2 rounded-md shadow-lg",[a.value,f.value]]),style:{display:"none"},onClick:r[2]||(r[2]=_=>n.open=!1)},[e("div",{class:m(["rounded-md ring-0 ring-red-500 ring-opacity-5",t.contentClasses])},[k(n.$slots,"content")],2)],2),[[H,n.open]])]),_:3})]))}}),ae={__name:"DropdownLink",setup(t){return(s,a)=>(o(),v(N(M),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"},{default:c(()=>[k(s.$slots,"default")]),_:3}))}},le={__name:"NavSubLink",props:["href","active"],setup(t){const s=t,a=$(()=>s.active?" flex items-center py-2 pl-10 pr-4 transition cursor-pointer text-white font-semibold bg-gray-800":"flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:text-white hover:bg-gray-800 font-semibold"),f=$(()=>!!s.active);return(n,r)=>(o(),v(N(M),{href:t.href,class:m(a.value),expand:f.value},{default:c(()=>[k(n.$slots,"default")]),_:3},8,["href","class","expand"]))}},ce={__name:"ResponsiveNavLink",props:["href","active"],setup(t){const s=t,a=$(()=>s.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(f,n)=>(o(),v(N(M),{href:t.href,class:m(a.value)},{default:c(()=>[k(f.$slots,"default")]),_:3},8,["href","class"]))}};function de(t,s){return o(),v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[l("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})])}function ue(t,s){return o(),v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[l("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z","clip-rule":"evenodd"})])}function he(t,s){return o(),v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[l("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})])}function pe(t,s){return o(),v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[l("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})])}const me={props:{toastData:Object,class:String},data(){return{visible:!1,timeout:null}},mounted(){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.visible=!1,1e4)},watch:{toastData:{immediate:!0,deep:!0,handler(){this.visible=!0,this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.visible=!1,1e4)}}},methods:{closeToast(){this.visible=!1}}},fe={class:"flex items-center"},_e=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 text-green-500",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),ge={class:"ml-3 text-sm font-bold text-green-600 leading-loose"},ve=e("span",{class:"inline-flex items-center cursor-pointer ml-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])],-1),we={class:"flex items-center"},xe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 text-blue-600",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"})],-1),be={class:"ml-3 text-sm font-bold text-blue-600"},ye=e("span",{class:"inline-flex items-center cursor-pointer ml-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])],-1),ke={class:"flex items-center"},ze=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 text-yellow-500",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),Ce={class:"ml-3 text-sm font-bold text-yellow-500"},Be=e("span",{class:"inline-flex items-center cursor-pointer ml-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])],-1),$e={class:"flex items-center"},Me=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 text-red-600",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),Le={class:"ml-3 text-sm font-bold text-red-600"},Te=e("span",{class:"inline-flex items-center cursor-pointer ml-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])],-1);function De(t,s,a,f,n,r){return o(),i("div",null,[l(C,{name:"toast-animate"},{default:c(()=>[a.toastData.type=="success"&&n.visible?(o(),i("div",{key:0,class:m(["top-10 fixed right-10 z-40 flex items-center justify-between max-w-sm p-4 bg-white border rounded-md shadow-sm shadow-green-600 cursor-pointer",a.class]),onClick:s[0]||(s[0]=(..._)=>r.closeToast&&r.closeToast(..._))},[e("div",fe,[_e,e("p",ge,p(a.toastData.message),1)]),ve],2)):d("",!0)]),_:1}),l(C,{name:"toast-animate"},{default:c(()=>[a.toastData.type=="info"&&n.visible?(o(),i("div",{key:0,class:m(["top-10 fixed right-10 z-40 flex items-center justify-between max-w-sm p-4 bg-white border rounded-md shadow-sm shadow-blue-600 cursor-pointer",a.class]),onClick:s[1]||(s[1]=(..._)=>r.closeToast&&r.closeToast(..._))},[e("div",we,[xe,e("p",be,p(a.toastData.message),1)]),ye],2)):d("",!0)]),_:1}),l(C,{name:"toast-animate"},{default:c(()=>[a.toastData.type=="warning"&&n.visible?(o(),i("div",{key:0,class:m(["top-10 fixed right-10 z-40 flex items-center justify-between max-w-sm p-4 bg-white border rounded-md shadow-sm shadow-yellow-500 cursor-pointer",a.class]),onClick:s[2]||(s[2]=(..._)=>r.closeToast&&r.closeToast(..._))},[e("div",ke,[ze,e("p",Ce,p(a.toastData.message),1)]),Be],2)):d("",!0)]),_:1}),l(C,{name:"toast-animate"},{default:c(()=>[a.toastData.type=="error"&&n.visible?(o(),i("div",{key:0,class:m(["top-10 fixed right-10 z-40 flex items-center justify-between max-w-sm p-4 bg-white border rounded-md shadow-sm shadow-red-600 cursor-pointer",a.class]),onClick:s[3]||(s[3]=(..._)=>r.closeToast&&r.closeToast(..._))},[e("div",$e,[Me,e("p",Le,p(a.toastData.message),1)]),Te],2)):d("",!0)]),_:1})])}const Ne=V(me,[["render",De]]),Ve={components:{Link:M},props:{breadcrumbs:Object}},je={class:"flex items-center"},He={key:0,class:"inline-flex items-center space-x-1"},Se={key:0,class:"w-5 h-5 text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Ie=e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"},null,-1),Oe=[Ie],Ae={key:1,class:"flex items-center text-white"},Ee=e("svg",{class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),Fe={class:"ml-1 text-sm font-semibold"},We={key:0,class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Pe=e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},null,-1),Re=[Pe],qe={class:"ml-1 text-sm font-semibold"},Ke={key:3,class:"flex items-center"},Ue={class:"ml-1 text-sm font-semibold text-white"},Xe={key:1,class:"inline-flex items-center space-x-1"},Ge=e("li",{class:"inline-flex items-center"},[e("div",{class:"flex items-center"},[e("span",{class:"ml-1 text-sm font-semibold text-white"},"Please set breadcrumbs at routes/breadcrumbs.php")])],-1),Ye=[Ge];function Je(t,s,a,f,n,r){const _=h("Link");return o(),i("div",je,[a.breadcrumbs?(o(),i("ol",He,[(o(!0),i(b,null,B(a.breadcrumbs,(y,w)=>(o(),i("li",{class:"inline-flex items-center",key:w},[w>=1?(o(),i("svg",Se,Oe)):d("",!0),w==0&&a.breadcrumbs.length<=1?(o(),i("div",Ae,[Ee,e("span",Fe,p(y.title),1)])):w==0&&a.breadcrumbs.length>1||w+1<a.breadcrumbs.length?(o(),v(_,{key:2,href:y.url,class:"inline-flex items-center text-sm font-medium text-white"},{default:c(()=>[w==0?(o(),i("svg",We,Re)):d("",!0),e("span",qe,p(y.title),1)]),_:2},1032,["href"])):(o(),i("div",Ke,[e("span",Ue,p(y.title),1)]))]))),128))])):(o(),i("ol",Xe,Ye))])}const Qe=V(Ve,[["render",Je]]),I=["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"];var Ze={name:"PerfectScrollbar",props:{options:{type:Object,required:!1,default:()=>{}},tag:{type:String,required:!1,default:"div"},watchOptions:{type:Boolean,required:!1,default:!1}},emits:I,data(){return{ps:null}},watch:{watchOptions(t){!t&&this.watcher?this.watcher():this.createWatcher()}},mounted(){this.create(),this.watchOptions&&this.createWatcher()},updated(){this.$nextTick(()=>{this.update()})},beforeUnmount(){this.destroy()},methods:{create(){this.ps&&this.$isServer||(this.ps=new te(this.$el,this.options),I.forEach(t=>{this.ps.element.addEventListener(t,s=>this.$emit(t,s))}))},createWatcher(){this.watcher=this.$watch("options",()=>{this.destroy(),this.create()},{deep:!0})},update(){this.ps&&this.ps.update()},destroy(){this.ps&&(this.ps.destroy(),this.ps=null)}},render(){return G(this.tag,{class:"ps"},this.$slots.default&&this.$slots.default())}};const et={components:{BreezeApplicationLogo:U,Link:M,Toast:Ne,BreezeButton:X,Toggle:se,BreezeDropdown:re,BreezeDropdownLink:ae,BreezeNavLink:Q,BreezeResponsiveNavLink:ce,BreezeNavSubLink:le,Breadcrumbs:Qe,TimeAgo:oe,PerfectScrollbar:Ze,CogIcon:Z,ChevronRightIcon:de,LogoutIcon:ue,ViewGridIcon:pe,XIcon:ee,MenuIcon:he},data(){return{menu_setting:[],menu_opened:{section_key:"",menu_key:""},notificationOpen:!1,showingNavigationDropdown:!1,sideBar:!1,selected:"",steps:[{target:".step-1",content:"This is the menus"},{target:".step-2",content:"This is your profile"}],notifications:[],username:"",darkMode:!1}},methods:{switchMode(){this.darkMode},toggleMenu(t,s){const a=t.toString(),f=s.toString(),n=this.menu_setting.find(r=>r.section_key===a&&r.menu_key===f);n.is_open=!n.is_open},checkMenuIsOpen(t,s){const a=t.toString(),f=s.toString();return this.menu_setting.find(r=>r.section_key===a&&r.menu_key===f).is_open},initMenu(){for(let t in this.$page.props.menu)for(let s in this.$page.props.menu[t].menus){this.$page.props.menu[t].menus[s].menu_route||this.menu_setting.push({section_key:t,menu_key:s,is_open:!1});for(let a in this.$page.props.menu[t].menus[s].sub_menus){const f=this.$page.props.menu[t].menus[s].sub_menus[a].sub_menu_route;if(route().current()&&route().current().startsWith(f)){const n=this.menu_setting.find(r=>r.section_key===t&&r.menu_key===s);n.is_open=!0,this.menu_opened.section_key=t,this.menu_opened.menu_key=s}}}},completedTour(t){t&&this.$inertia.post(route("users.completed_tour"),{user_id:this.$inertia.page.props.auth.user.ID})},closeNotification(t){t&&(this.notificationOpen=!1)},impersonate(){this.username&&this.$inertia.get(route("impersonate",this.username))},subscribeGlobalChannel(){Echo.leave("notifications."+this.$page.props.auth.user.ID),Echo.channel("notifications."+this.$page.props.auth.user.ID).listen(".Notifications",t=>{this.$page.props.user_has_notifications=!0,this.$page.props.user_notifications.unshift({id:t.new_notification_id,panel_icon:t.panel_icon,panel_content:t.panel_content,created_at:t.created_at}),this.$page.props.notifications&&this.$page.props.notifications.unshift({id:t.new_notification_id,sender:t.sender,message:t.notification_message,created_at:t.created_at})})},subscribeNotifications(){Echo.leave("test"),Echo.channel("test").listen("Test",t=>{this.$page.props.user_has_notifications=!0,this.$page.props.user_notifications.unshift({id:"test",panel_icon:"",panel_content:"This is a test",created_at:""})})},subscribeApprovalChannel(){this.$page.props.user_has_roles.forEach(t=>{Echo.leave("approval."+t),Echo.channel("approval."+t).listen(".Approval",s=>{this.$page.props.user_has_notifications=!0,this.$page.props.user_notifications.unshift({id:s.new_notification_id,panel_icon:s.panel_icon,panel_content:s.panel_content,created_at:s.created_at}),this.$page.props.notifications&&this.$page.props.notifications.unshift({id:s.new_notification_id,sender:s.sender,message:s.notification_message,created_at:s.created_at})})})}},mounted(){},created(){this.initMenu()}},tt={class:"flex"},st={class:"flex min-h-screen bg-gray-50 step-1"},ot={class:"flex justify-center border-b border-dotted"},nt={class:"shrink-0 flex items-center"},it={class:"flex justify-center items-center px-4 py-5 text-white font-bold"},rt={class:"text-sm font-medium text-gray-500 p-3 space-y-4 my-3"},at={class:"space-y-1"},lt={class:"uppercase text-gray-100 text-xs mb-3"},ct={key:0,class:"flex space-x-1"},dt={key:0,class:"px-0.5 rounded-r bg-red-500"},ut={class:"mr-3 h-8 w-8"},ht=["src"],pt={class:"select-none font-semibold tracking-wide"},mt={key:0,class:"space-y-1"},ft=["onClick"],_t={class:"flex items-center"},gt={class:"mr-3 h-8 w-8"},vt=["src"],wt={class:"select-none font-semibold tracking-wide"},xt={key:0,class:"mb-3 ml-3 space-y-1 pb-3"},bt={key:0,class:"flex space-x-1"},yt={key:0,class:"px-0.5 rounded-r bg-red-500"},kt={class:"select-none tracking-wide"},zt={class:"w-8 h-8 rounded-full overflow-hidden border-2 dark:border-white border-gray-900 mr-2"},Ct=["src"],Bt={key:1,class:"h-full w-full text-gray-300 border rounded-full",fill:"currentColor",viewBox:"0 0 24 24"},$t=e("path",{d:"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),Mt=[$t],Lt={class:"flex-1 flex flex-col bg-indigo-50 justify-between w-screen sm:pl-64 md:pl-72 lg:pl-72 xl:pl-72"},Tt={class:"flex-grow"},Dt={class:"flex flex-col"},Nt={class:"bg-white border-b border-gray-100 sticky top-0 z-20"},Vt={class:"mx-auto px-4 sm:px-6 lg:px-8 shadow-md"},jt={class:"flex justify-end h-16"},Ht={class:"hidden sm:flex sm:items-center sm:ml-6"},St={class:"ml-3 relative"},It={type:"button",class:"inline-flex items-center px-3 py-2"},Ot={class:"w-5 h-5"},At={key:0,class:"relative"},Et=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[e("path",{d:"M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"})],-1),Ft={key:0,class:"absolute",style:{top:"2px",left:"10px"}},Wt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"currentColor",class:"text-red-500",viewBox:"0 0 16 16"},[e("circle",{cx:"8",cy:"8",r:"8"})],-1),Pt=[Wt],Rt={key:1,class:""},qt=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[e("path",{d:"M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z"})],-1),Kt={key:0,class:"absolute",style:{top:"11px",right:"13px"}},Ut=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"currentColor",class:"text-red-500",viewBox:"0 0 16 16"},[e("circle",{cx:"8",cy:"8",r:"8"})],-1),Xt=[Ut],Gt={key:0,class:"overflow-y-auto max-h-60 scrollbar divide-y divide-dashed"},Yt={class:"flex justify-between items-center py-2"},Jt={class:"flex space-x-3 px-2 items-center"},Qt=["innerHTML"],Zt={class:"text-black"},es={class:"flex min-w-[70px]"},ts={key:1,class:"rounded-md overflow-y-auto"},ss=e("div",{class:"bg-white-100 text-center py-4 text-blue-400"},[e("span",{class:"text-sm text-gray-500"},"No notifications available!")],-1),os=[ss],ns=e("a",null,"View all notifications",-1),is={class:"ml-3 relative"},rs={class:"inline-flex rounded-md step-2"},as={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 transition ease-in-out duration-150"},ls={class:"w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 mr-2"},cs=["src"],ds={key:1,class:"h-full w-full text-gray-300 border rounded-full",fill:"currentColor",viewBox:"0 0 24 24"},us=e("path",{d:"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),hs=[us],ps={class:"select-none truncate max-w-[160px]"},ms=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),fs={class:"py-1"},_s=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-person-lines-fill",viewBox:"0 0 16 16"},[e("path",{d:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"})],-1),gs=e("span",null,"Profile",-1),vs=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-box-arrow-left",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"}),e("path",{"fill-rule":"evenodd",d:"M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"})],-1),ws=e("span",null,"Log Out",-1),xs={class:"-mr-2 flex items-center sm:hidden"},bs={key:0,class:"bg-indigo-600 shadow"},ys={class:"flex mx-auto py-3 px-4 sm:px-6 lg:px-6 justify-between"},ks={key:1,class:"px-6 py-3 bg-blue bg-red-500 space-y-4 lg:flex lg:space-y-0 justify-between items-center"},zs=e("span",{class:"text-white text-sm font-semibold italic whitespace-nowrap"},"Warning: Please use this feature with caution!",-1),Cs=e("label",{for:"impersonate_username",class:"text-white 2xl:text-sm sm:text-md font-bold"},"Username",-1),Bs={class:"flex space-x-2 items-center"},$s=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 512 512"},[e("path",{d:"M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"})],-1),Ms={class:"flex justify-between items-center py-5 px-6 bg-slate-700 text-white"},Ls={class:""},Ts={class:"text-sm"};function Ds(t,s,a,f,n,r){const _=h("BreezeApplicationLogo"),y=h("Link"),w=h("BreezeNavLink"),O=h("ChevronRightIcon"),A=h("BreezeNavSubLink"),E=h("LogoutIcon"),F=h("Toast"),W=h("TimeAgo"),L=h("BreezeDropdownLink"),j=h("BreezeDropdown"),P=h("MenuIcon"),R=h("XIcon"),q=h("Breadcrumbs"),K=h("BreezeButton");return o(),i("div",tt,[e("div",st,[e("nav",{class:m(["fixed bg-gray-900 w-[18rem] top-0 left-0 z-30 transition h-full origin-left overflow-y-auto scrollbar transform sm:translate-x-0",{"-translate-x-full":!n.sideBar,"translate-x-0":n.sideBar}])},[e("div",ot,[e("div",nt,[l(y,{href:"/admin"},{default:c(()=>[l(_,{class:"h-8 fill-current text-gray-500"})]),_:1})]),e("span",it,p(t.$page.props.app_name),1)]),e("nav",rt,[(o(!0),i(b,null,B(t.$page.props.menu,(u,z)=>(o(),i("div",at,[e("p",lt,p(u.name),1),(o(!0),i(b,null,B(u.menus,(g,T)=>(o(),i(b,null,[g.menu_route&&g.menu_status==1?(o(),i("div",ct,[t.route().current()&&t.route().current().startsWith(g.menu_route)?(o(),i("div",dt)):d("",!0),t.$page.props.can[g.menu_permission]?(o(),v(w,{key:1,href:t.route(g.menu_route),active:t.route().current()&&t.route().current().startsWith(g.menu_route),class:"rounded-lg flex-auto"},{default:c(()=>[e("span",ut,[e("img",{src:"/images/"+g.menu_icon},null,8,ht)]),e("span",pt,p(g.menu_name),1)]),_:2},1032,["href","active"])):d("",!0)])):(o(),i(b,{key:1},[t.$page.props.can[g.menu_permission]?(o(),i("div",mt,[e("div",{class:m(["flex items-center justify-between px-4 py-2 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 rounded-lg",n.menu_opened.section_key==z&&n.menu_opened.menu_key==T?"text-white tracking-wide bg-gray-800":""]),role:"button",onClick:x=>r.toggleMenu(z,T)},[e("div",_t,[e("span",gt,[e("img",{src:"/images/"+g.menu_icon},null,8,vt)]),e("span",wt,p(g.menu_name),1)]),l(O,{class:m([{"rotate-90":r.checkMenuIsOpen(z,T)},"shrink-0 w-4 h-4 ml-2 transition transform"])},null,8,["class"])],10,ft),r.checkMenuIsOpen(z,T)?(o(),i("div",xt,[(o(!0),i(b,null,B(g.sub_menus,(x,Ns)=>(o(),i(b,null,[t.$page.props.can[x.sub_menu_permission]&&x.sub_menu_status==1?(o(),i("div",bt,[t.route().current()&&t.route().current().startsWith(x.sub_menu_route)?(o(),i("div",yt)):d("",!0),t.$page.props.can[x.sub_menu_permission]?(o(),v(A,{key:1,href:x.sub_menu_route?t.route(x.sub_menu_route):"",active:x.sub_menu_route?t.route().current()&&t.route().current().startsWith(x.sub_menu_route):"",class:"rounded-lg flex-auto"},{default:c(()=>[e("span",kt,p(x.sub_menu_name),1)]),_:2},1032,["href","active"])):d("",!0)])):d("",!0)],64))),256))])):d("",!0)])):d("",!0)],64))],64))),256))]))),256)),l(w,{class:"w-full sm:hidden",href:t.route("admin.logout"),method:"post",as:"button"},{default:c(()=>[l(E,{class:"h-6 w-6 mr-2"}),S(" Log Out ")]),_:1},8,["href"]),l(w,{class:"w-full sticky sm:hidden bg-blue-900 text-white",href:t.route("profile")},{default:c(()=>[e("div",zt,[t.$page.props.auth.profile_photo?(o(),i("img",{key:0,src:"/storage/"+t.$page.props.auth.profile_photo,alt:"",class:"w-full h-full object-cover select-none"},null,8,Ct)):(o(),i("svg",Bt,Mt))]),S(" My Account ")]),_:1},8,["href"])])],2),e("div",{class:m(["fixed h-screen bg-gray-200 w-full md:w-[18rem] top-0 left-0 z-10 h-fullo transition origin-left transform sm:translate-x-0 sm:hidden",{"-translate-x-full":!n.sideBar,"translate-x-0":n.sideBar}]),onClick:s[0]||(s[0]=u=>(n.showingNavigationDropdown=!n.showingNavigationDropdown,n.sideBar=!n.sideBar))},null,2)]),e("div",Lt,[l(F,{toastData:t.$page.props.flash},null,8,["toastData"]),e("main",Tt,[e("div",Dt,[e("nav",Nt,[e("div",Vt,[e("div",jt,[e("div",Ht,[e("div",St,[l(j,{align:"right",width:"96",onCloseNotification:r.closeNotification},{trigger:c(()=>[e("span",{class:"inline-flex rounded-md",onClick:s[1]||(s[1]=u=>n.notificationOpen=!0)},[e("button",It,[e("div",Ot,[n.notificationOpen?(o(),i("div",At,[Et,t.$page.props.user_has_notifications?(o(),i("div",Ft,Pt)):d("",!0)])):(o(),i("div",Rt,[qt,t.$page.props.user_has_notifications?(o(),i("div",Kt,Xt)):d("",!0)]))])])])]),content:c(()=>[t.$page.props.user_notifications.length?(o(),i("div",Gt,[(o(!0),i(b,null,B(t.$page.props.user_notifications,(u,z)=>(o(),i("div",{class:"flex justify-center",key:u.id},[l(L,{href:t.route("view_notification",{id:u.id}),class:m(u.seen!=1?"bg-blue-200 hover:bg-blue-300":"bg-white hover:bg-gray-100")},{default:c(()=>[e("div",Yt,[e("div",Jt,[e("span",{class:"text-2xl text-[30px]",innerHTML:u.panel_icon},null,8,Qt),e("span",Zt,p(u.panel_content),1)]),e("div",es,[u.created_at!=""?(o(),v(W,{key:0,class:"text-indigo-500",datetime:u.created_at},null,8,["datetime"])):d("",!0)])])]),_:2},1032,["href","class"])]))),128))])):(o(),i("div",ts,os)),l(L,{href:t.route("notifications"),preserveState:!1,class:"text-center bg-gray-200 hover:bg-gray-300 rounded-b-md text-gray-500 font-semibold"},{default:c(()=>[ns]),_:1},8,["href"])]),_:1},8,["onCloseNotification"])]),e("div",is,[l(j,{align:"right",width:"48"},{trigger:c(()=>[e("span",rs,[e("button",as,[e("div",ls,[t.$page.props.auth.profile_photo?(o(),i("img",{key:0,src:"/storage/"+t.$page.props.auth.profile_photo,alt:"",class:"w-full h-full object-cover select-none"},null,8,cs)):(o(),i("svg",ds,hs))]),e("span",ps,p(t.$page.props.auth.user.display_name),1),ms])])]),content:c(()=>[e("div",fs,[l(L,{class:"flex space-x-2",href:t.route("profile")},{default:c(()=>[_s,gs]),_:1},8,["href"]),l(L,{class:"flex space-x-2 border-t",href:t.route("admin.logout"),method:"post",as:"button"},{default:c(()=>[vs,ws]),_:1},8,["href"])])]),_:1})])]),e("div",xs,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:s[2]||(s[2]=u=>(n.showingNavigationDropdown=!n.showingNavigationDropdown,n.sideBar=!n.sideBar))},[l(P,{class:m(["h-6 w-6",{hidden:n.showingNavigationDropdown,"inline-flex":!n.showingNavigationDropdown}])},null,8,["class"]),l(R,{class:m(["h-6 w-6",{hidden:!n.showingNavigationDropdown,"inline-flex":n.showingNavigationDropdown}])},null,8,["class"])])])])])]),t.$slots.header?(o(),i("header",bs,[e("div",ys,[l(q,{breadcrumbs:t.$page.props.breadcrumbs},null,8,["breadcrumbs"])])])):d("",!0),t.$page.props.can.impersonate_access||t.$page.props.can.is_impersonated?(o(),i("div",ks,[zs,e("form",{onSubmit:s[4]||(s[4]=Y((...u)=>r.impersonate&&r.impersonate(...u),["prevent"])),class:"flex flex-col lg:flex-row w-full space-x-2 items-center md:justify-end lg:justify-end"},[Cs,e("div",Bs,[D(e("input",{type:"text",id:"impersonate_username",class:"rounded py-1 px-2 border-orange-500 focus:ring-0 focus:border-orange-500","onUpdate:modelValue":s[3]||(s[3]=u=>n.username=u),autocomplete:"none"},null,512),[[J,n.username]]),l(K,{tooltip:"Switch User",onClick:r.impersonate,class:"px-3 py-2"},{default:c(()=>[$s]),_:1},8,["onClick"])])],32)])):d("",!0),k(t.$slots,"default")])]),e("div",Ms,[e("div",Ls,[e("span",Ts,p(new Date().getFullYear())+" © ALFA and Friends",1)])])])])}const Es=V(et,[["render",Ds]]);export{Es as B,de as r};
