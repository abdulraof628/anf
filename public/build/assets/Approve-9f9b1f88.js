import m from"./Layout-6c21ef9c.js";import"./@inertiajs-2b766590.js";import{x as e,v as r,O as c,F as l,b7 as n,q as s,B as d,y as t,U as i}from"./@vue-39dc9ff3.js";import"./Authenticated-214cc5de.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ef5f5861.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";import"./lucide-vue-next-7b48dc26.js";import"./moment-a9aaa855.js";import"./TimeAgo-d5f13767.js";import"./javascript-time-ago-55ed0321.js";import"./relative-time-format-ec7ee7be.js";import"./@heroicons-fd1e1a44.js";import"./@headlessui-3f5736f6.js";const _={key:0,class:"flex-col w-full pt-4 px-4 space-y-2"},h=t("div",{class:"bg-white rounded-lg shadow-xl px-4 py-10"},[t("div",{class:"flex flex-col items-center space-y-2"},[t("div",{class:"flex space-x-4 items-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"text-green-600 w-10 h-10",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},[t("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),t("path",{d:"M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"})]),t("p",{class:"text-lg font-bold"},[i(" Your request to delete class has been "),t("span",{class:"font-bold text-green-500"},"approved"),i(".")])])])],-1),f=[h],u={props:{request_data:Object},data(){return{show:!1,class_info:[],form:{class_id:this.request_data?this.request_data.class_id:"",created_by:this.created_by?this.created_by:""}}},mounted(){axios.get(route("get_class_info",this.form.class_id)).then(o=>{this.class_info=o.data}).finally(()=>{this.show=!0})}},ht=Object.assign(u,{__name:"Approve",setup(o){return(p,x)=>{const a=n("Head");return s(),e(l,null,[r(a,{title:"Notifications"}),r(m,null,{default:c(()=>[p.show?(s(),e("div",_,f)):d("",!0)]),_:1})],64)}}});export{ht as default};