import{o as n,c,a as o,u as p,w as a,F as m,H as l,L as _,d as s,k as u,h as f,v as g,n as y,g as r}from"./app-462a769a.js";import{B as h}from"./Authenticated-4c85926c.js";import{B as d}from"./Button-b3e73baf.js";import"./ApplicationLogo-4b85744d.js";import"./XIcon-23a15b91.js";import"./vue3-perfect-scrollbar-d7092836.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";const b={class:"md:grid md:grid-cols-2"},v={class:"md:mt-0 md:col-span-2"},w={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},x={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},B={class:"sm:row-span-3"},k=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Class Type Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),C={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},T={class:"mb-4"},z=s("label",{for:"class_type",class:"block text-sm text-gray-700 font-bold"},[r("Class Type"),s("span",{class:"text-red-500"},"*")],-1),S={class:"mt-1 flex rounded-md shadow-sm"},V={class:"flex items-end justify-start space-x-2"},j={components:{Head:l,Link:_},props:{class_type_info:Object},data(){return{form:{class_type_id:this.class_type_info?this.class_type_info.id:"",class_type:this.class_type_info?this.class_type_info.name:""}}},methods:{submit(){this.$inertia.post(route("settings.class_types.update"),this.form,{preserveState:!0})}}},D=Object.assign(j,{__name:"Edit",setup(L){return(t,e)=>(n(),c(m,null,[o(p(l),{title:"General Setting"}),o(h,null,{header:a(()=>[]),default:a(()=>[s("div",b,[s("div",v,[s("form",{onSubmit:e[1]||(e[1]=u((...i)=>t.submit&&t.submit(...i),["prevent"]))},[s("div",w,[s("div",x,[s("div",B,[k,s("div",C,[s("div",T,[z,s("div",S,[f(s("input",{type:"text",name:"class_type",id:"class_type",class:y(["capitalize focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.class_type?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":e[0]||(e[0]=i=>t.form.class_type=i),autocomplete:"off"},null,2),[[g,t.form.class_type]])])])])])]),s("div",V,[o(d,{buttonType:"gray",route:t.route("settings.class_types")},{default:a(()=>[r("Cancel")]),_:1},8,["route"]),o(d,{type:"submit"},{default:a(()=>[r("Save ")]),_:1})])])],32)])])]),_:1})],64))}});export{D as default};
