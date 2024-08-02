import{q as c,x as l,v as s,u as w,P as i,F as _,y as e,V as r,z as p,C as j,G as h,K as b,bv as f,m as u}from"./@vue-7927adca.js";import{B as x}from"./Authenticated-0bdf10fa.js";import{B as a}from"./Button-152ae367.js";import{r as k,a as C,b as $}from"./@heroicons-9fa5d0e6.js";import{H as g,L as O}from"./@inertiajs-751b4e3a.js";import{C as v}from"./ConfirmationModal-58b9ce11.js";import"./ApplicationLogo-04b49080.js";import"./radix-vue-8d4617bd.js";import"./@floating-ui-1e8ef191.js";import"./class-variance-authority-f96983da.js";import"./app-a931a781.js";import"./axios-9cbf0d09.js";import"./pusher-js-36ce843e.js";import"./@vueform-aef92a1c.js";import"./@vuepic-ba9c4d94.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-8efab0ec.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-e8993a83.js";import"./@radix-icons-9a1732cf.js";import"./lodash.isequal-979ca240.js";import"./vue-446e1be1.js";import"./lodash.clonedeep-a2a90952.js";import"./qs-c5780410.js";import"./side-channel-c3de7aff.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-30e6e08c.js";import"./deepmerge-89e33937.js";import"./nprogress-2c66c043.js";import"./lucide-vue-next-4cc1c774.js";import"./@headlessui-d829f326.js";const B={class:"py-4 px-4"},D={class:"grid grid-cols-2 gap-4"},T={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},N={class:"grid grid-cols-2 gap-4"},V={class:"space-y-2"},A={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},P={class:"min-w-full divide-y divide-gray-200"},R=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Objective"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),S={class:"bg-white divide-y divide-gray-200"},z={key:0},L=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found ")],-1),E=[L],F={class:"hover:bg-gray-200"},I={class:"px-6 py-4 whitespace-nowrap"},M={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},K={class:"flex justify-center space-x-2"},J={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Objective")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"objective_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},se={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Objective")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"objective_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ce={class:"mt-1 flex rounded-md shadow-sm"},le={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},pe={class:"flex justify-end"},me={components:{SearchIcon:k,TrashIcon:C,PencilIcon:$,Head:g,Link:O,ConfirmationModal:v},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",topic_id:this.$page.props.topic_id,objective_name:""},errors:{objective_name:!1}}},methods:{create(){this.form.objective_name="",this.show_create=!0,this.show_edit=!1},edit(d,t){this.form.id=d,this.form.objective_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.objectives.store"),this.form,{preserveState:!1})},update(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.objectives.update"),this.form,{preserveState:!1})},destroy(d){this.confirmationRoute="progress_report.settings.coding_robotics.objectives.destroy",this.confirmationData=d,this.isOpen=!0},viewActivitiesProcedures(d){this.$inertia.get(route("progress_report.settings.coding_robotics.activities_procedures"),{level_id:this.$page.props.level_id,lesson_id:this.$page.props.lesson_id,topic_id:this.$page.props.topic_id,objective_id:d})}}},rt=Object.assign(me,{__name:"Objectives",setup(d){return(t,n)=>(c(),l(_,null,[s(w(g),{title:"Progress Report"}),s(x,null,{header:i(()=>[]),default:i(()=>[e("div",B,[e("div",D,[e("div",T,[s(a,{buttonType:"gray",url:t.route("progress_report.settings.coding_robotics.topics",{level_id:t.$page.props.level_id,lesson_id:t.$page.props.lesson_id})},{default:i(()=>[r("Back")]),_:1},8,["url"]),s(a,{onClick:t.create},{default:i(()=>[r("New Objective")]),_:1},8,["onClick"])])]),e("div",N,[e("div",V,[e("div",A,[e("table",P,[R,e("tbody",S,[t.$page.props.objectives.length?p("",!0):(c(),l("tr",z,E)),(c(!0),l(_,null,j(t.$page.props.objectives,(o,y)=>(c(),l("tr",F,[e("td",I,[e("div",M,h(++y),1)]),e("td",H,[e("div",U,[e("span",q,h(o.name),1)])]),e("td",G,[e("div",K,[s(a,{buttonType:"warning",onClick:m=>t.edit(o.id,o.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),s(a,{buttonType:"danger",onClick:m=>t.destroy(o.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"]),s(a,{buttonType:"blue",onClick:m=>t.viewActivitiesProcedures(o.id)},{default:i(()=>[r("View Activities & Procedures")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(c(),l("div",J,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[b(e("input",{type:"text",name:"objective_name",id:"objective_name",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.objective_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[0]||(n[0]=o=>t.form.objective_name=o),autocomplete:"off"},null,2),[[f,t.form.objective_name]])])])])]),e("div",te,[e("div",oe,[s(a,{onClick:t.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):p("",!0),t.show_edit?(c(),l("div",se,[e("div",ie,[re,e("div",ae,[e("div",de,[ne,e("div",ce,[b(e("input",{type:"text",name:"objective_name",id:"objective_name",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.objective_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[1]||(n[1]=o=>t.form.objective_name=o),autocomplete:"off"},null,2),[[f,t.form.objective_name]])])])])]),e("div",le,[e("div",pe,[s(a,{onClick:t.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):p("",!0)])]),s(v,{show:t.isOpen,onClose:n[2]||(n[2]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Objective",confirmationText:"Are you sure want to delete this objective? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{rt as default};
