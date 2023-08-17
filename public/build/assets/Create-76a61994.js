import{c as f,b as a,u as p,w as i,F as u,A as g,o as _,H as c,d as e,e as b,f as d,l as n,n as l,k as r,L as h}from"./app-5b70941e.js";import{B as x}from"./Authenticated-3d558274.js";import{B as m}from"./Button-7003fb3f.js";import{r as v}from"./TrashIcon-a5c945e2.js";import{V as w}from"./vue-draggable-next.esm-bundler-7097f0ba.js";import{C as y}from"./ConfirmationModal-da935ed6.js";import{x as T,I as k,y as B,S as C,g as S}from"./tabs-7b056cd3.js";/* empty css            */import"./ApplicationLogo-9bc665dc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-6a638028.js";import"./default.css_vue_type_style_index_0_src_true_lang-5057ee22.js";import"./moment-fbc5633a.js";import"./transition-0f063a1d.js";import"./use-resolve-button-type-8cff86a7.js";const V={class:"py-4 px-4"},L={class:"overflow-x-auto"},M={class:"mx-auto"},$={class:"align-middle inline-block min-w-full"},D={class:"mt-4 bg-white"},I={class:"flex space-x-2"},N={class:"overflow-hidden w-1/2"},j={class:"bg-white px-3 py-2"},z=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Conditions"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),A={class:"mb-3"},O=e("label",{for:"score",class:"block text-sm text-gray-700 font-bold"},[r("Score less than"),e("span",{class:"text-red-500"},"*")],-1),U={class:"mt-1 flex rounded-md shadow-sm"},F={class:"mb-3"},H=e("label",{for:"message",class:"block text-sm text-gray-700 font-bold"},[r("Message"),e("span",{class:"text-red-500"},"*")],-1),P={class:"mt-1 flex rounded-md shadow-sm"},E={class:"flex items-end justify-end space-x-2"},G=g({components:{Head:c,Link:h,TabGroup:T,TabList:k,Tab:B,TabPanels:C,TabPanel:S,ConfirmationModal:y,TrashIcon:v,draggable:w},props:{diagnostic_test_id:String},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{dt_id:this.diagnostic_test_id?this.diagnostic_test_id:"",score:"",message:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.conditions.store"),this.form,{preserveState:!0})}}}),de=Object.assign(G,{__name:"Create",setup(R){return(s,t)=>(_(),f(u,null,[a(p(c),{title:"Diagnostic Test"}),a(x,null,{header:i(()=>[]),default:i(()=>[e("div",V,[e("div",L,[e("div",M,[e("div",$,[e("div",D,[e("div",I,[e("div",N,[e("form",{onSubmit:t[2]||(t[2]=b((...o)=>s.submit&&s.submit(...o),["prevent"]))},[e("div",j,[z,e("div",A,[O,e("div",U,[d(e("input",{type:"text",name:"score",id:"score",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.score?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.score=o),autocomplete:"off"},null,2),[[n,s.form.score]])])]),e("div",F,[H,e("div",P,[d(e("textarea",{type:"text",name:"message",id:"message",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.message?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.message=o),autocomplete:"off"},null,2),[[n,s.form.message]])])]),e("div",E,[a(m,{buttonType:"gray",route:s.route("dt.settings.details",{dt_id:this.diagnostic_test_id})},{default:i(()=>[r("Cancel")]),_:1},8,["route"]),a(m,{type:"submit"},{default:i(()=>[r("Save")]),_:1})])])],32)])])])])])])])]),_:1})],64))}});export{de as default};
