import{y as _,x as r,u,Q as m,F as g,t as f,z as s,G as c,A as d,bH as n,W as i,q as l}from"./@vue-d42dd214.js";import{B as v}from"./Authenticated-e54ea1c2.js";import{B as a}from"./Button-73a05440.js";import{L as x,H as y}from"./@inertiajs-dde9cc4c.js";import{b as p}from"./@vueform-cd27a95b.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-d95f58a2.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-9e9c0f86.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./index-a78bcd26.js";import"./DialogDescription-befd605e.js";import"./lucide-vue-next-f56ff345.js";const w={class:"md:grid md:grid-cols-2"},h={class:"md:mt-0 md:col-span-2"},k={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},V={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},B={class:"sm:row-span-3"},M={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},S={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},j={class:"mb-4"},U={class:"mt-1 flex rounded-md shadow-sm"},z={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},O={class:"mb-4"},T={class:"mt-1 flex rounded-md shadow-sm"},$={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},A={class:"mb-4"},C={class:"mt-1 flex rounded-md shadow-sm"},H={class:"flex items-center justify-between"},L={class:"flex space-x-2"},N={class:"flex space-x-2"},E={components:{Toggle:p,Link:x},props:{sub_menus:Object,url_redirect:String},data(){return{form:{url_redirect:this.url_redirect,menu_id:this.sub_menus.id,menu_sub_label:this.sub_menus.menu_sub_label,menu_sub_route:this.sub_menus.menu_sub_route,menu_sub_status:this.sub_menus.menu_sub_status,menu_sub_permission_name:this.sub_menus.permission_name}}},methods:{submit(){this.$inertia.post(route("menus.update_sub_menu"),this.form)}}},Ts=Object.assign(E,{__name:"EditSubMenu",setup(b){return(o,e)=>(f(),_(g,null,[r(u(y),{title:"Menus"}),r(v,null,{header:m(()=>e[6]||(e[6]=[])),default:m(()=>[s("div",w,[s("div",h,[s("form",{onSubmit:e[5]||(e[5]=c((...t)=>o.submit&&o.submit(...t),["prevent"]))},[d(s("input",{type:"hidden","onUpdate:modelValue":e[0]||(e[0]=t=>o.menu_id=t)},null,512),[[n,o.menu_id]]),s("div",k,[s("div",V,[s("div",B,[s("div",M,[e[13]||(e[13]=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Sub Menu Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),s("div",S,[s("div",j,[e[7]||(e[7]=s("label",{for:"menu_sub_label",class:"block text-sm font-bold text-gray-700"},[i(" Sub Menu label "),s("span",{class:"text-red-500"},"*")],-1)),s("div",U,[d(s("input",{type:"text",name:"menu_sub_label",id:"menu_sub_label",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.menu_sub_label?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":e[1]||(e[1]=t=>o.form.menu_sub_label=t),autocomplete:"off"},null,2),[[n,o.form.menu_sub_label]])])])]),s("div",z,[s("div",O,[e[8]||(e[8]=s("label",{for:"menu_sub_route",class:"block text-sm font-bold text-gray-700"},[i(" Route "),s("span",{class:"text-red-500"},"*")],-1)),s("div",T,[d(s("input",{type:"text",name:"menu_sub_route",id:"menu_sub_route",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.menu_sub_route?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":e[2]||(e[2]=t=>o.form.menu_sub_route=t),autocomplete:"off"},null,2),[[n,o.form.menu_sub_route]])])])]),s("div",$,[s("div",A,[e[9]||(e[9]=s("label",{for:"menu_sub_permission_name",class:"block text-sm font-bold text-gray-700"},[i(" Permission "),s("span",{class:"text-red-500"},"*")],-1)),s("div",C,[d(s("input",{type:"text",name:"menu_sub_permission_name",id:"menu_sub_permission_name",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.menu_sub_permission_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":e[3]||(e[3]=t=>o.form.menu_sub_permission_name=t),autocomplete:"off"},null,2),[[n,o.form.menu_sub_permission_name]])])])]),e[14]||(e[14]=s("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1)),s("div",H,[s("div",L,[e[10]||(e[10]=s("label",{for:"",class:"block font-bold text-gray-700"},"Active",-1)),r(u(p),{modelValue:o.form.menu_sub_status,"onUpdate:modelValue":e[4]||(e[4]=t=>o.form.menu_sub_status=t),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),s("div",N,[r(a,{buttonType:"gray",url:b.url_redirect},{default:m(()=>e[11]||(e[11]=[i("Cancel")])),_:1},8,["url"]),r(a,{type:"submit",disabled:o.form.processing},{default:m(()=>e[12]||(e[12]=[i("Save")])),_:1},8,["disabled"])])])])])])])],32)])])]),_:1})],64))}});export{Ts as default};
