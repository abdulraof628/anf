import{o as i,c as l,a as d,u as c,w as a,F as _,L as p,H as h,d as e,l as v,h as r,v as m,n as u,m as f,e as w,t as x,q as y,g as n}from"./app-4d4cbe7d.js";import{B as k}from"./Authenticated-cde3a9ac.js";import{B as g}from"./Button-7893ea7c.js";import{b}from"./vue3-perfect-scrollbar-edf4bd5b.js";import"./ApplicationLogo-7e99a00b.js";import"./NavLink-9d0a350c.js";import"./XIcon-33e2d1a0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./moment-a9aaa855.js";const V={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},M={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},S={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},U={class:"sm:row-span-3"},C={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},$=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Menu Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),j={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},N={class:"mb-4"},z=e("label",{for:"menu_label",class:"block text-sm font-bold text-gray-700"},[n(" label "),e("span",{class:"text-red-500"},"*")],-1),L={class:"mt-1 flex rounded-md shadow-sm"},R={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},T={class:"mb-4"},A=e("label",{for:"menu_section",class:"block text-sm font-bold text-gray-700"}," Section ",-1),O={class:"mt-1 flex rounded-md shadow-sm"},D=["value"],F={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},H={class:"mb-4"},I=e("label",{for:"have_sub_menu",class:"block text-sm font-bold text-gray-700"}," Sub Menu ",-1),q={class:"mt-1 flex rounded-md shadow-sm"},E=e("option",{value:!0},"Yes",-1),G=e("option",{value:!1},"No",-1),P=[E,G],Y={key:0,class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},J={class:"mb-4"},K=e("label",{for:"menu_route",class:"block text-sm font-bold text-gray-700"}," Route ",-1),Q={class:"mt-1 flex rounded-md shadow-sm"},W={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},X={class:"mb-4"},Z=e("label",{for:"menu_permission",class:"block text-sm font-bold text-gray-700"},[n(" Permission "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},se={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},oe={class:"mb-4"},te=e("label",{for:"menu_icon",class:"block text-sm font-bold text-gray-700"},[n(" SVG Icon "),e("span",{class:"text-red-500"},"*")],-1),re={class:"mt-1 flex rounded-md shadow-sm"},de=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),ne={class:"flex items-center justify-between"},ie={class:"flex space-x-2"},le=e("label",{for:"",class:"block font-bold text-gray-700"},"Active",-1),ae={class:"flex space-x-2"},me={components:{Toggle:b,Link:p},data(){return{have_sub_menu:!0,menu_route_error:!1,form:{menu_label:"",menu_route:"",menu_section:this.$page.props.menu_sections[0].id,menu_icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',menu_permission:"",menu_status:!0}}},watch:{"form.menu_route":{handler(){this.form.menu_route!=""&&(this.menu_route_error=!1)}}},methods:{submit(){this.have_sub_menu||!this.have_sub_menu&&this.form.menu_route!=""?this.$inertia.post(route("menus.store_menu"),this.form):this.menu_route_error=!0},resetRoute(){this.form.menu_route=""}}},xe=Object.assign(me,{__name:"AddMenu",setup(ue){return(s,t)=>(i(),l(_,null,[d(c(h),{title:"Menus"}),d(k,null,{header:a(()=>[]),default:a(()=>[e("div",V,[e("div",B,[e("form",{onSubmit:t[8]||(t[8]=v((...o)=>s.submit&&s.submit(...o),["prevent"]))},[e("div",M,[e("div",S,[e("div",U,[e("div",C,[$,e("div",j,[e("div",N,[z,e("div",L,[r(e("input",{type:"text",name:"menu_label",id:"menu_label",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_label?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.menu_label=o),autocomplete:"off"},null,2),[[m,s.form.menu_label]])])])]),e("div",R,[e("div",T,[A,e("div",O,[r(e("select",{class:"border-gray-300 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",name:"",id:"menu_section","onUpdate:modelValue":t[1]||(t[1]=o=>s.form.menu_section=o)},[(i(!0),l(_,null,w(s.$page.props.menu_sections,o=>(i(),l("option",{value:o.id},x(o.name),9,D))),256))],512),[[f,s.form.menu_section]])])])]),e("div",F,[e("div",H,[I,e("div",q,[r(e("select",{class:"border-gray-300 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",name:"",id:"have_sub_menu","onUpdate:modelValue":t[2]||(t[2]=o=>s.have_sub_menu=o),onChange:t[3]||(t[3]=(...o)=>s.resetRoute&&s.resetRoute(...o))},P,544),[[f,s.have_sub_menu]])])])]),s.have_sub_menu?y("",!0):(i(),l("div",Y,[e("div",J,[K,e("div",Q,[r(e("input",{type:"text",name:"menu_route",id:"menu_route",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.menu_route_error?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[4]||(t[4]=o=>s.form.menu_route=o),autocomplete:"off"},null,2),[[m,s.form.menu_route]])])])])),e("div",W,[e("div",X,[Z,e("div",ee,[r(e("input",{type:"text",name:"menu_permission",id:"menu_permission",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[5]||(t[5]=o=>s.form.menu_permission=o),autocomplete:"off"},null,2),[[m,s.form.menu_permission]])])])]),e("div",se,[e("div",oe,[te,e("div",re,[r(e("textarea",{name:"menu_icon",rows:"5",id:"menu_icon",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_icon?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[6]||(t[6]=o=>s.form.menu_icon=o),autocomplete:"off"},null,2),[[m,s.form.menu_icon]])])])]),de,e("div",ne,[e("div",ie,[le,d(c(b),{modelValue:s.form.menu_status,"onUpdate:modelValue":t[7]||(t[7]=o=>s.form.menu_status=o),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",ae,[d(g,{buttonType:"gray",route:s.route("menus")},{default:a(()=>[n("Cancel")]),_:1},8,["route"]),d(g,{type:"submit",disabled:s.form.processing},{default:a(()=>[n("Save")]),_:1},8,["disabled"])])])])])])])],32)])])]),_:1})],64))}});export{xe as default};
