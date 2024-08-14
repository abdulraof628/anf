import{x as y,v as o,u as d,P as t,F as w,a5 as _,q as p,V as i,y as l,K as P,bv as A,t as m,C as F,G as $,z as f}from"./@vue-64c42e7d.js";import{B as G}from"./Authenticated-6651b23d.js";import{H as N,L}from"./@inertiajs-41d03628.js";import{h as E}from"./moment-3968d9f3.js";import{_ as v}from"./Card-dc9fb2d2.js";import{_ as D}from"./DialogModal.vue_vue_type_script_setup_true_lang-00cfcd0f.js";import{_ as I,d as T,e as b,c as C,a as R,b as h}from"./TableRow-140abd1a.js";import{_ as k}from"./DeleteConfirmation-b95e609b.js";import{C as M}from"./lucide-vue-next-48142e2c.js";import"./ApplicationLogo-64527dd0.js";import"./radix-vue-2488f6ae.js";import"./@floating-ui-7a9770d8.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-f96983da.js";import"./app-98c3eb01.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";const O={class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4"},z={class:"flex flex-col justify-end"},H={class:"flex justify-between"},q={class:"flex flex-col justify-end"},Y={class:"flex justify-between"},J=l("span",{class:"text-red-500"},"*",-1),K=l("span",{class:"text-red-500"},"*",-1),Q=l("span",{class:"text-red-500"},"*",-1),W={class:"xl:col-span-2 2xl:col-span-2"},X=l("span",{class:"text-red-500"},"*",-1),Z=l("span",{class:"text-red-500"},"*",-1),x={class:"flex flex-col 2xl:flex-row 2xl:flex-wrap gap-4"},ee={class:"flex justify-between items-center"},te=l("span",{class:"ml-1 hidden sm:block"},"Add Child",-1),oe=l("div",{class:"p-3"}," No Record Found ",-1),re={class:"flex items-center justify-center space-x-2"},se={class:"flex items-center justify-between"},ie={class:"flex space-x-2"},le={class:"grid grid-cols-1 gap-4"},ae=l("span",{class:"text-red-500"},"*",-1),de=l("span",{class:"text-red-500"},"*",-1),ne=l("span",{class:"text-red-500"},"*",-1),pe={class:"grid grid-cols-1 gap-4"},ue=l("span",{class:"text-red-500"},"*",-1),me=l("span",{class:"text-red-500"},"*",-1),fe=l("span",{class:"text-red-500"},"*",-1),_e={components:{Head:N,Link:L,DeleteConfirmation:k},created(){var a=this.selected_roles;Object.keys(this.$page.props.user_roles).forEach(function(e){a.push(parseInt(e))})},data(){return{show:{add:!1,edit:!1,delete:!1,reset_password:!1},confirmation:{delete_child:{is_open:!1,route_name:"",id:""},reset_password:{is_open:!1,route_name:"",id:""}},processing:!1,selected_roles:[],state_list:[],form:{email:this.$page.props.user_info?this.$page.props.user_info.user_email:"",username:this.$page.props.user_info?this.$page.props.user_info.user_login:"",full_name:this.$page.props.user_info?this.$page.props.user_info.display_name:"",calling_code:this.$page.props.user_info?this.$page.props.user_info.calling_code:"",contact_number:this.$page.props.user_info?this.$page.props.user_info.user_contact:"",address:this.$page.props.user_info?this.$page.props.user_info.user_address:"",country_id:this.$page.props.user_info?this.$page.props.user_info.user_country_id:"",country_state:this.$page.props.user_info?this.$page.props.user_info.user_state:"",country_code:this.$page.props.user_info?this.$page.props.user_info.country_code:"",children:this.$page.props.children?this.$page.props.children:[]},child_form:{parent_id:"",name:"",gender:"",dob:""},editForm:{edit_child_id:"",edit_name:"",edit_gender:"",edit_dob:""},loading:{country:!1,state:!1}}},watch:{"form.country_id":{handler(){this.form.country_id&&this.setCountryData(this.form.country_id)},immediate:!0}},methods:{submit(){this.$inertia.post(this.route("users.update"),{user_id:this.$page.props.user_info.user_id,selected_roles:this.selected_roles,form:this.form})},resetPassword(a){this.confirmation.reset_password.route_name="users.reset_user_password",this.confirmation.reset_password.id=a,this.confirmation.reset_password.is_open=!0},setCountryData(a){this.loading.state=!0,axios.get(route("countries.find",a)).then(e=>{this.setStateList(e.data.country_code),this.form.calling_code=e.data.calling_code,this.form.country_name=e.data.name,this.form.country_code=e.data.country_code}).catch(e=>{this.errored=!0})},setStateList(a){var e=this.state_list;e.splice(0),axios({method:"post",url:"https://countriesnow.space/api/v0.1/countries/states",headers:{"Content-Type":"application/json"},data:{iso2:a}}).then(s=>{s.data.data.states.forEach(function(n){e.push(n.name)}),this.loading.state=!1})},clearState(){this.form.country_state=""},addChild(){this.child_form.parent_id=this.$page.props.user_info.user_id,this.$inertia.post(route("children.store"),this.child_form,{preserveScroll:!0,preserveState:!1})},updateChild(){this.$inertia.post(route("children.update"),this.editForm,{preserveScroll:!0,preserveState:!1,onSuccess:a=>{this.show.edit=!1}})},deleteChild(a){this.confirmation.delete_child.route_name="children.destroy",this.confirmation.delete_child.id=a,this.confirmation.delete_child.is_open=!0},editChild(a){this.processing=!0,axios.get(route("children.edit"),{params:{child_id:a}}).then(e=>{this.editForm.edit_child_id=a,this.editForm.edit_name=e.data.name,this.editForm.edit_gender=e.data.gender_id,this.editForm.edit_dob=e.data.date_of_birth,this.show.edit=!0,this.processing=!1})},hasPermission(a){return this.$page.props.can.hasOwnProperty(a)&&this.$page.props.can[a]},verifyChecked(a){return this.selected_roles.includes(a)}}},mt=Object.assign(_e,{__name:"Edit",setup(a){return(e,s)=>{const n=_("Label"),c=_("Input"),g=_("ComboBox"),B=_("Textarea"),j=_("Checkbox"),u=_("Button"),S=_("Datepicker");return p(),y(w,null,[o(d(N),{title:"Users"}),o(G,null,{header:t(()=>[]),default:t(()=>[o(v,null,{title:t(()=>[i("User Information")]),content:t(()=>[l("div",O,[l("div",z,[l("div",H,[o(n,null,{default:t(()=>[i("Email")]),_:1})]),o(c,{class:"mt-0.5",type:"email",error:e.$page.props.errors.email,modelValue:e.form.email,"onUpdate:modelValue":s[0]||(s[0]=r=>e.form.email=r),disabled:""},null,8,["error","modelValue"])]),l("div",q,[l("div",Y,[o(n,null,{default:t(()=>[i("Username")]),_:1})]),o(c,{class:"mt-0.5",type:"text",error:e.$page.props.errors.username,modelValue:e.form.username,"onUpdate:modelValue":s[1]||(s[1]=r=>e.form.username=r),disabled:""},null,8,["error","modelValue"])]),l("div",null,[o(n,null,{default:t(()=>[i("Full Name"),J]),_:1}),o(c,{type:"text",error:e.$page.props.errors.full_name,modelValue:e.form.full_name,"onUpdate:modelValue":s[2]||(s[2]=r=>e.form.full_name=r)},null,8,["error","modelValue"])]),l("div",null,[o(n,null,{default:t(()=>[i("Country"),K]),_:1}),o(g,{items:e.$page.props.countries,"label-property":"name","value-property":"id",error:e.$page.props.errors.country_id,modelValue:e.form.country_id,"onUpdate:modelValue":s[3]||(s[3]=r=>e.form.country_id=r),"select-placeholder":"Select Country","search-placeholder":"Search country...",onSelect:s[4]||(s[4]=r=>e.clearState())},null,8,["items","error","modelValue"]),P(l("input",{type:"hidden","onUpdate:modelValue":s[5]||(s[5]=r=>e.form.country=r)},null,512),[[A,e.form.country]])]),l("div",null,[o(n,null,{default:t(()=>[i("State"),Q]),_:1}),o(g,{items:e.state_list,"label-property":"name","value-property":"id",error:e.$page.props.errors.country_state,modelValue:e.form.country_state,"onUpdate:modelValue":s[6]||(s[6]=r=>e.form.country_state=r),"select-placeholder":"Select State","search-placeholder":"Search state...",loading:e.loading.state},null,8,["items","error","modelValue","loading"])]),l("div",W,[o(n,null,{default:t(()=>[i("Address"),X]),_:1}),o(B,{type:"text",error:e.$page.props.errors.address,modelValue:e.form.address,"onUpdate:modelValue":s[7]||(s[7]=r=>e.form.address=r)},null,8,["error","modelValue"])]),l("div",null,[o(n,null,{default:t(()=>[i("Contact Number"),Z]),_:1}),o(c,{type:"number",inputGroup:e.form.calling_code,error:e.$page.props.errors.contact_number,modelValue:e.form.contact_number,"onUpdate:modelValue":s[8]||(s[8]=r=>e.form.contact_number=r)},null,8,["inputGroup","error","modelValue"])])])]),_:1}),e.$page.props.can.view_user_roles?(p(),m(v,{key:0},{title:t(()=>[i("Roles Information")]),content:t(()=>[l("div",x,[(p(!0),y(w,null,F(e.$page.props.roles,r=>(p(),y("div",{key:r.id},[e.hasPermission(r.permission)?(p(),m(n,{key:0,id:r.id,class:"flex items-center space-x-1 cursor-pointer"},{default:t(()=>[o(j,{class:"mr-1",id:r.id,value:r.id,checked:e.verifyChecked(r.id),modelValue:e.selected_roles,"onUpdate:modelValue":s[9]||(s[9]=U=>e.selected_roles=U)},null,8,["id","value","checked","modelValue"]),i(" "+$(r.display_name),1)]),_:2},1032,["id"])):f("",!0)]))),128))])]),_:1})):f("",!0),e.$page.props.can.create_child||e.$page.props.can.view_child?(p(),m(v,{key:1},{title:t(()=>[l("div",ee,[i(" Children Information "),e.$page.props.can.create_child?(p(),m(u,{key:0,onClick:s[10]||(s[10]=r=>e.show.add=!0)},{default:t(()=>[o(d(M),{class:"h-4 w-4"}),te]),_:1})):f("",!0)])]),content:t(()=>[e.$page.props.can.view_child?(p(),m(d(I),{key:0,class:"px-4"},{default:t(()=>[o(d(T),{class:"bg-gray-100"},{default:t(()=>[o(d(b),null,{default:t(()=>[o(d(C),{class:"px-4"},{default:t(()=>[i("Name")]),_:1}),o(d(C),null,{default:t(()=>[i("Gender")]),_:1}),o(d(C),null,{default:t(()=>[i("Date of Birth")]),_:1}),o(d(C),{class:"text-center"},{default:t(()=>[i("Action")]),_:1})]),_:1})]),_:1}),o(d(R),null,{default:t(()=>[e.form.children.length?f("",!0):(p(),m(d(b),{key:0},{default:t(()=>[o(d(h),{class:"text-center",colspan:"10"},{default:t(()=>[oe]),_:1})]),_:1})),(p(!0),y(w,null,F(e.form.children,(r,U)=>(p(),m(d(b),null,{default:t(()=>[o(d(h),{class:"px-4"},{default:t(()=>[i($(r.name),1)]),_:2},1024),o(d(h),null,{default:t(()=>[i($(e.$page.props.gender_list.find(V=>V.id==r.gender_id).name),1)]),_:2},1024),o(d(h),null,{default:t(()=>[i($(d(E)(r.date_of_birth).format("DD/MM/Y")),1)]),_:2},1024),o(d(h),{class:"text-center"},{default:t(()=>[l("div",re,[e.$page.props.can.edit_child?(p(),m(u,{key:0,variant:"outline",onClick:V=>e.processing?"":e.editChild(r.id)},{default:t(()=>[i("Edit")]),_:2},1032,["onClick"])):f("",!0),e.$page.props.can.delete_child?(p(),m(u,{key:1,variant:"destructive",onClick:V=>e.processing?"":e.deleteChild(r.id)},{default:t(()=>[i("Delete")]),_:2},1032,["onClick"])):f("",!0)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})):f("",!0)]),_:1})):f("",!0),o(v,null,{content:t(()=>[l("div",se,[o(u,{variant:"destructive",onClick:s[11]||(s[11]=r=>e.resetPassword(e.$page.props.user_info.user_id))},{default:t(()=>[i("Reset Password")]),_:1}),l("div",ie,[o(u,{variant:"outline",onClick:s[12]||(s[12]=r=>e.$inertia.get(e.route("users")))},{default:t(()=>[i("Cancel")]),_:1}),o(u,{onClick:e.submit},{default:t(()=>[i("Save")]),_:1},8,["onClick"])])])]),_:1}),o(D,{open:e.show.add,"onUpdate:open":s[17]||(s[17]=r=>e.show.add=r)},{title:t(()=>[i("Add Child")]),content:t(()=>[l("div",le,[l("div",null,[o(n,null,{default:t(()=>[i("Full Name"),ae]),_:1}),o(c,{type:"text",error:!!e.$page.props.errors.name,modelValue:e.child_form.name,"onUpdate:modelValue":s[13]||(s[13]=r=>e.child_form.name=r)},null,8,["error","modelValue"])]),l("div",null,[o(n,null,{default:t(()=>[i("Gender"),de]),_:1}),o(g,{items:e.$page.props.gender_list,"label-property":"name","value-property":"id",error:!!e.$page.props.errors.gender,modelValue:e.child_form.gender,"onUpdate:modelValue":s[14]||(s[14]=r=>e.child_form.gender=r),"select-placeholder":"Select Gender","search-placeholder":"Search gender..."},null,8,["items","error","modelValue"])]),l("div",null,[o(n,null,{default:t(()=>[i("Date of Birth"),ne]),_:1}),o(S,{mode:"date",modelValue:e.child_form.dob,"onUpdate:modelValue":s[15]||(s[15]=r=>e.child_form.dob=r)},null,8,["modelValue"])])])]),footer:t(()=>[o(u,{variant:"outline",onClick:s[16]||(s[16]=r=>e.show.add=!1)},{default:t(()=>[i("Cancel")]),_:1}),o(u,{onClick:e.addChild},{default:t(()=>[i("Add")]),_:1},8,["onClick"])]),_:1},8,["open"]),o(D,{open:e.show.edit,"onUpdate:open":s[22]||(s[22]=r=>e.show.edit=r)},{title:t(()=>[i("Edit Child")]),content:t(()=>[l("div",pe,[l("div",null,[o(n,null,{default:t(()=>[i("Name"),ue]),_:1}),o(c,{type:"text",error:!!e.$page.props.errors.edit_name,modelValue:e.editForm.edit_name,"onUpdate:modelValue":s[18]||(s[18]=r=>e.editForm.edit_name=r)},null,8,["error","modelValue"])]),l("div",null,[o(n,null,{default:t(()=>[i("Gender"),me]),_:1}),o(g,{items:e.$page.props.gender_list,"label-property":"name","value-property":"id",error:!!e.$page.props.errors.edit_gender,modelValue:e.editForm.edit_gender,"onUpdate:modelValue":s[19]||(s[19]=r=>e.editForm.edit_gender=r),"select-placeholder":"Select Gender","search-placeholder":"Search gender..."},null,8,["items","error","modelValue"])]),l("div",null,[o(n,null,{default:t(()=>[i("Date of Birth"),fe]),_:1}),o(S,{mode:"date",modelValue:e.editForm.edit_dob,"onUpdate:modelValue":s[20]||(s[20]=r=>e.editForm.edit_dob=r)},null,8,["modelValue"])])])]),footer:t(()=>[o(u,{variant:"outline",onClick:s[21]||(s[21]=r=>e.show.edit=!1)},{default:t(()=>[i("Cancel")]),_:1}),o(u,{onClick:e.updateChild},{default:t(()=>[i("Save")]),_:1},8,["onClick"])]),_:1},8,["open"]),o(k,{open:e.confirmation.delete_child.is_open,onClose:s[23]||(s[23]=r=>e.confirmation.delete_child.is_open=!1),routeName:e.confirmation.delete_child.route_name,id:e.confirmation.delete_child.id},{title:t(()=>[i("Delete Child")]),description:t(()=>[i("Are you sure want to delete this child?")]),_:1},8,["open","routeName","id"]),o(k,{open:e.confirmation.reset_password.is_open,onClose:s[24]||(s[24]=r=>e.confirmation.reset_password.is_open=!1),routeName:e.confirmation.reset_password.route_name,id:e.confirmation.reset_password.id},{title:t(()=>[i("Reset Password")]),description:t(()=>[i("Are you sure want to reset this user's password?")]),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{mt as default};