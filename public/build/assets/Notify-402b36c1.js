import d from"./Layout-1fa6c91e.js";import"./@inertiajs-7f289881.js";import{y as a,x as r,Q as p,F as n,be as l,t as _,z as t,K as o}from"./@vue-d42dd214.js";import"./Authenticated-98036166.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ece3933f.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-c5f0f1fd.js";import"./DialogDescription-a3c26cdc.js";import"./lucide-vue-next-53796c49.js";import"./moment-a9aaa855.js";import"./TimeAgo-b39f7b9d.js";import"./javascript-time-ago-55ed0321.js";import"./relative-time-format-ec7ee7be.js";import"./@heroicons-e6194902.js";import"./@headlessui-a01ed24c.js";const g={class:"flex-col w-full pt-4 px-4 space-y-4"},u={class:"bg-white rounded-lg shadow-xl p-4"},c={class:"mt-5 border-t border-gray-200 mx-6"},y={class:"sm:divide-y sm:divide-gray-200"},x={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},f={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},v={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},h={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},b={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},N={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},w={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},B={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},C={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},F={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},j={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},k={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},q={props:{request_data:Object},data(){return{user_info:[]}},mounted(){axios.get(route("users.get_info",this.request_data.user_id)).then(i=>{this.user_info=i.data})}},qt=Object.assign(q,{__name:"Notify",setup(i){return(m,s)=>{const e=l("Head");return _(),a(n,null,[r(e,{title:"Notifications"}),r(d,null,{default:p(()=>[t("div",g,[t("div",u,[s[6]||(s[6]=t("div",{class:"mx-6 mt-2"},[t("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"User Information"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"User details and related information")],-1)),t("div",c,[t("dl",y,[t("div",x,[s[0]||(s[0]=t("dt",{class:"text-sm font-medium text-gray-500"},"First Name",-1)),t("dd",f,o(m.user_info.user_first_name),1)]),t("div",v,[s[1]||(s[1]=t("dt",{class:"text-sm font-medium text-gray-500"},"Last Name",-1)),t("dd",h,o(m.user_info.user_last_name),1)]),t("div",b,[s[2]||(s[2]=t("dt",{class:"text-sm font-medium text-gray-500"},"Phone Number",-1)),t("dd",N,o(m.user_info.user_calling_code)+o(m.user_info.user_contact),1)]),t("div",w,[s[3]||(s[3]=t("dt",{class:"text-sm font-medium text-gray-500"},"Address",-1)),t("dd",B,o(m.user_info.user_address),1)]),t("div",C,[s[4]||(s[4]=t("dt",{class:"text-sm font-medium text-gray-500"},"State",-1)),t("dd",F,o(m.user_info.user_state),1)]),t("div",j,[s[5]||(s[5]=t("dt",{class:"text-sm font-medium text-gray-500"},"Country",-1)),t("dd",k,o(m.user_info.user_country),1)])])])])])]),_:1})],64)}}});export{qt as default};
