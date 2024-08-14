import e from"./Layout-baa51caf.js";import"./@inertiajs-41d03628.js";import{x as a,v as m,P as d,F as r,a5 as c,q as n,y as t,G as o}from"./@vue-64c42e7d.js";import"./Authenticated-6651b23d.js";import"./ApplicationLogo-64527dd0.js";import"./radix-vue-2488f6ae.js";import"./@floating-ui-7a9770d8.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-f96983da.js";import"./app-98c3eb01.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./moment-3968d9f3.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./lucide-vue-next-48142e2c.js";import"./TimeAgo-667fc038.js";import"./javascript-time-ago-55ed0321.js";import"./relative-time-format-ec7ee7be.js";import"./@heroicons-3c270557.js";import"./@headlessui-28549402.js";const p={class:"flex-col w-full pt-4 px-4 space-y-4"},l={class:"bg-white rounded-lg shadow-xl p-4"},_=t("div",{class:"mx-6 mt-2"},[t("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Student Information"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Student details and related information")],-1),g={class:"mt-5 border-t border-gray-200 mx-6"},x={class:"sm:divide-y sm:divide-gray-200"},h={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},y=t("dt",{class:"text-sm font-medium text-gray-500"},"Name",-1),f={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},u={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},v=t("dt",{class:"text-sm font-medium text-gray-500"},"Gender",-1),b={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},q={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},w=t("dt",{class:"text-sm font-medium text-gray-500"},"Date of Birth",-1),N={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},B={class:"bg-white rounded-lg shadow-xl p-4"},S=t("div",{class:"mx-6 mt-2"},[t("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Parent Information")],-1),j={class:"mt-5 border-t border-gray-200 mx-6"},k={class:"sm:divide-y sm:divide-gray-200"},C={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},D=t("dt",{class:"text-sm font-medium text-gray-500"},"Name",-1),E={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},F={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},G=t("dt",{class:"text-sm font-medium text-gray-500"},"phone",-1),H={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},I={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},O=t("dt",{class:"text-sm font-medium text-gray-500"},"Email",-1),P={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},V={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},z=t("dt",{class:"text-sm font-medium text-gray-500"},"Address",-1),A={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize"},$={props:{request_data:Object},data(){return{}}},Kt=Object.assign($,{__name:"Notify",setup(s){return(J,K)=>{const i=c("Head");return n(),a(r,null,[m(i,{title:"Notifications"}),m(e,null,{default:d(()=>[t("div",p,[t("div",l,[_,t("div",g,[t("dl",x,[t("div",h,[y,t("dd",f,o(s.request_data.basic_info.name),1)]),t("div",u,[v,t("dd",b,o(s.request_data.basic_info.gender),1)]),t("div",q,[w,t("dd",N,o(s.request_data.basic_info.dob),1)])])])]),t("div",B,[S,t("div",j,[t("dl",k,[t("div",C,[D,t("dd",E,o(s.request_data.parent_info.name),1)]),t("div",F,[G,t("dd",H,o(s.request_data.parent_info.phone),1)]),t("div",I,[O,t("dd",P,o(s.request_data.parent_info.email),1)]),t("div",V,[z,t("dd",A,o(s.request_data.parent_info.address),1)])])])])])]),_:1})],64)}}});export{Kt as default};