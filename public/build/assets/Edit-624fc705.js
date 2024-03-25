import{o as i,c as l,a as r,u as a,w as d,F as n,L as b,H as f,d as s,k as _,h as m,v as h,n as u,l as v,e as y,t as w,g as p}from"./app-1e0c6682.js";import{B as x}from"./Authenticated-c3a74fd5.js";import{B as c}from"./Button-50ac9964.js";import{b as g}from"./vue3-perfect-scrollbar-40f5923a.js";import"./ApplicationLogo-6909dc22.js";import"./XIcon-80766edc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./moment-a9aaa855.js";const k={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},V={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},j={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},S={class:"sm:row-span-3"},L={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},N=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Role Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),O={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},T={class:"mb-4"},$=s("label",{for:"display_name",class:"block text-sm font-bold text-gray-700"},"Name",-1),z={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},C={class:"mb-4"},M=s("label",{for:"display_name",class:"block text-sm font-bold text-gray-700"},"Group",-1),U=["value"],D=s("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),E={class:"flex justify-between mt-4 items-center"},F={class:""},H=s("label",{for:"",class:"font-sm pr-3"},"Status",-1),R={class:"flex flex-row-reverse items-center"},A={class:"flex space-x-2"},G={components:{Link:b,Toggle:g},props:{roles:Object},data(){return{form:{role_id:this.roles?this.roles.id:"",display_name:this.roles?this.roles.display_name:"",role_group:this.roles?this.roles.role_group_id:1,status:this.roles?this.roles.status:""}}},methods:{submit(){this.$inertia.post(route("roles.update"),this.form)}}},ss=Object.assign(G,{__name:"Edit",setup(I){return(e,t)=>(i(),l(n,null,[r(a(f),{title:"Roles"}),r(x,null,{header:d(()=>[]),default:d(()=>[s("div",k,[s("div",B,[s("form",{onSubmit:t[3]||(t[3]=_((...o)=>e.submit&&e.submit(...o),["prevent"]))},[s("div",V,[s("div",j,[s("div",S,[s("div",L,[N,s("div",O,[s("div",T,[$,m(s("input",{type:"text",class:u(["mt-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.display_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=o=>e.form.display_name=o)},null,2),[[h,e.form.display_name]])])]),s("div",z,[s("div",C,[M,m(s("select",{name:"",id:"",class:u(["mt-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.role_group?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=o=>e.form.role_group=o)},[(i(!0),l(n,null,y(e.$page.props.role_groups,(o,q)=>(i(),l("option",{value:o.id,key:o.id},w(o.name),9,U))),128))],2),[[v,e.form.role_group]])])]),D,s("div",E,[s("div",F,[H,r(a(g),{modelValue:e.form.status,"onUpdate:modelValue":t[2]||(t[2]=o=>e.form.status=o),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),s("div",R,[s("div",A,[r(c,{buttonType:"gray",route:e.route("roles")},{default:d(()=>[p(" Cancel ")]),_:1},8,["route"]),r(c,{type:"submit",disabled:e.form.processing},{default:d(()=>[p(" Save ")]),_:1},8,["disabled"])])])])])])])])],32)])])]),_:1})],64))}});export{ss as default};
