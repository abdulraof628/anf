import{o as c,c as l,a as s,u as w,w as i,F as _,H as g,L as j,d as e,g as r,q as p,e as x,t as h,h as f,v as b,n as u}from"./app-101444dd.js";import{B as k}from"./Authenticated-ea2248ed.js";import{B as a}from"./Button-71468147.js";import{r as C}from"./PencilIcon-b598c6d8.js";import{r as $}from"./SearchIcon-872e9e3a.js";import{r as O}from"./TrashIcon-e0c1e8c7.js";import{C as v}from"./ConfirmationModal-7f883f6a.js";import"./ApplicationLogo-8115ae4b.js";import"./XIcon-4c26867b.js";import"./perfect-scrollbar.esm-cd9c85a5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-beae56c4.js";import"./moment-55cb88ed.js";import"./transition-c8c23bf2.js";import"./keyboard-e15964ef.js";const B={class:"py-4 px-4"},D={class:"grid grid-cols-2 gap-4"},T={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},N={class:"grid grid-cols-2 gap-4"},A={class:"space-y-2"},R={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},V={class:"min-w-full divide-y divide-gray-200"},P=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Objective"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),S={class:"bg-white divide-y divide-gray-200"},L={key:0},z=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),E=[z],F={class:"hover:bg-gray-200"},I={class:"px-6 py-4 whitespace-nowrap"},M={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Objective")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"objective_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},se={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Objective")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"objective_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ce={class:"mt-1 flex rounded-md shadow-sm"},le={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},pe={class:"flex justify-end"},me={components:{SearchIcon:$,TrashIcon:O,PencilIcon:C,Head:g,Link:j,ConfirmationModal:v},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",topic_id:this.$page.props.topic_id,objective_name:""},errors:{objective_name:!1}}},methods:{create(){this.form.objective_name="",this.show_create=!0,this.show_edit=!1},edit(d,t){this.form.id=d,this.form.objective_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.objectives.store"),this.form,{preserveState:!1})},update(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.objectives.update"),this.form,{preserveState:!1})},destroy(d){this.confirmationRoute="progress_report.settings.coding_robotics.objectives.destroy",this.confirmationData=d,this.isOpen=!0},viewActivitiesProcedures(d){this.$inertia.get(route("progress_report.settings.coding_robotics.activities_procedures"),{level_id:this.$page.props.level_id,lesson_id:this.$page.props.lesson_id,topic_id:this.$page.props.topic_id,objective_id:d})}}},Be=Object.assign(me,{__name:"Objectives",setup(d){return(t,n)=>(c(),l(_,null,[s(w(g),{title:"Progress Report"}),s(k,null,{header:i(()=>[]),default:i(()=>[e("div",B,[e("div",D,[e("div",T,[s(a,{buttonType:"gray",route:t.route("progress_report.settings.coding_robotics.topics",{level_id:t.$page.props.level_id,lesson_id:t.$page.props.lesson_id})},{default:i(()=>[r("Back")]),_:1},8,["route"]),s(a,{onClick:t.create},{default:i(()=>[r("New Objective")]),_:1},8,["onClick"])])]),e("div",N,[e("div",A,[e("div",R,[e("table",V,[P,e("tbody",S,[t.$page.props.objectives.length?p("",!0):(c(),l("tr",L,E)),(c(!0),l(_,null,x(t.$page.props.objectives,(o,y)=>(c(),l("tr",F,[e("td",I,[e("div",M,h(++y),1)]),e("td",H,[e("div",U,[e("span",q,h(o.name),1)])]),e("td",G,[e("div",J,[s(a,{buttonType:"warning",onClick:m=>t.edit(o.id,o.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),s(a,{buttonType:"danger",onClick:m=>t.destroy(o.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"]),s(a,{buttonType:"blue",onClick:m=>t.viewActivitiesProcedures(o.id)},{default:i(()=>[r("View Activities & Procedures")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(c(),l("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"objective_name",id:"objective_name",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.objective_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[0]||(n[0]=o=>t.form.objective_name=o),autocomplete:"off"},null,2),[[b,t.form.objective_name]])])])])]),e("div",te,[e("div",oe,[s(a,{onClick:t.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):p("",!0),t.show_edit?(c(),l("div",se,[e("div",ie,[re,e("div",ae,[e("div",de,[ne,e("div",ce,[f(e("input",{type:"text",name:"objective_name",id:"objective_name",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.objective_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[1]||(n[1]=o=>t.form.objective_name=o),autocomplete:"off"},null,2),[[b,t.form.objective_name]])])])])]),e("div",le,[e("div",pe,[s(a,{onClick:t.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):p("",!0)])]),s(v,{show:t.isOpen,onClose:n[2]||(n[2]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Objective",confirmationText:"Are you sure want to delete this objective? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{Be as default};
