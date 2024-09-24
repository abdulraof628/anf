import{y as _,x as r,u as C,Q as l,F as c,be as p,t as v,W as a,z as s,L as u,M as f,D as V,H as B}from"./@vue-fa39c8c3.js";import{B as j}from"./Authenticated-2464c72b.js";import{L,H as M}from"./@inertiajs-c7856c69.js";import{b as D}from"./@vueform-b962800d.js";import{C as x}from"./cropperjs-aef143af.js";import{_ as w}from"./Card-603ca702.js";import"./ApplicationLogo-bc2e3fb2.js";import"./radix-vue-b52878ef.js";import"./@floating-ui-d22e3cce.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f5e40355.js";import"./axios-1779699b.js";import"./pusher-js-ddef06ed.js";import"./@vuepic-62f3604d.js";import"./@babel-1b80a44a.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1a2c766e.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-0175b845.js";import"./@radix-icons-a5b56816.js";import"./lodash.isequal-32ec3540.js";import"./vue-e0f979ce.js";import"./lodash.clonedeep-2dfa23d9.js";import"./qs-fddd7d85.js";import"./side-channel-a64b5f12.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-6df2283d.js";import"./deepmerge-89e33937.js";import"./nprogress-4f526f01.js";import"./lucide-vue-next-f94b1320.js";const I={class:"grid grid-cols-1 2xl:grid-cols-2 gap-4"},U={class:"2xl:col-span-2"},E={class:"grid grid-cols-1 xl:grid-cols-2 gap-4"},H={class:"space-y-1 text-center"},P={class:"flex text-sm text-gray-600"},R={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},S={ref:"front_image",id:"file",class:"sr-only",type:"file",accept:"image/*"},O={class:"space-y-1 text-center"},T={class:"flex text-sm text-gray-600"},F={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},N={ref:"inside_image",id:"file",class:"sr-only",type:"file",accept:"image/*"},A={class:"flex flex-col space-y-4 2xl:space-y-0 2xl:flex-row 2xl:space-x-5 mb-5"},G={class:"flex w-full max-w-96"},z=["src"],J={class:"flex flex-row justify-center"},W={class:"flex-column"},Y={class:"flex-column pl-1 pt-6"},Q={class:"flex flex-col space-y-1"},X={class:"flex justify-center 2xl:justify-start flex-wrap space-y-4 2xl:space-y-0 2xl:space-x-6"},q={class:"sm:col-span-2 self-center flex flex-wrap gap-4 py-3"},K=["onClick"],Z=["src"],ee={class:"flex items-center justify-between"},te={class:"flex space-x-2 items-center"},se={class:"flex space-x-2"},g=window.URL||window.webkitURL,oe=/^image\/\w+$/;let h=null;const ie={components:{Link:L,Toggle:D,Cropper:x},data(){return{data:{type:Object,default:()=>({})},checking_email:!1,show_front_upload:!0,show_inside_upload:!0,show_image:!1,image:"",email_exist:this.$page.props.email_exist?this.$page.props.email_exist:"",form:{id:this.$page.props.centre_info?this.$page.props.centre_info.ID:"",country:this.$page.props.centre_info.country_id!=0?this.$page.props.centre_info.country_id:"",name:this.$page.props.centre_info?this.$page.props.centre_info.label:"",contact_number:this.$page.props.centre_info?this.$page.props.centre_info.phone:"",email:this.$page.props.centre_info?this.$page.props.centre_info.email:"",address:this.$page.props.centre_info?this.$page.props.centre_info.address:"",active:this.$page.props.centre_info?!!this.$page.props.centre_info.is_active:!1,principal_user_id:this.$page.props.centre_info?this.$page.props.centre_info.principal_user_id:"",image_list:this.$page.props.centre_images?this.$page.props.centre_images:[],images_to_delete:[]},search:{email:this.$page.props.email_exist?this.$page.props.email_exist.user_email:""}}},mounted(){const o=this.$refs.input;o&&(h=new x(o,{aspectRatio:1,cropBoxResizable:!1,cropBoxMovable:!1,viewMode:1,dragMode:"move",movable:!0,rotatable:!0,preview:".preview",minCropBoxWidth:500,minCropBoxHeight:500,modal:!0,background:!1}))},watch:{image:{handler(o){o&&h.replace(o)},deep:!0}},methods:{submit(){this.$inertia.post(route("centres.update"),this.form,{preserveState:!0})},read(o,t){return new Promise((e,n)=>{if(!o){e();return}oe.test(o.type)?g?e({loaded:!0,name:o.name,type:o.type,url:g.createObjectURL(o)}):n(new Error("Your browser is not supported.")):n(new Error("Please select a valid image file."))})},change_front({target:o}){const{files:t}=o;t&&t.length>0&&this.read(t[0],o).then(e=>{this.image=e.url,this.show_front_upload=!1,this.show_inside_upload=!1,this.show_image=!0,this.update(e,"front")}).catch(this.alert)},dragover_front(o){o.preventDefault()},drop_front(o){const{files:t}=o.dataTransfer;o.preventDefault(),t&&t.length>0&&this.read(t[0],o).then(e=>{this.front_image=e.url,this.show_front_upload=!1,this.show_inside_upload=!1,this.update(e)}).catch(this.alert)},change_inside({target:o}){const{files:t}=o;t&&t.length>0&&this.read(t[0],o).then(e=>{this.image=e.url,this.show_front_upload=!1,this.show_inside_upload=!1,this.show_image=!0,this.update(e,"inside")}).catch(this.alert)},dragover_inside(o){o.preventDefault()},drop_inside(o){const{files:t}=o.dataTransfer;o.preventDefault(),t&&t.length>0&&this.read(t[0],o).then(e=>{this.front_image=e.url,this.show_front_upload=!1,this.show_inside_upload=!1,this.update(e)}).catch(this.alert)},alert(o){window.alert(o&&o.message?o.message:o)},update(o,t){Object.assign(this.data,o),Object.assign(this.data,{view_type:t})},reselect_image(){this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.front_image.value=null,this.$refs.inside_image.value=null},select_cropped_image(){const o=this.form.image_list.filter(e=>{if(e.image_type=="front")return!0}),t=this.form.image_list.filter(e=>{if(e.image_type=="inside")return!0});this.data.view_type=="front"?o.length<1?(h.getCroppedCanvas().toBlob(e=>{var n=g.createObjectURL(e),d=this.blobToFile(e,this.data.name);this.form.image_list.unshift({image_path:n,image_file:d,image_type:this.data.view_type})},"image/jpeg",.1),this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.front_image.value=null):(alert("Only 1 front view image is allowed!"),this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.front_image.value=null):this.data.view_type=="inside"&&(t.length<5?(h.getCroppedCanvas().toBlob(e=>{var n=g.createObjectURL(e);this.form.image_list.push({name:this.data.name,image_path:n,image_file:e,image_type:this.data.view_type})},"image/jpeg",.1),this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.inside_image.value=null):(alert("Only 5 inside view image is allowed!"),this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.inside_image.value=null))},delete_cropped_image(o){this.form.image_list[o].id&&this.form.images_to_delete.push({image_id:this.form.image_list[o].id}),this.form.image_list.splice(o,1)},blobToFile(o,t){return o.lastModifiedDate=new Date,o.name=t,o}}},Xe=Object.assign(ie,{__name:"Edit",setup(o){return(t,e)=>{const n=p("Label"),d=p("Input"),b=p("ComboBox"),$=p("Textarea"),m=p("Button"),k=p("Switch");return v(),_(c,null,[r(C(M),{title:"Centres"}),r(j,null,{header:l(()=>e[15]||(e[15]=[])),default:l(()=>[r(w,null,{title:l(()=>e[16]||(e[16]=[a("Centre Information")])),content:l(()=>[s("div",I,[s("div",null,[r(n,null,{default:l(()=>e[17]||(e[17]=[a("Name"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),r(d,{type:"text",error:t.$page.props.errors.name,modelValue:t.form.name,"onUpdate:modelValue":e[0]||(e[0]=i=>t.form.name=i)},null,8,["error","modelValue"])]),s("div",null,[r(n,null,{default:l(()=>e[18]||(e[18]=[a("Country"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),r(b,{items:t.$page.props.countries,"label-property":"name","value-property":"id",error:t.$page.props.errors.country,modelValue:t.form.country,"onUpdate:modelValue":e[1]||(e[1]=i=>t.form.country=i),"select-placeholder":"Select Country","search-placeholder":"Search country..."},null,8,["items","error","modelValue"])]),s("div",null,[r(n,null,{default:l(()=>e[19]||(e[19]=[a("Contact Number"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),r(d,{type:"text",error:t.$page.props.errors.contact_number,modelValue:t.form.contact_number,"onUpdate:modelValue":e[2]||(e[2]=i=>t.form.contact_number=i)},null,8,["error","modelValue"])]),s("div",null,[r(n,null,{default:l(()=>e[20]||(e[20]=[a("Email"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),r(d,{type:"text",error:t.$page.props.errors.email,modelValue:t.form.email,"onUpdate:modelValue":e[3]||(e[3]=i=>t.form.email=i)},null,8,["error","modelValue"])]),s("div",U,[r(n,null,{default:l(()=>e[21]||(e[21]=[a("Address"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),r($,{error:t.$page.props.errors.address,modelValue:t.form.address,"onUpdate:modelValue":e[4]||(e[4]=i=>t.form.address=i)},null,8,["error","modelValue"])])])]),_:1}),r(w,null,{title:l(()=>e[22]||(e[22]=[a("Centre Photos")])),content:l(()=>[s("div",E,[u(s("div",null,[r(n,null,{default:l(()=>e[23]||(e[23]=[a("Centre Front View (1 Image)")])),_:1}),s("div",{class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:e[5]||(e[5]=(...i)=>t.change_front&&t.change_front(...i)),onDragover:e[6]||(e[6]=(...i)=>t.dragover_front&&t.dragover_front(...i)),onDrop:e[7]||(e[7]=(...i)=>t.drop_front&&t.drop_front(...i))},[s("div",H,[e[26]||(e[26]=s("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[s("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),s("div",P,[s("label",R,[e[24]||(e[24]=a("Click here ")),s("input",S,null,512)]),e[25]||(e[25]=s("p",{class:"pl-1"},"or drag and drop an image",-1))]),e[27]||(e[27]=s("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1))])],32)],512),[[f,t.show_front_upload]]),u(s("div",null,[r(n,null,{default:l(()=>e[28]||(e[28]=[a("Centre Inside View (Max: 5 Images)")])),_:1}),s("div",{class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:e[8]||(e[8]=(...i)=>t.change_inside&&t.change_inside(...i)),onDragover:e[9]||(e[9]=(...i)=>t.dragover_inside&&t.dragover_inside(...i)),onDrop:e[10]||(e[10]=(...i)=>t.drop_inside&&t.drop_inside(...i))},[s("div",O,[e[31]||(e[31]=s("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[s("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),s("div",T,[s("label",F,[e[29]||(e[29]=a("Click here ")),s("input",N,null,512)]),e[30]||(e[30]=s("p",{class:"pl-1"},"or drag and drop an image",-1))]),e[32]||(e[32]=s("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1))])],32)],512),[[f,t.show_inside_upload]])]),u(s("div",A,[s("div",null,[r(n,null,{default:l(()=>e[33]||(e[33]=[a("Crop Image")])),_:1}),s("div",G,[s("img",{class:"text-center image",ref:"input",src:t.image},null,8,z)])]),s("div",null,[s("div",J,[s("div",W,[r(n,null,{default:l(()=>e[34]||(e[34]=[a(" Image Preview ")])),_:1}),e[35]||(e[35]=s("div",{class:"preview h-44 w-44"},null,-1))]),s("div",Y,[s("div",Q,[r(m,{class:"py-1 px-2 rounded shadow",onClick:e[11]||(e[11]=i=>t.select_cropped_image()),title:"Select cropped image"},{default:l(()=>e[36]||(e[36]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 13l4 4L19 7"})],-1)])),_:1}),r(m,{class:"py-1 px-2 rounded shadow",onClick:e[12]||(e[12]=i=>t.reselect_image()),title:"Reselect an image"},{default:l(()=>e[37]||(e[37]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])),_:1})])])])])],512),[[f,t.show_image]]),s("div",X,[u(s("div",q,[(v(!0),_(c,null,V(t.form.image_list,(i,y)=>(v(),_("div",{class:"relative h-32 w-32 mr-3 mt-3 text-center shadow-sm",key:y},[s("div",{class:"absolute bg-red-500 p-2 shadow rounded-full text-white z-10 cursor-pointer hover:bg-red-700",style:{top:"-8px",right:"-8px"},onClick:re=>t.delete_cropped_image(y)},e[38]||(e[38]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)]),8,K),s("img",{src:i.image_path,class:"rounded-lg",alt:""},null,8,Z),r(n,null,{default:l(()=>[a(B(i.image_type),1)]),_:2},1024)]))),128))],512),[[f,t.form.image_list.length]])])]),_:1}),r(w,null,{content:l(()=>[s("div",ee,[s("div",te,[r(n,null,{default:l(()=>e[39]||(e[39]=[a("Active")])),_:1}),r(k,{modelValue:t.form.active,"onUpdate:modelValue":e[13]||(e[13]=i=>t.form.active=i)},null,8,["modelValue"])]),s("div",se,[r(m,{variant:"outline",onClick:e[14]||(e[14]=i=>t.$inertia.get(t.route("centres")))},{default:l(()=>e[40]||(e[40]=[a("Cancel")])),_:1}),r(m,{onClick:t.submit},{default:l(()=>e[41]||(e[41]=[a("Save")])),_:1},8,["onClick"])])])]),_:1})]),_:1})],64)}}});export{Xe as default};
