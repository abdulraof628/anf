import{o as f,c as p,a as i,u,w as a,F as _,D as g,H as c,L as b,d as o,k as h,h as d,v as r,n as l,g as n}from"./app-832976dc.js";import{B as v}from"./Authenticated-6a4c8e09.js";import{B as m}from"./Button-625852c6.js";import{r as x}from"./TrashIcon-414f9a5e.js";import{V as w}from"./vue-draggable-next.esm-bundler-e6db7e3b.js";import{C as y}from"./ConfirmationModal-3cc54a8a.js";import{x as T,I as k,y as B,S as C,g as V}from"./tabs-6cae75f4.js";import"./ApplicationLogo-61560844.js";import"./XIcon-fabadbaa.js";import"./toggle-bf70d7bf.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-d3ec02a4.js";import"./use-outside-click-0c5eddc6.js";import"./use-resolve-button-type-dcf78473.js";const S={class:"py-4 px-4"},D={class:"overflow-x-auto"},L={class:"mx-auto"},M={class:"align-middle inline-block min-w-full"},$={class:"mt-4 bg-white"},j={class:"flex space-x-2"},I={class:"overflow-hidden w-1/2"},N={class:"bg-white px-3 py-2"},O=o("div",{class:"mb-5"},[o("h1",{class:"text-indigo-800 font-bold"},"Conditions"),o("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),z={class:"mb-3"},U=o("label",{for:"score",class:"block text-sm text-gray-700 font-bold"},[n("Score less than"),o("span",{class:"text-red-500"},"*")],-1),A={class:"mt-1 flex rounded-md shadow-sm"},E={class:"mb-3"},F=o("label",{for:"message",class:"block text-sm text-gray-700 font-bold"},[n("Message"),o("span",{class:"text-red-500"},"*")],-1),H={class:"mt-1 flex rounded-md shadow-sm"},P={class:"flex items-end justify-end space-x-2"},G=g({components:{Head:c,Link:b,TabGroup:T,TabList:k,Tab:B,TabPanels:C,TabPanel:V,ConfirmationModal:y,TrashIcon:x,draggable:w},props:{condition_info:Object},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{condition_id:this.condition_info?this.condition_info.id:"",dt_id:this.condition_info?this.condition_info.dt_id:"",score:this.condition_info?this.condition_info.score_capped:"",message:this.condition_info?this.condition_info.message:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.conditions.update"),this.form,{preserveState:!0})}}}),ro=Object.assign(G,{__name:"Edit",setup(R){return(e,t)=>(f(),p(_,null,[i(u(c),{title:"Diagnostic Test"}),i(v,null,{header:a(()=>[]),default:a(()=>[o("div",S,[o("div",D,[o("div",L,[o("div",M,[o("div",$,[o("div",j,[o("div",I,[o("form",{onSubmit:t[2]||(t[2]=h((...s)=>e.submit&&e.submit(...s),["prevent"]))},[o("div",N,[O,o("div",z,[U,o("div",A,[d(o("input",{type:"text",name:"score",id:"score",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.score?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=s=>e.form.score=s),autocomplete:"off"},null,2),[[r,e.form.score]])])]),o("div",E,[F,o("div",H,[d(o("textarea",{type:"text",name:"message",id:"message",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.message?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=s=>e.form.message=s),autocomplete:"off"},null,2),[[r,e.form.message]])])]),o("div",P,[i(m,{buttonType:"gray",route:e.route("dt.settings.details",{dt_id:e.condition_info.dt_id})},{default:a(()=>[n("Cancel")]),_:1},8,["route"]),i(m,{type:"submit"},{default:a(()=>[n("Save")]),_:1})])])],32)])])])])])])])]),_:1})],64))}});export{ro as default};
