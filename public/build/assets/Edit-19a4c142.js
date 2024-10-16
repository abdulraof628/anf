import{y as _,x as o,u as n,Q as r,F as w,be as g,t as p,W as l,z as i,A as L,bH as P,v as m,J as D,K as h,C as f}from"./@vue-2682a433.js";import{B as E}from"./Authenticated-eff18c1a.js";import{H as B,L as G}from"./@inertiajs-6e15fcc1.js";import{h as I}from"./moment-a9aaa855.js";import{_ as C}from"./Card-991f64f8.js";import{_ as N}from"./DialogModal-3c206175.js";import{_ as M,a as T,b as k,c as V,d as R,e as $}from"./TableRow-9c7fb5c9.js";import{_ as S}from"./DeleteConfirmation-41328430.js";import{C as H}from"./lucide-vue-next-4722c36e.js";import"./ApplicationLogo-754713c8.js";import"./radix-vue-1c0958bf.js";import"./@floating-ui-46419ac1.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ea6deae7.js";import"./axios-1779699b.js";import"./pusher-js-747fa3ad.js";import"./@vueform-93d31398.js";import"./cropperjs-1d139b1c.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-ae9c59f1.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-bada8fb2.js";import"./@radix-icons-96330712.js";import"./@vuepic-72648ebd.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-aa94bca8.js";import"./vue-210fd32b.js";import"./lodash.clonedeep-15f95254.js";import"./qs-d67e8c34.js";import"./side-channel-51e4be2c.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-110a5121.js";import"./deepmerge-89e33937.js";import"./nprogress-47dccea4.js";const O={class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4"},z={class:"flex flex-col justify-end"},Y={class:"flex justify-between"},J={class:"flex flex-col justify-end"},Q={class:"flex justify-between"},W={class:"xl:col-span-2 2xl:col-span-2"},q={class:"flex flex-col 2xl:flex-row 2xl:flex-wrap gap-4"},K={class:"flex justify-between items-center"},X={class:"flex items-center justify-center space-x-2"},Z={class:"flex items-center justify-between"},c={class:"flex space-x-2"},x={class:"grid grid-cols-1 gap-4"},ee={class:"grid grid-cols-1 gap-4"},te={components:{Head:B,Link:G,DeleteConfirmation:S},created(){var d=this.selected_roles;Object.keys(this.$page.props.user_roles).forEach(function(t){d.push(parseInt(t))})},data(){return{show:{add:!1,edit:!1,delete:!1,reset_password:!1},confirmation:{delete_child:{is_open:!1,route_name:"",id:""},reset_password:{is_open:!1,route_name:"",id:"",params:{}}},processing:!1,selected_roles:[],state_list:[],form:{email:this.$page.props.user_info?this.$page.props.user_info.user_email:"",username:this.$page.props.user_info?this.$page.props.user_info.user_login:"",full_name:this.$page.props.user_info?this.$page.props.user_info.display_name:"",calling_code:this.$page.props.user_info?this.$page.props.user_info.calling_code:"",contact_number:this.$page.props.user_info?this.$page.props.user_info.user_contact:"",address:this.$page.props.user_info?this.$page.props.user_info.user_address:"",country_id:this.$page.props.user_info?this.$page.props.user_info.user_country_id:"",country_state:this.$page.props.user_info?this.$page.props.user_info.user_state:"",country_code:this.$page.props.user_info?this.$page.props.user_info.country_code:"",children:this.$page.props.children?this.$page.props.children:[]},child_form:{parent_id:"",name:"",gender:"",dob:""},editForm:{edit_child_id:"",edit_name:"",edit_gender:"",edit_dob:""},loading:{country:!1,state:!1}}},watch:{"form.country_id":{handler(){this.form.country_id&&this.setCountryData(this.form.country_id)},immediate:!0}},methods:{submit(){this.$inertia.post(this.route("users.update"),{user_id:this.$page.props.user_info.user_id,selected_roles:this.selected_roles,form:this.form})},resetPassword(d){this.confirmation.reset_password.route_name="users.reset_user_password",this.confirmation.reset_password.params={data:d},this.confirmation.reset_password.is_open=!0},setCountryData(d){this.loading.state=!0,axios.get(route("countries.find",d)).then(t=>{this.setStateList(t.data.country_code),this.form.calling_code=t.data.calling_code,this.form.country_name=t.data.name,this.form.country_code=t.data.country_code}).catch(t=>{this.errored=!0})},setStateList(d){var t=this.state_list;t.splice(0),axios({method:"post",url:"https://countriesnow.space/api/v0.1/countries/states",headers:{"Content-Type":"application/json"},data:{iso2:d}}).then(e=>{e.data.data.states.forEach(function(a){t.push(a.name)}),this.loading.state=!1})},clearState(){this.form.country_state=""},addChild(){this.child_form.parent_id=this.$page.props.user_info.user_id,this.$inertia.post(route("children.store"),this.child_form,{preserveScroll:!0,preserveState:!1})},updateChild(){this.$inertia.post(route("children.update"),this.editForm,{preserveScroll:!0,preserveState:!1,onSuccess:d=>{this.show.edit=!1}})},deleteChild(d){this.confirmation.delete_child.route_name="children.destroy",this.confirmation.delete_child.id=d,this.confirmation.delete_child.is_open=!0},editChild(d){this.processing=!0,axios.get(route("children.edit"),{params:{child_id:d}}).then(t=>{this.editForm.edit_child_id=d,this.editForm.edit_name=t.data.name,this.editForm.edit_gender=t.data.gender_id,this.editForm.edit_dob=t.data.date_of_birth,this.show.edit=!0,this.processing=!1})},hasPermission(d){return this.$page.props.can.hasOwnProperty(d)&&this.$page.props.can[d]},verifyChecked(d){return this.selected_roles.includes(d)}}},Xe=Object.assign(te,{__name:"Edit",setup(d){return(t,e)=>{const a=g("Label"),y=g("Input"),v=g("ComboBox"),j=g("Textarea"),A=g("Checkbox"),u=g("Button"),U=g("Datepicker");return p(),_(w,null,[o(n(B),{title:"Users"}),o(E,null,{header:r(()=>e[25]||(e[25]=[])),default:r(()=>[o(C,null,{title:r(()=>e[26]||(e[26]=[l("User Information")])),content:r(()=>[i("div",O,[i("div",z,[i("div",Y,[o(a,null,{default:r(()=>e[27]||(e[27]=[l("Email")])),_:1})]),o(y,{class:"mt-0.5",type:"email",error:t.$page.props.errors.email,modelValue:t.form.email,"onUpdate:modelValue":e[0]||(e[0]=s=>t.form.email=s),disabled:""},null,8,["error","modelValue"])]),i("div",J,[i("div",Q,[o(a,null,{default:r(()=>e[28]||(e[28]=[l("Username")])),_:1})]),o(y,{class:"mt-0.5",type:"text",error:t.$page.props.errors.username,modelValue:t.form.username,"onUpdate:modelValue":e[1]||(e[1]=s=>t.form.username=s),disabled:""},null,8,["error","modelValue"])]),i("div",null,[o(a,null,{default:r(()=>e[29]||(e[29]=[l("Full Name"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),o(y,{type:"text",error:t.$page.props.errors.full_name,modelValue:t.form.full_name,"onUpdate:modelValue":e[2]||(e[2]=s=>t.form.full_name=s)},null,8,["error","modelValue"])]),i("div",null,[o(a,null,{default:r(()=>e[30]||(e[30]=[l("Country"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),o(v,{items:t.$page.props.countries,"label-property":"name","value-property":"id",error:t.$page.props.errors.country_id,modelValue:t.form.country_id,"onUpdate:modelValue":e[3]||(e[3]=s=>t.form.country_id=s),"select-placeholder":"Select Country","search-placeholder":"Search country...",onSelect:e[4]||(e[4]=s=>t.clearState())},null,8,["items","error","modelValue"]),L(i("input",{type:"hidden","onUpdate:modelValue":e[5]||(e[5]=s=>t.form.country=s)},null,512),[[P,t.form.country]])]),i("div",null,[o(a,null,{default:r(()=>e[31]||(e[31]=[l("State"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),o(v,{items:t.state_list,"label-property":"name","value-property":"id",error:t.$page.props.errors.country_state,modelValue:t.form.country_state,"onUpdate:modelValue":e[6]||(e[6]=s=>t.form.country_state=s),"select-placeholder":"Select State","search-placeholder":"Search state...",loading:t.loading.state},null,8,["items","error","modelValue","loading"])]),i("div",W,[o(a,null,{default:r(()=>e[32]||(e[32]=[l("Address"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),o(j,{type:"text",error:t.$page.props.errors.address,modelValue:t.form.address,"onUpdate:modelValue":e[7]||(e[7]=s=>t.form.address=s)},null,8,["error","modelValue"])]),i("div",null,[o(a,null,{default:r(()=>e[33]||(e[33]=[l("Contact Number"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),o(y,{type:"number",inputGroup:t.form.calling_code,error:t.$page.props.errors.contact_number,modelValue:t.form.contact_number,"onUpdate:modelValue":e[8]||(e[8]=s=>t.form.contact_number=s)},null,8,["inputGroup","error","modelValue"])])])]),_:1}),t.$page.props.can.view_user_roles?(p(),m(C,{key:0},{title:r(()=>e[34]||(e[34]=[l("Roles Information")])),content:r(()=>[i("div",q,[(p(!0),_(w,null,D(t.$page.props.roles,s=>(p(),_("div",{key:s.id},[t.hasPermission(s.permission)?(p(),m(a,{key:0,id:s.id,class:"flex items-center space-x-1 cursor-pointer"},{default:r(()=>[o(A,{class:"mr-1",id:s.id,value:s.id,checked:t.verifyChecked(s.id),modelValue:t.selected_roles,"onUpdate:modelValue":e[9]||(e[9]=F=>t.selected_roles=F)},null,8,["id","value","checked","modelValue"]),l(" "+h(s.display_name),1)]),_:2},1032,["id"])):f("",!0)]))),128))])]),_:1})):f("",!0),t.$page.props.can.create_child||t.$page.props.can.view_child?(p(),m(C,{key:1},{title:r(()=>[i("div",K,[e[36]||(e[36]=l(" Children Information ")),t.$page.props.can.create_child?(p(),m(u,{key:0,onClick:e[10]||(e[10]=s=>t.show.add=!0)},{default:r(()=>[o(n(H),{class:"h-4 w-4"}),e[35]||(e[35]=i("span",{class:"ml-1 hidden sm:block"},"Add Child",-1))]),_:1})):f("",!0)])]),content:r(()=>[t.$page.props.can.view_child?(p(),m(n(M),{key:0,class:"px-4"},{default:r(()=>[o(n(T),{class:"bg-gray-100"},{default:r(()=>[o(n(k),null,{default:r(()=>[o(n(V),{class:"px-4"},{default:r(()=>e[37]||(e[37]=[l("Name")])),_:1}),o(n(V),null,{default:r(()=>e[38]||(e[38]=[l("Gender")])),_:1}),o(n(V),null,{default:r(()=>e[39]||(e[39]=[l("Date of Birth")])),_:1}),o(n(V),{class:"text-center"},{default:r(()=>e[40]||(e[40]=[l("Action")])),_:1})]),_:1})]),_:1}),o(n(R),null,{default:r(()=>[t.form.children.length?f("",!0):(p(),m(n(k),{key:0},{default:r(()=>[o(n($),{class:"text-center",colspan:"10"},{default:r(()=>e[41]||(e[41]=[i("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(p(!0),_(w,null,D(t.form.children,(s,F)=>(p(),m(n(k),null,{default:r(()=>[o(n($),{class:"px-4"},{default:r(()=>[l(h(s.name),1)]),_:2},1024),o(n($),null,{default:r(()=>[l(h(t.$page.props.gender_list.find(b=>b.id==s.gender_id).name),1)]),_:2},1024),o(n($),null,{default:r(()=>[l(h(n(I)(s.date_of_birth).format("DD/MM/Y")),1)]),_:2},1024),o(n($),{class:"text-center"},{default:r(()=>[i("div",X,[t.$page.props.can.edit_child?(p(),m(u,{key:0,variant:"outline",onClick:b=>t.processing?"":t.editChild(s.id)},{default:r(()=>e[42]||(e[42]=[l("Edit")])),_:2},1032,["onClick"])):f("",!0),t.$page.props.can.delete_child?(p(),m(u,{key:1,variant:"destructive",onClick:b=>t.processing?"":t.deleteChild(s.id)},{default:r(()=>e[43]||(e[43]=[l("Delete")])),_:2},1032,["onClick"])):f("",!0)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})):f("",!0)]),_:1})):f("",!0),o(C,null,{content:r(()=>[i("div",Z,[o(u,{variant:"destructive",onClick:e[11]||(e[11]=s=>t.resetPassword(t.$page.props.user_info.user_id))},{default:r(()=>e[44]||(e[44]=[l("Reset Password")])),_:1}),i("div",c,[o(u,{variant:"outline",onClick:e[12]||(e[12]=s=>t.$inertia.get(t.route("users")))},{default:r(()=>e[45]||(e[45]=[l("Cancel")])),_:1}),o(u,{onClick:t.submit},{default:r(()=>e[46]||(e[46]=[l("Save")])),_:1},8,["onClick"])])])]),_:1}),o(N,{open:t.show.add,"onUpdate:open":e[17]||(e[17]=s=>t.show.add=s)},{title:r(()=>e[47]||(e[47]=[l("Add Child")])),content:r(()=>[i("div",x,[i("div",null,[o(a,null,{default:r(()=>e[48]||(e[48]=[l("Full Name"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),o(y,{type:"text",error:!!t.$page.props.errors.name,modelValue:t.child_form.name,"onUpdate:modelValue":e[13]||(e[13]=s=>t.child_form.name=s)},null,8,["error","modelValue"])]),i("div",null,[o(a,null,{default:r(()=>e[49]||(e[49]=[l("Gender"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),o(v,{items:t.$page.props.gender_list,"label-property":"name","value-property":"id",error:!!t.$page.props.errors.gender,modelValue:t.child_form.gender,"onUpdate:modelValue":e[14]||(e[14]=s=>t.child_form.gender=s),"select-placeholder":"Select Gender","search-placeholder":"Search gender..."},null,8,["items","error","modelValue"])]),i("div",null,[o(a,{id:"dob"},{default:r(()=>e[50]||(e[50]=[l("Date of Birth"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),o(U,{mode:"date",format:"dd/MM/Y",teleport:"#dob",teleportCenter:!0,modelValue:t.child_form.dob,"onUpdate:modelValue":e[15]||(e[15]=s=>t.child_form.dob=s)},null,8,["modelValue"])])])]),footer:r(()=>[o(u,{variant:"outline",onClick:e[16]||(e[16]=s=>t.show.add=!1)},{default:r(()=>e[51]||(e[51]=[l("Cancel")])),_:1}),o(u,{onClick:t.addChild},{default:r(()=>e[52]||(e[52]=[l("Add")])),_:1},8,["onClick"])]),_:1},8,["open"]),o(N,{open:t.show.edit,"onUpdate:open":e[22]||(e[22]=s=>t.show.edit=s)},{title:r(()=>e[53]||(e[53]=[l("Edit Child")])),content:r(()=>[i("div",ee,[i("div",null,[o(a,null,{default:r(()=>e[54]||(e[54]=[l("Name"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),o(y,{type:"text",error:!!t.$page.props.errors.edit_name,modelValue:t.editForm.edit_name,"onUpdate:modelValue":e[18]||(e[18]=s=>t.editForm.edit_name=s)},null,8,["error","modelValue"])]),i("div",null,[o(a,null,{default:r(()=>e[55]||(e[55]=[l("Gender"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),o(v,{items:t.$page.props.gender_list,"label-property":"name","value-property":"id",error:!!t.$page.props.errors.edit_gender,modelValue:t.editForm.edit_gender,"onUpdate:modelValue":e[19]||(e[19]=s=>t.editForm.edit_gender=s),"select-placeholder":"Select Gender","search-placeholder":"Search gender..."},null,8,["items","error","modelValue"])]),i("div",null,[o(a,null,{default:r(()=>e[56]||(e[56]=[l("Date of Birth"),i("span",{class:"text-red-500"},"*",-1)])),_:1}),o(U,{mode:"date",modelValue:t.editForm.edit_dob,"onUpdate:modelValue":e[20]||(e[20]=s=>t.editForm.edit_dob=s)},null,8,["modelValue"])])])]),footer:r(()=>[o(u,{variant:"outline",onClick:e[21]||(e[21]=s=>t.show.edit=!1)},{default:r(()=>e[57]||(e[57]=[l("Cancel")])),_:1}),o(u,{onClick:t.updateChild},{default:r(()=>e[58]||(e[58]=[l("Save")])),_:1},8,["onClick"])]),_:1},8,["open"]),o(S,{open:t.confirmation.delete_child.is_open,onClose:e[23]||(e[23]=s=>t.confirmation.delete_child.is_open=!1),routeName:t.confirmation.delete_child.route_name,id:t.confirmation.delete_child.id},{title:r(()=>e[59]||(e[59]=[l("Delete Child")])),description:r(()=>e[60]||(e[60]=[l("Are you sure want to delete this child?")])),_:1},8,["open","routeName","id"]),o(S,{open:t.confirmation.reset_password.is_open,onClose:e[24]||(e[24]=s=>t.confirmation.reset_password.is_open=!1),routeName:t.confirmation.reset_password.route_name,method:"post",params:t.confirmation.reset_password.params},{title:r(()=>e[61]||(e[61]=[l("Reset Password")])),description:r(()=>e[62]||(e[62]=[l("Are you sure want to reset this user's password?")])),_:1},8,["open","routeName","params"])]),_:1})],64)}}});export{Xe as default};
