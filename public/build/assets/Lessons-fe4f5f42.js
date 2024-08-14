import{x as l,v as t,u as w,P as i,F as _,q as c,y as e,V as r,z as m,C as x,G as h,K as f,bv as u,m as g}from"./@vue-64c42e7d.js";import{B as k}from"./Authenticated-83e8e551.js";import{B as n}from"./Button-764ae71a.js";import{r as C,a as T,b as $}from"./@heroicons-3c270557.js";import{H as b,L as B}from"./@inertiajs-41d03628.js";import{C as y}from"./ConfirmationModal-cc2fca54.js";import"./ApplicationLogo-64527dd0.js";import"./radix-vue-efedc4b4.js";import"./@floating-ui-7a9770d8.js";import"./class-variance-authority-f96983da.js";import"./app-a861bda2.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./moment-3968d9f3.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./lucide-vue-next-dd1f77f0.js";import"./@headlessui-28549402.js";const D={class:"py-4 px-4"},L={class:"grid grid-cols-2 gap-4"},N={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},V={class:"grid grid-cols-2 gap-4"},R={class:"space-y-2"},S={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},j={class:"min-w-full divide-y divide-gray-200"},O=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Lesson"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),z={class:"bg-white divide-y divide-gray-200"},A={key:0},P=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found ")],-1),E=[P],F={class:"hover:bg-gray-200"},I={class:"px-6 py-4 whitespace-nowrap"},M={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},K={class:"flex justify-center space-x-2"},J={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Lesson")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"lesson_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},se={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},te={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Lesson")],-1),ne={class:"grid grid-cols-1 gap-0 sm:gap-4"},ae={class:"mb-4"},de=e("label",{for:"lesson_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),le={class:"mt-1 flex rounded-md shadow-sm"},ce={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},me={class:"flex justify-end"},pe={components:{SearchIcon:C,TrashIcon:T,PencilIcon:$,Head:b,Link:B,ConfirmationModal:y},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",level_id:this.$page.props.level_id,lesson_name:""},errors:{lesson_name:!1}}},methods:{create(){this.form.lesson_name="",this.show_create=!0,this.show_edit=!1},edit(a,s){this.form.id=a,this.form.lesson_name=s,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.lessons.store"),this.form,{preserveState:!1})},update(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.lessons.update"),this.form,{preserveState:!1})},destroy(a){this.confirmationRoute="progress_report.settings.coding_robotics.lessons.destroy",this.confirmationData=a,this.isOpen=!0},viewTopics(a){this.$inertia.get(route("progress_report.settings.coding_robotics.topics"),{level_id:this.$page.props.level_id,lesson_id:a})}}},ls=Object.assign(pe,{__name:"Lessons",setup(a){return(s,d)=>(c(),l(_,null,[t(w(b),{title:"Progress Report"}),t(k,null,{header:i(()=>[]),default:i(()=>[e("div",D,[e("div",L,[e("div",N,[t(n,{buttonType:"gray",url:s.route("progress_report.settings.coding_robotics.levels")},{default:i(()=>[r("Back")]),_:1},8,["url"]),t(n,{onClick:s.create},{default:i(()=>[r("New Lesson")]),_:1},8,["onClick"])])]),e("div",V,[e("div",R,[e("div",S,[e("table",j,[O,e("tbody",z,[s.$page.props.lessons.length?m("",!0):(c(),l("tr",A,E)),(c(!0),l(_,null,x(s.$page.props.lessons,(o,v)=>(c(),l("tr",F,[e("td",I,[e("div",M,h(++v),1)]),e("td",H,[e("div",U,[e("span",q,h(o.name),1)])]),e("td",G,[e("div",K,[t(n,{buttonType:"warning",onClick:p=>s.edit(o.id,o.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),t(n,{buttonType:"danger",onClick:p=>s.destroy(o.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"]),t(n,{buttonType:"blue",onClick:p=>s.viewTopics(o.id)},{default:i(()=>[r("View Topics")]),_:2},1032,["onClick"])])])]))),256))])])])]),s.show_create?(c(),l("div",J,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"lesson_name",id:"lesson_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.lesson_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[0]||(d[0]=o=>s.form.lesson_name=o),autocomplete:"off"},null,2),[[u,s.form.lesson_name]])])])])]),e("div",se,[e("div",oe,[t(n,{onClick:s.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0),s.show_edit?(c(),l("div",te,[e("div",ie,[re,e("div",ne,[e("div",ae,[de,e("div",le,[f(e("input",{type:"text",name:"lesson_name",id:"lesson_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.lesson_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[1]||(d[1]=o=>s.form.lesson_name=o),autocomplete:"off"},null,2),[[u,s.form.lesson_name]])])])])]),e("div",ce,[e("div",me,[t(n,{onClick:s.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0)])]),t(y,{show:s.isOpen,onClose:d[2]||(d[2]=o=>s.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Lesson",confirmationText:"Are you sure want to delete this lesson? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:s.confirmationRoute,confirmationData:s.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{ls as default};
