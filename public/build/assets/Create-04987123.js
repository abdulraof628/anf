import{o as m,c as l,a as s,u as c,w as a,F as p,E as g,H as n,L as _,d as t,l as u,h as f,v as b,n as h,g as i}from"./app-71950877.js";import{B as y}from"./Authenticated-208afc3b.js";import{B as d}from"./Button-894e9e1f.js";import{r as v}from"./TrashIcon-3e6d9299.js";import{V as w}from"./vue-draggable-next.esm-bundler-8fddf9cf.js";import{C as x}from"./ConfirmationModal-04ae129c.js";import{m as T,p as B,x as C,I as V,y as k}from"./tabs-cfa1a9cd.js";import"./ApplicationLogo-8610a79e.js";import"./XIcon-4055b9c3.js";import"./perfect-scrollbar.esm-e549b042.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-0b8c69ea.js";import"./moment-55cb88ed.js";import"./transition-00b122a3.js";import"./keyboard-f848a7f7.js";import"./use-resolve-button-type-ee213e4d.js";const L={class:"md:grid md:grid-cols-2"},D={class:"md:mt-0 md:col-span-2"},I={class:"px-4 py-5 bg-indigo-100 space-y-6 sm:p-6 h-full"},M={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},N={class:"sm:row-span-3 space-y-2"},S={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},$=t("div",{class:"mb-5"},[t("h1",{class:"text-indigo-800 font-bold"},"Categories"),t("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),j={class:"mb-3"},z=t("label",{for:"category_name",class:"block text-sm text-gray-700 font-bold"},[i("Category name"),t("span",{class:"text-red-500"},"*")],-1),O={class:"mt-1 flex rounded-md shadow-sm"},A={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},E={class:"flex items-end justify-end space-x-2"},F=g({components:{Head:n,Link:_,TabGroup:T,TabList:B,Tab:C,TabPanels:V,TabPanel:k,ConfirmationModal:x,TrashIcon:v,draggable:w},props:{diagnostic_test_id:String},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{dt_id:this.diagnostic_test_id?this.diagnostic_test_id:"",category_name:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.categories.store"),this.form,{preserveState:!0})}}}),at=Object.assign(F,{__name:"Create",setup(H){return(e,o)=>(m(),l(p,null,[s(c(n),{title:"Diagnostic Test"}),s(y,null,{header:a(()=>[]),default:a(()=>[t("div",L,[t("div",D,[t("div",I,[t("div",M,[t("form",{onSubmit:o[1]||(o[1]=u((...r)=>e.submit&&e.submit(...r),["prevent"]))},[t("div",N,[t("div",S,[$,t("div",j,[z,t("div",O,[f(t("input",{type:"text",name:"category_name",id:"category_name",class:h(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.category_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=r=>e.form.category_name=r),autocomplete:"off"},null,2),[[b,e.form.category_name]])])])]),t("div",A,[t("div",E,[s(d,{buttonType:"gray",route:e.route("dt.settings.details",{dt_id:e.diagnostic_test_id})},{default:a(()=>[i("Cancel")]),_:1},8,["route"]),s(d,{type:"submit"},{default:a(()=>[i("Save ")]),_:1})])])])],32)])])])])]),_:1})],64))}});export{at as default};
