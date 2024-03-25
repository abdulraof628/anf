import{o as d,c as n,a as s,u as w,w as i,F as p,H as u,L as j,d as e,g as r,p as m,e as x,t as _,h,v as f,n as b}from"./app-1e0c6682.js";import{B as k}from"./Authenticated-c3a74fd5.js";import{B as c}from"./Button-50ac9964.js";import{r as C}from"./PencilIcon-7014f11b.js";import{r as $}from"./SearchIcon-1e3460dc.js";import{r as O}from"./TrashIcon-ff27da63.js";import{C as g}from"./ConfirmationModal-b5bddff1.js";import"./ApplicationLogo-6909dc22.js";import"./XIcon-80766edc.js";import"./vue3-perfect-scrollbar-40f5923a.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-3b21bf66.js";import"./keyboard-25233a2c.js";const B={class:"py-4 px-4"},D={class:"grid grid-cols-2 gap-4"},N={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},T={class:"grid grid-cols-2 gap-4"},R={class:"space-y-2"},S={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},V={class:"min-w-full divide-y divide-gray-200"},A=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Objective"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),L={class:"bg-white divide-y divide-gray-200"},z={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),F=[E],I={class:"hover:bg-gray-200"},M={class:"px-6 py-4 whitespace-nowrap"},H={class:"text-sm font-medium text-gray-700"},P={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Objective")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"objective_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},se={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Objective")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"objective_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ce={class:"mt-1 flex rounded-md shadow-sm"},le={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},me={class:"flex justify-end"},pe={components:{SearchIcon:$,TrashIcon:O,PencilIcon:C,Head:u,Link:j,ConfirmationModal:g},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",lesson_id:this.$page.props.lesson_id,objective_name:""},errors:{objective_name:!1}}},methods:{create(){this.form.objective_name="",this.show_create=!0,this.show_edit=!1},edit(l,t){this.form.id=l,this.form.objective_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.math.objectives.store"),this.form,{preserveState:!1})},update(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.math.objectives.update"),this.form,{preserveState:!1})},destroy(l){this.confirmationRoute="progress_report.settings.math.objectives.destroy",this.confirmationData=l,this.isOpen=!0}}},Oe=Object.assign(pe,{__name:"Objectives",setup(l){return(t,a)=>(d(),n(p,null,[s(w(u),{title:"Progress Report"}),s(k,null,{header:i(()=>[]),default:i(()=>[e("div",B,[e("div",D,[e("div",N,[s(c,{buttonType:"gray",route:t.route("progress_report.settings.math.lessons",{level_id:t.$page.props.level_id,term_book_id:t.$page.props.term_book_id,unit_id:t.$page.props.unit_id})},{default:i(()=>[r("Back")]),_:1},8,["route"]),s(c,{onClick:t.create},{default:i(()=>[r("New Objective")]),_:1},8,["onClick"])])]),e("div",T,[e("div",R,[e("div",S,[e("table",V,[A,e("tbody",L,[t.$page.props.objectives.length?m("",!0):(d(),n("tr",z,F)),(d(!0),n(p,null,x(t.$page.props.objectives,(o,v)=>(d(),n("tr",I,[e("td",M,[e("div",H,_(++v),1)]),e("td",P,[e("div",U,[e("span",q,_(o.name),1)])]),e("td",G,[e("div",J,[s(c,{buttonType:"warning",onClick:y=>t.edit(o.id,o.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),s(c,{buttonType:"danger",onClick:y=>t.destroy(o.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(d(),n("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[h(e("input",{type:"text",name:"objective_name",id:"objective_name",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.objective_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":a[0]||(a[0]=o=>t.form.objective_name=o),autocomplete:"off"},null,2),[[f,t.form.objective_name]])])])])]),e("div",te,[e("div",oe,[s(c,{onClick:t.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0),t.show_edit?(d(),n("div",se,[e("div",ie,[re,e("div",ae,[e("div",de,[ne,e("div",ce,[h(e("input",{type:"text",name:"objective_name",id:"objective_name",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.objective_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":a[1]||(a[1]=o=>t.form.objective_name=o),autocomplete:"off"},null,2),[[f,t.form.objective_name]])])])])]),e("div",le,[e("div",me,[s(c,{onClick:t.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0)])]),s(g,{show:t.isOpen,onClose:a[2]||(a[2]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Objective",confirmationText:"Are you sure want to delete this objective?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{Oe as default};
