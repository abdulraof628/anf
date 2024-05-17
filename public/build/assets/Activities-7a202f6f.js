import{o as d,c as n,a as o,u as w,w as i,F as p,H as y,L as x,d as e,g as a,q as m,e as k,t as _,h as f,v as h,n as u}from"./app-4d4cbe7d.js";import{B as C}from"./Authenticated-cde3a9ac.js";import{B as l}from"./Button-7893ea7c.js";import{r as $}from"./PencilIcon-c96ef037.js";import{r as A}from"./SearchIcon-dd859cd1.js";import{r as B}from"./TrashIcon-707944e9.js";import{C as v}from"./ConfirmationModal-79b2437a.js";import{P as D}from"./Pagination-e6d8d233.js";import"./ApplicationLogo-7e99a00b.js";import"./NavLink-9d0a350c.js";import"./XIcon-33e2d1a0.js";import"./vue3-perfect-scrollbar-edf4bd5b.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-e953a9a0.js";import"./keyboard-887c58cb.js";const N={class:"py-4 px-4"},T={class:"overflow-x-auto"},R={class:"m-3"},S={class:"grid grid-cols-2 gap-4"},V={class:"align-middle inline-block min-w-full"},j={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},O={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},L={class:"min-w-full divide-y divide-gray-200"},z=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),E={class:"bg-white divide-y divide-gray-200"},F={key:0},I=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),M=[I],P={class:"px-6 py-4 whitespace-nowrap"},H={class:"text-sm font-medium text-gray-700"},U={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-900"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Add Activity")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"activity_name",class:"block text-sm text-gray-700 font-bold"},[a(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},se={class:"flex justify-end"},oe={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ae=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Activity")],-1),re={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"activity_name",class:"block text-sm text-gray-700 font-bold"},[a(" Name "),e("span",{class:"text-red-500"},"*")],-1),le={class:"mt-1 flex rounded-md shadow-sm"},ce={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},me={class:"flex justify-end"},pe={components:{SearchIcon:A,TrashIcon:B,PencilIcon:$,ConfirmationModal:v,Head:y,Link:x,Pagination:D},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",lesson_id:this.$page.props.lesson_id,activity_name:""},errors:{activity_name:!1}}},methods:{create(){this.form.activity_name="",this.show_create=!0,this.show_edit=!1},store(){if(!this.form.activity_name){this.errors.activity_name=!0;return}this.$inertia.post(route("art_gallery.setting.activities.store"),this.form,{preserveState:!1})},edit(c,t){this.form.id=c,this.form.activity_name=t,this.show_edit=!0,this.show_create=!1},update(){if(!this.form.activity_name){this.errors.activity_name=!0;return}this.$inertia.post(route("art_gallery.setting.activities.update"),this.form,{preserveState:!1})},destroy(c){this.confirmationRoute="art_gallery.setting.activities.delete",this.confirmationData=c,this.isOpen=!0}}},Ne=Object.assign(pe,{__name:"Activities",setup(c){return(t,r)=>(d(),n(p,null,[o(w(y),{title:"Art Gallery"}),o(C,null,{header:i(()=>[]),default:i(()=>[e("div",N,[e("div",T,[e("div",R,[e("div",S,[e("div",V,[e("div",j,[o(l,{buttonType:"gray",class:"py-2 px-4",route:t.route("art_gallery.setting.lessons",{level_id:t.$page.props.level_id,theme_id:t.$page.props.theme_id,lesson_id:t.lesson_id})},{default:i(()=>[a("Back")]),_:1},8,["route"]),o(l,{class:"py-2 px-4",onClick:t.create},{default:i(()=>[a("New Activity")]),_:1},8,["onClick"])]),e("div",O,[e("table",L,[z,e("tbody",E,[t.$page.props.activities?m("",!0):(d(),n("tr",F,M)),(d(!0),n(p,null,k(t.$page.props.activities,(s,g)=>(d(),n("tr",{class:"hover:bg-gray-200",key:s.id},[e("td",P,[e("div",H,_(++g),1)]),e("td",U,[e("div",q,_(s.name),1)]),e("td",G,[e("div",J,[o(l,{buttonType:"warning",onClick:b=>t.edit(s.id,s.name)},{default:i(()=>[a("Edit")]),_:2},1032,["onClick"]),o(l,{buttonType:"danger",onClick:b=>t.destroy(s.id)},{default:i(()=>[a("Delete")]),_:2},1032,["onClick"])])])]))),128))])])])]),t.show_create?(d(),n("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"activity_name",id:"activity_name",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.activity_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[0]||(r[0]=s=>t.form.activity_name=s),autocomplete:"off"},null,2),[[h,t.form.activity_name]])])])])]),e("div",te,[e("div",se,[o(l,{onClick:t.store},{default:i(()=>[a("Save")]),_:1},8,["onClick"])])])])):m("",!0),t.show_edit?(d(),n("div",oe,[e("div",ie,[ae,e("div",re,[e("div",de,[ne,e("div",le,[f(e("input",{type:"text",name:"activity_name",id:"activity_name",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.activity_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[1]||(r[1]=s=>t.form.activity_name=s),autocomplete:"off"},null,2),[[h,t.form.activity_name]])])])])]),e("div",ce,[e("div",me,[o(l,{onClick:t.update},{default:i(()=>[a("Save")]),_:1},8,["onClick"])])])])):m("",!0)])])]),o(v,{show:t.isOpen,onClose:r[2]||(r[2]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Activity",confirmationText:"Are you sure want to delete this activity?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{Ne as default};
