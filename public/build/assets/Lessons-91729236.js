import{y as l,x as r,u as v,Q as i,F as f,t as m,z as e,W as n,A as p,D as x,H as u,L as g,bH as h,q as _}from"./@vue-fa39c8c3.js";import{B as k}from"./Authenticated-2464c72b.js";import{B as a}from"./Button-912507f9.js";import{r as C,a as T,b as $}from"./@heroicons-4f5c57a0.js";import{H as b,L as D}from"./@inertiajs-c7856c69.js";import{C as y}from"./ConfirmationModal-8b143ad0.js";import"./ApplicationLogo-bc2e3fb2.js";import"./radix-vue-b52878ef.js";import"./@floating-ui-d22e3cce.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f5e40355.js";import"./axios-1779699b.js";import"./pusher-js-ddef06ed.js";import"./@vueform-b962800d.js";import"./@vuepic-62f3604d.js";import"./@babel-1b80a44a.js";import"./cropperjs-aef143af.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1a2c766e.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-0175b845.js";import"./@radix-icons-a5b56816.js";import"./lodash.isequal-32ec3540.js";import"./vue-e0f979ce.js";import"./lodash.clonedeep-2dfa23d9.js";import"./qs-fddd7d85.js";import"./side-channel-a64b5f12.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-6df2283d.js";import"./deepmerge-89e33937.js";import"./nprogress-4f526f01.js";import"./lucide-vue-next-f94b1320.js";import"./@headlessui-4b33c316.js";const L={class:"py-4 px-4"},B={class:"grid grid-cols-2 gap-4"},N={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},R={class:"grid grid-cols-2 gap-4"},V={class:"space-y-2"},S={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},j={class:"min-w-full divide-y divide-gray-200"},A={class:"bg-white divide-y divide-gray-200"},O={key:0},z={class:"hover:bg-gray-200"},H={class:"px-6 py-4 whitespace-nowrap"},E={class:"text-sm font-medium text-gray-700"},F={class:"px-6 py-4 whitespace-nowrap"},I={class:"flex flex-col space-y-1 text-sm text-gray-900"},M={class:"font-semibold whitespace-normal"},P={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},U={class:"flex justify-center space-x-2"},q={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W={class:"grid grid-cols-1 gap-0 sm:gap-4"},G={class:"mb-4"},J={class:"mt-1 flex rounded-md shadow-sm"},K={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},X={class:"flex justify-end"},Y={key:1,class:"space-y-2"},Z={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ee={class:"grid grid-cols-1 gap-0 sm:gap-4"},se={class:"mb-4"},oe={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},re={class:"flex justify-end"},ie={components:{SearchIcon:C,TrashIcon:T,PencilIcon:$,Head:b,Link:D,ConfirmationModal:y},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",level_id:this.$page.props.level_id,lesson_name:""},errors:{lesson_name:!1}}},methods:{create(){this.form.lesson_name="",this.show_create=!0,this.show_edit=!1},edit(d,o){this.form.id=d,this.form.lesson_name=o,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.lessons.store"),this.form,{preserveState:!1})},update(){if(!this.form.lesson_name){this.errors.lesson_name=!0;return}this.$inertia.post(route("progress_report.settings.coding_robotics.lessons.update"),this.form,{preserveState:!1})},destroy(d){this.confirmationRoute="progress_report.settings.coding_robotics.lessons.destroy",this.confirmationData=d,this.isOpen=!0},viewTopics(d){this.$inertia.get(route("progress_report.settings.coding_robotics.topics"),{level_id:this.$page.props.level_id,lesson_id:d})}}},Ze=Object.assign(ie,{__name:"Lessons",setup(d){return(o,s)=>(m(),l(f,null,[r(v(b),{title:"Progress Report"}),r(k,null,{header:i(()=>s[3]||(s[3]=[])),default:i(()=>[e("div",L,[e("div",B,[e("div",N,[r(a,{buttonType:"gray",url:o.route("progress_report.settings.coding_robotics.levels")},{default:i(()=>s[4]||(s[4]=[n("Back")])),_:1},8,["url"]),r(a,{onClick:o.create},{default:i(()=>s[5]||(s[5]=[n("New Lesson")])),_:1},8,["onClick"])])]),e("div",R,[e("div",V,[e("div",S,[e("table",j,[s[10]||(s[10]=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Lesson"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1)),e("tbody",A,[o.$page.props.lessons.length?p("",!0):(m(),l("tr",O,s[6]||(s[6]=[e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found ")],-1)]))),(m(!0),l(f,null,x(o.$page.props.lessons,(t,w)=>(m(),l("tr",z,[e("td",H,[e("div",E,u(++w),1)]),e("td",F,[e("div",I,[e("span",M,u(t.name),1)])]),e("td",P,[e("div",U,[r(a,{buttonType:"warning",onClick:c=>o.edit(t.id,t.name)},{default:i(()=>s[7]||(s[7]=[n("Edit")])),_:2},1032,["onClick"]),r(a,{buttonType:"danger",onClick:c=>o.destroy(t.id)},{default:i(()=>s[8]||(s[8]=[n("Delete")])),_:2},1032,["onClick"]),r(a,{buttonType:"blue",onClick:c=>o.viewTopics(t.id)},{default:i(()=>s[9]||(s[9]=[n("View Topics")])),_:2},1032,["onClick"])])])]))),256))])])])]),o.show_create?(m(),l("div",q,[e("div",Q,[s[12]||(s[12]=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Lesson")],-1)),e("div",W,[e("div",G,[s[11]||(s[11]=e("label",{for:"lesson_name",class:"block text-sm text-gray-700 font-bold"},[n(" Name "),e("span",{class:"text-red-500"},"*")],-1)),e("div",J,[g(e("input",{type:"text",name:"lesson_name",id:"lesson_name",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.errors.lesson_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[0]||(s[0]=t=>o.form.lesson_name=t),autocomplete:"off"},null,2),[[h,o.form.lesson_name]])])])])]),e("div",K,[e("div",X,[r(a,{onClick:o.store},{default:i(()=>s[13]||(s[13]=[n("Save")])),_:1},8,["onClick"])])])])):p("",!0),o.show_edit?(m(),l("div",Y,[e("div",Z,[s[15]||(s[15]=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Lesson")],-1)),e("div",ee,[e("div",se,[s[14]||(s[14]=e("label",{for:"lesson_name",class:"block text-sm text-gray-700 font-bold"},[n(" Name "),e("span",{class:"text-red-500"},"*")],-1)),e("div",oe,[g(e("input",{type:"text",name:"lesson_name",id:"lesson_name",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.errors.lesson_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[1]||(s[1]=t=>o.form.lesson_name=t),autocomplete:"off"},null,2),[[h,o.form.lesson_name]])])])])]),e("div",te,[e("div",re,[r(a,{onClick:o.update},{default:i(()=>s[16]||(s[16]=[n("Save")])),_:1},8,["onClick"])])])])):p("",!0)])]),r(y,{show:o.isOpen,onClose:s[2]||(s[2]=t=>o.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Lesson",confirmationText:"Are you sure want to delete this lesson? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:o.confirmationRoute,confirmationData:o.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{Ze as default};
