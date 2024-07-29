import{b6 as w,q as r,x as s,v as i,u as b,P as a,F as u,y as t,V as l,z as m,K as k,bv as C,C as B,G as d,m as D,t as h}from"./@vue-b5d553e1.js";import{B as P}from"./Authenticated-f12ae66a.js";import{B as c}from"./Button-a75e4165.js";import{H as g,L as $}from"./@inertiajs-df65e401.js";import{r as T}from"./@heroicons-6bb93f0b.js";import{C as f}from"./ConfirmationModal-d78f2deb.js";import{P as _}from"./Pagination-ab3fb2bd.js";import"./ApplicationLogo-e2b93f7b.js";import"./app-6e1c5045.js";import"./axios-9cbf0d09.js";import"./pusher-js-1c63de54.js";import"./@vueform-f7c8a6df.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./lucide-vue-next-967cc12e.js";import"./@headlessui-1eabfa74.js";const A={class:"py-4 px-4"},N={key:0,class:"flex justify-end mb-3"},M=t("hr",{class:"my-3 border border-dashed border-gray-400"},null,-1),O={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-3"},R={class:"relative w-full"},V=t("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[t("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),j={class:"overflow-x-auto"},L={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},z={class:"min-w-full divide-y divide-gray-200"},S=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"2"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Programme Name"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Country"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1),F={class:"bg-white divide-y divide-gray-200"},E={key:0},H=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),I=[H],q={class:"px-6 py-4 whitespace-nowrap"},G={class:"text-sm text-gray-700"},K={class:"px-6 py-4 whitespace-nowrap"},U={class:"text-sm font-medium text-gray-900"},Z={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm font-medium text-gray-900"},Q={class:"px-6 py-4 whitespace-nowrap"},W={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},X={class:"flex justify-center space-x-2"},Y={components:{Head:g,Link:$,ConfirmationModal:f,SearchIcon:T,Pagination:_},props:{filter:Object},data(){return{isOpen:!1,current_tab:1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:""}}},methods:{editProgramme(n){this.$inertia.get(this.route("programmes.edit"),{programme_id:n})},deleteProgramme(n){this.confirmationTitle="Delete Programme",this.confirmationText="Are you sure want to delete this programme?",this.confirmationButton="Delete",this.confirmationMethod="delete",this.confirmationRoute="programmes.destroy",this.confirmationData=n,this.isOpen=!0},search(){this.$inertia.get(this.route("programmes"),this.params,{replace:!0,preserveState:!0})}}},Ut=Object.assign(Y,{__name:"Index",setup(n){return(e,p)=>{const y=w("debounce");return r(),s(u,null,[i(b(g),{title:"Programmes"}),i(P,null,{header:a(()=>[]),default:a(()=>[t("div",A,[e.$page.props.can.create_programmes?(r(),s("div",N,[i(c,{url:e.route("programmes.create")},{default:a(()=>[l("New Programme")]),_:1},8,["url"])])):m("",!0),M,t("div",O,[t("div",R,[V,k(t("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":p[0]||(p[0]=o=>e.params.search=o)},null,512),[[y,e.search,"800ms"],[C,e.params.search]])])]),t("div",j,[t("div",L,[t("table",z,[S,t("tbody",F,[e.$page.props.programme_list.data.length?m("",!0):(r(),s("tr",E,I)),(r(!0),s(u,null,B(e.$page.props.programme_list.data,(o,x)=>(r(),s("tr",{class:"hover:bg-gray-200",key:o.id},[t("td",q,[t("div",G,d(++x),1)]),t("td",K,[t("div",U,d(o.programme_name),1)]),t("td",Z,[t("div",J,d(o.country),1)]),t("td",Q,[t("span",{class:D(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.status==1?" bg-green-100 text-green-800":" bg-red-100 text-red-800"])},d(o.status==1?"Active":"Not Active"),3)]),t("td",W,[t("div",X,[e.$page.props.can.edit_programmes?(r(),h(c,{key:0,buttonType:"info",class:"py-1 px-4",onClick:v=>e.editProgramme(o.id)},{default:a(()=>[l(" Edit ")]),_:2},1032,["onClick"])):m("",!0),e.$page.props.can.delete_programmes?(r(),h(c,{key:1,buttonType:"danger",onClick:v=>e.deleteProgramme(o.id)},{default:a(()=>[l(" Delete ")]),_:2},1032,["onClick"])):m("",!0)])])]))),128))])]),i(_,{page_data:e.$page.props.programme_list,params:e.params},null,8,["page_data","params"])])])]),i(f,{show:e.isOpen,onClose:p[1]||(p[1]=o=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Programme",confirmationText:"Are you sure want to delete this programme?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64)}}});export{Ut as default};