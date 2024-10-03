import{y as d,x as i,u as p,Q as l,F as f,t as u,z as e,G as c,A as r,bH as m,W as n,q as a,bG as b,J as v,K as h,C as y}from"./@vue-66b8c761.js";import{B as x}from"./Authenticated-11e054d5.js";import{B as g}from"./Button-b1a6bf14.js";import{L as w,H as k}from"./@inertiajs-4f2e6820.js";import{b as _}from"./@vueform-4cba997d.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-98eea8e8.js";import"./axios-1779699b.js";import"./pusher-js-cb9cdec3.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";import"./lucide-vue-next-bc441494.js";const V={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},U={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},M={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},S={class:"sm:row-span-3"},C={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},$={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},j={class:"mb-4"},L={class:"mt-1 flex rounded-md shadow-sm"},N={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},z={class:"mb-4"},O={class:"mt-1 flex rounded-md shadow-sm"},R=["value"],T={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},A={class:"mb-4"},G={class:"mt-1 flex rounded-md shadow-sm"},H={key:0,class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},D={class:"mb-4"},E={class:"mt-1 flex rounded-md shadow-sm"},F={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},I={class:"mb-4"},q={class:"mt-1 flex rounded-md shadow-sm"},J={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},K={class:"mb-4"},P={class:"mt-1 flex rounded-md shadow-sm"},Q={class:"flex items-center justify-between"},W={class:"flex space-x-2"},Y={class:"flex space-x-2"},X={components:{Toggle:_,Link:w},props:{menus:Object},data(){return{have_sub_menu:!this.menus.menu_route,menu_route_error:!1,form:{menu_id:this.menus.id,menu_label:this.menus.menu_label,menu_section:this.menus.section_id?this.menus.section_id:this.$page.props.menu_sections[0].id,menu_route:this.menus.menu_route,menu_icon:this.menus.menu_icon,menu_permission:this.menus.permission_name,menu_status:this.menus.menu_status}}},watch:{"form.menu_route":{handler(){this.form.menu_route!=""&&(this.menu_route_error=!1)}}},methods:{submit(){this.have_sub_menu||!this.have_sub_menu&&this.form.menu_route!=""?this.$inertia.post(route("menus.update_menu"),this.form):this.menu_route_error=!0},resetRoute(){this.form.menu_route=""}}},Ie=Object.assign(X,{__name:"EditMenu",setup(Z){return(s,o)=>(u(),d(f,null,[i(p(k),{title:"Menus"}),i(x,null,{header:l(()=>o[10]||(o[10]=[])),default:l(()=>[e("div",V,[e("div",B,[e("form",{onSubmit:o[9]||(o[9]=c((...t)=>s.submit&&s.submit(...t),["prevent"]))},[r(e("input",{type:"hidden","onUpdate:modelValue":o[0]||(o[0]=t=>s.menu_id=t)},null,512),[[m,s.menu_id]]),e("div",U,[e("div",M,[e("div",S,[e("div",C,[o[21]||(o[21]=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Menu Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),e("div",$,[e("div",j,[o[11]||(o[11]=e("label",{for:"menu_label",class:"block text-sm font-bold text-gray-700"},[n(" Label "),e("span",{class:"text-red-500"},"*")],-1)),e("div",L,[r(e("input",{type:"text",name:"menu_label",id:"menu_label",class:a(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_label?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=t=>s.form.menu_label=t),autocomplete:"off"},null,2),[[m,s.form.menu_label]])])])]),e("div",N,[e("div",z,[o[12]||(o[12]=e("label",{for:"menu_section",class:"block text-sm font-bold text-gray-700"}," Section ",-1)),e("div",O,[r(e("select",{class:"border-gray-300 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",name:"",id:"menu_section","onUpdate:modelValue":o[2]||(o[2]=t=>s.form.menu_section=t)},[(u(!0),d(f,null,v(s.$page.props.menu_sections,t=>(u(),d("option",{value:t.id},h(t.name),9,R))),256))],512),[[b,s.form.menu_section]])])])]),e("div",T,[e("div",A,[o[14]||(o[14]=e("label",{for:"have_sub_menu",class:"block text-sm font-bold text-gray-700"}," Sub Menu ",-1)),e("div",G,[r(e("select",{class:"border-gray-300 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",name:"",id:"have_sub_menu","onUpdate:modelValue":o[3]||(o[3]=t=>s.have_sub_menu=t),onChange:o[4]||(o[4]=(...t)=>s.resetRoute&&s.resetRoute(...t))},o[13]||(o[13]=[e("option",{value:!0},"Yes",-1),e("option",{value:!1},"No",-1)]),544),[[b,s.have_sub_menu]])])])]),s.have_sub_menu?y("",!0):(u(),d("div",H,[e("div",D,[o[15]||(o[15]=e("label",{for:"menu_route",class:"block text-sm font-bold text-gray-700"}," Route ",-1)),e("div",E,[r(e("input",{type:"text",name:"menu_route",id:"menu_route",class:a(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.menu_route_error?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[5]||(o[5]=t=>s.form.menu_route=t),autocomplete:"off"},null,2),[[m,s.form.menu_route]])])])])),e("div",F,[e("div",I,[o[16]||(o[16]=e("label",{for:"menu_permission",class:"block text-sm font-bold text-gray-700"},[n(" Permission "),e("span",{class:"text-red-500"},"*")],-1)),e("div",q,[r(e("input",{type:"text",name:"menu_permission",id:"menu_permission",class:a(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[6]||(o[6]=t=>s.form.menu_permission=t),autocomplete:"off"},null,2),[[m,s.form.menu_permission]])])])]),e("div",J,[e("div",K,[o[17]||(o[17]=e("label",{for:"menu_icon",class:"block text-sm font-bold text-gray-700"},[n(" SVG Icon "),e("span",{class:"text-red-500"},"*")],-1)),e("div",P,[r(e("textarea",{name:"menu_icon",rows:"5",id:"menu_icon",class:a(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_icon?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[7]||(o[7]=t=>s.form.menu_icon=t),autocomplete:"off"},null,2),[[m,s.form.menu_icon]])])])]),o[22]||(o[22]=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1)),e("div",Q,[e("div",W,[o[18]||(o[18]=e("label",{for:"",class:"block font-bold text-gray-700"},"Active",-1)),i(p(_),{modelValue:s.form.menu_status,"onUpdate:modelValue":o[8]||(o[8]=t=>s.form.menu_status=t),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",Y,[i(g,{buttonType:"gray",url:s.route("menus")},{default:l(()=>o[19]||(o[19]=[n("Cancel")])),_:1},8,["url"]),i(g,{type:"submit",disabled:s.form.processing},{default:l(()=>o[20]||(o[20]=[n("Save")])),_:1},8,["disabled"])])])])])])])],32)])])]),_:1})],64))}});export{Ie as default};
