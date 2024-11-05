import{B as L}from"./Authenticated-ca001e1a.js";import{h as P}from"./moment-a9aaa855.js";import{H as S,L as U}from"./@inertiajs-dde9cc4c.js";import{P as B}from"./Pagination-c377bdcb.js";import{_ as D,d as T,e as m,c as f,a as N,b as k}from"./TableRow-66b04c97.js";import{_ as A}from"./TableCaption-749aad7a.js";import{_ as I}from"./Card-a68fd03a.js";import{_ as O}from"./DeleteConfirmation-8563499e.js";import{_ as v}from"./index-aeeab55b.js";import{a as R}from"./@radix-icons-4975f794.js";import{F as j,C as E,D as y}from"./lucide-vue-next-97f66d5e.js";import{y as w,x as a,u as r,Q as s,F as C,be as $,bf as H,t as l,z as p,A as z,v as g,C as h,W as i,J as G,K as d}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f046bc35.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-cbc1304f.js";const J={class:"flex items-center justify-between"},M={class:"flex space-x-2"},K={class:"relative"},Q={key:0,class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-2"},W={class:"flex flex-col"},Y={class:"font-medium"},q={class:"font-medium text-muted-foreground"},X={class:"flex items center justify-center space-x-2"},Z={components:{Pagination:B,DeleteConfirmation:O,Head:S,Link:U,Table:D,TableBody:T,TableCaption:A,TableCell:m,TableHead:f,TableHeader:N,TableRow:k},data(){return{show_filters:!1,show_invoice:!1,show_packing_slip:!1,show_delete_order:!1,confirmation_data:"",show_tracking_status:!1,tracking_status:[],confirmation:{is_open:!1,route_name:"",id:""},params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",status:this.$page.props.filter.status?this.$page.props.filter.status:""},invoice_data:[],packing_slip_data:[],generating:[]}},methods:{viewTrackingStatus(n){this.tracking_status=JSON.parse(n),this.show_tracking_status=!0},editOrder(n){this.$inertia.get(route("orders.edit"),{order_id:n})},deleteOrder(n){this.confirmation.route_name="orders.destroy",this.confirmation.id=n,this.confirmation.is_open=!0},viewInvoice(n,t){this.generating[t].invoice||(this.generating[t].invoice=!0,axios.get(route("orders.invoice.generate"),{responseType:"blob",params:{order_id:n}}).then(e=>{const c=new Blob([e.data],{type:"application/pdf"}),u=URL.createObjectURL(c);window.open(u,"_blank"),this.generating[t].invoice=!1}).catch(e=>{console.error("Error fetching PDF:",e),this.generating[t].invoice=!1}))},viewPackingSlip(n,t){this.generating[t].packing_slip||(this.generating[t].packing_slip=!0,axios.get(route("orders.packing_slip.generate"),{responseType:"blob",params:{order_id:n}}).then(e=>{const c=new Blob([e.data],{type:"application/pdf"}),u=URL.createObjectURL(c);window.open(u,"_blank"),this.generating[t].packing_slip=!1}).catch(e=>{console.error("Error fetching PDF:",e),this.generating[t].packing_slip=!1}))},showFilters(){this.show_filters=!this.show_filters},search(){this.$inertia.get(this.route("orders"),this.params,{replace:!0,preserveState:!0})}},created(){this.$page.props.orders.data.forEach(n=>{this.generating.push({invoice:!1,packing_slip:!1})})}},qe=Object.assign(Z,{__name:"Index",setup(n){return(t,e)=>{const c=$("Input"),u=$("Button"),F=$("ComboBox"),V=H("debounce");return l(),w(C,null,[a(r(S),{title:"Orders"}),a(L,null,{header:s(()=>e[5]||(e[5]=[])),default:s(()=>[p("div",J,[p("div",M,[p("div",K,[a(r(R),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),z(a(c,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:t.params.search,"onUpdate:modelValue":e[0]||(e[0]=o=>t.params.search=o)},null,8,["modelValue"]),[[V,t.search,"800ms"]])]),a(u,{class:"border border-slate-700 border-dashed bg-white text-slate-800 hover:bg-slate-50",onClick:e[1]||(e[1]=o=>t.showFilters())},{default:s(()=>[a(r(j),{class:"h-4 w-4"}),e[6]||(e[6]=p("span",{class:"ml-1 hidden sm:block"},"Filters",-1))]),_:1})]),t.$page.props.can.create_orders?(l(),g(u,{key:0,onClick:e[2]||(e[2]=o=>t.$inertia.get(t.route("orders.create")))},{default:s(()=>[a(r(E),{class:"h-4 w-4"}),e[7]||(e[7]=p("span",{class:"ml-1 hidden sm:block"},"New Order",-1))]),_:1})):h("",!0)]),t.show_filters?(l(),w("div",Q,[a(F,{items:t.$page.props.status,"label-property":"name","value-property":"id",onSelect:t.search,modelValue:t.params.status,"onUpdate:modelValue":e[3]||(e[3]=o=>t.params.status=o),"select-placeholder":"Status","can-clear":"true","search-placeholder":"Search status..."},null,8,["items","onSelect","modelValue"])])):h("",!0),a(I,null,{content:s(()=>[a(r(D),null,{default:s(()=>[a(r(N),{class:"bg-gray-100"},{default:s(()=>[a(r(k),null,{default:s(()=>[a(r(f),null,{default:s(()=>e[8]||(e[8]=[i("#")])),_:1}),a(r(f),null,{default:s(()=>e[9]||(e[9]=[i("Name")])),_:1}),a(r(f),null,{default:s(()=>e[10]||(e[10]=[i("Date")])),_:1}),a(r(f),null,{default:s(()=>e[11]||(e[11]=[i("Attachments")])),_:1}),a(r(f),null,{default:s(()=>e[12]||(e[12]=[i("Shipment Tracking")])),_:1}),a(r(f),{class:"text-center"},{default:s(()=>e[13]||(e[13]=[i("Status")])),_:1}),a(r(f),{class:"text-center"},{default:s(()=>e[14]||(e[14]=[i("Action")])),_:1})]),_:1})]),_:1}),a(r(T),null,{default:s(()=>[t.$page.props.orders.data.length?h("",!0):(l(),g(r(k),{key:0},{default:s(()=>[a(r(m),{class:"text-center",colspan:"10"},{default:s(()=>e[15]||(e[15]=[p("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(l(!0),w(C,null,G(t.$page.props.orders.data,(o,_)=>(l(),g(r(k),null,{default:s(()=>[a(r(m),null,{default:s(()=>[i(d(t.$page.props.orders.from+_),1)]),_:2},1024),a(r(m),null,{default:s(()=>[p("div",W,[p("span",Y,d(o.parent_full_name),1),p("small",q,d(o.parent_calling_code)+d(o.parent_contact),1)])]),_:2},1024),a(r(m),null,{default:s(()=>[i(d(r(P)(o.created_at).format("DD/MM/Y")),1)]),_:2},1024),a(r(m),{class:"space-x-1"},{default:s(()=>[a(r(v),{variant:"outline",class:"px-3 py-1 hover:bg-slate-900 hover:text-white",onClick:b=>t.viewInvoice(o.id,_)},{default:s(()=>[a(r(y),{class:"h-3 w-3 mr-2"}),i(d(t.generating[_].invoice?"Generating...":"Invoice"),1)]),_:2},1032,["onClick"]),a(r(v),{variant:"outline",class:"px-3 py-1 hover:bg-slate-900 hover:text-white",onClick:b=>t.viewPackingSlip(o.id,_)},{default:s(()=>[a(r(y),{class:"h-3 w-3 mr-2"}),i(d(t.generating[_].packing_slip?"Generating...":"Packing Slip"),1)]),_:2},1032,["onClick"])]),_:2},1024),a(r(m),null,{default:s(()=>[o.shipping_provider_name?(l(),g(r(v),{key:0,variant:"secondary"},{default:s(()=>[i(d(o.shipping_provider_name)+" - "+d(o.tracking_number),1)]),_:2},1024)):(l(),g(r(v),{key:1,variant:"secondary"},{default:s(()=>e[16]||(e[16]=[i("No Tracking Available")])),_:1}))]),_:2},1024),a(r(m),{class:"text-center"},{default:s(()=>[a(r(v),null,{default:s(()=>[i(d(o.status_name),1)]),_:2},1024)]),_:2},1024),a(r(m),{class:"text-center"},{default:s(()=>[p("div",X,[t.$page.props.can.edit_orders?(l(),g(u,{key:0,variant:"outline",onClick:b=>t.editOrder(o.id)},{default:s(()=>e[17]||(e[17]=[i("Edit")])),_:2},1032,["onClick"])):h("",!0),t.$page.props.can.delete_orders?(l(),g(u,{key:1,variant:"destructive",onClick:b=>t.deleteOrder(o.id)},{default:s(()=>e[18]||(e[18]=[i("Delete")])),_:2},1032,["onClick"])):h("",!0)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),a(B,{page_data:t.$page.props.orders,params:t.params},null,8,["page_data","params"]),a(O,{open:t.confirmation.is_open,onClose:e[4]||(e[4]=o=>t.confirmation.is_open=!1),routeName:t.confirmation.route_name,id:t.confirmation.id},{title:s(()=>e[19]||(e[19]=[i("Delete Order")])),description:s(()=>e[20]||(e[20]=[i("Are you sure want to delete this order?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{qe as default};
