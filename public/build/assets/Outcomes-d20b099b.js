<<<<<<< HEAD:public/build/assets/Outcomes-d20b099b.js
import{o as c,c as l,a as s,u as w,w as i,F as u,H as b,L as x,d as e,g as r,p as m,e as k,t as _,h,v as f,n as g}from"./app-cc118ad9.js";import{B as $}from"./Authenticated-aaf377c9.js";import{B as a}from"./Button-a2f8a38c.js";import{r as C}from"./PencilIcon-9be766e0.js";import{r as O}from"./SearchIcon-f1ba37c7.js";import{r as B}from"./TrashIcon-37d0d82b.js";import{C as y}from"./ConfirmationModal-7de4f930.js";import"./ApplicationLogo-82ac16a9.js";import"./XIcon-436032b9.js";import"./vue3-perfect-scrollbar-8bd029cf.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-eb0ef52b.js";import"./keyboard-8d51580a.js";const D={class:"py-4 px-4"},T={class:"grid grid-cols-2 gap-4"},j={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},N={class:"grid grid-cols-2 gap-4"},R={class:"space-y-2"},V={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},S={class:"min-w-full divide-y divide-gray-200"},A=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Outcome"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),L={class:"bg-white divide-y divide-gray-200"},z={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),F=[E],I={class:"hover:bg-gray-200"},M={class:"px-6 py-4 whitespace-nowrap"},P={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Outcome")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"outcome_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},se={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Outcome")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"outcome_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ce={class:"mt-1 flex rounded-md shadow-sm"},le={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},me={class:"flex justify-end"},pe={components:{SearchIcon:O,TrashIcon:B,PencilIcon:C,Head:b,Link:x,ConfirmationModal:y},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",activity_id:this.$page.props.activity_id,outcome_name:""},errors:{outcome_name:!1}}},methods:{create(){this.form.outcome_name="",this.show_create=!0,this.show_edit=!1},edit(d,t){this.form.id=d,this.form.outcome_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.outcome_name){this.errors.outcome_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.outcomes.store"),this.form,{preserveState:!1})},update(){if(!this.form.outcome_name){this.errors.outcome_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.outcomes.update"),this.form,{preserveState:!1})},destroy(d){this.confirmationRoute="progress_report.settings.digital_art.outcomes.destroy",this.confirmationData=d,this.isOpen=!0},viewObjectives(d){this.$inertia.get(route("progress_report.settings.digital_art.objectives"),{level_id:this.$page.props.level_id,theme_id:this.$page.props.theme_id,lesson_id:this.$page.props.lesson_id,activity_id:this.$page.props.activity_id,outcome_id:d})}}},Be=Object.assign(pe,{__name:"Outcomes",setup(d){return(t,n)=>(c(),l(u,null,[s(w(b),{title:"Progress Report"}),s($,null,{header:i(()=>[]),default:i(()=>[e("div",D,[e("div",T,[e("div",j,[s(a,{buttonType:"gray",route:t.route("progress_report.settings.digital_art.activities",{level_id:t.$page.props.level_id,theme_id:t.$page.props.theme_id,lesson_id:t.$page.props.lesson_id})},{default:i(()=>[r("Back")]),_:1},8,["route"]),s(a,{onClick:t.create},{default:i(()=>[r("New Outcome")]),_:1},8,["onClick"])])]),e("div",N,[e("div",R,[e("div",V,[e("table",S,[A,e("tbody",L,[t.$page.props.outcomes.length?m("",!0):(c(),l("tr",z,F)),(c(!0),l(u,null,k(t.$page.props.outcomes,(o,v)=>(c(),l("tr",I,[e("td",M,[e("div",P,_(++v),1)]),e("td",H,[e("div",U,[e("span",q,_(o.name),1)])]),e("td",G,[e("div",J,[s(a,{buttonType:"warning",onClick:p=>t.edit(o.id,o.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),s(a,{buttonType:"danger",onClick:p=>t.destroy(o.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"]),s(a,{buttonType:"blue",onClick:p=>t.viewObjectives(o.id)},{default:i(()=>[r("View Objectives")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(c(),l("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[h(e("input",{type:"text",name:"outcome_name",id:"outcome_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.outcome_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[0]||(n[0]=o=>t.form.outcome_name=o),autocomplete:"off"},null,2),[[f,t.form.outcome_name]])])])])]),e("div",te,[e("div",oe,[s(a,{onClick:t.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0),t.show_edit?(c(),l("div",se,[e("div",ie,[re,e("div",ae,[e("div",de,[ne,e("div",ce,[h(e("input",{type:"text",name:"outcome_name",id:"outcome_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.outcome_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[1]||(n[1]=o=>t.form.outcome_name=o),autocomplete:"off"},null,2),[[f,t.form.outcome_name]])])])])]),e("div",le,[e("div",me,[s(a,{onClick:t.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0)])]),s(y,{show:t.isOpen,onClose:n[2]||(n[2]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Outcome",confirmationText:"Are you sure want to delete this outcome? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{Be as default};
=======
import{o as c,c as l,a as s,u as w,w as i,F as u,H as b,L as x,d as e,g as r,p as m,e as k,t as _,h,v as f,n as g}from"./app-52b365f0.js";import{B as $}from"./Authenticated-17f82664.js";import{B as a}from"./Button-17ab5227.js";import{r as C}from"./PencilIcon-ab9ff546.js";import{r as O}from"./SearchIcon-992ab9cb.js";import{r as B}from"./TrashIcon-ffd753ce.js";import{C as y}from"./ConfirmationModal-a257d5c8.js";import"./ApplicationLogo-79ae59e2.js";import"./XIcon-a423e680.js";import"./vue3-perfect-scrollbar-2510dc3b.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-30ae30db.js";import"./keyboard-55333620.js";const D={class:"py-4 px-4"},T={class:"grid grid-cols-2 gap-4"},j={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},N={class:"grid grid-cols-2 gap-4"},R={class:"space-y-2"},V={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},S={class:"min-w-full divide-y divide-gray-200"},A=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Outcome"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),L={class:"bg-white divide-y divide-gray-200"},z={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),F=[E],I={class:"hover:bg-gray-200"},M={class:"px-6 py-4 whitespace-nowrap"},P={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Outcome")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"outcome_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},se={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Outcome")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"outcome_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ce={class:"mt-1 flex rounded-md shadow-sm"},le={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},me={class:"flex justify-end"},pe={components:{SearchIcon:O,TrashIcon:B,PencilIcon:C,Head:b,Link:x,ConfirmationModal:y},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",activity_id:this.$page.props.activity_id,outcome_name:""},errors:{outcome_name:!1}}},methods:{create(){this.form.outcome_name="",this.show_create=!0,this.show_edit=!1},edit(d,t){this.form.id=d,this.form.outcome_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.outcome_name){this.errors.outcome_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.outcomes.store"),this.form,{preserveState:!1})},update(){if(!this.form.outcome_name){this.errors.outcome_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.outcomes.update"),this.form,{preserveState:!1})},destroy(d){this.confirmationRoute="progress_report.settings.digital_art.outcomes.destroy",this.confirmationData=d,this.isOpen=!0},viewObjectives(d){this.$inertia.get(route("progress_report.settings.digital_art.objectives"),{level_id:this.$page.props.level_id,theme_id:this.$page.props.theme_id,lesson_id:this.$page.props.lesson_id,activity_id:this.$page.props.activity_id,outcome_id:d})}}},Be=Object.assign(pe,{__name:"Outcomes",setup(d){return(t,n)=>(c(),l(u,null,[s(w(b),{title:"Progress Report"}),s($,null,{header:i(()=>[]),default:i(()=>[e("div",D,[e("div",T,[e("div",j,[s(a,{buttonType:"gray",route:t.route("progress_report.settings.digital_art.activities",{level_id:t.$page.props.level_id,theme_id:t.$page.props.theme_id,lesson_id:t.$page.props.lesson_id})},{default:i(()=>[r("Back")]),_:1},8,["route"]),s(a,{onClick:t.create},{default:i(()=>[r("New Outcome")]),_:1},8,["onClick"])])]),e("div",N,[e("div",R,[e("div",V,[e("table",S,[A,e("tbody",L,[t.$page.props.outcomes.length?m("",!0):(c(),l("tr",z,F)),(c(!0),l(u,null,k(t.$page.props.outcomes,(o,v)=>(c(),l("tr",I,[e("td",M,[e("div",P,_(++v),1)]),e("td",H,[e("div",U,[e("span",q,_(o.name),1)])]),e("td",G,[e("div",J,[s(a,{buttonType:"warning",onClick:p=>t.edit(o.id,o.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),s(a,{buttonType:"danger",onClick:p=>t.destroy(o.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"]),s(a,{buttonType:"blue",onClick:p=>t.viewObjectives(o.id)},{default:i(()=>[r("View Objectives")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(c(),l("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[h(e("input",{type:"text",name:"outcome_name",id:"outcome_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.outcome_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[0]||(n[0]=o=>t.form.outcome_name=o),autocomplete:"off"},null,2),[[f,t.form.outcome_name]])])])])]),e("div",te,[e("div",oe,[s(a,{onClick:t.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0),t.show_edit?(c(),l("div",se,[e("div",ie,[re,e("div",ae,[e("div",de,[ne,e("div",ce,[h(e("input",{type:"text",name:"outcome_name",id:"outcome_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.outcome_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[1]||(n[1]=o=>t.form.outcome_name=o),autocomplete:"off"},null,2),[[f,t.form.outcome_name]])])])])]),e("div",le,[e("div",me,[s(a,{onClick:t.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0)])]),s(y,{show:t.isOpen,onClose:n[2]||(n[2]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Outcome",confirmationText:"Are you sure want to delete this outcome? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{Be as default};
>>>>>>> e402caeffa6bac873880cfb5d969663444372e1a:public/build/assets/Outcomes-44d481f2.js
