import{o as f,c as p,a as i,u,w as a,F as _,E as g,H as c,L as b,d as o,l as h,h as d,v as r,n as l,g as n}from"./app-101444dd.js";import{B as v}from"./Authenticated-ea2248ed.js";import{B as m}from"./Button-71468147.js";import{r as x}from"./TrashIcon-e0c1e8c7.js";import{V as w}from"./vue-draggable-next.esm-bundler-6b7fe2b0.js";import{C as y}from"./ConfirmationModal-7f883f6a.js";import{m as T,p as B,x as k,I as C,y as V}from"./tabs-a4b38eb6.js";import"./ApplicationLogo-8115ae4b.js";import"./XIcon-4c26867b.js";import"./perfect-scrollbar.esm-cd9c85a5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-beae56c4.js";import"./moment-55cb88ed.js";import"./transition-c8c23bf2.js";import"./keyboard-e15964ef.js";import"./use-resolve-button-type-85cf870f.js";const L={class:"py-4 px-4"},M={class:"overflow-x-auto"},$={class:"mx-auto"},j={class:"align-middle inline-block min-w-full"},D={class:"mt-4 bg-white"},I={class:"flex space-x-2"},N={class:"overflow-hidden w-1/2"},O={class:"bg-white px-3 py-2"},S=o("div",{class:"mb-5"},[o("h1",{class:"text-indigo-800 font-bold"},"Conditions"),o("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),z={class:"mb-3"},E=o("label",{for:"score",class:"block text-sm text-gray-700 font-bold"},[n("Score less than"),o("span",{class:"text-red-500"},"*")],-1),U={class:"mt-1 flex rounded-md shadow-sm"},A={class:"mb-3"},F=o("label",{for:"message",class:"block text-sm text-gray-700 font-bold"},[n("Message"),o("span",{class:"text-red-500"},"*")],-1),H={class:"mt-1 flex rounded-md shadow-sm"},P={class:"flex items-end justify-end space-x-2"},G=g({components:{Head:c,Link:b,TabGroup:T,TabList:B,Tab:k,TabPanels:C,TabPanel:V,ConfirmationModal:y,TrashIcon:x,draggable:w},props:{condition_info:Object},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{condition_id:this.condition_info?this.condition_info.id:"",dt_id:this.condition_info?this.condition_info.dt_id:"",score:this.condition_info?this.condition_info.score_capped:"",message:this.condition_info?this.condition_info.message:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.conditions.update"),this.form,{preserveState:!0})}}}),lo=Object.assign(G,{__name:"Edit",setup(R){return(e,t)=>(f(),p(_,null,[i(u(c),{title:"Diagnostic Test"}),i(v,null,{header:a(()=>[]),default:a(()=>[o("div",L,[o("div",M,[o("div",$,[o("div",j,[o("div",D,[o("div",I,[o("div",N,[o("form",{onSubmit:t[2]||(t[2]=h((...s)=>e.submit&&e.submit(...s),["prevent"]))},[o("div",O,[S,o("div",z,[E,o("div",U,[d(o("input",{type:"text",name:"score",id:"score",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.score?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=s=>e.form.score=s),autocomplete:"off"},null,2),[[r,e.form.score]])])]),o("div",A,[F,o("div",H,[d(o("textarea",{type:"text",name:"message",id:"message",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.message?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=s=>e.form.message=s),autocomplete:"off"},null,2),[[r,e.form.message]])])]),o("div",P,[i(m,{buttonType:"gray",route:e.route("dt.settings.details",{dt_id:e.condition_info.dt_id})},{default:a(()=>[n("Cancel")]),_:1},8,["route"]),i(m,{type:"submit"},{default:a(()=>[n("Save")]),_:1})])])],32)])])])])])])])]),_:1})],64))}});export{lo as default};
