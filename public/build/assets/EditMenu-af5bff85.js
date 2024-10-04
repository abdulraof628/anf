import{x as m,v as i,u as p,O as l,F as _,q as a,y as e,E as g,z as r,bx as n,m as u,bw as c,I as h,J as v,B as y,U as d}from"./@vue-39dc9ff3.js";import{B as x}from"./Authenticated-862af612.js";import{B as f}from"./Button-28a4bf21.js";import{L as w,H as k}from"./@inertiajs-2b766590.js";import{b}from"./@vueform-8fb84cf1.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-31ea0dbe.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";import"./lucide-vue-next-7b48dc26.js";const V={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},U={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},M={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},S={class:"sm:row-span-3"},$={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},j=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Menu Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),C={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},L={class:"mb-4"},N=e("label",{for:"menu_label",class:"block text-sm font-bold text-gray-700"},[d(" Label "),e("span",{class:"text-red-500"},"*")],-1),O={class:"mt-1 flex rounded-md shadow-sm"},z={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},R={class:"mb-4"},T=e("label",{for:"menu_section",class:"block text-sm font-bold text-gray-700"}," Section ",-1),E={class:"mt-1 flex rounded-md shadow-sm"},I=["value"],A={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},D={class:"mb-4"},F=e("label",{for:"have_sub_menu",class:"block text-sm font-bold text-gray-700"}," Sub Menu ",-1),H={class:"mt-1 flex rounded-md shadow-sm"},q=e("option",{value:!0},"Yes",-1),G=e("option",{value:!1},"No",-1),J=[q,G],P={key:0,class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},K=e("label",{for:"menu_route",class:"block text-sm font-bold text-gray-700"}," Route ",-1),Q={class:"mt-1 flex rounded-md shadow-sm"},W={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},X={class:"mb-4"},Z=e("label",{for:"menu_permission",class:"block text-sm font-bold text-gray-700"},[d(" Permission "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},oe={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},se={class:"mb-4"},te=e("label",{for:"menu_icon",class:"block text-sm font-bold text-gray-700"},[d(" SVG Icon "),e("span",{class:"text-red-500"},"*")],-1),re={class:"mt-1 flex rounded-md shadow-sm"},ie=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),ne={class:"flex items-center justify-between"},de={class:"flex space-x-2"},me=e("label",{for:"",class:"block font-bold text-gray-700"},"Active",-1),le={class:"flex space-x-2"},ae={components:{Toggle:b,Link:w},props:{menus:Object},data(){return{have_sub_menu:!this.menus.menu_route,menu_route_error:!1,form:{menu_id:this.menus.id,menu_label:this.menus.menu_label,menu_section:this.menus.section_id?this.menus.section_id:this.$page.props.menu_sections[0].id,menu_route:this.menus.menu_route,menu_icon:this.menus.menu_icon,menu_permission:this.menus.permission_name,menu_status:this.menus.menu_status}}},watch:{"form.menu_route":{handler(){this.form.menu_route!=""&&(this.menu_route_error=!1)}}},methods:{submit(){this.have_sub_menu||!this.have_sub_menu&&this.form.menu_route!=""?this.$inertia.post(route("menus.update_menu"),this.form):this.menu_route_error=!0},resetRoute(){this.form.menu_route=""}}},so=Object.assign(ae,{__name:"EditMenu",setup(ue){return(o,t)=>(a(),m(_,null,[i(p(k),{title:"Menus"}),i(x,null,{header:l(()=>[]),default:l(()=>[e("div",V,[e("div",B,[e("form",{onSubmit:t[9]||(t[9]=g((...s)=>o.submit&&o.submit(...s),["prevent"]))},[r(e("input",{type:"hidden","onUpdate:modelValue":t[0]||(t[0]=s=>o.menu_id=s)},null,512),[[n,o.menu_id]]),e("div",U,[e("div",M,[e("div",S,[e("div",$,[j,e("div",C,[e("div",L,[N,e("div",O,[r(e("input",{type:"text",name:"menu_label",id:"menu_label",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.menu_label?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.menu_label=s),autocomplete:"off"},null,2),[[n,o.form.menu_label]])])])]),e("div",z,[e("div",R,[T,e("div",E,[r(e("select",{class:"border-gray-300 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",name:"",id:"menu_section","onUpdate:modelValue":t[2]||(t[2]=s=>o.form.menu_section=s)},[(a(!0),m(_,null,h(o.$page.props.menu_sections,s=>(a(),m("option",{value:s.id},v(s.name),9,I))),256))],512),[[c,o.form.menu_section]])])])]),e("div",A,[e("div",D,[F,e("div",H,[r(e("select",{class:"border-gray-300 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",name:"",id:"have_sub_menu","onUpdate:modelValue":t[3]||(t[3]=s=>o.have_sub_menu=s),onChange:t[4]||(t[4]=(...s)=>o.resetRoute&&o.resetRoute(...s))},J,544),[[c,o.have_sub_menu]])])])]),o.have_sub_menu?y("",!0):(a(),m("div",P,[e("div",Y,[K,e("div",Q,[r(e("input",{type:"text",name:"menu_route",id:"menu_route",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.menu_route_error?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[5]||(t[5]=s=>o.form.menu_route=s),autocomplete:"off"},null,2),[[n,o.form.menu_route]])])])])),e("div",W,[e("div",X,[Z,e("div",ee,[r(e("input",{type:"text",name:"menu_permission",id:"menu_permission",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.menu_permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[6]||(t[6]=s=>o.form.menu_permission=s),autocomplete:"off"},null,2),[[n,o.form.menu_permission]])])])]),e("div",oe,[e("div",se,[te,e("div",re,[r(e("textarea",{name:"menu_icon",rows:"5",id:"menu_icon",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.menu_icon?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[7]||(t[7]=s=>o.form.menu_icon=s),autocomplete:"off"},null,2),[[n,o.form.menu_icon]])])])]),ie,e("div",ne,[e("div",de,[me,i(p(b),{modelValue:o.form.menu_status,"onUpdate:modelValue":t[8]||(t[8]=s=>o.form.menu_status=s),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",le,[i(f,{buttonType:"gray",url:o.route("menus")},{default:l(()=>[d("Cancel")]),_:1},8,["url"]),i(f,{type:"submit",disabled:o.form.processing},{default:l(()=>[d("Save")]),_:1},8,["disabled"])])])])])])])],32)])])]),_:1})],64))}});export{so as default};
