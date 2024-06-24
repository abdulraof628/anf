import{o as l,c,a as t,u as v,w as r,F as _,H as b,L as x,d as e,g as i,q as m,e as k,t as h,h as f,v as u,n as g}from"./app-6f86c80f.js";import{B as C}from"./Authenticated-ab1eb90a.js";import{B as n}from"./Button-df280131.js";import{r as T}from"./PencilIcon-60036071.js";import{r as $}from"./SearchIcon-1e871a13.js";import{r as B}from"./TrashIcon-ad040423.js";import{C as y}from"./ConfirmationModal-9aa9eb83.js";import"./ApplicationLogo-b3712262.js";import"./XIcon-0d28af2b.js";import"./vue3-perfect-scrollbar-5488d579.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-7374af04.js";import"./keyboard-361618b8.js";const D={class:"py-4 px-4"},L={class:"grid grid-cols-2 gap-4"},N={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},R={class:"grid grid-cols-2 gap-4"},V={class:"space-y-2"},S={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},j={class:"min-w-full divide-y divide-gray-200"},O=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Lesson"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),A={class:"bg-white divide-y divide-gray-200"},z={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),F=[E],I={class:"hover:bg-gray-200"},M={class:"px-6 py-4 whitespace-nowrap"},P={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Lesson")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"lesson_name",class:"block text-sm text-gray-700 font-bold"},[i(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},se={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},te={key:1,class:"space-y-2"},re={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ie=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Lesson")],-1),ne={class:"grid grid-cols-1 gap-0 sm:gap-4"},ae={class:"mb-4"},de=e("label",{for:"lesson_name",class:"block text-sm text-gray-700 font-bold"},[i(" Name "),e("span",{class:"text-red-500"},"*")],-1),le={class:"mt-1 flex rounded-md shadow-sm"},ce={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},me={class:"flex justify-end"},pe={components:{SearchIcon:$,TrashIcon:B,PencilIcon:T,Head:b,Link:x,ConfirmationModal:y},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",level_id:this.$page.props.level_id,lesson_name:""},errors:{lesson_name:!1}}},methods:{create(){this.form.lesson_name="",this.show_create=!0,this.show_edit=!1},edit(a,s){this.form.id=a,this.form.lesson_name=s,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.lessons.store"),this.form,{preserveState:!1})},update(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.lessons.update"),this.form,{preserveState:!1})},destroy(a){this.confirmationRoute="progress_report.settings.coding_robotics.lessons.destroy",this.confirmationData=a,this.isOpen=!0},viewTopics(a){this.$inertia.get(route("progress_report.settings.coding_robotics.topics"),{level_id:this.$page.props.level_id,lesson_id:a})}}},Be=Object.assign(pe,{__name:"Lessons",setup(a){return(s,d)=>(l(),c(_,null,[t(v(b),{title:"Progress Report"}),t(C,null,{header:r(()=>[]),default:r(()=>[e("div",D,[e("div",L,[e("div",N,[t(n,{buttonType:"gray",route:s.route("progress_report.settings.coding_robotics.levels")},{default:r(()=>[i("Back")]),_:1},8,["route"]),t(n,{onClick:s.create},{default:r(()=>[i("New Lesson")]),_:1},8,["onClick"])])]),e("div",R,[e("div",V,[e("div",S,[e("table",j,[O,e("tbody",A,[s.$page.props.lessons.length?m("",!0):(l(),c("tr",z,F)),(l(!0),c(_,null,k(s.$page.props.lessons,(o,w)=>(l(),c("tr",I,[e("td",M,[e("div",P,h(++w),1)]),e("td",H,[e("div",U,[e("span",q,h(o.name),1)])]),e("td",G,[e("div",J,[t(n,{buttonType:"warning",onClick:p=>s.edit(o.id,o.name)},{default:r(()=>[i("Edit")]),_:2},1032,["onClick"]),t(n,{buttonType:"danger",onClick:p=>s.destroy(o.id)},{default:r(()=>[i("Delete")]),_:2},1032,["onClick"]),t(n,{buttonType:"blue",onClick:p=>s.viewTopics(o.id)},{default:r(()=>[i("View Topics")]),_:2},1032,["onClick"])])])]))),256))])])])]),s.show_create?(l(),c("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"lesson_name",id:"lesson_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.lesson_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[0]||(d[0]=o=>s.form.lesson_name=o),autocomplete:"off"},null,2),[[u,s.form.lesson_name]])])])])]),e("div",se,[e("div",oe,[t(n,{onClick:s.store},{default:r(()=>[i("Save")]),_:1},8,["onClick"])])])])):m("",!0),s.show_edit?(l(),c("div",te,[e("div",re,[ie,e("div",ne,[e("div",ae,[de,e("div",le,[f(e("input",{type:"text",name:"lesson_name",id:"lesson_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.lesson_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[1]||(d[1]=o=>s.form.lesson_name=o),autocomplete:"off"},null,2),[[u,s.form.lesson_name]])])])])]),e("div",ce,[e("div",me,[t(n,{onClick:s.update},{default:r(()=>[i("Save")]),_:1},8,["onClick"])])])])):m("",!0)])]),t(y,{show:s.isOpen,onClose:d[2]||(d[2]=o=>s.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Lesson",confirmationText:"Are you sure want to delete this lesson? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:s.confirmationRoute,confirmationData:s.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{Be as default};
