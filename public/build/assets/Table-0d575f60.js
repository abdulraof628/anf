import{B as p}from"./Button-764ae71a.js";import{H as h,L as y}from"./@inertiajs-41d03628.js";import{C as f}from"./ConfirmationModal-cc2fca54.js";import{P as l}from"./Pagination-90e88318.js";import{x as s,y as t,v as r,P as n,z as g,F as c,C as x,q as a,V as m,G as d}from"./@vue-64c42e7d.js";import"./app-a861bda2.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./radix-vue-efedc4b4.js";import"./@floating-ui-7a9770d8.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./moment-3968d9f3.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./@heroicons-3c270557.js";import"./@headlessui-28549402.js";const w={class:"flex pb-2 justify-end"},v={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},T={class:"min-w-full divide-y divide-gray-200"},b=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"3"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Class Type"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1),k={class:"bg-white divide-y divide-gray-200"},C={key:0},B=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found ")],-1),D=[B],F={class:"px-6 py-4 whitespace-nowrap"},N={class:"text-sm text-gray-700"},$={class:"px-6 py-4 whitespace-nowrap"},V={class:"text-sm font-medium text-gray-900"},j={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},A={class:"flex justify-center"},L={class:"flex pr-1"},M={class:"flex"},O={components:{Head:h,Link:y,ConfirmationModal:f,Pagination:l},data(){return{isOpen:!1,current_tab:1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:""}},methods:{editFeeType(o){this.$inertia.get(route("settings.class_types.edit"),{class_type_id:o})},deleteFeeType(o){this.confirmationTitle="Delete Class Type",this.confirmationText="Are you sure want to delete this class type?",this.confirmationButton="Delete",this.confirmationMethod="delete",this.confirmationRoute="settings.class_types.destroy",this.confirmationData=o,this.isOpen=!0}}},jt=Object.assign(O,{__name:"Table",setup(o){return(e,P)=>(a(),s(c,null,[t("div",w,[r(p,{class:"py-3",url:e.route("settings.class_types.create")},{default:n(()=>[m("New Class Type")]),_:1},8,["url"])]),t("div",v,[t("table",T,[b,t("tbody",k,[e.$page.props.class_types.data.length?g("",!0):(a(),s("tr",C,D)),(a(!0),s(c,null,x(e.$page.props.class_types.data,(i,_)=>(a(),s("tr",{class:"hover:bg-gray-200",key:i.ID},[t("td",F,[t("div",N,d(++_),1)]),t("td",$,[t("div",V,d(i.name),1)]),t("td",j,[t("div",A,[t("div",L,[r(p,{buttonType:"warning",onClick:u=>e.editFeeType(i.id)},{default:n(()=>[m(" Edit ")]),_:2},1032,["onClick"])]),t("div",M,[r(p,{buttonType:"danger",onClick:u=>e.deleteFeeType(i.id)},{default:n(()=>[m(" Delete ")]),_:2},1032,["onClick"])])])])]))),128))])]),r(l,{page_data:e.$page.props.class_types,params:e.params},null,8,["page_data","params"])])],64))}});export{jt as default};
