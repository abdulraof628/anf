import{B as M}from"./Authenticated-ca001e1a.js";import{H as C,L as T}from"./@inertiajs-dde9cc4c.js";import{_ as N}from"./Card-a68fd03a.js";import{_ as A}from"./index-aeeab55b.js";import{_ as V,d as D,e as n,c as p,a as S,b as g}from"./TableRow-66b04c97.js";import{_ as H}from"./TableCaption-749aad7a.js";import{P as L}from"./Pagination-c377bdcb.js";import{h as w}from"./moment-a9aaa855.js";import{a as U}from"./@radix-icons-4975f794.js";import{F as Y}from"./lucide-vue-next-97f66d5e.js";import{y as u,x as t,u as r,Q as a,F as y,be as f,bf as z,t as d,z as m,A as P,W as l,K as i,C as _,v as b,J as j,q as x}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f046bc35.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-cbc1304f.js";const E={class:"flex items-center justify-between"},R={class:"flex space-x-2"},q={class:"relative"},J={key:0,class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-2"},K={key:0},O={class:""},Q={components:{Head:C,Link:T,Table:V,TableBody:D,TableCaption:H,TableCell:n,TableHead:p,TableHeader:S,TableRow:g},data(){return{show_filters:!1,open_modal:!1,params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?parseInt(this.$page.props.filter.centre_id):"",programme_id:this.$page.props.filter.programme_id?parseInt(this.$page.props.filter.programme_id):"",date:this.$page.props.filter.date?this.$page.props.filter.date:{month:new Date().getMonth(),year:new Date().getFullYear()}},invoice_data:{parent_name:"",parent_address:"",invoice_number:"",invoice_items:[],date_issued:"",due_date:"",total_amount:""}}},methods:{editInvoice(v){this.$inertia.get(route("fee.invoices.edit"),{invoice_id:v,params:this.params},{preserveState:!1})},search(){this.$inertia.get(route("fee.invoices"),this.params,{replace:!0,preserveState:!0})},showFilters(){this.show_filters=!this.show_filters}}},Je=Object.assign(Q,{__name:"Index",setup(v){return(s,e)=>{const B=f("Input"),c=f("Button"),$=f("ComboBox"),I=f("Datepicker"),F=z("debounce");return d(),u(y,null,[t(r(C),{title:"Fee Invoices"}),t(M,null,{header:a(()=>e[6]||(e[6]=[])),default:a(()=>[m("div",E,[m("div",R,[m("div",q,[t(r(U),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),P(t(B,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:s.params.search,"onUpdate:modelValue":e[0]||(e[0]=o=>s.params.search=o)},null,8,["modelValue"]),[[F,s.search,"800ms"]])]),t(c,{class:"border border-slate-700 border-dashed bg-white text-slate-800 hover:bg-slate-50",onClick:e[1]||(e[1]=o=>s.showFilters())},{default:a(()=>[t(r(Y),{class:"h-4 w-4"}),e[7]||(e[7]=m("span",{class:"ml-1 hidden sm:block"},"Filters",-1))]),_:1})])]),s.show_filters?(d(),u("div",J,[t($,{items:s.$page.props.allowed_centres,"label-property":"label","value-property":"ID",onSelect:s.search,modelValue:s.params.centre_id,"onUpdate:modelValue":e[2]||(e[2]=o=>s.params.centre_id=o),"select-placeholder":"Centres","search-placeholder":"Search centre..."},null,8,["items","onSelect","modelValue"]),t($,{items:s.$page.props.programmes,"label-property":"name","value-property":"id",onSelect:s.search,modelValue:s.params.programme_id,"onUpdate:modelValue":e[3]||(e[3]=o=>s.params.programme_id=o),canClear:!0,"select-placeholder":"Programmes","search-placeholder":"Search programme..."},{label:a(({item:o})=>[l(i(o.name)+" ("+i(o.country_name)+") ",1)]),"label-content":a(({selectedItem:o,selectedItems:h,multiple:k})=>[o?(d(),u("span",K,i(o.name)+" ("+i(o.country_name)+")",1)):_("",!0)]),_:1},8,["items","onSelect","modelValue"]),m("div",null,[t(I,{modelValue:s.params.date,"onUpdate:modelValue":e[4]||(e[4]=o=>s.params.date=o),mode:"month",format:"MMM Y",onSelect:s.search},null,8,["modelValue","onSelect"])]),m("div",O,[t(c,{onClick:e[5]||(e[5]=o=>s.$inertia.get(s.route("fee.invoices")))},{default:a(()=>e[8]||(e[8]=[l("Clear Search")])),_:1})])])):_("",!0),t(N,null,{content:a(()=>[t(r(V),null,{default:a(()=>[t(r(S),{class:"bg-gray-100"},{default:a(()=>[t(r(g),null,{default:a(()=>[t(r(p),null,{default:a(()=>e[9]||(e[9]=[l("#")])),_:1}),t(r(p),null,{default:a(()=>e[10]||(e[10]=[l("Student Name")])),_:1}),t(r(p),null,{default:a(()=>e[11]||(e[11]=[l("Invoice No.")])),_:1}),t(r(p),null,{default:a(()=>e[12]||(e[12]=[l("Date Issued")])),_:1}),t(r(p),null,{default:a(()=>e[13]||(e[13]=[l("Due Date")])),_:1}),t(r(p),null,{default:a(()=>e[14]||(e[14]=[l("Amount")])),_:1}),t(r(p),{class:"text-center"},{default:a(()=>e[15]||(e[15]=[l("Status")])),_:1}),t(r(p),{class:"text-center"},{default:a(()=>e[16]||(e[16]=[l("Action")])),_:1})]),_:1})]),_:1}),t(r(D),null,{default:a(()=>[s.$page.props.invoices.data.length?_("",!0):(d(),b(r(g),{key:0},{default:a(()=>[t(r(n),{class:"text-center",colspan:"10"},{default:a(()=>e[17]||(e[17]=[m("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(d(!0),u(y,null,j(s.$page.props.invoices.data,(o,h)=>(d(),b(r(g),null,{default:a(()=>[t(r(n),null,{default:a(()=>[l(i(s.$page.props.invoices.from+h),1)]),_:2},1024),t(r(n),null,{default:a(()=>[l(i(o.student_name),1)]),_:2},1024),t(r(n),null,{default:a(()=>[t(r(A),{variant:""},{default:a(()=>[l("#"+i(o.invoice_number),1)]),_:2},1024)]),_:2},1024),t(r(n),null,{default:a(()=>[l(i(r(w)(o.date_issued).format("DD MMM Y")),1)]),_:2},1024),t(r(n),null,{default:a(()=>[l(i(r(w)(o.due_date).format("DD MMM Y")),1)]),_:2},1024),t(r(n),null,{default:a(()=>[l(i(o.amount),1)]),_:2},1024),t(r(n),{class:"text-center",onClick:k=>s.editInvoice(o.id)},{default:a(()=>[m("span",{class:x(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",[o.status_bg_color,o.status_text_color]])},i(o.status),3)]),_:2},1032,["onClick"]),t(r(n),{class:"text-center"},{default:a(()=>[s.$page.props.can.edit_fee_invoices?(d(),b(c,{key:0,variant:"outline",onClick:k=>s.editInvoice(o.id)},{default:a(()=>e[18]||(e[18]=[l("Edit")])),_:2},1032,["onClick"])):_("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(L,{page_data:s.$page.props.invoices,params:s.params},null,8,["page_data","params"])]),_:1})],64)}}});export{Je as default};
