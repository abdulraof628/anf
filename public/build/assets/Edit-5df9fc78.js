import{o as i,c as r,a as p,u as w,w as f,F as n,H as y,L as k,d as e,l as x,h as a,v as b,n as l,m as u,e as _,t as m,q as h,g as d}from"./app-71950877.js";import{B as $}from"./Authenticated-208afc3b.js";import{B as v}from"./Button-894e9e1f.js";import{s as C}from"./multiselect-bff7d2a3.js";import"./ApplicationLogo-8610a79e.js";import"./XIcon-4055b9c3.js";import"./perfect-scrollbar.esm-e549b042.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-0b8c69ea.js";import"./moment-55cb88ed.js";const F={class:"md:grid md:grid-cols-2"},L={class:"md:mt-0 md:col-span-2"},B={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},P={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},S={class:"sm:row-span-3"},V={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},M=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Resource Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),T={class:"mb-4"},U=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"},[d(" Title "),e("span",{class:"text-red-500"},"*")],-1),D={class:"mt-1 flex rounded-md shadow-sm"},N={class:"mb-4"},j=e("label",{for:"programme_id",class:"block text-sm font-bold text-gray-700"},[d(" Programme "),e("span",{class:"text-red-500"},"*")],-1),z={class:"mt-1 flex rounded-md shadow-sm"},E=["disabled"],O=e("option",{value:""},"Please Select",-1),W=["value"],H={class:"mb-4"},R=e("label",{for:"level_id",class:"block text-sm font-bold text-gray-700"},[d(" Level "),e("span",{class:"text-red-500"},"*")],-1),Z={class:"mt-1 flex rounded-md shadow-sm"},q=e("option",{value:""},"Please Select",-1),A=["value"],I={class:"mb-4"},G=e("label",{for:"language_id",class:"block text-sm font-bold text-gray-700"},[d(" Language "),e("span",{class:"text-red-500"},"*")],-1),J={class:"mt-1 flex rounded-md shadow-sm"},K=e("option",{value:""},"Please Select",-1),Q=["value"],X={class:"mb-4"},Y=e("label",{for:"media_type_id",class:"block text-sm font-bold text-gray-700"},[d(" Media Type "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},oe=e("option",{value:""},"Please Select",-1),se=["value"],te={key:0,class:"mb-4"},ie=e("label",{for:"embed_link",class:"block text-sm font-bold text-gray-700"},[d(" Embed Link "),e("span",{class:"text-red-500"},"*")],-1),re={class:"mt-1 flex rounded-md shadow-sm"},de={key:1,class:"mb-4"},le=e("label",{for:"",class:"block text-sm font-bold text-gray-700"},[d(" File "),e("span",{class:"text-red-500"},"*")],-1),ae={key:0,class:"mt-1 block focus:ring-0 focus:border-gray-300"},ne=e("span",{class:"sr-only"},"Browse File",-1),me={key:1,class:"mt-1 mb-5 rounded-md bg-[#F5F7FB] py-4 px-4"},pe={class:"flex items-center justify-between"},fe={class:"truncate pr-3 text-base font-medium text-[#07074D]"},ue=e("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z",fill:"currentColor"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z",fill:"currentColor"})],-1),_e=[ue],ce=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),ge={class:"flex items-center justify-end"},be={class:"flex space-x-2"},he={components:{Head:y,Link:k,Multiselect:C},data(){return{list:{levels:[]},show_upload_file:!1,form:{id:this.$page.props.resource_info.id?this.$page.props.resource_info.id:"",title:this.$page.props.resource_info.title?this.$page.props.resource_info.title:"",programme_id:this.$page.props.resource_info.programme_id?this.$page.props.resource_info.programme_id:"",level_id:this.$page.props.resource_info.level?this.$page.props.resource_info.level:"",language_id:this.$page.props.resource_info.language_id?this.$page.props.resource_info.language_id:"",media_type_id:this.$page.props.resource_info.media_type?this.$page.props.resource_info.media_type:"",embed_link:this.$page.props.resource_info.content?this.$page.props.resource_info.content:"",embed_file:"",delete_previous_file:!1}}},watch:{"form.media_type_id":{handler(){this.form.embed_link="",this.form.embed_file="",this.form.delete_previous_file=!0,(this.form.media_type_id==2||this.form.media_type_id==3)&&(this.show_upload_file=!0)}}},methods:{submit(){this.$inertia.post(route("teacher_resources.update"),this.form,{preserveState:!0})},uploadFile(g){const o=g.target.files[0];this.form.media_type_id==2&&(o.type=="application/pdf"||o.name.toLowerCase().endsWith(".pdf")?this.form.embed_file=o:(alert("Only PDF File allowed!"),this.$refs.file_input.value="",this.form.embed_file="")),this.form.media_type_id==3&&(o.type==="application/vnd.ms-powerpoint"||o.type==="application/vnd.openxmlformats-officedocument.presentationml.presentation"||o.name.toLowerCase().endsWith(".ppt")||o.name.toLowerCase().endsWith(".pptx")?this.form.embed_file=o:(alert("Only PowerPoint Sildeshow File allowed!"),this.$refs.file_input.value="",this.form.embed_file=""))},deletePreviousFile(){this.form.embed_link="",this.form.delete_previous_file=!0,this.show_upload_file=!0}}},Pe=Object.assign(he,{__name:"Edit",setup(g){return(o,t)=>(i(),r(n,null,[p(w(y),{title:"Teacher Resources"}),p($,null,{header:f(()=>[]),default:f(()=>[e("div",F,[e("div",L,[e("form",{onSubmit:t[8]||(t[8]=x((...s)=>o.submit&&o.submit(...s),["prevent"]))},[e("div",B,[e("div",P,[e("div",S,[e("div",V,[M,e("div",T,[U,e("div",D,[a(e("input",{type:"text",name:"title",id:"title",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.title?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.title=s),autocomplete:"off"},null,2),[[b,o.form.title]])])]),e("div",N,[j,e("div",z,[a(e("select",{name:"programme_id",id:"programme_id",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.programme_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.programme_id=s),autocomplete:"off",disabled:o.disable_class_levels},[O,(i(!0),r(n,null,_(o.$page.props.programmes,(s,c)=>(i(),r("option",{value:s.id,key:s.id},m(s.name),9,W))),128))],10,E),[[u,o.form.programme_id]])])]),e("div",H,[R,e("div",Z,[a(e("select",{name:"level_id",id:"level_id",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.level_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[2]||(t[2]=s=>o.form.level_id=s),autocomplete:"off"},[q,(i(!0),r(n,null,_(o.$page.props.levels,(s,c)=>(i(),r("option",{value:s.id,key:s},m(s.name),9,A))),128))],2),[[u,o.form.level_id]])])]),e("div",I,[G,e("div",J,[a(e("select",{name:"language_id",id:"language_id",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.language_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[3]||(t[3]=s=>o.form.language_id=s),autocomplete:"off"},[K,(i(!0),r(n,null,_(o.$page.props.languages,(s,c)=>(i(),r("option",{value:s.id,key:s.id},m(s.name),9,Q))),128))],2),[[u,o.form.language_id]])])]),e("div",X,[Y,e("div",ee,[a(e("select",{name:"media_type_id",id:"media_type_id",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.media_type_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[4]||(t[4]=s=>o.form.media_type_id=s),autocomplete:"off"},[oe,(i(!0),r(n,null,_(o.$page.props.media_types,(s,c)=>(i(),r("option",{value:s.id,key:s.id},m(s.name),9,se))),128))],2),[[u,o.form.media_type_id]])])]),o.form.media_type_id==1?(i(),r("div",te,[ie,e("div",re,[a(e("textarea",{type:"text",name:"embed_link",id:"embed_link",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.embed_link?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[5]||(t[5]=s=>o.form.embed_link=s),autocomplete:"off"},null,2),[[b,o.form.embed_link]])])])):h("",!0),o.form.media_type_id==2||o.form.media_type_id==3?(i(),r("div",de,[le,o.show_upload_file?(i(),r("label",ae,[ne,e("input",{type:"file",ref:"file_input",class:l(["focus:ring-0 border rounded-md block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 focus:outline-none",o.$page.props.errors.embed_file?"border-red-300":"border-gray-300"]),onChange:t[6]||(t[6]=(...s)=>o.uploadFile&&o.uploadFile(...s))},null,34)])):(i(),r("div",me,[e("div",pe,[e("span",fe,m(o.form.embed_link),1),e("button",{type:"button",class:"text-indigo",onClick:t[7]||(t[7]=(...s)=>o.deletePreviousFile&&o.deletePreviousFile(...s))},_e)])]))])):h("",!0),ce,e("div",ge,[e("div",be,[p(v,{buttonType:"gray",route:o.route("teacher_resources")},{default:f(()=>[d("Cancel")]),_:1},8,["route"]),p(v,{type:"submit"},{default:f(()=>[d("Save")]),_:1})])])])])])])],32)])])]),_:1})],64))}});export{Pe as default};
