import{B as y}from"./Authenticated-11e054d5.js";import{H as _,L as V}from"./@inertiajs-4f2e6820.js";import{_ as n}from"./Card-a2265374.js";import{_ as b}from"./DialogModal-6c1852d9.js";import{y as c,x as s,u as C,Q as t,F as $,be as i,t as S,W as a,z as r}from"./@vue-66b8c761.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-98eea8e8.js";import"./axios-1779699b.js";import"./pusher-js-cb9cdec3.js";import"./@vueform-4cba997d.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";import"./lucide-vue-next-bc441494.js";const h={class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4"},U={class:"flex items-center justify-between"},B={class:"flex space-x-2 items-center"},L={class:"flex space-x-2"},k={components:{Head:_,Link:V,Card:n,Dialog:b},data(){return{disable_class_types:!0,disable_class_levels:!0,class_types:[],class_levels:[],form:{centre_id:this.$page.props.centre_id?Number(this.$page.props.centre_id):"",programme_id:"",programme_level_id:"",class_day:"",start_time:"",end_time:"",class_capacity:"",class_type:"",class_method:"",class_status:!0}}},watch:{"form.programme_id":{handler(){this.form.programme_id&&(this.disable_class_types=!0,this.disable_class_levels=!0,this.form.class_type="",this.form.programme_level_id="",axios.get(route("classes.get_class_types"),{params:{programme_id:this.form.programme_id}}).then(d=>{this.class_types=d.data,this.disable_class_types=!1}))},deep:!0},"form.class_type":{handler(){this.form.programme_id&&this.form.class_type&&(this.disable_class_levels=!0,this.form.programme_level_id="",axios.get(route("classes.get_class_levels"),{params:{programme_id:this.form.programme_id,class_type:this.form.class_type}}).then(d=>{this.class_levels=d.data,this.disable_class_levels=!1}))},deep:!0}},methods:{submit(){this.$inertia.post(route("classes.store"),this.form,{preserveState:!0})}}},ce=Object.assign(k,{__name:"Create",setup(d){return(l,e)=>{const m=i("Label"),p=i("ComboBox"),u=i("Datepicker"),v=i("Input"),g=i("Switch"),f=i("Button");return S(),c($,null,[s(C(_),{title:"Classes"}),s(y,null,{header:t(()=>e[11]||(e[11]=[])),default:t(()=>[s(n,null,{title:t(()=>e[12]||(e[12]=[a("Class Information")])),content:t(()=>[r("div",h,[r("div",null,[s(m,null,{default:t(()=>e[13]||(e[13]=[a("Centre"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{items:l.$page.props.allowed_centres,"label-property":"label","value-property":"ID",error:l.$page.props.errors.centre_id,modelValue:l.form.centre_id,"onUpdate:modelValue":e[0]||(e[0]=o=>l.form.centre_id=o),"select-placeholder":"Select Centre","search-placeholder":"Search centre..."},null,8,["items","error","modelValue"])]),r("div",null,[s(m,null,{default:t(()=>e[14]||(e[14]=[a("Programme"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{items:l.$page.props.programme_list,"label-property":"name","value-property":"id",error:!!l.$page.props.errors.programme_id,modelValue:l.form.programme_id,"onUpdate:modelValue":e[1]||(e[1]=o=>l.form.programme_id=o),"select-placeholder":"Select Programme","search-placeholder":"Search programme..."},null,8,["items","error","modelValue"])]),r("div",null,[s(m,null,{default:t(()=>e[15]||(e[15]=[a("Class Type"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{items:l.class_types,"label-property":"name","value-property":"id",error:!!l.$page.props.errors.class_type,modelValue:l.form.class_type,"onUpdate:modelValue":e[2]||(e[2]=o=>l.form.class_type=o),"select-placeholder":"Select Class Type","search-placeholder":"Search class type...",disabled:l.disable_class_types},null,8,["items","error","modelValue","disabled"])]),r("div",null,[s(m,null,{default:t(()=>e[16]||(e[16]=[a("Class Level"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{items:l.class_levels,"label-property":"level","value-property":"id",error:!!l.$page.props.errors.programme_level_id,modelValue:l.form.programme_level_id,"onUpdate:modelValue":e[3]||(e[3]=o=>l.form.programme_level_id=o),"select-placeholder":"Select Class Level","search-placeholder":"Search class level...",disabled:l.disable_class_levels},null,8,["items","error","modelValue","disabled"])]),r("div",null,[s(m,null,{default:t(()=>e[17]||(e[17]=[a("Class Day"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{items:l.$page.props.day_list,"label-property":"name","value-property":"id",error:!!l.$page.props.errors.class_day,modelValue:l.form.class_day,"onUpdate:modelValue":e[4]||(e[4]=o=>l.form.class_day=o),"select-placeholder":"Select Class Level","search-placeholder":"Search class level..."},null,8,["items","error","modelValue"])]),r("div",null,[s(m,null,{default:t(()=>e[18]||(e[18]=[a("Class Method"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{items:l.$page.props.method_list,"label-property":"name","value-property":"id",error:!!l.$page.props.errors.class_method,modelValue:l.form.class_method,"onUpdate:modelValue":e[5]||(e[5]=o=>l.form.class_method=o),"select-placeholder":"Select Class Level","search-placeholder":"Search class level..."},null,8,["items","error","modelValue"])]),r("div",null,[s(m,null,{default:t(()=>e[19]||(e[19]=[a("Start Time"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),s(u,{mode:"time",format:"H:mm",modelValue:l.form.start_time,"onUpdate:modelValue":e[6]||(e[6]=o=>l.form.start_time=o)},null,8,["modelValue"])]),r("div",null,[s(m,null,{default:t(()=>e[20]||(e[20]=[a("End Time"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),s(u,{mode:"time",format:"H:mm",modelValue:l.form.end_time,"onUpdate:modelValue":e[7]||(e[7]=o=>l.form.end_time=o)},null,8,["modelValue"])]),r("div",null,[s(m,null,{default:t(()=>e[21]||(e[21]=[a("Class Capacity"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),s(v,{type:"number",error:!!l.$page.props.errors.class_capacity,modelValue:l.form.class_capacity,"onUpdate:modelValue":e[8]||(e[8]=o=>l.form.class_capacity=o)},null,8,["error","modelValue"])])])]),_:1}),s(n,null,{content:t(()=>[r("div",U,[r("div",B,[s(m,null,{default:t(()=>e[22]||(e[22]=[a("Active")])),_:1}),s(g,{modelValue:l.form.class_status,"onUpdate:modelValue":e[9]||(e[9]=o=>l.form.class_status=o)},null,8,["modelValue"])]),r("div",L,[s(f,{variant:"outline",onClick:e[10]||(e[10]=o=>l.$inertia.get(l.route("classes")))},{default:t(()=>e[23]||(e[23]=[a("Cancel")])),_:1}),s(f,{onClick:l.submit},{default:t(()=>e[24]||(e[24]=[a("Save")])),_:1},8,["onClick"])])])]),_:1})]),_:1})],64)}}});export{ce as default};
