import{o as c,c as l,a as i,u as w,w as o,F as _,H as y,L as x,d as e,g as a,p as m,e as k,t as h,h as f,v as u,n as g}from"./app-c055ac41.js";import{B as C}from"./Authenticated-8cff57c3.js";import{B as r}from"./Button-edb43cea.js";import{r as $}from"./PencilIcon-cfc7c9ab.js";import{r as A}from"./SearchIcon-0bdd601f.js";import{r as B}from"./TrashIcon-f75dede2.js";import{C as v}from"./ConfirmationModal-2dc2a1fc.js";import"./ApplicationLogo-f59e2141.js";import"./XIcon-1249adca.js";import"./vue3-perfect-scrollbar-e3a0aed0.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-3e273253.js";import"./keyboard-202411e4.js";const D={class:"py-4 px-4"},T={class:"grid grid-cols-2 gap-4"},N={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},O={class:"grid grid-cols-2 gap-4"},R={class:"space-y-2"},V={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},S={class:"min-w-full divide-y divide-gray-200"},j=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Activity"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),L={class:"bg-white divide-y divide-gray-200"},z={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),F=[E],I={class:"hover:bg-gray-200"},M={class:"px-6 py-4 whitespace-nowrap"},P={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Activity")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"activity_name",class:"block text-sm text-gray-700 font-bold"},[a(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},se={class:"flex justify-end"},ie={key:1,class:"space-y-2"},oe={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ae=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Activity")],-1),re={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"activity_name",class:"block text-sm text-gray-700 font-bold"},[a(" Name "),e("span",{class:"text-red-500"},"*")],-1),ce={class:"mt-1 flex rounded-md shadow-sm"},le={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},me={class:"flex justify-end"},pe={components:{SearchIcon:A,TrashIcon:B,PencilIcon:$,Head:y,Link:x,ConfirmationModal:v},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",lesson_id:this.$page.props.lesson_id,activity_name:""},errors:{activity_name:!1}}},methods:{create(){this.form.activity_name="",this.show_create=!0,this.show_edit=!1},edit(d,t){this.form.id=d,this.form.activity_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.activity_name){this.errors.activity_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.activities.store"),this.form,{preserveState:!1})},update(){if(!this.form.activity_name){this.errors.activity_name=!0;return}this.$inertia.post(route("progress_report.settings.digital_art.activities.update"),this.form,{preserveState:!1})},destroy(d){this.confirmationRoute="progress_report.settings.digital_art.activities.destroy",this.confirmationData=d,this.isOpen=!0},viewOutcomes(d){this.$inertia.get(route("progress_report.settings.digital_art.outcomes"),{level_id:this.$page.props.level_id,theme_id:this.$page.props.theme_id,lesson_id:this.$page.props.lesson_id,activity_id:d})}}},Be=Object.assign(pe,{__name:"Activities",setup(d){return(t,n)=>(c(),l(_,null,[i(w(y),{title:"Progress Report"}),i(C,null,{header:o(()=>[]),default:o(()=>[e("div",D,[e("div",T,[e("div",N,[i(r,{buttonType:"gray",route:t.route("progress_report.settings.digital_art.lessons",{level_id:t.$page.props.level_id,theme_id:t.$page.props.theme_id})},{default:o(()=>[a("Back")]),_:1},8,["route"]),i(r,{onClick:t.create},{default:o(()=>[a("New Activity")]),_:1},8,["onClick"])])]),e("div",O,[e("div",R,[e("div",V,[e("table",S,[j,e("tbody",L,[t.$page.props.activities.length?m("",!0):(c(),l("tr",z,F)),(c(!0),l(_,null,k(t.$page.props.activities,(s,b)=>(c(),l("tr",I,[e("td",M,[e("div",P,h(++b),1)]),e("td",H,[e("div",U,[e("span",q,h(s.name),1)])]),e("td",G,[e("div",J,[i(r,{buttonType:"warning",onClick:p=>t.edit(s.id,s.name)},{default:o(()=>[a("Edit")]),_:2},1032,["onClick"]),i(r,{buttonType:"danger",onClick:p=>t.destroy(s.id)},{default:o(()=>[a("Delete")]),_:2},1032,["onClick"]),i(r,{buttonType:"blue",onClick:p=>t.viewOutcomes(s.id)},{default:o(()=>[a("View Outcomes")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(c(),l("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"activity_name",id:"activity_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.activity_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[0]||(n[0]=s=>t.form.activity_name=s),autocomplete:"off"},null,2),[[u,t.form.activity_name]])])])])]),e("div",te,[e("div",se,[i(r,{onClick:t.store},{default:o(()=>[a("Save")]),_:1},8,["onClick"])])])])):m("",!0),t.show_edit?(c(),l("div",ie,[e("div",oe,[ae,e("div",re,[e("div",de,[ne,e("div",ce,[f(e("input",{type:"text",name:"activity_name",id:"activity_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.activity_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[1]||(n[1]=s=>t.form.activity_name=s),autocomplete:"off"},null,2),[[u,t.form.activity_name]])])])])]),e("div",le,[e("div",me,[i(r,{onClick:t.update},{default:o(()=>[a("Save")]),_:1},8,["onClick"])])])])):m("",!0)])]),i(v,{show:t.isOpen,onClose:n[2]||(n[2]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Activity",confirmationText:"Are you sure want to delete this activity? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{Be as default};