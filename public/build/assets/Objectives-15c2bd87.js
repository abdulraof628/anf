import{B as N}from"./Authenticated-862af612.js";import{H as y,L as B}from"./@inertiajs-2b766590.js";import{_ as c}from"./Card-e1e522a8.js";import{_ as V,a as O,b as u,c as f,d as L,e as d}from"./TableRow-2682b32d.js";import{_ as S}from"./DeleteConfirmation-138e8050.js";import{x as j,v as o,u as r,O as e,F as $,b7 as v,q as m,y as s,U as i,t as _,B as h,I as A,J as k}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-31ea0dbe.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";import"./lucide-vue-next-7b48dc26.js";const D={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},E={class:"flex justify-between"},F=s("div",{class:"p-3"}," No Record Found ",-1),I={class:"flex justify-center space-x-2"},U={class:"grid grid-cols-1 gap-4"},H=s("span",{class:"text-red-500"},"*",-1),R={class:"flex justify-end"},q={class:"grid grid-cols-1 gap-4"},z=s("span",{class:"text-red-500"},"*",-1),J={class:"flex justify-end"},P={components:{Head:y,Link:B},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",topic_id:this.$page.props.topic_id,objective_name:""},errors:{objective_name:!1}}},methods:{create(){this.form.objective_name="",this.show_create=!0,this.show_edit=!1},edit(p,t){this.form.id=p,this.form.objective_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.little_bot.objectives.store"),this.form,{preserveState:!1})},update(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.little_bot.objectives.update"),this.form,{preserveState:!1})},destroy(p){this.confirmation.route_name="progress_report.settings.little_bot.objectives.destroy",this.confirmation.id=p,this.confirmation.is_open=!0}}},Ie=Object.assign(P,{__name:"Objectives",setup(p){return(t,n)=>{const l=v("Button"),b=v("Label"),g=v("Input");return m(),j($,null,[o(r(y),{title:"Progress Report"}),o(N,null,{header:e(()=>[]),default:e(()=>[s("div",D,[o(c,null,{title:e(()=>[s("div",E,[o(l,{onClick:n[0]||(n[0]=a=>t.$inertia.get(t.route("progress_report.settings.coding_robotics.topics",{level_id:t.$page.props.level_id,lesson_id:t.$page.props.lesson_id})))},{default:e(()=>[i("Back")]),_:1}),o(l,{onClick:t.create},{default:e(()=>[i("New Objective")]),_:1},8,["onClick"])])]),content:e(()=>[o(r(V),null,{default:e(()=>[o(r(O),{class:"bg-gray-100"},{default:e(()=>[o(r(u),null,{default:e(()=>[o(r(f),null,{default:e(()=>[i("#")]),_:1}),o(r(f),null,{default:e(()=>[i("Name")]),_:1}),o(r(f),{class:"text-center"},{default:e(()=>[i("Action")]),_:1})]),_:1})]),_:1}),o(r(L),null,{default:e(()=>[t.$page.props.objectives.length?h("",!0):(m(),_(r(u),{key:0},{default:e(()=>[o(r(d),{class:"text-center",colspan:"10"},{default:e(()=>[F]),_:1})]),_:1})),(m(!0),j($,null,A(t.$page.props.objectives,(a,C)=>(m(),_(r(u),null,{default:e(()=>[o(r(d),null,{default:e(()=>[i(k(C+1),1)]),_:2},1024),o(r(d),null,{default:e(()=>[i(k(a.name),1)]),_:2},1024),o(r(d),{class:"text-center"},{default:e(()=>[s("div",I,[o(l,{variant:"outline",onClick:w=>t.edit(a.id,a.name)},{default:e(()=>[i("Edit")]),_:2},1032,["onClick"]),o(l,{variant:"destructive",onClick:w=>t.destroy(a.id)},{default:e(()=>[i("Delete")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t.show_create?(m(),_(c,{key:0},{title:e(()=>[i("Add Objective")]),content:e(()=>[s("div",U,[s("div",null,[o(b,null,{default:e(()=>[i("Name"),H]),_:1}),o(g,{type:"text",error:t.errors.objective_name,modelValue:t.form.objective_name,"onUpdate:modelValue":n[1]||(n[1]=a=>t.form.objective_name=a)},null,8,["error","modelValue"])])])]),footer:e(()=>[s("div",R,[o(l,{onClick:t.store},{default:e(()=>[i("Save")]),_:1},8,["onClick"])])]),_:1})):h("",!0),t.show_edit?(m(),_(c,{key:1,class:"flex flex-col h-auto"},{title:e(()=>[i("Edit Objective")]),content:e(()=>[s("div",q,[s("div",null,[o(b,null,{default:e(()=>[i("Name"),z]),_:1}),o(g,{type:"text",error:t.errors.objective_name,modelValue:t.form.objective_name,"onUpdate:modelValue":n[2]||(n[2]=a=>t.form.objective_name=a)},null,8,["error","modelValue"])])])]),footer:e(()=>[s("div",J,[o(l,{onClick:t.update},{default:e(()=>[i("Save")]),_:1},8,["onClick"])])]),_:1})):h("",!0)]),o(S,{open:t.confirmation.is_open,onClose:n[3]||(n[3]=a=>t.confirmation.is_open=!1),routeName:t.confirmation.route_name,id:t.confirmation.id},{title:e(()=>[i("Delete Objective")]),description:e(()=>[i("Are you sure want to delete this objective?")]),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Ie as default};
