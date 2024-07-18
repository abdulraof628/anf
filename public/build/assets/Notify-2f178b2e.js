import d from"./Layout-87c936c2.js";import{j as m,o as i,c,a,w as n,F as r,d as t,t as e}from"./app-ca7c252e.js";import"./Authenticated-7dd4e5bf.js";import"./ApplicationLogo-44fdbb8b.js";import"./Button-c62d076b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-18ffab44.js";import"./perfect-scrollbar.esm-3c05f46e.js";import"./TimeAgo-9e31d12d.js";import"./moment-55cb88ed.js";import"./PencilIcon-174e88d6.js";import"./SearchIcon-a3cdbf80.js";import"./menu-a9855bf6.js";import"./keyboard-ca2dafe6.js";import"./use-resolve-button-type-40fbedfe.js";import"./transition-6f599973.js";const l={class:"flex-col w-full pt-4 px-4 space-y-4"},_={class:"bg-white rounded-lg shadow-xl p-4"},g=t("div",{class:"mx-6 mt-2"},[t("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Student Information"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Student details and related information")],-1),p={class:"mt-5 border-t border-gray-200 mx-6"},x={class:"sm:divide-y sm:divide-gray-200"},h={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},y=t("dt",{class:"text-sm font-medium text-gray-500"},"Name",-1),f={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},u={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},v=t("dt",{class:"text-sm font-medium text-gray-500"},"Gender",-1),b={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},q={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},w=t("dt",{class:"text-sm font-medium text-gray-500"},"Date of Birth",-1),N={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},B={class:"bg-white rounded-lg shadow-xl p-4"},j=t("div",{class:"mx-6 mt-2"},[t("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Parent Information")],-1),S={class:"mt-5 border-t border-gray-200 mx-6"},k={class:"sm:divide-y sm:divide-gray-200"},C={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},D=t("dt",{class:"text-sm font-medium text-gray-500"},"Name",-1),E={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},F={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},H=t("dt",{class:"text-sm font-medium text-gray-500"},"phone",-1),I={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},O={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},V=t("dt",{class:"text-sm font-medium text-gray-500"},"Email",-1),z={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},A={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},G=t("dt",{class:"text-sm font-medium text-gray-500"},"Address",-1),P={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize"},$={props:{request_data:Object},data(){return{}}},mt=Object.assign($,{__name:"Notify",setup(s){return(J,K)=>{const o=m("Head");return i(),c(r,null,[a(o,{title:"Notifications"}),a(d,null,{default:n(()=>[t("div",l,[t("div",_,[g,t("div",p,[t("dl",x,[t("div",h,[y,t("dd",f,e(s.request_data.basic_info.name),1)]),t("div",u,[v,t("dd",b,e(s.request_data.basic_info.gender),1)]),t("div",q,[w,t("dd",N,e(s.request_data.basic_info.dob),1)])])])]),t("div",B,[j,t("div",S,[t("dl",k,[t("div",C,[D,t("dd",E,e(s.request_data.parent_info.name),1)]),t("div",F,[H,t("dd",I,e(s.request_data.parent_info.phone),1)]),t("div",O,[V,t("dd",z,e(s.request_data.parent_info.email),1)]),t("div",A,[G,t("dd",P,e(s.request_data.parent_info.address),1)])])])])])]),_:1})],64)}}});export{mt as default};