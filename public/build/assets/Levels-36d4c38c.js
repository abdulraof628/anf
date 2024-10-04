import{B as V}from"./Authenticated-862af612.js";import{H as L,L as b}from"./@inertiajs-2b766590.js";import{_ as u}from"./Card-e1e522a8.js";import{_ as B,a as j,b as f,c,d as S,e as p}from"./TableRow-2682b32d.js";import{_ as A}from"./DeleteConfirmation-138e8050.js";import{x as $,v as t,u as r,O as e,F as C,b7 as v,q as d,y as i,U as s,t as _,B as h,I as D,J as w}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-31ea0dbe.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";import"./lucide-vue-next-7b48dc26.js";const E={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},F={class:"flex justify-end"},I=i("div",{class:"p-3"}," No Record Found ",-1),U={class:"flex justify-center space-x-2"},H={class:"grid grid-cols-1 gap-4"},O=i("span",{class:"text-red-500"},"*",-1),R={class:"flex justify-end"},q={class:"grid grid-cols-1 gap-4"},z=i("span",{class:"text-red-500"},"*",-1),J={class:"flex justify-end"},P={components:{Head:L,Link:b},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",level_name:""},errors:{level_name:!1}}},methods:{create(){this.form.level_name="",this.show_create=!0,this.show_edit=!1},edit(n,o){this.form.id=n,this.form.level_name=o,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.level_name){this.errors.level_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.levels.store"),this.form,{preserveState:!1})},update(){if(!this.form.level_name){this.errors.level_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.levels.update"),this.form,{preserveState:!1})},destroy(n){this.confirmation.route_name="progress_report.settings.coding_robotics.levels.destroy",this.confirmation.id=n,this.confirmation.is_open=!0},viewLessons(n){this.$inertia.get(route("progress_report.settings.coding_robotics.lessons"),{level_id:n})}}},Ue=Object.assign(P,{__name:"Levels",setup(n){return(o,a)=>{const m=v("Button"),g=v("Label"),k=v("Input");return d(),$(C,null,[t(r(L),{title:"Progress Report"}),t(V,null,{header:e(()=>[]),default:e(()=>[i("div",E,[t(u,null,{title:e(()=>[i("div",F,[t(m,{onClick:o.create},{default:e(()=>[s("New Level")]),_:1},8,["onClick"])])]),content:e(()=>[t(r(B),null,{default:e(()=>[t(r(j),{class:"bg-gray-100"},{default:e(()=>[t(r(f),null,{default:e(()=>[t(r(c),null,{default:e(()=>[s("#")]),_:1}),t(r(c),null,{default:e(()=>[s("Name")]),_:1}),t(r(c),{class:"text-center"},{default:e(()=>[s("Action")]),_:1})]),_:1})]),_:1}),t(r(S),null,{default:e(()=>[o.$page.props.levels.length?h("",!0):(d(),_(r(f),{key:0},{default:e(()=>[t(r(p),{class:"text-center",colspan:"10"},{default:e(()=>[I]),_:1})]),_:1})),(d(!0),$(C,null,D(o.$page.props.levels,(l,N)=>(d(),_(r(f),null,{default:e(()=>[t(r(p),null,{default:e(()=>[s(w(N+1),1)]),_:2},1024),t(r(p),null,{default:e(()=>[s(w(l.name),1)]),_:2},1024),t(r(p),{class:"text-center"},{default:e(()=>[i("div",U,[t(m,{variant:"outline",onClick:y=>o.edit(l.id,l.name)},{default:e(()=>[s("Edit")]),_:2},1032,["onClick"]),t(m,{variant:"destructive",onClick:y=>o.destroy(l.id)},{default:e(()=>[s("Delete")]),_:2},1032,["onClick"]),t(m,{onClick:y=>o.viewLessons(l.id)},{default:e(()=>[s("View Lessons")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),o.show_create?(d(),_(u,{key:0},{title:e(()=>[s("Add Level")]),content:e(()=>[i("div",H,[i("div",null,[t(g,null,{default:e(()=>[s("Name"),O]),_:1}),t(k,{type:"text",error:o.errors.level_name,modelValue:o.form.level_name,"onUpdate:modelValue":a[0]||(a[0]=l=>o.form.level_name=l)},null,8,["error","modelValue"])])])]),footer:e(()=>[i("div",R,[t(m,{onClick:o.store},{default:e(()=>[s("Save")]),_:1},8,["onClick"])])]),_:1})):h("",!0),o.show_edit?(d(),_(u,{key:1},{title:e(()=>[s("Edit Level")]),content:e(()=>[i("div",q,[i("div",null,[t(g,null,{default:e(()=>[s("Name"),z]),_:1}),t(k,{type:"text",error:o.errors.level_name,modelValue:o.form.level_name,"onUpdate:modelValue":a[1]||(a[1]=l=>o.form.level_name=l)},null,8,["error","modelValue"])])])]),footer:e(()=>[i("div",J,[t(m,{onClick:o.update},{default:e(()=>[s("Save")]),_:1},8,["onClick"])])]),_:1})):h("",!0)]),t(A,{open:o.confirmation.is_open,onClose:a[2]||(a[2]=l=>o.confirmation.is_open=!1),routeName:o.confirmation.route_name,id:o.confirmation.id},{title:e(()=>[s("Delete Level")]),description:e(()=>[s("Are you sure want to delete this level?")]),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Ue as default};
