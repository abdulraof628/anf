import{o as l,c as m,a as o,u as v,w as r,F as p,H as b,L as x,d as e,g as i,q as c,e as k,t as _,h as f,v as u,n as g}from"./app-2cb814f6.js";import{B as C}from"./Authenticated-2b94df58.js";import{B as a}from"./Button-375c20b5.js";import{r as T}from"./PencilIcon-00d58016.js";import{r as $}from"./SearchIcon-fa1b5bbd.js";import{r as B}from"./TrashIcon-c9efe076.js";import{C as y}from"./ConfirmationModal-4e30a24c.js";import"./ApplicationLogo-4d8d9123.js";import"./XIcon-d4937228.js";import"./vue3-perfect-scrollbar-26fe73dc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-79159604.js";import"./moment-a9aaa855.js";import"./transition-f7e95242.js";import"./keyboard-5b23c67a.js";const D={class:"py-4 px-4"},N={class:"grid grid-cols-2 gap-4"},L={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},R={class:"grid grid-cols-2 gap-4"},V={class:"space-y-2"},S={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},j={class:"min-w-full divide-y divide-gray-200"},O=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Theme"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),A={class:"bg-white divide-y divide-gray-200"},z={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),F=[E],I={class:"hover:bg-gray-200"},M={class:"px-6 py-4 whitespace-nowrap"},P={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Theme")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"theme_name",class:"block text-sm text-gray-700 font-bold"},[i(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},se={class:"flex justify-end"},oe={key:1,class:"space-y-2"},re={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ie=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Theme")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"theme_name",class:"block text-sm text-gray-700 font-bold"},[i(" Name "),e("span",{class:"text-red-500"},"*")],-1),le={class:"mt-1 flex rounded-md shadow-sm"},me={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},ce={class:"flex justify-end"},he={components:{SearchIcon:$,TrashIcon:B,PencilIcon:T,Head:b,Link:x,ConfirmationModal:y},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",level_id:this.$page.props.level_id,theme_name:""},errors:{theme_name:!1}}},methods:{create(){this.form.theme_name="",this.show_create=!0,this.show_edit=!1},edit(d,t){this.form.id=d,this.form.theme_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.theme_name){this.errors.theme_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.themes.store"),this.form,{preserveState:!1})},update(){if(!this.form.theme_name){this.errors.theme_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.themes.update"),this.form,{preserveState:!1})},destroy(d){this.confirmationRoute="progress_report.settings.digital_art.themes.destroy",this.confirmationData=d,this.isOpen=!0},viewLessons(d){this.$inertia.get(route("progress_report.settings.digital_art.lessons"),{level_id:this.$page.props.level_id,theme_id:d})}}},De=Object.assign(he,{__name:"Themes",setup(d){return(t,n)=>(l(),m(p,null,[o(v(b),{title:"Progress Report"}),o(C,null,{header:r(()=>[]),default:r(()=>[e("div",D,[e("div",N,[e("div",L,[o(a,{buttonType:"gray",route:t.route("progress_report.settings.digital_art.levels")},{default:r(()=>[i("Back")]),_:1},8,["route"]),o(a,{onClick:t.create},{default:r(()=>[i("New Theme")]),_:1},8,["onClick"])])]),e("div",R,[e("div",V,[e("div",S,[e("table",j,[O,e("tbody",A,[t.$page.props.themes.length?c("",!0):(l(),m("tr",z,F)),(l(!0),m(p,null,k(t.$page.props.themes,(s,w)=>(l(),m("tr",I,[e("td",M,[e("div",P,_(++w),1)]),e("td",H,[e("div",U,[e("span",q,_(s.name),1)])]),e("td",G,[e("div",J,[o(a,{buttonType:"warning",onClick:h=>t.edit(s.id,s.name)},{default:r(()=>[i("Edit")]),_:2},1032,["onClick"]),o(a,{buttonType:"danger",onClick:h=>t.destroy(s.id)},{default:r(()=>[i("Delete")]),_:2},1032,["onClick"]),o(a,{buttonType:"blue",onClick:h=>t.viewLessons(s.id)},{default:r(()=>[i("View Lessons")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(l(),m("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"theme_name",id:"theme_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.theme_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[0]||(n[0]=s=>t.form.theme_name=s),autocomplete:"off"},null,2),[[u,t.form.theme_name]])])])])]),e("div",te,[e("div",se,[o(a,{onClick:t.store},{default:r(()=>[i("Save")]),_:1},8,["onClick"])])])])):c("",!0),t.show_edit?(l(),m("div",oe,[e("div",re,[ie,e("div",ae,[e("div",de,[ne,e("div",le,[f(e("input",{type:"text",name:"theme_name",id:"theme_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.theme_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[1]||(n[1]=s=>t.form.theme_name=s),autocomplete:"off"},null,2),[[u,t.form.theme_name]])])])])]),e("div",me,[e("div",ce,[o(a,{onClick:t.update},{default:r(()=>[i("Save")]),_:1},8,["onClick"])])])])):c("",!0)])]),o(y,{show:t.isOpen,onClose:n[2]||(n[2]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Theme",confirmationText:"Are you sure want to delete this theme? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{De as default};
