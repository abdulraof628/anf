import{r as k,o as i,c as d,a as r,u as f,w as a,F as v,H as C,d as e,g as p,p as h,h as $,v as M,e as y,t as n,n as H,q as _}from"./app-71252861.js";import{B as T}from"./Authenticated-27d78ae6.js";import{B as c}from"./Button-5b3f2f5d.js";import{M as w}from"./Modal-fc81ceee.js";import{C as B}from"./ConfirmationModal-0191c481.js";import{h as b}from"./moment-a9aaa855.js";import z from"./Invoice-94809c66.js";import D from"./PackingSlip-08ccb2ea.js";import{P as x}from"./Pagination-a52bc486.js";import"./ApplicationLogo-15de067f.js";import"./XIcon-ef920fb5.js";import"./toggle-676d19a9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VueFinalModal.esm-f0dcc141.js";import"./transition-f8a2110d.js";import"./keyboard-4ce3cc56.js";const L={class:"py-4 px-4"},j={key:0,class:"flex justify-end mb-3"},V=e("hr",{class:"my-3 border border-dashed border-gray-400"},null,-1),S={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-3"},O={class:"relative w-full"},P=e("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),N={class:"overflow-x-auto"},A={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},U={class:"min-w-full divide-y divide-gray-200"},R=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-6/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Date"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Attachments"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Shipment Tracking"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"Action")])],-1),E={class:"bg-white divide-y divide-gray-200"},F={key:0},I=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),G=[I],Y={class:""},q={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm text-gray-700"},Z={class:"px-6 py-4 whitespace-nowrap"},K={class:"text-sm font-medium text-gray-900"},Q={class:"text-sm font-medium text-slate-500"},W={class:"px-6 py-4 whitespace-nowrap"},X={class:"text-sm font-medium text-gray-900"},ee={class:"px-6 py-4 whitespace-nowrap space-x-2"},te=["onClick"],se=["onClick"],oe={class:"px-6 py-4 whitespace-nowrap"},ae={key:0,class:"flex flex-col text-sm font-medium text-gray-900"},ie={class:"font-bold text-gray-600"},re={class:"font-semibold text-indigo-700"},ne={key:1,class:""},le={class:"px-6 py-4 whitespace-nowrap"},de={class:"text-sm font-medium text-gray-900"},ce=["onClick"],pe={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},he={class:"flex space-x-2 justify-center"},ge={class:"p-4 md:p-6 overflow-y-auto no-scrollbar"},ue={class:"bg-gray-50"},_e={class:"container"},me={class:"flex flex-col text-gray-50"},fe={key:0,class:"flex md:px-4"},ve=e("h3",{class:"font-semibold text-md italic mb-1 text-slate-700"},"Sorry, no status has been added right now.",-1),we=[ve],ye={class:"flex space-x-2 md:space-x-4"},be=e("div",{class:"relative"},[e("div",{class:"h-full w-6 flex items-center justify-center"},[e("div",{class:"h-full w-1 bg-green-600 pointer-events-none"})]),e("div",{class:"w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-600 shadow text-center"},[e("i",{class:"fas fa-check-circle text-white"})])],-1),xe={class:"bg-green-600 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full"},ke={class:"font-semibold text-sm mb-1"},Ce={class:"leading-tight text-xs text-justify w-full"},$e={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},Me={class:"flex items-center justify-between py-3 px-4 border-b rounded-t font-semibold"},He=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Invoice ",-1),Te=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Be=[Te],ze={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},De=e("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),e("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})],-1),Le=e("span",null,"Print",-1),je={class:"flex items-center justify-between py-3 px-4 border-b rounded-t font-semibold"},Ve=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Packing Slip ",-1),Se=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Oe=[Se],Pe={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},Ne=e("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),e("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})],-1),Ae=e("span",null,"Print",-1),Ue={components:{Pagination:x},data(){return{show_invoice:!1,show_packing_slip:!1,show_delete_order:!1,confirmation_data:"",show_tracking_status:!1,tracking_status:[],params:{search:this.$page.props.filter.search?this.$page.props.filter.search:""},invoice_data:[],packing_slip_data:[],generating:[]}},methods:{viewTrackingStatus(l){this.tracking_status=JSON.parse(l),this.show_tracking_status=!0},editOrder(l){this.$inertia.get(route("orders.edit"),{order_id:l})},deleteOrder(l){this.confirmation_data=l,this.show_delete_order=!0},viewInvoice(l,t){this.generating[t].invoice||(this.generating[t].invoice=!0,axios.get(route("orders.invoice.generate"),{responseType:"blob",params:{order_id:l}}).then(o=>{const g=new Blob([o.data],{type:"application/pdf"}),s=URL.createObjectURL(g);window.open(s,"_blank"),this.generating[t].invoice=!1}).catch(o=>{console.error("Error fetching PDF:",o),this.generating[t].invoice=!1}))},viewPackingSlip(l,t){this.generating[t].packing_slip||(this.generating[t].packing_slip=!0,axios.get(route("orders.packing_slip.generate"),{responseType:"blob",params:{order_id:l}}).then(o=>{const g=new Blob([o.data],{type:"application/pdf"}),s=URL.createObjectURL(g);window.open(s,"_blank"),this.generating[t].packing_slip=!1}).catch(o=>{console.error("Error fetching PDF:",o),this.generating[t].packing_slip=!1}))},search(){this.$inertia.get(this.route("orders"),this.params,{replace:!0,preserveState:!0})}},created(){this.$page.props.orders.data.forEach(l=>{this.generating.push({invoice:!1,packing_slip:!1})})}},ot=Object.assign(Ue,{__name:"Index",setup(l){return(t,o)=>{const g=k("debounce");return i(),d(v,null,[r(f(C),{title:"Orders"}),r(T,null,{header:a(()=>[]),default:a(()=>[e("div",L,[t.$page.props.can.create_orders?(i(),d("div",j,[r(c,{route:t.route("orders.create")},{default:a(()=>[p("Add New Order")]),_:1},8,["route"])])):h("",!0),V,e("div",S,[e("div",O,[P,$(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":o[0]||(o[0]=s=>t.params.search=s)},null,512),[[g,t.search,"800ms"],[M,t.params.search]])])]),e("div",N,[e("div",A,[e("table",U,[R,e("tbody",E,[!t.$page.props.orders.data||!t.$page.props.orders.data.length?(i(),d("tr",F,G)):(i(!0),d(v,{key:1},y(t.$page.props.orders.data,(s,u)=>(i(),d("tr",Y,[e("td",q,[e("div",J,n(u+1),1)]),e("td",Z,[e("div",K,n(s.parent_full_name),1),e("div",Q,n(s.parent_calling_code)+n(s.parent_contact),1)]),e("td",W,[e("div",X,n(f(b)(s.created_at).format("DD/MM/Y")),1)]),e("td",ee,[e("span",{onClick:m=>t.viewInvoice(s.id,u),class:"font-semibold border border-blue-600 bg-blue-100 hover:bg-blue-200 text-blue-700 whitespace-nowrap rounded px-2.5 py-1 text-sm cursor-pointer"},n(t.generating[u].invoice?"Generating...":"Invoice"),9,te),e("span",{onClick:m=>t.viewPackingSlip(s.id,u),class:"font-semibold border border-blue-600 bg-blue-100 hover:bg-blue-200 text-blue-700 whitespace-nowrap rounded px-2.5 py-1 text-sm cursor-pointer"},n(t.generating[u].packing_slip?"Generating...":"Packing Slip"),9,se)]),e("td",oe,[s.shipping_provider_name?(i(),d("div",ae,[e("small",ie,n(s.shipping_provider_name),1),e("span",re,n(s.tracking_number),1)])):(i(),d("div",ne,"-"))]),e("td",le,[e("div",de,[e("span",{onClick:m=>t.viewTrackingStatus(s.tracking_status),class:H(["border whitespace-nowrap rounded px-2.5 py-1 text-sm cursor-pointer",[s.class_name]])},n(s.status_name),11,ce)])]),e("td",pe,[e("div",he,[t.$page.props.can.edit_orders?(i(),_(c,{key:0,onClick:m=>t.editOrder(s.id),buttonType:"warning"},{default:a(()=>[p("Edit")]),_:2},1032,["onClick"])):h("",!0),t.$page.props.can.delete_orders?(i(),_(c,{key:1,onClick:m=>t.deleteOrder(s.id),buttonType:"danger"},{default:a(()=>[p("Delete")]),_:2},1032,["onClick"])):h("",!0)])])]))),256))])]),t.$page.props.orders.data.length?(i(),_(x,{key:0,page_data:t.$page.props.orders,params:t.params},null,8,["page_data","params"])):h("",!0)])]),r(B,{show:t.show_delete_order,onClose:o[1]||(o[1]=s=>t.show_delete_order=!1),confirmationAlert:"danger",confirmationTitle:"Delete Order",confirmationText:"Are you sure want to delete this order?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:"orders.destroy",confirmationData:t.confirmation_data},null,8,["show","confirmationData"])]),r(w,{showModal:t.show_tracking_status,modalType:"sm",onHideModal:o[3]||(o[3]=s=>t.show_tracking_status=!1)},{content:a(()=>[e("div",ge,[e("body",ue,[e("div",_e,[e("div",me,[!t.tracking_status||!t.tracking_status.length?(i(),d("div",fe,we)):(i(!0),d(v,{key:1},y(t.tracking_status,s=>(i(),d("div",ye,[be,e("div",xe,[e("h3",ke,n(s.name),1),e("p",Ce,n(f(b)(s.datetime).format("DD/MM/Y HH:mm A")),1)])]))),256))])])])])]),footer:a(()=>[e("div",$e,[r(c,{buttonType:"gray",onClick:o[2]||(o[2]=s=>t.show_tracking_status=!1)},{default:a(()=>[p("Close")]),_:1})])]),_:1},8,["showModal"]),t.show_invoice?(i(),_(w,{key:0,showModal:t.show_invoice,modalType:"md",onHideModal:o[6]||(o[6]=s=>t.show_invoice=!1)},{header:a(()=>[e("div",Me,[He,e("button",{type:"button",onClick:o[4]||(o[4]=s=>t.show_invoice=!1),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},Be)])]),content:a(()=>[r(z,{invoice_data:t.invoice_data},null,8,["invoice_data"])]),footer:a(()=>[e("div",ze,[r(c,{buttonType:"blue",class:"px-4 py-2 space-x-2",onClick:t.print},{default:a(()=>[De,Le]),_:1},8,["onClick"]),r(c,{buttonType:"gray",onClick:o[5]||(o[5]=s=>t.show_invoice=!1)},{default:a(()=>[p("Close")]),_:1})])]),_:1},8,["showModal"])):h("",!0),t.show_packing_slip?(i(),_(w,{key:1,showModal:t.show_packing_slip,modalType:"md",onHideModal:o[9]||(o[9]=s=>t.show_packing_slip=!1)},{header:a(()=>[e("div",je,[Ve,e("button",{type:"button",onClick:o[7]||(o[7]=s=>t.show_packing_slip=!1),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},Oe)])]),content:a(()=>[r(D,{packing_slip_data:t.packing_slip_data},null,8,["packing_slip_data"])]),footer:a(()=>[e("div",Pe,[r(c,{buttonType:"blue",class:"px-4 py-2 space-x-2",onClick:t.print},{default:a(()=>[Ne,Ae]),_:1},8,["onClick"]),r(c,{buttonType:"gray",onClick:o[8]||(o[8]=s=>t.show_packing_slip=!1)},{default:a(()=>[p("Close")]),_:1})])]),_:1},8,["showModal"])):h("",!0)]),_:1})],64)}}});export{ot as default};
