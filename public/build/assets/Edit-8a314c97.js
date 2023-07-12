import{c as u,b as d,u as f,w as i,F as p,H as c,L as _,o as g,d as e,e as b,f as a,l as n,n as l,k as r}from"./app-d43ace84.js";import{B as h}from"./Authenticated-86ad341a.js";import{B as m}from"./Button-59a3957d.js";/* empty css            */import"./ApplicationLogo-85a4f4bf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-dbfe2aa6.js";const y={class:"md:grid md:grid-cols-2"},v={class:"md:mt-0 md:col-span-2"},x={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},w={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},k={class:"sm:row-span-3"},B=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Country Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),C={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},V={class:"mb-4"},N=e("label",{for:"name",class:"block text-sm text-gray-700 font-bold"},[r("Country Name"),e("span",{class:"text-red-500"},"*")],-1),S={class:"mt-1 flex rounded-md shadow-sm"},$={class:"grid grid-cols-2 sm:grid-cols-0 gap-0 sm:gap-4"},j={class:"mb-4"},z=e("label",{for:"code",class:"block text-sm text-gray-700 font-bold"},[r("Country Code"),e("span",{class:"text-red-500"},"*")],-1),L={class:"mt-1 flex rounded-md shadow-sm"},T={class:"mb-4"},U=e("label",{for:"currency",class:"block text-sm text-gray-700 font-bold"},[r("Currency"),e("span",{class:"text-red-500"},"*")],-1),E={class:"mt-1 flex rounded-md shadow-sm"},F={class:"flex items-end justify-start space-x-2"},H={components:{Head:c,Link:_},props:{fee_period_info:Object},data(){return{form:{fee_period_id:this.fee_period_info?this.fee_period_info.id:"",fee_period:this.fee_period_info?this.fee_period_info.label:""}}},methods:{submit(){this.$inertia.post(route("settings.fee_period_list.update"),this.form,{preserveState:!0})}}},K=Object.assign(H,{__name:"Edit",setup(M){return(s,o)=>(g(),u(p,null,[d(f(c),{title:"General Setting"}),d(h,null,{header:i(()=>[]),default:i(()=>[e("div",y,[e("div",v,[e("form",{onSubmit:o[3]||(o[3]=b((...t)=>s.submit&&s.submit(...t),["prevent"]))},[e("div",x,[e("div",w,[e("div",k,[B,e("div",C,[e("div",V,[N,e("div",S,[a(e("input",{type:"text",name:"name",id:"name",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=t=>s.form.name=t),autocomplete:"off"},null,2),[[n,s.form.name]])])])]),e("div",$,[e("div",j,[z,e("div",L,[a(e("input",{type:"text",name:"code",id:"code",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.code?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=t=>s.form.code=t),autocomplete:"off"},null,2),[[n,s.form.code]])])]),e("div",T,[U,e("div",E,[a(e("input",{type:"text",name:"currency",id:"currency",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.currency?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.currency=t),autocomplete:"off"},null,2),[[n,s.form.currency]])])])]),e("div",F,[d(m,{buttonType:"gray",route:s.route("settings.countries")},{default:i(()=>[r("Cancel")]),_:1},8,["route"]),d(m,{type:"submit"},{default:i(()=>[r("Save ")]),_:1})])])])])],32)])])]),_:1})],64))}});export{K as default};
