import{c as i,b as f,u as w,w as u,F as m,H as y,L as k,o as r,d as e,e as x,f as n,l as b,n as l,g as _,h as c,t as p,j as h,k as d}from"./app-abb14225.js";import{B as $}from"./Authenticated-cf6f3e2c.js";import{B as v}from"./Button-8060ba77.js";import{b as C}from"./toggle-5ed297c9.js";import{s as F}from"./multiselect-eca2bb49.js";import"./ApplicationLogo-86d866bd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-9a0666f4.js";import"./TimeAgo-fee1d65d.js";import"./moment-fbc5633a.js";const L={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},P={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},S={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},V={class:"sm:row-span-3"},M={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},T=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Resource Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),U={class:"mb-4"},j=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"},[d(" Title "),e("span",{class:"text-red-500"},"*")],-1),D={class:"mt-1 flex rounded-md shadow-sm"},N={class:"mb-4"},z=e("label",{for:"programme_id",class:"block text-sm font-bold text-gray-700"},[d(" Programme "),e("span",{class:"text-red-500"},"*")],-1),E={class:"mt-1 flex rounded-md shadow-sm"},O=["disabled"],W=e("option",{value:""},"Please Select",-1),H=["value"],R={class:"mb-4"},Z=e("label",{for:"level_id",class:"block text-sm font-bold text-gray-700"},[d(" Level "),e("span",{class:"text-red-500"},"*")],-1),A={class:"mt-1 flex rounded-md shadow-sm"},I=e("option",{value:""},"Please Select",-1),q=["value"],G={class:"mb-4"},J=e("label",{for:"language_id",class:"block text-sm font-bold text-gray-700"},[d(" Language "),e("span",{class:"text-red-500"},"*")],-1),K={class:"mt-1 flex rounded-md shadow-sm"},Q=e("option",{value:""},"Please Select",-1),X=["value"],Y={class:"mb-4"},ee=e("label",{for:"media_type_id",class:"block text-sm font-bold text-gray-700"},[d(" Media Type "),e("span",{class:"text-red-500"},"*")],-1),oe={class:"mt-1 flex rounded-md shadow-sm"},se=e("option",{value:""},"Please Select",-1),te=["value"],ie={key:0,class:"mb-4"},re=e("label",{for:"embed_link",class:"block text-sm font-bold text-gray-700"},[d(" Embed Link "),e("span",{class:"text-red-500"},"*")],-1),de={class:"mt-1 flex rounded-md shadow-sm"},le={key:1,class:"mb-4"},ae=e("label",{for:"",class:"block text-sm font-bold text-gray-700"},[d(" File "),e("span",{class:"text-red-500"},"*")],-1),ne={key:0,class:"mt-1 block focus:ring-0 focus:border-gray-300"},me=e("span",{class:"sr-only"},"Browse File",-1),pe={key:1,class:"mt-1 mb-5 rounded-md bg-[#F5F7FB] py-4 px-4"},fe={class:"flex items-center justify-between"},ue={class:"truncate pr-3 text-base font-medium text-[#07074D]"},_e=e("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z",fill:"currentColor"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z",fill:"currentColor"})],-1),ce=[_e],ge=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),be={class:"flex items-center justify-end"},he={class:"flex space-x-2"},ve={components:{Head:y,Link:k,Toggle:C,Multiselect:F},data(){return{list:{levels:[]},show_upload_file:!1,form:{id:this.$page.props.resource_info.id?this.$page.props.resource_info.id:"",title:this.$page.props.resource_info.title?this.$page.props.resource_info.title:"",programme_id:this.$page.props.resource_info.programme_id?this.$page.props.resource_info.programme_id:"",level_id:this.$page.props.resource_info.level?this.$page.props.resource_info.level:"",language_id:this.$page.props.resource_info.language_id?this.$page.props.resource_info.language_id:"",media_type_id:this.$page.props.resource_info.media_type?this.$page.props.resource_info.media_type:"",embed_link:this.$page.props.resource_info.content?this.$page.props.resource_info.content:"",embed_file:"",delete_previous_file:!1}}},watch:{"form.programme_id":{handler(){this.form.programme_id!=""&&axios.get(route("get_programme_levels",this.form.programme_id)).then(a=>{this.form.level_id="",this.list.levels=a.data})},deep:!0},"form.media_type_id":{handler(){this.form.embed_link="",this.form.embed_file="",this.form.delete_previous_file=!0,(this.form.media_type_id==2||this.form.media_type_id==3)&&(this.show_upload_file=!0)}}},methods:{submit(){this.$inertia.post(route("teacher_resources.update"),this.form,{preserveState:!0})},uploadFile(a){const o=a.target.files[0];this.form.media_type_id==2&&(o.type=="application/pdf"||o.name.toLowerCase().endsWith(".pdf")?this.form.embed_file=o:(alert("Only PDF File allowed!"),this.$refs.file_input.value="",this.form.embed_file="")),this.form.media_type_id==3&&(o.type==="application/vnd.ms-powerpoint"||o.type==="application/vnd.openxmlformats-officedocument.presentationml.presentation"||o.name.toLowerCase().endsWith(".ppt")||o.name.toLowerCase().endsWith(".pptx")?this.form.embed_file=o:(alert("Only PowerPoint Sildeshow File allowed!"),this.$refs.file_input.value="",this.form.embed_file=""))},deletePreviousFile(){this.form.embed_link="",this.form.delete_previous_file=!0,this.show_upload_file=!0}},created(){axios.get(route("get_programme_levels",this.form.programme_id)).then(a=>{this.list.levels=a.data}),this.form.embed_link||(this.show_upload_file=!0)}},Se=Object.assign(ve,{__name:"Edit",setup(a){return(o,t)=>(r(),i(m,null,[f(w(y),{title:"Teacher Resources"}),f($,null,{header:u(()=>[]),default:u(()=>[e("div",L,[e("div",B,[e("form",{onSubmit:t[8]||(t[8]=x((...s)=>o.submit&&o.submit(...s),["prevent"]))},[e("div",P,[e("div",S,[e("div",V,[e("div",M,[T,e("div",U,[j,e("div",D,[n(e("input",{type:"text",name:"title",id:"title",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.title?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.title=s),autocomplete:"off"},null,2),[[b,o.form.title]])])]),e("div",N,[z,e("div",E,[n(e("select",{name:"programme_id",id:"programme_id",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.programme_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.programme_id=s),autocomplete:"off",disabled:o.disable_class_levels},[W,(r(!0),i(m,null,c(o.$page.props.programmes,(s,g)=>(r(),i("option",{value:s.id,key:s.id},p(s.name),9,H))),128))],10,O),[[_,o.form.programme_id]])])]),e("div",R,[Z,e("div",A,[n(e("select",{name:"level_id",id:"level_id",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.level_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[2]||(t[2]=s=>o.form.level_id=s),autocomplete:"off"},[I,(r(!0),i(m,null,c(o.list.levels,(s,g)=>(r(),i("option",{value:s.level,key:s},p(s.level),9,q))),128))],2),[[_,o.form.level_id]])])]),e("div",G,[J,e("div",K,[n(e("select",{name:"language_id",id:"language_id",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.language_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[3]||(t[3]=s=>o.form.language_id=s),autocomplete:"off"},[Q,(r(!0),i(m,null,c(o.$page.props.languages,(s,g)=>(r(),i("option",{value:s.id,key:s.id},p(s.name),9,X))),128))],2),[[_,o.form.language_id]])])]),e("div",Y,[ee,e("div",oe,[n(e("select",{name:"media_type_id",id:"media_type_id",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.media_type_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[4]||(t[4]=s=>o.form.media_type_id=s),autocomplete:"off"},[se,(r(!0),i(m,null,c(o.$page.props.media_types,(s,g)=>(r(),i("option",{value:s.id,key:s.id},p(s.name),9,te))),128))],2),[[_,o.form.media_type_id]])])]),o.form.media_type_id==1?(r(),i("div",ie,[re,e("div",de,[n(e("textarea",{type:"text",name:"embed_link",id:"embed_link",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.embed_link?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[5]||(t[5]=s=>o.form.embed_link=s),autocomplete:"off"},null,2),[[b,o.form.embed_link]])])])):h("",!0),o.form.media_type_id==2||o.form.media_type_id==3?(r(),i("div",le,[ae,o.show_upload_file?(r(),i("label",ne,[me,e("input",{type:"file",ref:"file_input",class:l(["focus:ring-0 border rounded-md block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 focus:outline-none",o.$page.props.errors.embed_file?"border-red-300":"border-gray-300"]),onChange:t[6]||(t[6]=(...s)=>o.uploadFile&&o.uploadFile(...s))},null,34)])):(r(),i("div",pe,[e("div",fe,[e("span",ue,p(o.form.embed_link),1),e("button",{type:"button",class:"text-indigo",onClick:t[7]||(t[7]=(...s)=>o.deletePreviousFile&&o.deletePreviousFile(...s))},ce)])]))])):h("",!0),ge,e("div",be,[e("div",he,[f(v,{buttonType:"gray",route:o.route("teacher_resources")},{default:u(()=>[d("Cancel")]),_:1},8,["route"]),f(v,{type:"submit"},{default:u(()=>[d("Save")]),_:1})])])])])])])],32)])])]),_:1})],64))}});export{Se as default};
