import l from"./Layout-345de667.js";import"./@inertiajs-7f289881.js";import{y as r,x as a,Q as n,F as c,be as _,t as d,z as t,K as e,C as g}from"./@vue-d42dd214.js";import"./Authenticated-f3f73889.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c289c940.js";import"./axios-1779699b.js";import"./pusher-js-d90fcbf8.js";import"./laravel-echo-96cacb8d.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-2b1a9f82.js";import"./DialogDescription-c70040de.js";import"./lucide-vue-next-53796c49.js";import"./moment-a9aaa855.js";import"./TimeAgo-8457aaf5.js";import"./javascript-time-ago-55ed0321.js";import"./relative-time-format-ec7ee7be.js";import"./@heroicons-e6194902.js";import"./@headlessui-a01ed24c.js";const y={class:"flex-col w-full pt-4 px-4"},f={key:0,class:"pb-3 px-2 space-y-2"},x={class:"bg-white rounded-lg shadow-xl p-4"},u={class:"mt-5 border-t border-gray-200 mx-6"},h={class:"sm:divide-y sm:divide-gray-200"},v={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},b={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},C={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},w={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},j={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},k={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},q={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},N={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},S={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},B={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},O={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},V={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},$={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},D={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},F={class:"bg-white rounded-lg shadow-xl p-4"},H={class:"flex space-x-5"},L={props:{request_data:Object,created_by:String,notification_data:Object},data(){return{show:!1,class_info:[],form:{notification_id:this.notification_data.id,class_id:this.request_data?this.request_data.class_id:"",created_by:this.created_by?this.created_by:""}}},mounted(){axios.get(route("get_class_info",this.form.class_id)).then(i=>{this.class_info=i.data}).finally(()=>{this.show=!0})},methods:{approve(){this.$inertia.post(route("approve_class_delete"),this.form,{preserveState:!0})},reject(){this.$inertia.post(route("reject_class_delete"),this.form,{preserveState:!0})}}},Lt=Object.assign(L,{__name:"Request",setup(i){return(o,s)=>{const p=_("Head");return d(),r(c,null,[a(p,{title:"Notifications"}),a(l,null,{default:n(()=>[t("div",y,[o.show?(d(),r("div",f,[t("div",x,[s[9]||(s[9]=t("div",{class:"mx-6 mt-2"},[t("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Class Information"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Class details and related information.")],-1)),t("div",u,[t("dl",h,[t("div",v,[s[2]||(s[2]=t("dt",{class:"text-sm font-medium text-gray-500"},"Centre",-1)),t("dd",b,e(o.class_info.centre_name),1)]),t("div",C,[s[3]||(s[3]=t("dt",{class:"text-sm font-medium text-gray-500"},"Programme",-1)),t("dd",w,e(o.class_info.programme_name),1)]),t("div",j,[s[4]||(s[4]=t("dt",{class:"text-sm font-medium text-gray-500"},"Class Type",-1)),t("dd",k,e(o.class_info.class_type),1)]),t("div",q,[s[5]||(s[5]=t("dt",{class:"text-sm font-medium text-gray-500"},"Class Level",-1)),t("dd",N,"Level "+e(o.class_info.class_level),1)]),t("div",S,[s[6]||(s[6]=t("dt",{class:"text-sm font-medium text-gray-500"},"Class Day",-1)),t("dd",B,e(o.class_info.class_day),1)]),t("div",O,[s[7]||(s[7]=t("dt",{class:"text-sm font-medium text-gray-500"},"Class Method",-1)),t("dd",V,e(o.class_info.class_method),1)]),t("div",$,[s[8]||(s[8]=t("dt",{class:"text-sm font-medium text-gray-500"},"Class Capacity",-1)),t("dd",D,e(o.class_info.class_capacity)+" Person",1)])])])]),t("div",F,[t("div",H,[t("button",{class:"flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md",onClick:s[0]||(s[0]=(...m)=>o.reject&&o.reject(...m))}," Reject "),t("button",{class:"flex-1 px-4 py-2 ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md",onClick:s[1]||(s[1]=(...m)=>o.approve&&o.approve(...m))}," Approve ")])])])):g("",!0)])]),_:1})],64)}}});export{Lt as default};
