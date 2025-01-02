import{B}from"./Authenticated-98036166.js";import{H as V,L as j}from"./@inertiajs-7f289881.js";import{_ as f}from"./Card-a7869428.js";import{_ as S,a as A,b as _,c as v,d as D,e as p}from"./TableRow-75c58101.js";import{_ as E}from"./DeleteConfirmation-dd64c485.js";import{y as w,x as o,u as i,Q as t,F as L,be as g,t as d,z as l,W as s,v as u,C as k,J as F,K as N}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ece3933f.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-c5f0f1fd.js";import"./DialogDescription-a3c26cdc.js";import"./lucide-vue-next-53796c49.js";const z={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},H={class:"flex justify-end"},I={class:"flex justify-center space-x-2"},R={class:"grid grid-cols-1 gap-4"},U={class:"flex justify-end"},h={class:"grid grid-cols-1 gap-4"},J={class:"flex justify-end"},K={components:{Head:V,Link:j},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",level_name:""},errors:{level_name:!1}}},methods:{create(){this.form.level_name="",this.show_create=!0,this.show_edit=!1},edit(a,r){this.form.id=a,this.form.level_name=r,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.level_name){this.errors.level_name=!0;return}this.$inertia.post(route("progress_report.settings.little_bot.levels.store"),this.form,{preserveState:!1})},update(){if(!this.form.level_name){this.errors.level_name=!0;return}this.$inertia.post(route("progress_report.settings.little_bot.levels.update"),this.form,{preserveState:!1})},destroy(a){this.confirmation.route_name="progress_report.settings.little_bot.levels.destroy",this.confirmation.id=a,this.confirmation.is_open=!0},viewLessons(a){this.$inertia.get(route("progress_report.settings.little_bot.lessons"),{level_id:a})}}},Re=Object.assign(K,{__name:"Levels",setup(a){return(r,e)=>{const m=g("Button"),y=g("Label"),C=g("Input");return d(),w(L,null,[o(i(V),{title:"Progress Report"}),o(B,null,{header:t(()=>e[3]||(e[3]=[])),default:t(()=>[l("div",z,[o(f,null,{title:t(()=>[l("div",H,[o(m,{onClick:r.create},{default:t(()=>e[4]||(e[4]=[s("New Level")])),_:1},8,["onClick"])])]),content:t(()=>[o(i(S),null,{default:t(()=>[o(i(A),{class:"bg-gray-100"},{default:t(()=>[o(i(_),null,{default:t(()=>[o(i(v),null,{default:t(()=>e[5]||(e[5]=[s("#")])),_:1}),o(i(v),null,{default:t(()=>e[6]||(e[6]=[s("Name")])),_:1}),o(i(v),{class:"text-center"},{default:t(()=>e[7]||(e[7]=[s("Action")])),_:1})]),_:1})]),_:1}),o(i(D),null,{default:t(()=>[r.$page.props.levels.length?k("",!0):(d(),u(i(_),{key:0},{default:t(()=>[o(i(p),{class:"text-center",colspan:"10"},{default:t(()=>e[8]||(e[8]=[l("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(d(!0),w(L,null,F(r.$page.props.levels,(n,b)=>(d(),u(i(_),null,{default:t(()=>[o(i(p),null,{default:t(()=>[s(N(b+1),1)]),_:2},1024),o(i(p),null,{default:t(()=>[s(N(n.name),1)]),_:2},1024),o(i(p),{class:"text-center"},{default:t(()=>[l("div",I,[o(m,{variant:"outline",onClick:$=>r.edit(n.id,n.name)},{default:t(()=>e[9]||(e[9]=[s("Edit")])),_:2},1032,["onClick"]),o(m,{variant:"destructive",onClick:$=>r.destroy(n.id)},{default:t(()=>e[10]||(e[10]=[s("Delete")])),_:2},1032,["onClick"]),o(m,{onClick:$=>r.viewLessons(n.id)},{default:t(()=>e[11]||(e[11]=[s("View Lessons")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),r.show_create?(d(),u(f,{key:0},{title:t(()=>e[12]||(e[12]=[s("Add Level")])),content:t(()=>[l("div",R,[l("div",null,[o(y,null,{default:t(()=>e[13]||(e[13]=[s("Name"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(C,{type:"text",error:r.errors.level_name,modelValue:r.form.level_name,"onUpdate:modelValue":e[0]||(e[0]=n=>r.form.level_name=n)},null,8,["error","modelValue"])])])]),footer:t(()=>[l("div",U,[o(m,{onClick:r.store},{default:t(()=>e[14]||(e[14]=[s("Save")])),_:1},8,["onClick"])])]),_:1})):k("",!0),r.show_edit?(d(),u(f,{key:1},{title:t(()=>e[15]||(e[15]=[s("Edit Level")])),content:t(()=>[l("div",h,[l("div",null,[o(y,null,{default:t(()=>e[16]||(e[16]=[s("Name"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(C,{type:"text",error:r.errors.level_name,modelValue:r.form.level_name,"onUpdate:modelValue":e[1]||(e[1]=n=>r.form.level_name=n)},null,8,["error","modelValue"])])])]),footer:t(()=>[l("div",J,[o(m,{onClick:r.update},{default:t(()=>e[17]||(e[17]=[s("Save")])),_:1},8,["onClick"])])]),_:1})):k("",!0)]),o(E,{open:r.confirmation.is_open,onClose:e[2]||(e[2]=n=>r.confirmation.is_open=!1),routeName:r.confirmation.route_name,id:r.confirmation.id},{title:t(()=>e[18]||(e[18]=[s("Delete Level")])),description:t(()=>e[19]||(e[19]=[s("Are you sure want to delete this level?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Re as default};
