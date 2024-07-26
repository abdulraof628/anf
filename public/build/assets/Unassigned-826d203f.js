import{b6 as b,q as i,x as d,v as a,u as p,P as n,F as c,y as t,K as C,bv as k,z as m,C as M,G as l,m as B,t as $,V as u}from"./@vue-b5d553e1.js";import{B as D}from"./Authenticated-f12ae66a.js";import{B as h}from"./Button-a75e4165.js";import{r as S,a as V,b as L}from"./@heroicons-6bb93f0b.js";import{H as f,L as T}from"./@inertiajs-df65e401.js";import{C as g}from"./ConfirmationModal-d78f2deb.js";import{P as w}from"./Pagination-ab3fb2bd.js";import"./moment-a9aaa855.js";import{s as A}from"./@vueform-f7c8a6df.js";import{V as y,M as N}from"./vue-final-modal-e9171ff2.js";import _ from"./Tabs-f7bde894.js";import"./ApplicationLogo-e2b93f7b.js";import"./app-6e1c5045.js";import"./axios-9cbf0d09.js";import"./pusher-js-1c63de54.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./lucide-vue-next-967cc12e.js";import"./@headlessui-1eabfa74.js";const z={class:"py-4 px-4 space-y-2"},I={class:"bg-white rounded p-4 border border-gray-400"},O={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-3"},R={class:"relative w-full"},j=t("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[t("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),P={class:"overflow-x-auto"},F={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},E={class:"min-w-full divide-y divide-gray-200"},U=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Parent"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Status"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),H={class:"bg-white divide-y divide-gray-200"},q={key:0},G=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),K=[G],Z={class:"hover:bg-gray-200"},J={class:"px-6 py-4 whitespace-nowrap"},Q={class:"text-sm text-gray-700"},W={class:"px-6 py-4 whitespace-nowrap"},X={class:"text-sm font-medium text-gray-900"},Y={class:"px-6 py-4 whitespace-nowrap"},tt={class:"text-sm font-medium text-gray-900"},et={class:"px-6 py-4 whitespace-nowrap"},ot={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},st={id:"default-modal","data-modal-show":"true","aria-hidden":"true",class:"overflow-x-hidden overflow-y-auto h-modal md:h-full md:inset-0 z-50 justify-center items-center"},rt={class:"absolute top-1/4 left-1/4 w-2/3"},at={class:"bg-white rounded-lg shadow relative"},it=t("div",{class:"flex items-start justify-between p-5 border-b rounded-t"},[t("h3",{class:"text-gray-900 text-xl lg:text-2xl font-semibold"}," Student List "),t("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},[t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})])])],-1),nt=t("div",{class:"p-6 space-y-6"},[t("div",{class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},[t("table",{class:"min-w-full divide-y divide-gray-200"},[t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",null,"#"),t("th",null,"Name")])]),t("tbody",{class:"bg-white divide-y divide-gray-200"},[t("tr",null,[t("td",{class:"px-6 py-4 whitespace-nowrap"},"1"),t("td",{class:"px-6 py-4 whitespace-nowrap"},"Muhammad Charlie")])])])])],-1),dt={class:"flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b"},lt={components:{SearchIcon:S,TrashIcon:V,PencilIcon:L,ConfirmationModal:g,Head:f,Link:T,Multiselect:A,VueFinalModal:y,ModalsContainer:N,Pagination:w,Tabs:_},props:{filter:Object},data(){return{showModal:!1,isOpen:!1,userID:"",confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:"",centre_id:this.filter.centre_id?this.filter.centre_id:""}}},methods:{newAdmission(r){this.$inertia.get(this.route("students.create"),{centre_id:r})},editStudent(r){this.$inertia.get(this.route("students.edit"),{student_id:r})},deleteStudent(r){this.confirmationRoute="students.destroy",this.confirmationData=r,this.isOpen=!0},viewStudents(r){this.showModal=!0},search(){this.$inertia.get(this.route("students.unassigned"),this.params,{replace:!0,preserveState:!0})}}},ne=Object.assign(lt,{__name:"Unassigned",setup(r){return(e,s)=>{const x=b("debounce");return i(),d(c,null,[a(p(f),{title:"Students"}),a(D,null,{header:n(()=>[]),default:n(()=>[t("div",z,[a(_,{centre_id:e.params.centre_id},null,8,["centre_id"]),t("div",I,[t("div",O,[t("div",R,[j,C(t("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":s[0]||(s[0]=o=>e.params.search=o)},null,512),[[x,e.search,"800ms"],[k,e.params.search]])])]),t("div",P,[t("div",F,[t("table",E,[U,t("tbody",H,[e.$page.props.students.data.length?m("",!0):(i(),d("tr",q,K)),(i(!0),d(c,null,M(e.$page.props.students.data,(o,v)=>(i(),d("tr",Z,[t("td",J,[t("div",Q,l(++v),1)]),t("td",W,[t("div",X,l(o.name),1)]),t("td",Y,[t("div",tt,l(o.parent_name),1)]),t("td",et,[t("span",{class:B(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.status==!0?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},l(o.status==!0?"Active":"Inactive"),3)]),t("td",ot,[e.$page.props.can.edit_students?(i(),$(h,{key:0,buttonType:"info",class:"py-1 px-4",title:"Edit Class",onClick:pt=>e.editStudent(o.id)},{default:n(()=>[u(" Edit Student ")]),_:2},1032,["onClick"])):m("",!0)])]))),256))])]),a(w,{page_data:e.$page.props.students,params:e.params},null,8,["page_data","params"])])])]),a(g,{show:e.isOpen,onClose:s[1]||(s[1]=o=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Class",confirmationText:"Are you sure want to delete this class?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationRoute","confirmationData"]),a(p(y),{modelValue:e.showModal,"onUpdate:modelValue":s[3]||(s[3]=o=>e.showModal=o)},{default:n(()=>[t("div",st,[t("div",rt,[t("div",at,[it,nt,t("div",dt,[a(h,{buttonType:"gray",onClick:s[2]||(s[2]=o=>e.showModal=!1)},{default:n(()=>[u("Close")]),_:1})])])])])]),_:1},8,["modelValue"])])]),_:1})],64)}}});export{ne as default};
