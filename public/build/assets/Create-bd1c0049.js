import{c as u,b as d,u as p,w as a,F as f,H as c,L as g,o as b,d as e,e as _,f as n,l as i,n as l,k as r}from"./app-00598595.js";import{B as y}from"./Authenticated-e4e51f3b.js";import{B as m}from"./Button-ee32d5cc.js";import"./ApplicationLogo-251ad7c3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-71220cbb.js";import"./default.css_vue_type_style_index_0_src_true_lang-4eb21fb1.js";import"./moment-fbc5633a.js";const h={class:"md:grid md:grid-cols-2"},v={class:"md:mt-0 md:col-span-2"},x={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},w={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},k={class:"sm:row-span-3"},C=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Country Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),B={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},V={class:"mb-4"},N=e("label",{for:"name",class:"block text-sm text-gray-700 font-bold"},[r("Country Name"),e("span",{class:"text-red-500"},"*")],-1),S={class:"mt-1 flex rounded-md shadow-sm"},$={class:"grid grid-cols-2 sm:grid-cols-0 gap-0 sm:gap-4"},z={class:"mb-4"},L=e("label",{for:"code",class:"block text-sm text-gray-700 font-bold"},[r("Country Code"),e("span",{class:"text-red-500"},"*")],-1),T={class:"mt-1 flex rounded-md shadow-sm"},U={class:"mb-4"},j=e("label",{for:"currency",class:"block text-sm text-gray-700 font-bold"},[r("Currency"),e("span",{class:"text-red-500"},"*")],-1),F={class:"mt-1 flex rounded-md shadow-sm"},H={class:"flex items-end justify-start space-x-2"},M={components:{Head:c,Link:g},data(){return{form:{name:"",code:"",currency:""}}},methods:{submit(){this.$inertia.post(route("settings.countries.store"),this.form,{preserveState:!0})}}},P=Object.assign(M,{__name:"Create",setup(A){return(s,o)=>(b(),u(f,null,[d(p(c),{title:"General Setting"}),d(y,null,{header:a(()=>[]),default:a(()=>[e("div",h,[e("div",v,[e("form",{onSubmit:o[3]||(o[3]=_((...t)=>s.submit&&s.submit(...t),["prevent"]))},[e("div",x,[e("div",w,[e("div",k,[C,e("div",B,[e("div",V,[N,e("div",S,[n(e("input",{type:"text",name:"name",id:"name",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=t=>s.form.name=t),autocomplete:"off"},null,2),[[i,s.form.name]])])])]),e("div",$,[e("div",z,[L,e("div",T,[n(e("input",{type:"text",name:"code",id:"code",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.code?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=t=>s.form.code=t),autocomplete:"off"},null,2),[[i,s.form.code]])])]),e("div",U,[j,e("div",F,[n(e("input",{type:"text",name:"currency",id:"currency",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.currency?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.currency=t),autocomplete:"off"},null,2),[[i,s.form.currency]])])])]),e("div",H,[d(m,{buttonType:"gray",route:s.route("settings.countries")},{default:a(()=>[r("Cancel")]),_:1},8,["route"]),d(m,{type:"submit"},{default:a(()=>[r("Save ")]),_:1})])])])])],32)])])]),_:1})],64))}});export{P as default};