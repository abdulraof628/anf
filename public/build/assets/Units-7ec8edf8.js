import{o as l,c,a as o,u as v,w as i,F as u,H as b,L as x,d as e,g as r,p as m,e as k,t as _,h,v as f,n as g}from"./app-1e0c6682.js";import{B as C}from"./Authenticated-c3a74fd5.js";import{B as n}from"./Button-50ac9964.js";import{r as $}from"./PencilIcon-7014f11b.js";import{r as B}from"./SearchIcon-1e3460dc.js";import{r as D}from"./TrashIcon-ff27da63.js";import{C as y}from"./ConfirmationModal-b5bddff1.js";import"./ApplicationLogo-6909dc22.js";import"./XIcon-80766edc.js";import"./vue3-perfect-scrollbar-40f5923a.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-3b21bf66.js";import"./keyboard-25233a2c.js";const T={class:"py-4 px-4"},N={class:"grid grid-cols-2 gap-4"},U={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},L={class:"grid grid-cols-2 gap-4"},R={class:"space-y-2"},V={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},S={class:"min-w-full divide-y divide-gray-200"},j=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Unit"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),O={class:"bg-white divide-y divide-gray-200"},A={key:0},z=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),E=[z],F={class:"hover:bg-gray-200"},I={class:"px-6 py-4 whitespace-nowrap"},M={class:"text-sm font-medium text-gray-700"},P={class:"px-6 py-4 whitespace-nowrap"},H={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Unit")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"unit_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},se={class:"flex justify-end"},oe={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Unit")],-1),ne={class:"grid grid-cols-1 gap-0 sm:gap-4"},ae={class:"mb-4"},de=e("label",{for:"unit_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),le={class:"mt-1 flex rounded-md shadow-sm"},ce={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},me={class:"flex justify-end"},pe={components:{SearchIcon:B,TrashIcon:D,PencilIcon:$,Head:b,Link:x,ConfirmationModal:y},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",term_book_id:this.$page.props.term_book_id,unit_name:""},errors:{unit_name:!1}}},methods:{create(){this.form.unit_name="",this.show_create=!0,this.show_edit=!1},edit(a,t){this.form.id=a,this.form.unit_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.unit_name){this.errors.unit_name=!0;return}this.$inertia.post(route("progress_report.settings.math.units.store"),this.form,{preserveState:!1})},update(){if(!this.form.unit_name){this.errors.unit_name=!0;return}this.$inertia.post(route("progress_report.settings.math.units.update"),this.form,{preserveState:!1})},destroy(a){this.confirmationRoute="progress_report.settings.math.units.destroy",this.confirmationData=a,this.isOpen=!0},viewLessons(a){this.$inertia.get(route("progress_report.settings.math.lessons"),{level_id:this.$page.props.level_id,term_book_id:this.$page.props.term_book_id,unit_id:a})}}},De=Object.assign(pe,{__name:"Units",setup(a){return(t,d)=>(l(),c(u,null,[o(v(b),{title:"Progress Report"}),o(C,null,{header:i(()=>[]),default:i(()=>[e("div",T,[e("div",N,[e("div",U,[o(n,{buttonType:"gray",route:t.route("progress_report.settings.math.terms_books",{level_id:t.$page.props.level_id})},{default:i(()=>[r("Back")]),_:1},8,["route"]),o(n,{onClick:t.create},{default:i(()=>[r("New Unit")]),_:1},8,["onClick"])])]),e("div",L,[e("div",R,[e("div",V,[e("table",S,[j,e("tbody",O,[t.$page.props.units.length?m("",!0):(l(),c("tr",A,E)),(l(!0),c(u,null,k(t.$page.props.units,(s,w)=>(l(),c("tr",F,[e("td",I,[e("div",M,_(++w),1)]),e("td",P,[e("div",H,[e("span",q,_(s.name),1)])]),e("td",G,[e("div",J,[o(n,{buttonType:"warning",onClick:p=>t.edit(s.id,s.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),o(n,{buttonType:"danger",onClick:p=>t.destroy(s.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"]),o(n,{buttonType:"blue",onClick:p=>t.viewLessons(s.id)},{default:i(()=>[r("View Lessons")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(l(),c("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[h(e("input",{type:"text",name:"unit_name",id:"unit_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.unit_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[0]||(d[0]=s=>t.form.unit_name=s),autocomplete:"off"},null,2),[[f,t.form.unit_name]])])])])]),e("div",te,[e("div",se,[o(n,{onClick:t.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0),t.show_edit?(l(),c("div",oe,[e("div",ie,[re,e("div",ne,[e("div",ae,[de,e("div",le,[h(e("input",{type:"text",name:"unit_name",id:"unit_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.unit_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[1]||(d[1]=s=>t.form.unit_name=s),autocomplete:"off"},null,2),[[f,t.form.unit_name]])])])])]),e("div",ce,[e("div",me,[o(n,{onClick:t.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0)])]),o(y,{show:t.isOpen,onClose:d[2]||(d[2]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Unit",confirmationText:"Are you sure want to delete this unit? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{De as default};
