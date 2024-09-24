import{B as b}from"./Authenticated-2464c72b.js";import{H as V,L as A}from"./@inertiajs-c7856c69.js";import{_ as f}from"./Card-603ca702.js";import{_ as h,a as j,b as v,c as _,d as S,e as p}from"./TableRow-457357e9.js";import{_ as D}from"./DeleteConfirmation-70f27cde.js";import{y as w,x as o,u as i,Q as t,F as L,be as g,t as d,z as s,W as l,v as u,A as y,D as T,H as N}from"./@vue-fa39c8c3.js";import"./ApplicationLogo-bc2e3fb2.js";import"./radix-vue-b52878ef.js";import"./@floating-ui-d22e3cce.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f5e40355.js";import"./axios-1779699b.js";import"./pusher-js-ddef06ed.js";import"./@vueform-b962800d.js";import"./@vuepic-62f3604d.js";import"./@babel-1b80a44a.js";import"./cropperjs-aef143af.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1a2c766e.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-0175b845.js";import"./@radix-icons-a5b56816.js";import"./lodash.isequal-32ec3540.js";import"./vue-e0f979ce.js";import"./lodash.clonedeep-2dfa23d9.js";import"./qs-fddd7d85.js";import"./side-channel-a64b5f12.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-6df2283d.js";import"./deepmerge-89e33937.js";import"./nprogress-4f526f01.js";import"./lucide-vue-next-f94b1320.js";const E={class:"grid grid-cols-1 xl:grid-cols-2 gap-4"},F={class:"flex justify-end"},H={class:"flex justify-center space-x-2"},z={class:"grid grid-cols-1 gap-4"},I={class:"flex justify-end"},U={class:"grid grid-cols-1 gap-4"},G={class:"flex justify-end"},O={components:{Head:V,Link:A},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",level_name:""},errors:{level_name:!1}}},methods:{viewThemes(a){this.$inertia.get(route("art_gallery.setting.themes"),{level_id:a})},create(){this.form.level_name="",this.show_create=!0,this.show_edit=!1},store(){if(!this.form.level_name){this.errors.level_name=!0;return}this.$inertia.post(route("art_gallery.setting.levels.store"),this.form,{preserveState:!1})},edit(a,r){this.form.id=a,this.form.level_name=r,this.show_edit=!0,this.show_create=!1},update(){if(!this.form.level_name){this.errors.level_name=!0;return}this.$inertia.post(route("art_gallery.setting.levels.update"),this.form,{preserveState:!1})},destroy(a){this.confirmation.route_name="art_gallery.setting.levels.delete",this.confirmation.id=a,this.confirmation.is_open=!0}}},Ee=Object.assign(O,{__name:"Levels",setup(a){return(r,e)=>{const m=g("Button"),k=g("Label"),$=g("Input");return d(),w(L,null,[o(i(V),{title:"Art Gallery"}),o(b,null,{header:t(()=>e[3]||(e[3]=[])),default:t(()=>[s("div",E,[o(f,null,{title:t(()=>[s("div",F,[o(m,{onClick:r.create},{default:t(()=>e[4]||(e[4]=[l("New Level")])),_:1},8,["onClick"])])]),content:t(()=>[o(i(h),null,{default:t(()=>[o(i(j),{class:"bg-gray-100"},{default:t(()=>[o(i(v),null,{default:t(()=>[o(i(_),null,{default:t(()=>e[5]||(e[5]=[l("#")])),_:1}),o(i(_),null,{default:t(()=>e[6]||(e[6]=[l("Name")])),_:1}),o(i(_),{class:"text-center"},{default:t(()=>e[7]||(e[7]=[l("Action")])),_:1})]),_:1})]),_:1}),o(i(S),null,{default:t(()=>[r.$page.props.levels.length?y("",!0):(d(),u(i(v),{key:0},{default:t(()=>[o(i(p),{class:"text-center",colspan:"10"},{default:t(()=>e[8]||(e[8]=[s("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(d(!0),w(L,null,T(r.$page.props.levels,(n,B)=>(d(),u(i(v),null,{default:t(()=>[o(i(p),null,{default:t(()=>[l(N(B+1),1)]),_:2},1024),o(i(p),null,{default:t(()=>[l(N(n.name),1)]),_:2},1024),o(i(p),{class:"text-center"},{default:t(()=>[s("div",H,[o(m,{variant:"outline",onClick:C=>r.edit(n.id,n.name)},{default:t(()=>e[9]||(e[9]=[l("Edit")])),_:2},1032,["onClick"]),o(m,{variant:"destructive",onClick:C=>r.destroy(n.id)},{default:t(()=>e[10]||(e[10]=[l("Delete")])),_:2},1032,["onClick"]),o(m,{onClick:C=>r.viewThemes(n.id)},{default:t(()=>e[11]||(e[11]=[l("View Themes")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),r.show_create?(d(),u(f,{key:0},{title:t(()=>e[12]||(e[12]=[l("Add Level")])),content:t(()=>[s("div",z,[s("div",null,[o(k,null,{default:t(()=>e[13]||(e[13]=[l("Name"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),o($,{type:"text",error:r.errors.level_name,modelValue:r.form.level_name,"onUpdate:modelValue":e[0]||(e[0]=n=>r.form.level_name=n)},null,8,["error","modelValue"])])])]),footer:t(()=>[s("div",I,[o(m,{onClick:r.store},{default:t(()=>e[14]||(e[14]=[l("Save")])),_:1},8,["onClick"])])]),_:1})):y("",!0),r.show_edit?(d(),u(f,{key:1},{title:t(()=>e[15]||(e[15]=[l("Edit Level")])),content:t(()=>[s("div",U,[s("div",null,[o(k,null,{default:t(()=>e[16]||(e[16]=[l("Name"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),o($,{type:"text",error:r.errors.level_name,modelValue:r.form.level_name,"onUpdate:modelValue":e[1]||(e[1]=n=>r.form.level_name=n)},null,8,["error","modelValue"])])])]),footer:t(()=>[s("div",G,[o(m,{onClick:r.update},{default:t(()=>e[17]||(e[17]=[l("Save")])),_:1},8,["onClick"])])]),_:1})):y("",!0)]),o(D,{open:r.confirmation.is_open,onClose:e[2]||(e[2]=n=>r.confirmation.is_open=!1),routeName:r.confirmation.route_name,id:r.confirmation.id},{title:t(()=>e[18]||(e[18]=[l("Delete Level")])),description:t(()=>e[19]||(e[19]=[l("Are you sure want to delete this level?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Ee as default};
