import{B as h}from"./Authenticated-11e054d5.js";import{B as l}from"./Button-b1a6bf14.js";import{d as v,c as k,e as w,f as b}from"./@heroicons-d367e696.js";import{H as x}from"./@inertiajs-4f2e6820.js";import{C as y}from"./ConfirmationModal-39173e61.js";import{y as d,x as c,u as $,Q as n,F as g,t as s,z as t,v as p,W as m,C as a,J as C,K as u,q as R}from"./@vue-66b8c761.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-98eea8e8.js";import"./axios-1779699b.js";import"./pusher-js-cb9cdec3.js";import"./@vueform-4cba997d.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";import"./lucide-vue-next-bc441494.js";import"./@headlessui-2f73f476.js";const B={class:"py-4 px-4"},D={class:"overflow-x-auto"},A={class:"m-3"},T={class:"align-middle inline-block w-full lg:w-1/2 px-2"},N={class:"flex pb-4 relative text-gray-400 focus-within:text-gray-600"},I={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},O={class:"min-w-full divide-y divide-gray-200"},P={class:"bg-white divide-y divide-gray-200 overflow-y-scroll"},z={key:0},V={class:"px-2 py-3"},E={class:"flex items-center"},F={class:"ml-4"},M={class:"text-sm font-medium text-gray-900"},S={class:"px-2 py-3"},j={class:"flex items-center"},H={class:"ml-4"},L={class:"text-sm font-medium text-gray-900"},q={class:"px-2 py-3 text-center"},G={class:"px-6 py-2 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={components:{SearchIcon:v,TrashIcon:k,PencilIcon:w,ChevronRightIcon:b,ConfirmationModal:y,Head:x},data(){return{isOpen:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationRoute:"",confirmationData:""}},methods:{addRole(){this.$inertia.get(route("roles.create"))},deleteRole(r){this.isOpen=!0,this.confirmationData=r},editRole(r){this.$inertia.get(route("roles.edit"),{role_id:r})},assignPermissions(r){this.$inertia.get(route("roles.assign_pemissions"),{role_id:r})}}},jt=Object.assign(K,{__name:"Index",setup(r){return(o,e)=>(s(),d(g,null,[c($(x),{title:"Roles"}),c(h,null,{header:n(()=>e[2]||(e[2]=[])),default:n(()=>[t("div",B,[t("div",D,[t("div",A,[t("div",T,[t("div",N,[o.$page.props.can.create_roles?(s(),p(l,{key:0,onClick:e[0]||(e[0]=i=>o.addRole())},{default:n(()=>e[3]||(e[3]=[m(" Add Role ")])),_:1})):a("",!0)]),t("div",I,[t("table",O,[e[8]||(e[8]=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Group"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1)),t("tbody",P,[o.$page.props.roles.length?a("",!0):(s(),d("tr",z,e[4]||(e[4]=[t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found ")],-1)]))),(s(!0),d(g,null,C(o.$page.props.roles,(i,_)=>(s(),d("tr",{class:"hover:bg-gray-200",key:_},[t("td",V,[t("div",E,[t("div",F,[t("div",M,u(i.display_name),1)])])]),t("td",S,[t("div",j,[t("div",H,[t("div",L,u(i.role_group_name),1)])])]),t("td",q,[t("span",{class:R(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",i.status==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},u(i.status==1?"Active":"Not Active"),3)]),t("td",G,[t("div",J,[o.$page.props.can.edit_roles?(s(),p(l,{key:0,buttonType:"warning",onClick:f=>o.editRole(i.id),title:"Edit Role"},{default:n(()=>e[5]||(e[5]=[m(" Edit ")])),_:2},1032,["onClick"])):a("",!0),o.$page.props.can.delete_roles?(s(),p(l,{key:1,buttonType:"danger",onClick:f=>o.deleteRole(i.id),title:"Delete"},{default:n(()=>e[6]||(e[6]=[m(" Delete ")])),_:2},1032,["onClick"])):a("",!0),o.$page.props.can.manage_roles?(s(),p(l,{key:2,buttonType:"blue",title:"Assign Permissions",onClick:f=>o.assignPermissions(i.id)},{default:n(()=>e[7]||(e[7]=[m(" Permissions ")])),_:2},1032,["onClick"])):a("",!0)])])]))),128))])])])])])]),c(y,{show:o.isOpen,onClose:e[1]||(e[1]=i=>o.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Role",confirmationText:"Are you sure want to delete this role?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:"roles.destroy",confirmationData:o.confirmationData},null,8,["show","confirmationData"])])]),_:1})],64))}});export{jt as default};
