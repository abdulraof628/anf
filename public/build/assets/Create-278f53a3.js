import{o as p,c as f,a,u,w as i,F as g,_,H as c,L as b,d as e,l as h,h as d,v as n,n as l,g as r}from"./app-7998ab3f.js";import{B as x}from"./Authenticated-108ddfbc.js";import{B as m}from"./Button-9fc2dde7.js";import{r as v}from"./TrashIcon-2aa1e134.js";import{V as w}from"./vue-draggable-next.esm-bundler-bd98e73b.js";import{C as y}from"./ConfirmationModal-9a7f55b5.js";import{m as T,p as B,x as k,I as C,y as V}from"./tabs-86d73a31.js";import"./ApplicationLogo-87bba962.js";import"./XIcon-6ae3497b.js";import"./vue3-perfect-scrollbar-1a319691.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-dbb2af03.js";import"./moment-a9aaa855.js";import"./transition-3b4d2d6c.js";import"./keyboard-b4baaa3b.js";import"./use-resolve-button-type-6cd319a6.js";const L={class:"py-4 px-4"},M={class:"overflow-x-auto"},S={class:"mx-auto"},$={class:"align-middle inline-block min-w-full"},D={class:"mt-4 bg-white"},I={class:"flex space-x-2"},N={class:"overflow-hidden w-1/2"},j={class:"bg-white px-3 py-2"},z=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Conditions"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),O={class:"mb-3"},U=e("label",{for:"score",class:"block text-sm text-gray-700 font-bold"},[r("Score less than"),e("span",{class:"text-red-500"},"*")],-1),A={class:"mt-1 flex rounded-md shadow-sm"},F={class:"mb-3"},H=e("label",{for:"message",class:"block text-sm text-gray-700 font-bold"},[r("Message"),e("span",{class:"text-red-500"},"*")],-1),P={class:"mt-1 flex rounded-md shadow-sm"},E={class:"flex items-end justify-end space-x-2"},G=_({components:{Head:c,Link:b,TabGroup:T,TabList:B,Tab:k,TabPanels:C,TabPanel:V,ConfirmationModal:y,TrashIcon:v,draggable:w},props:{diagnostic_test_id:String},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{dt_id:this.diagnostic_test_id?this.diagnostic_test_id:"",score:"",message:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.conditions.store"),this.form,{preserveState:!0})}}}),ne=Object.assign(G,{__name:"Create",setup(R){return(s,t)=>(p(),f(g,null,[a(u(c),{title:"Diagnostic Test"}),a(x,null,{header:i(()=>[]),default:i(()=>[e("div",L,[e("div",M,[e("div",S,[e("div",$,[e("div",D,[e("div",I,[e("div",N,[e("form",{onSubmit:t[2]||(t[2]=h((...o)=>s.submit&&s.submit(...o),["prevent"]))},[e("div",j,[z,e("div",O,[U,e("div",A,[d(e("input",{type:"text",name:"score",id:"score",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.score?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.score=o),autocomplete:"off"},null,2),[[n,s.form.score]])])]),e("div",F,[H,e("div",P,[d(e("textarea",{type:"text",name:"message",id:"message",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.message?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.message=o),autocomplete:"off"},null,2),[[n,s.form.message]])])]),e("div",E,[a(m,{buttonType:"gray",route:s.route("dt.settings.details",{dt_id:this.diagnostic_test_id})},{default:i(()=>[r("Cancel")]),_:1},8,["route"]),a(m,{type:"submit"},{default:i(()=>[r("Save")]),_:1})])])],32)])])])])])])])]),_:1})],64))}});export{ne as default};
