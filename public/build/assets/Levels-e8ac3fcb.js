import{B as b}from"./Authenticated-e54ea1c2.js";import{H as V,L as h}from"./@inertiajs-dde9cc4c.js";import{_ as f}from"./Card-1dc3a135.js";import{_ as j,a as S,b as _,c as v,d as A,e as p}from"./TableRow-c704adf7.js";import{_ as T}from"./DeleteConfirmation-47c07ced.js";import{y as w,x as o,u as s,Q as t,F as L,be as g,t as d,z as l,W as i,v as u,C as k,J as D,K as N}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-d95f58a2.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-9e9c0f86.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./index-a78bcd26.js";import"./DialogDescription-befd605e.js";import"./lucide-vue-next-f56ff345.js";const E={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},F={class:"flex justify-end"},z={class:"flex justify-center space-x-2"},H={class:"grid grid-cols-1 gap-4"},I={class:"flex justify-end"},R={class:"grid grid-cols-1 gap-4"},U={class:"flex justify-end"},J={components:{Head:V,Link:h},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",level_name:""},errors:{level_name:!1}}},methods:{create(){this.form.level_name="",this.show_create=!0,this.show_edit=!1},edit(a,r){this.form.id=a,this.form.level_name=r,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.level_name){this.errors.level_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.levels.store"),this.form,{preserveState:!1})},update(){if(!this.form.level_name){this.errors.level_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.levels.update"),this.form,{preserveState:!1})},destroy(a){this.confirmation.route_name="progress_report.settings.digital_art.levels.destroy",this.confirmation.id=a,this.confirmation.is_open=!0},viewThemes(a){this.$inertia.get(route("progress_report.settings.digital_art.themes"),{level_id:a})}}},ze=Object.assign(J,{__name:"Levels",setup(a){return(r,e)=>{const m=g("Button"),y=g("Label"),C=g("Input");return d(),w(L,null,[o(s(V),{title:"Progress Report"}),o(b,null,{header:t(()=>e[3]||(e[3]=[])),default:t(()=>[l("div",E,[o(f,null,{title:t(()=>[l("div",F,[o(m,{onClick:r.create},{default:t(()=>e[4]||(e[4]=[i("New Level")])),_:1},8,["onClick"])])]),content:t(()=>[o(s(j),null,{default:t(()=>[o(s(S),{class:"bg-gray-100"},{default:t(()=>[o(s(_),null,{default:t(()=>[o(s(v),null,{default:t(()=>e[5]||(e[5]=[i("#")])),_:1}),o(s(v),null,{default:t(()=>e[6]||(e[6]=[i("Name")])),_:1}),o(s(v),{class:"text-center"},{default:t(()=>e[7]||(e[7]=[i("Action")])),_:1})]),_:1})]),_:1}),o(s(A),null,{default:t(()=>[r.$page.props.levels.length?k("",!0):(d(),u(s(_),{key:0},{default:t(()=>[o(s(p),{class:"text-center",colspan:"10"},{default:t(()=>e[8]||(e[8]=[l("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(d(!0),w(L,null,D(r.$page.props.levels,(n,B)=>(d(),u(s(_),null,{default:t(()=>[o(s(p),null,{default:t(()=>[i(N(B+1),1)]),_:2},1024),o(s(p),null,{default:t(()=>[i(N(n.name),1)]),_:2},1024),o(s(p),{class:"text-center"},{default:t(()=>[l("div",z,[o(m,{variant:"outline",onClick:$=>r.edit(n.id,n.name)},{default:t(()=>e[9]||(e[9]=[i("Edit")])),_:2},1032,["onClick"]),o(m,{variant:"destructive",onClick:$=>r.destroy(n.id)},{default:t(()=>e[10]||(e[10]=[i("Delete")])),_:2},1032,["onClick"]),o(m,{onClick:$=>r.viewThemes(n.id)},{default:t(()=>e[11]||(e[11]=[i("View Themes")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),r.show_create?(d(),u(f,{key:0},{title:t(()=>e[12]||(e[12]=[i("Add Level")])),content:t(()=>[l("div",H,[l("div",null,[o(y,null,{default:t(()=>e[13]||(e[13]=[i("Name"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(C,{type:"text",error:r.errors.level_name,modelValue:r.form.level_name,"onUpdate:modelValue":e[0]||(e[0]=n=>r.form.level_name=n)},null,8,["error","modelValue"])])])]),footer:t(()=>[l("div",I,[o(m,{onClick:r.store},{default:t(()=>e[14]||(e[14]=[i("Save")])),_:1},8,["onClick"])])]),_:1})):k("",!0),r.show_edit?(d(),u(f,{key:1},{title:t(()=>e[15]||(e[15]=[i("Edit Level")])),content:t(()=>[l("div",R,[l("div",null,[o(y,null,{default:t(()=>e[16]||(e[16]=[i("Name"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(C,{type:"text",error:r.errors.level_name,modelValue:r.form.level_name,"onUpdate:modelValue":e[1]||(e[1]=n=>r.form.level_name=n)},null,8,["error","modelValue"])])])]),footer:t(()=>[l("div",U,[o(m,{onClick:r.update},{default:t(()=>e[17]||(e[17]=[i("Save")])),_:1},8,["onClick"])])]),_:1})):k("",!0)]),o(T,{open:r.confirmation.is_open,onClose:e[2]||(e[2]=n=>r.confirmation.is_open=!1),routeName:r.confirmation.route_name,id:r.confirmation.id},{title:t(()=>e[18]||(e[18]=[i("Delete Level")])),description:t(()=>e[19]||(e[19]=[i("Are you sure want to delete this level?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{ze as default};
