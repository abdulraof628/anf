import{x as m,v as s,u as v,P as r,F as _,q as l,y as e,V as i,z as p,C as w,G as h,K as f,bv as u,m as b}from"./@vue-64c42e7d.js";import{B as x}from"./Authenticated-6651b23d.js";import{B as a}from"./Button-df73f7a0.js";import{r as C,a as B,b as T}from"./@heroicons-3c270557.js";import{H as g,L as $}from"./@inertiajs-41d03628.js";import{C as k}from"./ConfirmationModal-617f2ef8.js";import"./ApplicationLogo-64527dd0.js";import"./radix-vue-2488f6ae.js";import"./@floating-ui-7a9770d8.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-f96983da.js";import"./app-98c3eb01.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./moment-3968d9f3.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./lucide-vue-next-48142e2c.js";import"./@headlessui-28549402.js";const D={class:"py-4 px-4"},N={class:"grid grid-cols-2 gap-4"},V={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},R={class:"grid grid-cols-2 gap-4"},S={class:"space-y-2"},j={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},O={class:"min-w-full divide-y divide-gray-200"},U=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Term / Book"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),z={class:"bg-white divide-y divide-gray-200"},A={key:0},L=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found ")],-1),P=[L],E={class:"hover:bg-gray-200"},F={class:"px-6 py-4 whitespace-nowrap"},I={class:"text-sm font-medium text-gray-700"},M={class:"px-6 py-4 whitespace-nowrap"},H={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},K={class:"flex justify-center space-x-2"},J={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Term / Book")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"term_book_name",class:"block text-sm text-gray-700 font-bold"},[i(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},se={key:1,class:"space-y-2"},re={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ie=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Term / Book")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"term_book_name",class:"block text-sm text-gray-700 font-bold"},[i(" Name "),e("span",{class:"text-red-500"},"*")],-1),me={class:"mt-1 flex rounded-md shadow-sm"},le={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},pe={class:"flex justify-end"},ce={components:{SearchIcon:C,TrashIcon:B,PencilIcon:T,Head:g,Link:$,ConfirmationModal:k},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",level_id:this.$page.props.level_id,term_book_name:""},errors:{term_book_name:!1}}},methods:{create(){this.form.term_book_name="",this.show_create=!0,this.show_edit=!1},edit(d,t){this.form.id=d,this.form.term_book_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.term_book_name){this.errors.term_book_name=!0;return}this.$inertia.post(route("progress_report.settings.math.terms_books.store"),this.form,{preserveState:!1})},update(){if(!this.form.term_book_name){this.errors.term_book_name=!0;return}this.$inertia.post(route("progress_report.settings.math.terms_books.update"),this.form,{preserveState:!1})},destroy(d){this.confirmationRoute="progress_report.settings.math.terms_books.destroy",this.confirmationData=d,this.isOpen=!0},viewUnits(d){this.$inertia.get(route("progress_report.settings.math.units"),{level_id:this.$page.props.level_id,term_book_id:d})}}},lt=Object.assign(ce,{__name:"TermsBooks",setup(d){return(t,n)=>(l(),m(_,null,[s(v(g),{title:"Progress Report"}),s(x,null,{header:r(()=>[]),default:r(()=>[e("div",D,[e("div",N,[e("div",V,[s(a,{buttonType:"gray",url:t.route("progress_report.settings.math.levels")},{default:r(()=>[i("Back")]),_:1},8,["url"]),s(a,{onClick:t.create},{default:r(()=>[i("New Term / Book")]),_:1},8,["onClick"])])]),e("div",R,[e("div",S,[e("div",j,[e("table",O,[U,e("tbody",z,[t.$page.props.terms_books.length?p("",!0):(l(),m("tr",A,P)),(l(!0),m(_,null,w(t.$page.props.terms_books,(o,y)=>(l(),m("tr",E,[e("td",F,[e("div",I,h(++y),1)]),e("td",M,[e("div",H,[e("span",q,h(o.name),1)])]),e("td",G,[e("div",K,[s(a,{buttonType:"warning",onClick:c=>t.edit(o.id,o.name)},{default:r(()=>[i("Edit")]),_:2},1032,["onClick"]),s(a,{buttonType:"danger",onClick:c=>t.destroy(o.id)},{default:r(()=>[i("Delete")]),_:2},1032,["onClick"]),s(a,{buttonType:"blue",onClick:c=>t.viewUnits(o.id)},{default:r(()=>[i("View Units")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(l(),m("div",J,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"term_book_name",id:"term_book_name",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.term_book_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[0]||(n[0]=o=>t.form.term_book_name=o),autocomplete:"off"},null,2),[[u,t.form.term_book_name]])])])])]),e("div",te,[e("div",oe,[s(a,{onClick:t.store},{default:r(()=>[i("Save")]),_:1},8,["onClick"])])])])):p("",!0),t.show_edit?(l(),m("div",se,[e("div",re,[ie,e("div",ae,[e("div",de,[ne,e("div",me,[f(e("input",{type:"text",name:"term_book_name",id:"term_book_name",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.term_book_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[1]||(n[1]=o=>t.form.term_book_name=o),autocomplete:"off"},null,2),[[u,t.form.term_book_name]])])])])]),e("div",le,[e("div",pe,[s(a,{onClick:t.update},{default:r(()=>[i("Save")]),_:1},8,["onClick"])])])])):p("",!0)])]),s(k,{show:t.isOpen,onClose:n[2]||(n[2]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Term / Book",confirmationText:"Are you sure want to delete this term / book? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{lt as default};
