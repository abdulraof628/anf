import{q as l,x as m,v as o,u as w,P as i,F as _,y as e,V as r,z as p,C as x,G as h,K as f,bv as u,m as g}from"./@vue-b5d553e1.js";import{B as k}from"./Authenticated-f12ae66a.js";import{B as a}from"./Button-a75e4165.js";import{r as C,a as $,b as B}from"./@heroicons-6bb93f0b.js";import{H as b,L as D}from"./@inertiajs-df65e401.js";import{C as y}from"./ConfirmationModal-d78f2deb.js";import"./ApplicationLogo-e2b93f7b.js";import"./app-6e1c5045.js";import"./axios-9cbf0d09.js";import"./pusher-js-1c63de54.js";import"./@vueform-f7c8a6df.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./lucide-vue-next-967cc12e.js";import"./@headlessui-1eabfa74.js";const L={class:"py-4 px-4"},T={class:"grid grid-cols-2 gap-4"},j={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},N={class:"grid grid-cols-2 gap-4"},O={class:"space-y-2"},V={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},R={class:"min-w-full divide-y divide-gray-200"},S=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Lesson"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),z={class:"bg-white divide-y divide-gray-200"},A={key:0},P=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),E=[P],F={class:"hover:bg-gray-200"},I={class:"px-6 py-4 whitespace-nowrap"},M={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},K={class:"flex justify-center space-x-2"},J={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Lesson")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"lesson_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},se={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},te={class:"flex justify-end"},oe={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Lesson")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},ne={class:"mb-4"},de=e("label",{for:"lesson_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),le={class:"mt-1 flex rounded-md shadow-sm"},me={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},pe={class:"flex justify-end"},ce={components:{SearchIcon:C,TrashIcon:$,PencilIcon:B,Head:b,Link:D,ConfirmationModal:y},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",unit_id:this.$page.props.unit_id,lesson_name:""},errors:{lesson_name:!1}}},methods:{create(){this.form.lesson_name="",this.show_create=!0,this.show_edit=!1},edit(n,s){this.form.id=n,this.form.lesson_name=s,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.math.lessons.store"),this.form,{preserveState:!1})},update(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.math.lessons.update"),this.form,{preserveState:!1})},destroy(n){this.confirmationRoute="progress_report.settings.math.lessons.destroy",this.confirmationData=n,this.isOpen=!0},viewObjectives(n){this.$inertia.get(route("progress_report.settings.math.objectives"),{level_id:this.$page.props.level_id,term_book_id:this.$page.props.term_book_id,unit_id:this.$page.props.unit_id,lesson_id:n})}}},rs=Object.assign(ce,{__name:"Lessons",setup(n){return(s,d)=>(l(),m(_,null,[o(w(b),{title:"Progress Report"}),o(k,null,{header:i(()=>[]),default:i(()=>[e("div",L,[e("div",T,[e("div",j,[o(a,{buttonType:"gray",url:s.route("progress_report.settings.math.units",{level_id:s.$page.props.level_id,term_book_id:s.$page.props.term_book_id})},{default:i(()=>[r("Back")]),_:1},8,["url"]),o(a,{onClick:s.create},{default:i(()=>[r("New Lesson")]),_:1},8,["onClick"])])]),e("div",N,[e("div",O,[e("div",V,[e("table",R,[S,e("tbody",z,[s.$page.props.lessons.length?p("",!0):(l(),m("tr",A,E)),(l(!0),m(_,null,x(s.$page.props.lessons,(t,v)=>(l(),m("tr",F,[e("td",I,[e("div",M,h(++v),1)]),e("td",H,[e("div",U,[e("span",q,h(t.name),1)])]),e("td",G,[e("div",K,[o(a,{buttonType:"warning",onClick:c=>s.edit(t.id,t.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),o(a,{buttonType:"danger",onClick:c=>s.destroy(t.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"]),o(a,{buttonType:"blue",onClick:c=>s.viewObjectives(t.id)},{default:i(()=>[r("View Objectives")]),_:2},1032,["onClick"])])])]))),256))])])])]),s.show_create?(l(),m("div",J,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"lesson_name",id:"lesson_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.lesson_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[0]||(d[0]=t=>s.form.lesson_name=t),autocomplete:"off"},null,2),[[u,s.form.lesson_name]])])])])]),e("div",se,[e("div",te,[o(a,{onClick:s.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):p("",!0),s.show_edit?(l(),m("div",oe,[e("div",ie,[re,e("div",ae,[e("div",ne,[de,e("div",le,[f(e("input",{type:"text",name:"lesson_name",id:"lesson_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.lesson_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d[1]||(d[1]=t=>s.form.lesson_name=t),autocomplete:"off"},null,2),[[u,s.form.lesson_name]])])])])]),e("div",me,[e("div",pe,[o(a,{onClick:s.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):p("",!0)])]),o(y,{show:s.isOpen,onClose:d[2]||(d[2]=t=>s.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Lesson",confirmationText:"Are you sure want to delete this lesson? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:s.confirmationRoute,confirmationData:s.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{rs as default};
