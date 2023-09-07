import{h as d}from"./moment-fbc5633a.js";import{_ as o}from"./_plugin-vue_export-helper-c27b6911.js";import{c as r,d as t,t as e,F as n,o as i}from"./app-2b133d7b.js";const c={props:{report_data:Object},data(){return{date_joined:""}},mounted(){this.date_joined=d(this.report_data.student_data.date_joined).format("MMM Y")}},_=t("div",{class:"flex justify-center mb-5"},[t("span",{class:"font-bold text-2xl"},"Monthly Progress Report")],-1),l={class:"divide-y divide-gray-300 border-2 border-gray-600 px-5 py-2 mb-3"},m={class:"px-4 py-2 grid grid-cols-3 gap-4 items-center"},p=t("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Student's Name:",-1),g={class:"mt-1 text-sm leading-6 text-gray-700 col-span-2"},x={class:"px-4 py-2 grid grid-cols-3 gap-4 items-center"},h=t("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Date Joined:",-1),u={class:"mt-1 text-sm leading-6 text-gray-700 col-span-2"},y={class:"px-4 py-2 grid grid-cols-3 gap-4 items-center"},f=t("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Class Type / level:",-1),v={class:"mt-1 text-sm leading-6 text-gray-700 col-span-2"};function b(j,M,s,k,a,B){return i(),r(n,null,[_,t("dl",l,[t("div",m,[p,t("dd",g,e(s.report_data.student_data.student_name),1)]),t("div",x,[h,t("dd",u,e(a.date_joined),1)]),t("div",y,[f,t("dd",v,e(s.report_data.student_data.programme_name)+" / Level "+e(s.report_data.student_data.programme_level),1)])])],64)}const S=o(c,[["render",b]]);export{S as default};
