import{B as j}from"./Authenticated-f3f73889.js";import{H as N,L as B}from"./@inertiajs-7f289881.js";import{_ as f}from"./Card-c7bd5922.js";import{_ as L,a as T,b as _,c as g,d as S,e as d}from"./TableRow-cf728391.js";import{_ as A}from"./DeleteConfirmation-c04b1a8a.js";import{y,x as o,u as s,Q as e,F as b,be as v,t as m,z as n,W as r,v as u,C as c,J as O,K as w}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c289c940.js";import"./axios-1779699b.js";import"./pusher-js-d90fcbf8.js";import"./laravel-echo-96cacb8d.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-2b1a9f82.js";import"./DialogDescription-c70040de.js";import"./lucide-vue-next-53796c49.js";const D={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},E={class:"flex justify-between"},F={class:"flex justify-center space-x-2"},z={class:"grid grid-cols-1 gap-4"},H={class:"flex justify-end"},I={class:"grid grid-cols-1 gap-4"},R={class:"flex justify-end"},U={components:{Head:N,Link:B},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",lesson_id:this.$page.props.lesson_id,topic_name:""},errors:{topic_name:!1}}},methods:{create(){this.form.topic_name="",this.show_create=!0,this.show_edit=!1},edit(a,i){this.form.id=a,this.form.topic_name=i,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.topic_name){this.errors.topic_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.topics.store"),this.form,{preserveState:!1})},update(){if(!this.form.topic_name){this.errors.topic_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.topics.update"),this.form,{preserveState:!1})},destroy(a){this.confirmation.route_name="progress_report.settings.coding_robotics.topics.destroy",this.confirmation.id=a,this.confirmation.is_open=!0},viewObjectives(a){this.$inertia.get(route("progress_report.settings.coding_robotics.objectives"),{level_id:this.$page.props.level_id,lesson_id:this.$page.props.lesson_id,topic_id:a})}}},zt=Object.assign(U,{__name:"Topics",setup(a){return(i,t)=>{const p=v("Button"),$=v("Label"),k=v("Input");return m(),y(b,null,[o(s(N),{title:"Progress Report"}),o(j,null,{header:e(()=>t[4]||(t[4]=[])),default:e(()=>[n("div",D,[o(f,null,{title:e(()=>[n("div",E,[o(p,{onClick:t[0]||(t[0]=l=>i.$inertia.get(i.route("progress_report.settings.coding_robotics.lessons",{level_id:i.$page.props.level_id})))},{default:e(()=>t[5]||(t[5]=[r("Back")])),_:1}),o(p,{onClick:i.create},{default:e(()=>t[6]||(t[6]=[r("New Topic")])),_:1},8,["onClick"])])]),content:e(()=>[o(s(L),null,{default:e(()=>[o(s(T),{class:"bg-gray-100"},{default:e(()=>[o(s(_),null,{default:e(()=>[o(s(g),null,{default:e(()=>t[7]||(t[7]=[r("#")])),_:1}),o(s(g),null,{default:e(()=>t[8]||(t[8]=[r("Name")])),_:1}),o(s(g),{class:"text-center"},{default:e(()=>t[9]||(t[9]=[r("Action")])),_:1})]),_:1})]),_:1}),o(s(S),null,{default:e(()=>[i.$page.props.topics.length?c("",!0):(m(),u(s(_),{key:0},{default:e(()=>[o(s(d),{class:"text-center",colspan:"10"},{default:e(()=>t[10]||(t[10]=[n("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(m(!0),y(b,null,O(i.$page.props.topics,(l,V)=>(m(),u(s(_),null,{default:e(()=>[o(s(d),null,{default:e(()=>[r(w(V+1),1)]),_:2},1024),o(s(d),null,{default:e(()=>[r(w(l.name),1)]),_:2},1024),o(s(d),{class:"text-center"},{default:e(()=>[n("div",F,[o(p,{variant:"outline",onClick:C=>i.edit(l.id,l.name)},{default:e(()=>t[11]||(t[11]=[r("Edit")])),_:2},1032,["onClick"]),o(p,{variant:"destructive",onClick:C=>i.destroy(l.id)},{default:e(()=>t[12]||(t[12]=[r("Delete")])),_:2},1032,["onClick"]),o(p,{onClick:C=>i.viewObjectives(l.id)},{default:e(()=>t[13]||(t[13]=[r("View Objectives")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),i.show_create?(m(),u(f,{key:0},{title:e(()=>t[14]||(t[14]=[r("Add Topic")])),content:e(()=>[n("div",z,[n("div",null,[o($,null,{default:e(()=>t[15]||(t[15]=[r("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),o(k,{type:"text",error:i.errors.topic_name,modelValue:i.form.topic_name,"onUpdate:modelValue":t[1]||(t[1]=l=>i.form.topic_name=l)},null,8,["error","modelValue"])])])]),footer:e(()=>[n("div",H,[o(p,{onClick:i.store},{default:e(()=>t[16]||(t[16]=[r("Save")])),_:1},8,["onClick"])])]),_:1})):c("",!0),i.show_edit?(m(),u(f,{key:1,class:"flex flex-col h-auto"},{title:e(()=>t[17]||(t[17]=[r("Edit Topic")])),content:e(()=>[n("div",I,[n("div",null,[o($,null,{default:e(()=>t[18]||(t[18]=[r("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),o(k,{type:"text",error:i.errors.topic_name,modelValue:i.form.topic_name,"onUpdate:modelValue":t[2]||(t[2]=l=>i.form.topic_name=l)},null,8,["error","modelValue"])])])]),footer:e(()=>[n("div",R,[o(p,{onClick:i.update},{default:e(()=>t[19]||(t[19]=[r("Save")])),_:1},8,["onClick"])])]),_:1})):c("",!0)]),o(A,{open:i.confirmation.is_open,onClose:t[3]||(t[3]=l=>i.confirmation.is_open=!1),routeName:i.confirmation.route_name,id:i.confirmation.id},{title:e(()=>t[20]||(t[20]=[r("Delete Topic")])),description:e(()=>t[21]||(t[21]=[r("Are you sure want to delete this topic?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{zt as default};
