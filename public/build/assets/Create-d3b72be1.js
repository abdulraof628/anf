import{o as m,c as l,b as o,u as c,w as a,F as g,B as p,H as n,L as _,d as t,e as u,f,l as b,n as h,k as i}from"./app-26ef65af.js";import{B as y}from"./Authenticated-f0ce1f9e.js";import{B as d}from"./Button-f200edcf.js";import{r as v}from"./TrashIcon-5e601baf.js";import{V as w}from"./vue-draggable-next.esm-bundler-b30226b0.js";import{C as x}from"./ConfirmationModal-d6dd0929.js";import{x as T,I as B,y as C,S as k,g as S}from"./tabs-6ea6c7de.js";import"./ApplicationLogo-4725b1bd.js";import"./XIcon-33bca35e.js";import"./TimeAgo-ecadaeb0.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-0e1b66d0.js";import"./use-resolve-button-type-b261317e.js";const V={class:"md:grid md:grid-cols-2"},L={class:"md:mt-0 md:col-span-2"},D={class:"px-4 py-5 bg-indigo-100 space-y-6 sm:p-6 h-full"},I={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},M={class:"sm:row-span-3 space-y-2"},N={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},$=t("div",{class:"mb-5"},[t("h1",{class:"text-indigo-800 font-bold"},"Categories"),t("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),j={class:"mb-3"},z=t("label",{for:"category_name",class:"block text-sm text-gray-700 font-bold"},[i("Category name"),t("span",{class:"text-red-500"},"*")],-1),O={class:"mt-1 flex rounded-md shadow-sm"},A={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},F={class:"flex items-end justify-end space-x-2"},H=p({components:{Head:n,Link:_,TabGroup:T,TabList:B,Tab:C,TabPanels:k,TabPanel:S,ConfirmationModal:x,TrashIcon:v,draggable:w},props:{diagnostic_test_id:String},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{dt_id:this.diagnostic_test_id?this.diagnostic_test_id:"",category_name:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.categories.store"),this.form,{preserveState:!0})}}}),st=Object.assign(H,{__name:"Create",setup(P){return(e,s)=>(m(),l(g,null,[o(c(n),{title:"Diagnostic Test"}),o(y,null,{header:a(()=>[]),default:a(()=>[t("div",V,[t("div",L,[t("div",D,[t("div",I,[t("form",{onSubmit:s[1]||(s[1]=u((...r)=>e.submit&&e.submit(...r),["prevent"]))},[t("div",M,[t("div",N,[$,t("div",j,[z,t("div",O,[f(t("input",{type:"text",name:"category_name",id:"category_name",class:h(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.category_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[0]||(s[0]=r=>e.form.category_name=r),autocomplete:"off"},null,2),[[b,e.form.category_name]])])])]),t("div",A,[t("div",F,[o(d,{buttonType:"gray",route:e.route("dt.settings.details",{dt_id:e.diagnostic_test_id})},{default:a(()=>[i("Cancel")]),_:1},8,["route"]),o(d,{type:"submit"},{default:a(()=>[i("Save ")]),_:1})])])])],32)])])])])]),_:1})],64))}});export{st as default};