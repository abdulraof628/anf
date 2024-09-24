import{y as l,x as i,u as w,Q as r,F as b,t as p,z as e,W as d,A as m,D as j,H as f,L as u,bH as g,q as v}from"./@vue-fa39c8c3.js";import{B as x}from"./Authenticated-2464c72b.js";import{B as a}from"./Button-912507f9.js";import{r as k,a as C,b as $}from"./@heroicons-4f5c57a0.js";import{H as _,L as D}from"./@inertiajs-c7856c69.js";import{C as h}from"./ConfirmationModal-8b143ad0.js";import"./ApplicationLogo-bc2e3fb2.js";import"./radix-vue-b52878ef.js";import"./@floating-ui-d22e3cce.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f5e40355.js";import"./axios-1779699b.js";import"./pusher-js-ddef06ed.js";import"./@vueform-b962800d.js";import"./@vuepic-62f3604d.js";import"./@babel-1b80a44a.js";import"./cropperjs-aef143af.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1a2c766e.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-0175b845.js";import"./@radix-icons-a5b56816.js";import"./lodash.isequal-32ec3540.js";import"./vue-e0f979ce.js";import"./lodash.clonedeep-2dfa23d9.js";import"./qs-fddd7d85.js";import"./side-channel-a64b5f12.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-6df2283d.js";import"./deepmerge-89e33937.js";import"./nprogress-4f526f01.js";import"./lucide-vue-next-f94b1320.js";import"./@headlessui-4b33c316.js";const O={class:"py-4 px-4"},B={class:"grid grid-cols-2 gap-4"},T={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},N={class:"grid grid-cols-2 gap-4"},A={class:"space-y-2"},R={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},V={class:"min-w-full divide-y divide-gray-200"},P={class:"bg-white divide-y divide-gray-200"},S={key:0},L={class:"hover:bg-gray-200"},z={class:"px-6 py-4 whitespace-nowrap"},H={class:"text-sm font-medium text-gray-700"},E={class:"px-6 py-4 whitespace-nowrap"},F={class:"flex flex-col space-y-1 text-sm text-gray-900"},I={class:"font-semibold whitespace-normal"},M={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},U={class:"flex justify-center space-x-2"},q={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W={class:"grid grid-cols-1 gap-0 sm:gap-4"},G={class:"mb-4"},J={class:"mt-1 flex rounded-md shadow-sm"},K={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},X={class:"flex justify-end"},Y={key:1,class:"space-y-2"},Z={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ee={class:"grid grid-cols-1 gap-0 sm:gap-4"},te={class:"mb-4"},oe={class:"mt-1 flex rounded-md shadow-sm"},se={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},ie={class:"flex justify-end"},re={components:{SearchIcon:k,TrashIcon:C,PencilIcon:$,Head:_,Link:D,ConfirmationModal:h},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",topic_id:this.$page.props.topic_id,objective_name:""},errors:{objective_name:!1}}},methods:{create(){this.form.objective_name="",this.show_create=!0,this.show_edit=!1},edit(n,o){this.form.id=n,this.form.objective_name=o,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.objectives.store"),this.form,{preserveState:!1})},update(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.objectives.update"),this.form,{preserveState:!1})},destroy(n){this.confirmationRoute="progress_report.settings.coding_robotics.objectives.destroy",this.confirmationData=n,this.isOpen=!0},viewActivitiesProcedures(n){this.$inertia.get(route("progress_report.settings.coding_robotics.activities_procedures"),{level_id:this.$page.props.level_id,lesson_id:this.$page.props.lesson_id,topic_id:this.$page.props.topic_id,objective_id:n})}}},Ze=Object.assign(re,{__name:"Objectives",setup(n){return(o,t)=>(p(),l(b,null,[i(w(_),{title:"Progress Report"}),i(x,null,{header:r(()=>t[3]||(t[3]=[])),default:r(()=>[e("div",O,[e("div",B,[e("div",T,[i(a,{buttonType:"gray",url:o.route("progress_report.settings.coding_robotics.topics",{level_id:o.$page.props.level_id,lesson_id:o.$page.props.lesson_id})},{default:r(()=>t[4]||(t[4]=[d("Back")])),_:1},8,["url"]),i(a,{onClick:o.create},{default:r(()=>t[5]||(t[5]=[d("New Objective")])),_:1},8,["onClick"])])]),e("div",N,[e("div",A,[e("div",R,[e("table",V,[t[10]||(t[10]=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Objective"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1)),e("tbody",P,[o.$page.props.objectives.length?m("",!0):(p(),l("tr",S,t[6]||(t[6]=[e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found ")],-1)]))),(p(!0),l(b,null,j(o.$page.props.objectives,(s,y)=>(p(),l("tr",L,[e("td",z,[e("div",H,f(++y),1)]),e("td",E,[e("div",F,[e("span",I,f(s.name),1)])]),e("td",M,[e("div",U,[i(a,{buttonType:"warning",onClick:c=>o.edit(s.id,s.name)},{default:r(()=>t[7]||(t[7]=[d("Edit")])),_:2},1032,["onClick"]),i(a,{buttonType:"danger",onClick:c=>o.destroy(s.id)},{default:r(()=>t[8]||(t[8]=[d("Delete")])),_:2},1032,["onClick"]),i(a,{buttonType:"blue",onClick:c=>o.viewActivitiesProcedures(s.id)},{default:r(()=>t[9]||(t[9]=[d("View Activities & Procedures")])),_:2},1032,["onClick"])])])]))),256))])])])]),o.show_create?(p(),l("div",q,[e("div",Q,[t[12]||(t[12]=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Objective")],-1)),e("div",W,[e("div",G,[t[11]||(t[11]=e("label",{for:"objective_name",class:"block text-sm text-gray-700 font-bold"},[d(" Name "),e("span",{class:"text-red-500"},"*")],-1)),e("div",J,[u(e("input",{type:"text",name:"objective_name",id:"objective_name",class:v(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.errors.objective_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.objective_name=s),autocomplete:"off"},null,2),[[g,o.form.objective_name]])])])])]),e("div",K,[e("div",X,[i(a,{onClick:o.store},{default:r(()=>t[13]||(t[13]=[d("Save")])),_:1},8,["onClick"])])])])):m("",!0),o.show_edit?(p(),l("div",Y,[e("div",Z,[t[15]||(t[15]=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Objective")],-1)),e("div",ee,[e("div",te,[t[14]||(t[14]=e("label",{for:"objective_name",class:"block text-sm text-gray-700 font-bold"},[d(" Name "),e("span",{class:"text-red-500"},"*")],-1)),e("div",oe,[u(e("input",{type:"text",name:"objective_name",id:"objective_name",class:v(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.errors.objective_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.objective_name=s),autocomplete:"off"},null,2),[[g,o.form.objective_name]])])])])]),e("div",se,[e("div",ie,[i(a,{onClick:o.update},{default:r(()=>t[16]||(t[16]=[d("Save")])),_:1},8,["onClick"])])])])):m("",!0)])]),i(h,{show:o.isOpen,onClose:t[2]||(t[2]=s=>o.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Objective",confirmationText:"Are you sure want to delete this objective? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:o.confirmationRoute,confirmationData:o.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{Ze as default};
