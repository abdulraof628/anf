import{B as v}from"./Authenticated-214cc5de.js";import{H as f,L as y}from"./@inertiajs-2b766590.js";import{_}from"./Card-e481dfab.js";import{_ as $}from"./DialogModal-5bb61319.js";import{h as m}from"./moment-a9aaa855.js";import{x as V,v as s,u as b,O as r,F as C,b7 as d,q as S,U as t,y as a}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ef5f5861.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";import"./lucide-vue-next-7b48dc26.js";const w={class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4"},D=a("span",{class:"text-red-500"},"*",-1),U=a("span",{class:"text-red-500"},"*",-1),k=a("span",{class:"text-red-500"},"*",-1),B=a("span",{class:"text-red-500"},"*",-1),L=a("span",{class:"text-red-500"},"*",-1),T=a("span",{class:"text-red-500"},"*",-1),H=a("span",{class:"text-red-500"},"*",-1),I=a("span",{class:"text-red-500"},"*",-1),E=a("span",{class:"text-red-500"},"*",-1),M={class:"flex items-center justify-between"},N={class:"flex space-x-2 items-center"},j={class:"flex space-x-2"},A={components:{Head:f,Link:y,Card:_,Dialog:$},data(){return{disable_class_types:!1,disable_class_levels:!1,class_types:this.$page.props.class_types?this.$page.props.class_types:[],class_levels:this.$page.props.class_levels?this.$page.props.class_levels:[],form:{class_id:this.$page.props.class_info.class_id?this.$page.props.class_info.class_id:"",centre_id:this.$page.props.class_info?this.$page.props.class_info.centre_id:"",programme_id:this.$page.props.class_info?this.$page.props.class_info.programme_id:"",programme_level_id:this.$page.props.class_info?this.$page.props.class_info.programme_level_id:"",class_day:this.$page.props.class_info?this.$page.props.class_info.class_day_id:"",start_time:{hours:new Date(new m(this.$page.props.class_info.start_time)).getHours(),minutes:new Date(new m(this.$page.props.class_info.start_time)).getMinutes(),seconds:new Date(new m(this.$page.props.class_info.start_time)).getSeconds()},end_time:{hours:new Date(new m(this.$page.props.class_info.end_time)).getHours(),minutes:new Date(new m(this.$page.props.class_info.end_time)).getMinutes(),seconds:new Date(new m(this.$page.props.class_info.end_time)).getSeconds()},class_capacity:this.$page.props.class_info?this.$page.props.class_info.capacity:"",class_type:this.$page.props.class_info?this.$page.props.class_info.class_type_id:"",class_method:this.$page.props.class_info?this.$page.props.class_info.class_method_id:"",class_status:this.$page.props.class_info?!!this.$page.props.class_info.status:!1}}},watch:{"form.programme_id":{handler(){this.form.programme_id&&(this.disable_class_types=!0,this.disable_class_levels=!0,this.form.class_type="",this.form.programme_level_id="",axios.get(route("classes.get_class_types"),{params:{programme_id:this.form.programme_id}}).then(n=>{this.class_types=n.data,this.disable_class_types=!1}))},deep:!0},"form.class_type":{handler(){this.form.programme_id&&this.form.class_type&&(this.disable_class_levels=!0,this.form.programme_level_id="",axios.get(route("classes.get_class_levels"),{params:{programme_id:this.form.programme_id,class_type:this.form.class_type}}).then(n=>{this.class_levels=n.data,this.disable_class_levels=!1}))},deep:!0}},methods:{submit(){this.$inertia.post(route("classes.update"),this.form,{preserveState:!0})}}},Te=Object.assign(A,{__name:"Edit",setup(n){return(e,l)=>{const p=d("Label"),i=d("ComboBox"),c=d("Datepicker"),h=d("Input"),g=d("Switch"),u=d("Button");return S(),V(C,null,[s(b(f),{title:"Classes"}),s(v,null,{header:r(()=>[]),default:r(()=>[s(_,null,{title:r(()=>[t("Class Information")]),content:r(()=>[a("div",w,[a("div",null,[s(p,null,{default:r(()=>[t("Centre"),D]),_:1}),s(i,{items:e.$page.props.allowed_centres,"label-property":"label","value-property":"ID",error:e.$page.props.errors.centre_id,modelValue:e.form.centre_id,"onUpdate:modelValue":l[0]||(l[0]=o=>e.form.centre_id=o),"select-placeholder":"Select Centre","search-placeholder":"Search centre..."},null,8,["items","error","modelValue"])]),a("div",null,[s(p,null,{default:r(()=>[t("Programme"),U]),_:1}),s(i,{items:e.$page.props.programme_list,"label-property":"name","value-property":"id",error:!!e.$page.props.errors.programme_id,modelValue:e.form.programme_id,"onUpdate:modelValue":l[1]||(l[1]=o=>e.form.programme_id=o),"select-placeholder":"Select Programme","search-placeholder":"Search programme..."},null,8,["items","error","modelValue"])]),a("div",null,[s(p,null,{default:r(()=>[t("Class Type"),k]),_:1}),s(i,{items:e.class_types,"label-property":"name","value-property":"id",error:!!e.$page.props.errors.class_type,modelValue:e.form.class_type,"onUpdate:modelValue":l[2]||(l[2]=o=>e.form.class_type=o),"select-placeholder":"Select Class Type","search-placeholder":"Search class type...",disabled:e.disable_class_types},null,8,["items","error","modelValue","disabled"])]),a("div",null,[s(p,null,{default:r(()=>[t("Class Level"),B]),_:1}),s(i,{items:e.class_levels,"label-property":"level","value-property":"id",error:!!e.$page.props.errors.programme_level_id,modelValue:e.form.programme_level_id,"onUpdate:modelValue":l[3]||(l[3]=o=>e.form.programme_level_id=o),"select-placeholder":"Select Class Level","search-placeholder":"Search class level...",disabled:e.disable_class_levels},null,8,["items","error","modelValue","disabled"])]),a("div",null,[s(p,null,{default:r(()=>[t("Class Day"),L]),_:1}),s(i,{items:e.$page.props.day_list,"label-property":"name","value-property":"id",error:!!e.$page.props.errors.class_day,modelValue:e.form.class_day,"onUpdate:modelValue":l[4]||(l[4]=o=>e.form.class_day=o),"select-placeholder":"Select Class Level","search-placeholder":"Search class level..."},null,8,["items","error","modelValue"])]),a("div",null,[s(p,null,{default:r(()=>[t("Class Method"),T]),_:1}),s(i,{items:e.$page.props.method_list,"label-property":"name","value-property":"id",error:!!e.$page.props.errors.class_method,modelValue:e.form.class_method,"onUpdate:modelValue":l[5]||(l[5]=o=>e.form.class_method=o),"select-placeholder":"Select Class Level","search-placeholder":"Search class level..."},null,8,["items","error","modelValue"])]),a("div",null,[s(p,null,{default:r(()=>[t("Start Time"),H]),_:1}),s(c,{mode:"time",format:"hh:mm a",modelValue:e.form.start_time,"onUpdate:modelValue":l[6]||(l[6]=o=>e.form.start_time=o)},null,8,["modelValue"])]),a("div",null,[s(p,null,{default:r(()=>[t("End Time"),I]),_:1}),s(c,{mode:"time",format:"hh:mm a",modelValue:e.form.end_time,"onUpdate:modelValue":l[7]||(l[7]=o=>e.form.end_time=o)},null,8,["modelValue"])]),a("div",null,[s(p,null,{default:r(()=>[t("Class Capacity"),E]),_:1}),s(h,{type:"number",error:!!e.$page.props.errors.class_capacity,modelValue:e.form.class_capacity,"onUpdate:modelValue":l[8]||(l[8]=o=>e.form.class_capacity=o)},null,8,["error","modelValue"])])])]),_:1}),s(_,null,{content:r(()=>[a("div",M,[a("div",N,[s(p,null,{default:r(()=>[t("Active")]),_:1}),s(g,{modelValue:e.form.class_status,"onUpdate:modelValue":l[9]||(l[9]=o=>e.form.class_status=o)},null,8,["modelValue"])]),a("div",j,[s(u,{variant:"outline",onClick:l[10]||(l[10]=o=>e.$inertia.get(e.route("classes")))},{default:r(()=>[t("Cancel")]),_:1}),s(u,{onClick:e.submit},{default:r(()=>[t("Save")]),_:1},8,["onClick"])])])]),_:1})]),_:1})],64)}}});export{Te as default};