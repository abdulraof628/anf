import{B as A}from"./Authenticated-8568d8e0.js";import{H as w,L as B}from"./@inertiajs-dde9cc4c.js";import{_ as f}from"./Card-6da73bae.js";import{_ as j,a as L,b as _,c,d as P,e as m}from"./TableRow-c597a3f8.js";import{_ as S}from"./DeleteConfirmation-72e586a6.js";import{y as k,x as r,u as s,Q as t,F as C,be as v,t as d,z as n,W as i,v as u,C as g,J as D,K as b}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f7a369e6.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-f2587495.js";import"./groq-sdk-5d132fed.js";import"./lucide-vue-next-81b3e39b.js";const E={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},F={class:"flex justify-between"},z={class:"flex justify-center space-x-2"},H={class:"grid grid-cols-1 gap-4"},I={class:"flex justify-end"},R={class:"grid grid-cols-1 gap-4"},U={class:"flex justify-end"},J={components:{Head:w,Link:B},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",objective_id:this.$page.props.objective_id,activity_procedure_name:""},errors:{activity_procedure_name:!1}}},methods:{create(){this.form.activity_procedure_name="",this.show_create=!0,this.show_edit=!1},edit(p,o){this.form.id=p,this.form.activity_procedure_name=o,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.activity_procedure_name){this.errors.activity_procedure_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.activities_procedures.store"),this.form,{preserveState:!1})},update(){if(!this.form.activity_procedure_name){this.errors.activity_procedure_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.activities_procedures.update"),this.form,{preserveState:!1})},destroy(p){this.confirmation.route_name="progress_report.settings.coding_robotics.activities_procedures.destroy",this.confirmation.id=p,this.confirmation.is_open=!0}}},ze=Object.assign(J,{__name:"ActivitiesProcedures",setup(p){return(o,e)=>{const l=v("Button"),y=v("Label"),$=v("Input");return d(),k(C,null,[r(s(w),{title:"Progress Report"}),r(A,null,{header:t(()=>e[4]||(e[4]=[])),default:t(()=>[n("div",E,[r(f,null,{title:t(()=>[n("div",F,[r(l,{onClick:e[0]||(e[0]=a=>o.$inertia.get(o.route("progress_report.settings.coding_robotics.objectives",{level_id:o.$page.props.level_id,lesson_id:o.$page.props.lesson_id,topic_id:o.$page.props.topic_id})))},{default:t(()=>e[5]||(e[5]=[i("Back")])),_:1}),r(l,{onClick:o.create},{default:t(()=>e[6]||(e[6]=[i("New Activity & Procedure")])),_:1},8,["onClick"])])]),content:t(()=>[r(s(j),null,{default:t(()=>[r(s(L),{class:"bg-gray-100"},{default:t(()=>[r(s(_),null,{default:t(()=>[r(s(c),null,{default:t(()=>e[7]||(e[7]=[i("#")])),_:1}),r(s(c),null,{default:t(()=>e[8]||(e[8]=[i("Name")])),_:1}),r(s(c),{class:"text-center"},{default:t(()=>e[9]||(e[9]=[i("Action")])),_:1})]),_:1})]),_:1}),r(s(P),null,{default:t(()=>[o.$page.props.activities_procedures.length?g("",!0):(d(),u(s(_),{key:0},{default:t(()=>[r(s(m),{class:"text-center",colspan:"10"},{default:t(()=>e[10]||(e[10]=[n("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(d(!0),k(C,null,D(o.$page.props.activities_procedures,(a,N)=>(d(),u(s(_),null,{default:t(()=>[r(s(m),null,{default:t(()=>[i(b(N+1),1)]),_:2},1024),r(s(m),null,{default:t(()=>[i(b(a.name),1)]),_:2},1024),r(s(m),{class:"text-center"},{default:t(()=>[n("div",z,[r(l,{variant:"outline",onClick:V=>o.edit(a.id,a.name)},{default:t(()=>e[11]||(e[11]=[i("Edit")])),_:2},1032,["onClick"]),r(l,{variant:"destructive",onClick:V=>o.destroy(a.id)},{default:t(()=>e[12]||(e[12]=[i("Delete")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),o.show_create?(d(),u(f,{key:0},{title:t(()=>e[13]||(e[13]=[i("Add Activity & Procedure")])),content:t(()=>[n("div",H,[n("div",null,[r(y,null,{default:t(()=>e[14]||(e[14]=[i("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),r($,{type:"text",error:o.errors.activity_procedure_name,modelValue:o.form.activity_procedure_name,"onUpdate:modelValue":e[1]||(e[1]=a=>o.form.activity_procedure_name=a)},null,8,["error","modelValue"])])])]),footer:t(()=>[n("div",I,[r(l,{onClick:o.store},{default:t(()=>e[15]||(e[15]=[i("Save")])),_:1},8,["onClick"])])]),_:1})):g("",!0),o.show_edit?(d(),u(f,{key:1,class:"flex flex-col h-auto"},{title:t(()=>e[16]||(e[16]=[i("Edit Activity & Procedure")])),content:t(()=>[n("div",R,[n("div",null,[r(y,null,{default:t(()=>e[17]||(e[17]=[i("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),r($,{type:"text",error:o.errors.activity_procedure_name,modelValue:o.form.activity_procedure_name,"onUpdate:modelValue":e[2]||(e[2]=a=>o.form.activity_procedure_name=a)},null,8,["error","modelValue"])])])]),footer:t(()=>[n("div",U,[r(l,{onClick:o.update},{default:t(()=>e[18]||(e[18]=[i("Save")])),_:1},8,["onClick"])])]),_:1})):g("",!0)]),r(S,{open:o.confirmation.is_open,onClose:e[3]||(e[3]=a=>o.confirmation.is_open=!1),routeName:o.confirmation.route_name,id:o.confirmation.id},{title:t(()=>e[19]||(e[19]=[i("Delete Activity & Procedure")])),description:t(()=>e[20]||(e[20]=[i("Are you sure want to delete this activity & procedure?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{ze as default};
