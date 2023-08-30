import o from"./Layout-ee94d9f7.js";import{r as m,c as i,b as a,w as c,F as n,o as r,d as t,t as e}from"./app-7fa9d0bc.js";import"./Authenticated-2913fd23.js";import"./ApplicationLogo-f91fd4fa.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Button-9bb99ef6.js";import"./XIcon-bdcdbbe9.js";import"./default.css_vue_type_style_index_0_src_true_lang-5871727b.js";import"./moment-fbc5633a.js";import"./PencilIcon-5f6e2382.js";import"./SearchIcon-0f46f0d3.js";import"./menu-b46ca26f.js";import"./transition-b7df3bd5.js";import"./use-resolve-button-type-2c7e0f08.js";const l={class:"flex-col w-full pt-4 px-4 space-y-4"},_={class:"bg-white rounded-lg shadow-xl p-4"},g=t("div",{class:"mx-6 mt-2"},[t("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Student Information"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Student details and related information")],-1),p={class:"mt-5 border-t border-gray-200 mx-6"},x={class:"sm:divide-y sm:divide-gray-200"},h={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},y=t("dt",{class:"text-sm font-medium text-gray-500"},"Name",-1),f={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},u={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},v=t("dt",{class:"text-sm font-medium text-gray-500"},"Gender",-1),b={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},q={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},w=t("dt",{class:"text-sm font-medium text-gray-500"},"Date of Birth",-1),N={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},B={class:"bg-white rounded-lg shadow-xl p-4"},S=t("div",{class:"mx-6 mt-2"},[t("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Parent Information")],-1),j={class:"mt-5 border-t border-gray-200 mx-6"},k={class:"sm:divide-y sm:divide-gray-200"},C={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},D=t("dt",{class:"text-sm font-medium text-gray-500"},"Name",-1),E={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},F={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},H=t("dt",{class:"text-sm font-medium text-gray-500"},"phone",-1),I={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},O={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},V=t("dt",{class:"text-sm font-medium text-gray-500"},"Email",-1),z={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},A={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},G=t("dt",{class:"text-sm font-medium text-gray-500"},"Address",-1),P={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize"},$={props:{request_data:Object},data(){return{}}},dt=Object.assign($,{__name:"Notify",setup(s){return(J,K)=>{const d=m("Head");return r(),i(n,null,[a(d,{title:"Notifications"}),a(o,null,{default:c(()=>[t("div",l,[t("div",_,[g,t("div",p,[t("dl",x,[t("div",h,[y,t("dd",f,e(s.request_data.basic_info.name),1)]),t("div",u,[v,t("dd",b,e(s.request_data.basic_info.gender),1)]),t("div",q,[w,t("dd",N,e(s.request_data.basic_info.dob),1)])])])]),t("div",B,[S,t("div",j,[t("dl",k,[t("div",C,[D,t("dd",E,e(s.request_data.parent_info.name),1)]),t("div",F,[H,t("dd",I,e(s.request_data.parent_info.phone),1)]),t("div",O,[V,t("dd",z,e(s.request_data.parent_info.email),1)]),t("div",A,[G,t("dd",P,e(s.request_data.parent_info.address),1)])])])])])]),_:1})],64)}}});export{dt as default};