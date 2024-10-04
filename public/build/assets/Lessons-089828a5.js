import{B as N}from"./Authenticated-862af612.js";import{H as b,L as V}from"./@inertiajs-2b766590.js";import{_ as u}from"./Card-e1e522a8.js";import{_ as B,a as j,b as f,c,d as S,e as d}from"./TableRow-2682b32d.js";import{_ as A}from"./DeleteConfirmation-138e8050.js";import{x as y,v as t,u as r,O as e,F as C,b7 as h,q as p,y as i,U as s,t as _,B as g,I as T,J as w}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-31ea0dbe.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";import"./lucide-vue-next-7b48dc26.js";const D={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},E={class:"flex justify-between"},F=i("div",{class:"p-3"}," No Record Found ",-1),I={class:"flex justify-center space-x-2"},U={class:"grid grid-cols-1 gap-4"},H=i("span",{class:"text-red-500"},"*",-1),O={class:"flex justify-end"},R={class:"grid grid-cols-1 gap-4"},q=i("span",{class:"text-red-500"},"*",-1),z={class:"flex justify-end"},J={components:{Head:b,Link:V},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",level_id:this.$page.props.level_id,lesson_name:""},errors:{lesson_name:!1}}},methods:{create(){this.form.lesson_name="",this.show_create=!0,this.show_edit=!1},edit(m,o){this.form.id=m,this.form.lesson_name=o,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.little_bot.lessons.store"),this.form,{preserveState:!1})},update(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.little_bot.lessons.update"),this.form,{preserveState:!1})},destroy(m){this.confirmation.route_name="progress_report.settings.little_bot.lessons.destroy",this.confirmation.id=m,this.confirmation.is_open=!0},viewTopics(m){this.$inertia.get(route("progress_report.settings.little_bot.topics"),{level_id:this.$page.props.level_id,lesson_id:m})}}},Ie=Object.assign(J,{__name:"Lessons",setup(m){return(o,l)=>{const a=h("Button"),v=h("Label"),k=h("Input");return p(),y(C,null,[t(r(b),{title:"Progress Report"}),t(N,null,{header:e(()=>[]),default:e(()=>[i("div",D,[t(u,null,{title:e(()=>[i("div",E,[t(a,{onClick:l[0]||(l[0]=n=>o.$inertia.get(o.route("progress_report.settings.little_bot.levels")))},{default:e(()=>[s("Back")]),_:1}),t(a,{onClick:o.create},{default:e(()=>[s("New Lesson")]),_:1},8,["onClick"])])]),content:e(()=>[t(r(B),null,{default:e(()=>[t(r(j),{class:"bg-gray-100"},{default:e(()=>[t(r(f),null,{default:e(()=>[t(r(c),null,{default:e(()=>[s("#")]),_:1}),t(r(c),null,{default:e(()=>[s("Name")]),_:1}),t(r(c),{class:"text-center"},{default:e(()=>[s("Action")]),_:1})]),_:1})]),_:1}),t(r(S),null,{default:e(()=>[o.$page.props.lessons.length?g("",!0):(p(),_(r(f),{key:0},{default:e(()=>[t(r(d),{class:"text-center",colspan:"10"},{default:e(()=>[F]),_:1})]),_:1})),(p(!0),y(C,null,T(o.$page.props.lessons,(n,L)=>(p(),_(r(f),null,{default:e(()=>[t(r(d),null,{default:e(()=>[s(w(L+1),1)]),_:2},1024),t(r(d),null,{default:e(()=>[s(w(n.name),1)]),_:2},1024),t(r(d),{class:"text-center"},{default:e(()=>[i("div",I,[t(a,{variant:"outline",onClick:$=>o.edit(n.id,n.name)},{default:e(()=>[s("Edit")]),_:2},1032,["onClick"]),t(a,{variant:"destructive",onClick:$=>o.destroy(n.id)},{default:e(()=>[s("Delete")]),_:2},1032,["onClick"]),t(a,{onClick:$=>o.viewTopics(n.id)},{default:e(()=>[s("View Topics")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),o.show_create?(p(),_(u,{key:0},{title:e(()=>[s("Add Lesson")]),content:e(()=>[i("div",U,[i("div",null,[t(v,null,{default:e(()=>[s("Name"),H]),_:1}),t(k,{type:"text",error:o.errors.lesson_name,modelValue:o.form.lesson_name,"onUpdate:modelValue":l[1]||(l[1]=n=>o.form.lesson_name=n)},null,8,["error","modelValue"])])])]),footer:e(()=>[i("div",O,[t(a,{onClick:o.store},{default:e(()=>[s("Save")]),_:1},8,["onClick"])])]),_:1})):g("",!0),o.show_edit?(p(),_(u,{key:1,class:"flex flex-col h-auto"},{title:e(()=>[s("Edit Lesson")]),content:e(()=>[i("div",R,[i("div",null,[t(v,null,{default:e(()=>[s("Name"),q]),_:1}),t(k,{type:"text",error:o.errors.lesson_name,modelValue:o.form.lesson_name,"onUpdate:modelValue":l[2]||(l[2]=n=>o.form.lesson_name=n)},null,8,["error","modelValue"])])])]),footer:e(()=>[i("div",z,[t(a,{onClick:o.update},{default:e(()=>[s("Save")]),_:1},8,["onClick"])])]),_:1})):g("",!0)]),t(A,{open:o.confirmation.is_open,onClose:l[3]||(l[3]=n=>o.confirmation.is_open=!1),routeName:o.confirmation.route_name,id:o.confirmation.id},{title:e(()=>[s("Delete Lesson")]),description:e(()=>[s("Are you sure want to delete this lesson?")]),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Ie as default};
