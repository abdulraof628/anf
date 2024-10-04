import{B as c}from"./Authenticated-862af612.js";import{H as g,L as h}from"./@inertiajs-2b766590.js";import{_ as n}from"./Card-e1e522a8.js";import{x as f,v as r,u as _,O as o,F as V,b7 as m,q as v,U as s,y as l}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-31ea0dbe.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";import"./lucide-vue-next-7b48dc26.js";const y={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},$=l("span",{class:"text-red-500"},"*",-1),C=l("span",{class:"text-red-500"},"*",-1),b=l("span",{class:"text-red-500"},"*",-1),B={class:"grid grid-cols-1 2xl:grid-cols-2 gap-4"},S=l("span",{class:"text-red-500"},"*",-1),w=l("span",{class:"text-red-500"},"*",-1),U={class:"grid grid-cols-1 2xl:grid-cols-2 gap-4"},L={class:"flex justify-end"},k={class:"flex space-x-2"},N={components:{Head:g,Link:h},data(){return{form:{name:"",age:"",language:"",chart_type:this.$page.props.chart_types[0].id,lower_score:"",lower_score_direction:"",higher_score:"",higher_score_direction:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.store"),this.form,{preserveState:!0})}}},Ce=Object.assign(N,{__name:"Create",setup(I){return(e,t)=>{const p=m("Label"),d=m("Input"),i=m("ComboBox"),u=m("Button");return v(),f(V,null,[r(_(g),{title:"Diagnostic Test"}),r(c,null,{header:o(()=>[]),default:o(()=>[r(n,null,{title:o(()=>[s("Basic Information")]),content:o(()=>[l("div",y,[l("div",null,[r(p,null,{default:o(()=>[s("Name"),$]),_:1}),r(d,{type:"text",error:e.$page.props.errors.name,modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=a=>e.form.name=a)},null,8,["error","modelValue"])]),l("div",null,[r(p,null,{default:o(()=>[s("Age"),C]),_:1}),r(i,{items:e.$page.props.ages,"label-property":"name","value-property":"id",error:e.$page.props.errors.age,modelValue:e.form.age,"onUpdate:modelValue":t[1]||(t[1]=a=>e.form.age=a),"select-placeholder":"Select Age","search-placeholder":"Search age..."},null,8,["items","error","modelValue"])]),l("div",null,[r(p,null,{default:o(()=>[s("Language"),b]),_:1}),r(i,{items:e.$page.props.languages,"label-property":"name","value-property":"id",error:e.$page.props.errors.language,modelValue:e.form.language,"onUpdate:modelValue":t[2]||(t[2]=a=>e.form.language=a),"select-placeholder":"Select Language","search-placeholder":"Search language..."},null,8,["items","error","modelValue"])])])]),_:1}),r(n,null,{title:o(()=>[s("Conditions")]),content:o(()=>[l("div",B,[l("div",null,[r(p,null,{default:o(()=>[s("If score less than"),S]),_:1}),r(d,{type:"text",error:e.$page.props.errors.lower_score,modelValue:e.form.lower_score,"onUpdate:modelValue":t[3]||(t[3]=a=>e.form.lower_score=a)},null,8,["error","modelValue"])]),l("div",null,[r(p,null,{default:o(()=>[s("Go to")]),_:1}),r(i,{canClear:!0,items:e.$page.props.dt_list,"label-property":"name","value-property":"id",error:e.$page.props.errors.lower_score_direction,modelValue:e.form.lower_score_direction,"onUpdate:modelValue":t[4]||(t[4]=a=>e.form.lower_score_direction=a),"select-placeholder":"Default (No Redirection)","search-placeholder":"Search redirection..."},null,8,["items","error","modelValue"])]),l("div",null,[r(p,null,{default:o(()=>[s("If score more than"),w]),_:1}),r(d,{type:"text",error:e.$page.props.errors.higher_score,modelValue:e.form.higher_score,"onUpdate:modelValue":t[5]||(t[5]=a=>e.form.higher_score=a)},null,8,["error","modelValue"])]),l("div",null,[r(p,null,{default:o(()=>[s("Language")]),_:1}),r(i,{canClear:!0,items:e.$page.props.dt_list,"label-property":"name","value-property":"id",error:e.$page.props.errors.higher_score_direction,modelValue:e.form.higher_score_direction,"onUpdate:modelValue":t[6]||(t[6]=a=>e.form.higher_score_direction=a),"select-placeholder":"Default (No Redirection)","search-placeholder":"Search language..."},null,8,["items","error","modelValue"])])])]),_:1}),r(n,null,{title:o(()=>[s("Chart")]),content:o(()=>[l("div",U,[l("div",null,[r(p,null,{default:o(()=>[s("Chart Type")]),_:1}),r(i,{items:e.$page.props.chart_types,"label-property":"name","value-property":"id",error:e.$page.props.errors.chart_type,modelValue:e.form.chart_type,"onUpdate:modelValue":t[7]||(t[7]=a=>e.form.chart_type=a),"select-placeholder":"Select Chart","search-placeholder":"Search chart..."},null,8,["items","error","modelValue"])])])]),_:1}),r(n,null,{content:o(()=>[l("div",L,[l("div",k,[r(u,{variant:"outline",onClick:t[8]||(t[8]=a=>e.$inertia.get(e.route("dt.settings")))},{default:o(()=>[s("Cancel")]),_:1}),r(u,{onClick:e.submit},{default:o(()=>[s("Save")]),_:1},8,["onClick"])])])]),_:1})]),_:1})],64)}}});export{Ce as default};
