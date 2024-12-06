import{B as V}from"./Authenticated-69dc7077.js";import{H as h,L as b}from"./@inertiajs-7f289881.js";import{_}from"./Card-c810b5f4.js";import{_ as C}from"./DialogModal-29f4e54c.js";import{h as m}from"./moment-a9aaa855.js";import{y as c,x as r,u as S,Q as o,F as w,be as n,t as y,W as t,z as a,K as u,C as D}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-85118abc.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-b6fa7a4c.js";import"./DialogDescription-d422265e.js";import"./lucide-vue-next-53796c49.js";const k={class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4"},U={key:0},B={class:"flex items-center justify-between"},L={class:"flex space-x-2 items-center"},T={class:"flex space-x-2"},H={components:{Head:h,Link:b,Card:_,Dialog:C},data(){return{disable_class_types:!1,disable_class_levels:!1,class_types:this.$page.props.class_types?this.$page.props.class_types:[],class_levels:this.$page.props.class_levels?this.$page.props.class_levels:[],form:{class_id:this.$page.props.class_info.class_id?this.$page.props.class_info.class_id:"",centre_id:this.$page.props.class_info?this.$page.props.class_info.centre_id:"",programme_id:this.$page.props.class_info?this.$page.props.class_info.programme_id:"",programme_level_id:this.$page.props.class_info?this.$page.props.class_info.programme_level_id:"",class_day:this.$page.props.class_info?this.$page.props.class_info.class_day_id:"",start_time:{hours:new Date(new m(this.$page.props.class_info.start_time)).getHours(),minutes:new Date(new m(this.$page.props.class_info.start_time)).getMinutes(),seconds:new Date(new m(this.$page.props.class_info.start_time)).getSeconds()},end_time:{hours:new Date(new m(this.$page.props.class_info.end_time)).getHours(),minutes:new Date(new m(this.$page.props.class_info.end_time)).getMinutes(),seconds:new Date(new m(this.$page.props.class_info.end_time)).getSeconds()},class_capacity:this.$page.props.class_info?this.$page.props.class_info.capacity:"",class_type:this.$page.props.class_info?this.$page.props.class_info.class_type_id:"",class_method:this.$page.props.class_info?this.$page.props.class_info.class_method_id:"",class_status:this.$page.props.class_info?!!this.$page.props.class_info.status:!1}}},watch:{"form.programme_id":{handler(){this.form.programme_id&&(this.disable_class_types=!0,this.disable_class_levels=!0,this.form.class_type="",this.form.programme_level_id="",axios.get(route("classes.get_class_types"),{params:{programme_id:this.form.programme_id}}).then(d=>{this.class_types=d.data,this.disable_class_types=!1}))},deep:!0},"form.class_type":{handler(){this.form.programme_id&&this.form.class_type&&(this.disable_class_levels=!0,this.form.programme_level_id="",axios.get(route("classes.get_class_levels"),{params:{programme_id:this.form.programme_id,class_type:this.form.class_type}}).then(d=>{this.class_levels=d.data,this.disable_class_levels=!1}))},deep:!0}},methods:{submit(){this.$inertia.post(route("classes.update"),this.form,{preserveState:!0})}}},Be=Object.assign(H,{__name:"Edit",setup(d){return(s,e)=>{const p=n("Label"),i=n("ComboBox"),f=n("Datepicker"),v=n("Input"),$=n("Switch"),g=n("Button");return y(),c(w,null,[r(S(h),{title:"Classes"}),r(V,null,{header:o(()=>e[11]||(e[11]=[])),default:o(()=>[r(_,null,{title:o(()=>e[12]||(e[12]=[t("Class Information")])),content:o(()=>[a("div",k,[a("div",null,[r(p,null,{default:o(()=>e[13]||(e[13]=[t("Centre"),a("span",{class:"text-red-500"},"*",-1)])),_:1}),r(i,{items:s.$page.props.allowed_centres,"label-property":"label","value-property":"ID",error:s.$page.props.errors.centre_id,modelValue:s.form.centre_id,"onUpdate:modelValue":e[0]||(e[0]=l=>s.form.centre_id=l),"select-placeholder":"Select Centre","search-placeholder":"Search centre..."},null,8,["items","error","modelValue"])]),a("div",null,[r(p,null,{default:o(()=>e[14]||(e[14]=[t("Programme"),a("span",{class:"text-red-500"},"*",-1)])),_:1}),r(i,{items:s.$page.props.programme_list,"label-property":"name","value-property":"id",error:!!s.$page.props.errors.programme_id,modelValue:s.form.programme_id,"onUpdate:modelValue":e[1]||(e[1]=l=>s.form.programme_id=l),"select-placeholder":"Select Programme","search-placeholder":"Search programme..."},{label:o(({item:l})=>[t(u(l.name)+" ("+u(l.country_name)+") ",1)]),"label-content":o(({selectedItem:l,selectedItems:N,multiple:E})=>[l?(y(),c("span",U,u(l.name)+" ("+u(l.country_name)+")",1)):D("",!0)]),_:1},8,["items","error","modelValue"])]),a("div",null,[r(p,null,{default:o(()=>e[15]||(e[15]=[t("Class Type"),a("span",{class:"text-red-500"},"*",-1)])),_:1}),r(i,{items:s.class_types,"label-property":"name","value-property":"id",error:!!s.$page.props.errors.class_type,modelValue:s.form.class_type,"onUpdate:modelValue":e[2]||(e[2]=l=>s.form.class_type=l),"select-placeholder":"Select Class Type","search-placeholder":"Search class type...",disabled:s.disable_class_types},null,8,["items","error","modelValue","disabled"])]),a("div",null,[r(p,null,{default:o(()=>e[16]||(e[16]=[t("Class Level"),a("span",{class:"text-red-500"},"*",-1)])),_:1}),r(i,{items:s.class_levels,"label-property":"level","value-property":"id",error:!!s.$page.props.errors.programme_level_id,modelValue:s.form.programme_level_id,"onUpdate:modelValue":e[3]||(e[3]=l=>s.form.programme_level_id=l),"select-placeholder":"Select Class Level","search-placeholder":"Search class level...",disabled:s.disable_class_levels},null,8,["items","error","modelValue","disabled"])]),a("div",null,[r(p,null,{default:o(()=>e[17]||(e[17]=[t("Class Day"),a("span",{class:"text-red-500"},"*",-1)])),_:1}),r(i,{items:s.$page.props.day_list,"label-property":"name","value-property":"id",error:!!s.$page.props.errors.class_day,modelValue:s.form.class_day,"onUpdate:modelValue":e[4]||(e[4]=l=>s.form.class_day=l),"select-placeholder":"Select Class Level","search-placeholder":"Search class level..."},null,8,["items","error","modelValue"])]),a("div",null,[r(p,null,{default:o(()=>e[18]||(e[18]=[t("Class Method"),a("span",{class:"text-red-500"},"*",-1)])),_:1}),r(i,{items:s.$page.props.method_list,"label-property":"name","value-property":"id",error:!!s.$page.props.errors.class_method,modelValue:s.form.class_method,"onUpdate:modelValue":e[5]||(e[5]=l=>s.form.class_method=l),"select-placeholder":"Select Class Level","search-placeholder":"Search class level..."},null,8,["items","error","modelValue"])]),a("div",null,[r(p,null,{default:o(()=>e[19]||(e[19]=[t("Start Time"),a("span",{class:"text-red-500"},"*",-1)])),_:1}),r(f,{mode:"time",format:"hh:mm a",modelValue:s.form.start_time,"onUpdate:modelValue":e[6]||(e[6]=l=>s.form.start_time=l)},null,8,["modelValue"])]),a("div",null,[r(p,null,{default:o(()=>e[20]||(e[20]=[t("End Time"),a("span",{class:"text-red-500"},"*",-1)])),_:1}),r(f,{mode:"time",format:"hh:mm a",modelValue:s.form.end_time,"onUpdate:modelValue":e[7]||(e[7]=l=>s.form.end_time=l)},null,8,["modelValue"])]),a("div",null,[r(p,null,{default:o(()=>e[21]||(e[21]=[t("Class Capacity"),a("span",{class:"text-red-500"},"*",-1)])),_:1}),r(v,{type:"number",error:!!s.$page.props.errors.class_capacity,modelValue:s.form.class_capacity,"onUpdate:modelValue":e[8]||(e[8]=l=>s.form.class_capacity=l)},null,8,["error","modelValue"])])])]),_:1}),r(_,null,{content:o(()=>[a("div",B,[a("div",L,[r(p,null,{default:o(()=>e[22]||(e[22]=[t("Active")])),_:1}),r($,{modelValue:s.form.class_status,"onUpdate:modelValue":e[9]||(e[9]=l=>s.form.class_status=l)},null,8,["modelValue"])]),a("div",T,[r(g,{variant:"outline",onClick:e[10]||(e[10]=l=>s.$inertia.get(s.route("classes")))},{default:o(()=>e[23]||(e[23]=[t("Cancel")])),_:1}),r(g,{onClick:s.submit},{default:o(()=>e[24]||(e[24]=[t("Save")])),_:1},8,["onClick"])])])]),_:1})]),_:1})],64)}}});export{Be as default};
