import{B as q}from"./Authenticated-8568d8e0.js";import{H as w,L as D}from"./@inertiajs-dde9cc4c.js";import{_ as y}from"./Card-6da73bae.js";import{V as N}from"./vue-draggable-next-67773303.js";import{_ as k}from"./DeleteConfirmation-72e586a6.js";import{C as $}from"./lucide-vue-next-81b3e39b.js";import{y as d,x as i,u as f,Q as o,F as _,be as c,t as a,z as r,W as n,J as C,K as v,v as B}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f7a369e6.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-f2587495.js";import"./groq-sdk-5d132fed.js";const V={class:"flex justify-between items-center"},L={key:0,class:"flex flex-col"},h={class:"divide-y"},A={class:"flex space-x-1"},E={key:1,class:"flex text-center"},S={class:"flex justify-between items-center"},j={class:"overflow-hidden"},H={class:"grid grid-cols-12 items-center"},Q=["onClick"],z=["onClick"],F={key:1,class:"flex text-center"},M={components:{Head:w,Link:D,draggable:N},data(){return{category_confirmation:{is_open:!1,route_name:"",id:""},question_confirmation:{is_open:!1,route_name:"",id:""}}},methods:{dtEdit(l,e){this.$inertia.get(route("dt.settings.details.edit"),{test_id:l,dt_id:e},{preserveScroll:!0})},dtDelete(l){this.question_confirmation.route_name="dt.settings.details.destroy",this.question_confirmation.id=l,this.question_confirmation.is_open=!0},updateSorting(){this.$inertia.post(route("dt.settings.details.sort"),{sorted_list:this.$page.props.diagnostic_test_list},{preserveScroll:!0})},categoriesEdit(l){this.$inertia.get(route("dt.settings.categories.edit"),{category_id:l},{preserveScroll:!0})},categoriesDelete(l){this.category_confirmation.route_name="dt.settings.categories.destroy",this.category_confirmation.id=l,this.category_confirmation.is_open=!0}}},jt=Object.assign(M,{__name:"Index",setup(l){return(e,t)=>{const p=c("Button"),m=c("Label"),b=c("draggable");return a(),d(_,null,[i(f(w),{title:"Diagnostic Test"}),i(q,null,{header:o(()=>t[5]||(t[5]=[])),default:o(()=>[i(y,null,{title:o(()=>[r("div",V,[t[7]||(t[7]=n(" Categories ")),i(p,{onClick:t[0]||(t[0]=s=>e.$inertia.get(e.route("dt.settings.categories.create",{dt_id:e.$page.props.diagnostic_test_id})))},{default:o(()=>[i(f($),{class:"h-4 w-4"}),t[6]||(t[6]=r("span",{class:"ml-1 hidden sm:block"},"Add",-1))]),_:1})])]),content:o(()=>[e.$page.props.diagnostic_test_categories.length>0?(a(),d("div",L,[r("ul",h,[(a(!0),d(_,null,C(e.$page.props.diagnostic_test_categories,(s,u)=>(a(),d("li",{class:"flex justify-between py-1 items-center",key:s.id},[i(m,null,{default:o(()=>[n(v(u+1)+". "+v(s.name),1)]),_:2},1024),r("div",A,[i(p,{variant:"outline",onClick:g=>e.categoriesEdit(s.id)},{default:o(()=>t[8]||(t[8]=[n("Edit")])),_:2},1032,["onClick"]),i(p,{variant:"destructive",onClick:g=>e.categoriesDelete(s.id)},{default:o(()=>t[9]||(t[9]=[n("Delete")])),_:2},1032,["onClick"])])]))),128))])])):(a(),d("div",E,[i(m,null,{default:o(()=>t[10]||(t[10]=[n("No categories found")])),_:1})]))]),_:1}),i(y,null,{title:o(()=>[r("div",S,[t[12]||(t[12]=n(" Questions ")),i(p,{onClick:t[1]||(t[1]=s=>e.$inertia.get(e.route("dt.settings.details.create",{dt_id:e.$page.props.diagnostic_test_id})))},{default:o(()=>[i(f($),{class:"h-4 w-4"}),t[11]||(t[11]=r("span",{class:"ml-1 hidden sm:block"},"Add",-1))]),_:1})])]),content:o(()=>[r("div",j,[e.$page.props.diagnostic_test_list.length>0?(a(),B(b,{key:0,class:"w-full",modelValue:e.$page.props.diagnostic_test_list,"onUpdate:modelValue":t[2]||(t[2]=s=>e.$page.props.diagnostic_test_list=s),onChange:e.updateSorting},{default:o(()=>[(a(!0),d(_,null,C(e.$page.props.diagnostic_test_list,(s,u)=>(a(),d("div",{class:"mb-1",key:u},[r("div",H,[r("div",{class:"col-span-11 cursor-pointer flex w-full space-x-2 items-center bg-slate-300 text-slate-900 hover:bg-slate-200 px-4 py-1.5 text-left rounded",onClick:g=>e.dtEdit(s.id,s.dt_id)},[i(m,{class:"cursor-pointer truncate py-0.5"},{default:o(()=>[n(v(u+1+". "+s.question),1)]),_:2},1024)],8,Q),r("div",{class:"col-span-1 flex pl-0.5",onClick:g=>e.dtDelete(s.id)},t[13]||(t[13]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"cursor-pointer h-6 w-6 text-red-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)]),8,z)])]))),128))]),_:1},8,["modelValue","onChange"])):(a(),d("div",F,[i(m,null,{default:o(()=>t[14]||(t[14]=[n("No questions found")])),_:1})]))])]),_:1}),i(k,{open:e.category_confirmation.is_open,onClose:t[3]||(t[3]=s=>e.category_confirmation.is_open=!1),routeName:e.category_confirmation.route_name,id:e.category_confirmation.id},{title:o(()=>t[15]||(t[15]=[n("Delete Category")])),description:o(()=>t[16]||(t[16]=[n("Are you sure want to delete this category?")])),_:1},8,["open","routeName","id"]),i(k,{open:e.question_confirmation.is_open,onClose:t[4]||(t[4]=s=>e.question_confirmation.is_open=!1),routeName:e.question_confirmation.route_name,id:e.question_confirmation.id},{title:o(()=>t[17]||(t[17]=[n("Delete Question")])),description:o(()=>t[18]||(t[18]=[n("Are you sure want to delete this question?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{jt as default};
