import{B as f}from"./Authenticated-d5536341.js";import{H as u,L as _}from"./@inertiajs-6e15fcc1.js";import{_ as n}from"./Card-d08a29fb.js";import{y as h,x as r,u as $,Q as t,F as c,be as d,t as V,W as l,z as i}from"./@vue-2682a433.js";import"./ApplicationLogo-754713c8.js";import"./radix-vue-1c0958bf.js";import"./@floating-ui-46419ac1.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-268d443b.js";import"./axios-1779699b.js";import"./pusher-js-747fa3ad.js";import"./@vueform-93d31398.js";import"./@vuepic-72648ebd.js";import"./@babel-1b80a44a.js";import"./cropperjs-1d139b1c.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-ae9c59f1.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-bada8fb2.js";import"./@radix-icons-96330712.js";import"./lodash.isequal-aa94bca8.js";import"./vue-210fd32b.js";import"./lodash.clonedeep-15f95254.js";import"./qs-d67e8c34.js";import"./side-channel-51e4be2c.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-110a5121.js";import"./deepmerge-89e33937.js";import"./nprogress-47dccea4.js";import"./lucide-vue-next-62ff5c75.js";const v={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},y={class:"grid grid-cols-1 2xl:grid-cols-2 gap-4"},C={class:"grid grid-cols-1 2xl:grid-cols-2 gap-4"},b={class:"flex justify-end"},w={class:"flex space-x-2"},B={components:{Head:u,Link:_},data(){return{form:{dt_id:this.$page.props.diagnostic_test_info?this.$page.props.diagnostic_test_info.id:"",name:this.$page.props.diagnostic_test_info?this.$page.props.diagnostic_test_info.name:"",age:this.$page.props.diagnostic_test_info?this.$page.props.diagnostic_test_info.age_id:"",language:this.$page.props.diagnostic_test_info?this.$page.props.diagnostic_test_info.language_id:"",chart_type:this.$page.props.diagnostic_test_info.chart_id?this.$page.props.diagnostic_test_info.chart_id:this.$page.props.chart_types[0].id,lower_score:this.$page.props.diagnostic_test_info?this.$page.props.diagnostic_test_info.lower_score:"",lower_score_direction:this.$page.props.diagnostic_test_info&&this.$page.props.diagnostic_test_info.lower_score_direction?this.$page.props.diagnostic_test_info.lower_score_direction:"",higher_score:this.$page.props.diagnostic_test_info?this.$page.props.diagnostic_test_info.higher_score:"",higher_score_direction:this.$page.props.diagnostic_test_info&&this.$page.props.diagnostic_test_info.higher_score_direction?this.$page.props.diagnostic_test_info.higher_score_direction:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.update"),this.form,{preserveState:!0})}}},$e=Object.assign(B,{__name:"Edit",setup(S){return(o,e)=>{const p=d("Label"),m=d("Input"),a=d("ComboBox"),g=d("Button");return V(),h(c,null,[r($(u),{title:"Diagnostic Test"}),r(f,null,{header:t(()=>e[9]||(e[9]=[])),default:t(()=>[r(n,null,{title:t(()=>e[10]||(e[10]=[l("Basic Information")])),content:t(()=>[i("div",v,[i("div",null,[r(p,null,{default:t(()=>e[11]||(e[11]=[l("Name"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),r(m,{type:"text",error:o.$page.props.errors.name,modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=s=>o.form.name=s)},null,8,["error","modelValue"])]),i("div",null,[r(p,null,{default:t(()=>e[12]||(e[12]=[l("Age"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),r(a,{items:o.$page.props.ages,"label-property":"name","value-property":"id",error:o.$page.props.errors.age,modelValue:o.form.age,"onUpdate:modelValue":e[1]||(e[1]=s=>o.form.age=s),"select-placeholder":"Select Age","search-placeholder":"Search age..."},null,8,["items","error","modelValue"])]),i("div",null,[r(p,null,{default:t(()=>e[13]||(e[13]=[l("Language"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),r(a,{items:o.$page.props.languages,"label-property":"name","value-property":"id",error:o.$page.props.errors.language,modelValue:o.form.language,"onUpdate:modelValue":e[2]||(e[2]=s=>o.form.language=s),"select-placeholder":"Select Language","search-placeholder":"Search language..."},null,8,["items","error","modelValue"])])])]),_:1}),r(n,null,{title:t(()=>e[14]||(e[14]=[l("Conditions")])),content:t(()=>[i("div",y,[i("div",null,[r(p,null,{default:t(()=>e[15]||(e[15]=[l("If score less than"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),r(m,{type:"text",error:o.$page.props.errors.lower_score,modelValue:o.form.lower_score,"onUpdate:modelValue":e[3]||(e[3]=s=>o.form.lower_score=s)},null,8,["error","modelValue"])]),i("div",null,[r(p,null,{default:t(()=>e[16]||(e[16]=[l("Go to")])),_:1}),r(a,{canClear:!0,items:o.$page.props.dt_list,"label-property":"name","value-property":"id",error:o.$page.props.errors.lower_score_direction,modelValue:o.form.lower_score_direction,"onUpdate:modelValue":e[4]||(e[4]=s=>o.form.lower_score_direction=s),"select-placeholder":"Default (No Redirection)","search-placeholder":"Search redirection..."},null,8,["items","error","modelValue"])]),i("div",null,[r(p,null,{default:t(()=>e[17]||(e[17]=[l("If score more than"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),r(m,{type:"text",error:o.$page.props.errors.higher_score,modelValue:o.form.higher_score,"onUpdate:modelValue":e[5]||(e[5]=s=>o.form.higher_score=s)},null,8,["error","modelValue"])]),i("div",null,[r(p,null,{default:t(()=>e[18]||(e[18]=[l("Language")])),_:1}),r(a,{canClear:!0,items:o.$page.props.dt_list,"label-property":"name","value-property":"id",error:o.$page.props.errors.higher_score_direction,modelValue:o.form.higher_score_direction,"onUpdate:modelValue":e[6]||(e[6]=s=>o.form.higher_score_direction=s),"select-placeholder":"Default (No Redirection)","search-placeholder":"Search language..."},null,8,["items","error","modelValue"])])])]),_:1}),r(n,null,{title:t(()=>e[19]||(e[19]=[l("Chart")])),content:t(()=>[i("div",C,[i("div",null,[r(p,null,{default:t(()=>e[20]||(e[20]=[l("Chart Type")])),_:1}),r(a,{items:o.$page.props.chart_types,"label-property":"name","value-property":"id",error:o.$page.props.errors.chart_type,modelValue:o.form.chart_type,"onUpdate:modelValue":e[7]||(e[7]=s=>o.form.chart_type=s),"select-placeholder":"Select Chart","search-placeholder":"Search chart..."},null,8,["items","error","modelValue"])])])]),_:1}),r(n,null,{content:t(()=>[i("div",b,[i("div",w,[r(g,{variant:"outline",onClick:e[8]||(e[8]=s=>o.$inertia.get(o.route("dt.settings")))},{default:t(()=>e[21]||(e[21]=[l("Cancel")])),_:1}),r(g,{onClick:o.submit},{default:t(()=>e[22]||(e[22]=[l("Save")])),_:1},8,["onClick"])])])]),_:1})]),_:1})],64)}}});export{$e as default};
