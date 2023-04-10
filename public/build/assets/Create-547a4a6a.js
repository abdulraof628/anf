import{A as f,h as p,a,b as u,w as i,F as g,H as c,L as _,o as b,d as e,f as h,k as d,x as n,n as l,e as r}from"./app-825cb09d.js";import{B as x}from"./Authenticated-36680990.js";import{B as m}from"./Button-5cb0f01e.js";import{V as v}from"./vue-draggable-next.esm-bundler-cb2240ad.js";import{C as w}from"./ConfirmationModal-6c5a7432.js";import{r as y}from"./TrashIcon-51718509.js";import{x as T,I as k,y as B,S as C,g as S}from"./tabs-5aa3aa86.js";import"./ApplicationLogo-47fe7a8e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-ba7b10a7.js";import"./transition-198f9b98.js";import"./use-resolve-button-type-47bd049c.js";const V={class:"py-4 px-4"},L={class:"overflow-x-auto"},M={class:"mx-auto"},$={class:"align-middle inline-block min-w-full"},I={class:"mt-4 bg-white"},N={class:"flex space-x-2"},j={class:"overflow-hidden w-1/2"},z={class:"bg-white px-3 py-2"},A=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Conditions"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),D={class:"mb-3"},O=e("label",{for:"score",class:"block text-sm text-gray-700 font-bold"},[r("Score less than"),e("span",{class:"text-red-500"},"*")],-1),U={class:"mt-1 flex rounded-md shadow-sm"},F={class:"mb-3"},G=e("label",{for:"message",class:"block text-sm text-gray-700 font-bold"},[r("Message"),e("span",{class:"text-red-500"},"*")],-1),H={class:"mt-1 flex rounded-md shadow-sm"},P={class:"flex items-end justify-end space-x-2"},E=f({components:{Head:c,Link:_,TabGroup:T,TabList:k,Tab:B,TabPanels:C,TabPanel:S,ConfirmationModal:w,TrashIcon:y,draggable:v},props:{diagnostic_test_id:String},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{dt_id:this.diagnostic_test_id?this.diagnostic_test_id:"",score:"",message:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.conditions.store"),this.form,{preserveState:!0})}}}),ae=Object.assign(E,{__name:"Create",setup(R){return(s,t)=>(b(),p(g,null,[a(u(c),{title:"General Setting"}),a(x,null,{header:i(()=>[]),default:i(()=>[e("div",V,[e("div",L,[e("div",M,[e("div",$,[e("div",I,[e("div",N,[e("div",j,[e("form",{onSubmit:t[2]||(t[2]=h((...o)=>s.submit&&s.submit(...o),["prevent"]))},[e("div",z,[A,e("div",D,[O,e("div",U,[d(e("input",{type:"text",name:"score",id:"score",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.score?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.score=o),autocomplete:"off"},null,2),[[n,s.form.score]])])]),e("div",F,[G,e("div",H,[d(e("textarea",{type:"text",name:"message",id:"message",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.message?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.message=o),autocomplete:"off"},null,2),[[n,s.form.message]])])]),e("div",P,[a(m,{buttonType:"gray",route:s.route("dt.settings.details",{dt_id:this.diagnostic_test_id})},{default:i(()=>[r("Cancel")]),_:1},8,["route"]),a(m,{type:"submit"},{default:i(()=>[r("Save")]),_:1})])])],32)])])])])])])])]),_:1})],64))}});export{ae as default};
