import{x as m,v as t,u as f,O as r,F as l,q as n,y as s,E as h,z as c,bx as u,m as _,U as d,I as g,J as v}from"./@vue-39dc9ff3.js";import{B as x}from"./Authenticated-862af612.js";import{B as p}from"./Button-28a4bf21.js";import{L as y,H as w}from"./@inertiajs-2b766590.js";import{b as k}from"./@vueform-8fb84cf1.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-31ea0dbe.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";import"./lucide-vue-next-7b48dc26.js";const S={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},$={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},C={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},P={class:"sm:row-span-3"},T=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Permission Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),V={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},z={class:"mb-4"},E=s("label",{for:"permission",class:"block text-sm text-gray-700 font-bold"},[d("Permission"),s("span",{class:"text-red-500"},"*")],-1),L={class:"mt-1 flex rounded-md shadow-sm"},N={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},j={class:"sm:row-span-3"},A=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Sub Permission Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),D={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},I={class:"flex items-end justify-between space-x-2"},U={class:"flex-1 mb-4"},F={class:"mt-1 flex rounded-md shadow-sm"},H={class:"flex flex-none mb-4"},M={class:"overflow-x-auto relative"},O={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},q=s("thead",{class:"text-xs text-gray-700 uppercase bg-indigo-200"},[s("tr",null,[s("th",{scope:"col",class:"py-2 px-6"}," Sub Permission "),s("th",{scope:"col",class:"py-2 px-6 text-center"}," Action ")])],-1),J={class:"bg-white border-b"},G={scope:"row",class:"py-2 px-6 font-medium text-gray-900 whitespace-nowrap"},K={class:"py-2 px-6 text-center"},Q={key:1,class:"bg-white border-b text-center"},R=s("td",{colspan:"3",class:"py-3"},"No Sub Permissions.",-1),W=[R],X=s("div",{class:"my-5 border-b border-dashed border-indigo-900"},null,-1),Y={class:"flex items-center justify-end space-x-2"},Z={class:"flex space-x-2"},ss={components:{Link:y,Toggle:k},data(){return{sub_permission:"",form:{permission_id:this.$page.props.permission_id,permission:this.$page.props.permission_info.name,sub_permission:this.$page.props.sub_permissions,add_sub_permission:[],delete_sub_permission:[]}}},methods:{submit(){this.$inertia.post(route("permissions.update"),this.form)},addSub(){this.sub_permission&&(this.form.sub_permission.push({id:"",name:this.sub_permission}),this.form.add_sub_permission.push({id:this.form.permission_id,name:this.sub_permission}),this.sub_permission="")},deleteSub(a,o){o&&this.form.delete_sub_permission.push(o),this.form.add_sub_permission.forEach((e,i)=>{e.name==this.form.sub_permission[a].name&&this.form.add_sub_permission.splice(i,1)}),this.form.sub_permission.splice(a,1)}}},Gs=Object.assign(ss,{__name:"Edit",setup(a){return(o,e)=>(n(),m(l,null,[t(f(w),{title:"Permissions"}),t(x,null,{header:r(()=>[]),default:r(()=>[s("div",S,[s("div",B,[s("form",{onSubmit:e[3]||(e[3]=h((...i)=>o.submit&&o.submit(...i),["prevent"]))},[s("div",$,[s("div",C,[s("div",P,[T,s("div",V,[s("div",z,[E,s("div",L,[c(s("input",{type:"text",name:"permission",id:"permission",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":e[0]||(e[0]=i=>o.form.permission=i),autocomplete:"off"},null,2),[[u,o.form.permission]])])])])])]),s("div",N,[s("div",j,[A,s("div",D,[s("div",I,[s("div",U,[s("div",F,[c(s("input",{type:"text",name:"sub_permission",id:"sub_permission",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.sub_permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":e[1]||(e[1]=i=>o.sub_permission=i),autocomplete:"off",placeholder:"e.g. view_details_access"},null,2),[[u,o.sub_permission]])])]),s("div",H,[t(p,{buttonType:"info",class:"py-2.5 px-4",onClick:e[2]||(e[2]=i=>o.addSub())},{default:r(()=>[d("Add")]),_:1})])]),s("div",M,[s("table",O,[q,s("tbody",null,[!o.form.sub_permission.length<1?(n(!0),m(l,{key:0},g(o.form.sub_permission,(i,b)=>(n(),m("tr",J,[s("th",G,v(i.name),1),s("td",K,[t(p,{buttonType:"danger",onClick:os=>o.deleteSub(b,i.id)},{default:r(()=>[d("Delete")]),_:2},1032,["onClick"])])]))),256)):(n(),m("tr",Q,W))])])])]),X,s("div",Y,[s("div",Z,[t(p,{buttonType:"gray",url:o.route("permissions")},{default:r(()=>[d("Cancel")]),_:1},8,["url"]),t(p,{type:"submit"},{default:r(()=>[d("Save")]),_:1})])])])])])],32)])])]),_:1})],64))}});export{Gs as default};
