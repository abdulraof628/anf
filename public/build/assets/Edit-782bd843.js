import{o as m,c,a as s,u as l,w as a,F as p,D as g,H as n,L as f,d as t,k as _,h as u,v as b,n as h,g as i}from"./app-c055ac41.js";import{B as y}from"./Authenticated-8cff57c3.js";import{B as d}from"./Button-edb43cea.js";import{r as v}from"./TrashIcon-f75dede2.js";import{V as w}from"./vue-draggable-next.esm-bundler-4f5488e0.js";import{C as x}from"./ConfirmationModal-2dc2a1fc.js";import{p as T,m as B,x as C,I as k,y as V}from"./tabs-6d1a6281.js";import"./ApplicationLogo-f59e2141.js";import"./XIcon-1249adca.js";import"./vue3-perfect-scrollbar-e3a0aed0.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-3e273253.js";import"./keyboard-202411e4.js";import"./use-resolve-button-type-b7a7249c.js";const D={class:"md:grid md:grid-cols-2"},L={class:"md:mt-0 md:col-span-2"},$={class:"px-4 py-5 bg-indigo-100 space-y-6 sm:p-6 h-full"},j={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},I={class:"sm:row-span-3 space-y-2"},M={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},N=t("div",{class:"mb-5"},[t("h1",{class:"text-indigo-800 font-bold"},"Categories"),t("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),O={class:"mb-3"},z=t("label",{for:"category_name",class:"block text-sm text-gray-700 font-bold"},[i("Category name"),t("span",{class:"text-red-500"},"*")],-1),S={class:"mt-1 flex rounded-md shadow-sm"},A={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},E={class:"flex items-end justify-end space-x-2"},F=g({components:{Head:n,Link:f,TabGroup:T,TabList:B,Tab:C,TabPanels:k,TabPanel:V,ConfirmationModal:x,TrashIcon:v,draggable:w},props:{category_info:Object},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{category_id:this.category_info?this.category_info.id:"",dt_id:this.category_info?this.category_info.dt_id:"",category_name:this.category_info?this.category_info.name:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.categories.update"),this.form,{preserveState:!0})}}}),st=Object.assign(F,{__name:"Edit",setup(H){return(e,o)=>(m(),c(p,null,[s(l(n),{title:"Diagnostic Test"}),s(y,null,{header:a(()=>[]),default:a(()=>[t("div",D,[t("div",L,[t("div",$,[t("div",j,[t("form",{onSubmit:o[1]||(o[1]=_((...r)=>e.submit&&e.submit(...r),["prevent"]))},[t("div",I,[t("div",M,[N,t("div",O,[z,t("div",S,[u(t("input",{type:"text",name:"category_name",id:"category_name",class:h(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.category_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=r=>e.form.category_name=r),autocomplete:"off"},null,2),[[b,e.form.category_name]])])])]),t("div",A,[t("div",E,[s(d,{buttonType:"gray",route:e.route("dt.settings.details",{dt_id:e.$page.props.category_info.dt_id})},{default:a(()=>[i("Cancel")]),_:1},8,["route"]),s(d,{type:"submit"},{default:a(()=>[i("Save ")]),_:1})])])])],32)])])])])]),_:1})],64))}});export{st as default};