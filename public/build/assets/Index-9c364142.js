import{B as N,_ as x,a as F,b as A,c as $}from"./Authenticated-0bdf10fa.js";import{H as v,L as I}from"./@inertiajs-751b4e3a.js";import{P as y}from"./Pagination-5b67a583.js";import{_ as w,a as B,b as c,c as p,d as P,e as h}from"./TableRow-393f40ef.js";import{_ as S}from"./TableCaption-5c1f2c62.js";import{_ as z}from"./Card-859e52b5.js";import{_ as E}from"./DeleteConfirmation-c0bdb2c2.js";import{b as H}from"./@radix-icons-9a1732cf.js";import{F as L,C as M,E as O}from"./lucide-vue-next-4cc1c774.js";import{b5 as b,b6 as R,q as n,x as C,v as e,u as s,P as t,F as k,y as i,K as j,t as m,z as f,V as o,C as q,G as _,m as G}from"./@vue-7927adca.js";import"./ApplicationLogo-04b49080.js";import"./radix-vue-8d4617bd.js";import"./@floating-ui-1e8ef191.js";import"./class-variance-authority-f96983da.js";import"./app-a931a781.js";import"./axios-9cbf0d09.js";import"./pusher-js-36ce843e.js";import"./@vueform-aef92a1c.js";import"./@vuepic-ba9c4d94.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-8efab0ec.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-e8993a83.js";import"./lodash.isequal-979ca240.js";import"./vue-446e1be1.js";import"./lodash.clonedeep-a2a90952.js";import"./qs-c5780410.js";import"./side-channel-c3de7aff.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-30e6e08c.js";import"./deepmerge-89e33937.js";import"./nprogress-2c66c043.js";const K={class:"flex items-center justify-between"},U={class:"flex space-x-2"},J={class:"relative"},Q=i("span",{class:"ml-1 hidden sm:block"},"Filter",-1),W=i("span",{class:"ml-1 hidden sm:block"},"New Class",-1),X=i("div",{class:"p-3"}," No Record Found ",-1),Y=i("span",{class:"sr-only"},"More",-1),Z={components:{Pagination:y,DeleteConfirmation:E,Head:v,Link:I,Table:w,TableBody:B,TableCaption:S,TableCell:c,TableHead:p,TableHeader:P,TableRow:h},props:{filter:Object},data(){return{showModal:!1,isOpen:!1,userID:"",confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:"",day:this.$page.props.filter.day?this.$page.props.filter.day:""}}},methods:{addClass(l){this.$inertia.get(this.route("classes.create"),{centre_id:l})},editClass(l){this.$inertia.get(this.route("classes.edit"),{class_id:l})},deleteClass(l){this.confirmationRoute="classes.destroy",this.confirmationData=l,this.isOpen=!0},viewStudents(l){this.showModal=!0},search(){this.$inertia.get(this.route("classes"),this.params,{replace:!0,preserveState:!0})}}},Ue=Object.assign(Z,{__name:"Index",setup(l){return(a,u)=>{const T=b("Input"),g=b("Button"),D=R("debounce");return n(),C(k,null,[e(s(v),{title:"Classes"}),e(N,null,{header:t(()=>[]),default:t(()=>[i("div",K,[i("div",U,[i("div",J,[e(s(H),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),j(e(T,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:a.params.search,"onUpdate:modelValue":u[0]||(u[0]=r=>a.params.search=r)},null,8,["modelValue"]),[[D,a.search,"800ms"]])]),e(g,{class:"border border-slate-700 border-dashed bg-white text-slate-800 hover:bg-slate-50"},{default:t(()=>[e(s(L),{class:"h-4 w-4"}),Q]),_:1})]),a.$page.props.can.create_classes?(n(),m(g,{key:0,onClick:u[1]||(u[1]=r=>a.$inertia.get(a.route("programmes.create")))},{default:t(()=>[e(s(M),{class:"h-4 w-4"}),W]),_:1})):f("",!0)]),e(z,null,{content:t(()=>[e(s(w),null,{default:t(()=>[e(s(P),{class:"bg-gray-100"},{default:t(()=>[e(s(h),null,{default:t(()=>[e(s(p),null,{default:t(()=>[o("#")]),_:1}),e(s(p),null,{default:t(()=>[o("Name")]),_:1}),e(s(p),null,{default:t(()=>[o("Country")]),_:1}),e(s(p),{class:"text-center"},{default:t(()=>[o("Status")]),_:1}),e(s(p),{class:"text-center"},{default:t(()=>[o("Action")]),_:1})]),_:1})]),_:1}),e(s(B),null,{default:t(()=>[a.$page.props.classes.data.length?f("",!0):(n(),m(s(h),{key:0},{default:t(()=>[e(s(c),{class:"text-center",colspan:"10"},{default:t(()=>[X]),_:1})]),_:1})),(n(!0),C(k,null,q(a.$page.props.classes.data,(r,V)=>(n(),m(s(h),null,{default:t(()=>[e(s(c),{class:"cursor-pointer",onClick:d=>a.editProgramme(r.id)},{default:t(()=>[o(_(a.$page.props.classes.from+V),1)]),_:2},1032,["onClick"]),e(s(c),{class:"cursor-pointer",onClick:d=>a.editProgramme(r.id)},{default:t(()=>[o(_(r.programme_name),1)]),_:2},1032,["onClick"]),e(s(c),{class:"cursor-pointer",onClick:d=>a.editProgramme(r.id)},{default:t(()=>[o(_(r.country),1)]),_:2},1032,["onClick"]),e(s(c),{class:"text-center cursor-pointer",onClick:d=>a.editProgramme(r.id)},{default:t(()=>[i("span",{class:G(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",r.status==1?" bg-green-100 text-green-800":" bg-red-100 text-red-800"])},_(r.status==1?"Active":"Not Active"),3)]),_:2},1032,["onClick"]),e(s(c),{class:"text-center"},{default:t(()=>[e(x,null,{default:t(()=>[e(F,{"as-child":""},{default:t(()=>[e(g,{size:"icon",variant:"outline",class:"h-8 w-8"},{default:t(()=>[e(s(O),{class:"h-3.5 w-3.5"}),Y]),_:1})]),_:1}),e(A,{align:"end"},{default:t(()=>[a.$page.props.can.edit_classes?(n(),m($,{key:0,onClick:d=>a.editProgramme(r.id)},{default:t(()=>[o("Edit")]),_:2},1032,["onClick"])):f("",!0),a.$page.props.can.delete_classes?(n(),m($,{key:1,onClick:d=>a.deleteProgramme(r.id)},{default:t(()=>[o("Delete")]),_:2},1032,["onClick"])):f("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),e(y,{page_data:a.$page.props.classes,params:a.params},null,8,["page_data","params"])]),_:1})],64)}}});export{Ue as default};
