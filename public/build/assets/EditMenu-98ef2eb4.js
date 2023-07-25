import{c as l,b as r,u as _,w as m,F as c,L as p,o as a,H as h,d as e,e as v,f as n,l as d,n as u,g as f,h as y,t as x,j as w,k as i}from"./app-698f1bce.js";import{B as k}from"./Authenticated-e085fb96.js";import{B as b}from"./Button-9c885bf2.js";import{b as g}from"./toggle-3befaa44.js";import"./ApplicationLogo-1ffedc06.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-718b998e.js";import"./default.css_vue_type_style_index_0_src_true_lang-57be4c75.js";const V={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},U={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},M={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},S={class:"sm:row-span-3"},j={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},$=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Menu Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),C={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},L={class:"mb-4"},N=e("label",{for:"menu_label",class:"block text-sm font-bold text-gray-700"},[i(" Label "),e("span",{class:"text-red-500"},"*")],-1),O={class:"mt-1 flex rounded-md shadow-sm"},R={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},T={class:"mb-4"},z=e("label",{for:"menu_section",class:"block text-sm font-bold text-gray-700"}," Section ",-1),A={class:"mt-1 flex rounded-md shadow-sm"},D=["value"],E={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},F={class:"mb-4"},H=e("label",{for:"have_sub_menu",class:"block text-sm font-bold text-gray-700"}," Sub Menu ",-1),I={class:"mt-1 flex rounded-md shadow-sm"},G=e("option",{value:!0},"Yes",-1),P=e("option",{value:!1},"No",-1),Y=[G,P],q={key:0,class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},J={class:"mb-4"},K=e("label",{for:"menu_route",class:"block text-sm font-bold text-gray-700"}," Route ",-1),Q={class:"mt-1 flex rounded-md shadow-sm"},W={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},X={class:"mb-4"},Z=e("label",{for:"menu_permission",class:"block text-sm font-bold text-gray-700"},[i(" Permission "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},se={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},oe={class:"mb-4"},te=e("label",{for:"menu_icon",class:"block text-sm font-bold text-gray-700"},[i(" SVG Icon "),e("span",{class:"text-red-500"},"*")],-1),ne={class:"mt-1 flex rounded-md shadow-sm"},re=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),de={class:"flex items-center justify-between"},ie={class:"flex space-x-2"},le=e("label",{for:"",class:"block font-bold text-gray-700"},"Active",-1),me={class:"flex space-x-2"},ae={components:{Toggle:g,Link:p},props:{menus:Object},data(){return{have_sub_menu:!this.menus.menu_route,menu_route_error:!1,form:{menu_id:this.menus.id,menu_label:this.menus.menu_label,menu_section:this.menus.section_id?this.menus.section_id:this.$page.props.menu_sections[0].id,menu_route:this.menus.menu_route,menu_icon:this.menus.menu_icon,menu_permission:this.menus.permission_name,menu_status:this.menus.menu_status}}},watch:{"form.menu_route":{handler(){this.form.menu_route!=""&&(this.menu_route_error=!1)}}},methods:{submit(){this.have_sub_menu||!this.have_sub_menu&&this.form.menu_route!=""?this.$inertia.post(route("menus.update_menu"),this.form):this.menu_route_error=!0},resetRoute(){this.form.menu_route=""}}},ye=Object.assign(ae,{__name:"EditMenu",setup(ue){return(s,t)=>(a(),l(c,null,[r(_(h),{title:"Menus"}),r(k,null,{header:m(()=>[]),default:m(()=>[e("div",V,[e("div",B,[e("form",{onSubmit:t[9]||(t[9]=v((...o)=>s.submit&&s.submit(...o),["prevent"]))},[n(e("input",{type:"hidden","onUpdate:modelValue":t[0]||(t[0]=o=>s.menu_id=o)},null,512),[[d,s.menu_id]]),e("div",U,[e("div",M,[e("div",S,[e("div",j,[$,e("div",C,[e("div",L,[N,e("div",O,[n(e("input",{type:"text",name:"menu_label",id:"menu_label",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_label?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.menu_label=o),autocomplete:"off"},null,2),[[d,s.form.menu_label]])])])]),e("div",R,[e("div",T,[z,e("div",A,[n(e("select",{class:"border-gray-300 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",name:"",id:"menu_section","onUpdate:modelValue":t[2]||(t[2]=o=>s.form.menu_section=o)},[(a(!0),l(c,null,y(s.$page.props.menu_sections,o=>(a(),l("option",{value:o.id},x(o.name),9,D))),256))],512),[[f,s.form.menu_section]])])])]),e("div",E,[e("div",F,[H,e("div",I,[n(e("select",{class:"border-gray-300 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",name:"",id:"have_sub_menu","onUpdate:modelValue":t[3]||(t[3]=o=>s.have_sub_menu=o),onChange:t[4]||(t[4]=(...o)=>s.resetRoute&&s.resetRoute(...o))},Y,544),[[f,s.have_sub_menu]])])])]),s.have_sub_menu?w("",!0):(a(),l("div",q,[e("div",J,[K,e("div",Q,[n(e("input",{type:"text",name:"menu_route",id:"menu_route",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.menu_route_error?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[5]||(t[5]=o=>s.form.menu_route=o),autocomplete:"off"},null,2),[[d,s.form.menu_route]])])])])),e("div",W,[e("div",X,[Z,e("div",ee,[n(e("input",{type:"text",name:"menu_permission",id:"menu_permission",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[6]||(t[6]=o=>s.form.menu_permission=o),autocomplete:"off"},null,2),[[d,s.form.menu_permission]])])])]),e("div",se,[e("div",oe,[te,e("div",ne,[n(e("textarea",{name:"menu_icon",rows:"5",id:"menu_icon",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_icon?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[7]||(t[7]=o=>s.form.menu_icon=o),autocomplete:"off"},null,2),[[d,s.form.menu_icon]])])])]),re,e("div",de,[e("div",ie,[le,r(_(g),{modelValue:s.form.menu_status,"onUpdate:modelValue":t[8]||(t[8]=o=>s.form.menu_status=o),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",me,[r(b,{buttonType:"gray",route:s.route("menus")},{default:m(()=>[i("Cancel")]),_:1},8,["route"]),r(b,{type:"submit",disabled:s.form.processing},{default:m(()=>[i("Save")]),_:1},8,["disabled"])])])])])])])],32)])])]),_:1})],64))}});export{ye as default};
