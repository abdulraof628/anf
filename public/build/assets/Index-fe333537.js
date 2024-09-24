import{y as x,x as d,u as l,Q as u,F as w,be as A,t as n,z as e,v as p,W as k,A as a,D as $,H as m,q as f,L as N,M as z}from"./@vue-fa39c8c3.js";import{B}from"./Authenticated-2464c72b.js";import{B as _}from"./Button-912507f9.js";import{r as R,a as g,b as y,f as M}from"./@heroicons-4f5c57a0.js";import{H as C,L as T}from"./@inertiajs-c7856c69.js";import{C as S}from"./ConfirmationModal-8b143ad0.js";import{f as v,a as b}from"./@fortawesome-bce0f776.js";import"./ApplicationLogo-bc2e3fb2.js";import"./radix-vue-b52878ef.js";import"./@floating-ui-d22e3cce.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f5e40355.js";import"./axios-1779699b.js";import"./pusher-js-ddef06ed.js";import"./@vueform-b962800d.js";import"./@vuepic-62f3604d.js";import"./@babel-1b80a44a.js";import"./cropperjs-aef143af.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1a2c766e.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-0175b845.js";import"./@radix-icons-a5b56816.js";import"./lodash.isequal-32ec3540.js";import"./vue-e0f979ce.js";import"./lodash.clonedeep-2dfa23d9.js";import"./qs-fddd7d85.js";import"./side-channel-a64b5f12.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-6df2283d.js";import"./deepmerge-89e33937.js";import"./nprogress-4f526f01.js";import"./lucide-vue-next-f94b1320.js";import"./@headlessui-4b33c316.js";const D={class:"py-4 px-4"},O={class:"overflow-x-auto"},L={class:"m-3"},U={class:"align-top inline-block w-full lg:w-1/2 px-2 mb-3"},V={class:"flex pb-4 relative text-gray-400 focus-within:text-gray-600"},j={class:"shadow overflow-hidden overflow-x-auto hover:scrollbar border-b border-gray-200 sm:rounded-lg"},F={class:"min-w-full divide-y divide-gray-200 w-full"},q={class:"bg-white divide-y divide-gray-200 overflow-y-scroll"},H={key:0},E={class:"px-6 py-2 whitespace-nowrap text-sm"},P={class:"px-2 py-2 whitespace-nowrap"},Q={class:"flex justify-center"},W={class:"px-2 py-2 whitespace-nowrap"},G={class:"flex items-center"},J={class:"ml-4"},K={class:"text-sm font-medium text-gray-900"},X={class:"px-2 py-2 whitespace-nowrap"},Y={class:"flex items-center"},Z={class:"ml-4"},I={class:"px-6 py-2 whitespace-nowrap"},ee={class:"px-6 py-2 whitespace-nowrap text-center text-sm font-medium"},te={class:"flex space-x-2"},se={class:"align-top inline-block w-full lg:w-1/2 px-2"},oe={class:"flex pb-4 relative text-gray-400 focus-within:text-gray-600 lg:justify-end"},ie={class:"shadow overflow-hidden overflow-x-auto hover:scrollbar border-b border-gray-200 sm:rounded-lg"},ne={class:"min-w-full divide-y divide-gray-200 w-full"},re={class:"bg-white divide-y divide-gray-200 overflow-y-scroll"},ae={key:0},le={class:"px-6 py-2 whitespace-nowrap text-sm"},pe={class:"px-2 py-2 whitespace-nowrap"},de={class:"flex justify-center"},ue={class:"px-2 py-2 whitespace-nowrap"},ce={class:"flex items-center"},me={class:"ml-4"},fe={class:"text-sm font-medium text-gray-900"},xe={class:"px-2 py-2 whitespace-nowrap"},_e={class:"flex items-center"},he={class:"ml-4"},we={class:"px-6 py-2 whitespace-nowrap"},ge={class:"px-6 py-2 whitespace-nowrap text-center text-sm font-medium"},ye={class:"flex"},ve={class:"pr-1"},be={class:"pr-1"},ke={components:{SearchIcon:R,TrashIcon:g,PencilIcon:y,ChevronRightIcon:M,ConfirmationModal:S,Head:C,Link:T,faCaretSquareUp:v,faCaretSquareDown:b},props:{show_sub_menu:Boolean,menu_id:String},data(){return{isOpen:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationRoute:"",confirmationData:""}},methods:{showSubMenu(s){this.$inertia.get(route("menus"),{menu_id:s})},addSubMenu(s){this.$inertia.get(route("menus.add_sub_menu"),{menu_id:s})},editMenu(s){this.$inertia.get(route("menus.edit_menu"),{menu_id:s})},editSubMenu(s){this.$inertia.get(route("menus.edit_sub_menu"),{menu_id:s})},deleteMenu(s){this.confirmationRoute="menus.destroy_menu",this.confirmationData=s,this.isOpen=!0},deleteSubMenu(s){this.confirmationRoute="menus.destroy_sub_menu",this.confirmationData=s,this.isOpen=!0},swapMenuUp(s){this.$inertia.post(route("menus.swap_menu_up"),{menu_id:s})},swapMenuDown(s){this.$inertia.post(route("menus.swap_menu_down"),{menu_id:s})},swapSubMenuUp(s,t){this.$inertia.post(route("menus.swap_sub_menu_up"),{menu_id:s,sub_menu_id:t})},swapSubMenuDown(s,t){this.$inertia.post(route("menus.swap_sub_menu_down"),{menu_id:s,sub_menu_id:t})}}},wt=Object.assign(ke,{__name:"Index",setup(s){return(t,i)=>{const h=A("svg-icon");return n(),x(w,null,[d(l(C),{title:"Menus"}),d(B,null,{header:u(()=>i[2]||(i[2]=[])),default:u(()=>[e("div",D,[e("div",O,[e("div",L,[e("div",U,[e("div",V,[t.$page.props.can.create_menu_editor?(n(),p(_,{key:0,url:t.route("menus.add_menu")},{default:u(()=>i[3]||(i[3]=[k(" Add Menu ")])),_:1},8,["url"])):a("",!0)]),e("div",j,[e("table",F,[i[5]||(i[5]=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"Order"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Menu Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Route Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Action")])],-1)),e("tbody",q,[t.$page.props.menus.length==0?(n(),x("tr",H,i[4]||(i[4]=[e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found ")],-1)]))):a("",!0),(n(!0),x(w,null,$(t.$page.props.menus,(o,r)=>(n(),x("tr",{class:"hover:bg-gray-200",key:r},[e("td",E,m(++r),1),e("td",P,[e("div",Q,[e("div",{class:f(["px-0.5",r>1?"text-blue-600 hover:text-blue-800 cursor-pointer":"text-blue-200 cursor-not-allowed"]),title:"Sort"},[t.$page.props.can.edit_menu_editor?(n(),p(h,{key:0,"fa-icon":l(v),size:25,flip:"horizontal",onClick:c=>r>1?t.swapMenuUp(o.id):""},null,8,["fa-icon","onClick"])):a("",!0)],2),e("div",{class:f(["px-0.5≈",r<t.$page.props.menus.length?"text-blue-600 hover:text-blue-800 cursor-pointer":"text-blue-200 cursor-not-allowed"]),title:"Sort"},[t.$page.props.can.edit_menu_editor?(n(),p(h,{key:0,"fa-icon":l(b),size:25,flip:"horizontal",onClick:c=>r<t.$page.props.menus.length?t.swapMenuDown(o.id):""},null,8,["fa-icon","onClick"])):a("",!0)],2)])]),e("td",W,[e("div",G,[e("div",J,[e("div",K,m(o.menu_label),1)])])]),e("td",X,[e("div",Y,[e("div",Z,[e("div",{class:f(["text-sm font-medium text-gray-900",o.menu_route?"":"font-black"])},m(o.menu_route?o.menu_route:""),3)])])]),e("td",I,[e("span",{class:f(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.menu_status==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},m(o.menu_status==1?"Active":"Not Active"),3)]),e("td",ee,[e("div",te,[t.$page.props.can.edit_menu_editor?(n(),p(_,{key:0,buttonType:"warning",class:"py-1.5 px-1.5",onClick:c=>t.editMenu(o.id),title:"Edit"},{default:u(()=>[d(l(y),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])):a("",!0),t.$page.props.can.delete_menu_editor?(n(),p(_,{key:1,buttonType:"danger",class:"py-1.5 px-1.5",onClick:c=>t.deleteMenu(o.id),title:"Delete"},{default:u(()=>[d(l(g),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])):a("",!0),t.$page.props.can.edit_menu_editor?(n(),p(_,{key:2,buttonType:"blue",class:"py-1.5 px-1.5",onClick:c=>t.showSubMenu(o.id),title:"View Sub Menu"},{default:u(()=>[d(l(M),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])):a("",!0)])])]))),128))])])])]),N(e("div",se,[e("div",oe,[d(_,{onClick:i[0]||(i[0]=o=>t.addSubMenu(s.menu_id))},{default:u(()=>i[6]||(i[6]=[k(" Add Sub Menu ")])),_:1})]),e("div",ie,[e("table",ne,[i[8]||(i[8]=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/8"},"Order"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/6"},"Sub Menu Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Route Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"},"Action")])],-1)),e("tbody",re,[t.$page.props.sub_menus.length==0?(n(),x("tr",ae,i[7]||(i[7]=[e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found ")],-1)]))):a("",!0),(n(!0),x(w,null,$(t.$page.props.sub_menus,(o,r)=>(n(),x("tr",{class:"hover:bg-gray-200",key:r},[e("td",le,m(++r),1),e("td",pe,[e("div",de,[e("div",{class:f(["px-0.5",r>1?"text-blue-600 hover:text-blue-800 cursor-pointer":"text-blue-200 cursor-not-allowed"]),title:"Sort"},[t.$page.props.can.edit_menu_editor?(n(),p(h,{key:0,"fa-icon":l(v),size:25,flip:"horizontal",onClick:c=>r>1?t.swapSubMenuUp(s.menu_id,o.id):""},null,8,["fa-icon","onClick"])):a("",!0)],2),e("div",{class:f(["px-0.5≈",r<t.$page.props.sub_menus.length?"text-blue-600 hover:text-blue-800 cursor-pointer":"text-blue-200 cursor-not-allowed"]),title:"Sort"},[t.$page.props.can.edit_menu_editor?(n(),p(h,{key:0,"fa-icon":l(b),size:25,flip:"horizontal",onClick:c=>r<t.$page.props.sub_menus.length?t.swapSubMenuDown(s.menu_id,o.id):""},null,8,["fa-icon","onClick"])):a("",!0)],2)])]),e("td",ue,[e("div",ce,[e("div",me,[e("div",fe,m(o.menu_sub_label),1)])])]),e("td",xe,[e("div",_e,[e("div",he,[e("div",{class:f(["text-sm font-medium text-gray-900",o.menu_sub_route?"":"font-extrabold"])},m(o.menu_sub_route?o.menu_sub_route:"None"),3)])])]),e("td",we,[e("span",{class:f(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.menu_sub_status==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},m(o.menu_sub_status==1?"Active":"Not Active"),3)]),e("td",ge,[e("div",ye,[e("div",ve,[t.$page.props.can.edit_menu_editor?(n(),p(_,{key:0,buttonType:"warning",class:"py-1.5 px-1.5",onClick:c=>t.editSubMenu(o.id),title:"Delete"},{default:u(()=>[d(l(y),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])):a("",!0)]),e("div",be,[t.$page.props.can.delete_menu_editor?(n(),p(_,{key:0,buttonType:"danger",class:"py-1.5 px-1.5",onClick:c=>t.deleteSubMenu(o.id),title:"Delete"},{default:u(()=>[d(l(g),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])):a("",!0)])])])]))),128))])])])],512),[[z,s.show_sub_menu]])])]),d(S,{show:t.isOpen,onClose:i[1]||(i[1]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Menu",confirmationText:"Are you sure want to delete this menu?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64)}}});export{wt as default};
