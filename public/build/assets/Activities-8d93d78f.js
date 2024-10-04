import{B}from"./Authenticated-d5536341.js";import{H as V,L as b}from"./@inertiajs-6e15fcc1.js";import{_ as f}from"./Card-d08a29fb.js";import{_ as h,a as L,b as _,c as v,d as j,e as p}from"./TableRow-010fc527.js";import{_ as S}from"./DeleteConfirmation-407a2fec.js";import{y as C,x as o,u as s,Q as e,F as w,be as g,t as d,z as a,W as r,v as u,C as y,J as O,K as N}from"./@vue-2682a433.js";import"./ApplicationLogo-754713c8.js";import"./radix-vue-1c0958bf.js";import"./@floating-ui-46419ac1.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-268d443b.js";import"./axios-1779699b.js";import"./pusher-js-747fa3ad.js";import"./@vueform-93d31398.js";import"./@vuepic-72648ebd.js";import"./@babel-1b80a44a.js";import"./cropperjs-1d139b1c.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-ae9c59f1.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-bada8fb2.js";import"./@radix-icons-96330712.js";import"./lodash.isequal-aa94bca8.js";import"./vue-210fd32b.js";import"./lodash.clonedeep-15f95254.js";import"./qs-d67e8c34.js";import"./side-channel-51e4be2c.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-110a5121.js";import"./deepmerge-89e33937.js";import"./nprogress-47dccea4.js";import"./lucide-vue-next-62ff5c75.js";const D={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},E={class:"flex justify-between"},F={class:"flex justify-center space-x-2"},z={class:"grid grid-cols-1 gap-4"},H={class:"flex justify-end"},I={class:"grid grid-cols-1 gap-4"},R={class:"flex justify-end"},U={components:{Head:V,Link:b},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",lesson_id:this.$page.props.lesson_id,activity_name:""},errors:{activity_name:!1}}},methods:{create(){this.form.activity_name="",this.show_create=!0,this.show_edit=!1},edit(m,i){this.form.id=m,this.form.activity_name=i,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.activity_name){this.errors.activity_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.activities.store"),this.form,{preserveState:!1})},update(){if(!this.form.activity_name){this.errors.activity_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.activities.update"),this.form,{preserveState:!1})},destroy(m){this.confirmation.route_name="progress_report.settings.digital_art.activities.destroy",this.confirmation.id=m,this.confirmation.is_open=!0},viewOutcomes(m){this.$inertia.get(route("progress_report.settings.digital_art.outcomes"),{level_id:this.$page.props.level_id,theme_id:this.$page.props.theme_id,lesson_id:this.$page.props.lesson_id,activity_id:m})}}},Dt=Object.assign(U,{__name:"Activities",setup(m){return(i,t)=>{const l=g("Button"),$=g("Label"),k=g("Input");return d(),C(w,null,[o(s(V),{title:"Progress Report"}),o(B,null,{header:e(()=>t[4]||(t[4]=[])),default:e(()=>[a("div",D,[o(f,null,{title:e(()=>[a("div",E,[o(l,{onClick:t[0]||(t[0]=n=>i.$inertia.get(i.route("progress_report.settings.digital_art.lessons",{level_id:i.$page.props.level_id,theme_id:i.$page.props.theme_id})))},{default:e(()=>t[5]||(t[5]=[r("Back")])),_:1}),o(l,{onClick:i.create},{default:e(()=>t[6]||(t[6]=[r("New Activity")])),_:1},8,["onClick"])])]),content:e(()=>[o(s(h),null,{default:e(()=>[o(s(L),{class:"bg-gray-100"},{default:e(()=>[o(s(_),null,{default:e(()=>[o(s(v),null,{default:e(()=>t[7]||(t[7]=[r("#")])),_:1}),o(s(v),null,{default:e(()=>t[8]||(t[8]=[r("Name")])),_:1}),o(s(v),{class:"text-center"},{default:e(()=>t[9]||(t[9]=[r("Action")])),_:1})]),_:1})]),_:1}),o(s(j),null,{default:e(()=>[i.$page.props.activities.length?y("",!0):(d(),u(s(_),{key:0},{default:e(()=>[o(s(p),{class:"text-center",colspan:"10"},{default:e(()=>t[10]||(t[10]=[a("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(d(!0),C(w,null,O(i.$page.props.activities,(n,A)=>(d(),u(s(_),null,{default:e(()=>[o(s(p),null,{default:e(()=>[r(N(A+1),1)]),_:2},1024),o(s(p),null,{default:e(()=>[r(N(n.name),1)]),_:2},1024),o(s(p),{class:"text-center"},{default:e(()=>[a("div",F,[o(l,{variant:"outline",onClick:c=>i.edit(n.id,n.name)},{default:e(()=>t[11]||(t[11]=[r("Edit")])),_:2},1032,["onClick"]),o(l,{variant:"destructive",onClick:c=>i.destroy(n.id)},{default:e(()=>t[12]||(t[12]=[r("Delete")])),_:2},1032,["onClick"]),o(l,{onClick:c=>i.viewOutcomes(n.id)},{default:e(()=>t[13]||(t[13]=[r("View Outcomes")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),i.show_create?(d(),u(f,{key:0},{title:e(()=>t[14]||(t[14]=[r("Add Activity")])),content:e(()=>[a("div",z,[a("div",null,[o($,null,{default:e(()=>t[15]||(t[15]=[r("Name"),a("span",{class:"text-red-500"},"*",-1)])),_:1}),o(k,{type:"text",error:i.errors.activity_name,modelValue:i.form.activity_name,"onUpdate:modelValue":t[1]||(t[1]=n=>i.form.activity_name=n)},null,8,["error","modelValue"])])])]),footer:e(()=>[a("div",H,[o(l,{onClick:i.store},{default:e(()=>t[16]||(t[16]=[r("Save")])),_:1},8,["onClick"])])]),_:1})):y("",!0),i.show_edit?(d(),u(f,{key:1,class:"flex flex-col h-auto"},{title:e(()=>t[17]||(t[17]=[r("Edit Activity")])),content:e(()=>[a("div",I,[a("div",null,[o($,null,{default:e(()=>t[18]||(t[18]=[r("Name"),a("span",{class:"text-red-500"},"*",-1)])),_:1}),o(k,{type:"text",error:i.errors.activity_name,modelValue:i.form.activity_name,"onUpdate:modelValue":t[2]||(t[2]=n=>i.form.activity_name=n)},null,8,["error","modelValue"])])])]),footer:e(()=>[a("div",R,[o(l,{onClick:i.update},{default:e(()=>t[19]||(t[19]=[r("Save")])),_:1},8,["onClick"])])]),_:1})):y("",!0)]),o(S,{open:i.confirmation.is_open,onClose:t[3]||(t[3]=n=>i.confirmation.is_open=!1),routeName:i.confirmation.route_name,id:i.confirmation.id},{title:e(()=>t[20]||(t[20]=[r("Delete Activity")])),description:e(()=>t[21]||(t[21]=[r("Are you sure want to delete this activity?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Dt as default};
