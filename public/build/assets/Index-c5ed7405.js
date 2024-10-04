import{B as M}from"./Authenticated-214cc5de.js";import{H as k,L as T}from"./@inertiajs-2b766590.js";import{_ as N}from"./Card-e481dfab.js";import{_ as U}from"./index-a02644ab.js";import{_ as C,d as y,e as i,c as n,a as V,b as c}from"./TableRow-7ae90bc5.js";import{_ as H}from"./TableCaption-b5d13df9.js";import{P as L}from"./Pagination-4f35e34d.js";import{h as $}from"./moment-a9aaa855.js";import{a as Y}from"./@radix-icons-9ff33614.js";import{F as z}from"./lucide-vue-next-7b48dc26.js";import{x as f,v as e,u as a,O as t,F as w,b7 as u,b8 as A,q as d,y as p,z as P,J as m,U as s,B as h,t as g,I as j,m as x}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ef5f5861.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";const E={class:"flex items-center justify-between"},O={class:"flex space-x-2"},R={class:"relative"},q=p("span",{class:"ml-1 hidden sm:block"},"Filters",-1),J={key:0,class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-2"},G={class:"font-normal"},K={class:""},Q=p("div",{class:"p-3"}," No Record Found ",-1),W={components:{Head:k,Link:T,Table:C,TableBody:y,TableCaption:H,TableCell:i,TableHead:n,TableHeader:V,TableRow:c},data(){return{show_filters:!1,open_modal:!1,params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?parseInt(this.$page.props.filter.centre_id):"",programme_id:this.$page.props.filter.programme_id?parseInt(this.$page.props.filter.programme_id):"",date:this.$page.props.filter.date?this.$page.props.filter.date:{month:new Date().getMonth(),year:new Date().getFullYear()}},invoice_data:{parent_name:"",parent_address:"",invoice_number:"",invoice_items:[],date_issued:"",due_date:"",total_amount:""}}},methods:{editInvoice(b){this.$inertia.get(route("fee.invoices.edit"),{invoice_id:b,params:this.params},{preserveState:!1})},search(){this.$inertia.get(route("fee.invoices"),this.params,{replace:!0,preserveState:!0})},showFilters(){this.show_filters=!this.show_filters}}},Je=Object.assign(W,{__name:"Index",setup(b){return(r,l)=>{const D=u("Input"),_=u("Button"),v=u("ComboBox"),S=u("Datepicker"),I=A("debounce");return d(),f(w,null,[e(a(k),{title:"Fee Invoices"}),e(M,null,{header:t(()=>[]),default:t(()=>[p("div",E,[p("div",O,[p("div",R,[e(a(Y),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),P(e(D,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:r.params.search,"onUpdate:modelValue":l[0]||(l[0]=o=>r.params.search=o)},null,8,["modelValue"]),[[I,r.search,"800ms"]])]),e(_,{class:"border border-slate-700 border-dashed bg-white text-slate-800 hover:bg-slate-50",onClick:l[1]||(l[1]=o=>r.showFilters())},{default:t(()=>[e(a(z),{class:"h-4 w-4"}),q]),_:1})])]),r.show_filters?(d(),f("div",J,[e(v,{items:r.$page.props.allowed_centres,"label-property":"label","value-property":"ID",onSelect:r.search,modelValue:r.params.centre_id,"onUpdate:modelValue":l[2]||(l[2]=o=>r.params.centre_id=o),"select-placeholder":"Centres","search-placeholder":"Search centre..."},null,8,["items","onSelect","modelValue"]),e(v,{items:r.$page.props.programmes,"label-property":"name","value-property":"id",onSelect:r.search,modelValue:r.params.programme_id,"onUpdate:modelValue":l[3]||(l[3]=o=>r.params.programme_id=o),canClear:!0,"select-placeholder":"Programmes","search-placeholder":"Search programme..."},{label:t(({item:o})=>[p("span",G,m(o.name+" ("+o.country_name+")"),1)]),_:1},8,["items","onSelect","modelValue"]),p("div",null,[e(S,{modelValue:r.params.date,"onUpdate:modelValue":l[4]||(l[4]=o=>r.params.date=o),mode:"month",format:"MMM Y",onSelect:r.search},null,8,["modelValue","onSelect"])]),p("div",K,[e(_,{onClick:l[5]||(l[5]=o=>r.$inertia.get(r.route("fee.invoices")))},{default:t(()=>[s("Clear Search")]),_:1})])])):h("",!0),e(N,null,{content:t(()=>[e(a(C),null,{default:t(()=>[e(a(V),{class:"bg-gray-100"},{default:t(()=>[e(a(c),null,{default:t(()=>[e(a(n),null,{default:t(()=>[s("#")]),_:1}),e(a(n),null,{default:t(()=>[s("Student Name")]),_:1}),e(a(n),null,{default:t(()=>[s("Invoice No.")]),_:1}),e(a(n),null,{default:t(()=>[s("Date Issued")]),_:1}),e(a(n),null,{default:t(()=>[s("Due Date")]),_:1}),e(a(n),null,{default:t(()=>[s("Amount")]),_:1}),e(a(n),{class:"text-center"},{default:t(()=>[s("Status")]),_:1}),e(a(n),{class:"text-center"},{default:t(()=>[s("Action")]),_:1})]),_:1})]),_:1}),e(a(y),null,{default:t(()=>[r.$page.props.invoices.data.length?h("",!0):(d(),g(a(c),{key:0},{default:t(()=>[e(a(i),{class:"text-center",colspan:"10"},{default:t(()=>[Q]),_:1})]),_:1})),(d(!0),f(w,null,j(r.$page.props.invoices.data,(o,B)=>(d(),g(a(c),null,{default:t(()=>[e(a(i),null,{default:t(()=>[s(m(r.$page.props.invoices.from+B),1)]),_:2},1024),e(a(i),null,{default:t(()=>[s(m(o.student_name),1)]),_:2},1024),e(a(i),null,{default:t(()=>[e(a(U),{variant:""},{default:t(()=>[s("#"+m(o.invoice_number),1)]),_:2},1024)]),_:2},1024),e(a(i),null,{default:t(()=>[s(m(a($)(o.date_issued).format("DD MMM Y")),1)]),_:2},1024),e(a(i),null,{default:t(()=>[s(m(a($)(o.due_date).format("DD MMM Y")),1)]),_:2},1024),e(a(i),null,{default:t(()=>[s(m(o.amount),1)]),_:2},1024),e(a(i),{class:"text-center",onClick:F=>r.editInvoice(o.id)},{default:t(()=>[p("span",{class:x(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",[o.status_bg_color,o.status_text_color]])},m(o.status),3)]),_:2},1032,["onClick"]),e(a(i),{class:"text-center"},{default:t(()=>[r.$page.props.can.edit_fee_invoices?(d(),g(_,{key:0,variant:"outline",onClick:F=>r.editInvoice(o.id)},{default:t(()=>[s("Edit")]),_:2},1032,["onClick"])):h("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),e(L,{page_data:r.$page.props.invoices,params:r.params},null,8,["page_data","params"])]),_:1})],64)}}});export{Je as default};