import{B as L}from"./Authenticated-e54ea1c2.js";import{H as N,L as T}from"./@inertiajs-dde9cc4c.js";import{_ as f}from"./Card-1dc3a135.js";import{_ as h,a as j,b as _,c as k,d as S,e as d}from"./TableRow-c704adf7.js";import{_ as A}from"./DeleteConfirmation-47c07ced.js";import{y,x as o,u as i,Q as e,F as w,be as g,t as p,z as n,W as s,v as u,C as v,J as U,K as B}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-d95f58a2.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-9e9c0f86.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./index-a78bcd26.js";import"./DialogDescription-befd605e.js";import"./lucide-vue-next-f56ff345.js";const D={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 items-start"},E={class:"flex justify-between"},F={class:"flex justify-center space-x-2"},z={class:"grid grid-cols-1 gap-4"},H={class:"flex justify-end"},I={class:"grid grid-cols-1 gap-4"},R={class:"flex justify-end"},J={components:{Head:N,Link:T},data(){return{show_create:!1,show_edit:!1,confirmation:{is_open:!1,route_name:"",id:""},form:{id:"",level_id:this.$page.props.level_id,term_book_name:""},errors:{term_book_name:!1}}},methods:{create(){this.form.term_book_name="",this.show_create=!0,this.show_edit=!1},edit(a,r){this.form.id=a,this.form.term_book_name=r,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.term_book_name){this.errors.term_book_name=!0;return}this.$inertia.post(route("progress_report.settings.math.terms_books.store"),this.form,{preserveState:!1})},update(){if(!this.form.term_book_name){this.errors.term_book_name=!0;return}this.$inertia.post(route("progress_report.settings.math.terms_books.update"),this.form,{preserveState:!1})},destroy(a){this.confirmation.route_name="progress_report.settings.math.terms_books.destroy",this.confirmation.id=a,this.confirmation.is_open=!0},viewUnits(a){this.$inertia.get(route("progress_report.settings.math.units"),{level_id:this.$page.props.level_id,term_book_id:a})}}},Ft=Object.assign(J,{__name:"TermsBooks",setup(a){return(r,t)=>{const l=g("Button"),b=g("Label"),$=g("Input");return p(),y(w,null,[o(i(N),{title:"Progress Report"}),o(L,null,{header:e(()=>t[4]||(t[4]=[])),default:e(()=>[n("div",D,[o(f,null,{title:e(()=>[n("div",E,[o(l,{onClick:t[0]||(t[0]=m=>r.$inertia.get(r.route("progress_report.settings.math.levels")))},{default:e(()=>t[5]||(t[5]=[s("Back")])),_:1}),o(l,{onClick:r.create},{default:e(()=>t[6]||(t[6]=[s("New Term / Book")])),_:1},8,["onClick"])])]),content:e(()=>[o(i(h),null,{default:e(()=>[o(i(j),{class:"bg-gray-100"},{default:e(()=>[o(i(_),null,{default:e(()=>[o(i(k),null,{default:e(()=>t[7]||(t[7]=[s("#")])),_:1}),o(i(k),null,{default:e(()=>t[8]||(t[8]=[s("Name")])),_:1}),o(i(k),{class:"text-center"},{default:e(()=>t[9]||(t[9]=[s("Action")])),_:1})]),_:1})]),_:1}),o(i(S),null,{default:e(()=>[r.$page.props.terms_books.length?v("",!0):(p(),u(i(_),{key:0},{default:e(()=>[o(i(d),{class:"text-center",colspan:"10"},{default:e(()=>t[10]||(t[10]=[n("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(p(!0),y(w,null,U(r.$page.props.terms_books,(m,V)=>(p(),u(i(_),null,{default:e(()=>[o(i(d),null,{default:e(()=>[s(B(V+1),1)]),_:2},1024),o(i(d),null,{default:e(()=>[s(B(m.name),1)]),_:2},1024),o(i(d),{class:"text-center"},{default:e(()=>[n("div",F,[o(l,{variant:"outline",onClick:C=>r.edit(m.id,m.name)},{default:e(()=>t[11]||(t[11]=[s("Edit")])),_:2},1032,["onClick"]),o(l,{variant:"destructive",onClick:C=>r.destroy(m.id)},{default:e(()=>t[12]||(t[12]=[s("Delete")])),_:2},1032,["onClick"]),o(l,{onClick:C=>r.viewUnits(m.id)},{default:e(()=>t[13]||(t[13]=[s("View units")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),r.show_create?(p(),u(f,{key:0},{title:e(()=>t[14]||(t[14]=[s("Add Term / Book")])),content:e(()=>[n("div",z,[n("div",null,[o(b,null,{default:e(()=>t[15]||(t[15]=[s("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),o($,{type:"text",error:r.errors.term_book_name,modelValue:r.form.term_book_name,"onUpdate:modelValue":t[1]||(t[1]=m=>r.form.term_book_name=m)},null,8,["error","modelValue"])])])]),footer:e(()=>[n("div",H,[o(l,{onClick:r.store},{default:e(()=>t[16]||(t[16]=[s("Save")])),_:1},8,["onClick"])])]),_:1})):v("",!0),r.show_edit?(p(),u(f,{key:1,class:"flex flex-col h-auto"},{title:e(()=>t[17]||(t[17]=[s("Edit Term / Book")])),content:e(()=>[n("div",I,[n("div",null,[o(b,null,{default:e(()=>t[18]||(t[18]=[s("Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),o($,{type:"text",error:r.errors.term_book_name,modelValue:r.form.term_book_name,"onUpdate:modelValue":t[2]||(t[2]=m=>r.form.term_book_name=m)},null,8,["error","modelValue"])])])]),footer:e(()=>[n("div",R,[o(l,{onClick:r.update},{default:e(()=>t[19]||(t[19]=[s("Save")])),_:1},8,["onClick"])])]),_:1})):v("",!0)]),o(A,{open:r.confirmation.is_open,onClose:t[3]||(t[3]=m=>r.confirmation.is_open=!1),routeName:r.confirmation.route_name,id:r.confirmation.id},{title:e(()=>t[20]||(t[20]=[s("Delete Term / Book")])),description:e(()=>t[21]||(t[21]=[s("Are you sure want to delete this term / book?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Ft as default};
