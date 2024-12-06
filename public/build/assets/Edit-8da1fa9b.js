import{y as m,x as e,u as c,Q as r,F as a,t as p,z as s,G as _,W as d,A as u,bH as b,q as f,J as h,K as v}from"./@vue-d42dd214.js";import{B as x}from"./Authenticated-bbe12484.js";import{B as n}from"./Button-2c9531b4.js";import{L as y,H as w}from"./@inertiajs-7f289881.js";import{b as k}from"./@vueform-cd27a95b.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c5b8b27a.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-4a86e6ba.js";import"./DialogDescription-be595773.js";import"./lucide-vue-next-53796c49.js";const S={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},$={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},C={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},P={class:"sm:row-span-3"},T={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},V={class:"mb-4"},z={class:"mt-1 flex rounded-md shadow-sm"},A={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},L={class:"sm:row-span-3"},N={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},j={class:"flex items-end justify-between space-x-2"},D={class:"flex-1 mb-4"},E={class:"mt-1 flex rounded-md shadow-sm"},H={class:"flex flex-none mb-4"},F={class:"overflow-x-auto relative"},I={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},M={class:"bg-white border-b"},U={scope:"row",class:"py-2 px-6 font-medium text-gray-900 whitespace-nowrap"},q={class:"py-2 px-6 text-center"},G={key:1,class:"bg-white border-b text-center"},J={class:"flex items-center justify-end space-x-2"},K={class:"flex space-x-2"},O={components:{Link:y,Toggle:k},data(){return{sub_permission:"",form:{permission_id:this.$page.props.permission_id,permission:this.$page.props.permission_info.name,sub_permission:this.$page.props.sub_permissions,add_sub_permission:[],delete_sub_permission:[]}}},methods:{submit(){this.$inertia.post(route("permissions.update"),this.form)},addSub(){this.sub_permission&&(this.form.sub_permission.push({id:"",name:this.sub_permission}),this.form.add_sub_permission.push({id:this.form.permission_id,name:this.sub_permission}),this.sub_permission="")},deleteSub(l,i){i&&this.form.delete_sub_permission.push(i),this.form.add_sub_permission.forEach((o,t)=>{o.name==this.form.sub_permission[l].name&&this.form.add_sub_permission.splice(t,1)}),this.form.sub_permission.splice(l,1)}}},Us=Object.assign(O,{__name:"Edit",setup(l){return(i,o)=>(p(),m(a,null,[e(c(w),{title:"Permissions"}),e(x,null,{header:r(()=>o[4]||(o[4]=[])),default:r(()=>[s("div",S,[s("div",B,[s("form",{onSubmit:o[3]||(o[3]=_((...t)=>i.submit&&i.submit(...t),["prevent"]))},[s("div",$,[s("div",C,[s("div",P,[o[6]||(o[6]=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Permission Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),s("div",T,[s("div",V,[o[5]||(o[5]=s("label",{for:"permission",class:"block text-sm text-gray-700 font-bold"},[d("Permission"),s("span",{class:"text-red-500"},"*")],-1)),s("div",z,[u(s("input",{type:"text",name:"permission",id:"permission",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",i.$page.props.errors.permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=t=>i.form.permission=t),autocomplete:"off"},null,2),[[b,i.form.permission]])])])])])]),s("div",A,[s("div",L,[o[13]||(o[13]=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Sub Permission Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),s("div",N,[s("div",j,[s("div",D,[s("div",E,[u(s("input",{type:"text",name:"sub_permission",id:"sub_permission",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",i.$page.props.errors.sub_permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=t=>i.sub_permission=t),autocomplete:"off",placeholder:"e.g. view_details_access"},null,2),[[b,i.sub_permission]])])]),s("div",H,[e(n,{buttonType:"info",class:"py-2.5 px-4",onClick:o[2]||(o[2]=t=>i.addSub())},{default:r(()=>o[7]||(o[7]=[d("Add")])),_:1})])]),s("div",F,[s("table",I,[o[10]||(o[10]=s("thead",{class:"text-xs text-gray-700 uppercase bg-indigo-200"},[s("tr",null,[s("th",{scope:"col",class:"py-2 px-6"}," Sub Permission "),s("th",{scope:"col",class:"py-2 px-6 text-center"}," Action ")])],-1)),s("tbody",null,[!i.form.sub_permission.length<1?(p(!0),m(a,{key:0},h(i.form.sub_permission,(t,g)=>(p(),m("tr",M,[s("th",U,v(t.name),1),s("td",q,[e(n,{buttonType:"danger",onClick:Q=>i.deleteSub(g,t.id)},{default:r(()=>o[8]||(o[8]=[d("Delete")])),_:2},1032,["onClick"])])]))),256)):(p(),m("tr",G,o[9]||(o[9]=[s("td",{colspan:"3",class:"py-3"},"No Sub Permissions.",-1)])))])])])]),o[14]||(o[14]=s("div",{class:"my-5 border-b border-dashed border-indigo-900"},null,-1)),s("div",J,[s("div",K,[e(n,{buttonType:"gray",url:i.route("permissions")},{default:r(()=>o[11]||(o[11]=[d("Cancel")])),_:1},8,["url"]),e(n,{type:"submit"},{default:r(()=>o[12]||(o[12]=[d("Save")])),_:1})])])])])])],32)])])]),_:1})],64))}});export{Us as default};
