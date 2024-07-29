import{q as d,x as n,v as s,u as w,P as i,F as p,y as e,V as r,z as m,C as j,G as _,K as h,bv as f,m as b}from"./@vue-b5d553e1.js";import{B as x}from"./Authenticated-f12ae66a.js";import{B as c}from"./Button-a75e4165.js";import{r as k,a as C,b as $}from"./@heroicons-6bb93f0b.js";import{H as u,L as O}from"./@inertiajs-df65e401.js";import{C as g}from"./ConfirmationModal-d78f2deb.js";import"./ApplicationLogo-e2b93f7b.js";import"./app-6e1c5045.js";import"./axios-9cbf0d09.js";import"./pusher-js-1c63de54.js";import"./@vueform-f7c8a6df.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./lucide-vue-next-967cc12e.js";import"./@headlessui-1eabfa74.js";const B={class:"py-4 px-4"},D={class:"grid grid-cols-2 gap-4"},N={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},T={class:"grid grid-cols-2 gap-4"},R={class:"space-y-2"},V={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},S={class:"min-w-full divide-y divide-gray-200"},z=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Objective"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),A={class:"bg-white divide-y divide-gray-200"},L={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),F=[E],I={class:"hover:bg-gray-200"},M={class:"px-6 py-4 whitespace-nowrap"},P={class:"text-sm font-medium text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold whitespace-normal"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},K={class:"flex justify-center space-x-2"},J={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Objective")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"objective_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},se={key:1,class:"space-y-2"},ie={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},re=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Objective")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"objective_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),ce={class:"mt-1 flex rounded-md shadow-sm"},le={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},me={class:"flex justify-end"},pe={components:{SearchIcon:k,TrashIcon:C,PencilIcon:$,Head:u,Link:O,ConfirmationModal:g},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",lesson_id:this.$page.props.lesson_id,objective_name:""},errors:{objective_name:!1}}},methods:{create(){this.form.objective_name="",this.show_create=!0,this.show_edit=!1},edit(l,t){this.form.id=l,this.form.objective_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.math.objectives.store"),this.form,{preserveState:!1})},update(){if(!this.form.objective_name){this.errors.objective_name=!0;return}this.$inertia.post(route("progress_report.settings.math.objectives.update"),this.form,{preserveState:!1})},destroy(l){this.confirmationRoute="progress_report.settings.math.objectives.destroy",this.confirmationData=l,this.isOpen=!0}}},rt=Object.assign(pe,{__name:"Objectives",setup(l){return(t,a)=>(d(),n(p,null,[s(w(u),{title:"Progress Report"}),s(x,null,{header:i(()=>[]),default:i(()=>[e("div",B,[e("div",D,[e("div",N,[s(c,{buttonType:"gray",url:t.route("progress_report.settings.math.lessons",{level_id:t.$page.props.level_id,term_book_id:t.$page.props.term_book_id,unit_id:t.$page.props.unit_id})},{default:i(()=>[r("Back")]),_:1},8,["url"]),s(c,{onClick:t.create},{default:i(()=>[r("New Objective")]),_:1},8,["onClick"])])]),e("div",T,[e("div",R,[e("div",V,[e("table",S,[z,e("tbody",A,[t.$page.props.objectives.length?m("",!0):(d(),n("tr",L,F)),(d(!0),n(p,null,j(t.$page.props.objectives,(o,v)=>(d(),n("tr",I,[e("td",M,[e("div",P,_(++v),1)]),e("td",H,[e("div",U,[e("span",q,_(o.name),1)])]),e("td",G,[e("div",K,[s(c,{buttonType:"warning",onClick:y=>t.edit(o.id,o.name)},{default:i(()=>[r("Edit")]),_:2},1032,["onClick"]),s(c,{buttonType:"danger",onClick:y=>t.destroy(o.id)},{default:i(()=>[r("Delete")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(d(),n("div",J,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[h(e("input",{type:"text",name:"objective_name",id:"objective_name",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.objective_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":a[0]||(a[0]=o=>t.form.objective_name=o),autocomplete:"off"},null,2),[[f,t.form.objective_name]])])])])]),e("div",te,[e("div",oe,[s(c,{onClick:t.store},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0),t.show_edit?(d(),n("div",se,[e("div",ie,[re,e("div",ae,[e("div",de,[ne,e("div",ce,[h(e("input",{type:"text",name:"objective_name",id:"objective_name",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.objective_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":a[1]||(a[1]=o=>t.form.objective_name=o),autocomplete:"off"},null,2),[[f,t.form.objective_name]])])])])]),e("div",le,[e("div",me,[s(c,{onClick:t.update},{default:i(()=>[r("Save")]),_:1},8,["onClick"])])])])):m("",!0)])]),s(g,{show:t.isOpen,onClose:a[2]||(a[2]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Objective",confirmationText:"Are you sure want to delete this objective?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{rt as default};