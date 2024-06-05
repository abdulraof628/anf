import{o as f,c as p,a as i,u,w as a,F as _,_ as g,H as c,L as b,d as o,l as h,h as d,v as r,n as l,g as n}from"./app-2cb814f6.js";import{B as v}from"./Authenticated-2b94df58.js";import{B as m}from"./Button-375c20b5.js";import{r as x}from"./TrashIcon-c9efe076.js";import{V as w}from"./vue-draggable-next.esm-bundler-b5f64a59.js";import{C as y}from"./ConfirmationModal-4e30a24c.js";import{m as T,p as B,x as k,I as C,y as V}from"./tabs-bc49c6a4.js";import"./ApplicationLogo-4d8d9123.js";import"./XIcon-d4937228.js";import"./vue3-perfect-scrollbar-26fe73dc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-79159604.js";import"./moment-a9aaa855.js";import"./transition-f7e95242.js";import"./keyboard-5b23c67a.js";import"./use-resolve-button-type-20003b5a.js";const L={class:"py-4 px-4"},M={class:"overflow-x-auto"},$={class:"mx-auto"},j={class:"align-middle inline-block min-w-full"},D={class:"mt-4 bg-white"},I={class:"flex space-x-2"},N={class:"overflow-hidden w-1/2"},O={class:"bg-white px-3 py-2"},S=o("div",{class:"mb-5"},[o("h1",{class:"text-indigo-800 font-bold"},"Conditions"),o("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),z={class:"mb-3"},U=o("label",{for:"score",class:"block text-sm text-gray-700 font-bold"},[n("Score less than"),o("span",{class:"text-red-500"},"*")],-1),A={class:"mt-1 flex rounded-md shadow-sm"},E={class:"mb-3"},F=o("label",{for:"message",class:"block text-sm text-gray-700 font-bold"},[n("Message"),o("span",{class:"text-red-500"},"*")],-1),H={class:"mt-1 flex rounded-md shadow-sm"},P={class:"flex items-end justify-end space-x-2"},G=g({components:{Head:c,Link:b,TabGroup:T,TabList:B,Tab:k,TabPanels:C,TabPanel:V,ConfirmationModal:y,TrashIcon:x,draggable:w},props:{condition_info:Object},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{condition_id:this.condition_info?this.condition_info.id:"",dt_id:this.condition_info?this.condition_info.dt_id:"",score:this.condition_info?this.condition_info.score_capped:"",message:this.condition_info?this.condition_info.message:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.conditions.update"),this.form,{preserveState:!0})}}}),lo=Object.assign(G,{__name:"Edit",setup(R){return(e,t)=>(f(),p(_,null,[i(u(c),{title:"Diagnostic Test"}),i(v,null,{header:a(()=>[]),default:a(()=>[o("div",L,[o("div",M,[o("div",$,[o("div",j,[o("div",D,[o("div",I,[o("div",N,[o("form",{onSubmit:t[2]||(t[2]=h((...s)=>e.submit&&e.submit(...s),["prevent"]))},[o("div",O,[S,o("div",z,[U,o("div",A,[d(o("input",{type:"text",name:"score",id:"score",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.score?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=s=>e.form.score=s),autocomplete:"off"},null,2),[[r,e.form.score]])])]),o("div",E,[F,o("div",H,[d(o("textarea",{type:"text",name:"message",id:"message",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.message?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=s=>e.form.message=s),autocomplete:"off"},null,2),[[r,e.form.message]])])]),o("div",P,[i(m,{buttonType:"gray",route:e.route("dt.settings.details",{dt_id:e.condition_info.dt_id})},{default:a(()=>[n("Cancel")]),_:1},8,["route"]),i(m,{type:"submit"},{default:a(()=>[n("Save")]),_:1})])])],32)])])])])])])])]),_:1})],64))}});export{lo as default};
