import n from"./Layout-0827aa11.js";import"./@inertiajs-df65e401.js";import{b5 as d,q as s,x as m,v as a,P as c,F as l,y as t,V as _,G as h,z as f}from"./@vue-b5d553e1.js";import"./Authenticated-f12ae66a.js";import"./ApplicationLogo-e2b93f7b.js";import"./app-6e1c5045.js";import"./axios-9cbf0d09.js";import"./pusher-js-1c63de54.js";import"./@vueform-f7c8a6df.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./lucide-vue-next-967cc12e.js";import"./moment-a9aaa855.js";import"./TimeAgo-ae3d9a36.js";import"./javascript-time-ago-55ed0321.js";import"./relative-time-format-ec7ee7be.js";import"./@heroicons-6bb93f0b.js";import"./@headlessui-1eabfa74.js";const u={class:"flex-col w-full pt-4 px-4"},v={class:"pb-3 px-2 space-y-2"},x={key:0,class:"bg-white rounded-lg shadow-xl p-4"},g={class:"flex"},b=t("div",null,[t("svg",{class:"w-6 h-6 fill-current text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})])],-1),y={class:"ml-3"},w={class:"font-semibold text-gray-800"},j={class:"text-bold text-indigo-600"},q=t("p",{class:"mt-2 text-sm text-gray-600 leading-relaxed"},"Please be informed that this action is irreversible.",-1),C={class:"flex items-center mt-3"},N={props:{request_data:Object,created_by:String,notification_data:Object},data(){return{show:!1,centre_info:[],form:{notification_id:this.notification_data.id,centre_id:this.request_data?this.request_data.centre_id:"",centre_name:"",created_by:this.created_by?this.created_by:""}}},mounted(){axios.get(route("get_approval_centre_info",this.form.centre_id)).then(i=>{this.form.centre_name=i.data.centre_name}).finally(()=>{this.show=!0})},methods:{approve(){this.$inertia.post(route("approve_centre_delete"),this.form,{preserveState:!0})},reject(){this.$inertia.post(route("reject_centre_delete"),this.form,{preserveState:!0})}}},wt=Object.assign(N,{__name:"Request",setup(i){return(e,o)=>{const p=d("Head");return s(),m(l,null,[a(p,{title:"Notifications"}),a(n,null,{default:c(()=>[t("div",u,[t("div",v,[e.show?(s(),m("div",x,[t("div",g,[b,t("div",y,[t("h2",w,[_("Request to remove "),t("span",j,"ANFC "+h(e.form.centre_name),1)]),q])]),t("div",C,[t("button",{class:"flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md",onClick:o[0]||(o[0]=(...r)=>e.reject&&e.reject(...r))}," Reject "),t("button",{class:"flex-1 px-4 py-2 ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md",onClick:o[1]||(o[1]=(...r)=>e.approve&&e.approve(...r))}," Approve ")])])):f("",!0)])])]),_:1})],64)}}});export{wt as default};
