import{B as h}from"./Authenticated-d5536341.js";import{H as V,L as b}from"./@inertiajs-6e15fcc1.js";import{_ as f}from"./Card-d08a29fb.js";import{_ as A,a as j,b as _,c as g,d as S,e as p}from"./TableRow-010fc527.js";import{_ as D}from"./DeleteConfirmation-407a2fec.js";import{y as w,x as o,u as r,Q as t,F as L,be as v,t as d,z as n,W as i,v as u,C as $,J as E,K as N}from"./@vue-2682a433.js";import"./ApplicationLogo-754713c8.js";import"./radix-vue-1c0958bf.js";import"./@floating-ui-46419ac1.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-268d443b.js";import"./axios-1779699b.js";import"./pusher-js-747fa3ad.js";import"./@vueform-93d31398.js";import"./@vuepic-72648ebd.js";import"./@babel-1b80a44a.js";import"./cropperjs-1d139b1c.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-ae9c59f1.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-bada8fb2.js";import"./@radix-icons-96330712.js";import"./lodash.isequal-aa94bca8.js";import"./vue-210fd32b.js";import"./lodash.clonedeep-15f95254.js";import"./qs-d67e8c34.js";import"./side-channel-51e4be2c.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-110a5121.js";import"./deepmerge-89e33937.js";import"./nprogress-47dccea4.js";import"./lucide-vue-next-62ff5c75.js";const F={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},z={class:"flex justify-between"},H={class:"flex justify-center space-x-2"},I={class:"grid grid-cols-1 gap-4"},R={class:"flex justify-end"},U={class:"grid grid-cols-1 gap-4"},J={class:"flex justify-end"},K={components:{Head:V,Link:b},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",theme_id:this.$page.props.theme_id,lesson_name:""},errors:{lesson_name:!1}}},methods:{create(){this.form.lesson_name="",this.show_create=!0,this.show_edit=!1},edit(m,s){this.form.id=m,this.form.lesson_name=s,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.lessons.store"),this.form,{preserveState:!1})},update(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.lessons.update"),this.form,{preserveState:!1})},destroy(m){this.confirmation.route_name="progress_report.settings.digital_art.lessons.destroy",this.confirmation.id=m,this.confirmation.is_open=!0},viewActivities(m){this.$inertia.get(route("progress_report.settings.digital_art.activities"),{level_id:this.$page.props.level_id,theme_id:this.$page.props.theme_id,lesson_id:m})}}},Fe=Object.assign(K,{__name:"Lessons",setup(m){return(s,e)=>{const a=v("Button"),k=v("Label"),C=v("Input");return d(),w(L,null,[o(r(V),{title:"Progress Report"}),o(h,null,{header:t(()=>e[4]||(e[4]=[])),default:t(()=>[n("div",F,[o(f,null,{title:t(()=>[n("div",z,[o(a,{onClick:e[0]||(e[0]=l=>s.$inertia.get(s.route("progress_report.settings.digital_art.themes",{level_id:s.$page.props.level_id,theme_id:s.$page.props.theme_id})))},{default:t(()=>e[5]||(e[5]=[i("Back")])),_:1}),o(a,{onClick:s.create},{default:t(()=>e[6]||(e[6]=[i("New Lesson")])),_:1},8,["onClick"])])]),content:t(()=>[o(r(A),null,{default:t(()=>[o(r(j),{class:"bg-gray-100"},{default:t(()=>[o(r(_),null,{default:t(()=>[o(r(g),null,{default:t(()=>e[7]||(e[7]=[i("#")])),_:1}),o(r(g),null,{default:t(()=>e[8]||(e[8]=[i("Name")])),_:1}),o(r(g),{class:"text-center"},{default:t(()=>e[9]||(e[9]=[i("Action")])),_:1})]),_:1})]),_:1}),o(r(S),null,{default:t(()=>[s.$page.props.lessons.length?$("",!0):(d(),u(r(_),{key:0},{default:t(()=>[o(r(p),{class:"text-center",colspan:"10"},{default:t(()=>e[10]||(e[10]=[n("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(d(!0),w(L,null,E(s.$page.props.lessons,(l,B)=>(d(),u(r(_),null,{default:t(()=>[o(r(p),null,{default:t(()=>[i(N(B+1),1)]),_:2},1024),o(r(p),null,{default:t(()=>[i(N(l.name),1)]),_:2},1024),o(r(p),{class:"text-center"},{default:t(()=>[n("div",H,[o(a,{variant:"outline",onClick:y=>s.edit(l.id,l.name)},{default:t(()=>e[11]||(e[11]=[i("Edit")])),_:2},1032,["onClick"]),o(a,{variant:"destructive",onClick:y=>s.destroy(l.id)},{default:t(()=>e[12]||(e[12]=[i("Delete")])),_:2},1032,["onClick"]),o(a,{onClick:y=>s.viewActivities(l.id)},{default:t(()=>e[13]||(e[13]=[i("View Activities")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),s.show_create?(d(),u(f,{key:0},{title:t(()=>e[14]||(e[14]=[i("Add Lesson")])),content:t(()=>[n("div",I,[n("div",null,[o(k,null,{default:t(()=>e[15]||(e[15]=[i("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),o(C,{type:"text",error:s.errors.lesson_name,modelValue:s.form.lesson_name,"onUpdate:modelValue":e[1]||(e[1]=l=>s.form.lesson_name=l)},null,8,["error","modelValue"])])])]),footer:t(()=>[n("div",R,[o(a,{onClick:s.store},{default:t(()=>e[16]||(e[16]=[i("Save")])),_:1},8,["onClick"])])]),_:1})):$("",!0),s.show_edit?(d(),u(f,{key:1,class:"flex flex-col h-auto"},{title:t(()=>e[17]||(e[17]=[i("Edit Lesson")])),content:t(()=>[n("div",U,[n("div",null,[o(k,null,{default:t(()=>e[18]||(e[18]=[i("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),o(C,{type:"text",error:s.errors.lesson_name,modelValue:s.form.lesson_name,"onUpdate:modelValue":e[2]||(e[2]=l=>s.form.lesson_name=l)},null,8,["error","modelValue"])])])]),footer:t(()=>[n("div",J,[o(a,{onClick:s.update},{default:t(()=>e[19]||(e[19]=[i("Save")])),_:1},8,["onClick"])])]),_:1})):$("",!0)]),o(D,{open:s.confirmation.is_open,onClose:e[3]||(e[3]=l=>s.confirmation.is_open=!1),routeName:s.confirmation.route_name,id:s.confirmation.id},{title:t(()=>e[20]||(e[20]=[i("Delete Lesson")])),description:t(()=>e[21]||(e[21]=[i("Are you sure want to delete this lesson?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Fe as default};
