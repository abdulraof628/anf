import{o as e,c as o,d as s,t,u as d}from"./app-f1d7210f.js";import"./toggle-171c3558.js";import{h as a}from"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";const i={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},m=s("div",{class:"mb-5"},[s("h1",{class:"font-bold text-indigo-800"},"Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),n={class:"divide-y divide-gray-100"},r={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},c=s("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Child's Name:",-1),l={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},p={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},_=s("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Date Joined",-1),g={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},h={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},x=s("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Class Type / Level",-1),f={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},B={__name:"StudentInformation",setup(u){return(y,v)=>(e(),o("div",i,[m,s("dl",n,[s("div",r,[c,s("dd",l,t(this.$page.props.student_info.name),1)]),s("div",p,[_,s("dd",g,t(d(a)(this.$page.props.student_info.joined_date).format("DD MMM Y")),1)]),s("div",h,[x,s("dd",f,t(this.$page.props.student_info.programme+" / Level "+this.$page.props.student_info.level),1)])])]))}};export{B as default};