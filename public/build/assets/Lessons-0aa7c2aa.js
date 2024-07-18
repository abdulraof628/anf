import{o as l,c,a as o,u as w,w as i,F as _,H as y,L as x,d as e,g as r,q as m,e as k,t as h,h as f,v as u,n as g}from"./app-ca7c252e.js";import{B as C}from"./Authenticated-7dd4e5bf.js";import{B as a}from"./Button-c62d076b.js";import{r as $}from"./PencilIcon-174e88d6.js";import{r as B}from"./SearchIcon-a3cdbf80.js";import{r as D}from"./TrashIcon-df8fe82d.js";import{C as b}from"./ConfirmationModal-30892ff0.js";import{P as A}from"./Pagination-cc8b54b5.js";import"./ApplicationLogo-44fdbb8b.js";import"./XIcon-18ffab44.js";import"./perfect-scrollbar.esm-3c05f46e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-9e31d12d.js";import"./moment-55cb88ed.js";import"./transition-6f599973.js";import"./keyboard-ca2dafe6.js";const L={class:"py-4 px-4"},N={class:"overflow-x-auto"},T={class:"m-3"},V={class:"grid grid-cols-2 gap-4"},R={class:"align-middle inline-block min-w-full"},S={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},j={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},O={class:"min-w-full divide-y divide-gray-200"},z=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),E={class:"bg-white divide-y divide-gray-200"},F={key:0},I=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),M=[I],P={class:"px-6 py-4 whitespace-nowrap"},H={class:"text-sm font-medium text-gray-700"},U={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-900"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Add Lesson")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"lesson_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},se={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},te={class:"flex justify-end"},oe={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Lesson")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},ne={class:"mb-4"},de=e("label",{for:"lesson_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),le={class:"mt-1 flex rounded-md shadow-sm"},ce={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},me={class:"flex justify-end"},pe={components:{SearchIcon:B,TrashIcon:D,PencilIcon:$,ConfirmationModal:b,Head:y,Link:x,Pagination:A},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",theme_id:this.$page.props.theme_id,lesson_name:""},errors:{lesson_name:!1}}},methods:{viewActivities(n){this.$inertia.get(route("art_gallery.setting.activities"),{level_id:this.$page.props.level_id,theme_id:this.$page.props.theme_id,lesson_id:n})},create(){this.form.lesson_name="",this.show_create=!0,this.show_edit=!1},store(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("art_gallery.setting.lessons.store"),this.form,{preserveState:!1})},edit(n,s){this.form.id=n,this.form.lesson_name=s,this.show_edit=!0,this.show_create=!1},update(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("art_gallery.setting.lessons.update"),this.form,{preserveState:!1})},destroy(n){this.confirmationRoute="art_gallery.setting.lessons.delete",this.confirmationData=n,this.isOpen=!0}}},Le=Object.assign(pe,{__name:"Lessons",setup(n){return(s,d)=>(l(),c(_,null,[o(w(y),{title:"Art Gallery"}),o(C,null,{header:i(()=>[]),default:i(()=>[e("div",L,[e("div",N,[e("div",T,[e("div",V,[e("div",R,[e("div",S,[o(a,{buttonType:"gray",class:"py-2 px-4",route:s.route("art_gallery.setting.themes",{level_id:s.$page.props.level_id})},{default:i(()=>[r("Back")]),_:1},8,["route"]),o(a,{class:"py-2 px-4",onClick:s.create},{default:i(()=>[r("New Lesson")]),_:1},8,["onClick"])]),e("div",j,[e("table",O,[z,e("tbody",E,[s.$page.props.lessons?m("",!0):(l(),c("tr",F,M)),(l(!0),c(_,null,k(s.$page.props.lessons,(t,v)=>(l(),c("tr",{class:"hover:bg-gray-200",key:t.id},[e("td",P,[e("div",H,h(++v),1)]),e("td",U,[e("div",q,h(t.name),1)]),e("td",G,[e("div",J,[o(a,{buttonType:"warning",onClick:p=>s.edit(t.id,t.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),o(a,{buttonType:"danger",onClick:p=>s.destroy(t.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"]),o(a,{buttonType:"blue",onClick:p=>s.viewActivities(t.id)},{default:i(()=>[r("View Activities")]),_:2},1032,["onClick"])])])]))),128))])])])]),s.show_create?(l(),c("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"lesson_name",id:"lesson_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.lesson_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[0]||(d[0]=t=>s.form.lesson_name=t),autocomplete:"off"},null,2),[[u,s.form.lesson_name]])])])])]),e("div",se,[e("div",te,[o(a,{onClick:s.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0),s.show_edit?(l(),c("div",oe,[e("div",ie,[re,e("div",ae,[e("div",ne,[de,e("div",le,[f(e("input",{type:"text",name:"lesson_name",id:"lesson_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.lesson_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[1]||(d[1]=t=>s.form.lesson_name=t),autocomplete:"off"},null,2),[[u,s.form.lesson_name]])])])])]),e("div",ce,[e("div",me,[o(a,{onClick:s.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0)])])]),o(b,{show:s.isOpen,onClose:d[2]||(d[2]=t=>s.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Lesson",confirmationText:"Are you sure want to delete this lesson?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:s.confirmationRoute,confirmationData:s.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{Le as default};
