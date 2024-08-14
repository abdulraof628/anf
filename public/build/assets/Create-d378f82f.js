import{x as m,v as i,u as f,P as r,F as l,q as n,y as s,B as g,K as c,bv as u,m as b,V as d,C as h,G as v}from"./@vue-64c42e7d.js";import{B as x}from"./Authenticated-6651b23d.js";import{B as p}from"./Button-df73f7a0.js";import{L as y,H as w}from"./@inertiajs-41d03628.js";import{b as k}from"./@vueform-ba82ac10.js";import"./ApplicationLogo-64527dd0.js";import"./radix-vue-2488f6ae.js";import"./@floating-ui-7a9770d8.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-f96983da.js";import"./app-98c3eb01.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./moment-3968d9f3.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./lucide-vue-next-48142e2c.js";const S={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},C={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},P={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},T={class:"sm:row-span-3"},V=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Permission Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),$={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},L={class:"mb-4"},N=s("label",{for:"permission",class:"block text-sm text-gray-700 font-bold"},[d("Permission"),s("span",{class:"text-red-500"},"*")],-1),j={class:"mt-1 flex rounded-md shadow-sm"},z={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},A={class:"sm:row-span-3"},D=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Sub Permission Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),F={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},H={class:"flex items-end justify-between space-x-2"},I={class:"flex-1 mb-4"},M={class:"mt-1 flex rounded-md shadow-sm"},U={class:"flex flex-none mb-4"},q={class:"overflow-x-auto relative"},E={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},G=s("thead",{class:"text-xs text-gray-700 uppercase bg-indigo-200"},[s("tr",null,[s("th",{scope:"col",class:"py-2 px-6"}," Sub Permission "),s("th",{scope:"col",class:"py-2 px-6 text-center"}," Action ")])],-1),K={class:"bg-white border-b"},O={scope:"row",class:"py-2 px-6 font-medium text-gray-900 whitespace-nowrap"},J={class:"py-2 px-6 text-center"},Q={key:1,class:"bg-white border-b text-center"},R=s("td",{colspan:"3",class:"py-3"},"No Sub Permissions.",-1),W=[R],X=s("div",{class:"my-5 border-b border-dashed border-indigo-900"},null,-1),Y={class:"flex items-center justify-end space-x-2"},Z={class:"flex space-x-2"},ss={components:{Link:y,Toggle:k},data(){return{sub_permission:"",form:{permission:"",sub_permission:[]}}},methods:{submit(){this.$inertia.post(route("permissions.store"),this.form)},addSub(){this.sub_permission&&(this.form.sub_permission.push(this.sub_permission),this.sub_permission="")},deleteSub(a){this.form.sub_permission.splice(a,1)}}},Ws=Object.assign(ss,{__name:"Create",setup(a){return(o,t)=>(n(),m(l,null,[i(f(w),{title:"Permissions"}),i(x,null,{header:r(()=>[]),default:r(()=>[s("div",S,[s("div",B,[s("form",{onSubmit:t[3]||(t[3]=g((...e)=>o.submit&&o.submit(...e),["prevent"]))},[s("div",C,[s("div",P,[s("div",T,[V,s("div",$,[s("div",L,[N,s("div",j,[c(s("input",{type:"text",name:"permission",id:"permission",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=e=>o.form.permission=e),autocomplete:"off"},null,2),[[u,o.form.permission]])])])])])]),s("div",z,[s("div",A,[D,s("div",F,[s("div",H,[s("div",I,[s("div",M,[c(s("input",{type:"text",name:"sub_permission",id:"sub_permission",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.sub_permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=e=>o.sub_permission=e),autocomplete:"off",placeholder:"e.g. view_details_access"},null,2),[[u,o.sub_permission]])])]),s("div",U,[i(p,{buttonType:"info",class:"py-2.5 px-4",onClick:t[2]||(t[2]=e=>o.addSub())},{default:r(()=>[d("Add")]),_:1})])]),s("div",q,[s("table",E,[G,s("tbody",null,[!o.form.sub_permission.length<1?(n(!0),m(l,{key:0},h(o.form.sub_permission,(e,_)=>(n(),m("tr",K,[s("th",O,v(e),1),s("td",J,[i(p,{buttonType:"danger",onClick:os=>o.deleteSub(_)},{default:r(()=>[d("Delete")]),_:2},1032,["onClick"])])]))),256)):(n(),m("tr",Q,W))])])])]),X,s("div",Y,[s("div",Z,[i(p,{buttonType:"gray",url:o.route("permissions")},{default:r(()=>[d("Cancel")]),_:1},8,["url"]),i(p,{type:"submit"},{default:r(()=>[d("Save")]),_:1})])])])])])],32)])])]),_:1})],64))}});export{Ws as default};
