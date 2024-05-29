import i from"./Layout-cb254582.js";import{j as d,o as r,c as n,a as m,w as _,F as c,d as s,t as e}from"./app-495c50e4.js";import"./Authenticated-5ff94400.js";import"./ApplicationLogo-e61264c8.js";import"./Button-e10a5d69.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./NavLink-f436de1b.js";import"./XIcon-556a86ac.js";import"./Toast-ab5100fa.js";/* empty css                                              */import"./vue3-perfect-scrollbar-26ccdd8c.js";import"./moment-a9aaa855.js";import"./PencilIcon-5fb19580.js";import"./SearchIcon-7913b667.js";import"./menu-55fc2f1c.js";import"./keyboard-b92bc090.js";import"./use-resolve-button-type-04c0a07c.js";import"./transition-bf9dfc23.js";const l={class:"flex-col w-full pt-4 px-4 space-y-4"},p={class:"bg-white rounded-lg shadow-xl p-4"},g=s("div",{class:"mx-6 mt-2"},[s("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"User Information"),s("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"User details and related information")],-1),u={class:"mt-5 border-t border-gray-200 mx-6"},y={class:"sm:divide-y sm:divide-gray-200"},h={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},x=s("dt",{class:"text-sm font-medium text-gray-500"},"First Name",-1),f={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},v={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},N=s("dt",{class:"text-sm font-medium text-gray-500"},"Last Name",-1),b={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},w={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},j=s("dt",{class:"text-sm font-medium text-gray-500"},"Phone Number",-1),B={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},C={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},F=s("dt",{class:"text-sm font-medium text-gray-500"},"Address",-1),k={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},q={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},H=s("dt",{class:"text-sm font-medium text-gray-500"},"State",-1),O={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},S={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},U=s("dt",{class:"text-sm font-medium text-gray-500"},"Country",-1),V={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},A={props:{request_data:Object},data(){return{user_info:[]}},mounted(){axios.get(route("users.get_info",this.request_data.user_id)).then(o=>{this.user_info=o.data})}},ts=Object.assign(A,{__name:"Notify",setup(o){return(t,D)=>{const a=d("Head");return r(),n(c,null,[m(a,{title:"Notifications"}),m(i,null,{default:_(()=>[s("div",l,[s("div",p,[g,s("div",u,[s("dl",y,[s("div",h,[x,s("dd",f,e(t.user_info.user_first_name),1)]),s("div",v,[N,s("dd",b,e(t.user_info.user_last_name),1)]),s("div",w,[j,s("dd",B,e(t.user_info.user_calling_code)+e(t.user_info.user_contact),1)]),s("div",C,[F,s("dd",k,e(t.user_info.user_address),1)]),s("div",q,[H,s("dd",O,e(t.user_info.user_state),1)]),s("div",S,[U,s("dd",V,e(t.user_info.user_country),1)])])])])])]),_:1})],64)}}});export{ts as default};
