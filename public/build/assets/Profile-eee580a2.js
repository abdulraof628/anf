import{_ as y}from"./Authenticated-a2db8b61.js";import{H as _,L as b}from"./@inertiajs-7f289881.js";import v from"./Navigation-de945802.js";import"./@vueform-cd27a95b.js";import{a as c}from"./axios-1779699b.js";import{C as V}from"./compressorjs-dec42b9c.js";import{y as w,x as r,u as g,Q as a,F as k,be as u,t as C,z as t,W as n,q as h}from"./@vue-d42dd214.js";import"./@heroicons-e6194902.js";import"./app-85118abc.js";import"./laravel-echo-96cacb8d.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./@headlessui-a01ed24c.js";const S={class:"flex justify-center"},$={class:"flex-1 max-w-4xl"},P={class:""},U={class:"grid divide-y divide-neutral-200 max-w-xl md:hidden"},j={class:"group",open:""},B={class:"bg-white text-neutral-600 p-4"},F={class:"grid grid-cols-1 gap-4"},L={class:"hidden md:grid grid-cols-6 gap-2"},N={class:"col-span-2"},T={class:"col-span-4"},D={class:"bg-white p-6 border border-gray-300 shadow rounded-lg"},G={class:"flex items-center justify-start"},H={class:"relative inline-block cursor-pointer"},R=["src"],q={class:"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-full transition-opacity"},A={class:"grid grid-cols-1 gap-4"};function I(i,o){return new File([i],o,{type:i.type})}const z={data(){return{search_query:"",state_list:[],current_step:1,loading:{country:!1,state:!1},form:{profile_photo:{file:"",value:this.$page.props.auth.profile_photo!=""?"/storage/"+this.$page.props.auth.profile_photo:"https://img.icons8.com/office/16/person-male-skin-type-4.png"},full_name:this.$page.props.user_info?this.$page.props.user_info.display_name:"",calling_code:this.$page.props.user_info?this.$page.props.user_info.user_calling_code:"",contact_number:this.$page.props.user_info?this.$page.props.user_info.user_contact:"",address:this.$page.props.user_info?this.$page.props.user_info.user_address:"",country_id:this.$page.props.user_info?this.$page.props.user_info.user_country_id:"",country_name:this.$page.props.user_info?this.$page.props.user_info.name:"",country_state:this.$page.props.user_info?this.$page.props.user_info.user_state:"",country_code:this.$page.props.user_info?this.$page.props.user_info.user_country_code:""},errors:{full_name:!1,country_code:!1,country_state:!1,contact_number:!1,address:!1}}},watch:{"form.country_id":{handler(){this.form.country_id&&this.setCountryData(this.form.country_id)},immediate:!0}},methods:{setCountryData(i){this.loading.state=!0,c.get(route("countries.find",i)).then(o=>{this.setStateList(o.data.country_code),this.form.calling_code=o.data.calling_code,this.form.country_name=o.data.name,this.form.country_code=o.data.country_code}).catch(o=>{this.errored=!0})},setStateList(i){var o=this.state_list;o.splice(0),c({method:"post",url:"https://countriesnow.space/api/v0.1/countries/states",headers:{"Content-Type":"application/json"},data:{iso2:i}}).then(e=>{e.data.data.states.forEach(function(l){o.push(l.name)}),this.loading.state=!1})},clearState(){this.form.country_state=""},saveProfile(){this.errors.full_name=!this.form.full_name,this.errors.country_code=!this.form.country_code,this.errors.country_state=!this.form.country_state,this.errors.contact_number=!this.form.contact_number,this.errors.address=!this.form.address,this.form.full_name&&this.form.country_code&&this.form.country_state&&this.form.contact_number&&this.form.address&&this.$inertia.post(route("profile.store"),this.form)},handleFileChange(i){const o=i.target.files[0],e=this.form.profile_photo;o&&this.compress(o,e)},compress(i,o){new V(i,{quality:.2,maxWidth:400,maxHeight:400,success(e){const l=URL.createObjectURL(e),d=I(e,Date.now()+".jpg");o.value=l,o.file=d}})}}},Te=Object.assign(z,{__name:"Profile",setup(i){return(o,e)=>{const l=u("Label"),d=u("Input"),p=u("ComboBox"),m=u("Textarea"),f=u("Button");return C(),w(k,null,[r(g(_),{title:"Home"}),r(y,null,{default:a(()=>[t("div",S,[t("div",$,[t("div",P,[t("div",U,[t("details",j,[e[17]||(e[17]=t("summary",{class:"flex justify-between items-center font-semibold cursor-pointer list-none bg-indigo-100 px-5 py-3"},[t("span",{class:"text-sm md:text-base"}," Profile"),t("span",{class:"transition rotate-0 group-open:rotate-180"},[t("svg",{fill:"none",height:"24","shape-rendering":"geometricPrecision",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",width:"24"},[t("path",{d:"M6 9l6 6 6-6"})])])],-1)),t("div",B,[t("div",F,[t("div",null,[r(l,{for:"user_name"},{default:a(()=>e[11]||(e[11]=[n("Full Name")])),_:1}),r(d,{type:"text",id:"user_name",error:o.errors.full_name,modelValue:o.form.full_name,"onUpdate:modelValue":e[0]||(e[0]=s=>o.form.full_name=s),autocomplete:"none"},null,8,["error","modelValue"])]),t("div",null,[r(l,null,{default:a(()=>e[12]||(e[12]=[n("Country")])),_:1}),r(p,{items:o.$page.props.countries,"label-property":"name","value-property":"id",modelValue:o.form.country_id,"onUpdate:modelValue":e[1]||(e[1]=s=>o.form.country_id=s),"select-placeholder":o.form.country_name??"Select Country","search-placeholder":"Search state...",loading:o.loading.state,onSelect:o.clearState},null,8,["items","modelValue","select-placeholder","loading","onSelect"])]),t("div",null,[r(l,null,{default:a(()=>e[13]||(e[13]=[n("State")])),_:1}),r(p,{items:o.state_list,"label-property":"name","value-property":"id",modelValue:o.form.country_state,"onUpdate:modelValue":e[2]||(e[2]=s=>o.form.country_state=s),"select-placeholder":o.form.country_state??"Select State","search-placeholder":"Search state...",loading:o.loading.state},null,8,["items","modelValue","select-placeholder","loading"])]),t("div",null,[r(l,{for:"use_phone"},{default:a(()=>e[14]||(e[14]=[n("Phone Number")])),_:1}),r(d,{inputGroup:o.form.calling_code,type:"number",name:"use_phone",id:"use_phone",error:o.errors.contact_number,modelValue:o.form.contact_number,"onUpdate:modelValue":e[3]||(e[3]=s=>o.form.contact_number=s),autocomplete:"none"},null,8,["inputGroup","error","modelValue"])]),t("div",null,[r(l,{for:"user_address"},{default:a(()=>e[15]||(e[15]=[n("Address")])),_:1}),r(m,{id:"user_address",rows:"3",class:h(["text-sm focus:ring-0 border-gray-300 focus:border-gray-300 flex-1 block w-full rounded-md mt-1",o.errors.address?"border-red-300":"border-gray-300"]),modelValue:o.form.address,"onUpdate:modelValue":e[4]||(e[4]=s=>o.form.address=s)},null,8,["class","modelValue"])]),r(f,{onClick:o.saveProfile},{default:a(()=>e[16]||(e[16]=[n("Save")])),_:1},8,["onClick"])])])]),r(g(b),{href:o.route("parent.profile.security"),class:"flex justify-between items-center font-semibold cursor-pointer list-none bg-indigo-100 px-5 py-3"},{default:a(()=>e[18]||(e[18]=[t("span",{class:"text-sm md:text-base"}," Security",-1),t("span",{class:"transition rotate-0 group-open:rotate-180"},[t("svg",{fill:"none",height:"24","shape-rendering":"geometricPrecision",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",width:"24"},[t("path",{d:"M6 9l6 6 6-6"})])],-1)])),_:1},8,["href"])])]),t("div",L,[t("div",N,[r(v)]),t("div",T,[t("div",D,[e[26]||(e[26]=t("p",{class:"tracking-normal antialiased mb-4 block text-xs font-semibold uppercase text-gray-500 font-[Roboto]"},"Profile Photo",-1)),t("div",G,[t("div",H,[t("img",{src:o.form.profile_photo.value,alt:"Avatar",class:"rounded-full w-28 h-28"},null,8,R),t("div",q,[t("input",{type:"file",id:"profilePhotoInput",class:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",accept:"image/*",onChange:e[5]||(e[5]=s=>o.handleFileChange(s))},null,32),e[19]||(e[19]=t("span",{class:"text-white text-xs font-semibold"},"Change Photo",-1))])])]),e[27]||(e[27]=t("hr",{class:"my-5"},null,-1)),e[28]||(e[28]=t("p",{class:"tracking-normal antialiased mb-4 block text-xs font-semibold uppercase text-gray-500 font-[Roboto]"},"Personal Details",-1)),t("div",A,[t("div",null,[r(l,{for:"user_name"},{default:a(()=>e[20]||(e[20]=[n("Full Name")])),_:1}),r(d,{type:"text",id:"user_name",error:o.errors.full_name,modelValue:o.form.full_name,"onUpdate:modelValue":e[6]||(e[6]=s=>o.form.full_name=s),autocomplete:"none"},null,8,["error","modelValue"])]),t("div",null,[r(l,null,{default:a(()=>e[21]||(e[21]=[n("Country")])),_:1}),r(p,{items:o.$page.props.countries,"label-property":"name","value-property":"id",modelValue:o.form.country_id,"onUpdate:modelValue":e[7]||(e[7]=s=>o.form.country_id=s),"select-placeholder":o.form.country_name??"Select Country","search-placeholder":"Search state...",loading:o.loading.state,onSelect:o.clearState},null,8,["items","modelValue","select-placeholder","loading","onSelect"])]),t("div",null,[r(l,null,{default:a(()=>e[22]||(e[22]=[n("State")])),_:1}),r(p,{items:o.state_list,"label-property":"name","value-property":"id",modelValue:o.form.country_state,"onUpdate:modelValue":e[8]||(e[8]=s=>o.form.country_state=s),"select-placeholder":o.form.country_state??"Select State","search-placeholder":"Search state...",loading:o.loading.state},null,8,["items","modelValue","select-placeholder","loading"])]),t("div",null,[r(l,{for:"use_phone"},{default:a(()=>e[23]||(e[23]=[n("Phone Number")])),_:1}),r(d,{inputGroup:o.form.calling_code,type:"number",name:"use_phone",id:"use_phone",error:o.errors.contact_number,modelValue:o.form.contact_number,"onUpdate:modelValue":e[9]||(e[9]=s=>o.form.contact_number=s),autocomplete:"none"},null,8,["inputGroup","error","modelValue"])]),t("div",null,[r(l,{for:"user_address"},{default:a(()=>e[24]||(e[24]=[n("Address")])),_:1}),r(m,{id:"user_address",rows:"3",class:h(["text-sm focus:ring-0 border-gray-300 focus:border-gray-300 flex-1 block w-full rounded-md mt-1",o.errors.address?"border-red-300":"border-gray-300"]),modelValue:o.form.address,"onUpdate:modelValue":e[10]||(e[10]=s=>o.form.address=s)},null,8,["class","modelValue"])]),r(f,{onClick:o.saveProfile},{default:a(()=>e[25]||(e[25]=[n("Save")])),_:1},8,["onClick"])])])])])])])]),_:1})],64)}}});export{Te as default};
