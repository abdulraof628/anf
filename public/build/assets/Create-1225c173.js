import{y as v,x as i,u as V,Q as l,F as x,be as d,t as w,W as a,z as o,A as u,I as f,J as $,K as B}from"./@vue-66b8c761.js";import{B as j}from"./Authenticated-11e054d5.js";import{L,H as M}from"./@inertiajs-4f2e6820.js";import{C as b}from"./cropperjs-c64556db.js";import{_}from"./Card-a2265374.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-98eea8e8.js";import"./axios-1779699b.js";import"./pusher-js-cb9cdec3.js";import"./@vueform-4cba997d.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";import"./lucide-vue-next-bc441494.js";const I={class:"grid grid-cols-1 2xl:grid-cols-2 gap-4"},D={class:"2xl:col-span-2"},U={class:"grid grid-cols-1 xl:grid-cols-2 gap-4"},H={class:"space-y-1 text-center"},P={class:"flex text-sm text-gray-600"},R={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},S={ref:"front_image",id:"file",class:"sr-only",type:"file",accept:"image/*"},E={class:"space-y-1 text-center"},O={class:"flex text-sm text-gray-600"},T={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},A={ref:"inside_image",id:"file",class:"sr-only",type:"file",accept:"image/*"},F={class:"flex flex-col space-y-4 2xl:space-y-0 2xl:flex-row 2xl:space-x-5 mb-5"},N={class:"flex w-full max-w-96"},G=["src"],z={class:"flex flex-row justify-center"},J={class:"flex-column"},W={class:"flex-column pl-1 pt-6"},Y={class:"flex flex-col space-y-1"},K={class:"flex justify-center 2xl:justify-start flex-wrap space-y-4 2xl:space-y-0 2xl:space-x-6"},Q={class:"sm:col-span-2 self-center flex flex-wrap gap-4 py-3"},X=["onClick"],q=["src"],Z={class:"flex items-center justify-between"},ee={class:"flex space-x-2 items-center"},te={class:"flex space-x-2"},g=window.URL||window.webkitURL,oe=/^image\/\w+$/;let h=null;const se={components:{Link:L,Cropper:b},data(){return{data:{type:Object,default:()=>({})},checking_email:!1,show_front_upload:!0,show_inside_upload:!0,show_image:!1,image:"",email_exist:"",form:{name:"",country:"",contact_number:"",email:"",address:"",active:!0,principal_user_id:"",image_list:[]},search:{email:""}}},mounted(){const s=this.$refs.input;s&&(h=new b(s,{aspectRatio:1,cropBoxResizable:!1,cropBoxMovable:!1,viewMode:1,dragMode:"move",movable:!0,rotatable:!0,preview:".preview",minCropBoxWidth:500,minCropBoxHeight:500,modal:!0,background:!1}))},watch:{image:{handler(s){s&&h.replace(s)},deep:!0}},methods:{submit(){this.$inertia.post(route("centres.store"),this.form,{preserveState:!0})},read(s,t){return new Promise((e,n)=>{if(!s){e();return}oe.test(s.type)?g?e({loaded:!0,name:s.name,type:s.type,url:g.createObjectURL(s)}):n(new Error("Your browser is not supported.")):n(new Error("Please select a valid image file."))})},change_front({target:s}){const{files:t}=s;t&&t.length>0&&this.read(t[0],s).then(e=>{this.image=e.url,this.show_front_upload=!1,this.show_inside_upload=!1,this.show_image=!0,this.update(e,"front")}).catch(this.alert)},dragover_front(s){s.preventDefault()},drop_front(s){const{files:t}=s.dataTransfer;s.preventDefault(),t&&t.length>0&&this.read(t[0],s).then(e=>{this.front_image=e.url,this.show_front_upload=!1,this.show_inside_upload=!1,this.update(e)}).catch(this.alert)},change_inside({target:s}){const{files:t}=s;t&&t.length>0&&this.read(t[0],s).then(e=>{this.image=e.url,this.show_front_upload=!1,this.show_inside_upload=!1,this.show_image=!0,this.update(e,"inside")}).catch(this.alert)},dragover_inside(s){s.preventDefault()},drop_inside(s){const{files:t}=s.dataTransfer;s.preventDefault(),t&&t.length>0&&this.read(t[0],s).then(e=>{this.front_image=e.url,this.show_front_upload=!1,this.show_inside_upload=!1,this.update(e)}).catch(this.alert)},alert(s){window.alert(s&&s.message?s.message:s)},update(s,t){Object.assign(this.data,s),Object.assign(this.data,{view_type:t})},reselect_image(){this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.front_image.value=null,this.$refs.inside_image.value=null},select_cropped_image(){const s=this.form.image_list.filter(e=>{if(e.type=="front")return!0}),t=this.form.image_list.filter(e=>{if(e.type=="inside")return!0});this.data.view_type=="front"?s.length<1?(h.getCroppedCanvas().toBlob(e=>{var n=g.createObjectURL(e),p=this.blobToFile(e,this.data.name);this.form.image_list.unshift({image_path:n,image_file:p,image_type:this.data.view_type})},"image/jpeg",.1),this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.front_image.value=null):(alert("Only 1 front view image is allowed!"),this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.front_image.value=null):this.data.view_type=="inside"&&(t.length<5?(h.getCroppedCanvas().toBlob(e=>{var n=g.createObjectURL(e);this.form.image_list.push({name:this.data.name,image_path:n,image_file:e,image_type:this.data.view_type})},"image/jpeg",.1),this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.inside_image.value=null):(alert("Only 5 inside view image is allowed!"),this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.inside_image.value=null))},delete_cropped_image(s){this.form.image_list.splice(s,1)},blobToFile(s,t){return s.lastModifiedDate=new Date,s.name=t,s}}},Ke=Object.assign(se,{__name:"Create",setup(s){return(t,e)=>{const n=d("Label"),p=d("Input"),c=d("ComboBox"),C=d("Textarea"),m=d("Button"),k=d("Switch");return w(),v(x,null,[i(V(M),{title:"Centres"}),i(j,null,{header:l(()=>e[15]||(e[15]=[])),default:l(()=>[i(_,null,{title:l(()=>e[16]||(e[16]=[a("Centre Information")])),content:l(()=>[o("div",I,[o("div",null,[i(n,null,{default:l(()=>e[17]||(e[17]=[a("Name"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),i(p,{type:"text",error:t.$page.props.errors.name,modelValue:t.form.name,"onUpdate:modelValue":e[0]||(e[0]=r=>t.form.name=r)},null,8,["error","modelValue"])]),o("div",null,[i(n,null,{default:l(()=>e[18]||(e[18]=[a("Country"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),i(c,{items:t.$page.props.countries,"label-property":"name","value-property":"id",error:t.$page.props.errors.country,modelValue:t.form.country,"onUpdate:modelValue":e[1]||(e[1]=r=>t.form.country=r),"select-placeholder":"Select Country","search-placeholder":"Search country..."},null,8,["items","error","modelValue"])]),o("div",null,[i(n,null,{default:l(()=>e[19]||(e[19]=[a("Contact Number"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),i(p,{type:"text",error:t.$page.props.errors.contact_number,modelValue:t.form.contact_number,"onUpdate:modelValue":e[2]||(e[2]=r=>t.form.contact_number=r)},null,8,["error","modelValue"])]),o("div",null,[i(n,null,{default:l(()=>e[20]||(e[20]=[a("Email"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),i(p,{type:"text",error:t.$page.props.errors.email,modelValue:t.form.email,"onUpdate:modelValue":e[3]||(e[3]=r=>t.form.email=r)},null,8,["error","modelValue"])]),o("div",D,[i(n,null,{default:l(()=>e[21]||(e[21]=[a("Address"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),i(C,{error:t.$page.props.errors.address,modelValue:t.form.address,"onUpdate:modelValue":e[4]||(e[4]=r=>t.form.address=r)},null,8,["error","modelValue"])])])]),_:1}),i(_,null,{title:l(()=>e[22]||(e[22]=[a("Centre Photos")])),content:l(()=>[o("div",U,[u(o("div",null,[i(n,null,{default:l(()=>e[23]||(e[23]=[a("Centre Front View (1 Image)")])),_:1}),o("div",{class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:e[5]||(e[5]=(...r)=>t.change_front&&t.change_front(...r)),onDragover:e[6]||(e[6]=(...r)=>t.dragover_front&&t.dragover_front(...r)),onDrop:e[7]||(e[7]=(...r)=>t.drop_front&&t.drop_front(...r))},[o("div",H,[e[26]||(e[26]=o("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[o("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),o("div",P,[o("label",R,[e[24]||(e[24]=a("Click here ")),o("input",S,null,512)]),e[25]||(e[25]=o("p",{class:"pl-1"},"or drag and drop an image",-1))]),e[27]||(e[27]=o("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1))])],32)],512),[[f,t.show_front_upload]]),u(o("div",null,[i(n,null,{default:l(()=>e[28]||(e[28]=[a("Centre Inside View (Max: 5 Images)")])),_:1}),o("div",{class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:e[8]||(e[8]=(...r)=>t.change_inside&&t.change_inside(...r)),onDragover:e[9]||(e[9]=(...r)=>t.dragover_inside&&t.dragover_inside(...r)),onDrop:e[10]||(e[10]=(...r)=>t.drop_inside&&t.drop_inside(...r))},[o("div",E,[e[31]||(e[31]=o("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[o("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),o("div",O,[o("label",T,[e[29]||(e[29]=a("Click here ")),o("input",A,null,512)]),e[30]||(e[30]=o("p",{class:"pl-1"},"or drag and drop an image",-1))]),e[32]||(e[32]=o("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1))])],32)],512),[[f,t.show_inside_upload]])]),u(o("div",F,[o("div",null,[i(n,null,{default:l(()=>e[33]||(e[33]=[a("Crop Image")])),_:1}),o("div",N,[o("img",{class:"text-center image",ref:"input",src:t.image},null,8,G)])]),o("div",null,[o("div",z,[o("div",J,[i(n,null,{default:l(()=>e[34]||(e[34]=[a(" Image Preview ")])),_:1}),e[35]||(e[35]=o("div",{class:"preview h-44 w-44"},null,-1))]),o("div",W,[o("div",Y,[i(m,{class:"py-1 px-2 rounded shadow",onClick:e[11]||(e[11]=r=>t.select_cropped_image()),title:"Select cropped image"},{default:l(()=>e[36]||(e[36]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 13l4 4L19 7"})],-1)])),_:1}),i(m,{class:"py-1 px-2 rounded shadow",onClick:e[12]||(e[12]=r=>t.reselect_image()),title:"Reselect an image"},{default:l(()=>e[37]||(e[37]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])),_:1})])])])])],512),[[f,t.show_image]]),o("div",K,[u(o("div",Q,[(w(!0),v(x,null,$(t.form.image_list,(r,y)=>(w(),v("div",{class:"relative h-32 w-32 mr-3 mt-3 text-center shadow-sm",key:y},[o("div",{class:"absolute bg-red-500 p-2 shadow rounded-full text-white z-10 cursor-pointer hover:bg-red-700",style:{top:"-8px",right:"-8px"},onClick:re=>t.delete_cropped_image(y)},e[38]||(e[38]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)]),8,X),o("img",{src:r.image_path,class:"rounded-lg",alt:""},null,8,q),i(n,null,{default:l(()=>[a(B(r.image_type),1)]),_:2},1024)]))),128))],512),[[f,t.form.image_list.length]])])]),_:1}),i(_,null,{content:l(()=>[o("div",Z,[o("div",ee,[i(n,null,{default:l(()=>e[39]||(e[39]=[a("Active")])),_:1}),i(k,{modelValue:t.form.active,"onUpdate:modelValue":e[13]||(e[13]=r=>t.form.active=r)},null,8,["modelValue"])]),o("div",te,[i(m,{variant:"outline",onClick:e[14]||(e[14]=r=>t.$inertia.get(t.route("centres")))},{default:l(()=>e[40]||(e[40]=[a("Cancel")])),_:1}),i(m,{onClick:t.submit},{default:l(()=>e[41]||(e[41]=[a("Save")])),_:1},8,["onClick"])])])]),_:1})]),_:1})],64)}}});export{Ke as default};
