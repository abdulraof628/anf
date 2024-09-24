import{y as p,x as r,u as b,Q as i,F as C,be as f,t as d,W as n,z as t,L as w,M as c,H as V,A as y}from"./@vue-fa39c8c3.js";import{B as k}from"./Authenticated-2464c72b.js";import{H as x}from"./@inertiajs-c7856c69.js";import{C as S}from"./cropperjs-aef143af.js";import{C as h}from"./app-f5e40355.js";import{_ as v}from"./Card-603ca702.js";import"./ApplicationLogo-bc2e3fb2.js";import"./radix-vue-b52878ef.js";import"./@floating-ui-d22e3cce.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./@radix-icons-a5b56816.js";import"./lucide-vue-next-f94b1320.js";import"./lodash.isequal-32ec3540.js";import"./vue-e0f979ce.js";import"./lodash.clonedeep-2dfa23d9.js";import"./qs-fddd7d85.js";import"./side-channel-a64b5f12.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-6df2283d.js";import"./deepmerge-89e33937.js";import"./nprogress-4f526f01.js";import"./axios-1779699b.js";import"./pusher-js-ddef06ed.js";import"./@vueform-b962800d.js";import"./@vuepic-62f3604d.js";import"./@babel-1b80a44a.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1a2c766e.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-0175b845.js";const P={class:"grid grid-cols-1 gap-0"},B={class:"mb-5 flex items-center"},U={class:"inline-block h-20 w-20 rounded-full border overflow-hidden bg-gray-100"},L=["src"],M={key:1,class:"h-full w-full text-gray-300 border-2 border-gray-300 rounded-full",fill:"currentColor",viewBox:"0 0 24 24"},j={class:"p-3"},I={key:0,class:"text-slate-600"},E={class:"flex flex-col space-y-4 2xl:space-y-0 2xl:flex-row 2xl:space-x-5 mb-5"},R={class:"flex w-full max-w-96 justify-center"},T=["src"],N={class:"flex flex-row justify-center"},z={class:"flex-column text-center"},A={class:"flex-column pl-1 pt-6"},D={class:"flex-row pb-1"},H={class:"flex-row"},F={key:0,class:"flex mb-4"},O={class:"grid grid-cols-1 2xl:grid-cols-4 gap-4"},G={class:""},Y={class:""},Q={class:""},W={class:""},X={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},_=window.URL||window.webkitURL,q=/^image\/\w+$/;let g=null;const J={components:{ComboBox:h},mounted(){const s=this.$refs.input;g=new S(s,{aspectRatio:1,cropBoxResizable:!1,cropBoxMovable:!0,viewMode:1,dragMode:"none",movable:!0,rotatable:!0,preview:".preview",zoomable:!1})},data(){return{data:{type:Object,default:()=>({})},loading:{country:!1,state:!1},is_open:{countries:!1},state_list:[],show_profile_photo:!0,show_image:!1,selected_image:"",user_image:this.$page.props.user_info?"/storage/"+this.$page.props.user_info.user_photo:"",image_file_name:"",form:{profile_photo:{name:"",file:""},full_name:this.$page.props.user_info?this.$page.props.user_info.display_name:"",calling_code:this.$page.props.user_info?this.$page.props.user_info.user_calling_code:"",contact_number:this.$page.props.user_info?this.$page.props.user_info.user_contact:"",address:this.$page.props.user_info?this.$page.props.user_info.user_address:"",country_id:this.$page.props.user_info?this.$page.props.user_info.user_country_id:"",country_name:this.$page.props.user_info?this.$page.props.user_info.user_country:"",country_state:this.$page.props.user_info?this.$page.props.user_info.user_state:"",country_code:this.$page.props.user_info?this.$page.props.user_info.user_country_code:""},security_form:{current_password:"",new_password:"",confirm_new_password:""}}},watch:{selected_image:{handler(s){g.replace(s)},deep:!0},"form.country_id":{handler(){this.form.country_id&&(this.setCountryData(this.form.country_id),this.form.country_id!=this.$page.props.user_info.user_country_id&&this.clearState())},immediate:!0}},methods:{saveProfile(){this.$inertia.post(route("profile.store"),this.form)},savePassword(){this.$inertia.post(route("profile.security.store"),this.security_form,{onSuccess:()=>{this.security_form.confirm_new_password="",this.security_form.current_password="",this.security_form.new_password=""}})},setCountryData(s){this.loading.state=!0,this.state_list=[],axios.get(route("countries.find",s)).then(o=>{this.setStateList(o.data.country_code),this.form.calling_code=o.data.calling_code,this.form.country_name=o.data.name,this.form.country_code=o.data.country_code}).catch(o=>{this.errored=!0})},setStateList(s){var o=this.state_list;o.splice(0),axios({method:"post",url:"https://countriesnow.space/api/v0.1/countries/states",headers:{"Content-Type":"application/json"},data:{iso2:s}}).then(e=>{e.data.data.states.forEach(function(a){o.push(a.name)}),this.loading.state=!1})},clearState(){this.form.country_state=""},read(s,o){return new Promise((e,a)=>{if(!s){e();return}q.test(s.type)?_?e({loaded:!0,name:s.name,type:s.type,url:_.createObjectURL(s)}):a(new Error("Your browser is not supported.")):a(new Error("Please select a valid image file."))})},selectImage({target:s}){const{files:o}=s;o&&o.length>0&&this.read(o[0],s).then(e=>{this.image_file_name=e.name,this.selected_image=e.url,this.show_profile_photo=!1,this.show_image=!0,this.update(e)}).catch(this.alert)},update(s){Object.assign(this.data,s)},reselect_image(){this.show_profile_photo=!0,this.show_image=!1,this.$refs.upload_photo.value=null,this.image_file_name=""},select_cropped_image(){g.getCroppedCanvas().toBlob(s=>{this.user_image=_.createObjectURL(s);var o=this.blobToFile(s,this.data.name);this.form.profile_photo.file=o,this.form.profile_photo.name=this.data.name},"image/jpeg",.1),this.show_profile_photo=!0,this.show_image=!1,this.$refs.upload_photo.value=null,this.image_file_name=""},blobToFile(s,o){return s.lastModifiedDate=new Date,s.name=o,s}}},He=Object.assign(J,{__name:"Create",setup(s){return(o,e)=>{const a=f("Label"),u=f("Button"),m=f("Input"),$=f("Textarea");return d(),p(C,null,[r(b(x),{title:"Profile"}),r(k,null,{header:i(()=>e[10]||(e[10]=[])),default:i(()=>[r(v,null,{title:i(()=>e[11]||(e[11]=[n("Profile Information")])),content:i(()=>[t("div",P,[w(t("div",B,[t("span",U,[o.$page.props.auth.user.user_photo!=""||o.data.url?(d(),p("img",{key:0,class:"h-full w-full",src:o.user_image,alt:""},null,8,L)):(d(),p("svg",M,e[12]||(e[12]=[t("path",{d:"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])))]),e[13]||(e[13]=t("label",{for:"profile_photo",class:"ml-5 bg-white py-2 px-3 border border-gray-300 rounded shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"},[n("Change Photo "),t("span",{class:"text-red-500"},"*")],-1)),t("input",{type:"file",id:"profile_photo",ref:"upload_photo",class:"hidden",onChange:e[0]||(e[0]=(...l)=>o.selectImage&&o.selectImage(...l))},null,544),t("div",j,[o.image_file_name?(d(),p("span",I,V(o.image_file_name),1)):y("",!0)])],512),[[c,o.show_profile_photo]]),w(t("div",E,[t("div",null,[r(a,null,{default:i(()=>e[14]||(e[14]=[n(" Crop Image")])),_:1}),t("div",R,[t("img",{class:"text-center image",ref:"input",src:o.selected_image},null,8,T)])]),t("div",null,[t("div",N,[t("div",z,[r(a,null,{default:i(()=>e[15]||(e[15]=[n(" Image Preview ")])),_:1}),e[16]||(e[16]=t("div",{class:"preview h-28 w-28 mt-3 rounded-full"},null,-1))]),t("div",A,[t("div",D,[r(u,{type:"button",class:"py-1 px-2",onClick:e[1]||(e[1]=l=>o.select_cropped_image()),title:"Select cropped image"},{default:i(()=>e[17]||(e[17]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 13l4 4L19 7"})],-1)])),_:1})]),t("div",H,[r(u,{type:"button",buttonType:"gray",class:"py-1 px-2",onClick:e[2]||(e[2]=l=>o.reselect_image()),title:"Reselect an image"},{default:i(()=>e[18]||(e[18]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])),_:1})])])])])],512),[[c,o.show_image]]),o.$page.props.errors.profile_photo?(d(),p("div",F,e[19]||(e[19]=[t("span",{class:"text-red-500 text-sm"},"Please upload an image",-1)]))):y("",!0)]),t("div",O,[t("div",G,[r(a,null,{default:i(()=>e[20]||(e[20]=[n("Full Name"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),r(m,{type:"text",error:o.$page.props.errors.full_name,modelValue:o.form.full_name,"onUpdate:modelValue":e[3]||(e[3]=l=>o.form.full_name=l)},null,8,["error","modelValue"])]),t("div",Y,[r(a,null,{default:i(()=>e[21]||(e[21]=[n("Country"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),r(h,{items:o.$page.props.countries,"label-property":"name","value-property":"id",modelValue:o.form.country_id,"onUpdate:modelValue":e[4]||(e[4]=l=>o.form.country_id=l),"select-placeholder":"Select Country","search-placeholder":"Search country..."},null,8,["items","modelValue"])]),t("div",Q,[r(a,null,{default:i(()=>e[22]||(e[22]=[n("State"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),r(h,{items:o.state_list,modelValue:o.form.country_state,"onUpdate:modelValue":e[5]||(e[5]=l=>o.form.country_state=l),"select-placeholder":"Select State","search-placeholder":"Search state...",loading:o.loading.state},null,8,["items","modelValue","loading"])]),t("div",W,[r(a,null,{default:i(()=>e[23]||(e[23]=[n("Address"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),r($,{type:"text",error:o.$page.props.errors.address,modelValue:o.form.address,"onUpdate:modelValue":e[6]||(e[6]=l=>o.form.address=l),rows:"1"},null,8,["error","modelValue"])])])]),footer:i(()=>[r(u,{onClick:o.saveProfile,variant:""},{default:i(()=>e[24]||(e[24]=[n("Save Profile")])),_:1},8,["onClick"])]),_:1}),r(v,null,{title:i(()=>e[25]||(e[25]=[n("Security")])),content:i(()=>[t("div",X,[t("div",null,[r(a,null,{default:i(()=>e[26]||(e[26]=[n("Current Password"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),r(m,{type:"password",error:o.$page.props.errors.current_password,modelValue:o.security_form.current_password,"onUpdate:modelValue":e[7]||(e[7]=l=>o.security_form.current_password=l)},null,8,["error","modelValue"])]),t("div",null,[r(a,null,{default:i(()=>e[27]||(e[27]=[n("New password"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),r(m,{type:"password",error:o.$page.props.errors.new_password,modelValue:o.security_form.new_password,"onUpdate:modelValue":e[8]||(e[8]=l=>o.security_form.new_password=l)},null,8,["error","modelValue"])]),t("div",null,[r(a,null,{default:i(()=>e[28]||(e[28]=[n("Confirm New password"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),r(m,{type:"password",error:o.$page.props.errors.confirm_new_password,modelValue:o.security_form.confirm_new_password,"onUpdate:modelValue":e[9]||(e[9]=l=>o.security_form.confirm_new_password=l)},null,8,["error","modelValue"])])])]),footer:i(()=>[r(u,{onClick:o.savePassword,variant:""},{default:i(()=>e[29]||(e[29]=[n("Update Password")])),_:1},8,["onClick"])]),_:1})]),_:1})],64)}}});export{He as default};
