import{h as c,a as r,b as u,w as n,F as g,L as f,o as p,H as h,d as e,f as v,k as i,x as l,n as a,e as d}from"./app-825cb09d.js";import{B as x}from"./Authenticated-36680990.js";import{B as m}from"./Button-5cb0f01e.js";import{b as _}from"./toggle-e4d1351e.js";import"./ApplicationLogo-47fe7a8e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-ba7b10a7.js";const y={class:"md:grid md:grid-cols-2"},w={class:"md:mt-0 md:col-span-2"},k={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},V={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},B={class:"sm:row-span-3"},S={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},M=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Sub Menu Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),j={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},L={class:"mb-4"},T=e("label",{for:"menu_sub_label",class:"block text-sm font-bold text-gray-700"},[d(" Label "),e("span",{class:"text-red-500"},"*")],-1),U={class:"mt-1 flex rounded-md shadow-sm"},$={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},z={class:"mb-4"},A=e("label",{for:"menu_sub_route",class:"block text-sm font-bold text-gray-700"},[d(" Route "),e("span",{class:"text-red-500"},"*")],-1),C={class:"mt-1 flex rounded-md shadow-sm"},N={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},O={class:"mb-4"},F=e("label",{for:"menu_sub_permission_name",class:"block text-sm font-bold text-gray-700"},[d(" Permission "),e("span",{class:"text-red-500"},"*")],-1),H={class:"mt-1 flex rounded-md shadow-sm"},D=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),E={class:"flex items-center justify-between"},I={class:"flex space-x-2"},P=e("label",{for:"",class:"block font-bold text-gray-700"},"Active",-1),R={class:"flex space-x-2"},q={components:{Toggle:_,Link:f},props:{menu_id:String,url_redirect:String},data(){return{form:{url_redirect:this.url_redirect,menu_id:this.menu_id,menu_sub_label:null,menu_sub_route:null,menu_sub_status:!0,menu_sub_permission_name:""}}},methods:{submit(){this.$inertia.post(route("menus.store_sub_menu"),this.form)}}},Z=Object.assign(q,{__name:"AddSubMenu",setup(b){return(s,o)=>(p(),c(g,null,[r(u(h),{title:"Menus"}),r(x,null,{header:n(()=>[]),default:n(()=>[e("div",y,[e("div",w,[e("form",{onSubmit:o[4]||(o[4]=v((...t)=>s.submit&&s.submit(...t),["prevent"]))},[e("div",k,[e("div",V,[e("div",B,[e("div",S,[M,e("div",j,[e("div",L,[T,e("div",U,[i(e("input",{type:"text",name:"menu_sub_label",id:"menu_sub_label",class:a(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_sub_label?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=t=>s.form.menu_sub_label=t),autocomplete:"off"},null,2),[[l,s.form.menu_sub_label]])])])]),e("div",$,[e("div",z,[A,e("div",C,[i(e("input",{type:"text",name:"menu_sub_route",id:"menu_sub_route",class:a(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_sub_route?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=t=>s.form.menu_sub_route=t),autocomplete:"off"},null,2),[[l,s.form.menu_sub_route]])])])]),e("div",N,[e("div",O,[F,e("div",H,[i(e("input",{type:"text",name:"menu_sub_permission_name",id:"menu_sub_permission_name",class:a(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_sub_permission_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.menu_sub_permission_name=t),autocomplete:"off"},null,2),[[l,s.form.menu_sub_permission_name]])])])]),D,e("div",E,[e("div",I,[P,r(u(_),{modelValue:s.form.menu_sub_status,"onUpdate:modelValue":o[3]||(o[3]=t=>s.form.menu_sub_status=t),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",R,[r(m,{buttonType:"gray",route:b.url_redirect},{default:n(()=>[d("Cancel")]),_:1},8,["route"]),r(m,{type:"submit",disabled:s.form.processing},{default:n(()=>[d("Save")]),_:1},8,["disabled"])])])])])])])],32)])])]),_:1})],64))}});export{Z as default};
