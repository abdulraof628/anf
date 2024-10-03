import{B as L}from"./Authenticated-11e054d5.js";import{H as V,L as U}from"./@inertiajs-4f2e6820.js";import{_ as f}from"./Card-a2265374.js";import{_ as h,a as j,b as _,c as g,d as S,e as d}from"./TableRow-151d209b.js";import{_ as A}from"./DeleteConfirmation-5b92c13b.js";import{y as w,x as o,u as s,Q as e,F as b,be as v,t as p,z as n,W as r,v as u,C as k,J as D,K as N}from"./@vue-66b8c761.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-98eea8e8.js";import"./axios-1779699b.js";import"./pusher-js-cb9cdec3.js";import"./@vueform-4cba997d.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";import"./lucide-vue-next-bc441494.js";const E={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},F={class:"flex justify-between"},z={class:"flex justify-center space-x-2"},H={class:"grid grid-cols-1 gap-4"},I={class:"flex justify-end"},R={class:"grid grid-cols-1 gap-4"},J={class:"flex justify-end"},K={components:{Head:V,Link:U},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",term_book_id:this.$page.props.term_book_id,unit_name:""},errors:{unit_name:!1}}},methods:{create(){this.form.unit_name="",this.show_create=!0,this.show_edit=!1},edit(m,i){this.form.id=m,this.form.unit_name=i,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.unit_name){this.errors.unit_name=!0;return}this.$inertia.post(route("progress_report.settings.math.units.store"),this.form,{preserveState:!1})},update(){if(!this.form.unit_name){this.errors.unit_name=!0;return}this.$inertia.post(route("progress_report.settings.math.units.update"),this.form,{preserveState:!1})},destroy(m){this.confirmation.route_name="progress_report.settings.math.units.destroy",this.confirmation.id=m,this.confirmation.is_open=!0},viewLessons(m){this.$inertia.get(route("progress_report.settings.math.lessons"),{level_id:this.$page.props.level_id,term_book_id:this.$page.props.term_book_id,unit_id:m})}}},Et=Object.assign(K,{__name:"Units",setup(m){return(i,t)=>{const a=v("Button"),$=v("Label"),C=v("Input");return p(),w(b,null,[o(s(V),{title:"Progress Report"}),o(L,null,{header:e(()=>t[4]||(t[4]=[])),default:e(()=>[n("div",E,[o(f,null,{title:e(()=>[n("div",F,[o(a,{onClick:t[0]||(t[0]=l=>i.$inertia.get(i.route("progress_report.settings.math.terms_books",{level_id:i.$page.props.level_id})))},{default:e(()=>t[5]||(t[5]=[r("Back")])),_:1}),o(a,{onClick:i.create},{default:e(()=>t[6]||(t[6]=[r("New Unit")])),_:1},8,["onClick"])])]),content:e(()=>[o(s(h),null,{default:e(()=>[o(s(j),{class:"bg-gray-100"},{default:e(()=>[o(s(_),null,{default:e(()=>[o(s(g),null,{default:e(()=>t[7]||(t[7]=[r("#")])),_:1}),o(s(g),null,{default:e(()=>t[8]||(t[8]=[r("Name")])),_:1}),o(s(g),{class:"text-center"},{default:e(()=>t[9]||(t[9]=[r("Action")])),_:1})]),_:1})]),_:1}),o(s(S),null,{default:e(()=>[i.$page.props.units.length?k("",!0):(p(),u(s(_),{key:0},{default:e(()=>[o(s(d),{class:"text-center",colspan:"10"},{default:e(()=>t[10]||(t[10]=[n("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(p(!0),w(b,null,D(i.$page.props.units,(l,B)=>(p(),u(s(_),null,{default:e(()=>[o(s(d),null,{default:e(()=>[r(N(B+1),1)]),_:2},1024),o(s(d),null,{default:e(()=>[r(N(l.name),1)]),_:2},1024),o(s(d),{class:"text-center"},{default:e(()=>[n("div",z,[o(a,{variant:"outline",onClick:y=>i.edit(l.id,l.name)},{default:e(()=>t[11]||(t[11]=[r("Edit")])),_:2},1032,["onClick"]),o(a,{variant:"destructive",onClick:y=>i.destroy(l.id)},{default:e(()=>t[12]||(t[12]=[r("Delete")])),_:2},1032,["onClick"]),o(a,{onClick:y=>i.viewLessons(l.id)},{default:e(()=>t[13]||(t[13]=[r("View Lessons")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),i.show_create?(p(),u(f,{key:0},{title:e(()=>t[14]||(t[14]=[r("Add Unit")])),content:e(()=>[n("div",H,[n("div",null,[o($,null,{default:e(()=>t[15]||(t[15]=[r("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),o(C,{type:"text",error:i.errors.unit_name,modelValue:i.form.unit_name,"onUpdate:modelValue":t[1]||(t[1]=l=>i.form.unit_name=l)},null,8,["error","modelValue"])])])]),footer:e(()=>[n("div",I,[o(a,{onClick:i.store},{default:e(()=>t[16]||(t[16]=[r("Save")])),_:1},8,["onClick"])])]),_:1})):k("",!0),i.show_edit?(p(),u(f,{key:1,class:"flex flex-col h-auto"},{title:e(()=>t[17]||(t[17]=[r("Edit Unit")])),content:e(()=>[n("div",R,[n("div",null,[o($,null,{default:e(()=>t[18]||(t[18]=[r("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),o(C,{type:"text",error:i.errors.unit_name,modelValue:i.form.unit_name,"onUpdate:modelValue":t[2]||(t[2]=l=>i.form.unit_name=l)},null,8,["error","modelValue"])])])]),footer:e(()=>[n("div",J,[o(a,{onClick:i.update},{default:e(()=>t[19]||(t[19]=[r("Save")])),_:1},8,["onClick"])])]),_:1})):k("",!0)]),o(A,{open:i.confirmation.is_open,onClose:t[3]||(t[3]=l=>i.confirmation.is_open=!1),routeName:i.confirmation.route_name,id:i.confirmation.id},{title:e(()=>t[20]||(t[20]=[r("Delete Unit")])),description:e(()=>t[21]||(t[21]=[r("Are you sure want to delete this unit?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Et as default};
