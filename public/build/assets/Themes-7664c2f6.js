import{o as l,c as m,a as o,u as w,w as i,F as p,H as y,L as x,d as e,g as r,q as c,e as k,t as _,h as f,v as u,n as g}from"./app-ca7c252e.js";import{B as C}from"./Authenticated-7dd4e5bf.js";import{B as a}from"./Button-c62d076b.js";import{r as T}from"./PencilIcon-174e88d6.js";import{r as $}from"./SearchIcon-a3cdbf80.js";import{r as B}from"./TrashIcon-df8fe82d.js";import{C as b}from"./ConfirmationModal-30892ff0.js";import{P as D}from"./Pagination-cc8b54b5.js";import"./ApplicationLogo-44fdbb8b.js";import"./XIcon-18ffab44.js";import"./perfect-scrollbar.esm-3c05f46e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-9e31d12d.js";import"./moment-55cb88ed.js";import"./transition-6f599973.js";import"./keyboard-ca2dafe6.js";const N={class:"py-4 px-4"},L={class:"overflow-x-auto"},V={class:"m-3"},A={class:"grid grid-cols-2 gap-4"},R={class:"align-middle inline-block min-w-full"},S={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},j={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},O={class:"min-w-full divide-y divide-gray-200"},z=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),E={class:"bg-white divide-y divide-gray-200"},F={key:0},I=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),M=[I],P={class:"px-6 py-4 whitespace-nowrap"},H={class:"text-sm font-medium text-gray-700"},U={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-900"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Add Theme")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"theme_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},se={class:"flex justify-end"},oe={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Theme")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"theme_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),le={class:"mt-1 flex rounded-md shadow-sm"},me={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},ce={class:"flex justify-end"},he={components:{SearchIcon:$,TrashIcon:B,PencilIcon:T,ConfirmationModal:b,Head:y,Link:x,Pagination:D},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",level_id:this.$page.props.level_id,theme_name:""},errors:{theme_name:!1}}},methods:{viewLessons(d){this.$inertia.get(route("art_gallery.setting.lessons"),{level_id:this.$page.props.level_id,theme_id:d})},create(){this.form.theme_name="",this.show_create=!0,this.show_edit=!1},store(){if(!this.form.theme_name){this.errors.theme_name=!0;return}this.$inertia.post(route("art_gallery.setting.themes.store"),this.form,{preserveState:!1})},edit(d,t){this.form.id=d,this.form.theme_name=t,this.show_edit=!0,this.show_create=!1},update(){if(!this.form.theme_name){this.errors.theme_name=!0;return}this.$inertia.post(route("art_gallery.setting.themes.update"),this.form,{preserveState:!1})},destroy(d){this.confirmationRoute="art_gallery.setting.themes.delete",this.confirmationData=d,this.isOpen=!0}}},Ne=Object.assign(he,{__name:"Themes",setup(d){return(t,n)=>(l(),m(p,null,[o(w(y),{title:"Art Gallery"}),o(C,null,{header:i(()=>[]),default:i(()=>[e("div",N,[e("div",L,[e("div",V,[e("div",A,[e("div",R,[e("div",S,[o(a,{buttonType:"gray",class:"py-2 px-4",route:t.route("art_gallery.setting.levels")},{default:i(()=>[r("Back")]),_:1},8,["route"]),o(a,{class:"py-2 px-4",onClick:t.create},{default:i(()=>[r("New Theme")]),_:1},8,["onClick"])]),e("div",j,[e("table",O,[z,e("tbody",E,[t.$page.props.themes?c("",!0):(l(),m("tr",F,M)),(l(!0),m(p,null,k(t.$page.props.themes,(s,v)=>(l(),m("tr",{class:"hover:bg-gray-200",key:s.id},[e("td",P,[e("div",H,_(++v),1)]),e("td",U,[e("div",q,_(s.name),1)]),e("td",G,[e("div",J,[o(a,{buttonType:"warning",onClick:h=>t.edit(s.id,s.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),o(a,{buttonType:"danger",onClick:h=>t.destroy(s.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"]),o(a,{buttonType:"blue",onClick:h=>t.viewLessons(s.id)},{default:i(()=>[r("View Lessons")]),_:2},1032,["onClick"])])])]))),128))])])])]),t.show_create?(l(),m("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"theme_name",id:"theme_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.theme_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[0]||(n[0]=s=>t.form.theme_name=s),autocomplete:"off"},null,2),[[u,t.form.theme_name]])])])])]),e("div",te,[e("div",se,[o(a,{onClick:t.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):c("",!0),t.show_edit?(l(),m("div",oe,[e("div",ie,[re,e("div",ae,[e("div",de,[ne,e("div",le,[f(e("input",{type:"text",name:"theme_name",id:"theme_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.theme_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[1]||(n[1]=s=>t.form.theme_name=s),autocomplete:"off"},null,2),[[u,t.form.theme_name]])])])])]),e("div",me,[e("div",ce,[o(a,{onClick:t.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):c("",!0)])])]),o(b,{show:t.isOpen,onClose:n[2]||(n[2]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Theme",confirmationText:"Are you sure want to delete this theme?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{Ne as default};
