import{y as m,x as e,u as c,Q as r,F as a,t as n,z as s,G as _,W as d,A as u,bH as b,q as f,J as x,K as v}from"./@vue-66b8c761.js";import{B as y}from"./Authenticated-11e054d5.js";import{B as l}from"./Button-b1a6bf14.js";import{L as h,H as w}from"./@inertiajs-4f2e6820.js";import{b as k}from"./@vueform-4cba997d.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-98eea8e8.js";import"./axios-1779699b.js";import"./pusher-js-cb9cdec3.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";import"./lucide-vue-next-bc441494.js";const S={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},C={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},P={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},T={class:"sm:row-span-3"},V={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},$={class:"mb-4"},z={class:"mt-1 flex rounded-md shadow-sm"},A={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},L={class:"sm:row-span-3"},N={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},j={class:"flex items-end justify-between space-x-2"},D={class:"flex-1 mb-4"},H={class:"mt-1 flex rounded-md shadow-sm"},F={class:"flex flex-none mb-4"},I={class:"overflow-x-auto relative"},M={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},U={class:"bg-white border-b"},q={scope:"row",class:"py-2 px-6 font-medium text-gray-900 whitespace-nowrap"},E={class:"py-2 px-6 text-center"},G={key:1,class:"bg-white border-b text-center"},J={class:"flex items-center justify-end space-x-2"},K={class:"flex space-x-2"},O={components:{Link:h,Toggle:k},data(){return{sub_permission:"",form:{permission:"",sub_permission:[]}}},methods:{submit(){this.$inertia.post(route("permissions.store"),this.form)},addSub(){this.sub_permission&&(this.form.sub_permission.push(this.sub_permission),this.sub_permission="")},deleteSub(p){this.form.sub_permission.splice(p,1)}}},Is=Object.assign(O,{__name:"Create",setup(p){return(t,o)=>(n(),m(a,null,[e(c(w),{title:"Permissions"}),e(y,null,{header:r(()=>o[4]||(o[4]=[])),default:r(()=>[s("div",S,[s("div",B,[s("form",{onSubmit:o[3]||(o[3]=_((...i)=>t.submit&&t.submit(...i),["prevent"]))},[s("div",C,[s("div",P,[s("div",T,[o[6]||(o[6]=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Permission Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),s("div",V,[s("div",$,[o[5]||(o[5]=s("label",{for:"permission",class:"block text-sm text-gray-700 font-bold"},[d("Permission"),s("span",{class:"text-red-500"},"*")],-1)),s("div",z,[u(s("input",{type:"text",name:"permission",id:"permission",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=i=>t.form.permission=i),autocomplete:"off"},null,2),[[b,t.form.permission]])])])])])]),s("div",A,[s("div",L,[o[13]||(o[13]=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Sub Permission Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),s("div",N,[s("div",j,[s("div",D,[s("div",H,[u(s("input",{type:"text",name:"sub_permission",id:"sub_permission",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.sub_permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=i=>t.sub_permission=i),autocomplete:"off",placeholder:"e.g. view_details_access"},null,2),[[b,t.sub_permission]])])]),s("div",F,[e(l,{buttonType:"info",class:"py-2.5 px-4",onClick:o[2]||(o[2]=i=>t.addSub())},{default:r(()=>o[7]||(o[7]=[d("Add")])),_:1})])]),s("div",I,[s("table",M,[o[10]||(o[10]=s("thead",{class:"text-xs text-gray-700 uppercase bg-indigo-200"},[s("tr",null,[s("th",{scope:"col",class:"py-2 px-6"}," Sub Permission "),s("th",{scope:"col",class:"py-2 px-6 text-center"}," Action ")])],-1)),s("tbody",null,[!t.form.sub_permission.length<1?(n(!0),m(a,{key:0},x(t.form.sub_permission,(i,g)=>(n(),m("tr",U,[s("th",q,v(i),1),s("td",E,[e(l,{buttonType:"danger",onClick:Q=>t.deleteSub(g)},{default:r(()=>o[8]||(o[8]=[d("Delete")])),_:2},1032,["onClick"])])]))),256)):(n(),m("tr",G,o[9]||(o[9]=[s("td",{colspan:"3",class:"py-3"},"No Sub Permissions.",-1)])))])])])]),o[14]||(o[14]=s("div",{class:"my-5 border-b border-dashed border-indigo-900"},null,-1)),s("div",J,[s("div",K,[e(l,{buttonType:"gray",url:t.route("permissions")},{default:r(()=>o[11]||(o[11]=[d("Cancel")])),_:1},8,["url"]),e(l,{type:"submit"},{default:r(()=>o[12]||(o[12]=[d("Save")])),_:1})])])])])])],32)])])]),_:1})],64))}});export{Is as default};
