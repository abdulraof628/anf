import{j as u,o as t,c as r,a as b,w as y,F as l,d as e,h as f,v,n as x,e as n,t as d,q as _,g as a}from"./app-ca7c252e.js";import w from"./Layout-87c936c2.js";import"./Authenticated-7dd4e5bf.js";import"./ApplicationLogo-44fdbb8b.js";import"./Button-c62d076b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-18ffab44.js";import"./perfect-scrollbar.esm-3c05f46e.js";import"./TimeAgo-9e31d12d.js";import"./moment-55cb88ed.js";import"./PencilIcon-174e88d6.js";import"./SearchIcon-a3cdbf80.js";import"./menu-a9855bf6.js";import"./keyboard-ca2dafe6.js";import"./use-resolve-button-type-40fbedfe.js";import"./transition-6f599973.js";const q={class:"flex-col w-full pt-4 px-4 space-y-3"},k={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},j=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Programme Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),C={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},M={class:"mb-4"},N=e("label",{for:"programme_name",class:"block text-sm text-gray-700 font-bold"},[a(" Programme Name "),e("span",{class:"text-red-500"},"*")],-1),R={class:"mt-1 flex rounded-md shadow-sm"},F={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},L=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Current Programme Levels & Fees"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),T={class:"shadow overflow-hidden border-b border-gray-200 rounded-t-sm rounded-b-none mt-3"},P={class:"min-w-full divide-y divide-gray-200"},V={class:"bg-blue-200"},S=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Level",-1),B=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Class Type",-1),O=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Material Fee",-1),$={class:"px-4 py-1 text-center border border-gray-400"},A={key:0},D=e("td",{colspan:"8",class:"py-4 text-center"},"No levels added.",-1),H=[D],z={else:"",class:"hover:bg-gray-200"},E={class:"px-4 py-2 text-center border border-gray-400"},I={class:"px-4 py-2 text-center border border-gray-400"},U={class:"px-4 py-2 text-center border border-gray-400"},G={key:0},J={class:"px-4 py-2 text-center border border-gray-400"},K={key:0},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},[a("Programme Levels & Fees ("),e("span",{class:"text-[12px] text-red-500"}," To Remove "),a(")")]),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),X={class:"shadow overflow-hidden border-b border-gray-200 rounded-t-sm rounded-b-none mt-3"},Y={class:"min-w-full divide-y divide-gray-200"},Z={class:"bg-blue-200"},ee=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Level",-1),te=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Class Type",-1),re=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Material Fee",-1),se={class:"px-4 py-1 text-center border border-gray-400"},oe={key:0},de=e("td",{colspan:"8",class:"py-4 text-center"},"No item to be removed.",-1),ae=[de],le={else:"",class:"hover:bg-gray-200"},ne={class:"px-4 py-2 text-center border border-gray-400"},_e={class:"px-4 py-2 text-center border border-gray-400"},ie={class:"px-4 py-2 text-center border border-gray-400"},me={key:0},ce={class:"px-4 py-2 text-center border border-gray-400"},pe={key:0},he={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},be=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},[a("Programme Levels & Fees ("),e("span",{class:"text-[12px] text-green-500"}," To Add "),a(")")]),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),ge={class:"shadow overflow-hidden border-b border-gray-200 rounded-t-sm rounded-b-none mt-3"},ue={class:"min-w-full divide-y divide-gray-200"},ye={class:"bg-blue-200"},fe=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Level",-1),ve=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Class Type",-1),xe=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Material Fee",-1),we={class:"px-4 py-1 text-center border border-gray-400"},qe={key:0},ke=e("td",{colspan:"8",class:"py-4 text-center"},"No levels added.",-1),je=[ke],Ce={else:"",class:"hover:bg-gray-200"},Me={class:"px-4 py-2 text-center border border-gray-400"},Ne={class:"px-4 py-2 text-center border border-gray-400"},Re={class:"px-4 py-2 text-center border border-gray-400"},Fe={key:0},Le={class:"px-4 py-2 text-center border border-gray-400"},Te={key:0},Pe={class:"bg-white rounded-lg shadow-xl p-4"},Ve={class:"flex space-x-5"},Se={props:{request_data:Object,created_by:String,notification_data:Object},data(){return{current_programme_info:[],class_types_detail:[],level:"",material_fee:"",class_type:"",fee:[],form:{notification_id:this.notification_data.id,programme_id:this.request_data.programme_id?this.request_data.programme_id:"",programme_name:this.request_data.programme_name?this.request_data.programme_name:"",programme_info:this.request_data.current_programme_levels?this.request_data.current_programme_levels:[],programme_level_to_add:this.request_data.programme_level_to_add?this.request_data.programme_level_to_add:[],programme_level_to_delete:this.request_data.programme_level_to_delete?this.request_data.programme_level_to_delete:[],created_by:this.created_by?this.created_by:""},record_matched:{programme_id:this.request_data.programme_id?this.request_data.programme_id:"",programme_name:this.request_data.programme_name?this.request_data.programme_name:""}}},mounted(){axios.get(route("get_programme_name",this.form.programme_id)).then(p=>{this.current_programme_info=p.data,this.record_matched.programme_name=this.request_data.programme_name==this.current_programme_info.programme_name})},methods:{approve(){this.$inertia.post(route("approve_programme_update"),this.form,{preserveScroll:!0})},reject(){this.$inertia.post(route("reject_programme_update"),this.form,{preserveScroll:!0})}}},Ye=Object.assign(Se,{__name:"Request",setup(p){return(o,c)=>{const g=u("Head");return t(),r(l,null,[b(g,{title:"Notifications"}),b(w,null,{default:y(()=>[e("div",q,[e("div",k,[j,e("div",C,[e("div",M,[N,e("div",R,[f(e("input",{type:"text",name:"programme_name",id:"programme_name",class:x(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.record_matched.programme_name?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":c[0]||(c[0]=s=>o.form.programme_name=s),autocomplete:"off"},null,2),[[v,o.form.programme_name]])])])])]),e("div",F,[L,e("div",T,[e("table",P,[e("thead",V,[e("tr",null,[S,B,O,(t(!0),r(l,null,n(this.request_data.class_type_details,s=>(t(),r("th",$,d(s.label),1))),256))])]),e("tbody",null,[o.form.programme_info.length?_("",!0):(t(),r("tr",A,H)),(t(!0),r(l,null,n(o.form.programme_info,(s,i)=>(t(),r("tr",z,[e("td",E,d(s.level),1),e("td",I,d(p.request_data.class_types[s.class_type_id].name),1),e("td",U,[s.material_fee!=null?(t(),r("span",G,"RM ")):_("",!0),a(d(s.material_fee),1)]),(t(!0),r(l,null,n(this.request_data.class_type_details,(m,h)=>(t(),r("td",J,[o.form.programme_info[i].fees[m.id]!=null?(t(),r("span",K,"RM ")):_("",!0),a(d(o.form.programme_info[i].fees[m.id]),1)]))),256))]))),256))])])])]),e("div",Q,[W,e("div",X,[e("table",Y,[e("thead",Z,[e("tr",null,[ee,te,re,(t(!0),r(l,null,n(this.request_data.class_type_details,s=>(t(),r("th",se,d(s.label),1))),256))])]),e("tbody",null,[o.form.programme_level_to_delete.length?_("",!0):(t(),r("tr",oe,ae)),(t(!0),r(l,null,n(o.form.programme_level_to_delete,(s,i)=>(t(),r("tr",le,[e("td",ne,d(s.level),1),e("td",_e,d(p.request_data.class_types[s.class_type_id].name),1),e("td",ie,[s.material_fee!=null?(t(),r("span",me,"RM ")):_("",!0),a(d(s.material_fee),1)]),(t(!0),r(l,null,n(this.request_data.class_type_details,(m,h)=>(t(),r("td",ce,[o.form.programme_level_to_delete[i].fees[m.id]!=null?(t(),r("span",pe,"RM ")):_("",!0),a(d(o.form.programme_level_to_delete[i].fees[m.id]),1)]))),256))]))),256))])])])]),e("div",he,[be,e("div",ge,[e("table",ue,[e("thead",ye,[e("tr",null,[fe,ve,xe,(t(!0),r(l,null,n(this.request_data.class_type_details,s=>(t(),r("th",we,d(s.label),1))),256))])]),e("tbody",null,[o.form.programme_level_to_add.length?_("",!0):(t(),r("tr",qe,je)),(t(!0),r(l,null,n(o.form.programme_level_to_add,(s,i)=>(t(),r("tr",Ce,[e("td",Me,d(s.level),1),e("td",Ne,d(p.request_data.class_types[s.class_type].name),1),e("td",Re,[s.material_fee!=null?(t(),r("span",Fe,"RM ")):_("",!0),a(d(s.material_fee),1)]),(t(!0),r(l,null,n(this.request_data.class_type_details,(m,h)=>(t(),r("td",Le,[o.form.programme_level_to_add[i].fees[m.id]!=null?(t(),r("span",Te,"RM ")):_("",!0),a(d(o.form.programme_level_to_add[i].fees[m.id]),1)]))),256))]))),256))])])])]),e("div",Pe,[e("div",Ve,[e("button",{type:"submit",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:col-start-2 sm:text-sm",onClick:c[1]||(c[1]=(...s)=>o.approve&&o.approve(...s))},"Approve"),e("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:col-start-1 sm:text-sm",onClick:c[2]||(c[2]=(...s)=>o.reject&&o.reject(...s))},"Reject")])])])]),_:1})],64)}}});export{Ye as default};
