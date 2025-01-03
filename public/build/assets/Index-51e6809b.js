import{B as A}from"./Authenticated-98036166.js";import{H as S,L}from"./@inertiajs-7f289881.js";import{_ as h}from"./Card-a7869428.js";import{P as V}from"./Pagination-4d474b9e.js";import{_ as I}from"./DeleteConfirmation-dd64c485.js";import{_ as T,a as U,b as v,c as l,d as j,e as n}from"./TableRow-75c58101.js";import{h as x}from"./moment-a9aaa855.js";import{_ as z}from"./DialogModal-c830f180.js";import{a as F}from"./@radix-icons-4975f794.js";import{y as $,x as t,u as i,Q as o,F as k,be as u,bf as E,t as _,z as p,A as H,W as r,v as c,C as O,J as P,K as d,q as R}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ece3933f.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-c5f0f1fd.js";import"./DialogDescription-a3c26cdc.js";import"./lucide-vue-next-53796c49.js";const q={class:"relative"},J={class:"flex justify-center space-x-2"},K={class:"p-1 grid grid-cols-1 gap-4"},Q={class:""},W={components:{Head:S,Link:L,Pagination:V},props:{filter:Object},data(){return{open_modal:!1,confirmation:{is_open:!1,route_name:"",id:""},params:{search:this.filter.search?this.filter.search:"",centre_id:this.filter.centre_id?this.filter.centre_id:""},form:{result_id:"",admitted:!1,centre_id:!1,notes:""}}},methods:{viewDetails(m){this.$inertia.get(this.route("diagnostic_test.saved_result.details"),{result_id:m})},updateStatus(m,a,e,g){this.form.result_id=m,this.form.admitted=a==1,this.form.centre_id=e||"",this.form.notes=g,this.open_modal=!0},deleteStatus(m){this.confirmation.route_name="diagnostic_test.delete_result",this.confirmation.id=m,this.confirmation.is_open=!0},saveStatus(){this.$inertia.post(this.route("diagnostic_test.saved_result.save_status"),this.form,{onSuccess:m=>{this.open_modal=!1}})},search(){this.$inertia.get(this.route("diagnostic_test.saved_result"),this.params,{replace:!0,preserveState:!0})}}},Qe=Object.assign(W,{__name:"Index",setup(m){return(a,e)=>{const g=u("Input"),f=u("Button"),w=u("Checkbox"),C=u("Label"),N=u("ComboBox"),y=u("Textarea"),B=E("debounce");return _(),$(k,null,[t(i(S),{title:"Diagnostic Test"}),t(A,null,{header:o(()=>e[7]||(e[7]=[])),default:o(()=>[p("div",q,[t(i(F),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),H(t(g,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:a.params.search,"onUpdate:modelValue":e[0]||(e[0]=s=>a.params.search=s)},null,8,["modelValue"]),[[B,a.search,"800ms"]])]),t(h,null,{content:o(()=>[t(i(T),null,{default:o(()=>[t(i(U),{class:"bg-gray-100"},{default:o(()=>[t(i(v),null,{default:o(()=>[t(i(l),null,{default:o(()=>e[8]||(e[8]=[r("#")])),_:1}),t(i(l),null,{default:o(()=>e[9]||(e[9]=[r("Name")])),_:1}),t(i(l),null,{default:o(()=>e[10]||(e[10]=[r("Email")])),_:1}),t(i(l),null,{default:o(()=>e[11]||(e[11]=[r("Contact Number")])),_:1}),t(i(l),null,{default:o(()=>e[12]||(e[12]=[r("Centre")])),_:1}),t(i(l),null,{default:o(()=>e[13]||(e[13]=[r("Admitted")])),_:1}),t(i(l),null,{default:o(()=>e[14]||(e[14]=[r("Notes")])),_:1}),t(i(l),{class:"text-center"},{default:o(()=>e[15]||(e[15]=[r("Action")])),_:1})]),_:1})]),_:1}),t(i(j),null,{default:o(()=>[a.$page.props.saved_results.data.length?O("",!0):(_(),c(i(v),{key:0},{default:o(()=>[t(i(n),{class:"text-center",colspan:"10"},{default:o(()=>e[16]||(e[16]=[p("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(_(!0),$(k,null,P(a.$page.props.saved_results.data,(s,D)=>(_(),c(i(v),null,{default:o(()=>[t(i(n),null,{default:o(()=>[r(d(a.$page.props.saved_results.from+D),1)]),_:2},1024),t(i(n),null,{default:o(()=>[r(d(s.child_id?s.student_name:s.child_name)+" - Age ("+d(s.child_id?i(x)().diff(s.student_dob,"years"):s.child_age)+")",1)]),_:2},1024),t(i(n),null,{default:o(()=>[r(d(s.parent_email),1)]),_:2},1024),t(i(n),null,{default:o(()=>[r(d(s.parent_contact),1)]),_:2},1024),t(i(n),null,{default:o(()=>[r(d(s.centre_name),1)]),_:2},1024),t(i(n),null,{default:o(()=>[p("span",{class:R(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.admitted==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},d(s.admitted==1?"Yes":"No"),3)]),_:2},1024),t(i(n),null,{default:o(()=>[r(d(s.notes),1)]),_:2},1024),t(i(n),{class:"text-center space-x-2"},{default:o(()=>[p("div",J,[t(f,{variant:"outline",onClick:b=>a.updateStatus(s.id,s.admitted,s.centre_id,s.notes)},{default:o(()=>e[17]||(e[17]=[r("Status")])),_:2},1032,["onClick"]),t(f,{onClick:b=>a.viewDetails(s.id)},{default:o(()=>e[18]||(e[18]=[r("View Details")])),_:2},1032,["onClick"]),t(f,{variant:"destructive",onClick:b=>a.deleteStatus(s.id)},{default:o(()=>e[19]||(e[19]=[r("Delete")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(V,{page_data:a.$page.props.saved_results,params:a.params},null,8,["page_data","params"]),t(I,{open:a.confirmation.is_open,onClose:e[1]||(e[1]=s=>a.confirmation.is_open=!1),routeName:a.confirmation.route_name,id:a.confirmation.id},{title:o(()=>e[20]||(e[20]=[r("Delete Result")])),description:o(()=>e[21]||(e[21]=[r("Are you sure want to delete this result?")])),_:1},8,["open","routeName","id"]),t(z,{open:a.open_modal,"onUpdate:open":e[6]||(e[6]=s=>a.open_modal=s)},{title:o(()=>e[22]||(e[22]=[r("Status")])),content:o(()=>[p("div",K,[t(C,{for:"admitted",class:"flex items-center space-x-1 cursor-pointer"},{default:o(()=>[t(w,{class:"mr-1",id:"admitted",value:!0,checked:a.form.admitted,onClick:e[2]||(e[2]=s=>a.form.admitted=!a.form.admitted)},null,8,["checked"]),e[23]||(e[23]=r(" Admitted "))]),_:1}),p("div",Q,[t(C,null,{default:o(()=>e[24]||(e[24]=[r("Centre"),p("span",{class:"text-red-500"},"*",-1)])),_:1}),t(N,{canClear:"",items:a.$page.props.allowed_centres,"label-property":"label","value-property":"ID",error:a.$page.props.errors.centre_id,modelValue:a.form.centre_id,"onUpdate:modelValue":e[3]||(e[3]=s=>a.form.centre_id=s),"select-placeholder":"Select Centre","search-placeholder":"Search centre..."},null,8,["items","error","modelValue"])]),t(y,{rows:"3",placeholder:"Notes...",modelValue:a.form.notes,"onUpdate:modelValue":e[4]||(e[4]=s=>a.form.notes=s)},null,8,["modelValue"])])]),footer:o(()=>[t(f,{variant:"outline",onClick:e[5]||(e[5]=s=>a.open_modal=!1)},{default:o(()=>e[25]||(e[25]=[r("Cancel")])),_:1}),t(f,{onClick:a.saveStatus},{default:o(()=>e[26]||(e[26]=[r("Save")])),_:1},8,["onClick"])]),_:1},8,["open"])]),_:1})],64)}}});export{Qe as default};