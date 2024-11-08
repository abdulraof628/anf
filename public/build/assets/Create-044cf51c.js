import{B as c}from"./Authenticated-8568d8e0.js";import{H as v,L as C}from"./@inertiajs-dde9cc4c.js";import{_ as u}from"./Card-6da73bae.js";import{_ as S}from"./DialogModal-06cc0d6d.js";import{y,x as s,u as $,Q as t,F as h,be as i,t as g,W as a,z as o,K as n,C as U}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f7a369e6.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-f2587495.js";import"./groq-sdk-5d132fed.js";import"./lucide-vue-next-81b3e39b.js";const k={class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4"},B={key:0},L={class:"flex items-center justify-between"},w={class:"flex space-x-2 items-center"},D={class:"flex space-x-2"},N={components:{Head:v,Link:C,Card:u,Dialog:S},data(){return{disable_class_types:!0,disable_class_levels:!0,class_types:[],class_levels:[],form:{centre_id:this.$page.props.centre_id?Number(this.$page.props.centre_id):"",programme_id:"",programme_level_id:"",class_day:"",start_time:"",end_time:"",class_capacity:"",class_type:"",class_method:"",class_status:!0}}},watch:{"form.programme_id":{handler(){this.form.programme_id&&(this.disable_class_types=!0,this.disable_class_levels=!0,this.form.class_type="",this.form.programme_level_id="",axios.get(route("classes.get_class_types"),{params:{programme_id:this.form.programme_id}}).then(d=>{this.class_types=d.data,this.disable_class_types=!1}))},deep:!0},"form.class_type":{handler(){this.form.programme_id&&this.form.class_type&&(this.disable_class_levels=!0,this.form.programme_level_id="",axios.get(route("classes.get_class_levels"),{params:{programme_id:this.form.programme_id,class_type:this.form.class_type}}).then(d=>{this.class_levels=d.data,this.disable_class_levels=!1}))},deep:!0}},methods:{submit(){this.$inertia.post(route("classes.store"),this.form,{preserveState:!0})}}},Be=Object.assign(N,{__name:"Create",setup(d){return(l,e)=>{const m=i("Label"),p=i("ComboBox"),f=i("Datepicker"),V=i("Input"),b=i("Switch"),_=i("Button");return g(),y(h,null,[s($(v),{title:"Classes"}),s(c,null,{header:t(()=>e[11]||(e[11]=[])),default:t(()=>[s(u,null,{title:t(()=>e[12]||(e[12]=[a("Class Information")])),content:t(()=>[o("div",k,[o("div",null,[s(m,null,{default:t(()=>e[13]||(e[13]=[a("Centre"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{items:l.$page.props.allowed_centres,"label-property":"label","value-property":"ID",error:l.$page.props.errors.centre_id,modelValue:l.form.centre_id,"onUpdate:modelValue":e[0]||(e[0]=r=>l.form.centre_id=r),"select-placeholder":"Select Centre","search-placeholder":"Search centre..."},null,8,["items","error","modelValue"])]),o("div",null,[s(m,null,{default:t(()=>e[14]||(e[14]=[a("Programme"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{items:l.$page.props.programme_list,"label-property":"name","value-property":"id",error:!!l.$page.props.errors.programme_id,modelValue:l.form.programme_id,"onUpdate:modelValue":e[1]||(e[1]=r=>l.form.programme_id=r),"select-placeholder":"Select Programme","search-placeholder":"Search programme..."},{label:t(({item:r})=>[a(n(r.name)+" ("+n(r.country_name)+") ",1)]),"label-content":t(({selectedItem:r,selectedItems:T,multiple:H})=>[r?(g(),y("span",B,n(r.name)+" ("+n(r.country_name)+")",1)):U("",!0)]),_:1},8,["items","error","modelValue"])]),o("div",null,[s(m,null,{default:t(()=>e[15]||(e[15]=[a("Class Type"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{items:l.class_types,"label-property":"name","value-property":"id",error:!!l.$page.props.errors.class_type,modelValue:l.form.class_type,"onUpdate:modelValue":e[2]||(e[2]=r=>l.form.class_type=r),"select-placeholder":"Select Class Type","search-placeholder":"Search class type...",disabled:l.disable_class_types},null,8,["items","error","modelValue","disabled"])]),o("div",null,[s(m,null,{default:t(()=>e[16]||(e[16]=[a("Class Level"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{items:l.class_levels,"label-property":"level","value-property":"id",error:!!l.$page.props.errors.programme_level_id,modelValue:l.form.programme_level_id,"onUpdate:modelValue":e[3]||(e[3]=r=>l.form.programme_level_id=r),"select-placeholder":"Select Class Level","search-placeholder":"Search class level...",disabled:l.disable_class_levels},null,8,["items","error","modelValue","disabled"])]),o("div",null,[s(m,null,{default:t(()=>e[17]||(e[17]=[a("Class Day"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{items:l.$page.props.day_list,"label-property":"name","value-property":"id",error:!!l.$page.props.errors.class_day,modelValue:l.form.class_day,"onUpdate:modelValue":e[4]||(e[4]=r=>l.form.class_day=r),"select-placeholder":"Select Class Level","search-placeholder":"Search class level..."},null,8,["items","error","modelValue"])]),o("div",null,[s(m,null,{default:t(()=>e[18]||(e[18]=[a("Class Method"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{items:l.$page.props.method_list,"label-property":"name","value-property":"id",error:!!l.$page.props.errors.class_method,modelValue:l.form.class_method,"onUpdate:modelValue":e[5]||(e[5]=r=>l.form.class_method=r),"select-placeholder":"Select Class Level","search-placeholder":"Search class level..."},null,8,["items","error","modelValue"])]),o("div",null,[s(m,null,{default:t(()=>e[19]||(e[19]=[a("Start Time"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),s(f,{mode:"time",format:"H:mm",modelValue:l.form.start_time,"onUpdate:modelValue":e[6]||(e[6]=r=>l.form.start_time=r)},null,8,["modelValue"])]),o("div",null,[s(m,null,{default:t(()=>e[20]||(e[20]=[a("End Time"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),s(f,{mode:"time",format:"H:mm",modelValue:l.form.end_time,"onUpdate:modelValue":e[7]||(e[7]=r=>l.form.end_time=r)},null,8,["modelValue"])]),o("div",null,[s(m,null,{default:t(()=>e[21]||(e[21]=[a("Class Capacity"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),s(V,{type:"number",error:!!l.$page.props.errors.class_capacity,modelValue:l.form.class_capacity,"onUpdate:modelValue":e[8]||(e[8]=r=>l.form.class_capacity=r)},null,8,["error","modelValue"])])])]),_:1}),s(u,null,{content:t(()=>[o("div",L,[o("div",w,[s(m,null,{default:t(()=>e[22]||(e[22]=[a("Active")])),_:1}),s(b,{modelValue:l.form.class_status,"onUpdate:modelValue":e[9]||(e[9]=r=>l.form.class_status=r)},null,8,["modelValue"])]),o("div",D,[s(_,{variant:"outline",onClick:e[10]||(e[10]=r=>l.$inertia.get(l.route("classes")))},{default:t(()=>e[23]||(e[23]=[a("Cancel")])),_:1}),s(_,{onClick:l.submit},{default:t(()=>e[24]||(e[24]=[a("Save")])),_:1},8,["onClick"])])])]),_:1})]),_:1})],64)}}});export{Be as default};
