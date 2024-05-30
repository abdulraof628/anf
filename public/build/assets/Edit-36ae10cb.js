import{o as d,c,a as n,u as w,w as l,F as v,L as $,H as C,d as e,l as j,h as a,v as h,n as m,m as B,e as b,t as y,p,g as i}from"./app-92b0f606.js";import{B as M}from"./Authenticated-cdd1b3d5.js";import{B as g}from"./Button-616dc8db.js";import{b as k}from"./vue3-perfect-scrollbar-d969979c.js";import{C as x}from"./cropper.esm-d52b8bda.js";import"./ApplicationLogo-c5556bcd.js";import"./XIcon-d8456978.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./moment-a9aaa855.js";const L={class:"md:grid md:grid-cols-2"},V={class:"md:mt-0 md:col-span-2"},D={class:"px-4 py-5 space-y-6 sm:p-6"},U={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},E={class:"sm:row-span-3"},I={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},O=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Centre Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),H={class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},R={class:"mb-4"},P=e("label",{for:"centre_name",class:"block text-sm text-gray-700 font-bold"},[i(" Centre Name "),e("span",{class:"text-red-500"},"*")],-1),S={class:"mt-1 flex rounded-md shadow-sm"},T={class:"mb-4"},F=e("label",{for:"centre_country",class:"block text-sm text-gray-700 font-bold"},[i(" Centre Country "),e("span",{class:"text-red-500"},"*")],-1),N={class:"mt-1 flex rounded-md shadow-sm"},z=e("option",{value:""},"Select a country",-1),A=["value"],G={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},J={class:"mb-4"},Y=e("label",{for:"centre_contact",class:"block text-sm text-gray-700 font-bold"},[i(" Centre Contact Number "),e("span",{class:"text-red-500"},"*")],-1),W={class:"mt-1 flex rounded-md shadow-sm"},X={class:"mb-4"},q=e("label",{for:"centre_email",class:"block text-sm text-gray-700 font-bold"}," Centre Email ",-1),K={class:"mt-1 flex rounded-md shadow-sm"},Q={class:"grid grid-cols-1 gap-4"},Z={class:"mb-4"},ee=e("label",{for:"centre_address",class:"block text-sm text-gray-700 font-bold"},[i(" Centre Address "),e("span",{class:"text-red-500"},"*")],-1),te={class:"mt-1"},se={class:"grid grid-rows-2 grid-cols-1 grid-flow-col gap-4"},oe={class:"sm:row-span-3"},re={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ie=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Centre View"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),ae={class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},ne={class:"mb-4"},le=e("label",{class:"block text-sm text-gray-700 font-bold"},[i(" Centre Front View ("),e("span",{class:"text-blue-500"},"1 Image"),i(")")],-1),de={class:"space-y-1 text-center"},ce=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),me={class:"flex text-sm text-gray-600"},pe={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},_e={ref:"front_image",id:"file",class:"sr-only",type:"file",accept:"image/*"},he=e("p",{class:"pl-1"},"or drag and drop an image",-1),ge=e("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1),ue={class:"mb-4"},fe=e("label",{class:"block text-sm text-gray-700 font-bold"},[i(" Centre Inside View (Max: "),e("span",{class:"text-blue-500"},"5 Images"),i(")")],-1),ve={class:"space-y-1 text-center"},we=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),be={class:"flex text-sm text-gray-600"},ye={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},xe={ref:"inside_image",id:"file",class:"sr-only",type:"file",accept:"image/*"},ke=e("p",{class:"pl-1"},"or drag and drop an image",-1),$e=e("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1),Ce={class:"flex flex-wrap space-y-4 sm:space-x-6"},je={class:"overflow-x-auto"},Be=e("label",{class:"block text-sm text-gray-900 font-bold"}," Crop Image",-1),Me={class:"w-96 h-60 mt-1"},Le=["src"],Ve={class:""},De={class:"flex flex-row justify-center"},Ue=e("div",{class:"flex-column text-center"},[e("label",{class:"block text-sm text-gray-900 font-bold"}," Image Preview "),e("div",{class:"preview h-52 w-96 mt-1"})],-1),Ee={class:"flex-column pl-1 pt-6"},Ie={class:"flex flex-col space-y-1"},Oe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 13l4 4L19 7"})],-1),He=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),Re={class:"flex flex-wrap space-y-4 sm:space-x-6"},Pe={class:"sm:col-span-2 self-center flex flex-wrap gap-4 py-3"},Se=["onClick"],Te=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),Fe=[Te],Ne=["src"],ze={for:"",class:"text-sm capitalize text-slate-500"},Ae={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Ge={class:"flex items-center justify-between"},Je={class:"flex space-x-2"},Ye=e("label",{for:"",class:"block text-sm text-gray-700"},"Active",-1),We={class:"flex space-x-2"},u=window.URL||window.webkitURL,Xe=/^image\/\w+$/;let f=null;const qe={components:{Link:$,Toggle:k,Cropper:x},data(){return{data:{type:Object,default:()=>({})},checking_email:!1,show_front_upload:!0,show_inside_upload:!0,show_image:!1,image:"",email_exist:this.$page.props.email_exist?this.$page.props.email_exist:"",form:{centre_id:this.$page.props.centre_info?this.$page.props.centre_info.ID:"",centre_country:this.$page.props.centre_info.country_id!=0?this.$page.props.centre_info.country_id:"",centre_name:this.$page.props.centre_info?this.$page.props.centre_info.label:"",centre_contact_number:this.$page.props.centre_info?this.$page.props.centre_info.phone:"",centre_email:this.$page.props.centre_info?this.$page.props.centre_info.email:"",centre_address:this.$page.props.centre_info?this.$page.props.centre_info.address:"",centre_active:this.$page.props.centre_info?this.$page.props.centre_info.is_active:!1,principal_user_id:this.$page.props.centre_info?this.$page.props.centre_info.principal_user_id:"",image_list:this.$page.props.centre_images?this.$page.props.centre_images:[],images_to_delete:[]},search:{email:this.$page.props.email_exist?this.$page.props.email_exist.user_email:""}}},mounted(){const o=this.$refs.input;o&&(f=new x(o,{aspectRatio:1,cropBoxResizable:!1,cropBoxMovable:!1,viewMode:1,dragMode:"move",movable:!0,rotatable:!0,preview:".preview",minCropBoxWidth:500,minCropBoxHeight:500,modal:!0,background:!1}))},watch:{image:{handler(o){o&&f.replace(o)},deep:!0}},methods:{submit(){this.$inertia.post(route("centres.update"),this.form,{preserveState:!0})},read(o,t){return new Promise((s,r)=>{if(!o){s();return}Xe.test(o.type)?u?s({loaded:!0,name:o.name,type:o.type,url:u.createObjectURL(o)}):r(new Error("Your browser is not supported.")):r(new Error("Please select a valid image file."))})},change_front({target:o}){const{files:t}=o;t&&t.length>0&&this.read(t[0],o).then(s=>{this.image=s.url,this.show_front_upload=!1,this.show_inside_upload=!1,this.show_image=!0,this.update(s,"front")}).catch(this.alert)},dragover_front(o){o.preventDefault()},drop_front(o){const{files:t}=o.dataTransfer;o.preventDefault(),t&&t.length>0&&this.read(t[0],o).then(s=>{this.front_image=s.url,this.show_front_upload=!1,this.show_inside_upload=!1,this.update(s)}).catch(this.alert)},change_inside({target:o}){const{files:t}=o;t&&t.length>0&&this.read(t[0],o).then(s=>{this.image=s.url,this.show_front_upload=!1,this.show_inside_upload=!1,this.show_image=!0,this.update(s,"inside")}).catch(this.alert)},dragover_inside(o){o.preventDefault()},drop_inside(o){const{files:t}=o.dataTransfer;o.preventDefault(),t&&t.length>0&&this.read(t[0],o).then(s=>{this.front_image=s.url,this.show_front_upload=!1,this.show_inside_upload=!1,this.update(s)}).catch(this.alert)},alert(o){window.alert(o&&o.message?o.message:o)},update(o,t){Object.assign(this.data,o),Object.assign(this.data,{view_type:t})},reselect_image(){this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.front_image.value=null,this.$refs.inside_image.value=null},select_cropped_image(){const o=this.form.image_list.filter(s=>{if(s.image_type=="front")return!0}),t=this.form.image_list.filter(s=>{if(s.image_type=="inside")return!0});this.data.view_type=="front"?o.length<1?(f.getCroppedCanvas().toBlob(s=>{var r=u.createObjectURL(s),_=this.blobToFile(s,this.data.name);this.form.image_list.unshift({image_path:r,image_file:_,image_type:this.data.view_type})},"image/jpeg",.1),this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.front_image.value=null):(alert("Only 1 front view image is allowed!"),this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.front_image.value=null):this.data.view_type=="inside"&&(t.length<5?(f.getCroppedCanvas().toBlob(s=>{var r=u.createObjectURL(s);this.form.image_list.push({name:this.data.name,image_path:r,image_file:s,image_type:this.data.view_type})},"image/jpeg",.1),this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.inside_image.value=null):(alert("Only 5 inside view image is allowed!"),this.show_front_upload=!0,this.show_inside_upload=!0,this.show_image=!1,this.$refs.inside_image.value=null))},delete_cropped_image(o){this.form.image_list[o].id&&this.form.images_to_delete.push({image_id:this.form.image_list[o].id}),this.form.image_list.splice(o,1)},blobToFile(o,t){return o.lastModifiedDate=new Date,o.name=t,o}}},nt=Object.assign(qe,{__name:"Edit",setup(o){return(t,s)=>(d(),c(v,null,[n(w(C),{title:"Centres"}),n(M,null,{header:l(()=>[]),default:l(()=>[e("div",L,[e("div",V,[e("form",{onSubmit:s[14]||(s[14]=j((...r)=>t.submit&&t.submit(...r),["prevent"]))},[e("div",D,[e("div",U,[e("div",E,[e("div",I,[O,e("div",H,[e("div",R,[P,e("div",S,[a(e("input",{type:"text",name:"centre_name",id:"centre_name",class:m(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.centre_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[0]||(s[0]=r=>t.form.centre_name=r),autocomplete:"off"},null,2),[[h,t.form.centre_name]])])]),e("div",T,[F,e("div",N,[a(e("select",{type:"text",name:"centre_country",id:"centre_country",class:m(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.centre_country?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[1]||(s[1]=r=>t.form.centre_country=r),autocomplete:"none"},[z,(d(!0),c(v,null,b(t.$page.props.countries,r=>(d(),c("option",{value:r.id},y(r.name),9,A))),256))],2),[[B,t.form.centre_country]])])])]),e("div",G,[e("div",J,[Y,e("div",W,[a(e("input",{type:"text",name:"centre_contact",id:"centre_contact",class:m(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.centre_contact_number?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[2]||(s[2]=r=>t.form.centre_contact_number=r),autocomplete:"off"},null,2),[[h,t.form.centre_contact_number]])])]),e("div",X,[q,e("div",K,[a(e("input",{type:"email",name:"centre_email",id:"centre_email",class:m(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.centre_email?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[3]||(s[3]=r=>t.form.centre_email=r),autocomplete:"off"},null,2),[[h,t.form.centre_email]])])])]),e("div",Q,[e("div",Z,[ee,e("div",te,[a(e("textarea",{id:"centre_address",name:"centre_address",rows:"3",class:m(["shadow-sm focus:ring-0 focus:border-indigo-300 mt-1 block w-full sm:text-sm border rounded-md",t.$page.props.errors.centre_address?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[4]||(s[4]=r=>t.form.centre_address=r),autocomplete:"off"},null,2),[[h,t.form.centre_address]])])])])])])]),e("div",se,[e("div",oe,[e("div",re,[ie,e("div",ae,[a(e("div",ne,[le,e("div",{class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:s[5]||(s[5]=(...r)=>t.change_front&&t.change_front(...r)),onDragover:s[6]||(s[6]=(...r)=>t.dragover_front&&t.dragover_front(...r)),onDrop:s[7]||(s[7]=(...r)=>t.drop_front&&t.drop_front(...r))},[e("div",de,[ce,e("div",me,[e("label",pe,[i("Click here "),e("input",_e,null,512)]),he]),ge])],32)],512),[[p,t.show_front_upload]]),a(e("div",ue,[fe,e("div",{class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:s[8]||(s[8]=(...r)=>t.change_inside&&t.change_inside(...r)),onDragover:s[9]||(s[9]=(...r)=>t.dragover_inside&&t.dragover_inside(...r)),onDrop:s[10]||(s[10]=(...r)=>t.drop_inside&&t.drop_inside(...r))},[e("div",ve,[we,e("div",be,[e("label",ye,[i("Click here "),e("input",xe,null,512)]),ke]),$e])],32)],512),[[p,t.show_inside_upload]])]),e("div",Ce,[a(e("div",je,[Be,e("div",Me,[e("img",{class:"image",ref:"input",src:t.image},null,8,Le)])],512),[[p,t.show_image]]),a(e("div",Ve,[e("div",De,[Ue,e("div",Ee,[e("div",Ie,[n(g,{type:"button",class:"py-1 px-2 rounded shadow",onClick:s[11]||(s[11]=r=>t.select_cropped_image()),title:"Select cropped image"},{default:l(()=>[Oe]),_:1}),n(g,{type:"button",class:"py-1 px-2 rounded shadow",onClick:s[12]||(s[12]=r=>t.reselect_image()),title:"Reselect an image"},{default:l(()=>[He]),_:1})])])])],512),[[p,t.show_image]])]),e("div",Re,[a(e("div",Pe,[(d(!0),c(v,null,b(t.form.image_list,(r,_)=>(d(),c("div",{class:"relative h-32 w-32 rounded mr-3 mt-3 text-center shadow-sm shadow-gray-400 border",key:_},[e("div",{class:"absolute bg-red-500 p-2 shadow rounded-full text-white z-10 cursor-pointer hover:bg-red-700",style:{top:"-8px",right:"-8px"},onClick:Ke=>t.delete_cropped_image(_)},Fe,8,Se),e("img",{src:r.image_path,class:"rounded-lg",alt:""},null,8,Ne),e("label",ze,y(r.image_type),1)]))),128))],512),[[p,t.form.image_list.length]])])])])]),e("div",Ae,[e("div",Ge,[e("div",Je,[Ye,n(w(k),{modelValue:t.form.centre_active,"onUpdate:modelValue":s[13]||(s[13]=r=>t.form.centre_active=r),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",We,[n(g,{buttonType:"gray",route:t.route("centres")},{default:l(()=>[i("Cancel")]),_:1},8,["route"]),n(g,{type:"submit"},{default:l(()=>[i("Save")]),_:1})])])])])],32)])])]),_:1})],64))}});export{nt as default};
