import{o as l,c as n,a as o,u as w,w as i,F as _,H as g,L as x,d as e,g as r,q as m,e as k,t as h,h as f,v as u,n as v}from"./app-71950877.js";import{B as C}from"./Authenticated-208afc3b.js";import{B as c}from"./Button-894e9e1f.js";import{r as T}from"./PencilIcon-585c3a40.js";import{r as $}from"./SearchIcon-177ecd20.js";import{r as D}from"./TrashIcon-3e6d9299.js";import{C as y}from"./ConfirmationModal-04ae129c.js";import{P as B}from"./Pagination-8cfea62c.js";import"./ApplicationLogo-8610a79e.js";import"./XIcon-4055b9c3.js";import"./perfect-scrollbar.esm-e549b042.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-0b8c69ea.js";import"./moment-55cb88ed.js";import"./transition-00b122a3.js";import"./keyboard-f848a7f7.js";const L={class:"py-4 px-4"},N={class:"overflow-x-auto"},V={class:"m-3"},A={class:"grid grid-cols-2 gap-4"},R={class:"flex justify-end pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},S={class:"flex"},j={class:"grid grid-cols-2 gap-4"},O={class:"align-middle inline-block min-w-full"},z={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},E={class:"min-w-full divide-y divide-gray-200"},F=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),I={class:"bg-white divide-y divide-gray-200"},M={key:0},P=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),H=[P],U={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-700"},G={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm font-medium text-gray-900"},K={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},Q={class:"flex justify-center space-x-2"},W={key:0,class:"space-y-2"},X={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Y=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Add Level")],-1),Z={class:"grid grid-cols-1 gap-0 sm:gap-4"},ee={class:"mb-4"},te=e("label",{for:"level_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),se={class:"mt-1 flex rounded-md shadow-sm"},oe={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},ie={class:"flex justify-end"},re={key:1,class:"space-y-2"},ae={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},de=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Level")],-1),le={class:"grid grid-cols-1 gap-0 sm:gap-4"},ne={class:"mb-4"},ce=e("label",{for:"level_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),me={class:"mt-1 flex rounded-md shadow-sm"},pe={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},_e={class:"flex justify-end"},he={components:{SearchIcon:$,TrashIcon:D,PencilIcon:T,ConfirmationModal:y,Head:g,Link:x,Pagination:B},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",level_name:""},errors:{level_name:!1}}},methods:{viewThemes(a){this.$inertia.get(route("art_gallery.setting.themes"),{level_id:a})},create(){this.form.level_name="",this.show_create=!0,this.show_edit=!1},store(){if(!this.form.level_name){this.errors.level_name=!0;return}this.$inertia.post(route("art_gallery.setting.levels.store"),this.form,{preserveState:!1})},edit(a,t){this.form.id=a,this.form.level_name=t,this.show_edit=!0,this.show_create=!1},update(){if(!this.form.level_name){this.errors.level_name=!0;return}this.$inertia.post(route("art_gallery.setting.levels.update"),this.form,{preserveState:!1})},destroy(a){this.confirmationRoute="art_gallery.setting.levels.delete",this.confirmationData=a,this.isOpen=!0}}},Ve=Object.assign(he,{__name:"Levels",setup(a){return(t,d)=>(l(),n(_,null,[o(w(g),{title:"Art Gallery"}),o(C,null,{header:i(()=>[]),default:i(()=>[e("div",L,[e("div",N,[e("div",V,[e("div",A,[e("div",R,[e("div",S,[o(c,{class:"py-2 px-4",onClick:t.create},{default:i(()=>[r("New Level")]),_:1},8,["onClick"])])])]),e("div",j,[e("div",O,[e("div",z,[e("table",E,[F,e("tbody",I,[t.$page.props.levels?m("",!0):(l(),n("tr",M,H)),(l(!0),n(_,null,k(t.$page.props.levels,(s,b)=>(l(),n("tr",{class:"hover:bg-gray-200",key:s.id},[e("td",U,[e("div",q,h(++b),1)]),e("td",G,[e("div",J,h(s.name),1)]),e("td",K,[e("div",Q,[o(c,{buttonType:"warning",onClick:p=>t.edit(s.id,s.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),o(c,{buttonType:"danger",onClick:p=>t.destroy(s.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"]),o(c,{buttonType:"blue",onClick:p=>t.viewThemes(s.id)},{default:i(()=>[r("View Themes")]),_:2},1032,["onClick"])])])]))),128))])])])]),t.show_create?(l(),n("div",W,[e("div",X,[Y,e("div",Z,[e("div",ee,[te,e("div",se,[f(e("input",{type:"text",name:"level_name",id:"level_name",class:v(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.level_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[0]||(d[0]=s=>t.form.level_name=s),autocomplete:"off"},null,2),[[u,t.form.level_name]])])])])]),e("div",oe,[e("div",ie,[o(c,{onClick:t.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0),t.show_edit?(l(),n("div",re,[e("div",ae,[de,e("div",le,[e("div",ne,[ce,e("div",me,[f(e("input",{type:"text",name:"level_name",id:"level_name",class:v(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.level_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[1]||(d[1]=s=>t.form.level_name=s),autocomplete:"off"},null,2),[[u,t.form.level_name]])])])])]),e("div",pe,[e("div",_e,[o(c,{onClick:t.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0)])])]),o(y,{show:t.isOpen,onClose:d[2]||(d[2]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Level",confirmationText:"Are you sure want to delete this level?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{Ve as default};
