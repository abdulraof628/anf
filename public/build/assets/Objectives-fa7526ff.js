import{B as V}from"./Authenticated-11e054d5.js";import{H as C,L as B}from"./@inertiajs-4f2e6820.js";import{_ as f}from"./Card-a2265374.js";import{_ as L,a as O,b as _,c as v,d as S,e as d}from"./TableRow-151d209b.js";import{_ as A}from"./DeleteConfirmation-5b92c13b.js";import{y as $,x as i,u as s,Q as t,F as k,be as b,t as m,z as n,W as r,v as u,C as g,J as D,K as y}from"./@vue-66b8c761.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-98eea8e8.js";import"./axios-1779699b.js";import"./pusher-js-cb9cdec3.js";import"./@vueform-4cba997d.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";import"./lucide-vue-next-bc441494.js";const E={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},F={class:"flex justify-between"},z={class:"flex justify-center space-x-2"},H={class:"grid grid-cols-1 gap-4"},I={class:"flex justify-end"},R={class:"grid grid-cols-1 gap-4"},U={class:"flex justify-end"},J={components:{Head:C,Link:B},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",topic_id:this.$page.props.topic_id,objective_name:""},errors:{objective_name:!1}}},methods:{create(){this.form.objective_name="",this.show_create=!0,this.show_edit=!1},edit(p,o){this.form.id=p,this.form.objective_name=o,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.little_bot.objectives.store"),this.form,{preserveState:!1})},update(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.little_bot.objectives.update"),this.form,{preserveState:!1})},destroy(p){this.confirmation.route_name="progress_report.settings.little_bot.objectives.destroy",this.confirmation.id=p,this.confirmation.is_open=!0}}},Ee=Object.assign(J,{__name:"Objectives",setup(p){return(o,e)=>{const a=b("Button"),j=b("Label"),c=b("Input");return m(),$(k,null,[i(s(C),{title:"Progress Report"}),i(V,null,{header:t(()=>e[4]||(e[4]=[])),default:t(()=>[n("div",E,[i(f,null,{title:t(()=>[n("div",F,[i(a,{onClick:e[0]||(e[0]=l=>o.$inertia.get(o.route("progress_report.settings.coding_robotics.topics",{level_id:o.$page.props.level_id,lesson_id:o.$page.props.lesson_id})))},{default:t(()=>e[5]||(e[5]=[r("Back")])),_:1}),i(a,{onClick:o.create},{default:t(()=>e[6]||(e[6]=[r("New Objective")])),_:1},8,["onClick"])])]),content:t(()=>[i(s(L),null,{default:t(()=>[i(s(O),{class:"bg-gray-100"},{default:t(()=>[i(s(_),null,{default:t(()=>[i(s(v),null,{default:t(()=>e[7]||(e[7]=[r("#")])),_:1}),i(s(v),null,{default:t(()=>e[8]||(e[8]=[r("Name")])),_:1}),i(s(v),{class:"text-center"},{default:t(()=>e[9]||(e[9]=[r("Action")])),_:1})]),_:1})]),_:1}),i(s(S),null,{default:t(()=>[o.$page.props.objectives.length?g("",!0):(m(),u(s(_),{key:0},{default:t(()=>[i(s(d),{class:"text-center",colspan:"10"},{default:t(()=>e[10]||(e[10]=[n("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(m(!0),$(k,null,D(o.$page.props.objectives,(l,w)=>(m(),u(s(_),null,{default:t(()=>[i(s(d),null,{default:t(()=>[r(y(w+1),1)]),_:2},1024),i(s(d),null,{default:t(()=>[r(y(l.name),1)]),_:2},1024),i(s(d),{class:"text-center"},{default:t(()=>[n("div",z,[i(a,{variant:"outline",onClick:N=>o.edit(l.id,l.name)},{default:t(()=>e[11]||(e[11]=[r("Edit")])),_:2},1032,["onClick"]),i(a,{variant:"destructive",onClick:N=>o.destroy(l.id)},{default:t(()=>e[12]||(e[12]=[r("Delete")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),o.show_create?(m(),u(f,{key:0},{title:t(()=>e[13]||(e[13]=[r("Add Objective")])),content:t(()=>[n("div",H,[n("div",null,[i(j,null,{default:t(()=>e[14]||(e[14]=[r("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),i(c,{type:"text",error:o.errors.objective_name,modelValue:o.form.objective_name,"onUpdate:modelValue":e[1]||(e[1]=l=>o.form.objective_name=l)},null,8,["error","modelValue"])])])]),footer:t(()=>[n("div",I,[i(a,{onClick:o.store},{default:t(()=>e[15]||(e[15]=[r("Save")])),_:1},8,["onClick"])])]),_:1})):g("",!0),o.show_edit?(m(),u(f,{key:1,class:"flex flex-col h-auto"},{title:t(()=>e[16]||(e[16]=[r("Edit Objective")])),content:t(()=>[n("div",R,[n("div",null,[i(j,null,{default:t(()=>e[17]||(e[17]=[r("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),i(c,{type:"text",error:o.errors.objective_name,modelValue:o.form.objective_name,"onUpdate:modelValue":e[2]||(e[2]=l=>o.form.objective_name=l)},null,8,["error","modelValue"])])])]),footer:t(()=>[n("div",U,[i(a,{onClick:o.update},{default:t(()=>e[18]||(e[18]=[r("Save")])),_:1},8,["onClick"])])]),_:1})):g("",!0)]),i(A,{open:o.confirmation.is_open,onClose:e[3]||(e[3]=l=>o.confirmation.is_open=!1),routeName:o.confirmation.route_name,id:o.confirmation.id},{title:t(()=>e[19]||(e[19]=[r("Delete Objective")])),description:t(()=>e[20]||(e[20]=[r("Are you sure want to delete this objective?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Ee as default};
