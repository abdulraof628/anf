import{o as m,c as l,a as s,u as c,w as a,F as p,_ as g,H as n,L as f,d as t,l as _,h as u,v as b,n as h,g as i}from"./app-7998ab3f.js";import{B as y}from"./Authenticated-108ddfbc.js";import{B as d}from"./Button-9fc2dde7.js";import{r as v}from"./TrashIcon-2aa1e134.js";import{V as w}from"./vue-draggable-next.esm-bundler-bd98e73b.js";import{C as x}from"./ConfirmationModal-9a7f55b5.js";import{m as T,p as B,x as C,I as V,y as k}from"./tabs-86d73a31.js";import"./ApplicationLogo-87bba962.js";import"./XIcon-6ae3497b.js";import"./vue3-perfect-scrollbar-1a319691.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-dbb2af03.js";import"./moment-a9aaa855.js";import"./transition-3b4d2d6c.js";import"./keyboard-b4baaa3b.js";import"./use-resolve-button-type-6cd319a6.js";const L={class:"md:grid md:grid-cols-2"},$={class:"md:mt-0 md:col-span-2"},j={class:"px-4 py-5 bg-indigo-100 space-y-6 sm:p-6 h-full"},D={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},I={class:"sm:row-span-3 space-y-2"},M={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},N=t("div",{class:"mb-5"},[t("h1",{class:"text-indigo-800 font-bold"},"Categories"),t("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),O={class:"mb-3"},z=t("label",{for:"category_name",class:"block text-sm text-gray-700 font-bold"},[i("Category name"),t("span",{class:"text-red-500"},"*")],-1),S={class:"mt-1 flex rounded-md shadow-sm"},A={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},E={class:"flex items-end justify-end space-x-2"},F=g({components:{Head:n,Link:f,TabGroup:T,TabList:B,Tab:C,TabPanels:V,TabPanel:k,ConfirmationModal:x,TrashIcon:v,draggable:w},props:{category_info:Object},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{category_id:this.category_info?this.category_info.id:"",dt_id:this.category_info?this.category_info.dt_id:"",category_name:this.category_info?this.category_info.name:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.categories.update"),this.form,{preserveState:!0})}}}),at=Object.assign(F,{__name:"Edit",setup(H){return(e,o)=>(m(),l(p,null,[s(c(n),{title:"Diagnostic Test"}),s(y,null,{header:a(()=>[]),default:a(()=>[t("div",L,[t("div",$,[t("div",j,[t("div",D,[t("form",{onSubmit:o[1]||(o[1]=_((...r)=>e.submit&&e.submit(...r),["prevent"]))},[t("div",I,[t("div",M,[N,t("div",O,[z,t("div",S,[u(t("input",{type:"text",name:"category_name",id:"category_name",class:h(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.category_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=r=>e.form.category_name=r),autocomplete:"off"},null,2),[[b,e.form.category_name]])])])]),t("div",A,[t("div",E,[s(d,{buttonType:"gray",route:e.route("dt.settings.details",{dt_id:e.$page.props.category_info.dt_id})},{default:a(()=>[i("Cancel")]),_:1},8,["route"]),s(d,{type:"submit"},{default:a(()=>[i("Save ")]),_:1})])])])],32)])])])])]),_:1})],64))}});export{at as default};
