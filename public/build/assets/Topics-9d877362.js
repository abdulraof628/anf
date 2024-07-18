import{o as c,c as l,a as s,u as w,w as i,F as _,H as b,L as x,d as e,g as r,q as p,e as k,t as h,h as f,v as u,n as g}from"./app-ca7c252e.js";import{B as C}from"./Authenticated-7dd4e5bf.js";import{B as a}from"./Button-c62d076b.js";import{r as T}from"./PencilIcon-174e88d6.js";import{r as $}from"./SearchIcon-a3cdbf80.js";import{r as B}from"./TrashIcon-df8fe82d.js";import{C as y}from"./ConfirmationModal-30892ff0.js";import"./ApplicationLogo-44fdbb8b.js";import"./XIcon-18ffab44.js";import"./perfect-scrollbar.esm-3c05f46e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-9e31d12d.js";import"./moment-55cb88ed.js";import"./transition-6f599973.js";import"./keyboard-ca2dafe6.js";const D={class:"py-4 px-4"},j={class:"grid grid-cols-2 gap-4"},N={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},O={class:"grid grid-cols-2 gap-4"},R={class:"space-y-2"},V={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},S={class:"min-w-full divide-y divide-gray-200"},A=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Topic"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),L={class:"bg-white divide-y divide-gray-200"},z={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),F=[E],I={class:"hover:bg-gray-200"},M={class:"px-6 py-4 whitespace-nowrap"},P={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Topic")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"topic_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},se={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Topic")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"topic_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ce={class:"mt-1 flex rounded-md shadow-sm"},le={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},pe={class:"flex justify-end"},me={components:{SearchIcon:$,TrashIcon:B,PencilIcon:T,Head:b,Link:x,ConfirmationModal:y},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",lesson_id:this.$page.props.lesson_id,topic_name:""},errors:{topic_name:!1}}},methods:{create(){this.form.topic_name="",this.show_create=!0,this.show_edit=!1},edit(d,t){this.form.id=d,this.form.topic_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.topic_name){this.errors.topic_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.topics.store"),this.form,{preserveState:!1})},update(){if(!this.form.topic_name){this.errors.topic_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.topics.update"),this.form,{preserveState:!1})},destroy(d){this.confirmationRoute="progress_report.settings.coding_robotics.topics.destroy",this.confirmationData=d,this.isOpen=!0},viewObjectives(d){this.$inertia.get(route("progress_report.settings.coding_robotics.objectives"),{level_id:this.$page.props.level_id,lesson_id:this.$page.props.lesson_id,topic_id:d})}}},De=Object.assign(me,{__name:"Topics",setup(d){return(t,n)=>(c(),l(_,null,[s(w(b),{title:"Progress Report"}),s(C,null,{header:i(()=>[]),default:i(()=>[e("div",D,[e("div",j,[e("div",N,[s(a,{buttonType:"gray",route:t.route("progress_report.settings.coding_robotics.lessons",{level_id:t.$page.props.level_id})},{default:i(()=>[r("Back")]),_:1},8,["route"]),s(a,{onClick:t.create},{default:i(()=>[r("New Topic")]),_:1},8,["onClick"])])]),e("div",O,[e("div",R,[e("div",V,[e("table",S,[A,e("tbody",L,[t.$page.props.topics.length?p("",!0):(c(),l("tr",z,F)),(c(!0),l(_,null,k(t.$page.props.topics,(o,v)=>(c(),l("tr",I,[e("td",M,[e("div",P,h(++v),1)]),e("td",H,[e("div",U,[e("span",q,h(o.name),1)])]),e("td",G,[e("div",J,[s(a,{buttonType:"warning",onClick:m=>t.edit(o.id,o.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),s(a,{buttonType:"danger",onClick:m=>t.destroy(o.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"]),s(a,{buttonType:"blue",onClick:m=>t.viewObjectives(o.id)},{default:i(()=>[r("View Objectives")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(c(),l("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"topic_name",id:"topic_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.topic_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[0]||(n[0]=o=>t.form.topic_name=o),autocomplete:"off"},null,2),[[u,t.form.topic_name]])])])])]),e("div",te,[e("div",oe,[s(a,{onClick:t.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):p("",!0),t.show_edit?(c(),l("div",se,[e("div",ie,[re,e("div",ae,[e("div",de,[ne,e("div",ce,[f(e("input",{type:"text",name:"topic_name",id:"topic_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.topic_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[1]||(n[1]=o=>t.form.topic_name=o),autocomplete:"off"},null,2),[[u,t.form.topic_name]])])])])]),e("div",le,[e("div",pe,[s(a,{onClick:t.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):p("",!0)])]),s(y,{show:t.isOpen,onClose:n[2]||(n[2]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Topic",confirmationText:"Are you sure want to delete this topic? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{De as default};
