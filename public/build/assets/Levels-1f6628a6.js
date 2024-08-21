import{o as d,c as n,a as o,u as w,w as r,F as _,H as g,L as x,d as e,g as i,q as m,e as k,t as h,h as f,v as u,n as v}from"./app-101444dd.js";import{B as C}from"./Authenticated-ea2248ed.js";import{B as c}from"./Button-71468147.js";import{r as L}from"./PencilIcon-b598c6d8.js";import{r as $}from"./SearchIcon-872e9e3a.js";import{r as D}from"./TrashIcon-e0c1e8c7.js";import{C as b}from"./ConfirmationModal-7f883f6a.js";import"./ApplicationLogo-8115ae4b.js";import"./XIcon-4c26867b.js";import"./perfect-scrollbar.esm-cd9c85a5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-beae56c4.js";import"./moment-55cb88ed.js";import"./transition-c8c23bf2.js";import"./keyboard-e15964ef.js";const B={class:"py-4 px-4"},N={class:"grid grid-cols-2 gap-4"},T={class:"flex justify-end pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},R={class:"flex"},V={class:"grid grid-cols-2 gap-4"},S={class:"space-y-2"},j={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},O={class:"min-w-full divide-y divide-gray-200"},A=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Level"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),z={class:"bg-white divide-y divide-gray-200"},E={key:0},F=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),I=[F],M={class:"hover:bg-gray-200"},P={class:"px-6 py-4 whitespace-nowrap"},H={class:"text-sm font-medium text-gray-700"},U={class:"px-6 py-4 whitespace-nowrap"},q={class:"flex flex-col space-y-1 text-sm text-gray-900"},G={class:"font-semibold"},J={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},K={class:"flex justify-center space-x-2"},Q={key:0,class:"space-y-2"},W={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},X=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Level")],-1),Y={class:"grid grid-cols-1 gap-0 sm:gap-4"},Z={class:"mb-4"},ee=e("label",{for:"level_name",class:"block text-sm text-gray-700 font-bold"},[i(" Name "),e("span",{class:"text-red-500"},"*")],-1),te={class:"mt-1 flex rounded-md shadow-sm"},se={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},re={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ae=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Level")],-1),le={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"level_name",class:"block text-sm text-gray-700 font-bold"},[i(" Name "),e("span",{class:"text-red-500"},"*")],-1),ce={class:"mt-1 flex rounded-md shadow-sm"},me={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},pe={class:"flex justify-end"},_e={components:{SearchIcon:$,TrashIcon:D,PencilIcon:L,Head:g,Link:x,ConfirmationModal:b},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",level_name:""},errors:{level_name:!1}}},methods:{create(){this.form.level_name="",this.show_create=!0,this.show_edit=!1},edit(a,t){this.form.id=a,this.form.level_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.level_name){this.errors.level_name=!0;return}this.$inertia.post(route("progress_report.settings.little_bot.levels.store"),this.form,{preserveState:!1})},update(){if(!this.form.level_name){this.errors.level_name=!0;return}this.$inertia.post(route("progress_report.settings.little_bot.levels.update"),this.form,{preserveState:!1})},destroy(a){this.confirmationRoute="progress_report.settings.little_bot.levels.destroy",this.confirmationData=a,this.isOpen=!0},viewLessons(a){this.$inertia.get(route("progress_report.settings.little_bot.lessons"),{level_id:a})}}},Ne=Object.assign(_e,{__name:"Levels",setup(a){return(t,l)=>(d(),n(_,null,[o(w(g),{title:"Progress Report"}),o(C,null,{header:r(()=>[]),default:r(()=>[e("div",B,[e("div",N,[e("div",T,[e("div",R,[o(c,{onClick:t.create},{default:r(()=>[i("New Level")]),_:1},8,["onClick"])])])]),e("div",V,[e("div",S,[e("div",j,[e("table",O,[A,e("tbody",z,[t.$page.props.levels.length?m("",!0):(d(),n("tr",E,I)),(d(!0),n(_,null,k(t.$page.props.levels,(s,y)=>(d(),n("tr",M,[e("td",P,[e("div",H,h(++y),1)]),e("td",U,[e("div",q,[e("span",G,h(s.name),1)])]),e("td",J,[e("div",K,[o(c,{buttonType:"warning",onClick:p=>t.edit(s.id,s.name)},{default:r(()=>[i("Edit")]),_:2},1032,["onClick"]),o(c,{buttonType:"danger",onClick:p=>t.destroy(s.id)},{default:r(()=>[i("Delete")]),_:2},1032,["onClick"]),o(c,{buttonType:"blue",onClick:p=>t.viewLessons(s.id)},{default:r(()=>[i("View Lessons")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(d(),n("div",Q,[e("div",W,[X,e("div",Y,[e("div",Z,[ee,e("div",te,[f(e("input",{type:"text",name:"level_name",id:"level_name",class:v(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.level_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":l[0]||(l[0]=s=>t.form.level_name=s),autocomplete:"off"},null,2),[[u,t.form.level_name]])])])])]),e("div",se,[e("div",oe,[o(c,{onClick:t.store},{default:r(()=>[i("Save")]),_:1},8,["onClick"])])])])):m("",!0),t.show_edit?(d(),n("div",re,[e("div",ie,[ae,e("div",le,[e("div",de,[ne,e("div",ce,[f(e("input",{type:"text",name:"level_name",id:"level_name",class:v(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.level_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":l[1]||(l[1]=s=>t.form.level_name=s),autocomplete:"off"},null,2),[[u,t.form.level_name]])])])])]),e("div",me,[e("div",pe,[o(c,{onClick:t.update},{default:r(()=>[i("Save")]),_:1},8,["onClick"])])])])):m("",!0)])]),o(b,{show:t.isOpen,onClose:l[2]||(l[2]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Level",confirmationText:"Are you sure want to delete this level? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{Ne as default};
