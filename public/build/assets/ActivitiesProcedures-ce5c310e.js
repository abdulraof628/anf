import{x as d,v as r,u as w,P as i,F as m,q as n,y as e,V as s,z as l,C as x,G as _,K as u,bv as h,m as f}from"./@vue-64c42e7d.js";import{B as k}from"./Authenticated-83e8e551.js";import{B as c}from"./Button-764ae71a.js";import{r as C,a as $,b as A}from"./@heroicons-3c270557.js";import{H as g,L as B}from"./@inertiajs-41d03628.js";import{C as y}from"./ConfirmationModal-cc2fca54.js";import"./ApplicationLogo-64527dd0.js";import"./radix-vue-efedc4b4.js";import"./@floating-ui-7a9770d8.js";import"./class-variance-authority-f96983da.js";import"./app-a861bda2.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./moment-3968d9f3.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./lucide-vue-next-dd1f77f0.js";import"./@headlessui-28549402.js";const D={class:"py-4 px-4"},N={class:"grid grid-cols-2 gap-4"},P={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},T={class:"grid grid-cols-2 gap-4"},j={class:"space-y-2"},R={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},V={class:"min-w-full divide-y divide-gray-200"},S=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Activity & Procedure"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),O={class:"bg-white divide-y divide-gray-200"},z={key:0},L=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found ")],-1),E=[L],F={class:"hover:bg-gray-200"},I={class:"px-6 py-4 whitespace-nowrap"},M={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},K={class:"flex justify-center space-x-2"},J={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Activity & Procedure")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"activity_procedure_name",class:"block text-sm text-gray-700 font-bold"},[s(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},re={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},se=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Activity & Procedure")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"activity_procedure_name",class:"block text-sm text-gray-700 font-bold"},[s(" Name "),e("span",{class:"text-red-500"},"*")],-1),ce={class:"mt-1 flex rounded-md shadow-sm"},pe={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},le={class:"flex justify-end"},me={components:{SearchIcon:C,TrashIcon:$,PencilIcon:A,Head:g,Link:B,ConfirmationModal:y},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",objective_id:this.$page.props.objective_id,activity_procedure_name:""},errors:{activity_procedure_name:!1}}},methods:{create(){this.form.activity_procedure_name="",this.show_create=!0,this.show_edit=!1},edit(p,t){this.form.id=p,this.form.activity_procedure_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.activity_procedure_name){this.errors.activity_procedure_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.activities_procedures.store"),this.form,{preserveState:!1})},update(){if(!this.form.activity_procedure_name){this.errors.activity_procedure_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.activities_procedures.update"),this.form,{preserveState:!1})},destroy(p){this.confirmationRoute="progress_report.settings.coding_robotics.activities_procedures.destroy",this.confirmationData=p,this.isOpen=!0}}},ct=Object.assign(me,{__name:"ActivitiesProcedures",setup(p){return(t,a)=>(n(),d(m,null,[r(w(g),{title:"Progress Report"}),r(k,null,{header:i(()=>[]),default:i(()=>[e("div",D,[e("div",N,[e("div",P,[r(c,{buttonType:"gray",url:t.route("progress_report.settings.coding_robotics.objectives",{level_id:t.$page.props.level_id,lesson_id:t.$page.props.lesson_id,topic_id:t.$page.props.topic_id})},{default:i(()=>[s("Back")]),_:1},8,["url"]),r(c,{onClick:t.create},{default:i(()=>[s("New Activity & Procedure")]),_:1},8,["onClick"])])]),e("div",T,[e("div",j,[e("div",R,[e("table",V,[S,e("tbody",O,[t.$page.props.activities_procedures.length?l("",!0):(n(),d("tr",z,E)),(n(!0),d(m,null,x(t.$page.props.activities_procedures,(o,v)=>(n(),d("tr",F,[e("td",I,[e("div",M,_(++v),1)]),e("td",H,[e("div",U,[e("span",q,_(o.name),1)])]),e("td",G,[e("div",K,[r(c,{buttonType:"warning",onClick:b=>t.edit(o.id,o.name)},{default:i(()=>[s("Edit")]),_:2},1032,["onClick"]),r(c,{buttonType:"danger",onClick:b=>t.destroy(o.id)},{default:i(()=>[s("Delete")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(n(),d("div",J,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[u(e("input",{type:"text",name:"activity_procedure_name",id:"activity_procedure_name",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.activity_procedure_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":a[0]||(a[0]=o=>t.form.activity_procedure_name=o),autocomplete:"off"},null,2),[[h,t.form.activity_procedure_name]])])])])]),e("div",te,[e("div",oe,[r(c,{onClick:t.store},{default:i(()=>[s("Save")]),_:1},8,["onClick"])])])])):l("",!0),t.show_edit?(n(),d("div",re,[e("div",ie,[se,e("div",ae,[e("div",de,[ne,e("div",ce,[u(e("input",{type:"text",name:"activity_procedure_name",id:"activity_procedure_name",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.activity_procedure_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":a[1]||(a[1]=o=>t.form.activity_procedure_name=o),autocomplete:"off"},null,2),[[h,t.form.activity_procedure_name]])])])])]),e("div",pe,[e("div",le,[r(c,{onClick:t.update},{default:i(()=>[s("Save")]),_:1},8,["onClick"])])])])):l("",!0)])]),r(y,{show:t.isOpen,onClose:a[2]||(a[2]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Activity & Procedure",confirmationText:"Are you sure want to delete this activity & procedure? This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{ct as default};
