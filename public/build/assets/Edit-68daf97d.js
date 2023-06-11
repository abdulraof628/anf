import{c as f,b as i,u as p,w as a,F as u,A as _,o as g,H as c,d as e,e as b,f as d,l as r,n as l,k as n,L as h}from"./app-54681965.js";import{B as x}from"./Authenticated-0cc20168.js";import{B as m}from"./Button-44b676af.js";import{r as v}from"./TrashIcon-7a28505f.js";import{V as w}from"./vue-draggable-next.esm-bundler-0275e993.js";import{C as y}from"./ConfirmationModal-786eb878.js";import{x as T,I as k,y as B,S as C,g as V}from"./tabs-ee944e98.js";/* empty css            */import"./ApplicationLogo-1906571b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-efbb4aba.js";import"./transition-d98b11bd.js";import"./use-resolve-button-type-2edb2a3a.js";const S={class:"py-4 px-4"},L={class:"overflow-x-auto"},M={class:"mx-auto"},$={class:"align-middle inline-block min-w-full"},j={class:"mt-4 bg-white"},D={class:"flex space-x-2"},I={class:"overflow-hidden w-1/2"},N={class:"bg-white px-3 py-2"},O=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Conditions"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),z={class:"mb-3"},A=e("label",{for:"score",class:"block text-sm text-gray-700 font-bold"},[n("Score less than"),e("span",{class:"text-red-500"},"*")],-1),U={class:"mt-1 flex rounded-md shadow-sm"},E={class:"mb-3"},F=e("label",{for:"message",class:"block text-sm text-gray-700 font-bold"},[n("Message"),e("span",{class:"text-red-500"},"*")],-1),H={class:"mt-1 flex rounded-md shadow-sm"},P={class:"flex items-end justify-end space-x-2"},G=_({components:{Head:c,Link:h,TabGroup:T,TabList:k,Tab:B,TabPanels:C,TabPanel:V,ConfirmationModal:y,TrashIcon:v,draggable:w},props:{condition_info:Object},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{condition_id:this.condition_info?this.condition_info.id:"",dt_id:this.condition_info?this.condition_info.dt_id:"",score:this.condition_info?this.condition_info.score_capped:"",message:this.condition_info?this.condition_info.message:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.conditions.update"),this.form,{preserveState:!0})}}}),ae=Object.assign(G,{__name:"Edit",setup(R){return(o,t)=>(g(),f(u,null,[i(p(c),{title:"Diagnostic Test"}),i(x,null,{header:a(()=>[]),default:a(()=>[e("div",S,[e("div",L,[e("div",M,[e("div",$,[e("div",j,[e("div",D,[e("div",I,[e("form",{onSubmit:t[2]||(t[2]=b((...s)=>o.submit&&o.submit(...s),["prevent"]))},[e("div",N,[O,e("div",z,[A,e("div",U,[d(e("input",{type:"text",name:"score",id:"score",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.score?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.score=s),autocomplete:"off"},null,2),[[r,o.form.score]])])]),e("div",E,[F,e("div",H,[d(e("textarea",{type:"text",name:"message",id:"message",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.message?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.message=s),autocomplete:"off"},null,2),[[r,o.form.message]])])]),e("div",P,[i(m,{buttonType:"gray",route:o.route("dt.settings.details",{dt_id:o.condition_info.dt_id})},{default:a(()=>[n("Cancel")]),_:1},8,["route"]),i(m,{type:"submit"},{default:a(()=>[n("Save")]),_:1})])])],32)])])])])])])])]),_:1})],64))}});export{ae as default};
