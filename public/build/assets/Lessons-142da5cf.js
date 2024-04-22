import{o as l,c,a as o,u as w,w as i,F as _,H as b,L as x,d as e,g as r,p as m,e as k,t as h,h as f,v as u,n as g}from"./app-462a769a.js";import{B as C}from"./Authenticated-4c85926c.js";import{B as a}from"./Button-b3e73baf.js";import{r as $}from"./PencilIcon-fdca7c88.js";import{r as B}from"./SearchIcon-468465ae.js";import{r as D}from"./TrashIcon-02e51929.js";import{C as y}from"./ConfirmationModal-45df229b.js";import"./ApplicationLogo-4b85744d.js";import"./XIcon-23a15b91.js";import"./vue3-perfect-scrollbar-d7092836.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-22c55c34.js";import"./keyboard-d111b3e2.js";const L={class:"py-4 px-4"},T={class:"grid grid-cols-2 gap-4"},j={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},N={class:"grid grid-cols-2 gap-4"},O={class:"space-y-2"},R={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},V={class:"min-w-full divide-y divide-gray-200"},S=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Lesson"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),A={class:"bg-white divide-y divide-gray-200"},z={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),F=[E],I={class:"hover:bg-gray-200"},M={class:"px-6 py-4 whitespace-nowrap"},P={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Lesson")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"lesson_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},se={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},te={class:"flex justify-end"},oe={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Lesson")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},ne={class:"mb-4"},de=e("label",{for:"lesson_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),le={class:"mt-1 flex rounded-md shadow-sm"},ce={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},me={class:"flex justify-end"},pe={components:{SearchIcon:B,TrashIcon:D,PencilIcon:$,Head:b,Link:x,ConfirmationModal:y},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",unit_id:this.$page.props.unit_id,lesson_name:""},errors:{lesson_name:!1}}},methods:{create(){this.form.lesson_name="",this.show_create=!0,this.show_edit=!1},edit(n,s){this.form.id=n,this.form.lesson_name=s,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.math.lessons.store"),this.form,{preserveState:!1})},update(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.math.lessons.update"),this.form,{preserveState:!1})},destroy(n){this.confirmationRoute="progress_report.settings.math.lessons.destroy",this.confirmationData=n,this.isOpen=!0},viewObjectives(n){this.$inertia.get(route("progress_report.settings.math.objectives"),{level_id:this.$page.props.level_id,term_book_id:this.$page.props.term_book_id,unit_id:this.$page.props.unit_id,lesson_id:n})}}},De=Object.assign(pe,{__name:"Lessons",setup(n){return(s,d)=>(l(),c(_,null,[o(w(b),{title:"Progress Report"}),o(C,null,{header:i(()=>[]),default:i(()=>[e("div",L,[e("div",T,[e("div",j,[o(a,{buttonType:"gray",route:s.route("progress_report.settings.math.units",{level_id:s.$page.props.level_id,term_book_id:s.$page.props.term_book_id})},{default:i(()=>[r("Back")]),_:1},8,["route"]),o(a,{onClick:s.create},{default:i(()=>[r("New Lesson")]),_:1},8,["onClick"])])]),e("div",N,[e("div",O,[e("div",R,[e("table",V,[S,e("tbody",A,[s.$page.props.lessons.length?m("",!0):(l(),c("tr",z,F)),(l(!0),c(_,null,k(s.$page.props.lessons,(t,v)=>(l(),c("tr",I,[e("td",M,[e("div",P,h(++v),1)]),e("td",H,[e("div",U,[e("span",q,h(t.name),1)])]),e("td",G,[e("div",J,[o(a,{buttonType:"warning",onClick:p=>s.edit(t.id,t.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),o(a,{buttonType:"danger",onClick:p=>s.destroy(t.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"]),o(a,{buttonType:"blue",onClick:p=>s.viewObjectives(t.id)},{default:i(()=>[r("View Objectives")]),_:2},1032,["onClick"])])])]))),256))])])])]),s.show_create?(l(),c("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"lesson_name",id:"lesson_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.lesson_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[0]||(d[0]=t=>s.form.lesson_name=t),autocomplete:"off"},null,2),[[u,s.form.lesson_name]])])])])]),e("div",se,[e("div",te,[o(a,{onClick:s.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0),s.show_edit?(l(),c("div",oe,[e("div",ie,[re,e("div",ae,[e("div",ne,[de,e("div",le,[f(e("input",{type:"text",name:"lesson_name",id:"lesson_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.lesson_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[1]||(d[1]=t=>s.form.lesson_name=t),autocomplete:"off"},null,2),[[u,s.form.lesson_name]])])])])]),e("div",ce,[e("div",me,[o(a,{onClick:s.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0)])]),o(y,{show:s.isOpen,onClose:d[2]||(d[2]=t=>s.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Lesson",confirmationText:"Are you sure want to delete this lesson? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:s.confirmationRoute,confirmationData:s.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{De as default};
