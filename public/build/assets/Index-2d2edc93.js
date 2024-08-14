import{B as x}from"./Authenticated-83e8e551.js";import{B as d}from"./Button-764ae71a.js";import{r as g,a as y,b as w}from"./@heroicons-3c270557.js";import{H as h,L as v}from"./@inertiajs-41d03628.js";import{C as f}from"./ConfirmationModal-cc2fca54.js";import{P as b}from"./Pagination-90e88318.js";import{h as k}from"./moment-3968d9f3.js";import{x as i,v as a,u as c,P as s,F as l,q as r,y as t,V as u,z as D,C as M,G as n}from"./@vue-64c42e7d.js";import"./ApplicationLogo-64527dd0.js";import"./radix-vue-efedc4b4.js";import"./@floating-ui-7a9770d8.js";import"./class-variance-authority-f96983da.js";import"./app-a861bda2.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./lucide-vue-next-dd1f77f0.js";import"./@headlessui-28549402.js";const B={class:"py-4 px-4"},C={class:"overflow-x-auto"},N={class:"m-3"},T={class:"align-middle inline-block min-w-full"},$={class:"flex items-center space-x-2 justify-end pb-4 relative text-gray-400 focus-within:text-gray-600"},F={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},R={class:"min-w-full divide-y divide-gray-200"},O=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Title"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Folder Name"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Date Upload"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),V={class:"bg-white divide-y divide-gray-200"},A={key:0},H=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found ")],-1),I=[H],L={class:"px-6 py-4 whitespace-nowrap"},P={class:"text-sm font-medium text-gray-700"},j={class:"px-6 py-4 whitespace-nowrap"},z={class:"text-sm font-medium text-gray-900"},S={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-900"},E={class:"px-6 py-4 whitespace-nowrap"},G={class:"text-sm font-medium text-gray-900"},U={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},Y={class:"flex justify-center space-x-2"},J={components:{SearchIcon:g,TrashIcon:y,PencilIcon:w,Head:h,Link:v,ConfirmationModal:f},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",open_modal:!1,params:{search:""}}},watch:{},methods:{openNewTab(){window.open(route("math_manipulatives.play"),"_blank")},deleteFolder(p){this.confirmationRoute="math_manipulatives.configuration.delete",this.confirmationData=p,this.isOpen=!0}}},Yt=Object.assign(J,{__name:"Index",setup(p){return(e,m)=>(r(),i(l,null,[a(c(h),{title:"Math Manipulatives"}),a(x,null,{header:s(()=>[]),default:s(()=>[t("div",B,[t("div",C,[t("div",N,[t("div",T,[t("div",$,[a(d,{url:e.route("math_manipulatives.configuration.create")},{default:s(()=>[u("New Math Manipulative")]),_:1},8,["url"])]),t("div",F,[t("table",R,[O,t("tbody",V,[e.$page.props.math_manipulatives.data.length?D("",!0):(r(),i("tr",A,I)),(r(!0),i(l,null,M(e.$page.props.math_manipulatives.data,(o,_)=>(r(),i("tr",{class:"hover:bg-gray-200",key:o.id},[t("td",L,[t("div",P,n(++_),1)]),t("td",j,[t("div",z,n(o.name),1)]),t("td",S,[t("div",q,n(o.folder_name),1)]),t("td",E,[t("div",G,n(c(k)(o.created_at,"HH:mm:ss").format("DD/MM/Y")),1)]),t("td",U,[t("div",Y,[a(d,{buttonType:"danger",onClick:K=>e.deleteFolder(o.id)},{default:s(()=>[u("Delete")]),_:2},1032,["onClick"])])])]))),128))])])]),a(b,{page_data:e.$page.props.math_manipulatives,params:e.params},null,8,["page_data","params"])])])]),a(f,{show:e.isOpen,onClose:m[0]||(m[0]=o=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Math Manipulative",confirmationText:"Are you sure want to delete this Math Manipulative?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{Yt as default};
