import{B as V}from"./Authenticated-bbe12484.js";import{H as C,L as B}from"./@inertiajs-7f289881.js";import{_ as f}from"./Card-20f395ce.js";import{_ as L,a as O,b as _,c as v,d as S,e as d}from"./TableRow-0b515674.js";import{_ as h}from"./DeleteConfirmation-fed87211.js";import{y as $,x as i,u as s,Q as t,F as y,be as b,t as m,z as n,W as r,v as u,C as g,J as A,K as c}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c5b8b27a.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-4a86e6ba.js";import"./DialogDescription-be595773.js";import"./lucide-vue-next-53796c49.js";const D={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},E={class:"flex justify-between"},F={class:"flex justify-center space-x-2"},z={class:"grid grid-cols-1 gap-4"},H={class:"flex justify-end"},I={class:"grid grid-cols-1 gap-4"},R={class:"flex justify-end"},U={components:{Head:C,Link:B},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",lesson_id:this.$page.props.lesson_id,objective_name:""},errors:{objective_name:!1}}},methods:{create(){this.form.objective_name="",this.show_create=!0,this.show_edit=!1},edit(p,o){this.form.id=p,this.form.objective_name=o,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.math.objectives.store"),this.form,{preserveState:!1})},update(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.math.objectives.update"),this.form,{preserveState:!1})},destroy(p){this.confirmation.route_name="progress_report.settings.math.objectives.destroy",this.confirmation.id=p,this.confirmation.is_open=!0}}},ze=Object.assign(U,{__name:"Objectives",setup(p){return(o,e)=>{const l=b("Button"),j=b("Label"),k=b("Input");return m(),$(y,null,[i(s(C),{title:"Progress Report"}),i(V,null,{header:t(()=>e[4]||(e[4]=[])),default:t(()=>[n("div",D,[i(f,null,{title:t(()=>[n("div",E,[i(l,{onClick:e[0]||(e[0]=a=>o.$inertia.get(o.route("progress_report.settings.math.lessons",{level_id:o.$page.props.level_id,term_book_id:o.$page.props.term_book_id,unit_id:o.$page.props.unit_id})))},{default:t(()=>e[5]||(e[5]=[r("Back")])),_:1}),i(l,{onClick:o.create},{default:t(()=>e[6]||(e[6]=[r("New Objective")])),_:1},8,["onClick"])])]),content:t(()=>[i(s(L),null,{default:t(()=>[i(s(O),{class:"bg-gray-100"},{default:t(()=>[i(s(_),null,{default:t(()=>[i(s(v),null,{default:t(()=>e[7]||(e[7]=[r("#")])),_:1}),i(s(v),null,{default:t(()=>e[8]||(e[8]=[r("Name")])),_:1}),i(s(v),{class:"text-center"},{default:t(()=>e[9]||(e[9]=[r("Action")])),_:1})]),_:1})]),_:1}),i(s(S),null,{default:t(()=>[o.$page.props.objectives.length?g("",!0):(m(),u(s(_),{key:0},{default:t(()=>[i(s(d),{class:"text-center",colspan:"10"},{default:t(()=>e[10]||(e[10]=[n("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(m(!0),$(y,null,A(o.$page.props.objectives,(a,w)=>(m(),u(s(_),null,{default:t(()=>[i(s(d),null,{default:t(()=>[r(c(w+1),1)]),_:2},1024),i(s(d),null,{default:t(()=>[r(c(a.name),1)]),_:2},1024),i(s(d),{class:"text-center"},{default:t(()=>[n("div",F,[i(l,{variant:"outline",onClick:N=>o.edit(a.id,a.name)},{default:t(()=>e[11]||(e[11]=[r("Edit")])),_:2},1032,["onClick"]),i(l,{variant:"destructive",onClick:N=>o.destroy(a.id)},{default:t(()=>e[12]||(e[12]=[r("Delete")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),o.show_create?(m(),u(f,{key:0},{title:t(()=>e[13]||(e[13]=[r("Add Objective")])),content:t(()=>[n("div",z,[n("div",null,[i(j,null,{default:t(()=>e[14]||(e[14]=[r("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),i(k,{type:"text",error:o.errors.objective_name,modelValue:o.form.objective_name,"onUpdate:modelValue":e[1]||(e[1]=a=>o.form.objective_name=a)},null,8,["error","modelValue"])])])]),footer:t(()=>[n("div",H,[i(l,{onClick:o.store},{default:t(()=>e[15]||(e[15]=[r("Save")])),_:1},8,["onClick"])])]),_:1})):g("",!0),o.show_edit?(m(),u(f,{key:1,class:"flex flex-col h-auto"},{title:t(()=>e[16]||(e[16]=[r("Edit Objective")])),content:t(()=>[n("div",I,[n("div",null,[i(j,null,{default:t(()=>e[17]||(e[17]=[r("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),i(k,{type:"text",error:o.errors.objective_name,modelValue:o.form.objective_name,"onUpdate:modelValue":e[2]||(e[2]=a=>o.form.objective_name=a)},null,8,["error","modelValue"])])])]),footer:t(()=>[n("div",R,[i(l,{onClick:o.update},{default:t(()=>e[18]||(e[18]=[r("Save")])),_:1},8,["onClick"])])]),_:1})):g("",!0)]),i(h,{open:o.confirmation.is_open,onClose:e[3]||(e[3]=a=>o.confirmation.is_open=!1),routeName:o.confirmation.route_name,id:o.confirmation.id},{title:t(()=>e[19]||(e[19]=[r("Delete Objective")])),description:t(()=>e[20]||(e[20]=[r("Are you sure want to delete this objective?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{ze as default};
